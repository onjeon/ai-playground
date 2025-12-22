// Personalidad sa Pasko
// Alamin kung anong klaseng tao ka kapag Pasko!

export const questions = [
  {
    id: 1,
    question: "Kailan mo sinisimulan ang paghanda para sa Pasko?",
    options: [
      { text: "Ber months pa lang, ready na!", type: "A" },
      { text: "Mid-November, kasama ng karamihan", type: "B" },
      { text: "December na, last minute", type: "C" },
      { text: "Wala akong special preparations", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Ano ang favorite mong bahagi ng Pasko?",
    options: [
      { text: "Ang decorations at lights!", type: "A" },
      { text: "Ang family gatherings at reunions", type: "B" },
      { text: "Ang foods at noche buena", type: "C" },
      { text: "Ang long break lang sa work", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Paano mo dine-decorate ang bahay para sa Pasko?",
    options: [
      { text: "All out! Parang mall ang dami ng decor!", type: "A" },
      { text: "Simple pero maayos - parol at Christmas tree", type: "B" },
      { text: "Konting decor lang, minimal", type: "C" },
      { text: "Wala, hindi ako nag-dedecorate", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Ano ang approach mo sa pag-regalo?",
    options: [
      { text: "Maaga kong binibili, personalized pa!", type: "A" },
      { text: "Naka-list ako, planned lahat", type: "B" },
      { text: "Last minute shopping sa malls", type: "C" },
      { text: "Cash na lang o wala talaga", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Anong Christmas song ang bet mo?",
    options: [
      { text: "Jose Mari Chan classics!", type: "A" },
      { text: "Traditional carols at simbang gabi songs", type: "B" },
      { text: "Modern Christmas hits", type: "C" },
      { text: "Ayoko ng Christmas songs, nakakasawa", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Paano mo gustong mag-celebrate ng Noche Buena?",
    options: [
      { text: "Malaking party with the whole family!", type: "A" },
      { text: "Simple dinner kasama ang immediate family", type: "B" },
      { text: "Chill lang, walang pressure", type: "C" },
      { text: "Tulog na lang, walang special", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Ano ang opinion mo sa Simbang Gabi?",
    options: [
      { text: "Complet ako every year!", type: "A" },
      { text: "Pumupunta ako pero hindi complete", type: "B" },
      { text: "Minsan lang, pag trip ko", type: "C" },
      { text: "Hindi ako pumupunta", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Anong Noche Buena food ang hindi dapat mawala?",
    options: [
      { text: "Lahat! Ham, queso de bola, fruit salad!", type: "A" },
      { text: "Traditional Filipino dishes", type: "B" },
      { text: "Kahit ano, basta may handa", type: "C" },
      { text: "Normal food lang, walang special", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Paano ka nag-rerespond sa mga kumakanta ng Christmas carols?",
    options: [
      { text: "Excited ako! Laging may ready na pamasko", type: "A" },
      { text: "Binibigyan ko ng tamang amount", type: "B" },
      { text: "Minsan lang, pag may extra", type: "C" },
      { text: "Naka-lock ang gate, sorry", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Ano ang feeling mo about 13th month pay?",
    options: [
      { text: "Para sa Pasko shopping at gifts!", type: "A" },
      { text: "Budgeted na for bills and savings", type: "B" },
      { text: "Gagastusin ko sa sarili ko", type: "C" },
      { text: "Savings agad, practical", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Anong Christmas movie ang paborito mo?",
    options: [
      { text: "Home Alone at classic holiday movies!", type: "A" },
      { text: "Filipino Christmas movies ng Star Cinema", type: "B" },
      { text: "Kahit ano, basta may romance", type: "C" },
      { text: "Hindi ako nanonood ng Christmas movies", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Ano ang New Year's resolution mo usually?",
    options: [
      { text: "Marami at specific! Listed pa!", type: "A" },
      { text: "May konti, realistic goals", type: "B" },
      { text: "Wala, pero may gusto i-improve", type: "C" },
      { text: "Wala, same lang naman every year", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Christmas Enthusiast",
    emoji: "🎄",
    description: "Ikaw ang epitome ng Christmas spirit! Super excited ka sa Pasko at gusto mong i-celebrate ng todo-todo. Generous ka at mahal mo ang tradition. You spread joy and happiness sa paligid mo!",
    traits: ["Enthusiastic", "Generous", "Traditional", "Joyful"],
    strengths: [
      "Creates memorable experiences",
      "Brings people together",
      "Maintains traditions"
    ],
    weaknesses: [
      "Minsan overspending",
      "Stressed sa preparations"
    ],
    tips: [
      "Balance excitement with budget",
      "Don't pressure yourself too much"
    ],
  },
  B: {
    type: "B",
    title: "Traditional Celebrator",
    emoji: "⭐",
    description: "Ikaw ay balanced at meaningful ang approach sa Pasko. Focus mo ay ang family at ang true meaning ng celebration. Organized ka pero hindi overwhelming. You keep the balance between tradition and practicality.",
    traits: ["Balanced", "Meaningful", "Organized", "Family-oriented"],
    strengths: [
      "Good at planning",
      "Values relationships",
      "Practical approach"
    ],
    weaknesses: [
      "Minsan too conservative",
      "Resistant sa changes"
    ],
    tips: [
      "Try new traditions minsan",
      "Be more spontaneous"
    ],
  },
  C: {
    type: "C",
    title: "Casual Celebrator",
    emoji: "🎁",
    description: "Ikaw ay chill at relaxed about Christmas. You celebrate pero walang pressure at stress. Prefer mo ang simple at intimate gatherings. You focus on enjoying the moment rather than preparations.",
    traits: ["Chill", "Relaxed", "Simple", "Present-focused"],
    strengths: [
      "Stress-free approach",
      "Enjoys the moment",
      "Low maintenance"
    ],
    weaknesses: [
      "Minsan too last minute",
      "Kulang sa planning"
    ],
    tips: [
      "Plan a bit earlier next time",
      "Create some traditions"
    ],
  },
  D: {
    type: "D",
    title: "Low-Key Observer",
    emoji: "😌",
    description: "Ikaw ay practical at hindi masyado fan ng Christmas hype. You treat it as a regular day o kaya long break lang. Wala kang special preparations at okay lang sa iyo na simple lang. You prefer peace over festivities.",
    traits: ["Practical", "Low-key", "Independent", "Simple"],
    strengths: [
      "No financial stress",
      "Avoids holiday chaos",
      "Peaceful mindset"
    ],
    weaknesses: [
      "Baka isolated from others",
      "Missing out on bonding"
    ],
    tips: [
      "Join some celebrations minsan",
      "Try to create small traditions"
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
