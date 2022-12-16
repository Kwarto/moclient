import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyDR_f3OCmalyuolW6dQCKHdbIbs2322ycs',
  authDomain: 'm-client-f1821.firebaseapp.com',
  projectId: 'm-client-f1821',
  storageBucket: 'm-client-f1821.appspot.com',
  messagingSenderId: '799066833559',
  appId: '1:799066833559:web:59ee52d0f2cc0551e6dfd2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export { auth, db, storage };
