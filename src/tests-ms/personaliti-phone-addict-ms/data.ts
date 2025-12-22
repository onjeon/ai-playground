// Level Ketagihan Phone
// Kau boleh survive tanpa phone tak?

export const questions = [
  {
    id: 1,
    question: "Pagi-pagi baru bangun. First thing kau buat?",
    options: [
      { text: "Bangun, basuh muka, start day!", type: "A" },
      { text: "Quick check notifications, then bangun", type: "B" },
      { text: "Scroll phone 30 minit before moving", type: "C" },
      { text: "1 jam+ scrolling before getting up!", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Phone tertinggal kat rumah. Kau pergi kerja/sekolah. Reaction?",
    options: [
      { text: "Okay je, survive without it!", type: "A" },
      { text: "Inconvenient tapi manageable", type: "B" },
      { text: "Anxious all day, feel naked!", type: "C" },
      { text: "BALIK AMBIK! Cannot survive without!", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Screen time daily kau average berapa jam?",
    options: [
      { text: "Under 2 hours", type: "A" },
      { text: "2-4 hours", type: "B" },
      { text: "4-7 hours", type: "C" },
      { text: "7+ hours, basically non-stop!", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Tengah makan dengan family/friends. Phone kau?",
    options: [
      { text: "In bag/pocket, focus on company!", type: "A" },
      { text: "On table tapi jarang check", type: "B" },
      { text: "Check regularly throughout meal", type: "C" },
      { text: "Scrolling while eating, multitask!", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bathroom break. Phone ikut tak?",
    options: [
      { text: "Never! Eww boundaries!", type: "A" },
      { text: "Sometimes for quick business", type: "B" },
      { text: "Usually yes, toilet time = scroll time", type: "C" },
      { text: "ALWAYS! Extended bathroom sessions!", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Notification bunyi. Kau tengah buat kerja. Kau?",
    options: [
      { text: "Ignore, check later after kerja siap", type: "A" },
      { text: "Quick glance, if not urgent continue kerja", type: "B" },
      { text: "Must check immediately!", type: "C" },
      { text: "Check and go down rabbit hole!", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Before tidur, phone kau?",
    options: [
      { text: "Charge outside bilik, no screen 1 hour before", type: "A" },
      { text: "Quick check then put down", type: "B" },
      { text: "Scroll until sleepy", type: "C" },
      { text: "Scroll until tertidur dengan phone atas muka!", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bored 5 minit. Kau automatically?",
    options: [
      { text: "Daydream/observe surroundings", type: "A" },
      { text: "Maybe check phone if nothing else", type: "B" },
      { text: "Phone out immediately!", type: "C" },
      { text: "Already on phone, so continue!", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Battery 5%. No charger. Anxiety level?",
    options: [
      { text: "Fine, phone off pun okay", type: "A" },
      { text: "Sikit concerned tapi manage", type: "B" },
      { text: "Anxious! Must find charger!", type: "C" },
      { text: "PANIC MODE! Life emergency!", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Boleh tak kau go one full day tanpa phone?",
    options: [
      { text: "Easy! Done it before, refreshing!", type: "A" },
      { text: "Possible tapi would be uncomfortable", type: "B" },
      { text: "Very hard, would struggle", type: "C" },
      { text: "IMPOSSIBLE! Don't even want to try!", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Digital Detox King - Phone? Optional! 📵",
    emoji: "📵",
    description: "KAU NI RARE SPECIES! Phone tak control life kau! Can survive without it easily. Living in the real world. Digital detox champion! Orang lain jealous freedom kau!",
    traits: ["Not phone dependent", "Present in moment", "Healthy relationship with tech", "Free"],
    strengths: ["Mental clarity", "Better connections", "Not addicted", "Productive"],
    weaknesses: ["May miss urgent messages", "Seem unreachable sometimes"],
    tips: ["You're living the dream!", "Stay balanced!"],
  },
  B: {
    type: "B",
    title: "Balanced User - Healthy Relationship 📱",
    emoji: "📱",
    description: "Kau ni BALANCED phone user! Use when needed, put down when not. Healthy relationship dengan technology. Not addicted tapi not disconnected. The sweet spot!",
    traits: ["Balanced usage", "Can disconnect", "Healthy habits", "Present mostly"],
    strengths: ["Good balance", "Can focus", "Not controlled by phone"],
    weaknesses: ["Sometimes scroll more than intended", "Could be better"],
    tips: ["Good job maintaining balance!", "Keep it up!"],
  },
  C: {
    type: "C",
    title: "Phone Attached - Getting Dependent 📲",
    emoji: "📲",
    description: "KAU NI ATTACHED to phone! Life feels incomplete without it. Scroll lebih dari intended, check constantly. Dependency is real! Phone ada power over kau!",
    traits: ["Phone dependent", "Constant checker", "Feels anxious without", "Scrolls often"],
    strengths: ["Always connected", "Never miss updates", "Responsive"],
    weaknesses: ["Addicted tendencies", "Less present in real life", "Affects productivity"],
    tips: ["Try screen time limits!", "Put phone away during meals!", "One hour without phone daily!"],
  },
  D: {
    type: "D",
    title: "Phone Addict - Can't Live Without! 🔗",
    emoji: "🔗",
    description: "PHONE IS YOUR LIFE! Cannot function without it! Every free second adalah scroll time. Phantom vibrations happen. Anxiety bila tak ada phone. Full addiction mode!",
    traits: ["Severely addicted", "Cannot function without", "Always scrolling", "Anxious when apart"],
    strengths: ["Very responsive", "Never miss anything online", "Tech savvy"],
    weaknesses: ["Missing real life", "Productivity affected", "Health concerns", "Relationships affected"],
    tips: ["SERIOUSLY consider digital detox!", "This is affecting your life!", "Try app blockers!", "Real life is better!"],
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
