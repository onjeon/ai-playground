'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Heart } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const tCommon = useTranslations('common');
  const tCategories = useTranslations('categories');
  const tNav = useTranslations('nav');

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 mt-auto">
      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent truncate">
                {tCommon('siteName').replace('AI ', '').replace('AI', '')}
              </span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {tCommon('siteDescription').slice(0, 50)}...
            </p>
          </div>

          {/* Tests */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">{tNav('tests')}</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/tests?sort=popular" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  {tCategories('personality')}
                </Link>
              </li>
              <li>
                <Link href="/tests?sort=new" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  {tCategories('psychology')}
                </Link>
              </li>
              <li>
                <Link href="/fortune" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  {tNav('fortune')}
                </Link>
              </li>
              <li>
                <Link href="/daily" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  {tNav('daily')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">{tNav('categories')}</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/category/personality" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  {tCategories('personality')}
                </Link>
              </li>
              <li>
                <Link href="/category/psychology" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  {tCategories('psychology')}
                </Link>
              </li>
              <li>
                <Link href="/category/relationship" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  {tCategories('relationship')}
                </Link>
              </li>
              <li>
                <Link href="/category/fun" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  {tCategories('fun')}
                </Link>
              </li>
            </ul>
          </div>

          {/* More */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">{tCommon('more')}</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/physical" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  {tNav('physical')}
                </Link>
              </li>
              <li>
                <Link href="/games" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  {tNav('games')}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  {t('privacy')}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  {t('terms')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Business Info - 한국어일 때만 표시하는 것이 좋지만, 일단 유지 */}
        <div className="mt-10 pt-8 border-t border-gray-100 dark:border-gray-800">
          <div className="text-xs text-gray-400 dark:text-gray-500 space-y-1">
            <p><span className="font-medium">Business:</span> 온전 | <span className="font-medium">CEO:</span> 전의진</p>
            <p><span className="font-medium">Registration:</span> 2024-부천원미-1310</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              {t('copyright', { year: new Date().getFullYear() })}
            </p>
            <p className="flex items-center gap-1 text-sm text-gray-400">
              Made with <Heart className="w-4 h-4 text-red-400 fill-red-400" /> in Korea
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
