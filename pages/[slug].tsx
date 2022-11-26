import { useRouter } from 'next/router'
import Nav from '../components/Nav'

const SlugPage = () => {
  const { asPath } = useRouter()
  return (
    <>
      <Nav />
      <p>Hello, I am the {asPath} page</p>
    </>
  )
}

export default SlugPage
