// Thói Quen Stream Của Bạn
// Khám phá tính cách qua cách bạn xem stream và livestream

export const questions = [
  {
    id: 1,
    question: "Bạn thường xem stream/livestream ở đâu?",
    options: [
      { text: "TikTok Live, scroll cho vui", type: "A" },
      { text: "YouTube Live, xem gaming/podcast", type: "B" },
      { text: "Facebook Live, bán hàng, giải trí", type: "C" },
      { text: "Twitch, xem game chuyên nghiệp", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn xem livestream bán hàng như thế nào?",
    options: [
      { text: "Xem thường xuyên, hay mua đồ qua live", type: "A" },
      { text: "Thỉnh thoảng xem, săn deal", type: "B" },
      { text: "Xem cho vui, ít khi mua", type: "C" },
      { text: "Không xem, không thích", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi xem stream, bạn có hay comment không?",
    options: [
      { text: "Comment liên tục, tương tác nhiều", type: "A" },
      { text: "Thỉnh thoảng, khi có gì hay", type: "B" },
      { text: "Chỉ xem, không comment", type: "C" },
      { text: "Thả tim/reaction thôi", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn có follow streamer nào không?",
    options: [
      { text: "Nhiều lắm, cả trong và ngoài nước", type: "A" },
      { text: "Vài người yêu thích", type: "B" },
      { text: "Không follow ai cụ thể", type: "C" },
      { text: "Chỉ xem ngẫu nhiên, không follow", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn thích xem nội dung stream gì?",
    options: [
      { text: "Gaming, esports", type: "A" },
      { text: "Ăn uống, mukbang", type: "B" },
      { text: "Tâm sự, ASMR, just chatting", type: "C" },
      { text: "Bán hàng, review sản phẩm", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn có từng donate/tặng quà cho streamer?",
    options: [
      { text: "Thường xuyên, ủng hộ streamer yêu thích", type: "A" },
      { text: "Thỉnh thoảng, khi có event đặc biệt", type: "B" },
      { text: "Hiếm khi, tiết kiệm tiền", type: "C" },
      { text: "Chưa bao giờ, không có thói quen", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn xem stream bao lâu mỗi ngày?",
    options: [
      { text: "Nhiều giờ, background noise cả ngày", type: "A" },
      { text: "1-2 tiếng, lúc rảnh", type: "B" },
      { text: "30 phút - 1 tiếng, xem lướt", type: "C" },
      { text: "Không xem hàng ngày, thỉnh thoảng thôi", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn có muốn trở thành streamer không?",
    options: [
      { text: "Có, đang chuẩn bị/đã làm", type: "A" },
      { text: "Muốn thử nhưng ngại", type: "B" },
      { text: "Không, thích xem hơn", type: "C" },
      { text: "Không quan tâm", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi streamer bạn thích đang live, bạn?",
    options: [
      { text: "Drop mọi thứ để xem ngay", type: "A" },
      { text: "Xem nếu đang rảnh", type: "B" },
      { text: "Để notification, xem replay sau", type: "C" },
      { text: "Không quan tâm lắm", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn nghĩ gì về văn hóa stream hiện nay?",
    options: [
      { text: "Rất thích, là tương lai giải trí", type: "A" },
      { text: "Hay, nhưng cần xem có chọn lọc", type: "B" },
      { text: "Bình thường, không ảnh hưởng nhiều", type: "C" },
      { text: "Không quan tâm, có hoặc không cũng được", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Fan Stream Cuồng Nhiệt",
    emoji: "🔴",
    description: "Bạn là fan stream cuồng nhiệt! Livestream là một phần quan trọng trong cuộc sống giải trí của bạn. Bạn theo dõi nhiều streamer, tương tác thường xuyên và không bao giờ bỏ lỡ live yêu thích.",
    traits: ["Nhiệt tình", "Trung thành", "Xã giao online", "Năng động"],
    strengths: ["Cập nhật trend nhanh", "Có cộng đồng online", "Biết cách tương tác"],
    weaknesses: ["Mất nhiều thời gian", "Có thể chi tiêu nhiều cho donate"],
    tips: ["Cân bằng thời gian online và offline", "Đặt giới hạn chi tiêu donate"],
  },
  B: {
    type: "B",
    title: "Viewer Cân Bằng",
    emoji: "📱",
    description: "Bạn xem stream một cách cân bằng! Bạn biết cách chọn lọc nội dung và không bị cuốn vào quá nhiều. Stream là hình thức giải trí, không phải cuộc sống.",
    traits: ["Cân bằng", "Chọn lọc", "Thực tế", "Có kiểm soát"],
    strengths: ["Không bị nghiện", "Chọn nội dung chất lượng", "Tận hưởng đúng mức"],
    weaknesses: ["Có thể bỏ lỡ nội dung hay", "Không thuộc cộng đồng nào sâu"],
    tips: ["Tiếp tục cách xem này", "Thử tương tác nhiều hơn"],
  },
  C: {
    type: "C",
    title: "Viewer Thầm Lặng",
    emoji: "👀",
    description: "Bạn là viewer thầm lặng! Bạn xem stream cho vui nhưng ít khi tương tác. Bạn thích quan sát hơn là tham gia, và không muốn bị chú ý.",
    traits: ["Quan sát", "Thầm lặng", "Độc lập", "Không ồn ào"],
    strengths: ["Không bị cuốn vào drama", "Tiết kiệm thời gian", "Xem nhẹ nhàng"],
    weaknesses: ["Không có kết nối với streamer", "Bỏ lỡ trải nghiệm tương tác"],
    tips: ["Thử comment xem sao", "Tìm cộng đồng phù hợp"],
  },
  D: {
    type: "D",
    title: "Người Ngoài Cuộc",
    emoji: "📵",
    description: "Stream không phải sở thích của bạn! Bạn có nhiều cách giải trí khác và không bị cuốn vào văn hóa livestream. Bạn độc lập và có gu riêng.",
    traits: ["Độc lập", "Không theo trend", "Có gu riêng", "Offline-oriented"],
    strengths: ["Không mất thời gian vào stream", "Tập trung vào cuộc sống thực", "Không bị FOMO"],
    weaknesses: ["Có thể outdated về trend", "Thiếu kết nối với văn hóa Gen Z"],
    tips: ["Thử xem 1-2 stream để hiểu trend", "Không cần ép buộc nếu không thích"],
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
