// BLACKPINK thành viên phù hợp
// Khám phá xem bạn giống thành viên BLACKPINK nào nhất

export const questions = [
  {
    id: 1,
    question: "Phong cách thời trang yêu thích của bạn?",
    options: [
      { text: "Sang trọng, thời thượng, high fashion", type: "A" },
      { text: "Đáng yêu, nữ tính, dễ thương", type: "B" },
      { text: "Cool, cá tính, streetwear", type: "C" },
      { text: "Thanh lịch, tinh tế, classy", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Khi đứng trước đám đông, bạn cảm thấy thế nào?",
    options: [
      { text: "Tự tin, tỏa sáng như ngôi sao", type: "A" },
      { text: "Hơi ngại nhưng cố gắng thân thiện", type: "B" },
      { text: "Thể hiện cá tính mạnh mẽ", type: "C" },
      { text: "Duyên dáng và cuốn hút một cách tự nhiên", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Hoạt động yêu thích của bạn là gì?",
    options: [
      { text: "Mua sắm, chăm sóc da, làm đẹp", type: "A" },
      { text: "Vẽ tranh, đọc sách, viết nhật ký", type: "B" },
      { text: "Nhảy, tập gym, hoạt động năng động", type: "C" },
      { text: "Ca hát, xem phim, thư giãn", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Trong nhóm bạn, bạn thường được gọi là?",
    options: [
      { text: "Fashionista, người sành điệu nhất", type: "A" },
      { text: "Người dễ thương, ngây thơ nhất", type: "B" },
      { text: "Người cool ngầu, cá tính nhất", type: "C" },
      { text: "Người tài năng, đa năng nhất", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Cách bạn thể hiện tình yêu?",
    options: [
      { text: "Tặng quà đắt tiền, chăm sóc chu đáo", type: "A" },
      { text: "Viết thư tay, vẽ tranh tặng", type: "B" },
      { text: "Thể hiện qua hành động mạnh mẽ", type: "C" },
      { text: "Dịu dàng, lãng mạn, ngọt ngào", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi buồn, bạn thường làm gì?",
    options: [
      { text: "Đi shopping để xả stress", type: "A" },
      { text: "Vẽ tranh hoặc viết nhật ký", type: "B" },
      { text: "Tập luyện, nhảy múa để giải tỏa", type: "C" },
      { text: "Hát, nghe nhạc buồn", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Động vật yêu thích của bạn?",
    options: [
      { text: "Mèo - thanh lịch và độc lập", type: "A" },
      { text: "Thỏ - dễ thương và hiền lành", type: "B" },
      { text: "Chó - trung thành và năng động", type: "C" },
      { text: "Chim - tự do và bay bổng", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Màu sắc yêu thích của bạn?",
    options: [
      { text: "Đen, vàng gold - sang trọng", type: "A" },
      { text: "Hồng, tím pastel - ngọt ngào", type: "B" },
      { text: "Đỏ, cam - mạnh mẽ", type: "C" },
      { text: "Xanh, trắng - tinh khiết", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Phong cách makeup bạn thích?",
    options: [
      { text: "Đậm, sắc sảo, nổi bật", type: "A" },
      { text: "Nhẹ nhàng, tự nhiên, trong trẻo", type: "B" },
      { text: "Cool, smokey eyes, cá tính", type: "C" },
      { text: "Tinh tế, tôn lên vẻ đẹp tự nhiên", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Khi làm việc nhóm, bạn thường?",
    options: [
      { text: "Đưa ra ý tưởng và điều phối", type: "A" },
      { text: "Lắng nghe và hỗ trợ mọi người", type: "B" },
      { text: "Thực hiện công việc một cách xuất sắc", type: "C" },
      { text: "Là cầu nối gắn kết mọi người", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn thích loại nhạc nào?",
    options: [
      { text: "Hip-hop, Rap - sành điệu", type: "A" },
      { text: "Ballad, Pop nhẹ nhàng", type: "B" },
      { text: "Dance, EDM - sôi động", type: "C" },
      { text: "R&B, Soul - sâu lắng", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Mục tiêu trong cuộc sống của bạn?",
    options: [
      { text: "Trở thành người thành công và nổi tiếng", type: "A" },
      { text: "Sống hạnh phúc, làm điều mình yêu thích", type: "B" },
      { text: "Đạt đỉnh cao trong lĩnh vực chuyên môn", type: "C" },
      { text: "Cân bằng cuộc sống và sự nghiệp", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Jennie - Fashionista quyến rũ",
    emoji: "💎",
    description: "Bạn giống Jennie - xinh đẹp, quyến rũ và luôn dẫn đầu xu hướng thời trang. Bạn tự tin, biết mình muốn gì và không ngại thể hiện bản thân. Sự sang trọng toát ra từ bạn một cách tự nhiên.",
    traits: ["Tự tin", "Sành điệu", "Quyến rũ", "Mạnh mẽ"],
    strengths: ["Gu thời trang xuất sắc", "Tự tin trước đám đông", "Có sức ảnh hưởng"],
    weaknesses: ["Đôi khi bị hiểu lầm là kiêu ngạo", "Áp lực phải hoàn hảo"],
    tips: ["Đừng quá khắt khe với bản thân", "Cho phép mình được tự nhiên"],
  },
  B: {
    type: "B",
    title: "Jisoo - Cô gái dễ thương",
    emoji: "🌸",
    description: "Bạn giống Jisoo - dễ thương, hài hước và có tâm hồn nghệ sĩ. Bạn làm mọi người yêu quý bằng sự chân thành và tính cách đáng yêu. Nụ cười của bạn có sức mạnh xóa tan mọi buồn phiền.",
    traits: ["Dễ thương", "Hài hước", "Nghệ sĩ", "Thân thiện"],
    strengths: ["Dễ mến", "Mang lại tiếng cười", "Có tài năng nghệ thuật"],
    weaknesses: ["Đôi khi quá nhạy cảm", "Khó từ chối người khác"],
    tips: ["Tin vào khả năng của mình", "Đừng ngại thể hiện ý kiến"],
  },
  C: {
    type: "C",
    title: "Lisa - Dancer quyền lực",
    emoji: "🔥",
    description: "Bạn giống Lisa - năng động, tài năng và có sức hút mạnh mẽ. Bạn làm việc chăm chỉ, luôn nỗ lực hết mình và có khả năng chinh phục bất kỳ thử thách nào.",
    traits: ["Năng động", "Tài năng", "Chăm chỉ", "Cá tính"],
    strengths: ["Kỹ năng xuất sắc", "Tinh thần làm việc cao", "Thu hút sự chú ý"],
    weaknesses: ["Đôi khi quá cầu toàn", "Hay tự tạo áp lực"],
    tips: ["Nghỉ ngơi khi cần thiết", "Tận hưởng thành quả của mình"],
  },
  D: {
    type: "D",
    title: "Rosé - Giọng hát thiên thần",
    emoji: "🎤",
    description: "Bạn giống Rosé - tài năng, thanh lịch và có tâm hồn sâu sắc. Bạn thể hiện cảm xúc qua âm nhạc và nghệ thuật, luôn chân thành và đầy cảm xúc trong mọi việc làm.",
    traits: ["Tài năng", "Thanh lịch", "Sâu sắc", "Cảm xúc"],
    strengths: ["Giọng hát tuyệt vời", "Truyền tải cảm xúc", "Đa năng"],
    weaknesses: ["Đôi khi quá nhạy cảm", "Hay suy nghĩ nhiều"],
    tips: ["Chia sẻ cảm xúc với người thân", "Đừng giữ mọi thứ trong lòng"],
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
