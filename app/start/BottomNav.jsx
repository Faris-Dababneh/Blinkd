'use client'
import React, {useState} from 'react'
import {Progress} from "@nextui-org/react";
import { Button } from '@nextui-org/react';

const BottomNav = ({ currentIndex, setCurrentIndex }) => {

  return (
    <div className='absolute bottom-0 w-full'>
        <Progress aria-label="Loading..." size='sm' value={currentIndex * 20} className="w-full" 
            classNames={{
                track: "drop-shadow-md",
                indicator: "bg-gradient-to-r from-primary to-secondary"}} />
        <Button className='bg-transparent border-2 border-gray-300 text-primary text-md my-4 ml-4' onClick={() => currentIndex !== 1 ? setCurrentIndex(currentIndex - 1) : setCurrentIndex(currentIndex)}>Back</Button>
        <Button className='bg-primary text-white font-semibold text-md absolute right-0 top-5 mr-4' onClick={() => setCurrentIndex(currentIndex + 1)}>Next</Button>
    </div>
  )
}

export default BottomNav