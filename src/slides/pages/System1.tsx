import { PageNum } from 'slides/components/PageNum'
import { Slide } from '../../../domain/model/Slide/slide'
import { Header } from 'slides/components/Header'

export const System1 = new Slide(() => (
  <div className='layout-common flex-col'>
    <Header text='ITシステム' />
    <div className='flex h-full justify-center items-center'>
      <div className={`text-3xl font-light`}>組み立てる →</div>
    </div>
    <PageNum className='absolute right-10 bottom-12' />
  </div>
))
