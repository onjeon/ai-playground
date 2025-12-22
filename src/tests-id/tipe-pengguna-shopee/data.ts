// Tipe Pengguna Shopee Kamu
// Tes ini mengungkap tipe pengguna Shopee seperti apa kamu!

export const questions = [
  {
    id: 1,
    question: "Kapan biasanya buka aplikasi Shopee?",
    options: [
      { text: "Setiap hari, ritual harian", type: "A" },
      { text: "Saat ada kebutuhan spesifik", type: "B" },
      { text: "Pas ada notif promo atau sale", type: "C" },
      { text: "Random, kalau bosan", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Kategori yang paling sering dibeli...",
    options: [
      { text: "Fashion dan beauty", type: "A" },
      { text: "Elektronik dan gadget", type: "B" },
      { text: "Kebutuhan rumah tangga", type: "C" },
      { text: "Macam-macam, tidak ada kategori khusus", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Shopee Games dan coin collection...",
    options: [
      { text: "Main setiap hari, kumpulin koin!", type: "A" },
      { text: "Sesekali kalau ingat", type: "B" },
      { text: "Tidak pernah, buang waktu", type: "C" },
      { text: "Tidak tau ada games", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Fitur live streaming Shopee...",
    options: [
      { text: "Sering nonton, dapat voucher!", type: "A" },
      { text: "Kadang kalau ada yang menarik", type: "B" },
      { text: "Skip, langsung browse produk aja", type: "C" },
      { text: "Tidak pernah coba", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Saat Shopee Birthday Sale atau 11.11...",
    options: [
      { text: "Siap dari tengah malam, checkout list!", type: "A" },
      { text: "Cek deals, beli kalau worth it", type: "B" },
      { text: "Skip hype, beli kapan aja sama aja", type: "C" },
      { text: "Lupa terus tanggalnya", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Review dan rating produk...",
    options: [
      { text: "Baca semua review dengan teliti", type: "A" },
      { text: "Lihat overall rating aja", type: "B" },
      { text: "Foto review lebih penting", type: "C" },
      { text: "Jarang baca, langsung beli", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Free shipping voucher...",
    options: [
      { text: "Collect semua, apply setiap checkout", type: "A" },
      { text: "Pakai kalau available", type: "B" },
      { text: "Jarang dapat atau lupa pakai", type: "C" },
      { text: "Mending bayar ongkir daripada ribet", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Tracking paket setelah order...",
    options: [
      { text: "Obsessively check setiap jam", type: "A" },
      { text: "Cek 1-2 kali sehari", type: "B" },
      { text: "Tunggu notifikasi sampai aja", type: "C" },
      { text: "Lupa kalau pernah order sampai barang datang", type: "D" },
    ],
  },
  {
    id: 9,
    question: "ShopeePay dan SPayLater...",
    options: [
      { text: "Aktif pakai untuk extra cashback", type: "A" },
      { text: "Pakai kalau ada promo", type: "B" },
      { text: "Prefer bayar langsung, tidak mau utang", type: "C" },
      { text: "Tidak pernah aktivasi", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Wishlist atau save for later...",
    options: [
      { text: "Penuh! Nunggu promo untuk checkout", type: "A" },
      { text: "Beberapa item yang lagi dipertimbangkan", type: "B" },
      { text: "Langsung beli, tidak pakai wishlist", type: "C" },
      { text: "Tidak tau cara pakai fitur itu", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Pengembalian atau komplain produk...",
    options: [
      { text: "Pernah beberapa kali, tau prosesnya", type: "A" },
      { text: "Sekali dua kali, kalau memang bermasalah", type: "B" },
      { text: "Malas ribet, terima aja", type: "C" },
      { text: "Belum pernah ada masalah", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Shopee buat kamu adalah...",
    options: [
      { text: "Lifestyle! Tidak bisa hidup tanpa", type: "A" },
      { text: "Platform belanja utama, praktis", type: "B" },
      { text: "Salah satu opsi, compare dulu dengan yang lain", type: "C" },
      { text: "Buka kalau terpaksa atau direkomendasikan", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Shopee Addict",
    emoji: "🛒",
    description: "Kamu adalah Shopee addict level max! App selalu terbuka, koin selalu di-collect, dan setiap promo tidak pernah terlewat. Checkout adalah cardio favoritmu!",
    traits: ["Heavy user", "Deal hunter", "Engaged", "Regular buyer"],
    strengths: ["Get best deals", "Know the platform", "Efficient shopper"],
    weaknesses: ["Impulse buying", "Spending bisa tinggi", "Time consuming"],
    tips: ["Set monthly budget", "Uninstall kalau perlu detox", "Not everything on sale is needed"],
  },
  B: {
    type: "B",
    title: "Smart Shopper",
    emoji: "🧠",
    description: "Kamu adalah smart shopper yang bijak! Beli saat butuh, compare prices, dan tidak mudah tergoda flash sale tidak penting. Efficient dan practical.",
    traits: ["Smart", "Practical", "Value-conscious", "Researched"],
    strengths: ["No regret purchases", "Get value", "Controlled spending"],
    weaknesses: ["Might miss some deals", "Over-research kadang"],
    tips: ["Good balance!", "Sesekali spontan juga oke"],
  },
  C: {
    type: "C",
    title: "Minimalist Buyer",
    emoji: "🌱",
    description: "Kamu adalah pengguna Shopee yang minimalist! Beli seperlunya, tidak terjebak hype sale, dan prefer kualitas over kuantitas. Simple and intentional.",
    traits: ["Minimalist", "Intentional", "Quality-focused", "Not impulsive"],
    strengths: ["No clutter", "Meaningful purchases", "Savings maintained"],
    weaknesses: ["Miss out on good deals", "Might overpay sometimes"],
    tips: ["Deals kadang worth it", "Check Shopee sesekali untuk compare prices"],
  },
  D: {
    type: "D",
    title: "Casual User",
    emoji: "🌊",
    description: "Kamu adalah casual Shopee user! Tidak terlalu familiar dengan semua fitur, beli kalau perlu aja. Relationship dengan e-commerce healthy dan tidak addicted.",
    traits: ["Casual", "Minimal engagement", "Not dependent", "Offline preference"],
    strengths: ["Not addicted", "Support local stores too", "Balanced"],
    weaknesses: ["Miss convenience", "Might overpay offline"],
    tips: ["Explore fitur Shopee", "Online shopping bisa save money kalau smart"],
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
