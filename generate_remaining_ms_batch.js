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

// Map of folder names to titles and emojis
const testMappings = {
  'jenaka-gelak': { title: 'Gaya Gelak', emoji: '😂', desc: 'Macam mana anda ketawa?' },
  'jenaka-lawak': { title: 'Gaya Lawak', emoji: '🤣', desc: 'Jenis humor anda apa?' },
  'jenaka-meme-ms': { title: 'Gaya Meme', emoji: '📱', desc: 'Meme jenis apa anda suka?' },
  'jenaka-pantun': { title: 'Gaya Pantun', emoji: '📜', desc: 'Sejauh mana anda master pantun?' },
  'jenaka-sindir': { title: 'Gaya Sindir', emoji: '😏', desc: 'Macam mana anda menyindir?' },
  'jiran-ms': { title: 'Gaya Jiran', emoji: '🏘️', desc: 'Jenis jiran mana anda?' },
  'kehidupan-cuti': { title: 'Gaya Cuti', emoji: '🏖️', desc: 'Macam mana anda spend cuti?' },
  'kehidupan-hujan': { title: 'Gaya Hujan', emoji: '🌧️', desc: 'Apa anda buat bila hujan?' },
  'kehidupan-hujung-minggu': { title: 'Gaya Hujung Minggu', emoji: '📅', desc: 'Macam mana weekend anda?' },
  'kehidupan-malam-ms': { title: 'Gaya Malam', emoji: '🌙', desc: 'Anda night owl?' },
  'kehidupan-pagi-ms': { title: 'Gaya Pagi', emoji: '🌅', desc: 'Macam mana morning routine anda?' },
  'keluarga-balik-kampung': { title: 'Gaya Balik Kampung', emoji: '🚗', desc: 'Macam mana balik kampung anda?' },
  'keluarga-gathering': { title: 'Gaya Family Gathering', emoji: '👨‍👩‍👧‍👦', desc: 'Role anda dalam family gathering?' },
  'keluarga-kenduri': { title: 'Gaya Kenduri', emoji: '🍽️', desc: 'Macam mana anda di kenduri?' },
  'keluarga-role': { title: 'Family Role', emoji: '👪', desc: 'Apa role anda dalam family?' },
  'keluarga-siblings': { title: 'Gaya Siblings', emoji: '👫', desc: 'Hubungan anda dengan adik beradik?' },
  'kerja-akauntan': { title: 'Potensi Akauntan', emoji: '📊', desc: 'Sesuai ke jadi akauntan?' },
  'kerja-cikgu': { title: 'Potensi Cikgu', emoji: '👩‍🏫', desc: 'Sesuai ke jadi cikgu?' },
  'kerja-doktor': { title: 'Potensi Doktor', emoji: '👨‍⚕️', desc: 'Sesuai ke jadi doktor?' },
  'kerja-jurutera': { title: 'Potensi Jurutera', emoji: '👷', desc: 'Sesuai ke jadi engineer?' },
  'kerja-peguam': { title: 'Potensi Peguam', emoji: '⚖️', desc: 'Sesuai ke jadi lawyer?' },
  'kerjaya-gaya-kerja': { title: 'Gaya Kerja', emoji: '💼', desc: 'Apa work style anda?' },
  'kerjaya-kepimpinan': { title: 'Gaya Kepimpinan', emoji: '👑', desc: 'Apa leadership style anda?' },
  'kerjaya-kerja-berpasukan': { title: 'Kerja Berpasukan', emoji: '🤝', desc: 'Macam mana anda dalam teamwork?' },
  'kerjaya-naik-pangkat': { title: 'Potensi Naik Pangkat', emoji: '📈', desc: 'Sejauh mana promotion potential?' },
  'keseronokan-bermain-game': { title: 'Gaya Gaming', emoji: '🎮', desc: 'Jenis gamer mana anda?' },
  'keseronokan-jalan-jalan': { title: 'Gaya Jalan-Jalan', emoji: '🚶', desc: 'Macam mana anda jalan-jalan?' },
  'keseronokan-menari': { title: 'Gaya Dance', emoji: '💃', desc: 'Macam mana anda menari?' },
  'keseronokan-menonton-tv': { title: 'Gaya TV', emoji: '📺', desc: 'Macam mana anda menonton TV?' },
  'keseronokan-menyanyi': { title: 'Gaya Singing', emoji: '🎤', desc: 'Macam mana anda menyanyi?' },
  'kesihatan-diet': { title: 'Gaya Diet', emoji: '🥗', desc: 'Macam mana diet anda?' },
  'kesihatan-makan': { title: 'Gaya Makan', emoji: '🍽️', desc: 'Macam mana eating habits anda?' },
  'kesihatan-mental-ms': { title: 'Mental Health', emoji: '🧠', desc: 'Macam mana mental health anda?' },
  'kesihatan-senaman': { title: 'Gaya Exercise', emoji: '🏃', desc: 'Macam mana workout routine anda?' },
  'kesihatan-tidur-ms': { title: 'Gaya Tidur', emoji: '😴', desc: 'Macam mana sleep habits anda?' },
  'kewangan-belanja': { title: 'Gaya Belanja', emoji: '🛒', desc: 'Macam mana spending habits anda?' },
  'kewangan-bisnes': { title: 'Potensi Bisnes', emoji: '💰', desc: 'Sesuai ke jadi entrepreneur?' },
  'kewangan-hutang': { title: 'Gaya Hutang', emoji: '💳', desc: 'Macam mana anda handle debt?' },
  'kewangan-pelaburan': { title: 'Gaya Investment', emoji: '📈', desc: 'Macam mana investment style anda?' },
  'kewangan-simpanan': { title: 'Gaya Simpanan', emoji: '🏦', desc: 'Macam mana saving habits anda?' },
  'komunikasi-email-ms': { title: 'Gaya Email', emoji: '📧', desc: 'Macam mana email style anda?' },
  'komunikasi-meeting-online': { title: 'Gaya Meeting Online', emoji: '💻', desc: 'Macam mana anda dalam online meeting?' },
  'komunikasi-mesej': { title: 'Gaya Mesej', emoji: '💬', desc: 'Macam mana texting style anda?' },
  'komunikasi-panggilan': { title: 'Gaya Call', emoji: '📞', desc: 'Macam mana phone call habits anda?' },
  'komunikasi-whatsapp-ms': { title: 'Gaya WhatsApp', emoji: '📱', desc: 'Macam mana WhatsApp behavior anda?' },
  'lifestyle-coffee-lover': { title: 'Coffee Lover', emoji: '☕', desc: 'Jenis coffee person mana anda?' },
  'lifestyle-fashion': { title: 'Fashion Style', emoji: '👗', desc: 'Apa fashion sense anda?' },
  'lifestyle-fitness': { title: 'Fitness Lifestyle', emoji: '💪', desc: 'Sejauh mana fitness enthusiast anda?' },
  'lifestyle-morning-routine': { title: 'Morning Routine', emoji: '🌞', desc: 'Macam mana morning routine anda?' },
  'lifestyle-night-owl': { title: 'Night Owl', emoji: '🦉', desc: 'Sejauh mana anda night owl?' },
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
  }
});

console.log(`\nGenerated ${generated} tests`);
console.log(`Remaining: ${folders.length - generated}`);
