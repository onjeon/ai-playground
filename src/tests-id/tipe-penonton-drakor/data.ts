// Tipe Penonton Drakor Kamu
// Tes ini mengungkap tipe penonton drama Korea seperti apa kamu!

export const questions = [
  {
    id: 1,
    question: "Cara nonton drakor biasanya...",
    options: [
      { text: "Marathon! Selesaikan dalam 1-2 hari", type: "A" },
      { text: "Pelan-pelan, 1-2 episode per hari", type: "B" },
      { text: "Ikuti jadwal tayang, tunggu seminggu", type: "C" },
      { text: "Random, nonton kalau mood", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Genre drakor favorit...",
    options: [
      { text: "Romance dan romcom, heart fluttering!", type: "A" },
      { text: "Thriller dan mystery, bikin tegang", type: "B" },
      { text: "Slice of life dan family drama", type: "C" },
      { text: "Mix semua, tergantung mood", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Reaksi saat adegan romantis...",
    options: [
      { text: "Teriak dan geregetan sendiri!", type: "A" },
      { text: "Senyum-senyum dan feel butterflies", type: "B" },
      { text: "Enjoy tapi calm", type: "C" },
      { text: "Skip kalau terlalu cheesy", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Second lead syndrome...",
    options: [
      { text: "Sering banget! Kasihan second lead", type: "A" },
      { text: "Kadang-kadang kalau karakternya bagus", type: "B" },
      { text: "Jarang, biasanya team main lead", type: "C" },
      { text: "Tidak pernah, accept storyline aja", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Nonton drakor sambil...",
    options: [
      { text: "Full focus, no distraction", type: "A" },
      { text: "Snacking sambil nonton", type: "B" },
      { text: "Multitask, kadang sambil kerja", type: "C" },
      { text: "Live tweet atau chat sama fans lain", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Saat drakor favorit tamat...",
    options: [
      { text: "Post-drama depression parah!", type: "A" },
      { text: "Sedih tapi langsung cari yang baru", type: "B" },
      { text: "Satisfied, move on dengan baik", type: "C" },
      { text: "Rewatch adegan favorit berulang-ulang", type: "D" },
    ],
  },
  {
    id: 7,
    question: "OST drakor...",
    options: [
      { text: "Download semua, playlist full OST!", type: "A" },
      { text: "Save yang catchy aja", type: "B" },
      { text: "Dengar pas nonton aja", type: "C" },
      { text: "Tidak terlalu notice", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Spoiler drakor...",
    options: [
      { text: "HARAM! Hindari semua spoiler", type: "A" },
      { text: "Avoid tapi kadang tidak sengaja kena", type: "B" },
      { text: "Baca review dulu sebelum nonton", type: "C" },
      { text: "Tidak masalah dengan spoiler", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Ngikutin aktor/aktris Korea...",
    options: [
      { text: "Punya bias, nonton semua karyanya!", type: "A" },
      { text: "Appreciate beberapa favorit", type: "B" },
      { text: "Lebih ke cerita daripada cast", type: "C" },
      { text: "Tidak terlalu hafal nama mereka", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Berbagi tentang drakor dengan orang lain...",
    options: [
      { text: "Sering rekomendasikan dan discuss!", type: "A" },
      { text: "Share kalau ada yang cocok", type: "B" },
      { text: "Nonton sendiri, personal hobby", type: "C" },
      { text: "Jarang, orang sekitar tidak nonton drakor", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Subtitle preference...",
    options: [
      { text: "Harus Indonesia, full focus ke visual", type: "A" },
      { text: "English juga oke", type: "B" },
      { text: "Learning Korean, kadang raw", type: "C" },
      { text: "Asal ada subtitle", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Drakor buat kamu adalah...",
    options: [
      { text: "Hidup! Tidak bisa tanpa drakor", type: "A" },
      { text: "Hiburan utama dan comfort", type: "B" },
      { text: "Salah satu hiburan, ada yang lain juga", type: "C" },
      { text: "Casual, nonton sesekali", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Drakor Addict",
    emoji: "💕",
    description: "Kamu adalah pecandu drakor sejati! Hidup terasa hampa tanpa drakor baru untuk ditonton. Sudah hafal semua aktor, punya playlist OST, dan selalu update drama terbaru.",
    traits: ["Passionate", "Dedicated", "Emotional", "Immersed"],
    strengths: ["Deep appreciation", "Good recommendations", "Strong fandom community"],
    weaknesses: ["Post-drama depression real", "Productivity bisa terganggu", "Sleep schedule chaos"],
    tips: ["Balance dengan aktivitas lain", "It's okay to take breaks", "Share passion dengan sesama fans"],
  },
  B: {
    type: "B",
    title: "Casual Drakor Lover",
    emoji: "📺",
    description: "Kamu adalah pecinta drakor yang balanced! Menikmati drakor dengan santai, tidak terlalu obsessive tapi tetap appreciate. Pilih-pilih drama yang worth it.",
    traits: ["Balanced", "Selective", "Appreciative", "Relaxed"],
    strengths: ["Healthy hobby", "Good taste", "Not addicted"],
    weaknesses: ["Might miss some gems", "Not as updated"],
    tips: ["Try different genres", "Join community sesekali"],
  },
  C: {
    type: "C",
    title: "Selective Viewer",
    emoji: "🎬",
    description: "Kamu adalah penonton drakor yang selective! Tidak semua drakor ditonton, hanya yang benar-benar menarik. Quality over quantity adalah mottomu.",
    traits: ["Selective", "Quality-focused", "Independent", "Analytical"],
    strengths: ["Not wasting time on bad dramas", "Strong preferences", "Objective viewer"],
    weaknesses: ["Miss popular dramas", "Hard to get recommendations for"],
    tips: ["Sometimes trashy dramas are fun too", "Give new genres a chance"],
  },
  D: {
    type: "D",
    title: "Casual Watcher",
    emoji: "🍿",
    description: "Kamu adalah penonton drakor yang sangat casual! Nonton sesekali, tidak terlalu deep ke fandom atau follow updates. Drakor adalah salah satu dari banyak hiburan.",
    traits: ["Casual", "Diverse interests", "Not attached", "Flexible"],
    strengths: ["Balanced entertainment diet", "Not addicted", "Open to other content"],
    weaknesses: ["Miss the community aspect", "Might not appreciate fully"],
    tips: ["Try marathon once, might change your mind", "OST bisa jadi gateway"],
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
