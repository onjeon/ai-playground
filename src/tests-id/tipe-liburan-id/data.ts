// Tes Tipe Liburan Ideal Kamu
// Temukan destinasi dan gaya liburan yang cocok untukmu!

export const questions = [
  {
    id: 1,
    question: "Tujuan utama kamu liburan adalah...",
    options: [
      { text: "Refreshing dan healing dari rutinitas", type: "A" },
      { text: "Adventure dan pengalaman baru", type: "B" },
      { text: "Quality time sama keluarga/teman", type: "C" },
      { text: "Foto-foto dan konten aesthetic", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Budget liburan kamu biasanya...",
    options: [
      { text: "Siap budget lebih untuk kenyamanan", type: "A" },
      { text: "Secukupnya, yang penting seru", type: "B" },
      { text: "Patungan sama teman-teman", type: "C" },
      { text: "Hemat tapi tetap instagramable", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Akomodasi ideal kamu...",
    options: [
      { text: "Resort atau hotel bintang 4-5", type: "A" },
      { text: "Hostel atau homestay lokal", type: "B" },
      { text: "Villa yang bisa bareng-bareng", type: "C" },
      { text: "Airbnb atau hotel aesthetic", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Aktivitas liburan favorit...",
    options: [
      { text: "Spa, berenang, makan enak", type: "A" },
      { text: "Hiking, diving, atau extreme sports", type: "B" },
      { text: "Jalan-jalan santai, ngobrol, main games", type: "C" },
      { text: "Hunting foto di spot-spot keren", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Planning liburan kamu...",
    options: [
      { text: "Detail dari awal, semua di-booking", type: "A" },
      { text: "Spontan, go with the flow", type: "B" },
      { text: "Diskusi bareng dan bagi tugas", type: "C" },
      { text: "Research tempat-tempat aesthetic", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Destinasi impian kamu...",
    options: [
      { text: "Bali atau Maldives - pantai private", type: "A" },
      { text: "Raja Ampat atau Komodo - adventure!", type: "B" },
      { text: "Yogyakarta atau Malang - banyak destinasi", type: "C" },
      { text: "Labuan Bajo atau Nusa Penida - iconic views", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Saat di tempat wisata rame...",
    options: [
      { text: "Cari alternatif yang lebih sepi", type: "A" },
      { text: "Tetap explore, rame = seru", type: "B" },
      { text: "Enjoy aja bareng temen", type: "C" },
      { text: "Nunggu sepi buat foto bagus", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Makanan saat liburan...",
    options: [
      { text: "Fine dining atau restaurant recommended", type: "A" },
      { text: "Local food, street food, apapun!", type: "B" },
      { text: "Makan bareng di resto yang bisa duduk lama", type: "C" },
      { text: "Cafe instagramable dan unique", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Oleh-oleh yang biasa kamu beli...",
    options: [
      { text: "Barang branded atau premium", type: "A" },
      { text: "Souvernir unik dan local crafts", type: "B" },
      { text: "Makanan khas buat keluarga dan teman", type: "C" },
      { text: "Barang aesthetic buat koleksi", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Post-liburan, kamu biasanya...",
    options: [
      { text: "Butuh recovery, liburan dari liburan", type: "A" },
      { text: "Langsung planning trip selanjutnya!", type: "B" },
      { text: "Reminiscing bareng temen lewat foto", type: "C" },
      { text: "Edit dan upload konten liburan", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Saat cuaca tidak sesuai ekspektasi...",
    options: [
      { text: "Reschedule atau pindah indoor", type: "A" },
      { text: "Lanjut aja, part of adventure", type: "B" },
      { text: "Main games atau ngobrol di penginapan", type: "C" },
      { text: "Cari spot indoor yang tetap bagus buat foto", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Partner liburan ideal kamu...",
    options: [
      { text: "Solo atau sama pasangan aja", type: "A" },
      { text: "Siapapun yang adventurous", type: "B" },
      { text: "Geng lengkap, makin rame makin seru", type: "C" },
      { text: "Yang bisa ambil foto bagus!", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Luxury Traveler",
    emoji: "✨",
    description: "Kamu adalah traveler yang mengutamakan kenyamanan dan kualitas! Liburan adalah investasi untuk self-care dan kamu tidak keberatan spend lebih untuk pengalaman premium.",
    traits: ["Quality focused", "Self-care oriented", "Planned", "Comfort seeker"],
    strengths: ["Pengalaman selalu memorable", "Tidak stres saat liburan", "Well-rested"],
    weaknesses: ["Budget bisa membengkak", "Miss hidden gems lokal"],
    tips: ["Coba sekali-kali local experience", "Budget trip juga bisa seru!"],
  },
  B: {
    type: "B",
    title: "Adventure Seeker",
    emoji: "🏔️",
    description: "Kamu adalah jiwa petualang! Liburan bukan liburan kalau tidak ada tantangan dan pengalaman baru. Tempat yang belum banyak orang kunjungi adalah targetmu.",
    traits: ["Adventurous", "Spontan", "Brave", "Experience collector"],
    strengths: ["Banyak cerita seru", "Adaptable", "Open minded"],
    weaknesses: ["Kadang underestimate resiko", "Kurang relaxing"],
    tips: ["Sisipkan waktu untuk istirahat", "Safety first ya!"],
  },
  C: {
    type: "C",
    title: "Social Traveler",
    emoji: "👨‍👩‍👧‍👦",
    description: "Buat kamu, liburan adalah tentang quality time dengan orang-orang tersayang! Destinasi apa saja jadi seru kalau bareng dengan teman atau keluarga.",
    traits: ["Social", "Family oriented", "Easy going", "Memory maker"],
    strengths: ["Selalu ada yang nemenin", "Biaya bisa dibagi", "Fun dan memorable"],
    weaknesses: ["Susah kalau schedule tidak cocok", "Kompromis terus"],
    tips: ["Sesekali solo trip untuk self-discovery", "Belajar bilang tidak kalau tidak cocok"],
  },
  D: {
    type: "D",
    title: "Aesthetic Traveler",
    emoji: "📸",
    description: "Kamu adalah traveler yang menghargai keindahan visual! Spot foto yang instagramable dan pengalaman aesthetic adalah prioritas. Konten adalah bukti bahwa liburan itu nyata!",
    traits: ["Visual oriented", "Creative", "Trend aware", "Detail focused"],
    strengths: ["Foto selalu bagus", "Tau tempat-tempat keren", "Good eye for beauty"],
    weaknesses: ["Terlalu fokus konten", "Kadang miss the moment"],
    tips: ["Put the phone down sesekali", "Nikmati momen tanpa harus difoto"],
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
