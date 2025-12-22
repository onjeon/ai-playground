// Tipe Foodie Nusantara Kamu
// Kamu tipe pecinta kuliner Indonesia yang kayak gimana?

export const questions = [
  {
    id: 1,
    question: "Saat cari tempat makan, prioritasmu...",
    options: [
      { text: "Rasa authentic, ga peduli tempat", type: "A" },
      { text: "Balance rasa dan ambiance", type: "B" },
      { text: "Viral dan trending, harus coba", type: "C" },
      { text: "Hidden gem yang belum banyak tau", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Level pedas yang kamu handle...",
    options: [
      { text: "Extreme! Sambal apa aja hayuk", type: "A" },
      { text: "Sedang, yang masih nikmat", type: "B" },
      { text: "Tergantung mood dan makanan", type: "C" },
      { text: "Tidak pedas, pure taste", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Kuliner Nusantara favorit...",
    options: [
      { text: "Masakan Padang, kaya rasa dan rempah", type: "A" },
      { text: "Masakan Jawa, manis dan gurih", type: "B" },
      { text: "Masakan kekinian, fusion", type: "C" },
      { text: "Masakan daerah yang rare", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Foto makanan sebelum makan?",
    options: [
      { text: "Langsung makan, keburu laper", type: "A" },
      { text: "Quick snap aja", type: "B" },
      { text: "Proper photoshoot dulu", type: "C" },
      { text: "Foto kalau memang worth it", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Budget untuk culinary experience...",
    options: [
      { text: "Asal enak, berapapun", type: "A" },
      { text: "Worth it kalau special occasion", type: "B" },
      { text: "Invest for content dan experience", type: "C" },
      { text: "Quality over price", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Saat traveling, kuliner adalah...",
    options: [
      { text: "Main agenda! Must try local food", type: "A" },
      { text: "Penting tapi bukan satu-satunya", type: "B" },
      { text: "Photo ops dan story material", type: "C" },
      { text: "Way to understand culture", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Review makanan yang kamu percaya...",
    options: [
      { text: "Lidah sendiri, coba dulu baru judge", type: "A" },
      { text: "Rekomendasi teman yang seleranya mirip", type: "B" },
      { text: "Food blogger dan influencer", type: "C" },
      { text: "Research mendalam sebelum coba", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Warung pinggir jalan vs restoran...",
    options: [
      { text: "Warung! Authentic dan murah", type: "A" },
      { text: "Tergantung situasi dan mood", type: "B" },
      { text: "Restoran, proper experience", type: "C" },
      { text: "Yang penting makanannya berkualitas", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Makanan yang belum pernah dicoba...",
    options: [
      { text: "Challenge accepted! Harus coba", type: "A" },
      { text: "Coba kalau ada kesempatan", type: "B" },
      { text: "Coba kalau lagi trending", type: "C" },
      { text: "Research dulu baru decide", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Definisi makanan enak...",
    options: [
      { text: "Bumbu dan rempah yang kuat", type: "A" },
      { text: "Balance semua elemen", type: "B" },
      { text: "Presentasi dan taste seimbang", type: "C" },
      { text: "Authentic dan traditional recipe", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Saat makan, yang paling dinikmati...",
    options: [
      { text: "The food itself, pure enjoyment", type: "A" },
      { text: "Suasana dan company", type: "B" },
      { text: "The whole experience", type: "C" },
      { text: "Story behind the food", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Kuliner Indonesia menurutmu...",
    options: [
      { text: "The best, no debate", type: "A" },
      { text: "Salah satu yang terbaik", type: "B" },
      { text: "Great untuk content", type: "C" },
      { text: "Treasure yang perlu dilestarikan", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Foodie Petualang",
    emoji: "🔥",
    description: "Kamu adalah Foodie Petualang! Lidahmu adalah kompas, perutmu adalah guidance. Kamu tidak peduli tempat atau penampilan, yang penting rasa authentic dan pengalaman kuliner genuine. Warung tenda? No problem!",
    traits: ["Adventurous", "Authentic seeker", "Open-minded", "Passion for taste"],
    strengths: ["Find best hidden gems", "Appreciate real flavors", "Great food companion"],
    weaknesses: ["Bisa ignore hygiene", "Terlalu fokus rasa"],
    tips: ["Safety dan hygiene tetap penting", "Share discoveries dengan orang lain"],
  },
  B: {
    type: "B",
    title: "Foodie Balanced",
    emoji: "⚖️",
    description: "Kamu adalah Foodie Balanced! Kamu menghargai rasa dan pengalaman secara keseluruhan. Bukan yang paling extreme tapi selalu enjoy makanan dengan cara yang tepat. Smart foodie yang tau apa yang mau!",
    traits: ["Balanced", "Appreciative", "Smart choices", "Versatile"],
    strengths: ["Enjoy in any situation", "Good recommendations", "Flexible"],
    weaknesses: ["Bisa terlalu safe", "Miss extreme experiences"],
    tips: ["Sesekali keluar comfort zone", "Try something wild"],
  },
  C: {
    type: "C",
    title: "Foodie Content Creator",
    emoji: "📱",
    description: "Kamu adalah Foodie Content Creator! Makanan bukan cuma untuk dimakan tapi juga untuk dishare. Kamu selalu update tempat makan trending dan punya feed kuliner yang aesthetic. Influencer in the making!",
    traits: ["Trendy", "Social media savvy", "Aesthetic-focused", "Influencer"],
    strengths: ["Know all trending spots", "Great food photos", "Large network"],
    weaknesses: ["Taste secondary to looks", "FOMO driven"],
    tips: ["Sometimes just enjoy tanpa HP", "Quality over virality"],
  },
  D: {
    type: "D",
    title: "Foodie Researcher",
    emoji: "📚",
    description: "Kamu adalah Foodie Researcher! Bagi kamu, makanan adalah budaya dan sejarah. Kamu tertarik dengan story di balik setiap hidangan dan senang mencari kuliner langka yang hampir punah. Cultural food preservationist!",
    traits: ["Curious", "Knowledgeable", "Cultural appreciator", "Preservationist"],
    strengths: ["Deep food knowledge", "Appreciate heritage", "Thoughtful eater"],
    weaknesses: ["Bisa terlalu analytical", "Miss spontaneous joy"],
    tips: ["Kadang makan aja tanpa mikir", "Fun juga penting"],
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
