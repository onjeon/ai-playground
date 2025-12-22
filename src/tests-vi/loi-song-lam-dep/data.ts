// Phong Cách Làm Đẹp
// Khám phá tính cách qua cách bạn chăm sóc bản thân

export const questions = [
  {
    id: 1,
    question: "Buổi sáng, bạn dành bao lâu để chuẩn bị?",
    options: [
      { text: "Hơn 1 tiếng, chăm chút kỹ lưỡng", type: "A" },
      { text: "30 phút - 1 tiếng, vừa phải", type: "B" },
      { text: "15-30 phút, nhanh gọn", type: "C" },
      { text: "Dưới 15 phút, tốc độ ánh sáng", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Skincare routine của bạn có bao nhiêu bước?",
    options: [
      { text: "7+ bước, đầy đủ từ A-Z", type: "A" },
      { text: "4-6 bước, cơ bản + một vài extra", type: "B" },
      { text: "2-3 bước, sữa rửa mặt + kem dưỡng", type: "C" },
      { text: "1 bước hoặc không có routine", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn mua mỹ phẩm ở đâu?",
    options: [
      { text: "Cửa hàng chính hãng, counter", type: "A" },
      { text: "Hasaki, Guardian, store uy tín", type: "B" },
      { text: "Shopee, Lazada, online", type: "C" },
      { text: "Không hay mua, dùng đồ có sẵn", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn có hay thử sản phẩm mới không?",
    options: [
      { text: "Luôn luôn, thích khám phá", type: "A" },
      { text: "Thỉnh thoảng, khi được recommend", type: "B" },
      { text: "Ít khi, thích sản phẩm quen", type: "C" },
      { text: "Không quan tâm, dùng gì cũng được", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn trang điểm như thế nào khi đi làm/đi học?",
    options: [
      { text: "Full makeup, đầy đủ các bước", type: "A" },
      { text: "Natural makeup, nhẹ nhàng", type: "B" },
      { text: "Chỉ kem chống nắng, son môi", type: "C" },
      { text: "Không trang điểm", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn chăm sóc tóc như thế nào?",
    options: [
      { text: "Đi salon thường xuyên, nhiều treatment", type: "A" },
      { text: "Gội đầu + dầu xả + đắp mặt nạ tóc", type: "B" },
      { text: "Gội đầu + dầu xả cơ bản", type: "C" },
      { text: "Chỉ gội đầu thôi", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn có hay đắp mặt nạ không?",
    options: [
      { text: "3-4 lần/tuần, thường xuyên", type: "A" },
      { text: "1-2 lần/tuần, định kỳ", type: "B" },
      { text: "Thỉnh thoảng, khi nhớ ra", type: "C" },
      { text: "Hiếm khi hoặc không bao giờ", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Budget làm đẹp hàng tháng của bạn?",
    options: [
      { text: "Nhiều, không tiếc tiền cho bản thân", type: "A" },
      { text: "Vừa phải, có kế hoạch chi tiêu", type: "B" },
      { text: "Ít, chỉ mua khi cần", type: "C" },
      { text: "Gần như không có", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn nghĩ gì về câu 'Yêu bản thân là đầu tư cho vẻ đẹp'?",
    options: [
      { text: "Rất đồng ý, đầu tư hết mình", type: "A" },
      { text: "Đúng, nhưng cần cân bằng", type: "B" },
      { text: "Hiểu nhưng không phải ưu tiên", type: "C" },
      { text: "Không đồng ý, có cách khác yêu bản thân", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Khi selfie, bạn có chỉnh ảnh không?",
    options: [
      { text: "Chỉnh kỹ, filter + retouch", type: "A" },
      { text: "Chỉnh nhẹ, sáng da, xóa mụn", type: "B" },
      { text: "Chỉ dùng filter có sẵn", type: "C" },
      { text: "Không chỉnh, up thẳng", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Beauty Lover Chính Hiệu",
    emoji: "💄",
    description: "Bạn yêu thích làm đẹp và chăm sóc bản thân! Skincare, makeup là niềm đam mê. Bạn sẵn sàng đầu tư thời gian và tiền bạc để luôn xinh đẹp nhất.",
    traits: ["Yêu làm đẹp", "Chi tiết", "Đầu tư cho bản thân", "Sành điệu"],
    strengths: ["Luôn xinh đẹp", "Hiểu về mỹ phẩm", "Tự tin", "Da đẹp"],
    weaknesses: ["Tốn nhiều thời gian", "Chi tiêu cao", "Có thể phụ thuộc vào makeup"],
    tips: ["Đầu tư vào sản phẩm chất lượng", "Thử natural look đôi khi"],
  },
  B: {
    type: "B",
    title: "Chăm Sóc Cân Bằng",
    emoji: "🌸",
    description: "Bạn chăm sóc bản thân một cách cân bằng! Bạn có routine cơ bản, biết cách làm đẹp nhưng không bị ám ảnh. Vẻ đẹp tự nhiên là ưu tiên.",
    traits: ["Cân bằng", "Tự nhiên", "Thực tế", "Healthy beauty"],
    strengths: ["Chi tiêu hợp lý", "Không mất quá nhiều thời gian", "Vẻ đẹp tự nhiên"],
    weaknesses: ["Đôi khi bỏ qua chăm sóc", "Có thể thử nhiều sản phẩm hơn"],
    tips: ["Duy trì routine", "Thử thêm bước mới khi rảnh"],
  },
  C: {
    type: "C",
    title: "Đơn Giản Là Đẹp",
    emoji: "🌿",
    description: "Bạn theo đuổi vẻ đẹp đơn giản! Skincare cơ bản, makeup nhẹ nhàng hoặc không makeup. Bạn tự tin với vẻ đẹp tự nhiên của mình.",
    traits: ["Đơn giản", "Tự tin", "Minimalist", "Tiết kiệm"],
    strengths: ["Tiết kiệm thời gian và tiền", "Tự tin", "Da được nghỉ ngơi"],
    weaknesses: ["Có thể thiếu chăm sóc da", "Bỏ lỡ sản phẩm tốt"],
    tips: ["Dùng kem chống nắng mỗi ngày", "Thử skincare cơ bản"],
  },
  D: {
    type: "D",
    title: "Au Naturel",
    emoji: "😊",
    description: "Bạn không quan tâm nhiều đến làm đẹp! Bạn có những ưu tiên khác trong cuộc sống và tin rằng vẻ đẹp đến từ bên trong.",
    traits: ["Tự nhiên 100%", "Không bị ám ảnh", "Tập trung khác", "Thoải mái"],
    strengths: ["Không stress về ngoại hình", "Tiết kiệm", "Sống đơn giản"],
    weaknesses: ["Có thể bỏ quên chăm sóc da", "Da có thể thiếu dưỡng"],
    tips: ["Ít nhất dùng kem chống nắng", "Uống đủ nước cho da đẹp"],
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
