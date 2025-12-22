// Kiểu du lịch Sapa
// Khám phá phong cách du lịch Sapa của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn đến Sapa vào mùa nào?",
    options: [
      { text: "Mùa lúa chín vàng (tháng 9-10)", type: "A" },
      { text: "Mùa tuyết rơi (tháng 12-1)", type: "B" },
      { text: "Mùa xuân, hoa đào nở", type: "C" },
      { text: "Bất cứ khi nào có dịp", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn sẽ ở đâu khi đến Sapa?",
    options: [
      { text: "Homestay người H'Mông, Dao", type: "A" },
      { text: "Resort cao cấp, view thung lũng", type: "B" },
      { text: "Khách sạn trung tâm thị trấn", type: "C" },
      { text: "Lều trại, cắm trại qua đêm", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Hoạt động bạn thích nhất ở Sapa?",
    options: [
      { text: "Trekking qua các bản làng", type: "A" },
      { text: "Chinh phục đỉnh Fansipan", type: "B" },
      { text: "Check-in ruộng bậc thang", type: "C" },
      { text: "Tìm hiểu văn hóa dân tộc", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn có leo Fansipan không?",
    options: [
      { text: "Có, leo bộ 2 ngày 1 đêm", type: "A" },
      { text: "Có, đi cáp treo", type: "B" },
      { text: "Không, sức khỏe không cho phép", type: "C" },
      { text: "Có thể, xem tình hình thời tiết", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn thích bản làng nào?",
    options: [
      { text: "Bản Cát Cát - gần, dễ đi", type: "A" },
      { text: "Bản Tả Van - ruộng bậc thang đẹp", type: "B" },
      { text: "Bản Tả Phìn - văn hóa Dao đỏ", type: "C" },
      { text: "Bản Sín Chải - hoang sơ, ít khách", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Đặc sản Sapa bạn muốn thử?",
    options: [
      { text: "Thắng cố, lợn cắp nách", type: "A" },
      { text: "Cá hồi Sapa, cá tầm", type: "B" },
      { text: "Cơm lam, gà đen H'Mông", type: "C" },
      { text: "Tất cả đều phải thử", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Buổi tối ở Sapa, bạn sẽ?",
    options: [
      { text: "Đốt lửa, uống rượu táo mèo", type: "A" },
      { text: "Đi chợ đêm, mua đồ thổ cẩm", type: "B" },
      { text: "Quán bar, ngắm view đêm", type: "C" },
      { text: "Nghỉ sớm, mai dậy sớm đi chơi", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn có muốn tắm lá thuốc Dao không?",
    options: [
      { text: "Có, rất tò mò trải nghiệm", type: "A" },
      { text: "Có, nghe nói rất thư giãn", type: "B" },
      { text: "Không, không quen", type: "C" },
      { text: "Chắc chắn, đây là must-try", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn di chuyển đến Sapa bằng gì?",
    options: [
      { text: "Xe khách giường nằm", type: "A" },
      { text: "Tàu hỏa lên Lào Cai rồi đi tiếp", type: "B" },
      { text: "Tự lái xe máy phượt", type: "C" },
      { text: "Thuê xe riêng hoặc bay Lào Cai", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn mua gì làm quà từ Sapa?",
    options: [
      { text: "Thổ cẩm, túi, khăn dệt tay", type: "A" },
      { text: "Rượu táo mèo, thuốc bắc", type: "B" },
      { text: "Nấm, mật ong, rau củ", type: "C" },
      { text: "Trang sức bạc, đồ thủ công", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Trời mưa, sương mù ở Sapa, bạn?",
    options: [
      { text: "Rất thất vọng, không chụp được ảnh", type: "A" },
      { text: "Vẫn đi, Sapa sương mù cũng đẹp", type: "B" },
      { text: "Nghỉ trong nhà, đợi trời đẹp", type: "C" },
      { text: "Đây mới là Sapa thực sự", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Điều bạn thích nhất ở Sapa?",
    options: [
      { text: "Khí hậu se lạnh, núi rừng", type: "A" },
      { text: "Văn hóa dân tộc độc đáo", type: "B" },
      { text: "Ruộng bậc thang, cảnh đẹp", type: "C" },
      { text: "Sự hoang sơ, bình yên", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người trekking phiêu lưu",
    emoji: "🥾",
    description: "Bạn đến Sapa để chinh phục. Trekking qua các bản làng, leo Fansipan, ngủ homestay - bạn muốn trải nghiệm Sapa như một người dân địa phương.",
    traits: ["Phiêu lưu", "Mạnh mẽ", "Khám phá", "Gần gũi thiên nhiên"],
    strengths: ["Trải nghiệm sâu", "Sức khỏe tốt", "Kỷ niệm đáng nhớ"],
    weaknesses: ["Có thể mệt mỏi", "Phụ thuộc thời tiết"],
    tips: ["Chuẩn bị kỹ trang phục", "Thuê hướng dẫn viên địa phương"],
  },
  B: {
    type: "B",
    title: "Người du lịch nghỉ dưỡng",
    emoji: "🏔️",
    description: "Bạn đến Sapa để tận hưởng không khí và cảnh đẹp. Resort view thung lũng, cáp treo Fansipan và ẩm thực cao cấp là lựa chọn của bạn.",
    traits: ["Thoải mái", "Tận hưởng", "Sang trọng", "Thư thái"],
    strengths: ["Nghỉ ngơi tốt", "Dịch vụ chất lượng", "View đẹp"],
    weaknesses: ["Ít trải nghiệm địa phương", "Chi phí cao"],
    tips: ["Thử trekking ngắn", "Ghé thăm bản làng"],
  },
  C: {
    type: "C",
    title: "Người check-in sống ảo",
    emoji: "📸",
    description: "Ruộng bậc thang, thung lũng Mường Hoa là backdrop hoàn hảo cho bạn. Đến Sapa là để có những bức ảnh đẹp và kỷ niệm trên mạng xã hội.",
    traits: ["Yêu ảnh đẹp", "Thẩm mỹ", "Sáng tạo", "Trendy"],
    strengths: ["Ảnh đẹp", "Nhiều nội dung", "Biết chỗ đẹp"],
    weaknesses: ["Có thể hời hợt", "Thiếu trải nghiệm thực"],
    tips: ["Dành thời gian tận hưởng", "Tắt điện thoại đôi khi"],
  },
  D: {
    type: "D",
    title: "Người tìm kiếm văn hóa",
    emoji: "🏠",
    description: "Bạn đến Sapa vì văn hóa dân tộc độc đáo. Người H'Mông, Dao, trang phục truyền thống, phong tục tập quán - bạn muốn hiểu và kết nối.",
    traits: ["Tò mò", "Tôn trọng văn hóa", "Sâu sắc", "Học hỏi"],
    strengths: ["Hiểu sâu về nơi đến", "Kết nối với người dân", "Trải nghiệm chân thực"],
    weaknesses: ["Có thể bỏ lỡ cảnh đẹp", "Cần thời gian"],
    tips: ["Học vài câu tiếng địa phương", "Tham gia hoạt động cùng người dân"],
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
