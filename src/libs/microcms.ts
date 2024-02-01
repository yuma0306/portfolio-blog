// libs/microcms.ts

import { createClient } from 'microcms-js-sdk';
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSDate,
} from 'microcms-js-sdk';

// MicroCMS endpoint
type Endpoint = {
  [key: string]: string;
};
const endpoints: Endpoint = {
  blog: 'blogs',
  skill: 'skills',
};

// スキルの型定義
export type Skill = {
  id: string;
  skillTerm: string;
  skillDesc: string;
  skillCategory: string;
  skillType: {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt?: string;
    revisedAt?: string;
    name: string;
  };
  posts: string;
}

// ブログの型定義
export type Blog = {
  id: string;
  title: string;
  content: string;
  eyecatch?: MicroCMSImage;
  label: string;
  frontFlag: boolean;
} & MicroCMSDate;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
}

// API取得用のクライアントを作成
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// ブログ一覧を取得
export const getList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Blog>({
    endpoint: endpoints.blog,
    queries,
  });
  //  await new Promise((resolve) => setTimeout(resolve, 3000));
  return listData;
};

// スキル一覧を取得
export const getSkillList = async (queries?: MicroCMSQueries) => {
  const skillListData = await client.getList<Skill>({
    endpoint: endpoints.skill,
    queries,
  });
  return skillListData;
};

// ブログの詳細を取得
export const getDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<Blog>({
    endpoint: endpoints.blog,
    contentId,
    queries,
  });
  //  await new Promise((resolve) => setTimeout(resolve, 3000));
  return detailData;
};
