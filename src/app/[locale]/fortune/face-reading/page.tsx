'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Star, ChevronRight, ChevronLeft, Gift, Eye, Check } from 'lucide-react';
import { FACE_QUESTIONS } from '@/lib/fortune/face-reading';

export default function FaceReadingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0); // 0 = intro, 1~14 = questions
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const totalQuestions = FACE_QUESTIONS.length;
  const currentQuestion = currentStep > 0 ? FACE_QUESTIONS[currentStep - 1] : null;
  const progress = currentStep > 0 ? (currentStep / totalQuestions) * 100 : 0;

  const handleSelect = (optionId: string) => {
    if (!currentQuestion) return;
    
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: optionId
    }));
  };

  const handleNext = () => {
    if (currentStep === 0) {
      setCurrentStep(1);
      return;
    }

    if (!currentQuestion || !answers[currentQuestion.id]) return;

    if (currentStep < totalQuestions) {
      setCurrentStep(prev => prev + 1);
    } else {
      // 결과 페이지로 이동
      const params = new URLSearchParams();
      Object.entries(answers).forEach(([key, value]) => {
        params.append(key, value);
      });
      router.push(`/fortune/face-reading/result?${params.toString()}`);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    } else if (currentStep === 1) {
      setCurrentStep(0);
    }
  };

  // 현재 부위 그룹 (같은 부위 질문들을 묶어서 표시)
  const getCurrentPartGroup = () => {
    if (!currentQuestion) return null;
    const currentPart = currentQuestion.part;
    const questionsOfPart = FACE_QUESTIONS.filter(q => q.part === currentPart);
    const currentIndexInPart = questionsOfPart.findIndex(q => q.id === currentQuestion.id) + 1;
    return {
      part: currentPart,
      emoji: currentQuestion.partEmoji,
      current: currentIndexInPart,
      total: questionsOfPart.length
    };
  };

  const partGroup = getCurrentPartGroup();

  // 인트로 화면
  if (currentStep === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-rose-950 via-pink-950 to-slate-950">
        {/* 배경 효과 */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-rose-400/30 rounded-full animate-pulse"
              style={{
                left: `${(i * 19) % 100}%`,
                top: `${(i * 23) % 100}%`,
                opacity: 0.2 + (i % 4) * 0.1,
                animationDelay: `${(i % 4) * 0.5}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-2xl mx-auto px-4 py-12">
          {/* 헤더 */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-500/20 rounded-full mb-4">
              <Eye className="w-4 h-4 text-rose-400" />
              <span className="text-rose-400 text-sm font-medium">AI 관상</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              관상으로 보는 나의 운세
            </h1>
            <p className="text-rose-200/80 text-lg">
              거울을 보며 14개 질문에 답하면<br />
              당신의 관상을 분석해 드립니다
            </p>
          </div>

          {/* 메인 카드 */}
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-rose-500/20 shadow-2xl mb-6">
            {/* 관상 설명 */}
            <div className="bg-rose-500/10 rounded-2xl p-4 mb-6 border border-rose-500/20">
              <p className="text-rose-200/80 text-sm leading-relaxed">
                <strong className="text-rose-300">관상학</strong>은 얼굴의 생김새를 통해
                성격과 운명을 읽는 동양의 전통 학문입니다.
                거울을 준비하고, 자신의 얼굴 특징을 하나씩 확인해보세요.
                <br /><br />
                <span className="text-rose-300">💡 팁:</span> 화장기 없는 민낯 상태에서 보면 더 정확합니다!
              </p>
            </div>

            {/* 분석 항목 */}
            <div className="mb-6">
              <h3 className="text-white font-medium mb-3 text-center">분석하는 부위</h3>
              <div className="grid grid-cols-4 gap-3">
                {['😊 얼굴형', '🧠 이마', '🤨 눈썹', '👁️ 눈', '👃 코', '👄 입', '😬 턱', '👂 귀'].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/5 rounded-xl p-3 text-center border border-white/10"
                  >
                    <div className="text-lg">{item.split(' ')[0]}</div>
                    <div className="text-rose-300/70 text-xs">{item.split(' ')[1]}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 결과 미리보기 */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { icon: '🎭', title: '종합 관상 유형', desc: '5가지 유형 분석' },
                { icon: '💕', title: '연애운', desc: '사랑과 인연 해석' },
                { icon: '💰', title: '재물운', desc: '금전 운세 분석' },
                { icon: '💼', title: '적합 직업', desc: '맞춤 커리어 추천' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/5 rounded-2xl p-4 text-center border border-white/10"
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-white font-medium text-sm">{item.title}</div>
                  <div className="text-rose-300/60 text-xs">{item.desc}</div>
                </div>
              ))}
            </div>

            {/* 가격 */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500/20 to-pink-500/20 px-6 py-3 rounded-2xl border border-rose-500/30">
                <Gift className="w-5 h-5 text-rose-400" />
                <span className="text-rose-300 font-bold text-xl">무료</span>
                <span className="text-rose-300/60 text-sm line-through">900</span>
              </div>
              <p className="text-rose-300/60 text-xs mt-2">신년 특별 무료 이벤트</p>
            </div>

            {/* 시작 버튼 */}
            <button
              onClick={handleNext}
              className="w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-200 bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-lg shadow-rose-500/30 hover:scale-[1.02]"
            >
              거울 준비됐어요! 시작하기
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* 안내 문구 */}
          <div className="text-center">
            <p className="text-rose-300/50 text-xs leading-relaxed">
              동양 전통 관상학을 기반으로 한 재미 콘텐츠입니다<br />
              참고용으로만 즐겨주세요
            </p>
          </div>

          {/* 별점 리뷰 */}
          <div className="mt-8 bg-white/5 rounded-2xl p-5 border border-white/10">
            <div className="flex items-center justify-center gap-1 mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-rose-400 text-rose-400" />
              ))}
              <span className="text-white font-bold ml-2">4.6</span>
            </div>
            <p className="text-rose-200/70 text-sm text-center italic">
              &quot;질문이 쉬워서 좋았어요! 결과가 너무 잘 맞아서 소름...&quot;
            </p>
            <p className="text-rose-300/50 text-xs text-center mt-2">- 이용자 후기</p>
          </div>
        </div>
      </div>
    );
  }

  // 질문 화면
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-950 via-pink-950 to-slate-950">
      {/* 배경 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-rose-400/20 rounded-full animate-pulse"
            style={{
              left: `${(i * 23) % 100}%`,
              top: `${(i * 17) % 100}%`,
              animationDelay: `${(i % 3) * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-8">
        {/* 진행 상태 */}
        <div className="mb-6">
          <div className="flex items-center justify-between text-sm text-rose-300/70 mb-2">
            <span>{currentStep} / {totalQuestions}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-rose-500 to-pink-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* 현재 부위 표시 */}
        {partGroup && (
          <div className="text-center mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-rose-500/20 rounded-full">
              <span className="text-xl">{partGroup.emoji}</span>
              <span className="text-rose-300 font-medium">{partGroup.part}</span>
              {partGroup.total > 1 && (
                <span className="text-rose-400/60 text-sm">({partGroup.current}/{partGroup.total})</span>
              )}
            </span>
          </div>
        )}

        {/* 질문 카드 */}
        {currentQuestion && (
          <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-rose-500/20 shadow-2xl mb-6">
            {/* 질문 */}
            <h2 className="text-xl md:text-2xl font-bold text-white text-center mb-3">
              {currentQuestion.question}
            </h2>
            
            {/* 가이드 */}
            {currentQuestion.guide && (
              <p className="text-rose-300/70 text-sm text-center mb-6 bg-rose-500/10 py-2 px-4 rounded-lg">
                💡 {currentQuestion.guide}
              </p>
            )}

            {/* 선택지 */}
            <div className="space-y-3">
              {currentQuestion.options.map((option) => {
                const isSelected = answers[currentQuestion.id] === option.id;
                return (
                  <button
                    key={option.id}
                    onClick={() => handleSelect(option.id)}
                    className={`w-full p-4 rounded-2xl border-2 transition-all text-left ${
                      isSelected
                        ? 'border-rose-400 bg-rose-500/20'
                        : 'border-white/10 bg-white/5 hover:border-rose-400/50 hover:bg-rose-500/10'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-bold text-white">{option.label}</div>
                        {option.description && (
                          <div className="text-rose-300/60 text-sm mt-1">{option.description}</div>
                        )}
                      </div>
                      {isSelected && (
                        <div className="w-6 h-6 bg-rose-500 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* 네비게이션 버튼 */}
        <div className="flex gap-3">
          <button
            onClick={handlePrev}
            className="flex-1 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 bg-white/10 text-rose-200 hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            이전
          </button>
          <button
            onClick={handleNext}
            disabled={!currentQuestion || !answers[currentQuestion.id]}
            className={`flex-[2] py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-200 ${
              currentQuestion && answers[currentQuestion.id]
                ? 'bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-lg shadow-rose-500/30 hover:scale-[1.02]'
                : 'bg-slate-700 text-slate-400 cursor-not-allowed'
            }`}
          >
            {currentStep === totalQuestions ? '결과 보기' : '다음'}
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* 진행 힌트 */}
        <div className="mt-6 text-center">
          <p className="text-rose-300/40 text-xs">
            선택지를 고르면 다음으로 넘어갈 수 있어요
          </p>
        </div>
      </div>
    </div>
  );
}
