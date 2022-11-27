import { useRouter } from 'next/router'
import Header from '../../../components/header'

export default function CommentPage() {
  const router = useRouter()
  const pid = router.query.pid as string
  const comment = router.query.comment as string

  console.log(router)

  return (
    <>
      <Header />
      <h1>Post: {pid}</h1>
      <h1>Comment: {comment}</h1>
    </>
  )
}
