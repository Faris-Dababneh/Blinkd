'use client'
import React from 'react'
import { Button } from '@nextui-org/react'
import { useSession } from 'next-auth/react';
import { changeAnswer } from '../../../app/database/Firebase';

export const SaveAnswer = ({index, answer, answerName}) => {
  const {data: session } = useSession();

  const handleClick = async () => {
    await changeAnswer(session, JSON.stringify(answer), index, answerName);
    window.location.reload();
  }

  return (
    <Button className='mx-auto mt-5 self-start w-1/2 bg-primary text-white py-2 px-4 rounded-full' onClick={handleClick}>Save Answer</Button>
  )
}
