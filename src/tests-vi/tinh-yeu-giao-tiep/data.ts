// Cách giao tiếp với người yêu
// Khám phá phong cách giao tiếp của bạn trong mối quan hệ tình cảm

export const questions = [
  {
    id: 1,
    question: "Khi có mâu thuẫn với người yêu, bạn thường?",
    options: [
      { text: "Nói chuyện ngay để giải quyết", type: "A" },
      { text: "Chờ bình tĩnh rồi nói chuyện", type: "B" },
      { text: "Im lặng, giận dỗi", type: "C" },
      { text: "Tránh né, không muốn đối mặt", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thể hiện tình cảm với người yêu như thế nào?",
    options: [
      { text: "Nói 'Anh/Em yêu em/anh' thường xuyên", type: "A" },
      { text: "Hành động quan tâm, chăm sóc", type: "B" },
      { text: "Ngầm thể hiện, ít nói thành lời", type: "C" },
      { text: "Không giỏi thể hiện", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi người yêu làm bạn buồn, bạn?",
    options: [
      { text: "Nói thẳng, giải thích cảm xúc", type: "A" },
      { text: "Gợi ý để họ nhận ra", type: "B" },
      { text: "Giận nhưng không nói", type: "C" },
      { text: "Cho qua, không muốn cãi nhau", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn nhắn tin với người yêu như thế nào?",
    options: [
      { text: "Nhiều, chia sẻ mọi thứ", type: "A" },
      { text: "Đều đặn, cập nhật trong ngày", type: "B" },
      { text: "Khi cần thiết, không nhiều", type: "C" },
      { text: "Hiếm khi, thích gặp mặt hơn", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi có chuyện quan trọng, bạn nói với người yêu khi nào?",
    options: [
      { text: "Ngay lập tức, không giấu gì", type: "A" },
      { text: "Khi gặp mặt, nói chuyện trực tiếp", type: "B" },
      { text: "Suy nghĩ trước, chọn thời điểm phù hợp", type: "C" },
      { text: "Khó mở lời, thường giữ trong lòng", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn lắng nghe người yêu như thế nào?",
    options: [
      { text: "Tập trung hoàn toàn, hỏi lại chi tiết", type: "A" },
      { text: "Lắng nghe và đưa lời khuyên", type: "B" },
      { text: "Nghe nhưng đôi khi phân tâm", type: "C" },
      { text: "Nghe qua, không nhớ nhiều", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Khi người yêu nói điều bạn không thích, bạn?",
    options: [
      { text: "Phản hồi ngay, nói rõ quan điểm", type: "A" },
      { text: "Lắng nghe hết rồi mới nói", type: "B" },
      { text: "Im lặng, suy nghĩ trong lòng", type: "C" },
      { text: "Đồng ý cho xong, tránh tranh cãi", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn có thường xuyên khen ngợi người yêu không?",
    options: [
      { text: "Rất thường xuyên, khen nhiều", type: "A" },
      { text: "Khi họ làm tốt hoặc đẹp", type: "B" },
      { text: "Đôi khi, không thường xuyên", type: "C" },
      { text: "Hiếm khi, ngại khen", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi cần xin lỗi, bạn?",
    options: [
      { text: "Xin lỗi ngay và thành khẩn", type: "A" },
      { text: "Xin lỗi sau khi suy nghĩ", type: "B" },
      { text: "Khó xin lỗi trực tiếp", type: "C" },
      { text: "Không giỏi xin lỗi, hành động thay lời", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn thảo luận về tương lai với người yêu như thế nào?",
    options: [
      { text: "Nói chuyện cởi mở, thường xuyên", type: "A" },
      { text: "Thỉnh thoảng đề cập", type: "B" },
      { text: "Ngại nói, sợ áp lực", type: "C" },
      { text: "Không nói, để tự nhiên", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Khi có vấn đề trong mối quan hệ, bạn?",
    options: [
      { text: "Nói chuyện ngay để giải quyết", type: "A" },
      { text: "Suy nghĩ trước rồi nói", type: "B" },
      { text: "Chờ họ nhận ra", type: "C" },
      { text: "Giữ im lặng, hy vọng tự hết", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bạn đánh giá kỹ năng giao tiếp trong tình yêu của mình?",
    options: [
      { text: "Tốt, cởi mở và thẳng thắn", type: "A" },
      { text: "Khá tốt, còn cải thiện được", type: "B" },
      { text: "Trung bình, cần phát triển", type: "C" },
      { text: "Yếu, khó nói ra cảm xúc", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người giao tiếp cởi mở",
    emoji: "💬",
    description: "Bạn có kỹ năng giao tiếp xuất sắc trong tình yêu! Bạn cởi mở, thẳng thắn và không ngại nói ra cảm xúc. Đối tác luôn biết bạn đang nghĩ gì.",
    traits: ["Cởi mở", "Thẳng thắn", "Rõ ràng", "Biểu cảm"],
    strengths: ["Giải quyết mâu thuẫn nhanh", "Đối tác hiểu bạn", "Mối quan hệ rõ ràng"],
    weaknesses: ["Đôi khi quá thẳng", "Có thể làm đối tác áp lực"],
    tips: ["Lắng nghe nhiều hơn", "Chọn thời điểm phù hợp để nói chuyện"],
  },
  B: {
    type: "B",
    title: "Người giao tiếp cân bằng",
    emoji: "⚖️",
    description: "Bạn có kỹ năng giao tiếp cân bằng và khéo léo. Bạn biết khi nào cần nói và khi nào cần im lặng. Bạn giao tiếp hiệu quả mà không gây áp lực.",
    traits: ["Cân bằng", "Khéo léo", "Suy nghĩ", "Hiệu quả"],
    strengths: ["Giao tiếp hiệu quả", "Tôn trọng đối tác", "Chọn thời điểm tốt"],
    weaknesses: ["Đôi khi cần trực tiếp hơn", "Có thể trì hoãn vấn đề"],
    tips: ["Đôi khi hãy nói thẳng hơn", "Không trì hoãn quá lâu"],
  },
  C: {
    type: "C",
    title: "Người giao tiếp nội tâm",
    emoji: "🤐",
    description: "Bạn có xu hướng giữ cảm xúc trong lòng và khó nói ra. Bạn giao tiếp nhiều qua hành động hơn lời nói, nhưng điều này có thể gây hiểu lầm.",
    traits: ["Nội tâm", "Giữ trong lòng", "Hành động", "Ngại nói"],
    strengths: ["Suy nghĩ trước khi nói", "Không nói hớ", "Hành động thay lời"],
    weaknesses: ["Đối tác khó hiểu bạn", "Mâu thuẫn kéo dài", "Giận dỗi nhiều"],
    tips: ["Học cách nói ra cảm xúc", "Viết ra nếu khó nói", "Giao tiếp là chìa khóa"],
  },
  D: {
    type: "D",
    title: "Cần phát triển giao tiếp",
    emoji: "🌱",
    description: "Kỹ năng giao tiếp trong tình yêu của bạn cần được phát triển. Bạn thường tránh né vấn đề và khó thể hiện cảm xúc, điều này có thể ảnh hưởng mối quan hệ.",
    traits: ["Tránh né", "Khó thể hiện", "Cần phát triển", "Ngại đối mặt"],
    strengths: ["Không gây cãi vã", "Bình yên bề mặt", "Có thể thay đổi"],
    weaknesses: ["Vấn đề không được giải quyết", "Đối tác thiếu hiểu", "Cảm xúc tích tụ"],
    tips: ["Học kỹ năng giao tiếp", "Bắt đầu từ việc nhỏ", "Tìm không gian an toàn để nói chuyện"],
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
