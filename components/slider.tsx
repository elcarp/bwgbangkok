'use client'

import React from 'react'
import { InfiniteMovingCards } from './infinite_moving_cards'

export default function Slider() {
  const events = [
    {
      image:
        'https://67kbtiuxase3xqul.public.blob.vercel-storage.com/e3c12357-a09e-4f66-aa60-975b98753f34-my41XAHbjfCjOcQdiJH4DFJQFdTuYh.jpeg',
      name: 'bow making session',
    },
    {
      image:
        'https://67kbtiuxase3xqul.public.blob.vercel-storage.com/agm-1SoeS5KTmA7M6I19tcd4wj2wLxy7XY.jpeg',
      name: 'agm meeting',
    },
    {
      image:
        'https://67kbtiuxase3xqul.public.blob.vercel-storage.com/bowling-uMs8jOKezcDQ9gubATPyBTHbaZG9pC.jpeg',
      name: 'bowling',
    },
    {
      image:
        'https://67kbtiuxase3xqul.public.blob.vercel-storage.com/galentines-11ze0gMVyxI9x4CiVx9hH4F8Vli8xJ.png',
      name: 'galentines',
    },
    {
      image:
        'https://67kbtiuxase3xqul.public.blob.vercel-storage.com/pickleball-aok8Id1CohFS0iR8uSkZ3msfmJBDvo.jpeg',
      name: 'pickleball',
    },
    {
      image:
        'https://67kbtiuxase3xqul.public.blob.vercel-storage.com/walkingtour-mJRVAQOLwuHxCdBpc3eGMQ38d11PHC.jpeg',
      name: 'walking tour',
    },
  ]

  return (
    <>
      <section>
        <div className='h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden'>
          <InfiniteMovingCards items={events} direction='right' speed='slow' />
        </div>
      </section>
    </>
  )
}
