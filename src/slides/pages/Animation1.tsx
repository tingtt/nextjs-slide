import { Slide } from '../../../domain/model/Slide/slide'

export const Animation1 = new Slide(
  () => (
    <div className='layout-common flex-col'>
      <div className='text-7xl font-light'>Animation</div>
      <div className='mt-4 flex gap-4 text-5xl font-light'>
        <div className='click-1'>Appear</div>
        <div>/</div>
        <div className='click-2'>Desappear</div>
      </div>
      <div className='flex h-full justify-evenly items-center'>
        <div className={`text-9xl font-light click-only-1 click-4`}>1</div>
        <div className={`text-9xl font-light click-only-2 click-4`}>2</div>
        <div className={`text-9xl font-light click-only-3 click-4`}>3</div>
        <div className={`text-9xl font-light click-hide-only-4`}>4</div>
        <div className={`text-9xl font-light click-hide-only-5`}>5</div>
      </div>
    </div>
  ),
  5
)
