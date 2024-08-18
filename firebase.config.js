import { getAuth, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
import { NextAuthOptions } from "next-auth";
import { FirestoreAdapter } from "@auth/firebase-adapter"

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const options = {
    adapter: FirestoreAdapter(auth),
    providers: [
      // ... other providers if applicable
      google({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
    ],
  };

export { db, options };

// https://authjs.dev/getting-started/adapters/firebase?_gl=1*1tqqesr*_gcl_au*MzM5MzE3NTM1LjE3MTgwNDgwMzguOTAyMDE0MjIyLjE3MjA3MzI0NTAuMTcyMDczMjQ0OQ..