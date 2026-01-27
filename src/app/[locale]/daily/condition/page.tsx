'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Battery,
  BatteryFull,
  BatteryMedium,
  BatteryLow,
  ArrowLeft,
  RefreshCw,
  Share2,
  Sun,
  Moon,
  Zap
} from 'lucide-react';

// 질문 풀 (매일 3개씩 랜덤 선택)
const questionPool = [
  {
    emoji: '🌅',
    question: '오늘 아침에 일어났을 때 기분이 어땠나요?',
    options: [
      { text: '개운하고 상쾌했어요', score: 4 },
      { text: '그냥 평소랑 비슷해요', score: 3 },
      { text: '좀 피곤하긴 했어요', score: 2 },
      { text: '일어나기 힘들었어요', score: 1 },
    ]
  },
  {
    emoji: '⚡',
    question: '지금 뭔가 하고 싶은 에너지가 있나요?',
    options: [
      { text: '네, 뭐든 할 수 있을 것 같아요!', score: 4 },
      { text: '적당히 있어요', score: 3 },
      { text: '좀 귀찮긴 해요', score: 2 },
      { text: '아무것도 하기 싫어요', score: 1 },
    ]
  },
  {
    emoji: '👥',
    question: '오늘 사람들을 만날 때 기분이 어떨 것 같아요?',
    options: [
      { text: '반갑고 즐거울 것 같아요', score: 4 },
      { text: '괜찮을 것 같아요', score: 3 },
      { text: '조금 부담스러울 것 같아요', score: 2 },
      { text: '혼자 있고 싶어요', score: 1 },
    ]
  },
  {
    emoji: '🍽️',
    question: '오늘 식욕은 어떤가요?',
    options: [
      { text: '맛있는 거 먹고 싶어요!', score: 4 },
      { text: '평소대로예요', score: 3 },
      { text: '별로 먹고 싶지 않아요', score: 2 },
      { text: '입맛이 없어요', score: 1 },
    ]
  },
  {
    emoji: '😴',
    question: '어젯밤 잠은 잘 잤나요?',
    options: [
      { text: '푹 잤어요! 꿀잠이었어요', score: 4 },
      { text: '보통이었어요', score: 3 },
      { text: '좀 뒤척였어요', score: 2 },
      { text: '거의 못 잤어요', score: 1 },
    ]
  },
  {
    emoji: '🎯',
    question: '오늘 해야 할 일에 대한 의욕은 어떤가요?',
    options: [
      { text: '빨리 시작하고 싶어요!', score: 4 },
      { text: '할 수 있을 것 같아요', score: 3 },
      { text: '좀 미루고 싶어요', score: 2 },
      { text: '아무것도 하기 싫어요', score: 1 },
    ]
  },
  {
    emoji: '🧘',
    question: '지금 마음이 평온한가요?',
    options: [
      { text: '매우 평온해요', score: 4 },
      { text: '대체로 괜찮아요', score: 3 },
      { text: '약간 불안하거나 초조해요', score: 2 },
      { text: '많이 답답하거나 짜증나요', score: 1 },
    ]
  },
  {
    emoji: '💪',
    question: '몸 상태는 어떤가요?',
    options: [
      { text: '가볍고 건강해요!', score: 4 },
      { text: '평소와 비슷해요', score: 3 },
      { text: '좀 무겁거나 뻐근해요', score: 2 },
      { text: '여기저기 아프거나 힘들어요', score: 1 },
    ]
  },
  {
    emoji: '🌤️',
    question: '오늘 하루가 어떨 것 같은 예감이 드나요?',
    options: [
      { text: '좋은 일이 생길 것 같아요!', score: 4 },
      { text: '평범한 하루일 것 같아요', score: 3 },
      { text: '좀 힘든 하루가 될 것 같아요', score: 2 },
      { text: '그냥 빨리 끝났으면 좋겠어요', score: 1 },
    ]
  },
  {
    emoji: '📱',
    question: '지금 핸드폰을 보는 기분은 어때요?',
    options: [
      { text: '재밌는 거 찾아보고 싶어요', score: 4 },
      { text: '습관적으로 보고 있어요', score: 3 },
      { text: '알림이 부담스러워요', score: 2 },
      { text: '다 무시하고 싶어요', score: 1 },
    ]
  },
  {
    emoji: '☕',
    question: '지금 가장 하고 싶은 건 뭔가요?',
    options: [
      { text: '밖에 나가서 활동하고 싶어요', score: 4 },
      { text: '카페에서 여유롭게 쉬고 싶어요', score: 3 },
      { text: '집에서 조용히 있고 싶어요', score: 2 },
      { text: '이불 속에서 안 나오고 싶어요', score: 1 },
    ]
  },
  {
    emoji: '🎵',
    question: '지금 듣고 싶은 음악 스타일은?',
    options: [
      { text: '신나는 댄스/팝!', score: 4 },
      { text: '편안한 어쿠스틱', score: 3 },
      { text: '조용한 피아노/클래식', score: 2 },
      { text: '아무것도 듣고 싶지 않아요', score: 1 },
    ]
  },
];

