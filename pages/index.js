import Head from 'next/head'
import { motion } from 'framer-motion'
import { Prov }from '@/components/public/home/Startform' 

export default function Home() {
  return (
    <>
      <Head>
        <title>MyBlog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        key="home"
        style={{ width: '100%' }}
      >
        <h1>Holas</h1>
      <Prov />
      </motion.div>
    </>
  )
}