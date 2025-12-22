// Pola Kelekatan (Attachment Style) Kamu
// Tes ini mengungkap gaya kelekatan emosional kamu dalam hubungan!

export const questions = [
  {
    id: 1,
    question: "Dalam hubungan romantis, kamu cenderung...",
    options: [
      { text: "Nyaman dengan kedekatan dan kemandirian", type: "A" },
      { text: "Butuh reassurance dan takut ditinggalkan", type: "B" },
      { text: "Jaga jarak, tidak suka terlalu dekat", type: "C" },
      { text: "Campur aduk, kadang mau dekat kadang menjauh", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Saat pasangan tidak membalas chat dengan cepat...",
    options: [
      { text: "Santai, pasti ada kesibukan", type: "A" },
      { text: "Cemas, overthinking kemungkinan terburuk", type: "B" },
      { text: "Tidak terlalu peduli, lanjut aktivitas sendiri", type: "C" },
      { text: "Bergantung mood, kadang cemas kadang cuek", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Cara kamu mengekspresikan kasih sayang...",
    options: [
      { text: "Terbuka dan natural, nyaman express love", type: "A" },
      { text: "Sangat ekspresif, butuh banyak validasi balik", type: "B" },
      { text: "Reserved, susah express feelings", type: "C" },
      { text: "Tidak konsisten, kadang sangat affectionate kadang distant", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Saat ada konflik dalam hubungan...",
    options: [
      { text: "Komunikasi terbuka, cari solusi bareng", type: "A" },
      { text: "Takut ditolak, butuh reassurance terus", type: "B" },
      { text: "Withdraw, butuh space untuk proses", type: "C" },
      { text: "Reaksi unpredictable, kadang fight kadang flight", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Tentang kemandirian dalam hubungan...",
    options: [
      { text: "Balance antara together dan individual time", type: "A" },
      { text: "Lebih suka selalu bersama, susah pisah", type: "B" },
      { text: "Sangat butuh personal space dan independence", type: "C" },
      { text: "Tidak konsisten, kadang clingy kadang sangat independent", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Kepercayaan pada pasangan...",
    options: [
      { text: "Mudah trust, jarang curiga berlebihan", type: "A" },
      { text: "Susah trust, butuh bukti terus", type: "B" },
      { text: "Trust tapi keep expectations low", type: "C" },
      { text: "Trust issues, tapi juga butuh closeness", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Saat hubungan mulai serius...",
    options: [
      { text: "Excited dan comfortable dengan commitment", type: "A" },
      { text: "Happy tapi juga anxious, takut kehilangan", type: "B" },
      { text: "Nervous, merasa trapped atau overwhelmed", type: "C" },
      { text: "Mixed feelings, mau tapi juga takut", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Setelah putus atau kehilangan...",
    options: [
      { text: "Sedih tapi bisa move on dengan sehat", type: "A" },
      { text: "Devastated, sangat susah move on", type: "B" },
      { text: "Relief, akhirnya bebas", type: "C" },
      { text: "Campur aduk, kadang ingin balik kadang lega", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Hubunganmu dengan keluarga growing up...",
    options: [
      { text: "Hangat dan supportive", type: "A" },
      { text: "Kurang konsisten, kadang ada kadang tidak", type: "B" },
      { text: "Distant atau cold", type: "C" },
      { text: "Complicated, banyak ups and downs", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Saat butuh support emosional...",
    options: [
      { text: "Nyaman minta bantuan dan juga give support", type: "A" },
      { text: "Sangat butuh support tapi takut merepotkan", type: "B" },
      { text: "Prefer handle sendiri, tidak suka vulnerable", type: "C" },
      { text: "Kadang minta kadang push away", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Pandanganmu tentang hubungan ideal...",
    options: [
      { text: "Partnership yang setara dan saling support", type: "A" },
      { text: "Total devotion dan closeness", type: "B" },
      { text: "Independence dengan occasional connection", type: "C" },
      { text: "Tidak yakin, belum menemukan yang cocok", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Self-worth dalam konteks hubungan...",
    options: [
      { text: "Stabil, tidak tergantung status relationship", type: "A" },
      { text: "Sangat terpengaruh oleh bagaimana pasangan treat", type: "B" },
      { text: "Tidak mau self-worth bergantung pada orang lain", type: "C" },
      { text: "Naik turun tergantung situasi hubungan", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Secure Attachment",
    emoji: "💚",
    description: "Kamu memiliki pola kelekatan yang aman! Kamu nyaman dengan kedekatan dan kemandirian, mampu trust dan communicate dengan baik. Ini adalah pola attachment yang paling sehat.",
    traits: ["Trusting", "Communicative", "Balanced", "Emotionally stable"],
    strengths: ["Hubungan sehat", "Good boundaries", "Resilient", "Good partner"],
    weaknesses: ["Kadang kurang relatable sama yang struggling", "Bisa terlihat terlalu 'sempurna'"],
    tips: ["Pertahankan", "Help others develop secure attachment", "Stay aware of red flags"],
  },
  B: {
    type: "B",
    title: "Anxious Attachment",
    emoji: "💛",
    description: "Kamu memiliki pola kelekatan anxious. Kamu sangat menginginkan kedekatan dan sering khawatir tentang hubungan. Reassurance dan validasi sangat penting bagimu.",
    traits: ["Warm", "Devoted", "Sensitive", "Need reassurance"],
    strengths: ["Very loving", "Attentive", "Deeply connected"],
    weaknesses: ["Anxiety dalam hubungan", "Dependent", "Fear of abandonment"],
    tips: ["Work on self-worth", "Communicate needs calmly", "Develop self-soothing"],
  },
  C: {
    type: "C",
    title: "Avoidant Attachment",
    emoji: "💙",
    description: "Kamu memiliki pola kelekatan avoidant. Kamu sangat menghargai kemandirian dan kadang merasa tidak nyaman dengan kedekatan emosional yang intens.",
    traits: ["Independent", "Self-reliant", "Reserved", "Distant"],
    strengths: ["Strong independence", "Not needy", "Self-sufficient"],
    weaknesses: ["Susah open up", "Miss deep connection", "Partner might feel neglected"],
    tips: ["Practice vulnerability", "Recognize need for connection", "Therapy bisa membantu"],
  },
  D: {
    type: "D",
    title: "Disorganized Attachment",
    emoji: "💜",
    description: "Kamu memiliki pola kelekatan yang disorganized atau fearful-avoidant. Kamu menginginkan kedekatan tapi juga takut dengannya. Ini sering hasil dari pengalaman masa kecil yang complicated.",
    traits: ["Complex", "Conflicted", "Unpredictable", "Deep"],
    strengths: ["Deep capacity for love", "Very aware", "Complex understanding"],
    weaknesses: ["Hot and cold", "Confusing for partners", "Internal conflict"],
    tips: ["Professional help sangat disarankan", "Self-compassion penting", "Healing is possible"],
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
