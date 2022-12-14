import { GetServerSideProps, GetStaticProps } from 'next'

export type PropsPageCount = { pageCount: number }

export const getServerSideProps: GetServerSideProps<
  PropsPageCount
> = async () => {
  const glob = require('glob')
  const files = glob.sync('./src/templates/*.tsx')
  var pageCount = 0
  if (Array.isArray(files)) {
    pageCount = files.length
  }

  return {
    props: { pageCount },
  }
}
