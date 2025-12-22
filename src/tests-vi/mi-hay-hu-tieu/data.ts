// Mì hay Hủ Tiếu
// Khám phá tính cách qua sở thích mì hay hủ tiếu

export const questions = [
  {
    id: 1,
    question: "Sáng sớm, bạn thích ăn gì?",
    options: [
      { text: "Mì - đầy đủ dinh dưỡng", type: "A" },
      { text: "Hủ tiếu - thanh nhẹ dễ ăn", type: "B" },
      { text: "Tùy ngày, không nhất định", type: "C" },
      { text: "Không ăn sáng hoặc ăn khác", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thích loại mì/hủ tiếu nào?",
    options: [
      { text: "Mì Quảng - đậm đà xứ Quảng", type: "A" },
      { text: "Hủ tiếu Nam Vang - thanh ngọt", type: "B" },
      { text: "Mì vịt tiềm - bổ dưỡng", type: "C" },
      { text: "Hủ tiếu gõ - bình dân", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn thích sợi mì/hủ tiếu như thế nào?",
    options: [
      { text: "Sợi to, dai, có độ chew", type: "A" },
      { text: "Sợi nhỏ, mềm, thanh", type: "B" },
      { text: "Không quan trọng, miễn ngon", type: "C" },
      { text: "Thích mì gói, tiện lợi", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi ăn, bạn thích thêm gì?",
    options: [
      { text: "Đậu phộng, bánh tráng (kiểu Quảng)", type: "A" },
      { text: "Rau sống, giá, chanh", type: "B" },
      { text: "Tương ớt, nước mắm chua ngọt", type: "C" },
      { text: "Ăn nguyên bản, không thêm", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn thường ăn mì/hủ tiếu ở đâu?",
    options: [
      { text: "Quán có tiếng, chất lượng", type: "A" },
      { text: "Hàng rong, xe đẩy", type: "B" },
      { text: "Nhà hàng, quán cao cấp", type: "C" },
      { text: "Tự nấu ở nhà", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn thích nước dùng như thế nào?",
    options: [
      { text: "Ít nước, đậm đặc", type: "A" },
      { text: "Nước trong, ngọt xương", type: "B" },
      { text: "Nhiều nước, slurp được", type: "C" },
      { text: "Khô hoặc trộn", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Topping yêu thích của bạn?",
    options: [
      { text: "Thịt heo, tôm, trứng", type: "A" },
      { text: "Bò viên, hoành thánh", type: "B" },
      { text: "Hải sản đầy đủ", type: "C" },
      { text: "Chay, rau củ", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn ăn mì/hủ tiếu mấy lần một tuần?",
    options: [
      { text: "Gần như mỗi ngày", type: "A" },
      { text: "2-3 lần một tuần", type: "B" },
      { text: "Thỉnh thoảng, khi thèm", type: "C" },
      { text: "Hiếm khi", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Mì gói instant, bạn nghĩ sao?",
    options: [
      { text: "Thích, tiện lợi và ngon", type: "A" },
      { text: "Ăn khi cần thiết thôi", type: "B" },
      { text: "Không ăn, không tốt cho sức khỏe", type: "C" },
      { text: "Thỉnh thoảng ăn cho vui", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Vùng miền nào có mì/hủ tiếu ngon nhất theo bạn?",
    options: [
      { text: "Miền Trung - mì Quảng, cao lầu", type: "A" },
      { text: "Miền Nam - hủ tiếu các loại", type: "B" },
      { text: "Miền Bắc - miến, mì vằn thắn", type: "C" },
      { text: "Đều ngon, tùy khẩu vị", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Nếu đi nước ngoài, bạn có nhớ mì/hủ tiếu không?",
    options: [
      { text: "Rất nhớ, phải tìm quán Việt ăn", type: "A" },
      { text: "Nhớ nhưng thích thử món mới", type: "B" },
      { text: "Bình thường, thích ứng được", type: "C" },
      { text: "Không nhớ lắm", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Mì hay hủ tiếu ngon hơn theo bạn?",
    options: [
      { text: "Mì - đa dạng và no hơn", type: "A" },
      { text: "Hủ tiếu - thanh nhẹ và tinh tế", type: "B" },
      { text: "Ngang nhau, tùy loại", type: "C" },
      { text: "Không quan tâm, ăn gì cũng được", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Team Mì - Người đậm đà",
    emoji: "🍜",
    description: "Bạn là fan của mì! Bạn thích sự đậm đà, đầy đủ và no bụng. Giống như tô mì Quảng đầy ắp topping, bạn là người phong phú, đa dạng và không bao giờ làm ai thất vọng.",
    traits: ["Đậm đà", "Đầy đủ", "Phong phú", "Chắc chắn"],
    strengths: ["Đáng tin cậy", "Cho đi nhiều", "Hài lòng mọi người"],
    weaknesses: ["Có thể quá nhiều", "Đôi khi overwhelming"],
    tips: ["Đôi khi less is more", "Giữ sự cân bằng"],
  },
  B: {
    type: "B",
    title: "Team Hủ Tiếu - Người thanh nhẹ",
    emoji: "🥣",
    description: "Bạn là fan của hủ tiếu! Bạn thích sự thanh nhẹ, tinh tế và không quá phức tạp. Giống như tô hủ tiếu Nam Vang trong veo, bạn là người tinh khiết và dễ chịu.",
    traits: ["Thanh nhẹ", "Tinh tế", "Đơn giản", "Dễ chịu"],
    strengths: ["Không gây áp lực", "Dễ hòa nhập", "Nhẹ nhàng"],
    weaknesses: ["Có thể thiếu impact", "Đôi khi quá nhẹ nhàng"],
    tips: ["Đôi khi cần mạnh mẽ hơn", "Thêm một chút spice cho cuộc sống"],
  },
  C: {
    type: "C",
    title: "Team Linh Hoạt - Người cân bằng",
    emoji: "⚖️",
    description: "Bạn không thiên về mì hay hủ tiếu! Bạn thích cả hai và biết cách tận hưởng tùy theo hoàn cảnh. Bạn là người linh hoạt, không cực đoan và biết thưởng thức cuộc sống.",
    traits: ["Linh hoạt", "Cân bằng", "Thích ứng", "Dễ tính"],
    strengths: ["Hòa nhập tốt", "Không khó khăn", "Thưởng thức mọi thứ"],
    weaknesses: ["Có thể thiếu sở thích rõ ràng", "Khó quyết định"],
    tips: ["Vẫn nên có món ruột", "Cân bằng là tốt nhưng đam mê cũng hay"],
  },
  D: {
    type: "D",
    title: "Team Khác - Người độc đáo",
    emoji: "🍽️",
    description: "Bạn không quá quan tâm đến mì hay hủ tiếu! Bạn có sở thích riêng và không chạy theo xu hướng. Bạn là người độc lập với cá tính riêng biệt.",
    traits: ["Độc lập", "Cá tính", "Không theo đám đông", "Tự do"],
    strengths: ["Có cá tính", "Không bị ảnh hưởng", "Tự tin"],
    weaknesses: ["Có thể bỏ lỡ món ngon", "Khó hòa nhập đôi khi"],
    tips: ["Thử mì và hủ tiếu xem sao", "Mở rộng trải nghiệm ẩm thực"],
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
