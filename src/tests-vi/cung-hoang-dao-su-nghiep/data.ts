// Cung Hoàng Đạo Sự Nghiệp
// Khám phá phong cách làm việc và định hướng nghề nghiệp qua cung hoàng đạo

export const questions = [
  {
    id: 1,
    question: "Trong công việc, điều gì thúc đẩy bạn nhất?",
    options: [
      { text: "Thử thách mới và cơ hội thăng tiến", type: "A" },
      { text: "Thu nhập ổn định và an toàn công việc", type: "B" },
      { text: "Môi trường làm việc hòa đồng", type: "C" },
      { text: "Công việc có ý nghĩa và đam mê", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Khi được giao dự án lớn, bạn sẽ?",
    options: [
      { text: "Nhận ngay, đây là cơ hội thể hiện", type: "A" },
      { text: "Lên kế hoạch chi tiết trước khi bắt đầu", type: "B" },
      { text: "Họp với team để phân chia công việc", type: "C" },
      { text: "Tìm hiểu sâu về dự án trước", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi gặp áp lực deadline, bạn?",
    options: [
      { text: "Càng áp lực càng hiệu quả", type: "A" },
      { text: "Stress nhưng vẫn hoàn thành đúng hạn", type: "B" },
      { text: "Nhờ đồng nghiệp hỗ trợ", type: "C" },
      { text: "Cần thời gian để điều chỉnh tâm lý", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Môi trường làm việc lý tưởng của bạn?",
    options: [
      { text: "Năng động, cạnh tranh", type: "A" },
      { text: "Chuyên nghiệp, có quy trình rõ ràng", type: "B" },
      { text: "Thân thiện, hợp tác", type: "C" },
      { text: "Sáng tạo, tự do", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi có ý tưởng mới trong công việc, bạn?",
    options: [
      { text: "Trình bày ngay cho sếp", type: "A" },
      { text: "Nghiên cứu tính khả thi trước", type: "B" },
      { text: "Thảo luận với đồng nghiệp", type: "C" },
      { text: "Phát triển hoàn thiện rồi mới chia sẻ", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn xử lý xung đột với đồng nghiệp như thế nào?",
    options: [
      { text: "Đối mặt trực tiếp, nói thẳng", type: "A" },
      { text: "Tìm giải pháp win-win", type: "B" },
      { text: "Hòa giải, tránh leo thang", type: "C" },
      { text: "Tránh né, để thời gian giải quyết", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Mục tiêu nghề nghiệp của bạn là?",
    options: [
      { text: "Làm lãnh đạo, CEO", type: "A" },
      { text: "Chuyên gia trong lĩnh vực", type: "B" },
      { text: "Có công việc cân bằng cuộc sống", type: "C" },
      { text: "Làm điều mình yêu thích", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Khi được thăng chức, bạn cảm thấy?",
    options: [
      { text: "Đúng là xứng đáng, tiếp tục phấn đấu", type: "A" },
      { text: "Vui nhưng lo lắng trách nhiệm", type: "B" },
      { text: "Vui vì được công nhận", type: "C" },
      { text: "Bối rối, không biết có nên nhận", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn học kỹ năng mới cho công việc như thế nào?",
    options: [
      { text: "Thực hành ngay, học từ sai lầm", type: "A" },
      { text: "Học bài bản, có hệ thống", type: "B" },
      { text: "Học từ đồng nghiệp, mentor", type: "C" },
      { text: "Tự nghiên cứu, khám phá", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Khi công ty gặp khó khăn, bạn?",
    options: [
      { text: "Xem như cơ hội để thể hiện", type: "A" },
      { text: "Tìm cách ổn định, bảo vệ vị trí", type: "B" },
      { text: "Hỗ trợ team vượt qua", type: "C" },
      { text: "Lo lắng, cân nhắc các lựa chọn", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn thích làm việc?",
    options: [
      { text: "Độc lập, tự quyết định", type: "A" },
      { text: "Theo quy trình rõ ràng", type: "B" },
      { text: "Theo nhóm, phối hợp", type: "C" },
      { text: "Linh hoạt, không cố định", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Nghề nghiệp lý tưởng của bạn liên quan đến?",
    options: [
      { text: "Kinh doanh, quản lý", type: "A" },
      { text: "Tài chính, kế toán, pháp luật", type: "B" },
      { text: "Giáo dục, nhân sự, PR", type: "C" },
      { text: "Nghệ thuật, nghiên cứu, tâm lý", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Nhà Lãnh Đạo - Hỏa Tinh",
    emoji: "👔",
    description: "Bạn sinh ra để lãnh đạo! Với năng lượng của nguyên tố Hỏa, bạn có tham vọng lớn, không ngại thử thách và luôn hướng đến vị trí cao nhất trong sự nghiệp.",
    traits: ["Tham vọng", "Quyết đoán", "Tự tin", "Năng động"],
    strengths: ["Khả năng lãnh đạo", "Ra quyết định nhanh", "Truyền cảm hứng"],
    weaknesses: ["Nôn nóng", "Đôi khi độc đoán"],
    tips: ["Lắng nghe nhân viên hơn", "Kiên nhẫn với quy trình"],
  },
  B: {
    type: "B",
    title: "Chuyên Gia - Thổ Tinh",
    emoji: "📊",
    description: "Bạn là người xây dựng sự nghiệp bền vững! Với năng lượng của nguyên tố Thổ, bạn coi trọng sự ổn định, chuyên môn sâu và luôn hoàn thành công việc một cách hoàn hảo.",
    traits: ["Chuyên nghiệp", "Kiên nhẫn", "Đáng tin cậy", "Chi tiết"],
    strengths: ["Làm việc có hệ thống", "Quản lý tốt", "Độ tin cậy cao"],
    weaknesses: ["Thiếu linh hoạt", "Ngại thay đổi"],
    tips: ["Đón nhận sự đổi mới", "Đôi khi chấp nhận rủi ro"],
  },
  C: {
    type: "C",
    title: "Người Kết Nối - Phong Tinh",
    emoji: "🤝",
    description: "Bạn là cầu nối trong tổ chức! Với năng lượng của nguyên tố Phong, bạn có kỹ năng giao tiếp xuất sắc, biết cách làm việc nhóm và tạo môi trường hòa thuận.",
    traits: ["Giao tiếp tốt", "Hợp tác", "Linh hoạt", "Cân bằng"],
    strengths: ["Kỹ năng làm việc nhóm", "Networking", "Hòa giải"],
    weaknesses: ["Khó quyết đoán", "Hay phân vân"],
    tips: ["Tự tin hơn với quyết định", "Đặt mục tiêu cá nhân rõ ràng"],
  },
  D: {
    type: "D",
    title: "Nhà Sáng Tạo - Thủy Tinh",
    emoji: "🎨",
    description: "Bạn mang tâm hồn nghệ sĩ vào công việc! Với năng lượng của nguyên tố Thủy, bạn coi trọng ý nghĩa của công việc, có trực giác mạnh và sáng tạo không ngừng.",
    traits: ["Sáng tạo", "Trực giác", "Đam mê", "Sâu sắc"],
    strengths: ["Tư duy đột phá", "Hiểu khách hàng", "Giải quyết vấn đề sáng tạo"],
    weaknesses: ["Hay mơ mộng", "Nhạy cảm với phê bình"],
    tips: ["Cân bằng giữa sáng tạo và thực tế", "Xây dựng kỹ năng quản lý"],
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
