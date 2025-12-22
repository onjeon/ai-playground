// Cách ra quyết định nhóm
// Khám phá phong cách ra quyết định khi làm việc nhóm của bạn

export const questions = [
  {
    id: 1,
    question: "Trong nhóm, bạn thường đóng vai trò gì khi ra quyết định?",
    options: [
      { text: "Người đưa ra quyết định cuối cùng", type: "A" },
      { text: "Người điều phối, lắng nghe ý kiến mọi người", type: "B" },
      { text: "Người đưa ra ý tưởng và góc nhìn mới", type: "C" },
      { text: "Người theo sau, đồng ý với đa số", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Khi nhóm có ý kiến trái chiều, bạn?",
    options: [
      { text: "Đưa ra quyết định dựa trên logic và hiệu quả", type: "A" },
      { text: "Cố gắng tìm điểm chung để mọi người đồng ý", type: "B" },
      { text: "Đề xuất giải pháp sáng tạo mới", type: "C" },
      { text: "Để người khác quyết định, mình theo", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn nghĩ gì về việc biểu quyết trong nhóm?",
    options: [
      { text: "Không cần thiết nếu có leader đúng đắn", type: "A" },
      { text: "Cần thiết để mọi người có tiếng nói", type: "B" },
      { text: "OK, nhưng đôi khi cần người dám khác biệt", type: "C" },
      { text: "Tốt, mình sẽ theo đa số", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi bạn không đồng ý với quyết định của nhóm?",
    options: [
      { text: "Nói thẳng và cố gắng thuyết phục", type: "A" },
      { text: "Chia sẻ lo ngại nhưng cuối cùng đồng ý", type: "B" },
      { text: "Đề xuất phương án khác và chờ phản hồi", type: "C" },
      { text: "Im lặng, theo quyết định chung", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn xử lý thành viên hay phản đối mọi thứ thế nào?",
    options: [
      { text: "Giải thích lý do và yêu cầu hợp tác", type: "A" },
      { text: "Lắng nghe họ và tìm cách đưa họ vào cuộc", type: "B" },
      { text: "Xem xét ý kiến họ, có thể có điểm hay", type: "C" },
      { text: "Để người khác xử lý", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi nhóm cần quyết định gấp mà không đủ người?",
    options: [
      { text: "Quyết định luôn, chịu trách nhiệm", type: "A" },
      { text: "Liên hệ những người vắng để hỏi ý kiến", type: "B" },
      { text: "Quyết định nhưng để ngỏ khả năng thay đổi", type: "C" },
      { text: "Chờ đủ người mới quyết định", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn chuẩn bị cho meeting ra quyết định thế nào?",
    options: [
      { text: "Chuẩn bị sẵn đề xuất và phương án", type: "A" },
      { text: "Liệt kê các ý kiến cần thảo luận", type: "B" },
      { text: "Brainstorm trước vài ý tưởng sáng tạo", type: "C" },
      { text: "Không chuẩn bị gì, chờ nghe người khác", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Khi quyết định nhóm sai lầm, bạn?",
    options: [
      { text: "Chịu trách nhiệm và tìm cách sửa", type: "A" },
      { text: "Cùng nhóm rút kinh nghiệm, không đổ lỗi", type: "B" },
      { text: "Đề xuất cách tiếp cận mới", type: "C" },
      { text: "Không nói gì, chờ người khác xử lý", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn thích loại nhóm quyết định nào?",
    options: [
      { text: "Có leader rõ ràng, quyết định nhanh", type: "A" },
      { text: "Dân chủ, mọi người đều có tiếng nói", type: "B" },
      { text: "Sáng tạo, khuyến khích ý tưởng mới", type: "C" },
      { text: "Hòa thuận, ít tranh luận", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Khi ý kiến bạn bị bác bỏ trong nhóm?",
    options: [
      { text: "Tiếp tục bảo vệ nếu tin là đúng", type: "A" },
      { text: "Chấp nhận và hỗ trợ quyết định chung", type: "B" },
      { text: "Tìm cách khác để đưa ý tưởng vào", type: "C" },
      { text: "Không sao, mình ít khi đưa ý kiến", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn đánh giá quyết định nhóm tốt qua điều gì?",
    options: [
      { text: "Kết quả đạt được, hiệu quả", type: "A" },
      { text: "Mọi người hài lòng và đoàn kết", type: "B" },
      { text: "Có sự đổi mới và sáng tạo", type: "C" },
      { text: "Không có xung đột, êm xuôi", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Điều quan trọng nhất khi quyết định nhóm?",
    options: [
      { text: "Có người chịu trách nhiệm rõ ràng", type: "A" },
      { text: "Mọi người được lắng nghe", type: "B" },
      { text: "Không bó buộc trong khuôn khổ cũ", type: "C" },
      { text: "Giữ được hòa khí trong nhóm", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Leader quyết đoán",
    emoji: "👔",
    description: "Bạn là người dẫn dắt trong quyết định nhóm. Bạn sẵn sàng chịu trách nhiệm và đưa ra quyết định khi cần thiết.",
    traits: ["Lãnh đạo", "Quyết đoán", "Trách nhiệm", "Hiệu quả"],
    strengths: ["Đưa ra quyết định nhanh", "Dẫn dắt nhóm tốt", "Chịu trách nhiệm"],
    weaknesses: ["Có thể áp đảo", "Đôi khi không lắng nghe đủ"],
    tips: ["Lắng nghe ý kiến khác nhiều hơn", "Chia sẻ quyền quyết định"],
  },
  B: {
    type: "B",
    title: "Người điều phối hài hòa",
    emoji: "🤝",
    description: "Bạn là người điều phối, đảm bảo mọi người được lắng nghe. Bạn coi trọng sự đồng thuận và hài hòa trong nhóm.",
    traits: ["Điều phối", "Lắng nghe", "Hài hòa", "Dân chủ"],
    strengths: ["Giữ đoàn kết nhóm", "Mọi người có tiếng nói", "Tránh xung đột"],
    weaknesses: ["Có thể chậm quyết định", "Khó trong trường hợp cần nhanh"],
    tips: ["Đôi khi cần quyết đoán hơn", "Không thể làm hài lòng tất cả"],
  },
  C: {
    type: "C",
    title: "Người đổi mới sáng tạo",
    emoji: "💡",
    description: "Bạn là người đưa ra ý tưởng và góc nhìn mới trong nhóm. Bạn không ngại thách thức hiện trạng và đề xuất điều khác biệt.",
    traits: ["Sáng tạo", "Đổi mới", "Thách thức", "Tư duy độc lập"],
    strengths: ["Đem lại góc nhìn mới", "Không ngại khác biệt", "Thúc đẩy đổi mới"],
    weaknesses: ["Có thể gây xáo trộn", "Đôi khi không thực tế"],
    tips: ["Kết hợp sáng tạo với thực tế", "Xây dựng support cho ý tưởng"],
  },
  D: {
    type: "D",
    title: "Người hỗ trợ ổn định",
    emoji: "🌿",
    description: "Bạn là người hỗ trợ, giúp nhóm hoạt động êm xuôi. Bạn không thích xung đột và sẵn sàng theo quyết định chung.",
    traits: ["Hỗ trợ", "Ổn định", "Hòa thuận", "Linh hoạt"],
    strengths: ["Giữ hòa khí nhóm", "Dễ hợp tác", "Không gây xung đột"],
    weaknesses: ["Có thể thiếu chủ động", "Ý kiến bị bỏ qua"],
    tips: ["Mạnh dạn đưa ra ý kiến", "Đóng góp nhiều hơn cho nhóm"],
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
