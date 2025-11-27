import Link from 'next/link';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 mt-auto">
      {/* Ad Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 text-center border border-gray-200 dark:border-gray-600">
          <p className="text-[10px] text-gray-400 mb-2 uppercase tracking-wider">AD</p>
          <div className="h-20 flex items-center justify-center text-gray-400 text-sm">
            광고 영역
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                놀이터
              </span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              AI가 분석하는 심리 테스트로<br />
              나를 더 깊이 알아보세요.
            </p>
          </div>

          {/* Tests */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">테스트</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/?sort=popular" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  인기 테스트
                </Link>
              </li>
              <li>
                <Link href="/?sort=new" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  신규 테스트
                </Link>
              </li>
              <li>
                <Link href="/?category=personality" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  성격 테스트
                </Link>
              </li>
              <li>
                <Link href="/?category=psychology" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  심리 테스트
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">카테고리</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/?category=relationship" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  연애/관계
                </Link>
              </li>
              <li>
                <Link href="/?category=career" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  적성/직업
                </Link>
              </li>
              <li>
                <Link href="/?category=fun" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  재미/운세
                </Link>
              </li>
              <li>
                <Link href="/?category=iq" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  IQ/두뇌
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">정보</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/privacy" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  이용약관
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Business Info */}
        <div className="mt-10 pt-8 border-t border-gray-100 dark:border-gray-800">
          <div className="text-xs text-gray-400 dark:text-gray-500 space-y-1">
            <p><span className="font-medium">상호명:</span> 온전 | <span className="font-medium">대표자:</span> 전의진</p>
            <p><span className="font-medium">통신판매업 신고번호:</span> 2024-부천원미-1310</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} AI 놀이터. All rights reserved.
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
