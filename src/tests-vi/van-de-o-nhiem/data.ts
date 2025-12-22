// Cách đối mặt ô nhiễm
// Khám phá cách bạn xử lý vấn đề ô nhiễm môi trường

export const questions = [
  {
    id: 1,
    question: "Bạn có quan tâm đến chỉ số AQI hàng ngày không?",
    options: [
      { text: "Có, check mỗi sáng trước khi ra ngoài", type: "A" },
      { text: "Thỉnh thoảng, khi thấy trời mù", type: "B" },
      { text: "Biết là có nhưng ít check", type: "C" },
      { text: "Không biết AQI là gì", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Khi không khí ô nhiễm nặng, bạn?",
    options: [
      { text: "Đeo khẩu trang N95, hạn chế ra ngoài", type: "A" },
      { text: "Đeo khẩu trang thông thường", type: "B" },
      { text: "Vẫn ra ngoài bình thường", type: "C" },
      { text: "Không để ý, không thấy khác biệt", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Nhà bạn có máy lọc không khí không?",
    options: [
      { text: "Có, chạy thường xuyên", type: "A" },
      { text: "Có, bật khi cần", type: "B" },
      { text: "Không có, đang cân nhắc mua", type: "C" },
      { text: "Không có, không cần thiết", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn nghĩ gì về tình trạng ô nhiễm?",
    options: [
      { text: "Rất nghiêm trọng, cần hành động ngay", type: "A" },
      { text: "Lo ngại, nhưng không biết làm gì", type: "B" },
      { text: "Có vấn đề nhưng không quá lo", type: "C" },
      { text: "Bình thường, không ảnh hưởng gì", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Về phương tiện di chuyển, bạn?",
    options: [
      { text: "Ưu tiên xe điện, xe buýt, đi bộ", type: "A" },
      { text: "Dùng xe máy nhưng bảo dưỡng thường xuyên", type: "B" },
      { text: "Dùng xe cá nhân, không quan tâm khí thải", type: "C" },
      { text: "Không nghĩ đến vấn đề môi trường", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Về rác thải và tái chế, bạn?",
    options: [
      { text: "Phân loại rác, hạn chế đồ nhựa", type: "A" },
      { text: "Cố gắng giảm rác, đôi khi tái chế", type: "B" },
      { text: "Không phân loại, tiện thì vứt", type: "C" },
      { text: "Không quan tâm", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Khi thấy ai đó xả rác, bạn?",
    options: [
      { text: "Nhắc nhở họ", type: "A" },
      { text: "Khó chịu nhưng không nói gì", type: "B" },
      { text: "Bình thường, không phải việc của mình", type: "C" },
      { text: "Không để ý", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn có tham gia hoạt động bảo vệ môi trường không?",
    options: [
      { text: "Có, thường xuyên tham gia", type: "A" },
      { text: "Đôi khi, khi có dịp", type: "B" },
      { text: "Chưa bao giờ nhưng muốn thử", type: "C" },
      { text: "Không, không quan tâm", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Ô nhiễm ảnh hưởng sức khỏe bạn thế nào?",
    options: [
      { text: "Hay bị dị ứng, hô hấp kém", type: "A" },
      { text: "Đôi khi khó thở khi ô nhiễm nặng", type: "B" },
      { text: "Không cảm thấy ảnh hưởng gì", type: "C" },
      { text: "Không biết, chưa để ý", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn có trồng cây xanh không?",
    options: [
      { text: "Có, nhiều cây trong nhà và ban công", type: "A" },
      { text: "Có vài chậu cây nhỏ", type: "B" },
      { text: "Không, không có điều kiện", type: "C" },
      { text: "Không thích trồng cây", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Về thực phẩm, bạn có để ý nguồn gốc không?",
    options: [
      { text: "Ưu tiên thực phẩm organic, sạch", type: "A" },
      { text: "Cố gắng chọn nguồn tin cậy", type: "B" },
      { text: "Mua tiện, không để ý nhiều", type: "C" },
      { text: "Giá rẻ là được", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bạn nghĩ mình có thể làm gì để giảm ô nhiễm?",
    options: [
      { text: "Thay đổi lối sống, tuyên truyền cho người khác", type: "A" },
      { text: "Làm những việc nhỏ trong khả năng", type: "B" },
      { text: "Không biết làm gì, chờ chính phủ", type: "C" },
      { text: "Một người không thay đổi được gì", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Chiến sĩ bảo vệ môi trường",
    emoji: "🌱",
    description: "Bạn là người có ý thức cao về môi trường! Từ việc nhỏ hàng ngày đến tham gia hoạt động cộng đồng, bạn đang góp phần tạo ra sự thay đổi tích cực.",
    traits: ["Có ý thức", "Chủ động", "Trách nhiệm", "Tích cực"],
    strengths: ["Sống xanh", "Ảnh hưởng tốt đến người khác", "Sức khỏe tốt hơn"],
    weaknesses: ["Đôi khi quá lo lắng", "Có thể thất vọng với người khác"],
    tips: ["Tiếp tục lan tỏa thông điệp", "Kiên nhẫn với sự thay đổi"],
  },
  B: {
    type: "B",
    title: "Người quan tâm môi trường",
    emoji: "🌿",
    description: "Bạn có ý thức về vấn đề ô nhiễm và cố gắng làm những việc trong khả năng. Chưa hoàn hảo nhưng đang đi đúng hướng.",
    traits: ["Quan tâm", "Cố gắng", "Thực tế", "Có ý thức"],
    strengths: ["Có ý thức cơ bản", "Sẵn sàng thay đổi", "Cân bằng"],
    weaknesses: ["Chưa nhất quán", "Đôi khi thiếu động lực"],
    tips: ["Tăng cường hành động", "Tìm hiểu thêm về vấn đề"],
  },
  C: {
    type: "C",
    title: "Người cần nâng cao ý thức",
    emoji: "🤔",
    description: "Bạn biết về vấn đề ô nhiễm nhưng chưa thực sự hành động. Cuộc sống bận rộn khiến bạn chưa dành thời gian cho việc này.",
    traits: ["Biết nhưng chưa làm", "Thụ động", "Cần động lực", "Tiềm năng"],
    strengths: ["Có nhận thức cơ bản", "Có thể thay đổi"],
    weaknesses: ["Thiếu hành động", "Thụ động"],
    tips: ["Bắt đầu từ việc nhỏ", "Tìm hiểu về tác hại của ô nhiễm"],
  },
  D: {
    type: "D",
    title: "Người chưa quan tâm",
    emoji: "😶",
    description: "Vấn đề ô nhiễm chưa nằm trong radar của bạn. Có thể do thiếu thông tin hoặc chưa thấy ảnh hưởng trực tiếp. Đã đến lúc tìm hiểu hơn.",
    traits: ["Thiếu thông tin", "Không quan tâm", "Cần giáo dục", "Tiềm năng"],
    strengths: ["Trang giấy trắng", "Có thể học hỏi"],
    weaknesses: ["Thiếu nhận thức", "Có thể gây hại môi trường"],
    tips: ["Tìm hiểu về ô nhiễm và tác hại", "Bắt đầu quan tâm từ những việc nhỏ"],
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
