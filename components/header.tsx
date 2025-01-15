'use client'
import { cn } from '~lib/utils'
import { IconMenu2, IconX } from '@tabler/icons-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import BwgLogo from '~public/images/bwgb-logo.webp'

export default function Header() {
  return (
    <div className='w-full py-5 px-2'>
      <Navbar />
    </div>
  )
}

const Navbar = () => {
  // const navItems = [
  //   {
  //     name: 'Work',
  //     link: '#',
  //   },
  //   {
  //     name: 'Services',
  //     link: '#',
  //   },
  //   {
  //     name: 'Pricing',
  //     link: '#',
  //   },
  //   {
  //     name: 'Contact',
  //     link: '#',
  //   },
  // ]

  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'Activities', link: '/calendar' },
    { name: 'Welfare', link: '/welfare' },
    { name: 'Testimonials', link: '/testimonials' },
    { name: 'Contact', link: '/contact' },
  ]

  return (
    <div className='w-full'>
      <DesktopNav navItems={navItems} />
      <MobileNav navItems={navItems} />
    </div>
  )
}

const DesktopNav = ({ navItems }: any) => {
  const [hovered, setHovered] = useState<number | null>(null)
  return (
    <motion.div
      onMouseLeave={() => {
        setHovered(null)
      }}
      className={cn(
        'hidden lg:flex flex-row self-start bg-white dark:bg-neutral-950 items-center justify-between py-2 max-w-7xl mx-auto px-4 rounded-2xl relative z-[60] w-full',
        'sticky top-40 inset-x-0'
      )}>
      <Logo />
      <div className='lg:flex flex-row flex-1 hidden items-center justify-center space-x-2 lg:space-x-2 text-sm text-zinc-600 font-medium hover:text-zinc-800 transition duration-200'>
        {navItems.map((navItem: any, idx: number) => (
          <Link
            onMouseEnter={() => setHovered(idx)}
            className='text-neutral-600 dark:text-neutral-300 relative px-4 py-2'
            key={`link=${idx}`}
            href={navItem.link}>
            {hovered === idx && (
              <motion.div
                layoutId='hovered'
                className='w-full h-full absolute inset-0 bg-gray-100 dark:bg-neutral-800 rounded-2xl'
              />
            )}
            <span className='relative z-20'>{navItem.name}</span>
          </Link>
        ))}
      </div>
      <Link
        href='/application-form'
        className='hidden md:block text-sm font-semibold leading-6 text-white bg-blue-500 px-4 py-2 rounded-lg hover:animate-pulse transition-all ease-in-out'>
        Join BWG
      </Link>
    </motion.div>
  )
}

const MobileNav = ({ navItems }: any) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <motion.div
        animate={{
          borderRadius: open ? '4px' : '2rem',
        }}
        key={String(open)}
        className='flex relative flex-col lg:hidden w-full justify-between items-center bg-white dark:bg-neutral-950  max-w-[calc(100vw-2rem)] mx-auto px-4 py-2'>
        <div className='flex flex-row justify-between items-center w-full'>
          <Logo />
          {open ? (
            <IconX
              className='text-black dark:text-white'
              onClick={() => setOpen(!open)}
            />
          ) : (
            <IconMenu2
              className='text-black dark:text-white'
              onClick={() => setOpen(!open)}
            />
          )}
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='flex rounded-lg absolute top-16 bg-white dark:bg-neutral-950 inset-x-0 z-20 flex-col items-start justify-start gap-4 w-full px-4 py-8'>
              {navItems.map((navItem: any, idx: number) => (
                <Link
                  key={`link=${idx}`}
                  href={navItem.link}
                  className='relative text-neutral-600 dark:text-neutral-300'>
                  <motion.span className='block'>{navItem.name} </motion.span>
                </Link>
              ))}
              <button className='px-8 py-2 w-full rounded-lg bg-black dark:bg-white dark:text-black font-medium text-white shadow-[0px_-2px_0px_0px_rgba(255,255,255,0.4)_inset]'>
                Book a call
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}

const Logo = () => {
  return (
    <Link
      href='/'
      className='font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20'>
      <Image src={BwgLogo} alt='logo' width={30} height={30} />
    </Link>
  )
}

// 'use client'

// import { useState } from 'react'
// import { Dialog, DialogPanel } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// import Image from 'next/image'
// import Logo from '~public/images/bwgb-logo.webp'

// const navigation = [
//   { name: 'Home', href: '/' },
//   { name: 'Activities', href: '/calendar' },
//   { name: 'Welfare', href: '/welfare' },
//   { name: 'Testimonials', href: '/testimonials' },
//   { name: 'Contact', href: '/contact' },
// ]

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

//   return (
//     <header className='bg-white opacity-80 shadow-xl'>
//       <nav
//         aria-label='Global'
//         className='mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8'>
//         <div className='flex lg:flex-1'>
//           <a href='/' className='-m-1.5 p-1.5'>
//             <span className='sr-only'>Your Company</span>
//             <Image
//               src={Logo}
//               width={100}
//               height={73.91}
//               alt='British Womens Club Bangkok logo'
//             />
//           </a>
//         </div>
//         <div className='flex lg:hidden'>
//           <button
//             type='button'
//             onClick={() => setMobileMenuOpen(true)}
//             className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'>
//             <span className='sr-only'>Open main menu</span>
//             <Bars3Icon aria-hidden='true' className='h-6 w-6' />
//           </button>
//         </div>
//         <div className='hidden lg:flex lg:gap-x-12'>
//           {navigation.map((item) => (
//             <a
//               key={item.name}
//               href={item.href}
//               className='text-sm font-semibold leading-6 text-gray-900'>
//               {item.name}
//             </a>
//           ))}
//         </div>
//         <div className='hidden lg:flex lg:flex-1 lg:justify-end bg-blue-'>
//           <a href='/application-form' className='text-sm font-semibold leading-6 text-white bg-blue-500 px-4 py-2 rounded-lg hover:animate-bounce'>
//             Join BWG <span aria-hidden='true'>&rarr;</span>
//           </a>
//         </div>
//       </nav>
//       <Dialog
//         open={mobileMenuOpen}
//         onClose={setMobileMenuOpen}
//         className='lg:hidden'>
//         <div className='fixed inset-0 z-10' />
//         <DialogPanel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
//           <div className='flex items-center justify-between'>
//             <a href='/' className='-m-1.5 p-1.5'>
//               <span className='sr-only'>Your Company</span>
//               <Image
//                 src={Logo}
//                 width={100}
//                 height={73.91}
//                 alt='British Womens Club Bangkok logo'
//               />
//             </a>
//             <button
//               type='button'
//               onClick={() => setMobileMenuOpen(false)}
//               className='-m-2.5 rounded-md p-2.5 text-gray-700'>
//               <span className='sr-only'>Close menu</span>
//               <XMarkIcon aria-hidden='true' className='h-6 w-6' />
//             </button>
//           </div>
//           <div className='mt-6 flow-root'>
//             <div className='-my-6 divide-y divide-gray-500/10'>
//               <div className='space-y-2 py-6'>
//                 {navigation.map((item) => (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
//                     {item.name}
//                   </a>
//                 ))}
//               </div>
//               <div className='py-6'>
//                 <a
//                   href='/application-form'
//                   className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
//                   Join BWG
//                 </a>
//               </div>
//             </div>
//           </div>
//         </DialogPanel>
//       </Dialog>
//     </header>
//   )
// }
