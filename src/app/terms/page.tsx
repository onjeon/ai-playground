import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: '이용약관 | AI 놀이터',
  description: 'AI 놀이터의 이용약관입니다.',
};

export default function TermsPage() {
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
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">이용약관</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">최종 수정일: 2025년 1월 1일</p>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">제1조 (목적)</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              이 약관은 AI 놀이터(이하 &quot;서비스&quot;)의 이용 조건 및 절차에 관한 사항을 규정함을 목적으로 합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">제2조 (서비스의 내용)</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              서비스는 AI 기반의 심리 테스트, 성격 분석, MBTI 테스트 등 다양한 자가 진단 테스트를 제공합니다. 
              이 테스트들은 오락 및 자기 이해 목적으로 제공되며, 전문적인 심리 상담이나 의료 진단을 대체할 수 없습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">제3조 (서비스 이용)</h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>서비스는 회원가입 없이 누구나 무료로 이용할 수 있습니다.</li>
              <li>일부 프리미엄 테스트는 유료로 제공될 수 있으며, 이 경우 별도로 안내됩니다.</li>
              <li>서비스 이용 시 관련 법령 및 본 약관을 준수해야 합니다.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">제4조 (테스트 결과의 활용)</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              테스트 결과는 참고용으로만 활용하시기 바랍니다. 
              서비스에서 제공하는 결과는 과학적으로 검증된 심리 검사가 아니며, 
              개인의 실제 성격이나 심리 상태를 정확하게 반영하지 않을 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">제5조 (금지 행위)</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-2">
              이용자는 다음 행위를 해서는 안 됩니다:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
              <li>서비스의 정상적인 운영을 방해하는 행위</li>
              <li>서비스의 콘텐츠를 무단으로 복제, 배포, 수정하는 행위</li>
              <li>타인의 권리를 침해하는 행위</li>
              <li>불법적인 목적으로 서비스를 이용하는 행위</li>
              <li>서비스를 상업적 목적으로 무단 이용하는 행위</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">제6조 (저작권)</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              서비스에서 제공하는 모든 콘텐츠(테스트 문항, 결과 설명, 이미지 등)에 대한 저작권은 
              서비스 운영자에게 있습니다. 사전 동의 없이 콘텐츠를 무단으로 사용할 수 없습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">제7조 (면책 조항)</h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>서비스는 테스트 결과의 정확성을 보장하지 않습니다.</li>
              <li>테스트 결과를 근거로 한 이용자의 판단이나 행동에 대해 서비스는 책임지지 않습니다.</li>
              <li>천재지변, 시스템 장애 등 불가항력으로 인한 서비스 중단에 대해 책임지지 않습니다.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">제8조 (서비스 변경 및 중단)</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              서비스 운영자는 필요에 따라 서비스의 내용을 변경하거나 중단할 수 있습니다. 
              중요한 변경 사항은 서비스 내 공지를 통해 안내합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">제9조 (약관의 변경)</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              이 약관은 관련 법령 및 서비스 정책의 변경에 따라 수정될 수 있습니다. 
              약관 변경 시 서비스 내 공지를 통해 안내드립니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">제10조 (문의)</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              서비스 이용에 관한 문의사항이 있으시면 아래 연락처로 문의해 주시기 바랍니다.
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-2 space-y-1">
              <li>서비스명: AI 놀이터</li>
              <li>이메일: onjeon25@gmail.com</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
