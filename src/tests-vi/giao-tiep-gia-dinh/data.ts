// Giao tiếp trong gia đình
// Bài test đánh giá cách bạn giao tiếp với các thành viên trong gia đình

export const questions = [
  {
    id: 1,
    question: "Bạn thường chia sẻ chuyện cá nhân với gia đình như thế nào?",
    options: [
      { text: "Chia sẻ hầu hết mọi thứ", type: "A" },
      { text: "Chia sẻ những điều quan trọng", type: "B" },
      { text: "Chỉ chia sẻ khi được hỏi", type: "C" },
      { text: "Hiếm khi chia sẻ", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Khi có bất đồng với bố mẹ, bạn xử lý thế nào?",
    options: [
      { text: "Nói chuyện thẳng thắn và tìm giải pháp", type: "A" },
      { text: "Giải thích quan điểm nhưng vẫn tôn trọng", type: "B" },
      { text: "Im lặng và làm theo ý bố mẹ", type: "C" },
      { text: "Cãi lại hoặc tránh mặt", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn có thường xuyên gọi điện/nhắn tin cho gia đình không?",
    options: [
      { text: "Mỗi ngày hoặc gần như vậy", type: "A" },
      { text: "Vài lần một tuần", type: "B" },
      { text: "Vài lần một tháng", type: "C" },
      { text: "Hiếm khi, chỉ khi có việc", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Trong bữa cơm gia đình, bạn thường?",
    options: [
      { text: "Nói chuyện vui vẻ với mọi người", type: "A" },
      { text: "Lắng nghe và tham gia khi cần", type: "B" },
      { text: "Ăn nhanh và ít nói", type: "C" },
      { text: "Không ăn cơm cùng gia đình", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn xử lý thế nào khi gia đình hỏi về chuyện riêng tư?",
    options: [
      { text: "Trả lời thoải mái, không giấu giếm", type: "A" },
      { text: "Trả lời chung chung những gì cần thiết", type: "B" },
      { text: "Tránh né hoặc đổi chủ đề", type: "C" },
      { text: "Khó chịu và không muốn trả lời", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn có hay tham gia các hoạt động gia đình không?",
    options: [
      { text: "Luôn tham gia và chủ động tổ chức", type: "A" },
      { text: "Tham gia khi có thể", type: "B" },
      { text: "Đôi khi, khi bắt buộc", type: "C" },
      { text: "Hiếm khi hoặc không tham gia", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Khi gặp khó khăn, bạn có nhờ gia đình giúp không?",
    options: [
      { text: "Có, gia đình là nơi đầu tiên tôi tìm đến", type: "A" },
      { text: "Đôi khi, với những việc quan trọng", type: "B" },
      { text: "Hiếm khi, cố tự giải quyết trước", type: "C" },
      { text: "Không, không muốn làm phiền", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn thể hiện tình cảm với gia đình như thế nào?",
    options: [
      { text: "Thường xuyên nói 'con yêu bố mẹ'", type: "A" },
      { text: "Qua hành động quan tâm chăm sóc", type: "B" },
      { text: "Ít thể hiện nhưng vẫn yêu thương", type: "C" },
      { text: "Không biết cách thể hiện", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn xử lý thế nào khi gia đình có xung đột?",
    options: [
      { text: "Đứng ra hòa giải và gắn kết", type: "A" },
      { text: "Cố gắng hiểu cả hai bên", type: "B" },
      { text: "Đứng ngoài, không can thiệp", type: "C" },
      { text: "Tránh xa cho đến khi ổn", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn có kể về bạn bè/người yêu cho gia đình không?",
    options: [
      { text: "Có, gia đình biết hết về các mối quan hệ của tôi", type: "A" },
      { text: "Có, những người quan trọng", type: "B" },
      { text: "Ít khi, chỉ khi cần thiết", type: "C" },
      { text: "Không, đó là chuyện riêng", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Gia đình bạn giao tiếp với nhau như thế nào?",
    options: [
      { text: "Rất cởi mở và thân thiện", type: "A" },
      { text: "Khá tốt, có không khí ấm áp", type: "B" },
      { text: "Bình thường, không quá gần gũi", type: "C" },
      { text: "Xa cách, ít giao tiếp", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bạn đánh giá mối quan hệ với gia đình như thế nào?",
    options: [
      { text: "Rất tốt, gắn bó và yêu thương", type: "A" },
      { text: "Khá tốt, có sự quan tâm", type: "B" },
      { text: "Bình thường, không quá thân", type: "C" },
      { text: "Xa cách hoặc có vấn đề", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Giao Tiếp Gia Đình Tuyệt Vời",
    emoji: "👨‍👩‍👧‍👦",
    description: "Bạn có mối quan hệ giao tiếp rất tốt với gia đình. Bạn cởi mở, chia sẻ và luôn gắn kết với các thành viên trong gia đình.",
    traits: ["Gắn kết", "Cởi mở", "Yêu thương", "Chia sẻ"],
    strengths: ["Có hỗ trợ gia đình", "Tình cảm bền chặt", "Được yêu thương"],
    weaknesses: ["Đôi khi quá phụ thuộc"],
    tips: ["Tiếp tục duy trì mối quan hệ tốt đẹp", "Cân bằng giữa gia đình và cuộc sống riêng"],
  },
  B: {
    type: "B",
    title: "Giao Tiếp Gia Đình Khá Tốt",
    emoji: "🏠",
    description: "Bạn có mối quan hệ giao tiếp khá tốt với gia đình, biết cân bằng giữa sự gần gũi và không gian riêng tư. Bạn tôn trọng gia đình nhưng cũng có cuộc sống độc lập.",
    traits: ["Cân bằng", "Tôn trọng", "Độc lập", "Có kết nối"],
    strengths: ["Cân bằng tốt", "Có sự hỗ trợ khi cần"],
    weaknesses: ["Có thể gần gũi hơn", "Đôi khi xa cách"],
    tips: ["Dành thêm thời gian cho gia đình", "Chia sẻ nhiều hơn về cuộc sống"],
  },
  C: {
    type: "C",
    title: "Giao Tiếp Gia Đình Hạn Chế",
    emoji: "🚪",
    description: "Bạn có xu hướng giữ khoảng cách với gia đình, ít chia sẻ và không gần gũi lắm. Điều này có thể khiến bạn bỏ lỡ sự hỗ trợ quan trọng từ gia đình.",
    traits: ["Xa cách", "Ít chia sẻ", "Giữ khoảng cách", "Độc lập quá mức"],
    strengths: ["Độc lập", "Có không gian riêng"],
    weaknesses: ["Thiếu hỗ trợ gia đình", "Có thể cô đơn"],
    tips: ["Thử mở lòng hơn với gia đình", "Bắt đầu bằng việc gọi điện thường xuyên hơn"],
  },
  D: {
    type: "D",
    title: "Giao Tiếp Gia Đình Cần Cải Thiện",
    emoji: "💭",
    description: "Mối quan hệ giao tiếp với gia đình của bạn đang có vấn đề. Có thể có khoảng cách hoặc xung đột cần được giải quyết để có mối quan hệ tốt đẹp hơn.",
    traits: ["Xa cách", "Có vấn đề", "Thiếu kết nối", "Cần cải thiện"],
    strengths: ["Có thể thay đổi được"],
    weaknesses: ["Thiếu hỗ trợ", "Có thể gây stress", "Cảm giác cô đơn"],
    tips: ["Cân nhắc nói chuyện thẳng thắn với gia đình", "Có thể cần sự hỗ trợ từ người khác"],
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
