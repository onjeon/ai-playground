// Gaya Dating Kau
// Macam mana style kau bila dating?

import { TestData } from "../../types";

const data: TestData = {
  id: "cinta-dating-style-ms",
  title: "Gaya Dating Kau",
  description: "Nak tahu style dating kau? Adventurous ke Netflix and chill? Jom test!",
  category: "cinta",
  emoji: "💕",
  color: "#FF6B9D",
  questions: [
    {
      id: 1,
      question: "First date, kau prefer buat apa?",
      options: [
        { text: "Dinner fancy kat restaurant best", type: "A" },
        { text: "Coffee chill sambil borak", type: "B" },
        { text: "Adventure macam hiking atau theme park", type: "C" },
        { text: "Netflix and chill je kat rumah", type: "D" },
      ],
    },
    {
      id: 2,
      question: "Siapa yang patut bayar masa date?",
      options: [
        { text: "Lelaki kena bayar semua la", type: "A" },
        { text: "Split je fair and square", type: "B" },
        { text: "Siapa ajak, dia bayar", type: "C" },
        { text: "Bergantung mood, gilir-gilir", type: "D" },
      ],
    },
    {
      id: 3,
      question: "Kau akan dress up macam mana untuk date?",
      options: [
        { text: "Full glam, makeup cun, baju cantik", type: "A" },
        { text: "Smart casual, nampak effortless", type: "B" },
        { text: "Comfortable je, t-shirt and jeans", type: "C" },
        { text: "Ikut tempat, flexible", type: "D" },
      ],
    },
    {
      id: 4,
      question: "Berapa lama kau okay date sebelum commit?",
      options: [
        { text: "1-2 dates je cukup, kalau click terus", type: "A" },
        { text: "Sebulan lebih, kena kenal dulu", type: "B" },
        { text: "3-6 bulan, nak betul-betul sure", type: "C" },
        { text: "Ikut flow je, tak kisah berapa lama", type: "D" },
      ],
    },
    {
      id: 5,
      question: "Kalau date boring, kau akan?",
      options: [
        { text: "Pretend okay je, be polite sampai habis", type: "A" },
        { text: "Cuba buat conversation lebih interesting", type: "B" },
        { text: "Terus terang cakap tak click", type: "C" },
        { text: "Cari alasan nak balik awal", type: "D" },
      ],
    },
    {
      id: 6,
      question: "Kau prefer jumpa orang baru dekat mana?",
      options: [
        { text: "Dating apps macam Tinder, Bumble", type: "A" },
        { text: "Through kawan-kawan", type: "B" },
        { text: "Events atau social gathering", type: "C" },
        { text: "Randomly kat public je", type: "D" },
      ],
    },
    {
      id: 7,
      question: "Lepas first date, kau akan text bila?",
      options: [
        { text: "Malam tu jugak, tak sabar", type: "A" },
        { text: "Esok pagi, bagi dia miss dulu", type: "B" },
        { text: "Tunggu 2-3 hari, play it cool", type: "C" },
        { text: "Tunggu dia text dulu", type: "D" },
      ],
    },
    {
      id: 8,
      question: "Red flag terbesar masa dating?",
      options: [
        { text: "Selalu check phone, tak focus", type: "A" },
        { text: "Cakap pasal ex non-stop", type: "B" },
        { text: "Rude dengan waiter/staff", type: "C" },
        { text: "Tiada sense of humor langsung", type: "D" },
      ],
    },
    {
      id: 9,
      question: "Perfect date night untuk kau?",
      options: [
        { text: "Romantic candlelight dinner by the beach", type: "A" },
        { text: "Movie marathon dengan snacks best", type: "B" },
        { text: "Road trip spontan ke tempat baru", type: "C" },
        { text: "Masak sama-sama dan makan kat rumah", type: "D" },
      ],
    },
    {
      id: 10,
      question: "Kau jenis dating berapa orang sekali?",
      options: [
        { text: "Satu je, loyal dari awal", type: "A" },
        { text: "2-3 orang, nak explore options", type: "B" },
        { text: "Ramai, tak commit sampai serious", type: "C" },
        { text: "Depends, ikut situation", type: "D" },
      ],
    },
  ],
  results: {
    A: {
      type: "A",
      title: "The Hopeless Romantic",
      emoji: "💖",
      description: "Kau jenis yang percaya kat fairytale love! Suka grand gestures, romantic vibes, dan expect prince/princess charming. Dating untuk kau adalah about creating magical moments.",
      traits: ["Romantic", "Traditional", "High standards", "Believe in love"],
      strengths: ["Commit sepenuhnya", "Buat partner rasa special", "Effort lebih dalam relationship"],
      weaknesses: ["Kadang expect terlalu tinggi", "Boleh disappointed kalau tak perfect"],
      tips: ["Balance expectation dengan reality", "Appreciate small moments jugak"],
    },
    B: {
      type: "B",
      title: "The Chill Dater",
      emoji: "😎",
      description: "Kau santai je bila dating! Tak rushing, take things slow, dan enjoy the process. Quality conversation lebih penting dari fancy dinner.",
      traits: ["Laid-back", "Good listener", "Patient", "Easy-going"],
      strengths: ["Buat orang comfortable", "Tak pressure partner", "Go with the flow"],
      weaknesses: ["Sometimes terlalu passive", "Ambil masa lama untuk decide"],
      tips: ["Show initiative lebih sikit", "Jangan terlalu shy express feeling"],
    },
    C: {
      type: "C",
      title: "The Adventure Seeker",
      emoji: "🎢",
      description: "Dating untuk kau mesti ada thrill! Kau suka try new things, spontaneous plans, dan partner yang boleh keep up dengan energy kau.",
      traits: ["Adventurous", "Spontaneous", "Fun-loving", "Energetic"],
      strengths: ["Always interesting", "Create memorable experiences", "Never boring"],
      weaknesses: ["Commitment issues sometimes", "Tak sabar dengan routine"],
      tips: ["Balance excitement dengan stability", "Appreciate calm moments jugak"],
    },
    D: {
      type: "D",
      title: "The Flexible One",
      emoji: "🌊",
      description: "Kau adaptable gila! Boleh enjoy apa-apa je, dari fancy dinner sampai mamak supper. Dating style kau ikut partner dan situation.",
      traits: ["Adaptable", "Open-minded", "Versatile", "Easy to please"],
      strengths: ["Compatible dengan ramai orang", "Tak demanding", "Flexible schedule"],
      weaknesses: ["Sometimes tiada strong preference", "Boleh jadi too agreeable"],
      tips: ["Voice out apa kau nak jugak", "Set standards untuk diri sendiri"],
    },
  },
};

export default data;
