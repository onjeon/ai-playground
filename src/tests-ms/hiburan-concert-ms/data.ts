// Gaya Di Concert
// Test viral tentang concert going behavior

export const questions = [
  {
    id: 1,
    question: "Tiket concert keluar, kau...",
    options: [
      { text: "Queue dari first minute! Must get!", type: "A" },
      { text: "Try nak dapat, if tak jadi takpe", type: "B" },
      { text: "Wait for resale/second wave", type: "C" },
      { text: "Tak pergi concert sangat", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Zone tiket kau usually?",
    options: [
      { text: "VIP/SVIP! Closest to artist!", type: "A" },
      { text: "Standing, reasonable price", type: "B" },
      { text: "Seated, nak comfortable", type: "C" },
      { text: "Whatever available", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Concert preparation kau?",
    options: [
      { text: "Outfits, banners, lightstick ready!", type: "A" },
      { text: "Casual outfit, phone charged", type: "B" },
      { text: "Just show up", type: "C" },
      { text: "What preparation?", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Queue masuk venue, kau...",
    options: [
      { text: "Hours early! Best spot important!", type: "A" },
      { text: "Reasonable time, 1-2 hours before", type: "B" },
      { text: "On time je", type: "C" },
      { text: "Fashionably late", type: "D" },
    ],
  },
  {
    id: 5,
    question: "During concert, kau...",
    options: [
      { text: "Scream, dance, full energy!", type: "A" },
      { text: "Sing along, enjoy vibes", type: "B" },
      { text: "Watch mostly, occasional singalong", type: "C" },
      { text: "Record everything for socmed", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Fanchants dan cheering?",
    options: [
      { text: "Know semua! Lead the crowd!", type: "A" },
      { text: "Join bila tahu", type: "B" },
      { text: "Listen je, tak hafal", type: "C" },
      { text: "What's a fanchant?", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Concert merch, kau beli tak?",
    options: [
      { text: "Semua! Lightstick, shirt, everything!", type: "A" },
      { text: "Selected items je", type: "B" },
      { text: "Maybe one souvenir", type: "C" },
      { text: "Tak beli, expensive", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Post-concert feeling?",
    options: [
      { text: "High for days! Best night ever!", type: "A" },
      { text: "Happy, good memories", type: "B" },
      { text: "Penat but worth it", type: "C" },
      { text: "Okay je, move on", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Concert buddies kau?",
    options: [
      { text: "My fandom friends! We plan together!", type: "A" },
      { text: "Close friends yang sama taste", type: "B" },
      { text: "Pergi solo pun okay", type: "C" },
      { text: "Whoever wants to go", type: "D" },
    ],
  },
  {
    id: 10,
    question: "How many concerts setahun?",
    options: [
      { text: "5+! Semua artist nak pergi!", type: "A" },
      { text: "2-3, selected favorites", type: "B" },
      { text: "1 maybe, bila ada chance", type: "C" },
      { text: "Rarely, maybe never", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Concert Pro",
    emoji: "🎤",
    description: "Kau seasoned concert-goer! Know all the tricks, prepared for every show, live for live performances. Concert is LIFE!",
    traits: ["Passionate", "Prepared", "Energetic", "Dedicated fan"],
    strengths: ["Best concert experience", "Know what to do", "Support artists"],
    weaknesses: ["Spend a lot on concerts", "Post-concert depression"],
    tips: ["Budget wisely", "Not every concert is worth VIP!"],
  },
  B: {
    type: "B",
    title: "Casual Concert-Goer",
    emoji: "🎵",
    description: "Kau enjoy concerts dengan moderate! Go for favorites, have fun, no extreme preparation. Balance between fan and normal life!",
    traits: ["Balanced", "Enjoyable", "Selective", "Fun"],
    strengths: ["Healthy relationship with concerts", "Enjoy without stress", "Budget-conscious"],
    weaknesses: ["Might miss some experiences", "Less intense"],
    tips: ["Sometimes go all out", "VIP once in a while is worth it!"],
  },
  C: {
    type: "C",
    title: "Chill Audience",
    emoji: "🎧",
    description: "Kau go concert untuk music! Not about the screaming or fanchants, just appreciate live performance. Music purist!",
    traits: ["Music-focused", "Calm", "Appreciative", "Reserved"],
    strengths: ["Actually listen to music", "Comfortable experience", "Not exhausting"],
    weaknesses: ["Miss fan experience", "Might seem less enthusiastic"],
    tips: ["Let loose sometimes", "Concert energy is part of it!"],
  },
  D: {
    type: "D",
    title: "Rare Attendee",
    emoji: "🎟️",
    description: "Concerts not really your thing! Maybe prefer streaming or smaller gigs. The crowd and chaos not appealing!",
    traits: ["Independent", "Different preferences", "Selective", "Low-key"],
    strengths: ["Save money", "No FOMO", "Other interests"],
    weaknesses: ["Miss live experiences", "Out of loop"],
    tips: ["One good concert might change your mind", "Try it!"],
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
