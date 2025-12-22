// Kiểu sinh tố yêu thích
// Khám phá tính cách qua loại sinh tố bạn yêu thích

export const questions = [
  {
    id: 1,
    question: "Sinh tố nào bạn hay gọi nhất?",
    options: [
      { text: "Sinh tố bơ béo ngậy", type: "A" },
      { text: "Sinh tố xoài, dâu ngọt mát", type: "B" },
      { text: "Sinh tố rau má, rau xanh", type: "C" },
      { text: "Sinh tố mix nhiều loại", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thích sinh tố có độ đặc như thế nào?",
    options: [
      { text: "Đặc sánh, ăn bằng muỗng được", type: "A" },
      { text: "Loãng vừa, dễ uống", type: "B" },
      { text: "Đặc vừa, giữ được chất xơ", type: "C" },
      { text: "Tùy loại trái cây", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn cho gì vào sinh tố?",
    options: [
      { text: "Sữa đặc, đường cho béo ngọt", type: "A" },
      { text: "Đá xay, sữa tươi", type: "B" },
      { text: "Không đường, chỉ trái cây", type: "C" },
      { text: "Sữa chua, mật ong, hạt", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Sinh tố Việt Nam nào bạn thích?",
    options: [
      { text: "Sinh tố bơ Đà Lạt", type: "A" },
      { text: "Sinh tố mãng cầu, sapoche", type: "B" },
      { text: "Sinh tố rau má, bí đao", type: "C" },
      { text: "Sinh tố dừa, đậu xanh", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn uống sinh tố khi nào?",
    options: [
      { text: "Như bữa sáng hoặc bữa phụ", type: "A" },
      { text: "Khi thèm đồ ngọt", type: "B" },
      { text: "Sau khi tập thể dục", type: "C" },
      { text: "Bất cứ lúc nào thích", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn mua sinh tố ở đâu?",
    options: [
      { text: "Quán sinh tố quen, biết gu mình", type: "A" },
      { text: "Quán sinh tố vỉa hè, xe đẩy", type: "B" },
      { text: "Tự làm ở nhà với máy xay", type: "C" },
      { text: "Quán nào gần thì vào", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Size sinh tố bạn thường gọi?",
    options: [
      { text: "Size lớn, uống no bụng", type: "A" },
      { text: "Size vừa, vừa đủ", type: "B" },
      { text: "Size nhỏ, kiểm soát calories", type: "C" },
      { text: "Tùy độ đói", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Topping nào bạn thích trong sinh tố?",
    options: [
      { text: "Đậu phộng, dừa khô", type: "A" },
      { text: "Thạch, trân châu", type: "B" },
      { text: "Hạt chia, granola", type: "C" },
      { text: "Trái cây tươi cắt miếng", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Sinh tố thay thế bữa ăn được không?",
    options: [
      { text: "Được, rất no và đầy đủ", type: "A" },
      { text: "Chỉ là đồ uống thêm thôi", type: "B" },
      { text: "Được, nhất là khi ăn kiêng", type: "C" },
      { text: "Tùy sinh tố nào", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn thích uống sinh tố với ai?",
    options: [
      { text: "Một mình, thưởng thức thoải mái", type: "A" },
      { text: "Với bạn bè, đi chơi", type: "B" },
      { text: "Sau khi gym với bạn tập", type: "C" },
      { text: "Với gia đình, người thân", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn có máy xay sinh tố ở nhà không?",
    options: [
      { text: "Có, làm sinh tố bơ thường xuyên", type: "A" },
      { text: "Có nhưng ít dùng", type: "B" },
      { text: "Có máy xay chuyên dụng tốt", type: "C" },
      { text: "Có, hay thử công thức mới", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Sinh tố lý tưởng với bạn là?",
    options: [
      { text: "Béo ngậy, no lâu, đầy năng lượng", type: "A" },
      { text: "Ngọt mát, thơm ngon, giải nhiệt", type: "B" },
      { text: "Healthy, ít calo, nhiều chất xơ", type: "C" },
      { text: "Hương vị độc đáo, kết hợp sáng tạo", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Tín đồ sinh tố béo ngậy",
    emoji: "🥑",
    description: "Bạn là người yêu thích sự đầy đặn và không ngại năng lượng. Sinh tố bơ béo ngậy là nguồn năng lượng giúp bạn hoạt động cả ngày.",
    traits: ["Năng động", "Mạnh mẽ", "Thực tế", "Chắc chắn"],
    strengths: ["Không sợ calories", "Biết nạp năng lượng", "Thực tế"],
    weaknesses: ["Có thể không quan tâm cân nặng", "Đôi khi ăn quá nhiều"],
    tips: ["Cân bằng với các loại sinh tố nhẹ hơn", "Theo dõi lượng đường nạp vào"],
  },
  B: {
    type: "B",
    title: "Tín đồ sinh tố ngọt mát",
    emoji: "🥭",
    description: "Bạn là người vui vẻ, thích sự ngọt ngào trong cuộc sống. Sinh tố trái cây mát lạnh là cách bạn thưởng thức cuộc sống.",
    traits: ["Vui vẻ", "Ngọt ngào", "Thoải mái", "Dễ thương"],
    strengths: ["Tâm hồn lạc quan", "Dễ hài lòng", "Biết tận hưởng"],
    weaknesses: ["Có thể nghiện đồ ngọt", "Ít quan tâm dinh dưỡng"],
    tips: ["Thử sinh tố ít đường hơn", "Kết hợp với rau xanh"],
  },
  C: {
    type: "C",
    title: "Tín đồ sinh tố healthy",
    emoji: "🥬",
    description: "Bạn là người quan tâm đến sức khỏe và vóc dáng. Sinh tố rau xanh và trái cây ít đường là bạn đồng hành của bạn.",
    traits: ["Kỷ luật", "Healthy", "Cầu toàn", "Có mục tiêu"],
    strengths: ["Sống lành mạnh", "Kiểm soát tốt", "Am hiểu dinh dưỡng"],
    weaknesses: ["Có thể quá khắt khe", "Thiếu sự thoải mái"],
    tips: ["Thưởng cho mình đôi khi", "Không cần hoàn hảo 100%"],
  },
  D: {
    type: "D",
    title: "Tín đồ sinh tố sáng tạo",
    emoji: "🍓",
    description: "Bạn là người sáng tạo, thích thử nghiệm và không bao giờ chán. Mỗi ly sinh tố là một sáng tạo mới của bạn.",
    traits: ["Sáng tạo", "Tò mò", "Linh hoạt", "Phiêu lưu"],
    strengths: ["Không bao giờ nhàm chán", "Tư duy sáng tạo", "Thích nghi tốt"],
    weaknesses: ["Hay thay đổi", "Khó quyết định"],
    tips: ["Lưu lại những công thức hay", "Đôi khi trung thành với cái quen"],
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
