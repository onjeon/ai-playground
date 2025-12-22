// Tes Tingkat Cemburu Kamu
// Seberapa cemburu kamu dalam hubungan?

export const questions = [
  {
    id: 1,
    question: "Pasangan like foto orang yang attractive di Instagram...",
    options: [
      { text: "Tidak masalah, normal aja", type: "A" },
      { text: "Sedikit notice tapi tidak besar", type: "B" },
      { text: "Annoyed dan akan mention", type: "C" },
      { text: "Langsung kesal dan interogasi", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Pasangan punya teman dekat opposite gender...",
    options: [
      { text: "Totally fine, trust penuh", type: "A" },
      { text: "Okay tapi want to know about them", type: "B" },
      { text: "Uncomfortable dan selalu curiga", type: "C" },
      { text: "Tidak bisa terima, harus distance", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Pasangan cerita tentang mantan...",
    options: [
      { text: "Listen dengan santai, masa lalu", type: "A" },
      { text: "Okay sesekali tapi tidak terlalu detail", type: "B" },
      { text: "Uncomfortable dan compare diri", type: "C" },
      { text: "Marah dan tidak mau dengar", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Pasangan tidak angkat telepon saat malam...",
    options: [
      { text: "Mungkin sibuk, chat aja", type: "A" },
      { text: "Curious tapi akan tanya nanti", type: "B" },
      { text: "Langsung suspicious dan overthink", type: "C" },
      { text: "Curiga yang macam-macam", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Saat pasangan dipuji attractive oleh orang lain...",
    options: [
      { text: "Ikut bangga, memang attractive!", type: "A" },
      { text: "Smile tapi sedikit territorial", type: "B" },
      { text: "Tidak suka dan possessive", type: "C" },
      { text: "Marah ke pasangan atau yang memuji", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Pasangan harus kerja overtime dengan colleague...",
    options: [
      { text: "Okay, trust pekerjaan", type: "A" },
      { text: "Fine tapi want updates", type: "B" },
      { text: "Curiga terutama kalau colleague attractive", type: "C" },
      { text: "Tidak bisa tenang sampai pulang", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Melihat chat pasangan dengan teman lawan jenis...",
    options: [
      { text: "Tidak perlu, trust penuh", type: "A" },
      { text: "Sesekali curious tapi respect privacy", type: "B" },
      { text: "Ingin tahu dan kadang cek", type: "C" },
      { text: "Harus tau semua chat-nya", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Pasangan follow akun selebgram sexy...",
    options: [
      { text: "So what, just social media", type: "A" },
      { text: "Sedikit tidak suka tapi let it go", type: "B" },
      { text: "Minta unfollow atau kesal", type: "C" },
      { text: "Big issue, fight about it", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Saat kenalan baru yang flirty ke pasangan...",
    options: [
      { text: "Trust pasangan untuk handle", type: "A" },
      { text: "Keep an eye tapi tidak drama", type: "B" },
      { text: "Mark territory dan jealous vibes", type: "C" },
      { text: "Marah ke pasangan dan orang itu", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Pasangan masih simpan foto dengan mantan...",
    options: [
      { text: "Masa lalu, tidak masalah", type: "A" },
      { text: "Prefer dihapus tapi tidak push", type: "B" },
      { text: "Minta hapus atau kesal", type: "C" },
      { text: "Major issue, tidak bisa terima", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Pasangan pergi trip tanpa kamu dengan teman-teman...",
    options: [
      { text: "Have fun! Trust completely", type: "A" },
      { text: "Okay tapi want regular updates", type: "B" },
      { text: "Uncomfortable dan curiga", type: "C" },
      { text: "Tidak bisa, harus ikut atau tidak boleh pergi", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Secara keseluruhan tingkat cemburumu...",
    options: [
      { text: "Sangat rendah, trust tinggi", type: "A" },
      { text: "Normal, ada tapi terkontrol", type: "B" },
      { text: "Cukup tinggi, sering jealous", type: "C" },
      { text: "Sangat tinggi, possessive", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Tidak Cemburuan",
    emoji: "😌",
    description: "Kamu sangat tidak cemburuan! Trust level tinggi dan secure dalam hubungan. Tidak threatened by external factors. Healthy attachment style!",
    traits: ["Trusting", "Secure", "Confident", "Relaxed"],
    strengths: ["Healthy relationships", "Partner feels trusted", "Low drama"],
    weaknesses: ["Might miss actual red flags", "Could seem indifferent"],
    tips: ["Some vigilance is okay", "Don't be too naive"],
  },
  B: {
    type: "B",
    title: "Cemburu Sehat",
    emoji: "💚",
    description: "Kamu memiliki level cemburu yang sehat! Ada protective instinct tapi masih terkontrol. Shows you care tanpa being toxic.",
    traits: ["Balanced", "Caring", "Controlled", "Normal"],
    strengths: ["Shows investment", "Not overbearing", "Healthy balance"],
    weaknesses: ["Can tip over sometimes"],
    tips: ["Keep the control", "Trust is important"],
  },
  C: {
    type: "C",
    title: "Cukup Cemburuan",
    emoji: "😤",
    description: "Kamu cukup cemburuan dalam hubungan! Possessive tendencies dan sering suspicious. Ini bisa mengganggu hubungan dan perlu dikerjakan.",
    traits: ["Jealous", "Suspicious", "Possessive", "Insecure"],
    strengths: ["Attentive"],
    weaknesses: ["Can push partner away", "Exhausting", "Trust issues"],
    tips: ["Work on insecurity", "Jealousy often about self, not partner", "Trust until given reason not to"],
  },
  D: {
    type: "D",
    title: "Sangat Cemburuan",
    emoji: "🔥",
    description: "Kamu sangat cemburuan dan possessive! Ini masuk level tidak sehat dan bisa merusak hubungan serta mental health kedua pihak.",
    traits: ["Extremely jealous", "Possessive", "Controlling", "Insecure"],
    strengths: ["Very invested"],
    weaknesses: ["Toxic behavior", "Pushing partner away", "Potential for abuse"],
    tips: ["This needs attention", "Consider therapy", "Work on self-esteem", "Healthy love is not possession"],
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
