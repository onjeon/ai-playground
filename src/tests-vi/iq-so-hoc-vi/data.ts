// Trắc nghiệm Số học
// Kiểm tra khả năng tính toán và tư duy số học của bạn

export const questions = [
  {
    id: 1,
    question: "15 + 27 × 3 - 12 = ?",
    options: [
      { text: "84", type: "A" },
      { text: "114", type: "B" },
      { text: "96", type: "C" },
      { text: "126", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Một cửa hàng giảm giá 20%, sau đó giảm thêm 10% trên giá đã giảm. Tổng mức giảm giá là bao nhiêu %?",
    options: [
      { text: "28%", type: "A" },
      { text: "30%", type: "B" },
      { text: "27%", type: "C" },
      { text: "25%", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Tìm số tiếp theo: 1, 1, 2, 3, 5, 8, 13, ?",
    options: [
      { text: "21", type: "A" },
      { text: "18", type: "B" },
      { text: "20", type: "C" },
      { text: "19", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Nếu 3 công nhân làm xong công việc trong 12 ngày, thì 6 công nhân làm xong trong bao lâu?",
    options: [
      { text: "6 ngày", type: "A" },
      { text: "24 ngày", type: "D" },
      { text: "4 ngày", type: "B" },
      { text: "8 ngày", type: "C" },
    ],
  },
  {
    id: 5,
    question: "√144 + √81 = ?",
    options: [
      { text: "21", type: "A" },
      { text: "15", type: "B" },
      { text: "18", type: "C" },
      { text: "225", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Một hình chữ nhật có chu vi 36cm và chiều dài gấp đôi chiều rộng. Diện tích hình chữ nhật là?",
    options: [
      { text: "72 cm²", type: "A" },
      { text: "54 cm²", type: "B" },
      { text: "81 cm²", type: "C" },
      { text: "108 cm²", type: "D" },
    ],
  },
  {
    id: 7,
    question: "2³ × 3² = ?",
    options: [
      { text: "72", type: "A" },
      { text: "36", type: "B" },
      { text: "48", type: "C" },
      { text: "54", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Một số chia cho 7 dư 3, chia cho 5 dư 1. Số nhỏ nhất thỏa mãn là?",
    options: [
      { text: "31", type: "A" },
      { text: "24", type: "B" },
      { text: "17", type: "C" },
      { text: "38", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Tổng của 100 số tự nhiên đầu tiên (1 + 2 + 3 + ... + 100) = ?",
    options: [
      { text: "5050", type: "A" },
      { text: "5000", type: "B" },
      { text: "4950", type: "C" },
      { text: "5100", type: "D" },
    ],
  },
  {
    id: 10,
    question: "1/4 + 2/5 = ?",
    options: [
      { text: "13/20", type: "A" },
      { text: "3/9", type: "B" },
      { text: "3/20", type: "C" },
      { text: "7/20", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Một xe máy đi từ A đến B với vận tốc 40 km/h hết 3 giờ. Hỏi xe máy đi với vận tốc 60 km/h thì hết bao lâu?",
    options: [
      { text: "2 giờ", type: "A" },
      { text: "2.5 giờ", type: "B" },
      { text: "4.5 giờ", type: "C" },
      { text: "1.5 giờ", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Số nguyên tố lớn nhất nhỏ hơn 50 là số nào?",
    options: [
      { text: "47", type: "A" },
      { text: "49", type: "D" },
      { text: "43", type: "B" },
      { text: "45", type: "C" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Thiên Tài Số Học",
    emoji: "🔢",
    description: "Bạn có năng khiếu số học xuất sắc! Bạn xử lý các phép tính phức tạp nhanh chóng và chính xác, hiểu sâu về các khái niệm toán học.",
    traits: ["Tính toán nhanh", "Chính xác cao", "Hiểu quy luật số", "Tư duy logic mạnh"],
    strengths: ["Giải toán phức tạp", "Phân tích dữ liệu", "Lập kế hoạch tài chính"],
    weaknesses: ["Đôi khi quá chú trọng con số", "Có thể bỏ qua yếu tố định tính"],
    tips: ["Thử sức với toán cao cấp", "Áp dụng vào thực tế như đầu tư, lập trình"],
  },
  B: {
    type: "B",
    title: "Người Giỏi Tính Toán",
    emoji: "📊",
    description: "Bạn có khả năng số học tốt, xử lý các bài toán cơ bản và trung bình một cách dễ dàng. Với luyện tập thêm, bạn có thể tiến xa hơn.",
    traits: ["Cẩn thận", "Có phương pháp", "Kiên nhẫn", "Logic tốt"],
    strengths: ["Quản lý tài chính cá nhân", "Tính toán hàng ngày", "Giải quyết vấn đề thực tế"],
    weaknesses: ["Cần thời gian với bài toán phức tạp", "Đôi khi thiếu tự tin"],
    tips: ["Luyện tập đều đặn", "Học thêm các kỹ thuật tính nhẩm"],
  },
  C: {
    type: "C",
    title: "Người Đang Tiến Bộ",
    emoji: "📈",
    description: "Bạn có nền tảng số học cơ bản. Với sự rèn luyện kiên trì, khả năng của bạn sẽ cải thiện đáng kể.",
    traits: ["Chịu khó học", "Không ngại khó", "Tiềm năng phát triển", "Cần hướng dẫn"],
    strengths: ["Biết giới hạn bản thân", "Sẵn sàng học hỏi", "Kiên nhẫn"],
    weaknesses: ["Còn nhiều lỗ hổng kiến thức", "Tốc độ tính toán chậm"],
    tips: ["Ôn lại kiến thức cơ bản", "Làm bài tập mỗi ngày 15-30 phút"],
  },
  D: {
    type: "D",
    title: "Người Cần Bồi Dưỡng",
    emoji: "🌱",
    description: "Số học chưa phải thế mạnh của bạn, nhưng không sao! Mọi người đều có thể học và cải thiện với phương pháp đúng.",
    traits: ["Tư duy sáng tạo", "Có thể mạnh ở lĩnh vực khác", "Cần động lực", "Tiềm năng ẩn giấu"],
    strengths: ["Không bị áp lực về con số", "Có thể nhìn vấn đề khác biệt"],
    weaknesses: ["Thiếu nền tảng", "Dễ nản khi gặp bài khó"],
    tips: ["Bắt đầu từ những bài rất đơn giản", "Tìm gia sư hoặc khóa học phù hợp", "Học qua trò chơi và ứng dụng"],
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
