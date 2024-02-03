import Wrapper from '@/app/components/Wrapper';
import Header from '@/app/components/Header';
import Inner from '@/app/components/Inner';
import Footer from '@/app/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { getList } from '@/libs/microcms';

// キャッシュを利用しない
export const revalidate = 0;

export default async function StaticPage() {
  const { contents } = await getList();
  if (!contents || contents.length === 0) {
    return <h1>投稿はまだありません</h1>;
  }
  return (
    <Wrapper addClass='grid-temp-row3'>
        <Header />
          <div className='note02 px-5 pb-[33px]'>
            <Inner addClass='max-w-5xl'>
              <h1 className='relative py-[2rem] text-[2rem] font-medium text-center before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-[#333]'>ポートフォリオ一覧</h1>
              <ul className='grid sm:grid-cols-2 lg:grid-cols-3 gap-[2rem] mt-[2rem]'>
                {contents.map((post) =>
                  <li key={post.id} className='relative group'>
                    <Link className='grid' href={`/blog/${post.id}`}>
                      <div className='relative mx-auto shadow-round w-full max-w-[320px] h-[12rem] rounded overflow-hidden'>
                        <Image
                          className='relative w-full h-full object-cover transition duration-300 group-hover:scale-125'
                          alt={post.title}
                          src={post.eyecatch!.url}
                          height={post.eyecatch!.height}
                          width={post.eyecatch!.width}
                        />
                        <p className='absolute top-0 left-0 px-2 py-1 text-[14px] text-white bg-[#333] rounded-br leading-0'>{post.label}</p>
                      </div>
                      <p className='font-medium text-center'>{post.title}</p>
                    </Link>
                  </li>
                )}
              </ul>
            </Inner>
          </div>
      <Footer />
    </Wrapper>
  );
}
