import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
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
      <Header />
      <section>
        <TestimonialSection />
        <div className='bg-white text-center'>
          <Link href='/application-form'>
          <button
            type='button'
            className='cursor-pointer animate-bounce rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500'>
            Join BWG
          </button>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Testimonials
