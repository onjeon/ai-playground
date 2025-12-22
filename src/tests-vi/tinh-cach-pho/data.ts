// Tính cách qua phở yêu thích
// Khám phá tính cách của bạn qua cách bạn thưởng thức phở Việt Nam

export const questions = [
  {
    id: 1,
    question: "Bạn thích ăn phở kiểu nào?",
    options: [
      { text: "Phở Hà Nội - nước trong, vị thanh", type: "A" },
      { text: "Phở Sài Gòn - nước đậm, nhiều rau", type: "B" },
      { text: "Phở tái lăn - thịt xào thơm", type: "C" },
      { text: "Phở gà - thanh nhẹ, dễ ăn", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Khi ăn phở, bạn thường thêm gia vị gì đầu tiên?",
    options: [
      { text: "Không thêm gì, giữ nguyên vị gốc", type: "A" },
      { text: "Tương đen và tương ớt", type: "B" },
      { text: "Ớt tươi và chanh", type: "C" },
      { text: "Giá và rau thơm", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn thường ăn phở vào lúc nào?",
    options: [
      { text: "Sáng sớm, bắt đầu ngày mới", type: "A" },
      { text: "Trưa, khi đói bụng", type: "B" },
      { text: "Tối khuya, sau khi đi chơi", type: "C" },
      { text: "Bất cứ lúc nào thèm", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi chọn quán phở, điều gì quan trọng nhất với bạn?",
    options: [
      { text: "Quán lâu năm, có truyền thống", type: "A" },
      { text: "Quán đông khách, review tốt", type: "B" },
      { text: "Quán mới lạ, độc đáo", type: "C" },
      { text: "Quán gần nhà, tiện lợi", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn thích bánh phở như thế nào?",
    options: [
      { text: "Bánh mỏng, dai", type: "A" },
      { text: "Bánh to, mềm", type: "B" },
      { text: "Hủ tiếu thay thế", type: "C" },
      { text: "Không quan trọng, miễn ngon", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi ăn phở xong, bạn thường làm gì?",
    options: [
      { text: "Húp hết nước, không bỏ phí", type: "A" },
      { text: "Chỉ ăn thịt và bánh", type: "B" },
      { text: "Gọi thêm một tô nữa", type: "C" },
      { text: "Uống trà đá giải ngấy", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn nghĩ gì về việc cho tương đen vào phở?",
    options: [
      { text: "Không bao giờ, đó là tội ác", type: "A" },
      { text: "Tùy khẩu vị mỗi người", type: "B" },
      { text: "Thích cho nhiều tương đen", type: "C" },
      { text: "Chỉ cho một chút thôi", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Nếu quán hết phở, bạn sẽ?",
    options: [
      { text: "Tìm quán phở khác", type: "A" },
      { text: "Ăn món khác ở đây", type: "B" },
      { text: "Về nhà tự nấu", type: "C" },
      { text: "Đợi hôm sau quay lại", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn thích ăn phở cùng ai?",
    options: [
      { text: "Một mình, tập trung thưởng thức", type: "A" },
      { text: "Với bạn bè, vui vẻ", type: "B" },
      { text: "Với gia đình, ấm cúng", type: "C" },
      { text: "Với người yêu, lãng mạn", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn thường gọi phở gì?",
    options: [
      { text: "Phở tái - thịt hồng tươi", type: "A" },
      { text: "Phở chín - thịt mềm nhừ", type: "B" },
      { text: "Phở tái nạm gân - đầy đủ", type: "C" },
      { text: "Phở bò viên - giòn dai", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Khi phở quá nóng, bạn sẽ?",
    options: [
      { text: "Chờ nguội rồi ăn từ từ", type: "A" },
      { text: "Vừa thổi vừa ăn", type: "B" },
      { text: "Cho đá vào cho mát", type: "C" },
      { text: "Ăn nhanh trước khi nguội", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bạn nghĩ gì về phở ăn liền?",
    options: [
      { text: "Không bao giờ ăn, không phải phở thật", type: "A" },
      { text: "Tiện lợi, ăn khi cần thiết", type: "B" },
      { text: "Thích ăn, vừa nhanh vừa ngon", type: "C" },
      { text: "Chỉ ăn khi không có lựa chọn khác", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người truyền thống",
    emoji: "🎎",
    description: "Bạn là người tôn trọng giá trị truyền thống và coi trọng sự tinh tế. Giống như phở Hà Nội, bạn thanh lịch, tinh tế và có gu thẩm mỹ cao. Bạn không thích thay đổi và luôn giữ vững nguyên tắc của mình.",
    traits: ["Truyền thống", "Tinh tế", "Kiên định", "Cầu toàn"],
    strengths: ["Có nguyên tắc rõ ràng", "Tôn trọng văn hóa", "Đáng tin cậy"],
    weaknesses: ["Khó thích nghi", "Đôi khi cứng nhắc"],
    tips: ["Hãy mở lòng với những điều mới", "Thử trải nghiệm những phong cách khác"],
  },
  B: {
    type: "B",
    title: "Người phóng khoáng",
    emoji: "🌟",
    description: "Bạn là người phóng khoáng, dễ gần và thích sự đa dạng. Giống như phở Sài Gòn với nhiều rau và gia vị, bạn thích cuộc sống phong phú, đầy màu sắc và không ngại thử những điều mới.",
    traits: ["Phóng khoáng", "Linh hoạt", "Hòa đồng", "Sáng tạo"],
    strengths: ["Dễ thích nghi", "Thân thiện", "Luôn tạo niềm vui"],
    weaknesses: ["Đôi khi thiếu kiên định", "Khó từ chối"],
    tips: ["Học cách nói không", "Giữ vững lập trường khi cần"],
  },
  C: {
    type: "C",
    title: "Người khám phá",
    emoji: "🚀",
    description: "Bạn là người thích khám phá và không ngại thử những điều mới lạ. Bạn luôn tìm kiếm sự khác biệt và độc đáo trong mọi thứ, từ ẩm thực đến cuộc sống.",
    traits: ["Mạo hiểm", "Sáng tạo", "Tò mò", "Năng động"],
    strengths: ["Luôn đổi mới", "Không sợ thất bại", "Đầy nhiệt huyết"],
    weaknesses: ["Dễ chán", "Đôi khi thiếu kiên nhẫn"],
    tips: ["Học cách hoàn thành việc đã bắt đầu", "Trân trọng những điều quen thuộc"],
  },
  D: {
    type: "D",
    title: "Người thực tế",
    emoji: "⚖️",
    description: "Bạn là người thực tế, đơn giản và dễ hài lòng. Bạn không đòi hỏi quá nhiều và luôn tìm thấy niềm vui trong những điều bình dị của cuộc sống.",
    traits: ["Thực tế", "Dễ tính", "Bình dị", "Hài hòa"],
    strengths: ["Dễ hài lòng", "Không gây khó dễ", "Luôn vui vẻ"],
    weaknesses: ["Đôi khi thiếu quyết đoán", "Dễ bị lấn át"],
    tips: ["Hãy mạnh dạn đòi hỏi những gì bạn xứng đáng", "Đừng ngại thể hiện ý kiến"],
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
