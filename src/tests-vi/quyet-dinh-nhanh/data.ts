// Cách ra quyết định nhanh
// Khám phá cách bạn xử lý quyết định trong tình huống gấp

export const questions = [
  {
    id: 1,
    question: "Khi cần quyết định ngay lập tức, bạn?",
    options: [
      { text: "Nhanh chóng đánh giá và chọn phương án tốt nhất", type: "A" },
      { text: "Hỏi nhanh ý kiến người bên cạnh", type: "B" },
      { text: "Tin vào trực giác, quyết ngay", type: "C" },
      { text: "Căng thẳng, khó quyết định nhanh", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Ở siêu thị, bạn chọn đồ mua thế nào?",
    options: [
      { text: "Có danh sách sẵn, mua đúng những thứ cần", type: "A" },
      { text: "Hỏi nhân viên tư vấn hoặc người đi cùng", type: "B" },
      { text: "Chọn ngay sản phẩm bắt mắt", type: "C" },
      { text: "Phân vân lâu giữa các lựa chọn", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi menu nhà hàng nhiều món, bạn?",
    options: [
      { text: "Chọn nhanh món quen hoặc được recommend", type: "A" },
      { text: "Hỏi bạn bè gọi gì rồi chọn theo", type: "B" },
      { text: "Chọn món nào thấy ngon đầu tiên", type: "C" },
      { text: "Đọc kỹ menu, khó quyết định", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Gặp tình huống khẩn cấp, bạn thường?",
    options: [
      { text: "Bình tĩnh, đưa ra quyết định hợp lý", type: "A" },
      { text: "Tìm người có kinh nghiệm để hỏi", type: "B" },
      { text: "Hành động theo bản năng", type: "C" },
      { text: "Hoảng loạn, cần người khác dẫn dắt", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi shopping và thấy deal hot sắp hết, bạn?",
    options: [
      { text: "Nhanh chóng đánh giá có cần không rồi mua", type: "A" },
      { text: "Gọi hỏi bạn bè có nên mua không", type: "B" },
      { text: "Mua luôn, sợ hết deal", type: "C" },
      { text: "Bỏ qua, sợ mua nhầm", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi đang lái xe và gặp ngã rẽ bất ngờ, bạn?",
    options: [
      { text: "Nhanh chóng chọn hướng hợp lý nhất", type: "A" },
      { text: "Hỏi người ngồi cạnh", type: "B" },
      { text: "Rẽ theo hướng cảm thấy đúng", type: "C" },
      { text: "Dừng lại check bản đồ", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Khi bị deadline gấp, bạn quyết định công việc thế nào?",
    options: [
      { text: "Ưu tiên việc quan trọng nhất, làm ngay", type: "A" },
      { text: "Hỏi sếp/đồng nghiệp nên ưu tiên gì", type: "B" },
      { text: "Làm việc nào cảm thấy làm được trước", type: "C" },
      { text: "Stress, khó sắp xếp được", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn có hối hận sau quyết định nhanh không?",
    options: [
      { text: "Hiếm khi, vì đã cân nhắc đủ", type: "A" },
      { text: "Có khi, nhất là khi không hỏi ai", type: "B" },
      { text: "Ít khi, tin vào lựa chọn của mình", type: "C" },
      { text: "Thường xuyên, hay nghĩ lại", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi cần đặt vé/phòng gấp, bạn?",
    options: [
      { text: "So sánh nhanh vài option rồi đặt", type: "A" },
      { text: "Nhờ ai đó có kinh nghiệm đặt giúp", type: "B" },
      { text: "Đặt cái đầu tiên thấy OK", type: "C" },
      { text: "Lo lắng, check nhiều lần mới dám đặt", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Trong game hoặc quiz cần trả lời nhanh, bạn?",
    options: [
      { text: "Nhanh chóng loại trừ và chọn đáp án", type: "A" },
      { text: "Hỏi hint hoặc xem người khác", type: "B" },
      { text: "Chọn ngay theo cảm giác", type: "C" },
      { text: "Hay hết giờ vì không quyết được", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn nghĩ gì về quyết định nhanh?",
    options: [
      { text: "Cần thiết và mình làm tốt", type: "A" },
      { text: "OK nếu có người hỗ trợ", type: "B" },
      { text: "Thích vì không phải suy nghĩ nhiều", type: "C" },
      { text: "Không thích, hay sai lầm", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Điều gì giúp bạn quyết định nhanh hơn?",
    options: [
      { text: "Kinh nghiệm và framework sẵn có", type: "A" },
      { text: "Có người đáng tin để hỏi", type: "B" },
      { text: "Tin vào trực giác của mình", type: "C" },
      { text: "Không có gì, mình hay chậm", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người quyết định nhanh và hiệu quả",
    emoji: "⚡",
    description: "Bạn có khả năng đưa ra quyết định nhanh chóng nhưng vẫn hiệu quả. Bạn biết cách đánh giá tình huống và chọn phương án tốt nhất trong thời gian ngắn.",
    traits: ["Nhanh nhẹn", "Hiệu quả", "Kinh nghiệm", "Bình tĩnh"],
    strengths: ["Xử lý tình huống gấp tốt", "Không bỏ lỡ cơ hội", "Đáng tin cậy"],
    weaknesses: ["Có thể bỏ qua chi tiết", "Đôi khi quá tự tin"],
    tips: ["Tiếp tục rèn luyện kỹ năng", "Đôi khi cần chậm lại"],
  },
  B: {
    type: "B",
    title: "Người quyết định cần hỗ trợ",
    emoji: "👥",
    description: "Bạn quyết định tốt hơn khi có người hỗ trợ hoặc tham khảo ý kiến. Bạn coi trọng góc nhìn của người khác.",
    traits: ["Hợp tác", "Cẩn thận", "Lắng nghe", "Cân nhắc"],
    strengths: ["Có nhiều góc nhìn", "Quyết định an toàn hơn", "Teamwork tốt"],
    weaknesses: ["Phụ thuộc người khác", "Chậm khi ở một mình"],
    tips: ["Tự tin hơn vào bản thân", "Rèn luyện quyết định độc lập"],
  },
  C: {
    type: "C",
    title: "Người quyết định theo trực giác",
    emoji: "✨",
    description: "Bạn quyết định rất nhanh theo trực giác và bản năng. Bạn tin vào cảm giác của mình và không cần suy nghĩ nhiều.",
    traits: ["Trực giác", "Nhanh", "Tự tin", "Bản năng"],
    strengths: ["Quyết định cực nhanh", "Không stress", "Tin vào bản thân"],
    weaknesses: ["Có thể thiếu cân nhắc", "Đôi khi sai vì vội"],
    tips: ["Đôi khi cần phân tích hơn", "Học từ những quyết định sai"],
  },
  D: {
    type: "D",
    title: "Người cần thời gian quyết định",
    emoji: "🤔",
    description: "Bạn thích có thời gian để suy nghĩ và cân nhắc. Quyết định nhanh khiến bạn căng thẳng và dễ sai lầm.",
    traits: ["Cẩn thận", "Suy nghĩ", "Lo lắng", "Chi tiết"],
    strengths: ["Quyết định kỹ lưỡng khi có thời gian", "Ít sai sót", "Cân nhắc kỹ"],
    weaknesses: ["Chậm trong tình huống gấp", "Hay bỏ lỡ cơ hội"],
    tips: ["Rèn luyện quyết định trong áp lực", "Tin vào bản thân hơn"],
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
