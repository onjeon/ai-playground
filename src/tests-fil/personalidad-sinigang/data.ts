// Personalidad sa Sinigang
// Alamin kung gaano ka ka-asim sa buhay!

export const questions = [
  {
    id: 1,
    question: "Anong level ng asim ang gusto mo sa sinigang?",
    options: [
      { text: "Sobrang asim, pampagising!", type: "A" },
      { text: "Tamang asim lang, balanced", type: "B" },
      { text: "Medyo maasim, may kick", type: "C" },
      { text: "Bahagyang asim lang", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Kapag may nakakainis sa iyo, ano ang reaction mo?",
    options: [
      { text: "Direkta kong sinasabi ang nararamdaman ko", type: "A" },
      { text: "Kinakausap ko ng mahinahon", type: "B" },
      { text: "Pinapakita ko sa actions pero di ko sinasabi", type: "C" },
      { text: "Pinabayaan ko na lang", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Anong pampaasim ang preferred mo sa sinigang?",
    options: [
      { text: "Sampalok - classic at matapang", type: "A" },
      { text: "Sinigang mix - balanced at convenient", type: "B" },
      { text: "Kamias o bayabas - may sariling character", type: "C" },
      { text: "Calamansi - light lang", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Sa social media, ano ang post mo usually?",
    options: [
      { text: "Mga rants at strong opinions", type: "A" },
      { text: "Balanced mix ng lahat", type: "B" },
      { text: "Subtle hints at may hugot", type: "C" },
      { text: "Puro happy vibes lang", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Anong gulay ang dapat sa sinigang mo?",
    options: [
      { text: "Maraming gulay, para may substance", type: "A" },
      { text: "Standard lang - kangkong, sitaw, labanos", type: "B" },
      { text: "Yung mga unusual tulad ng okra at gabi", type: "C" },
      { text: "Konti lang, focus sa sabaw", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Paano mo hinahandle ang conflicts?",
    options: [
      { text: "Head-on, agad kong kinoconfront", type: "A" },
      { text: "Diplomatic approach, usap tayo", type: "B" },
      { text: "Passive-aggressive mode", type: "C" },
      { text: "Avoid na lang, ayoko ng gulo", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Anong karne ang bet mo sa sinigang?",
    options: [
      { text: "Baboy - rich at matapang ang lasa", type: "A" },
      { text: "Hipon o bangus - classic at favorite ng lahat", type: "B" },
      { text: "Baka o pata - iba pero masarap", type: "C" },
      { text: "Kahit ano basta may laman", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Kapag stressed ka, ano ang coping mechanism mo?",
    options: [
      { text: "Intense workout o aggressive activities", type: "A" },
      { text: "Talk to friends and family", type: "B" },
      { text: "Mag-isa lang, process ko muna", type: "C" },
      { text: "Tulog at Netflix", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Ano ang opinion mo sa patis sa sinigang?",
    options: [
      { text: "Essential! Para mas may lasa", type: "A" },
      { text: "Okay lang, pwede naman", type: "B" },
      { text: "Depende sa mood", type: "C" },
      { text: "Hindi na kailangan", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Sa group chat, ano ang role mo?",
    options: [
      { text: "Yung palaging may say sa lahat", type: "A" },
      { text: "Active participant, sumasagot pag need", type: "B" },
      { text: "Seen lang, react pag interesting", type: "C" },
      { text: "Laging naka-mute", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Paano mo gustong kainin ang sinigang?",
    options: [
      { text: "Mainit at bagong luto, puno ng sabaw", type: "A" },
      { text: "Kasama ng kanin at iba pang ulam", type: "B" },
      { text: "Late night meal, comfort food", type: "C" },
      { text: "Anytime, hindi pa picky", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Ano ang ideal temperature ng sinigang para sa iyo?",
    options: [
      { text: "Sobrang init, singaw pa!", type: "A" },
      { text: "Mainit pero hindi nakakapaso", type: "B" },
      { text: "Warm lang, chill", type: "C" },
      { text: "Okay lang kahit medyo malamig na", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Sobrang Asim na Sinigang",
    emoji: "🔥",
    description: "Ikaw ay intense at matapang! Hindi ka tumatakbo sa confrontation at direkta kang nagsasalita ng nararamdaman mo. May strong personality ka at alam mo kung ano ang gusto mo. Passionate ka sa lahat ng bagay.",
    traits: ["Direkta", "Matapang", "Passionate", "Intense"],
    strengths: [
      "Clear sa communication",
      "Hindi takot ipaglaban ang tama",
      "Strong leadership qualities"
    ],
    weaknesses: [
      "Minsan too aggressive",
      "Baka ma-offend ang iba sa directness"
    ],
    tips: [
      "Balance ang intensity with diplomacy",
      "Listen more, talk less minsan"
    ],
  },
  B: {
    type: "B",
    title: "Balanced na Sinigang",
    emoji: "⚖️",
    description: "Ikaw ay well-balanced at diplomatic. Alam mong mag-adjust sa situation at maintain good relationships. Reasonable ka at considerate sa feelings ng iba. Peace maker ka ng grupo.",
    traits: ["Balanced", "Diplomatic", "Reasonable", "Considerate"],
    strengths: [
      "Good mediator sa conflicts",
      "Easy to work with",
      "Maintains harmony"
    ],
    weaknesses: [
      "Minsan people pleaser",
      "Nahihirapan mag-decide kung may conflict"
    ],
    tips: [
      "Stand up for yourself din minsan",
      "Okay lang hindi maging liked ng lahat"
    ],
  },
  C: {
    type: "C",
    title: "May Kick na Sinigang",
    emoji: "😏",
    description: "Ikaw ay may subtle intensity. Hindi mo direktang sinasabi pero alam ng tao kung may nararamdaman ka. May mysterious side ka at selective kung sino ang pinakikitaan ng true self mo. Unique ang personality mo.",
    traits: ["Subtle", "Mysterious", "Selective", "Unique"],
    strengths: [
      "Good at reading people",
      "Interesting personality",
      "Loyal sa pinili mong circle"
    ],
    weaknesses: [
      "Minsan misunderstood",
      "Mahirap basahin ng iba"
    ],
    tips: [
      "Express yourself more clearly",
      "Open up to people you trust"
    ],
  },
  D: {
    type: "D",
    title: "Mild na Sinigang",
    emoji: "☺️",
    description: "Ikaw ay chill at easy-going. Ayaw mo ng drama at confrontation. Prefer mo ang peaceful existence at positive vibes lang. Go with the flow ka at hindi ka judgemental sa iba.",
    traits: ["Chill", "Peaceful", "Easy-going", "Positive"],
    strengths: [
      "Walang drama sa buhay",
      "Easy to be around",
      "Stress-free living"
    ],
    weaknesses: [
      "Minsan too passive",
      "Hindi assertive sa needs"
    ],
    tips: [
      "Learn to assert yourself",
      "Okay lang mag-speak up kung needed"
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
