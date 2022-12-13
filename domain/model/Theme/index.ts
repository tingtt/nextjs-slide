import { useCallback, useEffect, useState } from 'react'
import { atom, useRecoilState } from 'recoil'
import { recoilPersist } from 'recoil-persist'
import { Theme } from './@types'

const { persistAtom } = recoilPersist()

const themeState = atom<Theme>({
  key: 'theme',
  default: 'light',
  effects_UNSTABLE: [persistAtom],
})

export const useTheme = (): [Theme, (theme: Theme) => void] => {
  //* Note: React Hydration Error
  //  https://nextjs.org/docs/messages/react-hydration-error
  const [isInitial, setIsInitial] = useState(true)
  useEffect(() => {
    setIsInitial(false)
  }, [])
  const [theme, setTheme] = useRecoilState(themeState)
  return [
    isInitial === true ? 'light' : theme,
    useCallback((theme: Theme) => setTheme(theme), [setTheme]),
  ]
}
