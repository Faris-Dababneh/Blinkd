import React from 'react'

export const Tile = ({answerName, answer, session}) => {
  
  return (
    <div className='rounded-lg border w-64 h-64 p-10'>{answerName}</div>
  )
}
