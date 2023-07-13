import Image from 'next/image';
import React from 'react';
import stocks from '../public/assets/stocks.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const crypto = () => {
  return (
    <div className='w-full dark:bg-gray-800'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={stocks}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Project Signol</h2>
          <h3>Python / JavaScript</h3>
        </div>
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[90%] right-[50%] translate-x-[-10%] translate-y-[-70%] text-white z-10 mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4 text-white bg-black/50'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2 '>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1 '>
              <p className='py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Python
              </p>
              <p className='py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> JavaScript
              </p>
              <p className='py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> SQL
              </p>
              <p className='py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Google App Scripts
              </p>
              <p className='py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Heroku
              </p>
              <p className='py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> APIs
              </p>
            </div>
          </div>
        </div>
        </div>


      </div>

      <div className='max-w-[1240px] mx-auto p-2 gap-8 py-8 '>
        <div className='col-span-4 text-white'>
          {/* <p>Project</p> */}
          <h1>Overview</h1>
          <p className='pb-8'>
            Project Signol has been a project aimed to automate the trading experience. It started three years ago in which I split the project into 3 distinct phases 
          </p>
          <h2>Phase 1</h2>
          <p className='pb-8'>
            Every week, I release a weekly watchlist to over 1,200 traders across the globe. The contents of the watchlist include specific entries for when to take trades. I have noticed that it is 
            easy for my students to miss trades due to not being aware of a possible trade idea that was posted in the watchlist. The first phase of Project Signol was to design an alerting system so that 
            no trader would miss any potenital trades. In JavaScript, I was able to connect my brokerage to make streamlined alerts to the community platform with the specific equities that are worthy 
            of a trade. I then implemented the system using time triggers in Google App Scripts for live market utilization.
          </p>
          <h2>Phase 2</h2>
          <h3>(Phase 2.1)</h3>
          <p className='pb-8'>
            Since trading is a time extensive task, phase 2 was to automate buying and selling signals for those who do not have time to do the research themselves. I developed a backtesting environment 
            to test thousands of strategies, indicators, and price action patterns. I then designed an algorithm to be 82% accurate on over 70 trades in a 60-day time span on different sector ETFs while 
            utilizing many modules such as pandas, matplotlib, pandas_ta, and yfinance. I then streamlined the algorithm to be live tested on current market conditions and for live market utilization 
            and continuously monitoring and evaluating the algorithm's performance to identify areas for improvement and refine the trading strategy. 
          </p>
          <h3>(Phase 2.2)</h3>
          <p className='pb-8'>
            Trading requires data. However, there is confusion on what data is useful and what should be avoided. In order to make quality trades, I created a data pipeline for derivitive liquidity,
            short information, relative volume for equities, and a sentiment analysis of the equity market. I utilized selenium to load data from websites to the script in real-time and launched the 
            program to the cloud using Salesforce’s Heroku.
          </p>
          <h2>Phase 3</h2>
          <p className='pb-8'>
            In progress
          </p>
          {/* <a
            href='https://github.com/fireclint/crypto-react-firebase'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://cryptobase-yt.web.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a> */}

        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default crypto;