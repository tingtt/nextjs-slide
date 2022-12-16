import { SlideContainer } from 'app/atoms/SlideContainer'
import { SlideControlGroup } from 'app/molecules/SlideControlGroup'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useFullScreen } from '../../../domain/model/Slide/fullscreen'
import { usePagination } from '../../../domain/model/Slide/pagination'

export const Slide = ({
  page: initialPage,
  slides,
}: {
  page: number
  slides: JSX.Element[]
}) => {
  const router = useRouter()
  const [fullScreen, setFullScreen] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)

  const { slide, previous, isFirst, next, isEnd, keydownEventListener } =
    usePagination(initialPage, router, slides)
  useEffect(() => {
    window.addEventListener('keydown', keydownEventListener, false)
    //* NOTE: add keydown event listener only once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { toggle: toggleFullScreen } = useFullScreen(setFullScreen)

  return (
    <div
      className={`
        h-screen max-h-screen max-w-full relative
        flex flex-col items-center justify-center
      `}
    >
      <SlideContainer>{slide}</SlideContainer>
      <div
        className={`
          absolute bottom-2 left-4
          animate-[fadeout_0.1s_linear_forwards]
          hover:animate-[fadein_0.1s_linear_forwards]
        `}
      >
        <SlideControlGroup
          openInFull={fullScreen}
          toggleFullScreen={toggleFullScreen}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          previous={previous}
          isFirst={isFirst}
          next={next}
          isEnd={isEnd}
          toggleGrid={() => {}}
          isPlaying={false}
          play={() => {}}
          pause={() => {}}
        />
      </div>
    </div>
  )
}
