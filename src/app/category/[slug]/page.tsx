'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Brain, Heart, Users, Briefcase, Sparkles, Lightbulb, ArrowLeft, ChevronRight } from 'lucide-react';
import { TestGrid } from '@/components/test';
import { categories, getTestsByCategory, getCategoryBySlug } from '@/lib/data';

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

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const category = getCategoryBySlug(slug);
  const categoryTests = getTestsByCategory(slug);
  
  if (!category) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          카테고리를 찾을 수 없습니다
        </h1>
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700"
        >
          <ArrowLeft className="w-4 h-4" />
          홈으로 돌아가기
        </Link>
      </div>
    );
  }

  const Icon = iconMap[category.icon] || Brain;
  const gradient = categoryGradients[slug] || 'from-indigo-500 via-purple-500 to-pink-500';

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

      {/* Other Categories */}
      <section className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4">
        {categories.filter(c => c.slug !== slug).map((cat) => {
          const CatIcon = iconMap[cat.icon] || Brain;
          return (
            <Link
              key={cat.id}
              href={`/category/${cat.slug}`}
              className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <CatIcon className="w-4 h-4" />
              {cat.name}
            </Link>
          );
        })}
      </section>

      {/* Tests Grid */}
      <section>
        <TestGrid 
          tests={categoryTests} 
          emptyMessage="이 카테고리에는 아직 테스트가 없습니다."
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
