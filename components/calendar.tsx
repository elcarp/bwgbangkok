import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/20/solid'

const days = [
  { date: '2024-07-28', events: [] },
  { date: '2024-07-29', events: [] },
  { date: '2024-07-30', events: [] },
  { date: '2024-07-31', events: [] },
  {
    date: '2024-08-01',
    isCurrentMonth: true,
    isToday: true,
    events: [
      {
        id: 1,
        name: 'Mahjong',
        time: '10AM',
        datetime: '2022-01-03T10:00',
        href: '#',
      },
      {
        id: 1,
        name: 'Book club',
        time: '10AM',
        datetime: '2022-01-03T10:00',
        href: '#',
      },
    ],
  },
  { "date": "2024-08-02", "events": [] },
  { "date": "2024-08-03", "events": [] },
  { "date": "2024-08-04", "events": [] },
  { "date": "2024-08-05", "events": [] },
  { "date": "2024-08-06", "events": [] },
  { "date": "2024-08-07", "events": [] },
  { "date": "2024-08-08", "events": [] },
  { "date": "2024-08-09", "events": [] },
  { "date": "2024-08-10", "events": [] },
  { "date": "2024-08-11", "events": [] },
  { "date": "2024-08-12", "events": [] },
  { "date": "2024-08-13", "events": [] },
  { "date": "2024-08-14", "events": [] },
  { "date": "2024-08-15", "events": [] },
  { "date": "2024-08-16", "events": [] },
  { "date": "2024-08-17", "events": [] },
  { "date": "2024-08-18", "events": [] },
  { "date": "2024-08-19", "events": [] },
  { "date": "2024-08-20", "events": [] },
  { "date": "2024-08-21", "events": [] },
  { "date": "2024-08-22", "events": [] },
  { "date": "2024-08-23", "events": [] },
  { "date": "2024-08-24", "events": [] },
  { "date": "2024-08-25", "events": [] },
  { "date": "2024-08-26", "events": [] },
  { "date": "2024-08-27", "events": [] },
  { "date": "2024-08-28", "events": [] },
  { "date": "2024-08-29", "events": [] },
  { "date": "2024-08-30", "events": [] },
  { "date": "2024-08-31", "events": [] }
  // { date: '2021-12-27', events: [] },
  // { date: '2021-12-28', events: [] },
  // { date: '2021-12-29', events: [] },
  // { date: '2021-12-30', events: [] },
  // { date: '2021-12-31', events: [] },
  // { date: '2022-01-01', isCurrentMonth: true, events: [] },
  // { date: '2022-01-02', isCurrentMonth: true, events: [] },
  // {
  //   date: '2022-01-03',
  //   isCurrentMonth: true,
  //   events: [
  //     { id: 1, name: 'Design review', time: '10AM', datetime: '2022-01-03T10:00', href: '#' },
  //     { id: 2, name: 'Sales meeting', time: '2PM', datetime: '2022-01-03T14:00', href: '#' },
  //   ],
  // },
  // { date: '2022-01-04', isCurrentMonth: true, events: [] },
  // { date: '2022-01-05', isCurrentMonth: true, events: [] },
  // { date: '2022-01-06', isCurrentMonth: true, events: [] },
  // {
  //   date: '2022-01-07',
  //   isCurrentMonth: true,
  //   events: [{ id: 3, name: 'Date night', time: '6PM', datetime: '2022-01-08T18:00', href: '#' }],
  // },
  // { date: '2022-01-08', isCurrentMonth: true, events: [] },
  // { date: '2022-01-09', isCurrentMonth: true, events: [] },
  // { date: '2022-01-10', isCurrentMonth: true, events: [] },
  // { date: '2022-01-11', isCurrentMonth: true, events: [] },
  // {
  //   date: '2022-01-12',
  //   isCurrentMonth: true,
  //   isToday: true,
  //   events: [{ id: 6, name: "Sam's birthday party", time: '2PM', datetime: '2022-01-25T14:00', href: '#' }],
  // },
  // { date: '2022-01-13', isCurrentMonth: true, events: [] },
  // { date: '2022-01-14', isCurrentMonth: true, events: [] },
  // { date: '2022-01-15', isCurrentMonth: true, events: [] },
  // { date: '2022-01-16', isCurrentMonth: true, events: [] },
  // { date: '2022-01-17', isCurrentMonth: true, events: [] },
  // { date: '2022-01-18', isCurrentMonth: true, events: [] },
  // { date: '2022-01-19', isCurrentMonth: true, events: [] },
  // { date: '2022-01-20', isCurrentMonth: true, events: [] },
  // { date: '2022-01-21', isCurrentMonth: true, events: [] },
  // {
  //   date: '2022-01-22',
  //   isCurrentMonth: true,
  //   isSelected: true,
  //   events: [
  //     { id: 4, name: 'Maple syrup museum', time: '3PM', datetime: '2022-01-22T15:00', href: '#' },
  //     { id: 5, name: 'Hockey game', time: '7PM', datetime: '2022-01-22T19:00', href: '#' },
  //   ],
  // },
  // { date: '2022-01-23', isCurrentMonth: true, events: [] },
  // { date: '2022-01-24', isCurrentMonth: true, events: [] },
  // { date: '2022-01-25', isCurrentMonth: true, events: [] },
  // { date: '2022-01-26', isCurrentMonth: true, events: [] },
  // { date: '2022-01-27', isCurrentMonth: true, events: [] },
  // { date: '2022-01-28', isCurrentMonth: true, events: [] },
  // { date: '2022-01-29', isCurrentMonth: true, events: [] },
  // { date: '2022-01-30', isCurrentMonth: true, events: [] },
  // { date: '2022-01-31', isCurrentMonth: true, events: [] },
  // { date: '2022-02-01', events: [] },
  // { date: '2022-02-02', events: [] },
  // { date: '2022-02-03', events: [] },
  // {
  //   date: '2022-02-04',
  //   events: [{ id: 7, name: 'Cinema with friends', time: '9PM', datetime: '2022-02-04T21:00', href: '#' }],
  // },
  // { date: '2022-02-05', events: [] },
  // { date: '2022-02-06', events: [] },
]
const selectedDay = days.find((day: any) => day.isSelected)

