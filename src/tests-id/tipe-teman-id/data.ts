// Tes Tipe Kamu Sebagai Teman
// Temukan karaktermu dalam persahabatan!

export const questions = [
  {
    id: 1,
    question: "Saat teman curhat masalah berat...",
    options: [
      { text: "Kasih solusi dan saran konkret", type: "A" },
      { text: "Dengarkan dengan penuh empati", type: "B" },
      { text: "Hibur dan ajak happy-happy", type: "C" },
      { text: "Temani tanpa banyak bicara", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Di grup pertemanan, kamu biasanya...",
    options: [
      { text: "Yang bikin plans dan organisir acara", type: "A" },
      { text: "Yang jadi tempat curhat semua orang", type: "B" },
      { text: "Yang selalu bikin suasana cair", type: "C" },
      { text: "Yang selalu ikut tapi tidak banyak bicara", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Cara kamu menjaga persahabatan...",
    options: [
      { text: "Aktif ajak ketemuan dan chat duluan", type: "A" },
      { text: "Check up kondisi teman secara berkala", type: "B" },
      { text: "Kirim meme dan jokes untuk tetap connected", type: "C" },
      { text: "Selalu ada saat dibutuhkan", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Saat teman membuat keputusan yang menurutmu salah...",
    options: [
      { text: "Bilang langsung dengan tegas", type: "A" },
      { text: "Bicara baik-baik tentang concern-ku", type: "B" },
      { text: "Support apapun keputusannya", type: "C" },
      { text: "Diam tapi tetap ada jika butuh bantuan", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Hadiah untuk teman biasanya...",
    options: [
      { text: "Yang praktis dan berguna", type: "A" },
      { text: "Yang personal dan bermakna", type: "B" },
      { text: "Yang lucu dan bikin ketawa", type: "C" },
      { text: "Sesuatu yang dia butuhkan tapi tidak bilang", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Saat ada konflik dalam pertemanan...",
    options: [
      { text: "Hadapi langsung dan selesaikan", type: "A" },
      { text: "Cari waktu yang tepat untuk bicara", type: "B" },
      { text: "Coba cairkan suasana dulu", type: "C" },
      { text: "Beri waktu dan space", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Rahasia yang diceritakan teman...",
    options: [
      { text: "Disimpan rapat, tidak akan bocor", type: "A" },
      { text: "Jadi beban karena terlalu peduli", type: "B" },
      { text: "Lupa setelah beberapa waktu", type: "C" },
      { text: "Simpan tanpa judge", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Tipe hangout yang kamu suka...",
    options: [
      { text: "Aktivitas bareng: olahraga, main game", type: "A" },
      { text: "Ngobrol sambil ngopi atau makan", type: "B" },
      { text: "Party atau acara seru", type: "C" },
      { text: "Quality time simple di rumah", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Saat teman sukses atau dapat kabar baik...",
    options: [
      { text: "Kasih selamat dan proud of them", type: "A" },
      { text: "Super happy dan rayakan besar", type: "B" },
      { text: "Bikin heboh dan cerita ke semua orang", type: "C" },
      { text: "Bahagia dalam hati, support dari jauh", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Jumlah teman dekat yang kamu punya...",
    options: [
      { text: "Banyak kenalan, beberapa teman dekat", type: "A" },
      { text: "Sedikit tapi very close", type: "B" },
      { text: "Banyak! Makin rame makin seru", type: "C" },
      { text: "Sangat selektif, 1-2 orang saja", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Kalau teman tidak membalas chat...",
    options: [
      { text: "Follow up atau tanya langsung", type: "A" },
      { text: "Sedikit khawatir tapi tetap sabar", type: "B" },
      { text: "Cuek, pasti lagi sibuk", type: "C" },
      { text: "Tidak masalah, reply nanti juga okay", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Yang paling penting dalam persahabatan...",
    options: [
      { text: "Loyalty dan bisa diandalkan", type: "A" },
      { text: "Saling memahami dan support", type: "B" },
      { text: "Seru dan bisa have fun bareng", type: "C" },
      { text: "Trust dan tidak judgemental", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Reliable One",
    emoji: "🛡️",
    description: "Kamu adalah teman yang sangat bisa diandalkan! Selalu ada saat dibutuhkan, siap kasih solusi, dan tidak pernah ingkar janji. Teman-temanmu beruntung punya kamu.",
    traits: ["Reliable", "Tegas", "Problem solver", "Loyal"],
    strengths: ["Bisa diandalkan", "Jujur", "Good leader dalam circle"],
    weaknesses: ["Kadang terlalu blak-blakan", "Bisa bossy"],
    tips: ["Kadang teman butuh didengar, bukan solusi", "Softkan delivery-mu sesekali"],
  },
  B: {
    type: "B",
    title: "The Empath",
    emoji: "💝",
    description: "Kamu adalah teman yang sangat empati dan caring! Selalu tau perasaan teman dan jadi tempat curhat terbaik. Kehadiranmu membuat orang merasa dimengerti.",
    traits: ["Empathetic", "Caring", "Good listener", "Supportive"],
    strengths: ["Tempat curhat terbaik", "Sensitif terhadap perasaan", "Nurturing"],
    weaknesses: ["Sering absorb masalah orang", "Lupa self-care"],
    tips: ["Jaga boundaries untuk dirimu sendiri", "Tidak harus carry semua beban orang"],
  },
  C: {
    type: "C",
    title: "The Fun One",
    emoji: "🎉",
    description: "Kamu adalah mood booster dalam pertemanan! Selalu bikin suasana ceria dan seru. Hangout tidak lengkap tanpa kehadiranmu yang energik dan fun.",
    traits: ["Fun", "Energetic", "Social butterfly", "Optimistic"],
    strengths: ["Bikin happy", "Good vibes only", "Easy to be around"],
    weaknesses: ["Kadang kurang serius", "Menghindari deep talks"],
    tips: ["Belajar ada di momen serius juga", "Teman juga butuh deep connection"],
  },
  D: {
    type: "D",
    title: "The Quiet Supporter",
    emoji: "🌙",
    description: "Kamu adalah teman yang selalu ada dalam diam! Tidak banyak bicara tapi selalu hadir saat dibutuhkan. Supportmu genuine dan tanpa pamrih.",
    traits: ["Quiet", "Observant", "Genuine", "No judgment"],
    strengths: ["Trustworthy", "Safe space", "Unconditional support"],
    weaknesses: ["Kurang ekspresif", "Sering tidak terdeteksi"],
    tips: ["Sesekali show affection lebih", "Inisiatif contact teman duluan"],
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
