import Link from 'next/link';
import Image from "next/image";
import Section from '@/app/components/Section';
import Inner from '@/app/components/Inner';
import HeadingLv2 from '@/app/components/HeadingLv2';
import Text from '@/app/components/Text';

export default function Skills() {
  return (
    <>
      <Section sectionID='skills' addClass='bg-gray-50'>
        <Inner>
          <HeadingLv2>Skills</HeadingLv2>
          <div className='grid grid-cols-2 gap-6 mt-14'>
            <dl className='relative bg-white border-2 border-cyan-600'>
              <dt className='absolute top-0 left-1/2 translate-y-[-50%] translate-x-[-50%] px-2 py-1.5 text-3xl text-white bg-cyan-600 rounded leading-0'>Front End</dt>
              <dd className='note02 grid gap-y-[2rem] p-[2rem]'>
                <dl>
                  <dt className='font-bold'>HTML・Pug</dt>
                  <dd>SEOを意識したセマンティックなコーディングが可能</dd>
                </dl>
                <dl>
                  <dt>CSS・Sass</dt>
                  <dd>BEMやFlocssなどCSS設計に沿ったコーディングが可能。BootstrapやTailwind CSSの使用も可能</dd>
                </dl>
                <dl>
                  <dt>JavaScript・jQuery</dt>
                  <dd>最適なコーディングが可能</dd>
                </dl>
                <dl>
                  <dt>Google Apps Script</dt>
                  <dd>スプレッドシートなどと連携したコーディングが可能</dd>
                </dl>
                <dl>
                  <dt>TypeScript</dt>
                  <dd>Next.jsと連携した処理など基本的なコーディングが可能</dd>
                </dl>
                <dl>
                  <dt>Next.js・React</dt>
                  <dd>基本的なコーディングが可能</dd>
                </dl>
                <dl>
                  <dt>Gulp</dt>
                  <dd>目的に合わせたタスク作成が可能</dd>
                </dl>
              </dd>
            </dl>
            <dl>
              <dt>Tool</dt>
              <dd>
                <dl>
                  <dt>GitHub</dt>
                  <dd>Gitコマンドを用いたチーム開発が可能</dd>
                </dl>
                <dl>
                  <dt>Google Tag Maneger</dt>
                  <dd>トリガー設定など基本的な業務が可能</dd>
                </dl>
                <dl>
                  <dt>Photoshop</dt>
                  <dd>コーディングに必要な操作が可能。簡単なデザイン作成も可能</dd>
                </dl>
                <dl>
                  <dt>Illustrator</dt>
                  <dd>コーディングに必要な操作が可能</dd>
                </dl>
                <dl>
                  <dt>XD</dt>
                  <dd>コーディングに必要な操作が可能。簡単なデザイン・ワイヤー作成も可能</dd>
                </dl>
                <dl>
                  <dt>Figma</dt>
                  <dd>コーディングに必要な操作が可能。簡単なデザイン・ワイヤー作成も可能</dd>
                </dl>
              </dd>
            </dl>
            <dl>
              <dt>Back End</dt>
              <dd>
                <dl>
                  <dt>PHP</dt>
                  <dd>最適なコーディング・プログラムの作成が可能</dd>
                </dl>
                <dl>
                  <dt>MySQL</dt>
                  <dd>CRUDなど基本的なクエリ記述が可能</dd>
                </dl>
                <dl>
                  <dt>WordPress</dt>
                  <dd>オリジナルテーマ作成の作成が可能。エディターのカスタマイズやACFPROなどプラグインの活用についても知見有り。</dd>
                </dl>
              </dd>
            </dl>
            <dl>
              <dt>OS</dt>
              <dd>
                <dl>
                  <dt>Linux</dt>
                  <dd>Webサーバー、LAMP環境の構築が可能</dd>
                </dl>
                <dl>
                  <dt>Windows</dt>
                  <dd>LAMP・フロントエンド開発環境の構築が可能</dd>
                </dl>
                <dl>
                  <dt>Mac</dt>
                  <dd>Webサーバー、LAMP環境の構築が可能</dd>
                </dl>
              </dd>
            </dl>
          </div>
        </Inner>
      </Section>
    </>
  )
}
