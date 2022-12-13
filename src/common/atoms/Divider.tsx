export const Divider = ({
  orientation = 'horizontal',
}: {
  orientation?: 'horizontal' | 'vertical'
}) =>
  orientation == 'horizontal' ? (
    <div className='divider divider-horizontal my-1 m-0 w-0 before:w-[1px] after:w-[1px]' />
  ) : (
    <div className='divider divider-vertical mx-1 m-0 h-0 before:h-[1px] after:h-[1px]' />
  )
