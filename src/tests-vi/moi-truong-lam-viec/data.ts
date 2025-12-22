// Môi trường làm việc
// Khám phá môi trường làm việc phù hợp nhất với bạn

export const questions = [
  {
    id: 1,
    question: "Bạn thích không gian làm việc như thế nào?",
    options: [
      { text: "Văn phòng riêng, yên tĩnh", type: "A" },
      { text: "Open office, năng động", type: "B" },
      { text: "Làm việc từ xa, tại nhà", type: "C" },
      { text: "Linh hoạt, kết hợp nhiều nơi", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thích giờ làm việc như thế nào?",
    options: [
      { text: "Cố định 8h-17h", type: "A" },
      { text: "Linh hoạt, miễn đủ giờ", type: "B" },
      { text: "Tự quản lý thời gian", type: "C" },
      { text: "Theo project, có thể OT khi cần", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn thích quy mô công ty như thế nào?",
    options: [
      { text: "Tập đoàn lớn, quy trình rõ ràng", type: "A" },
      { text: "Công ty vừa, đủ để biết mọi người", type: "B" },
      { text: "Startup nhỏ, năng động", type: "C" },
      { text: "Freelance, tự do", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Dress code bạn thích nhất?",
    options: [
      { text: "Formal, chuyên nghiệp", type: "A" },
      { text: "Smart casual", type: "B" },
      { text: "Casual, thoải mái", type: "C" },
      { text: "Không dress code, mặc gì cũng được", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn thích họp như thế nào?",
    options: [
      { text: "Họp định kỳ, có agenda rõ ràng", type: "A" },
      { text: "Họp khi cần, không quá nhiều", type: "B" },
      { text: "Họp online, tiết kiệm thời gian", type: "C" },
      { text: "Ít họp nhất có thể, tự làm việc", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Văn hóa công ty bạn thích?",
    options: [
      { text: "Chuyên nghiệp, có hierarchy rõ ràng", type: "A" },
      { text: "Thân thiện, như gia đình", type: "B" },
      { text: "Năng động, khuyến khích đổi mới", type: "C" },
      { text: "Tự do, tôn trọng cá nhân", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn thích được đánh giá dựa trên gì?",
    options: [
      { text: "Quy trình và tuân thủ", type: "A" },
      { text: "Kết quả công việc", type: "B" },
      { text: "Sự sáng tạo và đóng góp", type: "C" },
      { text: "Mục tiêu cá nhân tự đặt ra", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn muốn phúc lợi gì nhất?",
    options: [
      { text: "Bảo hiểm, lương ổn định", type: "A" },
      { text: "Team building, hoạt động vui", type: "B" },
      { text: "Cổ phần, bonus theo hiệu suất", type: "C" },
      { text: "Ngày nghỉ linh hoạt, work-life balance", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn thích học hỏi trong công ty như thế nào?",
    options: [
      { text: "Training chính thức, có chứng chỉ", type: "A" },
      { text: "Học từ đồng nghiệp, on-the-job", type: "B" },
      { text: "Tự học, công ty hỗ trợ tài liệu/khóa học", type: "C" },
      { text: "Học qua dự án thực tế", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Điều gì quan trọng nhất trong môi trường làm việc?",
    options: [
      { text: "Sự ổn định và an toàn", type: "A" },
      { text: "Quan hệ đồng nghiệp tốt", type: "B" },
      { text: "Cơ hội phát triển và thử thách", type: "C" },
      { text: "Sự tự do và linh hoạt", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn xử lý áp lực công việc như thế nào?",
    options: [
      { text: "Làm theo quy trình, từng bước", type: "A" },
      { text: "Nhờ đồng nghiệp hỗ trợ", type: "B" },
      { text: "Tự tìm cách giải quyết, vượt qua", type: "C" },
      { text: "Cân bằng, không để áp lực quá mức", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Điều gì khiến bạn muốn ở lại công ty?",
    options: [
      { text: "Công việc ổn định, lâu dài", type: "A" },
      { text: "Môi trường và con người", type: "B" },
      { text: "Cơ hội thăng tiến và phát triển", type: "C" },
      { text: "Sự tự do và phù hợp với lifestyle", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Môi trường tập đoàn",
    emoji: "🏢",
    description: "Bạn phù hợp với môi trường tập đoàn lớn, có quy trình rõ ràng và sự ổn định. Bạn thích công việc có cấu trúc, biết rõ mình cần làm gì và career path rõ ràng.",
    traits: ["Ổn định", "Quy trình", "Chuyên nghiệp", "An toàn"],
    strengths: ["Công việc ổn định", "Phúc lợi tốt", "Career path rõ ràng"],
    weaknesses: ["Có thể nhàm chán", "Ít sáng tạo", "Bureaucracy"],
    tips: ["Tìm công ty có văn hóa phù hợp", "Chủ động tìm cơ hội trong tổ chức lớn"],
  },
  B: {
    type: "B",
    title: "Môi trường team-based",
    emoji: "👥",
    description: "Bạn phù hợp với môi trường đề cao teamwork và quan hệ đồng nghiệp. Bạn cần cảm giác thuộc về một nhóm, được hỗ trợ và có những người bạn trong công việc.",
    traits: ["Teamwork", "Thân thiện", "Hỗ trợ", "Kết nối"],
    strengths: ["Đồng nghiệp tốt", "Môi trường vui vẻ", "Được hỗ trợ"],
    weaknesses: ["Có thể có drama", "Phụ thuộc team"],
    tips: ["Xây dựng quan hệ tốt", "Đóng góp cho team culture"],
  },
  C: {
    type: "C",
    title: "Môi trường startup",
    emoji: "🚀",
    description: "Bạn phù hợp với môi trường startup năng động, đầy thử thách và cơ hội. Bạn thích sự đổi mới, không ngại rủi ro và muốn tạo impact lớn.",
    traits: ["Năng động", "Đổi mới", "Thử thách", "Phát triển nhanh"],
    strengths: ["Phát triển nhanh", "Học nhiều", "Có impact lớn"],
    weaknesses: ["Không ổn định", "Áp lực cao", "Workload nặng"],
    tips: ["Chọn startup có tiềm năng", "Chuẩn bị cho sự không chắc chắn"],
  },
  D: {
    type: "D",
    title: "Môi trường linh hoạt",
    emoji: "🌍",
    description: "Bạn phù hợp với môi trường làm việc linh hoạt, remote hoặc freelance. Bạn cần sự tự do trong công việc, work-life balance và khả năng tự quản lý thời gian.",
    traits: ["Tự do", "Linh hoạt", "Độc lập", "Balance"],
    strengths: ["Work-life balance", "Tự do sáng tạo", "Không bị gò bó"],
    weaknesses: ["Cần tự kỷ luật cao", "Có thể cô đơn", "Thiếu kết nối"],
    tips: ["Xây dựng kỷ luật cá nhân", "Vẫn duy trì kết nối xã hội"],
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
