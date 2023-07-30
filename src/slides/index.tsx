/* eslint-disable react/jsx-key */
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Slide } from '../../domain/model/Slide/slide'
import { Title } from 'slides/pages/Title'
import { SectionTitle } from './components/SectionTitle'
import { End } from './pages/End'

import { Outline } from 'slides/pages/Outline'
import { SumUp } from './pages/SumUp'

export const Slides: Slide[] = [
  Title,
  Outline,
  SectionTitle('Section 1'),
  SectionTitle('Sum up'),
  SumUp,
  End,
]

export const SlideContent = ({ page }: { page: number }) => {
  const router = useRouter()
  useEffect(() => {
    if (page < 1 || page > Slides.length) {
      router.push('/1').then(router.reload)
    }
  }, [page, router])

  return Slides[page - 1]
}
