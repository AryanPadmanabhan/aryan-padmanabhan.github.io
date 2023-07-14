import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import umn from '../public/assets/umn.png'
import shako2 from '../public/assets/shako2.png'
import stocks from '../public/assets/stocks.png';
import ml from '../public/assets/ml.png'
import portOpt from '../public/assets/portOp.png'
import code from '../public/assets/code.png'
import sys from '../public/assets/sys.png'
import bb from '../public/assets/bb.png'
import unh from '../public/assets/unh.png'
import nn from '../public/assets/nn.png'
import quant from '../public/assets/quant.png'
import python from '../public/assets/Python.png'
import java from '../public/assets/java.png'
import pytorch from '../public/assets/pytorch.png'
import html from '../public/assets/html.png'
import css from '../public/assets/css.png'
import js from '../public/assets/javascript.png'
import react from '../public/assets/react.png'
import pine from '../public/assets/pine.png'
// import twitchImg from '../public/assets/projects/twitch.jpg'
import ProjectItem from './ProjectItem';
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Button} from '@chakra-ui/react'
import Link from 'next/link'




export const Projects = () => {
  return (

    <div id='projects'className='w-full bg-gray-900'>
      
        <div className='max-w-[1240px] mx-auto px-2'>
            <h1 className='flex max-w-full px-10 justify-evenly mx-auto uppercase tracking-[15px] text-white text-4xl py-10'>Projects</h1>

            <div className='grid md:grid-cols-3 gap-8'>

              <div class="bg-gray-800 my-5 max-w-lg rounded overflow-hidden shadow-lg hover:scale-105 ease-in duration-300 mx-auto">
                {/* <img class='rounded-t-lg' src='https://www.minnpost.com/wp-content/uploads/2022/01/NorthropUofM640.png' alt=''/> */}
                <Link href= '/signol'>
                <Image className='rounded-xl opacity-50' width='650' height='306'src={stocks}/>
        </Link>
                
                <div class="px-6 py-4">
                  <h1 class="font-bold text-xl mb-2 tracking-widest flex justify-center items-center text-white">SIGNOL</h1>
                    <p class="text-[#C1C1C1] text-base">Signol is a program designed to provide financial data and trade ideas. 
                    It consists of algorithms for locating prime opportunities with an 82% 
                    success rate as well as data on liquidity, relative volume, and other 
                    derivative data. </p>
                </div>
                  <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-[#AF838B] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#F9AFB0] mr-2 mb-2">PYTHON</span>
                    <span class="inline-block bg-[#AF838B] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#F9AFB0] mr-2 mb-2">JAVASCRIPT</span>
                    <span class="inline-block bg-[#AC9673] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#F3CC8A] mr-2 mb-2">PANDAS</span>
                    <span class="inline-block bg-[#AC9673] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#F3CC8A] mr-2 mb-2">NUMPY</span>
                    <span class="inline-block bg-[#6A9986] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#98E3B2] mr-2 mb-2">HEROKU</span>
                    <span class="inline-block bg-[#6A9986] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#98E3B2] mr-2 mb-2">GOOGLE APP SCRIPTS</span>
                 </div>
              </div>
              
              <div class="bg-gray-800 my-5 max-w-lg rounded overflow-hidden shadow-lg hover:scale-105 ease-in duration-300 mx-auto">
              <Link href= '/llm'>
              <Image className='rounded-xl group-hover:opacity-10' src={ml}/>
              </Link>
                {/* <img class='w-full' src='https://spaces4learning.com/-/media/EDU/S4L/Showcase/2019/pK12/Shakopee01x640.jpg' alt=''/> */}
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2 tracking-widest flex justify-center items-center text-white">LLM POWERED Q&A</div>
                    <p class="text-[#C1C1C1] text-base">Trained a Transformer based Q&A Large Learning Model (LLM) with datasets for information extraction 
              Converted information to vector embedding on Pinecone Database for light-weight storage</p>
                </div>
                  <div class="px-6 pt-4 pb-2">
                  <span class="inline-block bg-[#AF838B] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#F9AFB0] mr-2 mb-2">PYTHON</span>
                    <span class="inline-block bg-[#AC9673] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#F3CC8A] mr-2 mb-2">PANDAS</span>
                    <span class="inline-block bg-[#AC9673] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#F3CC8A] mr-2 mb-2">NUMPY</span>
                    <span class="inline-block bg-[#6A9986] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#98E3B2] mr-2 mb-2">PINECONE</span>
                    <span class="inline-block bg-[#484C65] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#D1B8F5] mr-2 mb-2">EMBEDDINGS</span>
                    <span class="inline-block bg-[#484C65] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#D1B8F5] mr-2 mb-2">LLM</span>
                 
                 </div>
              
                 
              </div>
              <div class="bg-gray-800 my-5 max-w-lg rounded overflow-hidden shadow-lg hover:scale-105 ease-in duration-300 mx-auto">
                {/* <img class='w-full' src='https://spaces4learning.com/-/media/EDU/S4L/Showcase/2019/pK12/Shakopee01x640.jpg' alt=''/> */}
                <Link href= '/portOpt'>
                <Image className='rounded-xl group-hover:opacity-10' width='610' height='380'src={portOpt}/>
                </Link>
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2 tracking-widest flex justify-center items-center text-white">PORTFOLIO OPTIMIZATION</div>
                    <p class="text-[#C1C1C1] text-base">Led the development of a Python-based software tool to enable data-driven investment decisions
                    by achieving significant improvements in portfolio performance with algorithms for covariance matrix estimation and risk-return analysis. 
                    </p>
                </div>
                  <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-[#AF838B] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#F9AFB0] mr-2 mb-2">PYTHON</span>
                    <span class="inline-block bg-[#AC9673] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#F3CC8A] mr-2 mb-2">PANDAS</span>
                    <span class="inline-block bg-[#AC9673] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#F3CC8A] mr-2 mb-2">NUMPY</span>
                    <span class="inline-block bg-[#AC9673] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#F3CC8A] mr-2 mb-2">STATISTICS</span>
                    <span class="inline-block bg-[#484C65] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#D1B8F5] mr-2 mb-2">GRAPHING</span>
                    <span class="inline-block bg-[#484C65] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#D1B8F5] mr-2 mb-2">PORTFOLIO THEORY</span>
                 </div>
                 
              </div>

              <div class="bg-gray-800 my-5 max-w-lg rounded overflow-hidden shadow-lg hover:scale-105 ease-in duration-300 mx-auto">
                {/* <img class='w-full' src='https://spaces4learning.com/-/media/EDU/S4L/Showcase/2019/pK12/Shakopee01x640.jpg' alt=''/> */}
                <Link href= '/#home'>
                <Image className='rounded-xl group-hover:opacity-10' width='700' height='306' src={code}/>
                </Link>
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2 tracking-widest flex justify-center items-center text-white">PORTFOLIO WEBSITE</div>
                    <p class="text-[#C1C1C1] text-base">Created a portfolio website to showcase my career as a Computer Science student. Used Javascript, 
                    HTML, Tailwind CSS, and Next.js (React). 
                    </p>
                </div>
                  <div class="px-6 pt-4 pb-2">
        
                    <span class="inline-block bg-[#AF838B] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#F9AFB0] mr-2 mb-2">JAVASCRIPT</span>
                    <span class="inline-block bg-[#AF838B] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#F9AFB0] mr-2 mb-2">HTML</span>
                    <span class="inline-block bg-[#AF838B] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#F9AFB0] mr-2 mb-2">CSS</span>
                    <span class="inline-block bg-[#6A9986] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#98E3B2] mr-2 mb-2">TAILWIND CSS</span>
                    <span class="inline-block bg-[#6A9986] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#98E3B2] mr-2 mb-2">NEXTJS</span>
                    <span class="inline-block bg-[#6A9986] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#98E3B2] mr-2 mb-2">REACT</span>
                 </div>
                 
              </div>
              <div class="bg-gray-800 my-5 max-w-lg rounded overflow-hidden shadow-lg hover:scale-105 ease-in duration-300 mx-auto">
                {/* <img class='w-full' src='https://spaces4learning.com/-/media/EDU/S4L/Showcase/2019/pK12/Shakopee01x640.jpg' alt=''/> */}
                <Link href= '/sys'>
                <Image className='rounded-xl group-hover:opacity-10' width='610' height='380'src={sys}/>
                </Link>
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2 tracking-widest flex justify-center items-center text-white">SYS TRADING STRATEGY</div>
                    <p class="text-[#C1C1C1] text-base">Sourced & sorted +OHLC in Python and calculating risk-adjusted returns. 
                    Conducted A/B testing on various technical strategies to find improvements/differences and curated 
                    a strategy to be 69% successful in various market ETFs and broad-market ETFs
                    </p>
                </div>
                  <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-[#AF838B] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#F9AFB0] mr-2 mb-2">PYTHON</span>
                    <span class="inline-block bg-[#AC9673] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#F3CC8A] mr-2 mb-2">PANDAS</span>
                    <span class="inline-block bg-[#AC9673] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#F3CC8A] mr-2 mb-2">NUMPY</span>
                    <span class="inline-block bg-[#AC9673] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#F3CC8A] mr-2 mb-2">STATISTICS</span>
                    <span class="inline-block bg-[#484C65] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#D1B8F5] mr-2 mb-2">GRAPHING</span>
            
                 </div>
                 
              </div>

              <div class="bg-gray-800 my-5 max-w-lg rounded overflow-hidden shadow-lg hover:scale-105 ease-in duration-300 mx-auto">
                {/* <img class='w-full' src='https://spaces4learning.com/-/media/EDU/S4L/Showcase/2019/pK12/Shakopee01x640.jpg' alt=''/> */}
                <Link href= '/bestbuy'>
                <Image className='rounded-xl group-hover:opacity-10' width='610' height='380'src={bb}/>
                </Link>
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2 tracking-widest flex justify-center items-center text-white">BEST BUY CURBSIDE PICKUP</div>
                    <p class="text-[#C1C1C1] text-base">Developed a curbside pickup web application for Best Buy using Python and 
                    HTML to include features such as a QR code generator/scanner and used SQL to manage consumer and product data needed to run the app 
                    effectively. Demonstrated PoC to higher-ups at Best Buy. 
                    </p>
                </div>
                  <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-[#AF838B] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#F9AFB0] mr-2 mb-2">PYTHON</span>
                    <span class="inline-block bg-[#AF838B] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#F9AFB0] mr-2 mb-2">CSS</span>
                    <span class="inline-block bg-[#AF838B] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#F9AFB0] mr-2 mb-2">HTML</span>
                    <span class="inline-block bg-[#AF838B] opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-[#F9AFB0] mr-2 mb-2">SQL</span>
            
                 </div>
                 
              </div>
              
              </div>
              
              
              </div>
       
        </div> 
      //  </div>
    // </div>
    // </div>

  )
}
export default Projects



