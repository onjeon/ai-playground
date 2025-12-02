// 飲み会サバイバル診断 (노미카이 생존 테스트)
export const questions = [
  {
    id: 1,
    text: '飲み会の席順、あなたはどこに座る？',
    options: [
      { text: '上司の隣で気配り係', type: 'kikubari' },
      { text: '端っこで静かに飲みたい', type: 'hitori' },
      { text: '真ん中で盛り上げ役', type: 'moriagari' },
      { text: '出入り口近くで帰りやすい位置', type: 'escape' },
    ],
  },
  {
    id: 2,
    text: '上司に「何か歌って」と言われたら？',
    options: [
      { text: '「〇〇さんの十八番を先に！」とかわす', type: 'kikubari' },
      { text: '「すみません、音痴なので…」と断る', type: 'hitori' },
      { text: '「任せてください！」と即マイク', type: 'moriagari' },
      { text: '「トイレ行ってきます」と逃げる', type: 'escape' },
    ],
  },
  {
    id: 3,
    text: '飲み会の二次会に誘われたら？',
    options: [
      { text: '「皆さん行くなら」と合わせる', type: 'kikubari' },
      { text: '「明日早いので」と丁重に断る', type: 'hitori' },
      { text: '「行きましょう！」とノリノリ', type: 'moriagari' },
      { text: '「トイレ」と言ってフェードアウト', type: 'escape' },
    ],
  },
  {
    id: 4,
    text: '上司の長い話が始まったら？',
    options: [
      { text: '相槌を打ちながらしっかり聞く', type: 'kikubari' },
      { text: 'スマホをチラチラ見つつ聞くふり', type: 'hitori' },
      { text: '合間にツッコミを入れて盛り上げる', type: 'moriagari' },
      { text: 'ドリンク追加しに行くふりで離席', type: 'escape' },
    ],
  },
  {
    id: 5,
    text: '飲み会で苦手な料理が出てきたら？',
    options: [
      { text: '笑顔で少しだけ食べる', type: 'kikubari' },
      { text: 'さりげなく避ける', type: 'hitori' },
      { text: '「これ苦手なんです〜」と正直に言う', type: 'moriagari' },
      { text: '隣の人の皿にこっそり移す', type: 'escape' },
    ],
  },
  {
    id: 6,
    text: 'お酒が飲めない時は？',
    options: [
      { text: 'ウーロン茶でも雰囲気を合わせる', type: 'kikubari' },
      { text: '「体調が…」と言って断る', type: 'hitori' },
      { text: 'ノンアルでもテンション高く', type: 'moriagari' },
      { text: '早々に帰る理由を作る', type: 'escape' },
    ],
  },
  {
    id: 7,
    text: '飲み会の幹事を頼まれたら？',
    options: [
      { text: '「お任せください」と引き受ける', type: 'kikubari' },
      { text: '「ちょっと苦手で…」と断る', type: 'hitori' },
      { text: '「絶対楽しくします！」と張り切る', type: 'moriagari' },
      { text: '「〇〇さんの方が適任では」とかわす', type: 'escape' },
    ],
  },
  {
    id: 8,
    text: '飲み会で酔っ払った同僚がいたら？',
    options: [
      { text: '水を渡したり介抱する', type: 'kikubari' },
      { text: '関わらないようにする', type: 'hitori' },
      { text: '一緒にノリで盛り上がる', type: 'moriagari' },
      { text: 'これを機に帰る', type: 'escape' },
    ],
  },
  {
    id: 9,
    text: '飲み会中、話題がなくなったら？',
    options: [
      { text: '皆に話題を振る', type: 'kikubari' },
      { text: '黙々と食べる', type: 'hitori' },
      { text: '自分から面白い話をする', type: 'moriagari' },
      { text: 'スマホをいじる', type: 'escape' },
    ],
  },
  {
    id: 10,
    text: '飲み会翌日、あなたは？',
    options: [
      { text: '「昨日はありがとうございました」とお礼', type: 'kikubari' },
      { text: '「疲れた…」と思いながら出社', type: 'hitori' },
      { text: '「昨日楽しかったね！」と話しかける', type: 'moriagari' },
      { text: '「次は断ろう」と決意', type: 'escape' },
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
  survivalTip: string;
}> = {
  kikubari: {
    type: 'kikubari',
    title: '気配りマスター',
    emoji: '🍶',
    percentage: '飲み会適性度 95%',
    description: '上司の酒を注ぎ、後輩のフォローをし、場の空気を読む達人。飲み会では欠かせない存在ですが、たまには自分も楽しむことを忘れずに！',
    characteristics: ['空気が読める', 'お酌上手', 'フォロー上手', '周りが見える', '信頼される'],
    survivalTip: '自分も楽しむことを忘れないで！',
  },
  hitori: {
    type: 'hitori',
    title: '静かなサバイバー',
    emoji: '🍵',
    percentage: '飲み会適性度 50%',
    description: '飲み会は苦手だけど、なんとかやり過ごすタイプ。目立たず静かに時間が過ぎるのを待ちます。本当はおうちでゆっくりしたい派。',
    characteristics: ['控えめ', 'マイペース', '観察者', '聞き上手', '穏やか'],
    survivalTip: '無理せず、自分のペースで！',
  },
  moriagari: {
    type: 'moriagari',
    title: 'パーティーピープル',
    emoji: '🎉',
    percentage: '飲み会適性度 100%',
    description: '飲み会が大好き！盛り上げ役として欠かせない存在。場の中心でみんなを笑顔にします。でも、たまには周りの人のペースも見てあげて。',
    characteristics: ['ムードメーカー', '社交的', 'エネルギッシュ', '話上手', 'ポジティブ'],
    survivalTip: '周りのペースも気にしてみて！',
  },
  escape: {
    type: 'escape',
    title: '脱出の達人',
    emoji: '🏃',
    percentage: '飲み会適性度 30%',
    description: '飲み会からいかにスムーズに抜け出すかを常に考えているタイプ。様々な言い訳と脱出ルートを把握しています。正直、行きたくない派。',
    characteristics: ['要領がいい', '言い訳上手', '効率重視', '自分の時間大切', '正直者'],
    survivalTip: 'たまには最後まで付き合ってみて！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { kikubari: 0, hitori: 0, moriagari: 0, escape: 0 };

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
