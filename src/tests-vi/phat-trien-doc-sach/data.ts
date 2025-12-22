// Phong Cách Đọc Sách Phát Triển
// Khám phá phong cách đọc sách và tiếp thu kiến thức của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn đọc bao nhiêu sách mỗi năm?",
    options: [
      { text: "1-5 cuốn, đọc kỹ", type: "A" },
      { text: "6-12 cuốn, mỗi tháng 1 cuốn", type: "B" },
      { text: "12-24 cuốn, đọc nhiều", type: "C" },
      { text: "24+ cuốn, đọc rất nhiều", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thích đọc sách dạng nào?",
    options: [
      { text: "Sách giấy truyền thống", type: "A" },
      { text: "Ebook trên Kindle/tablet", type: "B" },
      { text: "Audiobook, nghe khi di chuyển", type: "C" },
      { text: "Summary, tóm tắt sách", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Thể loại sách phát triển bạn thích nhất?",
    options: [
      { text: "Self-help, phát triển bản thân", type: "A" },
      { text: "Business, kinh doanh", type: "B" },
      { text: "Psychology, tâm lý học", type: "C" },
      { text: "Biography, tiểu sử người thành công", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn chọn sách để đọc như thế nào?",
    options: [
      { text: "Theo recommendation của người thành công", type: "A" },
      { text: "Theo review và rating", type: "B" },
      { text: "Theo chủ đề đang quan tâm", type: "C" },
      { text: "Bestseller, sách nổi tiếng", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi đọc sách, bạn thường?",
    options: [
      { text: "Đọc từ đầu đến cuối", type: "A" },
      { text: "Đọc phần quan trọng, skip phần không cần", type: "B" },
      { text: "Ghi chú, highlight những ý hay", type: "C" },
      { text: "Đọc nhanh để nắm ý chính", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn đọc sách vào lúc nào?",
    options: [
      { text: "Buổi tối trước khi ngủ", type: "A" },
      { text: "Buổi sáng sớm", type: "B" },
      { text: "Khi di chuyển, chờ đợi", type: "C" },
      { text: "Cuối tuần, có nhiều thời gian", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Sau khi đọc xong một cuốn sách, bạn?",
    options: [
      { text: "Viết review, chia sẻ trên mạng", type: "A" },
      { text: "Áp dụng ngay vào cuộc sống", type: "B" },
      { text: "Ghi chép lại những điểm quan trọng", type: "C" },
      { text: "Chuyển sang cuốn tiếp theo", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn có đọc lại sách không?",
    options: [
      { text: "Có, những cuốn hay đọc nhiều lần", type: "A" },
      { text: "Đôi khi, để ôn lại kiến thức", type: "B" },
      { text: "Hiếm khi, có quá nhiều sách mới", type: "C" },
      { text: "Không, đọc một lần là đủ", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn đầu tư bao nhiêu cho sách mỗi tháng?",
    options: [
      { text: "Dưới 200k, tìm sách free/mượn", type: "A" },
      { text: "200-500k, mua có chọn lọc", type: "B" },
      { text: "500k-1 triệu, đầu tư tốt", type: "C" },
      { text: "1 triệu+, không tiếc tiền cho sách", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn có tham gia book club không?",
    options: [
      { text: "Có, thảo luận sách hàng tháng", type: "A" },
      { text: "Có, nhưng không thường xuyên", type: "B" },
      { text: "Không, đọc một mình", type: "C" },
      { text: "Theo dõi book reviewer online", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Cuốn sách ảnh hưởng lớn nhất đến bạn thuộc thể loại?",
    options: [
      { text: "Thói quen, kỷ luật (Atomic Habits...)", type: "A" },
      { text: "Tư duy, mindset (Mindset, Think and Grow Rich...)", type: "B" },
      { text: "Kỹ năng cụ thể (How to Win Friends...)", type: "C" },
      { text: "Tiểu sử, câu chuyện người thành công", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Mục đích chính khi đọc sách phát triển của bạn?",
    options: [
      { text: "Thay đổi thói quen, hành vi", type: "A" },
      { text: "Nâng cao kiến thức, hiểu biết", type: "B" },
      { text: "Giải quyết vấn đề cụ thể", type: "C" },
      { text: "Tìm cảm hứng, động lực", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người Đọc Chiêm Nghiệm",
    emoji: "🧘",
    description: "Bạn đọc sách để chiêm nghiệm và thay đổi bản thân! Bạn đọc chậm, suy ngẫm sâu và áp dụng vào cuộc sống. Bạn tin vào sức mạnh của việc đọc đi đọc lại.",
    traits: ["Chiêm nghiệm", "Sâu sắc", "Áp dụng", "Kiên nhẫn"],
    strengths: ["Hiểu sâu nội dung", "Áp dụng được", "Nhớ lâu"],
    weaknesses: ["Đọc ít cuốn", "Có thể bỏ lỡ sách mới"],
    tips: ["Mở rộng danh sách đọc", "Đôi khi đọc nhanh để nắm tổng quan"],
  },
  B: {
    type: "B",
    title: "Người Đọc Có Hệ Thống",
    emoji: "📊",
    description: "Bạn đọc sách có hệ thống và kế hoạch! Bạn ghi chép, highlight và tổ chức kiến thức. Bạn biến việc đọc thành nguồn kiến thức có thể tra cứu.",
    traits: ["Có hệ thống", "Ghi chép", "Tổ chức", "Methodical"],
    strengths: ["Kiến thức có hệ thống", "Có thể review lại", "Nhớ được nhiều"],
    weaknesses: ["Mất thời gian ghi chép", "Đôi khi quá chi tiết"],
    tips: ["Cân bằng giữa ghi chép và đọc", "Đôi khi đọc để thư giãn"],
  },
  C: {
    type: "C",
    title: "Người Đọc Hiệu Quả",
    emoji: "⚡",
    description: "Bạn đọc sách để giải quyết vấn đề cụ thể! Bạn biết cách đọc nhanh, lọc thông tin và áp dụng ngay. Bạn là người thực dụng trong việc đọc.",
    traits: ["Hiệu quả", "Thực dụng", "Đọc nhanh", "Có mục tiêu"],
    strengths: ["Đọc nhanh", "Lấy được thông tin cần", "Áp dụng ngay"],
    weaknesses: ["Có thể bỏ lỡ chi tiết hay", "Đọc không sâu"],
    tips: ["Đôi khi đọc chậm lại", "Cho phép mình đọc không có mục đích"],
  },
  D: {
    type: "D",
    title: "Người Đọc Khám Phá",
    emoji: "🌟",
    description: "Bạn đọc sách để tìm cảm hứng và mở rộng tầm nhìn! Bạn đọc nhiều, đọc đa dạng và luôn tìm kiếm những cuốn sách mới. Bạn là người yêu thích khám phá.",
    traits: ["Khám phá", "Đa dạng", "Tìm cảm hứng", "Cởi mở"],
    strengths: ["Kiến thức rộng", "Luôn có cảm hứng mới", "Network tốt qua sách"],
    weaknesses: ["Có thể đọc qua loa", "Khó nhớ hết"],
    tips: ["Chọn lọc để đọc sâu một số cuốn", "Ghi chép những ý quan trọng"],
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
