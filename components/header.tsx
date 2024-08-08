import { FunctionComponent } from 'react'
import Logo from '~public/images/bwgb-logo.webp'
import Image from 'next/image'

const Header: FunctionComponent = ({}) => {
  return (
    <>
      <header className='bg-white w-full sticky z-50 top-0 h-28 shadow-xl flex items-center opacity-80'>
        <div className='container mx-auto flex justify-between items-center'>
          <Image
            src={Logo}
            width={100}
            height={73.91}
            alt='British Womens Club Bangkok logo'
          />
          <ul className='flex font-semibold'>
            <li className='mx-2'>Home</li>
            <li className='mx-2'>Activities</li>
            <li className='mx-2'>Join BWG</li>
            <li className='mx-2'>Contact</li>
            <li className='mx-2'>Upcoming Events</li>
            <li className='mx-2'>Welfare</li>
            <li className='mx-2'>Testimonials</li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header
