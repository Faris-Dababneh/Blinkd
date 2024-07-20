import React from 'react'
import { Button } from '@nextui-org/react'

const Hero = () => {
  return (
    <>
      <div className='flex flex-col items-center mt-28 space-y-6'>
        <h1 className='text-center font-extrabold text-4xl sm:text-6xl text-txt'>Kick off with a bang<br/>with <span className='bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text'>FULLSTACK</span></h1>
        <p className='text-txt max-w-sm sm:max-w-xl text-center text-md sm:text-xl'>Build the next million dollar idea using Next.js, Tailwind, NextUI, Auth, Stripe, and Firebase</p>
        <div className='space-x-6 pb-10'>
          <Button className='bg-primary text-lg text-black rounded-full py-2 px-6 hover:opacity-80'>Get started</Button>
          <button className='hover:opacity-80 bg-transparent'>Contact</button>
        </div>
        </div>
        <div className='flex justify-center'>
          <img src='https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-1/2 border-medium border-txt m-10'/>
        </div>
        
    </>
  )
}

export default Hero;
