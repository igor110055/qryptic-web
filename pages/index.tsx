import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Landing from '../components/Landing'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <Landing />
      <footer className={styles.footer}>

          Powered by Qryptic
          <span className={styles.logo}>
            <Image src="/qrypt-logo.svg" alt="Qryptic Logo" width={40} height={18} />
          </span>
      </footer>
    </div>
  )
}

export default Home
