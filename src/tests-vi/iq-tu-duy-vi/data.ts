// Trắc nghiệm Tư duy
// Kiểm tra khả năng tư duy tổng hợp và phản biện của bạn

export const questions = [
  {
    id: 1,
    question: "Khi gặp một vấn đề phức tạp, bước đầu tiên bạn thường làm gì?",
    options: [
      { text: "Phân tích vấn đề thành các phần nhỏ hơn", type: "A" },
      { text: "Tìm kiếm giải pháp từ người khác", type: "B" },
      { text: "Thử nghiệm ngay một giải pháp", type: "C" },
      { text: "Chờ đợi xem vấn đề có tự giải quyết không", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Nếu A → B và B → C, thì kết luận nào sau đây đúng?",
    options: [
      { text: "A → C", type: "A" },
      { text: "C → A", type: "D" },
      { text: "B → A", type: "C" },
      { text: "Không thể kết luận", type: "B" },
    ],
  },
  {
    id: 3,
    question: "Một người nói: 'Tôi luôn nói dối.' Câu nói này có vấn đề gì?",
    options: [
      { text: "Đây là nghịch lý, không thể đúng hay sai hoàn toàn", type: "A" },
      { text: "Câu nói hoàn toàn đúng", type: "D" },
      { text: "Câu nói hoàn toàn sai", type: "C" },
      { text: "Không có vấn đề gì", type: "B" },
    ],
  },
  {
    id: 4,
    question: "Để giải quyết xung đột giữa hai quan điểm trái ngược, cách tiếp cận tốt nhất là gì?",
    options: [
      { text: "Tìm hiểu căn nguyên của mỗi quan điểm trước", type: "A" },
      { text: "Chọn quan điểm của đa số", type: "B" },
      { text: "Bỏ qua cả hai quan điểm", type: "D" },
      { text: "Chọn quan điểm của người có quyền lực hơn", type: "C" },
    ],
  },
  {
    id: 5,
    question: "Một nghiên cứu cho thấy người uống cà phê sống lâu hơn. Kết luận 'cà phê giúp sống lâu' có đáng tin không?",
    options: [
      { text: "Chưa đủ cơ sở vì có thể có yếu tố khác", type: "A" },
      { text: "Hoàn toàn đáng tin", type: "D" },
      { text: "Hoàn toàn không đáng tin", type: "C" },
      { text: "Tùy thuộc vào ai nói", type: "B" },
    ],
  },
  {
    id: 6,
    question: "Khi đọc tin tức, bạn thường làm gì?",
    options: [
      { text: "Kiểm tra nguồn và tìm thông tin từ nhiều nguồn khác", type: "A" },
      { text: "Tin nếu từ nguồn quen thuộc", type: "B" },
      { text: "Chia sẻ ngay nếu thấy hấp dẫn", type: "D" },
      { text: "Không quan tâm đến nguồn", type: "C" },
    ],
  },
  {
    id: 7,
    question: "Bạn có 3 hộp: một hộp toàn bi xanh, một hộp toàn bi đỏ, một hộp hỗn hợp. Nhãn dán sai hết. Lấy 1 bi từ 1 hộp, bạn có thể biết nội dung cả 3 hộp không?",
    options: [
      { text: "Có, nếu lấy từ hộp ghi 'hỗn hợp'", type: "A" },
      { text: "Không thể biết với 1 lần lấy", type: "C" },
      { text: "Có, nếu lấy từ hộp ghi 'xanh'", type: "B" },
      { text: "Phải lấy từ cả 3 hộp", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Khi ai đó đưa ra lập luận, điều quan trọng nhất cần xem xét là gì?",
    options: [
      { text: "Bằng chứng và logic của lập luận", type: "A" },
      { text: "Uy tín của người nói", type: "B" },
      { text: "Số người đồng ý", type: "C" },
      { text: "Cảm xúc trong cách trình bày", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Một công ty thành công nhờ quảng cáo tốt. Có phải quảng cáo tốt là yếu tố duy nhất?",
    options: [
      { text: "Không, có thể có nhiều yếu tố khác như sản phẩm, thời điểm", type: "A" },
      { text: "Có, quảng cáo là tất cả", type: "D" },
      { text: "Chỉ có sản phẩm mới quan trọng", type: "B" },
      { text: "May mắn là yếu tố duy nhất", type: "C" },
    ],
  },
  {
    id: 10,
    question: "Khi cần đưa ra quyết định quan trọng, bạn thường:",
    options: [
      { text: "Liệt kê ưu nhược điểm của từng lựa chọn", type: "A" },
      { text: "Theo cảm tính", type: "C" },
      { text: "Hỏi ý kiến người khác rồi làm theo", type: "B" },
      { text: "Trì hoãn đến khi không thể trì hoãn", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Trong một cuộc tranh luận, người chiến thắng là người:",
    options: [
      { text: "Có lập luận chặt chẽ và bằng chứng thuyết phục", type: "A" },
      { text: "Nói to và quyết liệt nhất", type: "D" },
      { text: "Có nhiều người ủng hộ nhất", type: "B" },
      { text: "Nói lời cuối cùng", type: "C" },
    ],
  },
  {
    id: 12,
    question: "Khi bạn mắc sai lầm, phản ứng tốt nhất là gì?",
    options: [
      { text: "Nhận lỗi, phân tích nguyên nhân và rút kinh nghiệm", type: "A" },
      { text: "Đổ lỗi cho hoàn cảnh", type: "D" },
      { text: "Quên đi và tiếp tục", type: "B" },
      { text: "Tự trách bản thân mãi", type: "C" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Nhà Tư Duy Xuất Sắc",
    emoji: "🧠",
    description: "Bạn có khả năng tư duy phản biện và phân tích vượt trội! Bạn không dễ bị thao túng bởi thông tin sai lệch và luôn tìm kiếm sự thật.",
    traits: ["Tư duy phản biện mạnh", "Phân tích logic", "Khách quan", "Không dễ bị thao túng"],
    strengths: ["Đưa ra quyết định sáng suốt", "Phát hiện lỗi logic", "Giải quyết vấn đề hiệu quả"],
    weaknesses: ["Đôi khi quá hoài nghi", "Có thể chậm ra quyết định"],
    tips: ["Cân bằng giữa phân tích và trực giác", "Chia sẻ kỹ năng tư duy với người khác"],
  },
  B: {
    type: "B",
    title: "Người Tư Duy Cân Bằng",
    emoji: "⚖️",
    description: "Bạn có khả năng tư duy tốt, biết kết hợp giữa logic và kinh nghiệm để đưa ra quyết định hợp lý.",
    traits: ["Cân bằng", "Linh hoạt", "Thực tế", "Biết lắng nghe"],
    strengths: ["Làm việc nhóm hiệu quả", "Thích nghi tốt", "Giao tiếp tốt"],
    weaknesses: ["Đôi khi thiếu quyết đoán", "Có thể bị ảnh hưởng bởi đám đông"],
    tips: ["Rèn luyện tư duy độc lập hơn", "Kiểm chứng thông tin trước khi tin"],
  },
  C: {
    type: "C",
    title: "Người Cần Phát Triển Tư Duy",
    emoji: "📈",
    description: "Bạn có tiềm năng tư duy nhưng cần rèn luyện thêm kỹ năng phản biện và phân tích logic.",
    traits: ["Có tiềm năng", "Cần hướng dẫn", "Đang học hỏi", "Ham hiểu biết"],
    strengths: ["Sẵn sàng học", "Không ngại thay đổi", "Có trực giác"],
    weaknesses: ["Dễ tin thông tin không kiểm chứng", "Thiếu hệ thống trong suy nghĩ"],
    tips: ["Học cách đặt câu hỏi", "Đọc sách về tư duy phản biện"],
  },
  D: {
    type: "D",
    title: "Người Cần Rèn Luyện Nhiều",
    emoji: "🌱",
    description: "Tư duy phản biện chưa phải điểm mạnh của bạn, nhưng với sự kiên trì, bạn có thể cải thiện đáng kể.",
    traits: ["Cần động lực", "Tin người dễ dàng", "Theo cảm tính", "Tiềm năng ẩn giấu"],
    strengths: ["Thoải mái", "Không căng thẳng", "Hòa đồng"],
    weaknesses: ["Dễ bị thao túng", "Khó phân biệt thông tin đúng sai"],
    tips: ["Bắt đầu đặt câu hỏi 'Tại sao?'", "Học cách kiểm tra nguồn thông tin", "Tìm mentor hướng dẫn"],
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
