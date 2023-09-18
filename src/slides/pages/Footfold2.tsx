import { PageNum } from 'slides/components/PageNum'
import { Slide } from '../../../domain/model/Slide/slide'
import { Header } from 'slides/components/Header'

export const Footfold2 = new Slide(() => (
  <div className='layout-common flex-col'>
    <Header text='足がかり' />
    <div className='flex h-full justify-center items-center'>
      <div className={`text-3xl font-light`}>一緒にやってみよう！</div>
    </div>
    <PageNum className='absolute right-10 bottom-12' />
  </div>
))
