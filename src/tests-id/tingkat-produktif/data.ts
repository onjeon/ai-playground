// Tingkat Produktivitas Kamu
// Tes ini mengungkap seberapa produktif kamu dalam mengelola waktu dan tugas!

export const questions = [
  {
    id: 1,
    question: "Pagi hari biasanya kamu...",
    options: [
      { text: "Bangun dengan alarm dan langsung produktif", type: "A" },
      { text: "Snooze sekali dua kali, tapi bangun juga", type: "B" },
      { text: "Susah bangun, butuh waktu lama untuk start", type: "C" },
      { text: "Tidak ada rutinitas pagi yang konsisten", type: "D" },
    ],
  },
  {
    id: 2,
    question: "To-do list atau planning...",
    options: [
      { text: "Selalu ada, terstruktur dan di-review harian", type: "A" },
      { text: "Ada di kepala, kadang ditulis kalau banyak", type: "B" },
      { text: "Jarang buat, lebih suka flow aja", type: "C" },
      { text: "Buat tapi jarang diikuti", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Saat ada deadline...",
    options: [
      { text: "Selesai jauh sebelum deadline", type: "A" },
      { text: "Tepat waktu, tidak terlalu mepet", type: "B" },
      { text: "Mepet deadline, tapi selalu kelar", type: "C" },
      { text: "Sering miss deadline atau minta extend", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Distraction saat kerja...",
    options: [
      { text: "Bisa fokus lama, jarang terdistraksi", type: "A" },
      { text: "Kadang terdistraksi tapi bisa balik fokus", type: "B" },
      { text: "Sering terdistraksi, susah fokus lama", type: "C" },
      { text: "Sangat mudah terdistraksi, produktivitas rendah", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Multitasking vs single-tasking...",
    options: [
      { text: "Single-task dengan fokus, satu per satu", type: "A" },
      { text: "Mix, tergantung jenis tugasnya", type: "B" },
      { text: "Multitask tapi sering tidak selesai semua", type: "C" },
      { text: "Multitask dan overwhelmed", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Procrastination level...",
    options: [
      { text: "Jarang, prefer selesaikan secepat mungkin", type: "A" },
      { text: "Kadang untuk tugas yang tidak suka", type: "B" },
      { text: "Cukup sering, susah mulai", type: "C" },
      { text: "Chronic procrastinator", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Energy management sepanjang hari...",
    options: [
      { text: "Tau kapan peak hours, kerja sesuai energy", type: "A" },
      { text: "Lumayan konsisten sepanjang hari", type: "B" },
      { text: "Naik turun, sering kelelahan di siang", type: "C" },
      { text: "Tidak terkelola, sering crash", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Penggunaan tools produktivitas...",
    options: [
      { text: "Pakai beberapa apps/tools secara efektif", type: "A" },
      { text: "Basic tools, calendar dan notes", type: "B" },
      { text: "Punya tools tapi jarang konsisten pakai", type: "C" },
      { text: "Tidak pakai tools khusus", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Work-life balance...",
    options: [
      { text: "Seimbang, tau kapan kerja kapan istirahat", type: "A" },
      { text: "Lumayan balance, kadang overwork", type: "B" },
      { text: "Tidak seimbang, kerja atau leisure berlebihan", type: "C" },
      { text: "Tidak ada boundary yang jelas", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Menangani tugas yang tidak suka...",
    options: [
      { text: "Kerjakan duluan, supaya cepat selesai", type: "A" },
      { text: "Selang-seling dengan tugas yang suka", type: "B" },
      { text: "Tunda sampai tidak bisa ditunda lagi", type: "C" },
      { text: "Avoid sebisa mungkin", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Review dan evaluasi progress...",
    options: [
      { text: "Rutin weekly/daily review", type: "A" },
      { text: "Sesekali kalau ingat", type: "B" },
      { text: "Jarang, lebih suka move forward", type: "C" },
      { text: "Tidak pernah, tidak tau progressnya", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Secara overall, produktivitasmu...",
    options: [
      { text: "Tinggi dan konsisten", type: "A" },
      { text: "Cukup baik, ada room for improvement", type: "B" },
      { text: "Naik turun, tidak konsisten", type: "C" },
      { text: "Rendah, sering struggle", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Productivity Master",
    emoji: "🚀",
    description: "Kamu adalah master produktivitas! Waktu terkelola dengan baik, tugas selesai tepat waktu, dan kamu punya sistem yang efektif. Keep up the good work!",
    traits: ["Organized", "Disciplined", "Efficient", "Goal-oriented"],
    strengths: ["High output", "Reliable", "Good time management", "Consistent"],
    weaknesses: ["Bisa terlalu strict", "Perlu flexibility kadang"],
    tips: ["Jangan lupa istirahat", "Flexibility juga penting", "Share tips ke orang lain"],
  },
  B: {
    type: "B",
    title: "Productive Enough",
    emoji: "👍",
    description: "Kamu memiliki produktivitas yang cukup baik! Ada ruang untuk improvement tapi secara overall kamu manage dengan baik. Balance yang sehat.",
    traits: ["Balanced", "Adaptable", "Realistic", "Steady"],
    strengths: ["Sustainable pace", "Not burnt out", "Good enough output"],
    weaknesses: ["Bisa lebih konsisten", "Kadang procrastinate"],
    tips: ["Identifikasi area improvement", "Build better habits gradually"],
  },
  C: {
    type: "C",
    title: "Inconsistent Performer",
    emoji: "🎢",
    description: "Produktivitasmu naik turun seperti roller coaster. Ada hari yang sangat produktif, ada hari yang tidak produktif sama sekali. Consistency adalah challenge utamamu.",
    traits: ["Inconsistent", "Mood-dependent", "Potential high", "Struggles with routine"],
    strengths: ["High potential", "Creative bursts", "Can be very productive"],
    weaknesses: ["Tidak konsisten", "Energy tidak terkelola", "Procrastination"],
    tips: ["Focus on building habits", "Start small and consistent", "Track your patterns"],
  },
  D: {
    type: "D",
    title: "Struggling with Productivity",
    emoji: "😓",
    description: "Kamu sedang struggle dengan produktivitas. Ini tidak berarti kamu gagal - banyak faktor yang bisa mempengaruhi. Yang penting adalah mulai dengan langkah kecil.",
    traits: ["Struggling", "Overwhelmed", "Need support", "Potential for growth"],
    strengths: ["Aware ada masalah", "Room for improvement besar"],
    weaknesses: ["Chronic procrastination", "Poor time management", "Easily distracted"],
    tips: ["Start very small", "Cari root cause", "Consider professional help", "Be kind to yourself"],
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
