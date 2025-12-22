// Tipe Bos Kamu
// Tes ini mengungkap gaya kepemimpinan atau tipe bos seperti apa kamu!

export const questions = [
  {
    id: 1,
    question: "Saat tim tidak mencapai target...",
    options: [
      { text: "Evaluasi bersama, cari solusi tanpa menyalahkan", type: "A" },
      { text: "Tegur yang bertanggung jawab, harus ada konsekuensi", type: "B" },
      { text: "Kasih motivasi dan semangat untuk lebih baik", type: "C" },
      { text: "Turun tangan langsung, kerja bareng sampai beres", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Cara kamu berkomunikasi dengan bawahan...",
    options: [
      { text: "Diskusi dua arah, semua boleh menyampaikan pendapat", type: "A" },
      { text: "Instruksi jelas dan tegas, biar tidak bingung", type: "B" },
      { text: "Casual dan friendly, tidak terlalu formal", type: "C" },
      { text: "Coaching dan mentoring, develop people", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Saat ada karyawan yang melakukan kesalahan...",
    options: [
      { text: "Diskusi untuk memahami penyebab dan cari solusi", type: "A" },
      { text: "Warning yang jelas, mistakes punya consequences", type: "B" },
      { text: "Maklum kalau sekali-sekali, namanya juga manusia", type: "C" },
      { text: "Ajari cara yang benar, kasih kesempatan improve", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Pendelegasian tugas, kamu prefer...",
    options: [
      { text: "Diskusi dulu siapa yang paling cocok", type: "A" },
      { text: "Assign langsung sesuai job desc masing-masing", type: "B" },
      { text: "Bagi rata biar fair, tidak ada yang overload", type: "C" },
      { text: "Kasih ke yang mau belajar, challenge them to grow", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Meeting dengan tim, style kamu...",
    options: [
      { text: "Collaborative, semua bisa contribute ide", type: "A" },
      { text: "Structured dengan agenda jelas, to the point", type: "B" },
      { text: "Santai, kadang sambil ngopi atau makan", type: "C" },
      { text: "One-on-one lebih efektif dari meeting besar", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Saat mengambil keputusan penting...",
    options: [
      { text: "Voting atau consensus dengan tim", type: "A" },
      { text: "Analisis data, lalu decide dengan tegas", type: "B" },
      { text: "Ikut feeling, intuisi biasanya benar", type: "C" },
      { text: "Konsultasi dengan yang berpengalaman dulu", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Cara kamu memberikan apresiasi ke tim...",
    options: [
      { text: "Recognition di depan tim, public praise", type: "A" },
      { text: "Bonus atau reward yang tangible", type: "B" },
      { text: "Treat makan-makan atau outing bareng", type: "C" },
      { text: "Personal thanks dan feedback positif", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Work-life balance untuk tim...",
    options: [
      { text: "Sangat penting, tidak boleh lembur terus", type: "A" },
      { text: "Profesional, kalau perlu lembur ya lembur", type: "B" },
      { text: "Flexible, yang penting kerjaan beres", type: "C" },
      { text: "Sesuaikan dengan kebutuhan masing-masing", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Saat ada konflik antar anggota tim...",
    options: [
      { text: "Fasilitasi diskusi untuk menyelesaikan bersama", type: "A" },
      { text: "Tentukan siapa yang benar, case closed", type: "B" },
      { text: "Biarkan mereka selesaikan sendiri dulu", type: "C" },
      { text: "Bicara dengan masing-masing secara personal", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Visi kamu sebagai leader...",
    options: [
      { text: "Membangun tim yang solid dan saling support", type: "A" },
      { text: "Mencapai hasil dan target yang excellent", type: "B" },
      { text: "Menciptakan lingkungan kerja yang happy", type: "C" },
      { text: "Mengembangkan potensi setiap anggota tim", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Bos Demokratis",
    emoji: "🤝",
    description: "Kamu adalah bos yang demokratis dan kolaboratif! Menghargai input dari tim, keputusan diambil bersama, dan membangun environment yang inklusif.",
    traits: ["Kolaboratif", "Inklusif", "Fair", "Supportive"],
    strengths: ["Tim merasa dihargai", "Banyak perspektif", "Keputusan lebih buy-in"],
    weaknesses: ["Keputusan bisa lambat", "Kadang tidak tegas"],
    tips: ["Kadang perlu decisive leadership", "Balance antara diskusi dan action"],
  },
  B: {
    type: "B",
    title: "Bos Tegas & Hasil",
    emoji: "📊",
    description: "Kamu adalah bos yang tegas dan result-oriented! Fokus pada target dan performa, instruksi jelas, dan tidak ragu mengambil keputusan sulit.",
    traits: ["Tegas", "Result-oriented", "Decisive", "Professional"],
    strengths: ["Target tercapai", "Tim tau ekspektasi", "Keputusan cepat"],
    weaknesses: ["Bisa terkesan keras", "Tim mungkin kurang engaged"],
    tips: ["Jangan lupa sisi human-nya", "Recognition penting untuk motivasi"],
  },
  C: {
    type: "C",
    title: "Bos Friendly & Santai",
    emoji: "😊",
    description: "Kamu adalah bos yang friendly dan laid-back! Suasana kerja santai tapi kerjaan tetap jalan. Tim merasa comfortable dan loyal.",
    traits: ["Friendly", "Approachable", "Flexible", "Easy-going"],
    strengths: ["Tim happy dan loyal", "Environment positive", "Low turnover"],
    weaknesses: ["Bisa kurang discipline", "Batasan kurang jelas"],
    tips: ["Tetap jaga profesionalisme", "Perlu tegas di saat-saat penting"],
  },
  D: {
    type: "D",
    title: "Bos Coach & Mentor",
    emoji: "🎯",
    description: "Kamu adalah bos yang fokus pada pengembangan tim! Invest waktu untuk coaching, mentoring, dan membantu setiap anggota grow.",
    traits: ["Developer", "Mentor", "Patient", "Growth-focused"],
    strengths: ["Tim berkembang", "Long-term investment", "Loyalty tinggi"],
    weaknesses: ["Memakan waktu", "Short-term results mungkin slower"],
    tips: ["Balance development dengan results", "Delegasi juga bentuk trust"],
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
