// Phong Cách Facebook Của Bạn
// Khám phá cách bạn sử dụng Facebook

export const questions = [
  {
    id: 1,
    question: "Bạn dùng Facebook để làm gì chủ yếu?",
    options: [
      { text: "Lướt newfeed xem tin tức, meme", type: "A" },
      { text: "Đăng ảnh, update cuộc sống", type: "B" },
      { text: "Tham gia group, bình luận", type: "C" },
      { text: "Mua bán, kinh doanh online", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn đăng bài trên Facebook bao lâu một lần?",
    options: [
      { text: "Hiếm khi, chủ yếu xem", type: "A" },
      { text: "Thường xuyên, mỗi ngày", type: "B" },
      { text: "Khi có dịp đặc biệt", type: "C" },
      { text: "Chỉ đăng story, không post", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi có người tag bạn vào ảnh xấu, bạn?",
    options: [
      { text: "Gỡ tag ngay lập tức", type: "A" },
      { text: "Kệ thôi, không quan trọng", type: "B" },
      { text: "Comment than vãn nhưng để đó", type: "C" },
      { text: "Nhờ bạn xóa hoặc crop lại", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn có bao nhiêu bạn bè trên Facebook?",
    options: [
      { text: "Dưới 500 - chọn lọc kỹ", type: "A" },
      { text: "500-1000 - vừa phải", type: "B" },
      { text: "1000-3000 - xã giao nhiều", type: "C" },
      { text: "Trên 3000 - ai add cũng accept", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn phản ứng thế nào với drama trên Facebook?",
    options: [
      { text: "Lướt qua, không quan tâm", type: "A" },
      { text: "Đọc comment cho vui", type: "B" },
      { text: "Vào bình luận góp ý", type: "C" },
      { text: "Share về tường để bàn luận", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Profile picture của bạn là gì?",
    options: [
      { text: "Ảnh selfie được chỉnh sửa kỹ", type: "A" },
      { text: "Ảnh chụp với bạn bè/người thân", type: "B" },
      { text: "Ảnh phong cảnh, thú cưng", type: "C" },
      { text: "Avatar, hình vẽ, meme", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn có hay 'stalk' crush/ex trên Facebook không?",
    options: [
      { text: "Có chứ, ai mà không", type: "A" },
      { text: "Thỉnh thoảng tò mò một chút", type: "B" },
      { text: "Không, đã block/unfollow rồi", type: "C" },
      { text: "Nhờ bạn stalk hộ", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Khi thấy bạn bè đăng tin vui, bạn?",
    options: [
      { text: "Like/thả tim và lướt tiếp", type: "A" },
      { text: "Comment chúc mừng nhiệt tình", type: "B" },
      { text: "Nhắn riêng chúc mừng", type: "C" },
      { text: "Tùy mức độ thân, có khi không làm gì", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn tham gia bao nhiêu group Facebook?",
    options: [
      { text: "Vài group quan trọng thôi", type: "A" },
      { text: "Nhiều lắm, đủ chủ đề", type: "B" },
      { text: "Không nhớ, bị add vào nhiều quá", type: "C" },
      { text: "Không tham gia group nào", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn nghĩ Facebook hiện tại như thế nào?",
    options: [
      { text: "Vẫn hay, nguồn tin tức tốt", type: "A" },
      { text: "Toàn quảng cáo và drama", type: "B" },
      { text: "Chán rồi, sang TikTok thôi", type: "C" },
      { text: "Vẫn dùng vì bạn bè ở đây", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người Quan Sát",
    emoji: "👀",
    percentage: 75,
    description: "Bạn là kiểu người 'lurker' điển hình! Lướt Facebook hàng ngày nhưng hiếm khi đăng bài hay bình luận. Bạn biết hết tin tức của mọi người mà họ không biết bạn đang xem!",
    characteristics: ["Lướt nhiều, đăng ít", "Biết hết tin tức", "Ít tương tác", "Âm thầm quan sát"],
    advice: "Thỉnh thoảng hãy tương tác với bạn bè một chút nhé! Một comment, một like cũng làm người khác vui đấy.",
  },
  B: {
    type: "B",
    title: "Ngôi Sao Mạng Xã Hội",
    emoji: "⭐",
    percentage: 90,
    description: "Facebook là sân chơi của bạn! Bạn đăng ảnh đều đặn, tương tác với mọi người và luôn cập nhật cuộc sống của mình. Bạn bè luôn biết bạn đang làm gì, ở đâu!",
    characteristics: ["Đăng bài thường xuyên", "Tương tác cao", "Nhiều bạn bè", "Sống ảo chuyên nghiệp"],
    advice: "Hãy nhớ dành thời gian cho cuộc sống offline nhé! Đôi khi những khoảnh khắc đẹp nhất không cần phải post lên Facebook.",
  },
  C: {
    type: "C",
    title: "Dân Group Chính Hiệu",
    emoji: "👥",
    percentage: 80,
    description: "Bạn là thành viên tích cực của nhiều group Facebook! Từ group review đồ ăn, group hội độc thân, đến group drama công ty - đâu đâu cũng thấy bạn comment góp vui!",
    characteristics: ["Hoạt động nhóm", "Thích bàn luận", "Biết nhiều thông tin", "Hay góp ý"],
    advice: "Cẩn thận với thông tin trong các group nhé! Không phải thông tin nào cũng chính xác đâu.",
  },
  D: {
    type: "D",
    title: "Người Thực Dụng",
    emoji: "💼",
    percentage: 65,
    description: "Với bạn, Facebook là công cụ chứ không phải nơi giải trí. Bạn dùng nó để liên lạc, làm việc, mua bán online. Story, reels, những thứ hào nhoáng không phải việc của bạn!",
    characteristics: ["Dùng có mục đích", "Ít lãng phí thời gian", "Thực tế", "Không quan tâm drama"],
    advice: "Đôi khi hãy thả lỏng và xem meme cho vui nhé! Cuộc sống cần một chút giải trí mà.",
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
