import { MetadataRoute } from 'next';
import { tests } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ai-playground.vercel.app';

  // 정적 페이지들
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ];

  // 테스트 페이지들 (동적)
  const testPages: MetadataRoute.Sitemap = tests.map((test) => ({
    url: `${baseUrl}/test/${test.slug}`,
    lastModified: new Date(test.createdAt),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...testPages];
}
