import { NextPage } from 'next'
import { NextRouter, useRouter } from 'next/router'
import { SlideContent } from 'slides'
import { Slide } from 'app/templates/Slide'
import {
  getServerSideProps,
  PropsPageCount,
} from '../../domain/model/Slide/pageCount'
import { useEffect } from 'react'

type Slide = React.ReactNode

const useSlides = (router: NextRouter) => {
  const pageNum = router.query['id']
  useEffect(() => {
    if (typeof pageNum != 'string' || isNaN(+pageNum)) {
      router.push('/1').then(router.reload)
    }
  })
  if (typeof pageNum != 'string') {
    return { number: null, content: null }
  }
  if (isNaN(+pageNum)) {
    return { number: null, content: null }
  }
  return { number: +pageNum, content: <SlideContent page={+pageNum} /> }
}

const SlidePage: NextPage<PropsPageCount> = ({ pageCount }) => {
  const router = useRouter()
  const { number, content } = useSlides(router)

  if (number == null) {
    return <></>
  }
  return <Slide content={content} />
}

export { getServerSideProps }

export default SlidePage
