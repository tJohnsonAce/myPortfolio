import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const NavBar = () => {
	const [nav, setNav] = useState(false)

	const links = [
		{
			id: 1,
			link: 'home'
		},
		{
			id: 2,
			link: 'about'
		},
		{
			id: 3,
			link: 'portfolio'
		},
		{
			id: 4,
			link: 'experience'
		},
		{
			id: 5,
			link: 'contact'
		},
	]

	return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-slate-900 fixed'>
			<div>
				<h1 className='text-5xl font-headerName ml-2'>Trevor Johnson</h1>
			</div>

			<ul className='hidden md:flex'>
				{links.map(({ id, link }) => (
					<li 
						key={id} 
						className='px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200'
					>
						<Link to={link} smooth duration={500}>
							{link}
						</Link>
					</li>
				))}
			</ul>
			
			<div 
				onClick={() => setNav(!nav)} 
				className='cursor-pointer pr-4 z-10 text-white md:hidden'>
				{nav ? <FaTimes size={30} /> : <FaBars size={30} />}
			</div>

			{nav && (
				<ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-slate-900 to-gray-600 text-white'>
					{links.map(({id, link}) => (
						<li 
							key={id} 
							className='px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105'
						>
							<Link
								onClick={() => setNav(!nav)}
								to={link} 
								smooth 
								duration={500}
							>
								{link}
							</Link>
						</li>
					))}
					<div className='flex justify-between items-center w-30 h-20'>
						<div className='px-4 cursor-pointer hover:scale-125 text-2xl'>
							<a 
								href="https://www.linkedin.com/in/trevor-johnson-dev/" 		alt="LinkedIn"
								target='_blank'
								rel='noreferrer'
							>
								<FaLinkedin />
							</a>
						</div>
						<div className='px-4 cursor-pointer hover:scale-125 text-2xl'>
							<a 
								href="https://github.com/tJohnsonAce" 		
								alt="GitHub"
								target='_blank'
								rel='noreferrer'
							>
								<FaGithub />
							</a>
						</div>
						<div className='px-4 cursor-pointer hover:scale-125 text-2xl'>
							<a 
								href="https://twitter.com/whizzkee/" 		
								alt="Twitter"
								target='_blank'
								rel='noreferrer'
							>
								<FaTwitter />
							</a>
						</div>
						<div className='px-4 cursor-pointer hover:scale-125 text-2xl'>
							<a 
								href="mailto:tJohnsonAce@outlook.com" 		
								alt="Email"
								target='_blank'
								rel='noreferrer'
							>
								<HiOutlineMail />
							</a>
						</div>
					</div>
				</ul>
			)}
		</div>
	)
}

export default NavBar