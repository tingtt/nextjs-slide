import { SlideContainer } from 'app/atoms/SlideContainer'
import { SlideControlGroup } from 'app/molecules/SlideControlGroup'
import { useRouter } from 'next/router'
import React, { PropsWithChildren, useEffect, useState } from 'react'
import { useFullScreen } from '../../../domain/model/Slide/fullscreen'
import { usePagination } from '../../../domain/model/Slide/pagination'
import { useLayout } from '../../../domain/model/Slide/layout'
import { useTheme } from '../../../domain/model/Slide/theme'
import { Slide } from '../../../domain/model/Slide/slide'

export const TemplateSlide = ({
  page,
  click,
  slides,
}: {
  page: number
  click: number
  slides: Slide[]
}) => {
  const router = useRouter()
  const layout = useLayout(typeof window === 'undefined' ? undefined : window)
  const { toggleDarkMode, isDarkMode } = useTheme(
    typeof window === 'undefined' ? undefined : window
  )
  const [fullScreen, setFullScreen] = useState(false)

  const { slide, previous, isFirst, next, isEnd, keydownEventListener, style } =
    usePagination({ page, click }, router, slides)
  useEffect(() => {
    window.addEventListener('keydown', keydownEventListener, false)
    return () => {
      window.removeEventListener('keydown', keydownEventListener)
    }
  }, [keydownEventListener])

  const { toggle: toggleFullScreen } = useFullScreen(setFullScreen)

  if (slide == undefined) {
    return <></>
  }
  return (
    <ThemeProvider isDarkMode={isDarkMode}>
      <div
        className={`
          h-screen max-h-screen max-w-full relative
          flex flex-col items-center justify-center
        `}
      >
        <SlideContainer width={layout.width} height={layout.height}>
          {slide.render()}
          <style>{style}</style>
        </SlideContainer>
        <div
          className={`
            absolute bottom-2 left-4
            animate-controleler_fadeout hover:animate-controleler_fadein
          `}
        >
          <SlideControlGroup
            fullscreen={{
              enabled: fullScreen,
              toggle: toggleFullScreen,
            }}
            slide={{
              previous: previous,
              isFirst: isFirst,
              next: next,
              isEnd: isEnd,
            }}
            theme={{
              isDarkMode: isDarkMode,
              toggle: toggleDarkMode,
            }}
          />
        </div>
      </div>
    </ThemeProvider>
  )
}

const ThemeProvider = ({
  isDarkMode,
  children,
}: { isDarkMode: boolean } & PropsWithChildren) => {
  return (
    <div
      data-theme={isDarkMode ? 'dark' : 'light'}
      className={`${isDarkMode ? 'dark' : 'light'} bg-base-200`}
    >
      {children}
    </div>
  )
}
