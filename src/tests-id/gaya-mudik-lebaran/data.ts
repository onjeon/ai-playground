// Gaya Mudik Lebaran Kamu
// Tes ini mengungkap bagaimana style kamu saat mudik Lebaran!

export const questions = [
  {
    id: 1,
    question: "Kapan kamu biasanya berangkat mudik?",
    options: [
      { text: "H-7 atau lebih awal, antisipasi macet", type: "A" },
      { text: "H-3 sampai H-2, timing pas", type: "B" },
      { text: "H-1 atau malam takbiran, biar kerasa suasananya", type: "C" },
      { text: "Hari H atau setelah Lebaran, anti mainstream", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Transportasi mudik favorit kamu...",
    options: [
      { text: "Mobil pribadi, bebas berhenti kapan saja", type: "A" },
      { text: "Kereta api, nyaman dan on time", type: "B" },
      { text: "Bus AKAP, nostalgia masa kecil", type: "C" },
      { text: "Motor, lebih cepat sampai kalau macet", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Persiapan bekal mudik kamu...",
    options: [
      { text: "Bekal komplit: nasi, lauk, snack, obat-obatan", type: "A" },
      { text: "Beli di rest area aja, lebih praktis", type: "B" },
      { text: "Snack dan minuman secukupnya", type: "C" },
      { text: "Tidak perlu bekal, sampai kampung langsung makan", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Saat kena macet panjang di jalan...",
    options: [
      { text: "Sabar, sudah antisipasi dari awal", type: "A" },
      { text: "Cari jalan tikus lewat Waze/Google Maps", type: "B" },
      { text: "Berhenti istirahat, lanjut kalau sudah lengang", type: "C" },
      { text: "Ngomel-ngomel tapi ya tetap jalan", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Baju Lebaran kamu biasanya...",
    options: [
      { text: "Beli dari jauh hari, sudah dipilih matching sama keluarga", type: "A" },
      { text: "Beli H-1 atau di kampung sekalian", type: "B" },
      { text: "Pakai baju bagus yang sudah ada", type: "C" },
      { text: "Yang penting bersih dan sopan", type: "D" },
    ],
  },
  {
    id: 6,
    question: "THR (Tunjangan Hari Raya) kamu dipakai untuk...",
    options: [
      { text: "Kasih amplop ke keponakan dan saudara", type: "A" },
      { text: "Belanja keperluan Lebaran", type: "B" },
      { text: "Bayar cicilan dan utang dulu", type: "C" },
      { text: "Ditabung, Lebaran tidak harus boros", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Saat sungkeman dan silaturahmi...",
    options: [
      { text: "Keliling semua saudara, dari pagi sampai malam", type: "A" },
      { text: "Yang dekat-dekat aja, sisanya video call", type: "B" },
      { text: "Tunggu disamperin aja di rumah", type: "C" },
      { text: "Sungkeman ke orang tua cukup, sisanya santai", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Pertanyaan 'kapan nikah/punya anak' dari saudara...",
    options: [
      { text: "Jawab dengan senyum, sudah siap mental", type: "A" },
      { text: "Alihkan pembicaraan dengan halus", type: "B" },
      { text: "Kabur ke kamar atau pura-pura sibuk", type: "C" },
      { text: "Balik tanya yang lebih nyelekit", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Menu makanan Lebaran favorit kamu...",
    options: [
      { text: "Ketupat, opor, rendang - classic combo!", type: "A" },
      { text: "Yang penting ada kue nastar dan kastengel", type: "B" },
      { text: "Makan apa aja yang disajikan emak", type: "C" },
      { text: "Lebih suka makan di luar, cape makan berat terus", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Arus balik ke kota...",
    options: [
      { text: "H+2 atau H+3, sebelum puncak arus balik", type: "A" },
      { text: "H+5 sampai H+7, nikmati suasana kampung dulu", type: "B" },
      { text: "Setelah cuti habis, maksimalkan waktu di kampung", type: "C" },
      { text: "Sesegera mungkin, kangen kasur sendiri", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Si Mudik Terencana",
    emoji: "📅",
    description: "Kamu adalah pemudik yang super terencana! Dari berangkat sampai pulang, semua sudah diatur dengan matang. Mudik tanpa drama adalah mottomu!",
    traits: ["Terorganisir", "Antisipasi", "Prepared", "On-time"],
    strengths: ["Mudik lancar", "Tidak ketinggalan apa-apa", "Keluarga senang"],
    weaknesses: ["Kurang fleksibel", "Stress kalau ada yang tidak sesuai rencana"],
    tips: ["Nikmati momen spontan", "Kadang hal tak terduga justru jadi kenangan indah"],
  },
  B: {
    type: "B",
    title: "Si Mudik Cerdas",
    emoji: "🧠",
    description: "Kamu pemudik yang cerdas dan strategis! Tau kapan harus berangkat, jalan mana yang bebas macet, dan gimana caranya mudik efisien tanpa ribet.",
    traits: ["Strategis", "Smart", "Efisien", "Adaptif"],
    strengths: ["Hemat waktu dan tenaga", "Selalu ada plan B", "Anti drama"],
    weaknesses: ["Kadang terlalu kalkulatif", "Kurang menikmati proses"],
    tips: ["Sesekali nikmati perjalanan", "Tidak semua harus dioptimasi"],
  },
  C: {
    type: "C",
    title: "Si Mudik Santai",
    emoji: "😌",
    description: "Buat kamu, mudik adalah waktu untuk pulang kampung dan santai! Tidak perlu buru-buru, yang penting sampai dan bisa kumpul sama keluarga.",
    traits: ["Santai", "Easy-going", "Family-oriented", "Relaxed"],
    strengths: ["Tidak gampang stress", "Nikmati perjalanan", "Quality time sama keluarga"],
    weaknesses: ["Kadang tidak siap menghadapi situasi darurat"],
    tips: ["Tetap siapkan plan minimal", "Jangan terlalu santai juga"],
  },
  D: {
    type: "D",
    title: "Si Mudik Anti Mainstream",
    emoji: "😎",
    description: "Kamu punya cara sendiri dalam bermudik! Tidak ikut-ikutan, punya timing dan style sendiri. Mudik versi kamu unik dan memorable!",
    traits: ["Unik", "Independent", "Creative", "Unconventional"],
    strengths: ["Hindari keramaian", "Pengalaman berbeda", "Lebih personal"],
    weaknesses: ["Kadang tidak sesuai ekspektasi keluarga"],
    tips: ["Koordinasi dengan keluarga", "Fleksibel dengan tradisi juga penting"],
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
