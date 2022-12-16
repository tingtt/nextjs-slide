import { NextRouter } from 'next/router'
import { Dispatch, SetStateAction, useCallback, useState } from 'react'

export const usePagination = (
  initialPage: number,
  router: NextRouter,
  slides: JSX.Element[]
) => {
  const [page, setPage] = useState(initialPage)

  const previous = () => {
    if (page == 1) {
      return
    }
    router.replace('/' + (page - 1).toString())
    setPage(page - 1)
  }

  const next = () => {
    if (page == slides.length) {
      return
    }
    router.replace('/' + (page + 1).toString())
    setPage(page + 1)
  }

  const keydown = useCallback(
    (e: { key: string }) => {
      if (e.key === 'ArrowLeft') {
        setPage((c) => {
          if (c == 1) {
            return c
          }
          router.replace('/' + (c - 1).toString())
          return c - 1
        })
      }
      if (e.key === 'ArrowRight') {
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
