// Kiểu Đón Quốc Khánh 2/9
// Khám phá tính cách của bạn qua cách đón ngày Quốc Khánh

export const questions = [
  {
    id: 1,
    question: "Ngày Quốc Khánh 2/9 với bạn có ý nghĩa gì?",
    options: [
      { text: "Ngày thiêng liêng, khai sinh nước Việt Nam", type: "A" },
      { text: "Ngày nghỉ lễ, được nghỉ ngơi", type: "B" },
      { text: "Dịp đi chơi, du lịch ngắn ngày", type: "C" },
      { text: "Cơ hội tìm hiểu lịch sử thêm", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn có xem lễ diễu binh, diễu hành 2/9 không?",
    options: [
      { text: "Có, rất tự hào khi xem", type: "A" },
      { text: "Không, xem chương trình khác", type: "B" },
      { text: "Đôi khi, nếu có thời gian", type: "C" },
      { text: "Có, để tìm hiểu và quan sát", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn thường làm gì vào ngày 2/9?",
    options: [
      { text: "Treo cờ, tham gia hoạt động kỷ niệm", type: "A" },
      { text: "Nghỉ ngơi tại nhà", type: "B" },
      { text: "Đi chơi công viên, phố đi bộ", type: "C" },
      { text: "Đọc sách, xem phim về lịch sử", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn có treo cờ Tổ quốc ngày 2/9 không?",
    options: [
      { text: "Có, đây là việc nên làm", type: "A" },
      { text: "Không, không có thói quen", type: "B" },
      { text: "Có, vì mọi người đều treo", type: "C" },
      { text: "Có, hiểu ý nghĩa của việc này", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn có biết nội dung Tuyên ngôn Độc lập không?",
    options: [
      { text: "Thuộc và hiểu ý nghĩa sâu sắc", type: "A" },
      { text: "Biết sơ sơ, không nhớ rõ", type: "B" },
      { text: "Nghe câu mở đầu nổi tiếng", type: "C" },
      { text: "Đã đọc và nghiên cứu kỹ", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn đi đâu vào dịp 2/9?",
    options: [
      { text: "Lăng Bác, các di tích lịch sử", type: "A" },
      { text: "Ở nhà, không đi đâu", type: "B" },
      { text: "Phố đi bộ, công viên, nơi đông vui", type: "C" },
      { text: "Bảo tàng, thư viện", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn có xem bắn pháo hoa 2/9 không?",
    options: [
      { text: "Có, rất thích không khí lễ hội", type: "A" },
      { text: "Không, ngại đông người", type: "B" },
      { text: "Có, để check-in và vui chơi", type: "C" },
      { text: "Xem trên TV hoặc livestream", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn có dạy con cháu về ngày Quốc Khánh không?",
    options: [
      { text: "Có, đây là trách nhiệm giáo dục", type: "A" },
      { text: "Để nhà trường dạy", type: "B" },
      { text: "Có, nhưng ngắn gọn", type: "C" },
      { text: "Có, kể những câu chuyện thú vị", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Ngày Quốc Khánh gợi cho bạn cảm xúc gì?",
    options: [
      { text: "Tự hào, xúc động", type: "A" },
      { text: "Bình thường, như ngày nghỉ lễ khác", type: "B" },
      { text: "Vui vẻ, háo hức đi chơi", type: "C" },
      { text: "Suy ngẫm về lịch sử dân tộc", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn có tham gia hoạt động cộng đồng ngày 2/9 không?",
    options: [
      { text: "Có, như tình nguyện, diễu hành", type: "A" },
      { text: "Không, ở nhà nghỉ ngơi", type: "B" },
      { text: "Có, nếu có bạn bè rủ", type: "C" },
      { text: "Đôi khi, tùy hoạt động", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Ngân sách chi tiêu dịp 2/9 của bạn?",
    options: [
      { text: "Vừa phải, ưu tiên hoạt động ý nghĩa", type: "A" },
      { text: "Tiết kiệm, không chi tiêu nhiều", type: "B" },
      { text: "Sẵn sàng chi cho vui chơi", type: "C" },
      { text: "Tùy kế hoạch", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Nếu du khách hỏi về ngày 2/9, bạn?",
    options: [
      { text: "Tự hào giới thiệu chi tiết", type: "A" },
      { text: "Giải thích ngắn gọn", type: "B" },
      { text: "Chỉ họ tìm hiểu trên mạng", type: "C" },
      { text: "Kể câu chuyện lịch sử hấp dẫn", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người Con Yêu Nước Chân Chính",
    emoji: "🇻🇳",
    description: "Quốc Khánh 2/9 là ngày thiêng liêng nhất với bạn! Bạn tự hào về ngày khai sinh nước Việt Nam và luôn giáo dục thế hệ sau về lịch sử. Bạn là người yêu nước, có trách nhiệm với dân tộc.",
    traits: ["Yêu nước", "Tự hào", "Có trách nhiệm", "Giáo dục"],
    strengths: ["Gắn kết với lịch sử", "Truyền dạy giá trị", "Có ý thức công dân"],
    weaknesses: ["Đôi khi quá nghiêm túc", "Khó chấp nhận sự thờ ơ"],
    tips: ["Truyền dạy bằng cách thú vị", "Tạo hoạt động hấp dẫn cho giới trẻ"],
  },
  B: {
    type: "B",
    title: "Người Yêu Nghỉ Ngơi",
    emoji: "🏠",
    description: "Quốc Khánh với bạn là ngày nghỉ quý giá! Bạn tận dụng thời gian này để nghỉ ngơi, sạc pin. Bạn là người thực tế, biết cách chăm sóc bản thân.",
    traits: ["Thực tế", "Biết nghỉ ngơi", "Tự chăm sóc", "Thoải mái"],
    strengths: ["Cân bằng cuộc sống", "Không bị stress", "Sức khỏe tốt"],
    weaknesses: ["Có thể thiếu ý thức cộng đồng", "Bỏ lỡ không khí lễ hội"],
    tips: ["Tham gia một số hoạt động", "Tìm hiểu thêm về ý nghĩa ngày lễ"],
  },
  C: {
    type: "C",
    title: "Người Yêu Lễ Hội",
    emoji: "🎆",
    description: "Quốc Khánh với bạn là dịp vui chơi và lễ hội! Bạn thích không khí sôi động, pháo hoa và những hoạt động tập thể. Bạn là người năng động, yêu không khí lễ hội.",
    traits: ["Năng động", "Yêu lễ hội", "Vui vẻ", "Xã giao"],
    strengths: ["Biết tận hưởng", "Có nhiều kỷ niệm", "Gắn kết cộng đồng"],
    weaknesses: ["Có thể thiên về hình thức", "Bỏ qua ý nghĩa sâu xa"],
    tips: ["Tìm hiểu thêm về ý nghĩa lịch sử", "Kết hợp vui chơi với giáo dục"],
  },
  D: {
    type: "D",
    title: "Nhà Nghiên Cứu Lịch Sử",
    emoji: "📚",
    description: "Quốc Khánh là cơ hội để bạn tìm hiểu sâu hơn về lịch sử! Bạn thích đọc, nghiên cứu và suy ngẫm. Bạn là người ham học hỏi, sâu sắc và có chiều sâu văn hóa.",
    traits: ["Ham học hỏi", "Sâu sắc", "Yêu lịch sử", "Suy ngẫm"],
    strengths: ["Kiến thức sâu rộng", "Hiểu biết lịch sử", "Có chiều sâu"],
    weaknesses: ["Đôi khi quá lý thuyết", "Ít tham gia hoạt động thực tế"],
    tips: ["Chia sẻ kiến thức với người khác", "Tham gia hoạt động cộng đồng"],
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
