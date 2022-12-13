export type PropsPageCount = { pageCount: number }

export async function getStaticProps(): Promise<{ props: PropsPageCount }> {
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
