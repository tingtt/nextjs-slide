import { PageNum } from 'slides/components/PageNum'
import { Slide } from '../../../domain/model/Slide/slide'
import { Header } from 'slides/components/Header'
import { TextError } from 'slides/components/TextError'

export const AboutCICD = new Slide(
  () => (
    <div className='layout-common flex-col'>
      <Header text='CI/CDとは' />
      <div className='text-xl font-light'>CI/CDツール</div>
      <br />
      <br />
      <br />
      <div className='click-1'>
        <div className='text-xl'>用途</div>
        <br />
        <br />
        <div className='ml-8 text-lg'>CI/CDパイプラインを構築</div>
        <br />
        <br />
        <div className='ml-16 text-lg'>
          → &nbsp; &nbsp; アプリケーション開発における
          <TextError>自動テスト・自動ビルド・自動デプロイ</TextError>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className='click-2'>
        <div className='text-xl'>利用者</div>
        <br />
        <br />
        <div className='ml-8 text-lg'>
          インフラエンジニア・DevOpsエンジニア・（開発に携わるエンジニア）
        </div>
      </div>
      <PageNum className='absolute right-10 bottom-12' />
    </div>
  ),
  2
)
