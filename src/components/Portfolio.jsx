import React from 'react'
import sudokuPortfolio from '../assets/portfolio/sudokuFinal2.png'
import mockPortfolio from '../assets/portfolio/mockPortfolio.png'
import nftPortfolio from '../assets/portfolio/marketImage.png'

const Portfolio = () => {

  const portfolios = [
    {
      id:1,
      src: sudokuPortfolio,
      link: 'https://github.com/tJohnsonAce/Sudoku_Solver'
    },
    {
      id:2,
      src: mockPortfolio,
      link: 'https://github.com/tJohnsonAce/reactCoursePortfolio'
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
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-slate-600 rounded-2xl bg-opacity-40' href={link} target='_blank' rel='noopener noreferrer'>
                  <button className="w-full">
                    Code
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

export default Portfolio