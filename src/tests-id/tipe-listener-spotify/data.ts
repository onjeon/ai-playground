// Tipe Listener Spotify Indonesia
// Kamu tipe pendengar musik Spotify yang kayak gimana?

export const questions = [
  {
    id: 1,
    question: "Playlist situation kamu...",
    options: [
      { text: "Banyak playlist untuk setiap mood", type: "A" },
      { text: "Beberapa playlist yang well-curated", type: "B" },
      { text: "Mostly Liked Songs, semua disitu", type: "C" },
      { text: "Ikut playlist orang atau algoritma aja", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Discover Weekly menurutmu...",
    options: [
      { text: "Excited setiap Senin, selalu check!", type: "A" },
      { text: "Sesekali dengerin, hit or miss", type: "B" },
      { text: "Jarang, prefer lagu yang udah kenal", type: "C" },
      { text: "Ga tau itu apa", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Cara menemukan musik baru...",
    options: [
      { text: "Explore aktif, hunt lagu baru", type: "A" },
      { text: "Dari rekomendasi teman atau influencer", type: "B" },
      { text: "Tunggu viral atau trending", type: "C" },
      { text: "Jarang explore, dengerin yang sama", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Saat suka lagu baru...",
    options: [
      { text: "Deep dive discography artisnya", type: "A" },
      { text: "Add ke playlist, dengerin terus", type: "B" },
      { text: "Repeat sampai bosen", type: "C" },
      { text: "Enjoy moment, lalu move on", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Spotify Wrapped kamu...",
    options: [
      { text: "Wait all year, share ke semua!", type: "A" },
      { text: "Interesting untuk refleksi", type: "B" },
      { text: "Liat sebentar aja", type: "C" },
      { text: "Ga terlalu peduli", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Podcast di Spotify...",
    options: [
      { text: "Active listener, banyak podcast diikuti", type: "A" },
      { text: "Beberapa favorit yang regular", type: "B" },
      { text: "Jarang, lebih suka musik", type: "C" },
      { text: "Tidak pernah dengerin", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Musik Indonesia di librarymu...",
    options: [
      { text: "Dominan! Indo music lover", type: "A" },
      { text: "Mixed dengan international", type: "B" },
      { text: "Beberapa hits populer aja", type: "C" },
      { text: "Hampir tidak ada", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Saat kerja atau belajar...",
    options: [
      { text: "Wajib ada musik!", type: "A" },
      { text: "Lo-fi atau instrumental", type: "B" },
      { text: "Tergantung task", type: "C" },
      { text: "Lebih suka hening", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Share musik ke orang lain...",
    options: [
      { text: "Sering! Suka recommend lagu", type: "A" },
      { text: "Kalau nemu yang bagus banget", type: "B" },
      { text: "Jarang, musik personal", type: "C" },
      { text: "Tidak pernah", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Berlangganan Premium...",
    options: [
      { text: "Wajib! Ga bisa hidup tanpa", type: "A" },
      { text: "Iya, worth the money", type: "B" },
      { text: "Free version cukup", type: "C" },
      { text: "Pakai app lain atau download", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Artis favorit...",
    options: [
      { text: "Banyak dan beragam genre", type: "A" },
      { text: "Beberapa yang loyal diikuti", type: "B" },
      { text: "Ikut trending aja", type: "C" },
      { text: "Tidak terlalu fokus artis", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Musik dalam hidupmu...",
    options: [
      { text: "Essential! Tidak bisa tanpa musik", type: "A" },
      { text: "Important part of life", type: "B" },
      { text: "Nice to have", type: "C" },
      { text: "Background aja", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Music Enthusiast",
    emoji: "🎧",
    description: "Kamu adalah Music Enthusiast! Spotify adalah rumah kedua. Kamu tau semua fitur, selalu explore musik baru, dan punya playlist untuk setiap momen. Musik bukan cuma entertainment, tapi way of life!",
    traits: ["Passionate", "Knowledgeable", "Explorer", "Curator"],
    strengths: ["Great music taste", "Always updated", "Good recommender"],
    weaknesses: ["Bisa music snob", "Too invested"],
    tips: ["Share your passion", "Introduce others to good music"],
  },
  B: {
    type: "B",
    title: "Curated Listener",
    emoji: "✨",
    description: "Kamu adalah Curated Listener! Quality over quantity. Kamu punya taste yang refined dan playlist yang well-thought. Musik adalah companion yang kamu pilih dengan cermat. Less but meaningful!",
    traits: ["Selective", "Thoughtful", "Quality-focused", "Loyal"],
    strengths: ["Good taste", "Loyal to favorites", "Meaningful connection"],
    weaknesses: ["Might miss new music", "Slow to explore"],
    tips: ["Try new genres sometimes", "Algorithm bisa surprise you"],
  },
  C: {
    type: "C",
    title: "Casual Listener",
    emoji: "🎵",
    description: "Kamu adalah Casual Listener! Musik adalah background yang nice. Dengerin yang familiar atau trending, tidak terlalu deep dive. Musik menyenangkan tapi bukan obsesi. Relaxed approach!",
    traits: ["Casual", "Relaxed", "Trend-follower", "Easy-going"],
    strengths: ["No pressure", "Enjoy popular hits", "Easy to share taste"],
    weaknesses: ["Miss hidden gems", "Surface level"],
    tips: ["Explore Discover Weekly", "You might find new favorites"],
  },
  D: {
    type: "D",
    title: "Passive Listener",
    emoji: "📻",
    description: "Kamu adalah Passive Listener! Musik ada tapi bukan fokus. Radio mode atau shuffle, yang penting ada suara. Kamu tidak terlalu invested dalam music scene. Simple approach to audio!",
    traits: ["Passive", "Indifferent", "Simple", "Background-focused"],
    strengths: ["Low maintenance", "Open to anything", "No FOMO"],
    weaknesses: ["Miss music experiences", "Disconnected from trends"],
    tips: ["Try actively listening sometimes", "Music bisa enhance life"],
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
