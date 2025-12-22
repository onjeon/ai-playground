// Jajanan SD yang Menggambarkanmu
// Jajanan masa SD mana yang paling menggambarkan kepribadianmu?

export const questions = [
  {
    id: 1,
    question: "Di masa sekolah, kamu termasuk...",
    options: [
      { text: "Yang populer dan banyak teman", type: "A" },
      { text: "Yang kalem tapi disayang", type: "B" },
      { text: "Yang seru dan asyik diajak main", type: "C" },
      { text: "Yang simple dan easy-going", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Warna yang menggambarkanmu...",
    options: [
      { text: "Merah atau orange, berani", type: "A" },
      { text: "Hijau atau biru, calm", type: "B" },
      { text: "Kuning atau rainbow, ceria", type: "C" },
      { text: "Coklat atau putih, natural", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Sifat utamamu...",
    options: [
      { text: "Berani dan tidak takut mencoba", type: "A" },
      { text: "Sabar dan manis", type: "B" },
      { text: "Fun dan penuh kejutan", type: "C" },
      { text: "Sederhana dan apa adanya", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Cara kamu berinteraksi dengan orang baru...",
    options: [
      { text: "Bold, langsung kenalan", type: "A" },
      { text: "Pelan-pelan, hangat", type: "B" },
      { text: "Fun, bikin mereka tertawa", type: "C" },
      { text: "Natural, mengalir aja", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Di grup pertemanan...",
    options: [
      { text: "Yang menonjol dan memorable", type: "A" },
      { text: "Yang sweet dan caring", type: "B" },
      { text: "Yang bikin suasana seru", type: "C" },
      { text: "Yang reliable dan selalu ada", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Rasa favorit...",
    options: [
      { text: "Pedas atau bold", type: "A" },
      { text: "Manis dan lembut", type: "B" },
      { text: "Asam atau unik", type: "C" },
      { text: "Gurih dan familiar", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Kenangan masa kecil...",
    options: [
      { text: "Petualangan dan tantangan", type: "A" },
      { text: "Quality time dengan keluarga", type: "B" },
      { text: "Main bareng teman-teman", type: "C" },
      { text: "Momen simple yang menyenangkan", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Cara kamu membuat orang senang...",
    options: [
      { text: "Bikin mereka excited", type: "A" },
      { text: "Kasih perhatian dan care", type: "B" },
      { text: "Buat mereka ketawa", type: "C" },
      { text: "Ada di saat mereka butuh", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Tekstur kepribadian...",
    options: [
      { text: "Crunchy dan bold", type: "A" },
      { text: "Soft dan gentle", type: "B" },
      { text: "Chewy dan fun", type: "C" },
      { text: "Simple dan straightforward", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Nilai masa kecil yang masih kamu pegang...",
    options: [
      { text: "Keberanian dan petualangan", type: "A" },
      { text: "Kebaikan dan kasih sayang", type: "B" },
      { text: "Kegembiraan dan persahabatan", type: "C" },
      { text: "Kesederhanaan dan kejujuran", type: "D" },
    ],
  },
  {
    id: 11,
    question: "First impression anak-anak tentangmu...",
    options: [
      { text: "Cool dan seru", type: "A" },
      { text: "Baik dan ramah", type: "B" },
      { text: "Lucu dan asyik", type: "C" },
      { text: "Tenang dan bisa diandalkan", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Jika jadi makanan, kamu mau jadi yang...",
    options: [
      { text: "Memorable dan beda dari lain", type: "A" },
      { text: "Favorit dan dicari-cari", type: "B" },
      { text: "Fun dan bikin happy", type: "C" },
      { text: "Classic dan selalu ada", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Ciki Pedas",
    emoji: "🌶️",
    description: "Kamu adalah Ciki Pedas! Bold, memorable, dan tidak takut stand out. Seperti snack yang berani dengan rasa pedasnya, kamu adalah orang yang tidak takut berbeda dan selalu meninggalkan kesan!",
    traits: ["Bold", "Memorable", "Brave", "Stand-out"],
    strengths: ["Unforgettable", "Confident", "Unique"],
    weaknesses: ["Bisa overwhelming", "Not for everyone"],
    tips: ["Your boldness is strength", "Softer moments okay too"],
  },
  B: {
    type: "B",
    title: "Permen Susu",
    emoji: "🥛",
    description: "Kamu adalah Permen Susu! Sweet, gentle, dan selalu bikin orang merasa hangat. Seperti permen yang manis dan lembut, kamu adalah sumber comfort dan kasih sayang!",
    traits: ["Sweet", "Gentle", "Caring", "Comforting"],
    strengths: ["Loved by all", "Great friend", "Warm presence"],
    weaknesses: ["Might be taken for granted", "Too soft"],
    tips: ["Your sweetness is gift", "Set boundaries when needed"],
  },
  C: {
    type: "C",
    title: "Permen Asam",
    emoji: "😝",
    description: "Kamu adalah Permen Asam! Fun, surprising, dan selalu bikin orang react. Seperti permen yang asam dan bikin muka jelek, kamu adalah sumber keceriaan dan tawa!",
    traits: ["Fun", "Surprising", "Joyful", "Entertaining"],
    strengths: ["Great entertainer", "Mood lifter", "Memorable reactions"],
    weaknesses: ["Bisa too much", "Not always taken seriously"],
    tips: ["Your fun side is gift", "Depth matters too"],
  },
  D: {
    type: "D",
    title: "Biskuit Kelapa",
    emoji: "🥥",
    description: "Kamu adalah Biskuit Kelapa! Classic, reliable, dan selalu ada di kantin. Seperti snack yang sederhana tapi memuaskan, kamu adalah orang yang bisa diandalkan tanpa drama!",
    traits: ["Reliable", "Simple", "Consistent", "Dependable"],
    strengths: ["Always there", "No drama", "Trustworthy"],
    weaknesses: ["Might be overlooked", "Not flashy"],
    tips: ["Simplicity is beautiful", "You're more valuable than you know"],
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
