import type { GetServerSideProps, NextPage } from 'next'

const Home: NextPage = () => <></>

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      permanent: false,
      destination: '/1',
    },
  }
}

export default Home