function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Calendar() {
  return (
    <div className='lg:flex lg:h-full lg:flex-col'>
      <header className='flex items-center justify-between border-b border-gray-200 px-6 py-4 lg:flex-none'>
        <h1 className='text-base font-semibold leading-6 text-gray-900'>
          <time dateTime='2022-01'>August 2024</time>
        </h1>
        <div className='flex items-center'>
          {/* <div className='relative flex items-center rounded-md bg-white shadow-sm md:items-stretch'>
            <button
              type='button'
              className='flex h-9 w-12 items-center justify-center rounded-l-md border-y border-l border-gray-300 pr-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pr-0 md:hover:bg-gray-50'>
              <span className='sr-only'>Previous month</span>
              <ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
            </button>
            <button
              type='button'
              className='hidden border-y border-gray-300 px-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:relative md:block'>
              Today
            </button>
            <span className='relative -mx-px h-5 w-px bg-gray-300 md:hidden' />
            <button
              type='button'
              className='flex h-9 w-12 items-center justify-center rounded-r-md border-y border-r border-gray-300 pl-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pl-0 md:hover:bg-gray-50'>
              <span className='sr-only'>Next month</span>
              <ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
            </button>
          </div> */}
          {/* <div className='hidden md:ml-4 md:flex md:items-center'>
            <Menu as='div' className='relative'>
              <MenuButton
                type='button'
                className='flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>
                Month view
                <ChevronDownIcon
                  className='-mr-1 h-5 w-5 text-gray-400'
                  aria-hidden='true'
                />
              </MenuButton>

              <MenuItems
                transition
                className='absolute right-0 z-10 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in'>
                <div className='py-1'>
                  <MenuItem>
                    <a
                      href='#'
                      className='block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900'>
                      Day view
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href='#'
                      className='block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900'>
                      Week view
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href='#'
                      className='block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900'>
                      Month view
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href='#'
                      className='block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900'>
                      Year view
                    </a>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
            <div className='ml-6 h-6 w-px bg-gray-300' />
            <button
              type='button'
              className='ml-6 rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500'>
              Add event
            </button>
          </div> */}
          {/* <Menu as='div' className='relative ml-6 md:hidden'>
            <MenuButton className='-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500'>
              <span className='sr-only'>Open menu</span>
              <EllipsisHorizontalIcon className='h-5 w-5' aria-hidden='true' />
            </MenuButton>

            <MenuItems
              transition
              className='absolute right-0 z-10 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in'>
              <div className='py-1'>
                <MenuItem>
                  <a
                    href='#'
                    className='block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900'>
                    Create event
                  </a>
                </MenuItem>
              </div>
              <div className='py-1'>
                <MenuItem>
                  <a
                    href='#'
                    className='block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900'>
                    Go to today
                  </a>
                </MenuItem>
              </div>
              <div className='py-1'>
                <MenuItem>
                  <a
                    href='#'
                    className='block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900'>
                    Day view
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href='#'
                    className='block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900'>
                    Week view
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href='#'
                    className='block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900'>
                    Month view
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href='#'
                    className='block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900'>
                    Year view
                  </a>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu> */}
        </div>
      </header>
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
                className={classNames(
                  day.isCurrentMonth ? 'bg-white' : 'bg-gray-50 text-gray-500',
                  'relative px-3 py-2'
                )}>
                <time
                  dateTime={day.date}
                  className={
                    day.isToday
                      ? 'flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 font-semibold text-white'
                      : undefined
                  }>
                  {day.date.split('-').pop().replace(/^0/, '')}
                </time>
                {day.events.length > 0 && (
                  <ol className='mt-2'>
                    {day.events.slice(0, 2).map((event) => (
                      <li key={event.id}>
                        <a href={event.href} className='group flex'>
                          <p className='flex-auto truncate font-medium text-gray-900 group-hover:text-blue-500'>
                            {event.name}
                          </p>
                          <time
                            dateTime={event.datetime}
                            className='ml-3 hidden flex-none text-gray-500 group-hover:text-blue-500 xl:block'>
                            {event.time}
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
                    {day.events.map((event) => (
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
      {selectedDay?.events.length > 0 && (
        <div className='px-4 py-10 sm:px-6 lg:hidden'>
          <ol className='divide-y divide-gray-100 overflow-hidden rounded-lg bg-white text-sm shadow ring-1 ring-black ring-opacity-5'>
            {selectedDay && selectedDay.events.map((event: any) => (
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
