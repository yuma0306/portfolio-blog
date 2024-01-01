import { client } from '@/lib/client';

type dataType = {
  contents: contentsType[];
  totalCount: number;
  offset: number;
  limit: number;
};
type contentsType = {
  id: string;
  title: string;
};

export default async function todo() {
  //microCMSからデータを取得する処理
  const data: dataType = await client.get({
    endpoint: 'blog', //microCMSで設定したもの
    queries: {
      fields: 'id,title',
    },
  });

  return (
    <>
      <div className='mt-[1rem] w-full mx-[2rem]'>
        <h2 className='text-[1.6rem]'>List</h2>
        {data?.contents.map((value, index) => (
          <div key={index} className='flex my-[0.5rem]'>
            <li className='w-[20rem]'>{value.title}</li>
          </div>
        ))}
      </div>
    </>
  );
}
