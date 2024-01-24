/**
 * module読み込み
 */
import Image from "next/image";
// import { useRouter } from 'next/router';
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
  thumb: {
    url: string;
    height: number;
    width: number;
  };
};

export default async function PostItem() {
  // 非同期処理でmicroCMSからデータ取得
  const data: dataType = await client.get({
    // microCMSで設定したものendpoint
    endpoint: 'post',
    contentId: 'pyk1p0han',
  });
  console.log(data);
  return (
    <>
      <p>ポートフォリオ記事</p>
    </>
  )
}
