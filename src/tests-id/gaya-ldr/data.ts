// Gaya LDR (Long Distance Relationship) Kamu
// Tes ini mengungkap bagaimana kamu menjalani hubungan jarak jauh!

export const questions = [
  {
    id: 1,
    question: "Hal terpenting dalam menjaga LDR menurutmu?",
    options: [
      { text: "Komunikasi intens setiap hari", type: "A" },
      { text: "Trust dan komitmen yang kuat", type: "B" },
      { text: "Quality communication walau tidak sering", type: "C" },
      { text: "Punya kehidupan sendiri yang fulfilled", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Frekuensi ideal video call dengan pasangan LDR?",
    options: [
      { text: "Setiap hari, wajib!", type: "A" },
      { text: "Beberapa kali seminggu", type: "B" },
      { text: "Seminggu sekali cukup", type: "C" },
      { text: "Kalau sempat dan tidak dipaksakan", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Saat kangen berat, kamu...",
    options: [
      { text: "Video call panjang sampai puas", type: "A" },
      { text: "Kirim voice note atau chat sweet", type: "B" },
      { text: "Lihat foto/video kenangan bersama", type: "C" },
      { text: "Distract diri dengan aktivitas lain", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Tentang update kehidupan sehari-hari ke pasangan, kamu...",
    options: [
      { text: "Share semua, dari bangun tidur sampai mau tidur", type: "A" },
      { text: "Hal-hal penting dan highlight aja", type: "B" },
      { text: "Sesekali, tidak perlu semua diceritain", type: "C" },
      { text: "Minimal, dia tidak perlu tau semua", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Rasa cemburu dalam LDR, kamu handle dengan...",
    options: [
      { text: "Langsung tanya dan komunikasikan", type: "A" },
      { text: "Self-reflect dulu, baru bicara kalau perlu", type: "B" },
      { text: "Trust dan tidak terlalu dipikirin", type: "C" },
      { text: "Susah handle, sering cemas", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Ketemu pasangan setelah lama LDR, prioritasmu?",
    options: [
      { text: "Quality time maksimal, 24/7 bersama", type: "A" },
      { text: "Balance antara berdua dan aktivitas lain", type: "B" },
      { text: "Enjoy tanpa agenda ketat", type: "C" },
      { text: "Catch up dan bahas hal penting", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Saat pasangan sibuk dan jarang bisa komunikasi, kamu...",
    options: [
      { text: "Sedih dan need reassurance", type: "A" },
      { text: "Mengerti tapi tetap express kalau kangen", type: "B" },
      { text: "Fine, punya aktivitas sendiri", type: "C" },
      { text: "Agak curiga, kenapa sibuk banget?", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Surprise untuk pasangan LDR, gayamu?",
    options: [
      { text: "Sering! Kirim paket, surprise visit, dll", type: "A" },
      { text: "Sesekali di momen spesial", type: "B" },
      { text: "Jarang, lebih ke verbal expression", type: "C" },
      { text: "Tidak terlalu suka surprise culture", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Diskusi tentang 'end goal' LDR (kapan bisa bersama), kamu...",
    options: [
      { text: "Sering bahas dan punya timeline jelas", type: "A" },
      { text: "Sudah punya rencana walau tidak rigid", type: "B" },
      { text: "Lihat nanti, mengalir aja", type: "C" },
      { text: "Jarang bahas, takut pressure", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Support system selain pasangan saat LDR?",
    options: [
      { text: "Pasangan tetap support utama", type: "A" },
      { text: "Punya teman dan keluarga yang support", type: "B" },
      { text: "Mandiri, tidak terlalu butuh support", type: "C" },
      { text: "Struggle, LDR itu lonely", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Hal tersulit dari LDR menurutmu?",
    options: [
      { text: "Tidak bisa fisik bersama dan sentuhan", type: "A" },
      { text: "Miss momen penting dalam hidup masing-masing", type: "B" },
      { text: "Miscommunication karena jarak", type: "C" },
      { text: "Trust dan jealousy issues", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Menurutmu, LDR itu...",
    options: [
      { text: "Worth it kalau orangnya tepat", type: "A" },
      { text: "Butuh effort ekstra tapi bisa berhasil", type: "B" },
      { text: "Susah tapi bukan tidak mungkin", type: "C" },
      { text: "Sangat challenging dan tidak untuk semua orang", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "LDR Intensif",
    emoji: "💑",
    description: "Kamu menjalani LDR dengan sangat intensif! Komunikasi adalah segalanya dan kamu berusaha menjaga koneksi seerat mungkin walau jarak memisahkan.",
    traits: ["Intensif", "Communicative", "Romantic", "Committed"],
    strengths: ["Strong connection maintained", "Partner feels loved", "Dedicated"],
    weaknesses: ["Bisa exhausting", "Dependent on constant contact", "Pressure besar"],
    tips: ["Balance itu penting", "Trust juga tanpa 24/7 contact", "Have life outside relationship"],
  },
  B: {
    type: "B",
    title: "LDR Seimbang",
    emoji: "⚖️",
    description: "Kamu punya approach yang balanced untuk LDR! Komunikasi cukup, trust kuat, dan masing-masing punya kehidupan sendiri. Ideal untuk long-term LDR.",
    traits: ["Balanced", "Trusting", "Secure", "Independent yet connected"],
    strengths: ["Sustainable approach", "Healthy dynamics", "Strong foundation"],
    weaknesses: ["Kadang bisa lebih expressive", "Might seem distant to needy partner"],
    tips: ["Great approach! Maintain ini", "Sesekali extra romantic juga oke"],
  },
  C: {
    type: "C",
    title: "LDR Independen",
    emoji: "🦋",
    description: "Kamu menjalani LDR dengan sangat independen. Punya kehidupan sendiri yang fulfilling dan tidak terlalu bergantung pada komunikasi konstan.",
    traits: ["Independent", "Self-sufficient", "Low-maintenance", "Trusting"],
    strengths: ["Not clingy", "Own fulfillment", "Flexible"],
    weaknesses: ["Partner might feel neglected", "Could drift apart", "Miss deep connection"],
    tips: ["Make sure partner feels valued", "Independence bagus, tapi show love juga"],
  },
  D: {
    type: "D",
    title: "LDR Struggling",
    emoji: "💔",
    description: "LDR adalah challenge besar buatmu. Ada anxiety, trust issues, atau kesulitan dengan jarak. Ini valid, LDR memang tidak mudah untuk semua orang.",
    traits: ["Anxious", "Struggling", "Need reassurance", "Distance-sensitive"],
    strengths: ["Aware of needs", "Values closeness", "Honest about struggles"],
    weaknesses: ["Stressful for both", "Trust issues", "May not be sustainable"],
    tips: ["LDR tidak untuk semua orang", "Discuss honestly dengan partner", "Consider if worth the struggle"],
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
