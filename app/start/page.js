'use client'
import React, { useState, useEffect } from 'react'
import BottomNav from './BottomNav'
import {DateRangePicker} from "@nextui-org/react";
import {getLocalTimeZone, today} from "@internationalized/date";
import { TagsInput } from '@mantine/core';
import { MantineProvider } from '@mantine/core';


function Start() {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [answers, setAnswers] = useState([]);
    
    const handleAnswer = (answer) => {
        setAnswers([...answers, { questionIndex: currentIndex, answer }]);
    };

    const questions = [<Duration />, <Interests />];

    return (
        <div className='flex h-full w-full overflow-hidden pt-20'>
            {questions[currentIndex - 1]}
            <BottomNav currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>
        </div>
    )
}

const Duration = () => {
  
  const [ duration, setDuration ] = useState()

  return (
    <div className='flex justify-center items-center w-full flex-col overflow-hidden px-4'>
        <h1 className='text-black text-center text-2xl sm:text-4xl font-semibold'>How long do you need your news coverage?</h1>
        <p className='py-3 text-center'>Your feed will contain all relevant news during this period.</p>
        <DateRangePicker 
              visibleMonths={2}
              variant={"underlined"}
              value={duration}
              onChange={setDuration}
              maxValue={today(getLocalTimeZone())}
              className='w-full sm:w-1/2 md:w-1/3'
            />
    </div>
    
  )
}

const Interests = () => {
  return (
      <MantineProvider>
        <div className='text-black'>
          <TagsInput
            label="Press Enter to submit a tag"
            placeholder="Pick tag from list"
            data={['React', 'Angular', 'Svelte']}
          />
        </div>
      </MantineProvider>
  );
}


export default Start;