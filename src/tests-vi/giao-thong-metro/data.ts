// Phong cách đi metro
// Khám phá phong cách đi tàu điện ngầm/metro của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn đã đi metro/tàu điện chưa?",
    options: [
      { text: "Rồi, đi thường xuyên (ở nước ngoài hoặc metro mới)", type: "A" },
      { text: "Đã thử một vài lần", type: "B" },
      { text: "Chưa, nhưng rất muốn thử", type: "C" },
      { text: "Chưa và không quan tâm lắm", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn nghĩ gì về tuyến metro mới ở Việt Nam?",
    options: [
      { text: "Rất hào hứng, sẽ đi ngay khi có thể", type: "A" },
      { text: "Quan tâm, chờ xem tình hình", type: "B" },
      { text: "Tò mò nhưng chưa biết có tiện không", type: "C" },
      { text: "Không ảnh hưởng đến mình", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Trên metro, bạn sẽ làm gì?",
    options: [
      { text: "Nghe nhạc, podcast thư giãn", type: "A" },
      { text: "Làm việc, check email", type: "B" },
      { text: "Ngắm cảnh, quan sát mọi người", type: "C" },
      { text: "Chỉ đứng/ngồi chờ đến trạm", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn sẽ ngồi ở đâu trên metro?",
    options: [
      { text: "Gần cửa, tiện xuống", type: "A" },
      { text: "Góc yên tĩnh, có chỗ dựa", type: "B" },
      { text: "Cạnh cửa sổ, ngắm cảnh", type: "C" },
      { text: "Đâu cũng được", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Điều bạn kỳ vọng nhất ở metro?",
    options: [
      { text: "Nhanh, đúng giờ, không kẹt xe", type: "A" },
      { text: "Tiện lợi, kết nối nhiều điểm", type: "B" },
      { text: "Mát mẻ, sạch sẽ, văn minh", type: "C" },
      { text: "Giá vé hợp lý", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn sẽ mua vé metro như thế nào?",
    options: [
      { text: "Thẻ điện tử, thanh toán không tiền mặt", type: "A" },
      { text: "Vé tháng nếu đi thường xuyên", type: "B" },
      { text: "Mua vé lẻ từng chuyến", type: "C" },
      { text: "Chưa biết, sẽ tìm hiểu sau", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Metro sẽ thay thế phương tiện nào của bạn?",
    options: [
      { text: "Xe máy cho tuyến đường dài", type: "A" },
      { text: "Xe bus, taxi cho tuyến phù hợp", type: "B" },
      { text: "Không thay thế, chỉ dùng thêm", type: "C" },
      { text: "Không thay thế gì cả", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn lo ngại gì khi đi metro?",
    options: [
      { text: "Không lo ngại, rất an toàn", type: "A" },
      { text: "Sợ đông, chen chúc giờ cao điểm", type: "B" },
      { text: "Chưa quen, sợ đi lạc", type: "C" },
      { text: "Không biết, chưa nghĩ đến", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Giờ cao điểm trên metro, bạn sẽ?",
    options: [
      { text: "Đi sớm hoặc muộn hơn để tránh", type: "A" },
      { text: "Chấp nhận đông, vẫn đi", type: "B" },
      { text: "Đợi chuyến sau ít người", type: "C" },
      { text: "Chuyển sang phương tiện khác", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn sẽ giới thiệu metro cho ai?",
    options: [
      { text: "Tất cả mọi người nên thử", type: "A" },
      { text: "Người đi làm, sinh viên", type: "B" },
      { text: "Du khách, người mới", type: "C" },
      { text: "Không giới thiệu, tùy người", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Metro sẽ thay đổi cuộc sống bạn thế nào?",
    options: [
      { text: "Tiết kiệm thời gian đi lại", type: "A" },
      { text: "Mở rộng phạm vi di chuyển", type: "B" },
      { text: "Chưa biết, cần thử mới rõ", type: "C" },
      { text: "Không thay đổi gì nhiều", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bạn mong muốn điều gì ở hệ thống metro VN?",
    options: [
      { text: "Mở rộng nhiều tuyến hơn", type: "A" },
      { text: "Kết nối tốt với xe bus, grab", type: "B" },
      { text: "Giá vé hợp lý cho mọi người", type: "C" },
      { text: "Hoạt động ổn định, đúng giờ", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Tín đồ metro hiện đại",
    emoji: "🚇",
    description: "Bạn là người yêu thích giao thông hiện đại và sẵn sàng đón nhận metro. Bạn thấy được tiềm năng của phương tiện này trong việc thay đổi cuộc sống đô thị.",
    traits: ["Hiện đại", "Tiên phong", "Thích nghi nhanh", "Có tầm nhìn"],
    strengths: ["Sẵn sàng thay đổi", "Biết tận dụng tiện ích mới", "Góp phần phát triển đô thị"],
    weaknesses: ["Có thể kỳ vọng quá cao", "Thất vọng nếu dịch vụ chưa tốt"],
    tips: ["Kiên nhẫn với hệ thống mới", "Đóng góp feedback để cải thiện"],
  },
  B: {
    type: "B",
    title: "Người quan sát thực tế",
    emoji: "🚊",
    description: "Bạn quan tâm đến metro nhưng cần thấy hiệu quả thực tế trước khi cam kết. Bạn là người thực tế và biết cân nhắc.",
    traits: ["Thực tế", "Cân nhắc", "Quan sát", "Thông minh"],
    strengths: ["Không vội vàng quyết định", "Đánh giá khách quan", "Biết khi nào nên thay đổi"],
    weaknesses: ["Có thể bỏ lỡ cơ hội trải nghiệm sớm", "Chờ đợi quá lâu"],
    tips: ["Thử đi một vài chuyến", "Trải nghiệm rồi đánh giá"],
  },
  C: {
    type: "C",
    title: "Người tò mò khám phá",
    emoji: "🚈",
    description: "Bạn tò mò về metro và muốn khám phá nhưng còn nhiều thắc mắc. Bạn cần thêm thông tin và trải nghiệm.",
    traits: ["Tò mò", "Cởi mở", "Muốn học hỏi", "Cẩn thận"],
    strengths: ["Sẵn sàng thử điều mới", "Biết đặt câu hỏi", "Tìm hiểu kỹ"],
    weaknesses: ["Có thể ngại thử lần đầu", "Cần người hướng dẫn"],
    tips: ["Mạnh dạn thử đi một lần", "Tìm hiểu trước trên mạng"],
  },
  D: {
    type: "D",
    title: "Người trung thành với phương tiện cũ",
    emoji: "🛵",
    description: "Bạn chưa thấy metro cần thiết với cuộc sống hiện tại. Bạn đã quen với phương tiện hiện có và chưa muốn thay đổi.",
    traits: ["Truyền thống", "Ổn định", "Thói quen", "Độc lập"],
    strengths: ["Không phụ thuộc hệ thống mới", "Tự chủ di chuyển", "Quen thuộc đường sá"],
    weaknesses: ["Có thể bỏ lỡ tiện ích mới", "Khó thích nghi nếu cần"],
    tips: ["Thử trải nghiệm metro một lần", "Có thể bạn sẽ thích"],
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
