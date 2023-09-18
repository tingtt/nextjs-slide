import { PageNum } from 'slides/components/PageNum'
import { Slide } from '../../../domain/model/Slide/slide'
import { Header } from 'slides/components/Header'

export const Outline = new Slide(() => (
  <div className='layout-common flex-col'>
    <Header />
    <div className='text-xl font-light'>Outline</div>
    <div className='flex flex-col h-[80%] justify-center pt-10'>
      <ul
        className={`
          list-disc list-inside space-y-16 text-lg
          [&>ul]:list-disc [&>ul]:list-inside [&>ul]:space-y-12 [&>ul]:ml-24
        `}
      >
        <li>足がかり</li>
        <li>Webサイトってどういう仕組み？</li>
        <li>アプリケーションって何？</li>
        <li>データはどこに保存されるの？</li>
        <li>モバイルアプリと機械学習関連で補足</li>
      </ul>
    </div>
    <PageNum className='absolute right-10 bottom-12' />
  </div>
))
