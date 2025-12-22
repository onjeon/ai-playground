// Phong Cách Xin Việc
// Khám phá phong cách tìm và xin việc của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn thường tìm việc bằng cách nào?",
    options: [
      { text: "Apply hàng loạt trên các trang tuyển dụng", type: "A" },
      { text: "Chọn lọc kỹ, chỉ apply công ty phù hợp", type: "B" },
      { text: "Qua giới thiệu của người quen", type: "C" },
      { text: "Để headhunter tìm đến mình", type: "D" },
    ],
  },
  {
    id: 2,
    question: "CV của bạn như thế nào?",
    options: [
      { text: "Đầy đủ, chi tiết mọi kinh nghiệm", type: "A" },
      { text: "Tùy chỉnh theo từng vị trí apply", type: "B" },
      { text: "Ngắn gọn, highlight điểm mạnh", type: "C" },
      { text: "Sáng tạo, có portfolio kèm theo", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn chuẩn bị phỏng vấn như thế nào?",
    options: [
      { text: "Tìm hiểu kỹ về công ty và vị trí", type: "A" },
      { text: "Chuẩn bị câu hỏi và câu trả lời mẫu", type: "B" },
      { text: "Dựa vào kinh nghiệm, ứng biến", type: "C" },
      { text: "Xem review công ty, hỏi người trong ngành", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Trong phỏng vấn, bạn thường?",
    options: [
      { text: "Tự tin trình bày thành tích", type: "A" },
      { text: "Trả lời cẩn thận, logic", type: "B" },
      { text: "Tạo thiện cảm, giao tiếp tự nhiên", type: "C" },
      { text: "Đặt nhiều câu hỏi về công ty", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi được hỏi về mức lương mong muốn?",
    options: [
      { text: "Nêu mức cao hơn kỳ vọng để đàm phán", type: "A" },
      { text: "Hỏi mức budget của công ty trước", type: "B" },
      { text: "Nêu mức thực tế, phù hợp thị trường", type: "C" },
      { text: "Linh hoạt, tùy thuộc vào toàn bộ package", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Nếu bị từ chối, bạn?",
    options: [
      { text: "Tiếp tục apply ngay, không nản", type: "A" },
      { text: "Phân tích lý do, rút kinh nghiệm", type: "B" },
      { text: "Hơi buồn nhưng nhanh vượt qua", type: "C" },
      { text: "Hỏi lại feedback để cải thiện", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn có dùng LinkedIn để tìm việc không?",
    options: [
      { text: "Có, rất tích cực và chuyên nghiệp", type: "A" },
      { text: "Có, nhưng chủ yếu để xây dựng network", type: "B" },
      { text: "Đôi khi, không quá quan tâm", type: "C" },
      { text: "Có, update thường xuyên và chờ cơ hội", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn thường apply bao nhiêu vị trí cùng lúc?",
    options: [
      { text: "Rất nhiều, càng nhiều càng tốt", type: "A" },
      { text: "3-5 vị trí phù hợp nhất", type: "B" },
      { text: "1-2 vị trí mơ ước", type: "C" },
      { text: "Tùy cơ hội, không giới hạn", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Điều quan trọng nhất khi chọn công ty?",
    options: [
      { text: "Lương và phúc lợi hấp dẫn", type: "A" },
      { text: "Cơ hội phát triển và học hỏi", type: "B" },
      { text: "Văn hóa công ty và đồng nghiệp", type: "C" },
      { text: "Công việc thú vị và có ý nghĩa", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn có gửi thư cảm ơn sau phỏng vấn không?",
    options: [
      { text: "Luôn luôn, đó là chuyên nghiệp", type: "A" },
      { text: "Có, nếu phỏng vấn tốt", type: "B" },
      { text: "Đôi khi, tùy công ty", type: "C" },
      { text: "Không, chờ kết quả là được", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Khi có nhiều offer, bạn?",
    options: [
      { text: "Chọn offer lương cao nhất", type: "A" },
      { text: "So sánh kỹ mọi yếu tố", type: "B" },
      { text: "Chọn nơi có văn hóa phù hợp nhất", type: "C" },
      { text: "Chọn theo trực giác và cảm nhận", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bạn nghĩ thời gian tìm việc lý tưởng là?",
    options: [
      { text: "Càng nhanh càng tốt, không để trống", type: "A" },
      { text: "1-3 tháng, đủ để tìm đúng nơi", type: "B" },
      { text: "Thoải mái, không vội vàng", type: "C" },
      { text: "Tùy cơ hội, có thể chờ đợi", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người Xin Việc Năng Động",
    emoji: "🏃",
    description: "Bạn tìm việc rất năng động và quyết liệt! Bạn không ngại apply nhiều nơi và luôn chủ động trong quá trình tìm việc. Bạn là người có năng lượng và quyết tâm cao.",
    traits: ["Năng động", "Quyết liệt", "Chủ động", "Tự tin"],
    strengths: ["Tìm việc nhanh", "Không nản lòng", "Có nhiều lựa chọn"],
    weaknesses: ["Có thể thiếu chọn lọc", "Apply quá nhiều dễ bị mệt"],
    tips: ["Chất lượng hơn số lượng", "Tập trung vào các công ty phù hợp"],
  },
  B: {
    type: "B",
    title: "Người Xin Việc Có Chiến Lược",
    emoji: "♟️",
    description: "Bạn tìm việc có chiến lược và kế hoạch rõ ràng! Mỗi bước đều được cân nhắc kỹ, từ CV đến phỏng vấn. Bạn là người chuyên nghiệp và có tầm nhìn.",
    traits: ["Có chiến lược", "Chuyên nghiệp", "Cẩn thận", "Logic"],
    strengths: ["Tỷ lệ thành công cao", "Được đánh giá chuyên nghiệp", "Có chuẩn bị tốt"],
    weaknesses: ["Có thể quá cầu toàn", "Mất thời gian chuẩn bị"],
    tips: ["Đôi khi linh hoạt hơn", "Tin vào trực giác"],
  },
  C: {
    type: "C",
    title: "Người Xin Việc Tự Nhiên",
    emoji: "😊",
    description: "Bạn tìm việc một cách tự nhiên và thoải mái! Bạn dựa vào kinh nghiệm, quan hệ và khả năng giao tiếp. Bạn là người dễ gần và tạo thiện cảm tốt.",
    traits: ["Tự nhiên", "Dễ gần", "Giao tiếp tốt", "Thoải mái"],
    strengths: ["Tạo ấn tượng tốt", "Có network", "Không bị stress"],
    weaknesses: ["Có thể thiếu chuẩn bị", "Phụ thuộc vào quan hệ"],
    tips: ["Chuẩn bị kỹ hơn cho phỏng vấn", "Mở rộng cách tìm việc"],
  },
  D: {
    type: "D",
    title: "Người Xin Việc Độc Đáo",
    emoji: "🌟",
    description: "Bạn có cách tiếp cận độc đáo trong việc tìm việc! Bạn chủ động xây dựng thương hiệu cá nhân và để cơ hội đến với mình. Bạn là người sáng tạo và có tầm nhìn riêng.",
    traits: ["Độc đáo", "Sáng tạo", "Có thương hiệu cá nhân", "Tầm nhìn"],
    strengths: ["Được săn đón", "Có giá trị riêng", "Thu hút nhà tuyển dụng"],
    weaknesses: ["Có thể bị động", "Khó apply công ty truyền thống"],
    tips: ["Kết hợp nhiều phương pháp", "Đôi khi chủ động hơn"],
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
