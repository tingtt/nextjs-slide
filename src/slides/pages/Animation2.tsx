import { Slide } from '../../../domain/model/Slide/slide'

export const Animation2 = new Slide(
  () => (
    <div className='layout-common flex-col'>
      <div className='text-7xl font-light click-hide-5'>Animation</div>{' '}
      <div className='mt-4 flex gap-4 text-5xl font-light'>Replace</div>
      <div className='flex h-full justify-center items-center [&>*]:absolute'>
        <div className={`text-9xl font-light click-hide-1`}>1</div>
        <div className={`text-9xl font-light click-only-1`}>2</div>
        <div className={`text-9xl font-light click-2`}>3</div>
      </div>
    </div>
  ),
  2
)
