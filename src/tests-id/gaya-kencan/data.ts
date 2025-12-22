// Gaya Kencan Pertama Kamu
// Tes ini mengungkap bagaimana kamu di kencan pertama!

export const questions = [
  {
    id: 1,
    question: "Persiapan sebelum kencan pertama, kamu...",
    options: [
      { text: "Ribet banget, outfit harus perfect", type: "A" },
      { text: "Prepare secukupnya, yang penting rapi", type: "B" },
      { text: "Santai, be yourself aja", type: "C" },
      { text: "Nervous sampai mau cancel", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Tempat kencan pertama idealmu?",
    options: [
      { text: "Restoran nice atau cafe aesthetic", type: "A" },
      { text: "Casual, coffee shop atau tempat makan biasa", type: "B" },
      { text: "Aktivitas seru: nonton, main game, jalan", type: "C" },
      { text: "Tempat tenang yang bisa ngobrol", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Siapa yang bayar di kencan pertama?",
    options: [
      { text: "Yang ngajak yang bayar", type: "A" },
      { text: "Split bill, fair dan tidak ribet", type: "B" },
      { text: "Rebutan bayar, masing-masing mau treat", type: "C" },
      { text: "Tergantung situasi, fleksibel", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Topik obrolan di kencan pertama?",
    options: [
      { text: "Deep talk, langsung kenal dalam", type: "A" },
      { text: "Balance antara serius dan fun", type: "B" },
      { text: "Light dan banyak ketawa", type: "C" },
      { text: "Awkward, bingung mau ngomong apa", type: "D" },
    ],
  },
  {
    id: 5,
    question: "HP kamu selama kencan?",
    options: [
      { text: "Silent dan tidak disentuh", type: "A" },
      { text: "Cek sesekali kalau urgent", type: "B" },
      { text: "Foto-foto bareng untuk memories", type: "C" },
      { text: "Sering cek, nervous habit", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Durasi kencan pertama yang ideal?",
    options: [
      { text: "Lama, kalau cocok bisa sampai malam", type: "A" },
      { text: "2-3 jam, cukup untuk kenal", type: "B" },
      { text: "Tergantung flow, kalau seru lanjut", type: "C" },
      { text: "Singkat dulu, tidak mau terlalu intens", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Physical contact di kencan pertama?",
    options: [
      { text: "Kalau vibes cocok, bisa pegangan tangan", type: "A" },
      { text: "Minimal, mungkin sentuh ringan", type: "B" },
      { text: "No contact, masih kenalan", type: "C" },
      { text: "Awkward soal ini, tidak tau harus gimana", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Setelah kencan, kamu follow up dengan...",
    options: [
      { text: "Chat malam itu juga, 'aku sampai rumah'", type: "A" },
      { text: "Besoknya, kasih tau seru ketemu", type: "B" },
      { text: "Tunggu dia yang chat duluan", type: "C" },
      { text: "Bingung, takut keliatan needy", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Red flag di kencan pertama yang langsung bikin kamu turn off?",
    options: [
      { text: "Tidak sopan ke staff atau orang lain", type: "A" },
      { text: "Terlalu sibuk dengan HP", type: "B" },
      { text: "Boring atau tidak ada chemistry", type: "C" },
      { text: "Terlalu agresif atau pushy", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Ekspektasi dari kencan pertama?",
    options: [
      { text: "Langsung tau apakah cocok untuk serius", type: "A" },
      { text: "Get to know dulu, lihat nanti", type: "B" },
      { text: "Have fun, apapun hasilnya", type: "C" },
      { text: "Berharap tidak awkward aja sudah cukup", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Nervous di kencan pertama, level kamu?",
    options: [
      { text: "Excited lebih dari nervous", type: "A" },
      { text: "Sedikit nervous tapi bisa handle", type: "B" },
      { text: "Cukup nervous, tapi hilang setelah ngobrol", type: "C" },
      { text: "Sangat nervous, kadang blank", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Kesuksesan kencan pertama menurutmu ditentukan oleh?",
    options: [
      { text: "Chemistry dan deep connection", type: "A" },
      { text: "Komunikasi yang nyaman dan lancar", type: "B" },
      { text: "Fun dan memorable experience", type: "C" },
      { text: "Tidak ada moment awkward", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Romantic",
    emoji: "💕",
    description: "Kamu serius soal kencan pertama! Suka yang meaningful dan langsung cari connection dalam. Kamu percaya first impression penting untuk determine future.",
    traits: ["Romantic", "Intentional", "Connection-seeker", "Prepared"],
    strengths: ["Deep conversations", "Memorable dates", "Clear intentions"],
    weaknesses: ["Bisa terlalu intens", "Pressure tinggi", "Expectations besar"],
    tips: ["Relax, first date is just intro", "Not everything has to be perfect"],
  },
  B: {
    type: "B",
    title: "The Balanced Dater",
    emoji: "☕",
    description: "Kamu punya approach yang santai tapi tetap intentional. Balance sempurna antara getting to know dan having fun. Comfortable companion!",
    traits: ["Balanced", "Easy-going", "Good communicator", "Realistic"],
    strengths: ["Comfortable atmosphere", "No pressure vibes", "Authentic"],
    weaknesses: ["Might seem too casual", "Less memorable"],
    tips: ["Great approach! Sprinkle some romance occasionally"],
  },
  C: {
    type: "C",
    title: "The Fun Date",
    emoji: "🎉",
    description: "Kencan pertama adalah tentang having fun buatmu! Light, playful, dan memorable. Kamu bikin orang merasa nyaman dan enjoy.",
    traits: ["Fun", "Playful", "Light-hearted", "Entertaining"],
    strengths: ["Great first impression", "Memorable", "No pressure"],
    weaknesses: ["Mungkin kurang serious", "Hard to gauge real connection"],
    tips: ["Sesekali deeper talk juga bagus", "Show serious side too"],
  },
  D: {
    type: "D",
    title: "The Nervous Dater",
    emoji: "🥺",
    description: "Kencan pertama adalah nerve-wracking experience buatmu. Nervous, overthinking, dan takut awkward. It's okay, banyak orang begini!",
    traits: ["Nervous", "Overthinking", "Self-conscious", "Cautious"],
    strengths: ["Genuine", "Not fake confident", "Humble"],
    weaknesses: ["Might seem uninterested", "Miss opportunities", "Stressful experience"],
    tips: ["Latihan helps", "Be kind to yourself", "Nervous is cute sometimes"],
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
