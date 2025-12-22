// Giao tiếp công sở
// Bài test đánh giá kỹ năng giao tiếp của bạn tại nơi làm việc

export const questions = [
  {
    id: 1,
    question: "Khi có ý kiến trong cuộc họp, bạn thường?",
    options: [
      { text: "Phát biểu tự tin và rõ ràng", type: "A" },
      { text: "Đợi thời điểm phù hợp rồi phát biểu", type: "B" },
      { text: "Chỉ nói khi được hỏi", type: "C" },
      { text: "Hiếm khi phát biểu", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn giao tiếp với đồng nghiệp như thế nào?",
    options: [
      { text: "Thân thiện, cởi mở với tất cả", type: "A" },
      { text: "Lịch sự, chuyên nghiệp", type: "B" },
      { text: "Chỉ nói chuyện công việc", type: "C" },
      { text: "Ít giao tiếp, làm việc một mình", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi có xung đột với đồng nghiệp, bạn xử lý thế nào?",
    options: [
      { text: "Nói chuyện trực tiếp để giải quyết", type: "A" },
      { text: "Cố gắng tìm điểm chung", type: "B" },
      { text: "Tránh mặt hoặc nhờ người khác hòa giải", type: "C" },
      { text: "Im lặng và giữ khoảng cách", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn email/tin nhắn công việc như thế nào?",
    options: [
      { text: "Rõ ràng, chuyên nghiệp, trả lời nhanh", type: "A" },
      { text: "Cẩn thận và chu đáo", type: "B" },
      { text: "Ngắn gọn, đi thẳng vào vấn đề", type: "C" },
      { text: "Chậm trả lời hoặc ngại viết", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi cần nhờ đồng nghiệp giúp đỡ, bạn?",
    options: [
      { text: "Dễ dàng nhờ và biết cách nhờ khéo léo", type: "A" },
      { text: "Nhờ khi thực sự cần thiết", type: "B" },
      { text: "Ngại nhờ, cố tự làm trước", type: "C" },
      { text: "Hiếm khi nhờ ai", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn có tham gia các hoạt động team building không?",
    options: [
      { text: "Luôn tham gia và rất vui vẻ", type: "A" },
      { text: "Tham gia khi có thể", type: "B" },
      { text: "Đôi khi, khi bắt buộc", type: "C" },
      { text: "Cố tránh nếu được", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Khi sếp góp ý về công việc, bạn phản ứng thế nào?",
    options: [
      { text: "Lắng nghe và hỏi thêm để cải thiện", type: "A" },
      { text: "Tiếp thu và ghi nhận", type: "B" },
      { text: "Im lặng nhận, đôi khi khó chịu", type: "C" },
      { text: "Phòng thủ hoặc bào chữa", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn có dễ dàng bắt chuyện với người mới không?",
    options: [
      { text: "Rất dễ, tôi thường chủ động làm quen", type: "A" },
      { text: "Khá dễ, nếu có dịp", type: "B" },
      { text: "Khó, thường đợi người khác bắt chuyện", type: "C" },
      { text: "Rất khó, tôi ngại giao tiếp", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi trình bày ý tưởng với nhóm, bạn thường?",
    options: [
      { text: "Trình bày tự tin và thuyết phục", type: "A" },
      { text: "Chuẩn bị kỹ và trình bày rõ ràng", type: "B" },
      { text: "Hồi hộp nhưng vẫn làm được", type: "C" },
      { text: "Rất ngại trình bày trước nhóm", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn xử lý thế nào khi deadline gấp và cần sự hợp tác?",
    options: [
      { text: "Điều phối nhóm và phân công công việc", type: "A" },
      { text: "Hợp tác tốt và hoàn thành phần mình", type: "B" },
      { text: "Tập trung làm phần mình, ít tương tác", type: "C" },
      { text: "Áp lực và khó làm việc nhóm", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Đồng nghiệp đánh giá bạn như thế nào?",
    options: [
      { text: "Dễ gần, vui vẻ, hay giúp đỡ", type: "A" },
      { text: "Chuyên nghiệp và đáng tin cậy", type: "B" },
      { text: "Im lặng, ít giao tiếp", type: "C" },
      { text: "Khó gần hoặc khó hợp tác", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bạn đánh giá kỹ năng giao tiếp công sở của mình thế nào?",
    options: [
      { text: "Rất tốt, điểm mạnh của tôi", type: "A" },
      { text: "Khá tốt, đủ để làm việc hiệu quả", type: "B" },
      { text: "Cần cải thiện", type: "C" },
      { text: "Là điểm yếu của tôi", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người Giao Tiếp Xuất Sắc",
    emoji: "🌟",
    description: "Bạn có kỹ năng giao tiếp công sở xuất sắc. Bạn dễ dàng kết nối với đồng nghiệp, tự tin trình bày ý kiến và biết cách xây dựng mối quan hệ tốt đẹp.",
    traits: ["Tự tin", "Cởi mở", "Chuyên nghiệp", "Kết nối tốt"],
    strengths: ["Làm việc nhóm tốt", "Được đồng nghiệp yêu quý", "Cơ hội thăng tiến cao"],
    weaknesses: ["Đôi khi nói quá nhiều", "Có thể bị hiểu lầm là PR"],
    tips: ["Tiếp tục phát huy", "Giúp đỡ đồng nghiệp khác cải thiện giao tiếp"],
  },
  B: {
    type: "B",
    title: "Người Giao Tiếp Chuyên Nghiệp",
    emoji: "💼",
    description: "Bạn giao tiếp công sở chuyên nghiệp và hiệu quả. Bạn biết cân bằng giữa thân thiện và chuyên nghiệp, đủ để hoàn thành tốt công việc.",
    traits: ["Chuyên nghiệp", "Cân bằng", "Đáng tin cậy", "Hiệu quả"],
    strengths: ["Giao tiếp hiệu quả", "Được tôn trọng", "Làm việc tốt"],
    weaknesses: ["Có thể gần gũi hơn", "Đôi khi quá nghiêm túc"],
    tips: ["Thử tham gia nhiều hoạt động nhóm hơn", "Cởi mở hơn với đồng nghiệp"],
  },
  C: {
    type: "C",
    title: "Người Giao Tiếp Hạn Chế",
    emoji: "🤫",
    description: "Kỹ năng giao tiếp công sở của bạn còn hạn chế. Bạn có xu hướng làm việc một mình và ít giao tiếp với đồng nghiệp, điều này có thể ảnh hưởng đến công việc.",
    traits: ["Ít giao tiếp", "Làm việc một mình", "Ngại nói", "Cần cải thiện"],
    strengths: ["Tập trung vào công việc", "Không gây rắc rối"],
    weaknesses: ["Khó hợp tác nhóm", "Bỏ lỡ cơ hội", "Ít được biết đến"],
    tips: ["Thử chủ động chào hỏi đồng nghiệp", "Tham gia các hoạt động nhóm"],
  },
  D: {
    type: "D",
    title: "Cần Phát Triển Kỹ Năng Giao Tiếp",
    emoji: "📚",
    description: "Giao tiếp công sở là điểm yếu của bạn và cần được cải thiện. Việc thiếu kỹ năng giao tiếp có thể ảnh hưởng đến công việc và cơ hội nghề nghiệp.",
    traits: ["Ngại giao tiếp", "Xa cách", "Khó hợp tác", "Cần học hỏi"],
    strengths: ["Có thể cải thiện được"],
    weaknesses: ["Ảnh hưởng công việc", "Khó thăng tiến", "Cảm thấy cô lập"],
    tips: ["Học các khóa kỹ năng giao tiếp", "Bắt đầu từ việc nhỏ như chào hỏi"],
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
