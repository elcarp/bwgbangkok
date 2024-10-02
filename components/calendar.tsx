import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/20/solid'
import { Cedarville_Cursive } from 'next/font/google'

const cedarville = Cedarville_Cursive({
  weight: '400',
  subsets: ['latin'],
})

const days = [
  { date: '2024-09-29', events: [] },

  { date: '2024-09-30', events: [] },

  { date: '2024-10-01', events: [] },
  {
    date: '2024-10-02',
    events: [
      {
        name: '📚 Book Club at Duc de Praslin',
        time: '10:30',
        href: '/calendar#bookclub',
      },
    ],
  },
  { date: '2024-10-03', events: [] },

  {
    date: '2024-10-04',
    events: [{ name: '📝 Committee Meeting', href: '/calendar' }],
  },
  { date: '2024-10-05', events: [] },
  { date: '2024-10-06', events: [] },

  {
    date: '2024-10-07',
    events: [
      {
        name: '🀄 Mahjong Group at The British Club',
        time: '10:00',
        href: '/calendar#mahjong',
      },
    ],
  },
  { date: '2024-10-08', events: [] },
  {
    date: '2024-10-09',
    events: [
      {
        name: '🀄 Mahjong Group at The Royal Oak',
        time: '10:00',
        href: '/calendar#mahjong',
      },
    ],
  },
  { date: '2024-10-10', events: [] },

  {
    date: '2024-10-11',
    events: [{ name: '☕ Coffee Morning', href: '/calendar' }],
  },
  { date: '2024-10-12', events: [] },
  { date: '2024-10-13', events: [] },

  {
    date: '2024-10-14',
    events: [
      {
        name: '🀄 Mahjong Group at The British Club',
        time: '10:00',
        href: '/calendar#mahjong',
      },
    ],
  },
  { date: '2024-10-15', events: [] },
  {
    date: '2024-10-16',
    events: [
      {
        name: '🀄 Mahjong Group at The Royal Oak',
        time: '10:00',
        href: '/calendar#mahjong',
      },
    ],
  },
  { date: '2024-10-17', events: [] },

  {
    date: '2024-10-18',
    events: [{ name: '🥗 Lunch', href: '/calendar' }],
  },
  { date: '2024-10-19', events: [] },
  { date: '2024-10-20', events: [] },

  {
    date: '2024-10-21',
    events: [
      {
        name: '🀄 Mahjong Group at The British Club',
        time: '10:00',
        href: '/calendar#mahjong',
      },
    ],
  },
  { date: '2024-10-22', events: [] },
  {
    date: '2024-10-23',
    events: [
      {
        name: '🀄 Mahjong Group at The Royal Oak',
        time: '10:00',
        href: '/calendar#mahjong',
      },
    ],
  },
  { date: '2024-10-24', events: [] },

  {
    date: '2024-10-25',
    events: [{ name: 'Activity', href: '/calendar' }],
  },
  { date: '2024-10-26', events: [] },
  { date: '2024-10-27', events: [] },

  {
    date: '2024-10-28',
    events: [
      {
        name: '🀄 Mahjong Group at The British Club',
        time: '10:00',
        href: '/calendar#mahjong',
      },
    ],
  },
  { date: '2024-10-29', events: [] },
  {
    date: '2024-10-30',
    events: [
      {
        name: '🀄 Mahjong Group at The Royal Oak',
        time: '10:00',
        href: '/calendar#mahjong',
      },
    ],
  },
  { date: '2024-10-31', events: [] },
]

const date = new Date()
const currentMonth = date.toLocaleString('default', { month: 'long' })
const currentYear = date.getFullYear()

const selectedDay = days.find((day: any) => day.isSelected)

