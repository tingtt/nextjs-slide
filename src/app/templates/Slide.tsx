import { SlideContainer } from 'app/atoms/SlideContainer'
import { SlideControlGroup } from 'app/molecules/SlideControlGroup'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'

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

  const [page, setPage] = useState(initialPage)

  const toggleFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else {
      document.body.requestFullscreen()
    }
  }

  const keydown = useCallback((e: { key: string }) => {
    if (e.key === 'f') {
      toggleFullScreen()
    }
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', keydown, false)
    document.addEventListener('fullscreenchange', () => {
      if (document.fullscreenElement) {
        setFullScreen(true)
      } else {
        setFullScreen(false)
      }
    })
  }, [keydown])

  return (
    <div
      className={`
        h-screen max-h-screen max-w-full relative
        flex flex-col items-center justify-center
      `}
    >
      <SlideContainer>{slides[page - 1]}</SlideContainer>
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
          previous={() => {
            if (page == 1) {
              return
            }
            router.replace('/' + (page - 1).toString())
            setPage(page - 1)
          }}
          isFirst={page == 1}
          next={() => {
            if (page == slides.length) {
              return
            }
            router.replace('/' + (page + 1).toString())
            setPage(page + 1)
          }}
          isEnd={page == slides.length}
          toggleGrid={() => {}}
          isPlaying={false}
          play={() => {}}
          pause={() => {}}
        />
      </div>
    </div>
  )
}
