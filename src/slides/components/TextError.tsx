export const TextError = ({
  className,
  children,
}: {
  className?: string
  children: string
}) => (
  <span className={`text-error font-semibold ${className}`}>{children}</span>
)
