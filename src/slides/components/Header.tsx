import { ImgLogo } from './ImgLogo'

export const Header = ({ text }: { text?: string }) => (
  <>
    <div className='absolute top-8 left-12 text-lg opacity-40'>
      {text ?? ''}
    </div>
    <div
      className={`
        absolute top-0 left-[2%] w-[96%] py-3 flex justify-end
        border-b-2 border-b-primary
      `}
    >
      <ImgLogo />
    </div>
    <div className='h-32' />
  </>
)
