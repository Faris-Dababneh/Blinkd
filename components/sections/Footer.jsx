'use client'
import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='flex flex-col w-full items-center border-t border-accent py-14 text-tertiary'>
            <footer className="p-10 text-txt w-2/3 md:w-1/2">
                <nav className='flex flex-col space-y-1'>
                    <h6 className="text-primary font-bold text-md">MENU</h6> 
                    <Link href='/'><button className="hover:underline" onClick={() => window.scrollTo(0, 0)}>Home</button></Link>
                    <Link href='/contact'><button className="hover:underline" onClick={() => window.scrollTo(0, 0)}>Contact</button></Link>
                    <Link href='/dress'><button className="hover:underline">Start Now</button></Link>
                </nav> 
            </footer> 
            <footer className="flex flex-col px-10 py-4 border-t text-txt border-black w-2/3 md:w-1/2">
                <div className="flex flex-col items-left pt-5">
                    <Link href='/'><button className='h-auto' onClick={() => window.scrollTo(0, 0)}/>FULLSTACK<button/></Link>
                    <p className='text-primary'>Copyright © 2024 - All right reserved</p>
                </div> 
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <a href='https://www.linkedin.com/in/faris-dababneh/' target='_blank'><FaLinkedin size={30} className="cursor-pointer"/></a>
                    </div>
                </nav>
            </footer>
        </div>
    );
}

export default Footer