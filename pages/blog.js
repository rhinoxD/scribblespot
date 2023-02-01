import Link from 'next/link'

import styles from '../styles/Blog.module.css'

const Blog = ({ blogs }) => {
  return (
    <div className='main'>
      <div className={styles.blogs}>
        {blogs.map((blog) => {
          return (
            <Link href={`/blogpost/${blog.slug}`} key={blog.slug}>
              <div className={styles.card}>
                <h2>{blog.title}</h2>
                <p>{blog.content.substring(0, 150)}...</p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch('http://localhost:3000/api/blogs')
  const blogs = await res.json()
  return {
    props: { blogs }, // will be passed to the page component as props
  }
}

export default Blog
