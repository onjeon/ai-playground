// Xử lý áp lực gia đình
// Khám phá cách bạn đối mặt với áp lực từ gia đình

export const questions = [
  {
    id: 1,
    question: "Khi bị hỏi 'Bao giờ lấy chồng/vợ?', bạn sẽ?",
    options: [
      { text: "Trả lời thẳng thắn quan điểm của mình", type: "A" },
      { text: "Cười và chuyển chủ đề", type: "B" },
      { text: "Nói cho qua để yên lặng", type: "C" },
      { text: "Giải thích dài dòng tình hình của mình", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Gia đình hay so sánh bạn với anh chị em hoặc họ hàng, bạn cảm thấy?",
    options: [
      { text: "Khó chịu và phản đối", type: "A" },
      { text: "Buồn nhưng im lặng", type: "B" },
      { text: "Cố gắng chứng minh bản thân", type: "C" },
      { text: "Không quan tâm, mình là mình", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi bố mẹ không đồng ý với quyết định của bạn, bạn sẽ?",
    options: [
      { text: "Thuyết phục họ bằng lý lẽ", type: "A" },
      { text: "Làm theo ý họ để giữ hòa khí", type: "B" },
      { text: "Vẫn làm theo ý mình", type: "C" },
      { text: "Tìm cách thỏa hiệp", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Áp lực về tiền bạc từ gia đình, bạn xử lý thế nào?",
    options: [
      { text: "Nói rõ khả năng tài chính của mình", type: "A" },
      { text: "Cố gắng đáp ứng dù khó khăn", type: "B" },
      { text: "Từ chối những yêu cầu quá sức", type: "C" },
      { text: "Tìm cách giúp trong khả năng", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi bị chỉ trích về công việc, bạn sẽ?",
    options: [
      { text: "Giải thích và bảo vệ lựa chọn của mình", type: "A" },
      { text: "Im lặng và chịu đựng", type: "B" },
      { text: "Không quan tâm ý kiến họ", type: "C" },
      { text: "Lắng nghe nhưng vẫn giữ quan điểm", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Họp mặt gia đình, bạn cảm thấy thế nào?",
    options: [
      { text: "Vui vẻ, thích gặp mọi người", type: "A" },
      { text: "Lo lắng bị hỏi han", type: "B" },
      { text: "Tránh né nếu có thể", type: "C" },
      { text: "Tham gia nhưng có giới hạn", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Khi gia đình can thiệp vào chuyện cá nhân, bạn sẽ?",
    options: [
      { text: "Nói rõ ranh giới của mình", type: "A" },
      { text: "Nghe nhưng tự quyết định", type: "B" },
      { text: "Tránh chia sẻ chuyện cá nhân", type: "C" },
      { text: "Tiếp thu ý kiến nếu hợp lý", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Áp lực sinh con từ gia đình, bạn xử lý thế nào?",
    options: [
      { text: "Nói rõ kế hoạch của mình", type: "A" },
      { text: "Vâng dạ cho qua", type: "B" },
      { text: "Không quan tâm ý kiến", type: "C" },
      { text: "Giải thích nhẹ nhàng rồi đổi chủ đề", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi cảm thấy quá áp lực, bạn sẽ?",
    options: [
      { text: "Nói chuyện thẳng thắn với gia đình", type: "A" },
      { text: "Tâm sự với bạn bè", type: "B" },
      { text: "Tự xử lý một mình", type: "C" },
      { text: "Tìm chuyên gia tư vấn", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn có giữ liên lạc thường xuyên với gia đình không?",
    options: [
      { text: "Có, rất thường xuyên", type: "A" },
      { text: "Có, nhưng vừa phải", type: "B" },
      { text: "Ít, khi nào cần thì liên lạc", type: "C" },
      { text: "Tùy giai đoạn, có lúc nhiều lúc ít", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn nghĩ gia đình có quyền can thiệp cuộc sống của bạn không?",
    options: [
      { text: "Có, vì họ yêu thương mình", type: "A" },
      { text: "Có giới hạn nhất định", type: "B" },
      { text: "Không, đó là cuộc sống của mình", type: "C" },
      { text: "Tùy vấn đề, có thứ nên có thứ không", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Điều gì giúp bạn vượt qua áp lực gia đình?",
    options: [
      { text: "Giao tiếp cởi mở với gia đình", type: "A" },
      { text: "Tập trung vào bản thân, không quan tâm", type: "B" },
      { text: "Giữ khoảng cách khi cần", type: "C" },
      { text: "Tìm điểm cân bằng cho cả hai bên", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người đối đầu",
    emoji: "💪",
    description: "Bạn đối mặt với áp lực gia đình bằng sự thẳng thắn và giao tiếp trực tiếp. Bạn không ngại nói ra quan điểm của mình và bảo vệ lựa chọn cá nhân.",
    traits: ["Thẳng thắn", "Tự tin", "Giao tiếp tốt", "Chủ động"],
    strengths: ["Được hiểu đúng", "Không chịu oan", "Thiết lập ranh giới rõ ràng"],
    weaknesses: ["Có thể gây xung đột", "Đôi khi quá gay gắt"],
    tips: ["Thêm sự mềm mỏng khi cần", "Lắng nghe gia đình nhiều hơn"],
  },
  B: {
    type: "B",
    title: "Người chịu đựng",
    emoji: "😔",
    description: "Bạn thường im lặng và chịu đựng áp lực từ gia đình để giữ hòa khí. Bạn đặt gia đình lên trên và đôi khi quên đi cảm xúc của bản thân.",
    traits: ["Nhẫn nhịn", "Hòa đồng", "Hy sinh", "Kiên nhẫn"],
    strengths: ["Giữ được hòa khí", "Gia đình yên ổn", "Được yêu thương"],
    weaknesses: ["Bị stress ngầm", "Không được hiểu đúng"],
    tips: ["Học cách nói không", "Bày tỏ cảm xúc của mình"],
  },
  C: {
    type: "C",
    title: "Người độc lập",
    emoji: "🦅",
    description: "Bạn giữ khoảng cách và không để áp lực gia đình ảnh hưởng đến cuộc sống. Bạn tự tin với lựa chọn của mình và không cần sự chấp thuận của gia đình.",
    traits: ["Độc lập", "Tự tin", "Không quan tâm", "Tự do"],
    strengths: ["Không bị stress", "Sống theo cách mình muốn", "Tự lập"],
    weaknesses: ["Có thể xa cách gia đình", "Bị cho là không quan tâm"],
    tips: ["Duy trì kết nối gia đình", "Đôi khi cần lắng nghe ý kiến"],
  },
  D: {
    type: "D",
    title: "Người cân bằng",
    emoji: "⚖️",
    description: "Bạn tìm cách cân bằng giữa áp lực gia đình và nhu cầu cá nhân. Bạn biết khi nào nên lắng nghe, khi nào nên đặt ranh giới.",
    traits: ["Cân bằng", "Linh hoạt", "Thông minh", "Diplomacy"],
    strengths: ["Hòa hợp với gia đình", "Vẫn giữ được bản thân", "Ít stress"],
    weaknesses: ["Đôi khi mệt khi phải cân nhắc", "Không làm vừa lòng tất cả"],
    tips: ["Tiếp tục duy trì", "Đừng quá khắt khe với bản thân"],
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
