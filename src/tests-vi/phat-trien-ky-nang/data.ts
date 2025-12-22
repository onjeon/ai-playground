// Phong Cách Học Kỹ Năng
// Khám phá phong cách phát triển kỹ năng của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn thường chọn học kỹ năng nào?",
    options: [
      { text: "Kỹ năng cần cho công việc hiện tại", type: "A" },
      { text: "Kỹ năng cho tương lai, xu hướng mới", type: "B" },
      { text: "Kỹ năng theo đam mê, sở thích", type: "C" },
      { text: "Kỹ năng mọi người đang học", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn học một kỹ năng mới trong bao lâu?",
    options: [
      { text: "Vài tuần đến 1 tháng, học nhanh", type: "A" },
      { text: "3-6 tháng, học kỹ", type: "B" },
      { text: "1 năm trở lên, master level", type: "C" },
      { text: "Tùy độ khó và cần thiết", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn đánh giá tiến độ học kỹ năng như thế nào?",
    options: [
      { text: "Qua kết quả công việc thực tế", type: "A" },
      { text: "Qua certificate, bằng cấp", type: "B" },
      { text: "Qua feedback từ người khác", type: "C" },
      { text: "Tự cảm nhận sự tiến bộ", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi học kỹ năng mới, khó khăn lớn nhất của bạn?",
    options: [
      { text: "Không có thời gian đủ", type: "A" },
      { text: "Dễ nản khi gặp khó", type: "B" },
      { text: "Thiếu nguồn tài liệu tốt", type: "C" },
      { text: "Không có người hướng dẫn", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn thực hành kỹ năng mới như thế nào?",
    options: [
      { text: "Áp dụng ngay vào công việc", type: "A" },
      { text: "Làm project cá nhân, side project", type: "B" },
      { text: "Tham gia challenge, competition", type: "C" },
      { text: "Dạy lại cho người khác", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn có mentor hoặc người hướng dẫn không?",
    options: [
      { text: "Có, mentor trong công ty", type: "A" },
      { text: "Có, mentor bên ngoài, chuyên gia", type: "B" },
      { text: "Không, tự học là chính", type: "C" },
      { text: "Học từ cộng đồng online", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn đầu tư bao nhiêu tiền cho học kỹ năng/năm?",
    options: [
      { text: "Dưới 5 triệu, tìm nguồn free", type: "A" },
      { text: "5-20 triệu, khóa học chất lượng", type: "B" },
      { text: "20+ triệu, invest mạnh cho bản thân", type: "C" },
      { text: "Tùy nhu cầu, không giới hạn", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn cân bằng giữa học và làm như thế nào?",
    options: [
      { text: "Học trong giờ làm việc (được phép)", type: "A" },
      { text: "Dành thời gian riêng ngoài giờ làm", type: "B" },
      { text: "Kết hợp học và làm song song", type: "C" },
      { text: "Nghỉ phép để tập trung học", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Kỹ năng bạn muốn học nhất hiện tại?",
    options: [
      { text: "Kỹ năng công nghệ (AI, coding, data)", type: "A" },
      { text: "Kỹ năng mềm (communication, leadership)", type: "B" },
      { text: "Kỹ năng chuyên môn sâu", type: "C" },
      { text: "Kỹ năng sáng tạo (design, content)", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn có chia sẻ kỹ năng với người khác không?",
    options: [
      { text: "Có, thường xuyên mentor junior", type: "A" },
      { text: "Có, viết blog, làm content", type: "B" },
      { text: "Đôi khi, khi được hỏi", type: "C" },
      { text: "Không, tập trung học cho mình", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn nghĩ gì về việc học suốt đời?",
    options: [
      { text: "Bắt buộc để không bị đào thải", type: "A" },
      { text: "Niềm vui và đam mê", type: "B" },
      { text: "Cần thiết nhưng mệt mỏi", type: "C" },
      { text: "Tùy giai đoạn cuộc đời", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Mục tiêu phát triển kỹ năng của bạn?",
    options: [
      { text: "Thăng tiến trong công việc", type: "A" },
      { text: "Trở thành expert trong lĩnh vực", type: "B" },
      { text: "Đa dạng hóa, T-shaped skills", type: "C" },
      { text: "Chuẩn bị cho career change", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người Phát Triển Thực Tế",
    emoji: "🎯",
    description: "Bạn học kỹ năng theo nhu cầu thực tế! Bạn tập trung vào những gì cần thiết cho công việc và sự nghiệp. Bạn là người thực dụng và hiệu quả.",
    traits: ["Thực tế", "Hiệu quả", "Có mục tiêu", "Áp dụng ngay"],
    strengths: ["Học nhanh", "Áp dụng được ngay", "ROI cao"],
    weaknesses: ["Có thể thiếu chiều rộng", "Bỏ lỡ cơ hội mới"],
    tips: ["Đôi khi hãy học điều không cần ngay", "Mở rộng tầm nhìn"],
  },
  B: {
    type: "B",
    title: "Người Phát Triển Chuyên Sâu",
    emoji: "🏆",
    description: "Bạn hướng đến trở thành expert trong lĩnh vực! Bạn đầu tư thời gian và tiền bạc để master kỹ năng. Bạn là người có tham vọng và kiên trì.",
    traits: ["Chuyên sâu", "Kiên trì", "Tham vọng", "Đầu tư"],
    strengths: ["Trở thành expert", "Được công nhận", "Thu nhập cao"],
    weaknesses: ["Mất nhiều thời gian", "Có thể quá chuyên biệt"],
    tips: ["Bổ sung soft skills", "Đa dạng hóa một chút"],
  },
  C: {
    type: "C",
    title: "Người Phát Triển Đa Dạng",
    emoji: "🌈",
    description: "Bạn phát triển theo hướng đa dạng, T-shaped! Bạn có kiến thức rộng và một vài chuyên môn sâu. Bạn là người linh hoạt và thích nghi tốt.",
    traits: ["Đa dạng", "Linh hoạt", "T-shaped", "Tò mò"],
    strengths: ["Làm được nhiều việc", "Kết nối các lĩnh vực", "Thích nghi nhanh"],
    weaknesses: ["Có thể thiếu expert level", "Khó định vị"],
    tips: ["Xác định 1-2 lĩnh vực chuyên sâu", "Xây dựng thương hiệu rõ ràng"],
  },
  D: {
    type: "D",
    title: "Người Phát Triển Khám Phá",
    emoji: "🔍",
    description: "Bạn phát triển theo hướng khám phá và thử nghiệm! Bạn học từ nhiều nguồn, theo cộng đồng và không ngại thử cái mới. Bạn là người cởi mở.",
    traits: ["Khám phá", "Cởi mở", "Cộng đồng", "Thử nghiệm"],
    strengths: ["Luôn có cái mới", "Có network tốt", "Không bị lạc hậu"],
    weaknesses: ["Có thể thiếu focus", "Dễ bị FOMO"],
    tips: ["Xây dựng learning path rõ ràng", "Hoàn thành trước khi bắt đầu mới"],
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
