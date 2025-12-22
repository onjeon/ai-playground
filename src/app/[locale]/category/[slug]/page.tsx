import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Brain, Heart, Users, Briefcase, Sparkles, Lightbulb, ArrowLeft, ChevronRight } from 'lucide-react';
import { TestGrid } from '@/components/test';
import { 
  getCategoriesForLocale, 
  getCategoryBySlugForLocale, 
  getTestsByCategoryForLocale 
} from '@/lib/data-loader';
import { locales } from '@/i18n/config';
import { getTranslations } from 'next-intl/server';

interface Props {
  params: { slug: string; locale: string };
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

// 빌드 시 모든 로케일의 카테고리 페이지를 정적 생성
export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  
  for (const locale of locales) {
    const categories = getCategoriesForLocale(locale);
    for (const category of categories) {
      params.push({
        locale,
        slug: category.slug,
      });
    }
  }
  
  return params;
}

// 동적 메타데이터 생성
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = params;
  const t = await getTranslations({ locale, namespace: 'categories' });
  const tMeta = await getTranslations({ locale, namespace: 'meta' });
  
  const category = getCategoryBySlugForLocale(locale, slug);
  const categoryTests = getTestsByCategoryForLocale(locale, slug);
  
  if (!category) {
    return {
      title: tMeta('categoryNotFound'),
    };
  }

  const categoryName = t(category.slug);
  const seoTitle = tMeta('categoryTitle', { category: categoryName, count: categoryTests.length });
  const seoDescription = tMeta('categoryDescription', { category: categoryName, count: categoryTests.length });

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: [
      categoryName,
      'AI',
      ...categoryTests.slice(0, 5).map(test => test.title),
    ],
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      type: 'website',
      locale: locale.replace('-', '_'),
      siteName: tMeta('siteName'),
      url: `${baseUrl}/${locale}/category/${category.slug}`,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/category/${category.slug}`,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { locale, slug } = params;
  const t = await getTranslations({ locale, namespace: 'categories' });
  const tCommon = await getTranslations({ locale, namespace: 'common' });
  const tCategory = await getTranslations({ locale, namespace: 'categoryPage' });
  
  const category = getCategoryBySlugForLocale(locale, slug);
  const categoryTests = getTestsByCategoryForLocale(locale, slug);
  const categories = getCategoriesForLocale(locale);
  
  if (!category) {
    notFound();
  }

  const Icon = iconMap[category.icon] || Brain;
  const gradient = categoryGradients[slug] || 'from-indigo-500 via-purple-500 to-pink-500';
  const categoryName = t(category.slug);

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
            <Link href="/" className="hover:text-white transition-colors">{tCommon('home')}</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{categoryName}</span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
              <Icon className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">{categoryName}</h1>
              <p className="text-white/80 mt-1">{category.description}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
              {tCategory('totalTests', { count: categoryTests.length })}
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs - 모바일 3x2 그리드, 데스크탑 6열 */}
      <section className="grid grid-cols-3 sm:grid-cols-6 gap-2">
        {categories.map((cat) => {
          const CatIcon = iconMap[cat.icon] || Brain;
          const isActive = cat.slug === slug;
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
              <span className="truncate">{t(cat.slug)}</span>
            </Link>
          );
        })}
      </section>

      {/* Tests Grid */}
      <section>
        <TestGrid 
          tests={categoryTests} 
          emptyMessage={tCategory('noTests')}
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
          {tCategory('viewOtherTests')}
        </Link>
      </section>
    </div>
  );
}
