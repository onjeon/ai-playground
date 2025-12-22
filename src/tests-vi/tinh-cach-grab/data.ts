// Tính cách dùng Grab/Be
// Khám phá tính cách của bạn qua cách bạn sử dụng dịch vụ gọi xe

export const questions = [
  {
    id: 1,
    question: "Bạn thường dùng dịch vụ gì nhất?",
    options: [
      { text: "GrabBike - nhanh gọn", type: "A" },
      { text: "GrabCar - thoải mái, an toàn", type: "B" },
      { text: "GrabFood - đặt đồ ăn", type: "C" },
      { text: "Tất cả đều dùng", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Khi gọi xe, bạn thường?",
    options: [
      { text: "Đặt trước 5-10 phút", type: "A" },
      { text: "Đặt ngay khi cần đi", type: "B" },
      { text: "Đặt hẹn giờ từ trước", type: "C" },
      { text: "Tùy tình huống", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn thường nói chuyện với tài xế không?",
    options: [
      { text: "Hay nói chuyện, vui lắm", type: "A" },
      { text: "Chào hỏi lịch sự thôi", type: "B" },
      { text: "Hiếm khi, đeo tai nghe", type: "C" },
      { text: "Tùy tài xế có thân thiện không", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi giá surge cao, bạn sẽ?",
    options: [
      { text: "Đợi giá xuống rồi đặt", type: "A" },
      { text: "Đặt luôn, cần đi gấp", type: "B" },
      { text: "Thử app khác xem giá", type: "C" },
      { text: "Tìm phương tiện khác", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn đánh giá tài xế như thế nào?",
    options: [
      { text: "Luôn 5 sao nếu không có vấn đề gì", type: "A" },
      { text: "Đánh giá công bằng theo trải nghiệm", type: "B" },
      { text: "Thường quên đánh giá", type: "C" },
      { text: "Chỉ đánh giá khi có vấn đề", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn có dùng GrabPay/ví điện tử không?",
    options: [
      { text: "Có, tiện lợi và có ưu đãi", type: "A" },
      { text: "Thỉnh thoảng", type: "B" },
      { text: "Không, thích trả tiền mặt", type: "C" },
      { text: "Có nhưng hay hết tiền", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Khi tài xế đến sai điểm hẹn, bạn?",
    options: [
      { text: "Gọi điện hướng dẫn ngay", type: "A" },
      { text: "Đi bộ đến chỗ tài xế", type: "B" },
      { text: "Nhắn tin hướng dẫn", type: "C" },
      { text: "Hủy chuyến, đặt xe khác", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn có hay tip cho tài xế không?",
    options: [
      { text: "Có, thường xuyên", type: "A" },
      { text: "Khi dịch vụ tốt", type: "B" },
      { text: "Hiếm khi", type: "C" },
      { text: "Không bao giờ", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi đặt GrabFood, bạn thường?",
    options: [
      { text: "Đặt đồ ăn yêu thích", type: "A" },
      { text: "Thử quán mới", type: "B" },
      { text: "Xem khuyến mãi rồi đặt", type: "C" },
      { text: "Đặt theo gợi ý của app", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn có hay dùng Grab subscription không?",
    options: [
      { text: "Có, tiết kiệm được nhiều", type: "A" },
      { text: "Đang cân nhắc", type: "B" },
      { text: "Không, dùng không đủ nhiều", type: "C" },
      { text: "Không biết có dịch vụ này", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Khi xe đến, bạn thường?",
    options: [
      { text: "Đã đứng sẵn ở điểm hẹn", type: "A" },
      { text: "Tài xế phải đợi một chút", type: "B" },
      { text: "Hủy nếu chờ lâu quá", type: "C" },
      { text: "Tùy tình huống", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bạn nghĩ gì về dịch vụ gọi xe?",
    options: [
      { text: "Tiện lợi, không thể thiếu", type: "A" },
      { text: "Tốt nhưng đắt", type: "B" },
      { text: "Dùng khi cần thiết thôi", type: "C" },
      { text: "Thích tự đi xe hơn", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Khách hàng VIP",
    emoji: "⭐",
    description: "Bạn là khách hàng thường xuyên và hiểu rõ mọi tính năng của app. Bạn biết cách tận dụng ưu đãi, thanh toán tiện lợi và luôn sẵn sàng khi tài xế đến.",
    traits: ["Hiểu biết", "Tiện lợi", "Thân thiện", "Tổ chức tốt"],
    strengths: ["Tận dụng tốt dịch vụ", "Tiết kiệm thời gian", "Được tài xế yêu quý"],
    weaknesses: ["Phụ thuộc vào app", "Chi tiêu nhiều"],
    tips: ["Thử đi phương tiện công cộng", "Đặt ngân sách di chuyển"],
  },
  B: {
    type: "B",
    title: "Người công bằng",
    emoji: "⚖️",
    description: "Bạn là người sử dụng dịch vụ một cách công bằng và hợp lý. Bạn biết cách cân bằng giữa tiện lợi và chi phí, đánh giá trung thực và lịch sự với tài xế.",
    traits: ["Công bằng", "Lịch sự", "Cân bằng", "Hợp lý"],
    strengths: ["Đánh giá công tâm", "Không lãng phí", "Được tôn trọng"],
    weaknesses: ["Đôi khi quá kỹ", "Chờ đợi lâu để tiết kiệm"],
    tips: ["Linh hoạt hơn khi cần thiết", "Thử các tính năng mới"],
  },
  C: {
    type: "C",
    title: "Người tiết kiệm",
    emoji: "💰",
    description: "Bạn là người biết cách tiết kiệm và chỉ dùng dịch vụ khi thực sự cần thiết. Bạn so sánh giá, đợi hết surge và tìm mọi cách để giảm chi phí.",
    traits: ["Tiết kiệm", "Thông minh", "Kiên nhẫn", "Tự lập"],
    strengths: ["Quản lý chi tiêu tốt", "Không phung phí", "Độc lập"],
    weaknesses: ["Đôi khi mất thời gian", "Bỏ lỡ cơ hội tiện lợi"],
    tips: ["Đừng để tiết kiệm ảnh hưởng công việc", "Cân nhắc giá trị thời gian"],
  },
  D: {
    type: "D",
    title: "Người tự do",
    emoji: "🏍️",
    description: "Bạn là người thích tự do và linh hoạt. Bạn dùng Grab khi cần nhưng cũng thích tự di chuyển. Bạn không phụ thuộc vào app và có nhiều lựa chọn di chuyển.",
    traits: ["Tự do", "Linh hoạt", "Độc lập", "Đa dạng"],
    strengths: ["Không phụ thuộc", "Nhiều lựa chọn", "Tự chủ"],
    weaknesses: ["Đôi khi không tiện lợi", "Khó trong trường hợp khẩn cấp"],
    tips: ["Cài sẵn app để dùng khi cần", "Tận dụng ưu đãi người dùng mới"],
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
