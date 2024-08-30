'use client'
// THERE IS SOMETHING WITH THE DASHBOARD REDIRECT - IT MUST BE PROTECTED BY AUTH SOMEWHERE IN THE PROJECT - TRY DELETING IT AND REMAKING
import React, {useState} from 'react'
import {Progress} from "@nextui-org/react";
import { Button } from '@nextui-org/react';
import { saveAnswer } from '../database/Firebase'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'
import Link from 'next/link';

const BottomNav = ({ currentIndex, setCurrentIndex, answers }) => {
  const {data: session } = useSession();
  const router = useRouter()
  //console.log(answers)
  const handleNext = () => {
    switch (currentIndex) {
      case 1:
        if (answers[0].start !== null && answers[0].end !== null) {
          setCurrentIndex(currentIndex + 1)
        }
        break;
      case 2:
        if (answers[1][0]) {
          setCurrentIndex(currentIndex + 1)
        }
        break;
      case 3:
        const array = Array.from(answers[2])
        if (array[0]) {
          handleSubmit()
        }
        break;
    }
  }

  // Saves all answers to user collection under "answers"
  const handleSubmit = async () => {
    try {
        let data = [];
       for (const answer of answers) {
        if (answer instanceof Set) {
          data = data.concat({'places': Object.assign({}, Array.from(answer))})
        } else if (Array.isArray(answer)) {
          data = data.concat({'interests': Object.assign({}, answer)})
        } else {
          data = data.concat({'duration': JSON.parse(JSON.stringify(answer))})
        }
      }
      const final = {answers: data}
      await saveAnswer(final, session)
      router.push('/')
    } catch (error) {
      console.log(error)
    } 
  };

  return (
    <div className='absolute bottom-0 w-full'>
        <Progress aria-label="Loading..." size='sm' value={currentIndex * (100 / answers.length)} className="w-full" 
            classNames={{
                track: "drop-shadow-md",
                indicator: "bg-gradient-to-r from-primary to-secondary"}} />
        <Button className='bg-transparent border-2 border-gray-300 text-primary text-md my-4 ml-4' onClick={() => currentIndex !== 1 ? setCurrentIndex(currentIndex - 1) : setCurrentIndex(currentIndex)}>Back</Button>
        {currentIndex === 3 ? (
          <Button className='bg-primary text-white font-semibold text-md absolute right-0 top-5 mr-4' onClick={handleNext}>Submit</Button>
        ) : (
          <Button className='bg-primary text-white font-semibold text-md absolute right-0 top-5 mr-4' onClick={handleNext}>Next</Button>
        )}
        
        
    </div>
  )
}

export default BottomNav