// Phong Cách Kinh Doanh
// Khám phá phong cách kinh doanh và làm chủ của bạn

export const questions = [
  {
    id: 1,
    question: "Động lực kinh doanh của bạn là gì?",
    options: [
      { text: "Tự do tài chính và thời gian", type: "A" },
      { text: "Xây dựng sản phẩm/dịch vụ có giá trị", type: "B" },
      { text: "Tạo công ăn việc làm cho người khác", type: "C" },
      { text: "Chứng minh bản thân và thử thách", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn quản lý nhân viên như thế nào?",
    options: [
      { text: "Giao việc rõ ràng, kiểm soát kết quả", type: "A" },
      { text: "Trao quyền, tin tưởng và hỗ trợ", type: "B" },
      { text: "Làm việc cùng team như đối tác", type: "C" },
      { text: "Xây dựng văn hóa và giá trị chung", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn xử lý rủi ro trong kinh doanh như thế nào?",
    options: [
      { text: "Tính toán kỹ, giảm thiểu rủi ro", type: "A" },
      { text: "Chấp nhận rủi ro có kiểm soát", type: "B" },
      { text: "Dám mạo hiểm khi thấy cơ hội", type: "C" },
      { text: "Bảo thủ, an toàn là trên hết", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Phong cách ra quyết định của bạn?",
    options: [
      { text: "Nhanh chóng, dựa trên trực giác", type: "A" },
      { text: "Cân nhắc kỹ, phân tích số liệu", type: "B" },
      { text: "Hỏi ý kiến team và cố vấn", type: "C" },
      { text: "Chờ đợi đủ thông tin rồi quyết định", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn xử lý tài chính doanh nghiệp như thế nào?",
    options: [
      { text: "Tự quản lý, nắm rõ từng đồng", type: "A" },
      { text: "Thuê kế toán/CFO chuyên nghiệp", type: "B" },
      { text: "Chia sẻ trách nhiệm với partner", type: "C" },
      { text: "Tập trung vào doanh thu, chi tiêu linh hoạt", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Chiến lược marketing của bạn?",
    options: [
      { text: "Digital marketing, quảng cáo online", type: "A" },
      { text: "Content marketing, xây dựng brand", type: "B" },
      { text: "Networking, giới thiệu truyền miệng", type: "C" },
      { text: "Đa kênh, thử nghiệm mọi cách", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Khi gặp khó khăn tài chính, bạn?",
    options: [
      { text: "Cắt giảm chi phí, tái cấu trúc", type: "A" },
      { text: "Tìm nguồn vốn mới, gọi đầu tư", type: "B" },
      { text: "Pivot, thay đổi mô hình kinh doanh", type: "C" },
      { text: "Kiên trì, chờ đợi cơ hội", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Mục tiêu dài hạn của doanh nghiệp bạn?",
    options: [
      { text: "Tăng trưởng nhanh, mở rộng quy mô", type: "A" },
      { text: "Bền vững, lợi nhuận ổn định", type: "B" },
      { text: "Tạo impact xã hội", type: "C" },
      { text: "Exit, bán hoặc IPO", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn đối xử với đối thủ cạnh tranh như thế nào?",
    options: [
      { text: "Cạnh tranh quyết liệt, giành thị phần", type: "A" },
      { text: "Phân tích và học hỏi từ họ", type: "B" },
      { text: "Tìm cách hợp tác win-win", type: "C" },
      { text: "Tập trung vào khách hàng, bỏ qua đối thủ", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Work-life balance khi kinh doanh?",
    options: [
      { text: "Làm việc 24/7, business là ưu tiên", type: "A" },
      { text: "Cố gắng cân bằng, có thời gian riêng", type: "B" },
      { text: "Xây dựng team để không phụ thuộc", type: "C" },
      { text: "Linh hoạt tùy giai đoạn phát triển", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn học hỏi kinh doanh từ đâu?",
    options: [
      { text: "Từ kinh nghiệm thực tế, trial and error", type: "A" },
      { text: "Sách, khóa học và mentor", type: "B" },
      { text: "Mạng lưới doanh nhân, hội nhóm", type: "C" },
      { text: "Nghiên cứu case study các công ty", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Nếu business thất bại, bạn?",
    options: [
      { text: "Học từ sai lầm, bắt đầu lại", type: "A" },
      { text: "Phân tích nguyên nhân kỹ lưỡng", type: "B" },
      { text: "Tìm người đồng hành mới", type: "C" },
      { text: "Nghỉ ngơi, suy nghĩ lại con đường", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Nhà Kinh Doanh Quyết Liệt",
    emoji: "🦁",
    description: "Bạn là nhà kinh doanh quyết liệt và tham vọng! Bạn không ngại cạnh tranh, dám mạo hiểm và luôn hướng đến mục tiêu lớn. Bạn là người lãnh đạo mạnh mẽ.",
    traits: ["Quyết liệt", "Tham vọng", "Mạo hiểm", "Lãnh đạo"],
    strengths: ["Tăng trưởng nhanh", "Ra quyết định nhanh", "Có tầm nhìn"],
    weaknesses: ["Có thể burn out", "Đôi khi quá áp lực với team"],
    tips: ["Chăm sóc sức khỏe", "Xây dựng team mạnh để chia sẻ"],
  },
  B: {
    type: "B",
    title: "Nhà Kinh Doanh Chiến Lược",
    emoji: "♟️",
    description: "Bạn là nhà kinh doanh có chiến lược và tầm nhìn xa! Bạn cân nhắc kỹ mọi quyết định, đầu tư vào hệ thống và con người. Bạn xây dựng business bền vững.",
    traits: ["Chiến lược", "Bền vững", "Có hệ thống", "Tầm nhìn xa"],
    strengths: ["Business ổn định", "Team mạnh", "Phát triển lâu dài"],
    weaknesses: ["Có thể chậm ra quyết định", "Bỏ lỡ cơ hội nhanh"],
    tips: ["Đôi khi hãy mạo hiểm hơn", "Tin vào trực giác"],
  },
  C: {
    type: "C",
    title: "Nhà Kinh Doanh Xã Hội",
    emoji: "🤝",
    description: "Bạn là nhà kinh doanh coi trọng con người và quan hệ! Bạn xây dựng business dựa trên giá trị, văn hóa và cộng đồng. Bạn muốn tạo impact tích cực.",
    traits: ["Coi trọng con người", "Có giá trị", "Xây dựng cộng đồng", "Impact"],
    strengths: ["Team gắn kết", "Khách hàng trung thành", "Ý nghĩa trong công việc"],
    weaknesses: ["Có thể chậm tăng trưởng", "Khó ra quyết định khó khăn"],
    tips: ["Cân bằng giữa con người và lợi nhuận", "Đôi khi cần cứng rắn hơn"],
  },
  D: {
    type: "D",
    title: "Nhà Kinh Doanh Linh Hoạt",
    emoji: "🦊",
    description: "Bạn là nhà kinh doanh linh hoạt và thích nghi nhanh! Bạn không bám vào một cách làm cố định, luôn sẵn sàng pivot và thử nghiệm. Bạn là người sáng tạo.",
    traits: ["Linh hoạt", "Sáng tạo", "Thích nghi", "Thử nghiệm"],
    strengths: ["Nhanh nhạy với thị trường", "Không sợ thay đổi", "Sáng tạo"],
    weaknesses: ["Có thể thiếu focus", "Khó xây dựng hệ thống"],
    tips: ["Xác định core business", "Xây dựng quy trình cơ bản"],
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
