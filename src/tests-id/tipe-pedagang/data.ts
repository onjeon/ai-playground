// Tipe Pedagang yang Cocok Untukmu
// Kalau jadi pedagang, kamu bakal jualan apa?

export const questions = [
  {
    id: 1,
    question: "Gaya komunikasimu dengan orang...",
    options: [
      { text: "Ramah, ngobrol panjang lebar", type: "A" },
      { text: "To the point, efisien", type: "B" },
      { text: "Kreatif, suka storytelling", type: "C" },
      { text: "Sabar, telaten melayani", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Kalau kerja, kamu lebih suka...",
    options: [
      { text: "Interaksi langsung dengan banyak orang", type: "A" },
      { text: "Behind the scenes, fokus produksi", type: "B" },
      { text: "Mix keduanya, fleksibel", type: "C" },
      { text: "Routine yang konsisten", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Jam kerja idealmu...",
    options: [
      { text: "Pagi sampai siang, energi fresh", type: "A" },
      { text: "Siang sampai malam, night owl", type: "B" },
      { text: "Fleksibel, sesuai mood", type: "C" },
      { text: "Subuh sampai pagi, early bird", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Handling customer komplain...",
    options: [
      { text: "Ajak ngobrol, cari solusi bareng", type: "A" },
      { text: "Quick fix, ganti atau refund", type: "B" },
      { text: "Kreatif kasih kompensasi unik", type: "C" },
      { text: "Sabar dengerin, extra service", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Modal usaha menurutmu...",
    options: [
      { text: "Minimal asal bisa mulai", type: "A" },
      { text: "Proper planning, investasi serius", type: "B" },
      { text: "Kreatif, modal skill lebih penting", type: "C" },
      { text: "Bertahap, dari kecil dulu", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Lokasi jualan ideal...",
    options: [
      { text: "Tempat ramai, pasar, pinggir jalan", type: "A" },
      { text: "Online, dari rumah aja", type: "B" },
      { text: "Pop-up, mobile, bisa pindah-pindah", type: "C" },
      { text: "Tempat tetap yang nyaman", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Strategi marketing...",
    options: [
      { text: "Word of mouth, pelanggan loyal", type: "A" },
      { text: "Digital marketing, data-driven", type: "B" },
      { text: "Content creative, viral marketing", type: "C" },
      { text: "Kualitas bicara, ga perlu promosi heboh", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Dealing dengan kompetitor...",
    options: [
      { text: "Biasa aja, rezeki sudah diatur", type: "A" },
      { text: "Analisis dan strategi counter", type: "B" },
      { text: "Diferensiasi, bikin sesuatu beda", type: "C" },
      { text: "Fokus ke kualitas sendiri aja", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Profit prioritas atau...",
    options: [
      { text: "Pelanggan happy lebih penting", type: "A" },
      { text: "Profit tetap harus jalan", type: "B" },
      { text: "Balance keduanya dengan kreatif", type: "C" },
      { text: "Yang penting berkah dan cukup", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Inovasi produk...",
    options: [
      { text: "Dengerin request pelanggan", type: "A" },
      { text: "Research market trends", type: "B" },
      { text: "Eksperimen terus, coba hal baru", type: "C" },
      { text: "Stick to classic yang proven", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Handling uang dan pembukuan...",
    options: [
      { text: "Yang penting ada pemasukan", type: "A" },
      { text: "Detail dan terstruktur", type: "B" },
      { text: "Ada sistemnya tapi fleksibel", type: "C" },
      { text: "Simple, yang penting jelas", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Definisi sukses dalam usaha...",
    options: [
      { text: "Pelanggan setia dan happy", type: "A" },
      { text: "Omset tinggi, ekspansi", type: "B" },
      { text: "Dikenal luas, brand besar", type: "C" },
      { text: "Hidup cukup, usaha lancar", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Pedagang Warteg/Warung",
    emoji: "🍛",
    description: "Kamu cocok jadi pedagang warteg atau warung makan! Ramah, suka ngobrol sama pelanggan, dan mengutamakan hubungan baik. Pelangganmu bakal betah dan jadi langganan setia karena service dan keramahanmu!",
    traits: ["Ramah", "People-person", "Loyal customers", "Community builder"],
    strengths: ["Customer relationship kuat", "Word of mouth bagus", "Repeat customers"],
    weaknesses: ["Bisa terlalu personal", "Sulit scaling"],
    tips: ["Jaga konsistensi rasa", "Balance personal touch dengan efisiensi"],
  },
  B: {
    type: "B",
    title: "Pedagang Online Shop",
    emoji: "📦",
    description: "Kamu cocok jadi seller online! Efisien, data-driven, dan suka kerja dari belakang layar. Kamu bisa scale bisnis dengan teknologi dan sistem yang baik. E-commerce adalah arena bermainmu!",
    traits: ["Efisien", "Tech-savvy", "Systematic", "Scalable"],
    strengths: ["Bisa handle volume besar", "Low overhead", "Flexible time"],
    weaknesses: ["Kurang personal touch", "Kompetisi ketat"],
    tips: ["Bangun brand yang memorable", "Customer service tetap penting"],
  },
  C: {
    type: "C",
    title: "Pedagang Food Truck/Pop-up",
    emoji: "🚚",
    description: "Kamu cocok jadi pedagang food truck atau pop-up store! Kreatif, suka hal baru, dan tidak suka monoton. Bisnismu selalu punya twist unik yang bikin orang penasaran dan rela berburu!",
    traits: ["Kreatif", "Inovatif", "Trendy", "Adventurous"],
    strengths: ["Selalu fresh", "Viral potential", "Low commitment"],
    weaknesses: ["Inconsistent income", "Susah bangun loyal base"],
    tips: ["Punya signature product", "Konsistensi jadwal penting"],
  },
  D: {
    type: "D",
    title: "Pedagang Kue/Catering",
    emoji: "🎂",
    description: "Kamu cocok jadi pedagang kue atau catering! Telaten, sabar, dan mengutamakan kualitas. Kamu suka membuat sesuatu dengan penuh cinta dan detail. Produkmu adalah hasil dari kesabaran dan ketelitian!",
    traits: ["Telaten", "Detail-oriented", "Patient", "Quality-focused"],
    strengths: ["Kualitas premium", "Loyal customers", "Pride in craft"],
    weaknesses: ["Sulit mass production", "Time consuming"],
    tips: ["Jangan undersell dirimu", "Kualitas layak harga premium"],
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
