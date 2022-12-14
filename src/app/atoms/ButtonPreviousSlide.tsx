import { ButtonGhostSquare } from './_ButtonGhostSquare'
import { SvgArrow } from './SvgArrow'

export const ButtonPreviousSlide = ({
  disabled,
  onClick,
}: {
  disabled?: boolean
  onClick?: () => void
}) => (
  <ButtonGhostSquare onClick={onClick} disabled={disabled}>
    <SvgArrow width={24} height={24} orientation={'left'} />
  </ButtonGhostSquare>
)
