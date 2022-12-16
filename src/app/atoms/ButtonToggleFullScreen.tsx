import { ButtonGhostSquare } from './_ButtonGhostSquare'
import { SvgCloseFull } from './SvgCloseFull'
import { SvgOpenInFull } from './SvgOpenInFull'

export const ButtonToggleFullScreen = ({
  open,
  onClick,
}: {
  open: boolean
  onClick?: () => void
}) => (
  <ButtonGhostSquare onClick={onClick}>
    {open ? (
      <SvgCloseFull width={24} height={24} />
    ) : (
      <SvgOpenInFull width={24} height={24} />
    )}
  </ButtonGhostSquare>
)
