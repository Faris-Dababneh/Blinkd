import React from 'react'

export const Header = ({name, description}) => {
  return (
    <div className='pb-10'>
        <h1 className='text-2xl font-bold'>{name}</h1>
        <p>{description}</p>
    </div>
  )
}
