import Link from 'next/link';

type props = {
  href: string;
  children: string;
};

export default function LinkBtn({ href, children }: props) {
  return (
    <>
      <Link className='block overflow-hidden w-fit m-auto py-3 px-8 mt-10 text-lg font-bold text-white bg-cyan-600 rounded border-b-cyan-800 border-b-4 transition duration-300 hover:opacity-80' href={`${href}`}>{children}</Link>
    </>
  );
}

