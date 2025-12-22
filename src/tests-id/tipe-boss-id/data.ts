// Tes Tipe Bos Kamu Nanti
// Kalau jadi pemimpin, kamu akan jadi bos seperti apa?

export const questions = [
  {
    id: 1,
    question: "Saat tim tidak mencapai target...",
    options: [
      { text: "Cari tau masalahnya dan bantu selesaikan", type: "A" },
      { text: "Tegas minta pertanggungjawaban", type: "B" },
      { text: "Motivasi tim untuk kerja lebih keras", type: "C" },
      { text: "Biarkan tim figure it out sendiri", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Gaya komunikasi dengan bawahan...",
    options: [
      { text: "Open door policy, selalu available", type: "A" },
      { text: "Formal dan professional", type: "B" },
      { text: "Friendly tapi tetap ada boundaries", type: "C" },
      { text: "Delegate dan trust, minimal oversight", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Tentang micromanagement...",
    options: [
      { text: "Monitoring penting untuk membantu", type: "A" },
      { text: "Perlu untuk ensure quality", type: "B" },
      { text: "Avoid, kasih guidance tapi freedom", type: "C" },
      { text: "Big no, totally hands off", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Memberikan feedback ke tim...",
    options: [
      { text: "Selalu dengan cara yang supportive", type: "A" },
      { text: "Direct dan to the point", type: "B" },
      { text: "Balance antara positif dan improvement", type: "C" },
      { text: "Jarang, kalau perlu aja", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Saat ada konflik antar anggota tim...",
    options: [
      { text: "Mediasi dan cari solusi bersama", type: "A" },
      { text: "Putuskan siapa yang benar, end it", type: "B" },
      { text: "Biarkan mereka selesaikan sendiri dulu", type: "C" },
      { text: "Tidak ikut campur urusan personal", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Work-life balance bawahan...",
    options: [
      { text: "Sangat diperhatikan, anti lembur berlebihan", type: "A" },
      { text: "Target harus tercapai, apapun caranya", type: "B" },
      { text: "Flexible, asal hasil bagus", type: "C" },
      { text: "Bukan urusan bos, itu pilihan mereka", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Cara memotivasi tim...",
    options: [
      { text: "Recognition dan appreciation", type: "A" },
      { text: "Bonus dan insentif performance", type: "B" },
      { text: "Career development dan growth", type: "C" },
      { text: "Let them find own motivation", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Meeting dengan tim...",
    options: [
      { text: "Regular check-in untuk bonding juga", type: "A" },
      { text: "Structured dan agenda driven", type: "B" },
      { text: "As needed, tidak over-meeting", type: "C" },
      { text: "Minimal meeting, prefer async", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Kesalahan yang dibuat bawahan...",
    options: [
      { text: "Jadikan learning moment, bukan punishment", type: "A" },
      { text: "Ada konsekuensi yang jelas", type: "B" },
      { text: "Tergantung severity kesalahannya", type: "C" },
      { text: "Bukan big deal kalau tidak berulang", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Credit untuk kesuksesan project...",
    options: [
      { text: "Semua kredit untuk tim", type: "A" },
      { text: "Fair recognition sesuai kontribusi", type: "B" },
      { text: "Celebrate bersama sebagai tim", type: "C" },
      { text: "Tidak terlalu peduli credit", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bawahan dengan ide berbeda dari kamu...",
    options: [
      { text: "Dengarkan dan consider dengan open mind", type: "A" },
      { text: "Challenge dan debate untuk dapat yang terbaik", type: "B" },
      { text: "Try their way kalau masuk akal", type: "C" },
      { text: "Let them execute, see what happens", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Philosophy kepemimpinan kamu...",
    options: [
      { text: "Servant leadership, help team succeed", type: "A" },
      { text: "Result oriented, performance is key", type: "B" },
      { text: "Empowerment, grow future leaders", type: "C" },
      { text: "Autonomy, hire good people and let them be", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Bos Supportive",
    emoji: "🤗",
    description: "Kamu adalah tipe bos yang sangat supportive dan caring! Tim adalah prioritas dan kamu selalu ada untuk membantu. Servant leadership adalah style-mu.",
    traits: ["Supportive", "Caring", "Available", "People-first"],
    strengths: ["High team loyalty", "Good rapport", "Low turnover"],
    weaknesses: ["Kadang terlalu soft", "Susah tough decision"],
    tips: ["Balance care dengan accountability", "Kadang tough love diperlukan"],
  },
  B: {
    type: "B",
    title: "Bos Tegas",
    emoji: "👔",
    description: "Kamu adalah bos yang tegas dan result oriented! Clear expectations, direct feedback, dan focus pada performance. No nonsense leadership.",
    traits: ["Direct", "Result focused", "Disciplined", "Professional"],
    strengths: ["Clear direction", "High performance", "Efficient"],
    weaknesses: ["Bisa terkesan harsh", "Morale might suffer"],
    tips: ["Softness kadang needed", "Results penting tapi people juga"],
  },
  C: {
    type: "C",
    title: "Bos Mentor",
    emoji: "🌱",
    description: "Kamu adalah bos yang focus pada development! Grow people, empower mereka, dan build future leaders. Balance antara guidance dan freedom.",
    traits: ["Developer", "Empowering", "Balanced", "Growth focused"],
    strengths: ["Builds strong teams", "Develops talent", "Sustainable leadership"],
    weaknesses: ["Takes time to see results", "Might not push enough"],
    tips: ["Keep the balance", "Celebrate small wins juga"],
  },
  D: {
    type: "D",
    title: "Bos Hands-Off",
    emoji: "🦅",
    description: "Kamu adalah bos yang memberikan full autonomy! Hire good people dan let them do their thing. Trust adalah foundation kepemimpinanmu.",
    traits: ["Trusting", "Autonomous", "Minimal interference", "Freedom giver"],
    strengths: ["Attracts self-starters", "No micromanagement", "Empowers team"],
    weaknesses: ["Might seem absent", "Some people need more guidance"],
    tips: ["Be available when needed", "Not everyone thrives with full autonomy"],
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
