/**
 * module読み込み
 */
import Section from '@/app/components/Section';
import Inner from '@/app/components/Inner';
import HeadingLv2 from '@/app/components/HeadingLv2';
import Post from '@/app/components/Post';
import LinkBtn from '@/app/components/LInkBtn';

// 非同期処理が終了するまでコンポーネントがレンダリングされないようにasync関数を使用
export default function Works() {
  // console.log(data.contents);
  return (
    <Section sectionID="works">
      <Inner>
        <HeadingLv2>Works</HeadingLv2>
        <Post />
        <LinkBtn href="/post/">ポートフォリオ一覧</LinkBtn>
      </Inner>
    </Section>
  );
}

