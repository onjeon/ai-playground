// Trắc nghiệm Nhận Dạng
// Kiểm tra khả năng nhận dạng hình ảnh, mẫu và đặc điểm của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn thấy một hình ảnh chớp nhoáng trong 1 giây. Bạn thường nhớ được gì?",
    options: [
      { text: "Màu sắc chủ đạo và bố cục tổng thể", type: "A" },
      { text: "Chi tiết nhỏ như chữ viết hoặc số", type: "B" },
      { text: "Khuôn mặt người hoặc biểu cảm", type: "C" },
      { text: "Không nhớ được nhiều, cần xem lại", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Khi gặp lại người quen sau nhiều năm, bạn nhận ra họ qua:",
    options: [
      { text: "Khuôn mặt ngay lập tức", type: "A" },
      { text: "Giọng nói và cách nói chuyện", type: "B" },
      { text: "Dáng đi và cử chỉ đặc trưng", type: "C" },
      { text: "Cần họ tự giới thiệu mới nhớ ra", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Trong đám đông, bạn có thể phát hiện người quen:",
    options: [
      { text: "Rất nhanh, chỉ cần liếc qua", type: "A" },
      { text: "Khá nhanh nếu họ ở gần", type: "B" },
      { text: "Cần quan sát kỹ một lúc", type: "C" },
      { text: "Thường bỏ sót, họ phải gọi trước", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi xem một bức tranh, bạn chú ý đến điều gì đầu tiên?",
    options: [
      { text: "Ý nghĩa và thông điệp ẩn chứa", type: "A" },
      { text: "Kỹ thuật vẽ và nét bút", type: "B" },
      { text: "Màu sắc và ánh sáng", type: "C" },
      { text: "Chủ đề chính của bức tranh", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn có thể phân biệt hai chiếc xe cùng màu, cùng hãng khác nhau không?",
    options: [
      { text: "Có, qua các chi tiết nhỏ như đèn, lưới tản nhiệt", type: "A" },
      { text: "Có, nếu là xe quen thuộc", type: "B" },
      { text: "Khó phân biệt, cần so sánh kỹ", type: "C" },
      { text: "Không, chúng trông giống nhau", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi nhìn vào bản đồ, bạn:",
    options: [
      { text: "Nhanh chóng định hướng và tìm đường", type: "A" },
      { text: "Cần một chút thời gian để xác định vị trí", type: "B" },
      { text: "Phải xoay bản đồ theo hướng đi", type: "C" },
      { text: "Thường phải nhờ người khác chỉ đường", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn có thể nhận ra một bài hát qua giai điệu mở đầu:",
    options: [
      { text: "Ngay trong 1-2 giây đầu tiên", type: "A" },
      { text: "Sau vài giây nghe intro", type: "B" },
      { text: "Cần nghe đến đoạn điệp khúc", type: "C" },
      { text: "Phải nghe lời mới biết bài gì", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Khi phát hiện lỗi sai trong văn bản, bạn:",
    options: [
      { text: "Thấy ngay cả khi đọc lướt", type: "A" },
      { text: "Phát hiện khi đọc chậm rãi", type: "B" },
      { text: "Cần đọc kỹ từng chữ", type: "C" },
      { text: "Thường bỏ sót lỗi chính tả", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn có thể nhận ra sự khác biệt giữa hai bức ảnh tương tự:",
    options: [
      { text: "Rất nhanh, trong vài giây", type: "A" },
      { text: "Sau khi so sánh từng phần", type: "B" },
      { text: "Cần thời gian và gợi ý", type: "C" },
      { text: "Khó khăn, thường bỏ cuộc", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Khi ai đó thay đổi kiểu tóc, bạn:",
    options: [
      { text: "Nhận ra ngay và khen ngợi", type: "A" },
      { text: "Thấy có gì đó khác nhưng không chắc", type: "B" },
      { text: "Cần họ nói mới biết", type: "C" },
      { text: "Hoàn toàn không để ý", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn nhớ đường đến một nơi đã đến một lần:",
    options: [
      { text: "Rất rõ, có thể tự đi lại", type: "A" },
      { text: "Nhớ các mốc chính nhưng có thể nhầm", type: "B" },
      { text: "Cần xem lại bản đồ để chắc chắn", type: "C" },
      { text: "Hoàn toàn không nhớ đường", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Khi nhìn vào biểu đồ số liệu phức tạp, bạn:",
    options: [
      { text: "Nhanh chóng nắm được xu hướng chính", type: "A" },
      { text: "Cần phân tích từng phần", type: "B" },
      { text: "Phải đọc chú thích kỹ càng", type: "C" },
      { text: "Cảm thấy choáng ngợp, khó hiểu", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Bậc Thầy Nhận Dạng",
    emoji: "🦅",
    description: "Bạn có khả năng nhận dạng xuất sắc! Đôi mắt tinh tường và trí nhớ hình ảnh tuyệt vời giúp bạn nhanh chóng nhận ra người, vật và các mẫu hình.",
    traits: ["Quan sát tinh tường", "Trí nhớ hình ảnh tốt", "Nhận diện nhanh", "Chú ý chi tiết"],
    strengths: ["Phát hiện sự khác biệt nhanh", "Nhớ mặt người giỏi", "Định hướng không gian tốt"],
    weaknesses: ["Có thể quá chú trọng vào chi tiết", "Đôi khi bỏ qua bức tranh toàn cảnh"],
    tips: ["Phát huy khả năng trong công việc cần quan sát", "Thử sức với nhiếp ảnh hoặc thiết kế"],
  },
  B: {
    type: "B",
    title: "Người Quan Sát Tốt",
    emoji: "👁️",
    description: "Bạn có khả năng nhận dạng khá tốt. Với sự tập trung, bạn có thể nhận ra hầu hết các chi tiết và mẫu hình quan trọng.",
    traits: ["Quan sát có chọn lọc", "Trí nhớ ổn định", "Tư duy phân tích", "Kiên nhẫn"],
    strengths: ["Nhận dạng chính xác khi cần", "Phân tích có hệ thống", "Ít bị nhầm lẫn"],
    weaknesses: ["Cần thêm thời gian để xử lý", "Có thể bỏ sót chi tiết nhanh"],
    tips: ["Luyện tập với các trò chơi tìm điểm khác biệt", "Rèn luyện khả năng quan sát hàng ngày"],
  },
  C: {
    type: "C",
    title: "Người Đang Phát Triển",
    emoji: "🌿",
    description: "Khả năng nhận dạng của bạn đang trong quá trình phát triển. Bạn cần nhiều thời gian hơn để xử lý thông tin hình ảnh.",
    traits: ["Cẩn thận", "Cần thời gian xử lý", "Học hỏi từ từ", "Kiên trì"],
    strengths: ["Không vội vàng kết luận", "Chấp nhận sự giúp đỡ", "Có tiềm năng cải thiện"],
    weaknesses: ["Xử lý hình ảnh chậm", "Dễ bỏ sót thông tin"],
    tips: ["Chơi các trò chơi rèn luyện trí nhớ", "Tập quan sát môi trường xung quanh mỗi ngày"],
  },
  D: {
    type: "D",
    title: "Người Cần Luyện Tập",
    emoji: "🌱",
    description: "Nhận dạng không phải điểm mạnh hiện tại của bạn. Nhưng với sự rèn luyện đều đặn, bạn hoàn toàn có thể cải thiện khả năng này.",
    traits: ["Cần hướng dẫn", "Tiềm năng chưa khai phá", "Tập trung vào thế mạnh khác", "Sáng tạo"],
    strengths: ["Tư duy theo cách riêng", "Không bị phân tâm bởi chi tiết", "Nhìn tổng thể"],
    weaknesses: ["Khó nhận dạng nhanh", "Dễ nhầm lẫn chi tiết"],
    tips: ["Bắt đầu với các bài tập nhận dạng đơn giản", "Sử dụng công nghệ hỗ trợ khi cần"],
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
