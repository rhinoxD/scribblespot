import Head from 'next/head'
import Image from 'next/image'

import styles from '@/styles/Home.module.css'

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
      <main className='main'>
        <h1>Scribblespot</h1>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.myImg}
            // src='/hero-img2.png'
            // src='/hero-img.png'
            src='/hero-img3.png'
            width={500}
            height={300}
            // style={{
            //   position: 'absolute',
            //   clip: 'rect(150px, 450px, 400px, 350px)',
            //   clipPath: 'circle(100px at 80% 65%)'
            // }}
            alt='hero-img'
          />
        </div>
        <div className={styles.description}>
          <p>Where developers come to stay ahead of the curve.</p>
        </div>
        <div className={styles.blogs}>
          <h2>Latest Blogs</h2>
          <div className={styles.blogItem}>
            <h3>Blog 1</h3>
            <p>Description..</p>
          </div>
          <div className={styles.blogItem}>
            <h3>Blog 2</h3>
            <p>Description..</p>
          </div>
          <div className={styles.blogItem}>
            <h3>Blog 3</h3>
            <p>Description..</p>
          </div>
        </div>
      </main>
    </>
  )
}
