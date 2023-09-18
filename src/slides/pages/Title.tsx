import { Slide } from '../../../domain/model/Slide/slide'
import { ImgLogo } from 'slides/components/ImgLogo'

export const Title = new Slide(() => (
  <div className='layout-common items-center'>
    <div className='absolute top-20 right-24 flex flex-col items-end gap-4'>
      <p>ECCコンピュータ専門学校</p>
      <p>2023/09/19</p>
    </div>
    <div className='text-3xl font-light'>技術コンテスト</div>
    <div className='absolute bottom-12 left-24'>
      <ImgLogo />
    </div>
    <div className='absolute bottom-20 right-24 text-lg'>ハートビーツ 藤島</div>
  </div>
))
