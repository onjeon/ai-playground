// Genre Musik Indonesia yang Cocok
// Temukan genre musik Indonesia yang paling menggambarkan kepribadianmu!

export const questions = [
  {
    id: 1,
    question: "Suasana hati sehari-harimu...",
    options: [
      { text: "Santai dan chill", type: "A" },
      { text: "Energik dan semangat", type: "B" },
      { text: "Romantis dan mendalam", type: "C" },
      { text: "Beragam, mood swing", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Cara kamu mengekspresikan perasaan...",
    options: [
      { text: "Lewat kata-kata puitis", type: "A" },
      { text: "Lewat action dan energi", type: "B" },
      { text: "Lewat gesture romantis", type: "C" },
      { text: "Lewat kreativitas dan seni", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Acara hangout ideal...",
    options: [
      { text: "Coffee shop atau beach", type: "A" },
      { text: "Konser atau festival musik", type: "B" },
      { text: "Dinner romantis atau picnic", type: "C" },
      { text: "Art exhibition atau indie gig", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Lirik lagu yang kamu relate...",
    options: [
      { text: "Tentang kehidupan dan filosofi", type: "A" },
      { text: "Tentang semangat dan motivasi", type: "B" },
      { text: "Tentang cinta dan perasaan", type: "C" },
      { text: "Tentang hal-hal unik dan quirky", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Fashion style-mu...",
    options: [
      { text: "Casual dan comfy", type: "A" },
      { text: "Sporty atau streetwear", type: "B" },
      { text: "Elegant dan rapih", type: "C" },
      { text: "Unique dan eksentrik", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Saat sedih, kamu biasanya...",
    options: [
      { text: "Refleksi dan introspeksi", type: "A" },
      { text: "Cari distraksi dengan aktivitas", type: "B" },
      { text: "Curhat dan cari support", type: "C" },
      { text: "Bikin sesuatu yang kreatif", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Circle pertemananmu...",
    options: [
      { text: "Kecil tapi meaningful", type: "A" },
      { text: "Besar dan diverse", type: "B" },
      { text: "Romantis dan intimate", type: "C" },
      { text: "Quirky dan creative people", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Weekend ideal...",
    options: [
      { text: "Santai di rumah atau nature", type: "A" },
      { text: "Party atau hangout rame-rame", type: "B" },
      { text: "Quality time dengan pasangan", type: "C" },
      { text: "Explore tempat baru atau workshop", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Tempo hidup yang kamu suka...",
    options: [
      { text: "Slow dan mindful", type: "A" },
      { text: "Fast dan happening", type: "B" },
      { text: "Medium, ada waktunya romance", type: "C" },
      { text: "Unpredictable dan spontan", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Definisi sukses menurutmu...",
    options: [
      { text: "Inner peace dan kepuasan batin", type: "A" },
      { text: "Achievement dan recognition", type: "B" },
      { text: "Love dan relationship bahagia", type: "C" },
      { text: "Creative fulfillment dan freedom", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Kamu lebih tertarik pada...",
    options: [
      { text: "Meaning dan depth", type: "A" },
      { text: "Energy dan excitement", type: "B" },
      { text: "Emotion dan connection", type: "C" },
      { text: "Originality dan uniqueness", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Social media presence-mu...",
    options: [
      { text: "Jarang posting, observer", type: "A" },
      { text: "Aktif, share activities", type: "B" },
      { text: "Share moments with loved ones", type: "C" },
      { text: "Curated aesthetic atau random", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Folk/Akustik Indonesia",
    emoji: "🎸",
    description: "Kamu adalah jiwa Folk dan Akustik Indonesia! Seperti musik Iwan Fals, Fourtwnty, atau Banda Neira. Kamu menyukai kedamaian, punya pikiran filosofis, dan menghargai simplicity dalam hidup. Puitis dan reflektif!",
    traits: ["Reflektif", "Filosofis", "Peaceful", "Thoughtful"],
    strengths: ["Deep thinker", "Good with words", "Appreciated by close ones"],
    weaknesses: ["Bisa terlalu mellow", "Kadang overthink"],
    tips: ["Sesekali lepas dan have fun", "Balance reflection dengan action"],
  },
  B: {
    type: "B",
    title: "Pop/Rock Indonesia",
    emoji: "🎤",
    description: "Kamu adalah jiwa Pop dan Rock Indonesia! Seperti musik Noah, Sheila On 7, atau Raisa. Energik, mainstream tapi berkualitas, dan bisa connect dengan banyak orang. Life of the party yang relatable!",
    traits: ["Energik", "Sociable", "Mainstream", "Fun"],
    strengths: ["Easy to befriend", "Bring good vibes", "Versatile"],
    weaknesses: ["Bisa terlalu people-pleaser", "Fear of being different"],
    tips: ["Embrace your uniqueness", "It's okay to stand out"],
  },
  C: {
    type: "C",
    title: "R&B/Soul Indonesia",
    emoji: "💜",
    description: "Kamu adalah jiwa R&B dan Soul Indonesia! Seperti musik Tulus, Yura Yunita, atau Ardhito Pramono. Romantis, emosional, dan punya kedalaman perasaan. Cinta dan koneksi adalah bahasa hidupmu!",
    traits: ["Romantis", "Emosional", "Deep", "Affectionate"],
    strengths: ["Great lover", "Emotionally intelligent", "Loyal"],
    weaknesses: ["Bisa terlalu sensitive", "Dependent on love"],
    tips: ["Self-love juga penting", "Independence itu sexy"],
  },
  D: {
    type: "D",
    title: "Indie/Alternatif Indonesia",
    emoji: "🌙",
    description: "Kamu adalah jiwa Indie dan Alternatif Indonesia! Seperti musik Reality Club, Barasuara, atau Hindia. Unik, kreatif, dan tidak takut beda. Kamu adalah trendsetter yang menghargai orisinalitas!",
    traits: ["Kreatif", "Unik", "Non-conformist", "Artistic"],
    strengths: ["Original thinker", "Trendsetter", "Authentic"],
    weaknesses: ["Bisa pretentious", "Sometimes alienating"],
    tips: ["Mainstream ga selalu jelek", "Connect with more people"],
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
