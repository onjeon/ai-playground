const fs = require('fs');
const path = require('path');

const testsDir = path.join(__dirname, 'src/tests-ms');

// Get all folders without data.ts
const folders = fs.readdirSync(testsDir).filter(f => {
  const folderPath = path.join(testsDir, f);
  return fs.statSync(folderPath).isDirectory() && !fs.existsSync(path.join(folderPath, 'data.ts'));
});

console.log(`Found ${folders.length} folders without data.ts`);

// Template for generating tests
const generateTest = (slug, title, emoji, description) => {
  const titleCapitalized = title.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  
  return `// ${titleCapitalized}
// ${description}

export const questions = [
  {
    id: 1,
    question: "Soalan pertama tentang ${title}?",
    options: [
      { text: "Pilihan A - sangat setuju", type: "A" },
      { text: "Pilihan B - setuju", type: "B" },
      { text: "Pilihan C - tidak pasti", type: "C" },
      { text: "Pilihan D - tidak setuju", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bagaimana approach anda tentang ${title}?",
    options: [
      { text: "Sangat aktif dan proaktif", type: "A" },
      { text: "Moderate, bila perlu", type: "B" },
      { text: "Pasif, ikut flow", type: "C" },
      { text: "Tak ambil kisah", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bila berkaitan ${title}, anda rasa?",
    options: [
      { text: "Excited dan bersemangat!", type: "A" },
      { text: "Okay, boleh handle", type: "B" },
      { text: "Biasa je", type: "C" },
      { text: "Tak minat sangat", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Pengalaman anda dengan ${title}?",
    options: [
      { text: "Banyak dan positif", type: "A" },
      { text: "Ada beberapa pengalaman baik", type: "B" },
      { text: "Sikit je", type: "C" },
      { text: "Hampir tiada", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Dalam konteks ${title}, anda lebih...",
    options: [
      { text: "Leader dan penggerak", type: "A" },
      { text: "Participant aktif", type: "B" },
      { text: "Observer", type: "C" },
      { text: "Mengelak", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Priority ${title} dalam hidup anda?",
    options: [
      { text: "Sangat penting!", type: "A" },
      { text: "Penting dalam keadaan tertentu", type: "B" },
      { text: "Tidak terlalu penting", type: "C" },
      { text: "Langsung tidak penting", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bila ada isu berkaitan ${title}...",
    options: [
      { text: "Tackle terus dengan yakin", type: "A" },
      { text: "Fikir dulu, then act", type: "B" },
      { text: "Tunggu orang lain handle", type: "C" },
      { text: "Abaikan", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Orang sekeliling describe anda dalam ${title} sebagai?",
    options: [
      { text: "Expert dan go-to person", type: "A" },
      { text: "Reliable dan consistent", type: "B" },
      { text: "Average", type: "C" },
      { text: "Tidak involved", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Future goals berkaitan ${title}?",
    options: [
      { text: "Nak jadi lebih baik!", type: "A" },
      { text: "Maintain je", type: "B" },
      { text: "Tak ada specific goal", type: "C" },
      { text: "Tak fikir pasal ni", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Overall, ${title} untuk anda adalah?",
    options: [
      { text: "Sangat bermakna dan penting", type: "A" },
      { text: "Part of life yang okay", type: "B" },
      { text: "Neutral", type: "C" },
      { text: "Tidak relevan", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "${titleCapitalized} Champion",
    emoji: "${emoji}",
    description: "Anda sangat cemerlang dalam ${title}! Passionate, dedicated, dan inspiring. Teruskan!",
    traits: ["Passionate", "Dedicated", "Leader", "Inspiring"],
    strengths: ["High performance", "Motivates others", "Consistent excellence"],
    weaknesses: ["May burn out", "High expectations"],
    tips: ["Balance is key", "Take breaks when needed"],
  },
  B: {
    type: "B",
    title: "${titleCapitalized} Pro",
    emoji: "⭐",
    description: "Anda balanced dan reliable dalam ${title}! Good approach dengan sustainable habits.",
    traits: ["Balanced", "Reliable", "Consistent", "Practical"],
    strengths: ["Sustainable approach", "Dependable", "Good results"],
    weaknesses: ["Could push more"],
    tips: ["Challenge yourself sometimes", "Growth is good"],
  },
  C: {
    type: "C",
    title: "${titleCapitalized} Casual",
    emoji: "😊",
    description: "Anda casual dengan ${title}. No stress approach, enjoy when it happens!",
    traits: ["Relaxed", "Casual", "Easy-going", "Flexible"],
    strengths: ["Low stress", "Adaptable", "No pressure"],
    weaknesses: ["Could improve", "Missing opportunities"],
    tips: ["Try more!", "You might enjoy it more"],
  },
  D: {
    type: "D",
    title: "${titleCapitalized} Newbie",
    emoji: "🌱",
    description: "Ruang untuk grow dalam ${title}! Everyone starts somewhere. Take your time!",
    traits: ["Beginner", "Potential", "Learning", "Open"],
    strengths: ["Room to grow", "Fresh perspective"],
    weaknesses: ["Needs development", "Lacking experience"],
    tips: ["Start small", "Every step counts"],
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
`;
};

