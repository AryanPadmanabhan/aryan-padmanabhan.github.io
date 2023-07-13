import Image from 'next/image';
import React from 'react';
import stocks from '../public/assets/stocks.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import unh from '../public/assets/unh.png'

const uhg = () => {
  return (
    <div className='w-full dark:bg-gray-800'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={unh}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>United Health Group</h2>
          <h3>Software Engineer Intern / ML Engineer Intern</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8 text-white'>
        <div className='col-span-4'>
          <h1 className='text-white pb-4'>Overview</h1>
          <p className='pb-8'>
            At United Health Group, I am working in the RapidAI team for Optum Technology. This team has three distinct products, Image Proccessing Platform (IPP)
            , Pill Validation with AI (AIPV), and Behavior Oriented Fraud Detection (BOFD). As an intern, I am able to work alongside the team with their
            patented technologies to bring Machine Learning solutions to the healthcare industry.
          </p>
          <h2>My Work: Computer Vision</h2>
          <p className='pb-5'>
            Computer Vision is the proccess of deriving information from digital images. This is what allows for object detection models such as facial recognition,
            self-driving cars, and even anomaly detection. I used Computer Vision technology in order to extract useful information from medical documents more
            efficiently and in a cost-manner. 
          </p>

          <p className='pb-8'>
            I constructed multiple Convolutional Neural Networks with various architecture types and trained these models on thousands of medical documents
            in order to extract specific information. This was done on scanned and unscanned documents, so a Optical Character Recognition (OCR) 
            algorithm was required as well. 

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
                <RiRadioButtonFill className='pr-1' /> PyTorch
              </p>
              <p className='text-white py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> MiniLang
              </p>
              <p className='text-white py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Pinecone
              </p>
              <p className='text-white py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Neural Networks
              </p>
              <p className='text-white py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> LLMs
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

export default uhg;