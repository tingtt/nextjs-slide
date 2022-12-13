import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Custom404: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/1')
  })

  return (
    <div className='h-screen flex items-center justify-center gap-5'>
      <div
        className={`
          flex items-center h-12 text-2xl font-medium
          pr-[23px] border-r-[1px] border-black/30
        `}
      >
        404
      </div>
      <div className='text-sm'>This page could not be found.</div>
    </div>
  )
}

export default Custom404
