export const questions = [
  {
    id: 1,
    question: "Bagaimana caramu mengekspresikan emosi?",
    options: [
      { text: "Lewat meme dan emoji", type: "A" },
      { text: "Curhat di story dengan lirik lagu", type: "B" },
      { text: "Bikin konten TikTok", type: "C" },
      { text: "Chat personal ke bestie", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Apa yang paling sering kamu pakai untuk komunikasi?",
    options: [
      { text: "Voice note atau voice chat", type: "A" },
      { text: "Text dengan banyak singkatan", type: "B" },
      { text: "Video call atau meet up langsung", type: "C" },
      { text: "DM di sosmed", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Apa pendapatmu tentang hustle culture?",
    options: [
      { text: "Penting untuk sukses", type: "A" },
      { text: "Work-life balance lebih penting", type: "B" },
      { text: "Kerja smart, bukan kerja keras", type: "C" },
      { text: "Yang penting passion, bukan uang", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Platform favorit untuk scroll?",
    options: [
      { text: "TikTok - endless entertainment", type: "A" },
      { text: "Instagram - stalking dan aesthetic", type: "B" },
      { text: "Twitter/X - drama dan trending", type: "C" },
      { text: "YouTube - long-form content", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bagaimana kamu menghadapi kritik dari orang tua?",
    options: [
      { text: "Dengerin tapi tetap jalan dengan caraku", type: "A" },
      { text: "Coba jelaskan perspektifku dengan sabar", type: "B" },
      { text: "Ignore, generasi mereka beda", type: "C" },
      { text: "Pertimbangkan tapi tetap ambil keputusan sendiri", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Apa yang paling bikin kamu anxious?",
    options: [
      { text: "Masa depan yang tidak pasti", type: "A" },
      { text: "FOMO - Fear of Missing Out", type: "B" },
      { text: "Ekspektasi sosial dan perbandingan", type: "C" },
      { text: "Climate change dan isu global", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Apa skill yang menurutmu paling penting sekarang?",
    options: [
      { text: "Digital literacy dan sosmed", type: "A" },
      { text: "Financial literacy dan investasi", type: "B" },
      { text: "Networking dan personal branding", type: "C" },
      { text: "Mental health awareness", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bagaimana pandanganmu tentang relationship?",
    options: [
      { text: "Mending sendiri dulu, fokus self-growth", type: "A" },
      { text: "Cari yang serius, no games", type: "B" },
      { text: "Go with the flow, ga maksa", type: "C" },
      { text: "Bestie > pacar", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Apa yang paling kamu value dalam hidup?",
    options: [
      { text: "Authenticity - jadi diri sendiri", type: "A" },
      { text: "Experiences - pengalaman > barang", type: "B" },
      { text: "Connections - relasi yang bermakna", type: "C" },
      { text: "Freedom - kebebasan untuk memilih", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bagaimana caramu coping dengan stress?",
    options: [
      { text: "Scroll sosmed atau main game", type: "A" },
      { text: "Self-care dan me-time", type: "B" },
      { text: "Nongkrong sama temen", type: "C" },
      { text: "Journaling atau terapi", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Apa impian terbesarmu?",
    options: [
      { text: "Jadi content creator/influencer sukses", type: "A" },
      { text: "Financial freedom di usia muda", type: "B" },
      { text: "Traveling keliling dunia", type: "C" },
      { text: "Bikin impact positif di society", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bagaimana kamu melihat generasi sebelummu?",
    options: [
      { text: "Beda zaman, beda cara", type: "A" },
      { text: "Bisa belajar dari mereka juga", type: "B" },
      { text: "Mereka yang harus adaptasi", type: "C" },
      { text: "Setiap generasi punya kelebihan", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Digital Native Pro",
    emoji: "📱",
    description: "Kamu adalah Gen Z yang paling digital! Hidupmu terintegrasi sempurna dengan teknologi dan sosmed. Kamu tahu semua tren, viral content, dan cara navigate digital world dengan expert. Sosmed adalah second nature buatmu!",
    traits: ["Tech-savvy", "Trendy", "Connected", "Adaptif"],
    strengths: ["Selalu update dengan tren", "Bisa monetize digital skills", "Jaringan online yang luas"],
    weaknesses: ["Screen time berlebihan", "Kadang disconnect dari real life", "FOMO kronis"],
    tips: ["Balance digital dan real-life interactions", "Digital detox sesekali", "Real connections juga penting"],
  },
  B: {
    type: "B",
    title: "Financially Woke",
    emoji: "💰",
    description: "Kamu adalah Gen Z yang paling aware soal finansial! Sudah invest sejak muda, paham crypto dan saham, dan punya financial goals yang jelas. Kamu anti generasi sandwich dan mau break the cycle!",
    traits: ["Financial literacy tinggi", "Goal-oriented", "Responsible", "Future-minded"],
    strengths: ["Persiapan masa depan yang baik", "Tidak impulsif soal uang", "Bisa jadi mentor finansial"],
    weaknesses: ["Kadang terlalu frugal", "Overthinking soal uang", "Lupa enjoy the present"],
    tips: ["Sesekali treat yourself", "Uang penting tapi bukan segalanya", "Balance saving dan living"],
  },
  C: {
    type: "C",
    title: "Social Butterfly 2.0",
    emoji: "🦋",
    description: "Kamu adalah Gen Z yang paling social! Baik online maupun offline, kamu jago networking dan bikin koneksi. Personal branding on point, dan kamu tahu cara leverage relasi untuk success!",
    traits: ["Extrovert", "Networker", "Charismatic", "Influential"],
    strengths: ["Network yang luas", "Mudah dapat opportunity", "Jago personal branding"],
    weaknesses: ["Kadang superficial", "Energy drain dari socializing", "Butuh validation dari orang"],
    tips: ["Quality over quantity dalam relasi", "Alone time juga penting", "Authenticity > impression"],
  },
  D: {
    type: "D",
    title: "Mindful Gen Z",
    emoji: "🧘",
    description: "Kamu adalah Gen Z yang paling aware soal mental health! Kamu paham pentingnya boundaries, self-care, dan tidak takut untuk bilang tidak. Healing journey-mu menginspirasi banyak orang!",
    traits: ["Self-aware", "Emotionally intelligent", "Boundary-setting", "Empathetic"],
    strengths: ["Mental health yang terjaga", "Bisa jadi support system", "Tidak toxic positivity"],
    weaknesses: ["Kadang over-analyze emosi", "Bisa isolation tendency", "Perfectionistic soal healing"],
    tips: ["Progress bukan perfection", "Tidak semua harus jadi therapy talk", "Action juga penting, bukan hanya reflection"],
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
