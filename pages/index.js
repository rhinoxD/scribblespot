import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

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
      <nav class={styles.mainNav}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
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