function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Calendar() {
  return (
    <div className='lg:flex lg:h-full lg:flex-col'>
      <header className='flex items-center justify-between border-b border-gray-200 px-6 py-4 lg:flex-none'>
        <div className='text-center mb-10 w-full'>
          <p
            className={`${cedarville.className} text-3xl font-semibold leading-8 tracking-tight text-blue-500`}>
            Come join the fun
          </p>
          <h2 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Activities - {currentMonth} {currentYear}
          </h2>
        </div>

        <div className='flex items-center'></div>
      </header>
      <a
        href='/calendar'
        className='bg-red-300 px-4 py-2 block rounded-lg text-white max-w-sm text-center mx-auto mb-10 font-bold'>
        View Calendar
      </a>
      <div className='shadow ring-1 ring-black ring-opacity-5 lg:flex lg:flex-auto lg:flex-col'>
        <div className='grid grid-cols-7 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs font-semibold leading-6 text-gray-700 lg:flex-none'>
          <div className='bg-white py-2'>
            S<span className='sr-only sm:not-sr-only'>un</span>
          </div>
          <div className='bg-white py-2'>
            M<span className='sr-only sm:not-sr-only'>on</span>
          </div>
          <div className='bg-white py-2'>
            T<span className='sr-only sm:not-sr-only'>ue</span>
          </div>
          <div className='bg-white py-2'>
            W<span className='sr-only sm:not-sr-only'>ed</span>
          </div>
          <div className='bg-white py-2'>
            T<span className='sr-only sm:not-sr-only'>hu</span>
          </div>
          <div className='bg-white py-2'>
            F<span className='sr-only sm:not-sr-only'>ri</span>
          </div>
          <div className='bg-white py-2'>
            S<span className='sr-only sm:not-sr-only'>at</span>
          </div>
        </div>
        <div className='flex bg-gray-200 text-xs leading-6 text-gray-700 lg:flex-auto'>
          <div className='hidden w-full lg:grid lg:grid-cols-7 lg:grid-rows-6 lg:gap-px'>
            {days.map((day) => (
              <div
                key={day.date}
                className={classNames('bg-white relative px-3 py-2')}>
                <time dateTime={day.date}>{day.date.slice(-2)}</time>
                {day.events.length > 0 && (
                  <ol className='mt-2'>
                    {day.events.slice(0, 2).map((event: any) => (
                      <li key={event.name}>
                        <a href={event.href} className='group flex'>
                          <p className='text-xs flex-auto font-medium text-gray-900 group-hover:text-blue-500'>
                            {event.name}
                          </p>
                          <time className='ml-3 text-xs hidden flex-none text-gray-500 group-hover:text-blue-500 xl:block'>
                            {event?.time}
                          </time>
                        </a>
                      </li>
                    ))}
                    {day.events.length > 2 && (
                      <li className='text-gray-500'>
                        + {day.events.length - 2} more
                      </li>
                    )}
                  </ol>
                )}
              </div>
            ))}
          </div>
          <div className='isolate grid w-full grid-cols-7 grid-rows-6 gap-px lg:hidden'>
            {days.map((day: any) => (
              <button
                key={day.date}
                type='button'
                className={classNames(
                  day.isCurrentMonth ? 'bg-white' : 'bg-gray-50',
                  (day.isSelected || day.isToday) && 'font-semibold',
                  day.isSelected && 'text-white',
                  !day.isSelected && day.isToday && 'text-blue-500',
                  !day.isSelected &&
                    day.isCurrentMonth &&
                    !day.isToday &&
                    'text-gray-900',
                  !day.isSelected &&
                    !day.isCurrentMonth &&
                    !day.isToday &&
                    'text-gray-500',
                  'flex h-14 flex-col px-3 py-2 hover:bg-gray-100 focus:z-10'
                )}>
                <time
                  dateTime={day.date}
                  className={classNames(
                    day.isSelected &&
                      'flex h-6 w-6 items-center justify-center rounded-full',
                    day.isSelected && day.isToday && 'bg-blue-500',
                    day.isSelected && !day.isToday && 'bg-gray-900',
                    'ml-auto'
                  )}>
                  {day.date.split('-').pop().replace(/^0/, '')}
                </time>
                <span className='sr-only'>{day.events.length} events</span>
                {day.events.length > 0 && (
                  <span className='-mx-0.5 mt-auto flex flex-wrap-reverse'>
                    {day.events.map((event: any) => (
                      <span
                        key={event.id}
                        className='mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400'
                      />
                    ))}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
      {selectedDay && selectedDay?.events.length > 0 && (
        <div className='px-4 py-10 sm:px-6 lg:hidden'>
          <ol className='divide-y divide-gray-100 overflow-hidden rounded-lg bg-white text-sm shadow ring-1 ring-black ring-opacity-5'>
            {selectedDay &&
              selectedDay.events.map((event: any) => (
                <li
                  key={event.id}
                  className='group flex p-4 pr-6 focus-within:bg-gray-50 hover:bg-gray-50'>
                  <div className='flex-auto'>
                    <p className='font-semibold text-gray-900'>{event.name}</p>
                    <time
                      dateTime={event.datetime}
                      className='mt-2 flex items-center text-gray-700'>
                      <ClockIcon
                        className='mr-2 h-5 w-5 text-gray-400'
                        aria-hidden='true'
                      />
                      {event.time}
                    </time>
                  </div>
                  <a
                    href={event.href}
                    className='ml-6 flex-none self-center rounded-md bg-white px-3 py-2 font-semibold text-gray-900 opacity-0 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400 focus:opacity-100 group-hover:opacity-100'>
                    Edit<span className='sr-only'>, {event.name}</span>
                  </a>
                </li>
              ))}
          </ol>
        </div>
      )}
    </div>
  )
}
