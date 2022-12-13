import { ButtonGhostSquare } from './_ButtonGhostSquare'
import { SvgMoon } from './SvgMoon'
import { SvgSun } from './SvgSun'
import { useLayoutUtil } from '../../../domain/model/Theme/layout'

export const ButtonToggleTheme = ({
  onClickCallback,
}: {
  onClickCallback?: () => void
}) => {
  const { toggle, isDark } = useLayoutUtil()

  return (
    <ButtonGhostSquare
      onClick={() => {
        toggle()
        if (onClickCallback != undefined) {
          onClickCallback()
        }
      }}
    >
      {isDark() ? (
        <SvgMoon width={24} height={24} />
      ) : (
        <SvgSun width={24} height={24} />
      )}
    </ButtonGhostSquare>
  )
}
