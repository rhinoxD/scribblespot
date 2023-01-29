import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Scribblespot</title>
        <meta
          name='description'
          content='A community for developers to share, learn and grow together.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <nav className={styles.mainNav}>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/blog'>Blog</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
      <main className={styles.main}>
        <h1>Scribblespot</h1>
        <div className={styles.description}>
          <p>Where developers come to stay ahead of the curve.</p>
        </div>
        <div className={styles.blogs}>
          <div className={styles.blogItem}>
            <h3>Blog 1</h3>
            <p>Description..</p>
          </div>
          <div className={styles.blogItem}>
            <h3>Blog 1</h3>
            <p>Description..</p>
          </div>
          <div className={styles.blogItem}>
            <h3>Blog 1</h3>
            <p>Description..</p>
          </div>
        </div>
      </main>
    </>
  )
}
