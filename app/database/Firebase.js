'use server'
import { db } from "../../firebase.config";
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import {interpretAnswer} from './api/Gemini';
import { useSession } from 'next-auth/react';

async function saveAnswer(session, answers) {

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

async function changeAnswer(session, answer, answerName, index) {
  if (session) {
    const userId = session.user.id;
    let final = JSON.parse(answer)
    try {
      const userRef = doc(db, 'users', userId);
      const docSnap = await getDoc(userRef)
      const data = docSnap.data();
      const answers = data.answers
      const fieldPath = `answers.${index}.${answerName}`;
      // ISSUE IS RIGHT HERE - FIGURE OUT HOW TO UPDATE CERTAIN PART OF ANSWERS ARRAY IN FIREBASE - first redo answers to reset db
      if (answers) {
        console.log(answers)
        answers[answerName] = answer
      }
      
     await updateDoc(userRef, {answers})
    } catch (error) {
      console.log(error)
    }
  }
}

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

async function getUserProfile(session) {
  if (session) {
    const userId = session.user.id
    try {
      const docRef = doc(db, "users", userId);
      const docSnap = await getDoc(docRef);

      const email = docSnap.data().email;
      const image = docSnap.data().image;
      const name = docSnap.data().name;
      return [name, image, email];
    } catch (error) {
      console.log(error)
    }
  }
}
export {saveAnswer, getAnswers, getUserProfile, changeAnswer}; 