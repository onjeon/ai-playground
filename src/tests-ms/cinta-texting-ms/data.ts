// Gaya Texting Dengan Crush
// Macam mana kau text dengan orang yang kau suka?

import { TestData } from "../../types";

const data: TestData = {
  id: "cinta-texting-ms",
  title: "Gaya Texting Dengan Crush",
  description: "Texting dengan crush adalah seni! Kau jenis yang reply cepat atau bagi gap? Emoji banyak ke dry texter?",
  category: "cinta",
  emoji: "📱",
  color: "#06B6D4",
  questions: [
    {
      id: 1,
      question: "Crush kau text. Berapa lama kau ambil untuk reply?",
      options: [
        { text: "INSTANTLY! Dah siap tunggu", type: "A" },
        { text: "5-10 minit, taknak nampak desperate", type: "B" },
        { text: "30 minit ke sejam, play it cool", type: "C" },
        { text: "Hours later, busy dengan life", type: "D" },
      ],
    },
    {
      id: 2,
      question: "Emoji usage dalam text?",
      options: [
        { text: "Banyak gila! Every text ada 🥺😍🔥", type: "A" },
        { text: "Moderate, bila sesuai je", type: "B" },
        { text: "Sikit sangat, prefer words", type: "C" },
        { text: "Almost never, too cool for emojis", type: "D" },
      ],
    },
    {
      id: 3,
      question: "Text length kau biasanya?",
      options: [
        { text: "Panjang berjela, share everything", type: "A" },
        { text: "Medium, cukup-cukup je", type: "B" },
        { text: "Short and sweet", type: "C" },
        { text: "One word replies mostly", type: "D" },
      ],
    },
    {
      id: 4,
      question: "Kau start conversation atau tunggu dia text dulu?",
      options: [
        { text: "Selalu aku yang start!", type: "A" },
        { text: "50-50, take turns", type: "B" },
        { text: "Usually wait for them", type: "C" },
        { text: "Depends siapa text last", type: "D" },
      ],
    },
    {
      id: 5,
      question: "Voice note dengan crush?",
      options: [
        { text: "Love it! Nak dengar suara dia", type: "A" },
        { text: "Sometimes, bila malas taip", type: "B" },
        { text: "Prefer text, voice note awkward", type: "C" },
        { text: "Never, too personal", type: "D" },
      ],
    },
    {
      id: 6,
      question: "Crush reply pendek je. Kau?",
      options: [
        { text: "Overthink! Dia marah ke? Bosan ke?", type: "A" },
        { text: "Sikit worried, tapi give benefit of doubt", type: "B" },
        { text: "Maybe dia busy, no big deal", type: "C" },
        { text: "Match energy, reply pendek jugak", type: "D" },
      ],
    },
    {
      id: 7,
      question: "Late night texting dengan crush?",
      options: [
        { text: "Best time! Deep talks sampai subuh", type: "A" },
        { text: "Sometimes, bila both free", type: "B" },
        { text: "Not really, need my sleep", type: "C" },
        { text: "Only if they initiate", type: "D" },
      ],
    },
    {
      id: 8,
      question: "Kau read tapi tak reply. Bila?",
      options: [
        { text: "Never! Sentiasa reply", type: "A" },
        { text: "Bila nak fikir proper response", type: "B" },
        { text: "Sometimes, bila conversation feels over", type: "C" },
        { text: "Often, bila malas", type: "D" },
      ],
    },
    {
      id: 9,
      question: "Send memes dan funny videos?",
      options: [
        { text: "ALL THE TIME! Connection through humor", type: "A" },
        { text: "When I see something perfect for them", type: "B" },
        { text: "Occasionally je", type: "C" },
        { text: "Rarely, keep it to real conversation", type: "D" },
      ],
    },
    {
      id: 10,
      question: "\"Kau tengah buat apa?\" - response kau?",
      options: [
        { text: "Detail gila, tell everything", type: "A" },
        { text: "Answer and ask back", type: "B" },
        { text: "\"Nothing much\" then continue", type: "C" },
        { text: "\"Busy\" kalau tak mood", type: "D" },
      ],
    },
  ],
  results: {
    A: {
      type: "A",
      title: "The Eager Texter",
      emoji: "⚡",
      description: "Kau text enthusiast! Reply cepat, emojis banyak, conversations panjang. Kau bagi full attention dan energy bila text dengan crush. Sometimes terlalu much, tapi intentions baik!",
      traits: ["Enthusiastic", "Responsive", "Expressive", "Engaged"],
      strengths: ["Make crush feel special", "Good conversation flow", "Never leave them hanging"],
      weaknesses: ["Can seem too available", "Might overwhelm", "Double texting risk"],
      tips: ["Pace yourself", "Let them miss you sikit"],
    },
    B: {
      type: "B",
      title: "The Balanced Texter",
      emoji: "👌",
      description: "Perfect texting game! Kau tahu bila nak reply cepat dan bila nak bagi gap. Conversation flows naturally tanpa trying too hard. Sweet spot achieved!",
      traits: ["Balanced", "Natural", "Good timing", "Engaging"],
      strengths: ["Comfortable pacing", "Keep interest alive", "Quality conversations"],
      weaknesses: ["Sometimes overthink timing", "Can be inconsistent"],
      tips: ["Trust your instincts", "Stay authentic"],
    },
    C: {
      type: "C",
      title: "The Chill Texter",
      emoji: "😎",
      description: "Kau cool dan casual dengan texting. Tak rush, tak pressure. Reply bila comfortable dan keep it simple. Mystery is your game!",
      traits: ["Laid-back", "Cool", "Unbothered", "Mysterious"],
      strengths: ["No pressure vibes", "Intrigue factor", "Not clingy"],
      weaknesses: ["Might seem uninterested", "Crush could lose interest"],
      tips: ["Show enthusiasm sometimes", "Don't be too aloof"],
    },
    D: {
      type: "D",
      title: "The Dry Texter",
      emoji: "🏜️",
      description: "Texting bukan strong suit kau. Short replies, minimal emojis, unpredictable timing. Kau prefer face-to-face anyway. But careful, crush might think you're not into them!",
      traits: ["Minimal", "Brief", "Unpredictable", "In-person preferred"],
      strengths: ["No games", "Authentic", "Value real interaction"],
      weaknesses: ["Hard to read", "Might seem cold", "Miss connection opportunities"],
      tips: ["Put more effort in texts", "Emojis won't kill you!"],
    },
  },
};

export default data;
