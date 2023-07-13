import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Testing from '../components/Testing'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div> 
      <Head>
        <title>Aryan | Software Engineer</title>
        <meta name="description" content="Generate by create next app" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Navbar />
      <Main/>
      <Skills/>
      <Education/>
      <Experience/>
      <Projects />
      {/* <Testing /> */}
      {/* <Skills/> */}
    </div>
  )
}

