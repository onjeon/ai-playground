// Mức độ kiên định
// Bài test đánh giá mức độ kiên định và quyết tâm của bạn

export const questions = [
  {
    id: 1,
    question: "Khi đặt mục tiêu, bạn theo đuổi nó như thế nào?",
    options: [
      { text: "Kiên định theo đuổi đến cùng dù gặp khó khăn", type: "A" },
      { text: "Theo đuổi chăm chỉ nhưng có thể điều chỉnh", type: "B" },
      { text: "Cố gắng nhưng dễ nản khi gặp trở ngại", type: "C" },
      { text: "Thường bỏ cuộc giữa chừng", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn giữ vững quan điểm như thế nào khi bị phản đối?",
    options: [
      { text: "Kiên quyết nếu tin mình đúng", type: "A" },
      { text: "Giữ vững nhưng lắng nghe ý kiến khác", type: "B" },
      { text: "Dễ bị lung lay bởi ý kiến đa số", type: "C" },
      { text: "Thường thay đổi theo người khác", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi quyết định điều gì đó, bạn có hay thay đổi không?",
    options: [
      { text: "Hiếm khi, tôi đã quyết là làm", type: "A" },
      { text: "Đôi khi thay đổi nếu có lý do chính đáng", type: "B" },
      { text: "Khá hay thay đổi ý định", type: "C" },
      { text: "Rất hay thay đổi, thiếu quyết đoán", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn có giữ lời hứa tốt không?",
    options: [
      { text: "Luôn giữ lời, đó là nguyên tắc của tôi", type: "A" },
      { text: "Hầu như luôn giữ lời", type: "B" },
      { text: "Cố gắng nhưng đôi khi không giữ được", type: "C" },
      { text: "Hay quên hoặc không giữ được lời hứa", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi gặp thất bại, bạn phản ứng thế nào?",
    options: [
      { text: "Đứng dậy và tiếp tục ngay", type: "A" },
      { text: "Nghỉ ngơi rồi tiếp tục", type: "B" },
      { text: "Cần nhiều thời gian để lấy lại tinh thần", type: "C" },
      { text: "Muốn từ bỏ hoàn toàn", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn có tuân thủ nguyên tắc của mình không?",
    options: [
      { text: "Luôn luôn, nguyên tắc là điều không thể thỏa hiệp", type: "A" },
      { text: "Hầu như luôn tuân thủ", type: "B" },
      { text: "Đôi khi linh hoạt một chút", type: "C" },
      { text: "Khó giữ vững nguyên tắc", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Khi làm việc dài hạn, bạn duy trì động lực thế nào?",
    options: [
      { text: "Vẫn giữ được động lực cao từ đầu đến cuối", type: "A" },
      { text: "Có lúc cao lúc thấp nhưng vẫn hoàn thành", type: "B" },
      { text: "Động lực giảm dần theo thời gian", type: "C" },
      { text: "Nhanh chóng mất động lực", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn có dễ bị ảnh hưởng bởi xu hướng không?",
    options: [
      { text: "Không, tôi có phong cách riêng", type: "A" },
      { text: "Đôi khi tham khảo nhưng giữ bản sắc", type: "B" },
      { text: "Khá dễ bị ảnh hưởng", type: "C" },
      { text: "Rất dễ thay đổi theo xu hướng", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi có áp lực từ người khác, bạn phản ứng thế nào?",
    options: [
      { text: "Giữ vững lập trường của mình", type: "A" },
      { text: "Cân nhắc nhưng không dễ thay đổi", type: "B" },
      { text: "Dễ bị áp lực chi phối", type: "C" },
      { text: "Thường làm theo ý người khác", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn có hay bỏ dở các dự án cá nhân không?",
    options: [
      { text: "Hiếm khi, tôi luôn hoàn thành những gì bắt đầu", type: "A" },
      { text: "Đôi khi nếu không còn phù hợp", type: "B" },
      { text: "Khá hay bỏ dở", type: "C" },
      { text: "Rất hay bỏ dở giữa chừng", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn có kiên trì với thói quen tốt không?",
    options: [
      { text: "Rất kiên trì, duy trì được lâu dài", type: "A" },
      { text: "Khá kiên trì nhưng đôi khi gián đoạn", type: "B" },
      { text: "Khó duy trì lâu dài", type: "C" },
      { text: "Rất khó tạo thói quen", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Nhìn chung, bạn đánh giá sự kiên định của mình thế nào?",
    options: [
      { text: "Rất kiên định, không dễ bị lung lay", type: "A" },
      { text: "Khá kiên định trong phần lớn trường hợp", type: "B" },
      { text: "Trung bình, còn cần cải thiện", type: "C" },
      { text: "Thiếu kiên định, dễ thay đổi", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người Kiên Định Vững Vàng",
    emoji: "🗿",
    description: "Bạn là người cực kỳ kiên định, khi đã quyết định điều gì sẽ theo đuổi đến cùng. Sự kiên định này là sức mạnh lớn nhất của bạn.",
    traits: ["Kiên định cao", "Quyết tâm", "Có nguyên tắc", "Không lung lay"],
    strengths: ["Đạt được mục tiêu", "Đáng tin cậy", "Có ý chí mạnh mẽ"],
    weaknesses: ["Đôi khi quá cứng đầu", "Khó linh hoạt"],
    tips: ["Biết khi nào nên linh hoạt", "Lắng nghe ý kiến khác cũng quan trọng"],
  },
  B: {
    type: "B",
    title: "Người Kiên Định Cân Bằng",
    emoji: "⚓",
    description: "Bạn kiên định nhưng biết khi nào nên điều chỉnh. Đây là sự cân bằng tốt giữa kiên trì và linh hoạt.",
    traits: ["Kiên định", "Cân bằng", "Biết điều", "Đáng tin cậy"],
    strengths: ["Hoàn thành mục tiêu", "Linh hoạt khi cần", "Đáng tin cậy"],
    weaknesses: ["Đôi khi do dự", "Cần thời gian quyết định"],
    tips: ["Tiếp tục duy trì sự cân bằng", "Tin tưởng vào quyết định của mình"],
  },
  C: {
    type: "C",
    title: "Người Thiếu Kiên Định",
    emoji: "🍃",
    description: "Bạn có xu hướng dễ thay đổi và cần phát triển thêm sự kiên định để đạt được mục tiêu trong cuộc sống.",
    traits: ["Dễ thay đổi", "Thiếu quyết đoán", "Hay lung lay", "Cần hướng dẫn"],
    strengths: ["Linh hoạt", "Dễ thích nghi", "Không cố chấp"],
    weaknesses: ["Khó hoàn thành mục tiêu", "Dễ bị ảnh hưởng"],
    tips: ["Đặt mục tiêu nhỏ và hoàn thành chúng", "Rèn luyện sự kiên trì từng bước"],
  },
  D: {
    type: "D",
    title: "Người Hay Thay Đổi",
    emoji: "🌬️",
    description: "Bạn rất dễ thay đổi ý định và thiếu sự kiên định. Việc xây dựng ý chí và quyết tâm sẽ giúp bạn thành công hơn.",
    traits: ["Rất dễ thay đổi", "Thiếu kiên trì", "Không quyết đoán", "Dễ bỏ cuộc"],
    strengths: ["Rất linh hoạt", "Không cố chấp", "Dễ chấp nhận thay đổi"],
    weaknesses: ["Khó đạt được mục tiêu", "Thiếu tin cậy", "Dễ bị lung lay"],
    tips: ["Bắt đầu từ những cam kết nhỏ", "Tìm người hỗ trợ và đồng hành"],
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
