// Tingkat Bucin Kamu
// Seberapa bucin (budak cinta) kamu dalam hubungan?

export const questions = [
  {
    id: 1,
    question: "Saat punya pacar/gebetan, prioritasmu...",
    options: [
      { text: "Dia nomor satu, semuanya!", type: "A" },
      { text: "Penting tapi ada hal lain juga", type: "B" },
      { text: "Balance dengan prioritas lain", type: "C" },
      { text: "Hidup tidak hanya tentang dia", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Chat atau telepon dengan pasangan...",
    options: [
      { text: "24/7, harus selalu connected", type: "A" },
      { text: "Sering, tapi ada jeda wajar", type: "B" },
      { text: "Secukupnya, quality over quantity", type: "C" },
      { text: "Seperlunya aja", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Saat pasangan sibuk dan tidak bisa dihubungi...",
    options: [
      { text: "Anxiety! Cek terus sampai bales", type: "A" },
      { text: "Khawatir tapi bisa distract diri", type: "B" },
      { text: "Normal, dia pasti punya urusan", type: "C" },
      { text: "Santai, ada kehidupan masing-masing", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Teman atau pacar minta waktu...",
    options: [
      { text: "Pacar selalu menang!", type: "A" },
      { text: "Tergantung situasi, tapi pacar sering menang", type: "B" },
      { text: "Balance, kedua penting", type: "C" },
      { text: "Bisa prioritaskan teman juga", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Social media dan status hubungan...",
    options: [
      { text: "Couple goals everywhere! Post terus", type: "A" },
      { text: "Share momen penting sesekali", type: "B" },
      { text: "Private, jarang posting tentang hubungan", type: "C" },
      { text: "Tidak perlu public validation", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Saat berantem dengan pasangan...",
    options: [
      { text: "Dunia runtuh! Harus langsung beres", type: "A" },
      { text: "Sedih tapi berusaha selesaikan", type: "B" },
      { text: "Butuh space dulu, baru bicara", type: "C" },
      { text: "Bisa berpikir jernih, tidak terlalu affected", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Gift dan perhatian untuk pasangan...",
    options: [
      { text: "Go all out! Budget no limit", type: "A" },
      { text: "Thoughtful dan sesuai kemampuan", type: "B" },
      { text: "Meaningful tapi tidak berlebihan", type: "C" },
      { text: "Tidak perlu materi untuk tunjukkan sayang", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Keputusan penting dalam hidup...",
    options: [
      { text: "Selalu konsultasi dan consider pasangan", type: "A" },
      { text: "Diskusi tapi keputusan personal tetap sendiri", type: "B" },
      { text: "Independen, inform setelahnya", type: "C" },
      { text: "Hidupku ya keputusanku", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Hobi dan interest saat punya pacar...",
    options: [
      { text: "Hobi kita sama, semua bareng", type: "A" },
      { text: "Ada yang bareng, ada yang sendiri", type: "B" },
      { text: "Masing-masing tetap punya space", type: "C" },
      { text: "Hobi tidak berubah karena punya pacar", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Jika pasangan minta putus...",
    options: [
      { text: "Life ends! Tidak bisa move on", type: "A" },
      { text: "Sangat sedih, butuh waktu lama", type: "B" },
      { text: "Sedih tapi life goes on", type: "C" },
      { text: "Kecewa tapi bisa handle", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Love language dominan...",
    options: [
      { text: "Quality time - harus selalu bareng", type: "A" },
      { text: "Words of affirmation - suka bilang sayang", type: "B" },
      { text: "Acts of service - tunjukkan lewat action", type: "C" },
      { text: "Physical touch atau gift - express differently", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Definisi hubungan sehat menurutmu...",
    options: [
      { text: "Selalu bersama, tidak terpisahkan", type: "A" },
      { text: "Dekat tapi ada boundaries", type: "B" },
      { text: "Balance antara bersama dan mandiri", type: "C" },
      { text: "Dua individu yang complement", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Bucin Akut",
    emoji: "💘",
    description: "Kamu adalah Bucin Akut! Level bucin: EXTREME. Pasangan adalah pusat universe dan kamu rela melakukan apapun. Cinta memang indah tapi ingat, kamu juga punya identitas sendiri!",
    traits: ["Devoted", "Intense", "All-in", "Passionate"],
    strengths: ["Loyal lover", "Great attention", "Deep love"],
    weaknesses: ["Lost identity", "Overwhelming", "Unhealthy attachment"],
    tips: ["Self-love first", "Maintain your identity", "Balance is key"],
  },
  B: {
    type: "B",
    title: "Bucin Wajar",
    emoji: "💕",
    description: "Kamu adalah Bucin Wajar! Cinta dan devoted tapi masih punya kesadaran diri. Kamu all-in untuk hubungan tapi tidak sampai kehilangan diri. Healthy bucin!",
    traits: ["Devoted", "Aware", "Balanced-ish", "Loving"],
    strengths: ["Good lover", "Still has identity", "Caring"],
    weaknesses: ["Kadang terlalu fokus ke pasangan", "Bisa neglect self"],
    tips: ["Keep the balance", "You're doing good!"],
  },
  C: {
    type: "C",
    title: "Lover Seimbang",
    emoji: "💙",
    description: "Kamu adalah Lover Seimbang! Cinta tapi tidak sampai bucin. Kamu punya priorities yang jelas dan hubungan adalah salah satunya, bukan satu-satunya. Healthy approach!",
    traits: ["Balanced", "Independent", "Secure", "Mature"],
    strengths: ["Healthy relationship", "Maintain identity", "Good boundaries"],
    weaknesses: ["Might seem cold", "Partner might want more"],
    tips: ["Your balance is healthy", "Show love in your way"],
  },
  D: {
    type: "D",
    title: "Independent Lover",
    emoji: "💜",
    description: "Kamu adalah Independent Lover! Highly independent dalam hubungan. Kamu sayang tapi tidak tergantung. Might come across as tidak bucin sama sekali, tapi setiap orang punya cara sendiri!",
    traits: ["Independent", "Self-sufficient", "Secure", "Autonomous"],
    strengths: ["Strong sense of self", "Low drama", "Healthy boundaries"],
    weaknesses: ["Might seem detached", "Partner might feel unloved"],
    tips: ["Show affection in your way", "Some vulnerability is okay"],
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
