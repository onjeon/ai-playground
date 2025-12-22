// Trắc nghiệm Xử Lý Thông Tin
// Đánh giá tốc độ và hiệu quả xử lý thông tin của bạn

export const questions = [
  {
    id: 1,
    question: "Khi đọc một email dài, bạn thường:",
    options: [
      { text: "Lướt qua và nắm được ý chính ngay", type: "A" },
      { text: "Đọc kỹ từng đoạn để hiểu rõ", type: "B" },
      { text: "Đọc phần đầu và cuối, bỏ qua giữa", type: "C" },
      { text: "Phải đọc nhiều lần mới hiểu", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Trong cuộc họp có nhiều ý kiến khác nhau, bạn:",
    options: [
      { text: "Tổng hợp và đưa ra kết luận nhanh chóng", type: "A" },
      { text: "Ghi chép lại và phân tích sau", type: "B" },
      { text: "Chỉ nhớ được vài ý quan trọng", type: "C" },
      { text: "Cảm thấy rối và khó theo dõi", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi làm bài thi có giới hạn thời gian, bạn:",
    options: [
      { text: "Hoàn thành sớm và còn thời gian kiểm tra", type: "A" },
      { text: "Làm vừa đủ thời gian quy định", type: "B" },
      { text: "Thường thiếu thời gian một chút", type: "C" },
      { text: "Luôn không kịp hoàn thành", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn xử lý tin nhắn và thông báo điện thoại như thế nào?",
    options: [
      { text: "Xử lý ngay lập tức và phân loại rõ ràng", type: "A" },
      { text: "Kiểm tra định kỳ và trả lời theo thứ tự ưu tiên", type: "B" },
      { text: "Trả lời khi rảnh, đôi khi quên", type: "C" },
      { text: "Thường bỏ qua hoặc trả lời rất muộn", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi học một kỹ năng mới từ video hướng dẫn, bạn:",
    options: [
      { text: "Xem một lần và làm được ngay", type: "A" },
      { text: "Xem 2-3 lần để nắm chắc", type: "B" },
      { text: "Phải tua đi tua lại nhiều lần", type: "C" },
      { text: "Cần người chỉ trực tiếp mới hiểu", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn phản ứng như thế nào khi có thay đổi kế hoạch đột ngột?",
    options: [
      { text: "Thích ứng ngay và điều chỉnh kế hoạch", type: "A" },
      { text: "Cần một chút thời gian để sắp xếp lại", type: "B" },
      { text: "Cảm thấy stress và cần giúp đỡ", type: "C" },
      { text: "Rất khó chịu và khó thích nghi", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Khi nghe một người nói nhiều thông tin cùng lúc, bạn:",
    options: [
      { text: "Ghi nhớ và sắp xếp thông tin logic", type: "A" },
      { text: "Yêu cầu họ nói chậm lại để ghi chép", type: "B" },
      { text: "Chỉ nhớ được thông tin cuối cùng", type: "C" },
      { text: "Quên gần hết sau vài phút", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn đưa ra quyết định khi mua sắm như thế nào?",
    options: [
      { text: "Nhanh chóng so sánh và chọn ngay", type: "A" },
      { text: "Cân nhắc kỹ các yếu tố rồi mới quyết định", type: "B" },
      { text: "Thường do dự và cần hỏi ý kiến người khác", type: "C" },
      { text: "Rất khó quyết định, thường bỏ lỡ cơ hội", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi giải quyết nhiều việc cùng lúc (multitasking), bạn:",
    options: [
      { text: "Hoàn thành tốt tất cả các việc", type: "A" },
      { text: "Làm được nhưng chất lượng giảm đi", type: "B" },
      { text: "Chỉ tập trung được một việc", type: "C" },
      { text: "Thường bỏ dở hoặc làm sai", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn xử lý thông tin số liệu và bảng biểu như thế nào?",
    options: [
      { text: "Đọc hiểu nhanh và rút ra kết luận", type: "A" },
      { text: "Cần phân tích từng phần một cách cẩn thận", type: "B" },
      { text: "Phải có người giải thích mới hiểu", type: "C" },
      { text: "Thường né tránh vì thấy khó hiểu", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Khi gặp vấn đề phức tạp, bạn thường:",
    options: [
      { text: "Phân tích và tìm ra giải pháp nhanh chóng", type: "A" },
      { text: "Chia nhỏ vấn đề và giải quyết từng phần", type: "B" },
      { text: "Cần thời gian suy nghĩ và tham khảo ý kiến", type: "C" },
      { text: "Cảm thấy choáng ngợp và muốn từ bỏ", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Sau một ngày tiếp nhận nhiều thông tin, bạn:",
    options: [
      { text: "Vẫn nhớ rõ và có thể kể lại chi tiết", type: "A" },
      { text: "Nhớ được những điểm quan trọng nhất", type: "B" },
      { text: "Chỉ nhớ mơ hồ một vài thứ", type: "C" },
      { text: "Quên gần hết, cần xem lại ghi chú", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Siêu Xử Lý Thông Tin",
    emoji: "⚡",
    description: "Bạn là người có tốc độ xử lý thông tin xuất sắc! Bạn có thể tiếp nhận, phân tích và đưa ra quyết định nhanh chóng và chính xác.",
    traits: ["Xử lý nhanh", "Đa nhiệm giỏi", "Ra quyết định nhanh", "Trí nhớ tốt"],
    strengths: ["Làm việc hiệu quả dưới áp lực", "Thích ứng nhanh với thay đổi", "Tổng hợp thông tin xuất sắc"],
    weaknesses: ["Có thể thiếu kiên nhẫn với người chậm hơn", "Đôi khi bỏ qua chi tiết nhỏ"],
    tips: ["Dành thời gian nghỉ ngơi để tránh quá tải", "Giúp đỡ người khác xử lý thông tin"],
  },
  B: {
    type: "B",
    title: "Người Xử Lý Cân Bằng",
    emoji: "🎯",
    description: "Bạn có khả năng xử lý thông tin tốt với sự cân bằng giữa tốc độ và độ chính xác. Bạn biết khi nào cần nhanh và khi nào cần chậm lại.",
    traits: ["Cẩn thận", "Có hệ thống", "Linh hoạt", "Đáng tin cậy"],
    strengths: ["Ít sai sót", "Làm việc có phương pháp", "Kết quả ổn định"],
    weaknesses: ["Đôi khi chậm hơn người khác", "Cần thời gian để thích nghi"],
    tips: ["Phát triển kỹ năng ghi chép hiệu quả", "Thử thách bản thân với deadline ngắn hơn"],
  },
  C: {
    type: "C",
    title: "Người Xử Lý Từ Từ",
    emoji: "🐢",
    description: "Bạn cần nhiều thời gian hơn để xử lý thông tin, nhưng điều này không có nghĩa là bạn kém. Bạn làm việc theo cách riêng của mình.",
    traits: ["Cẩn trọng", "Kỹ lưỡng", "Cần hướng dẫn", "Kiên nhẫn"],
    strengths: ["Không vội vàng quyết định", "Chấp nhận giúp đỡ", "Có tiềm năng cải thiện"],
    weaknesses: ["Xử lý chậm dưới áp lực", "Dễ bị quá tải thông tin"],
    tips: ["Sử dụng công cụ ghi chép và nhắc nhở", "Tập trung vào một việc tại một thời điểm"],
  },
  D: {
    type: "D",
    title: "Người Cần Hỗ Trợ",
    emoji: "🌱",
    description: "Xử lý thông tin là một thách thức với bạn hiện tại. Nhưng với sự rèn luyện và công cụ hỗ trợ phù hợp, bạn có thể cải thiện đáng kể.",
    traits: ["Cần hướng dẫn chi tiết", "Làm việc theo nhịp riêng", "Học hỏi từ từ", "Sáng tạo"],
    strengths: ["Nhìn vấn đề theo góc độ khác", "Không bị áp lực bởi tốc độ", "Tập trung vào chất lượng"],
    weaknesses: ["Khó xử lý nhiều thông tin cùng lúc", "Cần nhiều thời gian hơn người khác"],
    tips: ["Học cách chia nhỏ thông tin", "Tìm kiếm mentor hoặc người hỗ trợ"],
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
