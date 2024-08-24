import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '~components/footer'
import Header from '~components/header'
import JoinUs from '~components/join_us'
import PdfViewer from '~components/pdfviewer'

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
      <section className='max-w-4xl mx-auto p-20 h-screen'>
        <PdfViewer url={'https://67kbtiuxase3xqul.public.blob.vercel-storage.com/Application%20form%20Aug%202024-xVkcx3iDBhRNaLnRimh2EKA9V1YGHC.pdf'} />
      </section>
      <Footer />
    </>
  )
}

export default About
