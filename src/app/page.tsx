/**
 * module読み込み
 */
import Link from 'next/link';
import Image from "next/image";
import { client } from '@/lib/client';
import Wrapper from '@/app/components/Wrapper';
import Header from '@/app/components/Header';
import Kv from '@/app/components/Kv';
import About from '@/app/components/About';
import Footer from '@/app/components/Footer';
import Works from '@/app/components/Works';
import Skills from './components/Skills';

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

export default async function Home() {
  //microCMSからデータを取得する処理
  const data: dataType = await client.get({
    endpoint: 'post', //microCMSで設定したもの
    queries: {
      fields: 'id,title,thumb',
      limit: 10,
    },
  });
  // console.log(data.contents);
  return (
    <>
      <Wrapper>
        <Header />
        <Kv />
        <About />
        <Works />
        <Skills />
        <Footer />
      </Wrapper>
    </>
  );
}
