// Tahap Cinta Nasi Lemak
// Fun test tentang tahap kecintaan kau dengan nasi lemak

export const questions = [
  {
    id: 1,
    question: "Pagi-pagi buta, kau sanggup beratur panjang untuk nasi lemak famous?",
    options: [
      { text: "Mestilah! Nasi lemak best adalah priority!", type: "A" },
      { text: "Kalau tak terlalu panjang, boleh la", type: "B" },
      { text: "Cari nasi lemak lain yang tak queue", type: "C" },
      { text: "Malas beratur, masak sendiri", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Nasi lemak kau macam mana nak sambal?",
    options: [
      { text: "Sambal extra banjir! Pedas gila!", type: "A" },
      { text: "Sambal normal je, balance", type: "B" },
      { text: "Kurang sambal, tak tahan pedas", type: "C" },
      { text: "Taknak sambal, makan plain", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Lauk wajib dalam nasi lemak kau?",
    options: [
      { text: "Rendang daging atau ayam goreng berempah!", type: "A" },
      { text: "Telur mata dan ikan bilis standard", type: "B" },
      { text: "Sambal sotong atau kerang!", type: "C" },
      { text: "Basic je - timun, kacang, ikan bilis", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Kau overseas setahun. Teringin nasi lemak tak?",
    options: [
      { text: "GILA RINDU! First meal balik Malaysia!", type: "A" },
      { text: "Teringin jugak, cari kedai Malaysia", type: "B" },
      { text: "Boleh tahan, ada makanan lain", type: "C" },
      { text: "Tak sangat, explore local food", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Nasi lemak dan nasi kandar - kau pilih mana?",
    options: [
      { text: "Nasi lemak selamanya!", type: "A" },
      { text: "Susah nak pilih, dua-dua best", type: "B" },
      { text: "Ikut mood hari tu", type: "C" },
      { text: "Nasi kandar lebih best actually", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Berapa kali seminggu kau makan nasi lemak?",
    options: [
      { text: "Every day! Tak bosan!", type: "A" },
      { text: "3-4 kali, regular fix", type: "B" },
      { text: "Sekali seminggu, moderate", type: "C" },
      { text: "Sekali sebulan pun tak sampai", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Nasi lemak bungkus daun pisang vs styrofoam. Preference?",
    options: [
      { text: "Daun pisang wajib! Wangi authentic!", type: "A" },
      { text: "Daun pisang preferred tapi tak kisah", type: "B" },
      { text: "Tak perasan pun beza rasa", type: "C" },
      { text: "Styrofoam okay je, convenience", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Stall nasi lemak favourite kau tutup. Apa jadi?",
    options: [
      { text: "Devastated! Sedih gila! Cari pengganti!", type: "A" },
      { text: "Sedih tapi ada alternatives", type: "B" },
      { text: "Takpe, banyak lagi kedai lain", type: "C" },
      { text: "Tak kisah sangat pun", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Anak/adik tak suka nasi lemak. Reaction kau?",
    options: [
      { text: "WHAT?! Kena educate dia!", type: "A" },
      { text: "Kecewa tapi respect choice", type: "B" },
      { text: "Normal la, tak semua orang suka", type: "C" },
      { text: "Understandable, nasi lemak biasa je", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Kalau nasi lemak jadi orang, kau dan dia apa relationship?",
    options: [
      { text: "Soulmate! Meant to be together!", type: "A" },
      { text: "Best friend forever!", type: "B" },
      { text: "Good friend yang jumpa kadang-kadang", type: "C" },
      { text: "Kenalan je, tak rapat sangat", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Nasi Lemak Soulmate",
    emoji: "🍛",
    description: "Kau dan nasi lemak adalah jodoh! Tak boleh hidup tanpa, teringin setiap hari, sanggup beratur panjang. Nasi lemak bukan makanan - ia adalah cinta sejati!",
    traits: ["Dedicated", "Passionate", "Traditional", "Purist"],
    strengths: ["Know best nasi lemak spots", "True Malaysian", "Appreciate tradition"],
    weaknesses: ["Might be too obsessed", "Health concerns"],
    tips: ["Balance with other foods", "Sambal pedas jaga perut"],
  },
  B: {
    type: "B",
    title: "Nasi Lemak Lover",
    emoji: "❤️",
    description: "Kau suka nasi lemak dengan healthy amount! Appreciate tapi tak obsess. Regular fix tapi still enjoy variety. Perfect balance of love!",
    traits: ["Balanced", "Appreciative", "Moderate", "Flexible"],
    strengths: ["Healthy relationship with food", "Enjoy variety", "Not addicted"],
    weaknesses: ["Might miss best experiences", "Not passionate enough"],
    tips: ["Try famous spots more", "Explore different styles"],
  },
  C: {
    type: "C",
    title: "Casual Nasi Lemak Fan",
    emoji: "👍",
    description: "Nasi lemak okay untuk kau, tapi bukan must-have. Makan bila convenient, tak teringin sangat. Normal relationship - nothing too intense!",
    traits: ["Casual", "Flexible", "Non-obsessive", "Open-minded"],
    strengths: ["No food addiction", "Diverse palate", "Easy to please"],
    weaknesses: ["Miss out on nasi lemak culture", "Seen as tidak patriotik"],
    tips: ["Give it more chance", "Try premium nasi lemak"],
  },
  D: {
    type: "D",
    title: "Nasi Lemak Neutral",
    emoji: "🤷",
    description: "Nasi lemak untuk kau adalah just another food. Tak special, tak hate. Boleh makan, boleh tak. Rare species in Malaysia ni!",
    traits: ["Neutral", "Unbothered", "Different taste", "Independent"],
    strengths: ["No cravings", "Diverse food choices", "Not swayed by hype"],
    weaknesses: ["Missing Malaysian experience", "Might be alien"],
    tips: ["Are you okay?", "Try authentic nasi lemak kampung"],
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
