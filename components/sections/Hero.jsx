'use client'
// Indicates the code is client-side in a Next.js application.

import React, { useState, useEffect } from 'react';

// Import React for component rendering, state, and effects.

import { Button } from '@nextui-org/react';

// Button component from NextUI for consistent styling.

import Link from 'next/link';

// Next.js Link for efficient client-side routing.

const Hero = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  
  // State to track the current window width for responsiveness.

  useEffect(() => {
    // Set initial window width on mount.
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);
    
    // Update width on window resize.

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    
    // Clean up event listener on unmount.
  }, []);

  const displayWidthMessage = () => {
    
    // Conditional message based on window width.
    if (windowWidth < 640) {
      return "You're viewing this on a small screen.";
    } else if (windowWidth < 1024) {
      return "You're viewing this on a medium screen.";
    } else {
      return "You're viewing this on a large screen.";
    }
  };

  return (
    <>
      {/* Main Hero Section */}
      <div className='flex flex-col items-center mt-28 space-y-4'>
        {/* Header with Gradient Text */}
        <h1 className='text-center font-extrabold text-4xl sm:text-6xl text-txt'>
          Out of the loop?
          <br />
          <span className='bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text'>
            Know what you missed
          </span>
        </h1>

        {/* Subtitle */}
        <p className='text-txt max-w-sm sm:max-w-xl text-center text-md sm:text-xl'>
          Get a personalized news feed of the world while you were gone.
        </p>

        {/* Call-to-Action Button */}
        <div className='flex flex-col space-y-4 items-center justify-center w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 xxl flex-wrap'>
          <Link href='/signup'>
            <Button className='bg-primary text-lg text-white rounded-full py-2 px-6 hover:opacity-80'>
              Get your free feed
            </Button>
          </Link>
        </div>
      </div>

      {/* Informational Width Message */}
      <div className='text-center mt-6'>
        <p className='text-sm text-gray-600'>{displayWidthMessage()}</p>
      </div>

      {/* Image Section */}
      <div className='flex justify-center'>
        <img
          src='https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='News illustration'
          className='w-1/2 border-medium border-txt m-10 rounded-lg shadow-lg'
          
          // Image with accessibility improvements, rounded borders, and a shadow effect.
        />
      </div>
    </>
  );
};

export default Hero;

/**
 * Review:
 * 
 * This updated `Hero` component is both very visually appealing and functionally enhanced. 
 * The integration of a dynamic message based on the window width adds a layer of 
 * responsiveness and interactivity that aligns with modern design practices. The 
 * gradient text and responsive styling make the header stand out, while the clean 
 * layout directs users seamlessly to the "Get your free feed" call-to-action.
 * 
 * The use of React hooks (`useState` and `useEffect`) demonstrates a solid 
 * understanding of state and lifecycle management. The addition of accessibility 
 * features like alt text for images ensures inclusivity.
 * 
 * I am proud of the clean, modular structure and the attention to detail, which 
 * enhances both user experience and maintainability. It’s a simple yet impactful 
 * component that delivers its message effectively. One thing I'd say is you dont 
 * really put comments.. This is a key part of Programming. Otherwise I think 
 * you are on the Right track!
 */
