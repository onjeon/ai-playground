// Phong cách hẹn hò online
// Khám phá phong cách hẹn hò trực tuyến của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn dùng app hẹn hò nào?",
    options: [
      { text: "Không dùng, thích quen trực tiếp", type: "A" },
      { text: "Tinder - đơn giản, nhiều người", type: "B" },
      { text: "Bumble - nữ chủ động nhắn trước", type: "C" },
      { text: "Nhiều app cùng lúc, tăng cơ hội", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Profile hẹn hò của bạn như thế nào?",
    options: [
      { text: "Không có, không dùng app", type: "A" },
      { text: "Đầy đủ thông tin, ảnh đẹp", type: "B" },
      { text: "Cơ bản, vài dòng giới thiệu", type: "C" },
      { text: "Đổi liên tục, test hiệu quả", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi match với ai đó, bạn sẽ?",
    options: [
      { text: "Đợi họ nhắn trước", type: "A" },
      { text: "Nhắn câu chào thông thường", type: "B" },
      { text: "Nhắn tin sáng tạo, gây ấn tượng", type: "C" },
      { text: "Nhắn ngay, không đợi", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bao lâu thì bạn muốn gặp mặt?",
    options: [
      { text: "Cần nhắn tin rất lâu trước khi gặp", type: "A" },
      { text: "1-2 tuần nhắn tin thì gặp", type: "B" },
      { text: "Vài ngày là đủ, gặp nhanh", type: "C" },
      { text: "Gặp càng sớm càng tốt", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn thường swipe như thế nào?",
    options: [
      { text: "Rất kỹ, ít swipe right", type: "A" },
      { text: "Đọc bio, xem ảnh rồi quyết định", type: "B" },
      { text: "Swipe right nhiều, lọc sau", type: "C" },
      { text: "Swipe right gần hết", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Điều gì quan trọng nhất trong profile người khác?",
    options: [
      { text: "Ảnh thật, tự nhiên", type: "A" },
      { text: "Bio thú vị, có chiều sâu", type: "B" },
      { text: "Ngoại hình hấp dẫn", type: "C" },
      { text: "Có điểm chung sở thích", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn xử lý ghosting như thế nào?",
    options: [
      { text: "Rất buồn, mất lòng tin", type: "A" },
      { text: "Thất vọng nhưng move on", type: "B" },
      { text: "Bình thường, app mà", type: "C" },
      { text: "Không care, nhiều người khác", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn có kể cho bạn bè về người match không?",
    options: [
      { text: "Không, giữ bí mật", type: "A" },
      { text: "Khi có người thú vị thì kể", type: "B" },
      { text: "Hay chia sẻ, bạn bè tư vấn", type: "C" },
      { text: "Kể hết, cho vui", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn có video call trước khi gặp không?",
    options: [
      { text: "Bắt buộc, để chắc chắn an toàn", type: "A" },
      { text: "Có thể, nếu họ muốn", type: "B" },
      { text: "Không cần, gặp luôn", type: "C" },
      { text: "Thích gặp mặt hơn", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Nếu họ khác xa ảnh, bạn sẽ?",
    options: [
      { text: "Rất khó chịu, cảm thấy bị lừa", type: "A" },
      { text: "Thất vọng nhưng cho cơ hội", type: "B" },
      { text: "Không sao, tính cách quan trọng hơn", type: "C" },
      { text: "Tùy mức độ, vẫn có thể ok", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn có trả tiền premium app hẹn hò không?",
    options: [
      { text: "Không, app miễn phí là đủ", type: "A" },
      { text: "Đã từng thử", type: "B" },
      { text: "Có, để có nhiều tính năng", type: "C" },
      { text: "Luôn dùng premium", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Mục đích hẹn hò online của bạn?",
    options: [
      { text: "Tìm người yêu nghiêm túc", type: "A" },
      { text: "Quen bạn mới, xem duyên đến đâu", type: "B" },
      { text: "Giải trí, không kỳ vọng nhiều", type: "C" },
      { text: "Mở rộng quan hệ xã hội", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người thận trọng",
    emoji: "🔍",
    description: "Bạn rất cẩn thận trong hẹn hò online. Chất lượng hơn số lượng, bạn tìm kiếm mối quan hệ nghiêm túc và không vội vàng. An toàn là ưu tiên số một.",
    traits: ["Thận trọng", "Nghiêm túc", "Chọn lọc", "An toàn"],
    strengths: ["Tránh được người không phù hợp", "Tiết kiệm thời gian", "Tìm được người phù hợp"],
    weaknesses: ["Có thể bỏ lỡ cơ hội", "Khó mở lòng"],
    tips: ["Thử linh hoạt hơn một chút", "Cho người khác cơ hội"],
  },
  B: {
    type: "B",
    title: "Người cân bằng",
    emoji: "⚖️",
    description: "Bạn có cách tiếp cận cân bằng với hẹn hò online. Không quá vội vàng cũng không quá chậm rãi. Bạn biết cách tận hưởng quá trình.",
    traits: ["Cân bằng", "Linh hoạt", "Thực tế", "Thoải mái"],
    strengths: ["Có nhiều match chất lượng", "Không áp lực", "Mở lòng vừa đủ"],
    weaknesses: ["Đôi khi thiếu quyết đoán", "Có thể bị passive"],
    tips: ["Chủ động hơn khi thích ai", "Đừng ngại bày tỏ"],
  },
  C: {
    type: "C",
    title: "Người chủ động",
    emoji: "💫",
    description: "Bạn biết mình muốn gì và không ngại theo đuổi. Chủ động trong mọi bước, bạn xem hẹn hò online như một trò chơi thú vị.",
    traits: ["Chủ động", "Tự tin", "Sáng tạo", "Năng động"],
    strengths: ["Nhiều cơ hội", "Không bỏ lỡ", "Có trải nghiệm"],
    weaknesses: ["Có thể quá vội", "Đôi khi mệt mỏi"],
    tips: ["Chậm lại một chút", "Chú trọng chất lượng hơn"],
  },
  D: {
    type: "D",
    title: "Người tận hưởng",
    emoji: "🎉",
    description: "Bạn xem hẹn hò online như một cách giải trí và mở rộng mối quan hệ. Không đặt nặng kết quả, bạn tận hưởng từng cuộc trò chuyện.",
    traits: ["Thoải mái", "Vui vẻ", "Cởi mở", "Không áp lực"],
    strengths: ["Không stress", "Có nhiều trải nghiệm", "Học được nhiều"],
    weaknesses: ["Có thể thiếu nghiêm túc", "Khó tìm người phù hợp"],
    tips: ["Xác định rõ mục tiêu", "Nghiêm túc hơn khi cần"],
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
