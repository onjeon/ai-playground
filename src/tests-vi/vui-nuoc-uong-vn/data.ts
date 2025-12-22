// Đồ uống Việt Nam
// Khám phá đồ uống Việt Nam phù hợp với tính cách của bạn

export const questions = [
  {
    id: 1,
    question: "Buổi sáng bạn thường uống gì?",
    options: [
      { text: "Cà phê đen đắng để tỉnh táo", type: "A" },
      { text: "Cà phê sữa ngọt ngào", type: "B" },
      { text: "Trà nóng nhẹ nhàng", type: "C" },
      { text: "Sinh tố, nước ép healthy", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thích uống đồ như thế nào?",
    options: [
      { text: "Nóng, hơi đắng, mạnh", type: "A" },
      { text: "Đá lạnh, ngọt vừa", type: "B" },
      { text: "Ấm, thanh nhẹ", type: "C" },
      { text: "Lạnh, tươi mát", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn thường uống đồ ở đâu?",
    options: [
      { text: "Quán cà phê vỉa hè, ngồi ghế nhựa", type: "A" },
      { text: "Quán cà phê đẹp, có không gian", type: "B" },
      { text: "Ở nhà, tự pha", type: "C" },
      { text: "Tiệm trà sữa, trà chanh", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn uống đồ với ai?",
    options: [
      { text: "Một mình, đọc báo, lướt điện thoại", type: "A" },
      { text: "Bạn bè, tán gẫu", type: "B" },
      { text: "Gia đình, người thân", type: "C" },
      { text: "Đồng nghiệp, trong giờ làm việc", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn thích caffeine level như thế nào?",
    options: [
      { text: "Mạnh, cần tỉnh táo cả ngày", type: "A" },
      { text: "Vừa phải, đủ để sảng khoái", type: "B" },
      { text: "Nhẹ hoặc không caffeine", type: "C" },
      { text: "Không quan tâm, miễn ngon", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi trời nóng, bạn thích uống gì?",
    options: [
      { text: "Cà phê đá, quen rồi", type: "A" },
      { text: "Trà đào, trà vải mát lạnh", type: "B" },
      { text: "Nước dừa tươi", type: "C" },
      { text: "Sinh tố, nước ép trái cây", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn thích thêm gì vào đồ uống?",
    options: [
      { text: "Không gì, uống nguyên bản", type: "A" },
      { text: "Sữa đặc, đường", type: "B" },
      { text: "Mật ong, chanh", type: "C" },
      { text: "Topping: trân châu, thạch, pudding", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Đồ uống bạn order thường xuyên nhất?",
    options: [
      { text: "Cà phê phin truyền thống", type: "A" },
      { text: "Bạc xỉu, cà phê sữa", type: "B" },
      { text: "Trà ô long, trà xanh", type: "C" },
      { text: "Trà sữa, sinh tố", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn uống đồ vào thời điểm nào?",
    options: [
      { text: "Sáng sớm, không thể thiếu", type: "A" },
      { text: "Chiều, lúc họp bạn", type: "B" },
      { text: "Tối, thư giãn", type: "C" },
      { text: "Bất cứ lúc nào thích", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn nghĩ gì về trà sữa?",
    options: [
      { text: "Không phải style, thích cà phê hơn", type: "A" },
      { text: "Thỉnh thoảng uống, ngon", type: "B" },
      { text: "Thích trà hơn trà sữa", type: "C" },
      { text: "Yêu thích, uống thường xuyên", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Budget cho 1 ly đồ uống của bạn?",
    options: [
      { text: "Rẻ nhất có thể, 15-20k", type: "A" },
      { text: "Vừa phải, 25-35k", type: "B" },
      { text: "Tùy, ngon thì chi", type: "C" },
      { text: "Không quan tâm giá, miễn thích", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Đồ uống Việt Nam đối với bạn là gì?",
    options: [
      { text: "Văn hóa, không thể thiếu mỗi ngày", type: "A" },
      { text: "Cơ hội gặp gỡ, kết nối", type: "B" },
      { text: "Thư giãn, tĩnh tâm", type: "C" },
      { text: "Trào lưu, thử nghiệm", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Cà Phê Đen - Đậm đà Việt Nam",
    emoji: "☕",
    description: "Bạn như ly cà phê đen đậm đặc - mạnh mẽ, không rào đón và thật sự authentic. Bạn thích sự đơn giản, chất lượng và những giá trị bền vững qua thời gian.",
    traits: ["Mạnh mẽ", "Thật sự", "Đơn giản", "Bền vững"],
    strengths: ["Cá tính mạnh", "Đáng tin cậy", "Không giả tạo"],
    weaknesses: ["Có thể quá thẳng thắn", "Đôi khi khó gần"],
    tips: ["Đôi khi cần mềm mỏng hơn", "Thử những điều mới"],
  },
  B: {
    type: "B",
    title: "Cà Phê Sữa - Ngọt ngào Cân bằng",
    emoji: "🥤",
    description: "Bạn như ly cà phê sữa - cân bằng, ngọt ngào nhưng vẫn có depth. Bạn biết cách hòa hợp, dễ gần và được nhiều người yêu thích.",
    traits: ["Cân bằng", "Ngọt ngào", "Dễ gần", "Linh hoạt"],
    strengths: ["Được nhiều người thích", "Dễ hòa hợp", "Balance tốt"],
    weaknesses: ["Có thể thiếu cá tính", "Đôi khi quá ngọt"],
    tips: ["Đừng ngại thể hiện cá tính", "Thử những thứ mạnh hơn"],
  },
  C: {
    type: "C",
    title: "Trà Việt - Thanh tao Nhẹ nhàng",
    emoji: "🍵",
    description: "Bạn như chén trà Việt - thanh tao, nhẹ nhàng và có chiều sâu. Bạn yêu sự bình yên, trân trọng những khoảnh khắc yên tĩnh và có tâm hồn tinh tế.",
    traits: ["Thanh tao", "Nhẹ nhàng", "Tinh tế", "Sâu sắc"],
    strengths: ["Tĩnh tâm", "Chiều sâu", "Tạo không gian bình yên"],
    weaknesses: ["Có thể quá nhẹ nhàng", "Dễ bị bỏ qua"],
    tips: ["Đôi khi cần mạnh mẽ hơn", "Thể hiện ý kiến rõ ràng"],
  },
  D: {
    type: "D",
    title: "Trà Sữa / Sinh tố - Sáng tạo Trẻ trung",
    emoji: "🧋",
    description: "Bạn như ly trà sữa đầy topping - sáng tạo, trẻ trung và luôn thử nghiệm. Bạn thích điều mới, không ngại đổi thay và mang lại niềm vui cho người xung quanh.",
    traits: ["Sáng tạo", "Trẻ trung", "Thử nghiệm", "Vui vẻ"],
    strengths: ["Luôn mới mẻ", "Năng lượng tích cực", "Không ngại thay đổi"],
    weaknesses: ["Có thể thiếu bền vững", "Dễ chán"],
    tips: ["Xây dựng những thói quen bền vững", "Tìm điều mình thật sự thích"],
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
