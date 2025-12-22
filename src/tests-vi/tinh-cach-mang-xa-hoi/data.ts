// Phong cách MXH (Mạng xã hội)
// Khám phá phong cách sử dụng mạng xã hội của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn dùng mạng xã hội nào nhiều nhất?",
    options: [
      { text: "Facebook - đa năng, bạn bè ở đây", type: "A" },
      { text: "Instagram - ảnh đẹp, stories", type: "B" },
      { text: "TikTok - video ngắn, giải trí", type: "C" },
      { text: "Twitter/X - tin tức, opinion", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn đăng bài như thế nào?",
    options: [
      { text: "Thường xuyên, chia sẻ mọi thứ", type: "A" },
      { text: "Chỉ khi có gì đặc biệt, chọn lọc kỹ", type: "B" },
      { text: "Hiếm khi, chủ yếu xem", type: "C" },
      { text: "Đăng theo mood, không có quy luật", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn quan tâm đến likes và comments như thế nào?",
    options: [
      { text: "Khá quan tâm, vui khi nhiều người tương tác", type: "A" },
      { text: "Bình thường, đăng cho vui", type: "B" },
      { text: "Không quan tâm lắm", type: "C" },
      { text: "Thích được engage nhưng không ám ảnh", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn chỉnh sửa ảnh trước khi đăng như thế nào?",
    options: [
      { text: "Chỉnh kỹ, filter, edit cho đẹp", type: "A" },
      { text: "Chỉnh nhẹ, giữ tự nhiên", type: "B" },
      { text: "Đăng thẳng, không chỉnh", type: "C" },
      { text: "Tùy ảnh, có khi chỉnh có khi không", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn follow những ai trên MXH?",
    options: [
      { text: "Bạn bè, người quen thật", type: "A" },
      { text: "Influencer, người nổi tiếng", type: "B" },
      { text: "Trang nội dung hay, giáo dục", type: "C" },
      { text: "Đa dạng, ai thú vị thì follow", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn dành bao nhiêu thời gian cho MXH mỗi ngày?",
    options: [
      { text: "Nhiều, check liên tục", type: "A" },
      { text: "Vừa phải, vài lần mỗi ngày", type: "B" },
      { text: "Ít, chỉ khi rảnh", type: "C" },
      { text: "Không cố định, tùy ngày", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn chia sẻ gì trên MXH?",
    options: [
      { text: "Cuộc sống cá nhân, daily life", type: "A" },
      { text: "Ảnh đẹp, khoảnh khắc đặc biệt", type: "B" },
      { text: "Quan điểm, ý kiến về các vấn đề", type: "C" },
      { text: "Meme, nội dung hài hước", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn phản ứng thế nào khi bị negative comments?",
    options: [
      { text: "Buồn và suy nghĩ về nó", type: "A" },
      { text: "Không quan tâm, block và đi tiếp", type: "B" },
      { text: "Phản hồi, bảo vệ quan điểm", type: "C" },
      { text: "Tùy, có khi ignore có khi reply", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn so sánh bản thân với người khác trên MXH không?",
    options: [
      { text: "Có, đôi khi cảm thấy thua kém", type: "A" },
      { text: "Hiếm khi, biết MXH không phải thật", type: "B" },
      { text: "Không, mọi người đều khác nhau", type: "C" },
      { text: "Đôi khi, nhưng biết cách dừng lại", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn đã từng detox MXH chưa?",
    options: [
      { text: "Chưa bao giờ, không thể sống thiếu", type: "A" },
      { text: "Có, và cảm thấy tốt hơn", type: "B" },
      { text: "Thường xuyên nghỉ, không phụ thuộc", type: "C" },
      { text: "Đang nghĩ đến việc này", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn dùng MXH cho mục đích gì?",
    options: [
      { text: "Kết nối với bạn bè, cập nhật tin tức", type: "A" },
      { text: "Thể hiện bản thân, personal branding", type: "B" },
      { text: "Giải trí, xem nội dung hay", type: "C" },
      { text: "Công việc, networking", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Mạng xã hội đối với bạn là gì?",
    options: [
      { text: "Một phần không thể thiếu của cuộc sống", type: "A" },
      { text: "Công cụ hữu ích nếu dùng đúng cách", type: "B" },
      { text: "Giải trí, không quá quan trọng", type: "C" },
      { text: "Con dao hai lưỡi, cần cẩn thận", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Social Butterfly - Bướm xã hội",
    emoji: "🦋",
    description: "Bạn rất active trên MXH, thích chia sẻ cuộc sống và kết nối với mọi người. MXH là một phần quan trọng trong cuộc sống hàng ngày của bạn.",
    traits: ["Active", "Kết nối", "Chia sẻ", "Xã hội"],
    strengths: ["Nhiều bạn online", "Cập nhật mọi thứ", "Dễ tiếp cận"],
    weaknesses: ["Có thể phụ thuộc MXH", "Dễ bị ảnh hưởng"],
    tips: ["Thử detox MXH đôi khi", "Cân bằng online và offline"],
  },
  B: {
    type: "B",
    title: "Curator - Người chọn lọc",
    emoji: "🎨",
    description: "Bạn dùng MXH có chọn lọc, chỉ đăng những gì đẹp và có ý nghĩa. Bạn quan tâm đến aesthetic và cách mình được nhìn nhận online.",
    traits: ["Chọn lọc", "Aesthetic", "Cẩn thận", "Có gu"],
    strengths: ["Profile đẹp", "Nội dung chất lượng", "Kiểm soát image"],
    weaknesses: ["Có thể tốn thời gian cho content", "Áp lực hoàn hảo"],
    tips: ["Đôi khi đăng spontaneous", "Đừng quá perfectionist"],
  },
  C: {
    type: "C",
    title: "Lurker - Người quan sát",
    emoji: "👀",
    description: "Bạn chủ yếu xem và quan sát trên MXH, ít đăng bài. Bạn không phụ thuộc vào MXH và có cuộc sống offline phong phú.",
    traits: ["Quan sát", "Riêng tư", "Độc lập", "Bình thản"],
    strengths: ["Không phụ thuộc", "Giữ riêng tư", "Ít drama"],
    weaknesses: ["Có thể bỏ lỡ kết nối", "Ít visible với bạn bè"],
    tips: ["Thỉnh thoảng tương tác với bạn bè", "Chia sẻ đôi khi cũng tốt"],
  },
  D: {
    type: "D",
    title: "Balancer - Người cân bằng",
    emoji: "⚖️",
    description: "Bạn dùng MXH một cách cân bằng, biết khi nào nên dùng và khi nào nên nghỉ. Bạn thấy MXH hữu ích nhưng không để nó kiểm soát cuộc sống.",
    traits: ["Cân bằng", "Linh hoạt", "Tự kiểm soát", "Thông minh"],
    strengths: ["Cân bằng tốt", "Không phụ thuộc", "Dùng MXH hiệu quả"],
    weaknesses: ["Có thể không maximize được MXH", "Đôi khi thiếu consistent"],
    tips: ["Tiếp tục giữ cân bằng", "Tận dụng MXH cho mục đích tốt"],
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
