/* eslint-disable react/jsx-key */
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Title } from 'slides/pages/Title'
import { Outline } from 'slides/pages/Outline'
import { End } from './pages/End'
import { Slide } from '../../domain/model/Slide/slide'
import { IntroMe } from './pages/IntroMe'
import { Footfold1 } from './pages/Footfold1'
import { SectionTitle } from './components/SectionTitle'
import { DelveApplication1 } from './pages/DelveApplication1'
import { Footfold2 } from './pages/Footfold2'
import { DelveWebSite1 } from './pages/DelveWebSite1'
import { DelveWebsite2 } from './pages/DelveWebsite2'
import { DelveWebsite3 } from './pages/DelveWebsite3'
import { DelveApplication2 } from './pages/DelveApplication2'
import { DelveApplication3 } from './pages/DelveApplication3'
import { DelveApplication4 } from './pages/DelveApplication4'
import { DelveApplication5 } from './pages/DelveApplication5'
import { DelveApplication6 } from './pages/DelveApplication6'
import { DelveApplication7 } from './pages/DelveApplication7'
import { DelveDB1 } from './pages/DelveDB1'
import { DelveDB2 } from './pages/DelveDB2'
import { DelveDB3 } from './pages/DelveDB3'
import { System1 } from './pages/System1'
import { System2 } from './pages/System2'
import { System3 } from './pages/System3'
import { System4 } from './pages/System4'
import { System5 } from './pages/System5'
import { System6 } from './pages/System6'
import { System7 } from './pages/System7'
import { System8 } from './pages/System8'
import { SumUp } from './pages/SumUp'

export const Slides: Slide[] = [
  Title,
  IntroMe,
  Outline,
  SectionTitle('足がかり'),
  Footfold1,
  Footfold2,
  SectionTitle('Webサイトの裏側'),
  DelveWebSite1,
  DelveWebsite2,
  DelveWebsite3,
  SectionTitle('アプリケーション'),
  DelveApplication1,
  DelveApplication2,
  DelveApplication3,
  DelveApplication4,
  DelveApplication5,
  DelveApplication6,
  DelveApplication7,
  SectionTitle('データベース'),
  DelveDB1,
  DelveDB2,
  DelveDB3,
  SectionTitle('ITシステムの構築'),
  System1,
  System2,
  System3,
  System4,
  System5,
  System6,
  System7,
  System8,
  SectionTitle('まとめ'),
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
