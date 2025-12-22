// Cách xử sự họp lớp
// Khám phá cách bạn xử sự khi đi họp lớp

export const questions = [
  {
    id: 1,
    question: "Khi có thông báo họp lớp, bạn phản ứng thế nào?",
    options: [
      { text: "Háo hức, đăng ký tham gia ngay", type: "A" },
      { text: "Xem danh sách ai đi rồi quyết định", type: "B" },
      { text: "Phân vân, không biết có nên đi không", type: "C" },
      { text: "Từ chối, không muốn gặp lại", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Trước khi đi họp lớp, bạn?",
    options: [
      { text: "Ôn lại kỷ niệm, xem ảnh cũ", type: "A" },
      { text: "Chuẩn bị trang phục đẹp nhất", type: "B" },
      { text: "Nghĩ xem sẽ nói gì về bản thân", type: "C" },
      { text: "Không chuẩn bị gì đặc biệt", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Trong buổi họp lớp, bạn thường?",
    options: [
      { text: "Đi vòng quanh, chào hỏi mọi người", type: "A" },
      { text: "Ngồi với nhóm bạn thân cũ", type: "B" },
      { text: "Quan sát, ít nói", type: "C" },
      { text: "Check phone, chờ về", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi được hỏi 'Giờ làm gì?', bạn?",
    options: [
      { text: "Kể chi tiết về công việc hiện tại", type: "A" },
      { text: "Nói ngắn gọn, không khoe khoang", type: "B" },
      { text: "Nói chung chung, tránh hỏi lại", type: "C" },
      { text: "Không thoải mái khi bị hỏi", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Gặp người từng có mâu thuẫn, bạn?",
    options: [
      { text: "Chào hỏi bình thường, bỏ qua quá khứ", type: "A" },
      { text: "Gật đầu chào, không nói chuyện nhiều", type: "B" },
      { text: "Tránh mặt, không muốn gặp", type: "C" },
      { text: "Vẫn còn khó chịu, thể hiện ra ngoài", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi thấy bạn cũ thay đổi (thành công/thất bại), bạn?",
    options: [
      { text: "Vui mừng hoặc thông cảm chân thành", type: "A" },
      { text: "Bình thường, không so sánh", type: "B" },
      { text: "Trong lòng có chút so sánh", type: "C" },
      { text: "Không quan tâm", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn có tham gia đóng góp tiền tổ chức không?",
    options: [
      { text: "Có, đóng nhiều hơn để hỗ trợ", type: "A" },
      { text: "Đóng đúng mức yêu cầu", type: "B" },
      { text: "Đóng nhưng thấy phiền", type: "C" },
      { text: "Ngại đóng góp", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Về chụp ảnh trong buổi họp lớp, bạn?",
    options: [
      { text: "Tích cực chụp, pose nhiều kiểu", type: "A" },
      { text: "Chụp ảnh nhóm, ít selfie", type: "B" },
      { text: "Tránh camera, không thích chụp", type: "C" },
      { text: "Chỉ chụp khi bị bắt buộc", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Sau buổi họp lớp, bạn có giữ liên lạc không?",
    options: [
      { text: "Có, add Facebook, Zalo mọi người", type: "A" },
      { text: "Chỉ giữ liên lạc với người thân", type: "B" },
      { text: "Không liên lạc, đợi lần họp sau", type: "C" },
      { text: "Không có ý định giữ liên lạc", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn thường về vào lúc nào?",
    options: [
      { text: "Ở đến cuối, đi 2nd round", type: "A" },
      { text: "Khi buổi họp chính kết thúc", type: "B" },
      { text: "Sớm hơn mọi người", type: "C" },
      { text: "Lén về khi có cơ hội", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn nghĩ gì về việc họp lớp?",
    options: [
      { text: "Rất ý nghĩa, nên tổ chức thường xuyên", type: "A" },
      { text: "Tốt, nhưng 1-2 năm/lần là đủ", type: "B" },
      { text: "Không cần thiết lắm", type: "C" },
      { text: "Lãng phí thời gian và tiền bạc", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Điều bạn mong đợi nhất khi họp lớp?",
    options: [
      { text: "Gặp lại bạn cũ, ôn kỷ niệm", type: "A" },
      { text: "Xem mọi người thay đổi thế nào", type: "B" },
      { text: "Xã giao, giữ mối quan hệ", type: "C" },
      { text: "Không mong đợi gì", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Linh hồn của lớp",
    emoji: "🎊",
    description: "Bạn là người hào hứng nhất khi họp lớp! Mong chờ gặp lại bạn bè, ôn kỷ niệm và tạo thêm kỷ niệm mới. Bạn là sợi dây kết nối cả lớp.",
    traits: ["Hào hứng", "Kết nối", "Nhiệt tình", "Trân trọng quá khứ"],
    strengths: ["Giữ gìn tình bạn", "Tạo không khí vui vẻ", "Được mọi người yêu mến"],
    weaknesses: ["Có thể quá nostalgic", "Đôi khi kỳ vọng quá cao"],
    tips: ["Chấp nhận thay đổi", "Hiểu rằng không phải ai cũng hào hứng như mình"],
  },
  B: {
    type: "B",
    title: "Người tham dự có chọn lọc",
    emoji: "🤝",
    description: "Bạn tham gia họp lớp một cách có chọn lọc. Đến để gặp những người quan trọng, không quá cuồng nhiệt cũng không quá xa cách.",
    traits: ["Cân bằng", "Chọn lọc", "Không extreme", "Giữ khoảng cách"],
    strengths: ["Biết mình muốn gì", "Không lãng phí thời gian", "Thoải mái"],
    weaknesses: ["Có thể bỏ lỡ kết nối mới", "Thiếu nhiệt tình"],
    tips: ["Thử cởi mở hơn", "Cho người khác cơ hội"],
  },
  C: {
    type: "C",
    title: "Người quan sát thầm lặng",
    emoji: "👀",
    description: "Bạn đến họp lớp với tâm thế quan sát hơn là tham gia. Có thể hơi ngại ngùng hoặc không còn kết nối với bạn cũ như xưa.",
    traits: ["Quan sát", "Ít nói", "Ngại giao tiếp", "Kín đáo"],
    strengths: ["Không tạo drama", "Quan sát tốt", "Không giả tạo"],
    weaknesses: ["Có thể bị cô lập", "Không tận hưởng được"],
    tips: ["Chủ động hơn", "Bắt chuyện với 1-2 người thân"],
  },
  D: {
    type: "D",
    title: "Người không muốn họp lớp",
    emoji: "🚪",
    description: "Họp lớp không phải sở thích của bạn. Có thể vì không còn kết nối, hoặc đơn giản không thích nhìn lại quá khứ. Bạn sống cho hiện tại.",
    traits: ["Không nostalgic", "Hướng về tương lai", "Độc lập", "Không quan tâm"],
    strengths: ["Không sống trong quá khứ", "Biết mình muốn gì"],
    weaknesses: ["Mất kết nối", "Có thể bỏ lỡ cơ hội"],
    tips: ["Thử đi 1 lần với tinh thần mở", "Không phải chứng minh gì với ai"],
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
