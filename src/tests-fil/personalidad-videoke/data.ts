// Personalidad sa Videoke
// Alamin kung anong klaseng videoke singer ka!

export const questions = [
  {
    id: 1,
    question: "Paano ka kumakanta sa videoke?",
    options: [
      { text: "All out! Para akong nasa concert!", type: "A" },
      { text: "Okay lang, enjoy ko lang", type: "B" },
      { text: "Mahiyain, kailangan ng konting tequila", type: "C" },
      { text: "Ayaw ko kumanta, manood na lang ako", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Anong songs ang kinakanta mo?",
    options: [
      { text: "Ballads at power songs!", type: "A" },
      { text: "OPM classics", type: "B" },
      { text: "Easy lang, basta alam ko lyrics", type: "C" },
      { text: "Wala, hindi ako umaawit", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Anong score ang acceptable sa iyo?",
    options: [
      { text: "90 pataas lang! Dapat mataas!", type: "A" },
      { text: "80+ okay na yun", type: "B" },
      { text: "Kahit ano, walang pakialam sa score", type: "C" },
      { text: "Hindi ko tinitingnan ang score", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Kapag may nag-duet sa iyo, ano ang reaction mo?",
    options: [
      { text: "Game! Let's make it epic!", type: "A" },
      { text: "Okay lang, mas masaya may kasama", type: "B" },
      { text: "Sana mag-isa na lang ako", type: "C" },
      { text: "Ayoko talaga kumanta", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Anong oras ka usually kumakanta?",
    options: [
      { text: "First few songs pa lang!", type: "A" },
      { text: "Kapag medyo warmed up na ang lahat", type: "B" },
      { text: "Late na, pag lasing na medyo", type: "C" },
      { text: "Never, tambay lang ako", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Paano mo hinahandle ang mic?",
    options: [
      { text: "Proper technique, parang professional!", type: "A" },
      { text: "Normal lang, comfortable hold", type: "B" },
      { text: "Kinakabahan, nanginginig kamay ko", type: "C" },
      { text: "Hindi ko hinahawakan ang mic", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Ano ang ginagawa mo habang iba ang kumakanta?",
    options: [
      { text: "Sumasabay at umaawit din!", type: "A" },
      { text: "Nakikinig at nag-aapplause", type: "B" },
      { text: "Nag-cecellphone o nag-iinuman", type: "C" },
      { text: "Tahimik lang, observe mode", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Kapag may kumanta ng off-key, ano ang reaction mo?",
    options: [
      { text: "Tuturuan ko ng tamang notes!", type: "A" },
      { text: "Okay lang, nag-eenjoy naman siya", type: "B" },
      { text: "Cringe pero di ko pinapakita", type: "C" },
      { text: "Wala akong pakialam", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Ilang beses ka kumakanta sa isang session?",
    options: [
      { text: "Maraming beses! Hanggang sa huling kanta!", type: "A" },
      { text: "3-5 songs, fair share", type: "B" },
      { text: "Once or twice lang", type: "C" },
      { text: "Zero, hindi talaga ako umaawit", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Ano ang opinion mo sa mga videoke remote hogger?",
    options: [
      { text: "Hindi fair! Dapat equal opportunity!", type: "A" },
      { text: "Medyo annoying pero dedma na lang", type: "B" },
      { text: "Okay lang, di naman ako gaano kumakanta", type: "C" },
      { text: "Wala akong opinion, watcher lang ako", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Paano ka nag-prepare bago kumanta?",
    options: [
      { text: "Vocal warm-up pa! Professional!", type: "A" },
      { text: "Quick check lang ng lyrics", type: "B" },
      { text: "Wala, diretso na", type: "C" },
      { text: "Hindi ako nag-peprepare kasi hindi ako umaawit", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Sa buhay, paano mo hinaharap ang challenges?",
    options: [
      { text: "Full force! Bibigyan ko ng best ko!", type: "A" },
      { text: "Steady pace, consistent effort", type: "B" },
      { text: "Takot pero sinusubukan ko pa rin", type: "C" },
      { text: "Umiiwas ako sa mahihirap na situations", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Videoke Superstar",
    emoji: "🎤",
    description: "Ikaw ang bida sa videoke! Confident ka at hindi ka nahihiya mag-perform. Natural entertainer ka at enjoy mo ang spotlight. Sa buhay, ganyan din ka - bold, expressive, at hindi takot na ipakita ang tunay mong self!",
    traits: ["Confident", "Expressive", "Entertaining", "Bold"],
    strengths: [
      "Natural performer",
      "Confident sa sarili",
      "Inspiring sa iba"
    ],
    weaknesses: [
      "Minsan too attention-seeking",
      "Baka nao-overwhelm ang iba"
    ],
    tips: [
      "Give others a chance to shine",
      "Balance confidence with humility"
    ],
  },
  B: {
    type: "B",
    title: "Casual Singer",
    emoji: "🎵",
    description: "Ikaw ay balanced videoke participant! Sumasali ka pero hindi ka nag-dominate. Respectful ka sa iba at fair sa sharing ng mic. Sa buhay, ganyan din ka - considerate, team player, at alam mo ang proper balance.",
    traits: ["Balanced", "Respectful", "Team-player", "Fair"],
    strengths: [
      "Good team dynamics",
      "Easy to be with",
      "Considerate sa others"
    ],
    weaknesses: [
      "Minsan hindi assertive enough",
      "Baka hindi ma-notice"
    ],
    tips: [
      "Assert yourself more",
      "Take more opportunities"
    ],
  },
  C: {
    type: "C",
    title: "Shy Singer",
    emoji: "🙈",
    description: "Ikaw ay mahiyain pero may hidden talent! Kailangan mo ng push at encouragement bago mag-perform. Sa buhay, ganyan din ka - cautious, thoughtful, pero may potential na lumalabas pag comfortable ka na.",
    traits: ["Shy", "Cautious", "Thoughtful", "Reserved"],
    strengths: [
      "Authentic when comfortable",
      "Good listener",
      "Humble"
    ],
    weaknesses: [
      "Kulang sa confidence",
      "Takot mag-take risks"
    ],
    tips: [
      "Build your confidence gradually",
      "Step out of comfort zone"
    ],
  },
  D: {
    type: "D",
    title: "Audience Member",
    emoji: "👀",
    description: "Ikaw ay pure observer! Hindi ka interested sa spotlight at okay lang sa iyo na manood lang. Sa buhay, prefer mo ang background role at low-key existence. Independent ka at comfortable sa sarili mong space.",
    traits: ["Observer", "Independent", "Low-key", "Introverted"],
    strengths: [
      "Good observer",
      "Self-sufficient",
      "No need for validation"
    ],
    weaknesses: [
      "Too withdrawn",
      "Missing out on experiences"
    ],
    tips: [
      "Try to participate minsan",
      "Don't be afraid to express yourself"
    ],
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
