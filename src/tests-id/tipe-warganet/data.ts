export const questions = [
  {
    id: 1,
    question: "Apa yang pertama kamu lakukan saat bangun tidur?",
    options: [
      { text: "Cek notifikasi dan scroll timeline", type: "A" },
      { text: "Baca berita dan update terkini", type: "B" },
      { text: "Langsung kerja tanpa buka sosmed", type: "C" },
      { text: "Posting good morning atau story", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bagaimana kamu menanggapi kontroversi di medsos?",
    options: [
      { text: "Ikut komentar dan berdebat", type: "A" },
      { text: "Menganalisis dan share opini terukur", type: "B" },
      { text: "Scroll aja, males ikut campur", type: "C" },
      { text: "Bikin thread atau konten tentang itu", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Apa konten yang paling sering kamu posting?",
    options: [
      { text: "Meme, jokes, dan konten viral", type: "A" },
      { text: "Opini, artikel, atau informasi", type: "B" },
      { text: "Jarang posting, lebih suka scroll", type: "C" },
      { text: "Foto diri, OOTD, atau lifestyle", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Apa yang kamu lakukan saat melihat berita hoax?",
    options: [
      { text: "Roasting dengan sarkas", type: "A" },
      { text: "Klarifikasi dengan data dan fakta", type: "B" },
      { text: "Scroll aja, bukan tanggung jawabku", type: "C" },
      { text: "Share ke story dengan penjelasan", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bagaimana caramu berinteraksi dengan followers?",
    options: [
      { text: "Bales dengan jokes dan banter", type: "A" },
      { text: "Diskusi serius dan berbobot", type: "B" },
      { text: "Jarang interaksi, silent reader", type: "C" },
      { text: "Ramah dan personal dengan semua orang", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Apa yang membuatmu unfollow seseorang?",
    options: [
      { text: "Kontennya tidak lucu lagi", type: "A" },
      { text: "Sering share misinformasi", type: "B" },
      { text: "Terlalu berisik dan annoying", type: "C" },
      { text: "Negative vibes dan drama terus", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Apa platform sosmed favoritmu?",
    options: [
      { text: "Twitter/X - untuk jokes dan trending", type: "A" },
      { text: "LinkedIn atau Medium - untuk profesional", type: "B" },
      { text: "Reddit atau forum - untuk lurking", type: "C" },
      { text: "Instagram atau TikTok - untuk konten visual", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bagaimana reaksimu saat di-mention di drama online?",
    options: [
      { text: "Gas! Klarifikasi dengan roasting", type: "A" },
      { text: "Jelaskan dengan fakta dan bukti", type: "B" },
      { text: "Mute dan ignore", type: "C" },
      { text: "Bikin statement atau video klarifikasi", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Apa tujuan utamamu di sosial media?",
    options: [
      { text: "Hiburan dan having fun", type: "A" },
      { text: "Update informasi dan edukasi", type: "B" },
      { text: "Stalking dan observasi", type: "C" },
      { text: "Personal branding dan networking", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bagaimana kamu menggunakan fitur story?",
    options: [
      { text: "Posting meme dan konten random", type: "A" },
      { text: "Share artikel atau informasi penting", type: "B" },
      { text: "Jarang atau tidak pernah pakai", type: "C" },
      { text: "Dokumentasi keseharian", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Apa yang kamu lakukan saat ada teman yang posting konten problematik?",
    options: [
      { text: "Roasting di kolom komentar", type: "A" },
      { text: "DM untuk mengedukasi secara privat", type: "B" },
      { text: "Unfollow atau mute tanpa konfrontasi", type: "C" },
      { text: "Posting indirect tentang topik itu", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Berapa screen time sosmedmu per hari?",
    options: [
      { text: "Banyak, tapi produktif buat konten", type: "A" },
      { text: "Cukup, fokus pada informasi penting", type: "B" },
      { text: "Minimal, hanya saat perlu", type: "C" },
      { text: "Banyak, karena itu kerjaan atau hobi", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Komentator Viral",
    emoji: "🔥",
    description: "Kamu adalah warganet yang selalu ada di kolom komentar! Master of witty replies, sarkas level dewa, dan selalu punya comeback yang bikin ngakak. Kamu adalah alasan kenapa kolom komentar Indonesia itu entertaining banget.",
    traits: ["Witty", "Sarkas", "Quick thinker", "Entertaining"],
    strengths: ["Bisa bikin viral dengan satu komen", "Sense of humor yang tajam", "Selalu update tren"],
    weaknesses: ["Kadang terlalu savage", "Bisa menyinggung tanpa sadar", "Sulit serius"],
    tips: ["Pilih-pilih kapan harus savage", "Humormu adalah gift, gunakan dengan bijak", "Tidak semua hal perlu di-roast"],
  },
  B: {
    type: "B",
    title: "Fact Checker Profesional",
    emoji: "📊",
    description: "Kamu adalah warganet yang mementingkan kebenaran! Selalu cek fakta sebelum share, debat dengan data, dan menjadi penyeimbang di tengah lautan hoax. Kamu adalah pahlawan literasi digital.",
    traits: ["Kritis", "Edukatif", "Berbasis data", "Bertanggung jawab"],
    strengths: ["Kredibel dan dipercaya", "Membantu melawan misinformasi", "Diskusi yang berbobot"],
    weaknesses: ["Bisa terkesan sok tahu", "Kadang terlalu serius", "Lelah dengan kebodohan massal"],
    tips: ["Sesekali santai dan nikmati internet", "Tidak semua debat harus dimenangkan", "Self-care dari toxicity online"],
  },
  C: {
    type: "C",
    title: "Silent Lurker Professional",
    emoji: "👀",
    description: "Kamu adalah warganet yang lebih suka mengamati! Jarang posting, jarang komen, tapi tahu semua yang terjadi. Kamu adalah tipe yang punya folder screenshot drama tapi tidak pernah ikut campur.",
    traits: ["Observer", "Low-profile", "Selective", "Bijaksana"],
    strengths: ["Tahu semua tanpa terlibat drama", "Peace of mind terjaga", "Tidak punya digital footprint memalukan"],
    weaknesses: ["Kadang ketinggalan interaksi penting", "Terkesan tidak peduli", "FOMO saat tidak scroll"],
    tips: ["Sesekali engage dengan komunitas positif", "Share suaramu untuk hal yang penting", "Balance antara observing dan participating"],
  },
  D: {
    type: "D",
    title: "Content Creator / Influencer",
    emoji: "📱",
    description: "Kamu adalah warganet yang hidupnya terdokumentasi! Setiap momen bisa jadi konten, personal branding on point, dan followers adalah komunitasmu. Kamu paham cara menggunakan sosmed untuk membangun presence.",
    traits: ["Creative", "Consistent", "Brand-conscious", "Engaging"],
    strengths: ["Personal branding yang kuat", "Bisa monetize sosmed", "Influence yang positif"],
    weaknesses: ["Kadang terlalu curated", "Pressure untuk selalu on", "Batas privasi blur"],
    tips: ["Jaga mental health dari pressure sosmed", "Authenticity lebih penting dari perfection", "Istirahat dari layar itu perlu"],
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
