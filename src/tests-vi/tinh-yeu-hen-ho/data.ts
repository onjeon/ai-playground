// Phong cách hẹn hò
// Khám phá phong cách hẹn hò và tán tỉnh của bạn

export const questions = [
  {
    id: 1,
    question: "Khi thích ai đó, bạn thường?",
    options: [
      { text: "Chủ động tán tỉnh, thể hiện rõ ràng", type: "A" },
      { text: "Tạo cơ hội gặp gỡ, gợi ý nhẹ", type: "B" },
      { text: "Chờ họ chủ động trước", type: "C" },
      { text: "Giấu kín, không dám thể hiện", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Buổi hẹn đầu tiên lý tưởng của bạn là gì?",
    options: [
      { text: "Ăn tối sang trọng, lãng mạn", type: "A" },
      { text: "Café đơn giản, nói chuyện", type: "B" },
      { text: "Hoạt động vui vẻ như xem phim, chơi game", type: "C" },
      { text: "Đi dạo, khám phá chỗ mới", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn muốn gặp gỡ người mới ở đâu?",
    options: [
      { text: "App hẹn hò, tiện và nhiều lựa chọn", type: "A" },
      { text: "Qua bạn bè giới thiệu", type: "B" },
      { text: "Ở công ty, trường học", type: "C" },
      { text: "Tình cờ gặp ngoài đời", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi hẹn hò, bạn ưu tiên điều gì?",
    options: [
      { text: "Ngoại hình và sự thu hút", type: "A" },
      { text: "Tính cách và sự hợp nhau", type: "B" },
      { text: "Điều kiện và tương lai ổn định", type: "C" },
      { text: "Cảm giác và chemistry", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn thường chat/gọi điện bao lâu trước khi gặp mặt?",
    options: [
      { text: "Vài ngày, muốn gặp ngay", type: "A" },
      { text: "1-2 tuần, tìm hiểu qua tin nhắn", type: "B" },
      { text: "Vài tuần, cần chắc chắn", type: "C" },
      { text: "Rất lâu, sợ gặp mặt", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn đi hẹn hò với bao nhiêu người cùng lúc?",
    options: [
      { text: "Nhiều người, so sánh để chọn", type: "A" },
      { text: "Vài người, tìm hiểu từ từ", type: "B" },
      { text: "Một người, tập trung", type: "C" },
      { text: "Không hẹn hò, chờ người phù hợp tự đến", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Ai trả tiền khi đi hẹn hò?",
    options: [
      { text: "Mình trả hết, thể hiện", type: "A" },
      { text: "Chia đôi hoặc thay phiên", type: "B" },
      { text: "Ai mời người đó trả", type: "C" },
      { text: "Để đối phương trả", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Sau buổi hẹn, bạn thường?",
    options: [
      { text: "Nhắn tin ngay, bày tỏ cảm xúc", type: "A" },
      { text: "Nhắn cảm ơn, chờ phản hồi", type: "B" },
      { text: "Chờ họ nhắn trước", type: "C" },
      { text: "Suy nghĩ kỹ trước khi liên lạc", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn tán tỉnh bằng cách nào?",
    options: [
      { text: "Khen ngợi trực tiếp, tặng quà", type: "A" },
      { text: "Quan tâm, hỏi thăm", type: "B" },
      { text: "Hài hước, làm họ cười", type: "C" },
      { text: "Ngầm thể hiện, không nói thẳng", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn mất bao lâu để xác định mối quan hệ?",
    options: [
      { text: "Nhanh, vài buổi hẹn là biết", type: "A" },
      { text: "Vài tuần đến 1 tháng", type: "B" },
      { text: "Vài tháng, cần tìm hiểu kỹ", type: "C" },
      { text: "Rất lâu, cần chắc chắn 100%", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Nếu buổi hẹn không như mong đợi, bạn?",
    options: [
      { text: "Nói thẳng không phù hợp", type: "A" },
      { text: "Không hẹn tiếp, ghosting lịch sự", type: "B" },
      { text: "Cho thêm cơ hội", type: "C" },
      { text: "Vẫn tiếp tục, khó từ chối", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bạn đánh giá phong cách hẹn hò của mình?",
    options: [
      { text: "Chủ động, mạnh mẽ", type: "A" },
      { text: "Cân bằng, tự nhiên", type: "B" },
      { text: "Thận trọng, từ từ", type: "C" },
      { text: "Thụ động, chờ đợi", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Tay chơi chủ động",
    emoji: "🔥",
    description: "Bạn là người chủ động và quyết đoán trong hẹn hò. Bạn biết mình muốn gì và không ngại thể hiện. Bạn thu hút và tự tin!",
    traits: ["Chủ động", "Tự tin", "Quyết đoán", "Thu hút"],
    strengths: ["Không bỏ lỡ cơ hội", "Biết cách thu hút", "Quyết định nhanh"],
    weaknesses: ["Có thể quá vội vàng", "Đôi khi quá mạnh mẽ"],
    tips: ["Cho đối phương thời gian", "Lắng nghe nhiều hơn"],
  },
  B: {
    type: "B",
    title: "Người hẹn hò cân bằng",
    emoji: "💫",
    description: "Bạn có phong cách hẹn hò cân bằng và tự nhiên. Bạn biết cách tạo cơ hội nhưng cũng không quá pressing. Đây là style lý tưởng!",
    traits: ["Cân bằng", "Tự nhiên", "Linh hoạt", "Thoải mái"],
    strengths: ["Tạo cảm giác thoải mái", "Không áp lực", "Dễ kết nối"],
    weaknesses: ["Đôi khi cần chủ động hơn", "Có thể do dự"],
    tips: ["Đôi khi hãy mạnh dạn hơn", "Thể hiện rõ ràng hơn khi thích ai"],
  },
  C: {
    type: "C",
    title: "Người thận trọng",
    emoji: "🔍",
    description: "Bạn hẹn hò một cách thận trọng và kỹ lưỡng. Bạn cần thời gian để tìm hiểu và không vội vàng vào mối quan hệ.",
    traits: ["Thận trọng", "Kỹ lưỡng", "Từ từ", "Cẩn thận"],
    strengths: ["Ít mắc sai lầm", "Hiểu đối phương kỹ", "Mối quan hệ vững chắc"],
    weaknesses: ["Có thể bỏ lỡ cơ hội", "Quá chậm", "Đối phương có thể mất kiên nhẫn"],
    tips: ["Đôi khi hãy liều lĩnh hơn", "Không phải ai cũng chờ đợi"],
  },
  D: {
    type: "D",
    title: "Người thụ động",
    emoji: "🌙",
    description: "Bạn khá thụ động trong hẹn hò và thường chờ đợi đối phương chủ động. Bạn có thể bỏ lỡ nhiều cơ hội vì sự rụt rè.",
    traits: ["Thụ động", "Rụt rè", "Chờ đợi", "Ngại ngùng"],
    strengths: ["Không vội vàng", "Đợi người thực sự quan tâm", "Không áp đặt"],
    weaknesses: ["Bỏ lỡ cơ hội", "Khó gặp người mới", "Phụ thuộc vào người khác"],
    tips: ["Thử chủ động hơn", "Tham gia các hoạt động để gặp người mới", "Bạn xứng đáng được yêu"],
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
