// Cách xử sự gặp mặt
// Khám phá cách bạn xử sự trong các buổi gặp mặt xã hội

export const questions = [
  {
    id: 1,
    question: "Khi gặp người lạ lần đầu, bạn?",
    options: [
      { text: "Chủ động bắt tay, tự giới thiệu", type: "A" },
      { text: "Cười, chờ họ giới thiệu trước", type: "B" },
      { text: "Gật đầu chào, ít nói", type: "C" },
      { text: "Awkward, không biết làm gì", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Trong buổi gặp mặt đông người, bạn?",
    options: [
      { text: "Nói chuyện với nhiều người", type: "A" },
      { text: "Chọn vài người để trò chuyện sâu", type: "B" },
      { text: "Bám theo người quen", type: "C" },
      { text: "Tìm góc yên tĩnh, ít tiếp xúc", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Về small talk, bạn?",
    options: [
      { text: "Giỏi, nói được mọi chủ đề", type: "A" },
      { text: "Khá ổn, có thể duy trì hội thoại", type: "B" },
      { text: "Khó khăn, hay hết chủ đề", type: "C" },
      { text: "Ghét small talk, thích im lặng", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi có khoảng lặng trong cuộc trò chuyện, bạn?",
    options: [
      { text: "Đưa ra chủ đề mới ngay", type: "A" },
      { text: "Chờ một chút rồi nói tiếp", type: "B" },
      { text: "Cảm thấy ngại, muốn thoát", type: "C" },
      { text: "Im lặng cũng ok với tôi", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn nhớ tên người mới gặp không?",
    options: [
      { text: "Nhớ rất tốt, cả chi tiết về họ", type: "A" },
      { text: "Nhớ được phần lớn", type: "B" },
      { text: "Hay quên, phải hỏi lại", type: "C" },
      { text: "Gần như không nhớ", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi gặp người bạn không thích, bạn?",
    options: [
      { text: "Vẫn nói chuyện lịch sự", type: "A" },
      { text: "Chào xã giao rồi tránh", type: "B" },
      { text: "Lờ đi, giả vờ không thấy", type: "C" },
      { text: "Thể hiện rõ không muốn gặp", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn có hay xin số điện thoại/social media không?",
    options: [
      { text: "Có, networking là quan trọng", type: "A" },
      { text: "Nếu thấy hợp thì xin", type: "B" },
      { text: "Chờ họ đưa trước", type: "C" },
      { text: "Hiếm khi, không thích kết nối mới", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Sau buổi gặp, bạn có follow-up không?",
    options: [
      { text: "Có, nhắn tin làm quen thêm", type: "A" },
      { text: "Có thể, nếu có việc cần", type: "B" },
      { text: "Hiếm khi", type: "C" },
      { text: "Không bao giờ", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn cảm thấy thế nào sau buổi gặp mặt đông người?",
    options: [
      { text: "Tràn đầy năng lượng", type: "A" },
      { text: "Vui vẻ, satisfied", type: "B" },
      { text: "Mệt mỏi, cần nghỉ ngơi", type: "C" },
      { text: "Kiệt sức, cần ở một mình", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Về việc giữ eye contact, bạn?",
    options: [
      { text: "Tự nhiên, nhìn thẳng vào mắt", type: "A" },
      { text: "Cố gắng duy trì", type: "B" },
      { text: "Hay nhìn đi chỗ khác", type: "C" },
      { text: "Rất khó khăn", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Khi được khen, bạn phản ứng thế nào?",
    options: [
      { text: "Cảm ơn và khen lại họ", type: "A" },
      { text: "Cảm ơn, hơi ngại", type: "B" },
      { text: "Không biết nói gì, lúng túng", type: "C" },
      { text: "Không thoải mái, muốn đổi chủ đề", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Mục đích chính khi gặp mặt xã hội của bạn?",
    options: [
      { text: "Networking, mở rộng quan hệ", type: "A" },
      { text: "Gặp bạn bè, vui vẻ", type: "B" },
      { text: "Bắt buộc phải đi", type: "C" },
      { text: "Không có mục đích, hiếm khi đi", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Bậc thầy giao tiếp",
    emoji: "🌟",
    description: "Bạn là người giao tiếp xuất sắc! Tự tin, chủ động, biết cách tạo ấn tượng và xây dựng mối quan hệ. Gặp mặt xã hội là sân chơi của bạn.",
    traits: ["Tự tin", "Chủ động", "Kết nối giỏi", "Năng lượng cao"],
    strengths: ["Nhiều quan hệ", "Networking tốt", "Được mọi người nhớ"],
    weaknesses: ["Có thể overwhelming", "Đôi khi thiếu sâu sắc"],
    tips: ["Chất lượng hơn số lượng", "Lắng nghe nhiều hơn nói"],
  },
  B: {
    type: "B",
    title: "Người giao tiếp cân bằng",
    emoji: "🤝",
    description: "Bạn giao tiếp xã hội một cách cân bằng và tự nhiên. Không quá chủ động cũng không quá thụ động, bạn tạo được ấn tượng tốt mà không cần cố gắng nhiều.",
    traits: ["Cân bằng", "Tự nhiên", "Dễ gần", "Linh hoạt"],
    strengths: ["Được yêu mến", "Không gây áp lực", "Kết nối tự nhiên"],
    weaknesses: ["Có thể bỏ lỡ cơ hội", "Đôi khi thiếu chủ động"],
    tips: ["Thử chủ động hơn khi cần", "Mở rộng vùng comfort zone"],
  },
  C: {
    type: "C",
    title: "Người giao tiếp nhạy cảm",
    emoji: "🌷",
    description: "Giao tiếp xã hội là thử thách với bạn. Bạn cần thời gian để warm up và thoải mái hơn với môi trường mới và người lạ.",
    traits: ["Nhạy cảm", "Cần thời gian", "Kín đáo", "Quan sát"],
    strengths: ["Quan sát tốt", "Kết nối sâu khi đã quen", "Chân thành"],
    weaknesses: ["Khó khăn ban đầu", "Có thể bị hiểu nhầm"],
    tips: ["Tập luyện small talk", "Chuẩn bị trước một số chủ đề"],
  },
  D: {
    type: "D",
    title: "Người hướng nội sâu sắc",
    emoji: "🌙",
    description: "Giao tiếp xã hội tiêu tốn năng lượng của bạn. Bạn thích những buổi gặp mặt nhỏ, riêng tư hơn là đám đông. Và điều đó hoàn toàn bình thường.",
    traits: ["Hướng nội", "Thích riêng tư", "Sâu sắc", "Độc lập"],
    strengths: ["Tự hiểu mình", "Không giả tạo", "Quan hệ chất lượng"],
    weaknesses: ["Ít quan hệ", "Có thể bỏ lỡ cơ hội"],
    tips: ["Thử tham gia events nhỏ", "Một buổi gặp mặt tốt hơn không buổi nào"],
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
