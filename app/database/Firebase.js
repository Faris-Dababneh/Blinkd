'use server'
import { db } from "../../firebase.config";
import { doc, updateDoc, getDoc } from 'firebase/firestore';

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
      //console.log(answers)
      for (const ans of answers) {
        console.log(ans.duration)
        if (ans.answer !== undefined) { // ans.answer will not work because 'answer' is not part of the array
          
        }
        
      }
    } catch (error) {
      console.log(error);
    }
    
  }
}

export {saveAnswer, getAnswer}; 