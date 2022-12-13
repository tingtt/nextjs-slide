import { SlideContainer } from 'atoms/_SlideContainer'

export const Title = () => {
  return (
    <div
      className={`
        h-screen max-h-screen max-w-full relative
        flex flex-col items-center justify-center
      `}
    >
      <SlideContainer>
        <div className='flex h-full items-center'>
          <div className='text-9xl font-light'>Title</div>
        </div>
      </SlideContainer>
    </div>
  )
}
