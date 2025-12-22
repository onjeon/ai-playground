// Cách kiếm tiền
// Khám phá phong cách kiếm tiền của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn thích kiếm tiền theo cách nào?",
    options: [
      { text: "Lương ổn định, công việc cố định", type: "A" },
      { text: "Làm nhiều công việc, đa dạng thu nhập", type: "B" },
      { text: "Tự kinh doanh, làm chủ", type: "C" },
      { text: "Đầu tư, để tiền đẻ ra tiền", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn sẵn sàng làm thêm ngoài giờ không?",
    options: [
      { text: "Không, work-life balance quan trọng", type: "A" },
      { text: "Có, nếu được trả công xứng đáng", type: "B" },
      { text: "Thường xuyên, cần tiền mà", type: "C" },
      { text: "Làm việc thông minh, không làm nhiều", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn nghĩ gì về việc kiếm tiền online?",
    options: [
      { text: "Không tin tưởng, thích công việc truyền thống", type: "A" },
      { text: "Đang tìm hiểu, muốn thử", type: "B" },
      { text: "Đã và đang làm", type: "C" },
      { text: "Thu nhập chính từ online", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Nếu có ý tưởng kinh doanh hay, bạn sẽ?",
    options: [
      { text: "Để đó, an phận với công việc hiện tại", type: "A" },
      { text: "Thử làm nhỏ bên cạnh công việc chính", type: "B" },
      { text: "Nghỉ việc để tập trung phát triển", type: "C" },
      { text: "Tìm nhà đầu tư, scale lớn ngay", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn có bao nhiêu nguồn thu nhập?",
    options: [
      { text: "1 nguồn: lương công việc chính", type: "A" },
      { text: "2-3 nguồn: lương + làm thêm", type: "B" },
      { text: "4-5 nguồn: đa dạng các kênh", type: "C" },
      { text: "Nhiều nguồn, không đếm hết", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn nghĩ gì về passive income?",
    options: [
      { text: "Không thực tế, phải làm mới có ăn", type: "A" },
      { text: "Hay nhưng cần vốn lớn", type: "B" },
      { text: "Đang xây dựng các nguồn passive", type: "C" },
      { text: "Mục tiêu chính của tôi", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn đầu tư bao nhiêu cho kỹ năng kiếm tiền?",
    options: [
      { text: "Ít, làm việc hiện tại ổn rồi", type: "A" },
      { text: "Học thêm khi công ty yêu cầu", type: "B" },
      { text: "Chủ động học, đầu tư khóa học", type: "C" },
      { text: "Liên tục nâng cấp, networking", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Điều gì quan trọng nhất trong công việc?",
    options: [
      { text: "Ổn định, bảo hiểm, phúc lợi", type: "A" },
      { text: "Lương cao, thưởng tốt", type: "B" },
      { text: "Tự do, linh hoạt thời gian", type: "C" },
      { text: "Cơ hội phát triển, học hỏi", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn có sẵn sàng bỏ công việc ổn định không?",
    options: [
      { text: "Không, an toàn là trên hết", type: "A" },
      { text: "Cần suy nghĩ rất kỹ", type: "B" },
      { text: "Có, nếu cơ hội đủ tốt", type: "C" },
      { text: "Sẵn sàng bất cứ lúc nào", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn nghĩ gì về việc đổi nghề?",
    options: [
      { text: "Sợ rủi ro, thích ở yên", type: "A" },
      { text: "Có thể nếu lương cao hơn nhiều", type: "B" },
      { text: "Đã đổi nghề vài lần", type: "C" },
      { text: "Luôn tìm kiếm cơ hội mới", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Mục tiêu tài chính 5 năm của bạn?",
    options: [
      { text: "Tăng lương đều đặn", type: "A" },
      { text: "Tăng gấp đôi thu nhập", type: "B" },
      { text: "Tự do tài chính", type: "C" },
      { text: "Xây dựng đế chế riêng", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bạn xử lý thời gian rảnh như thế nào?",
    options: [
      { text: "Nghỉ ngơi, giải trí", type: "A" },
      { text: "Đôi khi làm thêm việc", type: "B" },
      { text: "Tìm cách kiếm thêm tiền", type: "C" },
      { text: "Luôn tìm cơ hội mới", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người làm công ổn định",
    emoji: "🏢",
    description: "Bạn thích sự ổn định và an toàn trong công việc. Lương cố định, bảo hiểm đầy đủ là ưu tiên. Không phải ai cũng cần làm giàu, sống vui là được.",
    traits: ["Ổn định", "An toàn", "Cân bằng", "Thực tế"],
    strengths: ["Thu nhập đều đặn", "Ít stress", "Work-life balance"],
    weaknesses: ["Thu nhập giới hạn", "Phụ thuộc công ty"],
    tips: ["Xây dựng quỹ dự phòng", "Nâng cao kỹ năng để tăng lương"],
  },
  B: {
    type: "B",
    title: "Người làm thêm chăm chỉ",
    emoji: "💪",
    description: "Bạn không ngại làm thêm để có thu nhập tốt hơn. Vừa làm công việc chính vừa tìm thêm nguồn thu. Chăm chỉ nhưng cần cân bằng.",
    traits: ["Chăm chỉ", "Linh hoạt", "Thực tế", "Có tham vọng"],
    strengths: ["Thu nhập khá", "Đa dạng nguồn thu", "Làm chủ được"],
    weaknesses: ["Có thể kiệt sức", "Thiếu thời gian nghỉ"],
    tips: ["Chú ý sức khỏe", "Tìm cách làm thông minh hơn"],
  },
  C: {
    type: "C",
    title: "Người kinh doanh",
    emoji: "🚀",
    description: "Bạn có tinh thần khởi nghiệp mạnh mẽ. Thích tự làm chủ, xây dựng nguồn thu đa dạng. Sẵn sàng chấp nhận rủi ro để có thu nhập cao hơn.",
    traits: ["Dám nghĩ dám làm", "Sáng tạo", "Độc lập", "Tham vọng"],
    strengths: ["Thu nhập không giới hạn", "Tự do", "Làm chủ cuộc đời"],
    weaknesses: ["Thu nhập không ổn định", "Áp lực lớn"],
    tips: ["Quản lý rủi ro", "Xây dựng đội ngũ tốt"],
  },
  D: {
    type: "D",
    title: "Nhà đầu tư/Người xây dựng hệ thống",
    emoji: "👑",
    description: "Bạn nghĩ lớn và hành động lớn. Mục tiêu là xây dựng hệ thống để tiền làm việc cho mình. Tham vọng cao và không ngừng phát triển.",
    traits: ["Tầm nhìn xa", "Tham vọng lớn", "Chiến lược", "Kiên trì"],
    strengths: ["Tiềm năng lớn", "Tự do tài chính", "Ảnh hưởng cao"],
    weaknesses: ["Rủi ro cao", "Áp lực cực lớn", "Có thể thất bại"],
    tips: ["Không bỏ trứng một giỏ", "Luôn có kế hoạch B"],
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
