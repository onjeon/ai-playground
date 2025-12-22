// Gaya Gaduh Dengan Partner
// Macam mana kau handle conflict dalam relationship?

import { TestData } from "../../types";

const data: TestData = {
  id: "cinta-arguments-ms",
  title: "Gaya Gaduh Dengan Partner",
  description: "Semua couple ada gaduh. Tapi cara handle tu yang penting! Kau jenis yang cool ke explosive?",
  category: "cinta",
  emoji: "💢",
  color: "#EF4444",
  questions: [
    {
      id: 1,
      question: "Partner buat kau marah. First response kau?",
      options: [
        { text: "Terus confront, voice out immediately", type: "A" },
        { text: "Cool down dulu, then talk", type: "B" },
        { text: "Silent treatment, biar dia sedar", type: "C" },
        { text: "Avoid je, hope it goes away", type: "D" },
      ],
    },
    {
      id: 2,
      question: "Tengah gaduh, kau jenis?",
      options: [
        { text: "Loud dan expressive, semua keluar", type: "A" },
        { text: "Calm tapi firm, state my point", type: "B" },
        { text: "Senyap, internal seething", type: "C" },
        { text: "Mengalah je, taknak prolong", type: "D" },
      ],
    },
    {
      id: 3,
      question: "Partner raise voice kat kau. Response?",
      options: [
        { text: "Raise voice balik, match energy", type: "A" },
        { text: "Stay calm, refuse to escalate", type: "B" },
        { text: "Walk away, tak layan", type: "C" },
        { text: "Cry atau shut down", type: "D" },
      ],
    },
    {
      id: 4,
      question: "Siapa yang usually apologize dulu?",
      options: [
        { text: "Depends who's wrong, fair je", type: "A" },
        { text: "Me usually, to keep peace", type: "B" },
        { text: "Them, I wait for apology", type: "C" },
        { text: "Both avoid until it blows over", type: "D" },
      ],
    },
    {
      id: 5,
      question: "Kau bring up past issues dalam argument?",
      options: [
        { text: "Yes, if relevant to the pattern", type: "A" },
        { text: "Try not to, focus on current issue", type: "B" },
        { text: "Sometimes, when really angry", type: "C" },
        { text: "Avoid, makes things worse", type: "D" },
      ],
    },
    {
      id: 6,
      question: "After a big fight, kau?",
      options: [
        { text: "Want to talk it out immediately", type: "A" },
        { text: "Need some space, then discuss", type: "B" },
        { text: "Silent for days before okay", type: "C" },
        { text: "Pretend nothing happened", type: "D" },
      ],
    },
    {
      id: 7,
      question: "Partner tak faham point kau. Kau?",
      options: [
        { text: "Repeat louder dan dengan more emotion", type: "A" },
        { text: "Try explain differently, find new words", type: "B" },
        { text: "Give up explaining, they'll never get it", type: "C" },
        { text: "Just agree dengan mereka je", type: "D" },
      ],
    },
    {
      id: 8,
      question: "Gaduh pasal same issue berulang kali. Thoughts?",
      options: [
        { text: "Frustrating! Need to solve permanently", type: "A" },
        { text: "Maybe need different approach", type: "B" },
        { text: "This is who they are, accept or leave", type: "C" },
        { text: "Avoid topic altogether", type: "D" },
      ],
    },
    {
      id: 9,
      question: "Kau rasa guilty lepas gaduh?",
      options: [
        { text: "Only if I was actually wrong", type: "A" },
        { text: "Yes, even if not entirely my fault", type: "B" },
        { text: "Rarely, I fight fair", type: "C" },
        { text: "Always, hate conflict", type: "D" },
      ],
    },
    {
      id: 10,
      question: "Make up after fight - how?",
      options: [
        { text: "Talk it all out, clear the air", type: "A" },
        { text: "Apologize dan hug it out", type: "B" },
        { text: "Act normal, time heals", type: "C" },
        { text: "Extra nice, overcompensate", type: "D" },
      ],
    },
  ],
  results: {
    A: {
      type: "A",
      title: "The Direct Fighter",
      emoji: "🔥",
      description: "Kau head-on bila gaduh! Express everything, tak simpan dalam hati. Loud, passionate, dan nak resolve terus. Good for not bottling up, tapi can be intense.",
      traits: ["Direct", "Expressive", "Passionate", "Confrontational"],
      strengths: ["Clear communication", "Don't hold grudges", "Issues get addressed"],
      weaknesses: ["Can escalate quickly", "Might say things you regret", "Partner might feel attacked"],
      tips: ["Count to 10 before responding", "Lower volume, keep message"],
    },
    B: {
      type: "B",
      title: "The Calm Negotiator",
      emoji: "🕊️",
      description: "Kau cool-headed dalam conflict! Stay calm, discuss rationally, dan cari solution. Mature approach yang help resolve issues without drama.",
      traits: ["Calm", "Rational", "Solution-focused", "Patient"],
      strengths: ["Productive arguments", "Partner feels heard", "Find real solutions"],
      weaknesses: ["Might suppress true emotions", "Can seem cold"],
      tips: ["It's okay to show emotions", "Don't be too logical about feelings"],
    },
    C: {
      type: "C",
      title: "The Silent Treatment",
      emoji: "🤐",
      description: "Bila gaduh, kau go silent. Withdraw, process internally, dan expect partner to figure out what's wrong. Can be effective space, tapi communication crucial.",
      traits: ["Reserved", "Internal processor", "Withdrawing", "Passive"],
      strengths: ["Avoid saying hurtful things", "Take time to think", "Controlled response"],
      weaknesses: ["Partner feels shut out", "Issues stay unresolved", "Builds resentment"],
      tips: ["Communicate even if briefly", "Say 'I need space' instead of disappearing"],
    },
    D: {
      type: "D",
      title: "The Conflict Avoider",
      emoji: "🏃",
      description: "Kau hate conflict! Prefer to avoid, agree, atau wait it out. Peace at all costs. But careful - unresolved issues build up!",
      traits: ["Avoidant", "Peace-seeking", "Accommodating", "Non-confrontational"],
      strengths: ["Low drama", "Flexible", "Don't sweat small stuff"],
      weaknesses: ["Issues never resolved", "Partner might not know there's problem", "Resentment builds"],
      tips: ["Some conflict is healthy", "Voice your needs", "Small talks prevent big blows"],
    },
  },
};

export default data;
