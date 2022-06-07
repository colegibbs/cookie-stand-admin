import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Cookie Stand Admin</title>
    </Head>
    <Header />
    <main className='flex flex-col items-center'>
      <CookieForm />
      <CookieTable />
      <CookieDataPreview />
    </main>
    <Footer copyWriteYear = "2022"/>
    </>
  )
}

function Header() {
  return(
    <header className='bg-green-400 py-6 px-8 text-4xl'>
      <h1>Cookie Stand Admin</h1>
    </header>
  )
}

function CookieForm() {
  return(
    <p>cookie form</p>
  )
}

function CookieTable() {
  return(
    <p>Report Table Coming Soon...</p>
  )
}

function CookieDataPreview(){
  return(
    <p>cookie data preview</p>
  )
}

function Footer(props) {
  return(
    <footer className='bg-green-400 py-6 px-8'>
      <p>&copy;{props.copyWriteYear}</p>
    </footer>
  )
}
