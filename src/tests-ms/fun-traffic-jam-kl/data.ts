// Gaya Handle Traffic Jam KL
// Fun test tentang personality bila stuck traffic jam

export const questions = [
  {
    id: 1,
    question: "Stuck traffic jam 1 jam. First reaction kau?",
    options: [
      { text: "Honk! Stress gila!", type: "A" },
      { text: "Pasang podcast, chill je", type: "B" },
      { text: "Call someone, sembang-sembang", type: "C" },
      { text: "Scroll TikTok sampai jam clear", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Waze tunjuk jalan shortcut through kampung. Apa kau buat?",
    options: [
      { text: "Ikut je! Waze knows best!", type: "A" },
      { text: "Skeptikal tapi try la", type: "B" },
      { text: "Stay main road, tak nak sesat", type: "C" },
      { text: "Check Google Maps sekali untuk confirm", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Kereta depan tak gerak padahal lampu dah hijau. Action?",
    options: [
      { text: "HONNNKKKK! Move la wei!", type: "A" },
      { text: "Tunggu 3 saat baru honk sopan", type: "B" },
      { text: "Flash light je, tak nak honk", type: "C" },
      { text: "Sabar je, mana tau ada sebab", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Ada motor lane split sebelah kau. Perasaan?",
    options: [
      { text: "Jealous gila! Patut naik motor!", type: "A" },
      { text: "Good for them la", type: "B" },
      { text: "Scary, harap tak accident", type: "C" },
      { text: "Tak perasan pun, focus depan", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Dah lambat kerja sebab jam. Macam mana inform boss?",
    options: [
      { text: "Call terus, explain situation", type: "A" },
      { text: "WhatsApp dengan gambar traffic", type: "B" },
      { text: "Tak inform, biasa la KL jam", type: "C" },
      { text: "Message panjang dengan alasan tambahan", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Radio DJ buat lawak bodoh masa kau stress jam. Response?",
    options: [
      { text: "Tukar channel terus!", type: "A" },
      { text: "Ketawa sikit walaupun bodoh", type: "B" },
      { text: "Mute, pasang Spotify sendiri", type: "C" },
      { text: "Layan je, better than silence", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Air cond kereta tak sejuk sangat masa jam. Survival mode?",
    options: [
      { text: "Bukak tingkap, pasrah dengan panas", type: "A" },
      { text: "On max AC, engine screaming", type: "B" },
      { text: "Spray air, improvise cooling", type: "C" },
      { text: "Ignore, focus on surviving jam", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Kawan ajak pergi Bangsar malam Jumaat. Kau respond?",
    options: [
      { text: "No way! Jam gila nanti!", type: "A" },
      { text: "Okay tapi lepas peak hours", type: "B" },
      { text: "Let's go! Jam pun redah!", type: "C" },
      { text: "Grab je la, tak sanggup drive", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Ada accident depan, semua slow down tengok. Feeling kau?",
    options: [
      { text: "Annoyed! Kenapa semua kaypoh?!", type: "A" },
      { text: "Slow sikit tengok jugak, curious", type: "B" },
      { text: "Focus jalan, bukan hal kau", type: "C" },
      { text: "Doa selamat untuk diorang", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Jam clear, highway kosong. Macam mana kau drive?",
    options: [
      { text: "ZOOM! Balas dendam semua jam tadi!", type: "A" },
      { text: "Maintain speed limit, trauma jam", type: "B" },
      { text: "Enjoy the freedom, steady cruise", type: "C" },
      { text: "Suspiciously slow, waiting for next jam", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Stressed Driver",
    emoji: "😤",
    description: "Traffic jam adalah musuh nombor satu kau! Honk adalah best friend, dan Waze adalah savior. KL traffic buat blood pressure naik, tapi you survive everyday!",
    traits: ["Impatient", "Reactive", "Vocal", "Action-oriented"],
    strengths: ["Never late silently", "Find shortcuts fast", "Alert driver"],
    weaknesses: ["High stress level", "Road rage potential", "Honk too much"],
    tips: ["Deep breaths help", "Podcast for calm", "Leave early sikit"],
  },
  B: {
    type: "B",
    title: "The Zen Commuter",
    emoji: "🧘",
    description: "Kau dah accept traffic jam sebagai part of KL life. Podcast, audiobook, atau music - kau buat jam jadi productive time. Stress? What stress?",
    traits: ["Calm", "Adaptive", "Practical", "Mindful"],
    strengths: ["Low stress commute", "Use time wisely", "Good mental health"],
    weaknesses: ["Maybe too passive", "Sometimes late without caring"],
    tips: ["Keep the zen", "Share tips with others"],
  },
  C: {
    type: "C",
    title: "The Cautious Navigator",
    emoji: "🗺️",
    description: "Kau prefer main road walaupun jam, sebab safety first! Tak suka take risks dengan shortcuts. Slow and steady, tapi always sampai!",
    traits: ["Careful", "Reliable", "Consistent", "Safety-conscious"],
    strengths: ["Never lost", "Predictable ETA", "Safe driver"],
    weaknesses: ["Sometimes too slow", "Miss better routes"],
    tips: ["Try shortcuts sometimes", "Trust the apps more"],
  },
  D: {
    type: "D",
    title: "The Distracted Survivor",
    emoji: "📱",
    description: "Jam adalah time untuk catch up on content! TikTok, Instagram, semua scroll. Time flies bila ada phone. Oops, dah sampai! Safe driving... sometimes la.",
    traits: ["Distracted", "Entertained", "Time-optimized", "Multitasker"],
    strengths: ["Never bored in jam", "Always updated", "Time feels shorter"],
    weaknesses: ["Safety concern!", "Miss traffic moving", "Phone addiction"],
    tips: ["Eyes on road please!", "Audio content safer", "Safety first tau!"],
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
