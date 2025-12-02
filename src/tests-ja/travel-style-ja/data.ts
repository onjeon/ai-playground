// 旅行スタイル診断 (여행 스타일 진단)
export const questions = [
  {
    id: 1,
    text: '旅行の計画はどう立てる？',
    options: [
      { text: '分刻みでスケジュールを組む', type: 'planner' },
      { text: '行きたい場所だけ決めてあとは自由', type: 'flexible' },
      { text: 'ツアーに参加して楽する', type: 'relaxed' },
      { text: '計画なし！その場のノリで', type: 'spontaneous' },
    ],
  },
  {
    id: 2,
    text: '旅先での過ごし方は？',
    options: [
      { text: '観光スポットを効率よく制覇', type: 'planner' },
      { text: '有名所と穴場をバランスよく', type: 'flexible' },
      { text: 'ホテルでゆっくり、無理しない', type: 'relaxed' },
      { text: '現地の人と交流、予想外の出会い', type: 'spontaneous' },
    ],
  },
  {
    id: 3,
    text: '旅行の荷物は？',
    options: [
      { text: 'チェックリストで完璧に準備', type: 'planner' },
      { text: '必要なものは揃えるけど余裕あり', type: 'flexible' },
      { text: '最小限、現地調達でOK', type: 'relaxed' },
      { text: '詰め込みすぎor足りないのはよくある', type: 'spontaneous' },
    ],
  },
  {
    id: 4,
    text: '旅先でのご飯は？',
    options: [
      { text: '人気店をリサーチして予約済み', type: 'planner' },
      { text: 'いくつか候補を持っておく', type: 'flexible' },
      { text: 'ホテルや近くで済ませる', type: 'relaxed' },
      { text: '歩いて見つけた店に入る', type: 'spontaneous' },
    ],
  },
  {
    id: 5,
    text: '予定通りにいかなかったら？',
    options: [
      { text: 'プランBを発動、対応策は用意済み', type: 'planner' },
      { text: '臨機応変に予定を調整', type: 'flexible' },
      { text: 'まあいいか、のんびりしよう', type: 'relaxed' },
      { text: 'むしろ面白い！ハプニング歓迎', type: 'spontaneous' },
    ],
  },
  {
    id: 6,
    text: '旅行で重視することは？',
    options: [
      { text: '効率よく多くの場所を見たい', type: 'planner' },
      { text: '体験と発見のバランス', type: 'flexible' },
      { text: 'リラックス、日常を忘れたい', type: 'relaxed' },
      { text: '冒険、非日常感', type: 'spontaneous' },
    ],
  },
  {
    id: 7,
    text: '旅行の写真は？',
    options: [
      { text: 'スポットごとに計画的に撮影', type: 'planner' },
      { text: '印象に残った場面を撮る', type: 'flexible' },
      { text: '気が向いたら撮る程度', type: 'relaxed' },
      { text: '撮るより体験を優先', type: 'spontaneous' },
    ],
  },
  {
    id: 8,
    text: '旅行中の起床時間は？',
    options: [
      { text: '予定に合わせて早起き', type: 'planner' },
      { text: 'その日の予定次第', type: 'flexible' },
      { text: '自然に起きるまで寝る', type: 'relaxed' },
      { text: '朝まで遊んで昼起き', type: 'spontaneous' },
    ],
  },
  {
    id: 9,
    text: 'お土産の買い方は？',
    options: [
      { text: '誰に何を買うかリスト化', type: 'planner' },
      { text: 'いくつか候補を考えておく', type: 'flexible' },
      { text: '空港で最後にまとめ買い', type: 'relaxed' },
      { text: 'ビビッときたものを買う', type: 'spontaneous' },
    ],
  },
  {
    id: 10,
    text: '理想の旅行とは？',
    options: [
      { text: '計画通りに進む完璧な旅', type: 'planner' },
      { text: '予定と発見のバランスが取れた旅', type: 'flexible' },
      { text: '心身ともにリフレッシュできる旅', type: 'relaxed' },
      { text: '予測不能でワクワクする冒険', type: 'spontaneous' },
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
  planner: {
    type: 'planner',
    title: '完璧プランナータイプ',
    emoji: '📅',
    percentage: '計画力 100%',
    description: '旅行前から楽しみが始まるあなた。ガイドブックやSNSで徹底リサーチ、分刻みのスケジュールで効率よく観光。無駄なく充実した旅ができます。',
    characteristics: ['計画的', '効率重視', 'リサーチ上手', '準備万端', '達成感重視'],
    advice: '素晴らしい計画力！たまには予定を空けて、偶然の出会いを楽しんでみては？',
  },
  flexible: {
    type: 'flexible',
    title: 'バランストラベラータイプ',
    emoji: '⚖️',
    percentage: 'バランス度 90%',
    description: '計画と自由のバランスが取れた理想的な旅行者。外せないスポットは押さえつつ、余白も大切にする柔軟さ。どんな旅も楽しめる適応力の持ち主。',
    characteristics: ['柔軟', 'バランス型', '適応力高い', '臨機応変', '満足度高い'],
    advice: '理想的な旅行スタイル！そのバランス感覚を活かして、どんどん旅に出よう。',
  },
  relaxed: {
    type: 'relaxed',
    title: 'のんびりリラックスタイプ',
    emoji: '🏖️',
    percentage: 'リラックス度 95%',
    description: '旅行は日常を忘れてリフレッシュするためのもの。詰め込みすぎず、ゆったりと過ごすのが好き。ホテルでのんびりも立派な旅行の楽しみ方！',
    characteristics: ['マイペース', 'ストレスフリー', '癒し重視', '無理しない', '自分軸'],
    advice: 'リラックス最優先は素敵！たまには少しだけ冒険して、新しい発見をしてみては？',
  },
  spontaneous: {
    type: 'spontaneous',
    title: '冒険スピリットタイプ',
    emoji: '🎒',
    percentage: '冒険度 98%',
    description: '計画なんて野暮！その場のノリと直感で旅を楽しむ冒険家。ハプニングすら楽しみ、予想外の出会いや発見を求める。人生も旅のようなタイプ。',
    characteristics: ['自由', '冒険好き', '直感的', 'ハプニング歓迎', '思い出に残る'],
    advice: '素敵な冒険心！でも最低限の安全対策だけは忘れずに。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { planner: 0, flexible: 0, relaxed: 0, spontaneous: 0 };

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
