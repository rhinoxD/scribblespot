import Head from 'next/head'
import Image from 'next/image'

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
          {/* <img
            className={styles.myImg}
            src='/hero-img3.png'
            width={500}
            height={300}
            alt='hero-img'
          /> */}
        </div>

        <div className={styles.description}>
          <p>Where developers come to stay ahead of the curve.</p>
        </div>

        <div className={styles.blogs}>
          <h2>Latest Blogs</h2>
          <div className={styles.blogItem}>
            <h3>An Introduction of JavaScript</h3>
            <p>
              JavaScript was initially created to 'make web pages alive'. The
              programs in this language are called scripts. They can be written
              right in a web page’s HTML and run automatically as the page
              loads.Scripts are provided and executed as plain text. They don’t
              need special preparation or compilation to run.In this aspect,
              JavaScript is very different from another language called Java.
            </p>
            <Link href={`/blogpost/intro-to-js`}>
              <button className={styles.btn}>Read More</button>
            </Link>
          </div>

          <div className={styles.blogItem}>
            <h3>Introduction to ReactJS: A Guide for Beginners</h3>
            <p>
              ReactJS is an open-source JavaScript library created by Facebook's
              Jordan Walke to make user interfaces for both web and mobile
              systems. React was first used in 2011 on Facebook's newsfeed. In
              2012, it was used on Instagram, and in 2013 it was made available
              to the public. React is best for applications that change their
              data quickly and dynamically. It can show the parts of the UI that
              are changing without re-rendering the whole page. This makes the
              user experience much faster. If you are still wondering what
              ReactJS is all about, let's go through the introduction to ReactJS
              and its related aspects.
            </p>
            <Link href={`/blogpost/intro-to-react`}>
              <button className={styles.btn}>Read More</button>
            </Link>
          </div>

          <div className={styles.blogItem}>
            <h3>An Introduction to Node.js</h3>
            <p>
              Node.js is an open-source and cross-platform JavaScript runtime
              environment. It is a popular tool for almost any kind of project!
              Node.js runs the V8 JavaScript engine, the core of Google Chrome,
              outside of the browser. This allows Node.js to be very performant.
              A Node.js app runs in a single process, without creating a new
              thread for every request. Node.js provides a set of asynchronous
              I/O primitives in its standard library that prevent JavaScript
              code from blocking and generally, libraries in Node.js are written
              using non-blocking paradigms, making blocking behavior the
              exception rather than the norm.
            </p>
            <Link href={`/blogpost/intro-to-node`}>
              <button className={styles.btn}>Read More</button>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
