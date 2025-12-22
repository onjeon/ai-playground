// Gaya Flirt Kau
// Macam mana kau flirt dengan orang yang kau suka?

import { TestData } from "../../types";

const data: TestData = {
  id: "cinta-flirting-ms",
  title: "Gaya Flirt Kau",
  description: "Ada banyak cara nak flirt! Kau jenis yang smooth operator ke awkward turtle? Jom check!",
  category: "cinta",
  emoji: "😏",
  color: "#EC4899",
  questions: [
    {
      id: 1,
      question: "Kau nampak someone cute. First move kau?",
      options: [
        { text: "Terus approach dan start conversation", type: "A" },
        { text: "Eye contact dan senyum dari jauh", type: "B" },
        { text: "Tunggu dia approach aku", type: "C" },
        { text: "Stalk Instagram dulu, DM later", type: "D" },
      ],
    },
    {
      id: 2,
      question: "Conversation starter kau biasanya apa?",
      options: [
        { text: "Cheesy pickup line for the laughs", type: "A" },
        { text: "Genuine compliment", type: "B" },
        { text: "Ask about something mereka pakai/buat", type: "C" },
        { text: "React to their story atau post", type: "D" },
      ],
    },
    {
      id: 3,
      question: "Physical touch bila flirting?",
      options: [
        { text: "Playful punch, touch arm - semua boleh", type: "A" },
        { text: "Sikit-sikit, bila appropriate", type: "B" },
        { text: "Jarang, aku bukan touchy type", type: "C" },
        { text: "Only through emojis hehe", type: "D" },
      ],
    },
    {
      id: 4,
      question: "Humor dalam flirting - penting ke?",
      options: [
        { text: "SANGAT! Aku flirt pakai jokes", type: "A" },
        { text: "Penting tapi balance dengan serious talk", type: "B" },
        { text: "Not really, aku prefer meaningful conversation", type: "C" },
        { text: "Send memes je, let memes do the work", type: "D" },
      ],
    },
    {
      id: 5,
      question: "Kau reply text crush macam mana?",
      options: [
        { text: "Instantly! Can't wait", type: "A" },
        { text: "Bagi gap sikit, don't wanna seem desperate", type: "B" },
        { text: "Bila ada masa, casual", type: "C" },
        { text: "Overthink 30 minit dulu baru reply", type: "D" },
      ],
    },
    {
      id: 6,
      question: "Kau nak tunjuk interest. Cara kau?",
      options: [
        { text: "Terus cakap \"Aku suka kau\"", type: "A" },
        { text: "Drop hints sampai dia perasan", type: "B" },
        { text: "Be extra nice dan helpful", type: "C" },
        { text: "Like semua posts dia dari tahun lepas", type: "D" },
      ],
    },
    {
      id: 7,
      question: "Bila ada competition untuk crush kau, kau?",
      options: [
        { text: "Step up game, be more obvious", type: "A" },
        { text: "Show best version of myself naturally", type: "B" },
        { text: "If meant to be, takdir la", type: "C" },
        { text: "Investigate the competition dulu", type: "D" },
      ],
    },
    {
      id: 8,
      question: "Compliment style kau?",
      options: [
        { text: "Bold dan direct - \"Kau hot gila\"", type: "A" },
        { text: "Sweet dan sincere - personality based", type: "B" },
        { text: "Subtle - \"Nice choice of book\"", type: "C" },
        { text: "Through reaction - fire emoji, heart eyes", type: "D" },
      ],
    },
    {
      id: 9,
      question: "Kena reject masa flirting. Response?",
      options: [
        { text: "Okay je, move on to the next", type: "A" },
        { text: "Awkward sikit tapi handle gracefully", type: "B" },
        { text: "Die inside tapi act cool", type: "C" },
        { text: "Unsend semua messages, menyesal", type: "D" },
      ],
    },
    {
      id: 10,
      question: "Ideal way untuk escalate from flirting to dating?",
      options: [
        { text: "Ajak date terus, no games", type: "A" },
        { text: "Build connection dulu, then ask out", type: "B" },
        { text: "Wait for them to make it official", type: "C" },
        { text: "Keep flirting sampai one of us crack", type: "D" },
      ],
    },
  ],
  results: {
    A: {
      type: "A",
      title: "Bold Flirter",
      emoji: "🔥",
      description: "Kau berani gila bila flirt! Direct, confident, dan tak takut rejection. Kau approach orang dengan ease dan usually get what you want. Smooth operator!",
      traits: ["Confident", "Direct", "Bold", "Fearless"],
      strengths: ["No guessing games", "Clear intentions", "Get results fast"],
      weaknesses: ["Can come on too strong", "Might intimidate shy people"],
      tips: ["Read the room", "Sometimes subtle works better"],
    },
    B: {
      type: "B",
      title: "Smooth Flirter",
      emoji: "😊",
      description: "Kau ada balance yang perfect! Sweet bila perlu, playful bila sesuai. Flirting game kau natural dan organic. People feel comfortable around you.",
      traits: ["Balanced", "Charming", "Adaptable", "Sweet"],
      strengths: ["Make people feel special", "Good at reading signals", "Natural charm"],
      weaknesses: ["Sometimes too subtle", "Might send mixed signals"],
      tips: ["Be a bit more direct sometimes", "Don't play too safe"],
    },
    C: {
      type: "C",
      title: "Subtle Flirter",
      emoji: "🌸",
      description: "Flirting kau very gentle dan subtle. Prefer deep conversations over pickup lines. Kau take time to build connection. Quality over quantity!",
      traits: ["Reserved", "Thoughtful", "Patient", "Meaningful"],
      strengths: ["Build genuine connections", "Not superficial", "Respectful approach"],
      weaknesses: ["People might not realize you're flirting", "Miss opportunities"],
      tips: ["Be a bit more obvious", "Take more initiative"],
    },
    D: {
      type: "D",
      title: "Digital Flirter",
      emoji: "📱",
      description: "Kau pro dalam online flirting! DMs, stories, memes - that's your battlefield. In person mungkin awkward sikit tapi behind the screen, kau smooth gila.",
      traits: ["Tech-savvy", "Witty online", "Meme master", "Better via text"],
      strengths: ["Creative approaches", "Less pressure", "Good at maintaining interest"],
      weaknesses: ["Awkward in person", "Hide behind screen"],
      tips: ["Practice face-to-face skills", "Don't rely only on texting"],
    },
  },
};

export default data;
