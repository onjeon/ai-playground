// Gaya Kamu Saat Naik Ojol
// Tes ini mengungkap kepribadianmu berdasarkan perilaku naik ojol!

export const questions = [
  {
    id: 1,
    question: "Saat pesen ojol, kamu biasanya...",
    options: [
      { text: "Langsung order, gak pake lama", type: "A" },
      { text: "Compare harga antar aplikasi dulu", type: "B" },
      { text: "Tunggu promo atau diskon", type: "C" },
      { text: "Cek rating dan review driver dulu", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Lokasi penjemputan, kamu pilih yang mana?",
    options: [
      { text: "Pin location yang precise banget", type: "A" },
      { text: "Landmark yang gampang dicari", type: "B" },
      { text: "Jalan ke tempat yang lebih gampang dijemput", type: "C" },
      { text: "Kasih instruksi detail via chat", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Saat driver nelpon untuk konfirmasi, kamu...",
    options: [
      { text: "Angkat, kasih arahan jelas", type: "A" },
      { text: "Bales via chat aja", type: "B" },
      { text: "Mager angkat, ntar juga ketemu", type: "C" },
      { text: "Langsung turun dan cari motor/mobilnya", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Di perjalanan, kamu ngapain?",
    options: [
      { text: "Main HP, scrolling sosmed", type: "A" },
      { text: "Dengerin musik pakai earphone", type: "B" },
      { text: "Ngobrol sama driver", type: "C" },
      { text: "Lihat pemandangan dan jalanan", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Driver ngajak ngobrol, reaksimu?",
    options: [
      { text: "Jawab seadanya, singkat", type: "A" },
      { text: "Ngobrol balik dengan ramah", type: "B" },
      { text: "Cerita panjang lebar, seru!", type: "C" },
      { text: "Pura-pura sibuk biar gak ngobrol", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Soal helm yang dikasih driver, kamu...",
    options: [
      { text: "Pakai aja, yang penting aman", type: "A" },
      { text: "Bawa helm sendiri, lebih hygiene", type: "B" },
      { text: "Lihat kondisi helm dulu, kalau jorok minta ganti", type: "C" },
      { text: "Gak terlalu peduli, yang penting sampai", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Jalur yang dipilih driver beda dari yang kamu tau, reaksimu?",
    options: [
      { text: "Ikut aja, driver lebih tau medan", type: "A" },
      { text: "Tanya kenapa lewat situ", type: "B" },
      { text: "Request lewat jalan yang kamu mau", type: "C" },
      { text: "Pantau GPS, kalau aneh baru protes", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Sampai tujuan, cara bayarmu?",
    options: [
      { text: "Cashless via aplikasi", type: "A" },
      { text: "Cash, siapin uang pas", type: "B" },
      { text: "Cash tapi kadang kembalian gak diminta", type: "C" },
      { text: "Tergantung ada saldo atau gak", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Soal rating driver, kamu...",
    options: [
      { text: "Selalu kasih bintang 5, effort banget soalnya", type: "A" },
      { text: "Sesuai pelayanan, kalau bagus 5, biasa 4", type: "B" },
      { text: "Males rating, langsung close app", type: "C" },
      { text: "Rating dan kasih tip kalau pelayanan bagus", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Pernah gak ninggalin barang di ojol?",
    options: [
      { text: "Gak pernah, selalu double check", type: "A" },
      { text: "Pernah sekali, langsung hubungi driver", type: "B" },
      { text: "Sering, HP atau dompet ketinggalan", type: "C" },
      { text: "Hampir pernah, untung driver baik hati", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Order ojol food, biasanya...",
    options: [
      { text: "Pesan dari resto favorit yang udah pasti enak", type: "A" },
      { text: "Explore resto baru, coba-coba", type: "B" },
      { text: "Yang promo aja, hemat!", type: "C" },
      { text: "Tergantung rekomendasi atau review", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Pendapatmu tentang ojol?",
    options: [
      { text: "Penyelamat hidup, gak kebayang tanpa ojol", type: "A" },
      { text: "Transportasi praktis dan efisien", type: "B" },
      { text: "Alternatif yang lumayan, tapi kadang mahal", type: "C" },
      { text: "Suka banget, driver juga sering ramah", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Penumpang Praktis",
    emoji: "📱",
    description: "Kamu adalah pengguna ojol yang efisien! Semua serba digital, cashless, dan terorganisir. Kamu tau cara memaksimalkan teknologi untuk kemudahan hidup.",
    traits: ["Praktis", "Digital-savvy", "Efisien", "Modern"],
    strengths: ["Tidak ribet", "Cepat dan tepat", "Tahu cara pakai aplikasi"],
    weaknesses: ["Kurang interaksi personal", "Terlalu bergantung teknologi"],
    tips: ["Sesekali ngobrol sama driver", "Hargai usaha mereka dengan tip"],
  },
  B: {
    type: "B",
    title: "Penumpang Bijak",
    emoji: "💰",
    description: "Kamu adalah pengguna ojol yang cerdas! Selalu compare harga, cek promo, dan memastikan dapat deal terbaik. Uang tidak boleh terbuang sia-sia.",
    traits: ["Bijak", "Hemat", "Teliti", "Strategis"],
    strengths: ["Hemat budget", "Tahu trik dapat promo", "Tidak boros"],
    weaknesses: ["Kadang terlalu lama milih", "Bisa miss momen karena nungguin promo"],
    tips: ["Kadang bayar full price juga gapapa", "Waktu juga berharga"],
  },
  C: {
    type: "C",
    title: "Penumpang Sosial",
    emoji: "💬",
    description: "Bagi kamu, ojol bukan cuma transportasi tapi juga kesempatan ngobrol! Kamu ramah, friendly, dan bikin driver senang ketemu penumpang kayak kamu.",
    traits: ["Ramah", "Sosial", "Friendly", "Hangat"],
    strengths: ["Bikin suasana nyaman", "Driver suka ketemu kamu", "Dapat banyak cerita"],
    weaknesses: ["Kadang terlalu banyak ngobrol", "Bisa ganggu konsentrasi driver"],
    tips: ["Perhatikan juga mood driver", "Kadang mereka butuh fokus"],
  },
  D: {
    type: "D",
    title: "Penumpang Aware",
    emoji: "👁️",
    description: "Kamu adalah penumpang yang aware dan hati-hati! Selalu cek rating, pantau jalur, dan memastikan keamanan. Safety first adalah mottomu.",
    traits: ["Hati-hati", "Aware", "Teliti", "Safety-oriented"],
    strengths: ["Jarang kena masalah", "Selalu waspada", "Tahu hak sebagai penumpang"],
    weaknesses: ["Bisa terkesan paranoid", "Kurang rileks"],
    tips: ["Percaya juga kadang perlu", "Tidak semua driver mencurigakan"],
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
