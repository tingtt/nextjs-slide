import { useCallback, useEffect, useState } from 'react'
import { atom, useRecoilState } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export type LayoutState = {
  width: number
  height: number
  isDarkMode: boolean
  isForceLightMode: boolean
  isForceDarkMode: boolean
}

const layoutState = atom<LayoutState>({
  key: 'layoutState',
  default: {
    width: 960,
    height: 540,
    isDarkMode: false,
    isForceLightMode: false,
    isForceDarkMode: false,
  },
  effects_UNSTABLE: [persistAtom],
})

export const useLayout = (): [
  LayoutState,
  (layoutState: LayoutState) => void
] => {
  //* Note: React Hydration Error
  //  https://nextjs.org/docs/messages/react-hydration-error
  const [layout, setLayoutState] = useRecoilState(layoutState)
  const [isInitial, setIsInitial] = useState(true)
  const [hooks, setHooks] = useState<any>([])
  useEffect(() => {
    setIsInitial(false)
    // UI theme
    setLayoutState((e) => {
      return {
        ...e,
        width: window.innerWidth,
        height: window.innerHeight,
        isDarkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,
      }
    })
    // add hook to detect prefers-color-scheme changes
    setHooks(() => [window])
  }, [hooks, setLayoutState])

  return [
    isInitial === true
      ? {
          width: 960,
          height: 540,
          isDarkMode: false,
          isForceLightMode: false,
          isForceDarkMode: false,
        }
      : layout,
    useCallback(
      (layoutState: LayoutState) => setLayoutState(layoutState),
      [setLayoutState]
    ),
  ]
}

export const useLayoutUtil = () => {
  const [layout, setLayout] = useLayout()

  const toggle = () => {
    if (layout.isForceLightMode) {
      setLayout({
        ...layout,
        isForceLightMode: false,
        isForceDarkMode: true,
      })
    } else if (layout.isForceDarkMode) {
      setLayout({
        ...layout,
        isForceLightMode: true,
        isForceDarkMode: false,
      })
    } else if (layout.isDarkMode) {
      setLayout({ ...layout, isForceLightMode: true })
    } else {
      setLayout({ ...layout, isForceDarkMode: true })
    }
  }

  const isDark = () => {
    if (layout.isForceLightMode) {
      return false
    }
    if (layout.isForceDarkMode) {
      return true
    }
    return layout.isDarkMode
  }

  return { toggle, isDark }
}
