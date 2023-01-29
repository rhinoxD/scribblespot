import Link from 'next/link'
import { useRouter } from 'next/router'

const Slug = () => {
  const router = useRouter()
  const { slug } = router.query
  return (
    <>
      <div>{slug}</div>
      <Link href='/'>Back to home</Link>
    </>
  )
}

export default Slug
