import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-600 to to-slate-900 text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            About
          </p>
        </div>
        <p className='text-xl mt-20'>
        Hello, my name is Trevor Johnson, and I am a Front-End Developer. I began my journey in tech almost two years ago learning Python, and ever since I have been obsessed with programming.
        </p>

        <br />

        <p className='text-xl'>
        This year, I developed a new obsession with web development. Being able to create a page and style it however you see fit and seeing those results is a magical thing. Whether it's crafting interactive user interfaces or building responsive web pages, I'm always excited about new challenges. I am open to discussing any opportunities or projects you might have.
        </p>
      </div>
    </div>
  )
}

export default About
