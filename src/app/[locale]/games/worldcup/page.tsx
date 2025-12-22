'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ArrowLeft, Trophy, Users, Sparkles } from 'lucide-react';
import { worldCups } from '@/data/worldcup';

export default function WorldCupListPage() {
  const t = useTranslations('worldcup');
  const tCommon = useTranslations('common');

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-950 to-slate-900">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/games" 
            className="inline-flex items-center gap-2 text-purple-300 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('backToGames')}
          </Link>
          
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 rounded-full mb-4">
              <Trophy className="w-5 h-5 text-amber-400" />
              <span className="text-amber-300 font-medium">{t('pageTitle')}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              🏆 {t('pageTitle')}
            </h1>
            <p className="text-purple-200/80 text-lg">
              {t('pageDescription')}
            </p>
          </div>
        </div>

        {/* Worldcup List */}
        <div className="grid gap-4 md:gap-6">
          {worldCups.map((wc) => (
            <Link
              key={wc.id}
              href={`/games/worldcup/${wc.slug}`}
              className="group relative bg-slate-800/50 hover:bg-slate-800/70 border border-slate-700/50 hover:border-amber-500/50 rounded-2xl p-6 transition-all duration-300 hover:scale-[1.01] overflow-hidden"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${wc.backgroundColor} opacity-0 group-hover:opacity-10 transition-opacity`} />
              
              <div className="relative flex items-center gap-6">
                {/* Emoji icon */}
                <div className={`flex-shrink-0 w-20 h-20 bg-gradient-to-br ${wc.backgroundColor} rounded-2xl flex items-center justify-center text-4xl shadow-lg`}>
                  {wc.emoji}
                </div>
                
                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">
                    {wc.title}
                  </h2>
                  <p className="text-purple-300/80 text-sm mb-3">
                    {wc.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <span className="flex items-center gap-1.5 text-purple-400">
                      <Sparkles className="w-4 h-4" />
                      {wc.items.length} {t('candidates')}
                    </span>
                    <span className="flex items-center gap-1.5 text-purple-400">
                      <Users className="w-4 h-4" />
                      {wc.participantCount.toLocaleString()} {t('participated')}
                    </span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center group-hover:bg-amber-500/40 transition-colors">
                  <span className="text-amber-400 text-xl">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Home link */}
        <div className="text-center mt-8">
          <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm">
            ← {tCommon('home')}
          </Link>
        </div>
      </div>
    </div>
  );
}
