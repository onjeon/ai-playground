// Trắc nghiệm Tính toán nhanh
// Kiểm tra khả năng tính toán nhanh và chính xác của bạn

export const questions = [
  {
    id: 1,
    question: "25 × 4 = ?",
    options: [
      { text: "100", type: "A" },
      { text: "90", type: "B" },
      { text: "110", type: "C" },
      { text: "80", type: "D" },
    ],
  },
  {
    id: 2,
    question: "156 + 44 = ?",
    options: [
      { text: "200", type: "A" },
      { text: "190", type: "B" },
      { text: "210", type: "C" },
      { text: "196", type: "D" },
    ],
  },
  {
    id: 3,
    question: "1000 - 387 = ?",
    options: [
      { text: "613", type: "A" },
      { text: "623", type: "B" },
      { text: "713", type: "C" },
      { text: "603", type: "D" },
    ],
  },
  {
    id: 4,
    question: "72 ÷ 8 = ?",
    options: [
      { text: "9", type: "A" },
      { text: "8", type: "B" },
      { text: "7", type: "C" },
      { text: "10", type: "D" },
    ],
  },
  {
    id: 5,
    question: "15 × 15 = ?",
    options: [
      { text: "225", type: "A" },
      { text: "215", type: "B" },
      { text: "235", type: "C" },
      { text: "205", type: "D" },
    ],
  },
  {
    id: 6,
    question: "50% của 248 = ?",
    options: [
      { text: "124", type: "A" },
      { text: "148", type: "B" },
      { text: "120", type: "C" },
      { text: "100", type: "D" },
    ],
  },
  {
    id: 7,
    question: "7 × 8 + 6 = ?",
    options: [
      { text: "62", type: "A" },
      { text: "56", type: "B" },
      { text: "98", type: "C" },
      { text: "50", type: "D" },
    ],
  },
  {
    id: 8,
    question: "999 + 1 = ?",
    options: [
      { text: "1000", type: "A" },
      { text: "1001", type: "D" },
      { text: "999", type: "C" },
      { text: "9991", type: "B" },
    ],
  },
  {
    id: 9,
    question: "144 ÷ 12 = ?",
    options: [
      { text: "12", type: "A" },
      { text: "14", type: "B" },
      { text: "11", type: "C" },
      { text: "13", type: "D" },
    ],
  },
  {
    id: 10,
    question: "3³ = ?",
    options: [
      { text: "27", type: "A" },
      { text: "9", type: "B" },
      { text: "81", type: "C" },
      { text: "24", type: "D" },
    ],
  },
  {
    id: 11,
    question: "25% của 400 = ?",
    options: [
      { text: "100", type: "A" },
      { text: "50", type: "B" },
      { text: "150", type: "C" },
      { text: "200", type: "D" },
    ],
  },
  {
    id: 12,
    question: "11 × 11 = ?",
    options: [
      { text: "121", type: "A" },
      { text: "111", type: "B" },
      { text: "131", type: "C" },
      { text: "122", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Máy Tính Nhân Hình",
    emoji: "🧮",
    description: "Bạn có khả năng tính toán nhanh và chính xác như máy tính! Bạn xử lý các phép tính cơ bản một cách tức thì.",
    traits: ["Tính nhẩm siêu nhanh", "Độ chính xác cao", "Tập trung tốt", "Tự tin với số"],
    strengths: ["Tính tiền nhanh", "Kiểm tra hóa đơn", "Ước lượng chính xác"],
    weaknesses: ["Có thể chủ quan với bài phức tạp", "Đôi khi vội vàng"],
    tips: ["Thử thách với tính toán phức tạp hơn", "Học các kỹ thuật tính nhẩm nâng cao"],
  },
  B: {
    type: "B",
    title: "Người Tính Toán Tốt",
    emoji: "📊",
    description: "Bạn có khả năng tính toán khá tốt, xử lý được hầu hết các phép tính cơ bản một cách nhanh chóng.",
    traits: ["Tính toán ổn định", "Cẩn thận", "Có phương pháp", "Kiên nhẫn"],
    strengths: ["Quản lý chi tiêu", "Tính toán hàng ngày", "Ít mắc lỗi"],
    weaknesses: ["Cần thêm thời gian với số lớn", "Đôi khi thiếu tự tin"],
    tips: ["Luyện tập tính nhẩm mỗi ngày", "Sử dụng mẹo tính toán nhanh"],
  },
  C: {
    type: "C",
    title: "Người Cần Luyện Tập",
    emoji: "📝",
    description: "Khả năng tính toán của bạn ở mức trung bình. Với sự rèn luyện, bạn có thể tính nhanh hơn.",
    traits: ["Có tiềm năng", "Cần luyện tập", "Cẩn thận", "Đang tiến bộ"],
    strengths: ["Biết kiểm tra lại", "Không vội vàng", "Chấp nhận dùng máy tính"],
    weaknesses: ["Tốc độ chậm", "Hay nhầm với số lớn"],
    tips: ["Học bảng cửu chương thuộc lòng", "Dùng app luyện tính nhẩm"],
  },
  D: {
    type: "D",
    title: "Người Cần Hỗ Trợ",
    emoji: "🌱",
    description: "Tính toán nhanh chưa phải điểm mạnh của bạn, nhưng trong thời đại công nghệ, máy tính luôn sẵn sàng hỗ trợ!",
    traits: ["Phụ thuộc công cụ", "Thiên về sáng tạo", "Cần nền tảng", "Tiềm năng khác"],
    strengths: ["Biết sử dụng công cụ", "Không tự mãn"],
    weaknesses: ["Khó tính nhẩm", "Dễ mắc lỗi tính toán"],
    tips: ["Ôn lại phép tính cơ bản", "Luôn mang máy tính", "Học Excel để hỗ trợ"],
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
