import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import styles from '../../styles/BlogPost.module.css'

// TODO: Find the file corresponding to the slug
// TODO: Populate them inside the page

const Slug = () => {
  const router = useRouter()

  const [blog, setBlog] = useState()

  useEffect(() => {
    if (!router.isReady) return
    const fetchData = async () => {
      const res = await fetch(
        `http://localhost:3000/api/getblog?slug=${router.query.slug}`
      )
      const data = await res.json()
      setBlog(data)
    }
    fetchData()
  }, [router.isReady])

  return (
    <div className='main'>
      <h1>{blog && blog.title}</h1>
      <hr className={styles.hr} />
      <p className={styles.p}>{blog && blog.content}</p>
    </div>
  )
}

export default Slug
