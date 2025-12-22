// Paraan ng Pag-move On
// Alamin kung paano ka nag-mmove on after breakup!

export const questions = [
  {
    id: 1,
    question: "Ilang araw after breakup mo bago ka nag-move on?",
    options: [
      { text: "Days lang, bilis ko mag-move on", type: "A" },
      { text: "Weeks to months, process ko muna", type: "B" },
      { text: "Months to years, matagal talaga", type: "C" },
      { text: "Wala pa akong na-move on sa lahat", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Ano ang first step mo pagkatapos ng breakup?",
    options: [
      { text: "Delete photos, block agad!", type: "A" },
      { text: "Mag-isa muna, process emotions", type: "B" },
      { text: "Iyak ng iyak, dramahan", type: "C" },
      { text: "Stalk pa rin, di ko kayang let go", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Paano mo dini-distract ang sarili mo?",
    options: [
      { text: "Work, gym, productive activities", type: "A" },
      { text: "Bonding with friends and family", type: "B" },
      { text: "Netflix, cry sessions, ice cream", type: "C" },
      { text: "Stalk ex sa social media", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Ano ang ginagawa mo sa gifts ng ex mo?",
    options: [
      { text: "Itapon o ibigay na", type: "A" },
      { text: "I-keep sa box, out of sight", type: "B" },
      { text: "Naka-display pa rin, sentimental", type: "C" },
      { text: "Treasure ko pa rin, memorabilia", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Kailan ka ready mag-date ulit?",
    options: [
      { text: "Kaagad! Marami pang iba!", type: "A" },
      { text: "After few months, pag ready na", type: "B" },
      { text: "Matagal pa, need ko mag-heal", type: "C" },
      { text: "Siya pa rin ang gusto ko", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Ano ang coping mechanism mo?",
    options: [
      { text: "Self-improvement at glow up", type: "A" },
      { text: "Therapy, journaling, healing", type: "B" },
      { text: "Iyak, hugot posts, drama", type: "C" },
      { text: "Wala, sana balikan pa kami", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Paano ka sa social media after breakup?",
    options: [
      { text: "Glow up posts, thrive mode", type: "A" },
      { text: "Low-key, minimal posts", type: "B" },
      { text: "Hugot posts, sad quotes", type: "C" },
      { text: "Check ex's profile always", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Kapag naalala mo ang ex, ano reaction mo?",
    options: [
      { text: "Move on na, past is past", type: "A" },
      { text: "May lungkot pero okay na", type: "B" },
      { text: "Masakit pa rin, nakakaiyak", type: "C" },
      { text: "Miss ko pa rin siya sobra", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Ano ang ginagawa mo sa shared playlists?",
    options: [
      { text: "Delete lahat, new playlist", type: "A" },
      { text: "Keep pero di na pinapakinggan", type: "B" },
      { text: "Paulit-ulit ko pa rin pinapakinggan", type: "C" },
      { text: "Nag-aantay pa rin ng balik", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Paano mo sinasabi sa iba na break na kayo?",
    options: [
      { text: "Chill lang, 'Single na ako, available!'", type: "A" },
      { text: "Honest pero composed, 'We broke up'", type: "B" },
      { text: "Emotional, umiiyak pa habang nag-kwento", type: "C" },
      { text: "Sana temporary lang, baka balikan", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Kapag nag-reach out ang ex mo, ano reaction mo?",
    options: [
      { text: "Seen lang o di ako sumasagot", type: "A" },
      { text: "Civil reply pero boundaries", type: "B" },
      { text: "Mixed emotions, confused ako", type: "C" },
      { text: "Excited! Baka may chance pa!", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Ano ang biggest lesson mo sa breakup?",
    options: [
      { text: "Growth at self-love muna", type: "A" },
      { text: "Learn and improve sa next", type: "B" },
      { text: "Love hurts talaga", type: "C" },
      { text: "Wala, sana bumalik pa siya", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Quick Mover",
    emoji: "🚀",
    description: "Ikaw ay mabilis mag-move on! After breakup, forward ka agad sa next chapter ng buhay mo. Strong ang self-confidence mo at hindi ka nag-dwdwell sa past. Focus mo ay sa self-improvement at sa future. Independent ka at alam mo ang worth mo!",
    traits: ["Fast", "Strong", "Independent", "Forward-thinking"],
    strengths: [
      "Quick recovery",
      "Focus sa self-growth",
      "Positive mindset"
    ],
    weaknesses: [
      "Minsan too fast, di nag-process properly",
      "Baka nag-rebound",
      "Hindi natututunan ang lessons"
    ],
    tips: [
      "Allow yourself to grieve din",
      "Process emotions properly",
      "Learn before moving to next"
    ],
  },
  B: {
    type: "B",
    title: "Gradual Healer",
    emoji: "🌱",
    description: "Ikaw ay healthy mag-move on! Binibigyan mo ng time ang sarili mo to heal at process emotions. Balanced ang approach mo between moving forward at learning from past. Mature ka at alam mo ang importance ng closure at healing.",
    traits: ["Balanced", "Mature", "Reflective", "Healthy"],
    strengths: [
      "Proper healing process",
      "Learns from experience",
      "Emotional maturity"
    ],
    weaknesses: [
      "Minsan over-analyzing",
      "Takes time bago fully move on"
    ],
    tips: [
      "Trust your healing process",
      "Don't rush pero don't linger too long",
      "Keep moving forward"
    ],
  },
  C: {
    type: "C",
    title: "Slow Griever",
    emoji: "💔",
    description: "Ikaw ay matagal mag-move on! Deep ka mag-feel ng emotions at mahirap sa iyo mag-let go. Sentimental ka at nag-hold on sa memories. Need mo ng maraming time at support to heal. Okay lang yan, valid ang feelings mo!",
    traits: ["Emotional", "Sentimental", "Deep", "Sensitive"],
    strengths: [
      "Deep emotional capacity",
      "Values relationships",
      "Loyal sa feelings"
    ],
    weaknesses: [
      "Too attached sa past",
      "Slow healing process",
      "May tendency to be stuck"
    ],
    tips: [
      "Seek support from friends/family",
      "Allow yourself to move forward",
      "Focus on present, not past"
    ],
  },
  D: {
    type: "D",
    title: "Eternal Hoper",
    emoji: "🕰️",
    description: "Ikaw ay hindi pa talaga nag-mmove on! May hope ka pa rin na may chance pa kayo. Mahirap sa iyo tanggapin ang reality ng breakup. Need mo ng closure at acceptance. Time to let go na at focus sa sarili mo.",
    traits: ["Hopeful", "Attached", "Nostalgic", "In-denial"],
    strengths: [
      "Loyal sa feelings",
      "Hopeful perspective",
      "Values relationships deeply"
    ],
    weaknesses: [
      "Di maka-move on",
      "Living in the past",
      "Hinders personal growth"
    ],
    tips: [
      "Accept the reality",
      "Seek closure",
      "Focus on yourself and future",
      "Consider talking to someone"
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
