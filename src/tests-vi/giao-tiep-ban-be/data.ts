// Giao tiếp bạn bè
// Bài test đánh giá cách bạn giao tiếp và duy trì tình bạn

export const questions = [
  {
    id: 1,
    question: "Bạn có nhiều bạn bè thân không?",
    options: [
      { text: "Rất nhiều, tôi có nhóm bạn thân đông", type: "A" },
      { text: "Vài người bạn thân", type: "B" },
      { text: "Một vài người bạn", type: "C" },
      { text: "Hiếm bạn thân", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn chủ động liên lạc với bạn bè như thế nào?",
    options: [
      { text: "Rất thường xuyên, hay nhắn tin/gọi", type: "A" },
      { text: "Thỉnh thoảng check in", type: "B" },
      { text: "Khi có việc hoặc khi nhớ", type: "C" },
      { text: "Hiếm khi chủ động", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi bạn bè có chuyện buồn, bạn làm gì?",
    options: [
      { text: "Đến ngay để ở bên họ", type: "A" },
      { text: "Gọi điện an ủi và hỏi thăm", type: "B" },
      { text: "Nhắn tin hỏi thăm", type: "C" },
      { text: "Đợi họ nói mới biết", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn có dễ kết bạn mới không?",
    options: [
      { text: "Rất dễ, tôi hay làm quen người mới", type: "A" },
      { text: "Khá dễ, nếu có dịp", type: "B" },
      { text: "Hơi khó, cần thời gian", type: "C" },
      { text: "Rất khó, tôi ngại làm quen", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn chia sẻ bí mật với bạn bè như thế nào?",
    options: [
      { text: "Chia sẻ với nhóm bạn thân", type: "A" },
      { text: "Chỉ chia sẻ với 1-2 người thật thân", type: "B" },
      { text: "Hiếm khi chia sẻ bí mật", type: "C" },
      { text: "Không chia sẻ với ai", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn có hay tổ chức/tham gia họp nhóm bạn không?",
    options: [
      { text: "Có, thường xuyên và hay tổ chức", type: "A" },
      { text: "Có, tham gia đều đặn", type: "B" },
      { text: "Đôi khi, khi có thời gian", type: "C" },
      { text: "Hiếm khi tham gia", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Khi có xung đột với bạn, bạn xử lý thế nào?",
    options: [
      { text: "Nói chuyện thẳng thắn để hòa giải", type: "A" },
      { text: "Đợi nguôi rồi làm lành", type: "B" },
      { text: "Để thời gian giải quyết", type: "C" },
      { text: "Có thể mất liên lạc luôn", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn có nhớ ngày sinh nhật bạn bè không?",
    options: [
      { text: "Có, và hay tổ chức/tặng quà", type: "A" },
      { text: "Nhớ và chúc mừng", type: "B" },
      { text: "Đôi khi quên", type: "C" },
      { text: "Thường không nhớ", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn bè đánh giá bạn như thế nào?",
    options: [
      { text: "Vui vẻ, quan tâm, đáng tin", type: "A" },
      { text: "Tốt bụng, dễ thương", type: "B" },
      { text: "Im lặng, khó hiểu", type: "C" },
      { text: "Xa cách, ít gần gũi", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn có duy trì liên lạc với bạn cũ (cấp 2, 3) không?",
    options: [
      { text: "Có, vẫn thân thiết", type: "A" },
      { text: "Có, thỉnh thoảng liên lạc", type: "B" },
      { text: "Ít, chỉ qua mạng xã hội", type: "C" },
      { text: "Không, đã mất liên lạc", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Khi bạn bè nhờ giúp, bạn thường?",
    options: [
      { text: "Sẵn sàng giúp ngay", type: "A" },
      { text: "Giúp nếu có thể", type: "B" },
      { text: "Giúp khi không quá bất tiện", type: "C" },
      { text: "Hiếm khi giúp được", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bạn đánh giá khả năng giao tiếp với bạn bè của mình thế nào?",
    options: [
      { text: "Rất tốt, điểm mạnh của tôi", type: "A" },
      { text: "Khá tốt", type: "B" },
      { text: "Bình thường", type: "C" },
      { text: "Cần cải thiện", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người Bạn Tuyệt Vời",
    emoji: "🤝",
    description: "Bạn là người bạn tuyệt vời, biết cách duy trì và phát triển tình bạn. Bạn quan tâm, chủ động và luôn có mặt khi bạn bè cần.",
    traits: ["Quan tâm", "Chủ động", "Đáng tin", "Vui vẻ"],
    strengths: ["Nhiều bạn bè thân", "Mạng lưới hỗ trợ tốt", "Cuộc sống vui vẻ"],
    weaknesses: ["Đôi khi quá bận với bạn bè", "Có thể mệt mỏi"],
    tips: ["Tiếp tục duy trì tình bạn", "Nhớ dành thời gian cho bản thân"],
  },
  B: {
    type: "B",
    title: "Người Bạn Tốt",
    emoji: "😊",
    description: "Bạn là người bạn tốt, biết duy trì những mối quan hệ quan trọng. Bạn có những người bạn thân và biết cách chăm sóc tình bạn.",
    traits: ["Tốt bụng", "Có chọn lọc", "Đáng tin cậy", "Cân bằng"],
    strengths: ["Tình bạn chất lượng", "Cân bằng cuộc sống"],
    weaknesses: ["Có thể mở rộng thêm", "Đôi khi ít chủ động"],
    tips: ["Thử kết bạn mới", "Chủ động hơn trong việc giữ liên lạc"],
  },
  C: {
    type: "C",
    title: "Người Khép Kín Với Bạn Bè",
    emoji: "🤫",
    description: "Bạn có xu hướng khép kín trong việc kết bạn và duy trì tình bạn. Bạn có ít bạn thân và hiếm khi chủ động liên lạc.",
    traits: ["Khép kín", "Ít bạn", "Không chủ động", "Cần thời gian"],
    strengths: ["Độc lập", "Không phụ thuộc bạn bè"],
    weaknesses: ["Cô đơn đôi khi", "Thiếu hỗ trợ xã hội"],
    tips: ["Thử chủ động liên lạc với bạn cũ", "Tham gia các hoạt động nhóm"],
  },
  D: {
    type: "D",
    title: "Cần Phát Triển Kỹ Năng Kết Bạn",
    emoji: "💭",
    description: "Bạn gặp khó khăn trong việc kết bạn và duy trì tình bạn. Điều này có thể khiến bạn cảm thấy cô đơn và thiếu sự hỗ trợ xã hội.",
    traits: ["Xa cách", "Khó kết bạn", "Ít hỗ trợ", "Cô đơn"],
    strengths: ["Có thể thay đổi được"],
    weaknesses: ["Cảm thấy cô đơn", "Thiếu người chia sẻ"],
    tips: ["Bắt đầu từ việc nhỏ như chào hỏi", "Tham gia các câu lạc bộ sở thích"],
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
