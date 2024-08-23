'use client'
import React, {useState} from 'react'
import {Progress} from "@nextui-org/react";
import { Button } from '@nextui-org/react';
import { saveAnswer } from '../database/Firebase'
import { useSession } from 'next-auth/react';

const BottomNav = ({ currentIndex, setCurrentIndex, answers }) => {
  const {data: session } = useSession();
  const handleNext = () => {
    const data = JSON.parse(JSON.stringify(answers))
    switch (currentIndex) {
      case 1:
        if (answers[0] !== null) {
          setCurrentIndex(currentIndex + 1)
          saveAnswer(data[0], session)
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
          setCurrentIndex(currentIndex + 1)
        }
        break;
    }
  }

  return (
    <div className='absolute bottom-0 w-full'>
        <Progress aria-label="Loading..." size='sm' value={currentIndex * (100 / answers.length)} className="w-full" 
            classNames={{
                track: "drop-shadow-md",
                indicator: "bg-gradient-to-r from-primary to-secondary"}} />
        <Button className='bg-transparent border-2 border-gray-300 text-primary text-md my-4 ml-4' onClick={() => currentIndex !== 1 ? setCurrentIndex(currentIndex - 1) : setCurrentIndex(currentIndex)}>Back</Button>
        <Button className='bg-primary text-white font-semibold text-md absolute right-0 top-5 mr-4' onClick={handleNext}>Next</Button>
    </div>
  )
}

export default BottomNav