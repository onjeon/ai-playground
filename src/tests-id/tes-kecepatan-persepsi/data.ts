// Tes Kecepatan Persepsi
// Uji kemampuan mengenali detail dan perbedaan dengan cepat!

export const questions = [
  {
    id: 1,
    question: "Manakah yang berbeda? 1111111 | 1111111 | 1111l11 | 1111111",
    options: [
      { text: "Ketiga (ada huruf 'l' bukan angka '1')", type: "A" },
      { text: "Pertama", type: "B" },
      { text: "Keempat", type: "C" },
      { text: "Semua sama", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Manakah yang berbeda? OOOOOO | OOOOOO | O0OOOO | OOOOOO",
    options: [
      { text: "Ketiga (ada angka '0' bukan huruf 'O')", type: "A" },
      { text: "Pertama", type: "B" },
      { text: "Keempat", type: "C" },
      { text: "Semua sama", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Berapa banyak huruf 'a' dalam: banana | papaya | nanas | alpukat",
    options: [
      { text: "10 huruf 'a'", type: "A" },
      { text: "8 huruf 'a'", type: "B" },
      { text: "12 huruf 'a'", type: "C" },
      { text: "9 huruf 'a'", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Kata mana yang dieja SALAH? Profesional | Komunikasi | Administrasi | Komitmen",
    options: [
      { text: "Semua benar", type: "A" },
      { text: "Profesional", type: "B" },
      { text: "Administrasi", type: "C" },
      { text: "Komitmen", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Manakah pasangan yang SAMA? AB-AB | CD-DC | EF-EF | GH-HG",
    options: [
      { text: "AB-AB dan EF-EF", type: "A" },
      { text: "Semua sama", type: "B" },
      { text: "CD-DC dan GH-HG", type: "C" },
      { text: "Hanya AB-AB", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Berapa angka genap dalam: 3 7 2 9 4 1 8 5 6 0",
    options: [
      { text: "5 angka (2, 4, 8, 6, 0)", type: "A" },
      { text: "4 angka", type: "B" },
      { text: "6 angka", type: "C" },
      { text: "3 angka", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Manakah yang berbeda? dbdb | dbdb | dbqb | dbdb",
    options: [
      { text: "Ketiga (ada 'q' bukan 'd')", type: "A" },
      { text: "Pertama", type: "B" },
      { text: "Keempat", type: "C" },
      { text: "Semua sama", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Email mana yang formatnya SALAH? a@b.com | c@d@e.com | f@g.co.id | h@i.org",
    options: [
      { text: "c@d@e.com (dua @)", type: "A" },
      { text: "a@b.com", type: "B" },
      { text: "f@g.co.id", type: "C" },
      { text: "Semua benar", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Berapa huruf kapital dalam: Jakarta, Bandung, Surabaya, Medan, Bali",
    options: [
      { text: "5 huruf kapital", type: "A" },
      { text: "10 huruf kapital", type: "B" },
      { text: "0 huruf kapital", type: "C" },
      { text: "25 huruf kapital", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Nomor HP mana yang jumlah digitnya berbeda? 081234567890 | 089876543210 | 08123456789 | 082345678901",
    options: [
      { text: "Ketiga (hanya 11 digit)", type: "A" },
      { text: "Pertama", type: "B" },
      { text: "Keempat", type: "C" },
      { text: "Semua sama", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Manakah yang merupakan palindrom (sama dibaca dari depan/belakang)? KATAK | MALAM | RADAR | TAMAN",
    options: [
      { text: "KATAK, MALAM, RADAR", type: "A" },
      { text: "Hanya RADAR", type: "B" },
      { text: "Semua palindrom", type: "C" },
      { text: "Tidak ada palindrom", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Ada berapa tanda baca dalam: Halo, apa kabar? Saya baik-baik saja!",
    options: [
      { text: "4 tanda baca (, ? - !)", type: "A" },
      { text: "3 tanda baca", type: "B" },
      { text: "5 tanda baca", type: "C" },
      { text: "2 tanda baca", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Persepsi Super Cepat",
    emoji: "⚡",
    description: "Kecepatan persepsi kamu excellent! Kamu bisa mengenali detail dan perbedaan dengan sangat cepat dan akurat. Mata dan otak kamu terkoordinasi dengan baik!",
    traits: ["Quick perceiver", "Detail spotter", "Accurate", "Sharp observer"],
    strengths: ["Catch errors fast", "Quality control aptitude", "Proofreading skills"],
    weaknesses: ["Might be impatient dengan yang lambat"],
    tips: ["Cocok untuk QA, editing, data entry, security"],
  },
  B: {
    type: "B",
    title: "Persepsi Baik",
    emoji: "👁️",
    description: "Kecepatan persepsi kamu cukup baik! Sebagian besar detail dan perbedaan bisa dikenali dengan tepat. Terus latih untuk lebih sharp!",
    traits: ["Good perception", "Attentive", "Developing"],
    strengths: ["Decent attention to detail", "Can improve"],
    weaknesses: ["Subtle differences challenging"],
    tips: ["Practice spot-the-difference games", "Train your eye"],
  },
  C: {
    type: "C",
    title: "Persepsi Berkembang",
    emoji: "🔍",
    description: "Kecepatan persepsi kamu masih berkembang. Beberapa detail bisa ditangkap tapi yang lebih subtle masih challenging.",
    traits: ["Developing", "Needs focus", "Can improve"],
    strengths: ["Obvious differences okay"],
    weaknesses: ["Subtle details often missed"],
    tips: ["Slow down and focus", "Practice with detail-oriented tasks"],
  },
  D: {
    type: "D",
    title: "Persepsi Perlu Latihan",
    emoji: "🌱",
    description: "Kecepatan persepsi kamu masih perlu dilatih. Perceptual speed adalah skill yang bisa dikembangkan dengan latihan teratur.",
    traits: ["Needs training", "Can develop", "Room to grow"],
    strengths: ["Awareness of weakness"],
    weaknesses: ["Perceptual accuracy needs work"],
    tips: ["Play observation games", "Practice finding differences daily"],
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
