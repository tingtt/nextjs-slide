import { useCallback, useEffect, useState } from 'react'
import { atom, useRecoilState } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

const slideShowLoopState = atom<boolean>({
  key: 'slide-show-loop',
  default: false,
  effects_UNSTABLE: [persistAtom],
})

export const useSlideShowLoop = (): [boolean, (theme: boolean) => void] => {
  //* Note: React Hydration Error
  //  https://nextjs.org/docs/messages/react-hydration-error
  const [isInitial, setIsInitial] = useState(true)
  useEffect(() => {
    setIsInitial(false)
  }, [])
  const [loop, setLoop] = useRecoilState(slideShowLoopState)
  return [
    isInitial === true ? false : loop,
    useCallback((theme: boolean) => setLoop(theme), [setLoop]),
  ]
}
