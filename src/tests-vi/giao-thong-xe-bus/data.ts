// Phong cách đi xe bus
// Khám phá phong cách đi xe buýt của bạn ở Việt Nam

export const questions = [
  {
    id: 1,
    question: "Bạn có thường xuyên đi xe bus không?",
    options: [
      { text: "Hàng ngày, phương tiện chính", type: "A" },
      { text: "Thỉnh thoảng khi cần", type: "B" },
      { text: "Hiếm khi, có lựa chọn khác", type: "C" },
      { text: "Chưa bao giờ hoặc rất hiếm", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn chờ xe bus như thế nào?",
    options: [
      { text: "Đến sớm, đứng đúng trạm", type: "A" },
      { text: "Đến vừa giờ, check app", type: "B" },
      { text: "Chờ nhanh, sốt ruột nếu trễ", type: "C" },
      { text: "Ngại chờ đợi, thích đi xe khác", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Trên xe bus, bạn thường làm gì?",
    options: [
      { text: "Nghe nhạc, podcast", type: "A" },
      { text: "Lướt điện thoại, mạng xã hội", type: "B" },
      { text: "Đọc sách, học bài", type: "C" },
      { text: "Ngắm cảnh, nghỉ ngơi", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn ngồi ở đâu trên xe bus?",
    options: [
      { text: "Ghế gần cửa, tiện xuống", type: "A" },
      { text: "Ghế cuối, yên tĩnh", type: "B" },
      { text: "Ghế ưu tiên nếu trống", type: "C" },
      { text: "Đứng cũng được, không kén", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi xe bus đông, bạn?",
    options: [
      { text: "Kiên nhẫn đứng, giữ cân bằng", type: "A" },
      { text: "Khó chịu nhưng chấp nhận", type: "B" },
      { text: "Đợi chuyến sau ít người hơn", type: "C" },
      { text: "Không thích, chuyển sang đi xe khác", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn có nhường ghế cho người khác không?",
    options: [
      { text: "Luôn nhường cho người cần", type: "A" },
      { text: "Có, khi thấy người già, trẻ em", type: "B" },
      { text: "Tùy tình huống", type: "C" },
      { text: "Ít khi, mình cũng mệt", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn biết các tuyến bus như thế nào?",
    options: [
      { text: "Thuộc lòng các tuyến hay đi", type: "A" },
      { text: "Dùng app để tra cứu", type: "B" },
      { text: "Hỏi tài xế hoặc người khác", type: "C" },
      { text: "Không biết, ít đi bus", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn mua vé xe bus thế nào?",
    options: [
      { text: "Thẻ xe bus, thanh toán không tiền mặt", type: "A" },
      { text: "Trả tiền mặt cho phụ xe", type: "B" },
      { text: "Vé tháng hoặc vé học sinh", type: "C" },
      { text: "Không biết, chưa đi nhiều", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Điều khó chịu nhất khi đi xe bus?",
    options: [
      { text: "Xe đến muộn, không đúng giờ", type: "A" },
      { text: "Quá đông, chen chúc", type: "B" },
      { text: "Đường xa, mất nhiều thời gian", type: "C" },
      { text: "Tất cả những điều trên", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn thích điều gì ở xe bus?",
    options: [
      { text: "Giá rẻ, tiết kiệm chi phí", type: "A" },
      { text: "Không lo đậu xe, kẹt xe", type: "B" },
      { text: "Có thời gian đọc sách, nghỉ ngơi", type: "C" },
      { text: "Thân thiện môi trường", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn nghĩ gì về xe bus ở Việt Nam?",
    options: [
      { text: "Cần cải thiện nhưng vẫn hữu ích", type: "A" },
      { text: "Tốt cho sinh viên, người lao động", type: "B" },
      { text: "Chưa tiện lợi bằng xe máy", type: "C" },
      { text: "Không phù hợp với mình", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Nếu xe bus Việt Nam cải thiện, bạn sẽ?",
    options: [
      { text: "Sẵn sàng đi thường xuyên hơn", type: "A" },
      { text: "Thử nghiệm xem sao", type: "B" },
      { text: "Vẫn thích phương tiện cá nhân", type: "C" },
      { text: "Tùy vào mức độ cải thiện", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Tín đồ xe bus",
    emoji: "🚌",
    description: "Bạn là người thường xuyên sử dụng xe bus và biết cách tận dụng tối đa phương tiện công cộng. Bạn tiết kiệm và thân thiện với môi trường.",
    traits: ["Tiết kiệm", "Kiên nhẫn", "Thân thiện môi trường", "Thực tế"],
    strengths: ["Tiết kiệm chi phí", "Không lo đậu xe", "Góp phần giảm tắc đường"],
    weaknesses: ["Mất thời gian hơn", "Phụ thuộc lịch trình xe"],
    tips: ["Tiếp tục ủng hộ giao thông công cộng", "Chia sẻ kinh nghiệm với người khác"],
  },
  B: {
    type: "B",
    title: "Người đi bus linh hoạt",
    emoji: "🚍",
    description: "Bạn đi xe bus khi cần và biết cách kết hợp với các phương tiện khác. Bạn linh hoạt trong việc di chuyển.",
    traits: ["Linh hoạt", "Thích nghi", "Thực tế", "Tiện lợi"],
    strengths: ["Biết khi nào nên đi bus", "Kết hợp nhiều phương tiện", "Tiết kiệm khi cần"],
    weaknesses: ["Không quen thuộc hết các tuyến", "Đôi khi lúng túng"],
    tips: ["Thử đi bus thường xuyên hơn", "Tải app xe bus để tiện lợi hơn"],
  },
  C: {
    type: "C",
    title: "Người ngại đi bus",
    emoji: "🚌",
    description: "Bạn ít đi xe bus vì thấy chưa tiện lợi hoặc mất thời gian. Bạn thích các phương tiện khác hơn.",
    traits: ["Độc lập", "Tiện lợi", "Cá nhân", "Nhanh nhẹn"],
    strengths: ["Chủ động thời gian", "Linh hoạt hơn", "Không phụ thuộc"],
    weaknesses: ["Tốn chi phí hơn", "Góp phần tắc đường"],
    tips: ["Thử đi bus một vài lần", "Xe bus có thể tiện hơn bạn nghĩ"],
  },
  D: {
    type: "D",
    title: "Người chưa quen xe bus",
    emoji: "🚶",
    description: "Bạn hầu như không đi xe bus vì không quen hoặc không cần. Có thể bạn có phương tiện cá nhân hoặc dùng xe công nghệ.",
    traits: ["Độc lập", "Cá nhân", "Tiện nghi", "Hiện đại"],
    strengths: ["Tự do di chuyển", "Không mất thời gian chờ", "Thoải mái"],
    weaknesses: ["Chi phí cao hơn", "Bỏ lỡ trải nghiệm xe bus"],
    tips: ["Thử đi xe bus một lần cho biết", "Xe bus có thể là trải nghiệm thú vị"],
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
