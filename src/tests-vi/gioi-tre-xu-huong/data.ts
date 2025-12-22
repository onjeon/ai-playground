// Phong cách theo xu hướng
// Khám phá mức độ bạn theo đuổi xu hướng

export const questions = [
  {
    id: 1,
    question: "Khi có trend mới trên TikTok, bạn?",
    options: [
      { text: "Làm ngay, muốn là người đầu tiên", type: "A" },
      { text: "Xem nhiều người làm rồi mới thử", type: "B" },
      { text: "Xem cho vui, không tham gia", type: "C" },
      { text: "Không quan tâm đến trends", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Khi quán ăn/cafe mới mở và viral, bạn?",
    options: [
      { text: "Đi ngay tuần đầu tiên, check-in", type: "A" },
      { text: "Đợi review rồi mới quyết định", type: "B" },
      { text: "Đi khi nào tiện, không vội", type: "C" },
      { text: "Không quan tâm, thích quán quen", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn mua quần áo như thế nào?",
    options: [
      { text: "Theo trend mới nhất, fast fashion", type: "A" },
      { text: "Kết hợp trend và phong cách riêng", type: "B" },
      { text: "Mua đồ mình thích, không theo trend", type: "C" },
      { text: "Mua đồ cơ bản, không quan tâm trend", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi có từ lóng mới, bạn?",
    options: [
      { text: "Dùng ngay, thích cập nhật ngôn ngữ", type: "A" },
      { text: "Dùng khi nói với bạn bè cùng tuổi", type: "B" },
      { text: "Hiểu nhưng ít dùng", type: "C" },
      { text: "Không quan tâm, nói tiếng Việt chuẩn", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn biết tin tức/trend mới từ đâu?",
    options: [
      { text: "TikTok, Instagram, Twitter", type: "A" },
      { text: "Facebook, nhóm chat bạn bè", type: "B" },
      { text: "Báo điện tử, website", type: "C" },
      { text: "TV, người thân kể", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi một sản phẩm limited edition ra mắt?",
    options: [
      { text: "Xếp hàng mua ngay, sợ hết", type: "A" },
      { text: "Cân nhắc rồi mua nếu thích", type: "B" },
      { text: "Chờ xem có cần thiết không", type: "C" },
      { text: "Không quan tâm limited edition", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn follow influencer/KOL nhiều không?",
    options: [
      { text: "Rất nhiều, cập nhật mọi thứ họ chia sẻ", type: "A" },
      { text: "Một số người yêu thích", type: "B" },
      { text: "Vài người, xem lướt qua", type: "C" },
      { text: "Không follow ai", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Khi có điệu nhảy viral, bạn?",
    options: [
      { text: "Học ngay, quay video đăng", type: "A" },
      { text: "Xem cho vui, thỉnh thoảng thử", type: "B" },
      { text: "Xem người khác nhảy, không thử", type: "C" },
      { text: "Không quan tâm đến điệu nhảy viral", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Điện thoại của bạn có app nào hot nhất?",
    options: [
      { text: "Có hết, app nào hot cũng tải thử", type: "A" },
      { text: "Có vài app phổ biến", type: "B" },
      { text: "Chỉ có app cần thiết", type: "C" },
      { text: "Rất ít app, chỉ dùng cơ bản", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn nghĩ gì về việc theo trend?",
    options: [
      { text: "Vui, không theo là lạc hậu", type: "A" },
      { text: "OK nếu phù hợp với mình", type: "B" },
      { text: "Không cần thiết, sống theo cách mình", type: "C" },
      { text: "Phí thời gian, không quan tâm", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Khi bạn bè nhắc đến một trend mà bạn chưa biết?",
    options: [
      { text: "Lập tức tìm hiểu ngay", type: "A" },
      { text: "Hỏi họ kể thêm", type: "B" },
      { text: "Ghi nhớ, lúc nào rảnh thì xem", type: "C" },
      { text: "Không quan tâm lắm", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bạn có FOMO (sợ bỏ lỡ) với trends không?",
    options: [
      { text: "Có, rất sợ bỏ lỡ", type: "A" },
      { text: "Đôi khi, tùy trend", type: "B" },
      { text: "Hiếm khi, bỏ lỡ cũng không sao", type: "C" },
      { text: "Không, không quan tâm", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Trendsetter - Người dẫn đầu xu hướng",
    emoji: "🔥",
    description: "Bạn luôn là người đầu tiên nắm bắt và tham gia xu hướng mới. Bạn không muốn bỏ lỡ bất cứ điều gì hot trên mạng xã hội.",
    traits: ["Cập nhật", "Năng động", "FOMO", "Sành điệu"],
    strengths: ["Luôn biết gì đang hot", "Kết nối tốt", "Nhanh nhạy"],
    weaknesses: ["Có thể mệt mỏi vì theo quá nhiều", "Đôi khi thiếu cá tính riêng"],
    tips: ["Không cần theo mọi trend", "Phát triển phong cách cá nhân"],
  },
  B: {
    type: "B",
    title: "Selective Follower - Người chọn lọc",
    emoji: "✨",
    description: "Bạn biết cách chọn lọc xu hướng phù hợp với mình. Bạn không cuồng trend nhưng vẫn cập nhật những gì thú vị.",
    traits: ["Chọn lọc", "Cân bằng", "Có cá tính", "Thông minh"],
    strengths: ["Không bị cuốn theo đám đông", "Có phong cách riêng", "Tiết kiệm thời gian"],
    weaknesses: ["Đôi khi chậm với trend hay", "Có thể bỏ lỡ cơ hội"],
    tips: ["Tiếp tục giữ vững phong cách", "Mở lòng thử điều mới"],
  },
  C: {
    type: "C",
    title: "Observer - Người quan sát",
    emoji: "👀",
    description: "Bạn thích quan sát xu hướng hơn là tham gia. Bạn biết gì đang hot nhưng không cảm thấy cần phải theo.",
    traits: ["Độc lập", "Quan sát", "Bình tĩnh", "Có chính kiến"],
    strengths: ["Không bị FOMO", "Sống theo cách riêng", "Tiết kiệm thời gian"],
    weaknesses: ["Có thể thiếu kết nối với bạn bè cùng tuổi", "Đôi khi lạc hậu"],
    tips: ["Thỉnh thoảng tham gia để kết nối", "Trend cũng có thể vui"],
  },
  D: {
    type: "D",
    title: "Timeless - Người vượt thời gian",
    emoji: "🌿",
    description: "Bạn hoàn toàn không quan tâm đến xu hướng. Bạn sống theo giá trị và sở thích riêng, không bị ảnh hưởng bởi điều gì hot.",
    traits: ["Độc lập", "Truyền thống", "Ổn định", "Tự tin"],
    strengths: ["Không bị xao nhãng", "Có giá trị riêng", "Không lãng phí thời gian"],
    weaknesses: ["Khó hiểu thế hệ trẻ", "Có thể bỏ lỡ những điều hay"],
    tips: ["Thử tìm hiểu một vài trend", "Kết nối với thế giới xung quanh"],
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
