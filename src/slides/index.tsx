/* eslint-disable react/jsx-key */
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Slide } from '../../domain/model/Slide/slide'
import { Title } from 'slides/pages/Title'
import { SectionTitle } from './components/SectionTitle'
import { End } from './pages/End'

import { IntroMe } from './pages/IntroMe'
import { Outline } from 'slides/pages/Outline'
import { SumUp } from './pages/SumUp'
import { AboutCICD } from './pages/AboutCICD'
import { Compare1 } from './pages/Compare1'
import { Compare2 } from './pages/Compare2'
import { Compare3 } from './pages/Compare3'
import { Compare4 } from './pages/Compare4'
import { Compare5 } from './pages/Compare5'
import { Compare6 } from './pages/Compare6'

export const Slides: Slide[] = [
  Title,
  IntroMe,
  Outline,
  SectionTitle('CI/CDとは'),
  AboutCICD,
  SectionTitle('比較'),
  Compare1,
  Compare2,
  Compare3,
  Compare4,
  Compare5,
  Compare6,
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
