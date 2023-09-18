import { PageNum } from 'slides/components/PageNum'
import { Slide } from '../../../domain/model/Slide/slide'
import { Header } from 'slides/components/Header'

export const DelveWebsite3 = new Slide(() => (
  <div className='layout-common flex-col'>
    <Header text='Webサイトの仕組み' />
    <div className='flex h-full justify-center items-center'>
      <div className={`text-3xl font-light`}>小難しくなってくるので分解 →</div>
    </div>
    <PageNum className='absolute right-10 bottom-12' />
  </div>
))
