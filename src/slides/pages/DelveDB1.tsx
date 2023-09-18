import { PageNum } from 'slides/components/PageNum'
import { Slide } from '../../../domain/model/Slide/slide'
import { Header } from 'slides/components/Header'

export const DelveDB1 = new Slide(
  () => (
    <div className='layout-common flex-col'>
      <Header text='データベース' />
      <div className='flex flex-col h-full justify-center items-center gap-12'>
        <div className={`text-3xl font-light`}>データベース</div>
        <div className='click-1 text-4xl rotate-90'>=</div>
        <div className='click-1 text-3xl text-center leading-relaxed'>
          データを保存してくれる
          <br />
          <span>
            <span className='absolute click-only-1'>アプリケーション</span>
            <span className='click-2 text-error'>アプリケーション</span>
          </span>
        </div>
      </div>
      <PageNum className='absolute right-10 bottom-12' />
    </div>
  ),
  2
)
