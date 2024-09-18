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

async function getAnswers(session, needsFormatting) {

  if (session) {
    const userId = session.user.id;
    try {
      const docRef = doc(db, "users", userId);
      const docSnap = await getDoc(docRef);

      const answers = docSnap.data().answers
      let final = [];
      for (const ans of answers) {
        const interpreted = await interpretAnswer(ans, needsFormatting);
        final.push(interpreted);
      }
      return final;
    } catch (error) {
      console.log(error);
    }
    
  }
}

export {saveAnswer, getAnswers}; 