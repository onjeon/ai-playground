// 桜デートスタイル診断 (벚꽃 데이트 스타일)
export const questions = [
  {
    id: 1,
    text: '桜の季節、理想のデートの始まり方は？',
    options: [
      { text: '朝早く起きて人が少ない時間に桜を独占', type: 'romantic' },
      { text: '友達も誘ってワイワイお花見パーティー', type: 'social' },
      { text: 'カメラを持って最高の一枚を撮りに行く', type: 'aesthetic' },
      { text: '特に計画せず、気分で桜スポットを探す', type: 'spontaneous' },
    ],
  },
  {
    id: 2,
    text: 'お花見に持っていきたいものは？',
    options: [
      { text: '手作りのお弁当とワイン', type: 'romantic' },
      { text: 'たくさんのお菓子と飲み物', type: 'social' },
      { text: 'おしゃれなピクニックセット', type: 'aesthetic' },
      { text: 'コンビニで買ったものでOK', type: 'spontaneous' },
    ],
  },
  {
    id: 3,
    text: '桜が満開！その時あなたは？',
    options: [
      { text: '相手の手を握ってゆっくり歩く', type: 'romantic' },
      { text: 'みんなで記念撮影大会', type: 'social' },
      { text: '最高のアングルを探して写真撮影', type: 'aesthetic' },
      { text: '桜吹雪の中で走り回る', type: 'spontaneous' },
    ],
  },
  {
    id: 4,
    text: '桜デートで一番大切にしたいことは？',
    options: [
      { text: '二人だけの特別な時間', type: 'romantic' },
      { text: '楽しい思い出をみんなと共有', type: 'social' },
      { text: 'インスタ映えする瞬間', type: 'aesthetic' },
      { text: '予定通りじゃなくても楽しめること', type: 'spontaneous' },
    ],
  },
  {
    id: 5,
    text: 'お花見スポットの選び方は？',
    options: [
      { text: '穴場の静かな場所を事前リサーチ', type: 'romantic' },
      { text: '有名スポットで人気の場所', type: 'social' },
      { text: '景色が綺麗で写真映えする場所', type: 'aesthetic' },
      { text: '近くにあればどこでもOK', type: 'spontaneous' },
    ],
  },
  {
    id: 6,
    text: '桜デート中の服装は？',
    options: [
      { text: '相手の好みに合わせたコーデ', type: 'romantic' },
      { text: 'みんなでお揃いアイテム', type: 'social' },
      { text: '桜に映えるおしゃれな服', type: 'aesthetic' },
      { text: '動きやすさ重視のカジュアル', type: 'spontaneous' },
    ],
  },
  {
    id: 7,
    text: '桜デートの後は？',
    options: [
      { text: '夜桜を見ながらディナー', type: 'romantic' },
      { text: 'カラオケや居酒屋で二次会', type: 'social' },
      { text: 'おしゃれなカフェで写真整理', type: 'aesthetic' },
      { text: '気分次第で次の場所へ', type: 'spontaneous' },
    ],
  },
  {
    id: 8,
    text: '桜の花びらが舞い落ちてきた時は？',
    options: [
      { text: '相手の髪についた花びらを取ってあげる', type: 'romantic' },
      { text: 'みんなで花びらキャッチ競争', type: 'social' },
      { text: '花びらが舞う瞬間を撮影', type: 'aesthetic' },
      { text: '花びらを集めて遊ぶ', type: 'spontaneous' },
    ],
  },
  {
    id: 9,
    text: '理想の桜デートの時間帯は？',
    options: [
      { text: '夕暮れ時のロマンチックな時間', type: 'romantic' },
      { text: '昼間の賑やかな時間', type: 'social' },
      { text: '朝の光が綺麗な時間', type: 'aesthetic' },
      { text: '時間は気にしない', type: 'spontaneous' },
    ],
  },
  {
    id: 10,
    text: '桜デートの思い出はどう残す？',
    options: [
      { text: '二人だけの秘密のアルバム', type: 'romantic' },
      { text: 'グループLINEで共有', type: 'social' },
      { text: 'SNSに投稿して残す', type: 'aesthetic' },
      { text: '心に刻むだけで十分', type: 'spontaneous' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  description: string;
  traits: string[];
  idealDate: string[];
  compatibility: string;
}> = {
  romantic: {
    type: 'romantic',
    title: 'ロマンチック桜デートタイプ',
    emoji: '💕',
    description: 'あなたは桜の下で二人だけの特別な時間を大切にするロマンチストです。静かな場所で相手との絆を深めることを重視し、花びらが舞う中での告白なんて最高のシチュエーション。',
    traits: ['ムードを大切にする', '相手への気配りが上手', '記念日を大切にする', '計画的', '感受性豊か'],
    idealDate: ['夜桜ディナー', '穴場スポットでピクニック', '桜並木の散歩', '手作り弁当でお花見'],
    compatibility: '同じロマンチックタイプか、自由奔放タイプとの相性が◎',
  },
  social: {
    type: 'social',
    title: 'ワイワイ桜パーティータイプ',
    emoji: '🎉',
    description: 'あなたは桜の下でみんなと楽しむのが大好き！大人数でワイワイ盛り上がるお花見が最高の思い出になります。友達も恋人も、みんな一緒に楽しみたいタイプ。',
    traits: ['社交的', 'ムードメーカー', '人を巻き込む力がある', '楽しいことが大好き', 'コミュニケーション上手'],
    idealDate: ['大人数でのお花見パーティー', '屋台巡り', 'お花見合コン', '会社や友人グループでの宴会'],
    compatibility: '同じソーシャルタイプか、美意識タイプとの相性が◎',
  },
  aesthetic: {
    type: 'aesthetic',
    title: '映え重視桜フォトタイプ',
    emoji: '📸',
    description: 'あなたは桜の美しさを最大限に切り取りたい美意識の高いタイプ。インスタ映えする瞬間を逃さず、思い出を美しく残すことにこだわります。おしゃれなピクニックセットは必須！',
    traits: ['美意識が高い', 'こだわりが強い', 'SNS映えに敏感', 'センスが良い', '完璧主義'],
    idealDate: ['フォトジェニックスポット巡り', 'おしゃれピクニック', '桜カフェめぐり', '着物レンタルでお花見'],
    compatibility: 'ロマンチックタイプか、同じ美意識タイプとの相性が◎',
  },
  spontaneous: {
    type: 'spontaneous',
    title: '自由奔放桜冒険タイプ',
    emoji: '🌸',
    description: 'あなたは計画よりもその瞬間を楽しむ自由人！桜が咲いていればどこでもハッピー。予定外のハプニングも楽しめる柔軟さがあなたの魅力です。',
    traits: ['柔軟性がある', '楽観的', '冒険好き', '束縛されるのが苦手', '今を生きる'],
    idealDate: ['散歩中に見つけた桜スポット', '気ままなドライブ', '思いつきピクニック', '桜を追いかけて旅行'],
    compatibility: '同じ自由奔放タイプか、ロマンチックタイプとの相性が◎',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { romantic: 0, social: 0, aesthetic: 0, spontaneous: 0 };

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
