import { NextRouter } from 'next/router'
import { useState } from 'react'

export const usePagination = (
  initialPage: number,
  router: NextRouter,
  slides: JSX.Element[]
): {
  slide: JSX.Element
  previous: () => void
  isFirst: boolean
  next: () => void
  isEnd: boolean
} => {
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

  return {
    slide: slides[page - 1],
    previous,
    isFirst: page == 1,
    next,
    isEnd: page == slides.length,
  }
}
