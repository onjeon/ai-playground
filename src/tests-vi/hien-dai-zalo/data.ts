// Cách Dùng Zalo Của Bạn
// Khám phá phong cách sử dụng Zalo - ứng dụng nhắn tin quốc dân

export const questions = [
  {
    id: 1,
    question: "Bạn dùng Zalo để làm gì chủ yếu?",
    options: [
      { text: "Nhắn tin với gia đình, người thân", type: "A" },
      { text: "Công việc, trao đổi với đồng nghiệp", type: "B" },
      { text: "Chat với bạn bè, group nhóm", type: "C" },
      { text: "Tất cả, Zalo là app nhắn tin chính", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn có bao nhiêu group Zalo?",
    options: [
      { text: "Dưới 10 - ít thôi cho đỡ rối", type: "A" },
      { text: "10-30 - vừa phải", type: "B" },
      { text: "30-50 - nhiều quan hệ", type: "C" },
      { text: "Trên 50 - không đếm nổi", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi nhận tin nhắn Zalo, bạn thường?",
    options: [
      { text: "Trả lời ngay lập tức", type: "A" },
      { text: "Đọc rồi trả lời khi rảnh", type: "B" },
      { text: "Để seen, quên trả lời", type: "C" },
      { text: "Tắt thông báo, kiểm tra khi nào thích", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn có dùng Zalo Pay không?",
    options: [
      { text: "Có, chuyển tiền thường xuyên", type: "A" },
      { text: "Thỉnh thoảng, khi cần", type: "B" },
      { text: "Hiếm khi, dùng app khác", type: "C" },
      { text: "Không biết có tính năng này", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Avatar Zalo của bạn là gì?",
    options: [
      { text: "Ảnh chân dung đàng hoàng", type: "A" },
      { text: "Ảnh với gia đình/người yêu", type: "B" },
      { text: "Ảnh phong cảnh, thú cưng", type: "C" },
      { text: "Hình vẽ, avatar app tạo", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn xử lý group Zalo công ty như thế nào?",
    options: [
      { text: "Bật thông báo, không bỏ lỡ tin nào", type: "A" },
      { text: "Tắt thông báo, check định kỳ", type: "B" },
      { text: "Mute vĩnh viễn, chỉ đọc khi cần", type: "C" },
      { text: "Rời group ngay khi nghỉ việc", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn có hay gọi video call Zalo không?",
    options: [
      { text: "Có, với gia đình ở xa", type: "A" },
      { text: "Thỉnh thoảng, họp công việc", type: "B" },
      { text: "Hiếm khi, thích nhắn tin hơn", type: "C" },
      { text: "Không bao giờ, ngại camera", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Nhật ký Zalo (Timeline) của bạn như thế nào?",
    options: [
      { text: "Hay đăng, chia sẻ cuộc sống", type: "A" },
      { text: "Thỉnh thoảng, dịp đặc biệt", type: "B" },
      { text: "Hiếm khi, nhưng hay xem của người khác", type: "C" },
      { text: "Không dùng, không biết có tính năng này", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi sếp nhắn Zalo ngoài giờ làm, bạn?",
    options: [
      { text: "Trả lời ngay, dù đang làm gì", type: "A" },
      { text: "Đọc rồi cân nhắc có trả lời không", type: "B" },
      { text: "Giả vờ không thấy, mai trả lời", type: "C" },
      { text: "Tắt thông báo chat công việc sau 6h", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn nghĩ sao về Zalo so với các app khác?",
    options: [
      { text: "Tốt nhất, người Việt nên dùng Zalo", type: "A" },
      { text: "Tiện cho công việc và gia đình", type: "B" },
      { text: "Bình thường, dùng vì mọi người dùng", type: "C" },
      { text: "Thích Messenger/Telegram hơn", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Zalo Master",
    emoji: "💬",
    percentage: 90,
    description: "Zalo là ứng dụng không thể thiếu trong cuộc sống của bạn! Bạn dùng đủ tính năng từ chat, gọi điện, Zalo Pay đến Nhật ký. Không có Zalo, bạn như mất liên lạc với cả thế giới!",
    characteristics: ["Dùng mọi tính năng", "Trả lời tin nhanh", "Nhiều group Zalo", "Online liên tục"],
    advice: "Hãy đặt ranh giới giữa công việc và cuộc sống riêng. Tắt thông báo ngoài giờ làm để có thời gian nghỉ ngơi!",
  },
  B: {
    type: "B",
    title: "Zalo Công Sở",
    emoji: "💼",
    percentage: 75,
    description: "Zalo với bạn chủ yếu là công cụ làm việc! Group công ty, chat với sếp và đồng nghiệp, họp online - Zalo giúp bạn kết nối chuyên nghiệp mọi lúc mọi nơi.",
    characteristics: ["Dùng cho công việc", "Nhiều group công ty", "Trả lời nhanh sếp", "Chuyên nghiệp"],
    advice: "Đừng quên dùng Zalo để kết nối với bạn bè và gia đình nhé! Cuộc sống không chỉ có công việc thôi đâu.",
  },
  C: {
    type: "C",
    title: "Người Dùng Bình Thường",
    emoji: "📱",
    percentage: 55,
    description: "Bạn dùng Zalo như một app nhắn tin thông thường. Không quá phụ thuộc, không quá xa cách. Cần thì dùng, không cần thì để đó. Đây là cách dùng app cân bằng nhất!",
    characteristics: ["Dùng vừa phải", "Không phụ thuộc", "Trả lời khi rảnh", "Cân bằng online-offline"],
    advice: "Bạn đang có sự cân bằng tốt! Hãy tiếp tục duy trì và khám phá thêm những tính năng hay của Zalo.",
  },
  D: {
    type: "D",
    title: "Zalo Phụ",
    emoji: "🔕",
    percentage: 35,
    description: "Zalo với bạn chỉ là app phụ, dùng vì mọi người dùng chứ không phải lựa chọn số một. Bạn thích Messenger, Telegram hoặc các app khác hơn. Zalo chỉ để liên lạc khi cần!",
    characteristics: ["Dùng khi bắt buộc", "Tắt thông báo", "Ít online", "Thích app khác"],
    advice: "Zalo có nhiều tính năng hay ho đấy! Thử khám phá thêm Zalo Pay, ZalOTP để thấy sự tiện lợi nhé.",
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
