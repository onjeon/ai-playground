// Gaya Email Kerja Kau
// What's your work email personality?

export const questions = [
  {
    id: 1,
    question: "Email greeting kau biasanya macam mana?",
    options: [
      { text: "Dear Mr/Ms [Nama], Hope this email finds you well...", type: "A" },
      { text: "Hi [Nama], Trust you're doing great!", type: "B" },
      { text: "Hi all / Hey team", type: "C" },
      { text: "Bro / Sis (internal je la)", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Panjang email kau biasanya...",
    options: [
      { text: "Essay - cover semua detail!", type: "A" },
      { text: "Medium - cukup context dan action items", type: "B" },
      { text: "Short and sweet - to the point", type: "C" },
      { text: "One liner je, sometimes emoji", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bila receive email panjang, kau...",
    options: [
      { text: "Baca semua dengan teliti", type: "A" },
      { text: "Scan untuk key points", type: "B" },
      { text: "Baca first and last paragraph je", type: "C" },
      { text: "TLDR please!", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Response time email kau biasanya...",
    options: [
      { text: "Within 30 minit - inbox zero goal!", type: "A" },
      { text: "Same day kalau important", type: "B" },
      { text: "1-2 hari, depends urgency", type: "C" },
      { text: "Bila teringat atau kena chase", type: "D" },
    ],
  },
  {
    id: 5,
    question: "CC boss dalam email, kau...",
    options: [
      { text: "Always - transparency important!", type: "A" },
      { text: "Bila perlu je, strategic sikit", type: "B" },
      { text: "Jarang, unless kena", type: "C" },
      { text: "Avoid - takut kena tanya balik", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Email signature kau macam mana?",
    options: [
      { text: "Full details - title, number, LinkedIn, quote", type: "A" },
      { text: "Standard - nama, position, number", type: "B" },
      { text: "Minimal - nama je cukup", type: "C" },
      { text: "Thanks, [Nama] - simple", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bila kena hantar email sensitive...",
    options: [
      { text: "Draft, review 5 kali, minta orang check", type: "A" },
      { text: "Careful dengan wording, double check", type: "B" },
      { text: "Tulis, baca sekali, send!", type: "C" },
      { text: "Hantar je, fix later kalau ada issue", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Subject line email kau...",
    options: [
      { text: "Super specific dengan date dan action", type: "A" },
      { text: "Clear dan descriptive", type: "B" },
      { text: "Generic - 'Update' atau 'FYI'", type: "C" },
      { text: "RE: RE: RE: RE: (chain terus)", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Friday petang, urgent email masuk. Kau...",
    options: [
      { text: "Reply terus, kerja tak kenal waktu!", type: "A" },
      { text: "Reply ringkas, full reply Monday", type: "B" },
      { text: "Acknowledge je, settle Monday", type: "C" },
      { text: "Monday's problem, laptop dah tutup", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Ending email kau biasanya...",
    options: [
      { text: "Best regards / Warm regards", type: "A" },
      { text: "Thanks / Thank you", type: "B" },
      { text: "Cheers / Regards", type: "C" },
      { text: "TQ / Tks (shortform king)", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Corporate Email Pro",
    emoji: "📧",
    description: "Email kau boleh submit untuk corporate communication award! Formal, proper, dan professional sampai orang baca pun rasa macam interview!",
    traits: ["Super formal", "Detail-oriented", "Professional AF", "Documentation master"],
    strengths: ["Safe untuk external stakeholders", "Paper trail champion", "Never get in trouble"],
    weaknesses: ["Takes too long to write", "May seem robotic", "Overkill untuk internal"],
    tips: ["Relax sikit untuk internal emails", "Not everything needs formality"],
  },
  B: {
    type: "B",
    title: "Balanced Communicator",
    emoji: "⚖️",
    description: "Kau tahu bila nak formal, bila nak casual. Email game on point! Professional tapi still ada personality!",
    traits: ["Adaptable tone", "Clear communicator", "Efficient", "Professional yet personable"],
    strengths: ["Versatile style", "Respected by all levels", "Effective communication"],
    weaknesses: ["Sometimes overthink tone", "May code-switch too much"],
    tips: ["Consistency pun bagus", "Trust your instinct on tone"],
  },
  C: {
    type: "C",
    title: "Minimalist Mailer",
    emoji: "📝",
    description: "Less is more - philosophy email kau. Straight to the point, no fluff. Orang baca dalam 5 saat dah faham!",
    traits: ["Efficient", "Direct", "No-nonsense", "Time-saver"],
    strengths: ["Fast to write dan read", "Clear action items", "Appreciated by busy people"],
    weaknesses: ["May seem cold atau rude", "Missing context sometimes"],
    tips: ["Add sikit warmth untuk relationship building", "Some situations need more detail"],
  },
  D: {
    type: "D",
    title: "Casual Email Rebel",
    emoji: "😎",
    description: "Email formal? What's that? Kau buat office communication rasa macam WhatsApp chat. Living on the edge!",
    traits: ["Super casual", "Fast responder (when you want)", "Informal king/queen", "Shortform enthusiast"],
    strengths: ["Quick communication", "Approachable vibe", "Save typing energy"],
    weaknesses: ["May not suit all audiences", "Documentation nightmare", "HR might not appreciate"],
    tips: ["Know your audience", "Formal skills still needed for external"],
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
