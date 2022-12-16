import { ButtonGhostSquare } from './_ButtonGhostSquare'
import { SvgArrow } from './SvgArrow'

export const ButtonPreviousSlide = ({
  disabled,
  onClick,
}: {
  disabled?: boolean
  onClick?: () => void
}) => (
  <ButtonGhostSquare
    onClick={() => {
      if (onClick == undefined || disabled) return
      onClick()
    }}
    className={disabled ? 'no-animation hover:!bg-base-100' : ''}
  >
    <SvgArrow
      width={24}
      height={24}
      orientation={'left'}
      className={disabled ? 'opacity-20' : ''}
    />
  </ButtonGhostSquare>
)
