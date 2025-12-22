// आईपीएल टीम टेस्ट - आप कौन सी IPL टीम हैं?
// IPL Team Personality Test

export const questions = [
  {
    id: 1,
    question: "Team में आपका role?",
    options: [
      { text: "हमेशा जीतने वाला leader", type: "A" },
      { text: "Passionate supporter", type: "B" },
      { text: "New और exciting", type: "C" },
      { text: "Underdog fighter", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Success का definition?",
    options: [
      { text: "Trophies और records", type: "A" },
      { text: "Fan love और loyalty", type: "B" },
      { text: "Potential और growth", type: "C" },
      { text: "Hard work और dedication", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Leadership style?",
    options: [
      { text: "Calm और calculated", type: "A" },
      { text: "Passionate और emotional", type: "B" },
      { text: "Fresh और innovative", type: "C" },
      { text: "Gritty और determined", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Fan base कैसी चाहिए?",
    options: [
      { text: "Global और massive", type: "A" },
      { text: "Loyal और crazy", type: "B" },
      { text: "Growing और enthusiastic", type: "C" },
      { text: "Local और dedicated", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Pressure में?",
    options: [
      { text: "Cool और composed", type: "A" },
      { text: "Fired up और aggressive", type: "B" },
      { text: "Experimenting और learning", type: "C" },
      { text: "Fight back करते हुए", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Team anthem?",
    options: [
      { text: "Iconic और legendary", type: "A" },
      { text: "Catchy और popular", type: "B" },
      { text: "Fresh और modern", type: "C" },
      { text: "Motivational और inspiring", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Jersey color preference?",
    options: [
      { text: "Classic और iconic", type: "A" },
      { text: "Bold और bright", type: "B" },
      { text: "Trendy और new", type: "C" },
      { text: "Unique और different", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Match day vibe?",
    options: [
      { text: "Confident और expected to win", type: "A" },
      { text: "Electric और passionate", type: "B" },
      { text: "Excited और hopeful", type: "C" },
      { text: "Determined और focused", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Losing के बाद?",
    options: [
      { text: "Analyze और come back stronger", type: "A" },
      { text: "Emotional पर loyal", type: "B" },
      { text: "Learn और improve", type: "C" },
      { text: "Never give up attitude", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Star player preference?",
    options: [
      { text: "Legends और icons", type: "A" },
      { text: "Fan favorites और entertainers", type: "B" },
      { text: "Young talents और future stars", type: "C" },
      { text: "Hard workers और fighters", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Stadium atmosphere?",
    options: [
      { text: "Fortress, hard to beat", type: "A" },
      { text: "Sea of fans, incredible noise", type: "B" },
      { text: "New और building", type: "C" },
      { text: "Intimate और supportive", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Team motto?",
    options: [
      { text: "Excellence और winning", type: "A" },
      { text: "Passion और entertainment", type: "B" },
      { text: "Innovation और growth", type: "C" },
      { text: "Heart और determination", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "चेन्नई सुपर किंग्स",
    emoji: "🦁",
    description: "आप CSK हैं - The Super Kings! Most successful, calm under pressure, Thala की तरह leadership। Yellow army का part, winning habit। Whistle Podu! 💛",
    traits: ["Successful", "Calm", "Experienced", "Winning mentality"],
    strengths: ["Experience", "Leadership", "Pressure handling", "Legacy"],
    weaknesses: ["Aging squad कभी-कभी", "Over-reliance on stars"],
    tips: ["Fresh talent भी embrace करें", "Evolve करते रहें"],
  },
  B: {
    type: "B",
    title: "रॉयल चैलेंजर्स बेंगलुरु",
    emoji: "❤️",
    description: "आप RCB हैं - Ee Sala Cup Namde! Passionate fans, entertainment guaranteed। Trophy ना हो पर love है। Virat energy, never-ending hope। Play Bold! 🔴",
    traits: ["Passionate", "Entertaining", "Loyal", "Hopeful"],
    strengths: ["Fan loyalty", "Entertainment", "Star power", "Passion"],
    weaknesses: ["Trophy drought", "Inconsistency"],
    tips: ["Balance बनाएं passion और strategy में", "Consistency लाएं"],
  },
  C: {
    type: "C",
    title: "गुजरात टाइटन्स",
    emoji: "🏆",
    description: "आप GT हैं - New but already champions! Fresh approach, young energy, instant success। Ek Saath, Ek Shakti! 🔵 Newcomer जो सबको surprise करे!",
    traits: ["Fresh", "Successful", "Innovative", "Surprising"],
    strengths: ["Fresh perspective", "Quick success", "Innovation", "Team spirit"],
    weaknesses: ["New, proving stage", "Less legacy"],
    tips: ["Legacy build करें", "Consistency maintain करें"],
  },
  D: {
    type: "D",
    title: "कोलकाता नाइट राइडर्स",
    emoji: "💜",
    description: "आप KKR हैं - Korbo Lorbo Jeetbo! Fighter spirit, underdog to champion story। Iconic Shah Rukh connection, passionate purple army। Eden Gardens का जादू! 💜",
    traits: ["Fighter", "Passionate", "Underdog", "Iconic"],
    strengths: ["Fighting spirit", "Iconic identity", "Passion", "Resilience"],
    weaknesses: ["Inconsistent", "Rebuilding phases"],
    tips: ["Consistency build करें", "Core team बनाए रखें"],
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
