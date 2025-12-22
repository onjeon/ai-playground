// Giao tiếp online
// Bài test đánh giá cách bạn giao tiếp trên không gian mạng

export const questions = [
  {
    id: 1,
    question: "Bạn sử dụng mạng xã hội như thế nào?",
    options: [
      { text: "Rất tích cực, đăng bài và tương tác nhiều", type: "A" },
      { text: "Thường xuyên xem và đôi khi tương tác", type: "B" },
      { text: "Chủ yếu xem, ít đăng bài", type: "C" },
      { text: "Hiếm khi sử dụng", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn trả lời tin nhắn như thế nào?",
    options: [
      { text: "Ngay lập tức hoặc rất nhanh", type: "A" },
      { text: "Trong vòng vài giờ", type: "B" },
      { text: "Khi nào rảnh thì trả lời", type: "C" },
      { text: "Hay quên hoặc chậm trả lời", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn có thoải mái video call không?",
    options: [
      { text: "Rất thoải mái, hay video call", type: "A" },
      { text: "Ổn, khi cần thiết", type: "B" },
      { text: "Hơi ngại, thích nhắn tin hơn", type: "C" },
      { text: "Rất ngại, tránh video call", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn viết tin nhắn/comment như thế nào?",
    options: [
      { text: "Dài dòng, nhiều emoji, thể hiện cảm xúc", type: "A" },
      { text: "Vừa phải, đủ ý", type: "B" },
      { text: "Ngắn gọn, đi thẳng vào vấn đề", type: "C" },
      { text: "Rất ngắn, một vài từ", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn có hay tham gia các nhóm/cộng đồng online không?",
    options: [
      { text: "Có, tham gia nhiều nhóm và tích cực", type: "A" },
      { text: "Có vài nhóm quan tâm", type: "B" },
      { text: "Có nhưng ít tương tác", type: "C" },
      { text: "Không tham gia nhóm nào", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn có dễ dàng kết bạn online không?",
    options: [
      { text: "Rất dễ, có nhiều bạn online", type: "A" },
      { text: "Khá dễ, có một số bạn", type: "B" },
      { text: "Khó, chỉ kết bạn người quen", type: "C" },
      { text: "Không kết bạn với người lạ online", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn chia sẻ cuộc sống trên mạng xã hội như thế nào?",
    options: [
      { text: "Chia sẻ nhiều, cập nhật thường xuyên", type: "A" },
      { text: "Chia sẻ những khoảnh khắc đặc biệt", type: "B" },
      { text: "Hiếm khi chia sẻ gì cá nhân", type: "C" },
      { text: "Không chia sẻ, giữ riêng tư", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn xử lý xung đột/tranh luận online như thế nào?",
    options: [
      { text: "Tham gia tranh luận văn minh", type: "A" },
      { text: "Đưa ý kiến rồi không tranh cãi thêm", type: "B" },
      { text: "Tránh xa các cuộc tranh luận", type: "C" },
      { text: "Không quan tâm hoặc block", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn cảm thấy thế nào về việc giao tiếp online so với trực tiếp?",
    options: [
      { text: "Thích cả hai, online tiện lợi hơn", type: "A" },
      { text: "Ổn với cả hai", type: "B" },
      { text: "Thích trực tiếp hơn", type: "C" },
      { text: "Không thích giao tiếp online", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn có hay livestream/đăng video không?",
    options: [
      { text: "Có, thường xuyên", type: "A" },
      { text: "Đôi khi, với những dịp đặc biệt", type: "B" },
      { text: "Hiếm khi", type: "C" },
      { text: "Không bao giờ", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn quản lý thông tin cá nhân online như thế nào?",
    options: [
      { text: "Cởi mở, không giấu giếm nhiều", type: "A" },
      { text: "Cân bằng giữa chia sẻ và riêng tư", type: "B" },
      { text: "Cẩn thận, chỉ chia sẻ ít thông tin", type: "C" },
      { text: "Rất riêng tư, gần như không chia sẻ", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bạn đánh giá kỹ năng giao tiếp online của mình thế nào?",
    options: [
      { text: "Rất tốt, thoải mái như ngoài đời", type: "A" },
      { text: "Khá tốt", type: "B" },
      { text: "Bình thường", type: "C" },
      { text: "Không tốt lắm", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Công Dân Số Năng Động",
    emoji: "📱",
    description: "Bạn rất năng động trên không gian mạng, thoải mái với giao tiếp online và biết cách xây dựng mối quan hệ qua mạng xã hội.",
    traits: ["Năng động", "Thoải mái", "Kết nối tốt", "Cập nhật"],
    strengths: ["Mạng lưới rộng", "Cập nhật xu hướng", "Giao tiếp hiệu quả online"],
    weaknesses: ["Có thể quá phụ thuộc vào online", "Thiếu giao tiếp trực tiếp"],
    tips: ["Cân bằng giữa online và offline", "Bảo vệ thông tin cá nhân"],
  },
  B: {
    type: "B",
    title: "Người Dùng Cân Bằng",
    emoji: "⚖️",
    description: "Bạn sử dụng mạng xã hội và giao tiếp online một cách cân bằng, biết tận dụng lợi ích của công nghệ mà không quá lạm dụng.",
    traits: ["Cân bằng", "Có chọn lọc", "Thực tế", "Linh hoạt"],
    strengths: ["Sử dụng hiệu quả", "Cân bằng cuộc sống", "Bảo vệ riêng tư tốt"],
    weaknesses: ["Có thể tích cực hơn", "Đôi khi chậm cập nhật"],
    tips: ["Tiếp tục duy trì sự cân bằng", "Tận dụng thêm các công cụ online"],
  },
  C: {
    type: "C",
    title: "Người Dùng Thụ Động",
    emoji: "👀",
    description: "Bạn có xu hướng thụ động trong giao tiếp online, chủ yếu quan sát và ít tương tác. Bạn coi trọng sự riêng tư và không thích chia sẻ nhiều.",
    traits: ["Thụ động", "Quan sát", "Riêng tư", "Ít tương tác"],
    strengths: ["Bảo vệ riêng tư", "Không bị cuốn vào drama"],
    weaknesses: ["Bỏ lỡ cơ hội kết nối", "Ít tận dụng được lợi ích"],
    tips: ["Thử tương tác nhiều hơn", "Tham gia các nhóm có cùng sở thích"],
  },
  D: {
    type: "D",
    title: "Người Tránh Xa Online",
    emoji: "🚫",
    description: "Bạn không thoải mái với giao tiếp online và có xu hướng tránh các hoạt động trên mạng xã hội. Điều này có thể khiến bạn bỏ lỡ nhiều cơ hội kết nối.",
    traits: ["Tránh xa", "Không thoải mái", "Riêng tư cao", "Truyền thống"],
    strengths: ["Bảo vệ riêng tư tốt", "Không bị ảnh hưởng tiêu cực"],
    weaknesses: ["Bỏ lỡ cơ hội", "Khó kết nối", "Lạc hậu với xu hướng"],
    tips: ["Thử học cách sử dụng mạng xã hội cơ bản", "Bắt đầu với các nhóm nhỏ"],
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
