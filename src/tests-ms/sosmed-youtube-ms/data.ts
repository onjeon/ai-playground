// Jenis Penonton YouTube Kau
// Test viral tentang YouTube watching habits

export const questions = [
  {
    id: 1,
    question: "Kau buka YouTube biasanya untuk apa?",
    options: [
      { text: "Tutorial dan belajar skill baru!", type: "A" },
      { text: "Entertainment - drama, gaming, comedy", type: "B" },
      { text: "Background noise while buat kerja", type: "C" },
      { text: "Scroll shorts je non-stop", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Subscribe berapa channel?",
    options: [
      { text: "100+ semua jenis content!", type: "A" },
      { text: "20-50, yang favourite je", type: "B" },
      { text: "10 ke bawah, selective gila", type: "C" },
      { text: "Tak subscribe, algorithm je decide", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Notification bell untuk channel favourite?",
    options: [
      { text: "All notifications ON!", type: "A" },
      { text: "Selected channels je", type: "B" },
      { text: "Off semua, I'll find content myself", type: "C" },
      { text: "On tapi ignore notifications", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Watch Later playlist kau macam mana?",
    options: [
      { text: "500+ videos tak pernah tengok", type: "A" },
      { text: "Curated, betul-betul akan tengok", type: "B" },
      { text: "Empty, tengok terus tak simpan", type: "C" },
      { text: "Ada, tapi lupa check", type: "D" },
    ],
  },
  {
    id: 5,
    question: "YouTube Premium kau ada tak?",
    options: [
      { text: "Ada! No ads, background play best!", type: "A" },
      { text: "Takde, uBlock origin cukup", type: "B" },
      { text: "Takde, ads aku skip je", type: "C" },
      { text: "Trial dah habis, malas renew", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Comment section, kau...",
    options: [
      { text: "Baca semua comments, the real content!", type: "A" },
      { text: "Skim through je top comments", type: "B" },
      { text: "Langsung tak baca", type: "C" },
      { text: "Comment sendiri kalau ada opinion", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Video length preference kau?",
    options: [
      { text: "Long form, 1 jam pun layan!", type: "A" },
      { text: "10-20 minit sweet spot", type: "B" },
      { text: "Under 10 minit je attention span", type: "C" },
      { text: "Shorts only, 1 minit max!", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Kau pernah fall into YouTube rabbit hole tak?",
    options: [
      { text: "Every night! Dari DIY sampai conspiracy theories!", type: "A" },
      { text: "Kadang-kadang, bila topic interesting", type: "B" },
      { text: "Jarang, discipline tengok", type: "C" },
      { text: "Selalu, Shorts rabbit hole paling bahaya!", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Speed playback kau biasa berapa?",
    options: [
      { text: "1x je, enjoy content slowly", type: "A" },
      { text: "1.5x efficient tengok", type: "B" },
      { text: "2x speedrun semua videos!", type: "C" },
      { text: "Depends on video type", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bila YouTuber favourite upload, kau...",
    options: [
      { text: "Drop everything, tengok immediately!", type: "A" },
      { text: "Save untuk tengok masa free", type: "B" },
      { text: "Tunggu sampai ada mood", type: "C" },
      { text: "Tak perasan pun dia upload", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "YouTube Addict",
    emoji: "📺",
    description: "YouTube adalah life kau! Tahu semua trending, semua drama YouTuber, semua algorithm tricks. Channel sendiri bila?",
    traits: ["Dedicated viewer", "Well-informed", "Entertainment focused", "Loyal subscriber"],
    strengths: ["Up to date with content", "Good recommendations", "Support creators"],
    weaknesses: ["Too much screen time", "Productivity affected", "Sleep schedule destroyed"],
    tips: ["Set time limits", "Touch grass kadang-kadang!"],
  },
  B: {
    type: "B",
    title: "Balanced Viewer",
    emoji: "⚖️",
    description: "Kau tengok YouTube dengan balance! Ada favourite channels, tahu apa nak tengok, tak biar algorithm control life. Healthy consumption!",
    traits: ["Selective", "Disciplined", "Purposeful", "Quality viewer"],
    strengths: ["Good boundaries", "Curated content", "Time management"],
    weaknesses: ["Sometimes miss viral stuff", "Too selective"],
    tips: ["Explore new content sometimes", "Algorithm boleh surprise you!"],
  },
  C: {
    type: "C",
    title: "Background Viewer",
    emoji: "🎵",
    description: "YouTube kau on 24/7 tapi sebagai background! Podcast, music, lo-fi beats - semua untuk accompany kerja. Multitasking champion!",
    traits: ["Multitasker", "Productive", "Ambient listener", "Efficient"],
    strengths: ["Productive use", "Not addicted visually", "Good focus"],
    weaknesses: ["Miss visual content", "Not fully engaged"],
    tips: ["Sometimes fully watch and enjoy", "Visual content best!"],
  },
  D: {
    type: "D",
    title: "Shorts Scroller",
    emoji: "📱",
    description: "Kau terperangkap dalam Shorts loop! Scroll non-stop, one more one more. Attention span dah adjusted ke 60 seconds max!",
    traits: ["Short attention span", "Trend follower", "Quick entertainment", "Mobile native"],
    strengths: ["Know all viral trends", "Quick content consumption", "Always entertained"],
    weaknesses: ["Can't focus on long content", "Addicted to scrolling", "Time flies"],
    tips: ["Try long form content", "Build back attention span!"],
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
