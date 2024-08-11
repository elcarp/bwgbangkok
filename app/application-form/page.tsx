import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '~components/footer'
import Header from '~components/header'
import JoinUs from '~components/join_us'

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
      <JoinUs />
      <a href='public/applicationform.pdf' download='cv'>
        Download CV
      </a>

      <Footer />
    </>
  )
}

export default About
