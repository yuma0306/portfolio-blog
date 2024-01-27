import Link from 'next/link';
import Image from 'next/image';
import Inner from '@/app/components/Inner';

export default function Header() {
  return (
    <header className='py-4 px-4'>
      <Inner addClass='flex justify-between items-center'>
        <Link className='flex items-end gap-1.5 transition duration-300 hover:opacity-80' href='/'>
          <Image
            className=''
            src={'/logo-header.svg'}
            alt={''}
            height={50}
            width={50}
          />
          <span className='text-cyan-600 font-bold text-2xl pb-0.5'>Uma Code</span>
        </Link>
        <div className='flex gap-5 text-lg leading-none'>
          <Link className='transition duration-300 hover:text-cyan-600' href='#about'>About</Link>
          <Link className='transition duration-300 hover:text-cyan-600' href='#works'>Works</Link>
          <Link className='transition duration-300 hover:text-cyan-600' href='#skills'>Skills</Link>
          <Link className='transition duration-300 hover:text-cyan-600' href='https://github.com/yuma0306' target='_blank'>GitHub</Link>
          <Link className='transition duration-300 hover:text-cyan-600' href='https://zenn.dev/holy0306' target='_blank'>Zenn</Link>
        </div>
      </Inner>
    </header>
  )
}
