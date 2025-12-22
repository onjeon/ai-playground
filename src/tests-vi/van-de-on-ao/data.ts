// Cách đối mặt ồn ào
// Khám phá cách bạn xử lý tiếng ồn trong cuộc sống

export const questions = [
  {
    id: 1,
    question: "Bạn nhạy cảm với tiếng ồn ở mức nào?",
    options: [
      { text: "Rất nhạy, tiếng nhỏ cũng nghe thấy", type: "A" },
      { text: "Khá nhạy, phụ thuộc loại tiếng", type: "B" },
      { text: "Bình thường, chịu được phần lớn", type: "C" },
      { text: "Không nhạy, ồn cũng được", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Khi hàng xóm ồn ào, bạn?",
    options: [
      { text: "Rất khó chịu, muốn nói chuyện ngay", type: "A" },
      { text: "Khó chịu, chờ xem có lặp lại không", type: "B" },
      { text: "Hơi phiền nhưng không làm gì", type: "C" },
      { text: "Không để ý, quen rồi", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn xử lý tiếng ồn hàng xóm như thế nào?",
    options: [
      { text: "Nói chuyện trực tiếp, lịch sự", type: "A" },
      { text: "Gõ tường hoặc gửi tin nhắn", type: "B" },
      { text: "Im lặng chịu đựng", type: "C" },
      { text: "Báo ban quản lý/công an", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi làm việc, bạn cần môi trường như thế nào?",
    options: [
      { text: "Im lặng tuyệt đối", type: "A" },
      { text: "Yên tĩnh, có thể có nhạc nhẹ", type: "B" },
      { text: "Có thể làm việc với tiếng ồn vừa", type: "C" },
      { text: "Không quan trọng, làm được mọi nơi", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn có dùng tai nghe chống ồn không?",
    options: [
      { text: "Có, không thể thiếu", type: "A" },
      { text: "Có, khi cần tập trung", type: "B" },
      { text: "Không, dùng tai nghe thường", type: "C" },
      { text: "Không dùng tai nghe", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Tiếng ồn giao thông ảnh hưởng bạn thế nào?",
    options: [
      { text: "Rất phiền, không thể ngủ được", type: "A" },
      { text: "Khó chịu nhưng quen dần", type: "B" },
      { text: "Bình thường, không để ý", type: "C" },
      { text: "Hoàn toàn không ảnh hưởng", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn có chọn nhà/phòng dựa trên tiếng ồn không?",
    options: [
      { text: "Ưu tiên hàng đầu, kiểm tra kỹ", type: "A" },
      { text: "Có để ý, nhưng không quyết định", type: "B" },
      { text: "Không để ý nhiều", type: "C" },
      { text: "Không quan trọng", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Khi ngủ, bạn cần môi trường như thế nào?",
    options: [
      { text: "Im lặng hoàn toàn, tối đen", type: "A" },
      { text: "Yên tĩnh, có thể có white noise", type: "B" },
      { text: "Chịu được một ít tiếng ồn", type: "C" },
      { text: "Ngủ được mọi nơi", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn nghĩ gì về karaoke hàng xóm?",
    options: [
      { text: "Cực kỳ ghét, nên cấm sau 10 giờ", type: "A" },
      { text: "Khó chịu nếu quá khuya", type: "B" },
      { text: "Bình thường, họ có quyền", type: "C" },
      { text: "Không sao, đôi khi còn vui", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Tiếng ồn ảnh hưởng đến sức khỏe tinh thần của bạn?",
    options: [
      { text: "Rất nhiều, gây stress, mất ngủ", type: "A" },
      { text: "Có ảnh hưởng, đôi khi khó chịu", type: "B" },
      { text: "Ít ảnh hưởng", type: "C" },
      { text: "Không ảnh hưởng gì", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn có tạo ra tiếng ồn không?",
    options: [
      { text: "Rất cẩn thận, sợ làm phiền người khác", type: "A" },
      { text: "Cố gắng kiểm soát", type: "B" },
      { text: "Bình thường, không để ý nhiều", type: "C" },
      { text: "Không quan tâm", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Giải pháp cho vấn đề tiếng ồn đô thị?",
    options: [
      { text: "Cần quy định nghiêm ngặt hơn", type: "A" },
      { text: "Giáo dục ý thức cộng đồng", type: "B" },
      { text: "Tự mình thích nghi", type: "C" },
      { text: "Không cần giải pháp, bình thường", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người nhạy cảm tiếng ồn",
    emoji: "🔇",
    description: "Bạn rất nhạy cảm với tiếng ồn và cần môi trường yên tĩnh để sống và làm việc. Tiếng ồn ảnh hưởng lớn đến chất lượng cuộc sống của bạn.",
    traits: ["Nhạy cảm", "Cần yên tĩnh", "Dễ bị ảnh hưởng", "Chi tiết"],
    strengths: ["Tập trung cao trong yên tĩnh", "Để ý chi tiết", "Tôn trọng người khác"],
    weaknesses: ["Khó thích nghi môi trường ồn", "Dễ stress", "Khó ngủ"],
    tips: ["Đầu tư tai nghe chống ồn", "Chọn nơi ở cẩn thận", "Học cách thư giãn"],
  },
  B: {
    type: "B",
    title: "Người cần yên tĩnh tương đối",
    emoji: "🎧",
    description: "Bạn thích yên tĩnh nhưng có thể chịu được tiếng ồn ở mức nhất định. Biết cách tạo không gian cho mình và thích nghi với hoàn cảnh.",
    traits: ["Cân bằng", "Thích nghi", "Có giới hạn", "Linh hoạt"],
    strengths: ["Thích nghi được", "Biết cách xử lý", "Cân bằng"],
    weaknesses: ["Đôi khi bị ảnh hưởng", "Cần thời gian để quen"],
    tips: ["Có tai nghe dự phòng", "Học cách giao tiếp với hàng xóm"],
  },
  C: {
    type: "C",
    title: "Người chịu được tiếng ồn",
    emoji: "🏙️",
    description: "Bạn đã quen với cuộc sống đô thị ồn ào và không để tiếng ồn làm phiền nhiều. Đây là kỹ năng sinh tồn tốt trong thành phố lớn.",
    traits: ["Chịu đựng tốt", "Không nhạy cảm", "Thích nghi", "Thực tế"],
    strengths: ["Sống được mọi nơi", "Không stress vì tiếng ồn", "Linh hoạt"],
    weaknesses: ["Có thể bỏ qua tiếng ồn có hại", "Ít để ý đến người khác"],
    tips: ["Vẫn nên có không gian yên tĩnh", "Chú ý sức khỏe thính giác"],
  },
  D: {
    type: "D",
    title: "Người miễn nhiễm tiếng ồn",
    emoji: "😴",
    description: "Tiếng ồn hoàn toàn không ảnh hưởng đến bạn! Bạn có thể ngủ, làm việc trong mọi môi trường. Đây là khả năng đáng ghen tị.",
    traits: ["Không bị ảnh hưởng", "Thích nghi tuyệt vời", "Bình thản", "Cứng cỏi"],
    strengths: ["Sống được mọi nơi", "Ngủ được mọi lúc", "Không stress"],
    weaknesses: ["Có thể không để ý đến người khác", "Bỏ qua vấn đề"],
    tips: ["Vẫn nên tôn trọng người khác", "Kiểm tra thính lực định kỳ"],
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
