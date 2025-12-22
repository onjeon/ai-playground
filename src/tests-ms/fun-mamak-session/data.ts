// Gaya Lepak Mamak Kau
// Fun test tentang personality lepak mamak

export const questions = [
  {
    id: 1,
    question: "Bila kau sampai mamak, apa first thing kau buat?",
    options: [
      { text: "Terus cari meja strategic dekat TV", type: "A" },
      { text: "Cari spot quiet corner", type: "B" },
      { text: "Duduk je mana-mana ada seat", type: "C" },
      { text: "Survey dulu semua meja baru decide", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Order minuman biasa kau kat mamak?",
    options: [
      { text: "Teh tarik kurang manis!", type: "A" },
      { text: "Air kosong je, nak diet", type: "B" },
      { text: "Milo dinosaur dengan extra susu", type: "C" },
      { text: "Cuba benda baru setiap kali", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Kawan lambat 30 minit. Apa kau buat?",
    options: [
      { text: "Dah start makan, lapar wei!", type: "A" },
      { text: "Order air dulu, scroll social media", type: "B" },
      { text: "Tunggu sabar, sembang dengan abang mamak", type: "C" },
      { text: "Spam WhatsApp 'mana kau?!'", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Ada orang kat meja sebelah tengok bola kuat gila. Reaction?",
    options: [
      { text: "Join tengok sekali! Layan!", type: "A" },
      { text: "Pakai earphone, buat hal sendiri", type: "B" },
      { text: "Tak kisah, mamak memang macam ni", type: "C" },
      { text: "Pindah meja kalau annoying", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bila sampai bill, siapa bayar?",
    options: [
      { text: "Rebut nak bayar! Belanja kawan!", type: "A" },
      { text: "Split equally, fair and square", type: "B" },
      { text: "Bayar ikut apa masing-masing order", type: "C" },
      { text: "Main game kalah bayar", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Roti canai kau macam mana?",
    options: [
      { text: "Roti canai biasa dengan kuah dhal banjir!", type: "A" },
      { text: "Roti telur je, simple", type: "B" },
      { text: "Roti tissue for the gram!", type: "C" },
      { text: "Mee goreng mamak, tak makan roti", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Lepak mamak sampai pukul berapa biasanya?",
    options: [
      { text: "Sampai mamak tutup baru balik!", type: "A" },
      { text: "1-2 jam max, ada life lain", type: "B" },
      { text: "Ikut flow, kalau syok stay lama", type: "C" },
      { text: "Quick 30 minit je, grab and go", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Abang mamak salah order. Apa tindakan?",
    options: [
      { text: "Tegur baik-baik, minta tukar", type: "A" },
      { text: "Makan je la, malas nak komplen", type: "B" },
      { text: "Minta discount sikit", type: "C" },
      { text: "Ambik gambar dulu, complain kemudian", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Topik sembang paling best kat mamak?",
    options: [
      { text: "Bola dan sports!", type: "A" },
      { text: "Gossip dan drama hidup", type: "B" },
      { text: "Politik dan isu semasa", type: "C" },
      { text: "Plan trip dan adventure", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Mamak dah full, kena share meja. Okay tak?",
    options: [
      { text: "No problem! Dapat kawan baru!", type: "A" },
      { text: "Takpe la, jangan kacau je", type: "B" },
      { text: "Prefer cari mamak lain", type: "C" },
      { text: "Okay tapi awkward sikit la", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Raja Mamak",
    emoji: "👑",
    description: "Kau ni legend mamak! Semua abang mamak kenal kau. Meja favorite ada, order hafal, lepak sampai subuh pun boleh. Mamak is your second home!",
    traits: ["Social butterfly", "Loyal customer", "Night owl", "Generous"],
    strengths: ["Networking skills", "Good stamina", "Abang mamak kenal"],
    weaknesses: ["Spend banyak kat mamak", "Sleep schedule hancur"],
    tips: ["Jaga kesihatan tau", "Kurangkan teh tarik malam"],
  },
  B: {
    type: "B",
    title: "Lepak Minimalist",
    emoji: "☕",
    description: "Kau lepak mamak untuk rehat dan reflect. Bukan untuk bersosialisasi sangat. Suka corner seat, order simple, enjoy me-time. Mamak is your zen place!",
    traits: ["Introvert", "Thoughtful", "Low-maintenance", "Independent"],
    strengths: ["Self-aware", "Budget conscious", "Productive alone time"],
    weaknesses: ["Kadang antisocial", "Miss out on bonding"],
    tips: ["Sekali-sekala join gang lepak", "Socializing pun best"],
  },
  C: {
    type: "C",
    title: "Flexible Lepaker",
    emoji: "🌊",
    description: "Kau ni go with the flow! Apa-apa pun boleh, mana-mana mamak pun jadi. Tak fussy, easy-going, semua orang suka lepak dengan kau!",
    traits: ["Adaptable", "Easygoing", "Friendly", "Chill"],
    strengths: ["No drama", "Everyone's friend", "Flexible schedule"],
    weaknesses: ["Kadang tak ada preference", "Ikut je orang"],
    tips: ["Voice out apa kau nak", "It's okay to have opinion"],
  },
  D: {
    type: "D",
    title: "Mamak Explorer",
    emoji: "🔍",
    description: "Kau suka explore! Try mamak baru, order benda pelik, review macam food critic. Setiap visit adalah adventure. Mamak biasa? Boring!",
    traits: ["Adventurous", "Curious", "Foodie", "Spontaneous"],
    strengths: ["Open minded", "Good taste", "Fun to be with"],
    weaknesses: ["Tak pernah puas", "Susah nak decide"],
    tips: ["Sometimes classics are best", "Loyal customer dapat special treatment"],
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
