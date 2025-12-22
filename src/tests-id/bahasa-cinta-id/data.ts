// Tes Bahasa Cinta (Love Language) Kamu
// Temukan cara kamu memberi dan menerima cinta!

export const questions = [
  {
    id: 1,
    question: "Kamu merasa paling disayang ketika...",
    options: [
      { text: "Pasangan bilang kata-kata manis dan apresiasi", type: "A" },
      { text: "Pasangan meluangkan waktu khusus berdua", type: "B" },
      { text: "Pasangan kasih hadiah atau surprise", type: "C" },
      { text: "Pasangan peluk, gandeng tangan, atau sentuhan fisik", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Cara kamu menunjukkan sayang biasanya...",
    options: [
      { text: "Bilang I love you dan pujian", type: "A" },
      { text: "Kasih waktu dan perhatian penuh", type: "B" },
      { text: "Kasih hadiah atau treat mereka", type: "C" },
      { text: "Peluk, cium, atau sentuhan sayang", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Yang paling meaningful di relationship...",
    options: [
      { text: "Kata-kata support dan encouragement", type: "A" },
      { text: "Quality time tanpa distraksi", type: "B" },
      { text: "Thoughtful gifts yang menunjukkan care", type: "C" },
      { text: "Physical affection dan closeness", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Kalau pasangan sibuk dan jarang komunikasi...",
    options: [
      { text: "Butuh lebih banyak chat atau call, verbal connection", type: "A" },
      { text: "Miss quality time berdua", type: "B" },
      { text: "Appreciate small gifts atau gestures", type: "C" },
      { text: "Miss physical presence dan touch", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Date ideal menurutmu...",
    options: [
      { text: "Deep talk di tempat cozy", type: "A" },
      { text: "Aktivitas berdua tanpa HP", type: "B" },
      { text: "Pasangan treat dan surprise", type: "C" },
      { text: "Cuddle dan physical closeness", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Saat merasa down, kamu paling butuh...",
    options: [
      { text: "Kata-kata semangat dan validasi", type: "A" },
      { text: "Kehadiran dan waktu bersama", type: "B" },
      { text: "Surprise kecil yang bikin happy", type: "C" },
      { text: "Pelukan atau dipeluk", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Yang bikin kamu kesal di relationship...",
    options: [
      { text: "Kurang apresiasi atau kritik berlebihan", type: "A" },
      { text: "Pasangan sibuk dan tidak ada waktu", type: "B" },
      { text: "Lupa anniversary atau tidak ada effort", type: "C" },
      { text: "Kurang affection fisik", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Hadiah terbaik dari pasangan...",
    options: [
      { text: "Love letter atau pesan heartfelt", type: "A" },
      { text: "Trip atau experience berdua", type: "B" },
      { text: "Barang yang sudah lama diinginkan", type: "C" },
      { text: "Massage atau physical care", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Di daily life, kamu appreciate...",
    options: [
      { text: "Good morning texts dan sweet messages", type: "A" },
      { text: "Undivided attention saat ngobrol", type: "B" },
      { text: "Random treats dan thoughtfulness", type: "C" },
      { text: "Holding hands dan physical touch casual", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Conflict resolution yang efektif...",
    options: [
      { text: "Bicara dan express feelings dengan kata", type: "A" },
      { text: "Sit down berdua dan discuss properly", type: "B" },
      { text: "Make up dengan gesture atau gift", type: "C" },
      { text: "Hug it out dan physical reconnection", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Long distance relationship challenge terbesar...",
    options: [
      { text: "Miss verbal communication daily", type: "A" },
      { text: "Miss spending time together", type: "B" },
      { text: "Can't give/receive physical gifts easily", type: "C" },
      { text: "Miss physical touch the most", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Ekspresi cinta yang paling kamu harapkan...",
    options: [
      { text: "'Aku sayang kamu' dan verbal affirmation", type: "A" },
      { text: "Dedicated time tanpa gangguan", type: "B" },
      { text: "Surprise dan thoughtful presents", type: "C" },
      { text: "Cuddles dan physical intimacy", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Words of Affirmation",
    emoji: "💬",
    description: "Bahasa cintamu adalah Kata-kata! Kamu merasa dicintai melalui verbal expression - pujian, kata sayang, dan pesan support. Words have power for you!",
    traits: ["Verbal", "Expressive", "Appreciates compliments", "Communication focused"],
    strengths: ["Clear communication", "Easy to express love", "Motivating"],
    weaknesses: ["Sensitive to criticism", "Needs verbal reassurance"],
    tips: ["Partner might show love differently", "Actions can be words too"],
  },
  B: {
    type: "B",
    title: "Quality Time",
    emoji: "⏰",
    description: "Bahasa cintamu adalah Waktu Berkualitas! Kamu merasa dicintai ketika pasangan memberi undivided attention dan quality moments bersama. Presence is love.",
    traits: ["Present-focused", "Attention-seeking", "Relationship-oriented", "Values togetherness"],
    strengths: ["Deep connections", "Mindful presence", "Values intimacy"],
    weaknesses: ["Affected by distraction", "Needs a lot of time together"],
    tips: ["Quality over quantity", "Partner might be busy but still love you"],
  },
  C: {
    type: "C",
    title: "Receiving Gifts",
    emoji: "🎁",
    description: "Bahasa cintamu adalah Hadiah! Kamu merasa dicintai melalui thoughtful presents dan gestures yang menunjukkan partner thinking of you. It's the thought that counts!",
    traits: ["Appreciative", "Thoughtful", "Values effort", "Sentimental"],
    strengths: ["Appreciates effort", "Easy to make happy", "Values thoughtfulness"],
    weaknesses: ["Can seem materialistic", "Disappointed if forgotten"],
    tips: ["It's about thought not price", "Express appreciation for other forms too"],
  },
  D: {
    type: "D",
    title: "Physical Touch",
    emoji: "🤗",
    description: "Bahasa cintamu adalah Sentuhan Fisik! Kamu merasa dicintai melalui physical affection - hugs, kisses, holding hands. Touch is your connection!",
    traits: ["Affectionate", "Physical", "Values closeness", "Touch-oriented"],
    strengths: ["Easy to read", "Warm and loving", "Strong physical bond"],
    weaknesses: ["Struggle with distance", "Needs physical presence"],
    tips: ["Partner might be less touchy but still love you", "Respect boundaries too"],
  },
};

export function calculateResult(answers: number[]): typeof results.A {
  const typeCount: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const type = question.options[answerIndex].type;
      typeCount[type] = (typeCount[type] || 0) + 1;
    }
  });
  const dominantType = Object.entries(typeCount).sort((a, b) => b[1] - a[1])[0][0];
  return results[dominantType as keyof typeof results];
}
