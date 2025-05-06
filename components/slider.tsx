'use client'

import React from 'react'
import { InfiniteMovingCards } from './infinite_moving_cards'

export default function Slider() {
  const events = [
    {
      image:
        'https://67kbtiuxase3xqul.public.blob.vercel-storage.com/image0-94jFokpjCfxXle572QL9wFYr1aV0Fd.jpeg',
      name: 'myterious lunch set',
    },
    {
      image:
        'https://67kbtiuxase3xqul.public.blob.vercel-storage.com/image1-4CubjkQfvf2IYi3cUdgziLm7gvJs45.jpeg',
      name: 'upcoming events',
    },
    {
      image:
        'https://67kbtiuxase3xqul.public.blob.vercel-storage.com/image2-Lp60EWaCum43VmDkr48qfUpKczB3jk.jpeg',
      name: 'sunday lunch',
    },
    {
      image:
        'https://67kbtiuxase3xqul.public.blob.vercel-storage.com/image3-c8BMet2upAPxnJEG55DvUxSQTPX0qk.jpeg',
      name: 'may coffee morning',
    },
    {
      image:
        'https://67kbtiuxase3xqul.public.blob.vercel-storage.com/image4-jpDMR1euY81RBYzbMT7g7v4W1pyYQ1.jpeg',
      name: 'tai chi class',
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
