// Quan hệ anh chị em
// Khám phá mối quan hệ của bạn với anh chị em

export const questions = [
  {
    id: 1,
    question: "Bạn có bao nhiêu anh chị em?",
    options: [
      { text: "Một người", type: "A" },
      { text: "Hai người trở lên", type: "B" },
      { text: "Nhiều anh chị em", type: "C" },
      { text: "Con một", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn là anh/chị cả, em út hay ở giữa?",
    options: [
      { text: "Anh/chị cả - người dẫn đầu", type: "A" },
      { text: "Em út - được chiều chuộng", type: "B" },
      { text: "Ở giữa - người hòa giải", type: "C" },
      { text: "Con một - độc lập", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn có hay liên lạc với anh chị em không?",
    options: [
      { text: "Rất thường xuyên, gần như mỗi ngày", type: "A" },
      { text: "Thường xuyên, vài lần một tuần", type: "B" },
      { text: "Thỉnh thoảng, khi có dịp", type: "C" },
      { text: "Ít khi, không thân lắm", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi nhỏ, bạn và anh chị em hay làm gì cùng nhau?",
    options: [
      { text: "Chơi đùa, chia sẻ mọi thứ", type: "A" },
      { text: "Có khi chơi cùng, có khi cãi nhau", type: "B" },
      { text: "Mỗi người một góc", type: "C" },
      { text: "Không có anh chị em", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi có mâu thuẫn với anh chị em, bạn sẽ?",
    options: [
      { text: "Nói chuyện thẳng thắn giải quyết", type: "A" },
      { text: "Nhường nhịn để giữ hòa khí", type: "B" },
      { text: "Cold war một thời gian", type: "C" },
      { text: "Không có anh chị em để cãi", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn có so sánh mình với anh chị em không?",
    options: [
      { text: "Không, mỗi người một con đường", type: "A" },
      { text: "Có chút, nhưng không nghiêm trọng", type: "B" },
      { text: "Có, cảm thấy áp lực", type: "C" },
      { text: "Con một nên không có ai so sánh", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Anh chị em bạn có phải là bạn thân không?",
    options: [
      { text: "Có, họ là bạn thân nhất", type: "A" },
      { text: "Gần như, rất thân thiết", type: "B" },
      { text: "Quan hệ bình thường", type: "C" },
      { text: "Không thân lắm", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Khi có chuyện vui/buồn, bạn có chia sẻ với anh chị em không?",
    options: [
      { text: "Luôn luôn, họ là người đầu tiên biết", type: "A" },
      { text: "Có, nếu có dịp nói chuyện", type: "B" },
      { text: "Thỉnh thoảng, tùy chuyện", type: "C" },
      { text: "Không, giữ riêng", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn có ghen tị với anh chị em không?",
    options: [
      { text: "Không bao giờ, vui vì họ thành công", type: "A" },
      { text: "Đôi khi, nhưng nhanh qua", type: "B" },
      { text: "Có, cảm thấy bị so sánh", type: "C" },
      { text: "Không có anh chị em", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Khi anh chị em cần giúp đỡ, bạn sẽ?",
    options: [
      { text: "Giúp ngay lập tức, không suy nghĩ", type: "A" },
      { text: "Giúp trong khả năng", type: "B" },
      { text: "Cân nhắc trước khi giúp", type: "C" },
      { text: "Tùy mức độ và mối quan hệ", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Lớn lên, quan hệ với anh chị em thay đổi như thế nào?",
    options: [
      { text: "Gần gũi hơn, trưởng thành hiểu nhau hơn", type: "A" },
      { text: "Vẫn như cũ, ổn định", type: "B" },
      { text: "Xa cách hơn, mỗi người một nơi", type: "C" },
      { text: "Không có anh chị em", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Điều bạn trân quý nhất ở anh chị em?",
    options: [
      { text: "Sự đồng hành và thấu hiểu", type: "A" },
      { text: "Những kỷ niệm chung", type: "B" },
      { text: "Có người để dựa khi cần", type: "C" },
      { text: "Không có anh chị em", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Anh chị em thân thiết",
    emoji: "👨‍👩‍👧‍👦",
    description: "Bạn và anh chị em có mối quan hệ rất thân thiết! Họ không chỉ là gia đình mà còn là bạn thân. Bạn may mắn có được sự gắn kết này.",
    traits: ["Thân thiết", "Gắn bó", "Hỗ trợ", "Chia sẻ"],
    strengths: ["Có người đồng hành", "Hỗ trợ lẫn nhau", "Ký ức đẹp"],
    weaknesses: ["Có thể quá phụ thuộc", "Khó độc lập hoàn toàn"],
    tips: ["Tiếp tục duy trì", "Vẫn cần có không gian riêng cho mỗi người"],
  },
  B: {
    type: "B",
    title: "Anh chị em bình thường",
    emoji: "👫",
    description: "Bạn và anh chị em có mối quan hệ bình thường, lành mạnh. Có lúc thân, có lúc xa nhưng vẫn là gia đình. Đây là mối quan hệ phổ biến và ổn định.",
    traits: ["Bình thường", "Ổn định", "Độc lập", "Tôn trọng"],
    strengths: ["Không có drama", "Độc lập", "Hỗ trợ khi cần"],
    weaknesses: ["Có thể xa cách hơn theo thời gian", "Ít chia sẻ"],
    tips: ["Chủ động liên lạc hơn", "Tạo thêm kỷ niệm chung"],
  },
  C: {
    type: "C",
    title: "Anh chị em xa cách",
    emoji: "🚶",
    description: "Bạn và anh chị em có khoảng cách nhất định. Có thể do hoàn cảnh, tính cách hoặc những mâu thuẫn cũ. Mối quan hệ cần được xây dựng lại.",
    traits: ["Xa cách", "Độc lập", "Ít chia sẻ", "Mỗi người một hướng"],
    strengths: ["Tự lập", "Không phụ thuộc", "Có không gian riêng"],
    weaknesses: ["Thiếu sự gắn kết", "Có thể cô đơn", "Bỏ lỡ sự hỗ trợ"],
    tips: ["Thử kết nối lại", "Tha thứ những chuyện cũ", "Cho cơ hội mới"],
  },
  D: {
    type: "D",
    title: "Con một độc lập",
    emoji: "🌟",
    description: "Bạn là con một! Bạn không có anh chị em ruột nhưng có thể có anh chị em họ hoặc bạn bè thân như anh em. Bạn độc lập và biết cách tự lo cho mình.",
    traits: ["Độc lập", "Tự lập", "Trưởng thành sớm", "Có nhiều bạn"],
    strengths: ["Tự lập cao", "Không có xung đột anh chị em", "Được quan tâm nhiều"],
    weaknesses: ["Có thể cô đơn", "Áp lực từ bố mẹ lớn", "Thiếu người chia sẻ"],
    tips: ["Tìm bạn bè thân như anh em", "Kết nối với anh chị em họ"],
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
