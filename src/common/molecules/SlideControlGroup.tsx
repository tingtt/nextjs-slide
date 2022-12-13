import { ButtonNextSlide } from 'common/atoms/ButtonNextSlide'
import { ButtonPlay } from 'common/atoms/ButtonPlay'
import { ButtonPreviousSlide } from 'common/atoms/ButtonPreviousSlide'
import { ButtonToggleFullScreen } from 'common/atoms/ButtonToggleFullScreen'
import { ButtonToggleGrid } from 'common/atoms/ButtonToggleGrid'
import { ButtonToggleTheme } from 'common/atoms/ButtonToggleTheme'
import { Divider } from 'common/atoms/Divider'
import { Dispatch, SetStateAction } from 'react'

export const SlideControlGroup = ({
  openInFull,
  setOpenInFull,
  openMenu,
  setOpenMenu,
}: {
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
        dark={false}
        onClick={() => {
          setOpenMenu(false)
        }}
      />
      <ButtonPlay
        playing={false}
        playOnClick={() => {}}
        menuOpen={openMenu}
        setMenuOpen={setOpenMenu}
      />
    </div>
  )
}
