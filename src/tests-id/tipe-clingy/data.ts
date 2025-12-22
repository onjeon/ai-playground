// Tes Seberapa Clingy Kamu?
// Temukan level attachment kamu dalam hubungan!

export const questions = [
  {
    id: 1,
    question: "Seberapa sering kamu mau komunikasi sama pasangan?",
    options: [
      { text: "Beberapa kali sehari cukup", type: "A" },
      { text: "Chat sepanjang hari, sesekali call", type: "B" },
      { text: "Selalu connected, 24/7 kalau bisa", type: "C" },
      { text: "Setiap saat, anxious kalau ga respon", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Pasangan sibuk dan tidak bisa hangout weekend ini...",
    options: [
      { text: "No problem, ada aktivitas sendiri", type: "A" },
      { text: "Kecewa tapi understand", type: "B" },
      { text: "Sedih dan berharap bisa reschedule", type: "C" },
      { text: "Feel rejected dan overthink", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Me time vs couple time...",
    options: [
      { text: "Balance, dua-duanya penting", type: "A" },
      { text: "Prefer couple time tapi respect me time", type: "B" },
      { text: "Mostly couple time, me time jarang", type: "C" },
      { text: "Why me time kalau bisa bareng terus?", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Hobi dan aktivitas kamu...",
    options: [
      { text: "Punya banyak hobi sendiri", type: "A" },
      { text: "Mix, beberapa bareng beberapa sendiri", type: "B" },
      { text: "Mostly sama pasangan atau tentang pasangan", type: "C" },
      { text: "Pasangan adalah hobi utama", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Pasangan online tapi tidak balas chat kamu...",
    options: [
      { text: "Mungkin lagi sibuk, no big deal", type: "A" },
      { text: "Notice tapi tidak terlalu mikirin", type: "B" },
      { text: "Sedikit curious kenapa", type: "C" },
      { text: "Anxious dan keep checking", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Kalau bisa, seberapa sering mau ketemu pasangan?",
    options: [
      { text: "2-3 kali seminggu cukup", type: "A" },
      { text: "Hampir setiap hari kalau bisa", type: "B" },
      { text: "Setiap hari, setiap waktu luang", type: "C" },
      { text: "Tinggal bareng adalah dream", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Pasangan pergi trip tanpa kamu...",
    options: [
      { text: "Have fun! Update sesekali aja", type: "A" },
      { text: "Okay, mau foto dan cerita aja", type: "B" },
      { text: "Miss dia banget, mau video call terus", type: "C" },
      { text: "Kenapa ga ajak? Feel left out", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Teman-teman pasangan menurutmu...",
    options: [
      { text: "Penting dia punya social life sendiri", type: "A" },
      { text: "Good, sesekali mau kenal juga", type: "B" },
      { text: "Prefer kalau aku diinclude semua event", type: "C" },
      { text: "Kadang jealous sama waktu yang dia habiskan sama mereka", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Notification dari pasangan...",
    options: [
      { text: "Check dan balas saat sempat", type: "A" },
      { text: "Balas relatively cepat", type: "B" },
      { text: "Drop everything untuk balas", type: "C" },
      { text: "Always on standby untuk dia", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Kalau lagi sendiri, kamu...",
    options: [
      { text: "Enjoy dan produktif", type: "A" },
      { text: "Fine, kadang miss pasangan", type: "B" },
      { text: "Bored dan mau bareng pasangan", type: "C" },
      { text: "Anxious dan merasa lonely", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Sebelum pacaran, kamu...",
    options: [
      { text: "Independent dan punya life sendiri", type: "A" },
      { text: "Active social life, normal", type: "B" },
      { text: "Always in relationship atau seeking one", type: "C" },
      { text: "Merasa incomplete tanpa pasangan", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Definisi clingy menurutmu...",
    options: [
      { text: "Butuh constant contact dan validation", type: "A" },
      { text: "Terlalu depend sama pasangan", type: "B" },
      { text: "Kadang clingy itu cute", type: "C" },
      { text: "That's just loving deeply", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Independent Partner",
    emoji: "🦋",
    description: "Kamu sangat independent dalam relationship! Punya life sendiri dan tidak depend on pasangan untuk happiness. Healthy attachment style yang balanced.",
    traits: ["Independent", "Secure", "Self-sufficient", "Balanced"],
    strengths: ["Healthy boundaries", "Own identity", "Not suffocating partner"],
    weaknesses: ["Kadang terkesan distant", "Partner mungkin mau lebih attention"],
    tips: ["Show affection lebih openly kadang", "Balance independence dengan intimacy"],
  },
  B: {
    type: "B",
    title: "Attached but Balanced",
    emoji: "💕",
    description: "Kamu attached tapi masih dalam batas sehat! Suka quality time bareng tapi juga respect personal space. Nice balance antara togetherness dan independence.",
    traits: ["Balanced", "Affectionate", "Respectful", "Loving"],
    strengths: ["Good attachment style", "Respects boundaries", "Present but not overwhelming"],
    weaknesses: ["Occasional anxiety", "Sometimes want more attention"],
    tips: ["Keep this balance", "Communicate needs openly"],
  },
  C: {
    type: "C",
    title: "Clingy Tendency",
    emoji: "🐨",
    description: "Kamu cukup clingy dan butuh banyak quality time! Merasa paling happy saat bareng pasangan dan kadang struggle saat jauh. Love language-mu jelas quality time!",
    traits: ["Clingy", "Affectionate", "Needs reassurance", "Quality time oriented"],
    strengths: ["Very loving", "Present for partner", "Expressive"],
    weaknesses: ["Can be overwhelming", "Dependent on partner"],
    tips: ["Develop independent hobbies", "Trust ketika tidak bareng"],
  },
  D: {
    type: "D",
    title: "Super Clingy",
    emoji: "🦥",
    description: "Level clingy kamu tinggi! Pasangan adalah center of universe dan kamu anxious saat tidak connected. Attachment ini bisa overwhelming untuk pasangan.",
    traits: ["Very clingy", "Anxious attachment", "Dependent", "Needs constant contact"],
    strengths: ["Deeply caring", "Very committed", "Always there"],
    weaknesses: ["Can suffocate partner", "Anxious when apart", "Identity tied to relationship"],
    tips: ["Work on attachment style", "Build life outside relationship", "Seek healthy self-worth"],
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
