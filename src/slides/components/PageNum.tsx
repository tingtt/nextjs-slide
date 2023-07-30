import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Slides } from 'slides'

export const PageNum = ({ className }: { className?: string }) => {
  const router = useRouter()
  const path = router.asPath

  const [page, setPage] = useState(path.split('?')[0].substring(1))

  useEffect(() => {
    setPage(path.split('?')[0].substring(1))
  }, [path])

  return (
    <div className={`flex gap-2 text-sm ${className ?? ''}`}>
      <p>{page}</p>
      <p>/</p>
      <p>{Slides.length}</p>
    </div>
  )
}
