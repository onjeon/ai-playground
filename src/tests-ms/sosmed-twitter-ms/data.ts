// Gaya Twitter/X Kau
// Test viral tentang Twitter personality

export const questions = [
  {
    id: 1,
    question: "Kau tweet berapa kerap?",
    options: [
      { text: "Multiple times sehari, apa-apa pun tweet!", type: "A" },
      { text: "Bila ada benda interesting je", type: "B" },
      { text: "Jarang, lebih suka RT je", type: "C" },
      { text: "Lurker sejati, baca je never post", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bila ada trending topic panas, kau...",
    options: [
      { text: "Jump in dengan hot take terus!", type: "A" },
      { text: "Baca dulu, kalau ada opinion baru tweet", type: "B" },
      { text: "RT orang yang sama pendapat", type: "C" },
      { text: "Popcorn time, tengok drama je", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Ratio ni apa feeling?",
    options: [
      { text: "Takut wei, jaga tweet!", type: "A" },
      { text: "Biasa la, part of Twitter", type: "B" },
      { text: "Kalau kena ratio, delete terus!", type: "C" },
      { text: "Tak kisah, stand by opinion", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Account Twitter kau aesthetic atau random?",
    options: [
      { text: "Aesthetic! Header, bio semua matching!", type: "A" },
      { text: "Decent la, ada effort sikit", type: "B" },
      { text: "Egg profile pic pun takpe", type: "C" },
      { text: "Private account, tak kisah look", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Kau pernah terlibat dalam Twitter war tak?",
    options: [
      { text: "Banyak kali! Fighting is my cardio!", type: "A" },
      { text: "Sekali dua, kalau topic penting", type: "B" },
      { text: "Never, aku peace lover", type: "C" },
      { text: "Tengok orang gaduh je, best!", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Quote tweet vs reply, kau prefer?",
    options: [
      { text: "QRT! Nak semua followers tengok opinion aku!", type: "A" },
      { text: "Reply dulu, kalau penting baru QRT", type: "B" },
      { text: "Like je cukup", type: "C" },
      { text: "Depends on situation", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Followers count penting tak untuk kau?",
    options: [
      { text: "Very! Nak grow sampai influencer!", type: "A" },
      { text: "Sikit je, nice to have", type: "B" },
      { text: "Tak kisah, quality over quantity", type: "C" },
      { text: "Private je, kawan close sahaja", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bila tweet kau viral, apa feeling?",
    options: [
      { text: "BEST! Pin terus, flex sikit!", type: "A" },
      { text: "Happy, tapi overwhelming", type: "B" },
      { text: "Awkward, too much attention", type: "C" },
      { text: "Takut, delete before kantoi!", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Alt account ada tak?",
    options: [
      { text: "Ada banyak! Setiap persona different account!", type: "A" },
      { text: "Satu untuk rant, satu main", type: "B" },
      { text: "Takde, satu je cukup", type: "C" },
      { text: "Ada tapi dah lupa password", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Thread panjang, kau...",
    options: [
      { text: "Buat selalu! Expert thread maker!", type: "A" },
      { text: "Baca sampai habis kalau interesting", type: "B" },
      { text: "First tweet je, malas scroll", type: "C" },
      { text: "Bookmark untuk baca later (tapi tak baca)", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Twitter Warrior",
    emoji: "⚔️",
    description: "Kau live and breathe Twitter! Hot takes ready 24/7, ratio tak takut, dan timeline kau sentiasa lit. Main character energy strong!",
    traits: ["Opinionated", "Bold", "Engaged", "Fearless"],
    strengths: ["Voice your opinion", "Building following", "Not afraid of controversy"],
    weaknesses: ["Too invested in drama", "Cancel culture victim potential", "Sleep disrupted by Twitter"],
    tips: ["Touch grass sometimes", "Not everything needs a response!"],
  },
  B: {
    type: "B",
    title: "Thoughtful Tweeter",
    emoji: "🧠",
    description: "Kau tweet dengan purpose! Pilih battle wisely, content berkualiti, dan followers respect opinion kau. Smart Twitter user!",
    traits: ["Thoughtful", "Strategic", "Respected", "Quality-focused"],
    strengths: ["Good reputation", "Meaningful engagement", "Balanced presence"],
    weaknesses: ["Sometimes too careful", "Miss viral opportunities"],
    tips: ["Keep being authentic", "Sometimes fun tweets are okay too!"],
  },
  C: {
    type: "C",
    title: "RT Machine",
    emoji: "🔄",
    description: "Kau lebih suka amplify suara orang lain! RT game strong, original tweet jarang. Curator of good content!",
    traits: ["Supportive", "Curator", "Low-key", "Appreciative"],
    strengths: ["Help others go viral", "Good taste in content", "No drama"],
    weaknesses: ["Voice not heard", "Hiding behind others"],
    tips: ["Share your thoughts too", "Your opinion matters!"],
  },
  D: {
    type: "D",
    title: "Silent Observer",
    emoji: "👁️",
    description: "Kau Twitter untuk consume content je! Rarely post, never fight, tapi tahu semua tea. Ultimate lurker mode!",
    traits: ["Observer", "Informed", "Private", "Entertained"],
    strengths: ["Know everything", "Drama-free", "Privacy protected"],
    weaknesses: ["Miss connections", "Passive experience"],
    tips: ["Engage sekali-sekala", "Twitter is better with participation!"],
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
