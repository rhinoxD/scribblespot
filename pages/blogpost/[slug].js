import { useRouter } from 'next/router'

import styles from '../../styles/BlogPost.module.css'

const Slug = () => {
  const router = useRouter()
  console.log(router)
  return (
    <div className='main'>
      <h1>{router.query.slug}</h1>
      <hr className={styles.hr} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsum
        maxime dicta tenetur hic soluta, nesciunt eaque consequuntur officia,
        maiores nemo sit provident earum iusto adipisci temporibus, nobis illo
        expedita.
      </p>
    </div>
  )
}

export default Slug
