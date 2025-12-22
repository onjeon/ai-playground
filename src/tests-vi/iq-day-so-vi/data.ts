// Trắc nghiệm Dãy số
// Kiểm tra khả năng nhận diện quy luật và dãy số của bạn

export const questions = [
  {
    id: 1,
    question: "Tìm số tiếp theo: 2, 4, 6, 8, ?",
    options: [
      { text: "10", type: "A" },
      { text: "12", type: "B" },
      { text: "9", type: "C" },
      { text: "16", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Tìm số tiếp theo: 1, 4, 9, 16, 25, ?",
    options: [
      { text: "36", type: "A" },
      { text: "30", type: "B" },
      { text: "35", type: "C" },
      { text: "49", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Tìm số tiếp theo: 3, 6, 12, 24, ?",
    options: [
      { text: "48", type: "A" },
      { text: "36", type: "B" },
      { text: "30", type: "C" },
      { text: "96", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Tìm số tiếp theo: 1, 1, 2, 3, 5, 8, ?",
    options: [
      { text: "13", type: "A" },
      { text: "11", type: "B" },
      { text: "10", type: "C" },
      { text: "16", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Tìm số tiếp theo: 2, 6, 12, 20, 30, ?",
    options: [
      { text: "42", type: "A" },
      { text: "40", type: "B" },
      { text: "36", type: "C" },
      { text: "50", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Tìm số tiếp theo: 1, 3, 6, 10, 15, ?",
    options: [
      { text: "21", type: "A" },
      { text: "20", type: "B" },
      { text: "18", type: "C" },
      { text: "25", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Tìm số tiếp theo: 81, 27, 9, 3, ?",
    options: [
      { text: "1", type: "A" },
      { text: "0", type: "B" },
      { text: "6", type: "C" },
      { text: "-3", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Tìm số tiếp theo: 2, 3, 5, 7, 11, ?",
    options: [
      { text: "13", type: "A" },
      { text: "12", type: "B" },
      { text: "15", type: "C" },
      { text: "14", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Tìm số tiếp theo: 1, 2, 4, 7, 11, 16, ?",
    options: [
      { text: "22", type: "A" },
      { text: "21", type: "B" },
      { text: "20", type: "C" },
      { text: "32", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Tìm số tiếp theo: 0, 1, 1, 2, 4, 7, 13, ?",
    options: [
      { text: "24", type: "A" },
      { text: "20", type: "B" },
      { text: "19", type: "C" },
      { text: "26", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Tìm số tiếp theo: 1, 8, 27, 64, ?",
    options: [
      { text: "125", type: "A" },
      { text: "100", type: "B" },
      { text: "128", type: "C" },
      { text: "81", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Tìm số tiếp theo: 1, 4, 2, 8, 4, 16, 8, ?",
    options: [
      { text: "32", type: "A" },
      { text: "16", type: "B" },
      { text: "24", type: "C" },
      { text: "64", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Bậc Thầy Dãy Số",
    emoji: "🔢",
    description: "Bạn có khả năng nhận diện quy luật số xuất sắc! Bạn nhanh chóng phát hiện pattern và dự đoán chính xác số tiếp theo.",
    traits: ["Nhận diện pattern nhanh", "Tư duy toán học mạnh", "Logic sắc bén", "Phân tích quy luật giỏi"],
    strengths: ["Giải toán dãy số", "Phân tích xu hướng", "Dự đoán dữ liệu"],
    weaknesses: ["Đôi khi phức tạp hóa vấn đề đơn giản", "Có thể tìm pattern không tồn tại"],
    tips: ["Thử sức với các bài toán Olympic", "Học thêm về chuỗi và dãy số nổi tiếng"],
  },
  B: {
    type: "B",
    title: "Người Giỏi Dãy Số",
    emoji: "📈",
    description: "Bạn có khả năng nhận diện quy luật số khá tốt, xử lý được hầu hết các dãy số cơ bản và trung bình.",
    traits: ["Nhận diện pattern ổn định", "Cẩn thận", "Có phương pháp", "Kiên nhẫn"],
    strengths: ["Giải dãy số cơ bản", "Phát hiện quy luật đơn giản", "Tính toán chính xác"],
    weaknesses: ["Cần thời gian với pattern phức tạp", "Đôi khi bỏ cuộc sớm"],
    tips: ["Luyện tập với các bài tập đa dạng", "Học các loại dãy số nổi tiếng như Fibonacci"],
  },
  C: {
    type: "C",
    title: "Người Đang Tiến Bộ",
    emoji: "📊",
    description: "Khả năng nhận diện dãy số của bạn ở mức cơ bản. Với sự luyện tập, bạn có thể nhận ra các quy luật nhanh hơn.",
    traits: ["Có tiềm năng", "Cần hướng dẫn", "Đang học hỏi", "Thận trọng"],
    strengths: ["Không vội vàng", "Biết giới hạn", "Sẵn sàng học"],
    weaknesses: ["Khó nhận ra pattern phức tạp", "Tốc độ chậm"],
    tips: ["Bắt đầu với dãy số đơn giản", "Ghi chép lại các loại quy luật đã học"],
  },
  D: {
    type: "D",
    title: "Người Cần Rèn Luyện",
    emoji: "🌱",
    description: "Nhận diện quy luật số chưa phải điểm mạnh của bạn, nhưng với sự kiên trì, bạn hoàn toàn có thể cải thiện!",
    traits: ["Cần nền tảng", "Tư duy theo hướng khác", "Tiềm năng ẩn", "Sáng tạo"],
    strengths: ["Không bị gò bó bởi số", "Có thể mạnh ở lĩnh vực khác"],
    weaknesses: ["Khó nhận ra pattern", "Dễ đoán sai"],
    tips: ["Ôn lại kiến thức số học cơ bản", "Học từ các ví dụ đơn giản", "Tìm tài liệu hướng dẫn chi tiết"],
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
