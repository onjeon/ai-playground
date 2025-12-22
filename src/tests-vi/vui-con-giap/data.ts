// Con Giáp Phù Hợp
// Khám phá con giáp phù hợp với tính cách thực sự của bạn

export const questions = [
  {
    id: 1,
    question: "Buổi sáng bạn thức dậy như thế nào?",
    options: [
      { text: "Dậy sớm, tập thể dục ngay", type: "A" },
      { text: "Dậy đúng giờ, làm việc theo kế hoạch", type: "B" },
      { text: "Nằm nướng một chút rồi mới dậy", type: "C" },
      { text: "Dậy khi nào thích, không theo giờ", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Khi gặp khó khăn, bạn phản ứng thế nào?",
    options: [
      { text: "Lao vào giải quyết ngay, không sợ hãi", type: "A" },
      { text: "Bình tĩnh phân tích, tìm cách tối ưu", type: "B" },
      { text: "Nhờ sự giúp đỡ từ người khác", type: "C" },
      { text: "Linh hoạt thích nghi, tìm đường vòng", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Trong nhóm bạn bè, bạn là người như thế nào?",
    options: [
      { text: "Thủ lĩnh, dẫn dắt mọi người", type: "A" },
      { text: "Người đáng tin cậy, luôn giữ lời", type: "B" },
      { text: "Người vui vẻ, hòa đồng với tất cả", type: "C" },
      { text: "Người thông minh, hay có ý tưởng lạ", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn làm việc hiệu quả nhất khi nào?",
    options: [
      { text: "Khi có thử thách, áp lực cao", type: "A" },
      { text: "Khi có kế hoạch rõ ràng, step by step", type: "B" },
      { text: "Khi làm việc cùng đội nhóm", type: "C" },
      { text: "Khi được tự do sáng tạo", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Ngày Tết bạn thường làm gì?",
    options: [
      { text: "Đi chúc Tết khắp nơi, gặp gỡ nhiều người", type: "A" },
      { text: "Ở nhà với gia đình, dọn dẹp bàn thờ", type: "B" },
      { text: "Tụ tập bạn bè, ăn uống vui vẻ", type: "C" },
      { text: "Đi du lịch hoặc làm gì đó khác biệt", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn xử lý tiền bạc như thế nào?",
    options: [
      { text: "Kiếm nhiều, tiêu cũng nhiều", type: "A" },
      { text: "Tiết kiệm, đầu tư cẩn thận", type: "B" },
      { text: "Chi tiêu cho bạn bè, gia đình", type: "C" },
      { text: "Không quá quan tâm, đủ sống là được", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Khi ai đó làm bạn tức giận, bạn?",
    options: [
      { text: "Nổi nóng ngay, nói thẳng", type: "A" },
      { text: "Im lặng, để bụng rồi tính sau", type: "B" },
      { text: "Nói chuyện để giải quyết", type: "C" },
      { text: "Bỏ qua, không muốn xung đột", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Món ăn yêu thích của bạn là?",
    options: [
      { text: "Đồ nướng, thịt, năng lượng cao", type: "A" },
      { text: "Cơm nhà, món truyền thống", type: "B" },
      { text: "Lẩu, đồ ăn chung với nhiều người", type: "C" },
      { text: "Đồ ăn lạ, fusion, thử nghiệm", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn mơ ước điều gì nhất?",
    options: [
      { text: "Thành công, quyền lực, được ngưỡng mộ", type: "A" },
      { text: "Cuộc sống ổn định, gia đình êm ấm", type: "B" },
      { text: "Được yêu thương, có nhiều bạn tốt", type: "C" },
      { text: "Tự do, phiêu lưu, trải nghiệm mới", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Khi rảnh rỗi, bạn thích làm gì?",
    options: [
      { text: "Tập thể thao, vận động", type: "A" },
      { text: "Đọc sách, xem phim ở nhà", type: "B" },
      { text: "Gặp gỡ bạn bè, tán gẫu", type: "C" },
      { text: "Đi đây đi đó, khám phá", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Tuổi Hổ - Mãnh Liệt & Dũng Cảm",
    emoji: "🐯",
    description: "Bạn mang tính cách của tuổi Hổ - mạnh mẽ, quyết đoán và không sợ thử thách. Bạn là người dẫn đầu tự nhiên, có khả năng lãnh đạo và luôn bảo vệ người thân yêu. Năm con Hổ sẽ mang đến nhiều cơ hội để bạn tỏa sáng!",
    traits: ["Dũng cảm", "Quyết đoán", "Lãnh đạo", "Bảo vệ"],
    strengths: ["Tự tin đối mặt khó khăn", "Có sức ảnh hưởng", "Không bỏ cuộc"],
    weaknesses: ["Đôi khi nóng tính", "Có thể quá độc đoán"],
    tips: ["Học cách lắng nghe", "Kiểm soát cảm xúc tốt hơn"],
  },
  B: {
    type: "B",
    title: "Tuổi Trâu - Kiên Định & Đáng Tin",
    emoji: "🐂",
    description: "Bạn mang tính cách của tuổi Trâu - chăm chỉ, đáng tin cậy và kiên nhẫn. Bạn là người làm việc cần cù, luôn hoàn thành nhiệm vụ và được mọi người tôn trọng. Sự ổn định và trách nhiệm là điểm mạnh của bạn!",
    traits: ["Chăm chỉ", "Đáng tin", "Kiên nhẫn", "Trách nhiệm"],
    strengths: ["Làm việc bền bỉ", "Giữ lời hứa", "Có kế hoạch rõ ràng"],
    weaknesses: ["Đôi khi cứng đầu", "Khó thay đổi"],
    tips: ["Linh hoạt hơn", "Thử những điều mới mẻ"],
  },
  C: {
    type: "C",
    title: "Tuổi Mèo/Thỏ - Dịu Dàng & Hòa Nhã",
    emoji: "🐰",
    description: "Bạn mang tính cách của tuổi Mèo - dịu dàng, tinh tế và yêu hòa bình. Bạn giỏi kết nối với mọi người, tạo không khí vui vẻ và được yêu mến. Bạn là người bạn tốt, luôn biết cách làm người khác cảm thấy thoải mái!",
    traits: ["Dịu dàng", "Hòa nhã", "Tinh tế", "Thân thiện"],
    strengths: ["Giao tiếp tốt", "Được nhiều người yêu mến", "Giải quyết xung đột giỏi"],
    weaknesses: ["Đôi khi quá nhường nhịn", "Khó từ chối người khác"],
    tips: ["Học cách nói không", "Đặt bản thân lên trước đôi khi"],
  },
  D: {
    type: "D",
    title: "Tuổi Khỉ - Thông Minh & Linh Hoạt",
    emoji: "🐵",
    description: "Bạn mang tính cách của tuổi Khỉ - thông minh, linh hoạt và đầy sáng tạo. Bạn luôn có nhiều ý tưởng mới, thích khám phá và không bị ràng buộc bởi quy tắc. Bạn là người mang đến sự tươi mới cho mọi nơi!",
    traits: ["Thông minh", "Linh hoạt", "Sáng tạo", "Phiêu lưu"],
    strengths: ["Nhiều ý tưởng hay", "Thích nghi nhanh", "Vui vẻ, lạc quan"],
    weaknesses: ["Đôi khi thiếu kiên nhẫn", "Khó tập trung lâu"],
    tips: ["Hoàn thành việc trước khi bắt đầu việc mới", "Rèn luyện tính kiên nhẫn"],
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
