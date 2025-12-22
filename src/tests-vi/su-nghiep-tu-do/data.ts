// Phong Cách Làm Tự Do (Freelancer)
// Khám phá phong cách làm freelancer của bạn

export const questions = [
  {
    id: 1,
    question: "Lý do bạn muốn làm tự do?",
    options: [
      { text: "Tự do về thời gian và địa điểm", type: "A" },
      { text: "Thu nhập cao hơn, đa dạng nguồn", type: "B" },
      { text: "Không thích môi trường công sở", type: "C" },
      { text: "Phát triển kỹ năng đa dạng", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn tìm khách hàng bằng cách nào?",
    options: [
      { text: "Qua các platform freelance online", type: "A" },
      { text: "Networking và giới thiệu", type: "B" },
      { text: "Social media và content marketing", type: "C" },
      { text: "Cold outreach và sales", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn quản lý thời gian làm việc như thế nào?",
    options: [
      { text: "Tự do hoàn toàn, làm khi nào thích", type: "A" },
      { text: "Có lịch cố định như đi làm công ty", type: "B" },
      { text: "Linh hoạt theo deadline và khách hàng", type: "C" },
      { text: "Làm việc theo pomodoro và sprint", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn làm việc ở đâu?",
    options: [
      { text: "Tại nhà, có không gian riêng", type: "A" },
      { text: "Co-working space để có môi trường", type: "B" },
      { text: "Quán café, thay đổi địa điểm", type: "C" },
      { text: "Bất cứ đâu có wifi", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn định giá dịch vụ như thế nào?",
    options: [
      { text: "Theo giờ, minh bạch", type: "A" },
      { text: "Theo dự án, giá trị mang lại", type: "B" },
      { text: "Theo thị trường, competitive", type: "C" },
      { text: "Tùy khách hàng và độ khó", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn xử lý khách hàng khó tính như thế nào?",
    options: [
      { text: "Giao tiếp rõ ràng, set expectation", type: "A" },
      { text: "Cố gắng đáp ứng, giữ quan hệ tốt", type: "B" },
      { text: "Từ chối nếu không phù hợp", type: "C" },
      { text: "Học hỏi và cải thiện service", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn có bao nhiêu nguồn thu nhập?",
    options: [
      { text: "1 nguồn chính ổn định", type: "A" },
      { text: "2-3 nguồn đa dạng", type: "B" },
      { text: "Nhiều nguồn nhỏ, không phụ thuộc", type: "C" },
      { text: "Tùy lúc, không cố định", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn xử lý vấn đề tài chính không ổn định?",
    options: [
      { text: "Có quỹ dự phòng 6+ tháng", type: "A" },
      { text: "Cân đối chi tiêu theo thu nhập", type: "B" },
      { text: "Tìm thêm dự án khi cần", type: "C" },
      { text: "Không lo, tin vào khả năng mình", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn có làm việc vào cuối tuần không?",
    options: [
      { text: "Không, giữ work-life balance", type: "A" },
      { text: "Đôi khi, khi có deadline", type: "B" },
      { text: "Thường xuyên, không phân biệt", type: "C" },
      { text: "Tùy mood và nhu cầu tài chính", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn phát triển kỹ năng như thế nào?",
    options: [
      { text: "Tự học online, đọc sách", type: "A" },
      { text: "Học từ dự án thực tế", type: "B" },
      { text: "Tham gia cộng đồng, networking", type: "C" },
      { text: "Mua khóa học, mentor", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Điều khó khăn nhất khi làm tự do với bạn?",
    options: [
      { text: "Kỷ luật bản thân, tự quản lý", type: "A" },
      { text: "Thu nhập không ổn định", type: "B" },
      { text: "Cô đơn, thiếu đồng nghiệp", type: "C" },
      { text: "Tìm khách hàng mới", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Kế hoạch dài hạn của bạn là gì?",
    options: [
      { text: "Tiếp tục freelance, scale up", type: "A" },
      { text: "Xây dựng agency/business riêng", type: "B" },
      { text: "Quay lại full-time khi phù hợp", type: "C" },
      { text: "Chưa có kế hoạch cụ thể", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Freelancer Có Kỷ Luật",
    emoji: "⏰",
    description: "Bạn là freelancer có kỷ luật và tổ chức tốt! Bạn biết cách quản lý thời gian, tài chính và công việc một cách chuyên nghiệp. Bạn làm tự do nhưng vẫn có cấu trúc.",
    traits: ["Kỷ luật", "Tổ chức", "Chuyên nghiệp", "Có kế hoạch"],
    strengths: ["Work-life balance tốt", "Thu nhập ổn định", "Khách hàng tin tưởng"],
    weaknesses: ["Có thể thiếu linh hoạt", "Bỏ lỡ cơ hội bất ngờ"],
    tips: ["Đôi khi linh hoạt hơn", "Thử những dự án khác lĩnh vực"],
  },
  B: {
    type: "B",
    title: "Freelancer Chiến Lược",
    emoji: "📈",
    description: "Bạn là freelancer có tư duy kinh doanh! Bạn biết cách đa dạng hóa thu nhập, định giá theo giá trị và xây dựng network. Bạn đang trên đường xây dựng business riêng.",
    traits: ["Chiến lược", "Kinh doanh", "Networking", "Tầm nhìn"],
    strengths: ["Thu nhập đa dạng", "Có tầm nhìn xa", "Phát triển nhanh"],
    weaknesses: ["Có thể overwork", "Thiếu chuyên sâu"],
    tips: ["Cân bằng giữa mở rộng và chuyên sâu", "Chăm sóc sức khỏe"],
  },
  C: {
    type: "C",
    title: "Freelancer Tự Do",
    emoji: "🌍",
    description: "Bạn là freelancer yêu tự do thực sự! Bạn làm việc ở mọi nơi, không bị ràng buộc và tận hưởng cuộc sống. Bạn là người sáng tạo và không thích gò bó.",
    traits: ["Tự do", "Sáng tạo", "Linh hoạt", "Khám phá"],
    strengths: ["Cuộc sống thú vị", "Nhiều trải nghiệm", "Không bị stress"],
    weaknesses: ["Có thể thiếu ổn định", "Khó scale up"],
    tips: ["Xây dựng một số quy trình cơ bản", "Có quỹ dự phòng"],
  },
  D: {
    type: "D",
    title: "Freelancer Đang Khám Phá",
    emoji: "🔍",
    description: "Bạn đang khám phá con đường freelance! Bạn linh hoạt, học hỏi và tìm kiếm phong cách phù hợp với mình. Bạn sẵn sàng thử nghiệm và điều chỉnh.",
    traits: ["Khám phá", "Học hỏi", "Linh hoạt", "Thích nghi"],
    strengths: ["Mở với cơ hội", "Không sợ thử nghiệm", "Phát triển nhanh"],
    weaknesses: ["Chưa có định hướng rõ", "Có thể bị phân tán"],
    tips: ["Xác định mục tiêu cụ thể", "Tìm mentor hướng dẫn"],
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
