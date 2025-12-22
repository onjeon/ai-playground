// Màu Sắc Tính Cách
// Khám phá màu sắc đại diện cho tâm hồn bạn

export const questions = [
  {
    id: 1,
    question: "Khi đi mua quần áo, bạn thường chọn màu gì?",
    options: [
      { text: "Trắng, be, màu nhạt - sạch sẽ, đơn giản", type: "A" },
      { text: "Đỏ, cam, vàng - nổi bật, thu hút", type: "B" },
      { text: "Xanh dương, xanh lá - tươi mát, trẻ trung", type: "C" },
      { text: "Đen, tím, màu trầm - bí ẩn, cá tính", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Căn phòng lý tưởng của bạn có tone màu gì?",
    options: [
      { text: "Trắng tinh khôi, minimalist", type: "A" },
      { text: "Màu ấm áp, có điểm nhấn rực rỡ", type: "B" },
      { text: "Xanh mát, gần gũi thiên nhiên", type: "C" },
      { text: "Tối giản với màu trầm, có chiều sâu", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn thích loại hoa nào nhất?",
    options: [
      { text: "Hoa nhài, hoa sen - thanh khiết", type: "A" },
      { text: "Hoa hồng đỏ, hoa hướng dương - rực rỡ", type: "B" },
      { text: "Hoa cẩm tú cầu, lavender - nhẹ nhàng", type: "C" },
      { text: "Hoa lan, hoa tulip tím - sang trọng", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Cảnh quan nào hấp dẫn bạn nhất?",
    options: [
      { text: "Bãi biển cát trắng, nước trong", type: "A" },
      { text: "Hoàng hôn rực lửa, cảnh sắc ấm áp", type: "B" },
      { text: "Rừng xanh, núi non, thác nước", type: "C" },
      { text: "Đêm thành phố, ánh đèn lung linh", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi tâm trạng tốt, bạn cảm thấy thế nào?",
    options: [
      { text: "Bình yên, nhẹ nhàng như mây", type: "A" },
      { text: "Hào hứng, tràn đầy năng lượng", type: "B" },
      { text: "Tươi mát, sảng khoái", type: "C" },
      { text: "Sâu lắng, đầy cảm xúc", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Đồ uống yêu thích của bạn có màu gì?",
    options: [
      { text: "Sữa tươi, nước dừa - trắng trong", type: "A" },
      { text: "Nước cam, sinh tố xoài - cam vàng", type: "B" },
      { text: "Trà xanh, nước mía - xanh mát", type: "C" },
      { text: "Cà phê đen, trà đen - đậm màu", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Khi stress, bạn muốn ở đâu?",
    options: [
      { text: "Spa yên tĩnh, không gian trắng sạch", type: "A" },
      { text: "Quán bar sôi động, ánh đèn ấm", type: "B" },
      { text: "Công viên xanh mát, gần thiên nhiên", type: "C" },
      { text: "Phòng riêng tối, nghe nhạc một mình", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn thích mùa nào trong năm?",
    options: [
      { text: "Mùa đông - lạnh lẽo, tinh khôi", type: "A" },
      { text: "Mùa hè - nắng nóng, sôi động", type: "B" },
      { text: "Mùa xuân - tươi mát, đâm chồi", type: "C" },
      { text: "Mùa thu - lá vàng, sâu lắng", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Món phụ kiện bạn thích nhất?",
    options: [
      { text: "Trang sức bạc, ngọc trai - thanh lịch", type: "A" },
      { text: "Trang sức vàng, đá màu - rực rỡ", type: "B" },
      { text: "Vòng tay gỗ, đá xanh - tự nhiên", type: "C" },
      { text: "Trang sức đen, cá tính - độc đáo", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn mô tả tâm hồn mình như thế nào?",
    options: [
      { text: "Thuần khiết, trong sáng", type: "A" },
      { text: "Nhiệt huyết, đam mê", type: "B" },
      { text: "Hài hòa, cân bằng", type: "C" },
      { text: "Bí ẩn, sâu sắc", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Màu Trắng - Tâm Hồn Thuần Khiết",
    emoji: "⚪",
    description: "Bạn mang tâm hồn thuần khiết như màu trắng. Bạn yêu sự đơn giản, sạch sẽ và chân thành. Bạn có tiêu chuẩn cao, sống ngăn nắp và luôn hướng đến sự hoàn hảo. Sự trong sáng của bạn khiến người khác tin tưởng.",
    traits: ["Thuần khiết", "Ngăn nắp", "Chân thành", "Có tiêu chuẩn"],
    strengths: ["Đáng tin cậy", "Sống có tổ chức", "Không gian sạch đẹp"],
    weaknesses: ["Đôi khi quá cầu toàn", "Khó chấp nhận sự bừa bộn"],
    tips: ["Chấp nhận sự không hoàn hảo", "Thử những màu sắc mới trong cuộc sống"],
  },
  B: {
    type: "B",
    title: "Màu Đỏ/Cam - Tâm Hồn Nhiệt Huyết",
    emoji: "🔴",
    description: "Bạn mang tâm hồn rực cháy như màu đỏ và cam. Bạn đam mê, năng động và luôn sống hết mình. Bạn là nguồn năng lượng tích cực, biết cách truyền cảm hứng và không ngại thể hiện bản thân.",
    traits: ["Nhiệt huyết", "Năng động", "Đam mê", "Tự tin"],
    strengths: ["Truyền cảm hứng", "Dẫn dắt người khác", "Sống mạnh mẽ"],
    weaknesses: ["Đôi khi quá nóng vội", "Dễ mất kiên nhẫn"],
    tips: ["Học cách bình tĩnh", "Lắng nghe nhiều hơn"],
  },
  C: {
    type: "C",
    title: "Màu Xanh - Tâm Hồn Hài Hòa",
    emoji: "💚",
    description: "Bạn mang tâm hồn tươi mát như màu xanh. Bạn yêu thiên nhiên, sự hài hòa và cuộc sống cân bằng. Bạn là người hòa giải, biết cách tạo không khí thoải mái và mang đến sự bình yên cho người xung quanh.",
    traits: ["Hài hòa", "Tươi mát", "Yêu thiên nhiên", "Cân bằng"],
    strengths: ["Giữ bình tĩnh", "Hòa giải xung đột", "Sống lành mạnh"],
    weaknesses: ["Đôi khi thiếu quyết đoán", "Tránh né xung đột"],
    tips: ["Dám đưa ra quyết định", "Đối mặt với vấn đề trực tiếp"],
  },
  D: {
    type: "D",
    title: "Màu Tím/Đen - Tâm Hồn Bí Ẩn",
    emoji: "🟣",
    description: "Bạn mang tâm hồn sâu lắng như màu tím và đen. Bạn bí ẩn, có chiều sâu nội tâm và không dễ dàng mở lòng. Bạn sáng tạo, độc đáo và có những suy nghĩ mà không phải ai cũng hiểu được.",
    traits: ["Bí ẩn", "Sâu sắc", "Sáng tạo", "Độc đáo"],
    strengths: ["Có chiều sâu", "Nghệ thuật", "Không theo đám đông"],
    weaknesses: ["Đôi khi khó hiểu", "Có thể quá khép kín"],
    tips: ["Chia sẻ suy nghĩ với người thân", "Cho phép người khác hiểu bạn"],
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
