// Mức độ quyết đoán
// Đánh giá mức độ quyết đoán và khả năng đưa ra quyết định của bạn

export const questions = [
  {
    id: 1,
    question: "Khi cần đưa ra quyết định quan trọng, bạn?",
    options: [
      { text: "Quyết định nhanh và dứt khoát", type: "A" },
      { text: "Suy nghĩ kỹ rồi quyết định", type: "B" },
      { text: "Hỏi ý kiến nhiều người", type: "C" },
      { text: "Lưỡng lự rất lâu, khó quyết định", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Khi có người yêu cầu việc bạn không muốn làm, bạn?",
    options: [
      { text: "Từ chối thẳng thắn", type: "A" },
      { text: "Từ chối một cách lịch sự", type: "B" },
      { text: "Cố gắng tìm lý do thoát", type: "C" },
      { text: "Đồng ý dù không muốn", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi bạn có ý kiến khác với đám đông, bạn?",
    options: [
      { text: "Nói ra ngay, bảo vệ quan điểm", type: "A" },
      { text: "Nói ra nếu thấy quan trọng", type: "B" },
      { text: "Giữ im lặng, tránh đối đầu", type: "C" },
      { text: "Đổi ý theo đám đông", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi gọi món ở nhà hàng, bạn?",
    options: [
      { text: "Biết ngay muốn ăn gì", type: "A" },
      { text: "Chọn nhanh trong vài món", type: "B" },
      { text: "Lật qua lật lại menu", type: "C" },
      { text: "Nhờ người khác chọn cho", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Trong công việc nhóm, bạn thường?",
    options: [
      { text: "Dẫn dắt, đưa ra hướng đi", type: "A" },
      { text: "Đóng góp ý kiến tích cực", type: "B" },
      { text: "Theo ý kiến số đông", type: "C" },
      { text: "Im lặng, làm theo chỉ đạo", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi mua đồ, bạn?",
    options: [
      { text: "Biết cần gì, mua ngay", type: "A" },
      { text: "So sánh vài sản phẩm rồi chọn", type: "B" },
      { text: "Cân nhắc rất lâu", type: "C" },
      { text: "Không mua được vì không quyết định được", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Khi ai đó xin ý kiến bạn, bạn?",
    options: [
      { text: "Cho ý kiến rõ ràng, dứt khoát", type: "A" },
      { text: "Đưa ra lời khuyên cân nhắc", type: "B" },
      { text: "Nói 'tùy bạn' hoặc 'gì cũng được'", type: "C" },
      { text: "Không biết nói gì", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Sau khi quyết định, bạn có hay hối hận không?",
    options: [
      { text: "Hiếm khi, tin vào quyết định của mình", type: "A" },
      { text: "Đôi khi, nhưng chấp nhận", type: "B" },
      { text: "Thường xuyên suy nghĩ lại", type: "C" },
      { text: "Luôn hối hận, tự trách", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi có cơ hội mới, bạn?",
    options: [
      { text: "Nắm bắt ngay nếu thấy phù hợp", type: "A" },
      { text: "Cân nhắc rồi quyết định", type: "B" },
      { text: "Sợ rủi ro, chần chừ", type: "C" },
      { text: "Bỏ lỡ vì không dám quyết định", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn đặt mục tiêu như thế nào?",
    options: [
      { text: "Rõ ràng, cụ thể, có deadline", type: "A" },
      { text: "Có mục tiêu nhưng linh hoạt", type: "B" },
      { text: "Mục tiêu mơ hồ, không rõ ràng", type: "C" },
      { text: "Không có mục tiêu cụ thể", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Khi cần yêu cầu người khác làm gì đó, bạn?",
    options: [
      { text: "Yêu cầu rõ ràng, trực tiếp", type: "A" },
      { text: "Nói lịch sự nhưng rõ ràng", type: "B" },
      { text: "Gợi ý nhẹ nhàng, sợ làm phiền", type: "C" },
      { text: "Không dám yêu cầu", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bạn đánh giá mức độ quyết đoán của mình?",
    options: [
      { text: "Rất quyết đoán, tin vào bản thân", type: "A" },
      { text: "Khá quyết đoán", type: "B" },
      { text: "Thiếu quyết đoán, cần cải thiện", type: "C" },
      { text: "Rất thiếu quyết đoán", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Nhà lãnh đạo quyết đoán",
    emoji: "🎯",
    description: "Bạn là người cực kỳ quyết đoán! Bạn biết mình muốn gì, đưa ra quyết định nhanh chóng và tin vào bản thân. Đây là phẩm chất của nhà lãnh đạo.",
    traits: ["Quyết đoán", "Tự tin", "Dứt khoát", "Lãnh đạo"],
    strengths: ["Không lãng phí thời gian", "Nắm bắt cơ hội", "Được tôn trọng"],
    weaknesses: ["Đôi khi quá vội vàng", "Có thể thiếu lắng nghe"],
    tips: ["Lắng nghe ý kiến người khác", "Cân nhắc kỹ những quyết định lớn"],
  },
  B: {
    type: "B",
    title: "Người quyết đoán cân bằng",
    emoji: "⚖️",
    description: "Bạn có mức độ quyết đoán tốt và cân bằng. Bạn biết cách cân nhắc nhưng không lưỡng lự quá lâu. Bạn đưa ra quyết định một cách khôn ngoan.",
    traits: ["Cân bằng", "Suy nghĩ", "Quyết đoán", "Khôn ngoan"],
    strengths: ["Quyết định có chất lượng", "Biết lắng nghe", "Linh hoạt"],
    weaknesses: ["Đôi khi cần nhanh hơn", "Có thể do dự"],
    tips: ["Tin vào trực giác hơn", "Thực hành ra quyết định nhanh"],
  },
  C: {
    type: "C",
    title: "Người do dự",
    emoji: "🤔",
    description: "Bạn thường do dự khi phải đưa ra quyết định và hay dựa vào người khác. Điều này có thể làm bạn bỏ lỡ cơ hội và mất thời gian.",
    traits: ["Do dự", "Phụ thuộc", "Thiếu tự tin", "Cần phát triển"],
    strengths: ["Cân nhắc kỹ", "Lắng nghe người khác", "Không vội vàng"],
    weaknesses: ["Bỏ lỡ cơ hội", "Mất thời gian", "Dựa dẫm"],
    tips: ["Tin vào bản thân hơn", "Bắt đầu với quyết định nhỏ", "Đặt deadline cho quyết định"],
  },
  D: {
    type: "D",
    title: "Cần phát triển",
    emoji: "🌱",
    description: "Bạn rất thiếu quyết đoán và điều này có thể ảnh hưởng lớn đến cuộc sống. Bạn cần xây dựng lại sự tự tin và khả năng đưa ra quyết định.",
    traits: ["Thiếu quyết đoán", "Thiếu tự tin", "Phụ thuộc", "Cần hỗ trợ"],
    strengths: ["Sẵn sàng thay đổi", "Khiêm tốn", "Có thể phát triển"],
    weaknesses: ["Bị người khác ảnh hưởng", "Khó đạt mục tiêu", "Thiếu tự chủ"],
    tips: ["Tìm kiếm coaching hoặc tâm lý", "Mỗi ngày đưa ra một quyết định nhỏ", "Bạn có quyền có ý kiến riêng"],
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
