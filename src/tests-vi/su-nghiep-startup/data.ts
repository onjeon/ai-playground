// Tinh thần startup
// Khám phá tinh thần khởi nghiệp và startup của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn nghĩ gì về việc khởi nghiệp?",
    options: [
      { text: "Đó là ước mơ, muốn xây dựng thứ gì đó của riêng mình", type: "A" },
      { text: "Thú vị nhưng rủi ro cao, cần chuẩn bị kỹ", type: "B" },
      { text: "Muốn thử khi có ý tưởng tốt và đội ngũ phù hợp", type: "C" },
      { text: "Thích làm việc ở startup hơn là tự khởi nghiệp", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Nếu có một ý tưởng kinh doanh hay, bạn sẽ làm gì?",
    options: [
      { text: "Bắt tay làm ngay, học hỏi từ thực tế", type: "A" },
      { text: "Nghiên cứu thị trường, lập kế hoạch chi tiết", type: "B" },
      { text: "Tìm co-founder và cố vấn để thảo luận", type: "C" },
      { text: "Thử nghiệm nhỏ trước khi cam kết lớn", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn xử lý thất bại trong kinh doanh như thế nào?",
    options: [
      { text: "Đứng dậy nhanh chóng, rút kinh nghiệm và làm lại", type: "A" },
      { text: "Phân tích kỹ nguyên nhân để tránh lặp lại", type: "B" },
      { text: "Tìm sự hỗ trợ từ mentor và network", type: "C" },
      { text: "Cần thời gian để bình phục rồi mới tiếp tục", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn thích môi trường làm việc như thế nào?",
    options: [
      { text: "Startup nhỏ, tự do, nhiều thử thách", type: "A" },
      { text: "Công ty có hệ thống nhưng vẫn linh hoạt", type: "B" },
      { text: "Nơi có team mạnh, văn hóa tốt", type: "C" },
      { text: "Ổn định, có quy trình rõ ràng", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn sẵn sàng chấp nhận rủi ro đến mức nào?",
    options: [
      { text: "Sẵn sàng đánh đổi ổn định để theo đuổi đam mê", type: "A" },
      { text: "Chấp nhận rủi ro có tính toán kỹ lưỡng", type: "B" },
      { text: "Rủi ro vừa phải, có kế hoạch dự phòng", type: "C" },
      { text: "Thích an toàn, giảm thiểu rủi ro tối đa", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Điều gì quan trọng nhất khi khởi nghiệp với bạn?",
    options: [
      { text: "Tự do sáng tạo và làm chủ", type: "A" },
      { text: "Giải quyết một vấn đề thực tế", type: "B" },
      { text: "Có đội ngũ và cộng đồng hỗ trợ", type: "C" },
      { text: "Tiềm năng tài chính và tăng trưởng", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn gọi vốn cho startup như thế nào?",
    options: [
      { text: "Tự bootstrap, giữ quyền kiểm soát tối đa", type: "A" },
      { text: "Gọi vốn từ investor khi có traction", type: "B" },
      { text: "Tìm angel investor hoặc mentor có kinh nghiệm", type: "C" },
      { text: "Cẩn thận với việc pha loãng cổ phần", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn xây dựng đội ngũ startup như thế nào?",
    options: [
      { text: "Tìm người có cùng đam mê và tầm nhìn", type: "A" },
      { text: "Tuyển người có kỹ năng bổ sung cho mình", type: "B" },
      { text: "Xây dựng từ network và giới thiệu", type: "C" },
      { text: "Tuyển cẩn thận, ưu tiên chất lượng hơn số lượng", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn đối mặt với sự không chắc chắn như thế nào?",
    options: [
      { text: "Hào hứng, đó là phần thú vị của khởi nghiệp", type: "A" },
      { text: "Chấp nhận và chuẩn bị nhiều kịch bản", type: "B" },
      { text: "Tìm người có kinh nghiệm để tham khảo", type: "C" },
      { text: "Lo lắng nhưng vẫn tiến về phía trước", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Kỹ năng nào bạn nghĩ quan trọng nhất cho founder?",
    options: [
      { text: "Tầm nhìn và khả năng thực thi", type: "A" },
      { text: "Phân tích và ra quyết định", type: "B" },
      { text: "Lãnh đạo và xây dựng đội ngũ", type: "C" },
      { text: "Quản lý tài chính và rủi ro", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn làm gì khi startup không tăng trưởng như mong đợi?",
    options: [
      { text: "Pivot nhanh, thử hướng đi mới", type: "A" },
      { text: "Phân tích dữ liệu, tìm nguyên nhân", type: "B" },
      { text: "Họp team, brainstorm giải pháp cùng nhau", type: "C" },
      { text: "Cắt giảm chi phí, tập trung vào core", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Mục tiêu cuối cùng của bạn khi khởi nghiệp là gì?",
    options: [
      { text: "Xây dựng thứ gì đó có ý nghĩa và tồn tại lâu dài", type: "A" },
      { text: "Tạo ra giá trị thực sự cho khách hàng", type: "B" },
      { text: "Xây dựng đội ngũ và văn hóa tuyệt vời", type: "C" },
      { text: "Đạt được tự do tài chính", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Founder Tầm nhìn",
    emoji: "🚀",
    description: "Bạn có tinh thần startup mạnh mẽ với tầm nhìn xa và đam mê xây dựng. Bạn sẵn sàng chấp nhận rủi ro và không ngại bắt đầu từ con số 0.",
    traits: ["Tầm nhìn", "Đam mê", "Dũng cảm", "Hành động"],
    strengths: ["Khả năng thực thi cao", "Không sợ thất bại", "Truyền cảm hứng"],
    weaknesses: ["Có thể vội vàng", "Đôi khi thiếu kế hoạch chi tiết"],
    tips: ["Kết hợp tầm nhìn với chiến lược", "Tìm co-founder có kỹ năng bổ sung"],
  },
  B: {
    type: "B",
    title: "Founder Chiến lược",
    emoji: "🎯",
    description: "Bạn khởi nghiệp có kế hoạch và chiến lược rõ ràng. Bạn phân tích kỹ trước khi hành động và đưa ra quyết định dựa trên dữ liệu.",
    traits: ["Chiến lược", "Phân tích", "Cẩn thận", "Logic"],
    strengths: ["Quyết định có cơ sở", "Quản lý rủi ro tốt", "Kế hoạch dài hạn"],
    weaknesses: ["Có thể chậm ra quyết định", "Đôi khi over-analysis"],
    tips: ["Học cách quyết định nhanh hơn", "Chấp nhận sự không hoàn hảo"],
  },
  C: {
    type: "C",
    title: "Founder Xây dựng team",
    emoji: "👥",
    description: "Bạn tin rằng team là yếu tố quan trọng nhất của startup. Bạn giỏi xây dựng đội ngũ, văn hóa và tận dụng network để phát triển.",
    traits: ["Lãnh đạo", "Kết nối", "Xây dựng văn hóa", "Hợp tác"],
    strengths: ["Xây dựng team mạnh", "Network rộng", "Văn hóa công ty tốt"],
    weaknesses: ["Có thể phụ thuộc vào người khác", "Khó quyết định một mình"],
    tips: ["Phát triển kỹ năng cá nhân", "Học cách làm việc độc lập khi cần"],
  },
  D: {
    type: "D",
    title: "Founder Thận trọng",
    emoji: "🛡️",
    description: "Bạn khởi nghiệp với sự thận trọng và quản lý rủi ro tốt. Bạn thích thử nghiệm nhỏ trước khi cam kết lớn và đảm bảo tài chính ổn định.",
    traits: ["Thận trọng", "Quản lý rủi ro", "Thực tế", "Bền vững"],
    strengths: ["Bền vững lâu dài", "Quản lý tài chính tốt", "Quyết định an toàn"],
    weaknesses: ["Có thể bỏ lỡ cơ hội", "Tăng trưởng chậm hơn"],
    tips: ["Học cách chấp nhận rủi ro hơn", "Đôi khi cần hành động trước khi hoàn hảo"],
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