// 날짜 기반 시드로 질문 3개 선택
function getDailyQuestions() {
  const today = new Date();
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();

  // Fisher-Yates 셔플 (시드 기반)
  const indices = questionPool.map((_, i) => i);
  let s = seed;
  for (let i = indices.length - 1; i > 0; i--) {
    s = (s * 16807 + 0) % 2147483647;
    const j = s % (i + 1);
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }

  return [
    { id: 1, ...questionPool[indices[0]] },
    { id: 2, ...questionPool[indices[1]] },
    { id: 3, ...questionPool[indices[2]] },
  ];
}

// 결과 데이터
const results = [
  {
    minScore: 10, maxScore: 12,
    level: '최고', emoji: '🔥',
    color: 'from-green-400 to-emerald-500',
    batteryLevel: 100,
    title: '오늘 컨디션 최고!',
    description: '에너지가 넘치는 하루예요! 오늘 하고 싶었던 일들을 시도해보세요. 무엇이든 잘 해낼 수 있는 상태입니다.',
    tips: ['중요한 업무나 미팅 잡기', '운동이나 새로운 활동 시도', '사람들과 적극적으로 교류하기'],
    Icon: BatteryFull
  },
  {
    minScore: 7, maxScore: 9,
    level: '양호', emoji: '😊',
    color: 'from-blue-400 to-cyan-500',
    batteryLevel: 70,
    title: '괜찮은 컨디션이에요',
    description: '평균적인 컨디션입니다. 무리하지 않는 선에서 일상을 보내기 좋아요.',
    tips: ['계획한 일 차분히 처리하기', '적당한 휴식 챙기기', '가벼운 산책이나 스트레칭'],
    Icon: BatteryMedium
  },
  {
    minScore: 4, maxScore: 6,
    level: '보통', emoji: '😐',
    color: 'from-yellow-400 to-orange-500',
    batteryLevel: 40,
    title: '오늘은 좀 힘드네요',
    description: '컨디션이 좋지 않은 날이에요. 오늘은 무리하지 말고 자신을 돌보는 시간을 가져보세요.',
    tips: ['가능하면 중요한 일 미루기', '충분한 수분 섭취', '짧은 낮잠이나 명상'],
    Icon: BatteryLow
  },
  {
    minScore: 3, maxScore: 3,
    level: '충전 필요', emoji: '😴',
    color: 'from-red-400 to-rose-500',
    batteryLevel: 10,
    title: '오늘은 쉬어가는 날',
    description: '에너지가 많이 떨어진 상태예요. 오늘은 자신에게 휴식을 선물해주세요.',
    tips: ['가능하다면 일찍 쉬기', '따뜻한 음료 마시기', '좋아하는 콘텐츠로 힐링'],
    Icon: Battery
  }
];

function getResult(score: number) {
  return results.find(r => score >= r.minScore && score <= r.maxScore) || results[results.length - 1];
}

