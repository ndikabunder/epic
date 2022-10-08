import Link from 'next/link';
import React, { useRef } from 'react';
import Logo from './Logo';

export default function Navbar() {
  const navRef = useRef();

  const showNav = () => {
    navRef.current.classList.toggle('hidden');
  };

  const menuNav = [
    {
      id: '1',
      name: 'UI Design',
      Link: '/',
      active: false,
    },
    {
      id: '2',
      name: 'Front-end',
      Link: '/',
      active: true,
    },
    {
      id: '3',
      name: 'Back-end',
      Link: '/',
      active: false,
    },
    {
      id: '4',
      name: 'Lainnya',
      Link: '/',
      active: false,
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <nav className='ralative mt-8 px-1 md:px-5'>
      <div className='flex justify-between items-center'>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          onClick={showNav}
          className='md:hidden'
        >
          <g opacity='0.4'>
            <path
              d='M3 12H21'
              stroke='white'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M3 6H21'
              stroke='white'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M3 18H21'
              stroke='white'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
        </svg>
        <Logo />

        <ul className='md:flex hidden flex-row space-x-10 text-white'>
          {menuNav.map((item) => (
            <li
              key={item.id}
              className={classNames(
                item.active
                  ? 'bg-white/60 text-white'
                  : ' text-white/60 hover:bg-white/60 hover:text-white',
                'py-1  px-2 rounded-lg '
              )}
            >
              <Link href={item.Link}>{item.name}</Link>
            </li>
          ))}
        </ul>

        <span className='flex bg-white/60 p-2 rounded-full active:ring-inset-none'>
          <input
            type='text'
            className='bg-transparent px-2 text-white outline-0'
          />
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g opacity='0.4'>
              <path
                d='M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z'
                stroke='white'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M21 21L16.65 16.65'
                stroke='white'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </g>
          </svg>
        </span>
      </div>
      <div
        className='absolute bg-[#111827] mt-5 text-white  z-[9999] hidden rounded-lg p-4'
        ref={navRef}
      >
        <ul className='flex flex-col space-y-3'>
          {menuNav.map((item) => (
            <li>
              <Link href={item.Link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
