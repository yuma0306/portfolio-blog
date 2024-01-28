import Link from 'next/link';
import Image from 'next/image';
import Section from '@/app/components/Section';
import Inner from '@/app/components/Inner';
import HeadingLv2 from '@/app/components/HeadingLv2';
import Text from '@/app/components/Text';

type SocialPrpos = {
  icon: string;
  alt: string;
  text: string;
  link: string;
};

const Social = ({ icon, alt, text, link }: SocialPrpos) => {
  return (
    <div className='flex items-end gap-2'>
      <Image
        src={icon}
        alt={alt}
        height={30}
        width={30}
      />
      <Link className='underline text-cyan-600 transition duration-300 hover:opacity-80' href={link} target='_blank'>{text}</Link>
    </div>
  );
};

export default function About() {
  return (
    <>
      <Section sectionID='about' addClass='bg-gray-50'>
        <Inner>
          <HeadingLv2>About Me</HeadingLv2>
          <div className='flex items-center w-fit mx-auto	gap-10 mt-14'>
            <Image
              className='w-1/6'
              src={'/img-lizard.png'}
              alt={'プロフィールアイコン'}
              height={300}
              width={300}
            />
            <div className='flex-1'>
              <Text align='text-left'>
                2020年にフロントエンドエンジニアとしてキャリアをスタート。<br/>
                Web制作を通じて、コーディング・解析・SEOなどWeb周りの基礎を身につけ、現在ではバックエンド・インフラ関連の業務まで幅広く担当するようになりました。<br/>
                好きなことは「動物園・水族館巡り」「生き物採取」「釣り」「温泉・サウナ」「Alexa・SwitchBotを使った部屋の魔改造」など。
              </Text>
              <div className='flex gap-10 mt-8'>
                <Social
                  icon='/github.svg'
                  alt='GitHubのアイコン'
                  link='https://github.com/yuma0306'
                  text='GitHub'
                />
                <Social
                  icon='/zenn.svg'
                  alt='Zennのアイコン'
                  link='https://zenn.dev/holy0306'
                  text='Zenn'
                />
              </div>
            </div>
          </div>
        </Inner>
      </Section>
    </>
  )
}
