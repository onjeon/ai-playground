// Phong cách đi xe máy
// Khám phá phong cách chạy xe máy của bạn ở Việt Nam

export const questions = [
  {
    id: 1,
    question: "Bạn thường chạy xe máy như thế nào?",
    options: [
      { text: "Chạy từ từ, an toàn là trên hết", type: "A" },
      { text: "Chạy nhanh, linh hoạt luồn lách", type: "B" },
      { text: "Tùy tình hình giao thông", type: "C" },
      { text: "Chỉ chạy khi cần thiết", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Khi gặp đèn vàng, bạn sẽ?",
    options: [
      { text: "Dừng lại, chờ đèn xanh", type: "A" },
      { text: "Tăng tốc vượt qua", type: "B" },
      { text: "Tùy khoảng cách, xử lý linh hoạt", type: "C" },
      { text: "Giảm tốc, chuẩn bị dừng", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn có đội mũ bảo hiểm không?",
    options: [
      { text: "Luôn luôn, kể cả đoạn ngắn", type: "A" },
      { text: "Có, nhưng đôi khi quên", type: "B" },
      { text: "Chỉ khi đi xa hoặc đường lớn", type: "C" },
      { text: "Luôn đội, chọn nón chất lượng tốt", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Xe máy bạn đang đi thuộc loại nào?",
    options: [
      { text: "Xe số, xe cổ điển bền bỉ", type: "A" },
      { text: "Xe tay ga thời thượng", type: "B" },
      { text: "Xe PKL, moto phân khối lớn", type: "C" },
      { text: "Xe máy điện, thân thiện môi trường", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi kẹt xe, bạn thường làm gì?",
    options: [
      { text: "Kiên nhẫn chờ, không chen lấn", type: "A" },
      { text: "Tìm đường tắt, luồn lách", type: "B" },
      { text: "Leo lề, tìm cách vượt", type: "C" },
      { text: "Nghe nhạc, podcast chờ đợi", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn bảo dưỡng xe máy thế nào?",
    options: [
      { text: "Định kỳ đúng lịch, cẩn thận", type: "A" },
      { text: "Khi nào hỏng mới sửa", type: "B" },
      { text: "Tự sửa xe, am hiểu kỹ thuật", type: "C" },
      { text: "Mang ra tiệm quen tin tưởng", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn dùng Google Maps khi đi xe không?",
    options: [
      { text: "Luôn luôn, không thích đi lạc", type: "A" },
      { text: "Không cần, thuộc đường rồi", type: "B" },
      { text: "Chỉ khi đi đường mới", type: "C" },
      { text: "Có, và hay khám phá đường mới", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Khi trời mưa, bạn đi xe thế nào?",
    options: [
      { text: "Mặc áo mưa, đi chậm cẩn thận", type: "A" },
      { text: "Cứ đi thôi, mưa không sao", type: "B" },
      { text: "Dừng lại trú mưa nếu to", type: "C" },
      { text: "Gọi xe công nghệ, không chạy mưa", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn chở người như thế nào?",
    options: [
      { text: "Chạy chậm hơn, cẩn thận hơn", type: "A" },
      { text: "Bình thường, không khác gì", type: "B" },
      { text: "Thích chở người, đi chung vui", type: "C" },
      { text: "Ngại chở người, sợ trách nhiệm", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Khi bị CSGT thổi còi, bạn?",
    options: [
      { text: "Dừng lại, xuất trình giấy tờ", type: "A" },
      { text: "Hơi lo, nhưng vẫn hợp tác", type: "B" },
      { text: "Bình tĩnh, giấy tờ đầy đủ", type: "C" },
      { text: "Chuẩn bị lý do giải thích", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn đỗ xe như thế nào?",
    options: [
      { text: "Tìm bãi đỗ chính thức", type: "A" },
      { text: "Đỗ ở đâu tiện ở đó", type: "B" },
      { text: "Đỗ vào hẻm, chỗ an toàn", type: "C" },
      { text: "Luôn khóa cổ, khóa phanh đĩa", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Điều bạn thích nhất khi đi xe máy?",
    options: [
      { text: "Tiện lợi, đi được mọi nơi", type: "A" },
      { text: "Cảm giác tự do, gió mát", type: "B" },
      { text: "Tiết kiệm thời gian, chi phí", type: "C" },
      { text: "Khám phá những con đường mới", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Tài xế an toàn",
    emoji: "🛵",
    description: "Bạn là người chạy xe cẩn thận, tuân thủ luật giao thông và đặt an toàn lên hàng đầu. Bạn là tấm gương cho người tham gia giao thông.",
    traits: ["Cẩn thận", "Tuân thủ", "Có trách nhiệm", "Kiên nhẫn"],
    strengths: ["An toàn trên đường", "Ít xảy ra tai nạn", "Tôn trọng người khác"],
    weaknesses: ["Có thể chậm trễ", "Đôi khi quá thận trọng"],
    tips: ["Giữ vững tinh thần an toàn", "Chia sẻ kinh nghiệm với người khác"],
  },
  B: {
    type: "B",
    title: "Tài xế linh hoạt",
    emoji: "🏍️",
    description: "Bạn là người nhanh nhẹn, linh hoạt và biết cách xử lý tình huống trên đường. Đôi khi bạn hơi mạo hiểm nhưng luôn tự tin.",
    traits: ["Nhanh nhẹn", "Linh hoạt", "Tự tin", "Mạo hiểm"],
    strengths: ["Phản xạ tốt", "Xử lý tình huống nhanh", "Tiết kiệm thời gian"],
    weaknesses: ["Có thể vi phạm luật", "Rủi ro cao hơn"],
    tips: ["Chạy chậm lại một chút", "An toàn quan trọng hơn nhanh"],
  },
  C: {
    type: "C",
    title: "Tài xế thực tế",
    emoji: "🛵",
    description: "Bạn là người biết cân nhắc và xử lý linh hoạt tùy tình huống. Bạn không quá cứng nhắc cũng không quá liều lĩnh.",
    traits: ["Thực tế", "Linh hoạt", "Thích nghi", "Cân bằng"],
    strengths: ["Ứng biến tốt", "Cân bằng an toàn và hiệu quả", "Kinh nghiệm"],
    weaknesses: ["Đôi khi thiếu nhất quán", "Khó đoán"],
    tips: ["Xây dựng thói quen an toàn cố định", "Kiên định với nguyên tắc"],
  },
  D: {
    type: "D",
    title: "Tài xế hiện đại",
    emoji: "⚡",
    description: "Bạn là người yêu thích công nghệ và sự tiện lợi. Bạn biết tận dụng các phương tiện và công cụ hiện đại để di chuyển hiệu quả.",
    traits: ["Hiện đại", "Công nghệ", "Tiện lợi", "Thông minh"],
    strengths: ["Biết tận dụng công nghệ", "An toàn", "Thân thiện môi trường"],
    weaknesses: ["Phụ thuộc công nghệ", "Chi phí có thể cao"],
    tips: ["Cân bằng giữa công nghệ và kỹ năng thực tế", "Luôn có phương án dự phòng"],
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
