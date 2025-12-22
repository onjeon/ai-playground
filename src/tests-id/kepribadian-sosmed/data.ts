// Tes Kepribadian dari Sosial Media
// Gaya bersosialmediamu mencerminkan siapa kamu!

export const questions = [
  {
    id: 1,
    question: "Platform sosial media utama kamu...",
    options: [
      { text: "Instagram - foto dan stories", type: "A" },
      { text: "Twitter/X - update dan opini", type: "B" },
      { text: "TikTok - video dan hiburan", type: "C" },
      { text: "LinkedIn atau platform profesional", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Frekuensi posting kamu...",
    options: [
      { text: "Setiap hari atau beberapa kali sehari", type: "A" },
      { text: "Kalau ada yang menarik untuk di-share", type: "B" },
      { text: "Kapan aja, mood based", type: "C" },
      { text: "Jarang, lebih sering scroll", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Konten yang biasa kamu post...",
    options: [
      { text: "Foto aesthetic dan curated moments", type: "A" },
      { text: "Opini, thread, atau informasi", type: "B" },
      { text: "Konten lucu atau relatable", type: "C" },
      { text: "Achievements dan milestone profesional", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Sebelum posting, kamu biasanya...",
    options: [
      { text: "Edit foto sampai perfect", type: "A" },
      { text: "Cek fakta dan susun kata-kata", type: "B" },
      { text: "Langsung post, spontan", type: "C" },
      { text: "Pikir-pikir apakah worth untuk di-share", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Saat scroll feed, kamu cenderung...",
    options: [
      { text: "Like dan comment di banyak post", type: "A" },
      { text: "Engage kalau topiknya menarik", type: "B" },
      { text: "Watch tanpa banyak interaksi", type: "C" },
      { text: "Save post yang berguna", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Akun yang kamu follow kebanyakan...",
    options: [
      { text: "Influencer dan selebgram", type: "A" },
      { text: "News, edukasi, dan thought leaders", type: "B" },
      { text: "Akun meme dan hiburan", type: "C" },
      { text: "Industry experts dan profesional", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Reaksi kamu saat viral challenge atau trend...",
    options: [
      { text: "Ikutan biar tidak ketinggalan!", type: "A" },
      { text: "Observe dan comment tapi tidak ikut", type: "B" },
      { text: "Ikut kalau seru dan relate", type: "C" },
      { text: "Skip, tidak terlalu peduli trend", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Story/status yang kamu sering post...",
    options: [
      { text: "Daily life dan aktivitas", type: "A" },
      { text: "Artikel atau berita yang di-share", type: "B" },
      { text: "Memes dan konten lucu", type: "C" },
      { text: "Jarang update story", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Saat dapat hate comment atau kritik...",
    options: [
      { text: "Reply dengan defend diri", type: "A" },
      { text: "Diskusi dengan argumen logis", type: "B" },
      { text: "Cuek atau balas dengan humor", type: "C" },
      { text: "Delete atau ignore", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Privacy setting akun kamu...",
    options: [
      { text: "Public, makin banyak followers makin bagus", type: "A" },
      { text: "Public tapi selective content", type: "B" },
      { text: "Semi-private, bisa dilihat teman teman", type: "C" },
      { text: "Private, hanya orang yang dikenal", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Hal yang paling annoying di sosmed menurutmu...",
    options: [
      { text: "Orang yang tidak engage dengan postku", type: "A" },
      { text: "Hoax dan misinformasi", type: "B" },
      { text: "Konten yang terlalu serius", type: "C" },
      { text: "Oversharing dan drama", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Tujuan utama kamu pakai sosmed...",
    options: [
      { text: "Personal branding dan exposure", type: "A" },
      { text: "Informasi dan diskusi", type: "B" },
      { text: "Hiburan dan fun", type: "C" },
      { text: "Keep in touch dengan orang", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Content Creator",
    emoji: "📸",
    description: "Kamu adalah natural content creator! Sosmed adalah platform untuk express diri dan membangun personal brand. Feed-mu curated dan aesthetic adalah prioritas.",
    traits: ["Creative", "Image conscious", "Ambitious", "Social"],
    strengths: ["Good personal branding", "Creative eye", "Engagement skills"],
    weaknesses: ["Bisa terlalu focused on validation", "Comparison trap"],
    tips: ["Sesekali disconnect dari metrics", "Authenticity > perfection"],
  },
  B: {
    type: "B",
    title: "The Opinionist",
    emoji: "💭",
    description: "Kamu adalah tipe yang menggunakan sosmed untuk bersuara dan berbagi informasi! Platform adalah tempat diskusi dan menyebarkan awareness tentang isu yang penting.",
    traits: ["Opinionated", "Informed", "Critical thinker", "Vocal"],
    strengths: ["Knowledgeable", "Can influence others positively", "Brave"],
    weaknesses: ["Bisa terlalu argumentative", "Exhausting debate"],
    tips: ["Pick your battles", "Tidak semua perlu dikomentari"],
  },
  C: {
    type: "C",
    title: "The Entertainer",
    emoji: "😂",
    description: "Sosmed adalah tempat untuk fun dan hiburan! Kamu tidak terlalu serius, enjoy scrolling, dan share konten yang bikin orang ketawa. Vibes: good time only!",
    traits: ["Fun", "Easygoing", "Relatable", "Light-hearted"],
    strengths: ["Good mood booster", "Not stressed about social media", "Authentic"],
    weaknesses: ["Bisa terlalu banyak screen time", "Tidak productive"],
    tips: ["Limit screen time", "Sesekali consume konten edukatif juga"],
  },
  D: {
    type: "D",
    title: "The Observer",
    emoji: "👁️",
    description: "Kamu adalah silent observer yang bijak! Pakai sosmed secukupnya dan lebih banyak consume daripada create. Privacy dan boundaries adalah prioritas.",
    traits: ["Private", "Selective", "Mindful", "Professional"],
    strengths: ["Healthy relationship with social media", "Grounded", "Focused"],
    weaknesses: ["Kadang miss out on trends", "Less connected"],
    tips: ["Sesekali engage lebih aktif", "Share juga bisa inspiring buat orang lain"],
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
