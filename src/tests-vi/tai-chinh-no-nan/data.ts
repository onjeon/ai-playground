// Cách đối mặt nợ nần
// Khám phá cách bạn đối mặt và xử lý nợ nần

export const questions = [
  {
    id: 1,
    question: "Bạn nghĩ gì về việc vay nợ?",
    options: [
      { text: "Tuyệt đối tránh, chỉ tiêu tiền có", type: "A" },
      { text: "Ok nếu là nợ tốt (mua nhà, học hành)", type: "B" },
      { text: "Bình thường, ai cũng có nợ", type: "C" },
      { text: "Vay được thì vay, lo sau", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Nếu đang có nợ, bạn sẽ ưu tiên gì?",
    options: [
      { text: "Trả hết nợ trước khi làm gì khác", type: "A" },
      { text: "Trả nợ lãi cao trước, tiết kiệm song song", type: "B" },
      { text: "Trả tối thiểu, sống bình thường", type: "C" },
      { text: "Để từ từ, còn nhiều việc khác", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi cần tiền gấp, bạn sẽ?",
    options: [
      { text: "Dùng quỹ dự phòng đã chuẩn bị", type: "A" },
      { text: "Vay người thân, không lãi", type: "B" },
      { text: "Vay qua app hoặc thẻ tín dụng", type: "C" },
      { text: "Vay ở đâu lãi cao cũng được", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn cảm thấy thế nào khi có nợ?",
    options: [
      { text: "Rất áp lực, mất ngủ", type: "A" },
      { text: "Có chút lo nhưng kiểm soát được", type: "B" },
      { text: "Bình thường, cứ từ từ trả", type: "C" },
      { text: "Không nghĩ nhiều, lo gì cho mệt", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn có biết tổng số nợ của mình không?",
    options: [
      { text: "Biết chính xác từng đồng", type: "A" },
      { text: "Biết đại khái", type: "B" },
      { text: "Không rõ lắm", type: "C" },
      { text: "Không muốn biết", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Nếu bạn bè nhờ vay tiền khi bạn đang nợ, bạn sẽ?",
    options: [
      { text: "Từ chối, giải thích hoàn cảnh", type: "A" },
      { text: "Cho vay một ít nếu không nhiều", type: "B" },
      { text: "Cho vay vì ngại từ chối", type: "C" },
      { text: "Cho vay, mình vay người khác được mà", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn xử lý các khoản trả góp như thế nào?",
    options: [
      { text: "Không mua trả góp, tránh nợ", type: "A" },
      { text: "Chỉ trả góp khi 0% lãi suất", type: "B" },
      { text: "Hay dùng trả góp cho đồ đắt", type: "C" },
      { text: "Trả góp nhiều món cùng lúc", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Khi nhận lương mà đang có nợ, bạn sẽ?",
    options: [
      { text: "Trả nợ ngay, còn bao nhiêu mới tiêu", type: "A" },
      { text: "Chia ra: trả nợ, tiết kiệm, chi tiêu", type: "B" },
      { text: "Chi tiêu trước, cuối tháng trả nợ", type: "C" },
      { text: "Tiêu bình thường, nợ để tháng sau", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn có kế hoạch thoát nợ không?",
    options: [
      { text: "Có lộ trình chi tiết, biết ngày hết nợ", type: "A" },
      { text: "Có kế hoạch đại khái", type: "B" },
      { text: "Chưa có, đang cố gắng", type: "C" },
      { text: "Không nghĩ tới", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn nghĩ gì về việc đảo nợ?",
    options: [
      { text: "Không bao giờ, chỉ làm nợ chồng nợ", type: "A" },
      { text: "Có thể nếu lãi suất thấp hơn", type: "B" },
      { text: "Đã từng làm vài lần", type: "C" },
      { text: "Hay làm để có tiền tiêu", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Khi không trả được nợ đúng hạn, bạn sẽ?",
    options: [
      { text: "Chưa bao giờ xảy ra", type: "A" },
      { text: "Liên hệ chủ nợ để thương lượng", type: "B" },
      { text: "Xin gia hạn, hứa trả sau", type: "C" },
      { text: "Im lặng, tránh né", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bài học lớn nhất của bạn về nợ là gì?",
    options: [
      { text: "Không vay là tốt nhất", type: "A" },
      { text: "Vay có kế hoạch trả", type: "B" },
      { text: "Nợ là một phần cuộc sống", type: "C" },
      { text: "Chưa rút ra bài học gì", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người ghét nợ",
    emoji: "🚫",
    description: "Bạn có nguyên tắc nghiêm ngặt về nợ nần. Tránh vay nợ bằng mọi giá và nếu có thì trả càng nhanh càng tốt. Tài chính của bạn rất an toàn.",
    traits: ["Kỷ luật", "Thận trọng", "An toàn", "Có nguyên tắc"],
    strengths: ["Tài chính ổn định", "Không lo nợ", "Ngủ ngon giấc"],
    weaknesses: ["Đôi khi bỏ lỡ cơ hội", "Quá cứng nhắc"],
    tips: ["Có những khoản nợ tốt giúp phát triển", "Linh hoạt hơn một chút"],
  },
  B: {
    type: "B",
    title: "Người quản lý nợ thông minh",
    emoji: "📋",
    description: "Bạn hiểu rằng không phải mọi khoản nợ đều xấu. Biết phân biệt nợ tốt nợ xấu và có kế hoạch quản lý hợp lý. Đây là cách tiếp cận khôn ngoan.",
    traits: ["Thông minh", "Có kế hoạch", "Cân bằng", "Chủ động"],
    strengths: ["Quản lý tốt", "Tận dụng đòn bẩy", "Kiểm soát được"],
    weaknesses: ["Có thể chủ quan", "Cần theo dõi thường xuyên"],
    tips: ["Tiếp tục duy trì kế hoạch", "Review định kỳ các khoản nợ"],
  },
  C: {
    type: "C",
    title: "Người có nợ bị động",
    emoji: "😰",
    description: "Bạn đang có nợ và chưa có kế hoạch rõ ràng để thoát ra. Việc để nợ kéo dài có thể ảnh hưởng đến tài chính tương lai. Cần hành động sớm.",
    traits: ["Bị động", "Thiếu kế hoạch", "Lo lắng", "Cần cải thiện"],
    strengths: ["Vẫn còn kiểm soát", "Chưa quá nghiêm trọng"],
    weaknesses: ["Không có lộ trình", "Nợ có thể tăng"],
    tips: ["Lập kế hoạch trả nợ ngay", "Tập trung trả nợ lãi cao trước"],
  },
  D: {
    type: "D",
    title: "Người cần cảnh báo tài chính",
    emoji: "⚠️",
    description: "Bạn đang có vấn đề nghiêm trọng với nợ nần. Việc né tránh và tiếp tục vay sẽ chỉ làm mọi thứ tệ hơn. Cần thay đổi ngay lập tức!",
    traits: ["Né tránh", "Thiếu kiểm soát", "Nguy hiểm", "Cần giúp đỡ"],
    strengths: ["Có thể thay đổi nếu muốn", "Còn cơ hội sửa sai"],
    weaknesses: ["Nợ chồng nợ", "Có thể mất kiểm soát"],
    tips: ["Đối mặt với thực tế", "Tìm kiếm tư vấn tài chính", "Ngừng vay thêm"],
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
