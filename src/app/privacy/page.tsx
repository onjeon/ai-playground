import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: '개인정보처리방침 | AI 놀이터',
  description: 'AI 놀이터의 개인정보처리방침입니다.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        홈으로 돌아가기
      </Link>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">개인정보처리방침</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">최종 수정일: 2025년 1월 1일</p>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">1. 개인정보의 수집 및 이용 목적</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              AI 놀이터(이하 &quot;서비스&quot;)는 다음과 같은 목적으로 개인정보를 수집하고 이용합니다:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-2 space-y-1">
              <li>테스트 결과 생성 및 제공</li>
              <li>서비스 개선 및 통계 분석</li>
              <li>사용자 경험 향상</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">2. 수집하는 개인정보 항목</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              서비스는 테스트 진행 시 사용자가 입력하는 답변 정보만을 수집합니다. 
              별도의 회원가입이나 로그인 없이 서비스를 이용할 수 있으며, 
              이름, 이메일, 연락처 등의 개인 식별 정보는 수집하지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">3. 개인정보의 보유 및 이용 기간</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              테스트 답변 데이터는 결과 생성을 위해 일시적으로 처리되며, 
              사용자의 브라우저 세션 종료 시 자동으로 삭제됩니다. 
              서버에 개인정보를 별도로 저장하지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">4. 개인정보의 제3자 제공</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              서비스는 사용자의 개인정보를 제3자에게 제공하지 않습니다. 
              다만, 법령에 의해 요구되는 경우에는 예외로 합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">5. 쿠키(Cookie) 사용</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              서비스는 사용자 경험 향상을 위해 쿠키를 사용할 수 있습니다. 
              쿠키는 사용자의 브라우저 설정을 통해 거부하거나 삭제할 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">6. 광고 및 분석</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              서비스는 Google AdSense 등의 광고 서비스와 Google Analytics 등의 분석 도구를 사용할 수 있습니다. 
              이러한 서비스들은 자체적인 개인정보처리방침에 따라 정보를 수집할 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">7. 개인정보 보호책임자</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              개인정보 처리에 관한 문의사항이 있으시면 아래 연락처로 문의해 주시기 바랍니다.
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-2 space-y-1">
              <li>서비스명: AI 놀이터</li>
              <li>이메일: onjeon25@gmail.com</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">8. 개인정보처리방침의 변경</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              이 개인정보처리방침은 법령 및 서비스 정책의 변경에 따라 수정될 수 있습니다. 
              변경 시 서비스 내 공지를 통해 안내드립니다.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
