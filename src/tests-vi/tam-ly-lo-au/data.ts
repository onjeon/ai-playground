// Mức độ lo âu
// Bài test đánh giá mức độ lo âu và căng thẳng trong cuộc sống của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn có thường xuyên lo lắng về những điều chưa xảy ra không?",
    options: [
      { text: "Rất thường xuyên, tôi lo gần như mọi lúc", type: "A" },
      { text: "Khá thường xuyên, đặc biệt khi có áp lực", type: "B" },
      { text: "Đôi khi, với những việc quan trọng", type: "C" },
      { text: "Hiếm khi, tôi sống theo dòng chảy", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Giấc ngủ của bạn bị ảnh hưởng bởi lo âu như thế nào?",
    options: [
      { text: "Thường xuyên mất ngủ vì lo lắng", type: "A" },
      { text: "Đôi khi khó ngủ khi có chuyện lo", type: "B" },
      { text: "Hiếm khi ảnh hưởng đến giấc ngủ", type: "C" },
      { text: "Ngủ ngon dù có chuyện gì xảy ra", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi có việc quan trọng sắp tới, bạn cảm thấy thế nào?",
    options: [
      { text: "Rất căng thẳng, khó tập trung làm gì khác", type: "A" },
      { text: "Hồi hộp và lo lắng nhưng vẫn kiểm soát được", type: "B" },
      { text: "Hơi lo nhưng chuẩn bị kỹ để yên tâm", type: "C" },
      { text: "Bình tĩnh, việc gì đến sẽ đến", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn có hay nghĩ đến những tình huống xấu nhất không?",
    options: [
      { text: "Luôn luôn, tôi hay tưởng tượng điều tệ nhất", type: "A" },
      { text: "Khá thường xuyên", type: "B" },
      { text: "Đôi khi, để chuẩn bị tinh thần", type: "C" },
      { text: "Hiếm khi, tôi lạc quan hơn", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Cơ thể bạn phản ứng thế nào khi lo âu?",
    options: [
      { text: "Tim đập nhanh, đổ mồ hôi, tay run", type: "A" },
      { text: "Cảm thấy khó chịu, bồn chồn", type: "B" },
      { text: "Hơi căng thẳng nhưng không nghiêm trọng", type: "C" },
      { text: "Không có triệu chứng gì đặc biệt", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn lo lắng về tài chính như thế nào?",
    options: [
      { text: "Rất lo, dù tình hình không quá tệ", type: "A" },
      { text: "Khá lo, thường kiểm tra ngân sách", type: "B" },
      { text: "Chỉ lo khi có chi tiêu lớn", type: "C" },
      { text: "Không lo nhiều, sống đủ là được", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Khi gặp vấn đề sức khỏe nhỏ, bạn thường?",
    options: [
      { text: "Rất lo và nghĩ đến bệnh nghiêm trọng", type: "A" },
      { text: "Lo lắng và muốn đi khám ngay", type: "B" },
      { text: "Theo dõi, nếu không đỡ mới đi khám", type: "C" },
      { text: "Nghĩ sẽ tự khỏi, không lo nhiều", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Mức độ bạn lo lắng về các mối quan hệ?",
    options: [
      { text: "Rất lo, sợ mất đi người thân", type: "A" },
      { text: "Khá lo về việc duy trì mối quan hệ", type: "B" },
      { text: "Quan tâm nhưng không lo lắng quá mức", type: "C" },
      { text: "Tin tưởng và không lo nhiều", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn kiểm soát suy nghĩ tiêu cực như thế nào?",
    options: [
      { text: "Rất khó, suy nghĩ tiêu cực chi phối tôi", type: "A" },
      { text: "Khó khăn nhưng đang cố gắng", type: "B" },
      { text: "Có thể chuyển hướng suy nghĩ", type: "C" },
      { text: "Dễ dàng tập trung vào điều tích cực", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Khi chờ kết quả quan trọng, bạn thường?",
    options: [
      { text: "Không thể làm gì khác, chỉ lo lắng", type: "A" },
      { text: "Bồn chồn và hay kiểm tra", type: "B" },
      { text: "Lo một chút nhưng vẫn sinh hoạt bình thường", type: "C" },
      { text: "Đợi đến khi có kết quả mới nghĩ", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn lo lắng về công việc/học tập như thế nào?",
    options: [
      { text: "Rất nhiều, gần như mọi lúc", type: "A" },
      { text: "Khá nhiều, đặc biệt trước deadline", type: "B" },
      { text: "Vừa phải, đủ để hoàn thành tốt", type: "C" },
      { text: "Không nhiều, tôi tự tin vào khả năng", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Nhìn chung, mức độ lo âu ảnh hưởng cuộc sống của bạn?",
    options: [
      { text: "Rất nhiều, ảnh hưởng mọi mặt", type: "A" },
      { text: "Khá nhiều, cần phải kiểm soát", type: "B" },
      { text: "Vừa phải, không quá nghiêm trọng", type: "C" },
      { text: "Rất ít, tôi sống thoải mái", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Mức Độ Lo Âu Cao",
    emoji: "😰",
    description: "Bạn có mức độ lo âu khá cao, thường xuyên căng thẳng và lo lắng về nhiều vấn đề trong cuộc sống. Điều này có thể ảnh hưởng đến sức khỏe và chất lượng cuộc sống của bạn.",
    traits: ["Hay lo lắng", "Căng thẳng", "Nhạy cảm", "Suy nghĩ nhiều"],
    strengths: ["Cẩn thận", "Chu đáo", "Chuẩn bị kỹ càng"],
    weaknesses: ["Khó thư giãn", "Dễ kiệt sức", "Ảnh hưởng sức khỏe"],
    tips: ["Tập thiền định và hít thở sâu", "Tìm kiếm sự hỗ trợ từ chuyên gia nếu cần"],
  },
  B: {
    type: "B",
    title: "Mức Độ Lo Âu Trung Bình",
    emoji: "😟",
    description: "Bạn có mức độ lo âu ở mức trung bình, thường lo lắng khi có áp lực nhưng vẫn có thể kiểm soát được. Việc học cách quản lý stress sẽ giúp bạn cải thiện.",
    traits: ["Lo lắng có chừng mực", "Cố gắng kiểm soát", "Nhạy cảm", "Có ý thức"],
    strengths: ["Biết lo xa", "Có trách nhiệm", "Chuẩn bị tốt"],
    weaknesses: ["Đôi khi căng thẳng quá mức", "Khó buông bỏ"],
    tips: ["Tập các phương pháp thư giãn", "Chia sẻ với người thân"],
  },
  C: {
    type: "C",
    title: "Mức Độ Lo Âu Thấp",
    emoji: "😊",
    description: "Bạn có mức độ lo âu thấp, chỉ lo lắng khi thực sự cần thiết và biết cách kiểm soát cảm xúc của mình. Đây là trạng thái lành mạnh về mặt tâm lý.",
    traits: ["Bình tĩnh", "Kiểm soát tốt", "Lạc quan", "Ổn định"],
    strengths: ["Không để lo âu chi phối", "Sống hài hòa", "Tinh thần ổn định"],
    weaknesses: ["Đôi khi có thể chủ quan", "Có thể bỏ qua rủi ro"],
    tips: ["Tiếp tục duy trì lối sống lành mạnh", "Vẫn cần lưu ý các vấn đề quan trọng"],
  },
  D: {
    type: "D",
    title: "Tâm Lý Vững Vàng",
    emoji: "😌",
    description: "Bạn có tâm lý rất vững vàng, hầu như không bị lo âu chi phối. Bạn sống thoải mái, lạc quan và tin tưởng vào cuộc sống.",
    traits: ["Bình thản", "Lạc quan", "Tự tin", "Vững vàng"],
    strengths: ["Không bị stress", "Sống khỏe mạnh", "Tinh thần tích cực"],
    weaknesses: ["Có thể quá thảnh thơi", "Đôi khi thiếu chuẩn bị"],
    tips: ["Giữ vững tinh thần này", "Đôi khi cần dự phòng cho những tình huống bất ngờ"],
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
