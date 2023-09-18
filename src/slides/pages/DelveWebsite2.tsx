import { PageNum } from 'slides/components/PageNum'
import { Slide } from '../../../domain/model/Slide/slide'
import { Header } from 'slides/components/Header'

export const DelveWebsite2 = new Slide(
  () => (
    <div className='layout-common flex-col'>
      <Header text='Webサイトの仕組み' />
      <div className='flex flex-col h-full justify-center items-center gap-8'>
        <div className={`text-3xl font-light`}>
          Web
          <span>
            <span className='absolute click-hide-2'>サーバー</span>
            <span className='click-2 text-error'>サーバー</span>
          </span>
          （アプリケーション）
        </div>
        <div className='click-1 text-4xl rotate-90'>=</div>
        <div className='click-1 text-xl text-center leading-relaxed'>
          PCやスマホなどからの
          <span>
            <span className='absolute click-only-1'>リクエストに対して</span>
            <span className='click-2 text-error'>リクエストに対して</span>
          </span>{' '}
          HTML, CSS,
          <br />
          JavaScript などの
          <span>
            <span className='absolute click-only-1'>
              情報を返す役割を持ったソフトウェア
            </span>
            <span className='click-2 text-error'>
              情報を返す役割を持ったソフトウェア
            </span>
          </span>
        </div>
      </div>
      <PageNum className='absolute right-10 bottom-12' />
    </div>
  ),
  2
)
