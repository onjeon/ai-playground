// Tipe Pengguna TikTok
// Tes ini mengungkap personality kamu sebagai pengguna TikTok!

export const questions = [
  {
    id: 1,
    question: "Saat buka TikTok, hal pertama yang kamu lakukan...",
    options: [
      { text: "Langsung scroll FYP, let algorithm do its magic", type: "A" },
      { text: "Check notifications dan following dulu", type: "B" },
      { text: "Buka saved videos atau drafts", type: "C" },
      { text: "Search specific content", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Durasi average kamu di TikTok per session...",
    options: [
      { text: "Hilang waktu, tau-tau 2 jam", type: "A" },
      { text: "30 menit - 1 jam, controlled", type: "B" },
      { text: "Depends, bisa sebentar bisa lama", type: "C" },
      { text: "Quick scroll, 15-30 menit", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Content yang paling sering kamu tonton...",
    options: [
      { text: "Trending sounds dan viral videos", type: "A" },
      { text: "Educational/informational content", type: "B" },
      { text: "Specific niche (beauty, gaming, etc)", type: "C" },
      { text: "Random mix of everything", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Interaksi kamu di TikTok biasanya...",
    options: [
      { text: "Like banyak, comment kadang-kadang", type: "A" },
      { text: "Save content yang useful", type: "B" },
      { text: "Share ke temen-temen", type: "C" },
      { text: "Silent watcher, jarang interact", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Posting content sendiri...",
    options: [
      { text: "Sering, suka create content", type: "A" },
      { text: "Kadang-kadang kalau ada ide bagus", type: "B" },
      { text: "Jarang, lebih suka consume", type: "C" },
      { text: "Never, consumer only", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Reaksi saat ada trend baru...",
    options: [
      { text: "Ikutan! Jump on trend cepat", type: "A" },
      { text: "Watch dulu, join kalau cocok", type: "B" },
      { text: "Appreciate tapi ga ikutan", type: "C" },
      { text: "Annoyed kalau terlalu overexposed", type: "D" },
    ],
  },
  {
    id: 7,
    question: "TikTok creators yang kamu follow biasanya...",
    options: [
      { text: "Big creators dan celebrities", type: "A" },
      { text: "Expert/educator di bidang tertentu", type: "B" },
      { text: "Mix of niche creators", type: "C" },
      { text: "Ga terlalu follow banyak", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Saat nemuin video bagus...",
    options: [
      { text: "Watch berulang, hafalin soundnya", type: "A" },
      { text: "Save untuk reference nanti", type: "B" },
      { text: "Share ke specific orang yang relate", type: "C" },
      { text: "Enjoy sekali, move on", type: "D" },
    ],
  },
  {
    id: 9,
    question: "TikTok influence ke daily life...",
    options: [
      { text: "Significant! Banyak discover dari TikTok", type: "A" },
      { text: "Moderate, some useful info", type: "B" },
      { text: "Entertainment mostly", type: "C" },
      { text: "Minimal, just killing time", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Comments section, kamu biasanya...",
    options: [
      { text: "Read dan suka join conversation", type: "A" },
      { text: "Read untuk additional context", type: "B" },
      { text: "Scroll comments buat entertainment", type: "C" },
      { text: "Skip, langsung next video", type: "D" },
    ],
  },
  {
    id: 11,
    question: "TikTok Shop/affiliate content...",
    options: [
      { text: "Sudah beli beberapa kali!", type: "A" },
      { text: "Research dulu sebelum beli", type: "B" },
      { text: "Tertarik tapi belum pernah beli", type: "C" },
      { text: "Skip, not interested", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Kalau TikTok hilang besok...",
    options: [
      { text: "Devastated! My main entertainment", type: "A" },
      { text: "Sad tapi pindah platform lain", type: "B" },
      { text: "Will miss it tapi life goes on", type: "C" },
      { text: "Honestly might be good for me", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The TikTok Addict",
    emoji: "📱",
    description: "Kamu adalah TikTok power user! FYP adalah rumah kedua, trends adalah bahasa, dan life without TikTok is unimaginable. Algorithm knows you well!",
    traits: ["Trendy", "Engaged", "Social media native", "Entertained"],
    strengths: ["Always updated", "Great conversation starter", "Content literacy"],
    weaknesses: ["Time sink", "Dopamine dependency", "Real life? What's that?"],
    tips: ["Set time limits", "Touch grass occasionally", "Your attention is valuable"],
  },
  B: {
    type: "B",
    title: "The Intentional Scroller",
    emoji: "🎯",
    description: "Kamu use TikTok dengan purpose! Educational content, useful info, dan mindful consumption. TikTok is tool, not trap for you.",
    traits: ["Intentional", "Learning-focused", "Controlled", "Selective"],
    strengths: ["Productive use of platform", "Learn new things", "Not addicted"],
    weaknesses: ["Might miss fun viral content", "A bit too serious?"],
    tips: ["Some mindless scrolling is okay", "Entertainment has value too", "Loosen up sometimes"],
  },
  C: {
    type: "C",
    title: "The Niche Explorer",
    emoji: "🔍",
    description: "Kamu punya TikTok experience yang unique! Deep dive ke specific interests dan share dengan close circle. Quality over quantity!",
    traits: ["Curious", "Selective", "Niche interests", "Sharing person"],
    strengths: ["Deep knowledge in areas", "Quality content curation", "Meaningful shares"],
    weaknesses: ["Echo chamber risk", "Might miss broader trends"],
    tips: ["Explore outside comfort zone", "Algorithm can limit you", "Stay open to new content"],
  },
  D: {
    type: "D",
    title: "The Casual Visitor",
    emoji: "👀",
    description: "TikTok is casual entertainment for you! Quick visits, minimal engagement, dan not letting it take over life. Healthy relationship!",
    traits: ["Casual", "Balanced", "Detached", "Independent"],
    strengths: ["Not addicted", "Balanced media diet", "Free attention span"],
    weaknesses: ["Miss cultural moments", "Out of loop on trends"],
    tips: ["Your balance is healthy!", "Don't feel pressured to engage more", "Missing trends is fine"],
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
