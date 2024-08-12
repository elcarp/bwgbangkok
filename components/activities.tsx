/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

import { Cedarville_Cursive } from 'next/font/google'

const cedarville = Cedarville_Cursive({
  weight: '400',
  subsets: ['latin'],
})

const features = [
  {
    name: 'Thursday is BWG Day!',
    description:
      'On the first Thursday of the month we have our committee meeting. On the second Thursday we have a coffee morning. On the third Thursday we have a lunch. On the fourth Thursday we have an activity. We also have "pop up" events and fun nights out on other days.',
    imageSrc:
      'https://67kbtiuxase3xqul.public.blob.vercel-storage.com/thursdays-udfn2sXelDsAUDO7trmP03QcwgWb9Y.webp',
    imageAlt:
      'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
  },
  {
    name: 'Groups',
    description:
      'We design every detail with the best materials and finishes. This laptop sleeve features durable canvas with double-stitched construction, a felt interior, and a high quality zipper that hold up to daily use.',
    imageSrc:
      'https://67kbtiuxase3xqul.public.blob.vercel-storage.com/groups-efCrOwEM3LsGSGI4GaVP2xwxxnf4RE.webp',
    imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
  },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function ActivitiesSection() {
  return (
    <div className='bg-white'>
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
            We are primarily a social club and offer a wide range of social and
            community activities. If you are interested in coming along to any
            of our events please email us at{' '}
            <a
              href='mailto:bwgbangkok@gmail.com'
              className='font-bold text-red-300'>
              bwgbangkok@gmail.com
            </a>
          </p>
        </div>

        <div className='mt-16 space-y-16'>
          {features.map((feature, featureIdx) => (
            <div
              key={feature.name}
              className='flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8'>
              <div
                className={classNames(
                  featureIdx % 2 === 0
                    ? 'lg:col-start-1'
                    : 'lg:col-start-8 xl:col-start-9',
                  'mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4'
                )}>
                <h3 className='text-lg font-medium text-gray-900'>
                  {feature.name}
                </h3>
                <p className='mt-2 text-sm text-gray-500'>
                  {feature.description}
                </p>
              </div>
              <div
                className={classNames(
                  featureIdx % 2 === 0
                    ? 'lg:col-start-6 xl:col-start-5'
                    : 'lg:col-start-1',
                  'flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8'
                )}>
                <div className='aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100'>
                  <img
                    alt={feature.imageAlt}
                    src={feature.imageSrc}
                    className='object-cover object-center'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
