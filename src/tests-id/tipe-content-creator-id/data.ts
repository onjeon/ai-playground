// Tipe Content Creator Indonesia Kamu
// Tes ini mengungkap tipe content creator seperti apa kamu!

export const questions = [
  {
    id: 1,
    question: "Platform utama untuk berkreasi...",
    options: [
      { text: "Instagram, aesthetic is everything", type: "A" },
      { text: "YouTube, long-form content", type: "B" },
      { text: "TikTok, short and viral", type: "C" },
      { text: "Multi-platform, everywhere!", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Niche atau topik konten...",
    options: [
      { text: "Lifestyle dan daily life", type: "A" },
      { text: "Edukasi dan informatif", type: "B" },
      { text: "Entertainment dan comedy", type: "C" },
      { text: "Belum nemu niche, masih explore", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Motivasi bikin konten...",
    options: [
      { text: "Self-expression dan creative outlet", type: "A" },
      { text: "Berbagi knowledge dan membantu orang", type: "B" },
      { text: "Fame dan influence", type: "C" },
      { text: "Income dan monetization", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Konsistensi upload...",
    options: [
      { text: "Daily atau hampir setiap hari", type: "A" },
      { text: "Scheduled, 2-3x seminggu", type: "B" },
      { text: "Kalau ada ide atau mood", type: "C" },
      { text: "Jarang, perfectionist", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Editing style...",
    options: [
      { text: "Aesthetic dan cohesive", type: "A" },
      { text: "Informative dengan graphics", type: "B" },
      { text: "Fast-paced dan trending", type: "C" },
      { text: "Minimalis, content is king", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Engagement dengan followers...",
    options: [
      { text: "Aktif balas semua comment dan DM", type: "A" },
      { text: "Balas yang meaningful", type: "B" },
      { text: "Create community dengan live atau QnA", type: "C" },
      { text: "Fokus bikin konten, engagement later", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Reaksi terhadap hate comment atau kritik...",
    options: [
      { text: "Ignore dan block kalau perlu", type: "A" },
      { text: "Tanggapi dengan dewasa kalau konstruktif", type: "B" },
      { text: "Jadikan konten atau clap back", type: "C" },
      { text: "Affected, kadang demotivated", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Collaboration dengan creator lain...",
    options: [
      { text: "Sering, networking penting", type: "A" },
      { text: "Sesekali dengan yang satu niche", type: "B" },
      { text: "Prefer solo, biar authentic", type: "C" },
      { text: "Belum pernah, still growing", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Sponsored content atau endorsement...",
    options: [
      { text: "Selective, harus sesuai brand image", type: "A" },
      { text: "Terbuka, additional income", type: "B" },
      { text: "Hanya produk yang benar-benar dipakai", type: "C" },
      { text: "Belum sampai tahap itu", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Ide konten biasanya dari mana?",
    options: [
      { text: "Trend dan apa yang viral", type: "A" },
      { text: "Personal experience dan observasi", type: "B" },
      { text: "Request dari followers", type: "C" },
      { text: "Random creativity, datang tiba-tiba", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Equipment dan setup...",
    options: [
      { text: "Invest proper, camera dan lighting bagus", type: "A" },
      { text: "HP cukup, content lebih penting dari gear", type: "B" },
      { text: "Upgrade seiring growth", type: "C" },
      { text: "Basic aja, yang penting mulai", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Goal sebagai content creator...",
    options: [
      { text: "Full-time creator, passive income", type: "A" },
      { text: "Build community dan impact positif", type: "B" },
      { text: "Side hustle, fun hobby", type: "C" },
      { text: "Masih figuring out", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Professional Creator",
    emoji: "📱",
    description: "Kamu adalah content creator yang serius dan professional! Ada strategi, branding yang jelas, dan treat this as business. Quality dan consistency adalah kuncimu.",
    traits: ["Strategic", "Professional", "Consistent", "Brand-aware"],
    strengths: ["Clear direction", "Monetizable", "Good quality", "Sustainable"],
    weaknesses: ["Bisa terlalu calculated", "Burnout risk"],
    tips: ["Stay authentic", "Don't lose the fun", "Mental health first"],
  },
  B: {
    type: "B",
    title: "Educator Creator",
    emoji: "📚",
    description: "Kamu adalah creator yang fokus pada edukasi dan berbagi! Impact lebih penting dari fame. Kontenmu membawa value dan membantu orang learn something new.",
    traits: ["Educational", "Helpful", "Knowledgeable", "Purposeful"],
    strengths: ["Meaningful content", "Loyal audience", "Long-term value"],
    weaknesses: ["Growth bisa lambat", "Less viral potential"],
    tips: ["Keep educating!", "Entertainment element bisa boost reach"],
  },
  C: {
    type: "C",
    title: "Entertainment Creator",
    emoji: "🎭",
    description: "Kamu adalah entertainer! Kontenmu bikin orang ketawa, terhibur, dan escape dari rutinitas. Viral potential tinggi dan audience engagement kuat.",
    traits: ["Entertaining", "Funny", "Trendy", "Engaging"],
    strengths: ["High engagement", "Viral potential", "Fun to watch"],
    weaknesses: ["Sustainability challenge", "Trend-dependent"],
    tips: ["Build depth beyond entertainment", "Diversify content types"],
  },
  D: {
    type: "D",
    title: "Emerging Creator",
    emoji: "🌱",
    description: "Kamu adalah creator yang masih dalam perjalanan menemukan jati diri! Masih explore, testing things, dan belum commit ke satu niche. It's okay, this is the discovery phase.",
    traits: ["Exploring", "Learning", "Potential", "Flexible"],
    strengths: ["Open to pivots", "Learning mode", "No pressure"],
    weaknesses: ["No clear direction yet", "Inconsistent"],
    tips: ["Keep creating!", "Find your unique voice", "Consistency > Perfection"],
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
