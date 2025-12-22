// Quyết định bằng cảm xúc hay lý trí
// Khám phá bạn là người quyết định theo cảm xúc hay lý trí

export const questions = [
  {
    id: 1,
    question: "Khi mua sắm, điều gì ảnh hưởng quyết định của bạn nhiều nhất?",
    options: [
      { text: "Giá cả và giá trị sử dụng", type: "A" },
      { text: "Cảm xúc khi nhìn thấy sản phẩm", type: "B" },
      { text: "Cả hai, tùy sản phẩm", type: "C" },
      { text: "Review và đánh giá từ người khác", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Khi chọn công việc, bạn ưu tiên điều gì?",
    options: [
      { text: "Lương thưởng và cơ hội thăng tiến", type: "A" },
      { text: "Đam mê và cảm xúc với công việc", type: "B" },
      { text: "Cân bằng giữa đam mê và thu nhập", type: "C" },
      { text: "Ý kiến của gia đình và bạn bè", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi ai đó làm bạn tổn thương, bạn quyết định thế nào?",
    options: [
      { text: "Bình tĩnh phân tích và đưa ra phản ứng phù hợp", type: "A" },
      { text: "Phản ứng ngay theo cảm xúc", type: "B" },
      { text: "Dành thời gian nguôi giận rồi suy nghĩ", type: "C" },
      { text: "Hỏi người khác xem nên làm gì", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn tin vào điều gì hơn khi ra quyết định?",
    options: [
      { text: "Số liệu, bằng chứng và logic", type: "A" },
      { text: "Trực giác và cảm nhận cá nhân", type: "B" },
      { text: "Kết hợp cả hai tùy tình huống", type: "C" },
      { text: "Kinh nghiệm của người đi trước", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi xem phim xong và chọn đánh giá, bạn?",
    options: [
      { text: "Đánh giá dựa trên kỹ thuật, kịch bản, diễn xuất", type: "A" },
      { text: "Đánh giá theo cảm xúc phim mang lại", type: "B" },
      { text: "Cả hai, phim hay là phim chạm được cả đầu và tim", type: "C" },
      { text: "Xem điểm số và review của người khác", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi quyết định yêu/không yêu ai đó?",
    options: [
      { text: "Cân nhắc sự phù hợp, tương lai, điều kiện", type: "A" },
      { text: "Tin vào cảm xúc, tình yêu không cần lý do", type: "B" },
      { text: "Cảm xúc trước, nhưng cũng cần thực tế", type: "C" },
      { text: "Tham khảo ý kiến gia đình, bạn bè", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn hối hận về quyết định nào nhiều hơn?",
    options: [
      { text: "Quyết định thiếu suy nghĩ, logic", type: "A" },
      { text: "Quyết định không theo cảm xúc thật", type: "B" },
      { text: "Cả hai đều có thể khiến mình hối hận", type: "C" },
      { text: "Quyết định không hỏi ý kiến ai", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Khi phải sa thải nhân viên, bạn?",
    options: [
      { text: "Dựa vào hiệu suất và số liệu", type: "A" },
      { text: "Rất khó khăn vì cảm xúc với họ", type: "B" },
      { text: "Cân nhắc cả hiệu suất và hoàn cảnh", type: "C" },
      { text: "Tham khảo ý kiến người khác", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn thuyết phục người khác bằng cách nào?",
    options: [
      { text: "Đưa ra số liệu, bằng chứng, logic", type: "A" },
      { text: "Kể câu chuyện, chạm vào cảm xúc", type: "B" },
      { text: "Kết hợp cả logic và cảm xúc", type: "C" },
      { text: "Dựa vào uy tín, quan hệ", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Khi đọc tin tức gây phẫn nộ, bạn?",
    options: [
      { text: "Kiểm tra nguồn tin, suy xét trước khi phản ứng", type: "A" },
      { text: "Phản ứng ngay theo cảm xúc, share/comment", type: "B" },
      { text: "Cho phép mình cảm xúc nhưng cũng kiểm tra lại", type: "C" },
      { text: "Xem phản ứng của người khác trước", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn xử lý xung đột như thế nào?",
    options: [
      { text: "Phân tích nguyên nhân, tìm giải pháp logic", type: "A" },
      { text: "Nói ra cảm xúc, cần được thấu hiểu", type: "B" },
      { text: "Giải quyết cả mặt cảm xúc và vấn đề", type: "C" },
      { text: "Nhờ người thứ ba hòa giải", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Quyết định tốt nhất theo bạn là?",
    options: [
      { text: "Quyết định đúng về mặt logic, hiệu quả", type: "A" },
      { text: "Quyết định khiến mình hạnh phúc, không hối hận", type: "B" },
      { text: "Quyết định vừa đúng vừa khiến mình thoải mái", type: "C" },
      { text: "Quyết định được mọi người đồng ý", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người lý trí",
    emoji: "🧠",
    description: "Bạn là người quyết định chủ yếu bằng lý trí và logic. Bạn tin vào số liệu, bằng chứng và phân tích trước khi đưa ra quyết định.",
    traits: ["Logic", "Phân tích", "Khách quan", "Lý trí"],
    strengths: ["Quyết định có cơ sở", "Ít bị cảm xúc chi phối", "Đáng tin cậy"],
    weaknesses: ["Có thể thiếu empathy", "Đôi khi quá lạnh lùng"],
    tips: ["Đôi khi lắng nghe cảm xúc", "Cảm xúc cũng là thông tin quan trọng"],
  },
  B: {
    type: "B",
    title: "Người cảm xúc",
    emoji: "❤️",
    description: "Bạn là người quyết định chủ yếu bằng cảm xúc và trực giác. Bạn tin vào cảm nhận của mình và đặt hạnh phúc lên hàng đầu.",
    traits: ["Cảm xúc", "Trực giác", "Nhạy cảm", "Chân thật"],
    strengths: ["Đúng với bản thân", "Empathy cao", "Quyết định nhanh"],
    weaknesses: ["Có thể thiếu cơ sở", "Dễ hối hận khi cảm xúc thay đổi"],
    tips: ["Đôi khi cần phân tích logic", "Kiểm tra cảm xúc nhất thời"],
  },
  C: {
    type: "C",
    title: "Người cân bằng",
    emoji: "⚖️",
    description: "Bạn biết cách kết hợp cả lý trí và cảm xúc khi ra quyết định. Bạn linh hoạt và thích nghi tùy theo tình huống.",
    traits: ["Cân bằng", "Linh hoạt", "Khôn ngoan", "Thích nghi"],
    strengths: ["Quyết định toàn diện", "Vừa đúng vừa hài lòng", "Linh hoạt"],
    weaknesses: ["Có thể mất thời gian cân nhắc", "Đôi khi không rõ ràng"],
    tips: ["Tiếp tục giữ sự cân bằng", "Tin vào phương pháp của mình"],
  },
  D: {
    type: "D",
    title: "Người tham khảo",
    emoji: "👥",
    description: "Bạn thường tham khảo ý kiến người khác trước khi quyết định. Bạn coi trọng kinh nghiệm và góc nhìn của mọi người.",
    traits: ["Tham khảo", "Thận trọng", "Lắng nghe", "Cộng đồng"],
    strengths: ["Nhiều góc nhìn", "Học từ kinh nghiệm người khác", "An toàn"],
    weaknesses: ["Có thể phụ thuộc ý kiến", "Thiếu chủ động"],
    tips: ["Tin vào bản thân hơn", "Đôi khi tự quyết định cũng tốt"],
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
