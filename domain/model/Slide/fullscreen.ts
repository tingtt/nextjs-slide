import { useCallback, useEffect } from 'react'

export const useFullScreen = (
  fullscreenStateSetter: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const toggle = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else {
      document.body.requestFullscreen()
    }
  }

  const keydown = useCallback((e: { key: string }) => {
    if (e.key === 'f') {
      toggle()
    }
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', keydown, false)
    document.addEventListener('fullscreenchange', () => {
      if (document.fullscreenElement) {
        fullscreenStateSetter(true)
      } else {
        fullscreenStateSetter(false)
      }
    })
  }, [fullscreenStateSetter, keydown])

  return { toggle }
}
