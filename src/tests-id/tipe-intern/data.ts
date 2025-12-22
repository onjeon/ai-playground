// Tes Tipe Anak Magang Kamu
// Kamu tipe intern seperti apa?

export const questions = [
  {
    id: 1,
    question: "Ekspektasi kamu saat magang...",
    options: [
      { text: "Belajar sebanyak mungkin dan build skills", type: "A" },
      { text: "Get real work experience untuk CV", type: "B" },
      { text: "Networking dan cari peluang full-time", type: "C" },
      { text: "Cukup selesaikan requirement aja", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Saat dikasih tugas di luar scope...",
    options: [
      { text: "Excited, kesempatan belajar lebih!", type: "A" },
      { text: "Accept tapi minta guidance", type: "B" },
      { text: "Terima tapi sedikit overwhelmed", type: "C" },
      { text: "Reluctant, itu bukan tugasku", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Inisiatif selama magang...",
    options: [
      { text: "Banyak, sering propose ide dan project", type: "A" },
      { text: "Cukup, ask questions dan seek feedback", type: "B" },
      { text: "Minimal, tunggu direction", type: "C" },
      { text: "Hampir tidak ada, follow aja", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Hubungan dengan supervisor/mentor...",
    options: [
      { text: "Proaktif build relationship", type: "A" },
      { text: "Respectful dan open for guidance", type: "B" },
      { text: "Formal dan as needed", type: "C" },
      { text: "Minimal interaction", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Saat bingung atau stuck dengan tugas...",
    options: [
      { text: "Ask questions, tidak malu bertanya", type: "A" },
      { text: "Try solve dulu, tanya kalau stuck lama", type: "B" },
      { text: "Struggle sendiri, takut dianggap tidak capable", type: "C" },
      { text: "Wait until someone notices", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Networking dengan karyawan lain...",
    options: [
      { text: "Actively reach out ke berbagai department", type: "A" },
      { text: "Connect dengan yang sering interact", type: "B" },
      { text: "Stick dengan tim sendiri", type: "C" },
      { text: "Minimal, fokus ke task aja", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Attitude terhadap 'pekerjaan remeh' (fotokopi, dll)...",
    options: [
      { text: "Part of learning, do dengan best effort", type: "A" },
      { text: "Accept tapi berharap dapat real work juga", type: "B" },
      { text: "Agak kecewa, expected more", type: "C" },
      { text: "Annoyed, ini bukan yang ku sign up for", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Goal utama setelah magang selesai...",
    options: [
      { text: "Get full-time offer di sini", type: "A" },
      { text: "Strong recommendation dan skills", type: "B" },
      { text: "Selesaikan dengan baik aja", type: "C" },
      { text: "Check requirement, move on", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Jam kerja dan dedication...",
    options: [
      { text: "Often stay extra untuk belajar lebih", type: "A" },
      { text: "Professional hours dengan occasional extra", type: "B" },
      { text: "Strict hours, pulang tepat waktu", type: "C" },
      { text: "Minimum required time", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Feedback dari supervisor...",
    options: [
      { text: "Actively seek dan appreciate semua feedback", type: "A" },
      { text: "Open untuk feedback yang constructive", type: "B" },
      { text: "Terima tapi kadang defensive", type: "C" },
      { text: "Tidak terlalu seek, tunggu aja", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Mistakes atau error selama magang...",
    options: [
      { text: "Own up, learn, dan improve", type: "A" },
      { text: "Acknowledge dan minta guidance untuk fix", type: "B" },
      { text: "Nervous dan takut judgment", type: "C" },
      { text: "Try to hide atau minimize", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Kontribusi yang kamu harap berikan...",
    options: [
      { text: "Real impact dan valuable work", type: "A" },
      { text: "Support tim dengan best effort", type: "B" },
      { text: "Learn tanpa jadi burden", type: "C" },
      { text: "Complete assigned tasks", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Intern Superstar",
    emoji: "⭐",
    description: "Kamu adalah anak magang impian setiap company! Proaktif, eager to learn, dan treat magang seperti audisi untuk role full-time. High chance dapat offer!",
    traits: ["Proactive", "Eager learner", "Go-getter", "Networking savvy"],
    strengths: ["High value intern", "Full-time offer potential", "Fast learner"],
    weaknesses: ["Might overwork", "High expectations untuk diri sendiri"],
    tips: ["Balance hustle dengan self-care", "You're setting great foundation"],
  },
  B: {
    type: "B",
    title: "Intern Solid",
    emoji: "👍",
    description: "Kamu adalah intern yang reliable dan professional! Deliver apa yang diminta dengan baik, open untuk feedback, dan build good relationships. Dependable!",
    traits: ["Reliable", "Professional", "Coachable", "Balanced"],
    strengths: ["Trustworthy", "Good reputation", "Sustainable approach"],
    weaknesses: ["Could be more proactive", "Might not stand out"],
    tips: ["Little extra initiative goes long way", "Show more of what you can do"],
  },
  C: {
    type: "C",
    title: "Intern Hesitant",
    emoji: "😬",
    description: "Kamu menjalani magang dengan sedikit hesitant. Takut salah, kurang confident, dan prefer stay dalam comfort zone. Potensi ada tapi belum fully shown.",
    traits: ["Hesitant", "Careful", "Self-doubting", "Quiet"],
    strengths: ["Thoughtful", "Not arrogant", "Observant"],
    weaknesses: ["Underconfident", "Missing opportunities", "Not visible enough"],
    tips: ["Magang adalah waktu untuk make mistakes", "Be more bold, you're learning"],
  },
  D: {
    type: "D",
    title: "Intern Minimal",
    emoji: "😐",
    description: "Kamu menjalani magang dengan effort minimal. Just checking the box untuk requirement. Missed opportunity untuk really learn dan build foundation career.",
    traits: ["Minimal effort", "Checkbox mentality", "Uninvested", "Passive"],
    strengths: ["Low stress", "Gets it done technically"],
    weaknesses: ["Missing valuable opportunity", "No lasting impact atau connection"],
    tips: ["Internship adalah investment untuk future", "What you put in is what you get out"],
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
