import { ButtonNextSlide } from 'app/atoms/ButtonNextSlide'
import { ButtonPreviousSlide } from 'app/atoms/ButtonPreviousSlide'
import {
  ButtonToggleFullScreen,
  PropsButtonToggleFullScreen,
} from 'app/atoms/ButtonToggleFullScreen'
import {
  ButtonToggleTheme,
  PropsButtonToggleTheme,
} from 'app/atoms/ButtonToggleTheme'
import { Divider } from 'app/atoms/Divider'

type PropsSlideControlGroup = {
  fullscreen: PropsButtonToggleFullScreen
  slide: {
    previous: () => void
    isFirst: boolean
    next: () => void
    isEnd: boolean
  }
  theme: PropsButtonToggleTheme
}

export const SlideControlGroup = ({
  fullscreen,
  slide,
  theme,
}: PropsSlideControlGroup) => {
  return (
    <div
      className={`
        bg-base-100 rounded-lg shadow-lg
        border-[0.5px] border-slate-50 dark:border-stone-600
        flex items-center p-2 gap-2
      `}
    >
      <ButtonToggleFullScreen
        enabled={fullscreen.enabled}
        toggle={fullscreen.toggle}
      />
      <ButtonPreviousSlide
        onClick={() => {
          // setOpenMenu(false)
          slide.previous()
        }}
        disabled={slide.isFirst}
      />
      <ButtonNextSlide
        onClick={() => {
          // setOpenMenu(false)
          slide.next()
        }}
        disabled={slide.isEnd}
      />
      <Divider orientation={'horizontal'} />
      <ButtonToggleTheme
        isDarkMode={theme.isDarkMode}
        toggle={() => {
          // setOpenMenu(false)
          theme.toggle()
        }}
      />
    </div>
  )
}
