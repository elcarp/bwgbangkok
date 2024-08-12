import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import ActivitiesSection from '~components/activities'
import Footer from '~components/footer'
import Header from '~components/header'

import { Cedarville_Cursive } from 'next/font/google'

const cedarville = Cedarville_Cursive({
  weight: '400',
  subsets: ['latin'],
})

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
      <section className='bg-white'>
        <div className='mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8'>
          <div className='mx-auto max-w-3xl text-center'>
            <p
              className={`${cedarville.className} text-3xl font-semibold leading-8 tracking-tight text-blue-500`}>
              Come join the fun
            </p>
            <h2 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              Activities
            </h2>
            <p className='mt-4 text-gray-500'>
              We are primarily a social club and offer a wide range of social
              and community activities. If you are interested in coming along to
              any of our events please email us at{' '}
              <a
                href='mailto:bwgbangkok@gmail.com'
                className='font-bold text-red-300'>
                bwgbangkok@gmail.com
              </a>
            </p>

            <p className='mt-5'>Activities include:</p>
            <ul className='list-disc mt-3 text-left max-w-xs mx-auto'>
              <li>☕ coffee mornings</li>
              <li>🍔 lunches</li>
              <li>
                📚{' '}
                <a href='/calendar#bookclub' className='text-red-300 font-bold'>
                  book club
                </a>
              </li>
              <li>
                🀄{' '}
                <a href='/calendar#mahjong' className='text-red-300 font-bold'>
                  mahjong
                </a>
              </li>
              <li>
                ⛳{' '}
                <a href='/calendar#golf' className='text-red-300 font-bold'>
                  golf
                </a>
              </li>
              <li>outings to places of interest</li>
              <li>art/craft activities</li>
              <li>sporting activities</li>
              <li>
                🎗{' '}
                <a href='/welfare' className='text-red-300 font-bold'>
                  fundraising activities
                </a>
              </li>
              <li>fun nights out</li>
            </ul>

            <div
              className='mt-20 bg-blue-100 p-10 rounded-xl shadow-xl'
              id='thursday'>
              <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                Thursday is BWG day!
              </h2>
              <ul className='list-disc text-left mt-5 max-w-xl mx-auto'>
                <li>
                  On the <strong className='font-semibold'>first</strong>{' '}
                  Thursday of the month we have our committee meeting.
                </li>
                <li>
                  On the <strong className='font-semibold'>second</strong>{' '}
                  Thursday we have a coffee morning.
                </li>
                <li>
                  On the <strong className='font-semibold'>third</strong>{' '}
                  Thursday we have a lunch.
                </li>
                <li>
                  On the <strong className='font-semibold'>fourth</strong>{' '}
                  Thursday we have an activity.
                </li>
                <li>
                  We also have{' '}
                  <strong className='font-semibold'>
                    &ldquo;pop up&rdquo;
                  </strong>{' '}
                  events and fun nights out on other days.
                </li>
              </ul>
            </div>

            <div
              className='mt-20 bg-white p-10 rounded-xl shadow-xl'
              id='mahjong'>
              <h4 className='font-bold tracking-tight text-gray-900 sm:text-4xl'>
                Mahjong 🀄
              </h4>
              <p className='text-center mt-5 max-w-xl mx-auto'>
                Mahjong groups meet every{' '}
                <strong className='font-semibold'>
                  Monday from 10.00 to 13.00 at The British Club
                </strong>{' '}
                on Silom Soi 18, and every{' '}
                <strong className='font-semibold'>
                  Wednesday from 10.15 to 13.00 at The Foreign Correspondents
                  Club
                </strong>{' '}
                on Ploenchit Road.
              </p>
            </div>

            <div
              className='mt-20 bg-blue-100 p-10 rounded-xl shadow-xl'
              id='bookclub'>
              <h4 className='font-bold tracking-tight text-gray-900 sm:text-4xl'>
                Book Club 📚
              </h4>
              <p className='text-center mt-5 max-w-xl mx-auto'>
                Book Club meet on the{' '}
                <strong className='font-semibold'>first Tuesday</strong> of
                every month from{' '}
                <strong className='font-semibold'>10.30 - 12.00</strong> at Duc
                de Praslin.
              </p>
            </div>

            <div className='mt-20 bg-white p-10 rounded-xl shadow-xl' id='golf'>
              <h4 className='font-bold tracking-tight text-gray-900 sm:text-4xl'>
                Golf ⛳
              </h4>
              <p className='text-center mt-5 max-w-xl mx-auto'>
                Golf group meets on{' '}
                <strong className='font-semibold'>Tuesdays</strong> – time and
                location varies.
              </p>
            </div>

            <div
              className='mt-20 bg-blue-100 p-10 rounded-xl shadow-xl'
              id='welfare'>
              <h4 className='font-bold tracking-tight text-gray-900 sm:text-4xl'>
                Welfare 🎗
              </h4>
              <p className='text-center mt-5 max-w-xl mx-auto'>
                Our Welfare Group which supports local charities. Learn more{' '}
                <a href='/welfare' className='text-red-300 font-bold'>
                  here.
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <ActivitiesSection /> */}
      <Footer />
    </>
  )
}

export default About
