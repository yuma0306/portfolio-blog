// import parse from 'html-react-parser';
// {parse(post.content)}

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
          <div className='note02 px-5 pb-[33px]'>
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
                <ul className='flex flex-wrap gap-x-4 mt-8'>
                  {post.skillTags.map((tag) =>
                    <li className='relative h-8 pl-[28px] pr-[8px] rounded-tl-2xl rounded-bl-2xl text-[14px] text-white bg-[#333] leading-0 before:absolute before:top-[50%] before:left-[8px] before:translate-y-[-50%]	before:rounded-full before:bg-white before:w-3.5 before:h-3.5' key={tag.skillTagField.id}>{tag.skillTagField.skillTerm}</li>
                  )}
                </ul>
              )}
              <div className='blog-content' dangerouslySetInnerHTML={{ __html: post.content }}></div>
            </Inner>
          </div>
        <Footer />
      </Wrapper>
    </>
  );
}

// {
//   "id": "9xfe-6m5wly",
//   "createdAt": "2024-01-27T06:48:26.769Z",
//   "updatedAt": "2024-01-28T12:56:56.252Z",
//   "publishedAt": "2024-01-27T06:48:26.769Z",
//   "revisedAt": "2024-01-28T12:56:56.252Z",
//   "title": "【本サイト】Uma Code",
//   "content": "<ul><li>next.js14（App router）</li><li>MicroCMS</li></ul><h2 id=\"hf860dce3e6\">H2見出し</h2><p>pタグpタグpタグpタグ</p><h3 id=\"hb2a2025c0e\">h3見出し</h3><ul><li>リスト</li><li>リスト</li></ul>",
//   "eyecatch": {
//       "url": "https://images.microcms-assets.io/assets/a2ab7e6cdf29426289d6e9e696759783/5f32079526b44ee7a704902cd8838dc6/uma-code.png",
//       "height": 662,
//       "width": 1468
//   },
//   "category": {
//       "id": "front-end",
//       "createdAt": "2024-01-26T00:50:23.710Z",
//       "updatedAt": "2024-01-28T12:07:24.059Z",
//       "publishedAt": "2024-01-26T00:50:23.710Z",
//       "revisedAt": "2024-01-28T12:06:40.976Z",
//       "name": "フロントエンド"
//   },
//   "label": "Next.js",
//   "skillTags": [
//       {
//           "fieldId": "skillTagFieldID",
//           "skillTagField": {
//               "id": "wl7zx8-ts",
//               "createdAt": "2024-01-28T11:23:47.849Z",
//               "updatedAt": "2024-01-28T12:36:58.923Z",
//               "publishedAt": "2024-01-28T11:23:47.849Z",
//               "revisedAt": "2024-01-28T12:36:58.923Z",
//               "skillTerm": "React・Next.js",
//               "skillDesc": "コンポーネントを使った基本的なコーディングが可能。Next.jsのApp Routerを活用したコーディングも可能。",
//               "skillType": {
//                   "id": "front-end"
//               }
//           }
//       },
//       {
//           "fieldId": "skillTagFieldID",
//           "skillTagField": {
//               "id": "s65ino8v6h5a",
//               "createdAt": "2024-01-28T10:53:05.511Z",
//               "updatedAt": "2024-01-28T12:36:13.742Z",
//               "publishedAt": "2024-01-28T10:53:05.511Z",
//               "revisedAt": "2024-01-28T12:36:13.742Z",
//               "skillTerm": "MicroCMS",
//               "skillDesc": "Next.jsなど各言語でAPI連携をすることが可能",
//               "skillType": {
//                   "id": "tool"
//               }
//           }
//       }
//   ]
// }
