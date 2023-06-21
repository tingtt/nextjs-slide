import { useEffect, useState } from 'react'

export type LayoutState = {
  width: number
  height: number

  clientRendered: boolean
}

const initialLayoutState: LayoutState = {
  width: 960,
  height: 540,

  clientRendered: false,
}

export const useLayout = (window?: Window & typeof globalThis): LayoutState => {
  //* Note: React Hydration Error
  //  https://nextjs.org/docs/messages/react-hydration-error
  const [isInitial, setIsInitial] = useState(true)
  const [layout, setLayoutState] = useState(initialLayoutState)

  useEffect(() => {
    // Only effects the first time after client rendering.
    if (window == undefined || !isInitial) {
      return
    }

    // Initialize layout
    setLayoutState((e) => {
      return {
        ...e,
        width: window.innerWidth,
        height: window.innerHeight,
        clientRendered: true,
      } as LayoutState
    })
    setIsInitial(false)

    // Add event listener for detect window resizes
    window.addEventListener('resize', () => {
      console.log('[nextjs-slide] window resized')
      setLayoutState((e) => {
        return {
          ...e,
          width: window.innerWidth,
          height: window.innerHeight,
        }
      })
    })
  }, [isInitial, window])

  return isInitial === true ? initialLayoutState : layout
}
