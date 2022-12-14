import { GetStaticProps } from 'next'

export type PropsPageCount = { pageCount: number }

export const getStaticProps: GetStaticProps<PropsPageCount> = async () => {
  const glob = require('glob')
  const files = glob.sync('./src/pages/*.tsx')
  var pageCount = 0
  if (Array.isArray(files)) {
    pageCount = files.length - 3
  }

  return {
    props: { pageCount },
  }
}
