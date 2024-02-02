import Image from 'next/image';
import Link from 'next/link';
import Section from '@/app/components/Section';
import Inner from '@/app/components/Inner';
import HeadingLv2 from '@/app/components/HeadingLv2';
import LinkBtn from '@/app/components/LInkBtn';
import Text from '@/app/components/Text';
import { getList } from '@/libs/microcms';

// キャッシュを利用しない
export const revalidate = 0;

export default async function Works() {
  const { contents } = await getList();
  if (!contents || contents.length === 0) {
    return;
  }
  return (
    <Section sectionID='works'>
      <Inner>
        <HeadingLv2>Works</HeadingLv2>
        <Text align='sm:text-center'>
          自主制作したポートフォリオを紹介しています。<br/>
          各ポートフォリオの<span className='marker font-bold'>仕様・使用技術については、詳細ページに記載</span>しております。
        </Text>
        <ul className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14'>
          {contents.map((post) =>
            post.frontFlag && (
              <li key={post.id} className='relative group'>
                <Link className='grid gap-y-3' href={`/blog/${post.id}`}>
                  <div className='shadow-round w-full aspect-video rounded overflow-hidden'>
                    <Image
                      className='relative w-full h-full object-cover transition duration-300 group-hover:scale-125'
                      alt={post.title}
                      src={post.eyecatch!.url}
                      height={post.eyecatch!.height}
                      width={post.eyecatch!.width}
                    />
                  </div>
                  <p className='font-medium text-center'>{post.title}</p>
                  <p className='absolute top-0 left-0 px-2 py-1 text-[14px] text-white bg-[#333] rounded-br leading-0'>{post.label}</p>
                </Link>
              </li>
            )
          )}
        </ul>
        <LinkBtn href='/blog/'>ポートフォリオ一覧</LinkBtn>
      </Inner>
    </Section>
  );
}

