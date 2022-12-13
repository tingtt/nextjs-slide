import { NextPage } from 'next'
import { Title } from 'templates/1_Title'
import {
  getStaticProps,
  PropsPageCount,
} from '../../domain/model/Slide/pageCount'

const Slide1: NextPage<PropsPageCount> = ({ pageCount }) => {
  return <Title />
}

export { getStaticProps }

export default Slide1
