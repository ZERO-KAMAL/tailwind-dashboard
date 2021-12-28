import Head from 'next/head'
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />
      </Head>

      <Navbar></Navbar>


    </>
  )
}
