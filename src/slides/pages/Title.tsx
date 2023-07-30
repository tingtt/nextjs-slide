import { Slide } from '../../../domain/model/Slide/slide'

export const Title = new Slide(() => (
  <div className='layout-common flex flex-col justify-center'>
    <div className='absolute top-20 right-24 flex flex-col items-end gap-4'>
      <p>つながる勉強会 #21</p>
      <p>2023/07/30</p>
    </div>
    <div className='text-3xl font-light'>おうち CI/CD 比較</div>
    <div className='divider w-full' />
    <div className='absolute bottom-20 right-24 text-lg'>by 拓てぃん</div>
  </div>
))
