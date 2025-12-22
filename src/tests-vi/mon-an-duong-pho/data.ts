// Món Ăn Đường Phố Yêu Thích
// Khám phá tính cách của bạn qua sở thích ẩm thực đường phố Việt Nam

export const questions = [
  {
    id: 1,
    question: "Món ăn đường phố bạn thích nhất?",
    options: [
      { text: "Phở, bún bò, hủ tiếu - món nước", type: "A" },
      { text: "Bánh mì, xôi - món nhanh gọn", type: "B" },
      { text: "Gỏi cuốn, nem - món thanh đạm", type: "C" },
      { text: "Bún đậu, bánh tráng trộn - món độc đáo", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thường ăn đường phố vào lúc nào?",
    options: [
      { text: "Sáng sớm, bắt đầu ngày mới", type: "A" },
      { text: "Trưa, tranh thủ giờ nghỉ", type: "B" },
      { text: "Chiều, ăn nhẹ xế", type: "C" },
      { text: "Tối khuya, ăn đêm", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn chọn quán ăn đường phố dựa trên?",
    options: [
      { text: "Đông khách, chắc chắn ngon", type: "A" },
      { text: "Gần chỗ làm/nhà, tiện lợi", type: "B" },
      { text: "Sạch sẽ, vệ sinh", type: "C" },
      { text: "Độc đáo, được review tốt", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi đi ăn đường phố, bạn thường?",
    options: [
      { text: "Ăn một mình, nhanh gọn", type: "A" },
      { text: "Với đồng nghiệp, tiện nói chuyện", type: "B" },
      { text: "Với bạn bè, khám phá món mới", type: "C" },
      { text: "Với người yêu/gia đình", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Độ cay bạn chọn khi ăn đường phố?",
    options: [
      { text: "Cay nhiều, càng cay càng ngon", type: "A" },
      { text: "Cay vừa, có vị là được", type: "B" },
      { text: "Không cay hoặc rất ít", type: "C" },
      { text: "Tùy món, tùy ngày", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn có hay thử món ăn đường phố mới không?",
    options: [
      { text: "Thường xuyên, thích khám phá", type: "A" },
      { text: "Thỉnh thoảng, khi có review tốt", type: "B" },
      { text: "Ít khi, chỉ ăn món quen", type: "C" },
      { text: "Rất hay, follow các food blogger", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Giá một bữa ăn đường phố bạn chấp nhận?",
    options: [
      { text: "20-30k, rẻ mà ngon", type: "A" },
      { text: "30-50k, chất lượng hơn một chút", type: "B" },
      { text: "50-80k, ngon là được", type: "C" },
      { text: "Bao nhiêu cũng được, miễn đáng tiền", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Khi quán quen hết món, bạn?",
    options: [
      { text: "Chờ hoặc quay lại lúc khác", type: "A" },
      { text: "Gọi món khác trong menu", type: "B" },
      { text: "Đi quán khác gần đó", type: "C" },
      { text: "Xem như cơ hội thử quán mới", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Điều bạn thích nhất ở ẩm thực đường phố?",
    options: [
      { text: "Hương vị đậm đà, đặc trưng", type: "A" },
      { text: "Nhanh, tiện, rẻ", type: "B" },
      { text: "Không khí bình dân, thân thiện", type: "C" },
      { text: "Sự đa dạng, phong phú", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn có hay chụp ảnh món ăn đường phố không?",
    options: [
      { text: "Không, ăn ngay cho nóng", type: "A" },
      { text: "Đôi khi, món đẹp thì chụp", type: "B" },
      { text: "Có, để review cho bạn bè", type: "C" },
      { text: "Luôn luôn, đăng lên social media", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Ẩm thực đường phố với bạn là?",
    options: [
      { text: "Văn hóa Việt Nam đích thực", type: "A" },
      { text: "Giải pháp ăn uống tiện lợi", type: "B" },
      { text: "Niềm vui khám phá ẩm thực", type: "C" },
      { text: "Trải nghiệm cuộc sống địa phương", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Nếu giới thiệu ẩm thực đường phố VN cho khách nước ngoài?",
    options: [
      { text: "Phở hoặc bún chả - món kinh điển", type: "A" },
      { text: "Bánh mì - dễ ăn, nổi tiếng", type: "B" },
      { text: "Gỏi cuốn - thanh đạm, lạ miệng", type: "C" },
      { text: "Cho họ tự chọn, trải nghiệm", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người Yêu Ẩm Thực Truyền Thống",
    emoji: "🍜",
    description: "Bạn là người yêu và trân trọng ẩm thực đường phố truyền thống Việt Nam! Bạn coi trọng hương vị đích thực, những món ăn đậm đà bản sắc. Bạn là người có gốc rễ và biết trân trọng văn hóa.",
    traits: ["Truyền thống", "Có gốc rễ", "Đơn giản", "Trân trọng văn hóa"],
    strengths: ["Biết thưởng thức", "Không chạy theo trend", "Có gu ổn định"],
    weaknesses: ["Đôi khi bảo thủ", "Ít thử món mới"],
    tips: ["Đôi khi hãy thử món mới", "Kết hợp truyền thống và hiện đại"],
  },
  B: {
    type: "B",
    title: "Người Thực Dụng",
    emoji: "⚡",
    description: "Bạn coi ẩm thực đường phố là giải pháp tiện lợi cho cuộc sống bận rộn! Bạn coi trọng sự nhanh gọn, tiết kiệm thời gian. Bạn là người thực tế, hiệu quả và biết cách tối ưu cuộc sống.",
    traits: ["Thực tế", "Hiệu quả", "Tiết kiệm", "Bận rộn"],
    strengths: ["Quản lý thời gian tốt", "Không cầu kỳ", "Thích nghi nhanh"],
    weaknesses: ["Đôi khi bỏ lỡ trải nghiệm", "Ít thời gian thưởng thức"],
    tips: ["Đôi khi hãy dành thời gian thưởng thức", "Khám phá ẩm thực như một hobby"],
  },
  C: {
    type: "C",
    title: "Người Cầu Toàn",
    emoji: "✨",
    description: "Bạn coi trọng chất lượng và vệ sinh khi ăn đường phố! Bạn cẩn thận trong lựa chọn và không ăn bừa bãi. Bạn là người có nguyên tắc, coi trọng sức khỏe và có tiêu chuẩn cao.",
    traits: ["Cẩn thận", "Có nguyên tắc", "Coi trọng sức khỏe", "Tiêu chuẩn cao"],
    strengths: ["An toàn sức khỏe", "Lựa chọn thông minh", "Kỷ luật"],
    weaknesses: ["Đôi khi bỏ lỡ món ngon", "Khó chịu với môi trường bình dân"],
    tips: ["Đôi khi hãy thử liều một chút", "Những quán đông khách thường an toàn"],
  },
  D: {
    type: "D",
    title: "Food Explorer - Nhà Thám Hiểm Ẩm Thực",
    emoji: "🌟",
    description: "Bạn là nhà thám hiểm ẩm thực đường phố! Bạn luôn tìm kiếm món mới, quán mới và không ngại thử nghiệm. Bạn là người tò mò, phiêu lưu và yêu thích khám phá.",
    traits: ["Tò mò", "Phiêu lưu", "Cởi mở", "Yêu khám phá"],
    strengths: ["Trải nghiệm phong phú", "Kiến thức ẩm thực rộng", "Luôn có gì mới để kể"],
    weaknesses: ["Đôi khi không có quán quen", "Dễ bị food trend chi phối"],
    tips: ["Có một vài quán quen để quay về", "Đôi khi đơn giản cũng là ngon"],
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
