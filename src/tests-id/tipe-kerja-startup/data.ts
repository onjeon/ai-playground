// Tipe Kamu di Startup
// Tes ini mengungkap tipe pekerja startup yang cocok denganmu!

export const questions = [
  {
    id: 1,
    question: "Saat meeting kick-off project baru, kamu biasanya...",
    options: [
      { text: "Langsung brainstorm ide-ide gila", type: "A" },
      { text: "Analisis dulu target dan timeline", type: "B" },
      { text: "Fokus koordinasi sama tim", type: "C" },
      { text: "Siap eksekusi apa aja yang diputuskan", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Kalau startup tempatmu pivot arah bisnis, reaksimu...",
    options: [
      { text: "Excited! Kesempatan baru untuk inovasi", type: "A" },
      { text: "Evaluasi dulu data dan potensinya", type: "B" },
      { text: "Pastikan semua tim aligned dan siap", type: "C" },
      { text: "Adaptasi cepat, kerja sesuai arahan baru", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Suasana kerja ideal di startup menurutmu...",
    options: [
      { text: "Chaos yang produktif, banyak eksperimen", type: "A" },
      { text: "Terstruktur dengan OKR yang jelas", type: "B" },
      { text: "Kolaboratif dan open communication", type: "C" },
      { text: "Fleksibel tapi ada deadline yang jelas", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Kalau diminta handle project di luar expertise-mu...",
    options: [
      { text: "Challenge accepted! Belajar cepat", type: "A" },
      { text: "Riset mendalam dulu sebelum mulai", type: "B" },
      { text: "Kolaborasi sama yang lebih expert", type: "C" },
      { text: "Fokus kontribusi sesuai kemampuan", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Saat tim lagi burnout, kamu biasanya...",
    options: [
      { text: "Cari cara baru yang lebih efisien", type: "A" },
      { text: "Evaluasi workload dan prioritas", type: "B" },
      { text: "Jadi support system buat tim", type: "C" },
      { text: "Tetap konsisten deliver pekerjaan", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Pendekatan kamu saat launching produk baru...",
    options: [
      { text: "Move fast, iterate later!", type: "A" },
      { text: "Test thoroughly, launch with confidence", type: "B" },
      { text: "Pastikan semua stakeholder happy", type: "C" },
      { text: "Fokus deliver fitur yang diminta", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Kalau founder startup-mu minta kerja weekend...",
    options: [
      { text: "Gas! Demi growth perusahaan", type: "A" },
      { text: "Nego dulu compensation-nya", type: "B" },
      { text: "Sesuaikan sama kondisi tim", type: "C" },
      { text: "Kerjain kalau memang urgent", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Benefit paling penting di startup menurutmu...",
    options: [
      { text: "Equity dan stock option", type: "A" },
      { text: "Gaji kompetitif dan bonus", type: "B" },
      { text: "Culture dan tim yang solid", type: "C" },
      { text: "Flexible hours dan remote work", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Cara kamu kontribusi di town hall meeting...",
    options: [
      { text: "Pitch ide-ide baru ke leadership", type: "A" },
      { text: "Present data dan insights", type: "B" },
      { text: "Suarakan concern dari tim", type: "C" },
      { text: "Listen dan take notes", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Kalau startup-mu dapat funding baru...",
    options: [
      { text: "Propose project-project ambitious", type: "A" },
      { text: "Plan budget allocation yang smart", type: "B" },
      { text: "Senang bisa hire lebih banyak orang", type: "C" },
      { text: "Harap-harap cemas soal expectations", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Saat ada konflik antar tim...",
    options: [
      { text: "Cari solusi kreatif win-win", type: "A" },
      { text: "Analisis root cause-nya", type: "B" },
      { text: "Jadi mediator dan dengarkan semua pihak", type: "C" },
      { text: "Fokus kerjaan sendiri, biar atasan yang handle", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Visi karirmu di dunia startup...",
    options: [
      { text: "Jadi founder startup sendiri", type: "A" },
      { text: "Jadi C-level executive", type: "B" },
      { text: "Build dan lead great teams", type: "C" },
      { text: "Jadi specialist yang expert di bidang", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Visionary Disruptor",
    emoji: "🚀",
    description: "Kamu adalah jiwa startup sejati! Selalu haus inovasi, berani ambil risiko, dan punya visi besar. Kamu cocok di early-stage startup yang butuh energy dan ide-ide segar untuk grow cepat.",
    traits: ["Inovatif", "Risk-taker", "Visioner", "Energetic"],
    strengths: ["Bisa generate ide breakthrough", "Adaptif terhadap perubahan", "Inspiring untuk tim"],
    weaknesses: ["Kadang terlalu idealis", "Bisa overwhelm tim dengan ide", "Kurang sabar dengan proses"],
    tips: ["Balance antara inovasi dan eksekusi", "Belajar prioritize ide yang paling impactful", "Appreciate tim yang bantu eksekusi visimu"],
  },
  B: {
    type: "B",
    title: "The Strategic Operator",
    emoji: "📊",
    description: "Kamu adalah otak di balik kesuksesan startup! Data-driven, strategic, dan selalu punya plan yang matang. Cocok untuk scale-up startup yang butuh struktur dan growth yang sustainable.",
    traits: ["Analitis", "Strategic", "Detail-oriented", "Pragmatis"],
    strengths: ["Decision making yang solid", "Bisa optimize resources", "Minimize risiko"],
    weaknesses: ["Bisa terlalu rigid", "Analysis paralysis", "Kurang embrace uncertainty"],
    tips: ["Sesekali trust your gut", "Balance data dengan intuisi", "Embrace controlled chaos"],
  },
  C: {
    type: "C",
    title: "The Culture Builder",
    emoji: "🤝",
    description: "Kamu adalah glue yang satukan tim! EQ tinggi, great communicator, dan selalu prioritize people. Perfect untuk startup yang lagi scaling tim dan butuh culture yang kuat.",
    traits: ["Empathetic", "Collaborative", "Komunikatif", "Supportive"],
    strengths: ["Build strong teams", "Resolve conflicts", "Create positive work environment"],
    weaknesses: ["Bisa terlalu people-pleasing", "Susah buat hard decisions", "Kurang fokus hasil"],
    tips: ["Balance people dan performance", "Belajar deliver tough feedback", "Jangan lupa self-care"],
  },
  D: {
    type: "D",
    title: "The Reliable Executor",
    emoji: "💪",
    description: "Kamu adalah backbone startup! Konsisten, reliable, dan selalu deliver. Cocok untuk startup di fase apapun karena every startup butuh orang yang bisa andalkan untuk get things done.",
    traits: ["Dependable", "Consistent", "Practical", "Focused"],
    strengths: ["Always deliver on time", "Low maintenance", "Stable presence di tim"],
    weaknesses: ["Kurang initiative", "Bisa stuck di comfort zone", "Kurang vocal"],
    tips: ["Jangan takut speak up", "Ambil ownership lebih", "Challenge yourself untuk lead projects"],
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
