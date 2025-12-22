// Tipe Anak Kos Kamu
// Tes ini mengungkap tipe anak kos seperti apa kamu!

export const questions = [
  {
    id: 1,
    question: "Kondisi kamar kosmu sekarang...",
    options: [
      { text: "Rapi, bersih, dan estetik", type: "A" },
      { text: "Fungsional, yang penting nyaman", type: "B" },
      { text: "Berantakan kreatif, ada sistemnya", type: "C" },
      { text: "Kapal pecah, tapi tau dimana semua barang", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Makan sehari-hari biasanya...",
    options: [
      { text: "Masak sendiri, meal prep weekly", type: "A" },
      { text: "Warteg langganan, praktis dan murah", type: "B" },
      { text: "Grab/Gojek food, malas keluar", type: "C" },
      { text: "Random, kadang lupa makan", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Hubungan dengan tetangga kos...",
    options: [
      { text: "Kenal semua, sering ngobrol dan hangout", type: "A" },
      { text: "Kenal beberapa, sapa kalau ketemu", type: "B" },
      { text: "Tau muka doang, jarang interaksi", type: "C" },
      { text: "Isolasi total, earphone selalu on", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Waktu cuci baju...",
    options: [
      { text: "Rutin setiap minggu, terjadwal", type: "A" },
      { text: "Kalau sudah menumpuk baru cuci", type: "B" },
      { text: "Laundry kiloan, males nyuci", type: "C" },
      { text: "Tunggu sampai tidak ada baju bersih", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Malam minggu di kos...",
    options: [
      { text: "Self-care, skincare, dan me time", type: "A" },
      { text: "Nongkrong atau pergi sama teman", type: "B" },
      { text: "Marathon nonton drakor/film", type: "C" },
      { text: "Tidur, mengganti kurang tidur weekday", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Tagihan kos dan utilitas...",
    options: [
      { text: "Bayar tepat waktu, budget terencana", type: "A" },
      { text: "Sebelum jatuh tempo, mepet tapi aman", type: "B" },
      { text: "Sering telat, lupa terus", type: "C" },
      { text: "Minta tolong ortu bayarin", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Kalau WiFi kos mati...",
    options: [
      { text: "Lapor ibu kos, follow up sampai beres", type: "A" },
      { text: "Hotspot HP, sabar menunggu", type: "B" },
      { text: "Ngungsi ke cafe atau tempat WiFi free", type: "C" },
      { text: "Panik, hidup terasa hampa", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Stok makanan di kamar...",
    options: [
      { text: "Lengkap, dari snack sampai bumbu dapur", type: "A" },
      { text: "Basic, mie instan dan kopi", type: "B" },
      { text: "Random, beli kalau lagi diskon", type: "C" },
      { text: "Kosong, selalu beli fresh", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Kalau ada tamu datang ke kos...",
    options: [
      { text: "Welcome! Kamar selalu siap terima tamu", type: "A" },
      { text: "Oke, tapi kasih notice dulu", type: "B" },
      { text: "Hmm, bersih-bersih kilat dulu", type: "C" },
      { text: "Tidak terima tamu, terlalu berantakan", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Jam tidur weekday...",
    options: [
      { text: "Teratur, 10-11 malam tidur", type: "A" },
      { text: "Fleksibel, 11-12 malam biasanya", type: "B" },
      { text: "Begadang, tidur lewat jam 1", type: "C" },
      { text: "Chaos, tergantung deadline", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Dekorasi kamar kos...",
    options: [
      { text: "Aesthetic, ada tema dan konsep", type: "A" },
      { text: "Simple, foto dan poster favorit", type: "B" },
      { text: "Minimalis, yang penting fungsional", type: "C" },
      { text: "Apa adanya, tidak ada dekorasi", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Hubungan dengan ibu kos...",
    options: [
      { text: "Akrab, sudah seperti keluarga", type: "A" },
      { text: "Baik, saling menghormati", type: "B" },
      { text: "Biasa, cuma interaksi soal kos", type: "C" },
      { text: "Jarang ketemu, bayar via transfer", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Anak Kos Teladan",
    emoji: "⭐",
    description: "Kamu adalah anak kos idaman ibu kos! Kamar selalu rapi, bayar tepat waktu, dan hidup teratur. Kamu membuktikan bahwa hidup mandiri bisa tetap terorganisir dengan baik.",
    traits: ["Terorganisir", "Mandiri", "Bertanggung jawab", "Disiplin"],
    strengths: ["Hidup teratur", "Keuangan terkontrol", "Kamar nyaman"],
    weaknesses: ["Kadang terlalu kaku", "Bisa stres kalau ada yang tidak sesuai rencana"],
    tips: ["Sesekali santai juga boleh", "Fleksibilitas itu penting"],
  },
  B: {
    type: "B",
    title: "Anak Kos Santuy",
    emoji: "😎",
    description: "Kamu adalah anak kos yang balance! Tidak terlalu strict tapi juga tidak berantakan. Kamu menjalani hidup kos dengan santai tapi tetap bertanggung jawab.",
    traits: ["Easygoing", "Adaptif", "Sosial", "Balanced"],
    strengths: ["Fleksibel", "Mudah bergaul", "Tidak stress berlebihan"],
    weaknesses: ["Kadang bisa lebih rapi", "Suka procrastinate"],
    tips: ["Tingkatkan sedikit kedisiplinan", "Konsistensi adalah kunci"],
  },
  C: {
    type: "C",
    title: "Anak Kos Kreatif",
    emoji: "🎨",
    description: "Kamu adalah anak kos dengan gaya sendiri! Mungkin terlihat berantakan, tapi ada sistem dalam keacakanmu. Kamu menikmati kebebasan hidup kos dengan cara unikmu.",
    traits: ["Kreatif", "Unik", "Bebas", "Non-konformis"],
    strengths: ["Berpikir out of the box", "Nyaman dengan diri sendiri", "Tidak terlalu strict"],
    weaknesses: ["Bisa lebih teratur", "Kadang lupa hal penting"],
    tips: ["Sedikit sistem akan membantu", "Catat hal-hal penting"],
  },
  D: {
    type: "D",
    title: "Anak Kos Survivor",
    emoji: "🦸",
    description: "Kamu adalah anak kos yang survive mode! Hidup apa adanya dengan prinsip 'yang penting jalan'. Meski kadang chaos, kamu selalu berhasil melewati setiap tantangan hidup kos.",
    traits: ["Survivor", "Adaptif", "Improvisasi", "Tidak ribet"],
    strengths: ["Bisa hidup dalam kondisi apapun", "Tidak stress soal hal kecil", "Fleksibel"],
    weaknesses: ["Perlu lebih terorganisir", "Kesehatan perlu diperhatikan"],
    tips: ["Mulai dengan hal kecil untuk lebih teratur", "Self-care itu penting"],
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
