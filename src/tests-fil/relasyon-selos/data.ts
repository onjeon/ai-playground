// Paraan ng Pagseselos
// Alamin kung gaano ka ka-jealous at paano mo ito pinakikita!

export const questions = [
  {
    id: 1,
    question: "Kapag nakita mong nag-uusap ang partner mo sa attractive na tao, ano ang reaction mo?",
    options: [
      { text: "Agad akong lumapit at sumali sa conversation", type: "A" },
      { text: "Observe lang muna, check kung may mali", type: "B" },
      { text: "Hindi ako secure, pero di ko pinapakita", type: "C" },
      { text: "Okay lang, trust naman ako", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Paano mo sinusubaybayan ang social media ng partner mo?",
    options: [
      { text: "Active, lahat ng like at comment ko alam", type: "A" },
      { text: "Check ko minsan, casual lang", type: "B" },
      { text: "Stalker mode pero di niya alam", type: "C" },
      { text: "Hindi ko chincheck, privacy niya yun", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Kapag late mag-reply ang partner mo, ano ang isip mo?",
    options: [
      { text: "May kausap siguro siya, sino yun?", type: "A" },
      { text: "Busy lang siguro, ask ko later", type: "B" },
      { text: "Nag-aalala ako pero di ko sinasabi", type: "C" },
      { text: "Chill lang, may buhay din siya", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Ano ang ginagawa mo kapag nagseselos ka?",
    options: [
      { text: "Sinasabi ko agad, usap tayo", type: "A" },
      { text: "Nagtatanong ako ng hints", type: "B" },
      { text: "Tahimik pero obvious sa actions", type: "C" },
      { text: "Rarely ako nagseselos", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Kapag may nag-like sa pictures ng partner mo, ano reaction mo?",
    options: [
      { text: "Check ko kung sino, stalk mode", type: "A" },
      { text: "Notice ko pero di ko big deal", type: "B" },
      { text: "Bothered ako pero di ko sinasabi", type: "C" },
      { text: "Normal lang yun, social media naman", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Paano mo kinokontrol ang jealousy mo?",
    options: [
      { text: "Hindi ko kino-control, nilalabas ko", type: "A" },
      { text: "Pinapakalma ko sarili ko, think muna", type: "B" },
      { text: "Kinikimkim ko, passive-aggressive", type: "C" },
      { text: "Wala naman ako gaanong selos", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Kapag may ex na nag-message sa partner mo, ano gagawin mo?",
    options: [
      { text: "Dapat malaman ko ang content!", type: "A" },
      { text: "Ask ko siya kung ano yun", type: "B" },
      { text: "Di ko tatanungin pero bothered ako", type: "C" },
      { text: "Okay lang, trust ko naman siya", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Gaano ka-comfortable na mag-isa ang partner mo sa lakad?",
    options: [
      { text: "Dapat may update ako palagi", type: "A" },
      { text: "Okay lang pero sana may message minsan", type: "B" },
      { text: "Parang okay pero nag-aalala ako", type: "C" },
      { text: "No problem, may sarili siyang buhay", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Kapag nag-kwento ang partner mo tungkol sa ibang tao, ano reaction mo?",
    options: [
      { text: "Maraming tanong, sino ba yan?", type: "A" },
      { text: "Nag-lilistening pero may mental notes", type: "B" },
      { text: "Parang okay pero naiinggit ako", type: "C" },
      { text: "Masaya ako na may iba siyang ka-bonding", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Paano mo sinasabi ang jealousy mo?",
    options: [
      { text: "Direct, 'Nagseselos ako!'", type: "A" },
      { text: "Mahinahon, 'May tanong lang ako...'", type: "B" },
      { text: "Hindi verbal, sa body language", type: "C" },
      { text: "Rarely ko kailangan sabihin", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Ano ang trigger point ng jealousy mo?",
    options: [
      { text: "Lahat ng may interaction sa partner ko", type: "A" },
      { text: "Pag may questionable behavior", type: "B" },
      { text: "Pag napapansin ko may change", type: "C" },
      { text: "Rarely ako na-trigger", type: "D" },
    ],
  },
  {
    id: 12,
    question: "After ng jealousy episode, ano ang next step mo?",
    options: [
      { text: "Usap at clear boundaries", type: "A" },
      { text: "Reflection tapos calm discussion", type: "B" },
      { text: "Move on pero di nakakalimutan", type: "C" },
      { text: "Wala kasi rare lang ako magse-selos", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Possessive Type",
    emoji: "🔥",
    description: "Ikaw ay very vocal at expressive ng jealousy mo! Hindi mo kinikimkim ang nararamdaman mo at gusto mong clear ang lahat. Protective ka sa relationship at assertive sa boundaries. May tendency ka maging possessive pero honest ka naman sa feelings mo.",
    traits: ["Possessive", "Vocal", "Protective", "Direct"],
    strengths: [
      "Clear communication",
      "Hindi plastic, honest sa feelings",
      "Protective sa relationship"
    ],
    weaknesses: [
      "Minsan too controlling",
      "May trust issues",
      "Nakaka-suffocate sa partner"
    ],
    tips: [
      "Work on trust issues",
      "Give partner some breathing room",
      "Channel jealousy constructively"
    ],
  },
  B: {
    type: "B",
    title: "Cautious Guardian",
    emoji: "⚖️",
    description: "Ikaw ay may healthy level ng jealousy! Marunong ka mag-balance between trusting at vigilant. Hindi ka over the top pero aware ka naman sa surroundings. Mature ang approach mo sa jealousy at marunong ka mag-communicate properly.",
    traits: ["Balanced", "Observant", "Mature", "Communicative"],
    strengths: [
      "Healthy boundaries",
      "Good communication",
      "Rational approach"
    ],
    weaknesses: [
      "Minsan over-analyzing",
      "May slight paranoia"
    ],
    tips: [
      "Trust your instincts but verify",
      "Don't overthink small things",
      "Keep communication open"
    ],
  },
  C: {
    type: "C",
    title: "Silent Worrier",
    emoji: "😔",
    description: "Ikaw ay tahimik na nag-seselos! Hindi mo sinasabi pero obvious sa actions mo. May tendency ka mag-bottle up ng feelings at maging passive-aggressive. Insecure ka but you try to hide it. Need mo matutong mag-express ng proper way.",
    traits: ["Silent", "Passive-aggressive", "Insecure", "Withdrawn"],
    strengths: [
      "Hindi confrontational",
      "Nag-iisip bago kumilos",
      "Subtle sa approach"
    ],
    weaknesses: [
      "Poor communication",
      "Bottled up emotions",
      "Passive-aggressive behavior"
    ],
    tips: [
      "Learn to express feelings properly",
      "Talk it out instead of sulking",
      "Work on self-confidence"
    ],
  },
  D: {
    type: "D",
    title: "Secure Partner",
    emoji: "😌",
    description: "Ikaw ay secure at trusting sa relationship! Rare ka mag-selos at chill lang ang approach mo. May strong sense of trust ka at confident sa sarili mo at sa partner mo. Healthy ang mindset mo about relationships at ayaw mo ng drama.",
    traits: ["Secure", "Trusting", "Confident", "Chill"],
    strengths: [
      "Strong self-confidence",
      "Healthy trust levels",
      "No drama approach"
    ],
    weaknesses: [
      "Minsan too trusting",
      "Baka hindi mo napapansin ang red flags"
    ],
    tips: [
      "Stay aware pero don't be paranoid",
      "Keep the healthy balance",
      "Validate your feelings when they arise"
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
