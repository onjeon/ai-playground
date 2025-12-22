// Gaya Guna Air Cond
// Fun test tentang personality based on AC usage

export const questions = [
  {
    id: 1,
    question: "Bila kau sampai rumah panas, first thing buat?",
    options: [
      { text: "ON aircond full blast 16°C!", type: "A" },
      { text: "Bukak tingkap dulu, aircond last resort", type: "B" },
      { text: "Kipas je cukup, jimat elektrik", type: "C" },
      { text: "Mandi dulu baru decide", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Setting temperature aircond biasa kau?",
    options: [
      { text: "16-18°C! Sejuk macam winter!", type: "A" },
      { text: "22-24°C, comfortable range", type: "B" },
      { text: "26°C above, jimat bil TNB", type: "C" },
      { text: "Auto je, malas nak set", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Tidur malam, aircond kau macam mana?",
    options: [
      { text: "On full malam sampai pagi!", type: "A" },
      { text: "Set timer 2-3 jam", type: "B" },
      { text: "Kipas je cukup, save electricity", type: "C" },
      { text: "Ikut cuaca, kadang on kadang tak", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Kawan komplen sejuk bila datang rumah kau. Response?",
    options: [
      { text: "Bagi selimut, tak nak kurangkan!", type: "A" },
      { text: "Okay, naikkan sikit temperature", type: "B" },
      { text: "Normal je suhu ni, kawan yang pelik", type: "C" },
      { text: "Off kan aircond, guna kipas", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bil elektrik naik gila bulan ni. Apa kau buat?",
    options: [
      { text: "Biar la, comfort lebih penting!", type: "A" },
      { text: "Kurangkan sikit usage, tapi still guna", type: "B" },
      { text: "Drastically cut, guna kipas lebih", type: "C" },
      { text: "Check berapa aircond contribute, analyze", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Aircond kereta kau setting macam mana?",
    options: [
      { text: "Max cold sebelum masuk!", type: "A" },
      { text: "Normal setting, comfortable", type: "B" },
      { text: "Kadang bukak tingkap je", type: "C" },
      { text: "Ikut passenger comfort level", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Pagi-pagi sejuk natural, aircond kau?",
    options: [
      { text: "Still on! Double sejuk best!", type: "A" },
      { text: "Off la, natural dah cukup", type: "B" },
      { text: "Memang jarang on pagi", type: "C" },
      { text: "Check temperature dulu baru decide", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Inverter aircond vs non-inverter. Opinion kau?",
    options: [
      { text: "Inverter best! Worth the investment!", type: "A" },
      { text: "Ada kelebihan tapi mahal", type: "B" },
      { text: "Normal aircond pun okay je", type: "C" },
      { text: "Research dulu spec sebelum decide", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Kau stay hotel, aircond dia tak sejuk sangat. Reaction?",
    options: [
      { text: "Call front desk complain terus!", type: "A" },
      { text: "Set lowest temperature, hope for best", type: "B" },
      { text: "Takpe la, bearable je", type: "C" },
      { text: "Bukak tingkap pulak, fresh air", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Global warming worries kau pasal aircond usage?",
    options: [
      { text: "Sikit, tapi kena sejuk jugak", type: "A" },
      { text: "Yes, cuba balance usage", type: "B" },
      { text: "Very concerned, minimize aircond", type: "C" },
      { text: "Aware tapi tak sampai change habit", type: "D" },
    ],
    },
];

export const results = {
  A: {
    type: "A",
    title: "Aircond Addict",
    emoji: "❄️",
    description: "Kau ni tak boleh hidup tanpa aircond! Sejuk adalah life, 16°C adalah perfect. Bil TNB tinggi? Worth it untuk comfort! Penguin dalam human form!",
    traits: ["Cold-loving", "Comfort-first", "High maintenance", "Winter soul"],
    strengths: ["Always comfortable", "Good sleep quality", "No sweating"],
    weaknesses: ["High electricity bill", "Environment impact", "Dependent"],
    tips: ["Try 24°C sometimes", "Bil TNB akan happy"],
  },
  B: {
    type: "B",
    title: "Balanced AC User",
    emoji: "🌡️",
    description: "Kau guna aircond dengan bijak! Balance antara comfort dan bil. Comfortable temperature, timer setting - perfect middle ground!",
    traits: ["Practical", "Balanced", "Cost-conscious", "Moderate"],
    strengths: ["Reasonable bills", "Still comfortable", "Good balance"],
    weaknesses: ["Sometimes too conservative", "Miss extreme comfort"],
    tips: ["You're doing great", "Keep the balance"],
  },
  C: {
    type: "C",
    title: "Natural Cooler",
    emoji: "🌿",
    description: "Kau prefer natural cooling! Kipas, bukak tingkap, cross ventilation. Aircond adalah last resort. Environmental warrior dan bil TNB sihat!",
    traits: ["Eco-friendly", "Cost-saver", "Adaptable", "Nature-lover"],
    strengths: ["Low electricity bill", "Environment friendly", "Strong heat tolerance"],
    weaknesses: ["Might suffer in extreme heat", "Guests uncomfortable"],
    tips: ["AC okay sometimes", "Treat yourself on hot days"],
  },
  D: {
    type: "D",
    title: "Situational User",
    emoji: "🔄",
    description: "Kau flexible dengan AC usage! Ikut situasi, cuaca, dan company. Analyze before decide, adaptable dengan semua conditions. Smart approach!",
    traits: ["Flexible", "Analytical", "Considerate", "Adaptable"],
    strengths: ["Smart decisions", "Consider others", "No addiction"],
    weaknesses: ["Sometimes indecisive", "No strong preference"],
    tips: ["Having preference is okay", "Trust your comfort"],
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
