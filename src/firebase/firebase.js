import { initializeApp } from 'firebase/app';
import { getFunctions } from 'firebase/functions';

// Replace with your Firebase project's config values
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id",
  measurementId: "your-measurement-id"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Functions
const functions = getFunctions(app);

export { functions };
