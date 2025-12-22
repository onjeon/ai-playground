// Bánh truyền thống Việt Nam
// Khám phá loại bánh Việt Nam phù hợp với tính cách của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn thích bánh có vị như thế nào?",
    options: [
      { text: "Mặn, đậm đà, có nhân thịt", type: "A" },
      { text: "Ngọt nhẹ, thơm nếp", type: "B" },
      { text: "Ngọt đậm, có đậu, dừa", type: "C" },
      { text: "Thanh nhẹ, không quá ngọt", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thích texture bánh như thế nào?",
    options: [
      { text: "Dẻo mềm, tan trong miệng", type: "A" },
      { text: "Giòn, xốp", type: "B" },
      { text: "Dai, dai, nhai đã", type: "C" },
      { text: "Mềm mịn, không cần nhai nhiều", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn thường ăn bánh vào dịp nào?",
    options: [
      { text: "Tết, lễ hội truyền thống", type: "A" },
      { text: "Ăn sáng, ăn xế", type: "B" },
      { text: "Tráng miệng sau bữa ăn", type: "C" },
      { text: "Bất cứ khi nào thèm", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn mua bánh ở đâu?",
    options: [
      { text: "Nhà tự làm hoặc người quen gói", type: "A" },
      { text: "Quán bán bánh truyền thống", type: "B" },
      { text: "Tiệm bánh, bakery", type: "C" },
      { text: "Siêu thị, cửa hàng tiện lợi", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi được tặng bánh, bạn thích loại nào?",
    options: [
      { text: "Bánh chưng, bánh tét truyền thống", type: "A" },
      { text: "Bánh tráng, bánh đa", type: "B" },
      { text: "Bánh ngọt, bánh đậu xanh", type: "C" },
      { text: "Bánh mới lạ, khác thường", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn thích bánh của vùng miền nào?",
    options: [
      { text: "Miền Bắc - tinh tế, truyền thống", type: "A" },
      { text: "Miền Trung - đậm đà, đặc sắc", type: "B" },
      { text: "Miền Nam - ngọt, phong phú", type: "C" },
      { text: "Đặc sản các vùng, đều muốn thử", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn ăn bánh cùng với gì?",
    options: [
      { text: "Uống trà nóng", type: "A" },
      { text: "Nước chấm, rau sống", type: "B" },
      { text: "Cà phê, sữa", type: "C" },
      { text: "Ăn riêng, không cần gì kèm", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Điều gì khiến bạn thích bánh Việt Nam?",
    options: [
      { text: "Gợi nhớ tuổi thơ, gia đình", type: "A" },
      { text: "Hương vị độc đáo, không nơi nào có", type: "B" },
      { text: "Đa dạng, nhiều loại để thử", type: "C" },
      { text: "Gần gũi, dễ tìm, giá rẻ", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn tự làm bánh như thế nào?",
    options: [
      { text: "Thích làm bánh truyền thống, theo công thức gia đình", type: "A" },
      { text: "Thử làm theo video, recipe online", type: "B" },
      { text: "Không tự làm, thích mua sẵn", type: "C" },
      { text: "Sáng tạo, biến tấu theo ý mình", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bánh nào bạn có thể ăn mãi không chán?",
    options: [
      { text: "Bánh cuốn - thanh, nhẹ, dễ ăn", type: "A" },
      { text: "Bánh mì - đa năng, tiện lợi", type: "B" },
      { text: "Bánh bèo, bánh nậm - đặc sản miền Trung", type: "C" },
      { text: "Bánh tráng trộn - vui miệng, đa vị", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn giới thiệu bánh Việt cho người nước ngoài như thế nào?",
    options: [
      { text: "Bánh mì - dễ ăn, nổi tiếng thế giới", type: "A" },
      { text: "Phở cuốn, gỏi cuốn - healthy, đẹp mắt", type: "B" },
      { text: "Bánh xèo - crispy, thú vị", type: "C" },
      { text: "Tùy họ thích gì, hỏi trước", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bánh truyền thống đối với bạn là gì?",
    options: [
      { text: "Di sản văn hóa cần gìn giữ", type: "A" },
      { text: "Ký ức tuổi thơ đẹp", type: "B" },
      { text: "Niềm vui ẩm thực đơn giản", type: "C" },
      { text: "Nguồn cảm hứng ẩm thực", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Bánh Chưng - Truyền thống Vững bền",
    emoji: "🟢",
    description: "Bạn như bánh chưng - truyền thống, vững bền và có ý nghĩa sâu sắc. Bạn trân trọng giá trị gia đình, văn hóa và những điều bền vững qua thời gian.",
    traits: ["Truyền thống", "Gia đình", "Vững bền", "Ý nghĩa"],
    strengths: ["Giữ gìn truyền thống", "Đáng tin cậy", "Có chiều sâu"],
    weaknesses: ["Có thể bảo thủ", "Khó thay đổi"],
    tips: ["Mở lòng với điều mới", "Kết hợp truyền thống với hiện đại"],
  },
  B: {
    type: "B",
    title: "Bánh Mì - Đa năng Thích nghi",
    emoji: "🥖",
    description: "Bạn như bánh mì Việt Nam - fusion hoàn hảo, đa năng và được yêu thích toàn cầu. Bạn biết cách thích nghi, kết hợp và tạo ra điều độc đáo.",
    traits: ["Đa năng", "Thích nghi", "Sáng tạo", "Phổ biến"],
    strengths: ["Linh hoạt", "Được nhiều người yêu thích", "Dễ thích nghi"],
    weaknesses: ["Có thể thiếu bản sắc", "Quá phổ biến"],
    tips: ["Giữ nét riêng biệt", "Đừng cố làm hài lòng tất cả"],
  },
  C: {
    type: "C",
    title: "Bánh Ngọt - Tinh tế Ngọt ngào",
    emoji: "🍰",
    description: "Bạn như các loại bánh ngọt Việt - tinh tế, ngọt ngào và mang niềm vui. Bạn biết cách tạo ra những khoảnh khắc ngọt ngào cho cuộc sống.",
    traits: ["Tinh tế", "Ngọt ngào", "Vui vẻ", "Nghệ thuật"],
    strengths: ["Mang lại niềm vui", "Thẩm mỹ cao", "Tinh tế trong chi tiết"],
    weaknesses: ["Có thể quá ngọt", "Đôi khi xa vời"],
    tips: ["Cân bằng ngọt đắng", "Thực tế hơn đôi khi"],
  },
  D: {
    type: "D",
    title: "Bánh Tráng Trộn - Vui vẻ Sáng tạo",
    emoji: "🥗",
    description: "Bạn như đĩa bánh tráng trộn - vui nhộn, sáng tạo và đầy bất ngờ. Bạn thích mix & match, thử nghiệm và tạo ra những điều mới mẻ.",
    traits: ["Sáng tạo", "Vui nhộn", "Thử nghiệm", "Trẻ trung"],
    strengths: ["Luôn mới mẻ", "Năng lượng tích cực", "Sáng tạo không ngừng"],
    weaknesses: ["Có thể thiếu bền vững", "Quá nhiều thứ"],
    tips: ["Tập trung vào chất lượng", "Đôi khi đơn giản là tốt nhất"],
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
