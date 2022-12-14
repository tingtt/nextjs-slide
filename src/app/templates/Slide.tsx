import { SlideContainer } from 'app/atoms/SlideContainer'
import { SlideControlGroup } from 'app/molecules/SlideControlGroup'
import { useState } from 'react'

export const Slide = ({ content }: { content: JSX.Element }) => {
  const [openInFull, setOpenInFull] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div
      className={`
        h-screen max-h-screen max-w-full relative
        flex flex-col items-center justify-center
      `}
    >
      <SlideContainer>{content}</SlideContainer>
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
          isPlaying={false}
          play={() => {}}
          pause={() => {}}
        />
      </div>
    </div>
  )
}
