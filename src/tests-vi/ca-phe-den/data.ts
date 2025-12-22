// Kiểu Cà Phê Đen
// Khám phá tính cách của bạn qua cách uống cà phê đen

export const questions = [
  {
    id: 1,
    question: "Bạn uống cà phê đen ở nhiệt độ nào?",
    options: [
      { text: "Nóng bỏng, mới ngon", type: "A" },
      { text: "Ấm vừa phải", type: "B" },
      { text: "Đá lạnh sảng khoái", type: "C" },
      { text: "Tùy thời tiết và tâm trạng", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thích cà phê đen pha theo kiểu nào?",
    options: [
      { text: "Phin truyền thống Việt Nam", type: "A" },
      { text: "Espresso kiểu Ý", type: "B" },
      { text: "Pour over, drip coffee", type: "C" },
      { text: "Cà phê gói, tiện lợi là được", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn uống cà phê đen vào lúc nào?",
    options: [
      { text: "Sáng sớm, khi mặt trời chưa lên", type: "A" },
      { text: "Sau bữa sáng, chuẩn bị làm việc", type: "B" },
      { text: "Buổi chiều, khi cần năng lượng", type: "C" },
      { text: "Tối khuya, thức đêm làm việc", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Độ đậm của cà phê đen bạn thích?",
    options: [
      { text: "Rất đậm, đắng nghét", type: "A" },
      { text: "Đậm vừa, cân bằng", type: "B" },
      { text: "Nhạt một chút, dễ uống", type: "C" },
      { text: "Thay đổi tùy tâm trạng", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn nghĩ gì về việc thêm đường vào cà phê đen?",
    options: [
      { text: "Tuyệt đối không, phá hỏng hương vị", type: "A" },
      { text: "Một chút cho bớt đắng", type: "B" },
      { text: "Ngọt vừa phải", type: "C" },
      { text: "Tùy loại cà phê và tâm trạng", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi uống cà phê đen, bạn thường?",
    options: [
      { text: "Suy nghĩ về công việc, kế hoạch", type: "A" },
      { text: "Thư giãn, không nghĩ gì", type: "B" },
      { text: "Đọc sách, báo, xem tin tức", type: "C" },
      { text: "Lướt mạng xã hội, giải trí", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn uống bao nhiêu ly cà phê đen mỗi ngày?",
    options: [
      { text: "3-4 ly hoặc hơn", type: "A" },
      { text: "2 ly, sáng và chiều", type: "B" },
      { text: "1 ly mỗi ngày", type: "C" },
      { text: "Không cố định, tùy ngày", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn chọn cà phê đen vì?",
    options: [
      { text: "Hương vị nguyên chất, mạnh mẽ", type: "A" },
      { text: "Ít calo, tốt cho sức khỏe", type: "B" },
      { text: "Thức tỉnh, tập trung hơn", type: "C" },
      { text: "Thói quen từ nhỏ", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn thưởng thức cà phê đen ở đâu?",
    options: [
      { text: "Quán cà phê quen, không gian yên tĩnh", type: "A" },
      { text: "Tại nhà, tự pha theo ý thích", type: "B" },
      { text: "Văn phòng, vừa uống vừa làm việc", type: "C" },
      { text: "Bất cứ đâu, miễn có cà phê", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn có quan tâm đến nguồn gốc cà phê không?",
    options: [
      { text: "Rất quan tâm, chỉ uống hạt chất lượng", type: "A" },
      { text: "Có, nhưng không quá khắt khe", type: "B" },
      { text: "Thỉnh thoảng tìm hiểu", type: "C" },
      { text: "Không quan tâm, ngon là được", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Cà phê đen với bạn là?",
    options: [
      { text: "Triết lý sống, nghệ thuật", type: "A" },
      { text: "Thói quen lành mạnh", type: "B" },
      { text: "Công cụ giúp làm việc hiệu quả", type: "C" },
      { text: "Thức uống yêu thích đơn thuần", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Nếu mời ai đó uống cà phê đen, đó sẽ là?",
    options: [
      { text: "Người có gu, hiểu biết", type: "A" },
      { text: "Đối tác kinh doanh", type: "B" },
      { text: "Bạn thân, để tâm sự", type: "C" },
      { text: "Bất cứ ai, miễn thích cà phê", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người Sành Cà Phê Đen",
    emoji: "☕",
    description: "Bạn là người sành điệu về cà phê đen thực thụ! Bạn coi trọng chất lượng, hương vị nguyên bản và có gu thưởng thức tinh tế. Bạn là người sâu sắc, có nguyên tắc và không chấp nhận sự tầm thường.",
    traits: ["Sành điệu", "Có nguyên tắc", "Sâu sắc", "Cầu toàn"],
    strengths: ["Gu thẩm mỹ cao", "Kiên định với giá trị", "Chất lượng là ưu tiên"],
    weaknesses: ["Đôi khi khó tính", "Khó hài lòng"],
    tips: ["Linh hoạt hơn trong cuộc sống", "Chấp nhận sự khác biệt"],
  },
  B: {
    type: "B",
    title: "Người Cân Bằng Sức Khỏe",
    emoji: "🌱",
    description: "Bạn uống cà phê đen vì lợi ích sức khỏe và sự cân bằng! Bạn biết cách chăm sóc bản thân, có lối sống lành mạnh và đưa ra những lựa chọn thông minh cho cuộc sống.",
    traits: ["Cân bằng", "Khoa học", "Chăm sóc bản thân", "Thông minh"],
    strengths: ["Lối sống lành mạnh", "Tự giác kỷ luật", "Quyết định thông minh"],
    weaknesses: ["Đôi khi quá nghiêm khắc", "Khó thả lỏng"],
    tips: ["Đôi khi hãy tự thưởng cho mình", "Không cần hoàn hảo mọi lúc"],
  },
  C: {
    type: "C",
    title: "Người Làm Việc Hiệu Quả",
    emoji: "💪",
    description: "Cà phê đen là nhiên liệu cho công việc của bạn! Bạn uống cà phê để tăng năng suất, tập trung và hoàn thành mục tiêu. Bạn là người có mục tiêu rõ ràng và biết cách sử dụng công cụ hiệu quả.",
    traits: ["Năng suất cao", "Có mục tiêu", "Tập trung", "Hiệu quả"],
    strengths: ["Hoàn thành công việc nhanh", "Quản lý thời gian tốt", "Có kế hoạch"],
    weaknesses: ["Dễ bị burn out", "Ít thời gian nghỉ ngơi"],
    tips: ["Đừng quên nghỉ ngơi", "Cân bằng giữa công việc và cuộc sống"],
  },
  D: {
    type: "D",
    title: "Người Thưởng Thức Thoải Mái",
    emoji: "😌",
    description: "Cà phê đen với bạn là niềm vui đơn giản! Bạn không quá cầu kỳ, uống cà phê theo cảm hứng và tâm trạng. Bạn là người dễ thích nghi, linh hoạt và biết cách tận hưởng những điều nhỏ bé.",
    traits: ["Linh hoạt", "Dễ thích nghi", "Vui vẻ", "Không cầu kỳ"],
    strengths: ["Sống thoải mái", "Ít stress", "Dễ hài lòng"],
    weaknesses: ["Đôi khi thiếu kiên định", "Hay thay đổi"],
    tips: ["Có thể thử khám phá sâu hơn về cà phê", "Đặt ra tiêu chuẩn cho bản thân"],
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
