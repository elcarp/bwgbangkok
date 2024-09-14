import { Metadata, NextPage } from 'next'
import Footer from '~components/footer'
import Header from '~components/header'

import { Cedarville_Cursive } from 'next/font/google'

const cedarville = Cedarville_Cursive({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "British Women's Group Bangkok - Activities",
  description:
    "Join us for our regular activities from pickleball to mahjong",
}

const About: NextPage<any> = (props) => {
  return (
    <>
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
                🏏{' '}
                <a href='/calendar#misc' className='text-red-300 font-bold'>
                  pickleball and zumba
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
              <a
                className='px-4 py-2 bg-blue-500 hover:animate-bounce rounded-lg font-bold text-white mt-10 block w-[5rem] mx-auto'
                href='mailto:bwgbangkok@gmail.com'>
                RSVP
              </a>
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
                  Wednesday from 10.15 to 13.00 at The Royal Oak{' '}
                </strong>{' '}
              </p>
              <a
                className='px-4 py-2 bg-blue-500 hover:animate-bounce rounded-lg font-bold text-white mt-10 block w-[5rem] mx-auto'
                href='mailto:bwgbangkok@gmail.com'>
                RSVP
              </a>
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
              <a
                className='px-4 py-2 bg-blue-500 hover:animate-bounce rounded-lg font-bold text-white mt-10 block w-[5rem] mx-auto'
                href='mailto:bwgbangkok@gmail.com'>
                RSVP
              </a>
            </div>

            <div className='mt-20 bg-white p-10 rounded-xl shadow-xl' id='misc'>
              <h4 className='font-bold tracking-tight text-gray-900 sm:text-4xl'>
                Pickleball 🏏 & Zumba 💃
              </h4>
              <p className='text-center mt-5 max-w-xl mx-auto'>
                Pickleball and Zumba meet on
                <strong className='font-semibold'> various days</strong> – time
                and location vary.
              </p>
              <a
                className='px-4 py-2 bg-blue-500 hover:animate-bounce rounded-lg font-bold text-white mt-10 block w-[5rem] mx-auto'
                href='mailto:bwgbangkok@gmail.com'>
                RSVP
              </a>
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
              <a
                className='px-4 py-2 bg-blue-500 hover:animate-bounce rounded-lg font-bold text-white mt-10 block w-[5rem] mx-auto'
                href='mailto:bwgbangkok@gmail.com'>
                RSVP
              </a>
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
