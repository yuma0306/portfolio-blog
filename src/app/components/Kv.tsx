import Link from 'next/link';
import Image from "next/image";
import Inner from '@/app/components/Inner';
import Text from '@/app/components/Text';

export default function Kv() {
  return (
    <>
      <section className='relative py-40 px-4 note'>
        <div className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center mt-[-8px]'>
          <Image
              className=''
              src={'/logo-header.svg'}
              alt={''}
              height={120}
              width={120}
            />
            <h1 className='text-cyan-600 font-bold text-6xl'>
              Uma Code
            </h1>
        </div>
        <div className='mb-[1px]'></div>
      </section>
    </>
  )
}
