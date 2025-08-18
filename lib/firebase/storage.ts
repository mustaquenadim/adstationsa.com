import {
  ref,
  uploadBytes,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
  listAll,
  getMetadata,
  updateMetadata,
  UploadTask,
  FullMetadata,
} from 'firebase/storage';
import { storage } from './config';

// Upload file to storage
export const uploadFile = async (
  file: File,
  path: string,
  metadata?: any
): Promise<string> => {
  const storageRef = ref(storage, path);
  const snapshot = await uploadBytes(storageRef, file, metadata);
  return await getDownloadURL(snapshot.ref);
};

// Upload file with progress tracking
export const uploadFileWithProgress = (
  file: File,
  path: string,
  onProgress?: (progress: number) => void,
  metadata?: any
): UploadTask => {
  const storageRef = ref(storage, path);
  const uploadTask = uploadBytesResumable(storageRef, file, metadata);

  if (onProgress) {
    uploadTask.on('state_changed', (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      onProgress(progress);
    });
  }

  return uploadTask;
};

// Get download URL for a file
export const getFileDownloadURL = async (path: string): Promise<string> => {
  const storageRef = ref(storage, path);
  return await getDownloadURL(storageRef);
};

// Delete file from storage
export const deleteFile = async (path: string): Promise<void> => {
  const storageRef = ref(storage, path);
  await deleteObject(storageRef);
};

// List all files in a directory
export const listFiles = async (path: string): Promise<{
  items: string[];
  prefixes: string[];
}> => {
  const storageRef = ref(storage, path);
  const result = await listAll(storageRef);
  
  return {
    items: result.items.map(item => item.fullPath),
    prefixes: result.prefixes.map(prefix => prefix.fullPath),
  };
};

// Get file metadata
export const getFileMetadata = async (path: string): Promise<FullMetadata> => {
  const storageRef = ref(storage, path);
  return await getMetadata(storageRef);
};

// Update file metadata
export const updateFileMetadata = async (
  path: string,
  metadata: any
): Promise<FullMetadata> => {
  const storageRef = ref(storage, path);
  return await updateMetadata(storageRef, metadata);
};

// Helper function to generate unique file names
export const generateUniqueFileName = (originalName: string): string => {
  const timestamp = Date.now();
  const randomString = Math.random().toString(36).substring(2, 15);
  const extension = originalName.split('.').pop();
  return `${timestamp}_${randomString}.${extension}`;
};

// Helper function to validate file type and size
export const validateFile = (
  file: File,
  allowedTypes: string[] = [],
  maxSizeInMB: number = 10
): { isValid: boolean; error?: string } => {
  // Check file size
  const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
  if (file.size > maxSizeInBytes) {
    return {
      isValid: false,
      error: `File size must be less than ${maxSizeInMB}MB`,
    };
  }

  // Check file type
  if (allowedTypes.length > 0 && !allowedTypes.includes(file.type)) {
    return {
      isValid: false,
      error: `File type ${file.type} is not allowed. Allowed types: ${allowedTypes.join(', ')}`,
    };
  }

  return { isValid: true };
};
