'use client'
// FIGURE OUT HOW TO SAVE ALL ANSWERS TO DATABASE
import React, {useState} from 'react'
import {Progress} from "@nextui-org/react";
import { Button } from '@nextui-org/react';
import { saveAnswer } from '../database/Firebase'
import { useSession } from 'next-auth/react';

const BottomNav = ({ currentIndex, setCurrentIndex, answers }) => {
  const {data: session } = useSession();
  
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

  const handleSubmit = () => {
    //const data = JSON.parse(JSON.stringify(answers))
    
    answers.forEach(answer => {
      //saveAnswer(answer, session)
      if (answer instanceof Set) {
        console.log(Array.from(answer))
        console.log('is set')
      } else {
        console.log(answer)
      }
      
    })
    console.log('submitted')
  }

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