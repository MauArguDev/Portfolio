import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mauro's Portfolio</title>
      </Head>

      <h1 className='p-10 text-red-500'>
        Let's buils an awesome Portfolio
      </h1>
    </div>
  )
}

export default Home
