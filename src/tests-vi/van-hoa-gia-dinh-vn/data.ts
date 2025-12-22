// Kiểu con cháu trong gia đình Việt
// Khám phá vai trò của bạn trong gia đình

export const questions = [
  {
    id: 1,
    question: "Khi ba mẹ gọi điện, bạn thường?",
    options: [
      { text: "Nghe ngay, nói chuyện lâu", type: "A" },
      { text: "Nghe nhưng nói nhanh vì bận", type: "B" },
      { text: "Nhắn tin lại sau khi bận", type: "C" },
      { text: "Để lỡ rồi quên gọi lại", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn về thăm nhà bao lâu một lần?",
    options: [
      { text: "Hàng tuần hoặc thường xuyên", type: "A" },
      { text: "Mỗi tháng một lần", type: "B" },
      { text: "Chỉ dịp lễ Tết", type: "C" },
      { text: "Lâu lắm rồi chưa về", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi gia đình có chuyện quan trọng?",
    options: [
      { text: "Luôn có mặt, hỗ trợ hết mình", type: "A" },
      { text: "Cố gắng sắp xếp thời gian", type: "B" },
      { text: "Hỗ trợ từ xa bằng tiền hoặc lời nói", type: "C" },
      { text: "Không biết vì ít liên lạc", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Ba mẹ nhờ làm việc nhà, bạn?",
    options: [
      { text: "Làm ngay không than phiền", type: "A" },
      { text: "Làm nhưng hơi lằng nhằng", type: "B" },
      { text: "Trì hoãn một lúc rồi mới làm", type: "C" },
      { text: "Tìm cớ để tránh", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn thường gửi tiền về cho gia đình?",
    options: [
      { text: "Hàng tháng đều đặn", type: "A" },
      { text: "Khi có điều kiện thì gửi", type: "B" },
      { text: "Chỉ dịp lễ Tết", type: "C" },
      { text: "Chưa có khả năng gửi", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi ba mẹ can thiệp chuyện riêng tư?",
    options: [
      { text: "Lắng nghe và cân nhắc ý kiến", type: "A" },
      { text: "Giải thích quan điểm của mình", type: "B" },
      { text: "Hơi khó chịu nhưng vẫn nghe", type: "C" },
      { text: "Phản đối mạnh mẽ, đòi tự do", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Sinh nhật ba mẹ, bạn làm gì?",
    options: [
      { text: "Tổ chức tiệc, mua quà đặc biệt", type: "A" },
      { text: "Gọi điện chúc mừng, gửi quà", type: "B" },
      { text: "Nhắn tin chúc mừng", type: "C" },
      { text: "Thường quên, phải ai nhắc mới nhớ", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn chia sẻ cuộc sống với gia đình?",
    options: [
      { text: "Kể hết mọi chuyện vui buồn", type: "A" },
      { text: "Kể chuyện vui, giấu chuyện buồn", type: "B" },
      { text: "Chỉ kể khi được hỏi", type: "C" },
      { text: "Ít khi chia sẻ, giữ riêng tư", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi anh chị em cần giúp đỡ?",
    options: [
      { text: "Giúp ngay không đắn đo", type: "A" },
      { text: "Giúp trong khả năng của mình", type: "B" },
      { text: "Cân nhắc rồi mới quyết định", type: "C" },
      { text: "Tùy mối quan hệ mà giúp", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn tham gia họp mặt gia đình?",
    options: [
      { text: "Không bỏ buổi nào, rất háo hức", type: "A" },
      { text: "Đi khi có thể, có khi bận", type: "B" },
      { text: "Chỉ đi khi bắt buộc", type: "C" },
      { text: "Thường xuyên vắng mặt", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn xử lý mâu thuẫn trong gia đình?",
    options: [
      { text: "Đứng ra hòa giải, làm cầu nối", type: "A" },
      { text: "Góp ý nhẹ nhàng, không can thiệp sâu", type: "B" },
      { text: "Để người lớn tự giải quyết", type: "C" },
      { text: "Tránh xa, không muốn dính vào", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Điều bạn trân trọng nhất ở gia đình?",
    options: [
      { text: "Tình yêu thương vô điều kiện", type: "A" },
      { text: "Sự hỗ trợ khi khó khăn", type: "B" },
      { text: "Những kỷ niệm đẹp", type: "C" },
      { text: "Sự tự do và tôn trọng cá nhân", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Con cháu hiếu thảo mẫu mực",
    emoji: "💝",
    description: "Bạn là niềm tự hào của gia đình! Luôn đặt gia đình lên hàng đầu, bạn là người con cháu mà bất kỳ gia đình Việt nào cũng mong có.",
    traits: ["Hiếu thảo", "Có trách nhiệm", "Quan tâm", "Hy sinh"],
    strengths: ["Được gia đình yêu quý", "Gắn kết gia đình", "Làm gương cho người khác"],
    weaknesses: ["Có thể quên bản thân", "Áp lực phải hoàn hảo"],
    tips: ["Nhớ dành thời gian cho bản thân", "Đừng quá gánh nặng trách nhiệm"],
  },
  B: {
    type: "B",
    title: "Con cháu cân bằng",
    emoji: "⚖️",
    description: "Bạn biết cách cân bằng giữa gia đình và cuộc sống riêng. Bạn quan tâm gia đình nhưng cũng có không gian cho bản thân.",
    traits: ["Cân bằng", "Độc lập", "Có chừng mực", "Thực tế"],
    strengths: ["Biết quản lý thời gian", "Giữ được sự hòa hợp", "Không bị áp lực"],
    weaknesses: ["Đôi khi gia đình muốn bạn gần hơn", "Có thể bị hiểu lầm là lạnh nhạt"],
    tips: ["Thể hiện tình cảm nhiều hơn", "Chủ động liên lạc với gia đình"],
  },
  C: {
    type: "C",
    title: "Con cháu từ xa yêu thương",
    emoji: "📱",
    description: "Bạn yêu gia đình theo cách riêng của mình, thường là từ xa. Công việc và cuộc sống bận rộn nhưng bạn vẫn nhớ đến gia đình.",
    traits: ["Độc lập", "Bận rộn", "Yêu thương thầm lặng", "Thực tế"],
    strengths: ["Tự lập tốt", "Không phụ thuộc", "Có cuộc sống riêng"],
    weaknesses: ["Ít gặp gỡ gia đình", "Có thể bỏ lỡ khoảnh khắc quan trọng"],
    tips: ["Sắp xếp thời gian về thăm nhà", "Video call thường xuyên hơn"],
  },
  D: {
    type: "D",
    title: "Con cháu tự do bay xa",
    emoji: "🦋",
    description: "Bạn là người yêu tự do và có cuộc sống độc lập. Mối quan hệ với gia đình có thể không quá gần gũi nhưng điều đó không có nghĩa bạn không yêu thương họ.",
    traits: ["Tự do", "Độc lập", "Cá tính", "Riêng tư"],
    strengths: ["Tự chủ", "Không phụ thuộc", "Có quan điểm riêng"],
    weaknesses: ["Xa cách gia đình", "Có thể thiếu sự hỗ trợ khi cần"],
    tips: ["Kết nối lại với gia đình", "Gia đình là nơi bạn luôn có thể quay về"],
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
