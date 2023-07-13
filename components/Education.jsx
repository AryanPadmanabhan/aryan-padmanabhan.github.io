import React from 'react'
import umn from '../public/assets/umn.png'
import shako2 from '../public/assets/shako2.png'
import Image from 'next/image'

export const Education = () => {
  return (
    <div id='education' className='w-full dark:bg-gray-900'>
    <div className='max-w-[1240px] mx-auto px-2'>
            <h1 className='flex 
max-w-full px-10 justify-evenly mx-auto uppercase tracking-[15px] text-white text-4xl py-10'>Education</h1>

            <div className='grid md:grid-cols-2 gap-8'>

              <div class=" dark:bg-gray-800 my-5 max-w-lg rounded overflow-hidden shadow-lg hover:scale-105 ease-in duration-300 mx-auto">
              <Image className='rounded-xl' src={umn}/>
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2 tracking-widest flex justify-center items-center text-white">University of Minnesota</div>
                    <p class="text-[#C1C1C1] text-sm">Currently, I am a sophmore at the University of Minneosta - Twin Cities pursuing a major in Computer Science</p>
                </div>
                  <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-[#484C65] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#D1B8F5] mr-2 mb-2">DATA STRUCTURES & ALGORITHMS</span>
                    <span class="inline-block bg-[#484C65] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#D1B8F5] mr-2 mb-2">CALCULUS II</span>
                    <span class="inline-block bg-[#484C65] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#D1B8F5] mr-2 mb-2">DISCRETE STRUCUTRES</span>
 
                 </div>
              </div>
              
              <div class=" dark:bg-gray-800 my-5 max-w-lg rounded overflow-hidden shadow-lg hover:scale-105 ease-in duration-300 mx-auto ">
              <Image className='rounded-xl' width='650' height='306' src={shako2}/>
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2 tracking-widest flex justify-center items-center text-white">Shakopee High School</div>
                    <p class="text-[#C1C1C1] text-sm">I graduted from the Shakopee High School with a 3.9 GPA in 2022</p>
                </div>
                  <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-[#484C65] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#D1B8F5] mr-2 mb-2">PROBABILITY & STATISTICS</span>
                    <span class="inline-block bg-[#484C65] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#D1B8F5] mr-2 mb-2">CALCULUS I</span>
                    <span class="inline-block bg-[#484C65] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#D1B8F5] mr-2 mb-2">PROGRAMMING</span>
                 </div>
              </div>
              </div>
        </div>
        </div>
  )
}
export default Education;
