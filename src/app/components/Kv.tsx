import Image from "next/image";

export default function Kv() {
  return (
    <>
      <section className='relative py-40 note'>
        <div className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center w-full mt-[-8px]'>
          <Image
              className=''
              src={'/logo-header.svg'}
              alt={''}
              height={120}
              width={120}
            />
            <h1 className='text-cyan-600 font-bold text-4xl sm:text-6xl'>
              Uma Code
            </h1>
        </div>
        <div className='mb-[1px]'></div>
      </section>
    </>
  )
}
