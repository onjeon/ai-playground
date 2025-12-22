// Tes Gaya Belanja Online Kamu
// Temukan tipe shopper online kamu!

export const questions = [
  {
    id: 1,
    question: "Saat buka Shopee/Tokopedia, kamu biasanya...",
    options: [
      { text: "Langsung search barang yang dibutuhkan", type: "A" },
      { text: "Scroll-scroll dulu lihat promo dan flash sale", type: "B" },
      { text: "Cek wishlist dan bandingkan harga", type: "C" },
      { text: "Window shopping, add to cart tapi ga dibeli", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Reaksi kamu saat ada notif 'Flash Sale dimulai!'...",
    options: [
      { text: "Cuek, kalau ga butuh ya ga beli", type: "A" },
      { text: "Langsung buka dan checkout secepat mungkin!", type: "B" },
      { text: "Cek dulu, kalau emang murah baru beli", type: "C" },
      { text: "Excited lihat-lihat tapi jarang beli", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Sebelum checkout, kamu pasti...",
    options: [
      { text: "Langsung bayar, ga ribet", type: "A" },
      { text: "Hitung total promo dan ongkir", type: "B" },
      { text: "Baca review dan bandingkan toko lain", type: "C" },
      { text: "Pikir-pikir dulu, sering batal checkout", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Metode pembayaran favorit kamu...",
    options: [
      { text: "Transfer bank, langsung beres", type: "A" },
      { text: "ShopeePay/OVO karena ada cashback", type: "B" },
      { text: "COD, biar bisa cek barang dulu", type: "C" },
      { text: "Paylater, bayar nanti aja", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Barang yang paling sering kamu beli online...",
    options: [
      { text: "Kebutuhan pokok: toiletries, makanan, etc", type: "A" },
      { text: "Fashion dan beauty products", type: "B" },
      { text: "Gadget dan elektronik", type: "C" },
      { text: "Random stuff yang lucu-lucu", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Tanggal kembar (11.11, 12.12) buatmu adalah...",
    options: [
      { text: "Hari biasa aja", type: "A" },
      { text: "HARI BESAR! Sudah prepare wishlist", type: "B" },
      { text: "Kesempatan beli barang mahal dengan diskon", type: "C" },
      { text: "Window shopping terbesar sepanjang tahun", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Saat barang pesanan datang...",
    options: [
      { text: "Unboxing cepat, langsung pakai", type: "A" },
      { text: "Unboxing sambil bikin konten/story", type: "B" },
      { text: "Cek detail, pastikan sesuai pesanan", type: "C" },
      { text: "Kadang lupa udah pesen apa", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Free ongkir minimum belanja Rp 50rb, keranjangmu Rp 35rb...",
    options: [
      { text: "Bayar ongkir aja, males nambah", type: "A" },
      { text: "Cari barang Rp 15rb biar free ongkir!", type: "B" },
      { text: "Gabungin dengan kebutuhan lain", type: "C" },
      { text: "Cancel dulu, nunggu promo lebih bagus", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Review dan rating toko menurutmu...",
    options: [
      { text: "Yang penting barangnya ada", type: "A" },
      { text: "Harus 4.5+ dengan banyak review", type: "B" },
      { text: "Baca teliti, terutama review negatif", type: "C" },
      { text: "Lihat foto review dari pembeli", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Voucher dan promo code...",
    options: [
      { text: "Males ngumpulin, ribet", type: "A" },
      { text: "Koleksi semua voucher yang ada!", type: "B" },
      { text: "Pakai kalau kebetulan punya", type: "C" },
      { text: "Sering lupa pakai padahal punya", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Estimasi pengiriman 3-5 hari, reaksimu...",
    options: [
      { text: "OK, ditunggu aja", type: "A" },
      { text: "Cek tracking tiap hari!", type: "B" },
      { text: "Cek sekali-sekali kalau ingat", type: "C" },
      { text: "Lupa sampai barang datang sendiri", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Budget belanja online per bulan...",
    options: [
      { text: "Sesuai kebutuhan, tidak tentu", type: "A" },
      { text: "Ada budget khusus tapi sering over", type: "B" },
      { text: "Terencana dan disiplin", type: "C" },
      { text: "Tidak track, YOLO", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Practical Shopper",
    emoji: "🎯",
    description: "Kamu adalah tipe shopper yang praktis dan efisien! Beli apa yang dibutuhkan, tidak lebih tidak kurang. Anti ribet dan tidak mudah tergoda promo yang tidak perlu.",
    traits: ["Efisien", "Praktis", "Tidak impulsif", "Minimalis"],
    strengths: ["Hemat waktu dan uang", "Tidak FOMO", "Keputusan cepat"],
    weaknesses: ["Kadang miss good deals", "Kurang explore options"],
    tips: ["Sesekali treat yourself", "Beberapa promo memang worth it!"],
  },
  B: {
    type: "B",
    title: "Deal Hunter",
    emoji: "🏷️",
    description: "Kamu adalah pemburu diskon sejati! Tidak ada flash sale atau promo yang luput dari radarmu. Shopee Coins dan voucher adalah nyawa kedua!",
    traits: ["Strategic", "Bargain hunter", "FOMO tinggi", "Impulsif"],
    strengths: ["Dapat harga terbaik", "Tau semua trik promo", "Tidak mau rugi"],
    weaknesses: ["Sering beli yang tidak perlu", "Over budget"],
    tips: ["Bikin wishlist dan stick to it", "Promo bukan alasan beli barang tidak perlu"],
  },
  C: {
    type: "C",
    title: "Research Shopper",
    emoji: "🔍",
    description: "Kamu adalah shopper yang teliti dan careful! Sebelum beli pasti research habis-habisan: baca review, bandingkan harga, cek spek. No regret purchase!",
    traits: ["Teliti", "Analytical", "Patient", "Informed"],
    strengths: ["Rarely disappointed", "Best value for money", "Smart decisions"],
    weaknesses: ["Terlalu lama deciding", "Analysis paralysis"],
    tips: ["Kadang intuisi juga perlu", "Tidak semua beli harus sempurna"],
  },
  D: {
    type: "D",
    title: "Window Shopper",
    emoji: "👀",
    description: "Kamu adalah tipe yang suka browsing tapi jarang beli! Cart kamu penuh tapi checkout jarang. Menikmati proses lihat-lihat tanpa pressure harus beli.",
    traits: ["Dreamer", "Indecisive", "Budget conscious", "FOMO rendah"],
    strengths: ["Hemat uang", "Tidak impulsif", "Content dengan apa yang ada"],
    weaknesses: ["Kadang ketinggalan barang bagus", "Terlalu overthinking"],
    tips: ["Kalau emang butuh, beli aja", "Treat yourself sesekali!"],
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
