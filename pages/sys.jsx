import Image from 'next/image';
import React from 'react';
import sys from '../public/assets/sys.png'
import results from '../public/assets/results.png'
import success from '../public/assets/success.png'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const syss = () => {
  return (
    <div className='w-full dark:bg-gray-800'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={sys}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>
          Systematic Trading Strategy</h2>
          <h3>Python</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8 text-white'>
        <div className='col-span-4'>
        <h1 className='pb-4'>Background</h1>
          <p className='pb-8'>
          The Dragon Fly Doji candle formation is a very popular candle as it's a
            variation from the original doji candle. It consists of a long lower shadow
            with the closing price near the top portion of the candle. Mainly used by
            retail traders, it can assist with locating market turnovers with this
            specific formation used for market bottoms. 
          </p>
          <h1 className='pb-4'>Methodology</h1>
          <p className='pb-8'>
          I used yFinance and pandas to gather and sort the OHLC data of each data point in the given time period. 
          The stocks that were tested were $SPY, $QQQ, $XLE, $XLF, $XLV, $XLU, $XLI, $XLP, and $XOP. Using this wide 
          variety of sector and index ETFs, we will be able to find out how the strategy works in different industries 
          across the stock market. In order for a buy to occur, we need the given stock to have presented a Dragon Fly 
          Doji when the stock has traded lower than the previous close.
          </p>
          <p className='pb-8'>[open price lower than the previous day, the current price above the open price, the current price is well
             below the closing price 3 days prior (to ensure that the stock is in an intermediate downtrend, the low price
             is significantly lower than the closing price]</p>
        <p className='pb-8'>
        After a buy has been placed, it will look for either a 5% upwards move to take profit or a 5% downward move as the stop loss. 
        If either is hit, it will close the position and property increment the total and/or win.
        </p>
        <h1 className='pb-4'>Results & Conclusion</h1>

        <Image className = 'rounded-xl group-hover:opacity-10 pb-8' width='610' height='380' src={results}/>

        <Image className = 'rounded-xl group-hover:opacity-10 pb-8' width='610' height='380' src={success}/>
        <p className='pb-8'>
        Here are the results of the backtest after testing each stock on the hourly time frame with the past 360 days. 
        As you can see, the results vary depending on the stock chosen. A quick glance can see how the strategy performed 
        well for $SPY, $QQQ, $XLF, $XLU, and $XLI, but performed poorly for $XLE and $XOP (both energy-related). It can be 
        concluded that the results are inconclusive and would require more data (preferably more than 360 days) to properly 
        test the strategy.
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

export default syss;
