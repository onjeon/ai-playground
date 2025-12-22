// Phong cách đi ô tô
// Khám phá phong cách lái xe ô tô của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn lái xe ô tô như thế nào?",
    options: [
      { text: "Đúng tốc độ cho phép, an toàn", type: "A" },
      { text: "Hơi nhanh, nhưng vẫn kiểm soát", type: "B" },
      { text: "Nhanh chậm tùy đường, linh hoạt", type: "C" },
      { text: "Chậm rãi, tận hưởng hành trình", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Điều bạn quan tâm nhất khi mua xe?",
    options: [
      { text: "An toàn, bền bỉ, tiết kiệm xăng", type: "A" },
      { text: "Công suất, tốc độ, hiệu năng", type: "B" },
      { text: "Thiết kế đẹp, nội thất sang", type: "C" },
      { text: "Tiện nghi, rộng rãi cho gia đình", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn sử dụng còi xe khi nào?",
    options: [
      { text: "Chỉ khi thật sự cần thiết", type: "A" },
      { text: "Thường xuyên khi cần vượt", type: "B" },
      { text: "Tùy tình huống", type: "C" },
      { text: "Rất ít, ngại làm phiền người khác", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi lái xe đường dài, bạn?",
    options: [
      { text: "Nghỉ ngơi đều đặn, không ép sức", type: "A" },
      { text: "Chạy liền một mạch cho nhanh", type: "B" },
      { text: "Dừng ngắm cảnh, ăn uống dọc đường", type: "C" },
      { text: "Đổi tài xế, chia sẻ lái", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Trong xe bạn có những gì?",
    options: [
      { text: "Đủ đồ cứu hộ, bình chữa cháy", type: "A" },
      { text: "Bộ loa xịn, nước hoa xe", type: "B" },
      { text: "Dashcam, thiết bị công nghệ", type: "C" },
      { text: "Đồ cho trẻ em, gia đình", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn xử lý va chạm nhỏ thế nào?",
    options: [
      { text: "Gọi bảo hiểm, làm đúng quy trình", type: "A" },
      { text: "Thương lượng nhanh với người kia", type: "B" },
      { text: "Chụp ảnh lưu bằng chứng trước", type: "C" },
      { text: "Nhường nhịn, không muốn rắc rối", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn đỗ xe như thế nào?",
    options: [
      { text: "Cẩn thận, đỗ đúng vạch quy định", type: "A" },
      { text: "Nhanh gọn, kỹ năng đỗ tốt", type: "B" },
      { text: "Dùng camera lùi, cảm biến", type: "C" },
      { text: "Từ từ, thà chậm còn hơn va", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn có nhường đường cho xe khác không?",
    options: [
      { text: "Có, tuân thủ quyền ưu tiên", type: "A" },
      { text: "Tùy tình huống, không nhường vô lý", type: "B" },
      { text: "Có, nhường cho thuận tiện cả hai", type: "C" },
      { text: "Luôn nhường, không thích tranh chấp", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn rửa xe và bảo dưỡng xe thế nào?",
    options: [
      { text: "Định kỳ đúng lịch, đầy đủ", type: "A" },
      { text: "Khi nào xe bẩn quá thì rửa", type: "B" },
      { text: "Tự rửa, chăm sóc xe cẩn thận", type: "C" },
      { text: "Mang đi tiệm cho nhanh", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn thích lái xe ở đâu nhất?",
    options: [
      { text: "Đường cao tốc, ít kẹt xe", type: "A" },
      { text: "Đường đèo núi, thử thách", type: "B" },
      { text: "Trong thành phố, quen đường", type: "C" },
      { text: "Đường ngoại ô, yên tĩnh", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn có cho người khác mượn xe không?",
    options: [
      { text: "Không, xe là tài sản quý", type: "A" },
      { text: "Có, nếu là người tin tưởng", type: "B" },
      { text: "Tùy trường hợp cấp bách", type: "C" },
      { text: "Có, sẵn lòng giúp đỡ", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Điều bạn thích nhất khi lái xe?",
    options: [
      { text: "Cảm giác an toàn, kiểm soát", type: "A" },
      { text: "Cảm giác tốc độ, mạnh mẽ", type: "B" },
      { text: "Tự do đi bất cứ đâu", type: "C" },
      { text: "Không gian riêng tư, thoải mái", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Tài xế mẫu mực",
    emoji: "🚗",
    description: "Bạn là tài xế an toàn, tuân thủ luật lệ và có trách nhiệm. Bạn là người đáng tin cậy khi cầm vô lăng.",
    traits: ["An toàn", "Có trách nhiệm", "Tuân thủ", "Đáng tin cậy"],
    strengths: ["Ít tai nạn", "Được tin tưởng", "Bảo vệ mọi người trên xe"],
    weaknesses: ["Có thể hơi chậm", "Đôi khi quá thận trọng"],
    tips: ["Giữ vững phong cách lái an toàn", "Chia sẻ kinh nghiệm với người khác"],
  },
  B: {
    type: "B",
    title: "Tài xế đam mê tốc độ",
    emoji: "🏎️",
    description: "Bạn yêu thích cảm giác lái xe và tốc độ. Bạn tự tin với kỹ năng của mình nhưng cần cẩn thận hơn.",
    traits: ["Tự tin", "Kỹ năng cao", "Đam mê", "Mạo hiểm"],
    strengths: ["Phản xạ tốt", "Xử lý tình huống nhanh", "Kỹ năng lái xuất sắc"],
    weaknesses: ["Có thể vi phạm tốc độ", "Rủi ro cao"],
    tips: ["An toàn quan trọng hơn tốc độ", "Chạy nhanh ở đường đua thôi"],
  },
  C: {
    type: "C",
    title: "Tài xế công nghệ",
    emoji: "🚘",
    description: "Bạn là người yêu thích công nghệ và tận dụng mọi tiện ích hiện đại khi lái xe. Bạn thông minh và biết cách tối ưu hóa trải nghiệm.",
    traits: ["Thông minh", "Hiện đại", "Tối ưu", "Cập nhật"],
    strengths: ["Tận dụng công nghệ", "Luôn cập nhật", "An toàn với hỗ trợ kỹ thuật"],
    weaknesses: ["Phụ thuộc công nghệ", "Chi phí cao"],
    tips: ["Vẫn cần kỹ năng lái cơ bản", "Công nghệ hỗ trợ, không thay thế"],
  },
  D: {
    type: "D",
    title: "Tài xế gia đình",
    emoji: "🚙",
    description: "Bạn lái xe vì gia đình và người thân. An toàn và thoải mái cho mọi người là ưu tiên hàng đầu của bạn.",
    traits: ["Chu đáo", "Ấm áp", "An toàn", "Quan tâm"],
    strengths: ["Đảm bảo an toàn gia đình", "Lái xe thoải mái", "Không gây căng thẳng"],
    weaknesses: ["Có thể quá thận trọng", "Chậm trong tình huống cần nhanh"],
    tips: ["Thỉnh thoảng lái xe một mình thư giãn", "Giữ vững phong cách an toàn"],
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
