export const questions = [
  {
    id: 1,
    text: 'หารูปแบบ: 🔴🔵🔴🔵🔴__ ช่องว่างควรเป็นอะไร?',
    options: [
      { text: '🔵', type: 'A' },
      { text: '🔴', type: 'B' },
      { text: '🟢', type: 'C' },
      { text: '🟡', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'หารูปแบบ: AAB AAB AAB __ ช่องว่างควรเป็นอะไร?',
    options: [
      { text: 'AAB', type: 'A' },
      { text: 'ABA', type: 'B' },
      { text: 'BAA', type: 'C' },
      { text: 'ABC', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'หารูปแบบ: △○□ △○□ △○__ ช่องว่างควรเป็นอะไร?',
    options: [
      { text: '□', type: 'A' },
      { text: '△', type: 'B' },
      { text: '○', type: 'C' },
      { text: '⬡', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'หารูปแบบ: 1 2 2 3 3 3 4 4 4 4 __ __ ช่องว่างควรเป็นอะไร?',
    options: [
      { text: '5 5', type: 'A' },
      { text: '4 4', type: 'B' },
      { text: '5 4', type: 'C' },
      { text: '4 5', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'หารูปแบบของสี: 🟡🟢🔵🟣 🟡🟢🔵🟣 🟡🟢__ ช่องว่างควรเป็นอะไร?',
    options: [
      { text: '🔵', type: 'A' },
      { text: '🟣', type: 'B' },
      { text: '🟡', type: 'C' },
      { text: '🟢', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'หารูปแบบ: XO OX XO __ ช่องว่างควรเป็นอะไร?',
    options: [
      { text: 'OX', type: 'A' },
      { text: 'XO', type: 'B' },
      { text: 'XX', type: 'C' },
      { text: 'OO', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'หารูปแบบ: ↑→↓← ↑→↓← ↑→__ ช่องว่างควรเป็นอะไร?',
    options: [
      { text: '↓', type: 'A' },
      { text: '←', type: 'B' },
      { text: '↑', type: 'C' },
      { text: '→', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'หารูปแบบ: AB BA AB BA __ ช่องว่างควรเป็นอะไร?',
    options: [
      { text: 'AB', type: 'A' },
      { text: 'BA', type: 'B' },
      { text: 'AA', type: 'C' },
      { text: 'BB', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'หารูปแบบ: ●○○ ●●○ ●●● ○○○ ●○○ ●●○ __ ช่องว่างควรเป็นอะไร?',
    options: [
      { text: '●●●', type: 'A' },
      { text: '○○○', type: 'B' },
      { text: '●○●', type: 'C' },
      { text: '○●○', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'หารูปแบบ: 1A 2B 3C 4D __ ช่องว่างควรเป็นอะไร?',
    options: [
      { text: '5E', type: 'A' },
      { text: '5F', type: 'B' },
      { text: '4E', type: 'C' },
      { text: '6F', type: 'D' },
    ],
  },
  {
    id: 11,
    text: 'หารูปแบบ: ◆◇◆ ◇◆◇ ◆◇◆ __ ช่องว่างควรเป็นอะไร?',
    options: [
      { text: '◇◆◇', type: 'A' },
      { text: '◆◇◆', type: 'B' },
      { text: '◇◇◇', type: 'C' },
      { text: '◆◆◆', type: 'D' },
    ],
  },
  {
    id: 12,
    text: 'หารูปแบบ: 🌑🌓🌕🌗 🌑🌓🌕🌗 🌑🌓__ ช่องว่างควรเป็นอะไร?',
    options: [
      { text: '🌕', type: 'A' },
      { text: '🌗', type: 'B' },
      { text: '🌑', type: 'C' },
      { text: '🌓', type: 'D' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  description: string;
  traits: string[];
  strengths: string[];
  weaknesses: string[];
  tips: string[];
}> = {
  A: {
    type: 'A',
    title: 'ราชาแห่งรูปแบบ',
    emoji: '👑',
    description: 'คุณมีความสามารถพิเศษในการจดจำรูปแบบ สามารถเห็นความสัมพันธ์และทำนายสิ่งที่จะเกิดขึ้นได้อย่างแม่นยำ',
    traits: ['จดจำรูปแบบเก่ง', 'ทำนายได้', 'เห็นความสัมพันธ์', 'แม่นยำ'],
    strengths: ['วิเคราะห์แนวโน้มได้', 'เข้าใจระบบ', 'เรียนรู้เร็ว'],
    weaknesses: ['อาจคาดหวังให้ทุกอย่างเป็นรูปแบบ'],
    tips: ['ใช้ความสามารถนี้ในการวิเคราะห์ข้อมูลหรือลงทุน'],
  },
  B: {
    type: 'B',
    title: 'นักจดจำรูปแบบ',
    emoji: '🔍',
    description: 'คุณมีความสามารถที่ดีในการจดจำรูปแบบ แม้บางครั้งอาจพลาดรูปแบบที่ซับซ้อน',
    traits: ['จดจำได้', 'พยายาม', 'ละเอียด'],
    strengths: ['เห็นรูปแบบพื้นฐาน', 'พัฒนาได้'],
    weaknesses: ['รูปแบบซับซ้อนอาจยาก'],
    tips: ['ลองหารูปแบบในสิ่งรอบตัว'],
  },
  C: {
    type: 'C',
    title: 'ผู้ฝึกจดจำรูปแบบ',
    emoji: '🌱',
    description: 'คุณกำลังพัฒนาความสามารถในการจดจำรูปแบบ การฝึกฝนจะช่วยให้ดีขึ้น',
    traits: ['กำลังพัฒนา', 'มีศักยภาพ', 'ตั้งใจ'],
    strengths: ['เปิดใจเรียนรู้'],
    weaknesses: ['ต้องฝึกฝนเพิ่ม'],
    tips: ['ลองทำแบบฝึกหัดรูปแบบง่ายๆ ทุกวัน'],
  },
  D: {
    type: 'D',
    title: 'นักคิดอิสระ',
    emoji: '🦋',
    description: 'คุณอาจไม่ยึดติดกับรูปแบบ ซึ่งทำให้มีความคิดสร้างสรรค์ แต่อาจพลาดรูปแบบที่ชัดเจน',
    traits: ['คิดอิสระ', 'ไม่ยึดติด', 'สร้างสรรค์'],
    strengths: ['คิดนอกกรอบ'],
    weaknesses: ['อาจพลาดรูปแบบ'],
    tips: ['ลองสังเกตสิ่งรอบตัวให้มากขึ้น'],
  },
};

export function calculateResult(answers: number[]) {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      scores[question.options[answerIndex].type]++;
    }
  });
  const resultType = Object.entries(scores).reduce((a, b) => (b[1] > a[1] ? b : a))[0];
  return results[resultType];
}
