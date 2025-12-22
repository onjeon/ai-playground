// Chè yêu thích
// Khám phá tính cách của bạn qua món chè yêu thích

export const questions = [
  {
    id: 1,
    question: "Chè yêu thích nhất của bạn?",
    options: [
      { text: "Chè ba màu/thập cẩm - đa dạng", type: "A" },
      { text: "Chè đậu đỏ/đậu xanh - truyền thống", type: "B" },
      { text: "Chè khúc bạch - mới lạ", type: "C" },
      { text: "Chè Thái - đầy màu sắc", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thích ăn chè như thế nào?",
    options: [
      { text: "Chè đá - mát lạnh sảng khoái", type: "A" },
      { text: "Chè nóng - ấm bụng, ngọt ngào", type: "B" },
      { text: "Tùy thời tiết", type: "C" },
      { text: "Không ăn chè thường xuyên", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn thích topping gì trong chè?",
    options: [
      { text: "Trân châu, thạch - dai dai", type: "A" },
      { text: "Đậu, hạt sen - truyền thống", type: "B" },
      { text: "Dừa, cơm dừa - béo ngậy", type: "C" },
      { text: "Trái cây tươi - healthy", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn ăn chè khi nào?",
    options: [
      { text: "Sau bữa ăn, như tráng miệng", type: "A" },
      { text: "Chiều chiều, ăn vặt", type: "B" },
      { text: "Khi thèm ngọt", type: "C" },
      { text: "Bất cứ lúc nào", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn thường ăn chè ở đâu?",
    options: [
      { text: "Quán chè nổi tiếng", type: "A" },
      { text: "Gánh chè ven đường", type: "B" },
      { text: "Tự nấu ở nhà", type: "C" },
      { text: "Quán trà sữa có bán chè", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Mức độ ngọt bạn thích?",
    options: [
      { text: "Ngọt vừa - cân bằng", type: "A" },
      { text: "Ngọt đậm - thỏa mãn", type: "B" },
      { text: "Ít ngọt - healthy", type: "C" },
      { text: "Không đường - tự nhiên", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Chè vùng miền nào bạn thích nhất?",
    options: [
      { text: "Chè Huế - thanh lịch, đa dạng", type: "A" },
      { text: "Chè miền Nam - ngọt, béo", type: "B" },
      { text: "Chè miền Bắc - đơn giản, truyền thống", type: "C" },
      { text: "Chè fusion - hiện đại", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn có hay rủ người khác đi ăn chè không?",
    options: [
      { text: "Hay rủ, đi cùng vui hơn", type: "A" },
      { text: "Thỉnh thoảng, khi có dịp", type: "B" },
      { text: "Thường tự đi một mình", type: "C" },
      { text: "Mua về nhà ăn", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn thích chè có texture như thế nào?",
    options: [
      { text: "Nhiều topping, đa dạng texture", type: "A" },
      { text: "Mịn, nước trong", type: "B" },
      { text: "Đặc, sánh", type: "C" },
      { text: "Không quan trọng texture", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Nếu phải chọn, bạn chọn chè hay trà sữa?",
    options: [
      { text: "Chè - Việt Nam hơn", type: "A" },
      { text: "Trà sữa - trendy hơn", type: "B" },
      { text: "Cả hai đều thích", type: "C" },
      { text: "Không thích cả hai", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn có hay thử chè mới không?",
    options: [
      { text: "Có, thích khám phá món mới", type: "A" },
      { text: "Thỉnh thoảng, nhưng có món ruột", type: "B" },
      { text: "Ít khi, thích món quen", type: "C" },
      { text: "Không quan tâm lắm", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Ký ức đẹp nhất về chè của bạn?",
    options: [
      { text: "Ăn chè cùng bạn bè vui vẻ", type: "A" },
      { text: "Chè mẹ/bà nấu", type: "B" },
      { text: "Phát hiện quán chè ngon", type: "C" },
      { text: "Không có ký ức đặc biệt", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Chè thập cẩm - Người đa dạng",
    emoji: "🍨",
    description: "Bạn thích chè thập cẩm! Bạn là người đa dạng, thích sự phong phú và không bao giờ hài lòng với một thứ. Giống như ly chè đầy màu sắc, cuộc sống của bạn cũng đầy thú vị.",
    traits: ["Đa dạng", "Phong phú", "Thích khám phá", "Năng động"],
    strengths: ["Nhiều trải nghiệm", "Không nhàm chán", "Dễ kết bạn"],
    weaknesses: ["Có thể thiếu tập trung", "Khó chọn lựa"],
    tips: ["Đôi khi tập trung vào một thứ", "Chất lượng hơn số lượng"],
  },
  B: {
    type: "B",
    title: "Chè đậu - Người truyền thống",
    emoji: "🫘",
    description: "Bạn thích chè đậu truyền thống! Bạn trân trọng giá trị truyền thống, thích sự đơn giản và chân thật. Giống như chén chè đậu ngọt ngào, bạn mang lại sự ấm áp cho người xung quanh.",
    traits: ["Truyền thống", "Đơn giản", "Chân thật", "Ấm áp"],
    strengths: ["Đáng tin cậy", "Không phô trương", "Gần gũi"],
    weaknesses: ["Có thể bảo thủ", "Khó thay đổi"],
    tips: ["Thử những điều mới", "Kết hợp truyền thống và hiện đại"],
  },
  C: {
    type: "C",
    title: "Chè khúc bạch - Người trendy",
    emoji: "🧁",
    description: "Bạn thích chè khúc bạch! Bạn là người hiện đại, thích những xu hướng mới và luôn cập nhật. Giống như món chè fusion, bạn biết cách kết hợp cũ và mới một cách tinh tế.",
    traits: ["Hiện đại", "Trendy", "Sáng tạo", "Cập nhật"],
    strengths: ["Bắt trend nhanh", "Sáng tạo", "Có gu hiện đại"],
    weaknesses: ["Có thể theo đuổi xu hướng quá mức", "Thiếu gốc rễ"],
    tips: ["Giữ những giá trị cốt lõi", "Trend là tốt nhưng đừng quên bản thân"],
  },
  D: {
    type: "D",
    title: "Chè Thái - Người màu sắc",
    emoji: "🌈",
    description: "Bạn thích chè Thái đầy màu sắc! Bạn là người vui vẻ, yêu thích sự sống động và không ngại nổi bật. Giống như ly chè Thái rực rỡ, bạn luôn thu hút sự chú ý ở mọi nơi.",
    traits: ["Rực rỡ", "Vui vẻ", "Nổi bật", "Lạc quan"],
    strengths: ["Thu hút sự chú ý", "Mang lại niềm vui", "Tích cực"],
    weaknesses: ["Có thể quá nổi bật", "Đôi khi thiếu sâu sắc"],
    tips: ["Cân bằng giữa nổi bật và tinh tế", "Chiều sâu cũng quan trọng"],
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
