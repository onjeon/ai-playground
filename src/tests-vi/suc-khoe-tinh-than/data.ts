// Sức khỏe tinh thần
// Bài test đánh giá tình trạng sức khỏe tinh thần của bạn

export const questions = [
  {
    id: 1,
    question: "Gần đây bạn cảm thấy vui vẻ như thế nào?",
    options: [
      { text: "Rất vui vẻ và lạc quan", type: "A" },
      { text: "Khá vui, có những ngày tốt", type: "B" },
      { text: "Bình thường, không vui không buồn", type: "C" },
      { text: "Ít khi cảm thấy vui", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn có hay lo lắng không?",
    options: [
      { text: "Hiếm khi lo lắng", type: "A" },
      { text: "Đôi khi, nhưng kiểm soát được", type: "B" },
      { text: "Khá thường xuyên", type: "C" },
      { text: "Gần như lúc nào cũng lo", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Giấc ngủ của bạn bị ảnh hưởng bởi tâm trạng không?",
    options: [
      { text: "Không, ngủ ngon đều đặn", type: "A" },
      { text: "Đôi khi khó ngủ khi stress", type: "B" },
      { text: "Thường xuyên mất ngủ vì suy nghĩ", type: "C" },
      { text: "Luôn khó ngủ hoặc ngủ quá nhiều", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn có dễ bị cáu gắt không?",
    options: [
      { text: "Hiếm khi, tôi khá bình tĩnh", type: "A" },
      { text: "Đôi khi, khi có áp lực", type: "B" },
      { text: "Khá dễ cáu gắt gần đây", type: "C" },
      { text: "Rất dễ nổi nóng", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn có cảm thấy kiệt sức về mặt tinh thần không?",
    options: [
      { text: "Không, tôi cảm thấy ổn", type: "A" },
      { text: "Đôi khi, sau công việc căng thẳng", type: "B" },
      { text: "Thường xuyên cảm thấy mệt mỏi", type: "C" },
      { text: "Luôn cảm thấy kiệt sức", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn có còn hứng thú với những thứ từng yêu thích không?",
    options: [
      { text: "Có, vẫn rất hứng thú", type: "A" },
      { text: "Phần lớn thời gian", type: "B" },
      { text: "Ít hứng thú hơn trước", type: "C" },
      { text: "Không còn quan tâm nữa", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn có khó tập trung gần đây không?",
    options: [
      { text: "Không, tập trung tốt", type: "A" },
      { text: "Đôi khi bị phân tâm", type: "B" },
      { text: "Thường xuyên khó tập trung", type: "C" },
      { text: "Rất khó tập trung làm gì", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn có hay cảm thấy cô đơn không?",
    options: [
      { text: "Hiếm khi, tôi có nhiều mối quan hệ tốt", type: "A" },
      { text: "Đôi khi, nhưng không thường xuyên", type: "B" },
      { text: "Khá thường xuyên", type: "C" },
      { text: "Luôn cảm thấy cô đơn", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn đánh giá sự tự tin của mình như thế nào?",
    options: [
      { text: "Rất tự tin về bản thân", type: "A" },
      { text: "Khá tự tin", type: "B" },
      { text: "Thiếu tự tin", type: "C" },
      { text: "Rất thiếu tự tin", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn có nghĩ về tương lai như thế nào?",
    options: [
      { text: "Lạc quan và có nhiều hy vọng", type: "A" },
      { text: "Khá lạc quan", type: "B" },
      { text: "Lo lắng về tương lai", type: "C" },
      { text: "Bi quan và không có hy vọng", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn có ai để chia sẻ khi buồn không?",
    options: [
      { text: "Có, nhiều người tôi tin tưởng", type: "A" },
      { text: "Có vài người thân", type: "B" },
      { text: "Ít người để chia sẻ", type: "C" },
      { text: "Không có ai", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Nhìn chung, bạn đánh giá sức khỏe tinh thần của mình thế nào?",
    options: [
      { text: "Rất tốt", type: "A" },
      { text: "Khá tốt", type: "B" },
      { text: "Cần được cải thiện", type: "C" },
      { text: "Đang gặp khó khăn", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Sức Khỏe Tinh Thần Tốt",
    emoji: "🌟",
    description: "Bạn có sức khỏe tinh thần rất tốt. Bạn lạc quan, vui vẻ và có khả năng đối phó tốt với stress trong cuộc sống.",
    traits: ["Lạc quan", "Cân bằng", "Tự tin", "Có hỗ trợ xã hội tốt"],
    strengths: ["Tinh thần ổn định", "Đối phó stress tốt", "Có nhiều mối quan hệ"],
    weaknesses: ["Có thể không nhận ra khi cần nghỉ ngơi"],
    tips: ["Tiếp tục duy trì thói quen tốt", "Hỗ trợ người khác khi có thể"],
  },
  B: {
    type: "B",
    title: "Sức Khỏe Tinh Thần Khá Ổn",
    emoji: "😊",
    description: "Sức khỏe tinh thần của bạn khá ổn, có những lúc stress nhưng bạn có thể kiểm soát được. Một vài điều chỉnh nhỏ sẽ giúp bạn tốt hơn.",
    traits: ["Ổn định", "Có lúc stress", "Có hỗ trợ", "Thực tế"],
    strengths: ["Nhận thức tốt về bản thân", "Có khả năng phục hồi"],
    weaknesses: ["Đôi khi bị stress chi phối", "Cần chú ý hơn đến bản thân"],
    tips: ["Tập thiền định hoặc yoga", "Dành thời gian cho bản thân"],
  },
  C: {
    type: "C",
    title: "Sức Khỏe Tinh Thần Cần Chú Ý",
    emoji: "😔",
    description: "Sức khỏe tinh thần của bạn đang cần được chú ý. Bạn có thể đang trải qua giai đoạn khó khăn và cần tìm cách hỗ trợ bản thân.",
    traits: ["Đang stress", "Lo lắng", "Thiếu năng lượng", "Cần hỗ trợ"],
    strengths: ["Nhận ra vấn đề", "Có thể thay đổi"],
    weaknesses: ["Ảnh hưởng đến cuộc sống hàng ngày", "Cần được hỗ trợ"],
    tips: ["Chia sẻ với người thân tin cậy", "Cân nhắc tìm kiếm sự hỗ trợ chuyên môn"],
  },
  D: {
    type: "D",
    title: "Cần Được Hỗ Trợ",
    emoji: "💔",
    description: "Bạn đang gặp khó khăn về sức khỏe tinh thần và cần được hỗ trợ. Đừng ngại tìm kiếm sự giúp đỡ từ người thân hoặc chuyên gia.",
    traits: ["Đang khó khăn", "Cần hỗ trợ", "Thiếu năng lượng", "Cô đơn"],
    strengths: ["Đã nhận ra vấn đề qua bài test này"],
    weaknesses: ["Ảnh hưởng nghiêm trọng đến cuộc sống"],
    tips: ["Hãy nói chuyện với ai đó bạn tin tưởng", "Cân nhắc gặp chuyên gia tâm lý"],
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
