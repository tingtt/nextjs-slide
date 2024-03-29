import { NextRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Slide } from './slide'

export const usePagination = (
  init: { page: number; click: number },
  router: NextRouter,
  slides: Slide[]
) => {
  const [page, setPage] = useState(init.page)
  const [click, setClick] = useState(init.click)

  useEffect(() => {
    if (init.page > slides.length) {
      router.replace('/1')
      setPage(1)
    }
    if (slides[page - 1] == undefined) {
      return
    }
    if (click < 0) {
      router.replace(`/${page}`)
      setClick(0)
    }
    if (click > slides[page - 1].clicks()) {
      const clickMax = slides[page - 1].clicks()
      if (clickMax == 0) {
        router.replace(`/${page}`)
        setClick(0)
      } else {
        router.replace(`/${page}?click=${clickMax}`)
        setClick(clickMax)
      }
    }
  }, [click, init, page, router, slides])

  const previous = () => {
    if (click > 0) {
      setClick((click) => {
        if (click == 1) {
          router.replace(`/${page}`)
        } else {
          router.replace(`/${page}?click=${click - 1}`)
        }
        return click - 1
      })
    } else {
      setPage((page) => {
        if (page == 1) {
          return page
        }
        if (slides[page - 2].clicks() > 0) {
          router.replace(`/${page - 1}?clicks=${slides[page - 2].clicks()}`)
        } else {
          router.replace(`/${page - 1}`)
        }
        return page - 1
      })
      if (page > 1) {
        setClick(slides[page - 2].clicks())
      }
    }
  }

  const next = () => {
    if (click < slides[page - 1].clicks()) {
      setClick((click) => {
        router.replace(`/${page}?click=${click + 1}`)
        return click + 1
      })
    } else {
      setPage((page) => {
        if (page == slides.length) {
          return page
        }
        router.replace(`/${page + 1}`)
        return page + 1
      })
      if (page < slides.length) {
        setClick(0)
      }
    }
  }

  // 'keydown' event listener to paginate slide
  const keydown = (e: { key: string; shiftKey: boolean }) => {
    if (e.key === 'ArrowLeft' || (e.key === 'Enter' && e.shiftKey)) {
      previous()
    }
    if (e.key === 'ArrowRight' || (e.key === 'Enter' && !e.shiftKey)) {
      next()
    }
  }

  const style = () => {
    let max = 0
    slides.forEach((s) => {
      const c = s.clicks()
      if (c > max) {
        max = c
      }
    })
    return [...Array(max)]
      .map((_, i) => {
        return [
          `.click-hide-${max - i} { ${
            click >= max - i
              ? 'visibility: visible; animation: fadeout 0.1s linear forwards !important'
              : 'visibility: visible !important'
          } }`,
          `.click-${i + 1} { ${
            click >= i + 1
              ? 'animation: fadein 0.25s linear forwards !important'
              : 'visibility: hidden'
          } }`,
          `.click-only-${i + 1} { ${
            click == i + 1
              ? 'animation: fadein 0.25s linear forwards !important'
              : 'animation: fadeout 0.1s linear forwards !important'
          }; visibility: ${click <= i ? 'hidden' : 'visible'} !important }`,
          `.click-hide-only-${max - i} { ${
            click == max - i
              ? 'animation: fadeout 0.1s linear forwards !important'
              : click == max - i + 1
              ? 'animation: fadein 0.25s linear forwards !important'
              : ''
          } }`,
        ].join('\n')
      })
      .join('\n')
  }

  return {
    slide: slides[page - 1] as Slide | undefined,
    previous,
    isFirst: page == 1,
    next,
    isEnd: page == slides.length,
    keydownEventListener: keydown,
    style: style(),
  }
}
