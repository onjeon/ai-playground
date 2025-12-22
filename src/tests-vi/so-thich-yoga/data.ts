// Phong Cách Tập Yoga
// Khám phá phong cách yoga phù hợp với tính cách và nhu cầu của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn bắt đầu tập yoga vì lý do gì?",
    options: [
      { text: "Tăng sức mạnh và độ dẻo dai", type: "A" },
      { text: "Giảm stress và cân bằng tâm trí", type: "B" },
      { text: "Chữa lành đau nhức cơ thể", type: "C" },
      { text: "Tìm hiểu về tâm linh và thiền định", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Trong buổi tập yoga, bạn thích nhất điều gì?",
    options: [
      { text: "Những tư thế thử thách sức mạnh", type: "A" },
      { text: "Dòng chảy mượt mà giữa các tư thế", type: "B" },
      { text: "Thư giãn sâu và kéo giãn cơ", type: "C" },
      { text: "Phần thiền định và thở cuối buổi", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn muốn buổi tập yoga kéo dài bao lâu?",
    options: [
      { text: "60-90 phút để tập kỹ và đổ mồ hôi", type: "A" },
      { text: "45-60 phút vừa đủ và hiệu quả", type: "B" },
      { text: "30-45 phút nhẹ nhàng", type: "C" },
      { text: "20-30 phút tập trung vào thiền", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi gặp tư thế khó, bạn thường:",
    options: [
      { text: "Thử thách bản thân đến khi làm được", type: "A" },
      { text: "Tập từ từ theo hướng dẫn", type: "B" },
      { text: "Dùng dụng cụ hỗ trợ để dễ hơn", type: "C" },
      { text: "Bỏ qua và tập tư thế khác", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn thích tập yoga ở đâu?",
    options: [
      { text: "Studio chuyên nghiệp với giáo viên", type: "A" },
      { text: "Lớp nhóm tại gym", type: "B" },
      { text: "Ở nhà theo video hướng dẫn", type: "C" },
      { text: "Ngoài trời, trong công viên", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Nhịp độ buổi tập bạn ưa thích là:",
    options: [
      { text: "Nhanh, liên tục, nhiều chuyển động", type: "A" },
      { text: "Vừa phải, có nhịp thở rõ ràng", type: "B" },
      { text: "Chậm, giữ tư thế lâu", type: "C" },
      { text: "Rất chậm, tập trung vào hơi thở", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Sau buổi tập yoga, bạn muốn cảm thấy:",
    options: [
      { text: "Mệt mỏi như vừa tập cardio", type: "A" },
      { text: "Tràn đầy năng lượng và sảng khoái", type: "B" },
      { text: "Thư giãn và nhẹ nhõm", type: "C" },
      { text: "Bình an và tĩnh lặng trong tâm", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn nghĩ gì về phần tâm linh trong yoga?",
    options: [
      { text: "Không quan tâm, chỉ tập thể chất", type: "A" },
      { text: "Tôn trọng nhưng không đi sâu", type: "B" },
      { text: "Quan tâm và muốn tìm hiểu thêm", type: "C" },
      { text: "Đây là phần quan trọng nhất", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn tập yoga thường xuyên như thế nào?",
    options: [
      { text: "Hàng ngày, là một phần của lịch tập", type: "A" },
      { text: "3-4 lần/tuần đều đặn", type: "B" },
      { text: "1-2 lần/tuần khi có thời gian", type: "C" },
      { text: "Khi cảm thấy cần thư giãn", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Loại nhạc bạn thích khi tập yoga:",
    options: [
      { text: "Nhạc beat mạnh để giữ động lực", type: "A" },
      { text: "Nhạc nhẹ nhàng, instrumental", type: "B" },
      { text: "Âm thanh thiên nhiên", type: "C" },
      { text: "Im lặng hoặc mantra", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Mục tiêu yoga dài hạn của bạn là:",
    options: [
      { text: "Làm được các tư thế nâng cao", type: "A" },
      { text: "Duy trì sức khỏe và dẻo dai", type: "B" },
      { text: "Sống không đau nhức, ít bệnh", type: "C" },
      { text: "Đạt trạng thái bình an nội tâm", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Nếu chỉ có 10 phút, bạn sẽ:",
    options: [
      { text: "Tập một chuỗi sun salutation nhanh", type: "A" },
      { text: "Tập vài tư thế quan trọng", type: "B" },
      { text: "Kéo giãn các vùng căng cứng", type: "C" },
      { text: "Ngồi thiền và thở sâu", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Power Yoga Warrior",
    emoji: "🔥",
    description: "Bạn yêu thích yoga năng động và thử thách! Vinyasa, Ashtanga hay Power Yoga là những style phù hợp với bạn. Bạn coi yoga như một bài tập thể dục toàn diện.",
    traits: ["Năng động", "Quyết tâm", "Thử thách", "Mạnh mẽ"],
    strengths: ["Sức mạnh tăng nhanh", "Đốt cháy calo", "Tăng sức bền"],
    weaknesses: ["Có thể bỏ qua phần thiền định", "Nguy cơ chấn thương nếu quá sức"],
    tips: ["Dành thời gian cho savasana", "Thử các lớp yoga chậm để cân bằng"],
  },
  B: {
    type: "B",
    title: "Yogi Cân Bằng",
    emoji: "☯️",
    description: "Bạn tìm kiếm sự cân bằng hoàn hảo giữa thể chất và tinh thần trong yoga. Hatha hoặc Vinyasa nhẹ là lựa chọn lý tưởng cho bạn.",
    traits: ["Cân bằng", "Kiên định", "Thực tế", "Có kỷ luật"],
    strengths: ["Tập đều đặn", "Tiến bộ ổn định", "Tránh được chấn thương"],
    weaknesses: ["Có thể thiếu đột phá", "Đôi khi thiếu mạo hiểm"],
    tips: ["Thử workshop nâng cao", "Khám phá các trường phái yoga khác"],
  },
  C: {
    type: "C",
    title: "Yogi Chữa Lành",
    emoji: "🌸",
    description: "Yoga là liệu pháp chữa lành cho cơ thể và tâm hồn bạn. Restorative, Yin Yoga hoặc Yoga Therapy là những gì bạn cần để phục hồi và tái tạo.",
    traits: ["Dịu dàng", "Kiên nhẫn", "Lắng nghe cơ thể", "Chữa lành"],
    strengths: ["Giảm đau hiệu quả", "Linh hoạt tăng dần", "Ngủ ngon hơn"],
    weaknesses: ["Tiến bộ sức mạnh chậm", "Có thể quá nhẹ nhàng"],
    tips: ["Thử thêm các tư thế xây dựng sức mạnh", "Kết hợp với các bài tập khác"],
  },
  D: {
    type: "D",
    title: "Yogi Tâm Linh",
    emoji: "🧘",
    description: "Yoga với bạn là con đường tâm linh và tự khám phá. Kundalini, Jivamukti hoặc thiền định yoga là những phương pháp đưa bạn đến sự giác ngộ nội tâm.",
    traits: ["Sâu sắc", "Tĩnh lặng", "Tìm kiếm ý nghĩa", "Kết nối"],
    strengths: ["Bình an nội tâm", "Kiểm soát tâm trí", "Sống có ý thức"],
    weaknesses: ["Có thể bỏ qua thể chất", "Đôi khi quá trừu tượng"],
    tips: ["Đừng bỏ qua sức khỏe thể chất", "Kết hợp asana với meditation"],
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
