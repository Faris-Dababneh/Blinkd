'use client'
import React, {useState} from 'react'
import BottomNav from './BottomNav'
import {DateRangePicker} from "@nextui-org/react";
import {getLocalTimeZone, today} from "@internationalized/date";

function Start() {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [answers, setAnswers] = useState([]);
    
    const handleAnswer = (answer) => {
        setAnswers([...answers, { questionIndex: currentIndex, answer }]);
    };

    const questions = [<Duration />];

    return (
        <div className='h-full w-full overflow-hidden'>
            {questions[currentIndex - 1]}
            <BottomNav currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>
        </div>
    )
}

const Duration = () => {
  return (
    <div className='flex justify-center items-center border w-full sm:w-3/4'>
        <h1 className='text-black text-2xl sm:text-4xl text-wrap font-semibold px-4'>How long do you need your news coverage?</h1>
        <DateRangePicker 
              visibleMonths={2}
              variant={"underlined"}
              
              maxValue={today(getLocalTimeZone())}
            />
    </div>
  )
}


export default Start;