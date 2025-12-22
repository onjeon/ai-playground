// Personalidad sa Jeepney
// Alamin kung anong uri ng jeepney passenger ka!

export const questions = [
  {
    id: 1,
    question: "Saan ka usually nauupo sa jeep?",
    options: [
      { text: "Sa unahan, malapit sa driver", type: "A" },
      { text: "Sa gitna, balanced position", type: "B" },
      { text: "Sa dulo, peaceful spot", type: "C" },
      { text: "Kahit saan may space", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Paano mo binabayaran ang pamasahe?",
    options: [
      { text: "Agad kong binibigay, exact amount pa", type: "A" },
      { text: "Naghihintay ako ng tamang timing", type: "B" },
      { text: "Last minute, pagbaba ko na", type: "C" },
      { text: "Pasakay pa lang, bayad agad", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Kapag kailangan mong magpaabot ng bayad, ano ang ginagawa mo?",
    options: [
      { text: "Malakas ang boses ko, 'Bayad po!'", type: "A" },
      { text: "Mahinahon kong sinasabi at nag-thank you", type: "B" },
      { text: "Mahina lang, sana marinig", type: "C" },
      { text: "Hinihintay ko may mag-volunteer mag-abot", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Ano ang ginagawa mo habang nasa jeep?",
    options: [
      { text: "Naka-tingin sa labas, observing", type: "A" },
      { text: "Nag-ce-cellphone", type: "B" },
      { text: "Naka-earphones, listening to music", type: "C" },
      { text: "Nakatulog o nag-iisip lang", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Kapag punuan na ang jeep, ano ang reaction mo?",
    options: [
      { text: "Kakabahan pero sasakay pa rin", type: "A" },
      { text: "Titiisin ko, bahala na", type: "B" },
      { text: "Hihintay ako ng next jeep", type: "C" },
      { text: "Magha-hanap ng ibang alternative", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Paano ka bumababa ng jeep?",
    options: [
      { text: "Malakas ang 'Para po!' maaga pa", type: "A" },
      { text: "Sabihan ko yung tabi ko para lang", type: "B" },
      { text: "Late ko sinasabi, minsan lampas pa", type: "C" },
      { text: "Sumisigaw ng 'Para!' pag malapit na", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Ano ang feeling mo tungkol sa mga jeepney decorations?",
    options: [
      { text: "Love it! Ang colorful at unique!", type: "A" },
      { text: "Okay lang, part ng culture", type: "B" },
      { text: "Medyo distracting pero cute", type: "C" },
      { text: "Wala akong pakialam dun", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Kapag may katabi kang mabaho o maingay, ano ang gagawin mo?",
    options: [
      { text: "Magpaparinig o lilipat ako", type: "A" },
      { text: "Tiisin ko pero may pa-subtle hint", type: "B" },
      { text: "Mag-eearphones ako, ignore mode", type: "C" },
      { text: "Wala akong magagawa, tiisin na lang", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Ano ang pinaka-kinaiinisan mo sa jeep?",
    options: [
      { text: "Yung walang sukli si manong", type: "A" },
      { text: "Yung traffic at matagal biyahe", type: "B" },
      { text: "Yung ang sikip at mainit", type: "C" },
      { text: "Wala naman, tanggap ko na lahat", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Kapag mali yung ruta ng jeep, ano ang gagawin mo?",
    options: [
      { text: "Agad kong sasabihin sa driver", type: "A" },
      { text: "Tatanungin ko muna bago sumakay", type: "B" },
      { text: "Bababa na lang ako at humanap ng tama", type: "C" },
      { text: "Mag-aassume na tama, bahala na", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Ano ang opinion mo sa jeepney music/radio?",
    options: [
      { text: "Masaya! Nakaka-good vibes!", type: "A" },
      { text: "Okay lang kung hindi sobrang lakas", type: "B" },
      { text: "Prefer ko walang tugtog", type: "C" },
      { text: "Wala akong opinion dun", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Sa trabaho o school, paano ka nakikitungo sa deadlines?",
    options: [
      { text: "Proactive, maaga kong tinatapusin", type: "A" },
      { text: "Planned approach, step by step", type: "B" },
      { text: "Last minute rush, pero tapos pa rin", type: "C" },
      { text: "Bahala na, gagawin ko pag ready na", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Assertive Passenger",
    emoji: "🎯",
    description: "Ikaw ay proactive at assertive! Hindi ka nahihiyang magsalita at alam mo kung ano ang gusto mo. Leader type ka at marunong mag-take charge ng situation. Organized ka at preferred mo na maayos lahat.",
    traits: ["Assertive", "Proactive", "Organized", "Confident"],
    strengths: [
      "Clear communication",
      "Good leadership",
      "Efficient sa lahat"
    ],
    weaknesses: [
      "Minsan too controlling",
      "Baka ma-intimidate ang iba"
    ],
    tips: [
      "Be more patient with others",
      "Allow flexibility minsan"
    ],
  },
  B: {
    type: "B",
    title: "Considerate Passenger",
    emoji: "😊",
    description: "Ikaw ay thoughtful at considerate! Iniisip mo ang others at maayos ang approach mo sa lahat. Balanced ka at diplomatic. People person ka at mahusay sa pakikitungo sa iba.",
    traits: ["Considerate", "Balanced", "Diplomatic", "Friendly"],
    strengths: [
      "Good interpersonal skills",
      "Peaceful approach",
      "Easy to get along with"
    ],
    weaknesses: [
      "Minsan too accommodating",
      "Nahihirapan mag-prioritize sarili"
    ],
    tips: [
      "Put yourself first minsan",
      "Okay lang to say no"
    ],
  },
  C: {
    type: "C",
    title: "Observer Passenger",
    emoji: "🤔",
    description: "Ikaw ay quiet observer at introspective! Prefer mo ang peaceful existence at ayaw mo ng attention. Deep thinker ka at may sariling world. Independent ka at comfortable ka mag-isa.",
    traits: ["Quiet", "Observant", "Independent", "Introspective"],
    strengths: [
      "Good listener",
      "Deep insights",
      "Self-sufficient"
    ],
    weaknesses: [
      "Minsan too withdrawn",
      "Nahihirapan mag-express"
    ],
    tips: [
      "Open up more to people",
      "Don't be afraid to speak up"
    ],
  },
  D: {
    type: "D",
    title: "Go-with-the-Flow Passenger",
    emoji: "🌊",
    description: "Ikaw ay super chill at flexible! Walang stress sa buhay at tanggap mo na lang lahat. Easy-going ka at hindi ka demanding. Adaptable ka sa any situation at walang complaints.",
    traits: ["Chill", "Flexible", "Easy-going", "Adaptable"],
    strengths: [
      "No drama living",
      "Stress-free attitude",
      "Easily adapts to changes"
    ],
    weaknesses: [
      "Minsan too passive",
      "Walang direction or goals"
    ],
    tips: [
      "Set some goals for yourself",
      "Be more intentional sa actions"
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
