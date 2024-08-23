'use server'
import { db } from "../../firebase.config";
import { doc, setDoc, updateDoc } from 'firebase/firestore';

async function saveAnswer(answers, session) {

  if (session) {
    const userId = session.user.id;
    try {
      const userRef = doc(db, 'users', userId);
      await updateDoc(userRef, answers)
    } catch (error) {
      console.log(error)
    }
    
  }
};

export {saveAnswer}; 