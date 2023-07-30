import { PageNum } from 'slides/components/PageNum'
import { Slide } from '../../../domain/model/Slide/slide'
import { Header } from 'slides/components/Header'
import { TextError } from 'slides/components/TextError'

export const Compare3 = new Slide(
  () => (
    <div className='layout-common flex-col'>
      <Header text='比較' />
      <div className='text-xl font-light'>Pull型</div>
      <div className='h-[600px] flex justify-center'>
        <img src='/svg/cd_pull.svg' className='w-full' />
      </div>
      <div className='click-1 text-lg leading-normal'>
        <TextError className='text-xl'>
          サーバーに配置したエージェント
        </TextError>
        <br />
        がリポジトリの変更を検知し、アップデート処理を実行する。
      </div>
      <PageNum className='absolute right-10 bottom-12' />
    </div>
  ),
  1
)
