// Giao tiếp xã hội
// Bài test đánh giá kỹ năng giao tiếp xã hội của bạn

export const questions = [
  {
    id: 1,
    question: "Khi đến nơi đông người lạ, bạn cảm thấy thế nào?",
    options: [
      { text: "Hào hứng và muốn làm quen", type: "A" },
      { text: "Bình thường, thoải mái", type: "B" },
      { text: "Hơi lo lắng, bám theo người quen", type: "C" },
      { text: "Rất khó chịu, muốn về sớm", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn bắt chuyện với người lạ như thế nào?",
    options: [
      { text: "Dễ dàng, hay chủ động nói chuyện", type: "A" },
      { text: "Được, nếu có lý do", type: "B" },
      { text: "Khó, chỉ khi họ nói trước", type: "C" },
      { text: "Rất khó, tôi tránh nói chuyện với người lạ", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi tham gia tiệc/sự kiện, bạn thường?",
    options: [
      { text: "Là tâm điểm, nói chuyện với nhiều người", type: "A" },
      { text: "Tham gia vui vẻ, giao tiếp nhiều nhóm", type: "B" },
      { text: "Ở trong nhóm quen, ít giao lưu", type: "C" },
      { text: "Đứng một góc hoặc về sớm", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn xử lý thế nào khi cần nhờ người lạ giúp đỡ?",
    options: [
      { text: "Dễ dàng hỏi và biết cách nhờ", type: "A" },
      { text: "Lịch sự nhờ giúp", type: "B" },
      { text: "Ngại ngần nhưng vẫn hỏi", type: "C" },
      { text: "Cố tự giải quyết, không muốn hỏi", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn có hay tham gia các hoạt động cộng đồng không?",
    options: [
      { text: "Có, thường xuyên và tích cực", type: "A" },
      { text: "Đôi khi tham gia", type: "B" },
      { text: "Hiếm khi", type: "C" },
      { text: "Không bao giờ", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi gặp người nổi tiếng/người mình ngưỡng mộ, bạn?",
    options: [
      { text: "Tự tin đến làm quen, trò chuyện", type: "A" },
      { text: "Cố gắng tiếp cận nếu có cơ hội", type: "B" },
      { text: "Ngắm từ xa, ngại tiếp cận", type: "C" },
      { text: "Không dám đến gần", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn có hay chia sẻ quan điểm trước đám đông không?",
    options: [
      { text: "Có, tự tin phát biểu", type: "A" },
      { text: "Có, khi cần thiết", type: "B" },
      { text: "Hiếm khi, chỉ khi bắt buộc", type: "C" },
      { text: "Không, rất ngại nói trước đám đông", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Mọi người đánh giá về kỹ năng xã hội của bạn thế nào?",
    options: [
      { text: "Rất giỏi giao tiếp, vui vẻ", type: "A" },
      { text: "Dễ thương, lịch sự", type: "B" },
      { text: "Ít nói, khó hiểu", type: "C" },
      { text: "Khép kín, xa cách", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn có dễ dàng xây dựng mạng lưới quan hệ không?",
    options: [
      { text: "Có, tôi có nhiều mối quan hệ", type: "A" },
      { text: "Khá dễ, có một số quan hệ tốt", type: "B" },
      { text: "Khó, tôi ít mở rộng quan hệ", type: "C" },
      { text: "Rất khó, tôi không có mạng lưới", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Khi cần giới thiệu bản thân, bạn?",
    options: [
      { text: "Tự tin và để lại ấn tượng tốt", type: "A" },
      { text: "Giới thiệu đủ thông tin cần thiết", type: "B" },
      { text: "Ngắn gọn và nhanh chóng", type: "C" },
      { text: "Rất ngại, nói ấp úng", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn có hay giao tiếp mắt khi nói chuyện không?",
    options: [
      { text: "Có, giao tiếp mắt tốt", type: "A" },
      { text: "Có, ở mức bình thường", type: "B" },
      { text: "Ít, hay nhìn đi nơi khác", type: "C" },
      { text: "Hầu như không dám nhìn mắt", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bạn đánh giá kỹ năng giao tiếp xã hội của mình thế nào?",
    options: [
      { text: "Rất tốt, điểm mạnh của tôi", type: "A" },
      { text: "Khá tốt", type: "B" },
      { text: "Cần cải thiện", type: "C" },
      { text: "Là điểm yếu lớn", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Bậc Thầy Giao Tiếp Xã Hội",
    emoji: "🦋",
    description: "Bạn có kỹ năng giao tiếp xã hội xuất sắc. Bạn tự tin, dễ dàng kết nối với mọi người và tạo ấn tượng tốt trong mọi tình huống xã hội.",
    traits: ["Tự tin", "Năng động", "Thu hút", "Kết nối tốt"],
    strengths: ["Mạng lưới quan hệ rộng", "Nhiều cơ hội", "Được mọi người yêu mến"],
    weaknesses: ["Đôi khi quá xã giao", "Có thể mệt mỏi vì giao tiếp nhiều"],
    tips: ["Tiếp tục phát huy", "Nhớ dành thời gian cho mình"],
  },
  B: {
    type: "B",
    title: "Người Giao Tiếp Tốt",
    emoji: "😊",
    description: "Bạn có kỹ năng giao tiếp xã hội tốt, có thể thoải mái trong hầu hết các tình huống xã hội và biết cách xây dựng mối quan hệ.",
    traits: ["Lịch sự", "Thoải mái", "Có kỹ năng", "Cân bằng"],
    strengths: ["Giao tiếp hiệu quả", "Được tôn trọng"],
    weaknesses: ["Có thể chủ động hơn", "Đôi khi còn ngại"],
    tips: ["Thử thách bản thân trong các sự kiện lớn hơn", "Mở rộng mạng lưới quan hệ"],
  },
  C: {
    type: "C",
    title: "Người Hướng Nội",
    emoji: "🐢",
    description: "Bạn có xu hướng hướng nội trong giao tiếp xã hội. Bạn thích môi trường quen thuộc và cần thời gian để làm quen với người mới.",
    traits: ["Hướng nội", "Thận trọng", "Cần thời gian", "Chọn lọc"],
    strengths: ["Quan hệ chất lượng", "Không hời hợt"],
    weaknesses: ["Khó mở rộng quan hệ", "Bỏ lỡ cơ hội"],
    tips: ["Tập ra ngoài vùng an toàn", "Bắt đầu với những bước nhỏ"],
  },
  D: {
    type: "D",
    title: "Cần Phát Triển Kỹ Năng Xã Hội",
    emoji: "📚",
    description: "Kỹ năng giao tiếp xã hội là điểm yếu của bạn và cần được cải thiện. Điều này có thể ảnh hưởng đến nhiều khía cạnh trong cuộc sống.",
    traits: ["Ngại giao tiếp", "Xa cách", "Khó kết nối", "Cần học hỏi"],
    strengths: ["Có thể cải thiện được"],
    weaknesses: ["Ít cơ hội", "Cảm thấy cô lập", "Khó xây dựng quan hệ"],
    tips: ["Học các khóa kỹ năng giao tiếp", "Tập nói chuyện với người thân quen trước"],
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
