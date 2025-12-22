// Phong cách đọc sách
// Khám phá phong cách đọc sách của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn thích đọc thể loại sách nào?",
    options: [
      { text: "Tiểu thuyết, fiction - đắm chìm trong câu chuyện", type: "A" },
      { text: "Self-help, business - phát triển bản thân", type: "B" },
      { text: "Non-fiction, history - kiến thức, sự thật", type: "C" },
      { text: "Đa dạng, tùy mood đọc gì cũng được", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn đọc sách bằng gì?",
    options: [
      { text: "Sách giấy, thích cảm giác cầm sách", type: "A" },
      { text: "Kindle, e-reader - tiện lợi, nhẹ", type: "B" },
      { text: "Audiobook - nghe khi di chuyển", type: "C" },
      { text: "Cả ba, tùy hoàn cảnh", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn đọc bao nhiêu sách mỗi năm?",
    options: [
      { text: "20+ quyển, đọc rất nhiều", type: "A" },
      { text: "10-20 quyển, đều đặn mỗi tháng", type: "B" },
      { text: "Dưới 10 quyển, khi nào rảnh mới đọc", type: "C" },
      { text: "Không đếm, đọc theo sở thích", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn chọn sách như thế nào?",
    options: [
      { text: "Theo bestseller, nhiều người recommend", type: "A" },
      { text: "Theo tác giả yêu thích", type: "B" },
      { text: "Theo chủ đề đang quan tâm", type: "C" },
      { text: "Random, thấy hay thì đọc", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi đọc sách, bạn thường làm gì?",
    options: [
      { text: "Highlight, ghi chú, note lại", type: "A" },
      { text: "Đọc một mạch, không gián đoạn", type: "B" },
      { text: "Đọc chậm, suy ngẫm từng đoạn", type: "C" },
      { text: "Đọc nhanh, lấy ý chính", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn đọc sách ở đâu?",
    options: [
      { text: "Góc riêng ở nhà, yên tĩnh", type: "A" },
      { text: "Quán cà phê, có không gian", type: "B" },
      { text: "Trên xe, lúc đợi, mọi nơi", type: "C" },
      { text: "Trước khi ngủ, trên giường", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Khi sách không hay, bạn làm gì?",
    options: [
      { text: "Cố đọc hết, đã bắt đầu phải hoàn thành", type: "A" },
      { text: "Bỏ ngang, đời ngắn để đọc sách dở", type: "B" },
      { text: "Đọc lướt qua, lấy ý chính", type: "C" },
      { text: "Để đó, có khi quay lại sau", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn có tủ sách như thế nào?",
    options: [
      { text: "Tủ sách lớn, collection nhiều năm", type: "A" },
      { text: "Vừa phải, những quyển yêu thích", type: "B" },
      { text: "Ít sách, đọc xong cho/bán đi", type: "C" },
      { text: "Chủ yếu ebook, không có sách giấy nhiều", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn chia sẻ sách với người khác như thế nào?",
    options: [
      { text: "Hay recommend sách cho bạn bè", type: "A" },
      { text: "Viết review, post lên MXH", type: "B" },
      { text: "Tham gia book club, thảo luận", type: "C" },
      { text: "Ít chia sẻ, đọc cho mình", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn đọc nhiều sách cùng lúc không?",
    options: [
      { text: "Chỉ một cuốn, tập trung hoàn thành", type: "A" },
      { text: "2-3 cuốn, tùy mood đọc cuốn nào", type: "B" },
      { text: "Nhiều cuốn, thường không hoàn thành hết", type: "C" },
      { text: "Tùy, có khi một có khi nhiều", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Sau khi đọc xong sách hay, bạn làm gì?",
    options: [
      { text: "Suy ngẫm, áp dụng vào cuộc sống", type: "A" },
      { text: "Tìm đọc thêm sách của tác giả đó", type: "B" },
      { text: "Recommend cho bạn bè ngay", type: "C" },
      { text: "Bắt đầu cuốn mới ngay", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Đọc sách đối với bạn là gì?",
    options: [
      { text: "Đam mê, không thể sống thiếu sách", type: "A" },
      { text: "Cách học hỏi và phát triển", type: "B" },
      { text: "Thư giãn, thoát khỏi thực tại", type: "C" },
      { text: "Một trong nhiều hoạt động giải trí", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Mọt sách Đam mê",
    emoji: "📚",
    description: "Bạn là mọt sách thực thụ, đọc là đam mê và không thể thiếu trong cuộc sống. Bạn có tủ sách lớn và luôn tìm kiếm cuốn sách hay tiếp theo.",
    traits: ["Đam mê đọc", "Kiên nhẫn", "Sâu sắc", "Collection"],
    strengths: ["Kiến thức rộng", "Từ vựng phong phú", "Tư duy sâu"],
    weaknesses: ["Có thể ít hoạt động khác", "Tốn tiền mua sách"],
    tips: ["Cân bằng với hoạt động khác", "Thử audiobook khi di chuyển"],
  },
  B: {
    type: "B",
    title: "Người đọc Phát triển",
    emoji: "📈",
    description: "Bạn đọc sách để phát triển bản thân và học hỏi. Bạn thích self-help, business và những cuốn sách giúp bạn tốt hơn mỗi ngày.",
    traits: ["Phát triển", "Mục tiêu", "Ứng dụng", "Cải thiện"],
    strengths: ["Áp dụng được kiến thức", "Phát triển không ngừng", "Có mục đích rõ"],
    weaknesses: ["Có thể bỏ qua fiction hay", "Đọc quá practical"],
    tips: ["Thử đọc fiction để relax", "Đọc để giải trí đôi khi"],
  },
  C: {
    type: "C",
    title: "Người đọc Khám phá",
    emoji: "🔍",
    description: "Bạn đọc sách để khám phá kiến thức và hiểu biết thế giới. Bạn thích non-fiction, lịch sử và những cuốn sách mở mang đầu óc.",
    traits: ["Tò mò", "Kiến thức", "Phân tích", "Sâu rộng"],
    strengths: ["Hiểu biết rộng", "Tư duy phản biện", "Luôn học hỏi"],
    weaknesses: ["Có thể đọc quá khô khan", "Bỏ qua sách giải trí"],
    tips: ["Thử tiểu thuyết hay", "Đọc để thưởng thức đôi khi"],
  },
  D: {
    type: "D",
    title: "Người đọc Linh hoạt",
    emoji: "🎨",
    description: "Bạn đọc sách linh hoạt, không giới hạn thể loại và đọc theo mood. Bạn thích sự đa dạng và không ép buộc bản thân phải đọc gì.",
    traits: ["Linh hoạt", "Đa dạng", "Thoải mái", "Mở lòng"],
    strengths: ["Tiếp cận nhiều thể loại", "Không bị gò bó", "Đọc vì vui"],
    weaknesses: ["Có thể không đọc sâu", "Thiếu hệ thống"],
    tips: ["Đặt mục tiêu đọc đôi khi", "Đọc sâu một số chủ đề quan tâm"],
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
