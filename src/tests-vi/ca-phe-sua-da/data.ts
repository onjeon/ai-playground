// Kiểu Cà Phê Sữa Đá
// Khám phá tính cách của bạn qua cách uống cà phê sữa đá

export const questions = [
  {
    id: 1,
    question: "Bạn thích cà phê sữa đá ở đâu nhất?",
    options: [
      { text: "Quán cóc vỉa hè, ngồi ghế nhựa", type: "A" },
      { text: "Quán cà phê có máy lạnh, wifi", type: "B" },
      { text: "Mua mang về, uống tại văn phòng", type: "C" },
      { text: "Tự pha ở nhà cho tiết kiệm", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thường gọi cà phê sữa đá như thế nào?",
    options: [
      { text: "Cà phê sữa đá đậm, ít sữa", type: "A" },
      { text: "Cà phê sữa đá chuẩn, vừa phải", type: "B" },
      { text: "Cà phê sữa đá nhiều sữa, ít đắng", type: "C" },
      { text: "Thay đổi tùy tâm trạng mỗi ngày", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Buổi sáng không có cà phê sữa đá, bạn?",
    options: [
      { text: "Không thể hoạt động, phải tìm ngay", type: "A" },
      { text: "Khó chịu nhưng vẫn làm việc được", type: "B" },
      { text: "Uống thứ khác thay thế", type: "C" },
      { text: "Không sao, có hay không cũng được", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn thường uống cà phê sữa đá khi nào?",
    options: [
      { text: "Sáng sớm, vừa ngủ dậy", type: "A" },
      { text: "Giữa buổi sáng, sau khi đến công ty", type: "B" },
      { text: "Chiều, khi cần tỉnh táo", type: "C" },
      { text: "Bất cứ lúc nào thích", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn đi uống cà phê cùng ai?",
    options: [
      { text: "Một mình, để suy nghĩ", type: "A" },
      { text: "Với đồng nghiệp, bàn công việc", type: "B" },
      { text: "Với bạn bè, tán gẫu", type: "C" },
      { text: "Với người yêu, lãng mạn", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi quán hết cà phê sữa đá, bạn?",
    options: [
      { text: "Đi quán khác, không thể thiếu", type: "A" },
      { text: "Gọi cà phê đen thay thế", type: "B" },
      { text: "Uống nước ép hoặc trà", type: "C" },
      { text: "Chấp nhận, uống gì cũng được", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn thường ngồi quán cà phê bao lâu?",
    options: [
      { text: "5-10 phút, uống nhanh rồi đi", type: "A" },
      { text: "30 phút - 1 tiếng, vừa uống vừa làm việc", type: "B" },
      { text: "1-2 tiếng, tán gẫu với bạn", type: "C" },
      { text: "Cả buổi, nhâm nhi thưởng thức", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn làm gì trong lúc uống cà phê?",
    options: [
      { text: "Đọc tin tức, lướt điện thoại", type: "A" },
      { text: "Làm việc trên laptop", type: "B" },
      { text: "Trò chuyện với người bên cạnh", type: "C" },
      { text: "Ngắm người qua lại, suy ngẫm", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Cà phê sữa đá với bạn là?",
    options: [
      { text: "Năng lượng để bắt đầu ngày mới", type: "A" },
      { text: "Thói quen không thể thiếu", type: "B" },
      { text: "Cơ hội gặp gỡ bạn bè", type: "C" },
      { text: "Khoảnh khắc thư giãn", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Giá một ly cà phê sữa đá bạn chấp nhận được?",
    options: [
      { text: "15-20k, quán cóc bình dân", type: "A" },
      { text: "25-35k, quán tầm trung", type: "B" },
      { text: "40-60k, quán sang trọng", type: "C" },
      { text: "Bao nhiêu cũng được, miễn ngon", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn có thử cà phê sữa đá ở các vùng miền khác nhau không?",
    options: [
      { text: "Có, và thấy khác biệt rõ rệt", type: "A" },
      { text: "Có, nhưng vẫn thích quán quen", type: "B" },
      { text: "Thỉnh thoảng, khi đi du lịch", type: "C" },
      { text: "Không quan tâm, uống được là được", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Nếu phải bỏ cà phê sữa đá một tháng, bạn?",
    options: [
      { text: "Không thể, đây là cuộc sống", type: "A" },
      { text: "Khó khăn nhưng cố gắng được", type: "B" },
      { text: "Thử thách thú vị, làm được", type: "C" },
      { text: "Không sao, có nhiều thứ khác", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Dân Nghiện Cà Phê Chính Hiệu",
    emoji: "☕",
    description: "Cà phê sữa đá là máu, là hơi thở của bạn! Bạn không thể bắt đầu ngày mới mà thiếu một ly cà phê sữa đá đậm đà. Bạn là người năng động, quyết đoán và có cá tính mạnh.",
    traits: ["Nghiện cà phê", "Năng động", "Quyết đoán", "Có cá tính"],
    strengths: ["Luôn tràn đầy năng lượng", "Làm việc hiệu quả", "Tập trung cao"],
    weaknesses: ["Phụ thuộc caffeine", "Hay cáu khi thiếu cà phê"],
    tips: ["Giảm bớt lượng caffeine dần", "Uống nhiều nước"],
  },
  B: {
    type: "B",
    title: "Dân Văn Phòng Chuẩn",
    emoji: "💼",
    description: "Cà phê sữa đá là bạn đồng hành trong công việc! Bạn thường kết hợp uống cà phê với làm việc, họp hành hoặc networking. Bạn là người chuyên nghiệp, có kế hoạch và đáng tin cậy.",
    traits: ["Chuyên nghiệp", "Có kế hoạch", "Hiệu quả", "Đáng tin cậy"],
    strengths: ["Quản lý thời gian tốt", "Làm việc có hệ thống", "Networking tốt"],
    weaknesses: ["Đôi khi quá bận rộn", "Ít thời gian thư giãn"],
    tips: ["Dành thời gian nghỉ ngơi", "Đừng quên enjoy cuộc sống"],
  },
  C: {
    type: "C",
    title: "Dân Xã Giao Thích Cà Phê",
    emoji: "🗣️",
    description: "Cà phê sữa đá là cầu nối xã hội của bạn! Bạn uống cà phê chủ yếu để gặp gỡ bạn bè, tán gẫu và networking. Bạn là người thân thiện, hòa đồng và có nhiều mối quan hệ.",
    traits: ["Thân thiện", "Hòa đồng", "Xã giao tốt", "Vui vẻ"],
    strengths: ["Có nhiều bạn bè", "Giao tiếp tốt", "Tạo không khí vui vẻ"],
    weaknesses: ["Hay bị cuốn vào chuyện", "Đôi khi mất tập trung"],
    tips: ["Cân bằng giữa xã giao và công việc", "Dành thời gian cho bản thân"],
  },
  D: {
    type: "D",
    title: "Người Thưởng Thức Cuộc Sống",
    emoji: "🌿",
    description: "Cà phê sữa đá là nghệ thuật sống của bạn! Bạn uống cà phê để thư giãn, ngắm nhìn cuộc sống và suy ngẫm. Bạn là người sâu sắc, biết hưởng thụ và có tâm hồn nghệ sĩ.",
    traits: ["Sâu sắc", "Thư thái", "Nghệ sĩ", "Biết hưởng thụ"],
    strengths: ["Cân bằng cuộc sống", "Sáng tạo", "Không bị stress"],
    weaknesses: ["Đôi khi thiếu quyết đoán", "Hay mơ mộng"],
    tips: ["Đặt mục tiêu cụ thể hơn", "Hành động nhiều hơn"],
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
