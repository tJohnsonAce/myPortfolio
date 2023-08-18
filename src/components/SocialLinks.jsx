import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const SocialLinks = () => {

  const links = [
    {
      id:1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>       
      ),
      href: 'https://www.linkedin.com/in/trevor-johnson-91433a1a2/',
      style: 'rounded-tr-md'
    },
    {
      id:2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>       
      ),
      href: 'https://github.com/tJohnsonAce',
    },
    {
      id:3,
      child: (
        <>
          Twitter <FaTwitter size={30} />
        </>       
      ),
      href: 'https://twitter.com/whizzkee',
    },
    {
      id:4,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>       
      ),
      href: 'mailto:tJohnsonAce@outlook.com'
    },
    {
      id:5,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>       
      ),
      href: 'TrevorJohnsonDevResume2023.pdf',
      style: 'rounded-br-md',
      download: true,
    }
  ]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <div className='mobile-social-links'>
        <ul>
        
          {links.map(({id, child, href, style, download}) => (
            <li 
              key={id}
              className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500' + style}>
              <a 
                href={href}
                className='flex justify-between items-center w-full text-white hover:rounded-2xl'
                download={download}
                target='_blank'
                rel='noreferrer'
              > 
              <>
                {child}
              </> 
            </a>
          </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SocialLinks