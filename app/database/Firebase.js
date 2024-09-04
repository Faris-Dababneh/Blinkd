'use server'
import { db } from "../../firebase.config";
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import {interpretAnswer} from './api/Gemini';

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

async function getAnswer(answer, session) {

  if (session) {
    const userId = session.user.id;
    try {
      const docRef = doc(db, "users", userId);
      const docSnap = await getDoc(docRef);

      const answers = docSnap.data().answers
      for (const ans of answers) {
        if (answer in ans) { 
          interpretAnswer(JSON.stringify(ans[answer])); // Check if array is the date answer, then format it. Then check if it has multiple answers (science, technology, world events, etc.) and extract those

        }
        
      }
    } catch (error) {
      console.log(error);
    }
    
  }
}

export {saveAnswer, getAnswer}; 