import { NextRouter } from 'next/router'
import { useCallback, useState } from 'react'

export const usePagination = (
  initialPage: number,
  router: NextRouter,
  slides: JSX.Element[]
) => {
  const [page, setPage] = useState(initialPage)

  const previous = () =>
    setPage((c) => {
      if (c == 1) {
        return c
      }
      router.replace('/' + (c - 1).toString())
      return c - 1
    })

  const next = () =>
    setPage((c) => {
      if (c == slides.length) {
        return c
      }
      router.replace('/' + (c + 1).toString())
      return c + 1
    })

  // 'keydown' event listener to paginate slide
  const keydown = useCallback(
    (e: { key: string; shiftKey: boolean }) => {
      if (e.key === 'ArrowLeft' || (e.key === 'Enter' && e.shiftKey)) {
        setPage((c) => {
          if (c == 1) {
            return c
          }
          router.replace('/' + (c - 1).toString())
          return c - 1
        })
      }
      if (e.key === 'ArrowRight' || (e.key === 'Enter' && !e.shiftKey)) {
        setPage((c) => {
          if (c == slides.length) {
            return c
          }
          router.replace('/' + (c + 1).toString())
          return c + 1
        })
      }
    },
    [router, setPage, slides.length]
  )

  return {
    slide: slides[page - 1],
    previous,
    isFirst: page == 1,
    next,
    isEnd: page == slides.length,
    keydownEventListener: keydown,
  }
}
