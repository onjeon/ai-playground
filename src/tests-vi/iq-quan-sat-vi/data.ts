// Trắc nghiệm Quan sát
// Kiểm tra khả năng quan sát và nhận biết chi tiết của bạn

export const questions = [
  {
    id: 1,
    question: "Trong hình sau có gì khác biệt? 🍎🍎🍎🍏🍎🍎",
    options: [
      { text: "Có một quả táo xanh ở vị trí thứ 4", type: "A" },
      { text: "Tất cả đều giống nhau", type: "D" },
      { text: "Có 2 quả khác biệt", type: "B" },
      { text: "Quả đầu tiên khác biệt", type: "C" },
    ],
  },
  {
    id: 2,
    question: "Xem kỹ dãy số: 11, 12, 13, 14, 51, 16, 17. Số nào viết sai?",
    options: [
      { text: "51 (phải là 15)", type: "A" },
      { text: "Không có số nào sai", type: "D" },
      { text: "11", type: "B" },
      { text: "17", type: "C" },
    ],
  },
  {
    id: 3,
    question: "Trong câu 'Tôi đi đi học mỗi ngày', có điều gì lạ?",
    options: [
      { text: "Từ 'đi' bị lặp lại", type: "A" },
      { text: "Câu hoàn toàn bình thường", type: "D" },
      { text: "Từ 'học' sai chính tả", type: "B" },
      { text: "Thiếu dấu chấm", type: "C" },
    ],
  },
  {
    id: 4,
    question: "Tìm hình khác biệt: ⭐⭐⭐⭐⭐⭐⭐✩⭐⭐",
    options: [
      { text: "Ngôi sao thứ 8 khác (không tô màu)", type: "A" },
      { text: "Tất cả giống nhau", type: "D" },
      { text: "Ngôi sao đầu tiên khác", type: "B" },
      { text: "Ngôi sao cuối khác", type: "C" },
    ],
  },
  {
    id: 5,
    question: "Đọc nhanh: THE CAT IN THE THE HAT. Có điều gì đặc biệt?",
    options: [
      { text: "Từ 'THE' xuất hiện 2 lần liên tiếp", type: "A" },
      { text: "Câu hoàn toàn bình thường", type: "D" },
      { text: "Từ 'CAT' viết sai", type: "B" },
      { text: "Từ 'HAT' viết sai", type: "C" },
    ],
  },
  {
    id: 6,
    question: "Trong bảng 3x3 toàn số 8, có một số 9 ẩn trong đó. Bạn có thấy không?",
    options: [
      { text: "Có, vì đề bài đã nói có số 9", type: "A" },
      { text: "Không có số 9", type: "B" },
      { text: "Có nhiều số 9", type: "C" },
      { text: "Không thể nhìn thấy", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Quan sát: ABCDEDGHIJKLMNOP. Chữ cái nào bị sai?",
    options: [
      { text: "Chữ F bị thiếu (sau E là D thay vì F)", type: "A" },
      { text: "Tất cả đều đúng", type: "D" },
      { text: "Chữ I bị thiếu", type: "B" },
      { text: "Chữ P thừa", type: "C" },
    ],
  },
  {
    id: 8,
    question: "Đếm số hình tam giác: △△△▲△△△△△",
    options: [
      { text: "1 tam giác tô đen, 8 tam giác trống", type: "A" },
      { text: "Tất cả 9 tam giác giống nhau", type: "D" },
      { text: "2 tam giác khác biệt", type: "B" },
      { text: "3 tam giác khác biệt", type: "C" },
    ],
  },
  {
    id: 9,
    question: "Trong từ 'OPPORTUNITY', có bao nhiêu chữ 'O'?",
    options: [
      { text: "2 chữ O", type: "A" },
      { text: "1 chữ O", type: "B" },
      { text: "3 chữ O", type: "C" },
      { text: "4 chữ O", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Xem kỹ: 1+1=2, 2+2=4, 3+3=6, 4+4=9, 5+5=10. Phép tính nào sai?",
    options: [
      { text: "4+4=9 (phải là 8)", type: "A" },
      { text: "Tất cả đều đúng", type: "D" },
      { text: "1+1=2", type: "B" },
      { text: "5+5=10", type: "C" },
    ],
  },
  {
    id: 11,
    question: "Trong hàng emoji: 😀😀😀😀😃😀😀, có gì khác biệt?",
    options: [
      { text: "Emoji thứ 5 có mắt khác", type: "A" },
      { text: "Tất cả giống nhau", type: "D" },
      { text: "Emoji đầu tiên khác", type: "B" },
      { text: "Emoji cuối khác", type: "C" },
    ],
  },
  {
    id: 12,
    question: "Đọc từng từ: PARIS IN THE THE SPRING. Có điều gì đặc biệt?",
    options: [
      { text: "Từ 'THE' xuất hiện 2 lần liên tiếp", type: "A" },
      { text: "Câu hoàn toàn bình thường", type: "D" },
      { text: "PARIS viết sai", type: "B" },
      { text: "SPRING viết sai", type: "C" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Mắt Đại Bàng",
    emoji: "🦅",
    description: "Bạn có khả năng quan sát xuất sắc! Không chi tiết nào có thể thoát khỏi tầm mắt của bạn. Bạn phát hiện sự khác biệt ngay lập tức.",
    traits: ["Quan sát tinh tường", "Phát hiện chi tiết", "Tập trung cao", "Nhạy bén"],
    strengths: ["Kiểm tra chất lượng", "Phát hiện lỗi sai", "Bảo mật và giám sát"],
    weaknesses: ["Đôi khi quá chú ý đến chi tiết nhỏ", "Có thể khó nhìn tổng thể"],
    tips: ["Kết hợp quan sát chi tiết với tầm nhìn tổng quát", "Nghỉ mắt thường xuyên"],
  },
  B: {
    type: "B",
    title: "Người Quan Sát Tốt",
    emoji: "👁️",
    description: "Bạn có khả năng quan sát khá tốt, có thể nhận ra hầu hết các chi tiết quan trọng và sự khác biệt.",
    traits: ["Cẩn thận", "Chú ý", "Kiên nhẫn", "Có phương pháp"],
    strengths: ["Kiểm tra tài liệu", "Phát hiện lỗi thường gặp", "Làm việc tỉ mỉ"],
    weaknesses: ["Có thể bỏ sót chi tiết nhỏ", "Cần thời gian để quan sát kỹ"],
    tips: ["Luyện tập với trò chơi tìm điểm khác biệt", "Quan sát có hệ thống"],
  },
  C: {
    type: "C",
    title: "Người Cần Rèn Luyện Quan Sát",
    emoji: "👀",
    description: "Khả năng quan sát của bạn ở mức trung bình. Bạn có thể bỏ sót một số chi tiết quan trọng.",
    traits: ["Có tiềm năng", "Cần tập trung hơn", "Đang phát triển", "Nhìn tổng thể"],
    strengths: ["Nắm bắt ý chính nhanh", "Không bị sa đà vào chi tiết"],
    weaknesses: ["Hay bỏ sót lỗi", "Dễ bị đánh lừa thị giác"],
    tips: ["Chơi game tìm điểm khác biệt", "Quan sát chậm và có hệ thống"],
  },
  D: {
    type: "D",
    title: "Người Cần Cải Thiện Quan Sát",
    emoji: "🌱",
    description: "Quan sát chi tiết chưa phải điểm mạnh của bạn, nhưng với luyện tập, bạn hoàn toàn có thể cải thiện!",
    traits: ["Nhìn tổng quát", "Tư duy khái quát", "Cần hướng dẫn", "Tiềm năng ẩn"],
    strengths: ["Không bị mất thời gian vào chi tiết", "Tư duy bao quát"],
    weaknesses: ["Hay bỏ sót thông tin quan trọng", "Dễ mắc lỗi do không chú ý"],
    tips: ["Bắt đầu với bài tập quan sát đơn giản", "Kiểm tra kỹ công việc trước khi nộp", "Đeo kính nếu cần"],
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
