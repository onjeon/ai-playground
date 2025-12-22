// Gaya Belajar Kamu
// Tes ini mengungkap cara terbaik kamu menyerap informasi dan belajar!

export const questions = [
  {
    id: 1,
    question: "Cara terbaik kamu mengingat informasi baru?",
    options: [
      { text: "Lihat diagram, gambar, atau video", type: "A" },
      { text: "Dengarkan penjelasan atau diskusi", type: "B" },
      { text: "Tulis catatan atau baca berulang", type: "C" },
      { text: "Praktik langsung dan eksperimen", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Saat belajar skill baru, kamu prefer...",
    options: [
      { text: "Nonton tutorial video", type: "A" },
      { text: "Dengerin podcast atau penjelasan", type: "B" },
      { text: "Baca buku atau artikel", type: "C" },
      { text: "Langsung coba dan trial-error", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Di kelas atau training, kamu paling engage ketika...",
    options: [
      { text: "Ada presentasi visual yang menarik", type: "A" },
      { text: "Ada diskusi dan tanya jawab", type: "B" },
      { text: "Ada handout atau materi tertulis", type: "C" },
      { text: "Ada hands-on activity atau praktik", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Cara kamu memberi arahan ke orang lain?",
    options: [
      { text: "Gambar atau tunjukkan visual", type: "A" },
      { text: "Jelaskan secara verbal", type: "B" },
      { text: "Tulis step-by-step instructions", type: "C" },
      { text: "Demonstrasikan langsung", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Saat harus menghafal sesuatu, kamu...",
    options: [
      { text: "Buat mind map atau visual aids", type: "A" },
      { text: "Ucapkan berulang-ulang (recite)", type: "B" },
      { text: "Tulis berkali-kali", type: "C" },
      { text: "Associate dengan gerakan atau aksi", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Environment belajar idealmu?",
    options: [
      { text: "Ruangan dengan whiteboard dan visual aids", type: "A" },
      { text: "Tempat bisa diskusi dengan orang lain", type: "B" },
      { text: "Tempat tenang untuk membaca", type: "C" },
      { text: "Space untuk bergerak dan praktik", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Ketika tidak mengerti sesuatu, kamu...",
    options: [
      { text: "Cari video atau infografis yang menjelaskan", type: "A" },
      { text: "Tanya langsung ke orang yang tau", type: "B" },
      { text: "Baca lebih banyak sumber tertulis", type: "C" },
      { text: "Coba sendiri sampai ngerti", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Dalam meeting, kamu paling ingat...",
    options: [
      { text: "Slides atau visual yang ditampilkan", type: "A" },
      { text: "Apa yang dikatakan presenter", type: "B" },
      { text: "Catatan yang kamu tulis", type: "C" },
      { text: "Contoh atau demo yang diberikan", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Hobi belajar yang paling kamu nikmati?",
    options: [
      { text: "Menonton dokumenter atau video edukatif", type: "A" },
      { text: "Mengikuti podcast atau audiobook", type: "B" },
      { text: "Membaca buku atau artikel", type: "C" },
      { text: "Workshop atau kelas praktik", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Kalau harus mengajarkan sesuatu, caramu...",
    options: [
      { text: "Buat presentasi visual yang menarik", type: "A" },
      { text: "Jelaskan dengan cerita dan contoh verbal", type: "B" },
      { text: "Siapkan materi tertulis yang lengkap", type: "C" },
      { text: "Langsung ajak praktik bersama", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Saat browsing internet untuk belajar, kamu...",
    options: [
      { text: "Lebih suka YouTube atau platform video", type: "A" },
      { text: "Dengerin podcast sambil multitask", type: "B" },
      { text: "Baca artikel dan blog posts", type: "C" },
      { text: "Cari tutorial yang bisa diikuti step-by-step", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Tanda kamu sudah benar-benar paham sesuatu?",
    options: [
      { text: "Bisa visualisasikan di kepala", type: "A" },
      { text: "Bisa menjelaskan ke orang lain", type: "B" },
      { text: "Bisa menuliskannya dengan jelas", type: "C" },
      { text: "Bisa melakukannya sendiri", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Visual Learner",
    emoji: "👁️",
    description: "Kamu adalah visual learner! Informasi paling mudah diserap melalui gambar, diagram, video, dan visual representation. Mata adalah pintu belajarmu.",
    traits: ["Visual-oriented", "Spatial awareness", "Image-based memory", "Pattern recognizer"],
    strengths: ["Cepat memahami dari visual", "Bisa see big picture", "Creative visualization"],
    weaknesses: ["Susah dengan pure text", "Butuh visual aids"],
    tips: ["Gunakan mind maps dan diagrams", "Warnai notes untuk membantu ingatan"],
  },
  B: {
    type: "B",
    title: "Auditory Learner",
    emoji: "👂",
    description: "Kamu adalah auditory learner! Mendengarkan adalah cara terbaik menyerap informasi. Diskusi, penjelasan verbal, dan audio content adalah mediummu.",
    traits: ["Sound-oriented", "Good listener", "Verbal processor", "Discussion-lover"],
    strengths: ["Bisa belajar sambil multitask (audio)", "Good at discussions", "Remember conversations"],
    weaknesses: ["Distracted by noise", "Susah dengan visual-only content"],
    tips: ["Gunakan podcast dan audiobooks", "Discuss what you learn dengan orang lain"],
  },
  C: {
    type: "C",
    title: "Reading/Writing Learner",
    emoji: "📝",
    description: "Kamu adalah reading/writing learner! Teks tertulis adalah medium terbaikmu. Baca, tulis, dan catat adalah cara kamu memproses informasi.",
    traits: ["Text-oriented", "Note-taker", "Reader", "Writer"],
    strengths: ["Deep comprehension from reading", "Good at documenting", "Self-study capable"],
    weaknesses: ["May need more time", "Susah dengan oral instructions only"],
    tips: ["Always take notes", "Re-write key concepts dalam kata-katamu sendiri"],
  },
  D: {
    type: "D",
    title: "Kinesthetic Learner",
    emoji: "🤲",
    description: "Kamu adalah kinesthetic/hands-on learner! Belajar dengan melakukan adalah gayamu. Praktik, eksperimen, dan pengalaman langsung adalah guru terbaikmu.",
    traits: ["Hands-on", "Experiential", "Movement-oriented", "Practical"],
    strengths: ["Learn by doing", "Good at practical skills", "Remember through experience"],
    weaknesses: ["Susah duduk diam dan dengarkan lecture", "Need physical engagement"],
    tips: ["Cari kesempatan praktik", "Associate learning dengan movement atau activity"],
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
