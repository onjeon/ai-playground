// Gaya Fotografi Anda
// Jenis photographer mana anda?

export const questions = [
  {
    id: 1,
    question: "Kamera/device untuk ambil gambar?",
    options: [
      { text: "DSLR/Mirrorless - serious gear", type: "A" },
      { text: "Smartphone - convenience is key", type: "B" },
      { text: "Film camera - aesthetic vibes", type: "C" },
      { text: "Whatever available", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Subject favorite untuk shoot?",
    options: [
      { text: "Portraits - capture emotions", type: "A" },
      { text: "Food - aesthetic makan!", type: "B" },
      { text: "Landscapes/nature", type: "C" },
      { text: "Random moments, candid", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Editing photos, anda...",
    options: [
      { text: "Full Lightroom/Photoshop workflow", type: "A" },
      { text: "Quick filter dan adjustments", type: "B" },
      { text: "Minimal, natural look", type: "C" },
      { text: "Tak edit, straight from camera", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bila pergi travel, photos anda...",
    options: [
      { text: "Hundreds! Document everything", type: "A" },
      { text: "Good amount, key moments", type: "B" },
      { text: "Few but quality shots", type: "C" },
      { text: "Sikit je, enjoy the moment", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Composition rules (rule of thirds, etc)...",
    options: [
      { text: "Follow strictly, photography 101", type: "A" },
      { text: "Aware tapi sometimes break", type: "B" },
      { text: "What feels right je", type: "C" },
      { text: "Apa tu composition rules?", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Photography gear collection anda?",
    options: [
      { text: "Multiple lenses, tripod, lighting", type: "A" },
      { text: "Basic camera dan phone", type: "B" },
      { text: "Vintage gear dan film", type: "C" },
      { text: "Phone only", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Photo posting habits?",
    options: [
      { text: "Curate feed carefully, aesthetic grid", type: "A" },
      { text: "Post bila ada good photos", type: "B" },
      { text: "Occasional shares", type: "C" },
      { text: "Jarang post, personal collection", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bila orang minta tolong ambil gambar...",
    options: [
      { text: "Happy! Pose nicely, adjust lighting", type: "A" },
      { text: "Sure, take few angles", type: "B" },
      { text: "Quick snap, job done", type: "C" },
      { text: "One and done", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Photography aspirations?",
    options: [
      { text: "Professional/semi-pro photographer", type: "A" },
      { text: "Good hobby, nice memories", type: "B" },
      { text: "Artistic expression", type: "C" },
      { text: "Just capture moments casually", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Best shot satisfaction level?",
    options: [
      { text: "Nothing beats a perfect capture!", type: "A" },
      { text: "Happy bila photo turns out nice", type: "B" },
      { text: "Appreciate the memory it holds", type: "C" },
      { text: "Photo is photo", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Pro Photographer",
    emoji: "📷",
    description: "Photography adalah art dan passion! Serious about your craft, always improving. Your photos tell stories!",
    traits: ["Professional", "Technical", "Artistic", "Dedicated"],
    strengths: ["Amazing photos", "Technical knowledge", "Creative eye"],
    weaknesses: ["May obsess over perfection", "Gear addiction"],
    tips: ["Enjoy the process!", "Sometimes imperfect is perfect"],
  },
  B: {
    type: "B",
    title: "Enthusiast Photographer",
    emoji: "📸",
    description: "Balance antara skill dan enjoyment! Good photos without the stress. Perfect hobby level!",
    traits: ["Enthusiastic", "Balanced", "Skilled", "Practical"],
    strengths: ["Good photos", "Enjoys process", "Accessible approach"],
    weaknesses: ["Could push more"],
    tips: ["Keep exploring!", "Your style is developing nicely"],
  },
  C: {
    type: "C",
    title: "Artistic Soul",
    emoji: "🎞️",
    description: "Photography untuk self-expression! Not about technicalities tapi feeling. Vintage, film, mood - your vibe!",
    traits: ["Artistic", "Unique", "Moody", "Expressive"],
    strengths: ["Unique perspective", "Emotional depth"],
    weaknesses: ["May lack technical foundation"],
    tips: ["Learn some basics!", "It'll enhance your art"],
  },
  D: {
    type: "D",
    title: "Casual Snapper",
    emoji: "📱",
    description: "Memories > perfection! Quick snaps untuk remember moments. Photography without pressure!",
    traits: ["Casual", "Present", "Simple", "Memory-focused"],
    strengths: ["Lives in the moment", "No pressure"],
    weaknesses: ["May miss great shots", "Could improve"],
    tips: ["Try a photography app!", "Small effort, big improvement"],
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
