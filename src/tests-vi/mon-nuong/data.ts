// Kiểu Ăn Nướng
// Khám phá tính cách qua cách bạn thưởng thức món nướng

export const questions = [
  {
    id: 1,
    question: "Loại đồ nướng bạn yêu thích nhất là:",
    options: [
      { text: "Thịt bò nướng - đậm đà, mạnh mẽ", type: "A" },
      { text: "Thịt heo nướng - ngọt thịt, quen thuộc", type: "B" },
      { text: "Hải sản nướng - tươi ngon, đa dạng", type: "C" },
      { text: "Rau củ nướng - healthy, thanh đạm", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thích nướng ở đâu nhất?",
    options: [
      { text: "Nhà hàng buffet nướng sang trọng", type: "A" },
      { text: "Quán nướng vỉa hè, than hồng", type: "B" },
      { text: "BBQ ngoài trời với bạn bè", type: "C" },
      { text: "Tự nướng ở nhà với gia đình", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Độ chín thịt bò bạn thích là:",
    options: [
      { text: "Rare - tái, còn đỏ bên trong", type: "A" },
      { text: "Medium - chín vừa, hồng nhẹ", type: "B" },
      { text: "Well done - chín kỹ, an toàn", type: "C" },
      { text: "Tùy loại thịt mà chọn độ chín", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Nước chấm nướng bạn thích nhất:",
    options: [
      { text: "Muối ớt chanh cay nồng", type: "A" },
      { text: "Ssamjang Hàn Quốc", type: "B" },
      { text: "Nước mắm pha chua ngọt", type: "C" },
      { text: "Tự pha theo công thức riêng", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi nướng, bạn thường:",
    options: [
      { text: "Tự tay nướng, kiểm soát mọi thứ", type: "A" },
      { text: "Để nhân viên nướng cho", type: "B" },
      { text: "Thay phiên nướng với mọi người", type: "C" },
      { text: "Chờ người khác nướng xong rồi ăn", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bữa nướng lý tưởng của bạn có:",
    options: [
      { text: "Rất nhiều loại thịt đa dạng", type: "A" },
      { text: "Vài loại thịt ngon và bia lạnh", type: "B" },
      { text: "Cân bằng thịt, hải sản và rau", type: "C" },
      { text: "Ít thịt, nhiều món phụ và đồ uống", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Khi than hồng cháy quá mạnh, bạn:",
    options: [
      { text: "Nhanh tay lật thịt để không cháy", type: "A" },
      { text: "Gọi nhân viên xử lý", type: "B" },
      { text: "Di chuyển thịt sang vùng nguội hơn", type: "C" },
      { text: "Để người nướng giỏi hơn xử lý", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Món ăn kèm khi nướng bạn thích nhất:",
    options: [
      { text: "Salad rau trộn tươi mát", type: "A" },
      { text: "Cơm trắng hoặc cơm chiên", type: "B" },
      { text: "Lá cải cuốn thịt kiểu Hàn", type: "C" },
      { text: "Kim chi và các món dưa", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Đồ uống khi ăn nướng bạn chọn:",
    options: [
      { text: "Bia lạnh - không gì bằng!", type: "A" },
      { text: "Nước ngọt hoặc trà đá", type: "B" },
      { text: "Soju hoặc rượu", type: "C" },
      { text: "Nước lọc hoặc trà nóng", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Sau bữa nướng, bạn thường:",
    options: [
      { text: "Tiếp tục hàn huyên và uống thêm", type: "A" },
      { text: "Về nhà nghỉ ngơi vì no căng", type: "B" },
      { text: "Đi dạo để tiêu hóa", type: "C" },
      { text: "Ăn thêm đồ tráng miệng", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn thích ăn nướng vào dịp nào?",
    options: [
      { text: "Tiệc tùng, liên hoan", type: "A" },
      { text: "Cuối tuần với gia đình", type: "B" },
      { text: "Hẹn hò hoặc gặp gỡ bạn bè", type: "C" },
      { text: "Khi thèm và có thời gian", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Điều bạn thích nhất ở món nướng là:",
    options: [
      { text: "Hương vị thơm ngon, đậm đà", type: "A" },
      { text: "Cảm giác tự tay nướng và chia sẻ", type: "B" },
      { text: "Không khí vui vẻ, ấm cúng", type: "C" },
      { text: "Sự đa dạng của nguyên liệu", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Vua/Nữ Hoàng Nướng",
    emoji: "👑",
    description: "Bạn là người chiếm sân khấu! Như miếng thịt bò wagyu đắt giá, bạn tự tin, nổi bật và luôn là tâm điểm của mọi bữa tiệc.",
    traits: ["Tự tin", "Quyết đoán", "Mạnh mẽ", "Dẫn dầu"],
    strengths: ["Khả năng lãnh đạo", "Không ngại thử thách", "Tạo ấn tượng mạnh"],
    weaknesses: ["Có thể áp đảo người khác", "Đôi khi quá cầu toàn"],
    tips: ["Lắng nghe ý kiến người khác", "Đôi khi hãy để người khác tỏa sáng"],
  },
  B: {
    type: "B",
    title: "Người Bình Dị",
    emoji: "🍖",
    description: "Bạn yêu những điều giản dị và chân thật. Như bữa nướng vỉa hè bình dân, bạn tìm thấy hạnh phúc trong những khoảnh khắc đơn giản.",
    traits: ["Bình dị", "Chân thành", "Dễ gần", "Thực tế"],
    strengths: ["Dễ hòa đồng", "Không đòi hỏi", "Được mọi người yêu mến"],
    weaknesses: ["Có thể thiếu tham vọng", "Đôi khi quá dễ tính"],
    tips: ["Đôi khi hãy tự thưởng cho mình", "Dám mơ lớn hơn"],
  },
  C: {
    type: "C",
    title: "Người Gắn Kết",
    emoji: "🤗",
    description: "Bạn coi trọng mối quan hệ và kết nối. Như bữa BBQ ngoài trời vui vẻ, bạn mang mọi người lại gần nhau và tạo ra những kỷ niệm đẹp.",
    traits: ["Gắn kết", "Vui vẻ", "Quan tâm", "Hào phóng"],
    strengths: ["Xây dựng mối quan hệ tốt", "Tạo không khí vui vẻ", "Được nhiều người yêu quý"],
    weaknesses: ["Có thể quá hy sinh cho người khác", "Đôi khi thiếu thời gian cho bản thân"],
    tips: ["Dành thời gian cho chính mình", "Học cách nói không"],
  },
  D: {
    type: "D",
    title: "Người Tận Hưởng",
    emoji: "🌿",
    description: "Bạn sống theo cách riêng và không vội vàng. Như việc thưởng thức từng miếng thịt nướng chậm rãi, bạn biết cách tận hưởng cuộc sống.",
    traits: ["Tận hưởng", "Thư thái", "Độc lập", "Có phong cách riêng"],
    strengths: ["Sống có chất lượng", "Không bị cuốn vào nhịp sống gấp", "Biết tự chăm sóc"],
    weaknesses: ["Có thể bỏ lỡ cơ hội", "Đôi khi xa cách"],
    tips: ["Đôi khi hãy chủ động hơn", "Tham gia các hoạt động tập thể"],
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
