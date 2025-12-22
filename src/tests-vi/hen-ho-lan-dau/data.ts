// Phong cách hẹn hò lần đầu
// Khám phá cách bạn xử lý buổi hẹn hò đầu tiên

export const questions = [
  {
    id: 1,
    question: "Trước buổi hẹn lần đầu, bạn cảm thấy thế nào?",
    options: [
      { text: "Rất hồi hộp, lo lắng không ngủ được", type: "A" },
      { text: "Hồi hộp vừa phải, chuẩn bị kỹ", type: "B" },
      { text: "Bình thường, như mọi cuộc gặp", type: "C" },
      { text: "Háo hức, mong chờ rất nhiều", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn mất bao lâu để chuẩn bị?",
    options: [
      { text: "Cả buổi, thay đồ nhiều lần", type: "A" },
      { text: "1-2 tiếng, chuẩn bị chu đáo", type: "B" },
      { text: "30 phút, nhanh gọn", type: "C" },
      { text: "Bình thường như mọi ngày", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn có nói với ai về buổi hẹn không?",
    options: [
      { text: "Không ai biết, bí mật hoàn toàn", type: "A" },
      { text: "Chỉ bạn thân nhất", type: "B" },
      { text: "Vài người bạn, nhờ tư vấn", type: "C" },
      { text: "Post story, ai cũng biết", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Nếu họ đến muộn 15 phút, bạn?",
    options: [
      { text: "Rất khó chịu, đánh giá tiêu cực", type: "A" },
      { text: "Hơi khó chịu nhưng cho cơ hội", type: "B" },
      { text: "Bình thường, kẹt xe mà", type: "C" },
      { text: "Không sao, mình cũng hay muộn", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi gặp mặt, bạn chào họ như thế nào?",
    options: [
      { text: "Cười e thẹn, vẫy tay", type: "A" },
      { text: "Bắt tay hoặc gật đầu lịch sự", type: "B" },
      { text: "Ôm nhẹ, thân thiện", type: "C" },
      { text: "Tùy không khí, linh hoạt", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn thường nói về chủ đề gì?",
    options: [
      { text: "Để họ dẫn dắt cuộc trò chuyện", type: "A" },
      { text: "Những câu hỏi cơ bản, an toàn", type: "B" },
      { text: "Sở thích, đam mê chung", type: "C" },
      { text: "Mọi thứ, từ sâu đến nông", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Nếu có khoảng lặng awkward, bạn?",
    options: [
      { text: "Rất ngại, không biết nói gì", type: "A" },
      { text: "Đưa ra chủ đề mới", type: "B" },
      { text: "Cười xòa, nói 'im lặng cũng dễ chịu'", type: "C" },
      { text: "Chấp nhận, không phải lúc nào cũng cần nói", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn có check điện thoại trong buổi hẹn?",
    options: [
      { text: "Không, tập trung hoàn toàn", type: "A" },
      { text: "Chỉ khi thật sự cần", type: "B" },
      { text: "Thỉnh thoảng, lướt nhanh", type: "C" },
      { text: "Có, vừa hẹn vừa check", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi buổi hẹn kết thúc, bạn?",
    options: [
      { text: "Vẫy tay, chào từ xa", type: "A" },
      { text: "Tiễn họ về hoặc ra xe", type: "B" },
      { text: "Ôm tạm biệt", type: "C" },
      { text: "Hỏi có muốn đi đâu tiếp không", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Sau buổi hẹn, bạn nghĩ về họ như thế nào?",
    options: [
      { text: "Phân tích mọi chi tiết, lo không biết họ nghĩ gì", type: "A" },
      { text: "Đánh giá xem có hợp không", type: "B" },
      { text: "Vui vẻ, không nghĩ nhiều", type: "C" },
      { text: "Nhắn ngay để nói hẹn rất vui", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bao lâu sau bạn sẽ nhắn tin?",
    options: [
      { text: "Đợi họ nhắn trước", type: "A" },
      { text: "Ngày hôm sau", type: "B" },
      { text: "Vài tiếng sau", type: "C" },
      { text: "Ngay lập tức", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Điều gì quyết định bạn có hẹn tiếp không?",
    options: [
      { text: "Cảm giác an toàn, thoải mái", type: "A" },
      { text: "Có điểm chung, nói chuyện hợp", type: "B" },
      { text: "Chemistry, cảm giác thu hút", type: "C" },
      { text: "Trực giác, cảm nhận ban đầu", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người nhút nhát đáng yêu",
    emoji: "🙈",
    description: "Bạn hơi nhút nhát trong buổi hẹn đầu tiên và cần thời gian để mở lòng. Sự e thẹn của bạn rất đáng yêu và khiến người khác muốn bảo vệ.",
    traits: ["Nhút nhát", "Đáng yêu", "Chân thành", "Cần thời gian"],
    strengths: ["Không giả tạo", "Đáng tin cậy", "Chân thành khi yêu"],
    weaknesses: ["Khó mở lòng", "Có thể bị hiểu nhầm là lạnh lùng"],
    tips: ["Tự tin hơn vào bản thân", "Thử nói nhiều hơn một chút"],
  },
  B: {
    type: "B",
    title: "Người chu đáo ấm áp",
    emoji: "🌷",
    description: "Bạn chuẩn bị kỹ lưỡng và luôn muốn tạo ấn tượng tốt. Sự chu đáo của bạn khiến người khác cảm thấy được quan tâm và trân trọng.",
    traits: ["Chu đáo", "Ấm áp", "Lịch sự", "Chỉn chu"],
    strengths: ["Tạo ấn tượng tốt", "Khiến người khác thoải mái", "Có duyên hẹn hò"],
    weaknesses: ["Đôi khi quá cầu toàn", "Có thể căng thẳng"],
    tips: ["Thả lỏng hơn", "Đừng quá lo về sự hoàn hảo"],
  },
  C: {
    type: "C",
    title: "Người thoải mái dễ gần",
    emoji: "😊",
    description: "Bạn thoải mái và dễ gần trong mọi buổi hẹn. Không đặt nặng áp lực, bạn làm người khác cảm thấy như đang gặp một người bạn thú vị.",
    traits: ["Thoải mái", "Dễ gần", "Vui vẻ", "Không áp lực"],
    strengths: ["Buổi hẹn vui vẻ", "Người khác thoải mái", "Có nhiều buổi hẹn tiếp"],
    weaknesses: ["Có thể thiếu nghiêm túc", "Không tạo được chemistry mạnh"],
    tips: ["Đôi khi thể hiện sự quan tâm đặc biệt", "Cho họ thấy bạn khác biệt"],
  },
  D: {
    type: "D",
    title: "Người nhiệt tình sôi nổi",
    emoji: "🔥",
    description: "Bạn nhiệt tình và không che giấu sự hào hứng của mình. Năng lượng tích cực của bạn dễ lây lan và khiến buổi hẹn trở nên sống động.",
    traits: ["Nhiệt tình", "Sôi nổi", "Cởi mở", "Năng lượng cao"],
    strengths: ["Buổi hẹn không nhàm chán", "Tạo kỷ niệm đáng nhớ", "Thể hiện rõ cảm xúc"],
    weaknesses: ["Có thể overwhelming", "Đôi khi quá nhanh"],
    tips: ["Cho họ thời gian đáp lại", "Quan sát phản ứng của họ"],
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
