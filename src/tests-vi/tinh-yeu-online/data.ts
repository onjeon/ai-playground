// Tình yêu online
// Khám phá phong cách yêu xa và tình yêu online của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn nghĩ gì về tình yêu online?",
    options: [
      { text: "Có thể thành thật, tình yêu không giới hạn", type: "A" },
      { text: "Khó lắm, cần gặp trực tiếp mới biết", type: "B" },
      { text: "Thú vị, nhưng cần thận trọng", type: "C" },
      { text: "Không tin lắm, dễ bị lừa", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Nếu yêu xa, bạn sẽ liên lạc như thế nào?",
    options: [
      { text: "Video call mỗi ngày", type: "A" },
      { text: "Nhắn tin thường xuyên là đủ", type: "B" },
      { text: "Kết hợp cả tin nhắn và gọi điện", type: "C" },
      { text: "Khi nào rảnh thì liên lạc", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Điều khó khăn nhất khi yêu xa là gì?",
    options: [
      { text: "Không được ở bên nhau", type: "A" },
      { text: "Khó tin tưởng, lo lắng", type: "B" },
      { text: "Khác múi giờ, khó sắp xếp", type: "C" },
      { text: "Thiếu sự gần gũi thể xác", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn có thể yêu xa bao lâu?",
    options: [
      { text: "Bao lâu cũng được, nếu tình yêu đủ lớn", type: "A" },
      { text: "Tối đa 1 năm", type: "B" },
      { text: "Vài tháng là đã muốn gặp", type: "C" },
      { text: "Không thể yêu xa", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi yêu online, bạn chia sẻ những gì?",
    options: [
      { text: "Mọi thứ, như đang ở bên nhau", type: "A" },
      { text: "Những điều quan trọng thôi", type: "B" },
      { text: "Cuộc sống hàng ngày qua ảnh, video", type: "C" },
      { text: "Ít chia sẻ, chủ yếu hỏi thăm", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn có ghen khi người yêu online giao lưu với người khác không?",
    options: [
      { text: "Không, tin tưởng họ hoàn toàn", type: "A" },
      { text: "Có chút, nhưng kiềm chế", type: "B" },
      { text: "Có, và muốn biết họ đang làm gì", type: "C" },
      { text: "Rất ghen, khó kiểm soát khi xa nhau", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Nếu gặp người online và khác với tưởng tượng, bạn sẽ?",
    options: [
      { text: "Không sao, tính cách quan trọng hơn", type: "A" },
      { text: "Hơi thất vọng nhưng cho cơ hội", type: "B" },
      { text: "Cần thời gian để suy nghĩ lại", type: "C" },
      { text: "Khó tiếp tục nếu khác quá nhiều", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn thường quen online qua đâu?",
    options: [
      { text: "App hẹn hò (Tinder, Bumble...)", type: "A" },
      { text: "Mạng xã hội (Facebook, Instagram)", type: "B" },
      { text: "Game, cộng đồng chung sở thích", type: "C" },
      { text: "Không quen online", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi yêu xa, điều gì giữ tình cảm của bạn?",
    options: [
      { text: "Tình yêu và sự cam kết", type: "A" },
      { text: "Giao tiếp thường xuyên", type: "B" },
      { text: "Có kế hoạch gặp nhau cụ thể", type: "C" },
      { text: "Sự tin tưởng lẫn nhau", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn có chia sẻ mật khẩu với người yêu online không?",
    options: [
      { text: "Có, không có gì phải giấu", type: "A" },
      { text: "Không, đó là riêng tư cá nhân", type: "B" },
      { text: "Tùy mức độ tin tưởng", type: "C" },
      { text: "Chỉ khi họ hỏi", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn nghĩ tình yêu online có kết quả không?",
    options: [
      { text: "Có, nhiều cặp đã thành công", type: "A" },
      { text: "Có thể, nếu cả hai cố gắng", type: "B" },
      { text: "Khó, nhưng không phải không thể", type: "C" },
      { text: "Ít khả năng thành công", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Nếu có cơ hội, bạn sẽ chuyển đến sống gần người yêu online không?",
    options: [
      { text: "Có, sẵn sàng vì tình yêu", type: "A" },
      { text: "Có, nếu có kế hoạch rõ ràng", type: "B" },
      { text: "Cần suy nghĩ kỹ", type: "C" },
      { text: "Không, họ nên đến gần tôi", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người yêu xa lý tưởng",
    emoji: "💑",
    description: "Bạn sinh ra để yêu xa! Bạn tin tưởng vào tình yêu, sẵn sàng hy sinh và kiên nhẫn chờ đợi. Với bạn, khoảng cách chỉ là con số, tình yêu mới là thứ quan trọng nhất.",
    traits: ["Tin tưởng", "Kiên nhẫn", "Lãng mạn", "Cam kết"],
    strengths: ["Giữ được tình yêu dù xa cách", "Giao tiếp tốt", "Không dễ bỏ cuộc"],
    weaknesses: ["Có thể quá mơ mộng", "Đôi khi bỏ qua red flags"],
    tips: ["Vẫn cần thực tế", "Có kế hoạch gặp nhau cụ thể"],
  },
  B: {
    type: "B",
    title: "Người thận trọng",
    emoji: "🤔",
    description: "Bạn có thể yêu online nhưng với sự thận trọng. Bạn biết cách cân bằng giữa niềm tin và sự cẩn thận, không vội vàng nhưng cũng không đóng cửa hoàn toàn.",
    traits: ["Thận trọng", "Thực tế", "Cân bằng", "Thông minh"],
    strengths: ["Không dễ bị lừa", "Có kỳ vọng hợp lý", "Biết bảo vệ bản thân"],
    weaknesses: ["Đôi khi quá nghi ngờ", "Khó mở lòng hoàn toàn"],
    tips: ["Cho tình yêu cơ hội", "Tin tưởng nhiều hơn khi đã có cơ sở"],
  },
  C: {
    type: "C",
    title: "Người cần gần gũi",
    emoji: "🤗",
    description: "Bạn có thể bắt đầu online nhưng cần nhanh chóng gặp trực tiếp. Với bạn, tình yêu cần sự gần gũi thể xác và tinh thần, khó duy trì chỉ qua màn hình.",
    traits: ["Cần gần gũi", "Thực tế", "Nhanh chóng", "Trực tiếp"],
    strengths: ["Không lãng phí thời gian", "Thực tế về mối quan hệ", "Cần sự rõ ràng"],
    weaknesses: ["Khó kiên nhẫn yêu xa", "Có thể bỏ lỡ người tốt vì khoảng cách"],
    tips: ["Thử kiên nhẫn hơn", "Đôi khi tình yêu cần thời gian"],
  },
  D: {
    type: "D",
    title: "Người truyền thống",
    emoji: "🙅",
    description: "Bạn không tin vào tình yêu online. Với bạn, tình yêu cần sự gặp gỡ trực tiếp, hiểu nhau qua thời gian thực. Yêu online quá rủi ro và không thực tế.",
    traits: ["Truyền thống", "Hoài nghi", "Thực tế", "Cẩn thận"],
    strengths: ["Không dễ bị lừa", "Tập trung vào người xung quanh", "An toàn"],
    weaknesses: ["Có thể bỏ lỡ cơ hội", "Đóng cửa với khả năng mới"],
    tips: ["Mở lòng hơn với công nghệ", "Nhiều mối quan hệ online cũng thành công"],
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
