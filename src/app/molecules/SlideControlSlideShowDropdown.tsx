import { Dispatch, SetStateAction } from 'react'
import { sleep } from '../../../domain/model/Util/sleep'
import { useSlideShowLoop } from '../../../domain/model/Slide/slideShow'
import { SvgChecked } from 'app/atoms/SvgChecked'

export const SlideControlSlideShowDropdown = ({
  isPlaying,
  playOnClick,
  pauseOnClick,
  menuOpen,
  setMenuOpen,
}: {
  isPlaying: boolean
  playOnClick: () => void
  pauseOnClick: () => void
  menuOpen: boolean
  setMenuOpen: Dispatch<SetStateAction<boolean>>
}) => {
  const [loop, setLoop] = useSlideShowLoop()

  return (
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
          Play {isPlaying && <SvgChecked width={20} height={20} />}
        </a>
      </li>
      <li>
        <a
          className='btn-ghost justify-between'
          onClick={async () => {
            setLoop(!loop)
            pauseOnClick()
            await sleep(100)
          }}
        >
          Loop {loop && <SvgChecked width={20} height={20} />}
        </a>
      </li>
    </ul>
  )
}
