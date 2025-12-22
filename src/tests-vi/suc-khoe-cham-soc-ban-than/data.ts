// Cách chăm sóc bản thân
// Bài test đánh giá cách bạn chăm sóc và yêu thương bản thân

export const questions = [
  {
    id: 1,
    question: "Bạn có dành thời gian cho bản thân mỗi ngày không?",
    options: [
      { text: "Có, ít nhất 1 tiếng mỗi ngày", type: "A" },
      { text: "Có, khoảng 30 phút", type: "B" },
      { text: "Hiếm khi, khi nào rảnh thì có", type: "C" },
      { text: "Không, luôn bận với công việc/người khác", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn có hoạt động giải trí/sở thích riêng không?",
    options: [
      { text: "Có, và tôi dành thời gian cho nó thường xuyên", type: "A" },
      { text: "Có, nhưng ít có thời gian", type: "B" },
      { text: "Không có sở thích cụ thể", type: "C" },
      { text: "Không có thời gian cho sở thích", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn chăm sóc da/tóc/cơ thể như thế nào?",
    options: [
      { text: "Có routine chăm sóc đều đặn", type: "A" },
      { text: "Chăm sóc cơ bản hàng ngày", type: "B" },
      { text: "Khi nào nhớ thì chăm sóc", type: "C" },
      { text: "Hiếm khi quan tâm", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn có từ chối khi quá tải không?",
    options: [
      { text: "Có, tôi biết giới hạn của mình", type: "A" },
      { text: "Đôi khi, khi thực sự quá sức", type: "B" },
      { text: "Hiếm khi, hay cố gắng làm hết", type: "C" },
      { text: "Không, luôn nhận mọi thứ", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn đối xử với bản thân khi mắc lỗi như thế nào?",
    options: [
      { text: "Tha thứ và rút kinh nghiệm", type: "A" },
      { text: "Hơi tự trách nhưng rồi bỏ qua", type: "B" },
      { text: "Tự trách bản thân khá lâu", type: "C" },
      { text: "Rất khắt khe và tự phê bình", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn có đi khám sức khỏe định kỳ không?",
    options: [
      { text: "Có, đều đặn mỗi năm", type: "A" },
      { text: "Thỉnh thoảng, 2-3 năm một lần", type: "B" },
      { text: "Chỉ đi khi có vấn đề", type: "C" },
      { text: "Hiếm khi hoặc không đi", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn có thưởng cho bản thân sau khi đạt được mục tiêu không?",
    options: [
      { text: "Có, luôn khen thưởng bản thân", type: "A" },
      { text: "Đôi khi, với thành tích lớn", type: "B" },
      { text: "Hiếm khi, hay quên", type: "C" },
      { text: "Không, chỉ tiếp tục làm việc", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn có nói những điều tích cực về bản thân không?",
    options: [
      { text: "Có, tôi hay khen ngợi bản thân", type: "A" },
      { text: "Đôi khi, khi làm được điều gì tốt", type: "B" },
      { text: "Hiếm khi, hay tự phê bình hơn", type: "C" },
      { text: "Không, thường chỉ thấy điểm xấu", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn có đặt giới hạn trong các mối quan hệ không?",
    options: [
      { text: "Có, tôi biết cách bảo vệ bản thân", type: "A" },
      { text: "Đôi khi, với những người không thân", type: "B" },
      { text: "Khó đặt giới hạn", type: "C" },
      { text: "Không, hay chiều theo người khác", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn có nghỉ ngơi khi mệt không?",
    options: [
      { text: "Có, tôi lắng nghe cơ thể", type: "A" },
      { text: "Cố gắng nghỉ khi có thể", type: "B" },
      { text: "Hay cố gắng tiếp tục dù mệt", type: "C" },
      { text: "Không, làm cho đến khi kiệt sức", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn có đầu tư cho bản thân (học tập, phát triển) không?",
    options: [
      { text: "Có, đều đặn học hỏi và phát triển", type: "A" },
      { text: "Thỉnh thoảng học thêm kỹ năng", type: "B" },
      { text: "Hiếm khi, không có thời gian", type: "C" },
      { text: "Không, không thấy cần thiết", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Nhìn chung, bạn đánh giá cách chăm sóc bản thân thế nào?",
    options: [
      { text: "Rất tốt, tôi yêu bản thân", type: "A" },
      { text: "Khá tốt, đang cố gắng", type: "B" },
      { text: "Cần cải thiện nhiều", type: "C" },
      { text: "Không quan tâm đến bản thân", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người Yêu Bản Thân",
    emoji: "💖",
    description: "Bạn biết cách yêu thương và chăm sóc bản thân rất tốt. Bạn hiểu giá trị của mình và dành thời gian, năng lượng để phát triển và nuôi dưỡng bản thân.",
    traits: ["Yêu bản thân", "Cân bằng", "Tự chăm sóc", "Có giới hạn"],
    strengths: ["Sức khỏe tinh thần tốt", "Năng lượng tích cực", "Biết giá trị bản thân"],
    weaknesses: ["Có thể bị cho là ích kỷ"],
    tips: ["Tiếp tục duy trì và chia sẻ với người khác", "Đừng quên quan tâm người xung quanh"],
  },
  B: {
    type: "B",
    title: "Đang Học Cách Yêu Bản Thân",
    emoji: "🌸",
    description: "Bạn đang trên hành trình học cách yêu thương bản thân. Bạn có ý thức nhưng đôi khi vẫn quên dành thời gian cho mình.",
    traits: ["Đang phát triển", "Có ý thức", "Cần thời gian", "Tiến bộ"],
    strengths: ["Biết cần phải thay đổi", "Đang cố gắng"],
    weaknesses: ["Chưa nhất quán", "Hay quên bản thân"],
    tips: ["Đặt lịch chăm sóc bản thân", "Tập nói 'không' nhiều hơn"],
  },
  C: {
    type: "C",
    title: "Hay Quên Bản Thân",
    emoji: "😓",
    description: "Bạn thường quên chăm sóc bản thân, luôn đặt người khác và công việc lên trước. Điều này có thể dẫn đến kiệt sức và không hạnh phúc.",
    traits: ["Hay quên bản thân", "Chiều người khác", "Quá tải", "Thiếu giới hạn"],
    strengths: ["Quan tâm người khác"],
    weaknesses: ["Dễ kiệt sức", "Thiếu năng lượng", "Không hạnh phúc"],
    tips: ["Bắt đầu với 10 phút mỗi ngày cho riêng mình", "Học cách nói 'không'"],
  },
  D: {
    type: "D",
    title: "Cần Học Cách Yêu Bản Thân",
    emoji: "💔",
    description: "Bạn chưa biết cách yêu thương và chăm sóc bản thân. Bạn thường tự phê bình, không dành thời gian cho mình và có thể đang kiệt sức.",
    traits: ["Không yêu bản thân", "Tự phê bình", "Kiệt sức", "Thiếu giới hạn"],
    strengths: ["Có thể thay đổi từ hôm nay"],
    weaknesses: ["Ảnh hưởng sức khỏe", "Không hạnh phúc", "Dễ bị lợi dụng"],
    tips: ["Bắt đầu bằng việc nói điều tích cực về bản thân mỗi ngày", "Tìm một sở thích nhỏ"],
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
