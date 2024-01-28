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
        <Text align='text-center'>
            自主制作したポートフォリオを紹介しています。<br/>
            各ポートフォリオの仕様については、詳細ページに記載しております。
          </Text>
        <ul className='grid grid-cols-3 gap-6 mt-14'>
          {contents.map((post) => {
            // console.log(contents);
            return (
              <li key={post.id} className='group'>
                <Link className='grid gap-y-3 font-semibold text-lg' href={`/blog/${post.id}`}>
                  <div className='w-full aspect-video overflow-hidden'>
                    <Image
                      className='relative w-full h-full object-cover transition duration-300 group-hover:scale-125'
                      alt={post.title}
                      src={post.eyecatch!.url}
                      height={post.eyecatch!.height}
                      width={post.eyecatch!.width}
                    />
                  </div>
                  <p className='text-center'>{post.title}</p>
                </Link>
              </li>
            );
          })}
        </ul>
        <LinkBtn href='/blog/'>ポートフォリオ一覧</LinkBtn>
      </Inner>
    </Section>
  );
}

