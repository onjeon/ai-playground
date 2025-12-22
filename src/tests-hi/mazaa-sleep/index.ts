// नींद स्टाइल टेस्ट - आप कैसे सोते हैं?
// Sleep Style Personality Test

export const questions = [
  {
    id: 1,
    question: "सोने का time?",
    options: [
      { text: "10 बजे fixed, early to bed", type: "A" },
      { text: "12 के आसपास, normal", type: "B" },
      { text: "2-3 बजे, night owl", type: "C" },
      { text: "जब नींद आए, unpredictable", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Alarm की जरूरत?",
    options: [
      { text: "No alarm, body clock perfect", type: "A" },
      { text: "एक alarm, उठ जाता हूं", type: "B" },
      { text: "10+ alarms, फिर भी struggle", type: "C" },
      { text: "Snooze champion", type: "D" },
    ],
  },
  {
    id: 3,
    question: "सोने से पहले ritual?",
    options: [
      { text: "Meditation या reading", type: "A" },
      { text: "Phone थोड़ा देखकर", type: "B" },
      { text: "Netflix binge", type: "C" },
      { text: "कोई fixed routine नहीं", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Sleeping position?",
    options: [
      { text: "सीधा, proper posture", type: "A" },
      { text: "Side में comfortable", type: "B" },
      { text: "पेट के बल, starfish", type: "C" },
      { text: "पूरे bed पर कहीं भी", type: "D" },
    ],
  },
  {
    id: 5,
    question: "सुबह उठने का mood?",
    options: [
      { text: "Fresh और energetic", type: "A" },
      { text: "Okay, manageable", type: "B" },
      { text: "Zombie mode, coffee चाहिए", type: "C" },
      { text: "Depends on कितनी नींद ली", type: "D" },
    ],
  },
  {
    id: 6,
    question: "दोपहर की नींद?",
    options: [
      { text: "Never, रात को proper सोता हूं", type: "A" },
      { text: "20 min power nap", type: "B" },
      { text: "2-3 घंटे की siesta", type: "C" },
      { text: "जब मौका मिले", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Pillow situation?",
    options: [
      { text: "Orthopedic, proper support", type: "A" },
      { text: "Regular comfortable pillow", type: "B" },
      { text: "Multiple pillows, fort बना लेता हूं", type: "C" },
      { text: "जो मिल जाए", type: "D" },
    ],
  },
  {
    id: 8,
    question: "AC/Fan temperature?",
    options: [
      { text: "Optimal 24 degree", type: "A" },
      { text: "Comfortable जो भी हो", type: "B" },
      { text: "Arctic level, blanket में", type: "C" },
      { text: "जैसा season, वैसा adjust", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Dream याद रहते हैं?",
    options: [
      { text: "हां, journal में लिखता हूं", type: "A" },
      { text: "Sometimes, interesting ones", type: "B" },
      { text: "Vivid dreams आते हैं", type: "C" },
      { text: "Rarely याद रहते हैं", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Insomnia?",
    options: [
      { text: "Never, instantly सो जाता हूं", type: "A" },
      { text: "Rare occasions पर", type: "B" },
      { text: "Regular struggle", type: "C" },
      { text: "Inconsistent pattern", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Weekend sleeping?",
    options: [
      { text: "Same routine, discipline", type: "A" },
      { text: "थोड़ा extra सो लेता हूं", type: "B" },
      { text: "Noon तक सोना mandatory", type: "C" },
      { text: "No plans, जैसा हो", type: "D" },
    ],
  },
  {
    id: 12,
    question: "नींद का मतलब?",
    options: [
      { text: "Health और productivity", type: "A" },
      { text: "Rest और recharge", type: "B" },
      { text: "Escape और dreams", type: "C" },
      { text: "जब body बोले तब", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Sleep Perfectionist",
    emoji: "😴",
    description: "आप Sleep Hygiene Champion हैं! Fixed time, proper routine, perfect rest। Body और mind दोनों खुश। Early bird who catches all worms!",
    traits: ["Disciplined", "Healthy", "Organized", "Early-riser"],
    strengths: ["Energy", "Health", "Productivity", "Discipline"],
    weaknesses: ["Too rigid", "FOMO possible"],
    tips: ["Flexibility भी ठीक है कभी-कभी", "Enjoy late nights occasionally"],
  },
  B: {
    type: "B",
    title: "Normal Sleeper",
    emoji: "🛏️",
    description: "आप Balanced Sleeper हैं! Healthy habits without obsession। Enough sleep mostly। Average and healthy approach!",
    traits: ["Balanced", "Normal", "Healthy", "Adaptable"],
    strengths: ["Balance", "Flexibility", "Adequate rest", "Normalcy"],
    weaknesses: ["Could optimize", "Room for improvement"],
    tips: ["Sleep quality improve करें", "Consistency बढ़ाएं"],
  },
  C: {
    type: "C",
    title: "Night Owl",
    emoji: "🦉",
    description: "आप Night Creature हैं! रात के राजा, सुबह के zombie। Best work 2 AM के बाद। Mornings are enemy!",
    traits: ["Night-owl", "Creative", "Late-sleeper", "Unconventional"],
    strengths: ["Night productivity", "Creativity", "Quiet hours utilization"],
    weaknesses: ["Morning struggle", "Health impact", "Social timing"],
    tips: ["Sleep schedule fix करें", "Morning routine try करें"],
  },
  D: {
    type: "D",
    title: "Random Sleeper",
    emoji: "🎲",
    description: "आप Unpredictable Sleeper हैं! No pattern, no routine। Body जब बोले तब। Living life on sleep's edge!",
    traits: ["Random", "Unpredictable", "Flexible", "Irregular"],
    strengths: ["Adaptability", "Flexibility", "Stress-free about timing"],
    weaknesses: ["Irregular", "Potential health issues", "Inconsistent energy"],
    tips: ["कुछ routine बनाएं", "Body को regular rest दें"],
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
