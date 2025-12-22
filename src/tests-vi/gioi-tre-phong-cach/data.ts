// Phong cách ăn mặc
// Khám phá phong cách thời trang của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn thường mặc gì khi đi làm/đi học?",
    options: [
      { text: "Trang phục công sở chỉnh tề", type: "A" },
      { text: "Quần jeans + áo thun/sơ mi", type: "B" },
      { text: "Trang phục thoải mái, năng động", type: "C" },
      { text: "Theo trend, mỗi ngày một style", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Màu sắc chủ đạo trong tủ quần áo của bạn?",
    options: [
      { text: "Đen, trắng, xám - tối giản", type: "A" },
      { text: "Màu pastel, nhẹ nhàng", type: "B" },
      { text: "Đa dạng, nhiều màu sắc", type: "C" },
      { text: "Màu nổi bật, bắt mắt", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn mua quần áo ở đâu?",
    options: [
      { text: "Cửa hàng cao cấp, thương hiệu", type: "A" },
      { text: "Uniqlo, H&M, các chuỗi phổ biến", type: "B" },
      { text: "Chợ, shop online, giá bình dân", type: "C" },
      { text: "Vintage, secondhand, độc lạ", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Phụ kiện yêu thích của bạn?",
    options: [
      { text: "Đồng hồ, túi xách sang trọng", type: "A" },
      { text: "Kính mát, mũ bucket hat", type: "B" },
      { text: "Vòng tay, dây chuyền đơn giản", type: "C" },
      { text: "Nhẫn, khuyên tai, phụ kiện statement", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi đi tiệc/event, bạn mặc gì?",
    options: [
      { text: "Vest/đầm cocktail lịch sự", type: "A" },
      { text: "Smart casual, thanh lịch", type: "B" },
      { text: "Thoải mái nhưng đẹp", type: "C" },
      { text: "Nổi bật, muốn được chú ý", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Giày dép yêu thích của bạn?",
    options: [
      { text: "Giày da, giày cao gót thanh lịch", type: "A" },
      { text: "Sneaker trắng, giày thể thao", type: "B" },
      { text: "Dép, sandal thoải mái", type: "C" },
      { text: "Giày độc lạ, platform, boots", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn chuẩn bị outfit mỗi sáng thế nào?",
    options: [
      { text: "Có sẵn combo, mặc nhanh gọn", type: "A" },
      { text: "Chọn theo mood hôm đó", type: "B" },
      { text: "Mặc gì cũng được, tiện là chính", type: "C" },
      { text: "Suy nghĩ kỹ, mix match sáng tạo", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn nghĩ gì về fast fashion?",
    options: [
      { text: "Không thích, đầu tư đồ chất lượng", type: "A" },
      { text: "OK, tiện lợi và hợp túi tiền", type: "B" },
      { text: "Mua khi cần, không quá quan tâm", type: "C" },
      { text: "Thích săn đồ độc, không theo số đông", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Người nổi tiếng nào có style bạn thích?",
    options: [
      { text: "Business style, CEO vibes", type: "A" },
      { text: "K-pop idol, Korean style", type: "B" },
      { text: "Casual, đời thường như bạn bè", type: "C" },
      { text: "Avant-garde, phá cách, nghệ sĩ", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn có bao nhiêu túi xách/balo?",
    options: [
      { text: "Vài chiếc chất lượng cao", type: "A" },
      { text: "Nhiều, tùy outfit và dịp", type: "B" },
      { text: "1-2 chiếc dùng hàng ngày", type: "C" },
      { text: "Nhiều style độc đáo", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Cuối tuần bạn mặc gì?",
    options: [
      { text: "Vẫn lịch sự, không xuề xòa", type: "A" },
      { text: "Thoải mái hơn ngày thường một chút", type: "B" },
      { text: "Quần short, áo thun, cực kỳ chill", type: "C" },
      { text: "Thử những style mới mẻ", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Điều quan trọng nhất trong ăn mặc?",
    options: [
      { text: "Lịch sự, chuyên nghiệp", type: "A" },
      { text: "Phù hợp với bản thân", type: "B" },
      { text: "Thoải mái, không gò bó", type: "C" },
      { text: "Thể hiện cá tính riêng", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Classic & Professional",
    emoji: "👔",
    description: "Bạn có phong cách thanh lịch, chuyên nghiệp và luôn chỉn chu trong mọi hoàn cảnh. Trang phục của bạn toát lên sự đáng tin cậy và thành đạt.",
    traits: ["Thanh lịch", "Chuyên nghiệp", "Chỉn chu", "Sang trọng"],
    strengths: ["Luôn gây ấn tượng tốt", "Phù hợp môi trường công sở", "Đầu tư lâu dài"],
    weaknesses: ["Có thể thiếu sự thoải mái", "Ít linh hoạt"],
    tips: ["Thêm chút casual cho cuối tuần", "Thử mix phong cách mới"],
  },
  B: {
    type: "B",
    title: "Trendy & Balanced",
    emoji: "✨",
    description: "Bạn có phong cách cân bằng, vừa theo trend vừa giữ được sự thoải mái. Bạn biết cách ăn mặc đẹp mà không quá cầu kỳ.",
    traits: ["Cân bằng", "Trendy", "Thực tế", "Linh hoạt"],
    strengths: ["Phù hợp nhiều hoàn cảnh", "Dễ mix match", "Tiết kiệm thời gian"],
    weaknesses: ["Có thể thiếu điểm nhấn", "Đôi khi hòa lẫn đám đông"],
    tips: ["Thêm statement piece", "Phát triển điểm nhấn cá nhân"],
  },
  C: {
    type: "C",
    title: "Casual & Comfortable",
    emoji: "👕",
    description: "Bạn ưu tiên sự thoải mái trên tất cả. Trang phục đơn giản, dễ chịu là ưu tiên số 1 của bạn.",
    traits: ["Thoải mái", "Đơn giản", "Thực tế", "Tự do"],
    strengths: ["Không bị gò bó", "Tiết kiệm thời gian", "Luôn thoải mái"],
    weaknesses: ["Có thể thiếu formal khi cần", "Ít ấn tượng trong event"],
    tips: ["Chuẩn bị vài set formal", "Thử các style mới đôi khi"],
  },
  D: {
    type: "D",
    title: "Unique & Creative",
    emoji: "🎨",
    description: "Bạn có phong cách độc đáo, sáng tạo và không sợ nổi bật. Thời trang với bạn là cách thể hiện cá tính và nghệ thuật.",
    traits: ["Sáng tạo", "Độc đáo", "Nổi bật", "Nghệ sĩ"],
    strengths: ["Phong cách riêng biệt", "Tự tin thể hiện", "Truyền cảm hứng"],
    weaknesses: ["Đôi khi quá nổi bật", "Có thể không phù hợp formal"],
    tips: ["Cân bằng cho môi trường khác nhau", "Tiếp tục sáng tạo"],
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
