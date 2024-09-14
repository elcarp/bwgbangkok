import { Metadata, NextPage } from 'next'
import Link from 'next/link'
import Footer from '~components/footer'
import Header from '~components/header'
import TestimonialSection from '~components/testimonials'

export const metadata: Metadata = {
  title: "British Women's Group Bangkok - Testimonials",
  description:
    "What our members say about the British Women's Group",
}

const Testimonials: NextPage<any> = () => {
  return (
    <>
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
