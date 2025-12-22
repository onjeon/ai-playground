// अंतरंगता स्तर - रिश्ते में closeness
// Emotional Intimacy Test

export const questions = [
  {
    id: 1,
    question: "Partner से deepest secrets share?",
    options: [
      { text: "सब कुछ share है", type: "A" },
      { text: "ज्यादातर share", type: "B" },
      { text: "कुछ ही बातें", type: "C" },
      { text: "बहुत कम share", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Vulnerable feel करना partner के सामने?",
    options: [
      { text: "comfortable हूं पूरी तरह", type: "A" },
      { text: "mostly comfortable", type: "B" },
      { text: "थोड़ा hard है", type: "C" },
      { text: "नहीं होता vulnerable", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Partner को कितना जानते हैं?",
    options: [
      { text: "inside out, सब कुछ", type: "A" },
      { text: "बहुत अच्छे से", type: "B" },
      { text: "ठीक-ठाक", type: "C" },
      { text: "still discovering", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Emotional connection की depth?",
    options: [
      { text: "बहुत deep, soul level", type: "A" },
      { text: "strong connection", type: "B" },
      { text: "moderate", type: "C" },
      { text: "surface level", type: "D" },
    ],
  },
  {
    id: 5,
    question: "बिना बोले समझ जाते हैं?",
    options: [
      { text: "हां, telepathy जैसा", type: "A" },
      { text: "mostly समझ जाते हैं", type: "B" },
      { text: "कभी-कभी", type: "C" },
      { text: "बोलना पड़ता है clearly", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Fears और insecurities share?",
    options: [
      { text: "सब share हैं", type: "A" },
      { text: "mostly share", type: "B" },
      { text: "कुछ ही", type: "C" },
      { text: "नहीं share करता/करती", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Silence में comfortable?",
    options: [
      { text: "बहुत, comfortable silence", type: "A" },
      { text: "हां, okay है", type: "B" },
      { text: "थोड़ा awkward", type: "C" },
      { text: "बात करनी पड़ती है", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Past traumas और experiences?",
    options: [
      { text: "shared, healing together", type: "A" },
      { text: "बताया है mostly", type: "B" },
      { text: "कुछ ही बातें", type: "C" },
      { text: "private रखता/रखती हूं", type: "D" },
    ],
  },
  {
    id: 9,
    question: "रोना partner के सामने?",
    options: [
      { text: "comfortable, होता है", type: "A" },
      { text: "हां, okay है", type: "B" },
      { text: "try करता/करती हूं avoid", type: "C" },
      { text: "कभी नहीं", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Dreams और aspirations share?",
    options: [
      { text: "सब कुछ, together dream", type: "A" },
      { text: "बातें होती हैं", type: "B" },
      { text: "कुछ share", type: "C" },
      { text: "अपने तक रखता/रखती हूं", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Physical intimacy के अलावा emotional closeness?",
    options: [
      { text: "बहुत strong", type: "A" },
      { text: "अच्छी है", type: "B" },
      { text: "could be better", type: "C" },
      { text: "कम है", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Overall intimacy level?",
    options: [
      { text: "बहुत deep, soulmates", type: "A" },
      { text: "strong और healthy", type: "B" },
      { text: "growing, work in progress", type: "C" },
      { text: "shallow, surface level", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "आत्मीय बंधन",
    emoji: "💞",
    description: "आप और partner बहुत deeply connected हैं! Soul level intimacy है। Rare और beautiful bond!",
    traits: ["deeply connected", "vulnerable", "open", "trusting"],
    strengths: ["unbreakable bond", "complete trust", "healing together"],
    weaknesses: ["codependency possible"],
    tips: ["individual identities भी maintain करें"],
  },
  B: {
    type: "B",
    title: "गहरा जुड़ाव",
    emoji: "💕",
    description: "अच्छी intimacy है। Open हैं एक-दूसरे के साथ। Strong और healthy connection!",
    traits: ["connected", "open", "trusting", "comfortable"],
    strengths: ["good communication", "emotional safety"],
    weaknesses: ["कुछ areas में और depth possible"],
    tips: ["deeper conversations continue करें"],
  },
  C: {
    type: "C",
    title: "विकसित होता जुड़ाव",
    emoji: "🌱",
    description: "Intimacy growing है। Time और effort से deeper होगी। Patience रखें।",
    traits: ["developing", "growing", "potential", "building"],
    strengths: ["foundation है"],
    weaknesses: ["more openness needed", "vulnerability hard"],
    tips: ["small steps से share करें", "trust build करें"],
  },
  D: {
    type: "D",
    title: "सतही जुड़ाव",
    emoji: "🌊",
    description: "Intimacy surface level है। Deeper connection के लिए काम करना होगा।",
    traits: ["surface level", "guarded", "distant", "protected"],
    strengths: ["boundaries हैं"],
    weaknesses: ["disconnected feel", "partner lonely"],
    tips: ["slowly open up करें", "therapy consider करें", "trust build करें"],
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
