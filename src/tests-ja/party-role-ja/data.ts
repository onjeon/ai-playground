// パーティーでの役割診断 (파티에서의 역할 진단)
export const questions = [
  {
    id: 1,
    text: 'パーティーや飲み会に参加する時、最初にすることは？',
    options: [
      { text: 'いろんな人に声をかける', type: 'connector' },
      { text: '盛り上げる準備、ネタを考える', type: 'entertainer' },
      { text: '落ち着く場所を確保', type: 'observer' },
      { text: '幹事として仕切る', type: 'organizer' },
    ],
  },
  {
    id: 2,
    text: '会話が途切れた時は？',
    options: [
      { text: '新しい話題を振る', type: 'connector' },
      { text: 'ボケやツッコミで場を和ませる', type: 'entertainer' },
      { text: '静かに様子を見る', type: 'observer' },
      { text: '次の予定や流れを提案', type: 'organizer' },
    ],
  },
  {
    id: 3,
    text: '初対面の人がいたら？',
    options: [
      { text: '積極的に話しかけて仲を取り持つ', type: 'connector' },
      { text: '面白い話で打ち解ける', type: 'entertainer' },
      { text: '相手から来るのを待つ', type: 'observer' },
      { text: '紹介して輪に入れる', type: 'organizer' },
    ],
  },
  {
    id: 4,
    text: '料理やドリンクについて',
    options: [
      { text: 'みんなにおすすめを紹介', type: 'connector' },
      { text: '食レポ風に盛り上げる', type: 'entertainer' },
      { text: '自分のペースで楽しむ', type: 'observer' },
      { text: '注文や取り分けを仕切る', type: 'organizer' },
    ],
  },
  {
    id: 5,
    text: '盛り上がりに欠ける時は？',
    options: [
      { text: '話題を変えて盛り返す', type: 'connector' },
      { text: '一発芸やゲームを提案', type: 'entertainer' },
      { text: '静かでも居心地いい', type: 'observer' },
      { text: '二次会や別プランを提案', type: 'organizer' },
    ],
  },
  {
    id: 6,
    text: 'カラオケでは？',
    options: [
      { text: 'みんなが知ってる曲で盛り上げる', type: 'connector' },
      { text: 'モノマネやネタ曲で笑わせる', type: 'entertainer' },
      { text: '聴く専門、合いの手係', type: 'observer' },
      { text: '順番やリモコンを管理', type: 'organizer' },
    ],
  },
  {
    id: 7,
    text: '誰かが酔いつぶれたら？',
    options: [
      { text: '他の人と協力して対応', type: 'connector' },
      { text: 'ネタにしつつも面倒を見る', type: 'entertainer' },
      { text: '遠くから見守る', type: 'observer' },
      { text: 'タクシーや介抱の手配', type: 'organizer' },
    ],
  },
  {
    id: 8,
    text: 'パーティーの終盤は？',
    options: [
      { text: '名残惜しく話し続ける', type: 'connector' },
      { text: '最後まで盛り上げる', type: 'entertainer' },
      { text: 'そろそろ帰りたいかも', type: 'observer' },
      { text: 'お会計や解散を仕切る', type: 'organizer' },
    ],
  },
  {
    id: 9,
    text: 'パーティー後の連絡は？',
    options: [
      { text: '新しくできた繋がりをフォロー', type: 'connector' },
      { text: '面白い写真をグループに投下', type: 'entertainer' },
      { text: '特にしない', type: 'observer' },
      { text: 'お礼や次回の提案を送る', type: 'organizer' },
    ],
  },
  {
    id: 10,
    text: 'パーティーでのあなたの立ち位置は？',
    options: [
      { text: '人と人を繋ぐハブ', type: 'connector' },
      { text: '場を盛り上げるエンターテイナー', type: 'entertainer' },
      { text: '静かに楽しむ観察者', type: 'observer' },
      { text: '全体を見る司令塔', type: 'organizer' },
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
  connector: {
    type: 'connector',
    title: '人繋ぎコネクタータイプ',
    emoji: '🤝',
    percentage: 'コネクト力 95%',
    description: '人と人を繋ぐのが得意なコミュニケーションの達人！初対面の人も会話の輪に入れ、全員が楽しめる空気を作ります。パーティー後も繋がりを大切に。',
    characteristics: ['社交的', '人脈作り上手', 'ハブ的存在', '会話上手', 'フレンドリー'],
    advice: '素晴らしいコネクト力！自分自身も楽しむことを忘れないで。',
  },
  entertainer: {
    type: 'entertainer',
    title: '盛り上げエンターテイナータイプ',
    emoji: '🎤',
    percentage: 'エンタメ性 100%',
    description: 'パーティーの華！一発芸、面白トーク、ゲーム提案で場を盛り上げる。あなたがいるだけで空気が明るくなる、エンターテイナー気質。',
    characteristics: ['面白い', '注目の的', 'ムードメーカー', 'サービス精神', '記憶に残る'],
    advice: '最高のエンターテイナー！たまには観客側でリラックスも良いですよ。',
  },
  observer: {
    type: 'observer',
    title: '静かな観察者タイプ',
    emoji: '👀',
    percentage: '観察力 90%',
    description: '騒がしい場所は得意じゃないけど、自分のペースで楽しむ。人間観察が面白く、深い会話ができる相手とは盛り上がる。無理に目立たなくてOK。',
    characteristics: ['観察者', 'マイペース', '深い会話', '聞き上手', '落ち着いている'],
    advice: '観察者ポジションも大切！居心地の良い場所を見つけて楽しんで。',
  },
  organizer: {
    type: 'organizer',
    title: '頼れるオーガナイザータイプ',
    emoji: '📋',
    percentage: '仕切り力 98%',
    description: '幹事気質で全体を見渡すリーダータイプ！予約、お会計、時間管理…裏方仕事を自然とこなす。あなたがいるとみんな安心してパーティーを楽しめる。',
    characteristics: ['リーダー', '段取り上手', '責任感', '面倒見がいい', '頼れる'],
    advice: '素晴らしい仕切り力！たまには誰かに任せて、自分も楽しむ側に回って。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { connector: 0, entertainer: 0, observer: 0, organizer: 0 };

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
