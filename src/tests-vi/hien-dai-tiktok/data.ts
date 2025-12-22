// Phong Cách TikTok
// Khám phá bạn là TikToker kiểu gì

export const questions = [
  {
    id: 1,
    question: "Bạn dành bao nhiêu thời gian lướt TikTok mỗi ngày?",
    options: [
      { text: "Dưới 1 tiếng - có chừng mực", type: "A" },
      { text: "1-3 tiếng - bình thường mà", type: "B" },
      { text: "3-5 tiếng - nghiện rồi", type: "C" },
      { text: "Mở mắt là lướt, ngủ mới dừng", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thường xem nội dung gì trên TikTok?",
    options: [
      { text: "Hài hước, meme, drama", type: "A" },
      { text: "Nhảy, trend, thử thách", type: "B" },
      { text: "Kiến thức, lifehack, cooking", type: "C" },
      { text: "Đủ thứ, thuật toán đưa gì xem đó", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn có đăng video TikTok không?",
    options: [
      { text: "Chưa bao giờ, chỉ xem thôi", type: "A" },
      { text: "Đã thử vài lần", type: "B" },
      { text: "Đăng thường xuyên, có nhiều follower", type: "C" },
      { text: "Đăng rồi xóa vì ngại", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi thấy trend mới trên TikTok, bạn?",
    options: [
      { text: "Xem cho vui, không tham gia", type: "A" },
      { text: "Thử làm theo nếu thấy hay", type: "B" },
      { text: "Làm ngay để bắt trend", type: "C" },
      { text: "Đợi trend chín mới làm", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn follow những ai trên TikTok?",
    options: [
      { text: "TikToker nổi tiếng Việt Nam", type: "A" },
      { text: "Bạn bè và người quen", type: "B" },
      { text: "TikToker quốc tế, K-pop idol", type: "C" },
      { text: "Ai hay là follow, đủ thể loại", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn biết nhảy trend TikTok không?",
    options: [
      { text: "Biết hết, thuộc bài nào cũng nhảy được", type: "A" },
      { text: "Biết vài bài hot", type: "B" },
      { text: "Không biết nhảy, chỉ xem", type: "C" },
      { text: "Biết nhưng không dám nhảy", type: "D" },
    ],
  },
  {
    id: 7,
    question: "TikTok ảnh hưởng đến cuộc sống bạn thế nào?",
    options: [
      { text: "Học được nhiều điều hay", type: "A" },
      { text: "Giải trí, thư giãn sau giờ làm", type: "B" },
      { text: "Tốn thời gian nhưng vui", type: "C" },
      { text: "Đang cố giảm thời gian lướt", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn có mua đồ vì quảng cáo trên TikTok không?",
    options: [
      { text: "Có, mua nhiều rồi", type: "A" },
      { text: "Thỉnh thoảng, nếu thấy hay", type: "B" },
      { text: "Hiếm khi, cân nhắc kỹ", type: "C" },
      { text: "Không bao giờ, skip quảng cáo", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Âm thanh/nhạc TikTok nào bạn hay nghe nhất?",
    options: [
      { text: "Nhạc Việt remix, EDM", type: "A" },
      { text: "Nhạc K-pop, C-pop hot", type: "B" },
      { text: "Nhạc trend quốc tế", type: "C" },
      { text: "Voiceover hài hước", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn nghĩ gì về TikTok?",
    options: [
      { text: "App tuyệt vời nhất hiện tại", type: "A" },
      { text: "Có hay có dở, cần dùng đúng cách", type: "B" },
      { text: "Tốn thời gian nhưng không bỏ được", type: "C" },
      { text: "Đang nghĩ đến việc xóa app", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "TikToker Chính Hiệu",
    emoji: "📱",
    percentage: 95,
    description: "TikTok là một phần không thể thiếu trong cuộc sống của bạn! Bạn biết hết trend, thuộc mọi bài nhảy, và có thể lướt TikTok cả ngày không chán. Có khi nên làm TikToker luôn đi!",
    characteristics: ["Nghiện TikTok", "Biết hết trend", "Thuộc mọi bài nhảy", "Lướt cả ngày"],
    advice: "Hãy cân bằng thời gian giữa TikTok và cuộc sống thực. Đặt giới hạn thời gian lướt app để không bỏ lỡ những thứ quan trọng!",
  },
  B: {
    type: "B",
    title: "Người Xem Thụ Động",
    emoji: "👀",
    percentage: 60,
    description: "Bạn dùng TikTok để giải trí nhẹ nhàng. Không đăng video, không chạy theo trend, chỉ lướt xem cho vui. Đây là cách dùng TikTok lành mạnh và không tốn quá nhiều thời gian!",
    characteristics: ["Xem nhiều, đăng ít", "Không cuồng trend", "Giải trí đúng mực", "Biết dừng đúng lúc"],
    advice: "Bạn đang dùng TikTok một cách cân bằng! Nếu thấy hay, đôi khi cũng thử đăng video vui nhé.",
  },
  C: {
    type: "C",
    title: "Content Creator Tiềm Năng",
    emoji: "🎬",
    percentage: 80,
    description: "Bạn không chỉ xem mà còn tham gia vào các trend TikTok! Bạn có khả năng sáng tạo content và biết cách thu hút người xem. Có tiềm năng trở thành TikToker nổi tiếng đấy!",
    characteristics: ["Đăng video thường xuyên", "Bắt trend nhanh", "Sáng tạo content", "Có follower"],
    advice: "Hãy tiếp tục phát triển content của mình! Tìm ra phong cách riêng và kiên trì, thành công sẽ đến.",
  },
  D: {
    type: "D",
    title: "Người Đang Cai TikTok",
    emoji: "⏰",
    percentage: 40,
    description: "Bạn nhận ra TikTok đang chiếm quá nhiều thời gian và đang cố gắng giảm bớt. Đây là nhận thức tốt! Cuộc sống offline cũng có rất nhiều điều thú vị đang chờ bạn.",
    characteristics: ["Nhận thức được vấn đề", "Đang cố giảm", "Tìm kiếm cân bằng", "Ưu tiên cuộc sống thực"],
    advice: "Thử đặt timer khi dùng TikTok hoặc xóa app vài ngày xem sao. Bạn sẽ ngạc nhiên khi thấy mình có bao nhiêu thời gian rảnh!",
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
