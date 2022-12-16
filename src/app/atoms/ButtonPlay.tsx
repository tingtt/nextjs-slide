import { ButtonGhostSquare } from './_ButtonGhostSquare'
import { SvgPlay } from './SvgPlay'
import { SvgPause } from './SvgPause'

export const ButtonPlay = ({
  isPlaying,
  onClick,
}: {
  isPlaying: boolean
  onClick?: () => void
}) => (
  <ButtonGhostSquare tabIndex={0} onClick={onClick}>
    {isPlaying ? (
      <SvgPause width={22} height={22} />
    ) : (
      <SvgPlay width={22} height={22} />
    )}
  </ButtonGhostSquare>
)
