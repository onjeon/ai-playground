// Gaya Menentukan Prioritas
// Bagaimana caramu menentukan mana yang paling penting?

export const questions = [
  {
    id: 1,
    question: "Saat to-do list panjang banget...",
    options: [
      { text: "Kerjakan yang paling urgent dulu", type: "A" },
      { text: "Kerjakan yang paling penting untuk goal jangka panjang", type: "B" },
      { text: "Kerjakan yang paling gampang dulu untuk momentum", type: "C" },
      { text: "Kerjakan yang paling menarik atau enjoyed", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Kriteria utama saat memilih prioritas...",
    options: [
      { text: "Deadline dan urgency", type: "A" },
      { text: "Impact dan importance", type: "B" },
      { text: "Effort dan waktu yang dibutuhkan", type: "C" },
      { text: "Interest dan passion", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Ada task penting tapi tidak urgent vs urgent tapi tidak penting...",
    options: [
      { text: "Urgent dulu, penting nanti", type: "A" },
      { text: "Penting dulu, urgent bisa didelegasi", type: "B" },
      { text: "Balance keduanya", type: "C" },
      { text: "Tergantung mood saat itu", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Metode prioritas yang kamu pakai...",
    options: [
      { text: "First in first out, sesuai urutan datang", type: "A" },
      { text: "Eisenhower matrix atau sistem serupa", type: "B" },
      { text: "List dan pick yang paling manageable", type: "C" },
      { text: "Intuisi, yang terasa penting dikerjakan", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Personal life vs work priorities...",
    options: [
      { text: "Work first, personal bisa menunggu", type: "A" },
      { text: "Balance dengan jadwal yang jelas", type: "B" },
      { text: "Flexible, tergantung situasi", type: "C" },
      { text: "Personal first, work seadanya", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Long-term goals vs immediate tasks...",
    options: [
      { text: "Immediate tasks menang, goals bisa nanti", type: "A" },
      { text: "Alokasi waktu untuk keduanya", type: "B" },
      { text: "Goals penting tapi task mendesak", type: "C" },
      { text: "Focus pada yang inspiring saat ini", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Saat interruption di tengah task penting...",
    options: [
      { text: "Handle interruption dulu kalau urgent", type: "A" },
      { text: "Block time, tidak terganggu untuk prioritas", type: "B" },
      { text: "Quick assess, lalu decide", type: "C" },
      { text: "Welcome distraction, break sebentar", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Ekspektasi orang lain vs prioritas sendiri...",
    options: [
      { text: "Accommodate orang lain dulu", type: "A" },
      { text: "Negotiate untuk align dengan prioritasku", type: "B" },
      { text: "Case by case basis", type: "C" },
      { text: "Prioritas sendiri lebih penting", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Kapan kamu review dan adjust prioritas...",
    options: [
      { text: "Real-time, berubah sesuai situasi", type: "A" },
      { text: "Weekly review, systematic", type: "B" },
      { text: "Saat terasa tidak balance", type: "C" },
      { text: "Jarang, flow aja", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Health dan self-care dalam prioritas...",
    options: [
      { text: "Bisa dikorbankan untuk urgent tasks", type: "A" },
      { text: "Non-negotiable, selalu terjadwal", type: "B" },
      { text: "Penting tapi kadang terlupakan", type: "C" },
      { text: "Top priority, basis untuk semua", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Saat semua terasa equally important...",
    options: [
      { text: "Pick yang deadline paling dekat", type: "A" },
      { text: "Step back, assess yang paling impactful", type: "B" },
      { text: "Mulai dari yang paling kecil", type: "C" },
      { text: "Follow intuition", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Definisi prioritas yang baik menurutmu...",
    options: [
      { text: "Semua urgent terselesaikan", type: "A" },
      { text: "Progress di hal-hal penting", type: "B" },
      { text: "Balance antara semua area hidup", type: "C" },
      { text: "Doing what fulfills me", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Urgency-Driven",
    emoji: "⏰",
    description: "Kamu driven by urgency! Deadline adalah raja dan kamu selalu respond to yang paling mendesak. Kamu reactive dan bagus dalam firefighting tapi mungkin miss long-term important stuff.",
    traits: ["Reactive", "Deadline-oriented", "Responsive", "Fast-paced"],
    strengths: ["Never miss deadlines", "Quick response", "Good in crisis"],
    weaknesses: ["Neglect important non-urgent", "Always in rush mode", "Burnout risk"],
    tips: ["Block time for important tasks", "Not everything urgent is important"],
  },
  B: {
    type: "B",
    title: "Strategic Prioritizer",
    emoji: "🎯",
    description: "Kamu adalah strategic prioritizer! Kamu tau bedanya urgent vs important dan selalu fokus pada yang benar-benar matters. Long-term thinking adalah kekuatanmu!",
    traits: ["Strategic", "Thoughtful", "Organized", "Goal-oriented"],
    strengths: ["Effective use of time", "Progress on goals", "Less reactive stress"],
    weaknesses: ["Bisa miss urgent needs", "Over-planning"],
    tips: ["Keep the balance", "Flexibility for surprises"],
  },
  C: {
    type: "C",
    title: "Momentum Builder",
    emoji: "🏃",
    description: "Kamu build momentum dengan small wins! Start dari yang manageable untuk build confidence lalu tackle yang lebih besar. Progress over perfection!",
    traits: ["Practical", "Progress-focused", "Adaptable", "Incremental"],
    strengths: ["Consistent progress", "Low overwhelm", "Achievable goals"],
    weaknesses: ["Bisa procrastinate big tasks", "Miss high-impact items"],
    tips: ["Tackle big frogs sometimes", "Don't avoid important challenges"],
  },
  D: {
    type: "D",
    title: "Passion-Led",
    emoji: "💖",
    description: "Kamu led by passion dan fulfillment! Prioritas adalah apa yang makes you feel alive. Kamu work best saat inspired dan following what you love. Life is too short for boring tasks!",
    traits: ["Passionate", "Intuitive", "Self-focused", "Creative"],
    strengths: ["High engagement", "Authentic life", "Joy in work"],
    weaknesses: ["Neglect necessary but boring", "Inconsistent productivity"],
    tips: ["Some tasks just need to be done", "Find passion in necessary work"],
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
