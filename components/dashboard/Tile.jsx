import React from 'react'

export const Tile = ({answerName, answer, session}) => {

  return (
    <div className='rounded-lg border w-64 h-64 p-10'>
      <h1 className='text-lg font-semibold underline uppercase'>{answerName}</h1>
      {answer.length > 1 ? (
        <div>
          {answer.map((item) => (
            <>{item !== answerName ? <p>{item}</p> : <p></p>}</>
          ))}
        </div>
      ) : (
        <></>
      )}
      
    </div>
  )
}
