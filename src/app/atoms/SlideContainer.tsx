import { PropsWithChildren } from 'react'
import { useLayout } from '../../../domain/model/Theme/layout'

export const SlideContainer = ({ children }: PropsWithChildren) => {
  const [{ width, height }] = useLayout()
  const isWide = width / height > 16 / 9
  const scale = isWide ? height / 1134 : width / 2016
  const style = `.slide-container { transform: scale(${scale}) }`

  return (
    <div
      className={`
        slide-container relative overflow-hidden
        !min-w-[2016px] !min-h-[1134px] aspect-video
      `}
    >
      {children}
      <style>{style}</style>
    </div>
  )
}
