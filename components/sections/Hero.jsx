'use client'
import React, { useState } from 'react'
import { Button } from '@nextui-org/react'
import Link from 'next/link';


const Hero = () => {
  
  return (
    <>
      <div className='flex flex-col items-center mt-28 space-y-4'>
        <h1 className='text-center font-extrabold text-4xl sm:text-6xl text-txt'>Out of the loop?<br/><span className='bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text'>Know what you missed</span></h1>
        <p className='text-txt max-w-sm sm:max-w-xl text-center text-md sm:text-xl'>Get a personalized news feed of the world while you were gone.</p>
        <div className='flex flex-col space-y-4 items-center justify-center w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 xxl flex-wrap'>
          <Link href='/signup'><Button className='bg-primary text-lg text-white rounded-full py-2 px-6 hover:opacity-80'>Get your free feed</Button></Link>
        </div>
        </div>
        <div className='flex justify-center'>
          <img src='https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-1/2 border-medium border-txt m-10'/>
        </div>
        
    </>
  )
}

export default Hero;
