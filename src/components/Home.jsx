import React from 'react'
import photo from '../assets/photo.png'
import {RiArrowRightSLine} from 'react-icons/ri'

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>
            I'm a Front-End Developer
          </h2>
          <p className='text-gray-500 py-4 max-w-md'>
            I love working on and designing apps and sites for myself and others. My favorite technologies to use are React, Tailwind, and NextJS.
          </p>

          <div>
            <button className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-purple-900 cursor-pointer'>
              Portfolio
              <span>
                <RiArrowRightSLine/>
              </span>
            </button>
          </div>
        </div>

        <div>
          <img 
            src={photo} 
            alt="my profile"
            className='rounded-2xl mx-auto w-1/2 md:w-1/3'  
          />
        </div>
      </div>
    </div>
  )
}

export default Home