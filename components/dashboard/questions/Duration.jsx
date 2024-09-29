'use client'
import React, {useState} from 'react'
import {DateRangePicker} from "@nextui-org/react";
import Cookies from 'js-cookie'
import {getLocalTimeZone, today, parseDate} from "@internationalized/date";

export const Duration = () => {

    const [duration, setDuration] = useState()
    let durationCookie = Cookies.get('duration') ? JSON.parse(Cookies.get('duration')) : null

    const durationChange = (event) => {
        setDuration(event)
        if (event)
        {
          Cookies.set('duration', `${JSON.stringify(event)}`)
        }
        
      }

    return (
        <div className='flex justify-center items-center w-full flex-col overflow-hidden px-4' suppressHydrationWarning={true}>
            <h1 className='text-black text-center text-2xl sm:text-4xl font-semibold'>How long do you need your news coverage?</h1>
            <p className='py-3 text-center'>Your feed will contain all relevant news during this period.</p>
            <DateRangePicker 
                visibleMonths={2}
                variant={"underlined"}
                value={duration}
                onChange={durationChange}
                maxValue={today(getLocalTimeZone())}
                className='w-full sm:w-1/2 md:w-1/3'
                />
        </div>
  )
}
