import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Education from '../components/Education'
import Experience from '../components/Experience'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div> 
      <Head>
        <title>Aryan | Software Engineer</title>
        <meta name="description" content="Generate by create next app" />
        <link rel="shortcut icon" type="image/x-icon" href="favicon2.png"/>
      </Head>
      <Navbar />
      <Main/>
      <Experience/>
      <Projects />
    </div>
  )
}

