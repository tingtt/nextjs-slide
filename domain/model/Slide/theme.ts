import { useEffect, useState } from 'react'

export type ThemeState = {
  isDarkMode: boolean
  isForceLightMode: boolean
  isForceDarkMode: boolean
}

const initialThemeState: ThemeState = {
  isDarkMode: false,
  isForceLightMode: false,
  isForceDarkMode: false,
}

export const useTheme = (window?: Window & typeof globalThis) => {
  //* Note: React Hydration Error
  //  https://nextjs.org/docs/messages/react-hydration-error
  const [isInitial, setIsInitial] = useState(true)
  const [theme, setThemeState] = useState(initialThemeState)

  useEffect(() => {
    // Only effects the first time after client rendering.
    if (window == undefined || !isInitial) {
      return
    }

    // Initialize color-scheme
    setThemeState((e) => {
      return {
        ...e,
        isDarkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,
      } as ThemeState
    })
    setIsInitial(false)

    // Add event listener for detect color-scheme changes
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', () => {
        console.log(
          `[nextjs-slide] prefers-color-scheme changed (${
            window.matchMedia('(prefers-color-scheme: dark)').matches
              ? 'dark'
              : 'light'
          })`
        )
        setThemeState((e) => {
          return {
            ...e,
            isDarkMode: window.matchMedia('(prefers-color-scheme: dark)')
              .matches,
          }
        })
      })
  }, [isInitial, window])

  const toggleDarkMode = () => {
    if (theme.isForceLightMode) {
      setThemeState({
        ...theme,
        isForceLightMode: false,
        isForceDarkMode: true,
      })
    } else if (theme.isForceDarkMode) {
      setThemeState({
        ...theme,
        isForceLightMode: true,
        isForceDarkMode: false,
      })
    } else if (theme.isDarkMode) {
      setThemeState({ ...theme, isForceLightMode: true })
    } else {
      setThemeState({ ...theme, isForceDarkMode: true })
    }
  }

  const isDarkMode = (() => {
    if (theme.isForceLightMode) {
      return false
    }
    if (theme.isForceDarkMode) {
      return true
    }
    return theme.isDarkMode
  })()

  return { toggleDarkMode, isDarkMode }
}
