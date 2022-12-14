import { SVGAttributes } from 'react'

export const SvgArrow = (
  props: SVGAttributes<SVGElement> & {
    orientation: 'right' | 'left' | 'top' | 'bottom'
  }
) => (
  <svg
    {...props}
    viewBox='0 0 44 44'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={`
      fill-black dark:fill-white
      ${props.orientation == 'left' && 'rotate-180'}
      ${props.orientation == 'top' && 'rotate-90'}
      ${props.orientation == 'bottom' && '-rotate-90'}
      ${props.className}
    `}
  >
    <path d='M8.70825 38.83L25.4223 22L8.70825 5.17L13.8538 0L35.7499 22L13.8538 44L8.70825 38.83Z' />
  </svg>
)
