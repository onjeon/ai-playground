// Con Giáp Tính Cách
// Khám phá tính cách của bạn theo 12 con giáp Việt Nam

export const questions = [
  {
    id: 1,
    question: "Khi đặt mục tiêu, bạn thường?",
    options: [
      { text: "Đặt mục tiêu cao, quyết tâm chinh phục", type: "A" },
      { text: "Đặt mục tiêu thực tế, từng bước vững chắc", type: "B" },
      { text: "Mục tiêu linh hoạt, dễ thay đổi theo hoàn cảnh", type: "C" },
      { text: "Theo cảm hứng, không quá cứng nhắc", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Trong gia đình, bạn là người?",
    options: [
      { text: "Trụ cột, người đưa ra quyết định", type: "A" },
      { text: "Chăm lo, lo liệu mọi việc", type: "B" },
      { text: "Người kết nối, gắn kết các thành viên", type: "C" },
      { text: "Người mang lại tiếng cười, niềm vui", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi có tiền, bạn thường?",
    options: [
      { text: "Đầu tư để sinh lời thêm", type: "A" },
      { text: "Tiết kiệm phòng thân", type: "B" },
      { text: "Chi tiêu hợp lý, cân đối", type: "C" },
      { text: "Hưởng thụ cuộc sống trước đã", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn đối xử với bạn bè như thế nào?",
    options: [
      { text: "Ít bạn nhưng rất thân, trung thành", type: "A" },
      { text: "Chu đáo, hay giúp đỡ bạn bè", type: "B" },
      { text: "Nhiều bạn, giao thiệp rộng", type: "C" },
      { text: "Vui vẻ với ai cũng được", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi gặp khó khăn, bạn?",
    options: [
      { text: "Tự mình giải quyết, không nhờ ai", type: "A" },
      { text: "Kiên nhẫn tìm cách vượt qua", type: "B" },
      { text: "Tìm kiếm sự hỗ trợ từ người thân", type: "C" },
      { text: "Lạc quan, tin mọi chuyện sẽ ổn", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Điều gì khiến bạn tức giận nhất?",
    options: [
      { text: "Bị xem thường, không tôn trọng", type: "A" },
      { text: "Sự bất công, gian dối", type: "B" },
      { text: "Bị phản bội, nói xấu sau lưng", type: "C" },
      { text: "Bị ép buộc làm điều không muốn", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn thích hoạt động nào nhất?",
    options: [
      { text: "Thể thao, hoạt động thể chất", type: "A" },
      { text: "Làm vườn, nấu ăn, thủ công", type: "B" },
      { text: "Giao lưu, gặp gỡ bạn bè", type: "C" },
      { text: "Đọc sách, xem phim, nghệ thuật", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Trong công việc, bạn là người?",
    options: [
      { text: "Lãnh đạo, dám nghĩ dám làm", type: "A" },
      { text: "Cần cù, chăm chỉ, đáng tin cậy", type: "B" },
      { text: "Linh hoạt, thích nghi nhanh", type: "C" },
      { text: "Sáng tạo, có nhiều ý tưởng mới", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi yêu, bạn là người?",
    options: [
      { text: "Mạnh mẽ, bảo vệ người yêu", type: "A" },
      { text: "Chung thủy, chu đáo", type: "B" },
      { text: "Lãng mạn, quan tâm", type: "C" },
      { text: "Tự do, không ràng buộc quá", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Điều bạn coi trọng nhất trong cuộc sống?",
    options: [
      { text: "Danh dự và sự nghiệp", type: "A" },
      { text: "Gia đình và sự ổn định", type: "B" },
      { text: "Tình bạn và các mối quan hệ", type: "C" },
      { text: "Tự do và trải nghiệm", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn xử lý stress như thế nào?",
    options: [
      { text: "Tập trung giải quyết vấn đề", type: "A" },
      { text: "Làm việc chăm chỉ hơn", type: "B" },
      { text: "Tâm sự với người thân", type: "C" },
      { text: "Tìm niềm vui, giải trí", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Mô tả ngắn gọn về bản thân?",
    options: [
      { text: "Mạnh mẽ và quyết đoán", type: "A" },
      { text: "Hiền lành và đáng tin", type: "B" },
      { text: "Thông minh và linh hoạt", type: "C" },
      { text: "Vui vẻ và lạc quan", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Nhóm Dũng Mãnh - Hổ, Rồng, Ngọ",
    emoji: "🐯",
    description: "Bạn mang tính cách của những con giáp dũng mãnh nhất! Như Hổ đầy uy lực, Rồng cao quý và Ngọ kiên cường. Bạn là người có khí chất lãnh đạo, tự tin và không ngại đối mặt với thử thách.",
    traits: ["Dũng cảm", "Quyết đoán", "Khí chất lãnh đạo", "Tự tin"],
    strengths: ["Khả năng lãnh đạo", "Quyết tâm cao", "Bảo vệ người thân"],
    weaknesses: ["Nóng tính", "Đôi khi độc đoán"],
    tips: ["Lắng nghe ý kiến người khác", "Kiềm chế cảm xúc"],
  },
  B: {
    type: "B",
    title: "Nhóm Cần Cù - Trâu, Dê, Heo",
    emoji: "🐃",
    description: "Bạn mang tính cách của những con giáp cần cù nhất! Như Trâu chăm chỉ, Dê hiền hòa và Heo phúc hậu. Bạn là người đáng tin cậy, kiên nhẫn và luôn hoàn thành công việc một cách tốt nhất.",
    traits: ["Cần cù", "Kiên nhẫn", "Đáng tin cậy", "Hiền lành"],
    strengths: ["Làm việc chăm chỉ", "Trung thành", "Chăm sóc gia đình"],
    weaknesses: ["Bảo thủ", "Chậm thích nghi"],
    tips: ["Mở lòng với thay đổi", "Tự tin hơn vào bản thân"],
  },
  C: {
    type: "C",
    title: "Nhóm Linh Hoạt - Khỉ, Chuột, Rắn",
    emoji: "🐒",
    description: "Bạn mang tính cách của những con giáp thông minh nhất! Như Khỉ lanh lợi, Chuột nhanh nhẹn và Rắn sắc sảo. Bạn là người thông minh, linh hoạt và có khả năng thích nghi tuyệt vời.",
    traits: ["Thông minh", "Linh hoạt", "Nhanh nhẹn", "Xã giao tốt"],
    strengths: ["Khả năng thích nghi", "Giải quyết vấn đề nhanh", "Giao tiếp tốt"],
    weaknesses: ["Hay thay đổi", "Đôi khi mưu mô"],
    tips: ["Kiên định với mục tiêu", "Chân thành hơn trong quan hệ"],
  },
  D: {
    type: "D",
    title: "Nhóm Lạc Quan - Gà, Mèo, Chó",
    emoji: "🐕",
    description: "Bạn mang tính cách của những con giáp đáng yêu nhất! Như Gà siêng năng, Mèo thanh lịch và Chó trung thành. Bạn là người vui vẻ, yêu tự do và mang lại năng lượng tích cực cho mọi người.",
    traits: ["Lạc quan", "Trung thành", "Yêu tự do", "Đáng yêu"],
    strengths: ["Mang lại niềm vui", "Trung thành với bạn bè", "Sáng tạo"],
    weaknesses: ["Thiếu kỷ luật", "Hay lo lắng"],
    tips: ["Kỷ luật hơn với bản thân", "Đặt mục tiêu cụ thể"],
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
