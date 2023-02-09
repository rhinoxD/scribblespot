// import * as fs from 'fs'

import styles from '../../styles/BlogPost.module.css'

const Slug = ({ blog }) => {
  return (
    <div className={styles.main}>
      <h1>{blog[0] && blog[0].title}</h1>
      <hr className={styles.hr} />
      <p className={styles.p}>{blog[0] && blog[0].content}</p>
    </div>
  )
}

// api/blogpost/[slug].js

// // Generates `/blogpost/intro-to-js`, `/blogpost/intro-to-next`,
// // `/blogpost/intro-to-node`, `/blogpost/intro-to-react`
// export async function getStaticPaths() {
//   const res = await fs.promises.readdir(`blogdata`)
//   const data = res.map((blog) => {
//     return { params: { slug: blog.split('.')[0] } }
//   })

//   return {
//     paths: data,
//     fallback: false, // can also be true or 'blocking'
//   }
// }

// // `getStaticPaths` requires using `getStaticProps`
// export async function getStaticProps(context) {
//   const res = await fs.promises.readFile(
//     `blogdata/${context.params.slug}.json`,
//     'utf-8'
//   )

//   const blog = JSON.parse(res)

//   return {
//     props: { blog }, // will be passed to the page component as props
//   }
// }

export async function getServerSideProps(context) {
  let url
  if (process.env.NODE_ENV === 'development') {
    url = process.env.LOCAL_URL
  }

  const res = await fetch(`${url}/api/getblog?slug=${context.query.slug}`)
  const blog = await res.json()

  console.log(blog)

  return {
    props: { blog: blog.data }, // will be passed to the page component as props
  }
}

export default Slug
