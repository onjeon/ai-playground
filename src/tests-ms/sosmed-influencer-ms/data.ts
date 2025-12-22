// Jenis Influencer Kau
// Test viral tentang influencer personality type

export const questions = [
  {
    id: 1,
    question: "Kalau kau jadi influencer, content apa?",
    options: [
      { text: "Lifestyle dan fashion!", type: "A" },
      { text: "Food dan travel!", type: "B" },
      { text: "Comedy dan entertainment!", type: "C" },
      { text: "Educational dan informative!", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Brand deal approach kau macam mana?",
    options: [
      { text: "Accept semua yang bayar well!", type: "A" },
      { text: "Selective, kena match dengan brand", type: "B" },
      { text: "Organic je, tak kejar sponsorship", type: "C" },
      { text: "Hanya brand yang aku personally use", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Followers ideal kau berapa?",
    options: [
      { text: "1 million+! Go big!", type: "A" },
      { text: "100k-500k sweet spot", type: "B" },
      { text: "10k-50k engaged community", type: "C" },
      { text: "Quality > quantity", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bila dapat hate comment, kau...",
    options: [
      { text: "Clap back dengan confidence!", type: "A" },
      { text: "Ignore, not worth energy", type: "B" },
      { text: "Delete and block", type: "C" },
      { text: "Address it publicly", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Collaboration style kau?",
    options: [
      { text: "Collab dengan anyone! Networking!", type: "A" },
      { text: "Dengan yang similar vibe je", type: "B" },
      { text: "Prefer solo content", type: "C" },
      { text: "Strategic collabs untuk growth", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Personal life kau share berapa banyak?",
    options: [
      { text: "Everything! Transparency is key!", type: "A" },
      { text: "Balance antara personal dan professional", type: "B" },
      { text: "Mostly content focused, personal minimal", type: "C" },
      { text: "Create persona, keep real life private", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Platform utama kau prefer?",
    options: [
      { text: "Instagram! Visual is everything!", type: "A" },
      { text: "TikTok! Short form king!", type: "B" },
      { text: "YouTube! Long form deeper connection!", type: "C" },
      { text: "Multi-platform! Be everywhere!", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Content schedule kau macam mana?",
    options: [
      { text: "Daily posting, algorithm demands!", type: "A" },
      { text: "Consistent schedule, 3-4x seminggu", type: "B" },
      { text: "Bila inspiration strikes", type: "C" },
      { text: "Quality schedule, weekly atau biweekly", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Engagement dengan followers macam mana?",
    options: [
      { text: "Reply semua! They're family!", type: "A" },
      { text: "Regular Q&A and lives", type: "B" },
      { text: "Occasional interactions", type: "C" },
      { text: "Professional boundary maintained", type: "D" },
    ],
  },
  {
    id: 10,
    question: "End goal as influencer?",
    options: [
      { text: "Build empire! Brand deals, own business!", type: "A" },
      { text: "Make living doing what I love", type: "B" },
      { text: "Share passion, money is bonus", type: "C" },
      { text: "Platform to bigger opportunities", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Lifestyle Icon",
    emoji: "✨",
    description: "Kau born to be lifestyle influencer! Fashion, beauty, daily life - semua aesthetic dan aspirational. The dream life curator!",
    traits: ["Glamorous", "Aspirational", "Aesthetic", "Trendsetter"],
    strengths: ["Visual appeal", "Brand attractiveness", "Lifestyle appeal"],
    weaknesses: ["Pressure to maintain image", "Comparison from others"],
    tips: ["Stay authentic behind the glam", "Mental health is priority!"],
  },
  B: {
    type: "B",
    title: "Experience Sharer",
    emoji: "🌍",
    description: "Kau share experiences! Food, travel, adventures - bawa followers ikut journey kau. Living life and documenting it beautifully!",
    traits: ["Adventurous", "Explorer", "Storyteller", "Experience-focused"],
    strengths: ["Engaging content", "Diverse topics", "Relatable adventures"],
    weaknesses: ["Need constant new experiences", "Can be expensive lifestyle"],
    tips: ["Local experiences count too", "Not everything needs to be exotic!"],
  },
  C: {
    type: "C",
    title: "Entertainment King/Queen",
    emoji: "🎭",
    description: "Kau natural entertainer! Comedy, skits, reactions - buat orang gelak dan terhibur. Bringing joy to timelines everywhere!",
    traits: ["Funny", "Creative", "Entertaining", "Charismatic"],
    strengths: ["High engagement", "Shareable content", "Make people happy"],
    weaknesses: ["Pressure to be funny", "Comedy is subjective"],
    tips: ["Stay true to your humor", "Not every joke needs to land!"],
  },
  D: {
    type: "D",
    title: "Value Creator",
    emoji: "📚",
    description: "Kau provide value! Educational content, tips, insights - followers learn something every post. The teacher of social media!",
    traits: ["Knowledgeable", "Helpful", "Informative", "Authoritative"],
    strengths: ["Respect from audience", "Lasting impact", "Real value"],
    weaknesses: ["Can be seen as boring", "Research intensive"],
    tips: ["Make learning fun", "Your knowledge changes lives!"],
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
