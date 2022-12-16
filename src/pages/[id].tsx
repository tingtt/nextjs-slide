import { NextPage } from 'next'
import { NextRouter, useRouter } from 'next/router'
import { Slides } from 'slides'
import { Slide } from 'app/templates/Slide'
import { useEffect } from 'react'

const useSlides = (router: NextRouter) => {
  const page = router.query['id']
  useEffect(() => {
    if (
      typeof page != 'string' ||
      isNaN(+page) ||
      +page < 1 ||
      +page > Slides.length
    ) {
      router.push('/1').then(router.reload)
      return
    }
  })
  if (typeof page != 'string') {
    return { page: null, content: [] }
  }
  if (isNaN(+page)) {
    return { page: null, content: [] }
  }
  return { page: +page, slides: Slides }
}

const SlidePage: NextPage = () => {
  const router = useRouter()
  const { page, slides } = useSlides(router)

  if (page == null) {
    return <></>
  }
  return <Slide page={page} slides={slides} />
}

export const getServerSideProps = async () => {
  return { props: {} }
}

export default SlidePage
