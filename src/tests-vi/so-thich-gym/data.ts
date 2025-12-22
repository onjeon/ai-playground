// Phong Cách Tập Gym
// Khám phá phong cách tập gym phù hợp với tính cách và mục tiêu của bạn

export const questions = [
  {
    id: 1,
    question: "Mục tiêu chính khi bạn đến gym là:",
    options: [
      { text: "Tăng cơ và sức mạnh tối đa", type: "A" },
      { text: "Giảm mỡ và có body đẹp", type: "B" },
      { text: "Duy trì sức khỏe và năng lượng", type: "C" },
      { text: "Giải tỏa stress và vui vẻ", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thích tập loại bài nào nhất?",
    options: [
      { text: "Tập tạ nặng, compound exercises", type: "A" },
      { text: "HIIT hoặc circuit training", type: "B" },
      { text: "Cardio kết hợp với tạ nhẹ", type: "C" },
      { text: "Lớp nhóm như spinning, zumba", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi tập, bạn theo dõi điều gì nhiều nhất?",
    options: [
      { text: "Trọng lượng tạ và số rep", type: "A" },
      { text: "Lượng calo đốt cháy", type: "B" },
      { text: "Thời gian tập và nhịp tim", type: "C" },
      { text: "Cảm giác và niềm vui khi tập", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn đến gym vào thời điểm nào?",
    options: [
      { text: "Giờ cố định, nghiêm ngặt như lịch làm việc", type: "A" },
      { text: "Sáng sớm để bắt đầu ngày năng động", type: "B" },
      { text: "Chiều tối sau giờ làm", type: "C" },
      { text: "Khi nào rảnh và có hứng", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn nghĩ gì về chế độ ăn uống?",
    options: [
      { text: "Theo dõi macro chặt chẽ, ăn sạch", type: "A" },
      { text: "Kiểm soát calo, ăn đủ protein", type: "B" },
      { text: "Ăn lành mạnh nhưng không quá strict", type: "C" },
      { text: "Ăn những gì thích, tập để được ăn", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi không muốn đến gym, bạn:",
    options: [
      { text: "Vẫn đi vì kỷ luật quan trọng hơn động lực", type: "A" },
      { text: "Đi nhưng tập nhẹ hơn bình thường", type: "B" },
      { text: "Tập ở nhà thay thế", type: "C" },
      { text: "Nghỉ ngơi, mai tập tiếp", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn tập gym cùng ai?",
    options: [
      { text: "Có gym buddy cùng mục tiêu", type: "A" },
      { text: "Tập một mình, có tai nghe", type: "B" },
      { text: "Thuê PT để hướng dẫn", type: "C" },
      { text: "Tham gia các lớp nhóm", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Thời gian mỗi buổi tập của bạn là:",
    options: [
      { text: "90 phút - 2 tiếng, tập kỹ từng nhóm cơ", type: "A" },
      { text: "45-60 phút, hiệu quả và tập trung", type: "B" },
      { text: "30-45 phút, vừa đủ", type: "C" },
      { text: "Tùy hứng, có thể 20 phút hoặc 1 tiếng", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn sử dụng supplement không?",
    options: [
      { text: "Nhiều loại: whey, creatine, pre-workout...", type: "A" },
      { text: "Chỉ protein powder cơ bản", type: "B" },
      { text: "Vitamin và khoáng chất", type: "C" },
      { text: "Không dùng, chỉ ăn uống bình thường", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Khi đạt được mục tiêu, bạn:",
    options: [
      { text: "Đặt mục tiêu mới cao hơn ngay", type: "A" },
      { text: "Ăn mừng rồi tiếp tục maintain", type: "B" },
      { text: "Hài lòng và duy trì thành quả", type: "C" },
      { text: "Không đặt mục tiêu cụ thể từ đầu", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn coi gym là:",
    options: [
      { text: "Đam mê và phong cách sống", type: "A" },
      { text: "Công cụ để đạt được body mong muốn", type: "B" },
      { text: "Hoạt động tốt cho sức khỏe", type: "C" },
      { text: "Nơi giao lưu và giải trí", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Nếu phải nghỉ gym 2 tuần, bạn cảm thấy:",
    options: [
      { text: "Rất khó chịu, lo mất muscle", type: "A" },
      { text: "Hơi bực nhưng sẽ tập lại ngay khi có thể", type: "B" },
      { text: "Bình thường, nghỉ ngơi cũng tốt", type: "C" },
      { text: "Không sao, có nhiều hoạt động khác", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Gymer Hardcore",
    emoji: "🏋️",
    description: "Gym là cuộc sống của bạn! Bạn theo đuổi sự hoàn hảo về thể chất với kỷ luật thép. Powerlifting, bodybuilding hay strongman đều phù hợp với tinh thần chiến binh của bạn.",
    traits: ["Kỷ luật", "Quyết tâm", "Đam mê", "Nghiêm túc"],
    strengths: ["Sức mạnh ấn tượng", "Body đáng ngưỡng mộ", "Tinh thần thép"],
    weaknesses: ["Có thể quá ám ảnh", "Khó cân bằng cuộc sống"],
    tips: ["Nhớ nghỉ ngơi đủ để phục hồi", "Đôi khi hãy tập vui vẻ không áp lực"],
  },
  B: {
    type: "B",
    title: "Fitness Enthusiast",
    emoji: "💪",
    description: "Bạn tập gym với mục tiêu rõ ràng và phương pháp khoa học. Bạn biết cách kết hợp tập luyện và dinh dưỡng để đạt được body mong muốn một cách bền vững.",
    traits: ["Có mục tiêu", "Khoa học", "Kiên định", "Thực tế"],
    strengths: ["Kết quả rõ ràng", "Tiến bộ ổn định", "Kiến thức tốt"],
    weaknesses: ["Có thể thiếu linh hoạt", "Đôi khi quá tập trung vào kết quả"],
    tips: ["Đừng quên tận hưởng quá trình", "Thử các môn thể thao mới"],
  },
  C: {
    type: "C",
    title: "Health-First Gymgoer",
    emoji: "🌟",
    description: "Sức khỏe là ưu tiên hàng đầu của bạn. Bạn đến gym để duy trì một cơ thể khỏe mạnh và đầy năng lượng, không bị ám ảnh bởi cân nặng hay số đo.",
    traits: ["Cân bằng", "Lành mạnh", "Bền vững", "Tích cực"],
    strengths: ["Sức khỏe tốt", "Năng lượng dồi dào", "Không stress về gym"],
    weaknesses: ["Tiến bộ có thể chậm", "Thiếu thử thách"],
    tips: ["Đặt mục tiêu cụ thể để có động lực", "Thử nâng dần cường độ tập"],
  },
  D: {
    type: "D",
    title: "Social Gymmer",
    emoji: "🎉",
    description: "Gym với bạn là nơi giao lưu, vui chơi và giải stress. Bạn thích các lớp nhóm, tập với bạn bè và biến mỗi buổi tập thành một trải nghiệm thú vị.",
    traits: ["Vui vẻ", "Hòa đồng", "Linh hoạt", "Thoải mái"],
    strengths: ["Duy trì động lực dễ dàng", "Kết nối nhiều người", "Không bị burnout"],
    weaknesses: ["Kết quả không nhất quán", "Có thể thiếu kỷ luật"],
    tips: ["Thêm một chút cấu trúc vào lịch tập", "Học thêm về form và kỹ thuật"],
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
