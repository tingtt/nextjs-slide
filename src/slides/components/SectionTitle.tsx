import { Slide } from '../../../domain/model/Slide/slide'
import { PageNum } from './PageNum'

export const SectionTitle = (title: string) =>
  new Slide(() => (
    <div className='layout-common flex items-center gap-10'>
      <div className='bg-primary w-8 h-[160px]' />
      <div className='text-2xl font-light'>{title}</div>
      <PageNum className='absolute right-10 bottom-12' />
    </div>
  ))
