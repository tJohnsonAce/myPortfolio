import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
  return (
    <div className='bg-slate-900 text-white py-4'>
      <div className='max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between'>
        <div>
          <h1 className='text-xl font-medium mb-2'>Trevor Johnson</h1>
          <p className='text-sm'>Front-End Developer</p>
        </div>
        
        <div className='flex justify-between items-center w-40 mt-4 md:mt-0'>
          <a href="https://www.linkedin.com/in/trevor-johnson-dev/" alt="LinkedIn" target='_blank' rel='noreferrer' className='cursor-pointer hover:scale-125 text-2xl'>
            <FaLinkedin />
          </a>
          <a href="https://github.com/tJohnsonAce" alt="GitHub" target='_blank' rel='noreferrer' className='cursor-pointer hover:scale-125 text-2xl'>
            <FaGithub />
          </a>
          <a href="https://twitter.com/whizzkee/" alt="Twitter" target='_blank' rel='noreferrer' className='cursor-pointer hover:scale-125 text-2xl'>
            <FaTwitter />
          </a>
          <a href="mailto:tJohnsonAce@outlook.com" alt="Email" target='_blank' rel='noreferrer' className='cursor-pointer hover:scale-125 text-2xl'>
            <HiOutlineMail />
          </a>
        </div>
      </div>
      <div className='text-center mt-4 text-sm'>
        <p>© {new Date().getFullYear()} Trevor Johnson. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
