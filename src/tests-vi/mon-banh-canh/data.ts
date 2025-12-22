// Kiểu Ăn Bánh Canh
// Khám phá tính cách qua cách bạn thưởng thức món bánh canh đặc trưng Việt Nam

export const questions = [
  {
    id: 1,
    question: "Loại bánh canh bạn yêu thích nhất là:",
    options: [
      { text: "Bánh canh cua - đậm đà, sang trọng", type: "A" },
      { text: "Bánh canh giò heo - bình dân, no căng", type: "B" },
      { text: "Bánh canh chả cá - thanh nhẹ, tươi ngon", type: "C" },
      { text: "Bánh canh bột lọc - trong trẻo, tinh tế", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thích nước bánh canh như thế nào?",
    options: [
      { text: "Sánh đặc, béo ngậy từ gạch cua", type: "A" },
      { text: "Trong veo nhưng ngọt đậm", type: "B" },
      { text: "Sền sệt vừa phải", type: "C" },
      { text: "Loãng và thanh, dễ uống hết", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi ăn bánh canh, bạn thường:",
    options: [
      { text: "Ăn từ tốn, thưởng thức từng vị", type: "A" },
      { text: "Ăn nhanh, húp nước ồn ào", type: "B" },
      { text: "Ăn đều đặn, vừa ăn vừa trò chuyện", type: "C" },
      { text: "Ăn chậm rãi, ngắm nghía trước khi ăn", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Loại sợi bánh canh bạn thích nhất:",
    options: [
      { text: "Sợi to tròn, dai dai", type: "A" },
      { text: "Sợi bản dẹt, mềm mịn", type: "B" },
      { text: "Sợi bột lọc trong suốt", type: "C" },
      { text: "Không quan trọng loại sợi", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn thích ăn bánh canh vào lúc nào?",
    options: [
      { text: "Bữa sáng để có sức làm việc", type: "A" },
      { text: "Đêm khuya khi đói bụng", type: "B" },
      { text: "Buổi trưa thay cơm", type: "C" },
      { text: "Bất cứ lúc nào thèm", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Gia vị bạn cho thêm vào bánh canh:",
    options: [
      { text: "Ớt sa tế cay nồng", type: "A" },
      { text: "Tiêu và một chút chanh", type: "B" },
      { text: "Nước mắm pha loãng", type: "C" },
      { text: "Giữ nguyên vị gốc", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Địa điểm ăn bánh canh yêu thích:",
    options: [
      { text: "Nhà hàng nổi tiếng chuyên bánh canh", type: "A" },
      { text: "Quán vỉa hè, xe đẩy quen thuộc", type: "B" },
      { text: "Quán sạch sẽ, không gian đẹp", type: "C" },
      { text: "Tự nấu ở nhà theo công thức gia đình", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Khi quán hết bánh canh, bạn:",
    options: [
      { text: "Tìm quán khác ngay, phải ăn cho được", type: "A" },
      { text: "Ăn món khác, không sao", type: "B" },
      { text: "Về nhà tự nấu", type: "C" },
      { text: "Hẹn hôm khác quay lại", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn ăn kèm bánh canh với gì?",
    options: [
      { text: "Rau sống, giá đỗ", type: "A" },
      { text: "Bánh tráng nướng bẻ vụn", type: "B" },
      { text: "Ớt tươi xắt lát", type: "C" },
      { text: "Không cần ăn kèm", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Phần bạn thích nhất trong tô bánh canh:",
    options: [
      { text: "Cua, ghẹ hoặc thịt", type: "A" },
      { text: "Nước dùng đậm đà", type: "B" },
      { text: "Sợi bánh canh dai ngon", type: "C" },
      { text: "Sự hài hòa của tất cả", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Khi đi du lịch miền Tây, bạn:",
    options: [
      { text: "Nhất định phải tìm ăn bánh canh địa phương", type: "A" },
      { text: "Thử nếu có dịp", type: "B" },
      { text: "So sánh với bánh canh ở nhà", type: "C" },
      { text: "Ưu tiên các món khác", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Với bạn, bánh canh đặc biệt vì:",
    options: [
      { text: "Hương vị đậm đà, không lẫn với món nào", type: "A" },
      { text: "No bụng, giá cả phải chăng", type: "B" },
      { text: "Món ăn vùng miền, mang bản sắc riêng", type: "C" },
      { text: "Kỷ niệm gia đình, quê hương", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người Sành Điệu",
    emoji: "👑",
    description: "Bạn có gu thẩm mỹ cao và đánh giá cao sự tinh tế. Như tô bánh canh cua đắt giá, bạn tìm kiếm chất lượng tốt nhất trong mọi thứ.",
    traits: ["Tinh tế", "Đòi hỏi cao", "Có gu", "Sang trọng"],
    strengths: ["Biết đánh giá chất lượng", "Lựa chọn thông minh", "Tạo ấn tượng tốt"],
    weaknesses: ["Có thể khó tính", "Đôi khi xa cách"],
    tips: ["Đôi khi hãy đơn giản hơn", "Trân trọng những điều bình dị"],
  },
  B: {
    type: "B",
    title: "Người Bình Dân",
    emoji: "😊",
    description: "Bạn yêu thích sự đơn giản và thực tế. Như bánh canh giò heo bình dân no bụng, bạn quan tâm đến giá trị thực sự hơn vẻ bề ngoài.",
    traits: ["Thực tế", "Bình dị", "Dễ gần", "Hài lòng"],
    strengths: ["Dễ thích nghi", "Không đòi hỏi", "Vui vẻ với mọi hoàn cảnh"],
    weaknesses: ["Có thể thiếu tham vọng", "Đôi khi quá dễ dãi"],
    tips: ["Đôi khi hãy tự thưởng cho mình", "Nâng cao tiêu chuẩn khi cần"],
  },
  C: {
    type: "C",
    title: "Người Cân Bằng",
    emoji: "⚖️",
    description: "Bạn tìm kiếm sự hài hòa trong cuộc sống. Như bánh canh chả cá thanh nhẹ, bạn biết cách cân bằng giữa các yếu tố khác nhau.",
    traits: ["Hài hòa", "Cân bằng", "Linh hoạt", "Ổn định"],
    strengths: ["Xử lý tình huống tốt", "Không cực đoan", "Dễ hợp tác"],
    weaknesses: ["Có thể thiếu quyết đoán", "Đôi khi quá thận trọng"],
    tips: ["Dám đưa ra quyết định mạnh mẽ", "Đôi khi hãy theo đuổi đam mê"],
  },
  D: {
    type: "D",
    title: "Người Hoài Niệm",
    emoji: "💝",
    description: "Bạn trân trọng kỷ niệm và giá trị gia đình. Như công thức bánh canh gia truyền, bạn giữ gìn những điều đẹp đẽ từ quá khứ.",
    traits: ["Hoài niệm", "Gia đình", "Truyền thống", "Chân thành"],
    strengths: ["Gắn kết gia đình", "Trân trọng kỷ niệm", "Tình cảm sâu sắc"],
    weaknesses: ["Có thể sống trong quá khứ", "Đôi khi ngại thay đổi"],
    tips: ["Tạo kỷ niệm mới", "Kết hợp truyền thống với hiện đại"],
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
