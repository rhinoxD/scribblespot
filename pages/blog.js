import { useEffect, useState } from 'react'
import Link from 'next/link'

import styles from '../styles/Blog.module.css'

// TODO: Collect all the files from blogdata directory
// TODO: Iterate through them and display them

const Blog = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:3000/api/blogs')
      const data = await res.json()
      setBlogs(data)
    }
    fetchData()
  }, [])

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

export default Blog
