import { SlideContainer } from 'common/atoms/SlideContainer'
import { SlideControlGroup } from 'common/molecules/SlideControlGroup'
import { useState } from 'react'

export const Title = () => {
  const [openInFull, setOpenInFull] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)

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
      <div
        className={`
          absolute bottom-2 left-4
          animate-[fadeout_0.1s_linear_forwards]
          hover:animate-[fadein_0.1s_linear_forwards]
        `}
      >
        <SlideControlGroup
          openInFull={openInFull}
          setOpenInFull={setOpenInFull}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
        />
      </div>
    </div>
  )
}
