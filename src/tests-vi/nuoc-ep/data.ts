// Kiểu nước ép yêu thích
// Khám phá tính cách qua loại nước ép bạn yêu thích

export const questions = [
  {
    id: 1,
    question: "Nước ép nào bạn thích nhất?",
    options: [
      { text: "Nước cam, nước chanh - chua thanh", type: "A" },
      { text: "Nước dưa hấu, dứa - ngọt mát", type: "B" },
      { text: "Nước cà rốt, củ dền - detox", type: "C" },
      { text: "Nước ép mix nhiều loại trái cây", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn uống nước ép vì lý do gì?",
    options: [
      { text: "Bổ sung vitamin C, tăng đề kháng", type: "A" },
      { text: "Giải khát, ngon miệng", type: "B" },
      { text: "Detox, làm đẹp da", type: "C" },
      { text: "Thay thế bữa ăn nhẹ", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn thích nước ép thế nào?",
    options: [
      { text: "Ép nguyên chất, không đường", type: "A" },
      { text: "Thêm đường hoặc mật ong", type: "B" },
      { text: "Kết hợp với rau xanh", type: "C" },
      { text: "Blend với sữa chua, sữa", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn mua nước ép ở đâu?",
    options: [
      { text: "Tự ép ở nhà với máy ép", type: "A" },
      { text: "Quán nước ép vỉa hè", type: "B" },
      { text: "Cửa hàng juice bar cao cấp", type: "C" },
      { text: "Siêu thị, cửa hàng tiện lợi", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Thời điểm bạn hay uống nước ép?",
    options: [
      { text: "Buổi sáng, khởi đầu ngày mới", type: "A" },
      { text: "Khi nắng nóng, cần giải khát", type: "B" },
      { text: "Sau tập gym, bổ sung năng lượng", type: "C" },
      { text: "Bất cứ lúc nào thèm", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Trái cây Việt Nam nào bạn thích ép nhất?",
    options: [
      { text: "Cam, bưởi, chanh", type: "A" },
      { text: "Dưa hấu, dứa, thanh long", type: "B" },
      { text: "Cà rốt, cần tây, rau má", type: "C" },
      { text: "Xoài, mãng cầu, sapoche", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn quan tâm điều gì khi chọn nước ép?",
    options: [
      { text: "Nguồn gốc trái cây sạch, organic", type: "A" },
      { text: "Vị ngon, giá cả hợp lý", type: "B" },
      { text: "Thành phần dinh dưỡng rõ ràng", type: "C" },
      { text: "Sự kết hợp hương vị độc đáo", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn cho gì vào nước ép?",
    options: [
      { text: "Không cho gì, giữ nguyên vị", type: "A" },
      { text: "Đá xay cho mát", type: "B" },
      { text: "Hạt chia, bột protein", type: "C" },
      { text: "Sữa chua, mật ong", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Nước ép đóng chai bạn nghĩ sao?",
    options: [
      { text: "Không thích, ép tươi mới tốt", type: "A" },
      { text: "Tiện lợi, mua khi cần", type: "B" },
      { text: "Chỉ mua loại organic, cold-pressed", type: "C" },
      { text: "OK, nhưng thích tươi hơn", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn ép nước cho ai?",
    options: [
      { text: "Cho bản thân, chăm sóc sức khỏe", type: "A" },
      { text: "Cho cả gia đình, người thân", type: "B" },
      { text: "Theo chế độ ăn kiêng", type: "C" },
      { text: "Ai thích thì mời", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn có máy ép trái cây ở nhà không?",
    options: [
      { text: "Có, dùng hàng ngày", type: "A" },
      { text: "Không, mua ngoài tiện hơn", type: "B" },
      { text: "Có máy ép chậm cao cấp", type: "C" },
      { text: "Có nhưng ít dùng", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Nước ép lý tưởng với bạn là?",
    options: [
      { text: "Tươi ngon, vitamin dồi dào", type: "A" },
      { text: "Ngọt mát, giải nhiệt tốt", type: "B" },
      { text: "Detox, giúp làm đẹp", type: "C" },
      { text: "Hương vị phong phú, sáng tạo", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người yêu nước ép nguyên chất",
    emoji: "🍊",
    description: "Bạn là người có lối sống lành mạnh và biết chăm sóc bản thân. Bạn thích sự tự nhiên, nguyên bản và không cần những thứ phức tạp.",
    traits: ["Lành mạnh", "Tự nhiên", "Kỷ luật", "Chăm chỉ"],
    strengths: ["Sống healthy", "Có kế hoạch", "Kiên trì với mục tiêu"],
    weaknesses: ["Có thể quá khắt khe", "Khó linh hoạt"],
    tips: ["Thỉnh thoảng cho phép mình thưởng thức", "Không cần hoàn hảo 100%"],
  },
  B: {
    type: "B",
    title: "Người yêu nước ép giải khát",
    emoji: "🍉",
    description: "Bạn là người vui vẻ, đơn giản và biết tận hưởng cuộc sống. Nước ép với bạn là để giải khát và mang lại niềm vui, không cần quá cầu kỳ.",
    traits: ["Vui vẻ", "Đơn giản", "Thoải mái", "Dễ tính"],
    strengths: ["Dễ hài lòng", "Tâm hồn tự do", "Không phức tạp"],
    weaknesses: ["Có thể ít quan tâm dinh dưỡng", "Dễ hài lòng quá"],
    tips: ["Thử các loại nước ép bổ dưỡng", "Quan tâm hơn đến sức khỏe"],
  },
  C: {
    type: "C",
    title: "Người yêu nước ép detox",
    emoji: "🥬",
    description: "Bạn là người cầu toàn trong việc chăm sóc sức khỏe và ngoại hình. Bạn tin vào sức mạnh của dinh dưỡng và luôn tìm kiếm những gì tốt nhất cho cơ thể.",
    traits: ["Cầu toàn", "Quan tâm sức khỏe", "Làm đẹp", "Có kiến thức"],
    strengths: ["Am hiểu dinh dưỡng", "Kỷ luật cao", "Biết chăm sóc bản thân"],
    weaknesses: ["Có thể quá nghiêm khắc", "Áp lực bản thân cao"],
    tips: ["Thư giãn đôi khi", "Không cần hoàn hảo mọi lúc"],
  },
  D: {
    type: "D",
    title: "Người yêu nước ép sáng tạo",
    emoji: "🥤",
    description: "Bạn là người sáng tạo, thích khám phá và không ngại thử những kết hợp mới. Bạn tin rằng cuộc sống cần sự đa dạng và phong phú.",
    traits: ["Sáng tạo", "Khám phá", "Linh hoạt", "Đa dạng"],
    strengths: ["Không ngại thử điều mới", "Tư duy sáng tạo", "Thích nghi tốt"],
    weaknesses: ["Có thể thiếu kiên định", "Hay thay đổi"],
    tips: ["Tìm một vài công thức yêu thích", "Cân bằng giữa sáng tạo và ổn định"],
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
