// Gaya Cemburu Kamu dalam Hubungan
// Tes ini mengungkap bagaimana kamu handle rasa cemburu!

export const questions = [
  {
    id: 1,
    question: "Pasangan chatting sama lawan jenis, reaksimu?",
    options: [
      { text: "Biasa aja, percaya sama dia", type: "A" },
      { text: "Sedikit penasaran tapi tidak bertindak", type: "B" },
      { text: "Tanya langsung siapa itu", type: "C" },
      { text: "Cemas dan gelisah", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Pasangan cerita tentang teman lawan jenisnya yang seru, kamu...",
    options: [
      { text: "Happy dia punya teman baik", type: "A" },
      { text: "Dengerin tapi slightly uncomfortable", type: "B" },
      { text: "Pancing dengan pertanyaan lebih", type: "C" },
      { text: "Cemburu dan tidak suka", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Pasangan dipuji attractive sama orang lain, kamu...",
    options: [
      { text: "Bangga, 'iya dong pasanganku!'", type: "A" },
      { text: "Senyum tapi sedikit possessive", type: "B" },
      { text: "Langsung rangkul/pegang tangan marking territory", type: "C" },
      { text: "Tidak suka, merasa terancam", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Pasangan lama bales chat, pikiranmu?",
    options: [
      { text: "Pasti sibuk, no worries", type: "A" },
      { text: "Wonder kenapa tapi gak overthink", type: "B" },
      { text: "Cek online status dan last seen", type: "C" },
      { text: "Langsung curiga dan cemas", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Pasangan punya sahabat dekat lawan jenis sejak lama, menurutmu...",
    options: [
      { text: "Totally fine, friendship itu berharga", type: "A" },
      { text: "Oke tapi tetap waspada", type: "B" },
      { text: "Tidak nyaman, prefer ada batas", type: "C" },
      { text: "Tidak bisa terima, harus ada jarak", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Lihat pasangan like foto lawan jenis yang attractive, kamu...",
    options: [
      { text: "Biasa aja, cuma like", type: "A" },
      { text: "Notice tapi tidak komentar", type: "B" },
      { text: "Tanya 'siapa tuh?'", type: "C" },
      { text: "Kesal dan confrontasi", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Pasangan pergi sama teman (termasuk lawan jenis) tanpa kamu, reaksimu?",
    options: [
      { text: "Have fun! Trust sepenuhnya", type: "A" },
      { text: "Oke tapi minta update sesekali", type: "B" },
      { text: "Agak tidak rela, prefer ikut atau tau detailnya", type: "C" },
      { text: "Tidak setuju, harus selalu bareng", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Pernah cek HP pasangan tanpa izin?",
    options: [
      { text: "Tidak pernah dan tidak mau", type: "A" },
      { text: "Pernah tergoda tapi tidak dilakukan", type: "B" },
      { text: "Pernah beberapa kali", type: "C" },
      { text: "Sering, butuh tau apa yang terjadi", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Saat merasa cemburu, cara kamu handle...",
    options: [
      { text: "Self-reflect, biasanya tidak beralasan", type: "A" },
      { text: "Komunikasikan dengan tenang", type: "B" },
      { text: "Tunjukkan lewat sikap (diam/jutek)", type: "C" },
      { text: "Konfrontasi langsung, perlu kejelasan", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Ex pasangan masih contact, reaksimu?",
    options: [
      { text: "Oke selama ada boundaries yang jelas", type: "A" },
      { text: "Agak tidak nyaman tapi bisa terima", type: "B" },
      { text: "Tidak suka, prefer cut contact", type: "C" },
      { text: "Tidak bisa terima sama sekali", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Menurutmu, cemburu dalam hubungan itu...",
    options: [
      { text: "Tidak perlu kalau ada trust", type: "A" },
      { text: "Natural tapi harus dikontrol", type: "B" },
      { text: "Tanda cinta dan perhatian", type: "C" },
      { text: "Sulit dihindari, selalu ada", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Level trust kamu ke pasangan?",
    options: [
      { text: "100%, full trust tanpa keraguan", type: "A" },
      { text: "Tinggi, tapi tetap aware", type: "B" },
      { text: "Medium, perlu bukti dan reassurance", type: "C" },
      { text: "Susah trust sepenuhnya", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Secure & Trusting",
    emoji: "🔓",
    description: "Kamu sangat secure dalam hubungan! Trust level tinggi dan tidak mudah cemburu. Kamu percaya pada pasangan dan hubungan yang sehat.",
    traits: ["Secure", "Trusting", "Confident", "Independent"],
    strengths: ["Hubungan bebas drama", "Pasangan merasa dipercaya", "Healthy attachment"],
    weaknesses: ["Kadang bisa terlalu trust", "Mungkin miss red flags"],
    tips: ["Tetap aware tapi tidak paranoid", "Trust tapi verify kalau perlu"],
  },
  B: {
    type: "B",
    title: "Balanced & Aware",
    emoji: "⚖️",
    description: "Kamu punya level cemburu yang sehat! Ada awareness tapi tetap bisa kontrol. Kamu komunikatif tentang perasaanmu tanpa berlebihan.",
    traits: ["Balanced", "Communicative", "Self-aware", "Reasonable"],
    strengths: ["Handle jealousy well", "Good communication", "Healthy boundaries"],
    weaknesses: ["Kadang masih overthink", "Perlu reassurance sesekali"],
    tips: ["Keep up the good balance", "Trust yourself dan pasangan"],
  },
  C: {
    type: "C",
    title: "Possessive & Protective",
    emoji: "🛡️",
    description: "Kamu cenderung possessive dan protektif dalam hubungan. Cemburu sering muncul dan kamu butuh reassurance. Ini bisa jadi tanda care tapi perlu dikontrol.",
    traits: ["Possessive", "Protective", "Needs reassurance", "Territorial"],
    strengths: ["Pasangan merasa diinginkan", "Attentive", "Dedicated"],
    weaknesses: ["Bisa suffocating", "Trust issues", "Drama potential"],
    tips: ["Belajar self-soothe", "Trust adalah pilihan", "Communicate, don't control"],
  },
  D: {
    type: "D",
    title: "Anxious & Insecure",
    emoji: "😰",
    description: "Kamu memiliki level kecemburuan dan insecurity yang tinggi. Ini bisa sangat menguras dan mempengaruhi hubungan. Mungkin ada deeper issues yang perlu diaddress.",
    traits: ["Anxious", "Insecure", "Suspicious", "Need constant validation"],
    strengths: ["Very attentive", "Detail-oriented", "Care deeply"],
    weaknesses: ["Toxic potential", "Exhausting for both", "Relationship strain"],
    tips: ["Pertimbangkan terapi", "Work on self-esteem", "Insecurity bukan tanda cinta"],
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
