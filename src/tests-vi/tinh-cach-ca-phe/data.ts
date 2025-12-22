// Tính cách qua cà phê Việt Nam
// Khám phá tính cách của bạn qua cách bạn uống cà phê

export const questions = [
  {
    id: 1,
    question: "Bạn thích loại cà phê nào nhất?",
    options: [
      { text: "Cà phê đen đá - đậm đắng, mạnh mẽ", type: "A" },
      { text: "Cà phê sữa đá - ngọt ngào, dễ uống", type: "B" },
      { text: "Bạc xỉu - nhẹ nhàng, nhiều sữa", type: "C" },
      { text: "Cà phê trứng - độc đáo, béo ngậy", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thường uống cà phê ở đâu?",
    options: [
      { text: "Quán cóc vỉa hè - bình dân, thoải mái", type: "A" },
      { text: "Quán cà phê sang trọng - yên tĩnh, đẹp", type: "B" },
      { text: "Highlands/Starbucks - tiện lợi, hiện đại", type: "C" },
      { text: "Pha tại nhà - riêng tư, tiết kiệm", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn uống mấy ly cà phê mỗi ngày?",
    options: [
      { text: "3 ly trở lên - nghiện rồi", type: "A" },
      { text: "2 ly - vừa đủ tỉnh táo", type: "B" },
      { text: "1 ly - điều độ", type: "C" },
      { text: "Không cố định - tùy tâm trạng", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi đi uống cà phê, bạn thường làm gì?",
    options: [
      { text: "Đọc báo, lướt điện thoại", type: "A" },
      { text: "Nói chuyện với bạn bè", type: "B" },
      { text: "Làm việc trên laptop", type: "C" },
      { text: "Ngồi ngắm phố, suy nghĩ", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn thích cà phê phin hay cà phê máy?",
    options: [
      { text: "Phin - chờ đợi là một nghệ thuật", type: "A" },
      { text: "Máy - nhanh, đều, tiện", type: "B" },
      { text: "Đều được, miễn ngon", type: "C" },
      { text: "Thích thử cả hai", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi cà phê quá đắng, bạn sẽ?",
    options: [
      { text: "Uống nguyên, đó mới là cà phê", type: "A" },
      { text: "Thêm đường hoặc sữa", type: "B" },
      { text: "Pha thêm nước đá", type: "C" },
      { text: "Gọi ly khác", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn nghĩ gì về cà phê Việt Nam?",
    options: [
      { text: "Tuyệt vời nhất thế giới", type: "A" },
      { text: "Ngon nhưng cần cải tiến", type: "B" },
      { text: "Thích cà phê nước ngoài hơn", type: "C" },
      { text: "Mỗi loại có cái hay riêng", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Khi đi quán cà phê hẹn hò, bạn thường?",
    options: [
      { text: "Gọi cà phê đen thể hiện đẳng cấp", type: "A" },
      { text: "Gọi món giống đối phương", type: "B" },
      { text: "Gọi món yêu thích không quan tâm", type: "C" },
      { text: "Để đối phương gọi cho", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn có thể sống thiếu cà phê không?",
    options: [
      { text: "Không, sẽ đau đầu và mệt mỏi", type: "A" },
      { text: "Khó, nhưng cố gắng được", type: "B" },
      { text: "Được, không vấn đề gì", type: "C" },
      { text: "Chưa thử bao giờ", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn thường uống cà phê vào lúc nào?",
    options: [
      { text: "Sáng sớm, mở mắt là pha", type: "A" },
      { text: "Sau bữa trưa, chống buồn ngủ", type: "B" },
      { text: "Chiều tối, thư giãn", type: "C" },
      { text: "Bất cứ lúc nào", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Nếu tự pha cà phê, bạn sẽ?",
    options: [
      { text: "Pha phin truyền thống", type: "A" },
      { text: "Dùng máy pha espresso", type: "B" },
      { text: "Dùng cà phê hòa tan", type: "C" },
      { text: "Cold brew để tủ lạnh", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bạn sẵn sàng chi bao nhiêu cho một ly cà phê ngon?",
    options: [
      { text: "Dưới 30k - cà phê ngon không cần đắt", type: "A" },
      { text: "30-50k - vừa phải", type: "B" },
      { text: "50-100k - cho trải nghiệm tốt", type: "C" },
      { text: "Không giới hạn - quan trọng là ngon", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Chiến binh cà phê",
    emoji: "☕",
    description: "Bạn là người mạnh mẽ, quyết đoán và có cá tính rõ ràng. Giống như ly cà phê đen không đường, bạn không cần những thứ hào nhoáng bên ngoài để tỏa sáng.",
    traits: ["Mạnh mẽ", "Quyết đoán", "Độc lập", "Kiên cường"],
    strengths: ["Không sợ khó khăn", "Có chính kiến", "Tự chủ cao"],
    weaknesses: ["Đôi khi quá cứng rắn", "Khó nhận lời khuyên"],
    tips: ["Học cách mềm mại hơn", "Lắng nghe người khác"],
  },
  B: {
    type: "B",
    title: "Người hài hòa",
    emoji: "🥛",
    description: "Bạn là người biết cân bằng giữa mạnh mẽ và ngọt ngào. Như cà phê sữa, bạn có thể hòa hợp với mọi người và tạo ra sự cân bằng trong cuộc sống.",
    traits: ["Hài hòa", "Linh hoạt", "Dễ mến", "Chu đáo"],
    strengths: ["Biết cách thích nghi", "Dễ gần", "Giỏi kết nối"],
    weaknesses: ["Đôi khi thiếu lập trường", "Muốn làm hài lòng tất cả"],
    tips: ["Giữ vững quan điểm của mình", "Học cách từ chối"],
  },
  C: {
    type: "C",
    title: "Người hiện đại",
    emoji: "🌐",
    description: "Bạn là người thực tế và hiện đại. Bạn thích sự tiện lợi và hiệu quả, không quá cầu kỳ nhưng vẫn đảm bảo chất lượng cuộc sống.",
    traits: ["Hiện đại", "Thực tế", "Năng động", "Hiệu quả"],
    strengths: ["Tiết kiệm thời gian", "Cập nhật xu hướng", "Linh hoạt"],
    weaknesses: ["Đôi khi hời hợt", "Thiếu kiên nhẫn"],
    tips: ["Trân trọng những điều truyền thống", "Dành thời gian sống chậm"],
  },
  D: {
    type: "D",
    title: "Người sáng tạo",
    emoji: "🎨",
    description: "Bạn là người sáng tạo và thích những điều độc đáo. Như cà phê trứng, bạn luôn tìm cách làm mới mọi thứ và không ngại khác biệt.",
    traits: ["Sáng tạo", "Độc đáo", "Mạo hiểm", "Nghệ sĩ"],
    strengths: ["Tư duy khác biệt", "Không ngại thử nghiệm", "Đầy ý tưởng"],
    weaknesses: ["Đôi khi quá lạ lùng", "Khó được hiểu"],
    tips: ["Cân bằng giữa sáng tạo và thực tế", "Kết nối với người khác hơn"],
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
