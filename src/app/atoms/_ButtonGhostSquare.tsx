import { ButtonHTMLAttributes } from 'react'

export const ButtonGhostSquare = (
  props: ButtonHTMLAttributes<HTMLButtonElement>
) => (
  <button
    {...props}
    className={`btn btn-ghost btn-square ${props.className}`}
  />
)
