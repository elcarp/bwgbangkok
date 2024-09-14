import { Metadata, NextPage } from 'next'
import Footer from '~components/footer'
import Header from '~components/header'
import Welfare from '~components/welfare'

export const metadata: Metadata = {
  title: "British Women's Group Bangkok - Welfare",
  description:
    'BWG is a primarily a social group but has supported Thai charities which help underprivileged and disadvantaged people in Thailand right from the start.',
}

const About: NextPage<any> = () => {
  return (
    <>
      <Header />
      <Welfare />
      <Footer />
    </>
  )
}

export default About
