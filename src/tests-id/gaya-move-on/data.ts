// Tes Gaya Move On Kamu
// Bagaimana cara kamu melupakan dan move on dari sesuatu?

export const questions = [
  {
    id: 1,
    question: "Setelah putus, hal pertama yang kamu lakukan...",
    options: [
      { text: "Hapus semua foto dan block di sosmed", type: "A" },
      { text: "Curhat marathon sama teman", type: "B" },
      { text: "Self-improvement: gym, glow up, skill baru", type: "C" },
      { text: "Diam dan proses sendiri", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Stalking mantan di sosmed...",
    options: [
      { text: "Tidak pernah, sudah di-block atau unfriend", type: "A" },
      { text: "Sesekali kalau lagi lemah", type: "B" },
      { text: "Jarang, fokus ke diri sendiri", type: "C" },
      { text: "Sering, penasaran kehidupannya", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Kenangan dan barang dari mantan...",
    options: [
      { text: "Langsung dibuang atau dikembalikan", type: "A" },
      { text: "Simpan dulu, nanti di-sort kalau sudah kuat", type: "B" },
      { text: "Keep beberapa sebagai life lesson", type: "C" },
      { text: "Masih disimpan semua dengan rapi", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Waktu yang kamu butuhkan untuk move on...",
    options: [
      { text: "Cepat, once decided then done", type: "A" },
      { text: "Beberapa minggu sampai bulan", type: "B" },
      { text: "Tergantung seberapa deep hubungannya", type: "C" },
      { text: "Lama, bisa berbulan-bulan atau tahun", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Cara kamu mengalihkan pikiran dari mantan...",
    options: [
      { text: "New crush atau rebound", type: "A" },
      { text: "Social activities dan hangout", type: "B" },
      { text: "Fokus ke hobi dan self-development", type: "C" },
      { text: "Kerja keras sampai capek dan lupa", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Kalau ketemu mantan di tempat umum...",
    options: [
      { text: "Ignore atau pura-pura tidak lihat", type: "A" },
      { text: "Sapa singkat dan sopan", type: "B" },
      { text: "Bisa ngobrol biasa kalau sudah move on", type: "C" },
      { text: "Awkward dan buru-buru pergi", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Lagu yang mengingatkan ke mantan...",
    options: [
      { text: "Skip atau hapus dari playlist", type: "A" },
      { text: "Dengerin tapi coba not affected", type: "B" },
      { text: "Dengerin dan jadikan kenangan", type: "C" },
      { text: "Masih bikin baper", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Tentang jadi teman dengan mantan...",
    options: [
      { text: "Tidak mungkin, clean cut lebih baik", type: "A" },
      { text: "Maybe, tapi butuh waktu dan space dulu", type: "B" },
      { text: "Bisa kalau sama-sama sudah move on", type: "C" },
      { text: "Berharap bisa tapi susah", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Mindset kamu tentang patah hati...",
    options: [
      { text: "Their loss, I deserve better", type: "A" },
      { text: "Pelajaran hidup yang berharga", type: "B" },
      { text: "Growth opportunity untuk jadi lebih baik", type: "C" },
      { text: "Sangat menyakitkan dan susah dilupakan", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Update dari mantan (punya pacar baru, sukses, dll)...",
    options: [
      { text: "Tidak peduli, hidup masing-masing", type: "A" },
      { text: "Sedikit affected tapi bisa handle", type: "B" },
      { text: "Happy for them kalau sudah move on", type: "C" },
      { text: "Sakit dan compare dengan diri sendiri", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Support system saat move on...",
    options: [
      { text: "Tidak terlalu butuh, bisa sendiri", type: "A" },
      { text: "Teman-teman untuk distraction", type: "B" },
      { text: "Keluarga dan close friends untuk curhat", type: "C" },
      { text: "Sangat butuh tapi kadang malu minta", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Setelah move on, kamu...",
    options: [
      { text: "Completely over it, not looking back", type: "A" },
      { text: "Move on tapi sesekali masih ingat", type: "B" },
      { text: "Grateful for the experience", type: "C" },
      { text: "Tidak yakin sudah benar-benar move on", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Clean Cut Mover",
    emoji: "✂️",
    description: "Kamu move on dengan cara clean cut! Sekali decide to move on, semua connection diputus. Decisive dan tidak suka menyiksa diri dengan kenangan.",
    traits: ["Decisive", "Self-protective", "Practical", "No-nonsense"],
    strengths: ["Quick recovery", "Strong boundaries", "Clear minded"],
    weaknesses: ["Might not process fully", "Can seem cold"],
    tips: ["Make sure you've actually processed", "Not just avoiding feelings"],
  },
  B: {
    type: "B",
    title: "Social Mover",
    emoji: "👯",
    description: "Kamu move on dengan bantuan social circle! Curhat, hangout, dan distraction dari teman-teman adalah kunci. Sharing is healing for you.",
    traits: ["Social", "Expressive", "Support-seeking", "Outgoing"],
    strengths: ["Strong support system", "Doesn't bottle up", "Healthy expression"],
    weaknesses: ["Dependent on others", "Might over-share"],
    tips: ["Balance dengan solo processing juga", "Some healing is internal"],
  },
  C: {
    type: "C",
    title: "Growth Mover",
    emoji: "🌱",
    description: "Kamu move on dengan fokus ke self-improvement! Setiap heartbreak adalah kesempatan untuk grow. Channel energi ke hal positif dan productive.",
    traits: ["Growth-oriented", "Positive", "Productive", "Resilient"],
    strengths: ["Turn pain into progress", "Emerges stronger", "Inspiring"],
    weaknesses: ["Might avoid the pain", "Toxic positivity risk"],
    tips: ["It's okay to feel sad too", "Not everything needs to be productive"],
  },
  D: {
    type: "D",
    title: "Slow Mover",
    emoji: "🐢",
    description: "Kamu butuh waktu lama untuk move on! Deeply feeling dan processing takes time. Loyal heart yang susah melupakan.",
    traits: ["Deep feeler", "Loyal", "Nostalgic", "Slow to let go"],
    strengths: ["Processes thoroughly", "Deep connections", "Authentic feelings"],
    weaknesses: ["Can get stuck", "Prolongs pain", "Might idealize past"],
    tips: ["Set timeline for yourself", "Seek help if stuck too long", "Past is not always better than future"],
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
