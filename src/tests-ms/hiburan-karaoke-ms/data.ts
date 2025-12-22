// Gaya Karaoke Kau
// Test viral tentang karaoke personality

export const questions = [
  {
    id: 1,
    question: "Bila kawan ajak karaoke, reaction?",
    options: [
      { text: "YES! Bila?! I'm ready!", type: "A" },
      { text: "Okay, sounds fun!", type: "B" },
      { text: "Maybe, depends on mood", type: "C" },
      { text: "Find excuse to skip", type: "D" },
    ],
  },
  {
    id: 2,
    question: "First song kau nyanyi biasanya?",
    options: [
      { text: "Power ballad to warm up!", type: "A" },
      { text: "Crowd favorite yang semua tahu", type: "B" },
      { text: "Something chill and easy", type: "C" },
      { text: "Wait orang lain dulu", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Singing confidence level?",
    options: [
      { text: "Main character energy! Belting away!", type: "A" },
      { text: "Decent, can hold a tune", type: "B" },
      { text: "Sumbang tapi semangat!", type: "C" },
      { text: "Malu, prefer backup singer", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Song choice kau usually...",
    options: [
      { text: "Challenging songs! Show off!", type: "A" },
      { text: "Singable hits everyone knows", type: "B" },
      { text: "Oldies and classics", type: "C" },
      { text: "Anything dengan lirik on screen", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Mic hogging tendency?",
    options: [
      { text: "Mic is mine! My turn always!", type: "A" },
      { text: "Fair share, pass around", type: "B" },
      { text: "Pass to others, shy la", type: "C" },
      { text: "Avoid mic completely", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Duet dengan siapa?",
    options: [
      { text: "Anyone! Chemistry will happen!", type: "A" },
      { text: "Best friend, comfort zone", type: "B" },
      { text: "Group song je safer", type: "C" },
      { text: "Solo or nothing", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Performance style kau?",
    options: [
      { text: "Full drama! Moves, expressions!", type: "A" },
      { text: "Stand and deliver, focused", type: "B" },
      { text: "Casual, sitting down nyanyi", type: "C" },
      { text: "Read lyrics, minimal performance", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Karaoke score penting tak?",
    options: [
      { text: "YES! Nak 100!", type: "A" },
      { text: "Nice to have high score", type: "B" },
      { text: "Don't care, having fun", type: "C" },
      { text: "What score?", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Request lagu orang tak kenal?",
    options: [
      { text: "Still nyanyi! Any song I can try!", type: "A" },
      { text: "Listen and enjoy", type: "B" },
      { text: "Skip, next song please", type: "C" },
      { text: "Toilet break time", type: "D" },
    ],
  },
  {
    id: 10,
    question: "End of karaoke session, voice kau?",
    options: [
      { text: "Serak but worth it! Again soon!", type: "A" },
      { text: "Sikit tired, good session", type: "B" },
      { text: "Fine, didn't sing much", type: "C" },
      { text: "Same as before, spectator mode", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Karaoke King/Queen",
    emoji: "👑",
    description: "Born untuk karaoke! Mic is your weapon, stage is your kingdom. Every session is YOUR concert!",
    traits: ["Confident", "Performer", "Enthusiastic", "Star quality"],
    strengths: ["Life of the party", "Great entertainer", "Bring energy"],
    weaknesses: ["Might hog the mic", "Others can't sing"],
    tips: ["Share the spotlight", "Let others shine too!"],
  },
  B: {
    type: "B",
    title: "Fun Participant",
    emoji: "🎶",
    description: "Kau enjoy karaoke dengan fun! Sing, enjoy, share mic fairly. The balanced karaoke buddy everyone needs!",
    traits: ["Fun", "Balanced", "Social", "Enjoyable"],
    strengths: ["Good company", "Fair player", "Enjoy the moment"],
    weaknesses: ["Could let loose more", "Playing safe"],
    tips: ["Sometimes go all out", "Unleash inner diva!"],
  },
  C: {
    type: "C",
    title: "Vibe Enjoyer",
    emoji: "😊",
    description: "Karaoke for kau is about the atmosphere! Enjoy food, friends, occasional singing. No pressure to perform!",
    traits: ["Relaxed", "Social", "Low-key", "Comfortable"],
    strengths: ["No performance anxiety", "Enjoy company", "Good audience"],
    weaknesses: ["Miss singing fun", "Too reserved"],
    tips: ["Try singing more", "Everyone sounds good at karaoke!"],
  },
  D: {
    type: "D",
    title: "Reluctant Guest",
    emoji: "😅",
    description: "Karaoke not your scene! Go sebab friends ajak, survive the session. Would rather be elsewhere!",
    traits: ["Reserved", "Shy", "Non-performer", "Audience"],
    strengths: ["Good listener", "Supportive friend", "Low maintenance"],
    weaknesses: ["Missing out on fun", "Social pressure"],
    tips: ["Find your comfort song", "Karaoke is judgement-free zone!"],
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
