import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '~components/footer'
import Header from '~components/header'
import ContactSection from '~components/contact'

const Contact: NextPage<any> = (props) => {
  return (
    <>
      <Head>
        <title>British Women&apos;s Group Bangkok - Contact</title>
        {/* <link rel='icon' href='/dm-favicon.png' /> */}
        {/* <meta
          name='description'
          content={contactPageProps.seo.meta_description}
        /> */}
      </Head>
      ''
      <Header />
      <section>
        <ContactSection />
      </section>
      <Footer />
    </>
  )
}

export default Contact
