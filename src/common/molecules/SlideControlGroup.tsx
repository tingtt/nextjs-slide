import { ButtonNextSlide } from 'common/atoms/ButtonNextSlide'
import { ButtonPlay } from 'common/atoms/ButtonPlay'
import { ButtonPreviousSlide } from 'common/atoms/ButtonPreviousSlide'
import { ButtonToggleFullScreen } from 'common/atoms/ButtonToggleFullScreen'
import { ButtonToggleGrid } from 'common/atoms/ButtonToggleGrid'
import { ButtonToggleTheme } from 'common/atoms/ButtonToggleTheme'
import { Divider } from 'common/atoms/Divider'
import { Dispatch, SetStateAction } from 'react'
import { SlideControlSlideShowDropdown } from './SlideControlSlideShowDropdown'

export const SlideControlGroup = ({
  isPlaying,
  play,
  pause,

  openInFull,
  setOpenInFull,
  openMenu,
  setOpenMenu,
}: {
  isPlaying: boolean
  play: () => void
  pause: () => void

  openInFull: boolean
  setOpenInFull: Dispatch<SetStateAction<boolean>>
  openMenu: boolean
  setOpenMenu: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <div
      className={`
        bg-base-100 rounded-lg shadow-lg
        border-[0.5px] border-slate-50 dark:border-stone-600
        flex items-center p-2 gap-2
      `}
    >
      <ButtonToggleFullScreen
        open={openInFull}
        onClick={() => {
          setOpenInFull(!openInFull)
        }}
      />
      <ButtonPreviousSlide
        onClick={() => {
          setOpenMenu(false)
        }}
      />
      <ButtonNextSlide
        onClick={() => {
          setOpenMenu(false)
        }}
      />
      <ButtonToggleGrid
        onClick={() => {
          setOpenMenu(false)
        }}
      />
      <Divider orientation={'horizontal'} />
      <ButtonToggleTheme
        onClickCallback={() => {
          setOpenMenu(false)
        }}
      />
      <div className='dropdown dropdown-top'>
        <ButtonPlay
          isPlaying={isPlaying}
          onClick={() => {
            setOpenMenu(!openMenu)
          }}
        />
        <SlideControlSlideShowDropdown
          isPlaying={isPlaying}
          playOnClick={play}
          pauseOnClick={pause}
          menuOpen={openMenu}
          setMenuOpen={setOpenMenu}
        />
      </div>
    </div>
  )
}
