// Vai trò trong gia đình
// Khám phá vai trò của bạn trong gia đình

export const questions = [
  {
    id: 1,
    question: "Khi gia đình có việc quan trọng, bạn thường?",
    options: [
      { text: "Đứng ra tổ chức và điều phối", type: "A" },
      { text: "Hỗ trợ người khác thực hiện", type: "B" },
      { text: "Mang lại không khí vui vẻ", type: "C" },
      { text: "Lắng nghe và đưa ra ý kiến khi cần", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Khi có mâu thuẫn trong gia đình, bạn sẽ?",
    options: [
      { text: "Đứng ra hòa giải, giải quyết", type: "A" },
      { text: "An ủi và chăm sóc người buồn", type: "B" },
      { text: "Làm dịu không khí bằng tiếng cười", type: "C" },
      { text: "Giữ im lặng, chờ mọi thứ qua", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Trong bữa cơm gia đình, bạn thường?",
    options: [
      { text: "Là người nói chuyện nhiều nhất", type: "A" },
      { text: "Chăm lo cho mọi người ăn uống", type: "B" },
      { text: "Kể chuyện vui, làm mọi người cười", type: "C" },
      { text: "Ăn yên lặng, lắng nghe người khác", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi bố mẹ cần giúp đỡ, bạn sẽ?",
    options: [
      { text: "Chủ động nhận việc và giải quyết", type: "A" },
      { text: "Sẵn sàng giúp đỡ mọi thứ", type: "B" },
      { text: "Giúp khi được nhờ", type: "C" },
      { text: "Đóng góp theo khả năng", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Ngày lễ, Tết, bạn thường làm gì?",
    options: [
      { text: "Lên kế hoạch, tổ chức hoạt động", type: "A" },
      { text: "Nấu nướng, chuẩn bị đồ ăn", type: "B" },
      { text: "Mang lại không khí vui vẻ", type: "C" },
      { text: "Tham gia và tận hưởng", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn thường được gia đình nhờ làm gì?",
    options: [
      { text: "Quyết định những việc quan trọng", type: "A" },
      { text: "Chăm sóc người thân", type: "B" },
      { text: "Giải trí, làm vui lòng mọi người", type: "C" },
      { text: "Góp ý kiến khi cần", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Khi anh chị em có vấn đề, bạn sẽ?",
    options: [
      { text: "Cho lời khuyên và hướng dẫn", type: "A" },
      { text: "Lắng nghe và an ủi", type: "B" },
      { text: "Làm họ vui lên", type: "C" },
      { text: "Để họ tự giải quyết, hỗ trợ khi cần", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Tài chính gia đình, bạn nghĩ thế nào?",
    options: [
      { text: "Nên được quản lý chặt chẽ", type: "A" },
      { text: "Mỗi người đóng góp theo khả năng", type: "B" },
      { text: "Không quan trọng lắm, miễn đủ sống", type: "C" },
      { text: "Mỗi người tự lo tài chính riêng", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn có hay về thăm gia đình không?",
    options: [
      { text: "Thường xuyên, theo lịch cố định", type: "A" },
      { text: "Hay về, mỗi khi có thể", type: "B" },
      { text: "Về dịp lễ, Tết", type: "C" },
      { text: "Ít về, nhưng vẫn liên lạc", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Khi gia đình có tin vui/buồn, bạn sẽ?",
    options: [
      { text: "Là người đầu tiên biết và thông báo", type: "A" },
      { text: "Chia sẻ cảm xúc cùng mọi người", type: "B" },
      { text: "Tổ chức ăn mừng hoặc an ủi", type: "C" },
      { text: "Lặng lẽ ở bên khi cần", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn muốn được nhớ đến trong gia đình vì?",
    options: [
      { text: "Người gánh vác và lo liệu", type: "A" },
      { text: "Người chăm sóc và yêu thương", type: "B" },
      { text: "Người mang lại niềm vui", type: "C" },
      { text: "Người đáng tin cậy khi cần", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Tương lai, bạn muốn gia đình như thế nào?",
    options: [
      { text: "Gắn kết, thường xuyên họp mặt", type: "A" },
      { text: "Yêu thương và chăm sóc nhau", type: "B" },
      { text: "Vui vẻ, hạnh phúc", type: "C" },
      { text: "Tự do nhưng vẫn gần gũi", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Trụ cột gia đình",
    emoji: "🏛️",
    description: "Bạn là trụ cột của gia đình! Bạn thường đứng ra lo liệu, quyết định và gánh vác những việc quan trọng. Gia đình tin tưởng và dựa vào bạn trong mọi tình huống.",
    traits: ["Trách nhiệm", "Lãnh đạo", "Đáng tin cậy", "Lo liệu"],
    strengths: ["Được tin tưởng", "Giải quyết vấn đề tốt", "Gắn kết gia đình"],
    weaknesses: ["Có thể quá áp lực", "Gánh vác quá nhiều"],
    tips: ["Chia sẻ trách nhiệm với người khác", "Đừng ôm đồm mọi thứ"],
  },
  B: {
    type: "B",
    title: "Người chăm sóc",
    emoji: "💝",
    description: "Bạn là người chăm sóc trong gia đình! Bạn luôn quan tâm, chăm lo cho mọi người từ bữa ăn đến sức khỏe. Tình yêu thương của bạn là điều quý giá nhất.",
    traits: ["Chăm sóc", "Yêu thương", "Quan tâm", "Ấm áp"],
    strengths: ["Mang lại sự ấm áp", "Được yêu thương", "Gắn kết gia đình"],
    weaknesses: ["Có thể quên bản thân", "Cho đi quá nhiều"],
    tips: ["Chăm sóc bản thân", "Đừng quên nhu cầu của mình"],
  },
  C: {
    type: "C",
    title: "Tia nắng của gia đình",
    emoji: "☀️",
    description: "Bạn là tia nắng của gia đình! Bạn mang lại tiếng cười, niềm vui và năng lượng tích cực. Mỗi khi có bạn, gia đình luôn vui vẻ và hạnh phúc.",
    traits: ["Vui vẻ", "Năng động", "Tích cực", "Hài hước"],
    strengths: ["Mang lại tiếng cười", "Xóa tan căng thẳng", "Gắn kết mọi người"],
    weaknesses: ["Có thể che giấu nỗi buồn", "Đôi khi thiếu nghiêm túc"],
    tips: ["Cho phép bản thân buồn", "Đôi khi nghiêm túc cũng cần thiết"],
  },
  D: {
    type: "D",
    title: "Người thầm lặng",
    emoji: "🌙",
    description: "Bạn là người thầm lặng trong gia đình! Bạn không ồn ào nhưng luôn ở đó khi cần. Sự hiện diện của bạn mang lại cảm giác an tâm và bình yên.",
    traits: ["Thầm lặng", "Đáng tin cậy", "Bình yên", "Sâu sắc"],
    strengths: ["Luôn ở đó khi cần", "Không gây áp lực", "Đáng tin cậy"],
    weaknesses: ["Có thể bị bỏ qua", "Ít thể hiện cảm xúc"],
    tips: ["Thể hiện tình cảm nhiều hơn", "Cho gia đình biết bạn quan tâm"],
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
