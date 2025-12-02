'use client';

import { useState } from 'react';
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

// 질문 데이터
const questions = [
  {
    id: 1,
    question: '오늘 아침에 일어났을 때 기분이 어땠나요?',
    emoji: '🌅',
    options: [
      { text: '개운하고 상쾌했어요', score: 4 },
      { text: '그냥 평소랑 비슷해요', score: 3 },
      { text: '좀 피곤하긴 했어요', score: 2 },
      { text: '일어나기 힘들었어요', score: 1 },
    ]
  },
  {
    id: 2,
    question: '지금 뭔가 하고 싶은 에너지가 있나요?',
    emoji: '⚡',
    options: [
      { text: '네, 뭐든 할 수 있을 것 같아요!', score: 4 },
      { text: '적당히 있어요', score: 3 },
      { text: '좀 귀찮긴 해요', score: 2 },
      { text: '아무것도 하기 싫어요', score: 1 },
    ]
  },
  {
    id: 3,
    question: '오늘 사람들을 만날 때 기분이 어떨 것 같아요?',
    emoji: '👥',
    options: [
      { text: '반갑고 즐거울 것 같아요', score: 4 },
      { text: '괜찮을 것 같아요', score: 3 },
      { text: '조금 부담스러울 것 같아요', score: 2 },
      { text: '혼자 있고 싶어요', score: 1 },
    ]
  }
];

// 결과 데이터
const results = [
  {
    minScore: 10,
    maxScore: 12,
    level: '최고',
    emoji: '🔥',
    color: 'from-green-400 to-emerald-500',
    batteryLevel: 100,
    title: '오늘 컨디션 최고!',
    description: '에너지가 넘치는 하루예요! 오늘 하고 싶었던 일들을 시도해보세요. 무엇이든 잘 해낼 수 있는 상태입니다.',
    tips: ['중요한 업무나 미팅 잡기', '운동이나 새로운 활동 시도', '사람들과 적극적으로 교류하기'],
    Icon: BatteryFull
  },
  {
    minScore: 7,
    maxScore: 9,
    level: '양호',
    emoji: '😊',
    color: 'from-blue-400 to-cyan-500',
    batteryLevel: 70,
    title: '괜찮은 컨디션이에요',
    description: '평균적인 컨디션입니다. 무리하지 않는 선에서 일상을 보내기 좋아요.',
    tips: ['계획한 일 차분히 처리하기', '적당한 휴식 챙기기', '가벼운 산책이나 스트레칭'],
    Icon: BatteryMedium
  },
  {
    minScore: 4,
    maxScore: 6,
    level: '보통',
    emoji: '😐',
    color: 'from-yellow-400 to-orange-500',
    batteryLevel: 40,
    title: '오늘은 좀 힘드네요',
    description: '컨디션이 좋지 않은 날이에요. 오늘은 무리하지 말고 자신을 돌보는 시간을 가져보세요.',
    tips: ['가능하면 중요한 일 미루기', '충분한 수분 섭취', '짧은 낮잠이나 명상'],
    Icon: BatteryLow
  },
  {
    minScore: 3,
    maxScore: 3,
    level: '충전 필요',
    emoji: '😴',
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
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(`${shareData.text}\n${shareData.url}`);
      alert('클립보드에 복사되었습니다!');
    }
  };

  // 시간대별 아이콘
  const getTimeIcon = () => {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 18) {
      return <Sun className="w-5 h-5 text-amber-500" />;
    }
    return <Moon className="w-5 h-5 text-indigo-500" />;
  };

  if (showResult) {
    const ResultIcon = result.Icon;
    
    return (
      <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-lg mx-auto px-4 py-8">
          {/* 헤더 */}
          <div className="flex items-center justify-between mb-8">
            <Link href="/daily" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <ArrowLeft className="w-5 h-5" />
              <span>데일리</span>
            </Link>
            {getTimeIcon()}
          </div>

          {/* 결과 카드 */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden">
            {/* 배터리 그래픽 */}
            <div className={`bg-gradient-to-r ${result.color} p-8 text-white text-center`}>
              <div className="text-6xl mb-4">{result.emoji}</div>
              <h1 className="text-2xl font-bold mb-2">{result.title}</h1>
              <div className="flex items-center justify-center gap-2">
                <ResultIcon className="w-6 h-6" />
                <span className="text-xl font-medium">배터리 {result.batteryLevel}%</span>
              </div>
            </div>

            {/* 배터리 바 */}
            <div className="px-8 py-6">
              <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-6 overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${result.color} transition-all duration-1000 rounded-full`}
                  style={{ width: `${result.batteryLevel}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                <span>0%</span>
                <span>50%</span>
                <span>100%</span>
              </div>
            </div>

            {/* 설명 */}
            <div className="px-8 pb-6">
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {result.description}
              </p>

              {/* 오늘의 팁 */}
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                <h3 className="font-medium text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-500" />
                  오늘의 추천
                </h3>
                <ul className="space-y-2">
                  {result.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <span className="text-emerald-500 mt-0.5">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 버튼들 */}
            <div className="px-8 pb-8 flex gap-3">
              <button
                onClick={handleRestart}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                다시하기
              </button>
              <button
                onClick={handleShare}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r ${result.color} text-white hover:opacity-90 transition-opacity`}
              >
                <Share2 className="w-4 h-4" />
                공유하기
              </button>
            </div>
          </div>

          {/* 다른 테스트 추천 */}
          <div className="mt-8">
            <h2 className="font-medium text-gray-900 dark:text-white mb-4">관련 테스트</h2>
            <div className="grid grid-cols-2 gap-3">
              <Link href="/tests/stress-level" className="block">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-600 transition-all">
                  <div className="text-2xl mb-2">😰</div>
                  <div className="font-medium text-gray-900 dark:text-white text-sm">스트레스 지수</div>
                </div>
              </Link>
              <Link href="/tests/burnout-level" className="block">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-600 transition-all">
                  <div className="text-2xl mb-2">🔥</div>
                  <div className="font-medium text-gray-900 dark:text-white text-sm">번아웃 지수</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-lg mx-auto px-4 py-8">
        {/* 헤더 */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/daily" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
            <ArrowLeft className="w-5 h-5" />
            <span>데일리</span>
          </Link>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Battery className="w-4 h-4" />
            <span>컨디션 체크</span>
          </div>
        </div>

        {/* 프로그레스 바 */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
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
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 mb-6">
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">{question.emoji}</div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              {question.question}
            </h2>
          </div>

          {/* 선택지 */}
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.score)}
                className="w-full p-4 text-left rounded-xl border-2 border-gray-100 dark:border-gray-700 hover:border-emerald-400 dark:hover:border-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-800 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                    {index + 1}
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {option.text}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* 힌트 */}
        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          지금 느끼는 대로 솔직하게 선택해주세요
        </p>
      </div>
    </div>
  );
}
