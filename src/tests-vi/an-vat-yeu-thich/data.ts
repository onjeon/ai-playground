// Ăn vặt yêu thích
// Khám phá tính cách qua món ăn vặt yêu thích

export const questions = [
  {
    id: 1,
    question: "Món ăn vặt yêu thích nhất của bạn?",
    options: [
      { text: "Bánh tráng trộn/nướng", type: "A" },
      { text: "Trà sữa, đồ uống", type: "B" },
      { text: "Snack, khoai tây chiên", type: "C" },
      { text: "Trái cây, healthy snack", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thường ăn vặt khi nào?",
    options: [
      { text: "Chiều chiều, sau giờ làm/học", type: "A" },
      { text: "Khi xem phim/giải trí", type: "B" },
      { text: "Khi stress hoặc buồn", type: "C" },
      { text: "Hiếm khi, không hay ăn vặt", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn thích hương vị nào nhất?",
    options: [
      { text: "Chua cay - kích thích", type: "A" },
      { text: "Ngọt béo - comfort", type: "B" },
      { text: "Mặn giòn - đã miệng", type: "C" },
      { text: "Thanh nhẹ - healthy", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn thường mua đồ ăn vặt ở đâu?",
    options: [
      { text: "Gánh hàng rong, xe đẩy", type: "A" },
      { text: "Quán cafe, trà sữa", type: "B" },
      { text: "Cửa hàng tiện lợi", type: "C" },
      { text: "Siêu thị, mua về nhà", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn ăn vặt một mình hay với người khác?",
    options: [
      { text: "Với bạn bè, vui hơn", type: "A" },
      { text: "Một mình, tận hưởng riêng", type: "B" },
      { text: "Cả hai đều được", type: "C" },
      { text: "Không ăn vặt thường xuyên", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Budget cho ăn vặt của bạn?",
    options: [
      { text: "Rẻ thôi, ăn cho vui", type: "A" },
      { text: "Không quan trọng, miễn ngon", type: "B" },
      { text: "Tùy món, có thể chi nhiều", type: "C" },
      { text: "Tiết kiệm, ít khi mua", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Đồ ăn vặt đường phố Việt Nam bạn thích?",
    options: [
      { text: "Bánh tráng các loại", type: "A" },
      { text: "Chè, đồ ngọt", type: "B" },
      { text: "Xiên que, đồ chiên", type: "C" },
      { text: "Trái cây dầm, sinh tố", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn có hay thử món ăn vặt mới không?",
    options: [
      { text: "Rất hay thử, thích khám phá", type: "A" },
      { text: "Thỉnh thoảng, nếu được recommend", type: "B" },
      { text: "Ít khi, thích món quen", type: "C" },
      { text: "Không quan tâm lắm", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Đồ ăn vặt nước ngoài bạn thích?",
    options: [
      { text: "Tokbokki, đồ Hàn", type: "A" },
      { text: "Takoyaki, đồ Nhật", type: "B" },
      { text: "Pizza, burger", type: "C" },
      { text: "Không thích đồ nước ngoài lắm", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn ăn vặt có sợ béo không?",
    options: [
      { text: "Có, nhưng vẫn ăn", type: "A" },
      { text: "Không quan tâm lắm", type: "B" },
      { text: "Có, nên hạn chế", type: "C" },
      { text: "Rất sợ, chọn healthy snack", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Kỷ niệm đẹp về ăn vặt của bạn?",
    options: [
      { text: "Ăn vặt với bạn bè sau giờ học", type: "A" },
      { text: "Mua đồ ăn vặt yêu thích khi buồn", type: "B" },
      { text: "Khám phá quán ăn vặt ngon", type: "C" },
      { text: "Không có kỷ niệm đặc biệt", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Nếu được chọn, bạn muốn mở quán gì?",
    options: [
      { text: "Quán bánh tráng, đồ ăn vặt", type: "A" },
      { text: "Quán trà sữa, đồ uống", type: "B" },
      { text: "Quán đồ chiên, fast food", type: "C" },
      { text: "Quán healthy, sinh tố", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Fan đồ ăn vặt đường phố",
    emoji: "🥟",
    description: "Bạn yêu thích đồ ăn vặt đường phố! Bánh tráng, xiên que, đồ chiên... không gì sánh bằng. Bạn là người bình dị, thích những điều đơn giản và biết tận hưởng niềm vui nhỏ trong cuộc sống.",
    traits: ["Bình dị", "Vui vẻ", "Xã giao", "Biết hưởng thụ"],
    strengths: ["Dễ hài lòng", "Kết bạn tốt", "Tận hưởng cuộc sống"],
    weaknesses: ["Có thể không healthy", "Đôi khi tiêu tiền lặt vặt"],
    tips: ["Cân bằng với đồ ăn healthy", "Kiểm soát chi tiêu ăn vặt"],
  },
  B: {
    type: "B",
    title: "Fan trà sữa & đồ ngọt",
    emoji: "🧋",
    description: "Bạn yêu thích trà sữa và đồ ngọt! Bạn là người yêu sự ngọt ngào, thích comfort food và biết cách tự thưởng cho bản thân. Cuộc sống của bạn cần có chút ngọt ngào.",
    traits: ["Ngọt ngào", "Tự thưởng", "Trendy", "Cảm xúc"],
    strengths: ["Biết tự thưởng", "Theo kịp xu hướng", "Thư giãn tốt"],
    weaknesses: ["Có thể nghiện đường", "Chi tiêu cho đồ uống cao"],
    tips: ["Giảm đường khi có thể", "Cân bằng với đồ uống healthy"],
  },
  C: {
    type: "C",
    title: "Fan snack & đồ chiên",
    emoji: "🍟",
    description: "Bạn yêu thích snack và đồ chiên! Khoai tây chiên, gà rán, đồ giòn tan... là niềm vui của bạn. Bạn là người thích sự tiện lợi và không ngại indulge khi cần.",
    traits: ["Tiện lợi", "Thích giòn tan", "Thoải mái", "Không cầu kỳ"],
    strengths: ["Dễ tính", "Không khó khăn", "Biết cách thư giãn"],
    weaknesses: ["Không healthy lắm", "Có thể lười nấu ăn"],
    tips: ["Thử đồ ăn tự nấu", "Cân bằng dinh dưỡng"],
  },
  D: {
    type: "D",
    title: "Fan healthy snack",
    emoji: "🍎",
    description: "Bạn thích healthy snack! Trái cây, sinh tố, đồ ít calories... bạn quan tâm đến sức khỏe và hình thể. Bạn là người có kỷ luật và biết cách chăm sóc bản thân.",
    traits: ["Healthy", "Kỷ luật", "Chăm sóc bản thân", "Có ý thức"],
    strengths: ["Sức khỏe tốt", "Có kỷ luật", "Hình thể đẹp"],
    weaknesses: ["Có thể quá khắt khe", "Bỏ lỡ niềm vui ăn uống"],
    tips: ["Đôi khi cho phép bản thân indulge", "Balance is key"],
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
