// Macam Mana Kau Rate Grab Driver?
// Fun test tentang gaya kau rate Grab driver

export const questions = [
  {
    id: 1,
    question: "Driver lambat 5 minit sampai pickup point. Apa kau buat?",
    options: [
      { text: "Cancel terus, cari driver lain!", type: "A" },
      { text: "Tunggu je la, maybe traffic jam", type: "B" },
      { text: "Chat tanya dia dah sampai mana", type: "C" },
      { text: "Buat bodoh je, scroll TikTok", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Driver pasang lagu dangdut kuat gila. Reaksi kau?",
    options: [
      { text: "Minta tukar lagu atau kecilkan!", type: "A" },
      { text: "Layan je, ikut vibe driver", type: "B" },
      { text: "Pakai earphone sendiri", type: "C" },
      { text: "Nyanyi sama sekali!", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Driver ajak sembang pasal politik. Macam mana?",
    options: [
      { text: "Terus bagi signal tak nak cakap", type: "A" },
      { text: "Layan sikit, lepas tu senyap", type: "B" },
      { text: "Reply pendek-pendek je", type: "C" },
      { text: "Semangat berdebat sampai destinasi!", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Kereta driver ada bau pelik sikit. Apa reaction?",
    options: [
      { text: "Terus bagi 3 star, mention dalam review", type: "A" },
      { text: "Tahan nafas, dah nak sampai pun", type: "B" },
      { text: "Minta bukak tingkap", type: "C" },
      { text: "Tarik nafas dalam, dah biasa", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Driver ambik jalan jauh sikit dari biasa. Kau rasa macam mana?",
    options: [
      { text: "Terus tegur! 'Bang, jalan ni lagi jauh!'", type: "A" },
      { text: "Check Google Maps, kalau salah baru tegur", type: "B" },
      { text: "Diam je, maybe dia tau jalan lagi best", type: "C" },
      { text: "Tak perasan pun, tengok phone je", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Driver offer gula-gula dan air mineral. Apa kau buat?",
    options: [
      { text: "Tak ambik, tak nak hutang budi", type: "A" },
      { text: "Ambik dan cakap terima kasih", type: "B" },
      { text: "Tolak dengan sopan", type: "C" },
      { text: "Ambik semua! Rezeki jangan ditolak!", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Driver drive macam F1 racer. Feeling kau?",
    options: [
      { text: "Terus minta slow down! Nyawa penting!", type: "A" },
      { text: "Genggam seat belt kuat-kuat", type: "B" },
      { text: "Diam je, pasrah dengan takdir", type: "C" },
      { text: "Syok! Cepat sampai!", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Sampai destinasi, driver minta 5 star. Apa response kau?",
    options: [
      { text: "Bagi ikut service sebenar je", type: "A" },
      { text: "Okay, bagi 5 star sebab kesian", type: "B" },
      { text: "Senyum je, decide kemudian", type: "C" },
      { text: "Mestilah bagi! Support driver!", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Driver cerita pasal life struggle dia. Kau macam mana?",
    options: [
      { text: "Tak layan sangat, bukan kaunselor", type: "A" },
      { text: "Dengar dan bagi nasihat sikit", type: "B" },
      { text: "Angguk-angguk je, tunjuk empathy", type: "C" },
      { text: "Terharu sampai nak bagi tip lebih!", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Driver kata 'dah dekat, cancel and bayar cash boleh?' Apa jawapan?",
    options: [
      { text: "No way! Report terus!", type: "A" },
      { text: "Tolak dengan sopan, explain kenapa", type: "B" },
      { text: "Geleng kepala je", type: "C" },
      { text: "Consider kalau harga sama", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Strict Reviewer",
    emoji: "⭐",
    description: "Kau ni jenis yang serius pasal rating! Kalau service tak up to standard, memang kena la. Tapi fair la, bukan simply hate. Kau expect quality dan tak segan nak voice out!",
    traits: ["Tegas", "Demanding", "Fair", "Vocal"],
    strengths: ["High standards", "Honest feedback", "Tak senang kena tipu"],
    weaknesses: ["Kadang-kadang terlalu strict", "Driver takut jumpa kau"],
    tips: ["Remember driver pun manusia", "Bagi chance sikit kalau first mistake"],
  },
  B: {
    type: "B",
    title: "The Understanding Passenger",
    emoji: "🤝",
    description: "Kau ni jenis yang understanding! Faham driver pun ada struggle. Bagi rating ikut situasi, tak simply judge. Balanced dan considerate - driver suka passenger macam kau!",
    traits: ["Understanding", "Balanced", "Empathetic", "Fair"],
    strengths: ["Good judgement", "Considerate", "Bagi feedback konstruktif"],
    weaknesses: ["Kadang-kadang terlalu baik", "Susah nak komplain"],
    tips: ["It's okay to voice out kalau service teruk", "Jangan simpan perasaan"],
  },
  C: {
    type: "C",
    title: "The Chill Rider",
    emoji: "😎",
    description: "Kau ni jenis yang super chill! Apa-apa pun boleh, jarang nak komplen. Bagi 5 star sebab malas nak fikir. Relax je, hidup ni pendek!",
    traits: ["Laidback", "Easy-going", "Non-confrontational", "Chill"],
    strengths: ["Stress-free rides", "Driver suka kau", "Tak pernah drama"],
    weaknesses: ["Kadang-kadang terlalu passive", "Service teruk pun bagi 5 star"],
    tips: ["Okay to speak up bila perlu", "Feedback tu penting untuk improve"],
  },
  D: {
    type: "D",
    title: "The Vibe Master",
    emoji: "🎉",
    description: "Kau ni jenis yang lepak gila! Naik Grab macam naik kereta kawan. Sembang, nyanyi, semua boleh. Driver jadi bestie! Rating? 5 star sebab good vibes!",
    traits: ["Friendly", "Fun", "Adventurous", "Social"],
    strengths: ["Buat driver happy", "Every ride adalah experience", "Spread good energy"],
    weaknesses: ["Kadang-kadang distract driver", "Rating tak objective"],
    tips: ["Safety first tau", "Biar driver fokus jugak"],
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
