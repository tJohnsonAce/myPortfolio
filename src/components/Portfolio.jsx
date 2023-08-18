import React from 'react'
import pcosPortfolio from '../assets/portfolio/portfolioProject1.png'
import ljpPortfolio from '../assets/portfolio/ljpProject2.png'
import nftPortfolio from '../assets/portfolio/marketImage.png'

const Portfolio = () => {

  const portfolios = [
    {
      id:1,
      src: pcosPortfolio,
      link: 'https://github.com/tJohnsonAce/pcos',
      liveLink: 'https://facesofpcos.com'
    },
    {
      id:2,
      src: ljpPortfolio,
      link: 'https://https://github.com/tJohnsonAce/ljp1',
      liveLink: 'https://https://www.ljphotographyin.com/'
    },
    {
      id:3,
      src: nftPortfolio,
      link: 'https://github.com/tJohnsonAce/3METADMock'
    },
  ]

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-slate-900 to-gray-600 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {portfolios.map(({ id, src, link, liveLink }) => (
  <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
    <img
      src={src}
      alt=""
      className="rounded-md duration-200 hover:scale-105 h-56 w-full object-cover" // Set the height and add 'object-cover'
    />
    <div className="flex items-center justify-center">
      <a href={link} target='_blank' rel='noopener noreferrer' className="w-1/4 m-4 duration-200 hover:scale-105 bg-slate-600 rounded-2xl bg-opacity-40 flex justify-center items-center">
        <button className="px-6 py-3">
          Code
        </button>
      </a>
      <a href={liveLink} target='_blank' rel='noopener noreferrer' className="w-1/4 m-4 duration-200 hover:scale-105 bg-slate-600 rounded-2xl bg-opacity-40 flex justify-center items-center">
        <button className="px-6 py-3">
          Demo
        </button>
      </a>
    </div>
  </div>
))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;