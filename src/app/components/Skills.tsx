import Section from '@/app/components/Section';
import Inner from '@/app/components/Inner';
import HeadingLv2 from '@/app/components/HeadingLv2';
import Text from '@/app/components/Text';
import { getSkillList } from '@/libs/microcms';

// キャッシュを利用しない
export const revalidate = 0;

export default async function Skills() {
  // 上限は100
  const { contents } = await getSkillList({ limit: 100 });
  // console.log(contents);
  if (!contents || contents.length === 0) {
    return;
  }
  return (
    <>
      <Section sectionID='skills' addClass='bg-gray-50'>
        <Inner>
          <HeadingLv2>Skills</HeadingLv2>
          <Text align='sm:text-center'>
            フロントエンドのみならず、バックエンドやLinuxなどのインフラ部分まで幅広くスキルの幅を広げております。<br/>
            対応可能な具体例とあわせてスキルセットをまとめました。
          </Text>
          <div className='grid lg:grid-cols-2 gap-12 mt-14'>
            {contents.some(post => post.skillType && post.skillType.id === 'front-end') && (
              <dl className='relative note02 bg-white border-[3px] border-[#CD669A] rounded'>
                <dt className='absolute top-0 left-1/2 translate-y-[-50%] translate-x-[-50%] px-3 py-1.5 text-2xl text-center text-white bg-[#CD669A] rounded leading-0'>Front End</dt>
                <dd className='grid gap-y-[2rem] p-[2rem]'>
                  {contents.filter(post => post.skillType && post.skillType.id === 'front-end').map((post) =>
                    <dl key={post.id}>
                      <dt className='text-[18px] font-bold'>{post.skillTerm}</dt>
                      <dd>{post.skillDesc}</dd>
                    </dl>
                  )}
                </dd>
              </dl>
            )}
            {contents.some(post => post.skillType && post.skillType.id === 'back-end') && (
              <dl className='relative note02 bg-white border-[3px] border-[#7986b8] rounded'>
                <dt className='absolute top-0 left-1/2 translate-y-[-50%] translate-x-[-50%] px-3 py-1.5 text-2xl text-center text-white bg-[#7986b8] rounded leading-0'>Back End</dt>
                <dd className='grid gap-y-[2rem] p-[2rem]'>
                  {contents.filter(post => post.skillType && post.skillType.id === 'back-end').map((post) =>
                    <dl key={post.id}>
                      <dt className='text-[18px] font-bold'>{post.skillTerm}</dt>
                      <dd>{post.skillDesc}</dd>
                    </dl>
                  )}
                </dd>
              </dl>
            )}
            {contents.some(post => post.skillType && post.skillType.id === 'tool') && (
              <dl className='relative note02 bg-white border-[3px] border-[#8AB4F8] rounded'>
                <dt className='absolute top-0 left-1/2 translate-y-[-50%] translate-x-[-50%] px-3 py-1.5 text-2xl text-center text-white bg-[#8AB4F8] rounded leading-0'>Tool</dt>
                <dd className='grid gap-y-[2rem] p-[2rem]'>
                  {contents.filter(post => post.skillType && post.skillType.id === 'tool').map((post) =>
                    <dl key={post.id}>
                      <dt className='text-[18px] font-bold'>{post.skillTerm}</dt>
                      <dd>{post.skillDesc}</dd>
                    </dl>
                  )}
                </dd>
              </dl>
            )}
            {contents.some(post => post.skillType && post.skillType.id === 'os-category') && (
              <dl className='relative note02 bg-white border-[3px] border-[#F4BD0D] rounded'>
                <dt className='absolute top-0 left-1/2 translate-y-[-50%] translate-x-[-50%] px-3 py-1.5 text-2xl text-center text-white bg-[#F4BD0D] rounded leading-0'>OS</dt>
                <dd className='grid gap-y-[2rem] p-[2rem]'>
                  {contents.filter(post => post.skillType && post.skillType.id === 'os-category').map((post) =>
                    <dl key={post.id}>
                      <dt className='text-[18px] font-bold'>{post.skillTerm}</dt>
                      <dd>{post.skillDesc}</dd>
                    </dl>
                  )}
                </dd>
              </dl>
            )}
            {contents.some(post => post.skillType && post.skillType.id === 'design') && (
              <dl className='relative note02 bg-white border-[3px] border-[#330000] rounded'>
                <dt className='absolute top-0 left-1/2 translate-y-[-50%] translate-x-[-50%] px-3 py-1.5 text-2xl text-center text-white bg-[#330000] rounded leading-0'>Design</dt>
                <dd className='grid gap-y-[2rem] p-[2rem]'>
                  {contents.filter(post => post.skillType && post.skillType.id === 'design').map((post) =>
                    <dl key={post.id}>
                      <dt className='text-[18px] font-bold'>{post.skillTerm}</dt>
                      <dd>{post.skillDesc}</dd>
                    </dl>
                  )}
                </dd>
              </dl>
            )}
            {
              /*
                ▼カテゴリでの分類
                {contents.some(post => post.skillCategory.includes('front-end')) && (
                  <dl className='relative note02 bg-white border-[3px] border-[#CD669A] rounded'>
                    <dt className='absolute top-0 left-1/2 translate-y-[-50%] translate-x-[-50%] px-3 py-1.5 text-2xl text-center text-white bg-[#CD669A] rounded leading-0'>Front End</dt>
                    <dd className='grid gap-y-[2rem] p-[2rem]'>
                      {contents.map((post) =>
                        post.skillCategory.includes('front-end') && (
                          <dl key={post.id}>
                            <dt className='text-[18px] font-bold'>{post.skillTerm}</dt>
                            <dd>{post.skillDesc}</dd>
                          </dl>
                        )
                      )}
                    </dd>
                  </dl>
                )}
              */
            }
          </div>
        </Inner>
      </Section>
    </>
  )
}
