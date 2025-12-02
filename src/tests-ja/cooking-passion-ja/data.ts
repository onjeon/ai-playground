// 料理への情熱度診断
export const questions = [
  {
    id: 1,
    text: '料理をすることについてどう思う？',
    options: [
      { text: '大好き！趣味として楽しんでいる', type: 'passionate' },
      { text: '好き、でも面倒な時もある', type: 'casual' },
      { text: '必要だからする', type: 'practical' },
      { text: 'できれば避けたい', type: 'minimal' },
    ],
  },
  {
    id: 2,
    text: '新しいレシピに挑戦する頻度は？',
    options: [
      { text: '常に新しいものに挑戦', type: 'passionate' },
      { text: '時々チャレンジする', type: 'casual' },
      { text: 'たまに気が向いたら', type: 'practical' },
      { text: 'ほぼしない、決まったものだけ', type: 'minimal' },
    ],
  },
  {
    id: 3,
    text: '調理器具や食材へのこだわりは？',
    options: [
      { text: '良いものを揃えたい', type: 'passionate' },
      { text: 'ある程度こだわる', type: 'casual' },
      { text: '使えればいい', type: 'practical' },
      { text: '最低限でOK', type: 'minimal' },
    ],
  },
  {
    id: 4,
    text: '料理番組やレシピ動画は？',
    options: [
      { text: 'よく見る、参考にする', type: 'passionate' },
      { text: 'たまに見る', type: 'casual' },
      { text: '必要な時だけ', type: 'practical' },
      { text: '見ない', type: 'minimal' },
    ],
  },
  {
    id: 5,
    text: '誰かに料理を振る舞うのは？',
    options: [
      { text: '大好き！腕の見せ所', type: 'passionate' },
      { text: '喜んでもらえると嬉しい', type: 'casual' },
      { text: 'できれば外食に誘いたい', type: 'practical' },
      { text: 'プレッシャーに感じる', type: 'minimal' },
    ],
  },
  {
    id: 6,
    text: '料理にかける時間は？',
    options: [
      { text: '時間をかけて丁寧に', type: 'passionate' },
      { text: '余裕がある時は凝る', type: 'casual' },
      { text: 'なるべく時短で', type: 'practical' },
      { text: '最短で済ませたい', type: 'minimal' },
    ],
  },
  {
    id: 7,
    text: '盛り付けへの意識は？',
    options: [
      { text: '見た目も大切にする', type: 'passionate' },
      { text: 'たまにはこだわる', type: 'casual' },
      { text: '味がよければいい', type: 'practical' },
      { text: '気にしない', type: 'minimal' },
    ],
  },
  {
    id: 8,
    text: 'スーパーでの買い物は？',
    options: [
      { text: '食材を見て献立を考える', type: 'passionate' },
      { text: '必要なものを買う', type: 'casual' },
      { text: '買い物リスト通りに', type: 'practical' },
      { text: 'できれば行きたくない', type: 'minimal' },
    ],
  },
  {
    id: 9,
    text: '外食と自炊の割合は？',
    options: [
      { text: 'ほぼ自炊、料理が楽しいから', type: 'passionate' },
      { text: '自炊が多め', type: 'casual' },
      { text: '半々くらい', type: 'practical' },
      { text: '外食やテイクアウトが多い', type: 'minimal' },
    ],
  },
  {
    id: 10,
    text: '料理の失敗について',
    options: [
      { text: '改善点を分析して次に活かす', type: 'passionate' },
      { text: '残念だけど気にしない', type: 'casual' },
      { text: '二度と作らない', type: 'practical' },
      { text: '失敗するから料理したくない', type: 'minimal' },
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
  passionate: {
    type: 'passionate',
    title: '料理エンスージアスト',
    emoji: '👨‍🍳',
    percentage: '料理愛 100%',
    description: '料理は人生の喜び！新しいレシピへの挑戦、食材選び、盛り付け…全てが楽しい。キッチンに立つ時間が最高に幸せ。',
    characteristics: ['情熱的', 'クリエイティブ', '探究心旺盛', '完璧主義', '人を喜ばせたい'],
    advice: '素晴らしい料理愛！その情熱を周りの人にもシェアしましょう♪',
  },
  casual: {
    type: 'casual',
    title: '楽しみ料理人',
    emoji: '🍳',
    percentage: '料理愛 70%',
    description: '料理は好きだけど、気負わず楽しむスタイル。上手くできると嬉しいし、たまにはサボりたい日もある。自然体の料理人。',
    characteristics: ['自然体', 'バランス型', '柔軟', '楽しみ上手', 'ストレスフリー'],
    advice: '程よい距離感が素敵！たまには凝った料理にチャレンジしても♪',
  },
  practical: {
    type: 'practical',
    title: '実用派シェフ',
    emoji: '🥘',
    percentage: '料理愛 40%',
    description: '料理は生きるための手段。美味しく食べられればそれでいい。効率重視、時短レシピが友達。無駄を省いた合理的スタイル。',
    characteristics: ['実用的', '効率重視', '合理的', '時短上手', 'シンプル好き'],
    advice: '効率的なスタイルも立派！たまには料理を「楽しむ」視点も♪',
  },
  minimal: {
    type: 'minimal',
    title: '料理は最小限派',
    emoji: '🍙',
    percentage: '料理愛 15%',
    description: '料理は正直苦手か、興味がない。できれば誰かに作ってもらいたい。外食やテイクアウトで十分満足タイプ。',
    characteristics: ['正直', '効率追求', '外食派', '時間優先', '他の趣味重視'],
    advice: '料理以外に情熱を注ぐのもOK！でも簡単な料理から始めてみては？',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { passionate: 0, casual: 0, practical: 0, minimal: 0 };

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
