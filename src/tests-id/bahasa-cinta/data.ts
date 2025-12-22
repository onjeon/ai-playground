// Bahasa Cinta Kamu
// Tes ini mengungkap bagaimana kamu memberi dan menerima cinta!

export const questions = [
  {
    id: 1,
    question: "Kamu merasa paling dicintai ketika pasangan...",
    options: [
      { text: "Bilang 'aku sayang kamu' dan pujian tulus", type: "A" },
      { text: "Meluangkan waktu khusus bersamamu", type: "B" },
      { text: "Memberi hadiah atau surprise kecil", type: "C" },
      { text: "Membantu mengerjakan sesuatu untukmu", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Cara kamu menunjukkan sayang ke orang tersayang?",
    options: [
      { text: "Sering bilang perasaan dan memberi pujian", type: "A" },
      { text: "Menghabiskan quality time bersama", type: "B" },
      { text: "Membelikan atau membuatkan sesuatu", type: "C" },
      { text: "Membantu dan meringankan beban mereka", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Apa yang paling membuat hatimu hangat?",
    options: [
      { text: "Kata-kata afirmasi dan apresiasi", type: "A" },
      { text: "Waktu berkualitas tanpa distraksi", type: "B" },
      { text: "Hadiah yang thoughtful (tidak harus mahal)", type: "C" },
      { text: "Dibantu saat kamu sedang kesulitan", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Dalam hubungan, hal yang paling kamu butuhkan?",
    options: [
      { text: "Komunikasi verbal yang ekspresif", type: "A" },
      { text: "Prioritas waktu dan perhatian", type: "B" },
      { text: "Bukti nyata dalam bentuk pemberian", type: "C" },
      { text: "Actions dan bantuan konkret", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Apa yang membuatmu merasa tidak dicintai?",
    options: [
      { text: "Jarang mendengar kata sayang atau pujian", type: "A" },
      { text: "Pasangan selalu sibuk, tidak ada waktu", type: "B" },
      { text: "Tidak pernah diingat dengan hadiah/surprise", type: "C" },
      { text: "Tidak pernah dibantu walau sedang susah", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Anniversary atau hari spesial, kamu berharap...",
    options: [
      { text: "Kata-kata romantis dan heartfelt message", type: "A" },
      { text: "Quality date tanpa gangguan", type: "B" },
      { text: "Hadiah yang bermakna", type: "C" },
      { text: "Dibuatkan sesuatu atau dibantu sesuatu", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Saat LDR atau terpisah jarak, yang paling kamu rindu?",
    options: [
      { text: "Mendengar suaranya dan kata-kata sayangnya", type: "A" },
      { text: "Waktu berdua yang berkualitas", type: "B" },
      { text: "Hadiah atau barang yang mengingatkan dia", type: "C" },
      { text: "Bantuan dan kehadirannya saat butuh", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Cara terbaik pasangan membuatmu merasa spesial?",
    options: [
      { text: "Memuji dan mengapresiasi hal-hal kecil", type: "A" },
      { text: "Full attention tanpa HP saat bersama", type: "B" },
      { text: "Surprise dengan sesuatu yang kamu suka", type: "C" },
      { text: "Mengerjakan tugas atau tanggung jawabmu", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Kalau harus memilih, mana yang lebih penting?",
    options: [
      { text: "Pasangan yang ekspresif dan komunikatif", type: "A" },
      { text: "Pasangan yang selalu ada waktu untukmu", type: "B" },
      { text: "Pasangan yang romantis dengan pemberian", type: "C" },
      { text: "Pasangan yang supportive dan helpful", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Love language ke teman atau keluarga, sama tidak?",
    options: [
      { text: "Sama, aku suka verbal affirmation ke semua", type: "A" },
      { text: "Sama, quality time adalah cara connect", type: "B" },
      { text: "Sama, suka kasih hadiah ke semua orang", type: "C" },
      { text: "Sama, menunjukkan cinta lewat bantuan", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Apa yang membuat hubungan terasa 'hidup'?",
    options: [
      { text: "Komunikasi yang dalam dan meaningful", type: "A" },
      { text: "Waktu berdua yang sering dan berkualitas", type: "B" },
      { text: "Gesture romantis dan kejutan", type: "C" },
      { text: "Saling membantu dalam kesulitan", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Tanda cinta terbesar menurutmu adalah...",
    options: [
      { text: "Kata-kata yang tulus dan konsisten", type: "A" },
      { text: "Waktu dan perhatian yang diberikan", type: "B" },
      { text: "Usaha dalam memberikan sesuatu", type: "C" },
      { text: "Tindakan nyata dalam membantu", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Words of Affirmation",
    emoji: "💬",
    description: "Bahasa cintamu adalah kata-kata! Kamu merasa dicintai melalui pujian, apresiasi verbal, dan ekspresi perasaan. Kata-kata memiliki power besar untukmu.",
    traits: ["Verbal", "Ekspresif", "Komunikatif", "Appreciative"],
    strengths: ["Pandai mengekspresikan perasaan", "Good communicator", "Affirming"],
    weaknesses: ["Sensitif terhadap kritik", "Butuh verbal reassurance"],
    tips: ["Communicate kebutuhanmu ke pasangan", "Tidak semua orang ekspresif secara verbal"],
  },
  B: {
    type: "B",
    title: "Quality Time",
    emoji: "⏰",
    description: "Bahasa cintamu adalah waktu berkualitas! Kehadiran penuh dan perhatian tanpa distraksi adalah cara kamu merasa dicintai. Presence is the greatest present.",
    traits: ["Present-focused", "Attention-seeking", "Connection-oriented", "Engaged"],
    strengths: ["Fully present saat bersama", "Deep connections", "Memorable moments"],
    weaknesses: ["Tersakiti jika diabaikan", "Butuh banyak waktu bersama"],
    tips: ["Communicate pentingnya undivided attention", "Quality over quantity"],
  },
  C: {
    type: "C",
    title: "Receiving Gifts",
    emoji: "🎁",
    description: "Bahasa cintamu adalah pemberian! Bukan soal mahal, tapi gesture thoughtful yang menunjukkan kamu dipikirkan. Hadiah adalah simbol cinta yang tangible.",
    traits: ["Symbolic", "Thoughtful", "Appreciative", "Sentimental"],
    strengths: ["Menghargai usaha dan gesture", "Good gift-giver", "Sentimental"],
    weaknesses: ["Bisa terkesan materialistis (padahal bukan)", "Kecewa jika tidak diingat"],
    tips: ["Jelaskan bahwa ini bukan soal harga", "Small thoughtful gifts mean the world"],
  },
  D: {
    type: "D",
    title: "Acts of Service",
    emoji: "🤝",
    description: "Bahasa cintamu adalah tindakan nyata! Actions speak louder than words untukmu. Dibantu dan diringankan bebannya adalah bukti cinta terbesar.",
    traits: ["Action-oriented", "Practical", "Helpful", "Service-minded"],
    strengths: ["Reliable partner", "Shows love through helping", "Practical love"],
    weaknesses: ["Bisa kecewa jika tidak dibantu", "May overwork untuk orang lain"],
    tips: ["Communicate apa yang butuh bantuan", "Appreciate juga bentuk cinta lain"],
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
