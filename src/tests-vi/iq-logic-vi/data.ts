// Trắc nghiệm Logic
// Kiểm tra khả năng tư duy logic và suy luận của bạn

export const questions = [
  {
    id: 1,
    question: "Nếu tất cả hoa hồng đều có gai, và một số hoa có hương thơm, thì kết luận nào sau đây chắc chắn đúng?",
    options: [
      { text: "Tất cả hoa có gai đều là hoa hồng", type: "D" },
      { text: "Một số hoa hồng có thể có hương thơm", type: "A" },
      { text: "Tất cả hoa có hương thơm đều có gai", type: "D" },
      { text: "Không có hoa hồng nào có hương thơm", type: "C" },
    ],
  },
  {
    id: 2,
    question: "A lớn hơn B, B lớn hơn C. C lớn hơn D. Vậy ai là người nhỏ nhất?",
    options: [
      { text: "A", type: "D" },
      { text: "B", type: "C" },
      { text: "C", type: "B" },
      { text: "D", type: "A" },
    ],
  },
  {
    id: 3,
    question: "Trong một gia đình có 5 người: ông, bà, bố, mẹ và con. Ai là người trẻ nhất?",
    options: [
      { text: "Ông", type: "D" },
      { text: "Bà", type: "C" },
      { text: "Con", type: "A" },
      { text: "Bố", type: "B" },
    ],
  },
  {
    id: 4,
    question: "Nếu mưa thì đường ướt. Đường ướt. Vậy có thể kết luận gì?",
    options: [
      { text: "Chắc chắn trời mưa", type: "D" },
      { text: "Có thể trời mưa hoặc có nguyên nhân khác", type: "A" },
      { text: "Chắc chắn không mưa", type: "C" },
      { text: "Đường sẽ khô ngay", type: "B" },
    ],
  },
  {
    id: 5,
    question: "Tìm số tiếp theo trong dãy: 2, 6, 12, 20, 30, ?",
    options: [
      { text: "42", type: "A" },
      { text: "40", type: "B" },
      { text: "38", type: "C" },
      { text: "44", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Ba người A, B, C đứng xếp hàng. A không đứng đầu, B không đứng cuối. C đứng sau A. Thứ tự từ đầu đến cuối là gì?",
    options: [
      { text: "B - A - C", type: "A" },
      { text: "A - B - C", type: "D" },
      { text: "C - A - B", type: "C" },
      { text: "A - C - B", type: "B" },
    ],
  },
  {
    id: 7,
    question: "Tất cả học sinh giỏi đều chăm chỉ. Minh không chăm chỉ. Kết luận nào đúng?",
    options: [
      { text: "Minh không phải học sinh giỏi", type: "A" },
      { text: "Minh là học sinh giỏi", type: "D" },
      { text: "Minh có thể là học sinh giỏi", type: "C" },
      { text: "Không thể kết luận", type: "B" },
    ],
  },
  {
    id: 8,
    question: "Một chiếc đồng hồ chỉ 3:15. Kim phút và kim giờ tạo thành góc bao nhiêu độ?",
    options: [
      { text: "0 độ", type: "B" },
      { text: "7.5 độ", type: "A" },
      { text: "15 độ", type: "C" },
      { text: "90 độ", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Nếu hôm qua là ngày mai của ngày kia thì hôm nay là thứ mấy nếu ngày kia là thứ Năm?",
    options: [
      { text: "Thứ Sáu", type: "B" },
      { text: "Thứ Bảy", type: "A" },
      { text: "Chủ Nhật", type: "C" },
      { text: "Thứ Hai", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Trong 5 quả táo, nếu bạn lấy đi 3 quả, bạn có bao nhiêu quả?",
    options: [
      { text: "2 quả", type: "B" },
      { text: "3 quả", type: "A" },
      { text: "5 quả", type: "C" },
      { text: "0 quả", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Một con ốc sên bò lên cột cao 10m. Ban ngày bò lên 3m, ban đêm tuột xuống 2m. Hỏi sau bao nhiêu ngày ốc sên lên được đỉnh cột?",
    options: [
      { text: "8 ngày", type: "A" },
      { text: "10 ngày", type: "B" },
      { text: "7 ngày", type: "C" },
      { text: "9 ngày", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Nếu APPLE = 50, BANANA = 42, thì CHERRY = ?",
    options: [
      { text: "63", type: "A" },
      { text: "54", type: "B" },
      { text: "72", type: "C" },
      { text: "48", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Thiên Tài Logic",
    emoji: "🧠",
    description: "Bạn có khả năng tư duy logic xuất sắc! Bạn dễ dàng nhận ra các mẫu hình, quy luật và có thể suy luận chặt chẽ từ các giả thiết cho trước.",
    traits: ["Suy luận chặt chẽ", "Phân tích sắc bén", "Nhận diện quy luật nhanh", "Tư duy có hệ thống"],
    strengths: ["Giải quyết vấn đề phức tạp", "Ra quyết định logic", "Phát hiện lỗi sai trong lập luận"],
    weaknesses: ["Đôi khi bỏ qua yếu tố cảm xúc", "Có thể quá cứng nhắc"],
    tips: ["Kết hợp logic với trực giác", "Luyện tập với các bài toán đố mới"],
  },
  B: {
    type: "B",
    title: "Nhà Tư Duy Khá",
    emoji: "💡",
    description: "Bạn có khả năng logic tốt với tư duy linh hoạt. Bạn biết cách kết hợp giữa phân tích và trực giác để giải quyết vấn đề.",
    traits: ["Tư duy linh hoạt", "Cân bằng logic-cảm xúc", "Học hỏi nhanh", "Thích nghi tốt"],
    strengths: ["Tiếp cận vấn đề đa chiều", "Giao tiếp hiệu quả", "Làm việc nhóm tốt"],
    weaknesses: ["Đôi khi thiếu quyết đoán", "Cần thêm thời gian để phân tích"],
    tips: ["Rèn luyện thêm tư duy phản biện", "Thử thách bản thân với các câu đố khó hơn"],
  },
  C: {
    type: "C",
    title: "Người Học Tiềm Năng",
    emoji: "📚",
    description: "Bạn đang phát triển khả năng logic của mình. Với sự rèn luyện, bạn có thể cải thiện đáng kể kỹ năng tư duy.",
    traits: ["Ham học hỏi", "Kiên nhẫn", "Chịu khó suy nghĩ", "Có tiềm năng phát triển"],
    strengths: ["Không ngại thử thách", "Biết nhận ra điểm yếu", "Sẵn sàng cải thiện"],
    weaknesses: ["Cần thêm luyện tập", "Đôi khi thiếu tự tin"],
    tips: ["Làm bài tập logic mỗi ngày", "Đọc sách về tư duy phản biện"],
  },
  D: {
    type: "D",
    title: "Người Cần Rèn Luyện",
    emoji: "🌱",
    description: "Logic không phải điểm mạnh hiện tại của bạn, nhưng đừng lo! Với sự kiên trì luyện tập, bạn hoàn toàn có thể cải thiện.",
    traits: ["Cần định hướng", "Tiềm năng chưa khai phá", "Sáng tạo theo cách riêng", "Trực giác mạnh"],
    strengths: ["Tư duy sáng tạo", "Không bị gò bó", "Nhìn vấn đề khác biệt"],
    weaknesses: ["Thiếu hệ thống trong suy nghĩ", "Dễ bỏ qua chi tiết quan trọng"],
    tips: ["Bắt đầu từ những bài tập đơn giản", "Tìm người hướng dẫn hoặc tham gia khóa học"],
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
