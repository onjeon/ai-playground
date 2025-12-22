// Đồng nghiệp lý tưởng
// Khám phá kiểu đồng nghiệp phù hợp nhất với bạn

export const questions = [
  {
    id: 1,
    question: "Bạn thích làm việc với người như thế nào?",
    options: [
      { text: "Chuyên nghiệp, tập trung vào công việc", type: "A" },
      { text: "Vui vẻ, tạo không khí thoải mái", type: "B" },
      { text: "Hỗ trợ, sẵn sàng giúp đỡ", type: "C" },
      { text: "Sáng tạo, có nhiều ý tưởng", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Khi gặp vấn đề trong công việc, bạn muốn đồng nghiệp?",
    options: [
      { text: "Cùng phân tích và tìm giải pháp", type: "A" },
      { text: "Động viên, làm bạn bớt căng thẳng", type: "B" },
      { text: "Giúp đỡ trực tiếp", type: "C" },
      { text: "Đưa ra góc nhìn mới", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn có thích trò chuyện với đồng nghiệp không?",
    options: [
      { text: "Ít, tập trung làm việc là chính", type: "A" },
      { text: "Có, thích tán gẫu giờ nghỉ", type: "B" },
      { text: "Có, khi cần trao đổi công việc", type: "C" },
      { text: "Có, thích brainstorm ý tưởng", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Đồng nghiệp nào khiến bạn khó chịu nhất?",
    options: [
      { text: "Người không hoàn thành công việc", type: "A" },
      { text: "Người tiêu cực, hay phàn nàn", type: "B" },
      { text: "Người không hợp tác", type: "C" },
      { text: "Người không lắng nghe ý kiến", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn có muốn kết bạn với đồng nghiệp ngoài công việc không?",
    options: [
      { text: "Không, giữ ranh giới công việc và cá nhân", type: "A" },
      { text: "Có, bạn bè càng nhiều càng vui", type: "B" },
      { text: "Tùy, nếu hợp thì kết bạn", type: "C" },
      { text: "Có, nếu có chung sở thích", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi đồng nghiệp làm sai, bạn sẽ?",
    options: [
      { text: "Góp ý trực tiếp để họ sửa", type: "A" },
      { text: "Nhẹ nhàng nhắc nhở, không làm họ xấu hổ", type: "B" },
      { text: "Giúp họ sửa luôn nếu có thể", type: "C" },
      { text: "Đề xuất cách làm tốt hơn", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn thích teamwork hay làm việc độc lập?",
    options: [
      { text: "Độc lập, tự chịu trách nhiệm", type: "A" },
      { text: "Teamwork, làm việc vui hơn", type: "B" },
      { text: "Kết hợp cả hai tùy dự án", type: "C" },
      { text: "Teamwork để có nhiều ý tưởng", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn muốn đồng nghiệp đánh giá bạn như thế nào?",
    options: [
      { text: "Chuyên nghiệp và đáng tin cậy", type: "A" },
      { text: "Vui vẻ và dễ gần", type: "B" },
      { text: "Tốt bụng và hay giúp đỡ", type: "C" },
      { text: "Sáng tạo và có tầm nhìn", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi có thành công, bạn muốn đồng nghiệp?",
    options: [
      { text: "Công nhận đóng góp của bạn", type: "A" },
      { text: "Cùng ăn mừng vui vẻ", type: "B" },
      { text: "Chia sẻ niềm vui", type: "C" },
      { text: "Trao đổi để làm tốt hơn nữa", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn có chia sẻ khó khăn cá nhân với đồng nghiệp không?",
    options: [
      { text: "Không, giữ riêng tư", type: "A" },
      { text: "Có, với đồng nghiệp thân", type: "B" },
      { text: "Có, khi cần sự hỗ trợ", type: "C" },
      { text: "Ít khi, trừ khi thực sự tin tưởng", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Đồng nghiệp ideal của bạn sẽ?",
    options: [
      { text: "Hoàn thành công việc xuất sắc", type: "A" },
      { text: "Mang lại năng lượng tích cực", type: "B" },
      { text: "Luôn sẵn sàng hỗ trợ", type: "C" },
      { text: "Có tư duy đột phá", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bạn thích văn hóa công ty như thế nào?",
    options: [
      { text: "Chuyên nghiệp, rõ ràng về trách nhiệm", type: "A" },
      { text: "Vui vẻ, như gia đình", type: "B" },
      { text: "Hỗ trợ lẫn nhau, đoàn kết", type: "C" },
      { text: "Sáng tạo, khuyến khích ý tưởng mới", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Đồng nghiệp chuyên nghiệp",
    emoji: "💼",
    description: "Bạn cần đồng nghiệp chuyên nghiệp, tập trung vào công việc và đáng tin cậy. Người này hoàn thành nhiệm vụ đúng hạn, không gây rắc rối và tôn trọng ranh giới công việc-cá nhân.",
    traits: ["Chuyên nghiệp", "Đáng tin cậy", "Hiệu quả", "Độc lập"],
    strengths: ["Công việc trôi chảy", "Không drama", "Học hỏi được nhiều"],
    weaknesses: ["Có thể thiếu kết nối", "Không khí hơi nghiêm túc"],
    tips: ["Thỉnh thoảng thư giãn với đồng nghiệp", "Kết nối cũng quan trọng"],
  },
  B: {
    type: "B",
    title: "Đồng nghiệp vui vẻ",
    emoji: "😄",
    description: "Bạn cần đồng nghiệp vui vẻ, mang lại năng lượng tích cực. Người này biết cách làm việc mà vẫn tạo không khí thoải mái, giúp bạn không cảm thấy công việc nhàm chán.",
    traits: ["Vui vẻ", "Tích cực", "Hài hước", "Dễ gần"],
    strengths: ["Làm việc vui", "Giảm stress", "Có nhiều bạn"],
    weaknesses: ["Đôi khi thiếu nghiêm túc", "Có thể mất tập trung"],
    tips: ["Cân bằng giữa vui và hiệu quả", "Đừng quá phụ thuộc vào không khí"],
  },
  C: {
    type: "C",
    title: "Đồng nghiệp hỗ trợ",
    emoji: "🤝",
    description: "Bạn cần đồng nghiệp luôn sẵn sàng hỗ trợ và teamwork tốt. Người này không ngại giúp đỡ, biết cách phối hợp và tạo cảm giác an tâm khi làm việc cùng.",
    traits: ["Hỗ trợ", "Teamwork", "Tốt bụng", "Đáng tin"],
    strengths: ["Không bao giờ đơn độc", "Hỗ trợ lẫn nhau", "Team gắn kết"],
    weaknesses: ["Có thể phụ thuộc lẫn nhau", "Khó làm việc độc lập"],
    tips: ["Vẫn cần phát triển kỹ năng độc lập", "Đừng quên ranh giới"],
  },
  D: {
    type: "D",
    title: "Đồng nghiệp sáng tạo",
    emoji: "💡",
    description: "Bạn cần đồng nghiệp sáng tạo, có nhiều ý tưởng và góc nhìn mới. Người này giúp bạn mở rộng tầm nhìn, brainstorm hiệu quả và luôn có giải pháp sáng tạo.",
    traits: ["Sáng tạo", "Đổi mới", "Tầm nhìn", "Truyền cảm hứng"],
    strengths: ["Nhiều ý tưởng mới", "Không nhàm chán", "Phát triển cùng nhau"],
    weaknesses: ["Đôi khi không thực tế", "Có thể khó đồng thuận"],
    tips: ["Cân bằng sáng tạo và thực thi", "Học cách lắng nghe và thỏa hiệp"],
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
