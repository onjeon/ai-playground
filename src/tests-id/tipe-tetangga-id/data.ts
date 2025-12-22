// Tipe Tetangga Kamu
// Kamu jadi tetangga yang kayak gimana sih?

export const questions = [
  {
    id: 1,
    question: "Kalau tetangga baru pindah...",
    options: [
      { text: "Langsung kenalan, bawa makanan", type: "A" },
      { text: "Sapa kalau ketemu aja", type: "B" },
      { text: "Tunggu mereka yang kenalan duluan", type: "C" },
      { text: "Biasa aja, ga usah ribet", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Ada acara RT/RW, kamu...",
    options: [
      { text: "Aktif jadi panitia!", type: "A" },
      { text: "Ikut kalau sempat", type: "B" },
      { text: "Datang sebentar terus pulang", type: "C" },
      { text: "Jarang ikut, males ribet", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Tetangga minta tolong angkat jemuran karena hujan...",
    options: [
      { text: "Langsung bantu tanpa diminta!", type: "A" },
      { text: "Bantu kalau diminta", type: "B" },
      { text: "Kasih tau aja lewat WA", type: "C" },
      { text: "Emang tugasku?", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Volume musik/TV di rumahmu...",
    options: [
      { text: "Pelan, ga mau ganggu tetangga", type: "A" },
      { text: "Normal, wajar lah", type: "B" },
      { text: "Kadang kenceng kalau lagi seru", type: "C" },
      { text: "Kenceng, rumahku ya terserah aku", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Grup WA RT/RW...",
    options: [
      { text: "Aktif update dan share info", type: "A" },
      { text: "Baca dan respond seperlunya", type: "B" },
      { text: "Silent reader", type: "C" },
      { text: "Di-mute atau keluar", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Masak banyak, sisa makanan...",
    options: [
      { text: "Bagi-bagi ke tetangga!", type: "A" },
      { text: "Kasih ke tetangga dekat aja", type: "B" },
      { text: "Simpan buat besok", type: "C" },
      { text: "Males ngasih, ribet", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Tetangga berisik jam 11 malam...",
    options: [
      { text: "Tegur baik-baik", type: "A" },
      { text: "Tunggu besok, ngobrol santai", type: "B" },
      { text: "Pasif-agresif, batuk-batuk kenceng", type: "C" },
      { text: "Bales lebih berisik", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Parkir motor/mobil...",
    options: [
      { text: "Selalu di tempat sendiri, rapi", type: "A" },
      { text: "Di depan rumah, ga ganggu jalan", type: "B" },
      { text: "Kadang mepet ke rumah tetangga", type: "C" },
      { text: "Di mana ada space kosong", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Tau gosip tetangga...",
    options: [
      { text: "Tau semua, update info!", type: "A" },
      { text: "Tau seperlunya aja", type: "B" },
      { text: "Ga terlalu ngikutin", type: "C" },
      { text: "Masa bodoh, urusan orang", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Iuran bulanan RT/RW...",
    options: [
      { text: "Bayar on time, ga pernah telat", type: "A" },
      { text: "Bayar tapi kadang telat", type: "B" },
      { text: "Ditagih dulu baru bayar", type: "C" },
      { text: "Banyak alesan, males bayar", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Tetangga sedang kesusahan...",
    options: [
      { text: "Langsung bantu tanpa diminta", type: "A" },
      { text: "Bantu kalau diminta", type: "B" },
      { text: "Kasih support moral aja", type: "C" },
      { text: "Bukan urusanku", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Idealnya, tetangga itu...",
    options: [
      { text: "Kayak keluarga, saling bantu", type: "A" },
      { text: "Akrab tapi tau batas", type: "B" },
      { text: "Sapa seperlunya aja", type: "C" },
      { text: "Ga usah terlalu kenal", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Tetangga Idaman",
    emoji: "🏆",
    description: "Kamu tetangga yang diidamkan semua orang! Ramah, helpful, dan selalu ada saat dibutuhkan. Kamu yang pertama bagi makanan dan terakhir pulang dari acara RT. Komunitas butuh orang kayak kamu!",
    traits: ["Ramah", "Helpful", "Aktif", "Community-minded"],
    strengths: ["Disukai semua orang", "Reliable", "Good karma"],
    weaknesses: ["Bisa kecapean", "Terlalu ikut campur kadang"],
    tips: ["Jaga batas juga ya", "Istirahat kalau capek"],
  },
  B: {
    type: "B",
    title: "Tetangga Asyik",
    emoji: "👋",
    description: "Kamu tetangga yang balance! Ramah tapi tau batas. Kamu sapa tetangga, ikut acara penting, tapi juga menghargai privasi. Good neighbor tanpa drama!",
    traits: ["Balance", "Respektful", "Pleasant", "Boundaries"],
    strengths: ["Ga ribet", "Dihormati", "Low maintenance"],
    weaknesses: ["Bisa terkesan cuek", "Kurang dekat sama tetangga"],
    tips: ["Sesekali lebih aktif", "Kenalan lebih dalam ga masalah"],
  },
  C: {
    type: "C",
    title: "Tetangga Kalem",
    emoji: "😶",
    description: "Kamu tetangga yang low-profile. Ada tapi ga terlalu keliatan. Kamu menghargai privasi dan ga suka ribet. Tetangga mungkin ga terlalu kenal kamu, tapi juga ga pernah ada masalah!",
    traits: ["Low-profile", "Private", "Quiet", "Non-intrusive"],
    strengths: ["Ga ganggu siapa-siapa", "Aman", "No drama"],
    weaknesses: ["Kurang social support", "Miss info penting"],
    tips: ["Sesekali keluar dan kenalan", "Komunitas bisa jadi safety net"],
  },
  D: {
    type: "D",
    title: "Tetangga Cuek",
    emoji: "🤷",
    description: "Kamu tetangga yang independen banget. Rumahmu ya rumahmu, urusan tetangga ya urusan mereka. Privasi adalah nomor satu dan kamu ga suka dicampuri atau mencampuri.",
    traits: ["Independen", "Private", "Cuek", "Self-focused"],
    strengths: ["Ga ribet", "Mind your own business", "Independent"],
    weaknesses: ["Bisa dianggap sombong", "Ga ada support system"],
    tips: ["Minimal sapa lah sesekali", "Tetangga bisa berguna saat emergency"],
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
