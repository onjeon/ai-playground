// Personalidad sa Jollibee
// Alamin kung anong Jollibee menu item ang personality mo!

export const questions = [
  {
    id: 1,
    question: "Ano ang usual order mo sa Jollibee?",
    options: [
      { text: "Chickenjoy with extra rice!", type: "A" },
      { text: "Jolly Spaghetti, yung sweet!", type: "B" },
      { text: "Burger Steak with mushroom gravy", type: "C" },
      { text: "Palabok o Yumburger lang", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Paano mo kinakain ang Chickenjoy?",
    options: [
      { text: "Buo-buo, kagat agad!", type: "A" },
      { text: "Hiwalay ang skin, special ko yun", type: "B" },
      { text: "Methodical - may order kung paano kainin", type: "C" },
      { text: "Kahit paano, basta masarap", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Sa barkada, ano ang role mo?",
    options: [
      { text: "Ang bida at center of attention", type: "A" },
      { text: "Ang sweet at caring sa lahat", type: "B" },
      { text: "Ang tahimik pero maalalahanin", type: "C" },
      { text: "Ang flexible, game sa lahat", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Anong drinks ang palagi mong ino-order?",
    options: [
      { text: "Large Coke, all the way!", type: "A" },
      { text: "Pineapple juice, refreshing!", type: "B" },
      { text: "Iced tea o kaya Hot coffee", type: "C" },
      { text: "Tubig lang okay na", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Kapag may bagong menu item, ano ang reaction mo?",
    options: [
      { text: "Must try agad! First day pa lang!", type: "A" },
      { text: "Excited pero tatapusin ko muna favorites ko", type: "B" },
      { text: "Wait ko muna reviews bago subukan", type: "C" },
      { text: "Bahala na, try ko kung trip ko", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Anong dessert ang bet mo?",
    options: [
      { text: "Peach Mango Pie - crispy at mainit!", type: "A" },
      { text: "Sundae - sweet treat!", type: "B" },
      { text: "Chocolate Sundae Twirl", type: "C" },
      { text: "Wala na, busog na sa meal", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Paano ka kumakain sa Jollibee?",
    options: [
      { text: "Mabilis, para makaorder ulit!", type: "A" },
      { text: "Dahan-dahan, i-savor ang bawat bite", type: "B" },
      { text: "Organized, may sistema", type: "C" },
      { text: "Normal lang, walang special", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Anong gravy level ang preferred mo?",
    options: [
      { text: "Maraming gravy, extra pa!", type: "A" },
      { text: "Tamang dami lang, balanced", type: "B" },
      { text: "Konti lang, pang-flavor", type: "C" },
      { text: "Walang gravy, plain lang", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Kapag birthday mo, ano ang gagawin mo?",
    options: [
      { text: "Jollibee party! Malaking celebration!", type: "A" },
      { text: "Simple party lang with close friends", type: "B" },
      { text: "Small gathering sa bahay", type: "C" },
      { text: "Walang party, normal day lang", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Ano ang opinion mo sa Jolly Spaghetti?",
    options: [
      { text: "The best! Walang tatalo!", type: "A" },
      { text: "Childhood favorite, nostalgic!", type: "B" },
      { text: "Okay lang, hindi priority", type: "C" },
      { text: "Hindi ko bet, masyado matamis", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Anong oras ka usually pumupunta sa Jollibee?",
    options: [
      { text: "Lunch rush, kasama ng lahat!", type: "A" },
      { text: "Afternoon snack time", type: "B" },
      { text: "Late night, tahimik na", type: "C" },
      { text: "Anytime na available ako", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Kapag may problema, ano ang approach mo?",
    options: [
      { text: "Confront agad, solve immediately!", type: "A" },
      { text: "Talk it out with care and empathy", type: "B" },
      { text: "Think it through carefully", type: "C" },
      { text: "Bahala na, magiging okay din yan", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Chickenjoy",
    emoji: "🍗",
    description: "Ikaw ay ang bida - bold, confident, at paborito ng lahat! Tulad ng Chickenjoy, ikaw ang main attraction sa grupo. May strong presence ka at natural leader. Energetic ka at adventurous sa buhay!",
    traits: ["Confident", "Leader", "Energetic", "Popular"],
    strengths: [
      "Natural na leader",
      "Charismatic at engaging",
      "May initiative sa lahat"
    ],
    weaknesses: [
      "Minsan too dominating",
      "Baka ma-overwhelm ang iba sa energy"
    ],
    tips: [
      "Give others a chance to shine din",
      "Balance confidence with humility"
    ],
  },
  B: {
    type: "B",
    title: "Jolly Spaghetti",
    emoji: "🍝",
    description: "Ikaw ay sweet, caring, at nostalgic! Tulad ng Jolly Spaghetti, you bring joy and comfort sa lahat. Family-oriented ka at mahalaga sa iyo ang relationships. You have a warm personality that people love!",
    traits: ["Sweet", "Caring", "Nostalgic", "Warm"],
    strengths: [
      "Excellent sa relationships",
      "Thoughtful and considerate",
      "Creates lasting memories"
    ],
    weaknesses: [
      "Minsan too emotional",
      "Nahihirapan mag-let go"
    ],
    tips: [
      "Balance emotion with logic",
      "Set healthy boundaries"
    ],
  },
  C: {
    type: "C",
    title: "Burger Steak",
    emoji: "🥩",
    description: "Ikaw ay reliable, consistent, at thoughtful! Tulad ng Burger Steak, you're a comfort food - dependable at walang drama. Quiet achiever ka pero solid ang contributions mo. Practical ka at organized.",
    traits: ["Reliable", "Thoughtful", "Practical", "Organized"],
    strengths: [
      "Very dependable",
      "Good planner",
      "Consistent performance"
    ],
    weaknesses: [
      "Minsan too serious",
      "Kulang sa spontaneity"
    ],
    tips: [
      "Loosen up minsan",
      "Try new experiences"
    ],
  },
  D: {
    type: "D",
    title: "Yumburger",
    emoji: "🍔",
    description: "Ikaw ay simple, flexible, at easy to please! Tulad ng Yumburger, you're no-frills pero solid. Low maintenance ka at walang demands. Chill ka lang at go with the flow sa lahat ng situation.",
    traits: ["Simple", "Flexible", "Easy-going", "Adaptable"],
    strengths: [
      "Easy to work with",
      "No drama",
      "Adaptable sa changes"
    ],
    weaknesses: [
      "Minsan walang stand",
      "Baka hindi ma-notice contributions"
    ],
    tips: [
      "Assert yourself more",
      "Develop your unique qualities"
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
