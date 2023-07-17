/* eslint-disable react/jsx-key */
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Title } from 'slides/pages/Title'
import { Summary } from 'slides/pages/Summary'
import { End } from './pages/End'
import { Slide } from '../../domain/model/Slide/slide'

export const Slides: Slide[] = [Title, Summary, End]

export const SlideContent = ({ page }: { page: number }) => {
  const router = useRouter()
  useEffect(() => {
    if (page < 1 || page > Slides.length) {
      router.push('/1').then(router.reload)
    }
  }, [page, router])

  return Slides[page - 1]
}
