export const questions = [
  {
    id: 1,
    question: "Bagaimana reaksimu saat ada yang berbuat jahat padamu?",
    options: [
      { text: "Sabar dan berdoa, karma akan bekerja", type: "A" },
      { text: "Langsung balas dengan cara yang lebih cerdas", type: "B" },
      { text: "Memaafkan tapi tidak melupakan", type: "C" },
      { text: "Cuek, fokus pada kebahagiaanku sendiri", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Apa peranmu dalam drama keluarga?",
    options: [
      { text: "Yang selalu jadi korban tapi tetap tegar", type: "A" },
      { text: "Yang mengatur strategi di balik layar", type: "B" },
      { text: "Yang mencoba mendamaikan semua pihak", type: "C" },
      { text: "Yang menghindari drama dan hidup tenang", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bagaimana kamu menangani pengkhianatan?",
    options: [
      { text: "Menangis tapi tetap bangkit", type: "A" },
      { text: "Membalas dengan sukses dan kebahagiaanmu", type: "B" },
      { text: "Mencari tahu alasannya dan belajar", type: "C" },
      { text: "Move on tanpa melihat ke belakang", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Apa yang paling kamu inginkan dalam hidup?",
    options: [
      { text: "Keadilan dan kebenaran", type: "A" },
      { text: "Kekuasaan dan kontrol atas hidupku", type: "B" },
      { text: "Cinta yang tulus dan keluarga harmonis", type: "C" },
      { text: "Kebebasan dan ketenangan", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bagaimana caramu menghadapi rival?",
    options: [
      { text: "Dengan kebaikan dan kesabaran", type: "A" },
      { text: "Dengan strategi dan kecerdasan", type: "B" },
      { text: "Mencoba memahami dan berdamai", type: "C" },
      { text: "Tidak menganggapnya sebagai rival", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Apa yang akan kamu lakukan demi orang yang kamu cintai?",
    options: [
      { text: "Mengorbankan segalanya tanpa ragu", type: "A" },
      { text: "Melindungi dengan cara apapun", type: "B" },
      { text: "Support tanpa melupakan diri sendiri", type: "C" },
      { text: "Mencintai dengan cara yang sehat", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bagaimana reaksimu saat difitnah?",
    options: [
      { text: "Diam dan menunggu kebenaran terungkap", type: "A" },
      { text: "Membuktikan dengan fakta dan bukti", type: "B" },
      { text: "Menjelaskan dengan tenang pada yang penting", type: "C" },
      { text: "Tidak peduli pendapat orang", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Apa kelemahanmu yang paling besar?",
    options: [
      { text: "Terlalu baik dan mudah dimanfaatkan", type: "A" },
      { text: "Terlalu ambisius dan kadang manipulatif", type: "B" },
      { text: "Terlalu memikirkan perasaan orang lain", type: "C" },
      { text: "Terkesan tidak peduli dan dingin", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Apa senjata rahasiamu?",
    options: [
      { text: "Kesabaran dan ketabahan", type: "A" },
      { text: "Kecerdasan dan manipulasi", type: "B" },
      { text: "Empati dan pengertian", type: "C" },
      { text: "Ketenangan dan independensi", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bagaimana ending ceritamu?",
    options: [
      { text: "Akhirnya diakui dan mendapat kebahagiaan", type: "A" },
      { text: "Sukses dan berkuasa", type: "B" },
      { text: "Bahagia dengan keluarga harmonis", type: "C" },
      { text: "Bebas dan damai dengan pilihanku", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Apa yang membuatmu berbeda dari karakter lain?",
    options: [
      { text: "Ketulusan yang tidak pernah luntur", type: "A" },
      { text: "Ketegasan dalam mencapai tujuan", type: "B" },
      { text: "Kemampuan memahami semua sisi", type: "C" },
      { text: "Kebebasan dari drama dan konflik", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Apa pelajaran hidup yang kamu bawa?",
    options: [
      { text: "Kebaikan akan selalu menang pada akhirnya", type: "A" },
      { text: "Kamu harus kuat untuk bertahan", type: "B" },
      { text: "Cinta dan pengertian bisa menyembuhkan", type: "C" },
      { text: "Fokus pada kebahagiaanmu sendiri", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Protagonis Sabar",
    emoji: "😇",
    description: "Kamu adalah karakter protagonis sinetron klasik! Selalu jadi korban ketidakadilan tapi tidak pernah menyerah. Seperti karakter utama di sinetron Indonesia, kamu punya kesabaran luar biasa dan percaya bahwa kebaikan akan selalu menang pada akhirnya.",
    traits: ["Sabar", "Tegar", "Baik hati", "Pantang menyerah"],
    strengths: ["Ketabahan yang luar biasa", "Hati yang murni", "Inspirasi bagi banyak orang"],
    weaknesses: ["Terlalu pasif", "Mudah dimanfaatkan", "Kadang terlalu menderita"],
    tips: ["Sesekali fight back", "Kebaikan tidak harus berarti lemah", "Kamu layak bahagia tanpa harus menderita dulu"],
  },
  B: {
    type: "B",
    title: "Antagonis Cerdas",
    emoji: "😏",
    description: "Kamu adalah karakter antagonis yang sebenarnya punya alasan! Ambisius, cerdas, dan tahu cara mendapatkan apa yang kamu mau. Kamu bukan jahat, kamu hanya lebih berani mengambil tindakan yang orang lain takut lakukan.",
    traits: ["Ambisius", "Cerdas", "Strategis", "Tegas"],
    strengths: ["Tidak takut mengambil risiko", "Selalu punya rencana", "Strong-willed"],
    weaknesses: ["Bisa manipulatif", "Kadang menyakiti orang lain", "Terlalu fokus pada tujuan"],
    tips: ["Balance antara ambisi dan empati", "Tidak semua harus dimenangkan", "Kebahagiaan tidak selalu tentang kekuasaan"],
  },
  C: {
    type: "C",
    title: "Second Lead Penuh Pengertian",
    emoji: "🥺",
    description: "Kamu adalah karakter second lead yang dicintai semua orang! Selalu ada untuk mendukung, memahami semua sisi, dan menjadi perekat dalam konflik. Sayangnya, kadang kebaikanmu tidak dihargai sebagaimana mestinya.",
    traits: ["Pengertian", "Suportif", "Empati tinggi", "Penyayang"],
    strengths: ["Bisa memahami semua perspektif", "Menjadi tempat curhat", "Menyatukan yang berselisih"],
    weaknesses: ["Sering disakiti", "Terlalu mementingkan orang lain", "Cinta tidak selalu berbalas"],
    tips: ["Kamu juga layak diprioritaskan", "Tidak semua konflik perlu kamu damaikan", "Jaga hatimu sendiri"],
  },
  D: {
    type: "D",
    title: "Karakter Independent",
    emoji: "😎",
    description: "Kamu adalah karakter yang bebas dari drama! Tidak mau terlibat konflik, fokus pada kebahagiaanmu sendiri, dan tidak terpengaruh dengan kekacauan di sekitarmu. Kamu adalah oase ketenangan di tengah badai sinetron.",
    traits: ["Independent", "Tenang", "Bebas", "Low-drama"],
    strengths: ["Tidak terpengaruh drama", "Peace of mind", "Self-sufficient"],
    weaknesses: ["Terkesan tidak peduli", "Kadang terlalu detached", "Sulit terlibat emosional"],
    tips: ["Sesekali tunjukkan kepedulianmu", "Tidak semua involvement adalah drama", "Koneksi dengan orang lain itu penting"],
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
