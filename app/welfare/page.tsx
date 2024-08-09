import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '~components/footer'
import Header from '~components/header'
import Welfare from '~components/welfare'

const About: NextPage<any> = (props) => {
  return (
    <>
      <Head>
        <title>Activities</title>
        {/* <link rel='icon' href='/dm-favicon.png' /> */}
        {/* <meta
          name='description'
          content={contactPageProps.seo.meta_description}
        /> */}
      </Head>
      <Header />
      <Welfare />
      <Footer />
    </>
  )
}

export default About
