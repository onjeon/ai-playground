// Tipe Pengguna Grab/Gojek Kamu
// Tes ini mengungkap tipe pengguna ojol seperti apa kamu!

export const questions = [
  {
    id: 1,
    question: "Fitur yang paling sering dipakai...",
    options: [
      { text: "GoRide/GrabBike - transportasi utama", type: "A" },
      { text: "GoFood/GrabFood - makan adalah prioritas", type: "B" },
      { text: "GoCar/GrabCar - nyaman dan aman", type: "C" },
      { text: "Semua fitur, tergantung kebutuhan", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Saat memesan ojol untuk transportasi...",
    options: [
      { text: "Siap di titik jemput, tidak mau bikin driver nunggu", type: "A" },
      { text: "Order dulu, sambil siap-siap", type: "B" },
      { text: "Tunggu driver sampai dekat baru keluar", type: "C" },
      { text: "Chat dulu pastikan driver paham lokasi", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Rating yang biasa kamu kasih ke driver...",
    options: [
      { text: "Selalu 5 bintang, kasihan kalau kurang", type: "A" },
      { text: "Sesuai performa, fair review", type: "B" },
      { text: "Jarang kasih rating, lupa", type: "C" },
      { text: "5 bintang plus tip kalau excellent", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Saat promo dan voucher...",
    options: [
      { text: "Hunting aktif, selalu cek promo", type: "A" },
      { text: "Pakai kalau ada, tidak khusus cari", type: "B" },
      { text: "Subscribe membership untuk benefit rutin", type: "C" },
      { text: "Jarang perhatikan, order aja langsung", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Interaksi dengan driver selama perjalanan...",
    options: [
      { text: "Ngobrol friendly, kadang jadi curhat session", type: "A" },
      { text: "Sapa singkat, sisanya fokus HP", type: "B" },
      { text: "Earphone in, signal tidak mau ngobrol", type: "C" },
      { text: "Tergantung mood dan vibes driver", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Order makanan via aplikasi...",
    options: [
      { text: "Hampir setiap hari, dapur virtual", type: "A" },
      { text: "Seminggu beberapa kali, practical", type: "B" },
      { text: "Sesekali, prefer masak atau beli langsung", type: "C" },
      { text: "Kalau ada promo besar-besaran", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Saat driver cancel atau tidak ketemu...",
    options: [
      { text: "Sabar, order lagi dan kasih petunjuk lebih jelas", type: "A" },
      { text: "Kesal tapi tidak komplain, bad luck", type: "B" },
      { text: "Komplain ke CS kalau merugikan", type: "C" },
      { text: "Bad rating dan tidak order lagi hari itu", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Payment method favorit...",
    options: [
      { text: "E-wallet (OVO/GoPay) - cashless sepenuhnya", type: "A" },
      { text: "Cash, lebih gampang kontrol", type: "B" },
      { text: "Kartu kredit/debit untuk poin", type: "C" },
      { text: "Mix, tergantung promo mana yang lebih bagus", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Saat pesanan makanan tidak sesuai...",
    options: [
      { text: "Komplain dan minta refund/penggantian", type: "A" },
      { text: "Terima aja, malas ribet", type: "B" },
      { text: "Kasih review jujur biar resto tahu", type: "C" },
      { text: "Tergantung seberapa fatal kesalahannya", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Alasan utama pakai ojol...",
    options: [
      { text: "Praktis, tidak mau ribet bawa kendaraan", type: "A" },
      { text: "Lebih murah dari naik kendaraan sendiri", type: "B" },
      { text: "Tidak punya kendaraan pribadi", type: "C" },
      { text: "Multitasking, bisa kerja di perjalanan", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Favorit resto/merchant di aplikasi...",
    options: [
      { text: "Banyak! Sudah save semua langganan", type: "A" },
      { text: "Beberapa yang proven enak dan cepat", type: "B" },
      { text: "Explore terus, suka coba yang baru", type: "C" },
      { text: "Search berdasarkan mood saat itu", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Pandangan tentang ojol...",
    options: [
      { text: "Penyelamat hidup urban, tidak bisa hidup tanpa", type: "A" },
      { text: "Convenient, tapi tidak dependent", type: "B" },
      { text: "Necessary evil, mahal tapi butuh", type: "C" },
      { text: "Support lokal, senang bantu driver", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Ojol Addict",
    emoji: "📱",
    description: "Kamu adalah heavy user ojol! Dari transportasi sampai makanan, semua via aplikasi. Hidup tanpa ojol tidak terbayangkan. Driver-driver sudah kenal sama kamu!",
    traits: ["Dependent", "Praktis", "Urban lifestyle", "Cashless"],
    strengths: ["Hidup efisien", "Tidak ribet", "Waktu optimal"],
    weaknesses: ["Bisa boros", "Terlalu dependent", "Kurang gerak"],
    tips: ["Kadang jalan kaki juga sehat", "Set budget bulanan untuk ojol"],
  },
  B: {
    type: "B",
    title: "Smart User",
    emoji: "🧠",
    description: "Kamu adalah pengguna ojol yang smart! Pakai saat perlu, tahu kapan worth it dan kapan lebih baik cara lain. Balance dan tidak dependent.",
    traits: ["Bijak", "Balance", "Cost-conscious", "Practical"],
    strengths: ["Hemat budget", "Tidak dependent", "Bijak memilih"],
    weaknesses: ["Kadang terlalu hitung-hitungan", "Bisa lebih santai"],
    tips: ["Sesekali treat yourself", "Convenience juga punya nilai"],
  },
  C: {
    type: "C",
    title: "Premium User",
    emoji: "⭐",
    description: "Kamu adalah pengguna ojol yang mengutamakan kenyamanan! Tidak masalah bayar lebih untuk service lebih baik. GoCar/GrabCar adalah pilihan utama.",
    traits: ["Comfort-oriented", "Quality over price", "Selective", "Demanding"],
    strengths: ["Pengalaman selalu nyaman", "Standar tinggi", "Tidak stress"],
    weaknesses: ["Budget lebih besar", "Kurang fleksibel"],
    tips: ["Motor kadang lebih cepat lho", "Fleksibilitas juga penting"],
  },
  D: {
    type: "D",
    title: "Casual User",
    emoji: "🌊",
    description: "Kamu adalah pengguna ojol yang casual! Pakai saat butuh, tidak overthinking, dan appreciate driver dengan baik. Healthy relationship dengan teknologi.",
    traits: ["Casual", "Appreciative", "Flexible", "Balanced"],
    strengths: ["Tidak dependent", "Good relationship dengan driver", "Balanced lifestyle"],
    weaknesses: ["Kadang kurang optimal dalam timing", "Bisa lebih memanfaatkan promo"],
    tips: ["Cek promo kadang-kadang, lumayan lho", "Download kedua aplikasi untuk compare"],
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
