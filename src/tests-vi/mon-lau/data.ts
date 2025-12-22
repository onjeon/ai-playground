// Kiểu Ăn Lẩu
// Khám phá tính cách qua cách bạn thưởng thức món lẩu

export const questions = [
  {
    id: 1,
    question: "Loại lẩu bạn yêu thích nhất là:",
    options: [
      { text: "Lẩu Thái chua cay - đậm đà, kích thích", type: "A" },
      { text: "Lẩu gà lá giang - thanh mát, Việt Nam", type: "B" },
      { text: "Lẩu bò nhúng dấm - tinh tế, nhẹ nhàng", type: "C" },
      { text: "Lẩu nấm - healthy, thanh đạm", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Khi ăn lẩu với nhóm bạn, bạn thường:",
    options: [
      { text: "Chủ động gọi món và điều phối", type: "A" },
      { text: "Góp ý và theo đa số", type: "B" },
      { text: "Tùy mọi người, ăn gì cũng được", type: "C" },
      { text: "Chỉ ăn những món mình thích", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Cách nhúng lẩu của bạn là:",
    options: [
      { text: "Nhúng nhanh, ăn tái còn giòn", type: "A" },
      { text: "Nhúng vừa, chờ chín hẳn", type: "B" },
      { text: "Để nấu chung trong nồi lâu hơn", type: "C" },
      { text: "Tùy loại thực phẩm mà nhúng khác nhau", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Nước chấm lẩu bạn pha như thế nào?",
    options: [
      { text: "Cay nồng, nhiều ớt sa tế", type: "A" },
      { text: "Theo công thức có sẵn", type: "B" },
      { text: "Nhạt nhạt, ít gia vị", type: "C" },
      { text: "Pha riêng theo sở thích độc đáo", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Nguyên liệu bạn thích nhúng lẩu nhất:",
    options: [
      { text: "Thịt bò, thịt heo các loại", type: "A" },
      { text: "Hải sản tươi sống", type: "B" },
      { text: "Rau củ và nấm", type: "C" },
      { text: "Tofu và các loại cá viên", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn thích ăn lẩu vào dịp nào?",
    options: [
      { text: "Tiệc tùng, họp mặt bạn bè", type: "A" },
      { text: "Gia đình sum họp cuối tuần", type: "B" },
      { text: "Khi trời lạnh, muốn ấm áp", type: "C" },
      { text: "Bất cứ khi nào thèm", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Nếu nồi lẩu sắp hết nước, bạn:",
    options: [
      { text: "Gọi thêm nước dùng ngay", type: "A" },
      { text: "Ăn nốt đồ còn lại rồi kết thúc", type: "B" },
      { text: "Chờ xem mọi người muốn gì", type: "C" },
      { text: "Tận dụng nước cốt đậm đà còn lại", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Khi ăn lẩu, điều bạn thích nhất là:",
    options: [
      { text: "Không khí vui vẻ, trò chuyện", type: "A" },
      { text: "Hương vị nước lẩu thơm ngon", type: "B" },
      { text: "Nguyên liệu tươi ngon đa dạng", type: "C" },
      { text: "Sự ấm áp và gắn kết", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn gọi bao nhiêu loại thịt/hải sản cho bữa lẩu?",
    options: [
      { text: "Càng nhiều càng tốt, ăn đa dạng", type: "A" },
      { text: "Vừa đủ cho số người ăn", type: "B" },
      { text: "Ít thôi, tập trung vào chất lượng", type: "C" },
      { text: "Tùy ngân sách và sở thích", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Cuối bữa lẩu, bạn thường:",
    options: [
      { text: "Cho mì hoặc cháo vào nước dùng", type: "A" },
      { text: "Ăn thêm cơm trắng", type: "B" },
      { text: "Uống nước dùng còn lại", type: "C" },
      { text: "No rồi, không ăn thêm gì", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Quán lẩu lý tưởng với bạn là:",
    options: [
      { text: "Buffet lẩu ăn thả ga", type: "A" },
      { text: "Quán có nước dùng đặc biệt", type: "B" },
      { text: "Quán sạch sẽ, không gian đẹp", type: "C" },
      { text: "Quán vỉa hè, dân dã nhưng ngon", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Lẩu với bạn là:",
    options: [
      { text: "Bữa tiệc đúng nghĩa", type: "A" },
      { text: "Cách để gắn kết mọi người", type: "B" },
      { text: "Món ăn ngon miệng, no bụng", type: "C" },
      { text: "Trải nghiệm ẩm thực thú vị", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Linh Hồn Của Bữa Tiệc",
    emoji: "🎉",
    description: "Bạn là người tạo ra không khí vui vẻ! Như nồi lẩu sôi sục, bạn mang đến năng lượng và sự sôi động cho mọi cuộc gặp gỡ.",
    traits: ["Sôi động", "Hào phóng", "Chủ động", "Vui vẻ"],
    strengths: ["Kết nối mọi người", "Tạo không khí tốt", "Dám nghĩ dám làm"],
    weaknesses: ["Có thể quá ồn ào", "Đôi khi áp đảo người khác"],
    tips: ["Lắng nghe nhiều hơn", "Để người khác cũng được thể hiện"],
  },
  B: {
    type: "B",
    title: "Người Hòa Hợp",
    emoji: "🤝",
    description: "Bạn coi trọng sự hài hòa và gắn kết. Như bữa lẩu gia đình ấm cúng, bạn mang đến sự an yên và tình cảm chân thành.",
    traits: ["Hài hòa", "Ấm áp", "Quan tâm", "Thấu hiểu"],
    strengths: ["Gắn kết gia đình", "Xây dựng mối quan hệ tốt", "Tạo cảm giác an toàn"],
    weaknesses: ["Có thể quá nhường nhịn", "Đôi khi thiếu quyết đoán"],
    tips: ["Thể hiện ý kiến riêng nhiều hơn", "Đặt nhu cầu bản thân lên trước đôi khi"],
  },
  C: {
    type: "C",
    title: "Người Tinh Tế",
    emoji: "✨",
    description: "Bạn quan tâm đến chất lượng và sự tinh tế. Như lẩu bò nhúng dấm đơn giản nhưng sang trọng, bạn biết cách thưởng thức những điều tốt đẹp nhất.",
    traits: ["Tinh tế", "Chọn lọc", "Thanh lịch", "Có gu"],
    strengths: ["Biết đánh giá chất lượng", "Lựa chọn thông minh", "Thẩm mỹ cao"],
    weaknesses: ["Có thể khó tính", "Đôi khi khép kín"],
    tips: ["Mở lòng với những điều bình dị", "Đôi khi hãy buông lỏng hơn"],
  },
  D: {
    type: "D",
    title: "Người Độc Lập",
    emoji: "🎯",
    description: "Bạn biết rõ mình muốn gì và không ngại khác biệt. Như việc pha nước chấm theo cách riêng, bạn tự tin đi theo con đường của mình.",
    traits: ["Độc lập", "Sáng tạo", "Tự tin", "Không theo số đông"],
    strengths: ["Có quan điểm riêng", "Sáng tạo", "Không bị ảnh hưởng bởi đám đông"],
    weaknesses: ["Có thể cô đơn", "Đôi khi bỏ lỡ niềm vui tập thể"],
    tips: ["Đôi khi hòa nhập cũng vui", "Chia sẻ ý tưởng với mọi người"],
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
