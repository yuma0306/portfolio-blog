// import parse from 'html-react-parser';
// {parse(post.content)}

import { notFound } from 'next/navigation';
import { getDetail, getList } from '@/libs/microcms';

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
  // ページの生成された時間を取得
  const time = new Date().toLocaleString();
  if (!post) {
    notFound();
  }
  return (
    <>
      <h1>{post.title}</h1>
      <div
        className='
          [&>h2]:p-4 [&>h2]:relative
          [&>h3]:relative [&>h3]:p-2 [&>h3]:text-cyan-600
        '
        dangerouslySetInnerHTML={{ __html: post.content }}
      >
      </div>
    </>
  );
}
