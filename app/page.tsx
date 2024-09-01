'use client'

import Image from 'next/image'
import GroupPhoto from '~public/images/bwgbangkok-group.webp'
import GroupPhoto2 from '~public/images/bwg-group-photo.webp'
import Header from '~components/header'
import { InformationCircleIcon } from '@heroicons/react/16/solid'
import Calendar from '~components/calendar'
import Footer from '~components/footer'
import CombinedLunch from '~public/images/combined_lunch.webp'
import ExpatsBangkok from '~public/images/expats_bangkok.webp'
import { Cedarville_Cursive } from 'next/font/google'
const cedarville = Cedarville_Cursive({
  weight: '400',
  subsets: ['latin'],
})
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import React, { useState } from 'react'

export default function Home() {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  function Arrow(props: {
    disabled: boolean
    left?: boolean
    onClick: (e: any) => void
  }) {
    const disabled = props.disabled ? ' arrow--disabled' : ''
    return (
      <svg
        onClick={props.onClick}
        className={`arrow ${
          props.left ? 'arrow--left' : 'arrow--right'
        } ${disabled}`}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'>
        {props.left && (
          <path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z' />
        )}
        {!props.left && (
          <path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
        )}
      </svg>
    )
  }
  return (
    <>
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
                  <p className='mt-5'>
                    All proceeds go to THEP Thailand Hilltribe Education
                    Projects and Queen Sirikit Centre for Breast Cancer.{' '}
                    <a href='/welfare' className='font-bold text-red-300'>
                      Learn more.
                    </a>
                  </p>
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
          <div className='container mx-auto lg:flex items-center'>
            <div className='w-full lg:w-1/2 mx-auto h-screen-3/4 shadow-xl relative rounded-xl'>
              <Image
                src={CombinedLunch}
                layout='fill'
                objectFit='contain'
                alt='Combined Lunch'
              />
            </div>
            <div className='w-full px-10 lg:w-1/2'>
              <h2 className='text-center mt-20 lg:mt-0'>Reserve your seat</h2>
              <p className='mt-10 text-center'>
                <a
                  className='font-bold text-red-300'
                  href='https://docs.google.com/forms/d/e/1FAIpQLSc4t2HH4QdNnm7MLJ57Lc2RM_V9sZSiyG6EOhIFNkyHjYZeTw/viewform'>
                  Click here{' '}
                </a>
                for more information on tickets and tables.
              </p>
              <p className='text-center mt-5'>
                All proceeds from the event will be generously donated to the
                Thailand Hilltribe Education Projects THEP and the Queen Sirikit
                Centre for Breast Cancer, supporting vital initiatives that help
                communities and improve lives.
              </p>
              <p className='mt-5 text-center'>
                We look forward to seeing you this year 🥂
              </p>
              <a
                href='https://docs.google.com/forms/d/e/1FAIpQLSc4t2HH4QdNnm7MLJ57Lc2RM_V9sZSiyG6EOhIFNkyHjYZeTw/viewform'
                className='px-4 py-2 rounded-lg bg-red-300 animate-bounce font-bold mx-auto block w-[5rem] text-center mt-8'>
                RSVP
              </a>
              <p className='mt-10 text-center text-sm'>
                Combined Women&apos;s Lunch is sponsored by:
              </p>

              <Image
                src={ExpatsBangkok}
                className='mt-5 mx-auto'
                width={355}
                height={122}
                alt='Expats in Bangkok'
              />
            </div>
          </div>
        </section>
        <section>
          <div className='navigation-wrapper h-screen-1/2'>
            <div ref={sliderRef} className='keen-slider h-screen-1/2'>
              <div className='keen-slider__slide number-slide1'>
                <img
                className='h-full'
                  src='https://67kbtiuxase3xqul.public.blob.vercel-storage.com/e3c12357-a09e-4f66-aa60-975b98753f34-my41XAHbjfCjOcQdiJH4DFJQFdTuYh.jpeg'
                  alt='bow making session'
                />
              </div>
              <div className='keen-slider__slide number-slide1'>
                <img
                className='h-full'
                  src='https://67kbtiuxase3xqul.public.blob.vercel-storage.com/e30fb2c7-4db8-44cd-8528-785d5768970f-eoDKVFGW3tER3jCDIbj3wiiuWAah9e.jpeg'
                  alt='coffee morning'></img>
              </div>
              <div className='keen-slider__slide number-slide1'>
                <img
                className='h-full'
                  src='https://67kbtiuxase3xqul.public.blob.vercel-storage.com/09bba56b-3e67-4a1f-9d2d-792f7ca89637-vKE0oFe4SJHHP3ehAQOkWu4hsy4265.jpeg'
                  alt='lunch buffet'
                />
              </div>
              <div className='keen-slider__slide number-slide1'>
                <img
                className='h-full'
                  src='https://67kbtiuxase3xqul.public.blob.vercel-storage.com/6d63646a-94e2-44d8-8d71-89a327f5fd2c-g15pDBL3a0rXJHiK9VHx5QBgEBkVYP.jpeg'
                  alt='origami workshop'
                />
              </div>
            </div>
            {loaded && instanceRef.current && (
              <>
                <Arrow
                  left
                  onClick={(e: any) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                  }
                  disabled={currentSlide === 0}
                />

                <Arrow
                  onClick={(e: any) =>
                    e.stopPropagation() || instanceRef.current?.next()
                  }
                  disabled={
                    currentSlide ===
                    instanceRef.current.track.details.slides.length - 1
                  }
                />
              </>
            )}
          </div>
          {loaded && instanceRef.current && (
            <div className='dots'>
              {[
                ...(Array(
                  instanceRef.current.track.details.slides.length
                ).keys() as any),
              ].map((idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx)
                    }}
                    className={
                      'dot' + (currentSlide === idx ? ' active' : '')
                    }></button>
                )
              })}
            </div>
          )}
        </section>
        <Footer />
      </main>
    </>
  )
}
