// Kiểu Ăn Miến
// Khám phá tính cách qua cách bạn thưởng thức món miến Việt Nam

export const questions = [
  {
    id: 1,
    question: "Loại miến bạn yêu thích nhất là:",
    options: [
      { text: "Miến gà - đậm đà, thơm ngọt", type: "A" },
      { text: "Miến lươn - bổ dưỡng, đặc biệt", type: "B" },
      { text: "Miến ngan - béo ngậy, khác lạ", type: "C" },
      { text: "Miến chay - thanh đạm, nhẹ nhàng", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thích ăn miến nấu như thế nào?",
    options: [
      { text: "Nước dùng trong, ngọt thanh", type: "A" },
      { text: "Nước dùng đậm, nhiều gia vị", type: "B" },
      { text: "Miến xào khô với rau củ", type: "C" },
      { text: "Miến trộn lạnh kiểu salad", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Topping bạn không thể thiếu khi ăn miến:",
    options: [
      { text: "Hành phi vàng giòn", type: "A" },
      { text: "Trứng cút hoặc trứng gà", type: "B" },
      { text: "Nấm các loại", type: "C" },
      { text: "Rau thơm tươi xanh", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi nào bạn thường ăn miến?",
    options: [
      { text: "Bữa sáng để có năng lượng", type: "A" },
      { text: "Khi ốm cần bồi bổ", type: "B" },
      { text: "Bất cứ khi nào thèm", type: "C" },
      { text: "Ngày rằm, mùng một ăn chay", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn thích miến có độ dai như thế nào?",
    options: [
      { text: "Mềm vừa, dễ ăn", type: "A" },
      { text: "Dai giòn, còn hơi sần", type: "B" },
      { text: "Rất mềm, tan trong miệng", type: "C" },
      { text: "Không quan trọng, miễn ngon", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi ăn miến gà, bạn thích phần thịt nào?",
    options: [
      { text: "Thịt đùi - mềm và nhiều thịt", type: "A" },
      { text: "Thịt ức - ít mỡ, lành mạnh", type: "B" },
      { text: "Cánh gà - béo ngậy", type: "C" },
      { text: "Chỉ thích nước dùng, không cần thịt", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn cho thêm gì vào tô miến?",
    options: [
      { text: "Tiêu và một ít ớt", type: "A" },
      { text: "Chanh tươi vắt vào", type: "B" },
      { text: "Nước mắm hoặc gia vị đặc biệt", type: "C" },
      { text: "Giữ nguyên vị, không thêm gì", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Địa điểm ăn miến yêu thích của bạn:",
    options: [
      { text: "Quán quen nổi tiếng, đông khách", type: "A" },
      { text: "Quán nhỏ vỉa hè, dân dã", type: "B" },
      { text: "Nhà hàng, quán sang trọng", type: "C" },
      { text: "Tự nấu ở nhà", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn ăn kèm miến với gì?",
    options: [
      { text: "Quẩy giòn chấm nước dùng", type: "A" },
      { text: "Bánh mì nướng", type: "B" },
      { text: "Rau sống và dưa góp", type: "C" },
      { text: "Không ăn kèm gì cả", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Khi nấu miến ở nhà, bạn:",
    options: [
      { text: "Ninh xương lâu để nước dùng ngọt", type: "A" },
      { text: "Dùng hạt nêm cho tiện", type: "B" },
      { text: "Thử nghiệm công thức mới", type: "C" },
      { text: "Mua miến gói ăn liền", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Một tô miến hoàn hảo với bạn là:",
    options: [
      { text: "Nước dùng ngọt tự nhiên, thịt mềm", type: "A" },
      { text: "Nhiều topping, đủ chất", type: "B" },
      { text: "Cân bằng giữa miến và nước", type: "C" },
      { text: "Đơn giản nhưng tươi sạch", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Điều gì khiến bạn yêu thích món miến?",
    options: [
      { text: "Vị thanh nhẹ, dễ ăn, dễ tiêu", type: "A" },
      { text: "Bổ dưỡng, tốt cho sức khỏe", type: "B" },
      { text: "Đa dạng cách chế biến", type: "C" },
      { text: "Gợi nhớ kỷ niệm gia đình", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người Truyền Thống",
    emoji: "🍜",
    description: "Bạn trân trọng những giá trị truyền thống và yêu thích sự chân thật. Như tô miến gà cổ điển, bạn mang đến sự ấm áp và đáng tin cậy cho mọi người xung quanh.",
    traits: ["Chân thật", "Đáng tin cậy", "Ấm áp", "Truyền thống"],
    strengths: ["Giữ gìn giá trị tốt đẹp", "Ổn định trong mối quan hệ", "Được mọi người tin tưởng"],
    weaknesses: ["Có thể ngại thay đổi", "Đôi khi cứng nhắc"],
    tips: ["Thử những điều mới mẻ đôi khi", "Kết hợp truyền thống với hiện đại"],
  },
  B: {
    type: "B",
    title: "Người Bổ Dưỡng",
    emoji: "💪",
    description: "Bạn quan tâm đến chất lượng và giá trị thực sự. Như miến lươn bổ dưỡng, bạn luôn mang lại những điều tốt đẹp và có ý nghĩa cho cuộc sống.",
    traits: ["Chất lượng", "Có chiều sâu", "Quan tâm sức khỏe", "Bền vững"],
    strengths: ["Lựa chọn thông minh", "Đầu tư vào điều quan trọng", "Sống có mục đích"],
    weaknesses: ["Có thể quá kỹ tính", "Đôi khi khó hài lòng"],
    tips: ["Đôi khi hãy thoải mái hơn", "Học cách tận hưởng những điều đơn giản"],
  },
  C: {
    type: "C",
    title: "Người Sáng Tạo",
    emoji: "🎨",
    description: "Bạn thích khám phá và thử nghiệm. Như cách biến tấu món miến, bạn luôn tìm cách làm mới mọi thứ và mang đến những bất ngờ thú vị.",
    traits: ["Sáng tạo", "Linh hoạt", "Thích khám phá", "Độc đáo"],
    strengths: ["Ý tưởng mới lạ", "Thích nghi nhanh", "Không ngại thử thách"],
    weaknesses: ["Có thể thiếu kiên định", "Đôi khi quá phức tạp"],
    tips: ["Đôi khi đơn giản là tốt nhất", "Hoàn thiện trước khi thử cái mới"],
  },
  D: {
    type: "D",
    title: "Người Thanh Tịnh",
    emoji: "🌿",
    description: "Bạn yêu sự giản dị và thanh khiết. Như miến chay thanh đạm, bạn mang đến sự bình yên và trong sáng cho mọi người xung quanh.",
    traits: ["Giản dị", "Thanh tịnh", "Nhẹ nhàng", "Tĩnh lặng"],
    strengths: ["Sống có ý thức", "Không đòi hỏi nhiều", "Tâm hồn trong sáng"],
    weaknesses: ["Có thể quá khiêm tốn", "Đôi khi thiếu quyết đoán"],
    tips: ["Thể hiện bản thân nhiều hơn", "Đôi khi hãy mạnh mẽ hơn"],
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
