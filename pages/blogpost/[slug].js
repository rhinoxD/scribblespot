import * as fs from 'fs'

import styles from '../../styles/BlogPost.module.css'

const Slug = ({ blog }) => {
  return (
    <div className={styles.main}>
      <h1>{blog && blog.title}</h1>
      <hr className={styles.hr} />
      <p className={styles.p}>{blog && blog.content}</p>
    </div>
  )
}

// api/blogpost/[slug].js

// Generates `/blogpost/intro-to-js`, `/blogpost/intro-to-next`,
// `/blogpost/intro-to-node`, `/blogpost/intro-to-react`
export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'intro-to-js' } },
      { params: { slug: 'intro-to-next' } },
      { params: { slug: 'intro-to-node' } },
      { params: { slug: 'intro-to-react' } },
      { params: { slug: 'intro-to-java' } },
      { params: { slug: 'intro-to-django' } },
      { params: { slug: 'intro-to-python' } },
    ],
    fallback: false, // can also be true or 'blocking'
  }
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context) {
  const res = await fs.promises.readFile(
    `blogdata/${context.params.slug}.json`,
    'utf-8'
  )

  const blog = JSON.parse(res)

  return {
    props: { blog }, // will be passed to the page component as props
  }
}

// export async function getServerSideProps(context) {
//   const res = await fetch(
//     `http://localhost:3000/api/getblog?slug=${context.query.slug}`
//   )
//   const blog = await res.json()
//   return {
//     props: { blog }, // will be passed to the page component as props
//   }
// }

export default Slug
