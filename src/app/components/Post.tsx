/**
 * module読み込み
 */
import Image from "next/image";
import Link from 'next/link';
import { client } from '@/lib/client';

/**
 * microcmsから取得するデータ型
 * https://document.microcms.io/content-api/get-list-contents
 */
type dataType = {
  contents: contentsType[];
  totalCount: number;
  offset: number;
  limit: number;
};
type contentsType = {
  id: string;
  title: string;
  url: string;
};

// 非同期処理が終了するまでコンポーネントがレンダリングされないようにasync関数を使用
export default async function Post() {
  // 非同期処理でmicroCMSからデータ取得
  const data: dataType = await client.get({
    endpoint: 'post', // microCMSで設定したものendpoint
    queries: {
      fields: 'id,title,thumb', // microCMSで設定したものフィールド
      limit: 10,
    },
  });
  // console.log(data.contents);
  return (
    <>
      {data?.contents && (
        <ul className="grid grid-cols-3 gap-4 mt-14">
          {data.contents.map((value, index) => {
            // console.log(value);
            return (
              <li key={index}>
                <Link className="grid gap-y-2 font-semibold text-lg" href={`/post/${value.id}`}>
                  <Image
                    className='w-full'
                    src='/dorango-farm.png'
                    alt={value.title}
                    // src={value.thumb.url}
                    // alt={value.title}
                    width={330}
                    height={330}
                  />
                  <span className="text-center">{value.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

