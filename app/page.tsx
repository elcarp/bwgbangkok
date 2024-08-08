import Head from 'next/head'
import Image from 'next/image'
import GroupPhoto from '~public/images/bwgbangkok-group.webp'
import { Cedarville_Cursive, Montserrat } from 'next/font/google'
import Header from '~components/header'
import Logo from '~public/images/logo-no-bg.png'

const cedarville = Cedarville_Cursive({
  weight: '400',
  subsets: ['latin'],
})
const montserrat = Montserrat({
  subsets: ['latin'],
})

export default function Home() {
  return (
    <>
      <main className={`${montserrat.className} bg-transparent`}>
        <Header />
        <section className='h-screen flex items-center justify-center -mt-28'>
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
              British Women's Group{' '}
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
        <section className='py-20'>
          <div className='max-w-2xl mx-auto'>
            <p className='text-center'>
              Since 1969, the <strong>British Women&apos;s Group</strong> has served as a
              welcoming community for women, whether newcomers or long term
              residents. By joining our vibrant group you will discover new
              friendships, build lasting connections, and participate in
              engaging activities. Women of all age and nationalities are warmly
              welcomed. Join us and meet like-minded women, enjoy social
              activities, fun nights out and get involved in fund raising
              activities. Come and join the fun!
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
