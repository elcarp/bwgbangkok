import Image from 'next/image'
import GroupPhoto from '~public/images/bwgbangkok-group.webp'
import GroupPhoto2 from '~public/images/bwg-group-photo.webp'
import Header from '~components/header'
import { InformationCircleIcon } from '@heroicons/react/16/solid'
import Calendar from '~components/calendar'
import Footer from '~components/footer'
import { Cedarville_Cursive } from 'next/font/google'

const cedarville = Cedarville_Cursive({
  weight: '400',
  subsets: ['latin'],
})
import React from 'react'
import Head from 'next/head'
import { Metadata } from 'next'
import Slider from '~components/slider'

export const metadata: Metadata = {
  title: "British Women's Group Bangkok",
  description:
    "The British Women's Group where friendships are made. Since 1969, the British Women's Group has served as a welcoming community for women, whether newcomers or long term residents. By joining our vibrant group you will discover new friendships, build lasting connections, and participate in engaging activities. Women of all age and nationalities are warmly.",
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Activities</title>
      </Head>
      <main className={`bg-transparent`}>
        <section className='top-0 w-full z-50 fixed'>
          <Header />
        </section>
        <section className='h-screen flex items-center justify-center'>
          <div className='relative w-full h-screen'>
            <div className='w-full bg-blue-500 h-screen z-10 absolute opacity-50'>
              {' '}
            </div>
            <Image
              className='blur-sm'
              src={GroupPhoto}
              layout='fill'
              objectFit='cover'
              alt='British Womens Group Bangkok'
            />
          </div>
          <div className='absolute text-white text-center z-20 w-full'>
            <span className='block'>Since 1969</span>
            <h1 className='pb-10 text-center w-full text-white z-20'>
              British Women&apos;s Group{' '}
              <span
                className='text-red-300 block'
                style={{ fontSize: 'inherit', fontWeight: 'inherit' }}>
                Bangkok
              </span>
            </h1>
            <h3 className={`${cedarville.className}`}>
              where friendships are made
            </h3>
          </div>
        </section>
        <section>
          <div className='relative isolate overflow-hidden bg-white py-24 sm:py-32'>
            <div
              aria-hidden='true'
              className='absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56'>
              <div
                style={{
                  clipPath:
                    'polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)',
                }}
                className='aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#3b82f6] opacity-30'
              />
            </div>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
              <div className='mx-auto max-w-2xl lg:mx-0'>
                <p
                  className={`${cedarville.className} text-3xl font-semibold leading-8 tracking-tight text-blue-500`}>
                  Build lasting connections
                </p>
                <h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                  A Community for Women
                </h1>
                <p className='mt-6 text-xl leading-8 text-gray-700'>
                  Since 1969, the British Women&apos;s Group has served as a
                  welcoming community for women, whether newcomers or long term
                  residents.
                </p>
              </div>
              <div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12'>
                <div className='relative lg:order-last lg:col-span-5'>
                  <svg
                    aria-hidden='true'
                    className='absolute -top-[40rem] left-1 -z-10 h-[64rem] w-[175.5rem] -translate-x-1/2 stroke-gray-900/10 [mask-image:radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)]'>
                    <defs>
                      <pattern
                        id='e87443c8-56e4-4c20-9111-55b82fa704e3'
                        width={200}
                        height={200}
                        patternUnits='userSpaceOnUse'>
                        <path d='M0.5 0V200M200 0.5L0 0.499983' />
                      </pattern>
                    </defs>
                    <rect
                      fill='url(#e87443c8-56e4-4c20-9111-55b82fa704e3)'
                      width='100%'
                      height='100%'
                      strokeWidth={0}
                    />
                  </svg>
                  <figure className='border-l border-blue-500 pl-8'>
                    <blockquote className='text-xl font-semibold leading-8 tracking-tight text-gray-900'>
                      <p className={`${cedarville.className} text-2xl`}>
                        “After spending more than 30 years in Bangkok, I joined
                        the BWG . I&apos;ve made lots of new friendships and
                        rekindled old ones, and have had a lot of fun along the
                        way. The BWG is a friendly, welcoming group”
                      </p>
                    </blockquote>
                    <figcaption className='mt-8 flex gap-x-4 items-center'>
                      {/* <img
                        alt=''
                        src='https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                        className='mt-1 h-10 w-10 flex-none rounded-full bg-gray-50'
                      /> */}
                      <div className='text-sm leading-6'>
                        <div className='font-semibold text-gray-900'>
                          <span className={`${cedarville.className} text-3xl`}>
                            Karen
                          </span>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
                <div className='max-w-xl text-base leading-7 text-gray-700 lg:col-span-7'>
                  <p>
                    By joining our vibrant group you will discover new
                    friendships, build lasting connections, and participate in
                    engaging activities. Women of all age and nationalities are
                    warmly welcomed. Join us and meet like-minded women, enjoy
                    social activities, fun nights out and get involved in fund
                    raising activities.
                    <a
                      href='/application-form'
                      className='block mt-5 font-bold text-red-300'>
                      Come and join the fun!
                    </a>
                  </p>
                  {/* <p className='mt-5'>
                    All proceeds go to THEP Thailand Hilltribe Education
                    Projects and Queen Sirikit Centre for Breast Cancer.{' '}
                    <a href='/welfare' className='font-bold text-red-300'>
                      Learn more.
                    </a>
                  </p> */}
                  <figure className='mt-16'>
                    <Image
                      alt='group photo'
                      src={GroupPhoto2}
                      width={576}
                      height={364}
                      className='aspect-video rounded-xl bg-gray-50 object-cover'
                    />
                    <figcaption className='mt-4 flex gap-x-2 text-sm leading-6 text-gray-500'>
                      <InformationCircleIcon
                        aria-hidden='true'
                        className='mt-0.5 h-5 w-5 flex-none text-gray-300'
                      />
                      Group photo from the Chinese New Year Coffee Morning event
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='container mx-auto py-20'>
          <Calendar />
        </section>
        <section className='py-20'>
          <div className='max-w-4xl mx-auto lg:flex justify-center items-center rounded-lg shadow-xl'>
            <div className='w-full lg:w-1/2 mx-auto h-screen-3/4 relative rounded-xl'>
              <Image
                src={`https://67kbtiuxase3xqul.public.blob.vercel-storage.com/christmas-lunch-min-8kfcZevy47T2vhOml91E72jn9QzyY8.jpg`}
                layout='fill'
                objectFit='contain'
                alt='Combined Lunch'
              />
            </div>
            <div className='w-full lg:w-1/2 mx-auto h-screen-3/4 relative rounded-xl mt-10 lg:mt-0'>
              <Image
                src={`https://67kbtiuxase3xqul.public.blob.vercel-storage.com/christmas-menu-min-NrGEcYiyW2UcNC0qWjCzzDeTPOz4pR.jpg`}
                layout='fill'
                objectFit='contain'
                alt='Combined Lunch'
              />
            </div>
          </div>
          <div className='max-w-5xl mx-auto mt-20 px-10'>
            <h2 className='text-center mt-20 lg:mt-0'>
              🎄BWG Christmas Lunch🎄
            </h2>
            <strong className='mt-5 text-center block'>
              3rd December - 11.30- 3.00pm <br />
              Shopping at our vendor stalls from 10.30 am
            </strong>
            <p className='mt-7 text-center'>
              Last year our Christmas lunch at the British Club was a great
              success and this year we are expecting a high demand for tickets.{' '}
            </p>
            <p className='mt-7 text-center'>
              Enjoy shopping at our vendor stalls, welcome drink, amd a
              delicious 3 course festive lunch. Entertainment by children from
              Sister Louise&apos;s Fatima Centre, and our fun Christmas
              sing-a-long! Guaranteed to get you in the Christmas spirit 🎅
            </p>
            <p className='mt-7 text-center'>
              Lots of raffle prizes to be won!! Don&apos;t miss out - Book now
              to secure your seat!
            </p>
            <a
              href='https://forms.gle/uCapKYva3zxCqybu7'
              className='px-4 py-2 rounded-lg bg-red-300 animate-bounce font-bold mx-auto block w-[5rem] text-center mt-8'>
              RSVP
            </a>
          </div>
        </section>

        <Slider />
        <Footer />
      </main>
    </>
  )
}
