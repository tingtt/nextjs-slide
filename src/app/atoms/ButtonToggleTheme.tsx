import { ButtonGhostSquare } from './_ButtonGhostSquare'
import { SvgMoon } from './SvgMoon'
import { SvgSun } from './SvgSun'

export type PropsButtonToggleTheme = {
  isDarkMode: boolean
  toggle: () => void
}

export const ButtonToggleTheme = ({
  isDarkMode,
  toggle,
}: PropsButtonToggleTheme) => {
  return (
    <ButtonGhostSquare onClick={() => toggle()}>
      {isDarkMode ? (
        <SvgMoon width={24} height={24} />
      ) : (
        <SvgSun width={24} height={24} />
      )}
    </ButtonGhostSquare>
  )
}
