import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getDetail, getList } from '@/libs/microcms';
import Wrapper from '@/app/components/Wrapper';
import Header from '@/app/components/Header';
import Inner from '@/app/components/Inner';
import Footer from '@/app/components/Footer';

// キャッシュを利用しない
export const revalidate = 0;

export async function generateStaticParams() {
  const { contents } = await getList();
  const paths = contents.map((post) => {
    return {
      postId: post.id,
    };
  });
  return [...paths];
}

export default async function StaticDetailPage({
  params: { postId },
}: {
  params: { postId: string };
}) {
  const post = await getDetail(postId);

  if (!post) {
    notFound();
  }
  return (
    <>
      <Wrapper>
        <Header />
          <div className='note02 px-5 pb-[33px] overflow-x-hidden'>
            <Inner addClass='max-w-5xl'>
              <h1 className='relative py-[2rem] text-[2rem] font-medium text-center before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-[#333]'>{post.title}</h1>
              <time className='block'>更新日：{post.updatedAt.split('T')[0]}</time>
              <Image
                className='w-[600px] max-w-full h-[12rem] sm:h-[18rem] lg:h-[22rem] mx-auto mt-[2rem] object-cover shadow-round rounded'
                alt={post.title}
                src={post.eyecatch!.url}
                height={post.eyecatch!.height}
                width={post.eyecatch!.width}
              />
              {post.skillTags.some(tag => tag.skillTagField && tag.skillTagField.skillTerm) && (
                <div className='overflow-x-auto whitespace-nowrap	mt-8'>
                  <ul className='flex gap-4'>
                    {post.skillTags.map((tag) =>
                      <li className='relative h-8 pl-[28px] pr-[8px] rounded-tl-2xl rounded-bl-2xl text-[14px] text-white bg-[#333] leading-0 before:absolute before:top-[50%] before:left-[8px] before:translate-y-[-50%]	before:rounded-full before:bg-white before:w-3.5 before:h-3.5' key={tag.skillTagField.id}>{tag.skillTagField.skillTerm}</li>
                    )}
                  </ul>
                </div>
              )}
              <div className='blog-content' dangerouslySetInnerHTML={{ __html: post.content }}></div>
            </Inner>
          </div>
        <Footer />
      </Wrapper>
    </>
  );
}
