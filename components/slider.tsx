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
    </>
  )
}
