// Gaya Cari Parking
// Fun test tentang personality bila cari parking

export const questions = [
  {
    id: 1,
    question: "Sampai mall, parking strategy kau?",
    options: [
      { text: "Pusing sampai dapat dekat entrance!", type: "A" },
      { text: "First spot nampak, ambik terus!", type: "B" },
      { text: "Pergi level atas, sana kosong", type: "C" },
      { text: "Valet je la, malas pening", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Nampak orang nak keluar parking. Apa kau buat?",
    options: [
      { text: "Signal dan tunggu dengan sabar!", type: "A" },
      { text: "Honk sikit untuk inform dia", type: "B" },
      { text: "Tunggu, tapi kalau lama terus jalan", type: "C" },
      { text: "Malas tunggu, cari spot lain", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Parking lot full gila. Response kau?",
    options: [
      { text: "Pusing sampai dapat! Tak give up!", type: "A" },
      { text: "Stress, tapi kena sabar la", type: "B" },
      { text: "Pergi parking lain yang nearby", type: "C" },
      { text: "Cancel plan, balik rumah", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Ada kereta ambik dua parking spot. Feeling kau?",
    options: [
      { text: "Geram gila! Tak bertimbang rasa!", type: "A" },
      { text: "Annoyed tapi move on", type: "B" },
      { text: "Ambik gambar untuk posting", type: "C" },
      { text: "Takpe la, mungkin ada sebab", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Parking tepi jalan risiko saman. Kau macam mana?",
    options: [
      { text: "No way! Saman mahal!", type: "A" },
      { text: "Risk sikit kalau kejap je", type: "B" },
      { text: "Park jauh sikit yang legal", type: "C" },
      { text: "Check dulu ada DBKL tak", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Kawan kata 'parking dekat entrance!' tapi kau jumpa parking jauh. Apa buat?",
    options: [
      { text: "Keep searching untuk dekat!", type: "A" },
      { text: "Ambik yang jauh, exercise sikit", type: "B" },
      { text: "Argue dengan kawan, jauh ke dekat", type: "C" },
      { text: "Ikut je apa kawan cakap", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Reverse parking atau head-in parking?",
    options: [
      { text: "Reverse parking always! Easier keluar!", type: "A" },
      { text: "Head-in je, cepat dan simple", type: "B" },
      { text: "Ikut situation dan space", type: "C" },
      { text: "Mana-mana boleh, tak kisah", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bayar parking hour by hour vs flat rate. Pilihan?",
    options: [
      { text: "Flat rate! Peace of mind!", type: "A" },
      { text: "Hour by hour kalau kejap je", type: "B" },
      { text: "Calculate dulu mana worth it", type: "C" },
      { text: "Tak kisah, bayar je", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Lupa parking kat mana dalam mall besar. Reaction?",
    options: [
      { text: "Pusing semua level sampai jumpa!", type: "A" },
      { text: "Photo location next time la", type: "B" },
      { text: "Press car alarm, follow sound", type: "C" },
      { text: "Panic mode! Mana kereta?!", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Weekend mall parking. Kau sampai pukul berapa?",
    options: [
      { text: "Pagi-pagi before crowd!", type: "A" },
      { text: "Normal timing, redah je crowd", type: "B" },
      { text: "Petang sikit, crowd dah kurang", type: "C" },
      { text: "Avoid weekend, pergi weekday", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Parking Perfectionist",
    emoji: "🎯",
    description: "Kau nak parking perfect! Dekat entrance, easy to exit, tak risk saman. Sanggup pusing 30 minit untuk spot ideal. Patience level 100!",
    traits: ["Persistent", "Patient", "Strategic", "Quality-focused"],
    strengths: ["Best spots always", "No walking far", "Safe choices"],
    weaknesses: ["Time consuming", "Stressful sometimes", "Miss opportunities"],
    tips: ["Sometimes far is okay", "Time is precious too"],
  },
  B: {
    type: "B",
    title: "Practical Parker",
    emoji: "✅",
    description: "Kau practical dengan parking! First reasonable spot, ambik terus. Tak waste time searching for perfect. Efficient dan stress-free!",
    traits: ["Practical", "Efficient", "Decisive", "Low-stress"],
    strengths: ["Save time", "Less stress", "Quick decisions"],
    weaknesses: ["Sometimes walk far", "Miss closer spots"],
    tips: ["You're doing it right", "Efficiency is key"],
  },
  C: {
    type: "C",
    title: "Strategic Navigator",
    emoji: "🗺️",
    description: "Kau ada strategy! Level atas, alternative parking, timing - semua calculated. Smart approach yang avoid crowd dan chaos!",
    traits: ["Strategic", "Smart", "Calculated", "Prepared"],
    strengths: ["Avoid crowds", "Know alternatives", "Smart timing"],
    weaknesses: ["Over-thinking sometimes", "Miss spontaneity"],
    tips: ["Trust instincts more", "Be flexible"],
  },
  D: {
    type: "D",
    title: "Chill Driver",
    emoji: "😎",
    description: "Parking? Tak stress pun. Valet, jauh sikit, whatever works. Life too short untuk stress pasal parking. Go with the flow attitude!",
    traits: ["Relaxed", "Flexible", "Non-stressed", "Easy-going"],
    strengths: ["No parking stress", "Enjoy the journey", "Adaptable"],
    weaknesses: ["Sometimes pay more", "Walk more maybe"],
    tips: ["Strategy sometimes helps", "But you're vibing"],
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
