'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-800 mt-auto">
      <div className="px-4 py-5">
        {/* Links */}
        <div className="flex items-center gap-3 text-xs text-gray-400 dark:text-gray-500 mb-3">
          <Link href="/privacy" className="hover:text-gray-600 dark:hover:text-gray-300">{t('privacy')}</Link>
          <span>|</span>
          <Link href="/terms" className="hover:text-gray-600 dark:hover:text-gray-300">{t('terms')}</Link>
        </div>

        {/* Business & Copyright */}
        <div className="text-[10px] text-gray-400 dark:text-gray-500 space-y-1">
          <p>Business: 온전 | CEO: 전의진 | Registration: 2024-부천원미-1310</p>
          <p>{t('copyright', { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
}
