import { PageNum } from 'slides/components/PageNum'
import { Slide } from '../../../domain/model/Slide/slide'
import { Header } from 'slides/components/Header'
import { TextError } from 'slides/components/TextError'

export const Compare2 = new Slide(
  () => (
    <div className='layout-common flex-col'>
      <Header text='比較' />
      <div className='text-xl font-light'>Push型</div>
      <br />
      <br />
      <br />
      <img src='/svg/cd_push.svg' />
      <br />
      <br />
      <br />
      <br />
      <div className='click-1 text-lg'>
        サーバーに対して
        <TextError className='text-xl mx-4'>外部から</TextError>
        アップデート処理を実行する。
      </div>
      <PageNum className='absolute right-10 bottom-12' />
    </div>
  ),
  1
)
