// Phong cách dùng Internet
// Khám phá phong cách lướt web và sử dụng Internet của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn thường dùng Internet để làm gì nhiều nhất?",
    options: [
      { text: "Đọc tin tức, cập nhật thông tin", type: "A" },
      { text: "Mạng xã hội, kết nối bạn bè", type: "B" },
      { text: "Xem video, stream, giải trí", type: "C" },
      { text: "Mua sắm online, tìm deal hot", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Website đầu tiên bạn truy cập mỗi ngày là gì?",
    options: [
      { text: "Trang tin tức hoặc báo điện tử", type: "A" },
      { text: "Facebook, Instagram hoặc TikTok", type: "B" },
      { text: "YouTube, Netflix hoặc trang stream", type: "C" },
      { text: "Shopee, Lazada hoặc trang thương mại", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi thấy quảng cáo trên mạng, bạn thường?",
    options: [
      { text: "Bỏ qua hoặc dùng ad blocker", type: "A" },
      { text: "Xem nếu nội dung thú vị", type: "B" },
      { text: "Skip ngay lập tức", type: "C" },
      { text: "Xem kỹ nếu là sản phẩm quan tâm", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn có bao nhiêu tài khoản mạng xã hội?",
    options: [
      { text: "Ít, chỉ dùng những gì cần thiết", type: "A" },
      { text: "Nhiều lắm, mạng nào cũng có", type: "B" },
      { text: "Chủ yếu là nền tảng xem video", type: "C" },
      { text: "Vài cái, để theo dõi deal và review", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi gặp thông tin trên mạng, bạn thường?",
    options: [
      { text: "Kiểm tra nguồn tin cẩn thận", type: "A" },
      { text: "Chia sẻ nếu thấy hay ho", type: "B" },
      { text: "Không quan tâm lắm đến tin tức", type: "C" },
      { text: "Xem review trước khi tin", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Wifi ở nhà bạn như thế nào?",
    options: [
      { text: "Cài đặt bảo mật kỹ, mật khẩu mạnh", type: "A" },
      { text: "Tốc độ cao để live stream, video call", type: "B" },
      { text: "Gói cáp quang nhanh nhất cho xem 4K", type: "C" },
      { text: "Ổn định là được, không cần quá nhanh", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn thường comment trên mạng như thế nào?",
    options: [
      { text: "Hiếm khi comment, chỉ đọc", type: "A" },
      { text: "Hay comment, tương tác nhiều", type: "B" },
      { text: "Comment video hay game thú vị", type: "C" },
      { text: "Comment hỏi về sản phẩm, review", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn bảo vệ thông tin cá nhân trên mạng thế nào?",
    options: [
      { text: "Rất cẩn thận, dùng VPN, mật khẩu mạnh", type: "A" },
      { text: "Bình thường, không quá lo lắng", type: "B" },
      { text: "Quan trọng là không bị hack game", type: "C" },
      { text: "Cẩn thận với thông tin thanh toán", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn dành bao nhiêu thời gian online mỗi ngày?",
    options: [
      { text: "2-3 giờ, có kiểm soát", type: "A" },
      { text: "5-7 giờ, lướt mạng liên tục", type: "B" },
      { text: "Nhiều giờ xem video, stream", type: "C" },
      { text: "Tùy theo có gì cần mua không", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Khi mạng chậm hoặc mất kết nối, bạn?",
    options: [
      { text: "Kiểm tra lỗi và tự khắc phục", type: "A" },
      { text: "Bực bội, không biết làm gì", type: "B" },
      { text: "Chán vì không xem được video", type: "C" },
      { text: "Lo lắng nếu đang mua đồ", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn follow/subscribe những kênh gì trên mạng?",
    options: [
      { text: "Kênh tin tức, kiến thức, công nghệ", type: "A" },
      { text: "Influencer, người nổi tiếng", type: "B" },
      { text: "Kênh giải trí, gaming, vlog", type: "C" },
      { text: "Kênh review sản phẩm, deal hunter", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Internet đối với cuộc sống bạn quan trọng thế nào?",
    options: [
      { text: "Cần thiết cho công việc và thông tin", type: "A" },
      { text: "Rất quan trọng, không thể thiếu", type: "B" },
      { text: "Chủ yếu để giải trí", type: "C" },
      { text: "Tiện lợi cho mua sắm và tìm kiếm", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Công dân số thông thái",
    emoji: "🧠",
    description: "Bạn sử dụng Internet một cách thông minh và có chọn lọc. Bạn biết cách khai thác thông tin hữu ích và bảo vệ bản thân trên không gian mạng.",
    traits: ["Thông minh", "Cẩn thận", "Có chọn lọc", "Am hiểu"],
    strengths: ["Phân biệt tin thật/giả", "An toàn trên mạng", "Sử dụng Internet hiệu quả"],
    weaknesses: ["Có thể bỏ lỡ xu hướng vui", "Đôi khi quá thận trọng"],
    tips: ["Thử khám phá thêm nội dung giải trí", "Chia sẻ kiến thức với người khác"],
  },
  B: {
    type: "B",
    title: "Người nghiện mạng xã hội",
    emoji: "📱",
    description: "Internet là nơi bạn kết nối với thế giới. Bạn yêu thích mạng xã hội, thích tương tác và luôn cập nhật những gì đang hot trên mạng.",
    traits: ["Kết nối", "Năng động", "Cập nhật", "Xã hội"],
    strengths: ["Mạng lưới rộng", "Nắm bắt xu hướng", "Kỹ năng giao tiếp online tốt"],
    weaknesses: ["Dễ mất tập trung", "Có thể nghiện mạng xã hội"],
    tips: ["Đặt giới hạn thời gian online", "Tham gia hoạt động ngoài đời thực"],
  },
  C: {
    type: "C",
    title: "Người thích giải trí online",
    emoji: "🎬",
    description: "Internet với bạn là nguồn giải trí vô tận. Bạn yêu thích xem video, stream và luôn tìm kiếm nội dung thú vị để thư giãn.",
    traits: ["Giải trí", "Thư giãn", "Khám phá", "Đa dạng"],
    strengths: ["Biết cách thư giãn", "Am hiểu nội dung số", "Tìm kiếm giải trí tốt"],
    weaknesses: ["Có thể lãng phí thời gian", "Ít quan tâm thông tin quan trọng"],
    tips: ["Cân bằng giải trí và học hỏi", "Thử các nội dung mang tính giáo dục"],
  },
  D: {
    type: "D",
    title: "Shopper online",
    emoji: "🛒",
    description: "Internet là trung tâm mua sắm của bạn. Bạn giỏi tìm deal, so sánh giá và luôn nắm được những khuyến mãi hot nhất.",
    traits: ["Tiết kiệm", "Thông minh", "So sánh", "Tiện lợi"],
    strengths: ["Săn deal giỏi", "So sánh giá nhanh", "Mua sắm thông minh"],
    weaknesses: ["Có thể mua quá nhiều", "Dễ bị cuốn vào sale"],
    tips: ["Lập danh sách trước khi mua", "Đặt ngân sách mua sắm hàng tháng"],
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
