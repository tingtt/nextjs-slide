export const SvgArrow = ({
  width,
  height,
  orientation,
}: {
  width: number
  height: number
  orientation: 'right' | 'left' | 'top' | 'bottom'
}) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 44 45'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={`
      fill-black dark:fill-white
      ${orientation == 'left' && 'rotate-180'}
      ${orientation == 'top' && 'rotate-90'}
      ${orientation == 'bottom' && '-rotate-90'}
    `}
  >
    <path d='M33.0275 19.6331H0V25.1331H33.0275V33.3831L44 22.3831L33.0275 11.3831V19.6331Z' />
  </svg>
)
