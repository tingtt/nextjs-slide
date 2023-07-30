import { PageNum } from 'slides/components/PageNum'
import { Slide } from '../../../domain/model/Slide/slide'
import { Header } from 'slides/components/Header'
import { TextError } from 'slides/components/TextError'

export const Compare4 = new Slide(() => (
  <div className='layout-common flex-col'>
    <Header text='比較' />
    <div className='text-xl font-light'>構築コスト</div>
    <br />
    <br />
    <div className='grid grid-cols-2 gap-x-4 gap-y-8'>
      <div>
        <div className='text-center text-xl'>Push型</div>
        <br />
        <div className='h-[300px] flex justify-center'>
          <img src='/svg/cd_push.svg' className='h-[300px]' />
        </div>
        <br />
        <br />
        <ul
          className={`
              list-disc list-inside space-y-12 text-lg ml-24
              [&>ul]:list-disc [&>ul]:list-inside [&>ul]:space-y-12 [&>ul]:ml-24
            `}
        >
          <li>Gitリポジトリ: &nbsp; 1 ~</li>
          <li>サーバー台数: &nbsp; 1 ~</li>
        </ul>
      </div>
      <div>
        <div className='text-center text-xl'>Pull型</div>
        <br />
        <div className='h-[300px] flex justify-center'>
          <img src='/svg/cd_pull.svg' className='h-[300px]' />
        </div>
        <br />
        <br />
        <ul
          className={`
              list-disc list-inside space-y-12 text-lg ml-24
              [&>ul]:list-disc [&>ul]:list-inside [&>ul]:space-y-12 [&>ul]:ml-24
            `}
        >
          <li>Gitリポジトリ: &nbsp; 1 ~</li>
          <li>
            サーバー台数: &nbsp; <TextError>3 ~</TextError>
          </li>
          <li>コンテナレジストリ: &nbsp; 1</li>
        </ul>
      </div>
    </div>
    <PageNum className='absolute right-10 bottom-12' />
  </div>
))
