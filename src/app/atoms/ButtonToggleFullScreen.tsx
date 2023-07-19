import { ButtonGhostSquare } from './_ButtonGhostSquare'
import { SvgCloseFull } from './SvgCloseFull'
import { SvgOpenInFull } from './SvgOpenInFull'

export type PropsButtonToggleFullScreen = {
  enabled: boolean
  toggle: () => void
}

export const ButtonToggleFullScreen = ({
  enabled,
  toggle,
}: PropsButtonToggleFullScreen) => (
  <ButtonGhostSquare onClick={toggle}>
    {enabled ? (
      <SvgCloseFull width={24} height={24} />
    ) : (
      <SvgOpenInFull width={24} height={24} />
    )}
  </ButtonGhostSquare>
)
