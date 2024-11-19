'use client'

import { useKeenSlider } from "keen-slider/react"
import React from "react"
import { useState } from "react"

export default function Slider() {
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
            <div className='keen-slider__slide number-slide'>
              <img
                className='h-full'
                src='https://67kbtiuxase3xqul.public.blob.vercel-storage.com/image2-QElIwhcKgt0c5qre42Lo9vpTW8jAii.jpeg'
                alt='christmas mahjong'
              />
            </div>
            <div className='keen-slider__slide number-slide'>
              <img
                className='h-full'
                src='https://67kbtiuxase3xqul.public.blob.vercel-storage.com/image3-5iBmIuoWZJ0G9e5o9ZoaqVpRkCwt9X.jpeg'
                alt='bowling'
              />
            </div>
            <div className='keen-slider__slide number-slide'>
              <img
                className='h-full'
                src='https://67kbtiuxase3xqul.public.blob.vercel-storage.com/image4-bD5anGMUJcMnS5BynPkEOkcME5cxwx.jpeg'
                alt='christmas and new year celebration'
              />
            </div>
            <div className='keen-slider__slide number-slide'>
              <img
                className='h-full'
                src='https://67kbtiuxase3xqul.public.blob.vercel-storage.com/image5-S9bUkC0TUQU2EsAPt5kpk4BttNXEbZ.jpeg'
                alt='private workshops'
              />
            </div>
            <div className='keen-slider__slide number-slide'>
              <img
                className='h-full'
                src='https://67kbtiuxase3xqul.public.blob.vercel-storage.com/image6-vzw2V4VP9lGBqcHBjnB8AqbEDnUBF9.jpeg'
                alt='christmas coffee morning'
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
    </>
  )
}
