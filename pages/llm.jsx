import Image from 'next/image';
import React from 'react';
import ml from '../public/assets/ml.png'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const llm = () => {
  return (
    <div className='w-full dark:bg-gray-800'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={ml}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>
          LLM POWERED Q&A</h2>
          <h3>Python / Pinecone</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8 text-white'>
        <div className='col-span-4'>
        <h1>Overview</h1>
          <p className='pb-8'>
            With the rise of Transformer based neural networks to constuct complex Large Language Models (LLMs), it's easy to see how incredible these powerful architectures are.
            ChatGPT has been fine-tuned for the purpose to answer questions, so I took advantage of this in order to introduce my own sets of information for information extraction. 
          </p>
          <p className='pb-8'>
            This program will upload data to a pinecone database by converting the data into vector embeddings and then storing the vectors to the cloud. The vector embeddings allow for deep semantic 
            search. Then, a query can take place in which the model will use a similarity search to locate the specific vectors that correlate to the query. Afterwards, it will use the power of 
            LLMs to answer the question (query) with only the information provided from the vectors. 
          </p>

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4 text-white'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-white py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> ChatGPT
              </p>
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
                <RiRadioButtonFill className='pr-1' /> Pinecone
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

export default llm;