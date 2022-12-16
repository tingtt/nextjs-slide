import { ButtonNextSlide } from 'app/atoms/ButtonNextSlide'
import { ButtonPlay } from 'app/atoms/ButtonPlay'
import { ButtonPreviousSlide } from 'app/atoms/ButtonPreviousSlide'
import { ButtonToggleFullScreen } from 'app/atoms/ButtonToggleFullScreen'
import { ButtonToggleGrid } from 'app/atoms/ButtonToggleGrid'
import { ButtonToggleTheme } from 'app/atoms/ButtonToggleTheme'
import { Divider } from 'app/atoms/Divider'
import { Dispatch, SetStateAction } from 'react'
import { SlideControlSlideShowDropdown } from './SlideControlSlideShowDropdown'

export const SlideControlGroup = ({
  openInFull,
  toggleFullScreen,

  openMenu,
  setOpenMenu,

  previous,
  isFirst,
  next,
  isEnd,
}: {
  openInFull: boolean
  toggleFullScreen: () => void

  openMenu: boolean
  setOpenMenu: Dispatch<SetStateAction<boolean>>

  previous: () => void
  isFirst: boolean
  next: () => void
  isEnd: boolean

  // toggleGrid: () => void

  // isPlaying: boolean
  // play: () => void
  // pause: () => void
}) => {
  return (
    <div
      className={`
        bg-base-100 rounded-lg shadow-lg
        border-[0.5px] border-slate-50 dark:border-stone-600
        flex items-center p-2 gap-2
      `}
    >
      <ButtonToggleFullScreen open={openInFull} onClick={toggleFullScreen} />
      <ButtonPreviousSlide
        onClick={() => {
          setOpenMenu(false)
          previous()
        }}
        disabled={isFirst}
      />
      <ButtonNextSlide
        onClick={() => {
          setOpenMenu(false)
          next()
        }}
        disabled={isEnd}
      />
      {/* TODO: Add slide grid view toggle */}
      {/* <ButtonToggleGrid
        onClick={() => {
          setOpenMenu(false)
          toggleGrid()
        }}
      /> */}
      <Divider orientation={'horizontal'} />
      <ButtonToggleTheme
        onClickCallback={() => {
          setOpenMenu(false)
        }}
      />
      {/* TODO: Add controls control slide show (auto pagination) */}
      {/* <div className='dropdown dropdown-top'>
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
      </div> */}
    </div>
  )
}
