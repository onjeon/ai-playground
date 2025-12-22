// Gaya PDKT Kamu
// Tes ini mengungkap bagaimana kamu mendekati orang yang disukai!

export const questions = [
  {
    id: 1,
    question: "Saat suka seseorang, hal pertama yang kamu lakukan?",
    options: [
      { text: "Langsung ajak ngobrol dan kenalan", type: "A" },
      { text: "Observe dulu, cari tau tentang dia", type: "B" },
      { text: "Tunjukkan ketertarikan lewat perhatian kecil", type: "C" },
      { text: "Diam saja, berharap dia yang notice", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Cara kamu menunjukkan ketertarikan?",
    options: [
      { text: "Flirting langsung dan terang-terangan", type: "A" },
      { text: "Jadi teman dulu, pelan-pelan dekat", type: "B" },
      { text: "Perhatian dan bantuan tanpa diminta", type: "C" },
      { text: "Hint-hint halus, kalau dia peka ya syukur", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Chat dengan gebetan, gayamu...",
    options: [
      { text: "Aktif chat duluan, gak gengsi", type: "A" },
      { text: "Balas dengan thoughtful, pertahankan convo", type: "B" },
      { text: "Kirim meme atau hal-hal lucu", type: "C" },
      { text: "Tunggu dia chat duluan", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Kamu lebih suka PDKT yang...",
    options: [
      { text: "Cepat dan langsung to the point", type: "A" },
      { text: "Slow but sure, build connection dulu", type: "B" },
      { text: "Fun dan penuh humor", type: "C" },
      { text: "Subtle dan tidak terlalu obvious", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Soal confess perasaan, kamu...",
    options: [
      { text: "Langsung bilang kalau udah yakin", type: "A" },
      { text: "Tunggu timing yang tepat", type: "B" },
      { text: "Lewat gesture romantic/surprise", type: "C" },
      { text: "Susah banget, takut ditolak", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Ketemu gebetan di tempat umum, kamu...",
    options: [
      { text: "Hampiri dan ajak ngobrol", type: "A" },
      { text: "Senyum dan sapa kalau eye contact", type: "B" },
      { text: "Cari cara kreatif untuk interact", type: "C" },
      { text: "Pura-pura gak lihat, nervous!", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Rival muncul dan juga suka gebetanmu, reaksimu?",
    options: [
      { text: "Game on! Lebih agresif PDKTnya", type: "A" },
      { text: "Stay cool, tunjukkan kelebihan sendiri", type: "B" },
      { text: "Tetap jadi diri sendiri, kalau jodoh gak kemana", type: "C" },
      { text: "Mundur, tidak mau saingan", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Gebetan slow respond, kamu...",
    options: [
      { text: "Chat lagi, mungkin sibuk", type: "A" },
      { text: "Tunggu dengan sabar", type: "B" },
      { text: "Kirim sesuatu yang menarik perhatian", type: "C" },
      { text: "Overthinking, mungkin dia gak suka", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Ajak jalan/date pertama, caramu...",
    options: [
      { text: "Langsung ajak dengan PD", type: "A" },
      { text: "Casual, ajak bareng grup dulu", type: "B" },
      { text: "Plan something special dan memorable", type: "C" },
      { text: "Susah ngajak, takut ditolak", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Sinyal gebetan gak jelas (PHP), kamu...",
    options: [
      { text: "Tanya langsung apa statusnya", type: "A" },
      { text: "Observe lebih lanjut", type: "B" },
      { text: "Tetap positive, keep trying", type: "C" },
      { text: "Baper dan galau", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Gimana kamu handle rejection?",
    options: [
      { text: "Move on cepat, banyak ikan di laut", type: "A" },
      { text: "Sedih tapi bisa recover", type: "B" },
      { text: "Tetap teman, siapa tau nanti", type: "C" },
      { text: "Sangat sakit, trauma lama", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Success rate PDKT kamu biasanya...",
    options: [
      { text: "Lumayan tinggi, percaya diri!", type: "A" },
      { text: "Cukup baik, approach-nya mature", type: "B" },
      { text: "Hit or miss, tapi seru prosesnya", type: "C" },
      { text: "Rendah, sering gagal atau gak berani", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Bold Charmer",
    emoji: "🔥",
    description: "Kamu PDKT dengan berani dan langsung! Tidak ada waktu untuk ragu-ragu. Kamu tau apa yang kamu mau dan berani go for it. Confidence adalah senjata utamamu.",
    traits: ["Bold", "Confident", "Direct", "Go-getter"],
    strengths: ["Tidak buang waktu", "Clear intentions", "High success when matched"],
    weaknesses: ["Bisa overwhelming", "Kadang terlalu agresif"],
    tips: ["Baca sinyal juga penting", "Kadang slow approach lebih efektif"],
  },
  B: {
    type: "B",
    title: "The Slow Burner",
    emoji: "🌱",
    description: "Kamu PDKT dengan sabar dan terencana. Friendship first, lalu pelan-pelan berkembang. Kamu percaya hubungan yang kuat dibangun dengan fondasi yang solid.",
    traits: ["Patient", "Thoughtful", "Strategic", "Mature"],
    strengths: ["Deep connection", "Less rejection (karena baca situasi)", "Lasting relationships"],
    weaknesses: ["Bisa terlalu lama", "Friendzone potential"],
    tips: ["Kadang perlu lebih obvious", "Jangan takut ambil risiko"],
  },
  C: {
    type: "C",
    title: "The Creative Romantic",
    emoji: "🎨",
    description: "Kamu PDKT dengan cara yang unik dan memorable! Gestures, surprises, dan pendekatan kreatif adalah style-mu. Kamu bikin proses PDKT jadi exciting.",
    traits: ["Creative", "Romantic", "Fun", "Memorable"],
    strengths: ["Stand out dari yang lain", "Memorable experiences", "Fun process"],
    weaknesses: ["Bisa over the top", "Not everyone appreciates gestures"],
    tips: ["Read their style juga", "Sometimes simple is better"],
  },
  D: {
    type: "D",
    title: "The Shy Admirer",
    emoji: "🥺",
    description: "Kamu PDKT dengan sangat subtle dan hati-hati. Fear of rejection sering menghalangi. Kamu punya feelings kuat tapi susah mengekspresikan.",
    traits: ["Shy", "Cautious", "Subtle", "Fear of rejection"],
    strengths: ["Genuine feelings", "Not pushy", "Respectful"],
    weaknesses: ["Often miss chances", "Unclear signals", "Overthinking"],
    tips: ["Keberanian perlu dilatih", "Rejection is not the end of the world", "Start small"],
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
