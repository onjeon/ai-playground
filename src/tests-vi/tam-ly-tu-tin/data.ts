// Mức độ tự tin
// Đánh giá mức độ tự tin và cách bạn nhìn nhận bản thân

export const questions = [
  {
    id: 1,
    question: "Khi nhìn vào gương, bạn cảm thấy thế nào?",
    options: [
      { text: "Yêu thích bản thân, tự hào", type: "A" },
      { text: "Ổn, chấp nhận được", type: "B" },
      { text: "Không hài lòng lắm", type: "C" },
      { text: "Ghét, muốn thay đổi nhiều thứ", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Khi phải nói trước đám đông, bạn?",
    options: [
      { text: "Thoải mái, thích thể hiện", type: "A" },
      { text: "Hồi hộp nhưng làm được", type: "B" },
      { text: "Rất căng thẳng, cố tránh", type: "C" },
      { text: "Tê liệt, không thể nói", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn nghĩ gì về khả năng của mình?",
    options: [
      { text: "Tôi có nhiều điểm mạnh", type: "A" },
      { text: "Tôi có điểm mạnh và điểm yếu", type: "B" },
      { text: "Tôi nhiều điểm yếu hơn", type: "C" },
      { text: "Tôi không giỏi gì cả", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi bị từ chối hoặc thất bại, bạn?",
    options: [
      { text: "Xem đó là bài học, tiếp tục cố gắng", type: "A" },
      { text: "Buồn một chút rồi tiếp tục", type: "B" },
      { text: "Buồn lâu, tự trách bản thân", type: "C" },
      { text: "Suy sụp, không muốn thử lại", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn có dám nói lên ý kiến của mình không?",
    options: [
      { text: "Luôn luôn, ý kiến tôi quan trọng", type: "A" },
      { text: "Khi cần thiết và phù hợp", type: "B" },
      { text: "Hiếm khi, sợ bị phản đối", type: "C" },
      { text: "Không bao giờ, ý kiến tôi không quan trọng", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi được khen, bạn phản ứng thế nào?",
    options: [
      { text: "Cảm ơn và đón nhận tự nhiên", type: "A" },
      { text: "Vui nhưng hơi ngại", type: "B" },
      { text: "Không tin, nghĩ họ nói xã giao", type: "C" },
      { text: "Từ chối, tôi không xứng đáng", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn hay so sánh mình với người khác không?",
    options: [
      { text: "Hiếm khi, tôi là duy nhất", type: "A" },
      { text: "Đôi khi, để học hỏi", type: "B" },
      { text: "Thường xuyên, và hay cảm thấy thua kém", type: "C" },
      { text: "Luôn luôn, ai cũng hơn tôi", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Khi gặp người mới, bạn?",
    options: [
      { text: "Tự tin chào hỏi, làm quen", type: "A" },
      { text: "Thân thiện nhưng cần thời gian", type: "B" },
      { text: "Ngại ngùng, chờ họ nói trước", type: "C" },
      { text: "Né tránh, không muốn giao tiếp", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn có dám đặt mục tiêu lớn không?",
    options: [
      { text: "Có, tôi tin mình làm được", type: "A" },
      { text: "Có, nhưng thực tế", type: "B" },
      { text: "Không dám, sợ thất bại", type: "C" },
      { text: "Không, tôi không xứng đáng", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn xử lý lời chê như thế nào?",
    options: [
      { text: "Lắng nghe và cải thiện nếu đúng", type: "A" },
      { text: "Suy nghĩ xem có đúng không", type: "B" },
      { text: "Buồn và nhớ mãi", type: "C" },
      { text: "Tin ngay, họ nói đúng về tôi", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn có thường xin lỗi không cần thiết không?",
    options: [
      { text: "Không, chỉ xin lỗi khi sai", type: "A" },
      { text: "Đôi khi, do thói quen", type: "B" },
      { text: "Thường xuyên, sợ làm phiền", type: "C" },
      { text: "Luôn luôn, mọi thứ là lỗi tôi", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bạn đánh giá sự tự tin của mình thế nào?",
    options: [
      { text: "Cao, tôi yêu bản thân", type: "A" },
      { text: "Trung bình, đang phát triển", type: "B" },
      { text: "Thấp, cần cải thiện nhiều", type: "C" },
      { text: "Rất thấp, không tự tin chút nào", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Tự tin vững vàng",
    emoji: "💪",
    description: "Bạn có mức độ tự tin cao và khỏe mạnh. Bạn yêu thương bản thân, tin vào khả năng của mình và không ngại thể hiện. Đây là nền tảng tuyệt vời cho thành công!",
    traits: ["Tự tin", "Yêu bản thân", "Dám thể hiện", "Kiên cường"],
    strengths: ["Không sợ thất bại", "Thu hút người khác", "Dám mơ lớn"],
    weaknesses: ["Đôi khi có thể quá tự tin", "Cần lắng nghe phản hồi"],
    tips: ["Giữ vững sự khiêm tốn", "Tiếp tục phát triển bản thân"],
  },
  B: {
    type: "B",
    title: "Tự tin lành mạnh",
    emoji: "🌱",
    description: "Bạn có mức độ tự tin lành mạnh và cân bằng. Bạn nhận ra điểm mạnh và điểm yếu của mình, biết cách chấp nhận bản thân nhưng vẫn nỗ lực phát triển.",
    traits: ["Cân bằng", "Thực tế", "Có nhận thức", "Đang phát triển"],
    strengths: ["Biết mình biết người", "Khiêm tốn", "Linh hoạt"],
    weaknesses: ["Có thể tự tin hơn", "Đôi khi nghi ngờ bản thân"],
    tips: ["Tập khen ngợi bản thân mỗi ngày", "Ghi nhận thành tựu của mình"],
  },
  C: {
    type: "C",
    title: "Cần xây dựng tự tin",
    emoji: "🔨",
    description: "Mức độ tự tin của bạn còn thấp và cần được xây dựng. Bạn hay tự so sánh, nghi ngờ bản thân và khó chấp nhận lời khen. Đã đến lúc yêu thương bản thân hơn!",
    traits: ["Tự ti", "Hay so sánh", "Nhạy cảm", "Cần phát triển"],
    strengths: ["Khiêm tốn", "Biết cầu tiến", "Có tiềm năng"],
    weaknesses: ["Hay tự chê bản thân", "Sợ thất bại", "Ngại thể hiện"],
    tips: ["Viết ra điểm mạnh mỗi ngày", "Tìm kiếm sự hỗ trợ", "Thử thách bản thân từ việc nhỏ"],
  },
  D: {
    type: "D",
    title: "Cần được hỗ trợ",
    emoji: "🤗",
    description: "Mức độ tự tin của bạn rất thấp và có thể ảnh hưởng đến cuộc sống. Bạn cần được hỗ trợ để xây dựng lại lòng tự trọng và yêu thương bản thân.",
    traits: ["Tự ti sâu", "Cần hỗ trợ", "Nhạy cảm", "Tiềm năng chưa được khai thác"],
    strengths: ["Có khả năng thay đổi", "Biết nhận ra vấn đề", "Có lòng tốt"],
    weaknesses: ["Không thấy giá trị bản thân", "Khó chấp nhận khen ngợi"],
    tips: ["Tìm kiếm chuyên gia tâm lý", "Bạn xứng đáng được yêu thương", "Mỗi ngày nói với mình: Tôi đủ tốt"],
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
