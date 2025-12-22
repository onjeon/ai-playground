// Kiểu dân công sở Việt Nam
// Khám phá phong cách làm việc văn phòng của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn thường đến công ty lúc mấy giờ?",
    options: [
      { text: "Sớm 15-30 phút để chuẩn bị", type: "A" },
      { text: "Đúng giờ quy định", type: "B" },
      { text: "Đến sát giờ, đôi khi trễ chút", type: "C" },
      { text: "Làm việc linh hoạt, không quan trọng giờ giấc", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bữa trưa ở công ty, bạn?",
    options: [
      { text: "Mang cơm nhà đi ăn", type: "A" },
      { text: "Ăn cùng đồng nghiệp ở quán gần", type: "B" },
      { text: "Đặt ship về ăn tại bàn", type: "C" },
      { text: "Nhịn hoặc ăn vặt qua loa", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Quan hệ với sếp của bạn?",
    options: [
      { text: "Tôn trọng, làm việc chuyên nghiệp", type: "A" },
      { text: "Thân thiện, hay nói chuyện", type: "B" },
      { text: "Bình thường, chỉ trao đổi công việc", type: "C" },
      { text: "Tránh gặp mặt nếu có thể", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi có việc gấp ngoài giờ?",
    options: [
      { text: "Ở lại làm, công việc là ưu tiên", type: "A" },
      { text: "Làm nếu thực sự cần thiết", type: "B" },
      { text: "Từ chối khéo, có việc riêng", type: "C" },
      { text: "Tắt máy, đã hết giờ làm việc", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn xử lý email công việc thế nào?",
    options: [
      { text: "Trả lời ngay lập tức", type: "A" },
      { text: "Xử lý theo độ quan trọng", type: "B" },
      { text: "Để dồn rồi trả lời một lượt", type: "C" },
      { text: "Hay quên check, phải nhắc mới thấy", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Trang phục đi làm của bạn?",
    options: [
      { text: "Đồng phục hoặc vest lịch sự", type: "A" },
      { text: "Smart casual, chỉn chu", type: "B" },
      { text: "Thoải mái nhưng vẫn gọn gàng", type: "C" },
      { text: "Mặc gì tiện nấy", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Trong cuộc họp, bạn thường?",
    options: [
      { text: "Phát biểu, đóng góp ý kiến", type: "A" },
      { text: "Lắng nghe và ghi chép", type: "B" },
      { text: "Ngồi im, chờ họp xong", type: "C" },
      { text: "Lén lướt điện thoại dưới bàn", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn hay tám chuyện với đồng nghiệp?",
    options: [
      { text: "Ít, tập trung vào công việc", type: "A" },
      { text: "Có, giờ nghỉ trưa hoặc tea break", type: "B" },
      { text: "Hay tám, giúp giảm stress", type: "C" },
      { text: "Là nguồn tin chính của công ty", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi đồng nghiệp nhờ giúp việc?",
    options: [
      { text: "Giúp ngay nếu có thể", type: "A" },
      { text: "Xem xét rồi mới nhận", type: "B" },
      { text: "Từ chối nếu bận việc mình", type: "C" },
      { text: "Hơi khó chịu, mỗi người làm việc mình", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn nghĩ gì về việc làm thêm giờ?",
    options: [
      { text: "Bình thường, là trách nhiệm", type: "A" },
      { text: "Chấp nhận nếu có OT", type: "B" },
      { text: "Hạn chế, work-life balance quan trọng", type: "C" },
      { text: "Không bao giờ, đã hết giờ là hết", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bàn làm việc của bạn?",
    options: [
      { text: "Gọn gàng, ngăn nắp", type: "A" },
      { text: "Có trang trí cá nhân nhỏ", type: "B" },
      { text: "Hơi lộn xộn nhưng biết chỗ nào", type: "C" },
      { text: "Bừa bộn, cần gì tìm lâu", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Điều bạn thích nhất ở công việc?",
    options: [
      { text: "Cơ hội phát triển và học hỏi", type: "A" },
      { text: "Đồng nghiệp thân thiện", type: "B" },
      { text: "Lương thưởng ổn định", type: "C" },
      { text: "Được làm từ xa/linh hoạt", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Nhân viên mẫu mực",
    emoji: "💼",
    description: "Bạn là nhân viên trong mơ của mọi sếp! Chuyên nghiệp, có trách nhiệm và luôn đặt công việc lên hàng đầu.",
    traits: ["Chuyên nghiệp", "Có trách nhiệm", "Đáng tin cậy", "Chăm chỉ"],
    strengths: ["Được sếp tin tưởng", "Thăng tiến nhanh", "Uy tín với đồng nghiệp"],
    weaknesses: ["Có thể bị lợi dụng", "Ít thời gian cho bản thân"],
    tips: ["Học cách nói không", "Cân bằng công việc và cuộc sống"],
  },
  B: {
    type: "B",
    title: "Nhân viên cân bằng",
    emoji: "☕",
    description: "Bạn biết cách làm việc hiệu quả mà vẫn duy trì mối quan hệ tốt với đồng nghiệp. Bạn là người tạo không khí tích cực cho văn phòng.",
    traits: ["Cân bằng", "Hòa đồng", "Linh hoạt", "Thân thiện"],
    strengths: ["Có nhiều mối quan hệ tốt", "Làm việc nhóm hiệu quả", "Không stress"],
    weaknesses: ["Có thể không nổi bật", "Đôi khi bị phân tán"],
    tips: ["Thể hiện năng lực nhiều hơn", "Đặt mục tiêu cao hơn"],
  },
  C: {
    type: "C",
    title: "Nhân viên thoải mái",
    emoji: "🌴",
    description: "Bạn coi trọng cuộc sống cá nhân và không để công việc chiếm hết thời gian. Bạn làm việc đủ tốt nhưng không phải workaholic.",
    traits: ["Thoải mái", "Work-life balance", "Thực tế", "Có ranh giới"],
    strengths: ["Cuộc sống cân bằng", "Ít stress", "Có thời gian cho bản thân"],
    weaknesses: ["Có thể thiếu động lực", "Khó thăng tiến"],
    tips: ["Cố gắng thêm chút nữa", "Tìm động lực trong công việc"],
  },
  D: {
    type: "D",
    title: "Nhân viên tự do",
    emoji: "🦋",
    description: "Bạn không thích bị gò bó trong khuôn khổ công sở truyền thống. Bạn làm việc theo cách riêng và coi trọng tự do cá nhân.",
    traits: ["Tự do", "Độc lập", "Không theo khuôn mẫu", "Sáng tạo"],
    strengths: ["Có góc nhìn khác biệt", "Không bị áp lực", "Sáng tạo"],
    weaknesses: ["Khó hợp với văn hóa công sở", "Có thể gặp khó khăn với sếp"],
    tips: ["Tìm công việc phù hợp hơn", "Thử làm freelance hoặc startup"],
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
