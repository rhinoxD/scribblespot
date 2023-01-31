import Link from 'next/link'
import styles from '../styles/Blog.module.css'

// TODO: Collect all the files from blogdata directory
// TODO: Iterate through them and display them

const Blog = () => {
  return (
    <div className='main'>
      <div className={styles.blogs}>
        <Link href='/blogpost/blog1'>
          <div className={styles.card}>
            <h2>Blog 1</h2>
            <p>Description..</p>
          </div>
        </Link>
        <Link href='/blogpost/blog2'>
          <div className={styles.card}>
            <h2>Blog 2</h2>
            <p>Description..</p>
          </div>
        </Link>
        <Link href='/blogpost/blog3'>
          <div className={styles.card}>
            <h2>Blog 3</h2>
            <p>Description..</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Blog
