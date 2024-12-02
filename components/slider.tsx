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
        'https://67kbtiuxase3xqul.public.blob.vercel-storage.com/image2-QElIwhcKgt0c5qre42Lo9vpTW8jAii.jpeg',
      name: 'Christmas Mahjong',
    },
    {
      image:
        'https://67kbtiuxase3xqul.public.blob.vercel-storage.com/image3-5iBmIuoWZJ0G9e5o9ZoaqVpRkCwt9X.jpeg',
      name: 'bowling',
    },
    {
      image:
        'https://67kbtiuxase3xqul.public.blob.vercel-storage.com/image4-bD5anGMUJcMnS5BynPkEOkcME5cxwx.jpeg',

      name: 'Christmas and New Year Celebration',
    },
    {
      image:
        'https://67kbtiuxase3xqul.public.blob.vercel-storage.com/image5-S9bUkC0TUQU2EsAPt5kpk4BttNXEbZ.jpeg',

      name: 'private workshops',
    },
    {
      image:
        'https://67kbtiuxase3xqul.public.blob.vercel-storage.com/image6-vzw2V4VP9lGBqcHBjnB8AqbEDnUBF9.jpeg',

      name: 'Christmas coffee morning',
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
