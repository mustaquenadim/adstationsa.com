// Firebase configuration and app instance
export { default as app, auth, db, storage, getAnalyticsInstance } from './config';

// Authentication utilities
export * from './auth';

// Firestore utilities
export * from './firestore';

// Storage utilities
export * from './storage';

// Re-export commonly used Firebase types
export type {
  User,
  UserCredential,
  AuthError,
} from 'firebase/auth';

export type {
  DocumentData,
  QueryDocumentSnapshot,
  Timestamp,
} from 'firebase/firestore';

export type {
  UploadTask,
  FullMetadata,
  StorageError,
} from 'firebase/storage';
