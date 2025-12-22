// Tes Gaya Minta Maaf ke Pasangan
// Bagaimana cara kamu meminta maaf dalam hubungan?

export const questions = [
  {
    id: 1,
    question: "Saat sadar kamu salah, kamu...",
    options: [
      { text: "Langsung minta maaf dengan tulus", type: "A" },
      { text: "Minta maaf tapi perlu waktu untuk calm down dulu", type: "B" },
      { text: "Susah mengakui salah, ego tinggi", type: "C" },
      { text: "Minta maaf tapi sambil explain/defense", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Cara minta maaf yang biasa kamu lakukan...",
    options: [
      { text: "Verbal langsung, tatap mata", type: "A" },
      { text: "Lewat chat atau text dulu", type: "B" },
      { text: "Actions speaks louder, tanpa kata-kata", type: "C" },
      { text: "Kasih gift atau treat sebagai peace offering", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Setelah bertengkar, kamu biasanya...",
    options: [
      { text: "Yang duluan approach untuk baikan", type: "A" },
      { text: "Tunggu situasi tenang baru bahas", type: "B" },
      { text: "Tunggu dia duluan, ego tinggi", type: "C" },
      { text: "Act normal seolah tidak terjadi apa-apa", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Kata 'maaf' menurutmu...",
    options: [
      { text: "Penting dan harus diucapkan dengan tulus", type: "A" },
      { text: "Penting tapi harus diikuti perubahan", type: "B" },
      { text: "Kadang susah diucapkan", type: "C" },
      { text: "Actions lebih penting dari kata maaf", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Kalau pasangan yang salah dan minta maaf...",
    options: [
      { text: "Langsung maafkan kalau tulus", type: "A" },
      { text: "Maafkan tapi butuh proses", type: "B" },
      { text: "Susah maafkan, perlu waktu lama", type: "C" },
      { text: "Maafkan tapi tidak lupa", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Apology language kamu...",
    options: [
      { text: "Expressing regret dengan kata-kata", type: "A" },
      { text: "Accepting responsibility", type: "B" },
      { text: "Making restitution (action/gift)", type: "C" },
      { text: "Requesting forgiveness", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Yang paling susah dari minta maaf...",
    options: [
      { text: "Tidak terlalu susah kalau emang salah", type: "A" },
      { text: "Mengakui kesalahan dengan specific", type: "B" },
      { text: "Menelan ego dan mengakui salah", type: "C" },
      { text: "Memastikan pasangan benar-benar maafkan", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Setelah minta maaf, kamu...",
    options: [
      { text: "Usaha untuk tidak ulangi kesalahan", type: "A" },
      { text: "Reflect dan improve diri", type: "B" },
      { text: "Move on, tidak dwell on it", type: "C" },
      { text: "Over-compensate supaya pasangan happy", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Kalau pasangan tidak langsung maafkan...",
    options: [
      { text: "Kasih waktu dan respect prosesnya", type: "A" },
      { text: "Coba lebih keras untuk buktikan penyesalan", type: "B" },
      { text: "Frustrated, sudah minta maaf kok", type: "C" },
      { text: "Anxious dan keep apologizing", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Untuk kesalahan kecil vs besar...",
    options: [
      { text: "Sama-sama perlu diakui dan minta maaf", type: "A" },
      { text: "Proportional, besar perlu effort lebih", type: "B" },
      { text: "Yang kecil tidak perlu terlalu drama", type: "C" },
      { text: "Tergantung seberapa upset pasangan", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Minta maaf duluan meski bukan sepenuhnya salah kamu...",
    options: [
      { text: "Bisa, untuk peace dan love", type: "A" },
      { text: "Acknowledge bagian yang memang salah", type: "B" },
      { text: "Tidak, itu unfair dan tidak jujur", type: "C" },
      { text: "Tergantung seberapa penting issue-nya", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Seberapa sering kamu minta maaf dalam relationship?",
    options: [
      { text: "Cukup sering, kalau memang salah", type: "A" },
      { text: "Normal, sesuai situasi", type: "B" },
      { text: "Jarang, karena jarang merasa salah", type: "C" },
      { text: "Terlalu sering mungkin, untuk avoid conflict", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Apologizer Tulus",
    emoji: "💝",
    description: "Kamu tidak punya masalah untuk minta maaf! Langsung approach dengan tulus saat sadar salah. Ego tidak menghalangi dan kamu prioritize hubungan di atas pride.",
    traits: ["Humble", "Direct", "Accountable", "Mature"],
    strengths: ["Quick resolution", "Sincere apologies", "Healthy communication"],
    weaknesses: ["Kadang over-apologize", "Might take blame too easily"],
    tips: ["Jangan apologize untuk hal yang bukan salahmu", "Balance antara humble dan self-respect"],
  },
  B: {
    type: "B",
    title: "Thoughtful Apologizer",
    emoji: "🤔",
    description: "Kamu minta maaf dengan thoughtful dan meaningful! Perlu waktu untuk process tapi ketika minta maaf, kamu specific dan genuine. Quality over speed.",
    traits: ["Thoughtful", "Reflective", "Genuine", "Process-oriented"],
    strengths: ["Meaningful apologies", "Self-aware", "Learns from mistakes"],
    weaknesses: ["Takes time to apologize", "Might seem slow to respond"],
    tips: ["Communicate bahwa kamu perlu waktu", "Quick acknowledgment helps"],
  },
  C: {
    type: "C",
    title: "Ego Apologizer",
    emoji: "😤",
    description: "Minta maaf itu susah banget buat kamu! Ego tinggi dan merasa jarang salah. Kalau minta maaf pun, sering dengan defensiveness atau justification.",
    traits: ["Proud", "Defensive", "Stubborn", "Ego-driven"],
    strengths: ["Strong sense of self", "Stands by decisions", "Not a pushover"],
    weaknesses: ["Hard to admit fault", "Prolongs conflicts", "Partner feels unheard"],
    tips: ["Apologizing bukan weakness", "Ego bisa damage relationship"],
  },
  D: {
    type: "D",
    title: "Compensating Apologizer",
    emoji: "🎁",
    description: "Kamu minta maaf lewat actions dan gestures! Lebih nyaman kasih gift atau do something daripada verbal apology. Atau sebaliknya, over-apologize untuk avoid conflict.",
    traits: ["Action-oriented", "Avoidant", "Peace-seeking", "Gesture-based"],
    strengths: ["Shows through actions", "Tries to make up", "Conflict avoidant"],
    weaknesses: ["Might seem insincere", "Avoids deeper issues", "Words matter too"],
    tips: ["Verbal acknowledgment juga penting", "Address root issues, bukan just surface"],
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
