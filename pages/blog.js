import Link from 'next/link'
import styles from '../styles/Blog.module.css'

const Blog = () => {
  return (
    <div className='main'>
      <div className={styles.blogs}>
        <Link href='/blogpost/blog1'>
          <div className={styles.card}>
            <h3>Blog 1</h3>
            <p>Description..</p>
          </div>
        </Link>
        <Link href='/blogpost/blog2'>
          <div className={styles.card}>
            <h3>Blog 2</h3>
            <p>Description..</p>
          </div>
        </Link>
        <Link href='/blogpost/blog3'>
          <div className={styles.card}>
            <h3>Blog 3</h3>
            <p>Description..</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Blog
