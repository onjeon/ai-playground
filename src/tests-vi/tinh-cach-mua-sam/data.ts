// Phong cách mua sắm
// Khám phá phong cách mua sắm của bạn

export const questions = [
  {
    id: 1,
    question: "Khi cần mua một món đồ, bạn thường làm gì?",
    options: [
      { text: "Research kỹ, so sánh giá, đọc review", type: "A" },
      { text: "Đến cửa hàng, thấy thích thì mua ngay", type: "B" },
      { text: "Chờ sale, flash deal rồi mới mua", type: "C" },
      { text: "Hỏi bạn bè recommend rồi quyết định", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thích mua sắm ở đâu?",
    options: [
      { text: "Online - tiện lợi, nhiều lựa chọn", type: "A" },
      { text: "Cửa hàng - được thử, sờ tận tay", type: "B" },
      { text: "Cả hai, tùy món đồ", type: "C" },
      { text: "Outlet, chợ - săn đồ giá tốt", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi mua quần áo, bạn quan tâm điều gì nhất?",
    options: [
      { text: "Chất lượng, độ bền", type: "A" },
      { text: "Mẫu mã, thời trang", type: "B" },
      { text: "Giá cả hợp lý", type: "C" },
      { text: "Thương hiệu, brand name", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn xử lý như thế nào khi thấy đồ đẹp nhưng đắt?",
    options: [
      { text: "Cân nhắc kỹ, đáng thì chi", type: "A" },
      { text: "Mua luôn nếu thích, tiền làm ra để tiêu", type: "B" },
      { text: "Chờ sale hoặc tìm nơi bán rẻ hơn", type: "C" },
      { text: "Suy nghĩ vài ngày rồi quyết định", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Giỏ hàng online của bạn thường như thế nào?",
    options: [
      { text: "Thêm vào, cân nhắc, rồi xóa bớt", type: "A" },
      { text: "Thấy đẹp là thêm, checkout luôn", type: "B" },
      { text: "Chờ đến ngày sale mới checkout", type: "C" },
      { text: "Để đó lâu, đôi khi quên luôn", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn mua sắm cho người khác như thế nào?",
    options: [
      { text: "Chọn món thiết thực, chất lượng", type: "A" },
      { text: "Chọn món đẹp, bắt mắt, gây ấn tượng", type: "B" },
      { text: "Có budget rõ ràng, tìm trong range đó", type: "C" },
      { text: "Hỏi họ muốn gì rồi mua theo", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn theo dõi flash sale như thế nào?",
    options: [
      { text: "Đặt báo thức, chuẩn bị sẵn", type: "A" },
      { text: "Không quan tâm lắm, cần thì mua thôi", type: "B" },
      { text: "Săn sale là niềm vui, không bỏ đợt nào", type: "C" },
      { text: "Thỉnh thoảng check, không ám ảnh", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn return đồ mua online thường không?",
    options: [
      { text: "Hiếm khi, chọn kỹ từ đầu", type: "A" },
      { text: "Khá thường xuyên, mua nhiều return nhiều", type: "B" },
      { text: "Ít, ngại quy trình return", type: "C" },
      { text: "Tùy, nếu không đúng size thì return", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Budget mua sắm hàng tháng của bạn?",
    options: [
      { text: "Có kế hoạch cụ thể, không vượt quá", type: "A" },
      { text: "Không giới hạn, cần thì chi", type: "B" },
      { text: "Tiết kiệm tối đa, mua đồ cần thiết", type: "C" },
      { text: "Tùy tháng, có tháng nhiều có tháng ít", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn xử lý đồ không dùng nữa như thế nào?",
    options: [
      { text: "Bán lại trên các app second-hand", type: "A" },
      { text: "Cho người khác hoặc từ thiện", type: "B" },
      { text: "Để đó, biết đâu cần lại", type: "C" },
      { text: "Vứt đi nếu không dùng được", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Khi đi mall, bạn thường như thế nào?",
    options: [
      { text: "Có danh sách, mua đúng thứ cần", type: "A" },
      { text: "Window shopping, mua nếu thấy đẹp", type: "B" },
      { text: "Check sale corner trước", type: "C" },
      { text: "Đi loanh quanh, tùy hứng", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Mua sắm đối với bạn là gì?",
    options: [
      { text: "Nhu cầu, cần thì mua", type: "A" },
      { text: "Niềm vui, retail therapy", type: "B" },
      { text: "Thử thách, săn deal tốt nhất", type: "C" },
      { text: "Hoạt động xã hội, đi cùng bạn bè", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người mua sắm Thông minh",
    emoji: "🧠",
    description: "Bạn là người mua sắm thông minh và có kế hoạch. Bạn research kỹ, so sánh giá và chỉ mua những gì thật sự cần thiết với chất lượng tốt nhất.",
    traits: ["Thông minh", "Có kế hoạch", "Tiết kiệm", "Cẩn thận"],
    strengths: ["Không lãng phí", "Mua được đồ chất lượng", "Quản lý tài chính tốt"],
    weaknesses: ["Đôi khi quá cân nhắc", "Có thể bỏ lỡ cơ hội"],
    tips: ["Đôi khi cho phép mình spontaneous", "Không phải lúc nào cũng cần hoàn hảo"],
  },
  B: {
    type: "B",
    title: "Người mua sắm Cảm xúc",
    emoji: "💖",
    description: "Bạn mua sắm theo cảm xúc và sở thích. Thấy đẹp là mua, mua sắm là niềm vui và bạn không ngại chi tiền cho những thứ làm mình vui.",
    traits: ["Cảm xúc", "Thưởng thức", "Spontaneous", "Hào phóng"],
    strengths: ["Tận hưởng cuộc sống", "Không stress về việc mua sắm", "Sở hữu nhiều đồ đẹp"],
    weaknesses: ["Dễ mua quá nhiều", "Có thể lãng phí"],
    tips: ["Đặt budget giới hạn", "Suy nghĩ 24h trước khi mua đồ đắt"],
  },
  C: {
    type: "C",
    title: "Người mua sắm Săn sale",
    emoji: "🏷️",
    description: "Bạn là expert săn sale và deal tốt. Bạn không bao giờ mua giá gốc và niềm vui của bạn là tìm được món đồ chất lượng với giá rẻ nhất.",
    traits: ["Tiết kiệm", "Kiên nhẫn", "Săn deal", "Thông minh"],
    strengths: ["Tiết kiệm được nhiều", "Biết chờ thời điểm tốt", "Mua được giá tốt"],
    weaknesses: ["Đôi khi mua chỉ vì rẻ", "Có thể bỏ lỡ đồ cần"],
    tips: ["Chỉ mua khi thật sự cần", "Rẻ mà không cần = lãng phí"],
  },
  D: {
    type: "D",
    title: "Người mua sắm Xã hội",
    emoji: "👯",
    description: "Bạn xem mua sắm là hoạt động xã hội, đi cùng bạn bè, hỏi ý kiến và chia sẻ. Bạn không ám ảnh về việc mua sắm nhưng tận hưởng nó như một trải nghiệm.",
    traits: ["Xã hội", "Linh hoạt", "Cân bằng", "Vui vẻ"],
    strengths: ["Mua sắm vui vẻ", "Có người tư vấn", "Cân bằng"],
    weaknesses: ["Có thể bị ảnh hưởng bởi người khác", "Đôi khi không quyết định được"],
    tips: ["Tin vào quyết định của mình", "Đôi khi cần mua sắm một mình"],
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
