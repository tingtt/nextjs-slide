import { ButtonGhostSquare } from './_ButtonGhostSquare'
import { SvgGrid } from './SvgGrid'

export const ButtonToggleGrid = ({
  disabled,
  onClick,
}: {
  disabled?: boolean
  onClick?: () => void
}) => (
  <ButtonGhostSquare onClick={onClick} disabled={disabled}>
    <SvgGrid width={24} height={24} />
  </ButtonGhostSquare>
)
