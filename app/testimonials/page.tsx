import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '~components/footer'
import Header from '~components/header'
import TestimonialSection from '~components/testimonials'

const Testimonials: NextPage<any> = (props) => {
  return (
    <>
      <Head>
        <title>British Women&apos;s Group Bangkok - Testimonials</title>
        {/* <link rel='icon' href='/dm-favicon.png' /> */}
        {/* <meta
          name='description'
          content={contactPageProps.seo.meta_description}
        /> */}
      </Head>
      ''
      <Header />
      <section>
        <TestimonialSection />
      </section>
      <Footer />
    </>
  )
}

export default Testimonials
