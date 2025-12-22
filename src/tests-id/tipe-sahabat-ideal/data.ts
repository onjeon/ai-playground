// Tes Tipe Sahabat Ideal Kamu
// Temukan karakteristik bestie yang cocok buatmu!

export const questions = [
  {
    id: 1,
    question: "Yang paling kamu butuhkan dari sahabat...",
    options: [
      { text: "Selalu ada saat dibutuhkan", type: "A" },
      { text: "Bisa diajak diskusi dan tukar pikiran", type: "B" },
      { text: "Fun dan bikin hidup lebih seru", type: "C" },
      { text: "Jujur walau pahit, no sugar coating", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Aktivitas ideal sama sahabat...",
    options: [
      { text: "Ngobrol panjang lebar, curhat session", type: "A" },
      { text: "Diskusi atau brainstorm bareng", type: "B" },
      { text: "Hangout, jalan-jalan, atau party", type: "C" },
      { text: "Quality time santai, apapun aktivitasnya", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Intensitas komunikasi sama sahabat...",
    options: [
      { text: "Hampir tiap hari, walau cuma say hi", type: "A" },
      { text: "Rutin tapi tidak harus tiap hari", type: "B" },
      { text: "Intense pas lagi bareng, chill pas sibuk", type: "C" },
      { text: "Jarang chat tapi kalau ketemu intens", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Sahabat ideal saat kamu ada masalah...",
    options: [
      { text: "Dengerin dan kasih support emosional", type: "A" },
      { text: "Kasih saran dan solusi praktis", type: "B" },
      { text: "Ajak have fun biar lupa masalah", type: "C" },
      { text: "Reality check dan jujur tentang situasi", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Soal rahasia sama sahabat...",
    options: [
      { text: "Share everything, no secrets", type: "A" },
      { text: "Share yang penting-penting aja", type: "B" },
      { text: "Tergantung mood dan situasi", type: "C" },
      { text: "Ada hal yang tetap private", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Konflik sama sahabat, kamu prefer...",
    options: [
      { text: "Langsung dibahas dan selesaikan", type: "A" },
      { text: "Cool down dulu baru diskusi", type: "B" },
      { text: "Avoid konflik, fokus yang positif", type: "C" },
      { text: "Honest confrontation, tegas tapi fair", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Jumlah sahabat dekat yang ideal...",
    options: [
      { text: "Satu atau dua orang saja, super close", type: "A" },
      { text: "Small group, 3-5 orang", type: "B" },
      { text: "Banyak, karena suka social", type: "C" },
      { text: "Quality over quantity", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Sahabat yang bikin kamu uncomfortable...",
    options: [
      { text: "Yang tidak reliable atau ghosting", type: "A" },
      { text: "Yang judgmental atau close minded", type: "B" },
      { text: "Yang boring atau terlalu serius", type: "C" },
      { text: "Yang fake atau tidak genuine", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Soal perbedaan pendapat sama sahabat...",
    options: [
      { text: "Try to understand perspective-nya", type: "A" },
      { text: "Debat sehat, agree to disagree", type: "B" },
      { text: "Avoid topik sensitif, focus on fun", type: "C" },
      { text: "Tetap jujur tapi respect boundaries", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Ekspektasi kamu ke sahabat...",
    options: [
      { text: "Selalu prioritize friendship", type: "A" },
      { text: "Mutual growth dan support", type: "B" },
      { text: "Good vibes dan no drama", type: "C" },
      { text: "Authentic dan bisa diandalkan", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Sahabat dan pasangan, priority-nya...",
    options: [
      { text: "Sahabat tetap penting walau sudah punya pacar", type: "A" },
      { text: "Balance keduanya dengan baik", type: "B" },
      { text: "Tergantung situasi dan urgensi", type: "C" },
      { text: "Each has their own place", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Friendship goal kamu...",
    options: [
      { text: "Ride or die, selamanya", type: "A" },
      { text: "Growing together dan inspiring", type: "B" },
      { text: "Fun memories dan good times", type: "C" },
      { text: "Real dan no bullshit", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Sahabat Ride or Die",
    emoji: "💗",
    description: "Kamu butuh sahabat yang loyal sampai mati! Yang selalu ada, bisa curhat apapun, dan prioritize friendship. Quality time dan emotional connection adalah segalanya.",
    traits: ["Loyal", "Emotionally connected", "Supportive", "Close-knit"],
    strengths: ["Deep bonds", "Always there for each other", "Trustworthy"],
    weaknesses: ["Kadang terlalu demanding", "Clingy vibes"],
    tips: ["Beri space juga ke sahabat", "Independence dalam friendship itu sehat"],
  },
  B: {
    type: "B",
    title: "Sahabat Intellectual",
    emoji: "🧠",
    description: "Kamu value sahabat yang bisa tukar pikiran dan saling inspire! Diskusi, debat sehat, dan mutual growth adalah fondasi persahabatan idealmu.",
    traits: ["Intellectual", "Growth oriented", "Thoughtful", "Inspiring"],
    strengths: ["Meaningful conversations", "Challenge each other", "Productive friendship"],
    weaknesses: ["Kadang terlalu serius", "Kurang emotional bonding"],
    tips: ["Sesekali just have fun", "Emotional support juga penting"],
  },
  C: {
    type: "C",
    title: "Sahabat Good Vibes",
    emoji: "🎉",
    description: "Yang penting fun dan no drama! Kamu cari sahabat yang bisa diajak seru-seruan, hangout, dan bikin hidup lebih berwarna. Positivity is key!",
    traits: ["Fun loving", "Social", "Easy going", "Positive"],
    strengths: ["Great memories", "Light atmosphere", "Good energy"],
    weaknesses: ["Kurang depth kadang", "Avoid serious talks"],
    tips: ["Deep connection juga penting", "Jangan takut vulnerable"],
  },
  D: {
    type: "D",
    title: "Sahabat Authentic",
    emoji: "💎",
    description: "Kamu butuh sahabat yang real dan jujur! Tidak perlu banyak, yang penting genuine. No fake friends, no sugar coating, just real talk.",
    traits: ["Authentic", "Honest", "Selective", "Genuine"],
    strengths: ["Real connections", "Trustworthy", "No BS policy"],
    weaknesses: ["Kadang terlalu blunt", "Trust issues dengan orang baru"],
    tips: ["Beri chance ke friendship baru", "Jujur bukan berarti kasar"],
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
