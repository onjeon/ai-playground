import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Brain, Heart, Users, Briefcase, Sparkles, Lightbulb, ArrowLeft, ChevronRight } from 'lucide-react';
import { TestGrid } from '@/components/test';
import { categories, getTestsByCategory, getCategoryBySlug } from '@/lib/data';

interface Props {
  params: { slug: string };
}

const baseUrl = 'https://ai-playground.vercel.app';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain,
  Heart,
  Users,
  Briefcase,
  Sparkles,
  Lightbulb,
};

// 카테고리별 그라데이션 색상
const categoryGradients: Record<string, string> = {
  personality: 'from-blue-500 via-indigo-500 to-purple-500',
  psychology: 'from-rose-500 via-pink-500 to-purple-500',
  relationship: 'from-pink-500 via-rose-500 to-red-500',
  career: 'from-emerald-500 via-teal-500 to-cyan-500',
  fun: 'from-amber-500 via-orange-500 to-red-500',
  iq: 'from-violet-500 via-purple-500 to-indigo-500',
};

// 빌드 시 모든 카테고리 페이지를 정적 생성
export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

// 동적 메타데이터 생성
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getCategoryBySlug(params.slug);
  
  if (!category) {
    return {
      title: '카테고리를 찾을 수 없습니다 | AI 놀이터',
    };
  }

  const categoryTests = getTestsByCategory(params.slug);
  const seoTitle = `${category.name} - ${categoryTests.length}개 테스트 | AI 놀이터`;
  const seoDescription = `${category.description} ${categoryTests.length}개의 무료 테스트를 즐겨보세요!`;

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: [
      category.name,
      'AI 테스트',
      '심리테스트',
      '무료 테스트',
      ...categoryTests.slice(0, 5).map(t => t.title),
    ],
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      type: 'website',
      locale: 'ko_KR',
      siteName: 'AI 놀이터',
      url: `${baseUrl}/category/${category.slug}`,
    },
    alternates: {
      canonical: `${baseUrl}/category/${category.slug}`,
    },
  };
}

export default function CategoryPage({ params }: Props) {
  const category = getCategoryBySlug(params.slug);
  const categoryTests = getTestsByCategory(params.slug);
  
  if (!category) {
    notFound();
  }

  const Icon = iconMap[category.icon] || Brain;
  const gradient = categoryGradients[params.slug] || 'from-indigo-500 via-purple-500 to-pink-500';

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className={`relative overflow-hidden bg-gradient-to-br ${gradient} rounded-3xl p-8 md:p-12 text-white`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/70 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">홈</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{category.name}</span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
              <Icon className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">{category.name}</h1>
              <p className="text-white/80 mt-1">{category.description}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
              총 {categoryTests.length}개 테스트
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs - 모바일 3x2 그리드, 데스크탑 6열 */}
      <section className="grid grid-cols-3 sm:grid-cols-6 gap-2">
        {categories.map((cat) => {
          const CatIcon = iconMap[cat.icon] || Brain;
          const isActive = cat.slug === params.slug;
          return (
            <Link
              key={cat.id}
              href={`/category/${cat.slug}`}
              className={`flex items-center justify-center gap-1.5 px-2 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:scale-105'
              }`}
            >
              <CatIcon className="w-4 h-4" />
              <span className="truncate">{cat.name}</span>
            </Link>
          );
        })}
      </section>

      {/* Tests Grid */}
      <section>
        <TestGrid 
          tests={categoryTests} 
          emptyMessage="이 카테고리에는 아직 테스트가 없습니다."
          showAds={true}
          adInterval={8}
        />
      </section>

      {/* Back to Home */}
      <section className="text-center pt-4">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          다른 테스트 보기
        </Link>
      </section>
    </div>
  );
}
