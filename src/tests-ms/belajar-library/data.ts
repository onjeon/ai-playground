// Gaya Library Anda
// Apa jenis pengguna library anda?

export const questions = [
  {
    id: 1,
    question: "Kenapa anda pergi library?",
    options: [
      { text: "Nak study dengan serius", type: "A" },
      { text: "Nak jumpa kawan sambil study", type: "B" },
      { text: "Nak tidur dalam aircond free", type: "C" },
      { text: "Nak charge phone je", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Spot favorite anda di library?",
    options: [
      { text: "Corner seat yang senyap", type: "A" },
      { text: "Meja besar untuk group study", type: "B" },
      { text: "Sofa yang selesa", type: "C" },
      { text: "Dekat power outlet", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bila nampak kawan di library...",
    options: [
      { text: "Senyum je, tak ganggu", type: "A" },
      { text: "Join study sama-sama", type: "B" },
      { text: "Borak lama-lama", type: "C" },
      { text: "Pura-pura tak nampak", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Berapa lama anda stay di library?",
    options: [
      { text: "Seharian, dari pagi sampai tutup", type: "A" },
      { text: "Beberapa jam, productive", type: "B" },
      { text: "Sejam dua je", type: "C" },
      { text: "Masuk, selfie, keluar", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Buku di library, anda...",
    options: [
      { text: "Pinjam dan baca semua", type: "A" },
      { text: "Pinjam untuk reference", type: "B" },
      { text: "Baca sikit je di situ", type: "C" },
      { text: "Apa buku? Ada WiFi?", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bila ada orang bising di library...",
    options: [
      { text: "Tegur dengan sopan", type: "A" },
      { text: "Pindah tempat lain", type: "B" },
      { text: "Pasang earphone", type: "C" },
      { text: "Join sekali borak", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Anda bawa apa ke library?",
    options: [
      { text: "Buku, notes, stationery lengkap", type: "A" },
      { text: "Laptop dan charger", type: "B" },
      { text: "Phone dan earphone je", type: "C" },
      { text: "Bantal kalau boleh", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Library ideal anda macam mana?",
    options: [
      { text: "Senyap, banyak buku, serius", type: "A" },
      { text: "Modern, ada café, comfortable", type: "B" },
      { text: "Ada sofa dan bean bag", type: "C" },
      { text: "WiFi laju je dah cukup", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Productivity anda di library...",
    options: [
      { text: "Super tinggi! Fokus gila", type: "A" },
      { text: "Okay la, boleh siap kerja", type: "B" },
      { text: "50-50, depends on mood", type: "C" },
      { text: "Lebih banyak scroll phone", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Apa feeling bila masuk library?",
    options: [
      { text: "Semangat nak study!", type: "A" },
      { text: "Okay, let's be productive", type: "B" },
      { text: "Ngantuk... nak tidur", type: "C" },
      { text: "WiFi connect tak ni?", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Library Warrior",
    emoji: "📖",
    description: "Library adalah rumah kedua anda! Focused, disciplined, dan productive. Librarian pun kenal muka anda dah!",
    traits: ["Focused", "Disciplined", "Bookworm", "Productive"],
    strengths: ["Super productive", "Self-motivated", "Consistent"],
    weaknesses: ["Kadang-kadang terlalu serius", "Perlu balance"],
    tips: ["Take breaks", "Socialize sikit"],
  },
  B: {
    type: "B",
    title: "Social Studier",
    emoji: "👥",
    description: "Library untuk anda adalah tempat study dan socialize! Balance antara kerja dan jumpa kawan. Best of both worlds!",
    traits: ["Social", "Balanced", "Collaborative", "Friendly"],
    strengths: ["Good at group work", "Networking", "Supportive friend"],
    weaknesses: ["Mudah distracted", "Bergantung pada orang lain"],
    tips: ["Solo study kadang-kadang", "Set study goals"],
  },
  C: {
    type: "C",
    title: "Library Chiller",
    emoji: "😴",
    description: "Library = aircond percuma + tempat tidur! Anda datang untuk relax lebih dari study. Comfort zone betul!",
    traits: ["Relaxed", "Comfort-seeker", "Easy-going", "Chill"],
    strengths: ["Low stress", "Knows how to relax", "Self-care master"],
    weaknesses: ["Kurang productive", "Easily distracted"],
    tips: ["Set small study goals", "Reward yourself after"],
  },
  D: {
    type: "D",
    title: "WiFi Hunter",
    emoji: "📱",
    description: "Library? Lebih macam charging station dan WiFi spot! Buku? Apa tu? Yang penting phone charged dan internet laju!",
    traits: ["Tech-savvy", "Practical", "Modern", "Efficient"],
    strengths: ["Resourceful", "Knows priorities", "Adaptable"],
    weaknesses: ["Miss out on actual learning", "Phone addiction"],
    tips: ["Cuba baca satu buku", "Digital detox kadang-kadang"],
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
