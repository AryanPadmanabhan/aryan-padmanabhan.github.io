import React from 'react'
import nn from '../public/assets/nn.png'
import quant from '../public/assets/quant.png'
import data from '../public/assets/data.png'
import ota from '../public/assets/ota.png'
import Image from 'next/image'
import Link from 'next/link'

export const Experience = () => {
  return (
    <div id='experience' className='w-full dark:bg-gray-900'>
      
      
      <h3 className='flex 
max-w-full px-10 justify-evenly mx-auto uppercase tracking-[15px] text-white text-4xl py-10'>Experience</h3>
        <div class=" flex-wrap items-center justify-center grid md:grid-cols-2 gap-8 max-w-[1240px] mx-auto px-2">
  <div class="my-5 rounded overflow-hidden hover:scale-105 ease-in duration-300 mx-auto container max-w-lg dark:bg-gray-800 shadow-lg ">
    <div class="h-2/4 sm:h-64 overflow-hidden">
        <Link href='/unh'> 
      <Image class="w-full rounded-t"
        src={nn}
        alt="/"/>
        </Link>
    </div>
    <h2 className='flex justify-start -mt-12 ml-[130px] tracking-widest text-white text-2xl font-bold uppercase'>United Health Group</h2>
    
    <div class="flex justify-start px-5 -mt-14 mb-5">
      <span clspanss="block relative h-32 w-32">
        <img alt="Photo by aldi sigun on Unsplash"
          src="https://www.unitedhealthgroup.com/content/dam/UHG/Images/newsroom/newsroom-2020/UHGlogo_whiteonnavy%20(1).png"
          class="mx-auto object-cover rounded-full h-24 w-24 bg-white p-1" />
          
      </span>
    </div>
    <div class="">
      <div class="px-7 mb-8">
        <h2 class="text-3xl font-bold text-green-800 dark:text-gray-300">Software Engineer Intern</h2>
        <p class="text-gray-400 mt-2 dark:text-gray-400">Summer 2023 - Fall 2023</p>
        <p class="mt-2 text-gray-600 dark:text-gray-300">Constructed the architecture for a Convolutional Neural Network (CNN) with feature engineering to process documents. 
                    Trained models with custom datasets with PyTorch tensors and encoders</p>
        <div className='px-6 pt-4 pb-2'>
                    <span class="inline-block bg-[#AF838B] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#F9AFB0] mr-2 mb-2">PYTHON</span>
                    <span class="inline-block bg-[#AF838B] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#F9AFB0] mr-2 mb-2">MINILANG</span>
                    <span class="inline-block bg-[#AC9673] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#F3CC8A] mr-2 mb-2">PANDAS</span>
                    <span class="inline-block bg-[#AC9673] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#F3CC8A] mr-2 mb-2">NUMPY</span>
                    <span class="inline-block bg-[#AC9673] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#F3CC8A] mr-2 mb-2">PYTORCH</span>
                    <span class="inline-block bg-[#484C65] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#D1B8F5] mr-2 mb-2">LLM</span>
                    <span class="inline-block bg-[#484C65] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#D1B8F5] mr-2 mb-2">NEURAL NETWORK</span>
                    <span class="inline-block bg-[#484C65] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#D1B8F5] mr-2 mb-2">MACHINE LEARNING</span>

        </div>
      </div>
    </div>
  </div>
  


  <div class="my-5 rounded overflow-hidden hover:scale-105 ease-in duration-300 mx-auto container max-w-lg dark:bg-gray-800 shadow-lg ">
    <div class="h-2/4 sm:h-64 overflow-hidden">
    <Link href='/quant'>
      <Image class="w-full rounded-t"
        src={quant}
        width='600'
        alt="/"/>
        </Link>
    </div>
    <h2 className='flex justify-start -mt-12 ml-[130px] tracking-widest text-white text-2xl font-bold uppercase'>MN Quants</h2>
    
    <div class="flex justify-start px-5 -mt-14 mb-5">
      <span clspanss="block relative h-32 w-32">
        <img alt="Photo by aldi sigun on Unsplash"
          src="https://media.licdn.com/dms/image/C4E0BAQHlIc_RrRI6cw/company-logo_200_200/0/1623627256307?e=2147483647&v=beta&t=IuJv6tNnxvJDgEfX6wFZwn0Xpk8ptGa1RUB43XIAGNg"
          class="mx-auto object-cover rounded-full h-24 w-24 bg-white p-1" />
          
      </span>
    </div>
    <div class="">
      <div class="px-7 mb-8">
        <h2 class="text-3xl font-bold text-green-800 dark:text-gray-300">Quantitative Developer</h2>
        <p class="text-gray-400 mt-2 dark:text-gray-400">Fall 2022 - Present</p>
        <p class="mt-2 text-gray-600 dark:text-gray-300">Develop software to support quantitative research, trading, and risk management activities.
Build backtesting platforms that allow traders and researchers to test the performance of quantitative models using historical data

</p>
        <div className='px-6 pt-4 pb-2'>
                    <span class="inline-block bg-[#AF838B] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#F9AFB0] mr-2 mb-2">PYTHON</span>
                    
                    <span class="inline-block bg-[#AC9673] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#F3CC8A] mr-2 mb-2">PANDAS</span>
                    <span class="inline-block bg-[#AC9673] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#F3CC8A] mr-2 mb-2">STATISTICS</span>
                    <span class="inline-block bg-[#AC9673] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#F3CC8A] mr-2 mb-2">NUMPY</span>
                    <span class="inline-block bg-[#484C65] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#D1B8F5] mr-2 mb-2">GRAPHING</span>
                    <span class="inline-block bg-[#484C65] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#D1B8F5] mr-2 mb-2">QUANTITATIVE ANALYSIS</span>
                    <span class="inline-block bg-[#484C65] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#D1B8F5] mr-2 mb-2">ALGORITHMS</span>

        </div>
      </div>
    </div>
  </div>


  <div class="my-5 rounded overflow-hidden hover:scale-105 ease-in duration-300 mx-auto container max-w-lg dark:bg-gray-800 shadow-lg ">
    <div class="h-2/4 sm:h-64 overflow-hidden">

      <Image class="w-full rounded-t"
        src={data}
        alt="/"/>

    </div>
    <h2 className='flex justify-start -mt-12 ml-[130px] tracking-widest text-white text-2xl font-bold uppercase'>FuzeMee</h2>
    
    <div class="flex justify-start px-5 -mt-14 mb-5">
      <span clspanss="block relative h-32 w-32">
        <img alt="Photo by aldi sigun on Unsplash"
          src="https://framerusercontent.com/images/tJu1B0jnoi7nFGROxaF6i9c.png"
          class="mx-auto object-cover rounded-full h-24 w-24 bg-white p-1" />
          
      </span>
    </div>
    <div class="">
      <div class="px-7 mb-8">
        <h2 class="text-3xl font-bold text-green-800 dark:text-gray-300">UI/UX Data Analyst Intern</h2>
        <p class="text-gray-400 mt-2 dark:text-gray-400">Fall 2022 - Spring 2023</p>
        <p class="mt-2 text-gray-600 dark:text-gray-300">Provided insights into the front-end user experience via mobile application data analysis.
        Collaborated with the development team to improve app features and mitigate technical risks</p>
        <div className='px-6 pt-4 pb-2'>
                    <span class="inline-block bg-[#AF838B] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#F9AFB0] mr-2 mb-2">PYTHON</span>
                    <span class="inline-block bg-[#484C65] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#D1B8F5] mr-2 mb-2">DATA ANALYSIS</span>
                    <span class="inline-block bg-[#484C65] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#D1B8F5] mr-2 mb-2">FRONTEND DESIGN</span>
                    <span class="inline-block bg-[#484C65] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#D1B8F5] mr-2 mb-2">GRAPHING</span>
        </div>
      </div>
    </div>
  </div>

  <div class="my-5 rounded overflow-hidden hover:scale-105 ease-in duration-300 mx-auto container max-w-lg dark:bg-gray-800 shadow-lg ">
    <div class="h-2/4 sm:h-64 overflow-hidden">

      <Image class="w-full rounded-t"
        src={ota}
        alt="/"/>

    </div>
    <h2 className='flex justify-start -mt-12 ml-[130px] tracking-widest text-white text-2xl font-bold uppercase'>OTA</h2>
    
    <div class="flex justify-start px-5 -mt-14 mb-5">
      <span clspanss="block relative h-32 w-32">
        <img alt="Photo by aldi sigun on Unsplash"
          src="https://yt3.googleusercontent.com/ytc/AGIKgqN12dpuVmQaPA1baRB7_Lj186j5t81UCcFKLYl98g=s900-c-k-c0x00ffffff-no-rj"
          class="mx-auto object-cover rounded-full h-24 w-24 bg-white p-1" />
          
      </span>
    </div>
    <div class="">
      <div class="px-7 mb-8">
        <h2 class="text-3xl font-bold text-green-800 dark:text-gray-300">Business Dev Trading Intern</h2>
        <p class="text-gray-400 mt-2 dark:text-gray-400">Summer 2022 - Fall 2022</p>
        <p class="mt-2 text-gray-600 dark:text-gray-300">Backtested different market indicators in Python and tested multiple complex strategies revolving 
        around price action in order to provide data on patented concepts. Streamlined business development with technology integration. </p>
        <div className='px-6 pt-4 pb-2'>
                    <span class="inline-block bg-[#AF838B] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#F9AFB0] mr-2 mb-2">PYTHON</span>
                    <span class="inline-block bg-[#AC9673] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#F3CC8A] mr-2 mb-2">PANDAS</span>
                    <span class="inline-block bg-[#AC9673] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#F3CC8A] mr-2 mb-2">STATISTICS</span>
                    <span class="inline-block bg-[#AC9673] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#F3CC8A] mr-2 mb-2">MATPLOT</span>
                    <span class="inline-block bg-[#AC9673] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#F3CC8A] mr-2 mb-2">NUMPY</span>
                    <span class="inline-block bg-[#484C65] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#D1B8F5] mr-2 mb-2">GRAPHING</span>

        </div>
      </div>
    </div>
  </div>

</div>
</div>
  )
}

export default Experience;
