import Image from 'next/image';
import React from 'react';
import bb from '../public/assets/bb.png'
import results from '../public/assets/results.png'
import success from '../public/assets/success.png'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const b = () => {
  return (
    <div className='w-full dark:bg-gray-800'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={bb}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>
          Best Buy Curbside Pickup Integration</h2>
          <h3>Backend / Frontend</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8 text-white'>
        <div className='col-span-4'>
        <h1 className='pb-4'>Overview</h1>
          <p className='pb-8'>
          I was able to lead a technology team to deliver a POC integration on a curbside pickup system with their in store locations during the 
          rise of the COVID-19 pandemic. 
          </p>
          <h2 className='pb-4'> The Problem</h2>
          <p className='pb-8'>
          During the pandemic, many businesses struggled with bringing customers into their stores, thus causing many store locations to start shutting
          down due to the lack of revenue. However, many retailers started to adopt a curbside pickup system in which their customers can still shop at 
          the nearest locations without the risk of coming in contact with others. Thus, Best Buy wanted to adopt a similar system in which customers can
          purchase their technology goods and pick up their order without coming in contact with anyone. 
          </p>
        <h2 className='pb-4'>What We Did</h2>

        <p className='pb-8'>
        My team and I were able to design a curbside pickup system that integrates with their local store seamlessly as a proof of concept for 
        all the locations to start adopting. In order to do this, we utilized technologies like Python and SQL for the backend management for the consumer
        and product data that was listed on the website as well as for the customers shopping carts. We then used HTML and CSS for the frontend 
        design of the system. 
          </p>
          <h2 className='pb-4'>Conclusion</h2>

        <p className='pb-8'>
        We then presented the system to higher-ups at BestBuy and demoed the seamless integration with their current location in order for it 
        to be implemented in real-time. 
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
                <RiRadioButtonFill className='pr-1' /> CSS
              </p>
              <p className='text-white py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> HTML
              </p>
              <p className='text-white py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> SQL
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

export default b;
