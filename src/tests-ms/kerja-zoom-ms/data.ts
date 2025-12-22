// Gaya Zoom Call Kau
// What's your virtual meeting personality?

export const questions = [
  {
    id: 1,
    question: "Zoom call start dalam 5 minit. Kau...",
    options: [
      { text: "Dah ready! Ring light on, background blur!", type: "A" },
      { text: "Quick check rambut, join on time", type: "B" },
      { text: "Join je, camera off anyway", type: "C" },
      { text: "Masuk 5 minit late, 'sorry ada issue'", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Camera setting kau dalam virtual meeting...",
    options: [
      { text: "Always on dengan professional setup!", type: "A" },
      { text: "On bila perlu, off bila boleh", type: "B" },
      { text: "Off by default, buka bila kena", type: "C" },
      { text: "Camera rosak (permanently)", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Virtual background kau...",
    options: [
      { text: "Professional office atau branded background", type: "A" },
      { text: "Simple blur effect", type: "B" },
      { text: "Real background, apa ada lah", type: "C" },
      { text: "Beach/funny meme background for fun", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bila host tanya 'Can everyone hear me?'...",
    options: [
      { text: "Yes! *unmute* Clear and loud!", type: "A" },
      { text: "Thumbs up reaction", type: "B" },
      { text: "Type 'yes' dalam chat", type: "C" },
      { text: "Assume orang lain akan respond", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Attire kau untuk video call...",
    options: [
      { text: "Full professional! Office wear!", type: "A" },
      { text: "Professional top, casual bottom", type: "B" },
      { text: "T-shirt yang presentable", type: "C" },
      { text: "Whatever aku pakai bila bangun tidur", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Screen share moment, desktop kau...",
    options: [
      { text: "Clean! Prepared presentation only!", type: "A" },
      { text: "Quick close tabs, then share", type: "B" },
      { text: "Hope takde notification pop up", type: "C" },
      { text: "Living dangerously, share terus", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Long video call, kau biasanya...",
    options: [
      { text: "Engaged throughout! Nod, react!", type: "A" },
      { text: "Attentive first hour, then drift", type: "B" },
      { text: "Multitask, reply emails sambil listen", type: "C" },
      { text: "Mute dan scroll phone most of time", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bila connection issue during important call...",
    options: [
      { text: "Quick troubleshoot, rejoin ASAP!", type: "A" },
      { text: "Rejoin, apologize, continue", type: "B" },
      { text: "Blame internet, follow up via email", type: "C" },
      { text: "Perfect excuse untuk escape meeting", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Chat function dalam meeting, kau...",
    options: [
      { text: "Active! Comment, react, engage!", type: "A" },
      { text: "Use bila perlu untuk questions", type: "B" },
      { text: "Read je, jarang type", type: "C" },
      { text: "Baru perasan ada chat after meeting", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Meeting habis, kau...",
    options: [
      { text: "Bye everyone! Great meeting! *wave*", type: "A" },
      { text: "Thanks, bye, leave", type: "B" },
      { text: "Click leave immediately", type: "C" },
      { text: "Already left before host says bye", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Zoom Professional",
    emoji: "📹",
    description: "Virtual meeting game kau on point! Ring light, professional background, always camera ready. Kau boleh be influencer kalau nak dengan setup macam tu!",
    traits: ["Tech-savvy presenter", "Professional presence", "Engagement expert", "Meeting MVP"],
    strengths: ["Great virtual impression", "Boss notices you", "Sets good example"],
    weaknesses: ["May seem try-hard", "Pressure to maintain standards"],
    tips: ["Your effort is appreciated!", "Share tips dengan colleagues"],
  },
  B: {
    type: "B",
    title: "Balanced Virtual Worker",
    emoji: "💼",
    description: "Professional bila perlu, practical bila boleh. Kau adapt virtual meeting style ikut situation. Smart approach!",
    traits: ["Adaptable", "Efficient", "Professional enough", "Practical minded"],
    strengths: ["Good impression without extra effort", "Sustainable approach", "Flexible"],
    weaknesses: ["May not stand out", "Sometimes camera-shy"],
    tips: ["Turn camera on more often", "Little effort goes long way"],
  },
  C: {
    type: "C",
    title: "Minimal Virtual Presence",
    emoji: "🙈",
    description: "Camera off, mic mute - default setting. Kau ada dalam meeting, tapi barely. Ghost participant yang legendary!",
    traits: ["Camera-shy", "Minimal effort", "Background presence", "Multitasker"],
    strengths: ["Can multitask during calls", "Low maintenance", "Privacy maintained"],
    weaknesses: ["Low visibility", "May seem disengaged", "Miss networking"],
    tips: ["Camera on sometimes helps career", "Engagement = visibility"],
  },
  D: {
    type: "D",
    title: "Virtual Meeting Rebel",
    emoji: "😴",
    description: "Zoom meetings adalah necessary evil! Late join, camera permanently off, leave earliest. Your bed is your office chair!",
    traits: ["Meeting minimalist", "Chronic late joiner", "Technical difficulties specialist", "Escape artist"],
    strengths: ["Efficient time user (arguably)", "Not caught in meeting trap", "Living authentically"],
    weaknesses: ["Reputation as disengaged", "Miss important info", "Career impact"],
    tips: ["Some effort needed for professional image", "Virtual presence still matters!"],
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
