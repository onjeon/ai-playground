export const questions = [
  {
    id: 1,
    question: "Berapa lama biasanya kamu bales chat?",
    options: [
      { text: "Langsung begitu notif masuk", type: "A" },
      { text: "Tergantung mood dan siapa yang chat", type: "B" },
      { text: "Dibaca dulu, bales nanti", type: "C" },
      { text: "Kadang lupa sampai diingatkan", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Emoji yang paling sering kamu pakai?",
    options: [
      { text: "😂🤣 - Emoji ketawa", type: "A" },
      { text: "🙏👍 - Emoji sopan", type: "B" },
      { text: "❤️🥺 - Emoji ekspresif", type: "C" },
      { text: "Jarang pakai emoji", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bagaimana gaya penulisan chat-mu?",
    options: [
      { text: "Banyak singkatan dan slang (gws, btw, otw)", type: "A" },
      { text: "Formal dan lengkap", type: "B" },
      { text: "Campur-campur sesuai konteks", type: "C" },
      { text: "Singkat dan to the point", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bagaimana kamu memulai chat dengan orang baru?",
    options: [
      { text: "Langsung casual dan friendly", type: "A" },
      { text: "Formal dulu, baru santai", type: "B" },
      { text: "Tunggu mereka yang chat duluan", type: "C" },
      { text: "Tergantung konteksnya", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Reaksimu saat dapat voice note panjang?",
    options: [
      { text: "Dengerin sambil multitasking", type: "A" },
      { text: "Dengerin dengan fokus", type: "B" },
      { text: "Sedikit kesal, prefer text", type: "C" },
      { text: "Skip dulu, dengerin nanti (mungkin)", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bagaimana kamu menutup percakapan?",
    options: [
      { text: "Dengan emoji atau 'ok sip!'", type: "A" },
      { text: "Dengan ucapan formal seperti 'terima kasih'", type: "B" },
      { text: "Langsung stop tanpa penutup", type: "C" },
      { text: "Tergantung siapa yang diajak chat", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Status WA-mu biasanya?",
    options: [
      { text: "Sering update, banyak story", type: "A" },
      { text: "Jarang update, kalau penting saja", type: "B" },
      { text: "Tidak pernah update", type: "C" },
      { text: "Sesekali kalau lagi mood", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bagaimana sikapmu di grup WA?",
    options: [
      { text: "Aktif chat dan kirim meme", type: "A" },
      { text: "Merespon kalau penting", type: "B" },
      { text: "Silent reader, jarang komen", type: "C" },
      { text: "Mute hampir semua grup", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Apa yang kamu lakukan saat dapat forward chain message?",
    options: [
      { text: "Teruskan ke beberapa orang", type: "A" },
      { text: "Baca tapi tidak teruskan", type: "B" },
      { text: "Langsung hapus", type: "C" },
      { text: "Abaikan tanpa baca", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Fitur WA favorit selain chat?",
    options: [
      { text: "Stiker dan GIF", type: "A" },
      { text: "Voice note", type: "B" },
      { text: "Reply langsung ke pesan", type: "C" },
      { text: "Tidak ada yang spesial", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bagaimana kamu handle konflik lewat chat?",
    options: [
      { text: "Selesaikan langsung lewat chat panjang", type: "A" },
      { text: "Ajak ketemu atau telepon", type: "B" },
      { text: "Beri waktu dulu, baru bahas", type: "C" },
      { text: "Hindari, tidak suka konflik", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Typing style kamu saat chat?",
    options: [
      { text: "Banyak pesan pendek beruntun", type: "A" },
      { text: "Satu pesan panjang sekaligus", type: "B" },
      { text: "Singkat padat jelas", type: "C" },
      { text: "Tergantung topiknya", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Chataholic Aktif",
    emoji: "📱",
    description: "Kamu adalah tipe yang super aktif di WA! Selalu online, quick responder, dan chat-mu penuh ekspresi. Kamu adalah nyawa dari setiap grup chat dan orang-orang senang ngobrol denganmu karena responsif!",
    traits: ["Responsif", "Ekspresif", "Social butterfly", "Always connected"],
    strengths: ["Membuat orang merasa dihargai", "Cepat tanggap", "Menyenangkan untuk chat"],
    weaknesses: ["Bisa overwhelming", "Screen time tinggi", "Kadang oversharing"],
    tips: ["Balance online dan offline time", "Tidak semua chat perlu instant reply", "Your responsiveness is appreciated!"],
  },
  B: {
    type: "B",
    title: "Professional Chatter",
    emoji: "💼",
    description: "Kamu adalah chatter yang professional! Chat-mu sopan, terstruktur, dan selalu sesuai konteks. Kamu tahu kapan harus formal dan kapan bisa santai. Orang respect cara komunikasimu!",
    traits: ["Sopan", "Terstruktur", "Kontekstual", "Reliable"],
    strengths: ["Komunikasi yang jelas", "Tidak salah paham", "Professional image"],
    weaknesses: ["Bisa terkesan kaku", "Kadang terlalu formal"],
    tips: ["Sesekali santai juga ok", "Formal tidak harus boring", "Your communication skills are valuable!"],
  },
  C: {
    type: "C",
    title: "Selective Responder",
    emoji: "👀",
    description: "Kamu adalah tipe yang selective dalam chat! Kamu bales kalau memang perlu, dan prefer text singkat yang efisien. Kamu menghargai boundaries dan tidak suka terlalu banyak notifikasi.",
    traits: ["Selective", "Efisien", "Private", "Boundaries clear"],
    strengths: ["Tidak overwhelmed", "Quality over quantity", "Peace of mind"],
    weaknesses: ["Bisa terkesan cuek", "Kadang miss important info"],
    tips: ["Check chat penting secara regular", "Komunikasikan kalau butuh waktu bales", "Your boundaries are valid!"],
  },
  D: {
    type: "D",
    title: "Ghost-Mode Expert",
    emoji: "👻",
    description: "Kamu adalah tipe yang paling relaxed soal chat! Notifikasi bukan prioritas, dan kamu sering lupa bales. Tapi bukan berarti tidak peduli - kamu hanya punya cara komunikasi yang berbeda!",
    traits: ["Relaxed", "Low maintenance", "Occasional", "Present offline"],
    strengths: ["Tidak stress soal chat", "Present in real life", "Not phone addicted"],
    weaknesses: ["Bisa bikin orang worried", "Miss opportunities", "Slow communication"],
    tips: ["Set reminder untuk check important chats", "Komunikasikan preferensi-mu", "Being present is good, but don't disappear completely!"],
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
