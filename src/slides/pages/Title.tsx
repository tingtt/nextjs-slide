import { Slide } from '../../../domain/model/Slide/slide'

export const Title = new Slide(() => (
  <div className='layout-common items-center'>
    <div className='absolute top-20 right-24 flex flex-col items-end gap-4'>
      <p>Organization</p>
      <p>YYYY/MM/DD</p>
    </div>
    <div className='text-3xl font-light'>Title</div>
    <div className='absolute bottom-20 right-24 text-lg'>Presenter</div>
  </div>
))
