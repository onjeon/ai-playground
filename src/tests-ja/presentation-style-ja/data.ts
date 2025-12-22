// プレゼンスタイル診断
export const questions = [
  {
    id: 1,
    text: 'プレゼンの準備はどのように？',
    options: [
      { text: '完璧な資料を何度も練り直す', type: 'perfectionist' },
      { text: '話すポイントだけメモして即興で', type: 'improviser' },
      { text: 'ストーリー仕立てで感動を狙う', type: 'storyteller' },
      { text: 'データと事実を徹底的に集める', type: 'analyst' },
    ],
  },
  {
    id: 2,
    text: '大勢の前で発表する時の気持ちは？',
    options: [
      { text: '緊張するけど完璧にこなしたい', type: 'perfectionist' },
      { text: 'ワクワクする、楽しみたい', type: 'improviser' },
      { text: '聴衆の心を掴みたい', type: 'storyteller' },
      { text: '論理的に納得させたい', type: 'analyst' },
    ],
  },
  {
    id: 3,
    text: 'スライドのデザインはどうする？',
    options: [
      { text: '細部まで美しく整える', type: 'perfectionist' },
      { text: 'シンプルに、話で勝負', type: 'improviser' },
      { text: '写真や動画を効果的に使う', type: 'storyteller' },
      { text: 'グラフやデータ重視', type: 'analyst' },
    ],
  },
  {
    id: 4,
    text: '質疑応答で想定外の質問が来たら？',
    options: [
      { text: '「確認して後日回答します」と正直に', type: 'perfectionist' },
      { text: 'その場で考えて臨機応変に対応', type: 'improviser' },
      { text: '質問者と対話しながら答えを見つける', type: 'storyteller' },
      { text: '関連するデータから論理的に推測', type: 'analyst' },
    ],
  },
  {
    id: 5,
    text: '朝礼やミーティングでの発言は？',
    options: [
      { text: '事前にメモを用意してから発言', type: 'perfectionist' },
      { text: '思いついたことをすぐ発言', type: 'improviser' },
      { text: 'エピソードを交えて話す', type: 'storyteller' },
      { text: '根拠を示しながら論理的に', type: 'analyst' },
    ],
  },
  {
    id: 6,
    text: '会社の忘年会で一言挨拶を頼まれたら？',
    options: [
      { text: '事前に原稿を作って練習する', type: 'perfectionist' },
      { text: 'その場のノリで楽しく話す', type: 'improviser' },
      { text: '一年の思い出を感動的に振り返る', type: 'storyteller' },
      { text: '今年の成果を数字で振り返る', type: 'analyst' },
    ],
  },
  {
    id: 7,
    text: 'プレゼンで一番大切にすることは？',
    options: [
      { text: 'ミスなく正確に伝えること', type: 'perfectionist' },
      { text: '聴衆との一体感', type: 'improviser' },
      { text: '心に残るメッセージ', type: 'storyteller' },
      { text: '説得力のある根拠', type: 'analyst' },
    ],
  },
  {
    id: 8,
    text: '時間オーバーしそうな時は？',
    options: [
      { text: '焦る…時間管理は完璧にしたい', type: 'perfectionist' },
      { text: '「後で資料送りますね」でスマートに', type: 'improviser' },
      { text: '最後のメッセージだけしっかり伝える', type: 'storyteller' },
      { text: '重要なデータに絞って説明', type: 'analyst' },
    ],
  },
  {
    id: 9,
    text: '理想のプレゼンターは？',
    options: [
      { text: 'スティーブ・ジョブズ（完璧な演出）', type: 'perfectionist' },
      { text: 'お笑い芸人（臨機応変なトーク）', type: 'improviser' },
      { text: 'TEDトーカー（心を動かす話）', type: 'storyteller' },
      { text: '大学教授（論理的な説明）', type: 'analyst' },
    ],
  },
  {
    id: 10,
    text: 'プレゼン後に一番気になることは？',
    options: [
      { text: '「ミスはなかったか」の振り返り', type: 'perfectionist' },
      { text: '「盛り上がったか」の反応', type: 'improviser' },
      { text: '「心に響いたか」の手応え', type: 'storyteller' },
      { text: '「理解されたか」の確認', type: 'analyst' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  percentage: string;
  description: string;
  characteristics: string[];
  advice: string;
}> = {
  perfectionist: {
    type: 'perfectionist',
    title: '完璧主義プレゼンター',
    emoji: '💎',
    percentage: '完璧度 95%',
    description: '細部までこだわり、ミスのない完璧なプレゼンを目指すタイプ。準備に時間をかけ、資料の質も高い。聴衆からの信頼を得やすいが、時に緊張しすぎることも。',
    characteristics: ['準備万端', '高品質な資料', '信頼感がある', '細部へのこだわり', '時間厳守'],
    advice: '完璧を求めすぎず、たまには「良い加減」で臨むと自然体で話せます！',
  },
  improviser: {
    type: 'improviser',
    title: '臨機応変プレゼンター',
    emoji: '🎤',
    percentage: 'アドリブ力 92%',
    description: 'その場の空気を読み、臨機応変に対応できるタイプ。聴衆との対話を楽しみ、場を盛り上げる力がある。飲み会の締めの挨拶も得意。',
    characteristics: ['柔軟性抜群', '場を読む力', 'コミュ力高い', '緊張しない', 'エンターテイナー'],
    advice: '時にはしっかり準備した「ここぞ」というプレゼンで周囲を驚かせて！',
  },
  storyteller: {
    type: 'storyteller',
    title: 'ストーリーテラー型',
    emoji: '📖',
    percentage: '感動度 90%',
    description: '物語の力で人の心を動かすタイプ。数字より感情、論理より共感を大切にする。聴衆の記憶に残るプレゼンができる稀有な存在。',
    characteristics: ['感動を生む', '記憶に残る', '共感力が高い', '例え話上手', 'メッセージ性'],
    advice: 'データや根拠も添えると、より説得力が増しますよ！',
  },
  analyst: {
    type: 'analyst',
    title: 'データ重視アナリスト型',
    emoji: '📊',
    percentage: '論理性 93%',
    description: 'データと事実に基づいた説得力のあるプレゼンが得意。感情に流されず、論理的に聴衆を納得させる。ビジネスシーンで特に強みを発揮。',
    characteristics: ['論理的', 'データ重視', '説得力がある', '客観的', '信頼される'],
    advice: '時にはデータを超えた「人間味」を見せると親しみやすさがアップ！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { perfectionist: 0, improviser: 0, storyteller: 0, analyst: 0 };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const type = question.options[answerIndex].type;
      scores[type]++;
    }
  });

  const resultType = Object.entries(scores).reduce((a, b) => (b[1] > a[1] ? b : a))[0];
  return results[resultType];
}
