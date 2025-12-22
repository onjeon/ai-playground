// Cách đối mặt ngập lụt
// Khám phá cách bạn xử lý khi gặp tình trạng ngập lụt

export const questions = [
  {
    id: 1,
    question: "Khi nghe tin sẽ có mưa lớn, ngập lụt, bạn?",
    options: [
      { text: "Chuẩn bị kỹ: túi chống nước, di chuyển đồ", type: "A" },
      { text: "Theo dõi tin tức, sẵn sàng", type: "B" },
      { text: "Biết nhưng không làm gì", type: "C" },
      { text: "Không quan tâm, sao cũng được", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Khi đường ngập, bạn có ra ngoài không?",
    options: [
      { text: "Không, ở nhà chờ nước rút", type: "A" },
      { text: "Chỉ đi nếu thật sự cần thiết", type: "B" },
      { text: "Vẫn đi, quen rồi", type: "C" },
      { text: "Đi bình thường, không để ý", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Xe bạn bị ngập nước, bạn?",
    options: [
      { text: "Dừng xe ngay, không cố đi tiếp", type: "A" },
      { text: "Đi chậm, quan sát mực nước", type: "B" },
      { text: "Cố gắng đi qua nhanh", type: "C" },
      { text: "Ga mạnh, lội qua", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Nhà bạn có hay bị ngập không?",
    options: [
      { text: "Không, ở cao hoặc hệ thống thoát nước tốt", type: "A" },
      { text: "Đôi khi, khi mưa quá lớn", type: "B" },
      { text: "Hay bị, mỗi mùa mưa đều lo", type: "C" },
      { text: "Thường xuyên, đã quen sống chung", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn có chuẩn bị gì cho mùa ngập?",
    options: [
      { text: "Túi chống nước, đồ khẩn cấp, kê cao đồ", type: "A" },
      { text: "Một vài vật dụng cơ bản", type: "B" },
      { text: "Không chuẩn bị gì đặc biệt", type: "C" },
      { text: "Không, đến đâu hay đến đó", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi nước ngập vào nhà, bạn?",
    options: [
      { text: "Bình tĩnh, di chuyển đồ lên cao", type: "A" },
      { text: "Lo lắng nhưng cố gắng xử lý", type: "B" },
      { text: "Hoảng loạn, không biết làm gì", type: "C" },
      { text: "Chấp nhận, ngồi chờ nước rút", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn nghĩ gì về tình trạng ngập ở Việt Nam?",
    options: [
      { text: "Cần giải pháp căn bản từ quy hoạch đô thị", type: "A" },
      { text: "Khó khăn nhưng đang được cải thiện", type: "B" },
      { text: "Bực bội, chính quyền cần làm tốt hơn", type: "C" },
      { text: "Chấp nhận, sống chung với lũ", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Khi thấy người khác gặp khó khăn vì ngập, bạn?",
    options: [
      { text: "Giúp đỡ nếu có thể", type: "A" },
      { text: "Chia sẻ thông tin hữu ích", type: "B" },
      { text: "Thông cảm nhưng không làm gì", type: "C" },
      { text: "Không quan tâm, lo cho mình", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Sau khi nước rút, bạn làm gì?",
    options: [
      { text: "Dọn dẹp, khử trùng, phơi khô đồ", type: "A" },
      { text: "Dọn dẹp cơ bản", type: "B" },
      { text: "Chờ khô rồi mới dọn", type: "C" },
      { text: "Không dọn gì đặc biệt", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn có bảo hiểm cho thiệt hại do ngập không?",
    options: [
      { text: "Có, đầy đủ bảo hiểm nhà và xe", type: "A" },
      { text: "Có bảo hiểm xe", type: "B" },
      { text: "Không có bảo hiểm", type: "C" },
      { text: "Không biết, chưa tìm hiểu", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Ngập lụt ảnh hưởng đến tâm lý bạn thế nào?",
    options: [
      { text: "Không ảnh hưởng, đã có kế hoạch", type: "A" },
      { text: "Hơi lo lắng nhưng kiểm soát được", type: "B" },
      { text: "Stress, lo lắng mỗi khi mưa lớn", type: "C" },
      { text: "Rất căng thẳng, ám ảnh", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Nếu có thể, bạn sẽ?",
    options: [
      { text: "Chuyển đến nơi không bị ngập", type: "A" },
      { text: "Cải tạo nhà để chống ngập", type: "B" },
      { text: "Sống chung, không thay đổi", type: "C" },
      { text: "Chấp nhận số phận", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Chuyên gia phòng chống ngập",
    emoji: "🛡️",
    description: "Bạn chuẩn bị kỹ lưỡng cho mọi tình huống ngập lụt! Có kế hoạch, có đồ dự phòng, và biết cách xử lý. Ngập lụt không làm khó được bạn.",
    traits: ["Chuẩn bị kỹ", "Bình tĩnh", "Có kế hoạch", "Proactive"],
    strengths: ["Ít thiệt hại", "Không hoảng loạn", "Giúp được người khác"],
    weaknesses: ["Có thể lo lắng quá mức", "Tốn chi phí chuẩn bị"],
    tips: ["Duy trì thói quen tốt", "Chia sẻ kinh nghiệm với người khác"],
  },
  B: {
    type: "B",
    title: "Người thích nghi linh hoạt",
    emoji: "🌊",
    description: "Bạn biết cách sống chung với ngập lụt một cách linh hoạt. Không quá căng thẳng, cũng không quá chủ quan. Đây là cách tiếp cận thực tế.",
    traits: ["Linh hoạt", "Thực tế", "Cân bằng", "Thích nghi"],
    strengths: ["Xử lý tốt tình huống", "Không stress quá", "Có kinh nghiệm"],
    weaknesses: ["Đôi khi thiếu chuẩn bị", "Có thể chủ quan"],
    tips: ["Chuẩn bị thêm một chút", "Theo dõi dự báo thời tiết"],
  },
  C: {
    type: "C",
    title: "Nạn nhân ngập lụt",
    emoji: "😰",
    description: "Ngập lụt là nỗi ám ảnh với bạn! Thiếu chuẩn bị, dễ hoảng loạn và thường phải chịu thiệt hại. Bạn cần có kế hoạch tốt hơn cho mùa mưa.",
    traits: ["Thiếu chuẩn bị", "Lo lắng", "Bị động", "Chưa có kinh nghiệm"],
    strengths: ["Biết vấn đề của mình", "Có thể cải thiện"],
    weaknesses: ["Dễ bị thiệt hại", "Stress cao", "Không có kế hoạch"],
    tips: ["Lập kế hoạch phòng chống", "Mua đồ dự phòng", "Tìm hiểu kinh nghiệm người khác"],
  },
  D: {
    type: "D",
    title: "Người chấp nhận số phận",
    emoji: "🤷",
    description: "Bạn sống chung với ngập lụt theo kiểu 'đến đâu hay đến đó'. Có thể đã quá quen hoặc không có khả năng thay đổi. Chấp nhận nhưng nên có kế hoạch.",
    traits: ["Chấp nhận", "Không lo lắng", "Thụ động", "Quen thuộc"],
    strengths: ["Không stress", "Kinh nghiệm sống chung"],
    weaknesses: ["Dễ bị thiệt hại", "Không cải thiện tình hình"],
    tips: ["Chuẩn bị tối thiểu", "Tìm hiểu bảo hiểm", "Cải thiện điều kiện sống nếu có thể"],
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
