// Tipe Pengguna Shopee Kamu
// Tes ini mengungkap gaya belanja online kamu di Shopee!

export const questions = [
  {
    id: 1,
    question: "Kapan biasanya kamu buka aplikasi Shopee?",
    options: [
      { text: "Pas ada flash sale atau tanggal kembar (11.11, 12.12)", type: "A" },
      { text: "Hampir setiap hari, scrolling jadi hobi", type: "B" },
      { text: "Cuma kalau butuh beli sesuatu yang spesifik", type: "C" },
      { text: "Kalau ada notif voucher atau gratis ongkir", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Cart Shopee kamu biasanya...",
    options: [
      { text: "Penuh tapi jarang di-checkout, wishlist mode", type: "A" },
      { text: "Kosong karena langsung checkout kalau mau", type: "B" },
      { text: "Isi satu-dua barang yang memang dibutuhkan", type: "C" },
      { text: "Nunggu sampai bisa combine free shipping", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Review dan rating toko, seberapa penting?",
    options: [
      { text: "Sangat penting, baca semua review dulu", type: "A" },
      { text: "Cek sekilas aja, yang penting murah", type: "B" },
      { text: "Harus rating 4.8+ dan Star Seller", type: "C" },
      { text: "Lihat foto review dari pembeli", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Produk yang paling sering kamu beli...",
    options: [
      { text: "Fashion: baju, sepatu, aksesoris", type: "A" },
      { text: "Skincare dan beauty products", type: "B" },
      { text: "Kebutuhan rumah tangga dan groceries", type: "C" },
      { text: "Gadget dan elektronik", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Shopee Coins dan voucher...",
    options: [
      { text: "Rajin kumpulin dan pakai maksimal", type: "A" },
      { text: "Kadang lupa pakai, baru sadar sudah expired", type: "B" },
      { text: "Cuma pakai kalau significant savings", type: "C" },
      { text: "Main Shopee games setiap hari untuk koin", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Pas barang tidak sesuai ekspektasi...",
    options: [
      { text: "Ajukan refund/return, hak konsumen!", type: "A" },
      { text: "Kasih review jujur biar yang lain tau", type: "B" },
      { text: "Yasudah, terima aja asal fungsi oke", type: "C" },
      { text: "Chat seller dulu, minta solusi", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Checkout biasanya pakai pembayaran...",
    options: [
      { text: "ShopeePay, biar dapat cashback", type: "A" },
      { text: "COD, lebih aman pegang barang dulu", type: "B" },
      { text: "Transfer bank atau virtual account", type: "C" },
      { text: "SPayLater, bayar bulan depan", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Waktu pengiriman, ekspektasi kamu...",
    options: [
      { text: "Same day atau next day kalau bisa", type: "A" },
      { text: "Reguler aja, yang penting gratis ongkir", type: "B" },
      { text: "Tracking terus sampai barang datang", type: "C" },
      { text: "Sabar, yang penting sampai dengan selamat", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Shopee Live, kamu biasanya...",
    options: [
      { text: "Sering nonton, suka lihat review live", type: "A" },
      { text: "Jarang, buang-buang waktu", type: "B" },
      { text: "Cuma kalau ada voucher exclusive", type: "C" },
      { text: "Tidak pernah, langsung ke produk aja", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Total belanja Shopee sebulan biasanya...",
    options: [
      { text: "Tidak terhitung, better not knowing", type: "A" },
      { text: "Sesuai budget yang sudah ditentukan", type: "B" },
      { text: "Minimal, cuma untuk kebutuhan penting", type: "C" },
      { text: "Fluktuatif, tergantung promo", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Shopee Addict",
    emoji: "🛒",
    description: "Kamu adalah Shopee addict sejati! Flash sale adalah alarm, tanggal kembar adalah hari raya, dan free ongkir adalah mantra sakti. Cart kamu selalu penuh!",
    traits: ["Impulsive buyer", "Deal hunter", "Frequent shopper", "Enthusiastic"],
    strengths: ["Tau semua promo dan deal", "Dapat barang murah", "Expert navigator Shopee"],
    weaknesses: ["Sering beli yang tidak perlu", "Budget sering jebol"],
    tips: ["Set budget bulanan yang strict", "Tunggu 24 jam sebelum checkout impulse buy"],
  },
  B: {
    type: "B",
    title: "Casual Scroller",
    emoji: "📱",
    description: "Kamu suka scroll-scroll Shopee sebagai hiburan! Tidak selalu beli, tapi window shopping online adalah guilty pleasure yang tidak berbahaya.",
    traits: ["Browser", "Relaxed", "Selective", "Entertainment seeker"],
    strengths: ["Tidak terlalu impulsive", "Tau harga pasar", "Refreshing activity"],
    weaknesses: ["Kadang kebablasan juga beli", "Buang waktu scrolling"],
    tips: ["Set timer batas scrolling", "Produktifkan dengan review barang yang sudah dibeli"],
  },
  C: {
    type: "C",
    title: "Smart Buyer",
    emoji: "🧠",
    description: "Kamu adalah smart buyer yang strategic! Beli cuma yang dibutuhkan, riset dulu sebelum checkout, dan selalu dapat best value for money.",
    traits: ["Practical", "Research-oriented", "Disciplined", "Value-seeker"],
    strengths: ["Tidak pernah rugi", "Barang selalu sesuai kebutuhan", "Budget aman"],
    weaknesses: ["Kadang kebanyakan mikir, barang keburu habis"],
    tips: ["Sesekali treat yourself juga boleh", "Tidak semua keputusan harus perfect"],
  },
  D: {
    type: "D",
    title: "Voucher Hunter",
    emoji: "🎟️",
    description: "Kamu adalah voucher hunter profesional! Tidak akan checkout tanpa voucher, coins, atau gratis ongkir. Setiap rupiah hemat adalah kemenangan!",
    traits: ["Frugal", "Strategic", "Patient", "Savings-oriented"],
    strengths: ["Selalu dapat deal terbaik", "Maximum savings", "Sabar menunggu promo"],
    weaknesses: ["Kadang miss barang karena nunggu promo", "Terlalu fokus diskon"],
    tips: ["Kadang bayar full price juga worth it", "Waktu juga punya nilai"],
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
