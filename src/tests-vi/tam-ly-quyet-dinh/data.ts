// Cách ra quyết định
// Khám phá phong cách ra quyết định đặc trưng của bạn

export const questions = [
  {
    id: 1,
    question: "Khi chọn nhà hàng ăn tối với bạn bè, bạn thường:",
    options: [
      { text: "Nghiên cứu review và đánh giá trước khi chọn", type: "A" },
      { text: "Chọn nhanh theo cảm hứng hoặc đề xuất của bạn bè", type: "B" },
      { text: "Hỏi ý kiến mọi người rồi mới quyết định", type: "C" },
      { text: "Để người khác chọn vì không biết chọn gì", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Khi phải quyết định có nên nhảy việc hay không, bạn:",
    options: [
      { text: "Liệt kê ưu nhược điểm của cả hai lựa chọn", type: "A" },
      { text: "Tin vào trực giác và cảm nhận của mình", type: "B" },
      { text: "Tham khảo ý kiến gia đình, bạn bè, đồng nghiệp", type: "C" },
      { text: "Trì hoãn quyết định vì sợ sai", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi mua một món đồ đắt tiền, bạn:",
    options: [
      { text: "So sánh giá cả, tính năng giữa nhiều sản phẩm", type: "A" },
      { text: "Mua ngay nếu thấy thích và đủ tiền", type: "B" },
      { text: "Hỏi ý kiến người đã dùng sản phẩm đó", type: "C" },
      { text: "Cân nhắc rất lâu rồi cuối cùng không mua", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Trong cuộc họp cần đưa ra quyết định, bạn:",
    options: [
      { text: "Phân tích dữ liệu và đề xuất phương án tối ưu", type: "A" },
      { text: "Đưa ra quyết định nhanh chóng dựa trên kinh nghiệm", type: "B" },
      { text: "Lắng nghe tất cả ý kiến trước khi kết luận", type: "C" },
      { text: "Tránh né và để người khác quyết định", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi chọn hướng đi cho sự nghiệp, bạn:",
    options: [
      { text: "Nghiên cứu xu hướng thị trường và lập kế hoạch dài hạn", type: "A" },
      { text: "Theo đuổi đam mê và điều mình yêu thích", type: "B" },
      { text: "Nghe theo lời khuyên của người đi trước", type: "C" },
      { text: "Không có kế hoạch cụ thể, đến đâu hay đến đó", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi phát hiện mình đã đưa ra quyết định sai, bạn:",
    options: [
      { text: "Phân tích nguyên nhân và điều chỉnh ngay lập tức", type: "A" },
      { text: "Chấp nhận sai lầm và tìm cách khắc phục", type: "B" },
      { text: "Tìm người để tham khảo cách giải quyết", type: "C" },
      { text: "Tự trách bản thân và lo lắng mãi", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Khi có hai cơ hội tốt như nhau, bạn:",
    options: [
      { text: "Phân tích sâu hơn để tìm ra điểm khác biệt", type: "A" },
      { text: "Chọn cái nào cảm thấy đúng hơn", type: "B" },
      { text: "Hỏi ý kiến người mình tin tưởng", type: "C" },
      { text: "Bỏ lỡ cả hai vì không quyết định được", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Thời gian bạn thường cần để đưa ra quyết định quan trọng:",
    options: [
      { text: "Vừa đủ để phân tích, không quá nhanh hay quá chậm", type: "A" },
      { text: "Rất nhanh, tin vào bản năng", type: "B" },
      { text: "Khá lâu vì cần tham khảo nhiều nguồn", type: "C" },
      { text: "Rất lâu, đôi khi không bao giờ quyết định được", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi quyết định quan trọng bị người khác phản đối, bạn:",
    options: [
      { text: "Giải thích lý do và bảo vệ quan điểm nếu đúng", type: "A" },
      { text: "Vẫn làm theo ý mình nếu tin là đúng", type: "B" },
      { text: "Cân nhắc lại và có thể thay đổi", type: "C" },
      { text: "Từ bỏ quyết định để tránh xung đột", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn thường hối hận về các quyết định của mình không?",
    options: [
      { text: "Hiếm khi, vì đã suy nghĩ kỹ trước khi quyết định", type: "A" },
      { text: "Thỉnh thoảng, nhưng chấp nhận và đi tiếp", type: "B" },
      { text: "Khá thường xuyên, hay tự hỏi 'giá như'", type: "C" },
      { text: "Rất hay, luôn nghi ngờ quyết định của mình", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Khi đối mặt với quyết định có rủi ro, bạn:",
    options: [
      { text: "Đánh giá rủi ro và có kế hoạch dự phòng", type: "A" },
      { text: "Dám chấp nhận rủi ro để có cơ hội lớn", type: "B" },
      { text: "Thận trọng và thường chọn option an toàn", type: "C" },
      { text: "Tránh né mọi rủi ro bằng cách không quyết định", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Phong cách ra quyết định của bạn đã thay đổi theo thời gian chưa?",
    options: [
      { text: "Có, ngày càng có phương pháp và hiệu quả hơn", type: "A" },
      { text: "Vẫn giữ phong cách riêng nhưng linh hoạt hơn", type: "B" },
      { text: "Không thay đổi nhiều", type: "C" },
      { text: "Ngày càng khó quyết định hơn trước", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Nhà Phân Tích Chiến Lược",
    emoji: "📊",
    description: "Bạn là người ra quyết định dựa trên phân tích và dữ liệu. Bạn suy nghĩ thấu đáo, lập kế hoạch chi tiết và ít khi đưa ra quyết định vội vàng.",
    traits: ["Phân tích kỹ lưỡng", "Có hệ thống", "Thận trọng", "Dựa trên dữ liệu"],
    strengths: ["Quyết định chính xác", "Ít hối hận", "Có kế hoạch dự phòng"],
    weaknesses: ["Đôi khi quá chậm", "Có thể bỏ lỡ cơ hội", "Thiếu linh hoạt"],
    tips: ["Đặt deadline cho quyết định", "Cân bằng giữa phân tích và trực giác"],
  },
  B: {
    type: "B",
    title: "Người Hành Động Quyết Đoán",
    emoji: "⚡",
    description: "Bạn tin vào trực giác và kinh nghiệm. Bạn quyết định nhanh, dám chấp nhận rủi ro và không ngại sửa sai nếu cần.",
    traits: ["Quyết đoán", "Tự tin", "Linh hoạt", "Dám nghĩ dám làm"],
    strengths: ["Ra quyết định nhanh", "Nắm bắt cơ hội", "Không bị kẹt trong phân tích"],
    weaknesses: ["Đôi khi vội vàng", "Có thể bỏ qua chi tiết quan trọng"],
    tips: ["Dành chút thời gian suy nghĩ với quyết định lớn", "Thu thập thêm thông tin khi cần"],
  },
  C: {
    type: "C",
    title: "Người Tham Vấn Cộng Đồng",
    emoji: "👥",
    description: "Bạn coi trọng ý kiến của người khác khi ra quyết định. Bạn lắng nghe, cân nhắc nhiều góc độ trước khi kết luận.",
    traits: ["Lắng nghe", "Thận trọng", "Hài hòa", "Tập thể"],
    strengths: ["Quyết định được nhiều người ủng hộ", "Cân nhắc nhiều góc nhìn", "Tránh được sai lầm"],
    weaknesses: ["Phụ thuộc người khác", "Chậm ra quyết định", "Đôi khi mất chính kiến"],
    tips: ["Phát triển sự tự tin", "Biết khi nào cần tự quyết định", "Chọn lọc người để tham vấn"],
  },
  D: {
    type: "D",
    title: "Người Cần Phát Triển Kỹ Năng Quyết Định",
    emoji: "🌱",
    description: "Ra quyết định là thử thách với bạn. Bạn hay phân vân, sợ sai và có xu hướng trì hoãn hoặc tránh né.",
    traits: ["Hay phân vân", "Sợ rủi ro", "Thiếu tự tin", "Cần hỗ trợ"],
    strengths: ["Cẩn thận", "Ít hấp tấp", "Biết mình cần cải thiện"],
    weaknesses: ["Bỏ lỡ cơ hội", "Hay hối tiếc", "Phụ thuộc người khác"],
    tips: ["Bắt đầu với quyết định nhỏ", "Học chấp nhận rằng không có quyết định hoàn hảo", "Đặt deadline cho bản thân"],
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
