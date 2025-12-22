// Trắc nghiệm Phân tích
// Kiểm tra khả năng phân tích và xử lý thông tin của bạn

export const questions = [
  {
    id: 1,
    question: "Doanh số công ty tháng 1: 100 triệu, tháng 2: 120 triệu, tháng 3: 150 triệu. Xu hướng là gì?",
    options: [
      { text: "Tăng trưởng tích cực", type: "A" },
      { text: "Giảm sút", type: "D" },
      { text: "Ổn định", type: "C" },
      { text: "Không xác định được", type: "B" },
    ],
  },
  {
    id: 2,
    question: "Một công ty có 100 nhân viên, 60% là nam. Sau khi tuyển thêm 50 nhân viên (40% là nam), tỷ lệ nam trong công ty là?",
    options: [
      { text: "53.3%", type: "A" },
      { text: "50%", type: "B" },
      { text: "60%", type: "C" },
      { text: "40%", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Biểu đồ cho thấy: Sản phẩm A bán 1000 cái, B bán 800 cái, C bán 1200 cái. Sản phẩm nào chiếm tỷ trọng cao nhất?",
    options: [
      { text: "C", type: "A" },
      { text: "A", type: "B" },
      { text: "B", type: "D" },
      { text: "Cả 3 bằng nhau", type: "C" },
    ],
  },
  {
    id: 4,
    question: "Chi phí sản xuất tăng 20%, giá bán không đổi. Lợi nhuận sẽ:",
    options: [
      { text: "Giảm", type: "A" },
      { text: "Tăng", type: "D" },
      { text: "Không đổi", type: "C" },
      { text: "Phụ thuộc vào số lượng bán", type: "B" },
    ],
  },
  {
    id: 5,
    question: "Số liệu: Năm 2020 có 1000 khách, 2021 có 1500 khách, 2022 có 2250 khách. Tỷ lệ tăng trưởng hàng năm trung bình là?",
    options: [
      { text: "50%", type: "A" },
      { text: "75%", type: "B" },
      { text: "100%", type: "C" },
      { text: "25%", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Một cuộc khảo sát 100 người: 70 thích A, 50 thích B, 30 thích cả A và B. Bao nhiêu người thích ít nhất một trong hai?",
    options: [
      { text: "90", type: "A" },
      { text: "120", type: "D" },
      { text: "100", type: "B" },
      { text: "80", type: "C" },
    ],
  },
  {
    id: 7,
    question: "Giá cổ phiếu: Thứ 2 là 100k, Thứ 3 tăng 10%, Thứ 4 giảm 10%. Giá Thứ 4 là?",
    options: [
      { text: "99k", type: "A" },
      { text: "100k", type: "B" },
      { text: "90k", type: "C" },
      { text: "110k", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Báo cáo cho thấy: Team A hoàn thành 90% mục tiêu, Team B hoàn thành 85%, Team C hoàn thành 95%. Team nào cần cải thiện nhất?",
    options: [
      { text: "Team B", type: "A" },
      { text: "Team A", type: "B" },
      { text: "Team C", type: "D" },
      { text: "Cả 3 team đều tốt", type: "C" },
    ],
  },
  {
    id: 9,
    question: "Dữ liệu khách hàng: 40% độ tuổi 20-30, 35% độ tuổi 30-40, 25% trên 40 tuổi. Chiến lược marketing nên tập trung vào nhóm nào?",
    options: [
      { text: "20-30 tuổi (chiếm đa số)", type: "A" },
      { text: "Trên 40 tuổi (ít cạnh tranh)", type: "B" },
      { text: "Cả 3 nhóm như nhau", type: "D" },
      { text: "30-40 tuổi", type: "C" },
    ],
  },
  {
    id: 10,
    question: "Tỷ lệ lỗi sản phẩm: Máy A 2%, Máy B 5%, Máy C 3%. Để giảm lỗi, cần kiểm tra máy nào đầu tiên?",
    options: [
      { text: "Máy B", type: "A" },
      { text: "Máy A", type: "D" },
      { text: "Máy C", type: "B" },
      { text: "Kiểm tra cả 3 cùng lúc", type: "C" },
    ],
  },
  {
    id: 11,
    question: "Ngân sách: 40% cho lương, 30% cho vật tư, 20% cho marketing, 10% khác. Tổng ngân sách 1 tỷ. Chi phí lương là?",
    options: [
      { text: "400 triệu", type: "A" },
      { text: "300 triệu", type: "B" },
      { text: "200 triệu", type: "C" },
      { text: "100 triệu", type: "D" },
    ],
  },
  {
    id: 12,
    question: "So sánh 2 phương án: A có chi phí 100tr, lợi nhuận 150tr. B có chi phí 80tr, lợi nhuận 130tr. Phương án nào có ROI cao hơn?",
    options: [
      { text: "B (ROI = 62.5%)", type: "A" },
      { text: "A (ROI = 50%)", type: "B" },
      { text: "Cả 2 bằng nhau", type: "C" },
      { text: "Không đủ dữ liệu", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Chuyên Gia Phân Tích",
    emoji: "📊",
    description: "Bạn có khả năng phân tích dữ liệu xuất sắc! Bạn dễ dàng đọc hiểu số liệu, phát hiện xu hướng và đưa ra kết luận chính xác.",
    traits: ["Phân tích sắc bén", "Đọc dữ liệu giỏi", "Tư duy số liệu mạnh", "Ra quyết định dựa trên data"],
    strengths: ["Phân tích kinh doanh", "Đánh giá hiệu quả", "Dự báo xu hướng"],
    weaknesses: ["Đôi khi quá phụ thuộc vào số liệu", "Có thể bỏ qua yếu tố định tính"],
    tips: ["Học thêm về Data Analytics", "Kết hợp phân tích định lượng và định tính"],
  },
  B: {
    type: "B",
    title: "Người Phân Tích Tốt",
    emoji: "📈",
    description: "Bạn có khả năng phân tích khá tốt, có thể xử lý dữ liệu và đưa ra nhận định hợp lý.",
    traits: ["Cẩn thận", "Có phương pháp", "Hiểu số liệu cơ bản", "Kiên nhẫn"],
    strengths: ["Đọc báo cáo", "So sánh dữ liệu", "Phát hiện vấn đề"],
    weaknesses: ["Cần thêm kỹ năng với dữ liệu phức tạp", "Đôi khi chậm ra kết luận"],
    tips: ["Luyện tập với Excel/Google Sheets", "Học cơ bản về thống kê"],
  },
  C: {
    type: "C",
    title: "Người Đang Học Phân Tích",
    emoji: "📝",
    description: "Khả năng phân tích của bạn ở mức cơ bản. Với sự rèn luyện, bạn có thể cải thiện đáng kể.",
    traits: ["Có tiềm năng", "Cần hướng dẫn", "Đang phát triển", "Chịu khó học"],
    strengths: ["Không sợ số liệu", "Sẵn sàng học", "Kiên trì"],
    weaknesses: ["Còn nhiều lỗ hổng", "Dễ nhầm lẫn khi dữ liệu phức tạp"],
    tips: ["Bắt đầu từ bài tập đơn giản", "Tham gia khóa học phân tích cơ bản"],
  },
  D: {
    type: "D",
    title: "Người Cần Bổ Sung Kỹ Năng",
    emoji: "🌱",
    description: "Phân tích dữ liệu chưa phải thế mạnh của bạn, nhưng đây là kỹ năng hoàn toàn có thể học được!",
    traits: ["Thiên về trực giác", "Cần nền tảng số", "Tiềm năng ẩn", "Tư duy khác biệt"],
    strengths: ["Nhìn vấn đề từ góc độ khác", "Không bị gò bó bởi số liệu"],
    weaknesses: ["Khó đọc hiểu dữ liệu", "Dễ đưa ra kết luận sai"],
    tips: ["Học cơ bản về toán và thống kê", "Bắt đầu với các công cụ trực quan", "Tìm mentor hỗ trợ"],
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
