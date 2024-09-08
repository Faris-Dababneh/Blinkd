'use client'
import React, {useState, useEffect} from 'react'
import { Button } from '@nextui-org/react'
import {Header} from './Header'
import {Tile} from './Tile'
import { useSession } from 'next-auth/react';
import { getAnswers } from '../../app/database/Firebase'

export const DashboardComponent = () => {

  const {data: session } = useSession();
  const [answers, setAnswers] = useState(undefined)
  const [isLoading, setIsLoading] = useState(true);
  
  function ShowAnswers() {


      return (
        <div className='border w-full'>
        {answers &&
          <>
          {answers.map((item) => (
                <Tile key={item[0]} answerName={item[0]} answer={item[1]}/>
              ))}
          </>
        }
        </div>
      );
   
  }

  useEffect(() => {
    const fetchAnswer = async () => {
      if (answers === undefined) {
        let answer = await getAnswers(session)
        setAnswers(answer)
      } else {
        return () => {}
      }
    }
    fetchAnswer()
  })
  

  return (
    <div className='flex flex-col pl-44 pt-16 w-5/6 h-screen'>
        <Header name={'Dashboard'} description={'Manage your feed preferences and results'}/>
        <div>
            <ShowAnswers />
            <Button>Generate Free News Feed</Button>       
            
            
        </div>
    </div>
  )
}