export default function ConditionCheckPage() {
  const questions = useMemo(() => getDailyQuestions(), []);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  const totalScore = answers.reduce((sum, score) => sum + score, 0);
  const result = getResult(totalScore);

  const handleShare = async () => {
    const shareData = {
      title: '오늘의 컨디션 체크',
      text: `오늘 내 컨디션: ${result.title} ${result.emoji}\n배터리 ${result.batteryLevel}%`,
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // Share cancelled
      }
    } else {
      navigator.clipboard.writeText(`${shareData.text}\n${shareData.url}`);
      alert('클립보드에 복사되었습니다!');
    }
  };

  const getTimeIcon = () => {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 18) return <Sun className="w-5 h-5 text-amber-500" />;
    return <Moon className="w-5 h-5 text-indigo-500" />;
  };

  if (showResult) {
    const ResultIcon = result.Icon;

    return (
      <div className="py-4">
        {/* 헤더 */}
        <div className="flex items-center justify-between mb-6">
          <Link href="/daily" className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400">
            <ArrowLeft className="w-4 h-4" />
            데일리
          </Link>
          {getTimeIcon()}
        </div>

        {/* 결과 카드 */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
          <div className={`bg-gradient-to-r ${result.color} p-6 text-white text-center`}>
            <div className="text-5xl mb-3">{result.emoji}</div>
            <h1 className="text-xl font-bold mb-1">{result.title}</h1>
            <div className="flex items-center justify-center gap-1.5">
              <ResultIcon className="w-5 h-5" />
              <span className="text-lg font-medium">배터리 {result.batteryLevel}%</span>
            </div>
          </div>

          {/* 배터리 바 */}
          <div className="px-4 py-4">
            <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-5 overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${result.color} transition-all duration-1000 rounded-full`}
                style={{ width: `${result.batteryLevel}%` }}
              />
            </div>
            <div className="flex justify-between text-[10px] text-gray-400 mt-1">
              <span>0%</span>
              <span>50%</span>
              <span>100%</span>
            </div>
          </div>

          <div className="px-4 pb-4">
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{result.description}</p>

            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-3">
              <h3 className="font-medium text-sm text-gray-900 dark:text-white mb-2 flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-500" />
                오늘의 추천
              </h3>
              <ul className="space-y-1.5">
                {result.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-1.5 text-xs text-gray-600 dark:text-gray-400">
                    <span className="text-emerald-500 mt-0.5">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="px-4 pb-4 flex gap-2">
            <button onClick={handleRestart} className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm">
              <RefreshCw className="w-4 h-4" />
              다시하기
            </button>
            <button onClick={handleShare} className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-gradient-to-r ${result.color} text-white text-sm`}>
              <Share2 className="w-4 h-4" />
              공유하기
            </button>
          </div>
        </div>

        {/* 다른 테스트 추천 */}
        <div className="mt-4">
          <h2 className="font-medium text-sm text-gray-900 dark:text-white mb-3">관련 테스트</h2>
          <div className="grid grid-cols-2 gap-2">
            <Link href="/test/stress-level" className="bg-white dark:bg-gray-800 rounded-xl p-3 border border-gray-100 dark:border-gray-700">
              <div className="text-xl mb-1">😰</div>
              <div className="font-medium text-gray-900 dark:text-white text-xs">스트레스 지수</div>
            </Link>
            <Link href="/test/burnout-level" className="bg-white dark:bg-gray-800 rounded-xl p-3 border border-gray-100 dark:border-gray-700">
              <div className="text-xl mb-1">🔥</div>
              <div className="font-medium text-gray-900 dark:text-white text-xs">번아웃 지수</div>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion) / questions.length) * 100;

  return (
    <div className="py-4">
      {/* 헤더 */}
      <div className="flex items-center justify-between mb-6">
        <Link href="/daily" className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400">
          <ArrowLeft className="w-4 h-4" />
          데일리
        </Link>
        <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
          <Battery className="w-3.5 h-3.5" />
          컨디션 체크
        </div>
      </div>

      {/* 프로그레스 바 */}
      <div className="mb-6">
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1.5">
          <span>질문 {currentQuestion + 1} / {questions.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-emerald-400 to-teal-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* 질문 카드 */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-5 mb-4">
        <div className="text-center mb-6">
          <div className="text-4xl mb-3">{question.emoji}</div>
          <h2 className="text-base font-bold text-gray-900 dark:text-white leading-relaxed">
            {question.question}
          </h2>
        </div>

        <div className="space-y-2">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.score)}
              className="w-full p-3 text-left rounded-xl border border-gray-100 dark:border-gray-700 active:border-emerald-400 dark:active:border-emerald-500 active:bg-emerald-50 dark:active:bg-emerald-900/20 transition-all"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-xs font-medium text-gray-600 dark:text-gray-400 shrink-0">
                  {index + 1}
                </div>
                <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                  {option.text}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <p className="text-center text-xs text-gray-400">
        지금 느끼는 대로 솔직하게 선택해주세요
      </p>
    </div>
  );
}
