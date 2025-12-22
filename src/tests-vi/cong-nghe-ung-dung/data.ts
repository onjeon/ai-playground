// Ứng dụng yêu thích
// Khám phá phong cách sử dụng ứng dụng di động của bạn

export const questions = [
  {
    id: 1,
    question: "Loại ứng dụng nào chiếm nhiều dung lượng nhất trên điện thoại bạn?",
    options: [
      { text: "Ứng dụng làm việc, quản lý", type: "A" },
      { text: "Ứng dụng mạng xã hội", type: "B" },
      { text: "Game và giải trí", type: "C" },
      { text: "Ứng dụng học tập, sách", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thường tải ứng dụng mới khi nào?",
    options: [
      { text: "Khi cần cho công việc cụ thể", type: "A" },
      { text: "Khi thấy bạn bè dùng hoặc hot trên mạng", type: "B" },
      { text: "Khi có game mới hay app giải trí thú vị", type: "C" },
      { text: "Khi muốn học một kỹ năng mới", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Điều gì quan trọng nhất khi chọn ứng dụng?",
    options: [
      { text: "Tính năng mạnh mẽ, hiệu quả", type: "A" },
      { text: "Giao diện đẹp, dễ dùng", type: "B" },
      { text: "Miễn phí hoặc có nhiều nội dung", type: "C" },
      { text: "Review tốt, đáng tin cậy", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn có sẵn sàng trả phí cho ứng dụng không?",
    options: [
      { text: "Có, nếu nó giúp công việc tốt hơn", type: "A" },
      { text: "Có, nếu bỏ quảng cáo và có tính năng hay", type: "B" },
      { text: "Có, để mua vật phẩm trong game", type: "C" },
      { text: "Có, nếu app học tập chất lượng", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Ứng dụng bạn không thể thiếu là gì?",
    options: [
      { text: "Notion, Trello, ứng dụng quản lý", type: "A" },
      { text: "Facebook, Instagram, TikTok", type: "B" },
      { text: "Game yêu thích, YouTube", type: "C" },
      { text: "Duolingo, Coursera, app học", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn xử lý thông báo từ ứng dụng thế nào?",
    options: [
      { text: "Chỉ bật thông báo quan trọng", type: "A" },
      { text: "Bật hết để không bỏ lỡ gì", type: "B" },
      { text: "Tắt hết, mở app khi muốn", type: "C" },
      { text: "Bật cho app học để nhắc nhở", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Khi ứng dụng yêu cầu quyền truy cập, bạn?",
    options: [
      { text: "Đọc kỹ và chỉ cho phép cần thiết", type: "A" },
      { text: "Cho phép để dùng đầy đủ tính năng", type: "B" },
      { text: "Nhanh chóng đồng ý để vào app", type: "C" },
      { text: "Kiểm tra review trước khi quyết định", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn dọn dẹp ứng dụng không dùng thế nào?",
    options: [
      { text: "Thường xuyên, giữ máy gọn gàng", type: "A" },
      { text: "Thỉnh thoảng khi hết dung lượng", type: "B" },
      { text: "Giữ hết game, xóa app khác", type: "C" },
      { text: "Giữ app học, xóa app không hữu ích", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Ứng dụng Việt Nam nào bạn dùng nhiều nhất?",
    options: [
      { text: "VnExpress, ứng dụng ngân hàng", type: "A" },
      { text: "Zalo, TikTok Việt Nam", type: "B" },
      { text: "Liên Quân, PUBG Mobile", type: "C" },
      { text: "VioEdu, ELSA Speak", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn cập nhật ứng dụng như thế nào?",
    options: [
      { text: "Cập nhật thủ công, đọc thay đổi", type: "A" },
      { text: "Bật tự động cập nhật", type: "B" },
      { text: "Chỉ cập nhật game yêu thích", type: "C" },
      { text: "Cập nhật khi có tính năng mới hay", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn thường review ứng dụng trên store không?",
    options: [
      { text: "Có, nếu app thực sự tốt hoặc tệ", type: "A" },
      { text: "Thỉnh thoảng, khi được yêu cầu", type: "B" },
      { text: "Có, review game mình chơi", type: "C" },
      { text: "Có, để giúp người khác chọn app tốt", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Ứng dụng lý tưởng với bạn là gì?",
    options: [
      { text: "Giúp làm việc nhanh hơn, tốt hơn", type: "A" },
      { text: "Kết nối được với mọi người", type: "B" },
      { text: "Giải trí vui vẻ, không nhàm chán", type: "C" },
      { text: "Học được kiến thức mới mỗi ngày", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người dùng app năng suất",
    emoji: "⚡",
    description: "Bạn tìm kiếm ứng dụng giúp tăng năng suất và hiệu quả công việc. Điện thoại của bạn là công cụ làm việc đắc lực.",
    traits: ["Hiệu quả", "Có tổ chức", "Chuyên nghiệp", "Thực dụng"],
    strengths: ["Biết chọn app chất lượng", "Tận dụng công nghệ tốt", "Quản lý thời gian hiệu quả"],
    weaknesses: ["Có thể thiếu giải trí", "Đôi khi bỏ qua app vui"],
    tips: ["Thử một số app giải trí để cân bằng", "Khám phá app mới ngoài công việc"],
  },
  B: {
    type: "B",
    title: "Người dùng app xã hội",
    emoji: "🌐",
    description: "Ứng dụng mạng xã hội và kết nối là ưu tiên của bạn. Bạn yêu thích việc giữ liên lạc và cập nhật cuộc sống của mọi người.",
    traits: ["Kết nối", "Năng động", "Cập nhật", "Thân thiện"],
    strengths: ["Mạng lưới rộng", "Nắm bắt xu hướng", "Giao tiếp tốt online"],
    weaknesses: ["Có thể mất nhiều thời gian lướt app", "Dễ bị phân tâm"],
    tips: ["Đặt giới hạn thời gian cho mạng xã hội", "Thử các app năng suất"],
  },
  C: {
    type: "C",
    title: "Người dùng app giải trí",
    emoji: "🎮",
    description: "Ứng dụng game và giải trí chiếm phần lớn thời gian của bạn. Bạn biết cách thư giãn và tìm niềm vui qua điện thoại.",
    traits: ["Giải trí", "Vui vẻ", "Khám phá", "Thoải mái"],
    strengths: ["Biết cách thư giãn", "Tìm được niềm vui", "Cộng đồng game"],
    weaknesses: ["Có thể tốn nhiều thời gian", "Ít quan tâm app hữu ích"],
    tips: ["Thử các app học tập kết hợp game", "Cân bằng giải trí và phát triển bản thân"],
  },
  D: {
    type: "D",
    title: "Người dùng app học hỏi",
    emoji: "📖",
    description: "Bạn dùng ứng dụng chủ yếu để học hỏi và phát triển bản thân. Điện thoại là công cụ giáo dục di động của bạn.",
    traits: ["Ham học", "Cầu tiến", "Tự giác", "Kiên trì"],
    strengths: ["Học hỏi liên tục", "Tận dụng thời gian rảnh", "Phát triển bản thân"],
    weaknesses: ["Có thể thiếu giải trí", "Đôi khi gây áp lực học"],
    tips: ["Nhớ giải trí để não nghỉ ngơi", "Kết hợp học với vui chơi"],
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
