// Cách đặt mục tiêu
// Khám phá phong cách thiết lập và theo đuổi mục tiêu của bạn

export const questions = [
  {
    id: 1,
    question: "Khi đầu năm mới, bạn thường:",
    options: [
      { text: "Lập danh sách mục tiêu chi tiết với deadline cụ thể", type: "A" },
      { text: "Có vài mục tiêu chính trong đầu, không viết ra", type: "B" },
      { text: "Nghĩ về những điều muốn làm nhưng không đặt mục tiêu cụ thể", type: "C" },
      { text: "Không đặt mục tiêu gì, sống tùy nghi", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Mục tiêu của bạn thường là:",
    options: [
      { text: "Cụ thể, đo lường được, có thời hạn rõ ràng", type: "A" },
      { text: "Rõ ràng về hướng đi nhưng linh hoạt về cách đạt", type: "B" },
      { text: "Mơ hồ, kiểu 'muốn tốt hơn', 'muốn giàu hơn'", type: "C" },
      { text: "Không có mục tiêu cố định", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi mục tiêu quá lớn, bạn:",
    options: [
      { text: "Chia nhỏ thành các bước cụ thể để thực hiện", type: "A" },
      { text: "Bắt đầu làm và điều chỉnh dần", type: "B" },
      { text: "Cảm thấy choáng ngợp và trì hoãn", type: "C" },
      { text: "Bỏ qua vì thấy không thể đạt được", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn theo dõi tiến độ mục tiêu như thế nào?",
    options: [
      { text: "Có hệ thống tracking chi tiết (app, bảng biểu)", type: "A" },
      { text: "Tự đánh giá định kỳ trong đầu", type: "B" },
      { text: "Thỉnh thoảng nhớ ra và check", type: "C" },
      { text: "Không theo dõi", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi gặp trở ngại trên đường đến mục tiêu, bạn:",
    options: [
      { text: "Phân tích vấn đề và tìm cách vượt qua", type: "A" },
      { text: "Điều chỉnh cách tiếp cận hoặc mục tiêu", type: "B" },
      { text: "Cảm thấy nản và chậm lại", type: "C" },
      { text: "Bỏ cuộc và chuyển sang việc khác", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Mục tiêu dài hạn (5-10 năm) của bạn:",
    options: [
      { text: "Rất rõ ràng và đã có kế hoạch từng bước", type: "A" },
      { text: "Có hướng đi chung nhưng chưa chi tiết", type: "B" },
      { text: "Mơ hồ, chưa nghĩ đến", type: "C" },
      { text: "Không tin vào việc lập kế hoạch dài hạn", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn chia sẻ mục tiêu của mình với ai?",
    options: [
      { text: "Chia sẻ rộng rãi để có sự hỗ trợ và accountability", type: "A" },
      { text: "Chỉ chia sẻ với người thân thiết", type: "B" },
      { text: "Giữ riêng cho bản thân", type: "C" },
      { text: "Không có mục tiêu cụ thể để chia sẻ", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Khi đạt được mục tiêu, bạn:",
    options: [
      { text: "Ăn mừng rồi lập mục tiêu mới ngay", type: "A" },
      { text: "Tận hưởng thành quả một thời gian rồi tiếp tục", type: "B" },
      { text: "Không có cảm giác gì đặc biệt", type: "C" },
      { text: "Hiếm khi đạt được mục tiêu đã đặt", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Tỷ lệ mục tiêu bạn thực sự đạt được là:",
    options: [
      { text: "Hơn 80% - Hầu hết đều đạt", type: "A" },
      { text: "50-80% - Đạt được nhiều mục tiêu quan trọng", type: "B" },
      { text: "20-50% - Chỉ đạt được một số", type: "C" },
      { text: "Dưới 20% hoặc không đặt mục tiêu", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Điều gì quan trọng nhất khi đặt mục tiêu với bạn?",
    options: [
      { text: "Tính khả thi và có kế hoạch rõ ràng", type: "A" },
      { text: "Phù hợp với giá trị và mong muốn của bản thân", type: "B" },
      { text: "Có cảm hứng, dù có thể không thực tế lắm", type: "C" },
      { text: "Không quan trọng, cuộc sống khó đoán trước", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn cảm thấy thế nào về việc có deadline?",
    options: [
      { text: "Cần thiết và giúp tôi làm việc hiệu quả", type: "A" },
      { text: "Hữu ích nhưng cần linh hoạt", type: "B" },
      { text: "Áp lực và thường khó đạt được", type: "C" },
      { text: "Không thích deadline", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Khi nhìn lại năm qua, bạn:",
    options: [
      { text: "Đánh giá chi tiết những gì đã đạt được và chưa đạt", type: "A" },
      { text: "Nhớ lại những thành tựu chính", type: "B" },
      { text: "Không nhớ mình đã đặt mục tiêu gì", type: "C" },
      { text: "Không có gì đặc biệt để đánh giá", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người Lập Kế Hoạch Chiến Lược",
    emoji: "🎯",
    description: "Bạn là bậc thầy trong việc đặt và đạt mục tiêu! Bạn có hệ thống rõ ràng, kỷ luật cao và tỷ lệ thành công ấn tượng.",
    traits: ["Có hệ thống", "Kỷ luật", "Kiên trì", "Hướng mục tiêu"],
    strengths: ["Đạt được mục tiêu đều đặn", "Quản lý thời gian tốt", "Có tầm nhìn dài hạn"],
    weaknesses: ["Có thể quá cứng nhắc", "Đôi khi stress vì mục tiêu"],
    tips: ["Cho phép mình linh hoạt hơn", "Tận hưởng quá trình, không chỉ kết quả"],
  },
  B: {
    type: "B",
    title: "Người Đặt Mục Tiêu Linh Hoạt",
    emoji: "🧭",
    description: "Bạn có mục tiêu rõ ràng nhưng linh hoạt trong cách đạt được. Bạn cân bằng giữa kế hoạch và thích ứng với hoàn cảnh.",
    traits: ["Linh hoạt", "Thực tế", "Cân bằng", "Thích ứng"],
    strengths: ["Điều chỉnh tốt khi cần", "Không quá stress", "Đạt được mục tiêu quan trọng"],
    weaknesses: ["Đôi khi thiếu chi tiết", "Có thể dễ bị phân tâm"],
    tips: ["Thêm một chút cấu trúc", "Tracking tiến độ thường xuyên hơn"],
  },
  C: {
    type: "C",
    title: "Người Mơ Mộng Chưa Hành Động",
    emoji: "💭",
    description: "Bạn có những mong muốn nhưng chưa biến chúng thành mục tiêu cụ thể. Bạn cần học cách lập kế hoạch để biến ước mơ thành hiện thực.",
    traits: ["Mơ mộng", "Thiếu kế hoạch", "Hay trì hoãn", "Cần động lực"],
    strengths: ["Có khát vọng", "Sáng tạo trong ý tưởng"],
    weaknesses: ["Khó hoàn thành việc đã bắt đầu", "Thiếu kỷ luật"],
    tips: ["Học phương pháp SMART goal", "Bắt đầu với mục tiêu nhỏ", "Tìm accountability partner"],
  },
  D: {
    type: "D",
    title: "Người Sống Tùy Nghi",
    emoji: "🌊",
    description: "Bạn không đặt mục tiêu và sống theo dòng chảy cuộc sống. Điều này có thể mang lại tự do nhưng cũng có thể thiếu định hướng.",
    traits: ["Tự do", "Không ràng buộc", "Tùy hứng", "Hiện tại"],
    strengths: ["Ít stress về mục tiêu", "Thoải mái"],
    weaknesses: ["Thiếu định hướng", "Có thể bỏ lỡ tiềm năng"],
    tips: ["Thử đặt 1 mục tiêu nhỏ để bắt đầu", "Tìm hiểu điều gì thực sự quan trọng với mình"],
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
