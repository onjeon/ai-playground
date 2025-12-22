// Mức độ nội tâm/hướng ngoại
// Khám phá bạn là người hướng nội hay hướng ngoại

export const questions = [
  {
    id: 1,
    question: "Sau một ngày làm việc mệt mỏi, bạn thích làm gì để nạp năng lượng?",
    options: [
      { text: "Đi chơi với bạn bè, tiệc tùng", type: "A" },
      { text: "Gặp vài người bạn thân", type: "B" },
      { text: "Ở nhà đọc sách, xem phim", type: "C" },
      { text: "Một mình hoàn toàn, yên tĩnh", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Trong buổi tiệc đông người, bạn thường?",
    options: [
      { text: "Là tâm điểm, nói chuyện với nhiều người", type: "A" },
      { text: "Tham gia tích cực, vui vẻ", type: "B" },
      { text: "Nói chuyện với vài người quen", type: "C" },
      { text: "Tìm góc yên tĩnh hoặc muốn về sớm", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn thích làm việc như thế nào?",
    options: [
      { text: "Trong nhóm đông, brainstorm", type: "A" },
      { text: "Nhóm nhỏ, hợp tác", type: "B" },
      { text: "Độc lập, thỉnh thoảng họp nhóm", type: "C" },
      { text: "Một mình hoàn toàn", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi gặp người mới, bạn cảm thấy?",
    options: [
      { text: "Hào hứng, thích kết bạn mới", type: "A" },
      { text: "Thoải mái, cởi mở", type: "B" },
      { text: "Cần thời gian để mở lòng", type: "C" },
      { text: "Khó chịu, muốn tránh", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn có bao nhiêu bạn thân?",
    options: [
      { text: "Rất nhiều, khắp nơi", type: "A" },
      { text: "Khá nhiều", type: "B" },
      { text: "Vài người thôi", type: "C" },
      { text: "Một hoặc hai người, hoặc không có", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi có vấn đề, bạn thường?",
    options: [
      { text: "Nói chuyện với nhiều người để lấy ý kiến", type: "A" },
      { text: "Hỏi vài người thân", type: "B" },
      { text: "Tự suy nghĩ trước, rồi mới hỏi", type: "C" },
      { text: "Tự giải quyết một mình", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn thích môi trường làm việc nào?",
    options: [
      { text: "Văn phòng mở, náo nhiệt", type: "A" },
      { text: "Văn phòng bình thường, có tương tác", type: "B" },
      { text: "Góc làm việc riêng", type: "C" },
      { text: "Work from home, yên tĩnh tuyệt đối", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Cuối tuần lý tưởng của bạn là gì?",
    options: [
      { text: "Đi chơi, gặp gỡ nhiều người", type: "A" },
      { text: "Café với bạn bè", type: "B" },
      { text: "Ở nhà, làm sở thích cá nhân", type: "C" },
      { text: "Hoàn toàn một mình, không giao tiếp", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn thể hiện ý kiến như thế nào?",
    options: [
      { text: "Nói ngay, không ngại", type: "A" },
      { text: "Nói khi cần thiết", type: "B" },
      { text: "Suy nghĩ kỹ trước khi nói", type: "C" },
      { text: "Viết ra thay vì nói", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Sau khi giao tiếp nhiều, bạn cảm thấy?",
    options: [
      { text: "Tràn đầy năng lượng", type: "A" },
      { text: "Vui vẻ, thoải mái", type: "B" },
      { text: "Mệt, cần nghỉ ngơi", type: "C" },
      { text: "Kiệt sức, cần ở một mình lâu", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn thích nói chuyện điện thoại không?",
    options: [
      { text: "Thích, hay gọi điện cho bạn bè", type: "A" },
      { text: "Bình thường, tùy người", type: "B" },
      { text: "Không thích lắm, thích nhắn tin hơn", type: "C" },
      { text: "Ghét, tránh gọi điện", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bạn đánh giá mình là người như thế nào?",
    options: [
      { text: "Rất hướng ngoại, thích giao tiếp", type: "A" },
      { text: "Hướng ngoại nhưng cần không gian riêng", type: "B" },
      { text: "Hướng nội nhưng vẫn giao tiếp tốt", type: "C" },
      { text: "Rất hướng nội, thích một mình", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Bướm xã hội",
    emoji: "🦋",
    description: "Bạn là người cực kỳ hướng ngoại. Bạn nạp năng lượng từ việc giao tiếp với người khác, thích tiệc tùng và luôn là tâm điểm của đám đông.",
    traits: ["Hướng ngoại", "Năng động", "Thích giao tiếp", "Quyến rũ"],
    strengths: ["Kết bạn dễ dàng", "Thu hút người khác", "Giao tiếp tốt"],
    weaknesses: ["Khó ở một mình", "Có thể bỏ qua suy nghĩ sâu"],
    tips: ["Dành thời gian cho bản thân", "Học cách lắng nghe nhiều hơn"],
  },
  B: {
    type: "B",
    title: "Người linh hoạt",
    emoji: "🎭",
    description: "Bạn là người cân bằng giữa hướng nội và hướng ngoại (Ambivert). Bạn có thể thoải mái trong đám đông nhưng cũng cần thời gian riêng để nạp năng lượng.",
    traits: ["Cân bằng", "Linh hoạt", "Thích nghi", "Đa dạng"],
    strengths: ["Thích nghi mọi hoàn cảnh", "Hiểu cả hai phía", "Linh hoạt"],
    weaknesses: ["Đôi khi không biết mình muốn gì", "Cần cân bằng"],
    tips: ["Lắng nghe cơ thể để biết khi nào cần gì", "Tận dụng cả hai mặt"],
  },
  C: {
    type: "C",
    title: "Người trầm lặng",
    emoji: "📚",
    description: "Bạn là người hướng nội. Bạn thích không gian riêng, mối quan hệ sâu sắc và nạp năng lượng khi ở một mình. Đây là sức mạnh, không phải điểm yếu!",
    traits: ["Hướng nội", "Sâu sắc", "Độc lập", "Suy nghĩ"],
    strengths: ["Suy nghĩ sâu", "Mối quan hệ chất lượng", "Tự chủ"],
    weaknesses: ["Có thể cô lập", "Khó trong môi trường xã hội lớn"],
    tips: ["Đừng ngại ra ngoài đôi khi", "Giá trị của bạn rất quý"],
  },
  D: {
    type: "D",
    title: "Người ẩn dật",
    emoji: "🏠",
    description: "Bạn là người rất hướng nội và cần nhiều thời gian một mình. Giao tiếp xã hội có thể làm bạn kiệt sức. Hãy tôn trọng nhu cầu của bản thân!",
    traits: ["Rất hướng nội", "Thích cô độc", "Độc lập", "Nhạy cảm"],
    strengths: ["Tự túc", "Sáng tạo", "Có thế giới nội tâm phong phú"],
    weaknesses: ["Có thể cô đơn", "Khó kết nối mới"],
    tips: ["Thử kết nối với người có cùng sở thích", "Giao tiếp online có thể giúp ích"],
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
