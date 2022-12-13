import { ButtonGhostSquare } from './_ButtonGhostSquare'
import { SvgMoon } from './SvgMoon'
import { SvgSun } from './SvgSun'

export const ButtonToggleTheme = ({
  dark,
  onClick,
}: {
  dark: boolean
  onClick?: () => void
}) => (
  <ButtonGhostSquare onClick={onClick}>
    {dark ? (
      <SvgMoon width={24} height={24} />
    ) : (
      <SvgSun width={24} height={24} />
    )}
  </ButtonGhostSquare>
)
