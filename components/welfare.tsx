import { InformationCircleIcon } from '@heroicons/react/20/solid'
import StepsCommunity from '~public/images/steps_community.jpg'
import Image from 'next/image'
import hilltribe1 from '~public/images/hilltribe1.webp'
import hilltribe2 from '~public/images/hilltribe2.webp'
import hilltribe3 from '~public/images/hilltribe3.webp'
import hilltribe4 from '~public/images/hilltribe4.webp'
import hilltribe5 from '~public/images/hilltribe5.webp'
import mercyhouse1 from '~public/images/mercyhouse1.webp'
import mercyhouse2 from '~public/images/mercyhouse2.webp'
import mercyhouse3 from '~public/images/mercyhouse3.webp'
import mercyhouse4 from '~public/images/mercyhouse4.webp'
import mercyhouse5 from '~public/images/mercyhouse5.webp'
import mercyhouse6 from '~public/images/mercyhouse6.webp'

export default function Welfare() {
  return (
    <>
      <div className='bg-white px-6 py-32 lg:px-8'>
        <div className='mx-auto max-w-3xl text-base leading-7 text-gray-700'>
          <p className='text-base font-semibold leading-7 text-blue-500'>
            Causes we support
          </p>
          <h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Welfare
          </h1>
          <p className='mt-6 text-xl leading-8'>
            BWG is a primarily a social group but has supported Thai charities
            which help underprivileged and disadvantaged people in Thailand
            right from the start. Donations on BWG&apos;s AGC (Annual Giving
            Calendar) 2023 are for education only so it has been reduced by two
            thirds compared to 2022.
          </p>
          <div className='mt-10 max-w-2xl'>
            <p>
              It is extremely hard to withdraw our support to groups who have
              benefitted from our generosity for years but we can only give what
              we have. In the past we were able to hold fund raising events but
              times have changed and BWG does not have large surplus funds. Most
              of the welfare money comes from Alms Bowl, raffles , sales of
              second hand books and sales of our Christmas crackers. If we amass
              as much as we did last year, then the AGC will be more than
              covered.
            </p>

            <section className='my-10'>
              <div className='grid grid-cols-2 gap-4'>
                <div className='grid gap-4'>
                  <div className='relative'>
                    <Image
                      className='h-auto max-w-full rounded-lg'
                      src={hilltribe1}
                      alt=''
                    />
                  </div>
                  <div className='relative'>
                    <Image
                      className='h-auto max-w-full rounded-lg'
                      src={hilltribe2}
                      alt=''
                    />
                  </div>
                  <div className='relative'>
                    <Image
                      className='h-auto max-w-full rounded-lg'
                      src={hilltribe4}
                      alt=''
                    />
                  </div>
                </div>
                <div className='grid gap-4'>
                  <div className='relative'>
                    <Image
                      className='h-auto max-w-full rounded-lg'
                      src={hilltribe3}
                      alt=''
                    />
                  </div>
                  <div className='relative'>
                    <Image
                      className='h-auto max-w-full rounded-lg'
                      src={hilltribe5}
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </section>

            <figure className='mt-10 border-l border-blue-500 pl-9'>
              <blockquote className='font-semibold text-gray-900'>
                <p>
                  The continued support from BWG is much appreciated. Accounts
                  will process a receipt. Nicky continues to benefit hugely from
                  his employment and last year appeared in a huge campaign we
                  did with IKEA as well as enabling Steps to win an award from
                  the Department of Empowerment for People with Disabilities for
                  outstanding work. Photo attached. We hope to host you all at
                  Ekamai soon
                </p>
              </blockquote>
              <figcaption className='mt-6 flex gap-x-4'>
                <div className='text-sm leading-6'>
                  <strong className='font-semibold text-gray-900'>
                    Max Simpson
                  </strong>{' '}
                  – Co-Founder Steps Community
                </div>
              </figcaption>
            </figure>
          </div>
          <figure className='mt-16'>
            <Image
              alt=''
              src={StepsCommunity}
              className='aspect-video rounded-xl bg-gray-50 object-cover'
            />
            <figcaption className='mt-4 flex gap-x-2 text-sm leading-6 text-gray-500'>
              <InformationCircleIcon
                aria-hidden='true'
                className='mt-0.5 h-5 w-5 flex-none text-gray-300'
              />
              Steps community
            </figcaption>
          </figure>
          <div className='mt-16 max-w-2xl'>
            <figure className='mt-10 border-l border-blue-500 pl-9'>
              <blockquote className='font-semibold text-gray-900'>
                <p>
                  Dear Gale,
                  <br />
                  <br />
                  Hope you are doing well. I’m sorry I haven’t contacted you for
                  such a long time. Our 19 children have started school. In the
                  middle of May last Seven of them are studying in primary
                  school, 10 are in secondary school and two are in college. I
                  have attached a file of their photos for you. Thank you again
                  for helping fund the purchase of school uniforms. God Bless
                  Your ministry.
                </p>
              </blockquote>
              <figcaption className='mt-6 flex gap-x-4'>
                <div className='text-sm leading-6'>
                  <strong className='font-semibold text-gray-900'>
                    Best regards
                    <br /> Wichai from Mercy House
                  </strong>
                </div>
              </figcaption>
            </figure>
            <section className='my-10'>
              <div className='grid grid-cols-2 gap-4'>
                <div className='grid gap-4'>
                  <div className='relative'>
                    <Image
                      className='h-auto max-w-full rounded-lg'
                      src={mercyhouse1}
                      alt=''
                    />
                  </div>
                  <div className='relative'>
                    <Image
                      className='h-auto max-w-full rounded-lg'
                      src={mercyhouse2}
                      alt=''
                    />
                  </div>
                  <div className='relative'>
                    <Image
                      className='h-auto max-w-full rounded-lg'
                      src={mercyhouse4}
                      alt=''
                    />
                  </div>
                </div>
                <div className='grid gap-4'>
                  <div className='relative'>
                    <Image
                      className='h-auto max-w-full rounded-lg'
                      src={mercyhouse3}
                      alt=''
                    />
                  </div>
                  <div className='relative'>
                    <Image
                      className='h-auto max-w-full rounded-lg'
                      src={mercyhouse5}
                      alt=''
                    />
                  </div>
                  <div className='relative'>
                    <Image
                      className='h-auto max-w-full rounded-lg'
                      src={mercyhouse6}
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
