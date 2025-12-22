// Gaya Email Kerja Kamu
// Tes ini mengungkap style email kamu di dunia kerja!

export const questions = [
  {
    id: 1,
    question: "Subject line email kamu biasanya...",
    options: [
      { text: "Direct dan actionable: '[Action Req] Q3 Report'", type: "A" },
      { text: "Descriptive: 'Quarterly Report Update - September'", type: "B" },
      { text: "Casual: 'Quick question!'", type: "C" },
      { text: "Minimal: 'Hi' atau kosong", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Opening email kamu biasanya...",
    options: [
      { text: "Langsung ke point: 'Regarding X...'", type: "A" },
      { text: "Proper greeting: 'Dear X, Hope this email...'", type: "B" },
      { text: "Friendly: 'Hi! How's it going?'", type: "C" },
      { text: "Depends on who I'm emailing", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Email length kamu typically...",
    options: [
      { text: "Short dan punchy, bullet points", type: "A" },
      { text: "Comprehensive dengan context", type: "B" },
      { text: "Conversational, like chatting", type: "C" },
      { text: "As short as possible", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Response time untuk email...",
    options: [
      { text: "Within hours, super responsive", type: "A" },
      { text: "Same day untuk important ones", type: "B" },
      { text: "When I get to it", type: "C" },
      { text: "Email anxiety, delay as long as possible", type: "D" },
    ],
  },
  {
    id: 5,
    question: "CC/BCC usage kamu...",
    options: [
      { text: "Strategic, CYA when needed", type: "A" },
      { text: "Appropriate stakeholders only", type: "B" },
      { text: "Minimal, direct communication", type: "C" },
      { text: "CC everyone, play safe", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Email signature kamu...",
    options: [
      { text: "Professional: name, title, contact, company", type: "A" },
      { text: "Standard dengan links/info", type: "B" },
      { text: "Minimal atau fun quote", type: "C" },
      { text: "Just my name", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Following up on unanswered email...",
    options: [
      { text: "Prompt follow-up dengan deadline", type: "A" },
      { text: "Polite reminder after reasonable time", type: "B" },
      { text: "Casual bump: 'Hey, just checking!'", type: "C" },
      { text: "Wait longer atau find other way", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Saat dapat email yang bikin annoyed...",
    options: [
      { text: "Reply professionally, address issue directly", type: "A" },
      { text: "Draft, wait, review, then send", type: "B" },
      { text: "Vent to colleague first, then reply nicely", type: "C" },
      { text: "Delay reply sampai calm down", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Email formatting preferences...",
    options: [
      { text: "Structured: headers, bullets, bold", type: "A" },
      { text: "Clean paragraphs, easy to read", type: "B" },
      { text: "Casual, like a message", type: "C" },
      { text: "Plain text, no fuss", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Inbox management...",
    options: [
      { text: "Zero inbox, folders, labels", type: "A" },
      { text: "Organized, regular clean-up", type: "B" },
      { text: "Somewhat organized", type: "C" },
      { text: "Chaos, thousands unread", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Saat perlu deliver bad news via email...",
    options: [
      { text: "Clear dan direct, rip the bandaid", type: "A" },
      { text: "Balanced: context, news, next steps", type: "B" },
      { text: "Soften it dengan empathy", type: "C" },
      { text: "Maybe should be a call instead?", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Email pet peeve terbesar...",
    options: [
      { text: "Long rambling emails tanpa point", type: "A" },
      { text: "Missing information, vague requests", type: "B" },
      { text: "Cold, impersonal tone", type: "C" },
      { text: "Email itself, prefer other channels", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Email Executive",
    emoji: "📧",
    description: "Kamu adalah email power user! Efficient, professional, dan get things done via email. Your emails are clear, actionable, dan command respect.",
    traits: ["Efficient", "Direct", "Professional", "Organized"],
    strengths: ["Clear communication", "Quick responses", "Gets results"],
    weaknesses: ["May seem cold", "Too direct sometimes", "Expect same from others"],
    tips: ["Add warmth occasionally", "Not everyone is as email-efficient", "Sometimes call is better"],
  },
  B: {
    type: "B",
    title: "The Thoughtful Communicator",
    emoji: "✍️",
    description: "Kamu balance professionalism dengan completeness! Your emails are well-crafted, provide context, dan easy to understand. Classic business communication done right.",
    traits: ["Thorough", "Professional", "Clear", "Considerate"],
    strengths: ["Complete information", "Few follow-ups needed", "Professional image"],
    weaknesses: ["Can be lengthy", "Takes time to write", "Over-explain sometimes"],
    tips: ["Sometimes less is more", "Lead with key point", "Not all emails need to be perfect"],
  },
  C: {
    type: "C",
    title: "The Friendly Emailer",
    emoji: "😊",
    description: "Kamu bring warmth ke email! Friendly, personable, dan make email feel like conversation. People enjoy getting emails from you.",
    traits: ["Friendly", "Warm", "Personable", "Approachable"],
    strengths: ["Good relationships via email", "Non-threatening", "People respond well"],
    weaknesses: ["May seem unprofessional to some", "Can be too casual", "Takes time to write"],
    tips: ["Adjust tone untuk different audiences", "Senior people may expect more formal", "Balance warmth dengan professionalism"],
  },
  D: {
    type: "D",
    title: "The Reluctant Emailer",
    emoji: "😅",
    description: "Email is not your favorite! You prefer other communication channels atau face-to-face. When you do email, it's minimal. Nothing wrong dengan that!",
    traits: ["Minimal", "Direct", "Prefers other channels", "Low email energy"],
    strengths: ["Not wasting time on email", "Probably better di other channels", "Less email clutter"],
    weaknesses: ["May miss important emails", "Appear unresponsive", "Email still necessary sometimes"],
    tips: ["Set minimal email routine", "Use tools untuk manage", "Some email etiquette helps career"],
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
