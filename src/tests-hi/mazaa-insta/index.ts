// इंस्टाग्राम यूज़र टेस्ट - आप कैसे Instagram user हैं?
// Instagram User Type Test

export const questions = [
  {
    id: 1,
    question: "Profile picture?",
    options: [
      { text: "Professional photoshoot वाली", type: "A" },
      { text: "Travel या aesthetic photo", type: "B" },
      { text: "Casual selfie", type: "C" },
      { text: "Meme या cartoon", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Post frequency?",
    options: [
      { text: "Weekly consistent posting", type: "A" },
      { text: "When something aesthetic happens", type: "B" },
      { text: "Randomly, जब याद आए", type: "C" },
      { text: "Stories only, posts rare", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Caption style?",
    options: [
      { text: "Long meaningful captions", type: "A" },
      { text: "One-liner या emoji", type: "B" },
      { text: "Simple description", type: "C" },
      { text: "Funny या sarcastic", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Hashtag game?",
    options: [
      { text: "Research करके strategic", type: "A" },
      { text: "Aesthetic ones only", type: "B" },
      { text: "कुछ नहीं या minimal", type: "C" },
      { text: "Funny hashtags", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Stories usage?",
    options: [
      { text: "Curated और planned", type: "A" },
      { text: "Aesthetic reels और music", type: "B" },
      { text: "Real life random stuff", type: "C" },
      { text: "Memes और funny content", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Follower count importance?",
    options: [
      { text: "बहुत important, growth track करता हूं", type: "A" },
      { text: "थोड़ा देखता हूं", type: "B" },
      { text: "कोई फर्क नहीं पड़ता", type: "C" },
      { text: "Ratio matters, fake नहीं चाहिए", type: "D" },
    ],
  },
  {
    id: 7,
    question: "DM culture?",
    options: [
      { text: "Professional networking", type: "A" },
      { text: "Close friends only", type: "B" },
      { text: "Rarely use करता हूं", type: "C" },
      { text: "Memes share करने के लिए", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Reels बनाते हैं?",
    options: [
      { text: "Regular content creator", type: "A" },
      { text: "कभी-कभी aesthetic ones", type: "B" },
      { text: "सिर्फ देखता हूं, बनाता नहीं", type: "C" },
      { text: "Funny reels बनाता हूं", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Explore page?",
    options: [
      { text: "Inspiration के लिए scroll", type: "A" },
      { text: "Aesthetic content देखना", type: "B" },
      { text: "Random browsing", type: "C" },
      { text: "Memes और comedy", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Photo editing?",
    options: [
      { text: "Lightroom presets, detailed", type: "A" },
      { text: "Filter लगाना must", type: "B" },
      { text: "No filter, real photo", type: "C" },
      { text: "Funny edits और stickers", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Private या public?",
    options: [
      { text: "Public for growth", type: "A" },
      { text: "Public for aesthetics", type: "B" },
      { text: "Private, close ones only", type: "C" },
      { text: "कोई भी, farak नहीं", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Instagram means?",
    options: [
      { text: "Platform for growth", type: "A" },
      { text: "Visual diary", type: "B" },
      { text: "Just an app", type: "C" },
      { text: "Entertainment source", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Influencer Material",
    emoji: "📸",
    description: "आप Instagram Pro हैं! Growth mindset, consistent posting, hashtag strategy। Influencer बनने की पूरी potential। Social media game strong!",
    traits: ["Strategic", "Consistent", "Growth-focused", "Professional"],
    strengths: ["Strategy", "Consistency", "Engagement", "Content quality"],
    weaknesses: ["Too calculated", "Pressure"],
    tips: ["Authentic भी रहें", "Burnout से बचें"],
  },
  B: {
    type: "B",
    title: "Aesthetic Queen/King",
    emoji: "✨",
    description: "आप Aesthetic Instagrammer हैं! Every post curated, filter game strong, feed goals। Visual storytelling expert। Art meets social media!",
    traits: ["Aesthetic", "Curated", "Visual", "Artistic"],
    strengths: ["Aesthetics", "Visual sense", "Creativity", "Curation"],
    weaknesses: ["Too perfect", "Pressure to maintain"],
    tips: ["Real moments भी share करें", "Perfect का pressure छोड़ें"],
  },
  C: {
    type: "C",
    title: "Casual Scroller",
    emoji: "📱",
    description: "आप Casual Instagram User हैं! No strategy, no pressure। जब मन करे post, mostly browse करते हैं। Healthy relationship with the app!",
    traits: ["Casual", "Relaxed", "Authentic", "Minimal"],
    strengths: ["Authenticity", "Balance", "No pressure", "Real life focus"],
    weaknesses: ["Missing out opportunities", "Less engaged"],
    tips: ["Engagement थोड़ा बढ़ाएं", "Creative side explore करें"],
  },
  D: {
    type: "D",
    title: "Meme Page Vibes",
    emoji: "😂",
    description: "आप Entertainment Instagrammer हैं! Memes share करना mission, funny comments करना hobby। Laughter spreading through the gram!",
    traits: ["Funny", "Entertaining", "Casual", "Humorous"],
    strengths: ["Humor", "Entertainment", "Relatability", "Fun"],
    weaknesses: ["Not serious enough", "Trolling risk"],
    tips: ["Meaningful content भी try करें", "Positive humor रखें"],
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
