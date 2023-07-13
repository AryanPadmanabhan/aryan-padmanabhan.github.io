import Image from 'next/image';
import React from 'react';
import portOpt from '../public/assets/portOp.png'
import graph from '../public/assets/graph.png'
import ef from '../public/assets/ef.png'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const portop = () => {
  return (
    <div className='w-full dark:bg-gray-800'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={portOpt}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>
          Portfolio Optimization</h2>
          <h3>Python</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8 text-white'>
        <div className='col-span-4'>
        <h1>Overview</h1>
          <p className='pb-8'>
            Modern portfolio theory (MPT) is a method of selecting investments to maximize the return of a portfolio with an acceptable level of risk. The aim of this project was to provide the most optimal 
            way to invest in any combination of stocks. 
          </p>
          <p className='pb-8'>
            The weight systems that were followed were (1) Equal Weight, (2) Market Capitilization, (3) Volatility, (4) Inverse Volatility, (5) Min Variance Optimal, (6) Max Variance Optimal, and (7) Mean Variance Optimal.
            For 2-7, a dynamic rebalancing algorithm was implemented as metrics for weighting can change over time. 
          </p>
        <Image className = 'rounded-xl group-hover:opacity-10 pb-8' width='610' height='380' src={graph}/>
        <p className='pb-8'>
            In order for the Optimals to be calculated, I created the Efficient Frontier to gather statistical data on the optimal portfolios. To do this, I graphed the risk to returns of 
            1000 simulated portfolio with random weights. 
          </p>
        <Image className = 'rounded-xl group-hover:opacity-10 pb-8' width='610' height='380' src={ef}/>
        <p className='pb-8'>
            The portfolio on the left side is the portfolio with the least risk. The portfolio on the right is the one with the most risk. And the middle green dot is the portfolio with the highest
            risk to reward. That green portfolio is then are most optimal portfolio. This is then proved in the first graph above as the Mean Variance Optiaml (7) is the portfolio with the highest returns
            in comparison to the 6 other weight styles. 
          </p>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4 text-white'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-white py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Python
              </p>
              <p className='text-white py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Pandas
              </p>
              <p className='text-white py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Numpy
              </p>
              <p className='text-white py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Statistics
              </p>
              <p className='text-white py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> APIs
              </p>

            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default portop;