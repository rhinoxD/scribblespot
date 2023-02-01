import styles from '../../styles/BlogPost.module.css'

const Slug = ({ blog }) => {
  return (
    <div className='main'>
      <h1>{blog && blog.title}</h1>
      <hr className={styles.hr} />
      <p className={styles.p}>{blog && blog.content}</p>
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `http://localhost:3000/api/getblog?slug=${context.query.slug}`
  )
  const blog = await res.json()
  return {
    props: { blog }, // will be passed to the page component as props
  }
}

export default Slug
