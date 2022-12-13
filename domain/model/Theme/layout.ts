import { useCallback, useEffect, useState } from 'react'
import { atom, useRecoilState } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export type LayoutState = {
  width: number
  height: number
  isDarkMode: boolean
}

const layoutState = atom<LayoutState>({
  key: 'layoutState',
  default: { width: 960, height: 540, isDarkMode: false },
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
      ? { width: 960, height: 540, isDarkMode: false }
      : layout,
    useCallback(
      (layoutState: LayoutState) => setLayoutState(layoutState),
      [setLayoutState]
    ),
  ]
}
