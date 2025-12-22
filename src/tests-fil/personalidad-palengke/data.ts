// Personalidad sa Palengke
// Alamin kung anong klaseng mamimili ka sa palengke!

export const questions = [
  {
    id: 1,
    question: "Paano mo ginagawa ang pamimili sa palengke?",
    options: [
      { text: "May listahan ako at systematic", type: "A" },
      { text: "Tawaran expert, lumalakad habang namimili", type: "B" },
      { text: "Bili lang ng bili, impulse buyer", type: "C" },
      { text: "Quick shopping lang, in and out", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Ano ang approach mo sa pagtawad?",
    options: [
      { text: "Hindi ako tumataward, presyo ay presyo", type: "A" },
      { text: "Expert ako! Kalahati ng price ang hanap ko!", type: "B" },
      { text: "Konting tawad lang, hiya factor", type: "C" },
      { text: "Kahit ano presyo, bibilhin ko pa rin", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Anong oras ka usually pumupunta sa palengke?",
    options: [
      { text: "Madaling araw pa, para fresh ang goods!", type: "A" },
      { text: "Mid-morning, hindi gaano tao", type: "B" },
      { text: "Afternoon na, chill shopping", type: "C" },
      { text: "Anytime na may time ako", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Paano ka pumipili ng gulay at prutas?",
    options: [
      { text: "Masinsinan kong tini-check ang quality", type: "A" },
      { text: "May technique ako sa pagpili", type: "B" },
      { text: "Yung maganda tingnan", type: "C" },
      { text: "Kahit ano basta mukhang okay", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Ano ang relationship mo sa suki mong tindero?",
    options: [
      { text: "Professional lang, transactional", type: "A" },
      { text: "Close kami! Kumakamusta pa!", type: "B" },
      { text: "Kilala niya ako pero di kami close", type: "C" },
      { text: "Wala, nagpapalit-palit ako ng bilihan", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Paano mo dinadala ang pinamili mo?",
    options: [
      { text: "Organized sa eco bags, categorized pa", type: "A" },
      { text: "Traditional basket o bayong", type: "B" },
      { text: "Plastic bags, madaming dala", type: "C" },
      { text: "Konti lang binili, hawak-hawak lang", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Ano ang ginagawa mo habang naglalakad sa palengke?",
    options: [
      { text: "Focused sa mission, diretso sa bibilhin", type: "A" },
      { text: "Nag-compare ng presyo sa ibat ibang tindahan", type: "B" },
      { text: "Window shopping, tignan lahat", type: "C" },
      { text: "Mabilis lang, ayaw ko ng crowd", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Kapag may nakita kang bagong produkto, ano reaction mo?",
    options: [
      { text: "Tatanungin ko muna kung ano yan", type: "A" },
      { text: "Tatawaran ko agad kung magkano", type: "B" },
      { text: "Bibili ako para subukan!", type: "C" },
      { text: "Dedma lang, di ko bibilhin", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Ano ang opinion mo sa palengke vs supermarket?",
    options: [
      { text: "Supermarket, mas malinis at organized", type: "A" },
      { text: "Palengke! Mas fresh at mura!", type: "B" },
      { text: "Both okay, depende sa mood", type: "C" },
      { text: "Online shopping na lang", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Paano mo hinahandle ang basag o damaged na item?",
    options: [
      { text: "Irereport ko agad at papalitan", type: "A" },
      { text: "Negosasyon para sa discount", type: "B" },
      { text: "Bahala na, kunin ko pa rin", type: "C" },
      { text: "Hindi ko na kukunin, hanap iba", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Magkano usually ang gastos mo sa palengke?",
    options: [
      { text: "Fixed budget, hindi lumalampas", type: "A" },
      { text: "Flexible, pero may target amount", type: "B" },
      { text: "Malaki, marami akong binibili", type: "C" },
      { text: "Konti lang, essentials lang", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Sa buhay, paano ka gumagawa ng major decisions?",
    options: [
      { text: "Planned, researched, calculated", type: "A" },
      { text: "Strategic pero may room for negotiation", type: "B" },
      { text: "Based sa emotion at gut feel", type: "C" },
      { text: "Impulsive, bahala na mentality", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Organized Shopper",
    emoji: "📋",
    description: "Ikaw ay systematic at organized sa pamimili! May plan ka palagi at efficient ang approach mo. Sa buhay, structured ka rin at may clear goals. Disciplined ka at mahusay sa time management!",
    traits: ["Organized", "Efficient", "Disciplined", "Strategic"],
    strengths: [
      "Excellent planner",
      "Budget-conscious",
      "Time efficient"
    ],
    weaknesses: [
      "Minsan too rigid",
      "Di flexible sa changes"
    ],
    tips: [
      "Allow spontaneity minsan",
      "Enjoy the experience, not just the goal"
    ],
  },
  B: {
    type: "B",
    title: "Savvy Bargain Hunter",
    emoji: "💰",
    description: "Ikaw ay expert sa tawaran at strategic sa pamimili! People person ka at alam mo ang diskarte. Sa buhay, resourceful ka at mahusay makipag-negotiate. Practical ka at value-conscious!",
    traits: ["Savvy", "Resourceful", "Social", "Strategic"],
    strengths: [
      "Great negotiator",
      "Gets best deals",
      "Good people skills"
    ],
    weaknesses: [
      "Minsan too focused sa presyo",
      "Time-consuming ang approach"
    ],
    tips: [
      "Value time din, not just money",
      "Quality over price minsan"
    ],
  },
  C: {
    type: "C",
    title: "Impulsive Buyer",
    emoji: "🛍️",
    description: "Ikaw ay spontaneous at emotional buyer! Bumibili ka based sa gut feel at attraction sa produkto. Sa buhay, spontaneous ka rin at hindi overthinking. You live in the moment at enjoy mo ang shopping experience!",
    traits: ["Spontaneous", "Emotional", "Adventurous", "Present-focused"],
    strengths: [
      "Enjoys the moment",
      "Tries new things",
      "Stress-free shopping"
    ],
    weaknesses: [
      "Overspending tendency",
      "Impulse purchases"
    ],
    tips: [
      "Set a budget",
      "Think before buying"
    ],
  },
  D: {
    type: "D",
    title: "Minimalist Shopper",
    emoji: "⚡",
    description: "Ikaw ay quick at minimalist sa pamimili! Essentials lang at walang drama. Sa buhay, practical ka at hindi materialistic. Efficient ka at walang time for unnecessary things. Simple living advocate ka!",
    traits: ["Minimalist", "Practical", "Efficient", "No-nonsense"],
    strengths: [
      "Time efficient",
      "Budget friendly",
      "No clutter lifestyle"
    ],
    weaknesses: [
      "Minsan too minimal",
      "Di nag-eenjoy ng experience"
    ],
    tips: [
      "Enjoy the process minsan",
      "Treat yourself occasionally"
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
