// Món Ăn Sáng Yêu Thích
// Khám phá tính cách của bạn qua thói quen ăn sáng

export const questions = [
  {
    id: 1,
    question: "Bạn thường ăn sáng vào lúc mấy giờ?",
    options: [
      { text: "5-6 giờ sáng, rất sớm", type: "A" },
      { text: "7-8 giờ sáng, trước khi đi làm", type: "B" },
      { text: "9-10 giờ sáng, muộn một chút", type: "C" },
      { text: "Không cố định, khi nào đói thì ăn", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Món ăn sáng yêu thích của bạn?",
    options: [
      { text: "Phở, bún, hủ tiếu - món nước", type: "A" },
      { text: "Bánh mì, xôi - nhanh gọn", type: "B" },
      { text: "Cơm tấm, bún thịt nướng - no lâu", type: "C" },
      { text: "Bánh cuốn, bánh bèo - thanh nhẹ", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn thường ăn sáng ở đâu?",
    options: [
      { text: "Quán quen gần nhà", type: "A" },
      { text: "Mua mang về, ăn tại công ty", type: "B" },
      { text: "Tự nấu tại nhà", type: "C" },
      { text: "Tùy lúc, quán nào tiện thì vào", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn dành bao nhiêu thời gian cho bữa sáng?",
    options: [
      { text: "30 phút - 1 tiếng, thư thả", type: "A" },
      { text: "10-15 phút, ăn nhanh", type: "B" },
      { text: "20-30 phút, vừa phải", type: "C" },
      { text: "Không cố định, tùy ngày", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn có bỏ bữa sáng không?",
    options: [
      { text: "Không bao giờ, sáng phải ăn", type: "A" },
      { text: "Rất hiếm khi, chỉ khi cực kỳ bận", type: "B" },
      { text: "Đôi khi, khi ngủ muộn", type: "C" },
      { text: "Khá thường xuyên, quen rồi", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Ăn sáng một mình hay với ai?",
    options: [
      { text: "Với gia đình, truyền thống mỗi sáng", type: "A" },
      { text: "Một mình, nhanh gọn", type: "B" },
      { text: "Với đồng nghiệp, kết hợp làm việc", type: "C" },
      { text: "Tùy lúc, ai rủ thì ăn cùng", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Đồ uống kèm bữa sáng của bạn?",
    options: [
      { text: "Cà phê sữa đá - không thể thiếu", type: "A" },
      { text: "Trà nóng - thanh nhẹ", type: "B" },
      { text: "Nước ép, sinh tố - healthy", type: "C" },
      { text: "Nước lọc hoặc không uống gì", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Ngân sách cho bữa sáng?",
    options: [
      { text: "20-30k, bình dân", type: "A" },
      { text: "30-50k, thoải mái một chút", type: "B" },
      { text: "50k trở lên, chất lượng", type: "C" },
      { text: "Không quan tâm, ngon là được", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi quán sáng quen nghỉ, bạn?",
    options: [
      { text: "Tìm quán khác bán món tương tự", type: "A" },
      { text: "Mua bánh mì hoặc đồ tiện lợi", type: "B" },
      { text: "Nấu tại nhà", type: "C" },
      { text: "Bỏ bữa sáng hôm đó", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bữa sáng cuối tuần có khác ngày thường không?",
    options: [
      { text: "Không, vẫn ăn như mọi khi", type: "A" },
      { text: "Có, ngủ muộn hơn, ăn muộn hơn", type: "B" },
      { text: "Có, ăn sang hơn, đi quán đẹp", type: "C" },
      { text: "Có, nấu ăn tại nhà với gia đình", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bữa sáng với bạn là?",
    options: [
      { text: "Bữa ăn quan trọng nhất trong ngày", type: "A" },
      { text: "Năng lượng để bắt đầu công việc", type: "B" },
      { text: "Thói quen, nếp sống", type: "C" },
      { text: "Không quá quan trọng", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Nếu giới thiệu món ăn sáng VN cho khách nước ngoài?",
    options: [
      { text: "Phở - tinh hoa ẩm thực Việt", type: "A" },
      { text: "Bánh mì - nổi tiếng thế giới", type: "B" },
      { text: "Bún chả - đậm đà đặc trưng", type: "C" },
      { text: "Cho họ thử nhiều món khác nhau", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người Coi Trọng Bữa Sáng",
    emoji: "🌅",
    description: "Bữa sáng là bữa ăn quan trọng nhất trong ngày với bạn! Bạn không bao giờ bỏ bữa sáng và dành thời gian để thưởng thức. Bạn là người có nếp sống điều độ, coi trọng sức khỏe và truyền thống.",
    traits: ["Điều độ", "Coi trọng sức khỏe", "Truyền thống", "Kỷ luật"],
    strengths: ["Sức khỏe tốt", "Năng lượng dồi dào", "Thói quen tốt"],
    weaknesses: ["Đôi khi cứng nhắc", "Khó thay đổi thói quen"],
    tips: ["Đôi khi hãy linh hoạt hơn", "Thử món mới vào cuối tuần"],
  },
  B: {
    type: "B",
    title: "Người Ăn Sáng Thực Dụng",
    emoji: "⚡",
    description: "Bạn ăn sáng nhanh gọn để bắt đầu ngày làm việc hiệu quả! Bạn coi bữa sáng như nhiên liệu cần thiết. Bạn là người bận rộn, hiệu quả và biết cách tối ưu thời gian.",
    traits: ["Hiệu quả", "Bận rộn", "Thực tế", "Nhanh gọn"],
    strengths: ["Quản lý thời gian tốt", "Năng suất cao", "Không lãng phí"],
    weaknesses: ["Ít thưởng thức", "Đôi khi vội vàng"],
    tips: ["Đôi khi hãy dành thời gian thưởng thức", "Ăn sáng chậm hơn vào cuối tuần"],
  },
  C: {
    type: "C",
    title: "Người Sành Ăn Sáng",
    emoji: "👨‍🍳",
    description: "Bạn coi trọng chất lượng bữa sáng! Bạn biết cách chọn món ngon, quán chất lượng và không ngại đầu tư cho bữa sáng. Bạn là người có gu, biết thưởng thức và yêu ẩm thực.",
    traits: ["Có gu", "Biết thưởng thức", "Yêu ẩm thực", "Cầu toàn"],
    strengths: ["Trải nghiệm ẩm thực tốt", "Biết quán ngon", "Bữa sáng chất lượng"],
    weaknesses: ["Đôi khi tốn kém", "Mất thời gian tìm quán"],
    tips: ["Cân bằng giữa chất lượng và tiện lợi", "Chia sẻ địa điểm với bạn bè"],
  },
  D: {
    type: "D",
    title: "Người Ăn Sáng Tự Do",
    emoji: "🎲",
    description: "Bạn ăn sáng theo tâm trạng và cảm hứng! Không có quy tắc cố định, đôi khi ăn, đôi khi không. Bạn là người linh hoạt, tự do và không bị ràng buộc bởi thói quen.",
    traits: ["Linh hoạt", "Tự do", "Không ràng buộc", "Thoải mái"],
    strengths: ["Không stress", "Thích nghi mọi hoàn cảnh", "Tự do"],
    weaknesses: ["Đôi khi thiếu năng lượng", "Thói quen không tốt cho sức khỏe"],
    tips: ["Cố gắng ăn sáng đều đặn hơn", "Ít nhất uống gì đó vào buổi sáng"],
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
