import React from 'react'
import { getAnswer } from '../../app/database/Firebase'

export const Tile = ({answerName, answer, session}) => {
  getAnswer('null', session)
  
  return (
    <div className='rounded-lg border w-64 h-64 p-10'>{answerName}</div>
  )
}
