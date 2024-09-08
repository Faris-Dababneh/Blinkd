import React from 'react'

export const Tile = ({answerName, answer, session}) => {
  
  return (
    <div className='rounded-lg border w-64 h-64 p-10'>
      <h1 className='text-lg font-semibold underline'>{answerName}</h1>
      <p>{answer}</p>
    </div>
  )
}
