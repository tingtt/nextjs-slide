import { PageNum } from 'slides/components/PageNum'
import { Slide } from '../../../domain/model/Slide/slide'
import { Header } from 'slides/components/Header'

export const Compare1 = new Slide(() => (
  <div className='layout-common flex-col'>
    <Header text='比較' />
    <div className='text-xl font-light'>CI/CDツール</div>
    <br />
    <br />
    <br />
    <div className='grid grid-cols-[1.5fr,1fr] gap-x-8 gap-y-16'>
      <div className='grid grid-cols-2 gap-32 items-center'>
        <img src='/img/circle-logo-stacked-white.png' />
        <img src='/svg/jenkins-white.svg' />
      </div>
      <div className='grid justify-center'>
        <img src='/svg/argo-white.svg' className='w-[90%] mx-auto' />
      </div>
      <div className='grid justify-center mt-8 text-xl'>Push型</div>
      <div className='grid justify-center mt-8 text-xl'>Pull型</div>
    </div>
    <PageNum className='absolute right-10 bottom-12' />
  </div>
))
