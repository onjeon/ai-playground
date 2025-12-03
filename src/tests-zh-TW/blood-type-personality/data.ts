// 血型性格診斷測驗
export const questions = [
  {
    id: 1,
    text: '當你快要遲到赴約時，你會？',
    options: [
      { text: '一定會先打電話道歉', type: 'A' },
      { text: '總之先趕快趕過去', type: 'B' },
      { text: '冷靜分析情況後再應對', type: 'AB' },
      { text: '反正船到橋頭自然直', type: 'O' },
    ],
  },
  {
    id: 2,
    text: '和朋友計劃旅行時，你會？',
    options: [
      { text: '仔細規劃每個行程', type: 'A' },
      { text: '看心情隨興決定', type: 'B' },
      { text: '大致計劃但保留彈性時間', type: 'AB' },
      { text: '主動帶領大家決定', type: 'O' },
    ],
  },
  {
    id: 3,
    text: '失敗時你的反應是？',
    options: [
      { text: '會難過一陣子並深深反省', type: 'A' },
      { text: '很快忘記然後繼續向前', type: 'B' },
      { text: '分析原因並想改善方法', type: 'AB' },
      { text: '樂觀地想「沒關係啦」', type: 'O' },
    ],
  },
  {
    id: 4,
    text: '對喜歡的人你會怎麼做？',
    options: [
      { text: '先觀察一陣子再行動', type: 'A' },
      { text: '心動了就馬上行動', type: 'B' },
      { text: '觀察對方反應再慎重決定', type: 'AB' },
      { text: '積極表達自己的心意', type: 'O' },
    ],
  },
  {
    id: 5,
    text: '你的工作風格是？',
    options: [
      { text: '按照計劃一步步完成', type: 'A' },
      { text: '有靈感時集中精神做', type: 'B' },
      { text: '先想好有效率的方法再做', type: 'AB' },
      { text: '朝著目標一口氣衝刺', type: 'O' },
    ],
  },
  {
    id: 6,
    text: '你怎麼紓解壓力？',
    options: [
      { text: '一個人靜靜地休息', type: 'A' },
      { text: '沉浸在喜歡的事物中', type: 'B' },
      { text: '接觸藝術或興趣愛好', type: 'AB' },
      { text: '和朋友熱鬧地聚會', type: 'O' },
    ],
  },
  {
    id: 7,
    text: '在團體中你的定位是？',
    options: [
      { text: '支援者、協調者', type: 'A' },
      { text: '氣氛製造者', type: 'B' },
      { text: '軍師、顧問', type: 'AB' },
      { text: '領導者、核心人物', type: 'O' },
    ],
  },
  {
    id: 8,
    text: '你房間的整理狀況是？',
    options: [
      { text: '總是整整齊齊', type: 'A' },
      { text: '雖然亂但知道東西在哪', type: 'B' },
      { text: '有自己堅持的擺設', type: 'AB' },
      { text: '大致還行，需要時會整理', type: 'O' },
    ],
  },
  {
    id: 9,
    text: '人際關係中你最重視什麼？',
    options: [
      { text: '信任和誠實', type: 'A' },
      { text: '快樂和自由', type: 'B' },
      { text: '適當的距離感', type: 'AB' },
      { text: '夥伴意識和羈絆', type: 'O' },
    ],
  },
  {
    id: 10,
    text: '用一句話形容自己？',
    options: [
      { text: '認真且一絲不苟', type: 'A' },
      { text: '隨性且自由自在', type: 'B' },
      { text: '冷靜且理性', type: 'AB' },
      { text: '開朗且充滿熱情', type: 'O' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  description: string;
  personality: string[];
  loveStyle: string;
  compatibility: string;
}> = {
  A: {
    type: 'A',
    title: 'A型 - 認真的努力家',
    emoji: '🅰️',
    description: '你是認真且責任感強，做任何事都很仔細的人。有計劃性，連細節都能注意到，這種一絲不苟的特質很有魅力。',
    personality: ['認真', '一絲不苟', '謹慎', '善於關心他人', '責任感強'],
    loveStyle: '專一且認真對待感情的類型。珍惜對方，能建立長久的關係。',
    compatibility: '相性好的血型：A型、O型',
  },
  B: {
    type: 'B',
    title: 'B型 - 自由奔放的隨性派',
    emoji: '🅱️',
    description: '你重視自己的步調，對喜歡的事會全心投入。獨創的想法和行動力總是讓周圍的人驚豔。',
    personality: ['隨性', '獨創', '好奇心旺盛', '直率', '專注力強'],
    loveStyle: '自然相處的類型。討厭束縛，喜歡互相尊重自由的關係。',
    compatibility: '相性好的血型：B型、O型',
  },
  AB: {
    type: 'AB',
    title: 'AB型 - 冷靜的天才型',
    emoji: '🆎',
    description: '你擁有冷靜的判斷力和獨特的感性。既理性又有藝術氣質，散發著神秘的魅力。',
    personality: ['冷靜', '理性', '獨特', '多才多藝', '神秘'],
    loveStyle: '理想高，重視精神層面的連結。追求能建立深厚信任關係的伴侶。',
    compatibility: '相性好的血型：AB型、O型',
  },
  O: {
    type: 'O',
    title: 'O型 - 熱情的領導者',
    emoji: '🅾️',
    description: '你大方且善於社交，能發揮領導能力。用正面的能量帶領著周圍的人。',
    personality: ['大方', '善於社交', '正面積極', '有領導力', '充滿熱情'],
    loveStyle: '積極主動追求的類型。一旦喜歡上就會專一，談場充滿熱情的戀愛。',
    compatibility: '相性好的血型：和所有血型都很合！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { A: 0, B: 0, AB: 0, O: 0 };

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
