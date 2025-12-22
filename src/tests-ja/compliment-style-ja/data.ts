// 褒め方診断 - あなたの褒めスタイルは？
export const questions = [
  {
    id: 1,
    text: '友達の新しい髪型が素敵だったら？',
    options: [
      { text: '「めっちゃ似合う！最高！」と大げさに', type: 'enthusiastic' },
      { text: '「その色、肌に合ってていいね」と具体的に', type: 'analytical' },
      { text: '「いい感じじゃん」とさりげなく', type: 'subtle' },
      { text: '言葉より、何度も見て反応で示す', type: 'nonverbal' },
    ],
  },
  {
    id: 2,
    text: '後輩が仕事でいい成果を出したとき',
    options: [
      { text: '「すごい！天才！」と感情いっぱいに', type: 'enthusiastic' },
      { text: '「ここの工夫が効いたね」とプロセスを評価', type: 'analytical' },
      { text: '「お疲れ、よくやったね」と短く', type: 'subtle' },
      { text: 'うなずきや笑顔、肩ポンで伝える', type: 'nonverbal' },
    ],
  },
  {
    id: 3,
    text: '恋人や家族に感謝を伝えるとき',
    options: [
      { text: '「大好き！ありがとう！」とストレートに', type: 'enthusiastic' },
      { text: '「〇〇してくれて本当に助かった」と具体的に', type: 'analytical' },
      { text: '「ん、ありがと」と照れながら', type: 'subtle' },
      { text: 'ハグや手をつなぐなど行動で', type: 'nonverbal' },
    ],
  },
  {
    id: 4,
    text: '料理を作ってもらって美味しかったら？',
    options: [
      { text: '「うま！神！お店出せる！」と大絶賛', type: 'enthusiastic' },
      { text: '「この味付けのバランスがいい」と分析', type: 'analytical' },
      { text: '「美味しい」と一言、でも完食', type: 'subtle' },
      { text: 'おかわりの行動で示す', type: 'nonverbal' },
    ],
  },
  {
    id: 5,
    text: '子どもや年下の人を褒めるとき',
    options: [
      { text: 'テンション高く、いっぱい拍手', type: 'enthusiastic' },
      { text: '何が良かったか具体的に説明', type: 'analytical' },
      { text: '「いいね」「できたね」とシンプルに', type: 'subtle' },
      { text: '頭を撫でる、グッドサインなど', type: 'nonverbal' },
    ],
  },
  {
    id: 6,
    text: 'プレゼントをもらったときの反応',
    options: [
      { text: '「えー！嬉しい！最高！」と大興奮', type: 'enthusiastic' },
      { text: '「これ欲しかったの、よく分かったね」', type: 'analytical' },
      { text: '「ありがとう」と落ち着いて', type: 'subtle' },
      { text: '大切そうに抱きしめる', type: 'nonverbal' },
    ],
  },
  {
    id: 7,
    text: '同僚のプレゼンが良かったとき',
    options: [
      { text: '「完璧だった！拍手！」と盛り上げる', type: 'enthusiastic' },
      { text: '「あのデータの見せ方が効果的だった」', type: 'analytical' },
      { text: '終わった後に「良かったよ」と一言', type: 'subtle' },
      { text: '目を合わせて大きくうなずく', type: 'nonverbal' },
    ],
  },
  {
    id: 8,
    text: 'SNSで友達の投稿を見て素敵だと思ったら？',
    options: [
      { text: '「最高！素敵すぎ！」と絵文字たっぷりコメント', type: 'enthusiastic' },
      { text: '写真の構図や場所について具体的にコメント', type: 'analytical' },
      { text: 'いいねだけ、または短いスタンプ', type: 'subtle' },
      { text: '保存したり、後日会った時に話題にする', type: 'nonverbal' },
    ],
  },
  {
    id: 9,
    text: '尊敬する先輩や上司に感謝を伝えるとき',
    options: [
      { text: '「本当に尊敬してます！」と熱く', type: 'enthusiastic' },
      { text: '「〇〇の件、勉強になりました」と具体的に', type: 'analytical' },
      { text: '「ありがとうございます」と丁寧に', type: 'subtle' },
      { text: '態度や仕事ぶりで示す', type: 'nonverbal' },
    ],
  },
  {
    id: 10,
    text: '自分の褒め方について',
    options: [
      { text: '言いすぎかも？でも止められない', type: 'enthusiastic' },
      { text: '的確に評価したいと思っている', type: 'analytical' },
      { text: '本当は褒めたいけど恥ずかしい', type: 'subtle' },
      { text: '言葉より行動派だと思う', type: 'nonverbal' },
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
  enthusiastic: {
    type: 'enthusiastic',
    title: '熱烈アピールタイプ',
    emoji: '🎉',
    percentage: '褒め表現力 95%',
    description: '褒める時はとにかく全力！「すごい！最高！天才！」など、感情を惜しみなく表現します。周りを明るくするムードメーカーで、あなたに褒められると誰もが嬉しくなります。',
    characteristics: ['表現力豊か', 'ポジティブ', 'ムードメーカー', '社交的', 'エネルギッシュ'],
    advice: 'その熱量は最高の才能！ただし、ここぞという時の褒め言葉の重みも意識してみて。',
  },
  analytical: {
    type: 'analytical',
    title: '具体的評価タイプ',
    emoji: '🔍',
    percentage: '褒め表現力 70%',
    description: '「何が」「なぜ」良かったのかを具体的に伝えるタイプ。あなたの褒め言葉は説得力があり、相手の成長につながります。仕事の場面で特に信頼される褒め方です。',
    characteristics: ['論理的', '観察力', '誠実', '教育的', '信頼性'],
    advice: '的確な褒め方は貴重！時には感情も込めると、より心に響きますよ。',
  },
  subtle: {
    type: 'subtle',
    title: 'さりげない一言タイプ',
    emoji: '🍃',
    percentage: '褒め表現力 45%',
    description: '派手な表現は苦手だけど、本心からの一言を大切にするタイプ。照れ屋さんかもしれませんが、その分あなたの褒め言葉には重みがあります。',
    characteristics: ['控えめ', '誠実', '照れ屋', '本音重視', '奥ゆかしい'],
    advice: 'その誠実さが魅力！もう少し頻度を上げると、相手にもっと伝わるかも。',
  },
  nonverbal: {
    type: 'nonverbal',
    title: '行動で示すタイプ',
    emoji: '💫',
    percentage: '褒め表現力 50%',
    description: '言葉より態度や行動で気持ちを伝えるタイプ。うなずき、笑顔、さりげない気遣いで相手を認めます。言葉にしなくても伝わる、深い愛情表現の持ち主。',
    characteristics: ['行動派', '寡黙', '誠実', '観察力', '深い愛情'],
    advice: '行動は雄弁！でも時には言葉にすることで、より確実に気持ちが届きますよ。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { enthusiastic: 0, analytical: 0, subtle: 0, nonverbal: 0 };

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
