// Personalidad sa Adobo
// Alamin kung anong uri ng adobo ang katulad ng iyong personalidad!

export const questions = [
  {
    id: 1,
    question: "Paano mo ginagawa ang adobo mo?",
    options: [
      { text: "Sunod sa tradisyonal na recipe ng lola", type: "A" },
      { text: "May sariling twist at experimentation", type: "B" },
      { text: "Simple lang, basta masarap", type: "C" },
      { text: "Depende sa mood at available ingredients", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Kapag may problema ka, paano mo hinaharap?",
    options: [
      { text: "Iniisip muna ng mabuti bago kumilos", type: "A" },
      { text: "Agad akong gumagawa ng solusyon", type: "B" },
      { text: "Hinihintay ko na lumipas na lang", type: "C" },
      { text: "Hinahanap ko ang pinaka-praktikal na paraan", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Ano ang mas importante sa adobo para sa iyo?",
    options: [
      { text: "Ang tamang timpla ng toyo at suka", type: "A" },
      { text: "Ang creativity sa pagdagdag ng ingredients", type: "B" },
      { text: "Ang lambot ng karne", type: "C" },
      { text: "Ang bilang ng kanin na makakain mo", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Sa trabaho, ano ang approach mo?",
    options: [
      { text: "Systematic at organized", type: "A" },
      { text: "Innovative at risk-taker", type: "B" },
      { text: "Chill lang at walang stress", type: "C" },
      { text: "Flexible at adaptable", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Anong bahagi ng adobo ang paborito mo?",
    options: [
      { text: "Ang sabaw na may suka at toyo", type: "A" },
      { text: "Ang crispy na bahagi", type: "B" },
      { text: "Ang tender na karne", type: "C" },
      { text: "Lahat, basta may kanin", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Paano mo gustong kainin ang adobo?",
    options: [
      { text: "Mainit pa at bagong luto", type: "A" },
      { text: "Pinakuluan ulit para mas masarap", type: "B" },
      { text: "Kahit anong oras, kahit malamig na", type: "C" },
      { text: "Kasama ng ibang ulam", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Sa grupo ng mga kaibigan, ano ang role mo?",
    options: [
      { text: "Ang nag-oorganisa ng plans", type: "A" },
      { text: "Ang pumupunta ng mga bagong ideas", type: "B" },
      { text: "Ang sumasama lang kung trip", type: "C" },
      { text: "Ang pumapayag sa lahat ng suggestion", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Anong klaseng adobo ang gusto mong subukan?",
    options: [
      { text: "Classic manok at baboy adobo lang", type: "A" },
      { text: "Puti, tuyo, o may gata na adobo", type: "B" },
      { text: "Kahit ano basta adobo", type: "C" },
      { text: "Depende sa occasion", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Kapag nagluluto ka ng adobo, ano ang mindset mo?",
    options: [
      { text: "Dapat perfect ang lasa", type: "A" },
      { text: "Experimental at creative", type: "B" },
      { text: "Basta mabusog lang", type: "C" },
      { text: "Practical at efficient", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Ano ang gagawin mo sa sobrang adobo?",
    options: [
      { text: "I-store ng maayos sa ref", type: "A" },
      { text: "Gawing ibang ulam like adobo flakes", type: "B" },
      { text: "Kainin kinabukasan", type: "C" },
      { text: "Ipamigay sa kapitbahay", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Sa pagpili ng karne para sa adobo, ano ang priority mo?",
    options: [
      { text: "Quality at freshness", type: "A" },
      { text: "Unusual cuts para sa interesting texture", type: "B" },
      { text: "Kung ano ang available", type: "C" },
      { text: "Kung ano ang sulit", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Kapag may kumain ng adobo mo, ano ang gusto mong marinig?",
    options: [
      { text: "Perfect ang timpla tulad ng dati", type: "A" },
      { text: "Wow, iba to! Ang unique!", type: "B" },
      { text: "Masarap, nakakabusog", type: "C" },
      { text: "Pwede na, okay naman", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Klasikong Adobo",
    emoji: "👵",
    description: "Ikaw ay tulad ng tradisyonal na adobo - matibay ang paninindigan, sumusunod sa mga proven na paraan, at maaasahan. May malalim kang respeto sa tradisyon at experience. Mahusay ka sa pagpapanatili ng kalidad at consistency.",
    traits: ["Tradisyonal", "Maaasahan", "Organized", "Respectful"],
    strengths: [
      "Consistent sa quality ng trabaho",
      "Mahusay sa pagplano at pag-organize",
      "Valued ang experience at wisdom"
    ],
    weaknesses: [
      "Minsan resistant sa change",
      "Takot subukan ang bago"
    ],
    tips: [
      "Try minsan mag-experiment ng konti",
      "Open your mind sa mga bagong ideas"
    ],
  },
  B: {
    type: "B",
    title: "Experimental Adobo",
    emoji: "🎨",
    description: "Ikaw ay tulad ng modern adobo na may twist - creative, adventurous, at hindi takot mag-experiment. Palagi kang naghahanap ng bagong paraan at improvement. Trendsetter ka at innovative thinker.",
    traits: ["Creative", "Adventurous", "Innovative", "Bold"],
    strengths: [
      "Magaling mag-innovate at mag-improve",
      "Hindi takot sa risks",
      "Inspirational sa iba"
    ],
    weaknesses: [
      "Minsan hindi consistent",
      "Masyado ambitious na nagiging impractical"
    ],
    tips: [
      "Balance ang innovation with practicality",
      "Wag kalimutan ang basics"
    ],
  },
  C: {
    type: "C",
    title: "Easy-Going Adobo",
    emoji: "😌",
    description: "Ikaw ay tulad ng simple at walang komplikadong adobo - chill, easy-going, at walang stress. Hindi ka mahilig sa drama at gusto mo ng peaceful life. Kontento ka sa simple things in life.",
    traits: ["Relaxed", "Simple", "Peaceful", "Contented"],
    strengths: [
      "Hindi easily stressed",
      "Easy to get along with",
      "Appreciative ng simple joys"
    ],
    weaknesses: [
      "Minsan kulang sa motivation",
      "Hindi proactive sa opportunities"
    ],
    tips: [
      "Challenge yourself minsan",
      "Set goals para sa growth"
    ],
  },
  D: {
    type: "D",
    title: "Practical Adobo",
    emoji: "🎯",
    description: "Ikaw ay tulad ng flexible at practical na adobo - adaptable, resourceful, at realistic. Alam mong mag-adjust sa situation at gumawa ng best decision based sa resources. Pragmatic ka at solution-oriented.",
    traits: ["Flexible", "Practical", "Resourceful", "Adaptable"],
    strengths: [
      "Mahusay mag-adjust sa changes",
      "Good decision maker",
      "Efficient sa resources"
    ],
    weaknesses: [
      "Minsan walang strong conviction",
      "Baka maging too compromising"
    ],
    tips: [
      "Stand firm sa important values mo",
      "Develop your own style"
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
