// Khả năng chịu đựng
// Bài test đánh giá khả năng chịu đựng áp lực và khó khăn trong cuộc sống

export const questions = [
  {
    id: 1,
    question: "Khi gặp áp lực công việc lớn, bạn thường xử lý thế nào?",
    options: [
      { text: "Bình tĩnh ưu tiên và giải quyết từng việc", type: "A" },
      { text: "Căng thẳng nhưng vẫn cố gắng hoàn thành", type: "B" },
      { text: "Lo lắng và cần sự hỗ trợ", type: "C" },
      { text: "Muốn bỏ cuộc hoặc trốn tránh", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn chịu đựng được bao lâu khi làm việc không có kết quả?",
    options: [
      { text: "Rất lâu, tôi không dễ dàng bỏ cuộc", type: "A" },
      { text: "Khá lâu, nhưng sẽ thay đổi cách làm", type: "B" },
      { text: "Một thời gian rồi sẽ nản", type: "C" },
      { text: "Nhanh chóng muốn từ bỏ", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi bị chỉ trích không công bằng, bạn phản ứng thế nào?",
    options: [
      { text: "Bình tĩnh giải thích hoặc bỏ qua", type: "A" },
      { text: "Hơi khó chịu nhưng không để tâm lâu", type: "B" },
      { text: "Buồn và suy nghĩ nhiều", type: "C" },
      { text: "Rất tức giận hoặc tổn thương sâu sắc", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn xử lý thế nào khi phải làm việc trong môi trường khắc nghiệt?",
    options: [
      { text: "Thích nghi và vẫn làm việc hiệu quả", type: "A" },
      { text: "Chịu đựng được nhưng mong thay đổi", type: "B" },
      { text: "Khó chịu và hiệu suất giảm", type: "C" },
      { text: "Không thể chịu nổi", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi gặp thất bại liên tiếp, bạn cảm thấy thế nào?",
    options: [
      { text: "Xem đó là bài học và tiếp tục cố gắng", type: "A" },
      { text: "Buồn nhưng vẫn tìm cách vượt qua", type: "B" },
      { text: "Nản chí và cần thời gian phục hồi", type: "C" },
      { text: "Muốn từ bỏ hoàn toàn", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn chịu đựng sự cô đơn như thế nào?",
    options: [
      { text: "Tốt, tôi tự chủ được", type: "A" },
      { text: "Khá ổn, nhưng vẫn cần giao tiếp", type: "B" },
      { text: "Khó chịu khi ở một mình lâu", type: "C" },
      { text: "Rất khó chịu đựng sự cô đơn", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Khi bị đau về thể chất, bạn phản ứng thế nào?",
    options: [
      { text: "Chịu đựng tốt và hiếm khi than phiền", type: "A" },
      { text: "Chịu được nhưng sẽ tìm cách giảm đau", type: "B" },
      { text: "Khó chịu và cần được chăm sóc", type: "C" },
      { text: "Rất khó chịu, không thể chịu nổi", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn xử lý thế nào khi phải chờ đợi lâu?",
    options: [
      { text: "Kiên nhẫn và tìm việc khác để làm", type: "A" },
      { text: "Chờ được nhưng hơi sốt ruột", type: "B" },
      { text: "Khá khó chịu khi phải chờ", type: "C" },
      { text: "Rất bực bội và muốn bỏ đi", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi mất đi thứ quan trọng, bạn phục hồi như thế nào?",
    options: [
      { text: "Buồn nhưng nhanh chóng vực dậy", type: "A" },
      { text: "Cần thời gian nhưng sẽ vượt qua", type: "B" },
      { text: "Rất khó khăn để chấp nhận", type: "C" },
      { text: "Suy sụp và khó phục hồi", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn chịu đựng sự thiếu ngủ như thế nào?",
    options: [
      { text: "Tốt, vẫn làm việc được bình thường", type: "A" },
      { text: "Khá ổn nhưng cần nghỉ bù", type: "B" },
      { text: "Ảnh hưởng nhiều đến hiệu suất", type: "C" },
      { text: "Rất khó chịu và không thể tập trung", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Khi bị người khác làm phiền, bạn phản ứng thế nào?",
    options: [
      { text: "Bình tĩnh và kiên nhẫn", type: "A" },
      { text: "Hơi khó chịu nhưng vẫn kiểm soát được", type: "B" },
      { text: "Khá bực bội và muốn phản ứng", type: "C" },
      { text: "Rất tức giận và có thể bùng nổ", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Nhìn chung, bạn đánh giá khả năng chịu đựng của mình như thế nào?",
    options: [
      { text: "Rất cao, tôi có thể vượt qua mọi khó khăn", type: "A" },
      { text: "Khá tốt, tôi kiên cường", type: "B" },
      { text: "Trung bình, cần sự hỗ trợ", type: "C" },
      { text: "Thấp, tôi dễ bị áp lực", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Sức Chịu Đựng Phi Thường",
    emoji: "🏔️",
    description: "Bạn có sức chịu đựng phi thường, có thể vượt qua mọi khó khăn và áp lực trong cuộc sống. Bạn là người kiên cường và mạnh mẽ.",
    traits: ["Kiên cường", "Bền bỉ", "Mạnh mẽ", "Không dễ bỏ cuộc"],
    strengths: ["Vượt qua khó khăn", "Không bị stress dễ dàng", "Đáng tin cậy"],
    weaknesses: ["Đôi khi quá cứng đầu", "Có thể bỏ qua giới hạn của bản thân"],
    tips: ["Biết khi nào cần nghỉ ngơi", "Không phải lúc nào cũng phải chịu đựng"],
  },
  B: {
    type: "B",
    title: "Sức Chịu Đựng Tốt",
    emoji: "🌳",
    description: "Bạn có sức chịu đựng tốt, biết cách đối mặt với khó khăn và vẫn duy trì được sự cân bằng trong cuộc sống.",
    traits: ["Kiên nhẫn", "Cân bằng", "Biết điều", "Bền bỉ"],
    strengths: ["Xử lý áp lực tốt", "Biết khi nào cần nghỉ", "Ổn định"],
    weaknesses: ["Đôi khi cần hỗ trợ", "Có giới hạn nhất định"],
    tips: ["Tiếp tục rèn luyện sức chịu đựng", "Xây dựng hệ thống hỗ trợ"],
  },
  C: {
    type: "C",
    title: "Sức Chịu Đựng Trung Bình",
    emoji: "🌱",
    description: "Bạn có sức chịu đựng ở mức trung bình, cần sự hỗ trợ khi gặp khó khăn lớn nhưng vẫn có thể vượt qua được.",
    traits: ["Cần hỗ trợ", "Nhạy cảm", "Có giới hạn", "Đang phát triển"],
    strengths: ["Biết nhận sự giúp đỡ", "Không ép buộc bản thân quá mức", "Thực tế"],
    weaknesses: ["Dễ bị stress", "Cần thời gian phục hồi lâu"],
    tips: ["Rèn luyện sức chịu đựng từng bước", "Học các kỹ năng quản lý stress"],
  },
  D: {
    type: "D",
    title: "Sức Chịu Đựng Cần Cải Thiện",
    emoji: "🌸",
    description: "Bạn khá nhạy cảm và dễ bị ảnh hưởng bởi áp lực. Việc xây dựng sức chịu đựng sẽ giúp bạn đối mặt tốt hơn với cuộc sống.",
    traits: ["Nhạy cảm", "Dễ tổn thương", "Cần bảo vệ", "Mềm mại"],
    strengths: ["Biết giới hạn của mình", "Cảm nhận sâu sắc", "Có lòng trắc ẩn"],
    weaknesses: ["Dễ bị stress", "Khó đối mặt với khó khăn", "Cần nhiều hỗ trợ"],
    tips: ["Bắt đầu từ những thử thách nhỏ", "Xây dựng hệ thống hỗ trợ vững chắc"],
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
