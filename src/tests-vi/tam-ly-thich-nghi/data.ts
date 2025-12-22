// Khả năng thích nghi
// Bài test đánh giá khả năng thích nghi với môi trường và hoàn cảnh mới

export const questions = [
  {
    id: 1,
    question: "Khi chuyển đến môi trường làm việc mới, bạn thường?",
    options: [
      { text: "Hào hứng và nhanh chóng làm quen", type: "A" },
      { text: "Cần một chút thời gian để thích nghi", type: "B" },
      { text: "Khá lo lắng nhưng cố gắng thích nghi", type: "C" },
      { text: "Rất khó chịu và muốn quay lại môi trường cũ", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Khi kế hoạch bị thay đổi đột ngột, bạn phản ứng thế nào?",
    options: [
      { text: "Linh hoạt điều chỉnh ngay lập tức", type: "A" },
      { text: "Hơi bất ngờ nhưng nhanh chóng thích nghi", type: "B" },
      { text: "Khó chịu và cần thời gian để chấp nhận", type: "C" },
      { text: "Rất khó chịu và từ chối thay đổi", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn cảm thấy thế nào khi phải học một kỹ năng hoàn toàn mới?",
    options: [
      { text: "Háo hức và sẵn sàng thử thách", type: "A" },
      { text: "Sẵn lòng học nhưng cần hướng dẫn", type: "B" },
      { text: "Lo lắng nhưng vẫn cố gắng", type: "C" },
      { text: "Ngại và muốn tránh nếu có thể", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi gặp người có văn hóa khác biệt, bạn thường?",
    options: [
      { text: "Tò mò và muốn tìm hiểu thêm", type: "A" },
      { text: "Cởi mở tiếp nhận sự khác biệt", type: "B" },
      { text: "Giữ khoảng cách nhưng vẫn tôn trọng", type: "C" },
      { text: "Khó chịu với sự khác biệt", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn xử lý thế nào khi công nghệ mới được áp dụng trong công việc?",
    options: [
      { text: "Háo hức tìm hiểu và sử dụng ngay", type: "A" },
      { text: "Học dần dần và thích nghi", type: "B" },
      { text: "Miễn cưỡng nhưng vẫn phải học", type: "C" },
      { text: "Cố gắng tránh sử dụng nếu có thể", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi phải làm việc với người có cách làm khác bạn, bạn?",
    options: [
      { text: "Tìm cách kết hợp ưu điểm của cả hai", type: "A" },
      { text: "Thỏa hiệp để hoàn thành công việc", type: "B" },
      { text: "Cố gắng nhưng cảm thấy không thoải mái", type: "C" },
      { text: "Muốn họ làm theo cách của mình", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn phản ứng thế nào khi quy tắc công ty thay đổi?",
    options: [
      { text: "Nhanh chóng thích nghi với quy tắc mới", type: "A" },
      { text: "Chấp nhận và tuân theo dần dần", type: "B" },
      { text: "Cần thời gian để quen", type: "C" },
      { text: "Phàn nàn và khó chịu", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Khi đi du lịch đến nơi xa lạ, bạn cảm thấy thế nào?",
    options: [
      { text: "Hào hứng khám phá mọi thứ", type: "A" },
      { text: "Vui vẻ nhưng chuẩn bị kỹ trước", type: "B" },
      { text: "Hơi lo lắng về những điều không quen", type: "C" },
      { text: "Thích ở những nơi quen thuộc hơn", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn xử lý thế nào khi thời tiết thay đổi đột ngột?",
    options: [
      { text: "Linh hoạt điều chỉnh kế hoạch", type: "A" },
      { text: "Tìm phương án thay thế", type: "B" },
      { text: "Khó chịu nhưng vẫn xoay sở", type: "C" },
      { text: "Hủy kế hoạch và ở nhà", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Khi nhận nhiệm vụ ngoài chuyên môn, bạn thường?",
    options: [
      { text: "Xem đây là cơ hội học hỏi", type: "A" },
      { text: "Cố gắng hoàn thành tốt nhất có thể", type: "B" },
      { text: "Lo lắng nhưng vẫn làm", type: "C" },
      { text: "Từ chối hoặc miễn cưỡng nhận", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn cảm thấy thế nào về việc thay đổi thói quen hàng ngày?",
    options: [
      { text: "Sẵn sàng thay đổi nếu cần thiết", type: "A" },
      { text: "Có thể thay đổi từng bước", type: "B" },
      { text: "Khó khăn nhưng vẫn cố gắng", type: "C" },
      { text: "Thích giữ nguyên thói quen cũ", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Khi phải đối mặt với tình huống bất ngờ, bạn?",
    options: [
      { text: "Bình tĩnh và tìm giải pháp ngay", type: "A" },
      { text: "Suy nghĩ nhanh và hành động", type: "B" },
      { text: "Cần thời gian để bình tĩnh lại", type: "C" },
      { text: "Hoảng hốt và không biết làm gì", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Khả Năng Thích Nghi Xuất Sắc",
    emoji: "🦎",
    description: "Bạn có khả năng thích nghi tuyệt vời, linh hoạt và sẵn sàng đón nhận mọi thay đổi. Bạn là người dễ dàng hòa nhập vào bất kỳ môi trường nào.",
    traits: ["Linh hoạt cao", "Cởi mở", "Sáng tạo", "Năng động"],
    strengths: ["Thích nghi nhanh", "Xử lý tình huống tốt", "Dễ hòa nhập"],
    weaknesses: ["Đôi khi thiếu kiên định", "Có thể thay đổi quá nhanh"],
    tips: ["Giữ vững một số nguyên tắc cơ bản", "Biết khi nào nên kiên định"],
  },
  B: {
    type: "B",
    title: "Khả Năng Thích Nghi Tốt",
    emoji: "🌊",
    description: "Bạn có khả năng thích nghi tốt, biết cách điều chỉnh bản thân phù hợp với hoàn cảnh mà vẫn giữ được bản sắc riêng.",
    traits: ["Thích nghi tốt", "Cân bằng", "Biết điều", "Ổn định"],
    strengths: ["Thích nghi có chừng mực", "Giữ được bản sắc", "Cân bằng tốt"],
    weaknesses: ["Đôi khi hơi chậm thích nghi", "Cần thời gian chuẩn bị"],
    tips: ["Tiếp tục phát triển sự linh hoạt", "Thử thách bản thân nhiều hơn"],
  },
  C: {
    type: "C",
    title: "Khả Năng Thích Nghi Trung Bình",
    emoji: "🐢",
    description: "Bạn cần thời gian để thích nghi với những thay đổi, nhưng cuối cùng vẫn có thể làm được. Sự ổn định là điều bạn coi trọng.",
    traits: ["Cần thời gian", "Thận trọng", "Ổn định", "Cẩn thận"],
    strengths: ["Không vội vàng", "Suy nghĩ kỹ", "Ổn định"],
    weaknesses: ["Chậm thích nghi", "Hay lo lắng trước thay đổi"],
    tips: ["Tập đón nhận thay đổi tích cực hơn", "Bắt đầu từ những thay đổi nhỏ"],
  },
  D: {
    type: "D",
    title: "Khả Năng Thích Nghi Cần Cải Thiện",
    emoji: "🏠",
    description: "Bạn thích sự ổn định và khó chấp nhận thay đổi. Việc bước ra khỏi vùng an toàn là thử thách lớn với bạn.",
    traits: ["Thích ổn định", "Khó thay đổi", "Bảo thủ", "An toàn"],
    strengths: ["Kiên định", "Trung thành", "Đáng tin cậy"],
    weaknesses: ["Khó thích nghi", "Bỏ lỡ cơ hội mới", "Dễ bị stress khi thay đổi"],
    tips: ["Tập chấp nhận thay đổi từng bước", "Xem thay đổi như cơ hội phát triển"],
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
