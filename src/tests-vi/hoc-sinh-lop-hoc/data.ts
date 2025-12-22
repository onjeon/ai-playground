// Vai trò trong lớp
// Bài test khám phá vai trò của bạn trong tập thể lớp

export const questions = [
  {
    id: 1,
    question: "Khi có việc lớp cần giải quyết, bạn thường?",
    options: [
      { text: "Đứng ra tổ chức và phân công", type: "A" },
      { text: "Tích cực tham gia và đóng góp ý kiến", type: "B" },
      { text: "Làm theo sự phân công", type: "C" },
      { text: "Tạo không khí vui vẻ cho mọi người", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Trong các hoạt động nhóm, bạn thường đảm nhận?",
    options: [
      { text: "Người lãnh đạo, phân chia công việc", type: "A" },
      { text: "Người có nhiều ý tưởng, đề xuất", type: "B" },
      { text: "Người thực hiện công việc cụ thể", type: "C" },
      { text: "Người kết nối và tạo động lực", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi lớp có mâu thuẫn, bạn làm gì?",
    options: [
      { text: "Đứng ra giải quyết và hòa giải", type: "A" },
      { text: "Đưa ra ý kiến khách quan", type: "B" },
      { text: "Đứng ngoài, không tham gia", type: "C" },
      { text: "Cố gắng làm mọi người vui lên", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn bè thường nhờ bạn làm gì?",
    options: [
      { text: "Tổ chức, lên kế hoạch cho nhóm", type: "A" },
      { text: "Cho ý kiến, tư vấn", type: "B" },
      { text: "Giúp đỡ công việc cụ thể", type: "C" },
      { text: "Làm vui, kể chuyện", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi có sự kiện lớp, bạn thường làm gì?",
    options: [
      { text: "Là người tổ chức chính", type: "A" },
      { text: "Đóng góp ý tưởng sáng tạo", type: "B" },
      { text: "Hỗ trợ phần hậu cần", type: "C" },
      { text: "MC hoặc biểu diễn", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Thầy cô thường giao bạn việc gì?",
    options: [
      { text: "Quản lý lớp, theo dõi các bạn", type: "A" },
      { text: "Các việc cần sự sáng tạo", type: "B" },
      { text: "Công việc cụ thể, rõ ràng", type: "C" },
      { text: "Tạo không khí trong lớp", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Khi làm việc nhóm, bạn thích?",
    options: [
      { text: "Điều phối cả nhóm", type: "A" },
      { text: "Brainstorm và đưa ra ý tưởng", type: "B" },
      { text: "Được giao việc cụ thể", type: "C" },
      { text: "Làm cho mọi người vui vẻ khi làm", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn cảm thấy tự tin nhất khi?",
    options: [
      { text: "Được dẫn dắt và quyết định", type: "A" },
      { text: "Ý tưởng của mình được chấp nhận", type: "B" },
      { text: "Hoàn thành tốt công việc được giao", type: "C" },
      { text: "Làm mọi người cười", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Trong cuộc họp lớp, bạn thường?",
    options: [
      { text: "Điều hành cuộc họp", type: "A" },
      { text: "Phát biểu nhiều ý kiến", type: "B" },
      { text: "Lắng nghe và biểu quyết", type: "C" },
      { text: "Xen vào câu đùa cho bớt căng thẳng", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Khi có bạn mới vào lớp, bạn?",
    options: [
      { text: "Giới thiệu về lớp và quy định", type: "A" },
      { text: "Hỏi thăm và tìm hiểu về họ", type: "B" },
      { text: "Đợi họ làm quen trước", type: "C" },
      { text: "Kéo họ vào nhóm, tạo không khí vui", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Đóng góp lớn nhất của bạn cho lớp là gì?",
    options: [
      { text: "Giữ cho lớp có tổ chức", type: "A" },
      { text: "Đóng góp ý tưởng sáng tạo", type: "B" },
      { text: "Hoàn thành tốt công việc được giao", type: "C" },
      { text: "Mang lại tiếng cười cho lớp", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Nếu lớp là một bộ phim, bạn sẽ là?",
    options: [
      { text: "Đạo diễn, người điều hành", type: "A" },
      { text: "Biên kịch, người có ý tưởng", type: "B" },
      { text: "Diễn viên phụ, hỗ trợ", type: "C" },
      { text: "Diễn viên hài, tạo tiếng cười", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người Lãnh Đạo",
    emoji: "👑",
    description: "Bạn là người lãnh đạo tự nhiên của lớp, có khả năng tổ chức và điều phối mọi người. Bạn được tin tưởng giao phó những trách nhiệm quan trọng.",
    traits: ["Lãnh đạo", "Có trách nhiệm", "Quyết đoán", "Đáng tin cậy"],
    strengths: ["Tổ chức tốt", "Được tín nhiệm", "Có tầm nhìn"],
    weaknesses: ["Đôi khi quá nghiêm khắc", "Chịu nhiều áp lực"],
    tips: ["Học cách ủy quyền", "Đừng quên chăm sóc bản thân"],
  },
  B: {
    type: "B",
    title: "Người Sáng Tạo",
    emoji: "💡",
    description: "Bạn là nguồn ý tưởng của lớp, luôn có những đề xuất mới mẻ và sáng tạo. Bạn giúp lớp có nhiều hoạt động thú vị và khác biệt.",
    traits: ["Sáng tạo", "Có ý tưởng", "Tích cực", "Đổi mới"],
    strengths: ["Nhiều ý tưởng hay", "Góc nhìn độc đáo", "Đóng góp tích cực"],
    weaknesses: ["Đôi khi ý tưởng khó thực hiện", "Hay bị phân tâm"],
    tips: ["Học cách hiện thực hóa ý tưởng", "Lắng nghe phản hồi của người khác"],
  },
  C: {
    type: "C",
    title: "Người Hỗ Trợ Đáng Tin",
    emoji: "🤝",
    description: "Bạn là người hỗ trợ đáng tin cậy, luôn hoàn thành tốt công việc được giao. Dù không nổi bật nhưng bạn là trụ cột quan trọng của lớp.",
    traits: ["Đáng tin cậy", "Chăm chỉ", "Khiêm tốn", "Ổn định"],
    strengths: ["Hoàn thành tốt công việc", "Đáng tin", "Không gây rắc rối"],
    weaknesses: ["Ít thể hiện bản thân", "Có thể bị overlooked"],
    tips: ["Tự tin hơn khi phát biểu", "Đôi khi nên thể hiện ý kiến của mình"],
  },
  D: {
    type: "D",
    title: "Linh Hồn Của Lớp",
    emoji: "🎭",
    description: "Bạn là linh hồn của lớp, mang lại tiếng cười và niềm vui cho mọi người. Nhờ có bạn, không khí lớp luôn vui vẻ và đoàn kết.",
    traits: ["Hài hước", "Vui vẻ", "Kết nối mọi người", "Năng động"],
    strengths: ["Tạo không khí tốt", "Được mọi người yêu mến", "Giảm căng thẳng"],
    weaknesses: ["Đôi khi không được nghiêm túc", "Có thể gây ồn ào"],
    tips: ["Biết lúc nào cần nghiêm túc", "Sử dụng năng lượng vào việc tích cực"],
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
