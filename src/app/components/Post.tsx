/**
 * module読み込み
 */
import Image from "next/image";
import Link from 'next/link';
import { client, getAllPosts } from '@/lib/client';

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
  thumb: {
    url: string;
    height: number;
    width: number;
  };
};

// 非同期処理が終了するまでコンポーネントがレンダリングされないようにasync関数を使用
export default async function Post() {
  // 非同期処理でmicroCMSからデータ取得
  const data: dataType = await client.get({
    // microCMSで設定したものendpoint
    endpoint: 'post',
    queries: {
      // microCMSで設定したものフィールド（画像はnext.config.jsにドメインを定義）
      fields: 'id,title,thumb',
      limit: 10,
    },
  });
  // console.log(data.contents);
  return (
    <>
      {data?.contents && (
        <ul className="grid grid-cols-3 gap-6 mt-14">
          {data.contents.map((value, index) => {
            // console.log(value);
            return (
              <li key={index} className="group">
                <Link className="grid gap-y-3 font-semibold text-lg" href={`/post/${value.id}`}>
                  <div className="w-full aspect-video overflow-hidden">
                    <Image
                      className='relative w-full h-full object-cover transition duration-300 group-hover:scale-125'
                      src={value.thumb.url}
                      alt={value.title}
                      height={value.thumb.height}
                      width={value.thumb.width}
                    />
                  </div>
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
