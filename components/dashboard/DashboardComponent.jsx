'use client'
import React from 'react'
import { Button } from '@nextui-org/react'
import {Header} from './Header'
import {Tile} from './Tile'
import { useSession } from 'next-auth/react';
import { getAnswer } from '../../app/database/Firebase'

export const DashboardComponent = () => {

  const {data: session } = useSession();
  getAnswer('interests', session)

  return (
    <div className='flex flex-col pl-44 pt-16 w-5/6 h-screen'>
        <Header name={'Dashboard'} description={'Manage your feed preferences and results'}/>
        <div>
          <Tile answerName={'Duration'} answer={'null'} session={session}/>
            <Button>Generate Free News Feed</Button>
        </div>
    </div>
  )
}
