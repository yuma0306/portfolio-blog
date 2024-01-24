import { createClient } from 'microcms-js-sdk';

if (!process.env.SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

if (!process.env.API_KEY) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN!, // XXXX.microcms.io の XXXX 部分
  apiKey: process.env.API_KEY!,
});

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

// // ブログ一覧を取得
export const getAllPosts = async () => {
  const posts: dataType = await client.get({
    // microCMSで設定したものendpoint
    endpoint: 'post',
    queries: {
      // microCMSで設定したものフィールド（画像はnext.config.jsにドメインを定義）
      fields: 'id,title,thumb',
      limit: 10,
    },
  });
  return posts;
}

// // ブログの詳細を取得
export const getPost = async (contentId: string) => {
  const post: dataType = await client.get({
    // microCMSで設定したものendpoint
    endpoint: 'post',
    contentId: 'pyk1p0han',
  });
  return post;
};
