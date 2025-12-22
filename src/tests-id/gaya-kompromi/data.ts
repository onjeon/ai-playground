// Gaya Kompromi dalam Hubungan
// Tes ini mengungkap bagaimana kamu berkompromi dengan pasangan!

export const questions = [
  {
    id: 1,
    question: "Saat punya pendapat berbeda dengan pasangan, kamu...",
    options: [
      { text: "Defend pendapatku sampai dia mengerti", type: "A" },
      { text: "Cari jalan tengah yang bisa diterima dua pihak", type: "B" },
      { text: "Biasanya mengalah untuk menjaga harmoni", type: "C" },
      { text: "Tergantung seberapa penting issue-nya", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Tentang memilih restoran/tempat makan, biasanya?",
    options: [
      { text: "Aku yang pilih, dia biasanya setuju", type: "A" },
      { text: "Diskusi dan pilih yang dua-duanya suka", type: "B" },
      { text: "Ikut dia aja, yang penting bareng", type: "C" },
      { text: "Gantian pilih, adil dan fair", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Weekend planning dengan pasangan?",
    options: [
      { text: "Aku yang plan, dia yang follow", type: "A" },
      { text: "Plan bareng, input dua-duanya", type: "B" },
      { text: "Dia yang plan, aku ikut aja", type: "C" },
      { text: "Alternate, kadang aku kadang dia", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Pasangan mau sesuatu yang kamu tidak suka, kamu...",
    options: [
      { text: "Bilang langsung tidak mau", type: "A" },
      { text: "Coba cari alternatif yang bisa diterima", type: "B" },
      { text: "Ikut aja untuk membuatnya senang", type: "C" },
      { text: "Diskusi kenapa tidak suka, cari solusi", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Soal keuangan dalam hubungan, keputusannya...",
    options: [
      { text: "Mostly aku yang atur dan putuskan", type: "A" },
      { text: "Diskusi dan decide bersama", type: "B" },
      { text: "Dia yang lebih banyak putuskan", type: "C" },
      { text: "Ada aturan jelas, masing-masing ada area", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Konflik tentang kebiasaan yang berbeda, penyelesaianmu?",
    options: [
      { text: "Dia yang harus adjust dengan kebiasaanku", type: "A" },
      { text: "Dua-duanya adjust sedikit", type: "B" },
      { text: "Aku yang adjust, tidak masalah", type: "C" },
      { text: "Buat aturan baru yang berbeda dari dua-duanya", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Lebaran/hari raya mau ke keluarga siapa?",
    options: [
      { text: "Keluargaku prioritas", type: "A" },
      { text: "Bergantian atau split time", type: "B" },
      { text: "Keluarga dia prioritas, aku tidak masalah", type: "C" },
      { text: "Discuss based on circumstances", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Pasangan punya hobi yang kamu tidak suka, kamu...",
    options: [
      { text: "Minta dia kurangi atau ganti hobi", type: "A" },
      { text: "Biarkan, itu waktunya dia", type: "B" },
      { text: "Coba ikut atau support walau tidak suka", type: "C" },
      { text: "Diskusi schedule supaya ada time for both", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Keputusan besar (pindah rumah, karir), prosesnya?",
    options: [
      { text: "Aku yang lead keputusan", type: "A" },
      { text: "Extensive discussion, mutual decision", type: "B" },
      { text: "Support keputusan dia", type: "C" },
      { text: "Analyze together, decide based on logic", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Saat kompromi, perasaanmu biasanya?",
    options: [
      { text: "Frustasi kalau harus mengalah", type: "A" },
      { text: "Satisfied kalau fair untuk dua-duanya", type: "B" },
      { text: "Fine, demi hubungan tidak masalah", type: "C" },
      { text: "Depends, kadang okay kadang tidak", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Seberapa sering kamu 'menang' dalam disagreement?",
    options: [
      { text: "Sering, aku assertive", type: "A" },
      { text: "50-50, fair split", type: "B" },
      { text: "Jarang, aku lebih suka mengalah", type: "C" },
      { text: "Tidak menghitung, focus on solution", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Kompromi yang sehat menurutmu?",
    options: [
      { text: "Pasangan memahami dan follow visi bersama", type: "A" },
      { text: "Both give and take equally", type: "B" },
      { text: "Prioritaskan kebahagiaan pasangan", type: "C" },
      { text: "Find creative solution yang satisfy both", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Leader",
    emoji: "👑",
    description: "Kamu cenderung leading dalam membuat keputusan hubungan. Assertive dan tau apa yang kamu mau. Pasangan sering mengikuti arahanmu.",
    traits: ["Assertive", "Decisive", "Leading", "Strong-willed"],
    strengths: ["Clear direction", "No indecision", "Strong stance"],
    weaknesses: ["Bisa controlling", "Partner feels unheard", "One-sided"],
    tips: ["Partner's input matters too", "Relationship is partnership, not dictatorship"],
  },
  B: {
    type: "B",
    title: "The Collaborator",
    emoji: "🤝",
    description: "Kamu adalah master kompromi! Selalu mencari win-win solution dimana dua pihak merasa didengar dan needs terpenuhi. Healthy compromise expert!",
    traits: ["Collaborative", "Fair", "Communicative", "Balanced"],
    strengths: ["Healthy relationship dynamics", "Both feel valued", "Sustainable"],
    weaknesses: ["Decision bisa lama", "Sometimes need to be more decisive"],
    tips: ["Perfect approach! Keep it up, small improvements always possible"],
  },
  C: {
    type: "C",
    title: "The Accommodator",
    emoji: "🕊️",
    description: "Kamu cenderung mengalah untuk menjaga harmoni hubungan. Needs pasangan sering diprioritaskan di atas needsmu sendiri.",
    traits: ["Accommodating", "Peace-keeping", "Self-sacrificing", "Harmonious"],
    strengths: ["Minimal conflict", "Partner feels prioritized", "Peaceful"],
    weaknesses: ["Your needs unmet", "Resentment build-up", "Imbalanced"],
    tips: ["Your needs matter too", "Speaking up is not selfish", "Balance is healthy"],
  },
  D: {
    type: "D",
    title: "The Problem-Solver",
    emoji: "🧩",
    description: "Kamu approach kompromi secara logical dan situational. Mencari solusi kreatif berdasarkan circumstances, bukan fixed pattern.",
    traits: ["Logical", "Adaptive", "Creative", "Solution-focused"],
    strengths: ["Contextual decisions", "Creative solutions", "No rigid patterns"],
    weaknesses: ["Bisa terkesan tidak consistent", "Emotion sometimes missed"],
    tips: ["Great approach! Just make sure emotions are also considered"],
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
