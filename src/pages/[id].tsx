import { NextPage } from 'next'
import { NextRouter, useRouter } from 'next/router'
import { Slides } from 'slides'
import { TemplateSlide } from 'app/templates/Slide'
import { useEffect } from 'react'

const useSlides = (router: NextRouter) => {
  const queryPage = router.query['id']
  const queryClick = router.query['click']
  useEffect(() => {
    if (
      typeof queryPage != 'string' ||
      isNaN(+queryPage) ||
      +queryPage < 1 ||
      +queryPage > Slides.length
    ) {
      router.push('/1').then(router.reload)
      return
    }
  })
  if (typeof queryPage != 'string') {
    return { page: null }
  }
  if (isNaN(+queryPage)) {
    return { page: null }
  }
  let click = 0
  if (typeof queryClick == 'string' && !isNaN(+queryClick)) {
    click = +queryClick
  }
  return { page: +queryPage, click: click, slides: Slides }
}

const SlidePage: NextPage = () => {
  const router = useRouter()
  const { page, click, slides } = useSlides(router)

  if (page == null) {
    return <></>
  }
  return <TemplateSlide page={page} click={click} slides={slides} />
}

export const getServerSideProps = async () => {
  return { props: {} }
}

export default SlidePage
