// Cơm tấm hay cơm gà
// Khám phá tính cách qua sở thích cơm tấm hay cơm gà

export const questions = [
  {
    id: 1,
    question: "Bữa trưa, bạn thường chọn gì?",
    options: [
      { text: "Cơm tấm - no lâu, đầy đủ", type: "A" },
      { text: "Cơm gà - thơm ngon, vừa miệng", type: "B" },
      { text: "Tùy ngày, không cố định", type: "C" },
      { text: "Ăn khác, không cơm", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thích cơm tấm topping gì?",
    options: [
      { text: "Sườn nướng - classic", type: "A" },
      { text: "Bì, chả, trứng - đầy đủ", type: "B" },
      { text: "Sườn bì chả - combo hoàn hảo", type: "C" },
      { text: "Chỉ cần cơm và mỡ hành", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Cơm gà kiểu nào bạn thích nhất?",
    options: [
      { text: "Cơm gà Hội An - gạo vàng, gà xé", type: "A" },
      { text: "Cơm gà Singapore - gà luộc mềm", type: "B" },
      { text: "Cơm gà xối mỡ - giòn tan", type: "C" },
      { text: "Cơm gà nướng - thơm lừng", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi ăn cơm, bạn thích kèm gì?",
    options: [
      { text: "Nước mắm pha chua ngọt", type: "A" },
      { text: "Nước sốt đặc biệt của quán", type: "B" },
      { text: "Canh rau củ", type: "C" },
      { text: "Đồ chua, dưa leo", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn ăn cơm tấm/cơm gà mấy lần một tuần?",
    options: [
      { text: "Gần như mỗi ngày", type: "A" },
      { text: "3-4 lần một tuần", type: "B" },
      { text: "1-2 lần một tuần", type: "C" },
      { text: "Thỉnh thoảng thôi", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn thường ăn cơm ở đâu?",
    options: [
      { text: "Quán quen, gần nhà/công ty", type: "A" },
      { text: "Quán nổi tiếng, đáng giá", type: "B" },
      { text: "Đặt qua app ship", type: "C" },
      { text: "Tự nấu ở nhà", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Điều quan trọng nhất trong đĩa cơm?",
    options: [
      { text: "Thịt ngon, đậm đà", type: "A" },
      { text: "Cơm dẻo, thơm", type: "B" },
      { text: "Nước mắm/sốt ngon", type: "C" },
      { text: "Tất cả cân bằng", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn nghĩ gì về việc ăn cơm bằng đũa vs thìa?",
    options: [
      { text: "Đũa - truyền thống hơn", type: "A" },
      { text: "Thìa - tiện hơn", type: "B" },
      { text: "Tùy món ăn", type: "C" },
      { text: "Không quan trọng", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Cơm tấm Sài Gòn hay cơm gà Hội An?",
    options: [
      { text: "Cơm tấm Sài Gòn - đậm chất miền Nam", type: "A" },
      { text: "Cơm gà Hội An - tinh tế miền Trung", type: "B" },
      { text: "Cả hai đều ngon", type: "C" },
      { text: "Không thích cả hai lắm", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Khi đi ăn nhóm, bạn sẽ gợi ý?",
    options: [
      { text: "Quán cơm tấm ngon", type: "A" },
      { text: "Quán cơm gà nổi tiếng", type: "B" },
      { text: "Để người khác chọn", type: "C" },
      { text: "Gợi ý món khác", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Nếu chỉ được ăn một món cơm cả đời?",
    options: [
      { text: "Cơm tấm sườn bì chả", type: "A" },
      { text: "Cơm gà xối mỡ", type: "B" },
      { text: "Cơm trắng với cá kho", type: "C" },
      { text: "Cơm chiên dương châu", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bạn nghĩ món nào đại diện cho ẩm thực Việt?",
    options: [
      { text: "Cơm tấm - đặc sản Sài Gòn", type: "A" },
      { text: "Cơm gà - phổ biến cả nước", type: "B" },
      { text: "Phở - quốc hồn quốc túy", type: "C" },
      { text: "Tất cả đều đại diện", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Team Cơm Tấm - Người Sài Gòn",
    emoji: "🍖",
    description: "Bạn là fan cơm tấm! Bạn yêu sự đậm đà, đầy đủ và hào sảng của đặc sản Sài Gòn. Giống như đĩa cơm tấm sườn bì chả, bạn là người phóng khoáng, rộng rãi và không bao giờ để ai đói.",
    traits: ["Phóng khoáng", "Hào sảng", "Đầy đủ", "Sài Gòn style"],
    strengths: ["Rộng rãi", "Không để ai thiếu", "Đáng tin cậy"],
    weaknesses: ["Có thể quá nhiều", "Đôi khi thiếu tinh tế"],
    tips: ["Đôi khi less is more", "Thử những món nhẹ nhàng hơn"],
  },
  B: {
    type: "B",
    title: "Team Cơm Gà - Người tinh tế",
    emoji: "🍗",
    description: "Bạn là fan cơm gà! Bạn thích sự tinh tế, vừa vặn và hoàn hảo trong từng chi tiết. Giống như đĩa cơm gà Hội An với gạo vàng óng, bạn là người có gu và biết thưởng thức.",
    traits: ["Tinh tế", "Có gu", "Cân bằng", "Hoàn hảo"],
    strengths: ["Biết thưởng thức", "Có tiêu chuẩn", "Tinh tế trong lựa chọn"],
    weaknesses: ["Có thể kén chọn", "Đôi khi khó tính"],
    tips: ["Mở rộng khẩu vị", "Đôi khi đơn giản cũng hay"],
  },
  C: {
    type: "C",
    title: "Team Linh Hoạt - Người dễ tính",
    emoji: "🍚",
    description: "Bạn không thiên về món nào! Bạn thích cả cơm tấm lẫn cơm gà và biết cách tận hưởng mỗi món theo cách riêng. Bạn là người dễ tính, hòa đồng và không khó khăn.",
    traits: ["Dễ tính", "Linh hoạt", "Hòa đồng", "Thích ứng"],
    strengths: ["Dễ hài lòng", "Không gây khó khăn", "Hòa nhập tốt"],
    weaknesses: ["Có thể thiếu sở thích rõ ràng", "Khó quyết định"],
    tips: ["Vẫn nên có món ruột", "Đôi khi cần quyết đoán hơn"],
  },
  D: {
    type: "D",
    title: "Team Khác Biệt - Người độc đáo",
    emoji: "🍱",
    description: "Bạn không phải fan của cơm tấm hay cơm gà! Bạn có sở thích ẩm thực riêng và không chạy theo những món phổ biến. Bạn là người có cá tính và không sợ khác biệt.",
    traits: ["Độc đáo", "Cá tính", "Không theo đám đông", "Tự do"],
    strengths: ["Có cá tính riêng", "Không bị ảnh hưởng", "Khám phá nhiều"],
    weaknesses: ["Có thể bỏ lỡ món ngon", "Khó tìm quán ăn chung với bạn bè"],
    tips: ["Thử cơm tấm và cơm gà xem sao", "Mở rộng trải nghiệm"],
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
