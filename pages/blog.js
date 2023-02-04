import { useState } from 'react'
import * as fs from 'fs'
import Link from 'next/link'
import InfiniteScroll from 'react-infinite-scroll-component'

import styles from '../styles/Blog.module.css'

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.blogs)
  const [count, setCount] = useState(2)

  const fetchData = async () => {
    let res = await fetch(`http://localhost:3000/api/blogs?count=${count + 2}`)
    setCount(count + 2)
    let data = await res.json()
    setBlogs(data)
  }

  return (
    <div className='main'>
      <InfiniteScroll
        dataLength={blogs.length} //This is important field to render the next data
        next={fetchData}
        hasMore={props.allCount !== blogs.length}
        loader={<h4 className={styles.h4}>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className={styles.blogs}>
          {blogs.map((blog) => {
            return (
              <Link href={`/blogpost/${blog.slug}`} key={blog.slug}>
                <div className={styles.card}>
                  <h2>{blog.title}</h2>
                  <p>{blog.metadesc.substring(0, 150)}...</p>
                </div>
              </Link>
            )
          })}
        </div>
      </InfiniteScroll>
    </div>
  )
}

export async function getStaticProps(context) {
  let data = await fs.promises.readdir('blogdata')
  let allCount = data.length
  let blogs = []
  let blog
  for (let i = 0; i < 5; i++) {
    const item = data[i]

    blog = await fs.promises.readFile(`blogdata/${item}`, 'utf-8')
    blogs.push(JSON.parse(blog))
  }
  return {
    props: { blogs, allCount }, // will be passed to the page component as props
  }
}

// export async function getServerSideProps(context) {
//   const res = await fetch('http://localhost:3000/api/blogs')
//   const blogs = await res.json()
//   return {
//     props: { blogs }, // will be passed to the page component as props
//   }
// }

export default Blog
