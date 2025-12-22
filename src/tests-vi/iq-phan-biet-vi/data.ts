// Trắc nghiệm Phân Biệt
// Đánh giá khả năng phân biệt sự khác biệt tinh tế của bạn

export const questions = [
  {
    id: 1,
    question: "Khi nếm hai món ăn tương tự, bạn có thể nhận ra sự khác biệt về gia vị không?",
    options: [
      { text: "Có, phân biệt được từng loại gia vị", type: "A" },
      { text: "Nhận ra khác nhau nhưng không rõ là gì", type: "B" },
      { text: "Chỉ thấy khác nếu khác biệt rõ ràng", type: "C" },
      { text: "Thường không nhận ra sự khác biệt", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn có thể phân biệt được các sắc thái màu gần giống nhau (ví dụ: xanh ngọc, xanh biển, xanh lam)?",
    options: [
      { text: "Rõ ràng, thấy sự khác biệt ngay", type: "A" },
      { text: "Có thể phân biệt khi so sánh cạnh nhau", type: "B" },
      { text: "Khó phân biệt, cần ánh sáng tốt", type: "C" },
      { text: "Chúng trông giống nhau với tôi", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi nghe hai bản nhạc cùng bài nhưng khác ca sĩ, bạn:",
    options: [
      { text: "Nhận ra ngay sự khác biệt về giọng hát và phong cách", type: "A" },
      { text: "Biết là khác ca sĩ sau khi nghe một lúc", type: "B" },
      { text: "Cần nghe kỹ mới phân biệt được", type: "C" },
      { text: "Không thể phân biệt nếu không xem thông tin", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn có thể nhận ra sự khác biệt giữa vải cotton và polyester không?",
    options: [
      { text: "Có, ngay từ cảm giác chạm đầu tiên", type: "A" },
      { text: "Có, sau khi cảm nhận kỹ", type: "B" },
      { text: "Đôi khi đúng, đôi khi sai", type: "C" },
      { text: "Không thể phân biệt", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi ai đó nói với giọng điệu khác thường, bạn:",
    options: [
      { text: "Nhận ra ngay và hiểu họ đang cảm thấy gì", type: "A" },
      { text: "Thấy có gì đó khác và hỏi lại", type: "B" },
      { text: "Cần họ nói rõ mới hiểu", type: "C" },
      { text: "Thường không để ý sự thay đổi", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn có thể phân biệt mùi của các loại hoa khác nhau không?",
    options: [
      { text: "Có, nhận dạng được nhiều loại hoa qua mùi", type: "A" },
      { text: "Phân biệt được một số loại quen thuộc", type: "B" },
      { text: "Chỉ biết là hoa thơm hay không thơm", type: "C" },
      { text: "Khó khăn trong việc phân biệt mùi", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Khi so sánh hai bức ảnh chụp cùng cảnh nhưng khác thời điểm, bạn:",
    options: [
      { text: "Nhận ra nhiều điểm khác biệt nhỏ", type: "A" },
      { text: "Thấy được những khác biệt lớn", type: "B" },
      { text: "Cần nhìn kỹ và so sánh từng vùng", type: "C" },
      { text: "Thấy chúng gần như giống nhau", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn có thể phân biệt font chữ khác nhau (ví dụ: Times New Roman và Arial)?",
    options: [
      { text: "Có, nhận ra ngay cả với font tương tự", type: "A" },
      { text: "Phân biệt được các font khác biệt rõ", type: "B" },
      { text: "Chỉ biết serif và sans-serif", type: "C" },
      { text: "Không để ý đến font chữ", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi cầm hai vật có trọng lượng gần giống nhau, bạn:",
    options: [
      { text: "Nhận ra ngay cái nào nặng hơn", type: "A" },
      { text: "Cần cân nhắc một lúc mới biết", type: "B" },
      { text: "Khó xác định nếu khác biệt nhỏ", type: "C" },
      { text: "Không thể phân biệt", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn có thể phân biệt được giọng miền Bắc, Trung, Nam không?",
    options: [
      { text: "Rõ ràng, thậm chí nhận ra được tỉnh cụ thể", type: "A" },
      { text: "Phân biệt được 3 miền chính", type: "B" },
      { text: "Đôi khi nhầm lẫn giữa các giọng", type: "C" },
      { text: "Khó phân biệt các giọng khác nhau", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Khi uống nước của hai thương hiệu khác nhau, bạn:",
    options: [
      { text: "Nhận ra sự khác biệt về vị", type: "A" },
      { text: "Đôi khi thấy khác, đôi khi không", type: "B" },
      { text: "Chỉ phân biệt nếu có vị đặc biệt", type: "C" },
      { text: "Tất cả nước đều giống nhau với tôi", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bạn có thể nhận ra khi một bức tranh bị treo lệch không?",
    options: [
      { text: "Ngay lập tức, dù chỉ lệch một chút", type: "A" },
      { text: "Thấy nếu lệch rõ ràng", type: "B" },
      { text: "Cần nhìn kỹ hoặc ai đó chỉ ra", type: "C" },
      { text: "Thường không để ý", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Siêu Giác Quan",
    emoji: "🔬",
    description: "Bạn có khả năng phân biệt xuất sắc! Các giác quan của bạn rất nhạy bén, có thể nhận ra những khác biệt tinh tế mà người khác bỏ qua.",
    traits: ["Giác quan nhạy bén", "Chú ý chi tiết", "Nhận thức sắc sảo", "Cầu toàn"],
    strengths: ["Phát hiện lỗi nhỏ", "Đánh giá chất lượng tốt", "Cảm nhận nghệ thuật sâu sắc"],
    weaknesses: ["Có thể quá nhạy cảm", "Dễ bị kích thích bởi môi trường"],
    tips: ["Phát huy trong lĩnh vực cần độ chính xác cao", "Học cách lọc thông tin để tránh quá tải"],
  },
  B: {
    type: "B",
    title: "Người Quan Sát Tốt",
    emoji: "👁️",
    description: "Bạn có khả năng phân biệt tốt, đủ để nhận ra hầu hết các khác biệt quan trọng trong cuộc sống hàng ngày.",
    traits: ["Quan sát tốt", "Cân bằng", "Thực tế", "Nhạy cảm vừa phải"],
    strengths: ["Nhận ra sự thay đổi", "Đánh giá hợp lý", "Giao tiếp hiệu quả"],
    weaknesses: ["Có thể bỏ sót chi tiết nhỏ", "Cần tập trung để phân biệt tốt hơn"],
    tips: ["Rèn luyện các giác quan", "Thử các hoạt động cần độ chính xác"],
  },
  C: {
    type: "C",
    title: "Người Bình Thường",
    emoji: "😊",
    description: "Khả năng phân biệt của bạn ở mức trung bình. Bạn nhận ra khác biệt khi chúng đủ rõ ràng, điều này phù hợp với hầu hết tình huống hàng ngày.",
    traits: ["Bình thường", "Thực dụng", "Không cầu kỳ", "Dễ hài lòng"],
    strengths: ["Không bị phân tâm bởi chi tiết nhỏ", "Tập trung vào tổng thể", "Sống thoải mái"],
    weaknesses: ["Có thể bỏ qua chi tiết quan trọng", "Cần người khác chỉ ra khác biệt"],
    tips: ["Luyện tập chú ý hơn khi cần thiết", "Sử dụng công cụ hỗ trợ so sánh"],
  },
  D: {
    type: "D",
    title: "Người Tổng Quát",
    emoji: "🌈",
    description: "Bạn tập trung vào bức tranh lớn hơn là chi tiết nhỏ. Điều này có thể là lợi thế trong một số tình huống cần nhìn xa trông rộng.",
    traits: ["Nhìn tổng thể", "Không chi tiết", "Thoải mái", "Sáng tạo"],
    strengths: ["Không bị sa lầy vào chi tiết", "Quyết định nhanh", "Nhìn vấn đề toàn diện"],
    weaknesses: ["Khó làm công việc cần độ chính xác", "Có thể bỏ lỡ thông tin quan trọng"],
    tips: ["Nhờ người khác kiểm tra chi tiết", "Tập trung vào thế mạnh của bạn"],
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
