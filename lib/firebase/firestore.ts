import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  DocumentData,
  QueryDocumentSnapshot,
  CollectionReference,
  DocumentReference,
  WhereFilterOp,
  OrderByDirection,
  writeBatch,
  serverTimestamp,
  increment,
  arrayUnion,
  arrayRemove,
} from 'firebase/firestore';
import { db } from './config';

// Generic type for Firestore documents
export interface FirestoreDocument {
  id: string;
  createdAt?: any;
  updatedAt?: any;
}

// Get a document by ID
export const getDocument = async <T = DocumentData>(
  collectionName: string,
  documentId: string
): Promise<T | null> => {
  const docRef = doc(db, collectionName, documentId);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() } as T;
  }
  return null;
};

// Get all documents from a collection
export const getDocuments = async <T = DocumentData>(
  collectionName: string,
  queryConstraints: {
    where?: { field: string; operator: WhereFilterOp; value: any }[];
    orderBy?: { field: string; direction?: OrderByDirection };
    limit?: number;
    startAfter?: QueryDocumentSnapshot;
  } = {}
): Promise<T[]> => {
  const collectionRef = collection(db, collectionName);
  let q = query(collectionRef);

  // Apply where clauses
  if (queryConstraints.where) {
    queryConstraints.where.forEach(({ field, operator, value }) => {
      q = query(q, where(field, operator, value));
    });
  }

  // Apply orderBy
  if (queryConstraints.orderBy) {
    q = query(q, orderBy(queryConstraints.orderBy.field, queryConstraints.orderBy.direction));
  }

  // Apply limit
  if (queryConstraints.limit) {
    q = query(q, limit(queryConstraints.limit));
  }

  // Apply startAfter for pagination
  if (queryConstraints.startAfter) {
    q = query(q, startAfter(queryConstraints.startAfter));
  }

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  } as T));
};

// Add a new document
export const addDocument = async <T = DocumentData>(
  collectionName: string,
  data: Omit<T, 'id' | 'createdAt' | 'updatedAt'>
): Promise<string> => {
  const collectionRef = collection(db, collectionName);
  const timestamp = serverTimestamp();
  
  const docRef = await addDoc(collectionRef, {
    ...data,
    createdAt: timestamp,
    updatedAt: timestamp,
  });
  
  return docRef.id;
};

// Domain-specific helper: save partner
export const savePartner = async (
  data: Omit<any, 'id' | 'createdAt' | 'updatedAt'>
): Promise<string> => {
  return addDocument('partners', data);
};

// Update a document
export const updateDocument = async <T = DocumentData>(
  collectionName: string,
  documentId: string,
  data: Partial<Omit<T, 'id' | 'createdAt'>>
): Promise<void> => {
  const docRef = doc(db, collectionName, documentId);
  await updateDoc(docRef, {
    ...data,
    updatedAt: serverTimestamp(),
  });
};

// Delete a document
export const deleteDocument = async (
  collectionName: string,
  documentId: string
): Promise<void> => {
  const docRef = doc(db, collectionName, documentId);
  await deleteDoc(docRef);
};

// Batch write operations
export const batchWrite = async (operations: {
  type: 'add' | 'update' | 'delete';
  collectionName: string;
  documentId?: string;
  data?: any;
}[]): Promise<void> => {
  const batch = writeBatch(db);

  operations.forEach(({ type, collectionName, documentId, data }) => {
    if (type === 'add') {
      const docRef = doc(collection(db, collectionName));
      batch.set(docRef, {
        ...data,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
    } else if (type === 'update' && documentId) {
      const docRef = doc(db, collectionName, documentId);
      batch.update(docRef, {
        ...data,
        updatedAt: serverTimestamp(),
      });
    } else if (type === 'delete' && documentId) {
      const docRef = doc(db, collectionName, documentId);
      batch.delete(docRef);
    }
  });

  await batch.commit();
};

// Helper functions for common Firestore operations
export const firestoreHelpers = {
  serverTimestamp,
  increment,
  arrayUnion,
  arrayRemove,
};
