'use client';
import { useState, useEffect } from 'react';
import { Link as ScrollLink} from 'react-scroll';
import Link from 'next/link';
import Inner from '@/app/components/Inner';

export default function Header() {
  const media: number = 640;
  const headerHeight: number = 65;
  const scrollDuration: number = 400;
  // ハンバーガー用useStateを定義
  const [isOpen, setOpen] = useState<boolean>(false);
  // トップページかどうか
  const [isTopPage, setIsTopPage] = useState<boolean>(true);
  // booleanをトグルで書き換え
  const burgerToggle = () => {
    setOpen(!isOpen);
  };
  // 画面幅をuseEffectで監視
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= media) {
        // falseに書き換え
        setOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className='shadow fixed top-0 left-0 w-full z-20 bg-white py-4 px-5'>
      <Inner addClass='flex justify-between items-center'>
        <Link className='transition duration-300 hover:opacity-80' href='/'>
          <span className='text-cyan-600 font-bold text-2xl'>Uma Code</span>
        </Link>
        <div className='hidden sm:flex sm:gap-5 text-lg leading-none'>
          <ScrollLink
            to='about'
            smooth={true}
            duration={scrollDuration}
            offset={-headerHeight}
            href='/'
            className='transition duration-300 hover:text-cyan-600 cursor-pointer'
          >
            About
          </ScrollLink>
          <ScrollLink
            to='works'
            smooth={true}
            duration={scrollDuration}
            offset={-headerHeight}
            className='transition duration-300 hover:text-cyan-600 cursor-pointer'
          >
            Works
          </ScrollLink>
          <ScrollLink
            to='skills'
            smooth={true}
            duration={scrollDuration}
            offset={-headerHeight}
            className='transition duration-300 hover:text-cyan-600 cursor-pointer'
          >
            Skills
          </ScrollLink>
          <Link className='transition duration-300 hover:text-cyan-600' href='https://github.com/yuma0306' target='_blank'>GitHub</Link>
          <Link className='transition duration-300 hover:text-cyan-600' href='https://zenn.dev/holy0306' target='_blank'>Zenn</Link>
        </div>
        <div className='sm:hidden cursor-pointer' onClick={burgerToggle}>
          <svg className={isOpen ? 'hidden' : 'h-8 w-8 text-cyan-600'} fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 6h16M4 12h16M4 18h16'/>
          </svg>
          <svg className={isOpen ? 'h-8 w-8 text-cyan-600' : 'hidden'} width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'>
            <path stroke='none' d='M0 0h24v24H0z'/>
            <line x1='18' y1='6' x2='6' y2='18' />
            <line x1='6' y1='6' x2='18' y2='18' />
          </svg>
        </div>
      </Inner>
      <div className={isOpen ? 'visible opacity-100 relative transition duration-300' : 'invisible opacity-0 absolute transition duration-300'}>
        <div className='grid items-center justify-center gap-4 p-5'>
          <ScrollLink
            to='about'
            smooth={true}
            duration={scrollDuration}
            offset={-headerHeight}
            className='transition duration-300 hover:text-cyan-600 cursor-pointer'
            onClick={burgerToggle}
          >
            About
          </ScrollLink>
          <ScrollLink
            to='works'
            smooth={true}
            duration={scrollDuration}
            offset={-headerHeight}
            className='transition duration-300 hover:text-cyan-600 cursor-pointer'
            onClick={burgerToggle}
          >
            Works
          </ScrollLink>
          <ScrollLink
            to='skills'
            smooth={true}
            duration={scrollDuration}
            offset={-headerHeight}
            className='transition duration-300 hover:text-cyan-600 cursor-pointer'
            onClick={burgerToggle}
          >
            Skills
          </ScrollLink>
          <Link className='transition duration-300 hover:text-cyan-600' href='https://github.com/yuma0306' target='_blank' onClick={burgerToggle}>GitHub</Link>
          <Link className='transition duration-300 hover:text-cyan-600' href='https://zenn.dev/holy0306' target='_blank' onClick={burgerToggle}>Zenn</Link>
        </div>
      </div>
    </header>
  )
}
