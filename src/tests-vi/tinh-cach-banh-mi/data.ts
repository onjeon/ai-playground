// Tính cách qua bánh mì
// Khám phá tính cách của bạn qua cách bạn ăn và chọn bánh mì Việt Nam

export const questions = [
  {
    id: 1,
    question: "Bạn thích loại bánh mì nào nhất?",
    options: [
      { text: "Bánh mì thịt nguội - đầy đủ, truyền thống", type: "A" },
      { text: "Bánh mì bò kho - đậm đà, đặc biệt", type: "B" },
      { text: "Bánh mì ốp la - đơn giản, nhanh gọn", type: "C" },
      { text: "Bánh mì chả cá - nhẹ nhàng, lạ miệng", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thường mua bánh mì ở đâu?",
    options: [
      { text: "Xe bánh mì quen thuộc trước nhà", type: "A" },
      { text: "Tiệm bánh mì nổi tiếng", type: "B" },
      { text: "Cửa hàng tiện lợi", type: "C" },
      { text: "Tự làm ở nhà", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi gọi bánh mì, bạn thường nói gì?",
    options: [
      { text: "Cho một ổ đầy đủ", type: "A" },
      { text: "Cho nhiều thịt, ít rau", type: "B" },
      { text: "Cho ít ớt thôi", type: "C" },
      { text: "Tùy cô/chú chọn cho con", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn thích bánh mì giòn hay mềm?",
    options: [
      { text: "Giòn rụm, vỏ nứt", type: "A" },
      { text: "Mềm một chút, dễ cắn", type: "B" },
      { text: "Vừa vừa, không quá giòn", type: "C" },
      { text: "Không quan trọng, miễn ngon", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi bánh mì có nhiều ớt hơn mong đợi, bạn sẽ?",
    options: [
      { text: "Vẫn ăn hết, chịu cay", type: "A" },
      { text: "Gỡ ớt ra rồi ăn", type: "B" },
      { text: "Đổi ổ khác", type: "C" },
      { text: "Ăn từ từ, uống nước nhiều", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn ăn bánh mì vào lúc nào?",
    options: [
      { text: "Sáng sớm, ăn vội đi làm", type: "A" },
      { text: "Chiều tà, ăn vặt", type: "B" },
      { text: "Khuya, khi đói", type: "C" },
      { text: "Bất cứ lúc nào thèm", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn thích ăn bánh mì kèm với gì?",
    options: [
      { text: "Cà phê sữa đá", type: "A" },
      { text: "Trà đá", type: "B" },
      { text: "Nước ngọt", type: "C" },
      { text: "Không cần gì cả", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Nếu có thể cải tiến bánh mì, bạn sẽ?",
    options: [
      { text: "Giữ nguyên công thức truyền thống", type: "A" },
      { text: "Thêm nhiều loại nhân mới", type: "B" },
      { text: "Làm size nhỏ hơn, dễ ăn", type: "C" },
      { text: "Thay đổi loại bánh", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi đi du lịch, bạn có mang bánh mì theo không?",
    options: [
      { text: "Có, để ăn dọc đường", type: "A" },
      { text: "Không, ăn món địa phương", type: "B" },
      { text: "Tùy thuộc vào chuyến đi", type: "C" },
      { text: "Mua khi cần thôi", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn nghĩ gì về bánh mì giá 50k?",
    options: [
      { text: "Đắt quá, bánh mì chỉ nên 15-20k", type: "A" },
      { text: "Đáng tiền nếu ngon và nhiều nhân", type: "B" },
      { text: "Tùy vào thương hiệu và chất lượng", type: "C" },
      { text: "Thỉnh thoảng thử cho biết", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn thích ăn bánh mì nóng hay nguội?",
    options: [
      { text: "Nóng hổi vừa ra lò", type: "A" },
      { text: "Nguội một chút cho dễ ăn", type: "B" },
      { text: "Hâm nóng lại trước khi ăn", type: "C" },
      { text: "Đều được, không quan trọng", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Khi người bán hỏi 'có cần thêm gì không?', bạn sẽ?",
    options: [
      { text: "Thêm chút đồ chua", type: "A" },
      { text: "Thêm pate và bơ", type: "B" },
      { text: "Không, đủ rồi", type: "C" },
      { text: "Hỏi họ khuyên gì", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người cổ điển",
    emoji: "🥖",
    description: "Bạn là người yêu thích những điều cổ điển và truyền thống. Giống như ổ bánh mì đầy đủ ngày xưa, bạn đáng tin cậy, kiên định và luôn giữ vững giá trị cốt lõi của mình.",
    traits: ["Truyền thống", "Đáng tin cậy", "Kiên định", "Chân thành"],
    strengths: ["Luôn giữ lời hứa", "Có nguyên tắc", "Biết trân trọng"],
    weaknesses: ["Đôi khi bảo thủ", "Khó chấp nhận thay đổi"],
    tips: ["Thử nghiệm những điều mới", "Mở lòng với quan điểm khác"],
  },
  B: {
    type: "B",
    title: "Người sành điệu",
    emoji: "✨",
    description: "Bạn là người có gu và biết cách tận hưởng cuộc sống. Bạn không ngại chi tiền cho những trải nghiệm tốt và luôn tìm kiếm chất lượng cao nhất.",
    traits: ["Sành điệu", "Có gu", "Tự tin", "Đẳng cấp"],
    strengths: ["Biết cách thưởng thức", "Có mắt thẩm mỹ", "Tự tin quyết định"],
    weaknesses: ["Đôi khi quá cầu kỳ", "Chi tiêu nhiều"],
    tips: ["Học cách hài lòng với điều đơn giản", "Tiết kiệm cho tương lai"],
  },
  C: {
    type: "C",
    title: "Người thực dụng",
    emoji: "⚡",
    description: "Bạn là người thực dụng và hiệu quả. Thời gian là vàng với bạn, và bạn luôn tìm cách tối ưu hóa mọi thứ trong cuộc sống.",
    traits: ["Thực dụng", "Hiệu quả", "Nhanh nhẹn", "Tiết kiệm"],
    strengths: ["Quản lý thời gian tốt", "Đưa ra quyết định nhanh", "Không lãng phí"],
    weaknesses: ["Đôi khi vội vàng", "Bỏ lỡ những điều tốt đẹp"],
    tips: ["Học cách chậm lại", "Tận hưởng khoảnh khắc hiện tại"],
  },
  D: {
    type: "D",
    title: "Người thoải mái",
    emoji: "😌",
    description: "Bạn là người dễ tính và thoải mái. Cuộc sống với bạn là để tận hưởng chứ không phải để lo lắng. Bạn dễ hài lòng và luôn tìm thấy niềm vui trong mọi thứ.",
    traits: ["Thoải mái", "Dễ tính", "Vui vẻ", "Hòa đồng"],
    strengths: ["Dễ thích nghi", "Không stress", "Được mọi người yêu mến"],
    weaknesses: ["Đôi khi thiếu chủ kiến", "Dễ bị ảnh hưởng"],
    tips: ["Học cách nói lên ý kiến", "Đặt ra mục tiêu rõ ràng"],
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
