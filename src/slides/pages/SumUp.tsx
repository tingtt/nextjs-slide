import { PageNum } from 'slides/components/PageNum'
import { Slide } from '../../../domain/model/Slide/slide'
import { Header } from 'slides/components/Header'

export const SumUp = new Slide(() => (
  <div className='layout-common flex-col'>
    <Header />
    <div className='text-xl font-light'>まとめ</div>
    <div className='flex flex-col h-[80%] justify-center pt-10'>
      <ul
        className={`
          list-disc list-inside space-y-16 text-xl
          [&>ul]:list-disc [&>ul]:list-inside [&>ul]:space-y-12 [&>ul]:ml-24
        `}
      >
        <li>一つずつ深掘りして原則原理を理解する</li>
        <li>それぞれの技術を繋げてシステムを作る</li>
      </ul>
    </div>
    <PageNum className='absolute right-10 bottom-12' />
  </div>
))
