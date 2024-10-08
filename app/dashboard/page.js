'use client'
import React, {useState, useEffect} from 'react'
import { Button } from '@nextui-org/react'
import {Header} from '../../components/dashboard/Header';
import {Tile} from '../../components/dashboard/Tile';
import { useSession } from 'next-auth/react';
import { getAnswers } from '../../app/database/Firebase'
import Link from 'next/link'
import Cookies from 'js-cookie'

function Dashboard() {

  const {data: session } = useSession();
  const [answers, setAnswers] = useState(undefined)

  function ShowAnswers() {
      return (
        <div className='flex w-full pb-10'>
        {answers ? (
          <>
          {answers.map((item) => (
            <Tile key={item} answerName={item[0]} answer={item}/>
          ))}
          </>
        ) : (
          <Tile isLoading={true}/>
        )}
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
    <>
        <Header name={'Dashboard'} description={'Manage your feed preferences and results'}></Header>
        <ShowAnswers />
        <Link href='/feed'><Button className='mt-auto self-start bg-primary text-white py-2 px-4 rounded-full'>Generate Free News Feed</Button></Link>    
    </>               
  )
}

export default Dashboard;