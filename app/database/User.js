import { signIn } from "next-auth/react";
import { useSession } from 'next-auth/react';
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase.config";

const SaveAnswer = async (answers) => {
  try {
    const result = await signIn("google", { callbackUrl: "/" });

    if (result.error) {
      // Handle error
    } else {
      const session = useSession();
      const userRef = doc(db, "Accounts", session.user.uid);

      // Save answers to the user's document
      await setDoc(userRef, {
        answers: answers,
      });

      // Redirect to profile page or other appropriate location
      router.push("/");
    }
  } catch (error) {
    // Handle error
  }
};

export { SaveAnswer }