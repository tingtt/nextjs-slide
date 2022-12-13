import { Dispatch, SetStateAction, useState } from 'react'
import { sleep } from '../../../domain/model/Util/sleep'
import { ButtonGhostSquare } from './_ButtonGhostSquare'
import { SvgChecked } from './SvgChecked'
import { SvgPlay } from './SvgPlay'
import { useSlideShowLoop } from '../../../domain/model/Slide/slideShow'

export const ButtonPlay = ({
  playing,
  playOnClick,
  menuOpen,
  setMenuOpen,
}: {
  playing: boolean
  playOnClick: () => void
  menuOpen: boolean
  setMenuOpen: Dispatch<SetStateAction<boolean>>
}) => {
  const [loop, setLoop] = useSlideShowLoop()

  return (
    <div className='dropdown dropdown-top'>
      <ButtonGhostSquare
        tabIndex={0}
        onClick={() => {
          setMenuOpen(!menuOpen)
        }}
      >
        <SvgPlay width={22} height={22} />
      </ButtonGhostSquare>
      <ul
        tabIndex={0}
        className={`
          dropdown-content menu p-2 mb-2 shadow bg-base-100 rounded-box w-52
          dark:border-stone-600 dark:border-[0.5px]
          ${menuOpen ? '!visible !opacity-100' : '!invisible !opacity-0'}
        `}
      >
        <li>
          <a
            className='btn-ghost justify-between'
            onClick={async () => {
              playOnClick()
              await sleep(100)
              setMenuOpen(false)
            }}
          >
            Play {playing && <SvgChecked width={20} height={20} />}
          </a>
        </li>
        <li>
          <a
            className='btn-ghost justify-between'
            onClick={async () => {
              setLoop(!loop)
              await sleep(100)
            }}
          >
            Loop {loop && <SvgChecked width={20} height={20} />}
          </a>
        </li>
      </ul>
    </div>
  )
}
