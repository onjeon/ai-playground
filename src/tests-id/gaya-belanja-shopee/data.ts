// Gaya Belanja Shopee Kamu
// Tes ini mengungkap personality kamu saat belanja di Shopee!

export const questions = [
  {
    id: 1,
    question: "Saat buka Shopee, biasanya untuk...",
    options: [
      { text: "Window shopping, scroll-scroll aja", type: "A" },
      { text: "Cari barang specific yang dibutuhkan", type: "B" },
      { text: "Hunting flash sale dan deals", type: "C" },
      { text: "Checkout cart yang udah numpuk", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Reaksi saat ada notif 'Shopee 11.11 Sale'...",
    options: [
      { text: "FINALLY! Siap-siap checkout list", type: "A" },
      { text: "Check kalau ada yang beneran butuh", type: "B" },
      { text: "Stay up midnight untuk flash sale", type: "C" },
      { text: "Ignore, another sale aja", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Waktu paling sering scrolling Shopee...",
    options: [
      { text: "Malam sebelum tidur", type: "A" },
      { text: "Saat ada kebutuhan spesifik", type: "B" },
      { text: "Setiap hari, habit", type: "C" },
      { text: "Random, when bored", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Kriteria pilih seller...",
    options: [
      { text: "Yang ada promo/voucher terbaik", type: "A" },
      { text: "Rating tinggi, reviews bagus", type: "B" },
      { text: "Official store/Mall preferred", type: "C" },
      { text: "Termurah wins", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Review sebelum beli...",
    options: [
      { text: "Baca foto reviews, semua page", type: "A" },
      { text: "Quick scan rating dan top reviews", type: "B" },
      { text: "Rating 4+ cukup, langsung beli", type: "C" },
      { text: "YOLO, langsung checkout", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Voucher dan promo codes...",
    options: [
      { text: "Collect semua, apply maximum", type: "A" },
      { text: "Use yang available, ga ribet", type: "B" },
      { text: "Hunt special vouchers religiously", type: "C" },
      { text: "Lupa pakai sering, checkout aja", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Cart situation kamu sekarang...",
    options: [
      { text: "Puluhan item waiting for sale", type: "A" },
      { text: "Beberapa item yang beneran mau beli", type: "B" },
      { text: "Bersih, langsung beli ga ditaro cart", type: "C" },
      { text: "Chaos, banyak tapi ga tau mau beli", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Free shipping minimum order...",
    options: [
      { text: "Add random items supaya qualify", type: "A" },
      { text: "Plan purchases untuk bundle", type: "B" },
      { text: "Pay shipping kalau ga sampai min", type: "C" },
      { text: "Always wait sampai ada free ship voucher", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Barang yang sering dibeli...",
    options: [
      { text: "Random stuff, variety", type: "A" },
      { text: "Necessities, repeat orders", type: "B" },
      { text: "Trendy items, viral products", type: "C" },
      { text: "Specific hobby/interest items", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Shopee games dan coins...",
    options: [
      { text: "Play daily untuk coins!", type: "A" },
      { text: "Occasionally untuk extra discount", type: "B" },
      { text: "Ga sempat, skip", type: "C" },
      { text: "Ga tau ada games", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Return/refund experience...",
    options: [
      { text: "Sering, kalau ga sesuai return", type: "A" },
      { text: "Rare, research dulu sebelum beli", type: "B" },
      { text: "Malas, terima aja biasanya", type: "C" },
      { text: "Never, selalu terima apa adanya", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Tracking package...",
    options: [
      { text: "Obsessively check setiap jam", type: "A" },
      { text: "Check sekali sehari", type: "B" },
      { text: "Wait notification delivery", type: "C" },
      { text: "Surprise saat sampai", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Shopee Addict",
    emoji: "🛒",
    description: "Shopee adalah second home! Kamu tau semua tricks, semua sales, dan checkout jadi daily activity. Cart selalu penuh, wallet selalu crying!",
    traits: ["Enthusiastic", "Deal-hunter", "Compulsive", "Shopee expert"],
    strengths: ["Great deals always", "Know the platform inside out", "Help friends shop"],
    weaknesses: ["Overspending", "Buying things you don't need", "Shopee addiction real"],
    tips: ["Set monthly budget", "Unfollow notification bisa bantu", "Do you really need it?"],
  },
  B: {
    type: "B",
    title: "The Smart Shopper",
    emoji: "🧠",
    description: "Kamu adalah Shopee user yang smart! Research before buying, compare prices, dan only buy yang beneran needed. Efficient dan practical!",
    traits: ["Strategic", "Research-oriented", "Practical", "Value-conscious"],
    strengths: ["No regret purchases", "Get best value", "Controlled spending"],
    weaknesses: ["Miss some fun impulse buys?", "Over-research sometimes"],
    tips: ["It's okay untuk spontan kadang", "Not everything needs research", "Treat yourself too"],
  },
  C: {
    type: "C",
    title: "The Flash Sale Hunter",
    emoji: "⚡",
    description: "Kamu hidup untuk sales! Flash sale, 11.11, midnight deals - you're there. Patience dan strategy untuk get the best deals. Professional discount hunter!",
    traits: ["Patient", "Strategic", "Deal-obsessed", "Timing expert"],
    strengths: ["Maximum savings", "Never pay full price", "Alert for deals"],
    weaknesses: ["Buy because sale, not need", "Stress hunting deals", "Time spent on deals"],
    tips: ["Good deal on thing you don't need = waste", "Time is money too", "Sometimes convenience > discount"],
  },
  D: {
    type: "D",
    title: "The Casual Buyer",
    emoji: "🌊",
    description: "Kamu use Shopee dengan santai! Buy when needed, ga obsess dengan deals, dan enjoy the surprise when package arrives. Chill relationship!",
    traits: ["Casual", "Spontaneous", "Relaxed", "No-fuss"],
    strengths: ["Low stress shopping", "Not addicted", "Balanced relationship"],
    weaknesses: ["Miss deals sometimes", "Could save more with effort"],
    tips: ["Maybe check vouchers next time", "Some planning saves money", "But your chill is healthy!"],
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
