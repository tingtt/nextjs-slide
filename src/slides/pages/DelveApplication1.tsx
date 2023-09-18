import { PageNum } from 'slides/components/PageNum'
import { Slide } from '../../../domain/model/Slide/slide'
import { Header } from 'slides/components/Header'

export const DelveApplication1 = new Slide(
  () => (
    <div className='layout-common flex-col'>
      <Header text='アプリケーション' />
      <div className='flex flex-col h-full justify-center items-center gap-8'>
        <div className={`text-3xl font-light`}>アプリケーション</div>
        <div className='click-1 text-4xl rotate-90'>=</div>
        <div className='click-1 text-2xl'>OS上で動くすべてのソフトウェア</div>
        <div className='click-2 text-4xl rotate-90'>≒</div>
        <div className='click-2 text-2xl text-center text-error'>
          なにか入力したら処理して結果を返してくれる
        </div>
      </div>
      <PageNum className='absolute right-10 bottom-12' />
    </div>
  ),
  2
)
