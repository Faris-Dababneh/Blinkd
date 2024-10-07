'use client'
import React, {useState, useEffect} from 'react'
import { Button } from '@nextui-org/react'
import {Header} from './Header'
import {Tile} from './Tile'
import { useSession } from 'next-auth/react';
import { getAnswers } from '../../app/database/Firebase'
import Link from 'next/link'
import Cookies from 'js-cookie'
import {Duration} from './questions/Duration'

export const DashboardComponent = () => {

  const {data: session } = useSession();
  const [answers, setAnswers] = useState(undefined)

  function ShowAnswers() {
      return (
        <div className='flex w-full pb-10'>
        {answers &&
          <>
          {answers.map((item) => (
            <Tile key={item} answerName={item[0]} answer={item}/>
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
        Cookies.set('answers', `${JSON.stringify(answer)}`)
      } else {
        return () => {}
      }
    }
    fetchAnswer()
  })
  

  return (
    <div className='flex flex-col pl-44 pt-4 w-5/6 h-screen'>
        <Header name={'Dashboard'} description={'Manage your feed preferences and results'}/>
        <div>
            <ShowAnswers />
            <Link href='/feed'><Button>Generate Free News Feed</Button></Link>     
            
        </div>
    </div>
  )
}
