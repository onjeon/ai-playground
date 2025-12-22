// Tính cách vùng miền
// Khám phá tính cách đặc trưng vùng miền trong bạn

export const questions = [
  {
    id: 1,
    question: "Khi được mời ăn, bạn thường?",
    options: [
      { text: "Từ chối lịch sự vài lần rồi mới nhận", type: "A" },
      { text: "Nhận luôn, cảm ơn và vui vẻ", type: "B" },
      { text: "Hỏi lại có chắc không rồi mới nhận", type: "C" },
      { text: "Tùy hoàn cảnh và người mời", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Cách bạn thể hiện sự tôn trọng?",
    options: [
      { text: "Dùng kính ngữ, xưng hô đúng vai vế", type: "A" },
      { text: "Thái độ thân thiện, không câu nệ", type: "B" },
      { text: "Hành động thực tế, ít lời", type: "C" },
      { text: "Kết hợp cả lời nói và hành động", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi có người khách đến nhà?",
    options: [
      { text: "Mời trà, tiếp đón chu đáo, hỏi thăm tỉ mỉ", type: "A" },
      { text: "Thoải mái như người trong nhà", type: "B" },
      { text: "Đón tiếp bình thường, không quá cầu kỳ", type: "C" },
      { text: "Tùy mức độ thân thiết mà đối xử", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Quan điểm về việc mặc cả khi mua hàng?",
    options: [
      { text: "Mặc cả là nghệ thuật, phải biết cách", type: "A" },
      { text: "Nói giá bao nhiêu trả bấy nhiêu", type: "B" },
      { text: "Mặc cả vừa phải, không quá gay gắt", type: "C" },
      { text: "Tùy món đồ và tình huống", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi ai đó khen bạn, bạn sẽ?",
    options: [
      { text: "Khiêm tốn từ chối, nói mình không giỏi lắm", type: "A" },
      { text: "Cảm ơn và vui vẻ nhận lời khen", type: "B" },
      { text: "Ngại ngùng, không biết nói gì", type: "C" },
      { text: "Cảm ơn và khen lại người đó", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn đối mặt với khó khăn như thế nào?",
    options: [
      { text: "Suy nghĩ kỹ, lên kế hoạch rồi hành động", type: "A" },
      { text: "Linh hoạt, ứng biến theo tình huống", type: "B" },
      { text: "Chịu đựng, không than vãn, cố gắng vượt qua", type: "C" },
      { text: "Tìm kiếm sự giúp đỡ từ người khác", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Khi nấu ăn, bạn thường?",
    options: [
      { text: "Nêm nếm nhẹ tay, giữ vị thanh", type: "A" },
      { text: "Nêm đậm đà, nhiều gia vị", type: "B" },
      { text: "Cay và mặn là chính", type: "C" },
      { text: "Tùy khẩu vị từng người", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn thể hiện tình cảm với người yêu như thế nào?",
    options: [
      { text: "Kín đáo, ít thể hiện ra ngoài", type: "A" },
      { text: "Thoải mái, không ngại thể hiện", type: "B" },
      { text: "Qua hành động hơn lời nói", type: "C" },
      { text: "Cân bằng giữa lời nói và hành động", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Quan niệm về thời gian của bạn?",
    options: [
      { text: "Đúng giờ là tôn trọng người khác", type: "A" },
      { text: "Linh hoạt một chút cũng được", type: "B" },
      { text: "Làm xong việc quan trọng hơn đúng giờ", type: "C" },
      { text: "Tùy tính chất công việc", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Khi có mâu thuẫn trong gia đình?",
    options: [
      { text: "Giữ hòa khí, tránh cãi nhau trước mặt người ngoài", type: "A" },
      { text: "Nói thẳng, giải quyết ngay", type: "B" },
      { text: "Âm thầm giải quyết, không làm to chuyện", type: "C" },
      { text: "Tìm người lớn hòa giải", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn nghĩ gì về việc nhờ vả người khác?",
    options: [
      { text: "Ngại nhờ, sợ làm phiền người ta", type: "A" },
      { text: "Thoải mái nhờ, sau này đáp lại", type: "B" },
      { text: "Cố gắng tự làm, chỉ nhờ khi thật cần", type: "C" },
      { text: "Nhờ vả là bình thường trong xã hội", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Khi đi tiệc cưới, bạn thường?",
    options: [
      { text: "Đến đúng giờ, ăn mặc trang trọng", type: "A" },
      { text: "Đến linh hoạt, quan trọng là vui", type: "B" },
      { text: "Đến sớm giúp đỡ gia chủ", type: "C" },
      { text: "Tùy mức độ thân thiết với chủ tiệc", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Tính cách Bắc Bộ",
    emoji: "🏛️",
    description: "Bạn mang đậm tính cách Bắc Bộ truyền thống. Bạn coi trọng lễ nghĩa, ứng xử tinh tế và luôn giữ phép tắc trong giao tiếp. Sự khiêm tốn và cẩn trọng là đặc trưng của bạn.",
    traits: ["Lễ phép", "Khiêm tốn", "Cẩn trọng", "Tinh tế"],
    strengths: ["Ứng xử khéo léo", "Tôn trọng truyền thống", "Có văn hóa"],
    weaknesses: ["Đôi khi quá câu nệ", "Khó nói thẳng"],
    tips: ["Thử thoải mái hơn khi cần", "Giữ được nét đẹp truyền thống"],
  },
  B: {
    type: "B",
    title: "Tính cách Nam Bộ",
    emoji: "🌴",
    description: "Bạn mang đậm tính cách Nam Bộ phóng khoáng. Bạn thân thiện, cởi mở và không câu nệ hình thức. Sự hào sảng và dễ gần là đặc trưng của bạn.",
    traits: ["Phóng khoáng", "Thân thiện", "Hào sảng", "Thẳng thắn"],
    strengths: ["Dễ gần", "Không khách sáo", "Tạo không khí vui vẻ"],
    weaknesses: ["Đôi khi quá thoải mái", "Ít chú trọng hình thức"],
    tips: ["Chú ý nghi thức khi cần", "Giữ được sự chân thật"],
  },
  C: {
    type: "C",
    title: "Tính cách Trung Bộ",
    emoji: "⛰️",
    description: "Bạn mang đậm tính cách Trung Bộ kiên cường. Bạn chịu khó, thực tế và không ngại khó khăn. Sự cần cù và ý chí mạnh mẽ là đặc trưng của bạn.",
    traits: ["Kiên cường", "Chịu khó", "Thực tế", "Tiết kiệm"],
    strengths: ["Không ngại khó", "Ý chí mạnh", "Giản dị"],
    weaknesses: ["Đôi khi quá khắc khổ", "Khó thay đổi"],
    tips: ["Cho phép bản thân hưởng thụ", "Linh hoạt hơn khi cần"],
  },
  D: {
    type: "D",
    title: "Tính cách hội nhập",
    emoji: "🌍",
    description: "Bạn có tính cách đa vùng miền, kết hợp ưu điểm của nhiều nơi. Bạn linh hoạt, biết cách ứng xử phù hợp với từng hoàn cảnh và dễ dàng hòa nhập ở mọi nơi.",
    traits: ["Linh hoạt", "Đa dạng", "Thích ứng", "Hội nhập"],
    strengths: ["Hòa nhập tốt", "Hiểu nhiều văn hóa", "Không bị giới hạn"],
    weaknesses: ["Đôi khi thiếu bản sắc riêng", "Khó xác định mình thuộc đâu"],
    tips: ["Tự hào về sự đa dạng", "Bạn là sự kết hợp độc đáo"],
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
