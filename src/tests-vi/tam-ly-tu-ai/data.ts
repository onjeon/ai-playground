// Mức độ tự ái
// Bài test đánh giá mức độ tự ái và cái tôi của bạn

export const questions = [
  {
    id: 1,
    question: "Khi ai đó chỉ ra lỗi sai của bạn, bạn thường phản ứng thế nào?",
    options: [
      { text: "Rất khó chịu và bảo vệ bản thân ngay lập tức", type: "A" },
      { text: "Hơi khó chịu nhưng vẫn lắng nghe", type: "B" },
      { text: "Bình tĩnh tiếp nhận và suy nghĩ", type: "C" },
      { text: "Cảm ơn họ vì đã góp ý", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thường so sánh bản thân với người khác như thế nào?",
    options: [
      { text: "Luôn cảm thấy mình giỏi hơn hầu hết mọi người", type: "A" },
      { text: "Đôi khi tự hào về những gì mình có", type: "B" },
      { text: "Học hỏi từ người khác mà không so sánh nhiều", type: "C" },
      { text: "Tôn trọng mọi người và không so sánh", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi thất bại trong một việc gì đó, bạn nghĩ gì?",
    options: [
      { text: "Đó không phải lỗi của tôi, do hoàn cảnh", type: "A" },
      { text: "Tôi đã làm tốt rồi, chỉ là không may", type: "B" },
      { text: "Tôi cần rút kinh nghiệm cho lần sau", type: "C" },
      { text: "Ai cũng có lúc thất bại, quan trọng là học được gì", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn phản ứng thế nào khi không được công nhận?",
    options: [
      { text: "Rất tức giận, tôi xứng đáng được công nhận", type: "A" },
      { text: "Thất vọng và muốn chứng minh bản thân", type: "B" },
      { text: "Hơi buồn nhưng tiếp tục cố gắng", type: "C" },
      { text: "Không quan trọng, tôi làm vì đam mê", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi ai đó thành công hơn bạn, bạn cảm thấy thế nào?",
    options: [
      { text: "Khó chịu và muốn tìm điểm yếu của họ", type: "A" },
      { text: "Hơi ghen tị nhưng không thể hiện ra", type: "B" },
      { text: "Chúc mừng họ và tự động viên mình", type: "C" },
      { text: "Vui cho họ và học hỏi từ họ", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn thường nói về bản thân như thế nào?",
    options: [
      { text: "Tôi luôn kể về thành tích của mình", type: "A" },
      { text: "Tôi chia sẻ khi có cơ hội phù hợp", type: "B" },
      { text: "Tôi ít khi khoe về bản thân", type: "C" },
      { text: "Tôi thích lắng nghe hơn nói về mình", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Khi ý kiến của bạn bị bác bỏ, bạn làm gì?",
    options: [
      { text: "Kiên quyết bảo vệ quan điểm của mình", type: "A" },
      { text: "Cố gắng thuyết phục thêm", type: "B" },
      { text: "Xem xét lại quan điểm của mình", type: "C" },
      { text: "Tôn trọng ý kiến khác biệt", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn đối xử với người phục vụ, nhân viên như thế nào?",
    options: [
      { text: "Họ nên phục vụ tôi tốt nhất", type: "A" },
      { text: "Tôi yêu cầu dịch vụ đúng mức", type: "B" },
      { text: "Tôi lịch sự và tôn trọng họ", type: "C" },
      { text: "Tôi luôn cảm ơn và đối xử bình đẳng", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi nhận được lời khen, bạn phản ứng thế nào?",
    options: [
      { text: "Tất nhiên rồi, tôi đáng được khen", type: "A" },
      { text: "Cảm thấy vui và tự hào về mình", type: "B" },
      { text: "Cảm ơn và chia sẻ công lao cho người khác", type: "C" },
      { text: "Khiêm tốn nhận lời khen", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn nghĩ gì về việc xin lỗi?",
    options: [
      { text: "Tôi hiếm khi sai nên ít cần xin lỗi", type: "A" },
      { text: "Tôi chỉ xin lỗi khi thực sự cần thiết", type: "B" },
      { text: "Tôi sẵn sàng xin lỗi khi mình sai", type: "C" },
      { text: "Xin lỗi là biểu hiện của sự trưởng thành", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Khi có người hỏi ý kiến về một việc bạn không giỏi, bạn làm gì?",
    options: [
      { text: "Vẫn đưa ra ý kiến như mình biết rõ", type: "A" },
      { text: "Cố gắng trả lời dựa trên hiểu biết hạn chế", type: "B" },
      { text: "Thừa nhận tôi không rành lĩnh vực này", type: "C" },
      { text: "Giới thiệu họ đến người có chuyên môn", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bạn đánh giá sự quan trọng của bản thân như thế nào?",
    options: [
      { text: "Tôi là người không thể thiếu", type: "A" },
      { text: "Tôi có những đóng góp quan trọng", type: "B" },
      { text: "Tôi góp phần cùng mọi người", type: "C" },
      { text: "Mỗi người đều có giá trị như nhau", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Cái Tôi Cao",
    emoji: "👑",
    description: "Bạn có mức độ tự ái khá cao, luôn đặt bản thân ở vị trí trung tâm và khó chấp nhận khi bị chỉ trích. Điều này có thể ảnh hưởng đến các mối quan hệ xung quanh.",
    traits: ["Tự tin cao", "Khó tiếp nhận góp ý", "Hay so sánh", "Bảo vệ cái tôi"],
    strengths: ["Quyết đoán", "Có sự tự tin", "Không dễ bị lung lay"],
    weaknesses: ["Khó hòa đồng", "Dễ mất lòng người khác"],
    tips: ["Tập lắng nghe nhiều hơn", "Học cách đặt mình vào vị trí người khác"],
  },
  B: {
    type: "B",
    title: "Tự Tin Vừa Phải",
    emoji: "😊",
    description: "Bạn có sự tự tin lành mạnh, biết trân trọng bản thân nhưng đôi khi vẫn bị ảnh hưởng bởi cái tôi. Bạn đang trên con đường cân bằng tốt.",
    traits: ["Tự tin", "Có cái tôi", "Biết tiếp thu", "Cần được công nhận"],
    strengths: ["Tự tin nhưng không kiêu ngạo", "Biết lắng nghe", "Có khả năng thích nghi"],
    weaknesses: ["Đôi khi quá bảo vệ bản thân", "Hơi nhạy cảm với chỉ trích"],
    tips: ["Tiếp tục phát triển sự khiêm tốn", "Học cách nhận góp ý tích cực"],
  },
  C: {
    type: "C",
    title: "Khiêm Tốn",
    emoji: "🌱",
    description: "Bạn là người khiêm tốn, biết đánh giá đúng bản thân và luôn sẵn sàng học hỏi từ người khác. Đây là phẩm chất đáng quý trong cuộc sống.",
    traits: ["Khiêm tốn", "Cầu tiến", "Tôn trọng người khác", "Biết lắng nghe"],
    strengths: ["Dễ hòa đồng", "Học hỏi nhanh", "Được mọi người yêu quý"],
    weaknesses: ["Đôi khi thiếu tự tin", "Dễ bỏ qua thành tích của mình"],
    tips: ["Tự tin hơn vào khả năng của mình", "Học cách nhận lời khen"],
  },
  D: {
    type: "D",
    title: "Tâm Hồn Bình An",
    emoji: "🕊️",
    description: "Bạn có tâm hồn bình an, không bị chi phối bởi cái tôi. Bạn sống hài hòa với mọi người và luôn tôn trọng sự khác biệt của từng người.",
    traits: ["Bình tĩnh", "Không chấp niệm", "Tôn trọng mọi người", "Sống hài hòa"],
    strengths: ["Tạo không khí thoải mái", "Dễ kết bạn", "Tinh thần ổn định"],
    weaknesses: ["Có thể bị xem nhẹ", "Đôi khi quá nhường nhịn"],
    tips: ["Giữ vững sự cân bằng này", "Đôi khi cần thể hiện quan điểm rõ ràng"],
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
