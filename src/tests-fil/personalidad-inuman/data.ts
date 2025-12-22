// Personalidad sa Inuman
// Alamin kung anong klaseng kainuman ka!

export const questions = [
  {
    id: 1,
    question: "Anong inumin ang usual mo?",
    options: [
      { text: "Beer - Red Horse o San Mig", type: "A" },
      { text: "Alak - wine o cocktails", type: "B" },
      { text: "Light lang - Smirnoff Mule", type: "C" },
      { text: "Softdrinks lang, di ako umiinom", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Gaano kabilis kang malasing?",
    options: [
      { text: "Mataas tolerance ko, marami kayang inumin", type: "A" },
      { text: "Average, kaya ko pa mga 5-6 bottles", type: "B" },
      { text: "Mabilis, 2-3 bottles lasing na", type: "C" },
      { text: "Hindi ako umiinom ng alak", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Ano ang behavior mo kapag lasing?",
    options: [
      { text: "Mas maingay at mas outgoing", type: "A" },
      { text: "Emotional, nag-ddrama at umiiyak", type: "B" },
      { text: "Tahimik lang, medyo sleepy", type: "C" },
      { text: "Hindi ko alam, di ako nalalasingan", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Ano ang favorite mong pulutan?",
    options: [
      { text: "Sisig, crispy pata, mga mabibigat!", type: "A" },
      { text: "Chicharon, peanuts, cheese sticks", type: "B" },
      { text: "Light lang - lumpia, fries", type: "C" },
      { text: "Kumakain lang ako ng normal food", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Saan ka usually umiinom?",
    options: [
      { text: "Anywhere! Tabi ng kalsada, okay na!", type: "A" },
      { text: "Sa bahay o bahay ng kaibigan", type: "B" },
      { text: "Sa bars o restaurants lang", type: "C" },
      { text: "Hindi ako umiinom", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Ano ang role mo sa inuman?",
    options: [
      { text: "Ang nag-oorganisa at nag-aaya", type: "A" },
      { text: "Ang sumasama lang pag inaya", type: "B" },
      { text: "Ang nag-aalaga sa mga lasing", type: "C" },
      { text: "Wala, hindi ako umiinom", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Anong topic ng usapan mo pag umiinom?",
    options: [
      { text: "Lahat! Politics, sports, kahit ano!", type: "A" },
      { text: "Love life at personal problems", type: "B" },
      { text: "Light topics lang, walang heavy", type: "C" },
      { text: "Hindi ako umiinom", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Paano ka uminom?",
    options: [
      { text: "Shots! Walang tagayan!", type: "A" },
      { text: "Tagayan style, paikot-ikot", type: "B" },
      { text: "Sipping slowly, chill lang", type: "C" },
      { text: "Hindi ako umiinom", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Anong oras usually nagtatapos ang inuman mo?",
    options: [
      { text: "Madaling araw! Hanggang wala nang alak!", type: "A" },
      { text: "Around midnight, reasonable time", type: "B" },
      { text: "Early pa, mga 10pm", type: "C" },
      { text: "Hindi ako umiinom", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Ano ang ginagawa mo kinabukasan after inuman?",
    options: [
      { text: "Bangon agad, kaya ko pa!", type: "A" },
      { text: "Hangover pero nag-ttrabaho pa rin", type: "B" },
      { text: "Pahinga mode, tamang recover", type: "C" },
      { text: "Normal day, wala naman akong iniinom", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Anong rason mo para uminom?",
    options: [
      { text: "Para sa bonding at good times!", type: "A" },
      { text: "Para makalimutan ang problema", type: "B" },
      { text: "Social occasions lang", type: "C" },
      { text: "Wala, di ako umiinom", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Sa buhay, paano ka nakikitungo sa stress?",
    options: [
      { text: "Face it head on! Aggressive approach!", type: "A" },
      { text: "Emotional processing, need ko mag-vent", type: "B" },
      { text: "Tahimik na pag-iisip at reflection", type: "C" },
      { text: "Practical solutions, walang drama", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Barkada Drinker",
    emoji: "🍺",
    description: "Ikaw ang life of the party! Social drinker ka at enjoy mo ang bonding with friends. High tolerance mo at kaya mong mag-enjoy nang matagal. Sa buhay, extroverted ka at masayahin. You value friendships and good times!",
    traits: ["Social", "Outgoing", "Fun-loving", "Loyal"],
    strengths: [
      "Great at building relationships",
      "Creates fun memories",
      "Good friend"
    ],
    weaknesses: [
      "Minsan too excessive",
      "Baka neglect health"
    ],
    tips: [
      "Know your limits",
      "Balance social life with responsibilities"
    ],
  },
  B: {
    type: "B",
    title: "Emotional Drinker",
    emoji: "😢",
    description: "Ikaw ay nag-iinom para mag-express ng emotions. Dito mo nailalabas ang tunay mong nararamdaman. Sa buhay, deep ka mag-isip at may tendency mag-overthink. You're sensitive and value meaningful connections.",
    traits: ["Emotional", "Deep", "Sensitive", "Introspective"],
    strengths: [
      "Deep emotional intelligence",
      "Authentic connections",
      "Good listener"
    ],
    weaknesses: [
      "Tendency to overthink",
      "May dependency on alcohol for emotions"
    ],
    tips: [
      "Find healthier outlets for emotions",
      "Talk to someone when troubled"
    ],
  },
  C: {
    type: "C",
    title: "Occasional Drinker",
    emoji: "🥂",
    description: "Ikaw ay moderate at controlled sa pag-inom. Hindi ka nag-ooverdo at alam mo ang limits mo. Sa buhay, balanced ka at responsible. You enjoy social occasions pero alam mo kung kailan dapat tumigil.",
    traits: ["Moderate", "Controlled", "Balanced", "Responsible"],
    strengths: [
      "Self-control",
      "Balanced lifestyle",
      "Responsible decisions"
    ],
    weaknesses: [
      "Minsan too cautious",
      "Baka miss out sa fun"
    ],
    tips: [
      "Loosen up minsan",
      "Enjoy the moment more"
    ],
  },
  D: {
    type: "D",
    title: "Non-Drinker",
    emoji: "🚫",
    description: "Ikaw ay hindi umiinom at okay lang sa iyo yun! May strong conviction ka at hindi ka nagpapadala sa peer pressure. Sa buhay, independent ka at alam mo ang gusto mo. You don't need alcohol to have fun!",
    traits: ["Independent", "Health-conscious", "Strong-willed", "Clear-minded"],
    strengths: [
      "Strong personal values",
      "Healthy lifestyle",
      "Clear decision-making"
    ],
    weaknesses: [
      "Minsan may disconnect sa drinking culture",
      "Baka judgmental sa umiinom"
    ],
    tips: [
      "Respect others' choices din",
      "Find your own way to socialize"
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
