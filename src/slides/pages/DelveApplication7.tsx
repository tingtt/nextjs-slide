import { PageNum } from 'slides/components/PageNum'
import { Slide } from '../../../domain/model/Slide/slide'
import { Header } from 'slides/components/Header'

export const DelveApplication7 = new Slide(() => (
  <div className='layout-common flex-col'>
    <Header text='アプリケーション' />
    <div className='flex flex-col h-full justify-center items-center gap-8'>
      <div className={`text-3xl font-light`}>
        アプリケーションって意外と単純
      </div>
    </div>
    <PageNum className='absolute right-10 bottom-12' />
  </div>
))
