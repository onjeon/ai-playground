// व्हाट्सएप यूज़र टेस्ट - आप कैसे WhatsApp user हैं?
// WhatsApp User Type Test

export const questions = [
  {
    id: 1,
    question: "Good morning messages?",
    options: [
      { text: "रोज़ भेजता हूं सबको", type: "A" },
      { text: "कभी-कभी special लोगों को", type: "B" },
      { text: "Never, cringe लगता है", type: "C" },
      { text: "Memes भेजता हूं instead", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Blue tick के बाद reply?",
    options: [
      { text: "तुरंत, रुकना नहीं चाहिए", type: "A" },
      { text: "जब free हो तब", type: "B" },
      { text: "Read receipts off रखता हूं", type: "C" },
      { text: "Depends किसका message है", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Group chats?",
    options: [
      { text: "Active participant, हर message पर reply", type: "A" },
      { text: "Important messages पर ही", type: "B" },
      { text: "Mute on, rarely check", type: "C" },
      { text: "Memes और jokes share करने के लिए", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Voice messages?",
    options: [
      { text: "Long voice notes भेजता हूं", type: "A" },
      { text: "Type करना prefer करता हूं", type: "B" },
      { text: "Hate करता हूं, सुनता नहीं", type: "C" },
      { text: "Funny voice notes भेजता हूं", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Status updates?",
    options: [
      { text: "Daily updates, सब share", type: "A" },
      { text: "Special occasions पर", type: "B" },
      { text: "कभी नहीं डालता", type: "C" },
      { text: "Funny और memes ही", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Forwarded messages?",
    options: [
      { text: "Forward करता रहता हूं", type: "A" },
      { text: "Verify करके ही forward", type: "B" },
      { text: "Never forward करता", type: "C" },
      { text: "Funny ones ही forward", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Video calls?",
    options: [
      { text: "Family के साथ daily", type: "A" },
      { text: "Important discussions के लिए", type: "B" },
      { text: "Audio call prefer करता हूं", type: "C" },
      { text: "Filters लगाकर masti", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Last seen और online status?",
    options: [
      { text: "Visible रखता हूं, कोई issue नहीं", type: "A" },
      { text: "Contacts only", type: "B" },
      { text: "Hidden, privacy important", type: "C" },
      { text: "जो है सो है, check नहीं करता", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Family group में?",
    options: [
      { text: "Admin हूं, active हूं", type: "A" },
      { text: "Respond करता हूं respectfully", type: "B" },
      { text: "Silently read करता हूं", type: "C" },
      { text: "Jokes और memes share", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Someone typing... दिखे तो?",
    options: [
      { text: "Wait करता हूं message के लिए", type: "A" },
      { text: "अपना काम करता रहता हूं", type: "B" },
      { text: "Noticed नहीं करता usually", type: "C" },
      { text: "Racing करता हूं जल्दी type करने की", type: "D" },
    ],
  },
  {
    id: 11,
    question: "WhatsApp से पहले क्या miss?",
    options: [
      { text: "कुछ नहीं, perfect है", type: "A" },
      { text: "Face-to-face conversations", type: "B" },
      { text: "Peace and quiet", type: "C" },
      { text: "Actually meeting people", type: "D" },
    ],
  },
  {
    id: 12,
    question: "WhatsApp के बिना?",
    options: [
      { text: "जी नहीं पाउंगा", type: "A" },
      { text: "मुश्किल होगा पर manage", type: "B" },
      { text: "Relief होगा शायद", type: "C" },
      { text: "Memes कहां share करूंगा", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "WhatsApp Addict",
    emoji: "📱",
    description: "आप WhatsApp Power User हैं! हर message पर instant reply, good morning mandatory, groups में active। WhatsApp = Life। Digital connection expert!",
    traits: ["Active", "Connected", "Responsive", "Social"],
    strengths: ["Connectivity", "Responsiveness", "Social skills", "Family connection"],
    weaknesses: ["Addicted", "FOMO", "Privacy issues"],
    tips: ["Digital detox try करें", "Offline time भी रखें"],
  },
  B: {
    type: "B",
    title: "Balanced User",
    emoji: "⚖️",
    description: "आप Balanced WhatsApp User हैं! Use करते हैं जब जरूरी हो। Not addicted, not absent। Perfect balance of digital and real life!",
    traits: ["Balanced", "Practical", "Respectful", "Efficient"],
    strengths: ["Balance", "Efficiency", "Boundaries", "Practicality"],
    weaknesses: ["Miss some updates", "Not always available"],
    tips: ["Balance बनाए रखें", "Important people को priority दें"],
  },
  C: {
    type: "C",
    title: "Digital Minimalist",
    emoji: "🔕",
    description: "आप WhatsApp Minimalist हैं! Groups muted, read receipts off, status never। Essential use only। Privacy और peace lover। Digital detox champion!",
    traits: ["Private", "Minimal", "Peaceful", "Independent"],
    strengths: ["Privacy", "Peace", "Focus", "Independence"],
    weaknesses: ["Miss important stuff", "Seem distant"],
    tips: ["Important messages पर respond करें", "Connect रहें थोड़ा"],
  },
  D: {
    type: "D",
    title: "Meme Lord",
    emoji: "😂",
    description: "आप WhatsApp Entertainer हैं! Memes share करना mission, हर group में funny person। Laughter spreading through forwards। Entertainment package!",
    traits: ["Funny", "Entertaining", "Creative", "Social"],
    strengths: ["Humor", "Entertainment", "Mood lifting", "Creativity"],
    weaknesses: ["Not serious enough", "Annoying for some"],
    tips: ["Serious भी हों कभी-कभी", "Quality over quantity"],
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
