'use client'
// THERE IS SOMETHING WITH THE DASHBOARD REDIRECT - IT MUST BE PROTECTED BY AUTH SOMEWHERE IN THE PROJECT - TRY DELETING IT AND REMAKING
import React, {useState} from 'react'
import {Progress} from "@nextui-org/react";
import { Button } from '@nextui-org/react';
import { saveAnswer } from '../database/Firebase'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'

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

  // Saves all answers to user collection
  const handleSubmit = () => {
    
    answers.forEach(answer => {
      if (answer instanceof Set) {
        console.log(Array.from(answer))
        saveAnswer({'places': Object.assign({}, Array.from(answer))}, session)
      } else if (Array.isArray(answer)) {
        saveAnswer({'interests': Object.assign({}, answer)}, session)
      } else {
        saveAnswer({'duration': JSON.parse(JSON.stringify(answer))}, session)
      }
    })
    
  }

  return (
    <div className='absolute bottom-0 w-full'>
        <Progress aria-label="Loading..." size='sm' value={currentIndex * (100 / answers.length)} className="w-full" 
            classNames={{
                track: "drop-shadow-md",
                indicator: "bg-gradient-to-r from-primary to-secondary"}} />
        <Button className='bg-transparent border-2 border-gray-300 text-primary text-md my-4 ml-4' onClick={() => currentIndex !== 1 ? setCurrentIndex(currentIndex - 1) : setCurrentIndex(currentIndex)}>Back</Button>
        <Button className='bg-primary text-white font-semibold text-md absolute right-0 top-5 mr-4' onClick={handleNext}>{currentIndex === 3 ? <p>Submit</p> : <p>Next</p>}</Button>
        
    </div>
  )
}

export default BottomNav