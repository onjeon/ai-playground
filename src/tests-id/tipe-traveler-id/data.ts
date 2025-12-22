// Tipe Traveler Indonesia
// Kamu tipe traveler yang kayak gimana sih?

export const questions = [
  {
    id: 1,
    question: "Destinasi liburan impianmu di Indonesia...",
    options: [
      { text: "Raja Ampat, diving surga", type: "A" },
      { text: "Bali, lengkap ada semua", type: "B" },
      { text: "Yogyakarta, budaya dan sejarah", type: "C" },
      { text: "Bandung, culinary dan staycation", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Budget liburan...",
    options: [
      { text: "Worth it untuk experience epic", type: "A" },
      { text: "Flexible, sesuai kebutuhan", type: "B" },
      { text: "Hemat tapi tetap meaningful", type: "C" },
      { text: "Cari deals dan promo terbaik", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Packing style...",
    options: [
      { text: "Minimal, gear specific untuk adventure", type: "A" },
      { text: "Lengkap, siap untuk segala situasi", type: "B" },
      { text: "Simpel, baju nyaman dan kamera", type: "C" },
      { text: "Fashion items untuk foto-foto", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Aktivitas utama saat liburan...",
    options: [
      { text: "Adventure: hiking, diving, rafting", type: "A" },
      { text: "Mix everything: beach, temple, party", type: "B" },
      { text: "Cultural immersion dan local experience", type: "C" },
      { text: "Cafe hopping dan photo spots", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Akomodasi yang dipilih...",
    options: [
      { text: "Homestay atau camping, dekat alam", type: "A" },
      { text: "Hotel atau resort yang nyaman", type: "B" },
      { text: "Guest house atau homestay lokal", type: "C" },
      { text: "Instagrammable villa atau boutique hotel", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Transportasi di destinasi...",
    options: [
      { text: "Sewa motor, freedom to explore", type: "A" },
      { text: "Tour package atau private driver", type: "B" },
      { text: "Public transport, lebih authentic", type: "C" },
      { text: "Grab/Gojek, praktis dan affordable", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Kuliner saat traveling...",
    options: [
      { text: "Local food di warung, authentic taste", type: "A" },
      { text: "Mix: fine dining dan street food", type: "B" },
      { text: "Street food dan pasar tradisional", type: "C" },
      { text: "Cafe aesthetic dan trending spots", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Dokumentasi perjalanan...",
    options: [
      { text: "GoPro untuk action shots", type: "A" },
      { text: "DSLR atau mirrorless, proper photos", type: "B" },
      { text: "HP cukup, moment lebih penting", type: "C" },
      { text: "Ring light ready, content is king", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Travel companion ideal...",
    options: [
      { text: "Adventure buddy yang siap tantangan", type: "A" },
      { text: "Group rame-rame, more fun", type: "B" },
      { text: "Solo atau 1-2 orang, lebih intimate", type: "C" },
      { text: "Yang bisa jadi photographer pribadi", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Souvenir yang dibeli...",
    options: [
      { text: "Gear atau equipment", type: "A" },
      { text: "Oleh-oleh standar untuk keluarga", type: "B" },
      { text: "Kerajinan lokal atau batik", type: "C" },
      { text: "Barang aesthetic untuk room decor", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Definisi liburan sukses...",
    options: [
      { text: "Adrenaline rush dan memories epic", type: "A" },
      { text: "Refreshed dan happy", type: "B" },
      { text: "New perspectives dan insight", type: "C" },
      { text: "Feed Instagram penuh content", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Hidden gem atau tourist spot?",
    options: [
      { text: "Hidden gem, avoid crowds", type: "A" },
      { text: "Both, complete experience", type: "B" },
      { text: "Hidden gem, more authentic", type: "C" },
      { text: "Tourist spot, more photogenic", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Adventure Traveler",
    emoji: "🏔️",
    description: "Kamu adalah Adventure Traveler! Liburan tanpa adrenaline bukan liburan namanya. Hiking gunung, diving, atau rafting adalah definisi fun menurutmu. Indonesia dengan alamnya yang epic adalah playground-mu!",
    traits: ["Adventurous", "Brave", "Active", "Nature lover"],
    strengths: ["Epic experiences", "Great fitness", "Unique stories"],
    weaknesses: ["Bisa mengabaikan safety", "Budget bisa bengkak"],
    tips: ["Safety first tetap penting", "Sesekali santai juga perlu"],
  },
  B: {
    type: "B",
    title: "Balanced Traveler",
    emoji: "⚖️",
    description: "Kamu adalah Balanced Traveler! Mix antara adventure, culture, dan relaxation. Kamu tau cara menikmati semua aspek liburan tanpa extreme ke satu arah. Smart traveler yang tau cara enjoy!",
    traits: ["Balanced", "Flexible", "Open-minded", "Smart planner"],
    strengths: ["Complete experience", "Good at planning", "Appreciate everything"],
    weaknesses: ["Bisa terlalu packed", "Jack of all trades"],
    tips: ["Kadang fokus satu hal aja", "Downtime juga penting"],
  },
  C: {
    type: "C",
    title: "Cultural Traveler",
    emoji: "🏛️",
    description: "Kamu adalah Cultural Traveler! Traveling adalah tentang memahami budaya, sejarah, dan cara hidup lokal. Kamu lebih tertarik pengalaman authentic daripada tourist traps. Deep traveler!",
    traits: ["Curious", "Respectful", "Thoughtful", "Open-minded"],
    strengths: ["Meaningful experiences", "Connect with locals", "Learn a lot"],
    weaknesses: ["Bisa miss tourist highlights", "Kadang terlalu serious"],
    tips: ["Tourist spot kadang worth it kok", "Fun juga penting"],
  },
  D: {
    type: "D",
    title: "Instagram Traveler",
    emoji: "📸",
    description: "Kamu adalah Instagram Traveler! Aesthetic adalah prioritas. Setiap spot adalah potential content dan outfit harus on point. Liburanmu tidak lengkap tanpa feed yang keren!",
    traits: ["Aesthetic-focused", "Trendy", "Social media savvy", "Style-conscious"],
    strengths: ["Great content", "Know best spots", "Always photo-ready"],
    weaknesses: ["Bisa miss real experience", "Terlalu fokus HP"],
    tips: ["Sesekali put down the phone", "Experience > content"],
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