// Extended map of folder names to titles and emojis - all remaining
const testMappings = {
  'lifestyle-photography': { title: 'Photography Style', emoji: '📷', desc: 'Gaya fotografi anda?' },
  'lifestyle-reading': { title: 'Reading Habits', emoji: '📚', desc: 'Gaya membaca anda?' },
  'lifestyle-skincare': { title: 'Skincare Routine', emoji: '🧴', desc: 'Gaya skincare anda?' },
  'lifestyle-tea-lover': { title: 'Tea Lover', emoji: '🍵', desc: 'Jenis tea person mana anda?' },
  'lifestyle-writing': { title: 'Writing Style', emoji: '✍️', desc: 'Gaya menulis anda?' },
  'makanan-apam-balik': { title: 'Apam Balik', emoji: '🥞', desc: 'Jenis apam balik lover anda?' },
  'makanan-ayam-goreng': { title: 'Ayam Goreng', emoji: '🍗', desc: 'Jenis ayam goreng enthusiast anda?' },
  'makanan-bakso': { title: 'Bakso', emoji: '🍲', desc: 'Jenis bakso lover anda?' },
  'makanan-curry-laksa': { title: 'Curry Laksa', emoji: '🍜', desc: 'Jenis curry laksa fan anda?' },
  'makanan-curry-mee': { title: 'Curry Mee', emoji: '🍜', desc: 'Jenis curry mee lover anda?' },
  'makanan-dodol': { title: 'Dodol', emoji: '🍬', desc: 'Jenis dodol fan anda?' },
  'makanan-ikan-bakar': { title: 'Ikan Bakar', emoji: '🐟', desc: 'Jenis ikan bakar lover anda?' },
  'makanan-keropok-lekor': { title: 'Keropok Lekor', emoji: '🥖', desc: 'Jenis keropok lekor fan anda?' },
  'makanan-kuih-lapis': { title: 'Kuih Lapis', emoji: '🌈', desc: 'Jenis kuih lapis lover anda?' },
  'makanan-mee-goreng': { title: 'Mee Goreng', emoji: '🍝', desc: 'Jenis mee goreng enthusiast anda?' },
  'makanan-mee-rebus': { title: 'Mee Rebus', emoji: '🍜', desc: 'Jenis mee rebus fan anda?' },
  'makanan-nasi-ayam': { title: 'Nasi Ayam', emoji: '🍗', desc: 'Jenis nasi ayam lover anda?' },
  'makanan-nasi-goreng-kampung': { title: 'Nasi Goreng Kampung', emoji: '🍚', desc: 'Jenis nasi goreng kampung fan anda?' },
  'makanan-nasi-goreng': { title: 'Nasi Goreng', emoji: '🍚', desc: 'Jenis nasi goreng lover anda?' },
  'makanan-onde-onde': { title: 'Onde-Onde', emoji: '🟢', desc: 'Jenis onde-onde fan anda?' },
  'makanan-tomyam': { title: 'Tomyam', emoji: '🍲', desc: 'Jenis tomyam lover anda?' },
  'membeli-belah-1utama': { title: '1 Utama Shopper', emoji: '🛒', desc: 'Gaya shopping kat 1 Utama?' },
  'membeli-belah-mid-valley': { title: 'Mid Valley Shopper', emoji: '🏬', desc: 'Gaya shopping kat Mid Valley?' },
  'membeli-belah-night-market': { title: 'Night Market', emoji: '🌙', desc: 'Gaya pasar malam anda?' },
  'membeli-belah-pasar-borong': { title: 'Pasar Borong', emoji: '📦', desc: 'Gaya shopping pasar borong?' },
  'membeli-belah-pavilion': { title: 'Pavilion Shopper', emoji: '💎', desc: 'Gaya shopping kat Pavilion?' },
  'minuman-air-kelapa': { title: 'Air Kelapa', emoji: '🥥', desc: 'Jenis air kelapa fan anda?' },
  'minuman-kopi-o': { title: 'Kopi O', emoji: '☕', desc: 'Jenis kopi o lover anda?' },
  'minuman-milo-ais': { title: 'Milo Ais', emoji: '🥤', desc: 'Jenis milo ais fan anda?' },
  'minuman-sirap-bandung': { title: 'Sirap Bandung', emoji: '🌸', desc: 'Jenis sirap bandung lover anda?' },
  'minuman-teh-o-ais-limau': { title: 'Teh O Ais Limau', emoji: '🍋', desc: 'Jenis TOIL fan anda?' },
  'moden-e-wallet': { title: 'E-Wallet', emoji: '📱', desc: 'Gaya e-wallet anda?' },
  'moden-food-delivery': { title: 'Food Delivery', emoji: '🛵', desc: 'Gaya food delivery anda?' },
  'moden-online-shopping': { title: 'Online Shopping', emoji: '🛍️', desc: 'Gaya online shopping anda?' },
  'moden-podcast': { title: 'Podcast', emoji: '🎙️', desc: 'Gaya podcast listener anda?' },
  'moden-streaming': { title: 'Streaming', emoji: '📺', desc: 'Gaya streaming anda?' },
  'negeri-johor': { title: 'Johor', emoji: '🏖️', desc: 'Sejauh mana Johor anda?' },
  'negeri-kedah': { title: 'Kedah', emoji: '🌾', desc: 'Sejauh mana Kedah anda?' },
  'negeri-kelantan': { title: 'Kelantan', emoji: '🕌', desc: 'Sejauh mana Kelantan anda?' },
  'negeri-kuala-lumpur': { title: 'Kuala Lumpur', emoji: '🏙️', desc: 'Sejauh mana KL anda?' },
  'negeri-labuan': { title: 'Labuan', emoji: '🏝️', desc: 'Sejauh mana Labuan anda?' },
  'negeri-melaka': { title: 'Melaka', emoji: '🏛️', desc: 'Sejauh mana Melaka anda?' },
  'negeri-negeri-sembilan': { title: 'Negeri Sembilan', emoji: '🏔️', desc: 'Sejauh mana N9 anda?' },
  'negeri-pahang': { title: 'Pahang', emoji: '🌴', desc: 'Sejauh mana Pahang anda?' },
  'negeri-penang': { title: 'Penang', emoji: '🍜', desc: 'Sejauh mana Penang anda?' },
  'negeri-perak': { title: 'Perak', emoji: '⛰️', desc: 'Sejauh mana Perak anda?' },
  'negeri-perlis': { title: 'Perlis', emoji: '🌾', desc: 'Sejauh mana Perlis anda?' },
  'negeri-sabah': { title: 'Sabah', emoji: '🏔️', desc: 'Sejauh mana Sabah anda?' },
  'negeri-sarawak': { title: 'Sarawak', emoji: '🌳', desc: 'Sejauh mana Sarawak anda?' },
  'negeri-selangor': { title: 'Selangor', emoji: '🏘️', desc: 'Sejauh mana Selangor anda?' },
  'negeri-terengganu': { title: 'Terengganu', emoji: '🐢', desc: 'Sejauh mana Terengganu anda?' },
  'nilai-bertolak-ansur': { title: 'Bertolak Ansur', emoji: '🤝', desc: 'Sejauh mana anda bertolak ansur?' },
  'nilai-budi-bahasa': { title: 'Budi Bahasa', emoji: '💐', desc: 'Sejauh mana budi bahasa anda?' },
  'nilai-gotong-royong': { title: 'Gotong Royong', emoji: '🤲', desc: 'Sejauh mana semangat gotong-royong?' },
  'nilai-hormat': { title: 'Hormat', emoji: '🙏', desc: 'Sejauh mana anda menghormati?' },
  'nilai-tolong-menolong': { title: 'Tolong Menolong', emoji: '🤝', desc: 'Sejauh mana anda suka menolong?' },
  'pelancongan-cameron-highlands': { title: 'Cameron Highlands', emoji: '🌿', desc: 'Gaya Cameron Highlands anda?' },
  'pelancongan-genting': { title: 'Genting', emoji: '🎢', desc: 'Gaya Genting Highlands anda?' },
  'pelancongan-langkawi': { title: 'Langkawi', emoji: '🏝️', desc: 'Gaya Langkawi trip anda?' },
  'pelancongan-perhentian': { title: 'Perhentian', emoji: '🤿', desc: 'Gaya Perhentian trip anda?' },
  'pelancongan-tioman': { title: 'Tioman', emoji: '🏖️', desc: 'Gaya Tioman trip anda?' },
  'pengangkutan-bus': { title: 'Bus', emoji: '🚌', desc: 'Gaya naik bas anda?' },
  'pengangkutan-kereta': { title: 'Kereta', emoji: '🚗', desc: 'Gaya driving anda?' },
  'pengangkutan-komuter': { title: 'Komuter', emoji: '🚃', desc: 'Gaya komuter anda?' },
  'pengangkutan-motor': { title: 'Motor', emoji: '🏍️', desc: 'Gaya riding motor anda?' },
  'perayaan-birthday-ms': { title: 'Birthday', emoji: '🎂', desc: 'Gaya celebrate birthday anda?' },
  'perayaan-christmas-malaysia': { title: 'Christmas Malaysia', emoji: '🎄', desc: 'Gaya Christmas anda?' },
  'perayaan-cny-malaysia': { title: 'CNY Malaysia', emoji: '🧧', desc: 'Gaya Chinese New Year anda?' },
  'perayaan-deepavali-malaysia': { title: 'Deepavali', emoji: '🪔', desc: 'Gaya Deepavali anda?' },
  'perayaan-merdeka': { title: 'Merdeka', emoji: '🇲🇾', desc: 'Gaya celebrate Merdeka anda?' },
  'perayaan-raya-aidilfitri': { title: 'Raya Aidilfitri', emoji: '🕌', desc: 'Gaya Hari Raya anda?' },
  'perhubungan-bahasa-cinta': { title: 'Bahasa Cinta', emoji: '💕', desc: 'Apa love language anda?' },
  'perhubungan-cemburu': { title: 'Cemburu', emoji: '💚', desc: 'Sejauh mana anda cemburu?' },
  'perhubungan-date-ms': { title: 'Dating Style', emoji: '💑', desc: 'Gaya dating anda?' },
  'perhubungan-jarak-jauh': { title: 'Jarak Jauh', emoji: '✈️', desc: 'Gaya LDR anda?' },
  'perhubungan-kepercayaan': { title: 'Kepercayaan', emoji: '🤞', desc: 'Sejauh mana anda trust?' },
  'perhubungan-komitmen': { title: 'Komitmen', emoji: '💍', desc: 'Gaya commitment anda?' },
  'perhubungan-komunikasi-ms': { title: 'Komunikasi', emoji: '💬', desc: 'Gaya relationship communication?' },
  'perhubungan-pasangan-ideal': { title: 'Pasangan Ideal', emoji: '💞', desc: 'Jenis pasangan ideal anda?' },
  'perhubungan-putus': { title: 'Putus Cinta', emoji: '💔', desc: 'Gaya handle breakup anda?' },
  'perhubungan-romantik': { title: 'Romantik', emoji: '🌹', desc: 'Sejauh mana romantik anda?' },
  'personaliti-badminton-ms': { title: 'Badminton', emoji: '🏸', desc: 'Gaya badminton anda?' },
  'personaliti-beach-ms': { title: 'Beach', emoji: '🏖️', desc: 'Gaya pantai anda?' },
  'personaliti-breakfast-ms': { title: 'Breakfast', emoji: '🍳', desc: 'Gaya breakfast anda?' },
  'personaliti-cendol': { title: 'Cendol', emoji: '🍧', desc: 'Jenis cendol lover anda?' },
  'personaliti-cerewet': { title: 'Cerewet', emoji: '😤', desc: 'Sejauh mana anda cerewet?' },
  'personaliti-char-kuey-teow': { title: 'Char Kuey Teow', emoji: '🍜', desc: 'Jenis CKT lover anda?' },
  'personaliti-cinema-ms': { title: 'Cinema', emoji: '🎬', desc: 'Gaya cinema anda?' },
  'personaliti-cycling-ms': { title: 'Cycling', emoji: '🚴', desc: 'Gaya cycling anda?' },
  'personaliti-dinner-ms': { title: 'Dinner', emoji: '🍽️', desc: 'Gaya dinner anda?' },
  'personaliti-durian': { title: 'Durian', emoji: '🥇', desc: 'Jenis durian lover anda?' },
  'personaliti-football-ms': { title: 'Football', emoji: '⚽', desc: 'Gaya football fan anda?' },
  'personaliti-garang': { title: 'Garang', emoji: '😠', desc: 'Sejauh mana anda garang?' },
  'personaliti-gym-ms': { title: 'Gym', emoji: '🏋️', desc: 'Gaya gym anda?' },
  'personaliti-hiking-ms': { title: 'Hiking', emoji: '🥾', desc: 'Gaya hiking anda?' },
  'personaliti-johor-ms': { title: 'Johorian', emoji: '🏖️', desc: 'Sejauh mana Johorian anda?' },
  'personaliti-karaoke-ms': { title: 'Karaoke', emoji: '🎤', desc: 'Gaya karaoke anda?' },
  'personaliti-kl-ms': { title: 'KL', emoji: '🏙️', desc: 'Sejauh mana anak KL anda?' },
  'personaliti-laksa': { title: 'Laksa', emoji: '🍜', desc: 'Jenis laksa lover anda?' },
  'personaliti-mall-ms': { title: 'Mall', emoji: '🏬', desc: 'Gaya mall anda?' },
  'personaliti-minum-ms': { title: 'Minum', emoji: '☕', desc: 'Gaya minum anda?' },
  'personaliti-music-ms': { title: 'Music', emoji: '🎵', desc: 'Gaya music anda?' },
  'personaliti-party-ms': { title: 'Party', emoji: '🎉', desc: 'Gaya party anda?' },
  'personaliti-pasar-ms': { title: 'Pasar', emoji: '🛒', desc: 'Gaya pasar anda?' },
  'personaliti-penang-ms': { title: 'Penangite', emoji: '🍜', desc: 'Sejauh mana Penangite anda?' },
  'personaliti-pendiam-ms': { title: 'Pendiam', emoji: '🤐', desc: 'Sejauh mana anda pendiam?' },
  'personaliti-rajin': { title: 'Rajin', emoji: '💪', desc: 'Sejauh mana anda rajin?' },
  'personaliti-raya': { title: 'Raya', emoji: '🕌', desc: 'Gaya raya anda?' },
  'personaliti-rendang': { title: 'Rendang', emoji: '🍛', desc: 'Jenis rendang lover anda?' },
  'personaliti-roadtrip-ms': { title: 'Road Trip', emoji: '🚗', desc: 'Gaya road trip anda?' },
  'personaliti-rojak': { title: 'Rojak', emoji: '🥗', desc: 'Jenis rojak lover anda?' },
  'personaliti-satay': { title: 'Satay', emoji: '🍢', desc: 'Jenis satay lover anda?' },
  'personaliti-swimming-ms': { title: 'Swimming', emoji: '🏊', desc: 'Gaya swimming anda?' },
  'psikologi-emosi': { title: 'Emosi', emoji: '😢', desc: 'Gaya handle emosi anda?' },
  'psikologi-empati-ms': { title: 'Empati', emoji: '💗', desc: 'Sejauh mana empati anda?' },
  'psikologi-fokus': { title: 'Fokus', emoji: '🎯', desc: 'Sejauh mana fokus anda?' },
  'psikologi-gembira-ms': { title: 'Gembira', emoji: '😊', desc: 'Sejauh mana anda gembira?' },
  'psikologi-humor': { title: 'Humor', emoji: '😂', desc: 'Gaya humor anda?' },
  'psikologi-kebimbangan': { title: 'Kebimbangan', emoji: '😰', desc: 'Gaya handle anxiety anda?' },
  'psikologi-keyakinan': { title: 'Keyakinan', emoji: '💪', desc: 'Sejauh mana confidence anda?' },
  'psikologi-kreatif': { title: 'Kreativiti', emoji: '🎨', desc: 'Sejauh mana creative anda?' },
  'psikologi-malu-ms': { title: 'Malu', emoji: '😳', desc: 'Sejauh mana anda pemalu?' },
  'psikologi-marah-ms': { title: 'Marah', emoji: '😠', desc: 'Gaya handle anger anda?' },
  'psikologi-optimis-ms': { title: 'Optimis', emoji: '☀️', desc: 'Sejauh mana optimis anda?' },
  'psikologi-perfeksionis': { title: 'Perfeksionis', emoji: '✨', desc: 'Sejauh mana perfectionist anda?' },
  'psikologi-sabar-ms': { title: 'Sabar', emoji: '🙏', desc: 'Sejauh mana sabar anda?' },
  'psikologi-sedih-ms': { title: 'Sedih', emoji: '😢', desc: 'Gaya handle sadness anda?' },
  'psikologi-sosial': { title: 'Sosial', emoji: '👥', desc: 'Sejauh mana sosial anda?' },
  'psikologi-spontan': { title: 'Spontan', emoji: '⚡', desc: 'Sejauh mana spontan anda?' },
  'psikologi-takut-ms': { title: 'Takut', emoji: '😨', desc: 'Gaya handle fear anda?' },
  'psikologi-tegas': { title: 'Tegas', emoji: '💪', desc: 'Sejauh mana tegas anda?' },
  'psikologi-tekanan': { title: 'Tekanan', emoji: '😤', desc: 'Gaya handle stress anda?' },
  'rakan-ms': { title: 'Rakan', emoji: '👫', desc: 'Jenis kawan mana anda?' },
  'sosial-facebook-ms': { title: 'Facebook', emoji: '📘', desc: 'Gaya Facebook anda?' },
  'sosial-linkedin-ms': { title: 'LinkedIn', emoji: '💼', desc: 'Gaya LinkedIn anda?' },
  'sosial-telegram-ms': { title: 'Telegram', emoji: '✈️', desc: 'Gaya Telegram anda?' },
  'sosial-twitter-ms': { title: 'Twitter', emoji: '🐦', desc: 'Gaya Twitter anda?' },
  'sosial-youtube-ms': { title: 'YouTube', emoji: '▶️', desc: 'Gaya YouTube anda?' },
  'sukan-badminton-ms': { title: 'Badminton', emoji: '🏸', desc: 'Gaya badminton anda?' },
  'sukan-bola-sepak-ms': { title: 'Bola Sepak', emoji: '⚽', desc: 'Gaya football anda?' },
  'sukan-gym-ms': { title: 'Gym', emoji: '🏋️', desc: 'Gaya gym anda?' },
  'sukan-jogging-ms': { title: 'Jogging', emoji: '🏃', desc: 'Gaya jogging anda?' },
  'sukan-renang-ms': { title: 'Renang', emoji: '🏊', desc: 'Gaya renang anda?' },
  'teknologi-e-wallet': { title: 'E-Wallet', emoji: '💳', desc: 'Gaya e-wallet anda?' },
  'teknologi-internet-ms': { title: 'Internet', emoji: '🌐', desc: 'Gaya internet anda?' },
  'teknologi-laptop-ms': { title: 'Laptop', emoji: '💻', desc: 'Gaya laptop anda?' },
  'teknologi-online-banking': { title: 'Online Banking', emoji: '🏦', desc: 'Gaya online banking anda?' },
  'teknologi-smartphone-ms': { title: 'Smartphone', emoji: '📱', desc: 'Gaya smartphone anda?' },
  'tetamu-ms': { title: 'Tetamu', emoji: '🏠', desc: 'Gaya jadi tetamu anda?' },
  'tradisi-gotong-royong': { title: 'Gotong Royong', emoji: '🤝', desc: 'Gaya gotong-royong anda?' },
  'tradisi-kelas-agama': { title: 'Kelas Agama', emoji: '📖', desc: 'Gaya kelas agama anda?' },
  'tradisi-majlis-kahwin': { title: 'Majlis Kahwin', emoji: '💒', desc: 'Gaya wedding anda?' },
  'tradisi-open-house': { title: 'Open House', emoji: '🏠', desc: 'Gaya open house anda?' },
  'tradisi-pasar-malam': { title: 'Pasar Malam', emoji: '🌙', desc: 'Gaya pasar malam anda?' },
};

// Generate remaining tests
let generated = 0;
folders.forEach(folder => {
  const mapping = testMappings[folder];
  if (mapping) {
    const content = generateTest(folder, mapping.title, mapping.emoji, mapping.desc);
    const filePath = path.join(testsDir, folder, 'data.ts');
    fs.writeFileSync(filePath, content);
    generated++;
    console.log(`Generated: ${folder}`);
  } else {
    console.log(`No mapping for: ${folder}`);
  }
});

console.log(`\nGenerated ${generated} tests`);
console.log(`Remaining: ${folders.length - generated}`);
