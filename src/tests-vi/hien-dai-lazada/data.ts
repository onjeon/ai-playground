// Phong Cách Mua Sắm Lazada
// Khám phá tính cách qua cách bạn mua sắm trên Lazada

export const questions = [
  {
    id: 1,
    question: "Bạn thường mua sắm trên Lazada khi nào?",
    options: [
      { text: "Khi có flash sale, săn deal đêm khuya", type: "A" },
      { text: "Khi cần gì thì mua nấy, không đợi sale", type: "B" },
      { text: "Chỉ mua khi có voucher giảm giá khủng", type: "C" },
      { text: "Lướt cho vui, thỉnh thoảng mới mua", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thường mua món đồ gì nhất trên Lazada?",
    options: [
      { text: "Đồ điện tử, phụ kiện công nghệ", type: "A" },
      { text: "Quần áo, giày dép, thời trang", type: "B" },
      { text: "Đồ gia dụng, vật dụng nhà cửa", type: "C" },
      { text: "Mỹ phẩm, skincare, chăm sóc cá nhân", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi thấy đồ thích, bạn sẽ?",
    options: [
      { text: "Cho vào giỏ hàng ngay, mua luôn", type: "A" },
      { text: "So sánh giá nhiều shop trước", type: "B" },
      { text: "Đọc review kỹ lưỡng mới quyết định", type: "C" },
      { text: "Để đó, chờ sale rồi mới mua", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Giỏ hàng Lazada của bạn hiện tại?",
    options: [
      { text: "Đầy ắp, toàn đồ chờ mua", type: "A" },
      { text: "Vài món cần thiết, tinh gọn", type: "B" },
      { text: "Dài vô tận, add từ lâu rồi quên", type: "C" },
      { text: "Trống không, mua là checkout luôn", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn đọc review sản phẩm như thế nào?",
    options: [
      { text: "Đọc kỹ từng review, xem cả hình", type: "A" },
      { text: "Lướt qua, chủ yếu xem điểm đánh giá", type: "B" },
      { text: "Chỉ đọc review 1-2 sao để xem lỗi", type: "C" },
      { text: "Không đọc, tin vào cảm giác", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi nhận hàng không đúng như mô tả, bạn?",
    options: [
      { text: "Liên hệ shop ngay, đòi đổi trả", type: "A" },
      { text: "Để review 1 sao, cảnh báo người khác", type: "B" },
      { text: "Thôi kệ, lần sau cẩn thận hơn", type: "C" },
      { text: "Tặng người khác hoặc bán lại", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Freeship là?",
    options: [
      { text: "Yếu tố quyết định, không freeship không mua", type: "A" },
      { text: "Tốt thì có, không thì cũng mua", type: "B" },
      { text: "Sẵn sàng add thêm đồ cho đủ freeship", type: "C" },
      { text: "Không quan tâm lắm, tiện thì được", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn collect voucher Lazada như thế nào?",
    options: [
      { text: "Săn voucher mỗi ngày, không bỏ lỡ", type: "A" },
      { text: "Thu thập khi nhớ ra, không ép buộc", type: "B" },
      { text: "Chỉ lấy voucher freeship thôi", type: "C" },
      { text: "Không collect, mua là mua thôi", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi có sale 11.11, 12.12, bạn?",
    options: [
      { text: "Chuẩn bị list mua từ trước, canh đúng giờ", type: "A" },
      { text: "Vào xem có gì hay thì mua", type: "B" },
      { text: "Mua nhiều hơn dự định vì giá tốt", type: "C" },
      { text: "Bình thường, không quan tâm lắm", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Hình thức thanh toán bạn hay dùng?",
    options: [
      { text: "COD - nhận hàng mới trả tiền", type: "A" },
      { text: "Ví điện tử - ShopeePay, MoMo", type: "B" },
      { text: "Thẻ ngân hàng - tiện lợi", type: "C" },
      { text: "Trả góp 0% - mua đồ đắt tiền", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Thánh Săn Sale",
    emoji: "🛒",
    description: "Bạn là cao thủ săn sale! Không voucher nào lọt qua mắt bạn, flash sale đêm khuya cũng canh được. Bạn mua sắm thông minh, tiết kiệm tối đa nhưng vẫn có đủ thứ mình cần.",
    traits: ["Tiết kiệm", "Kiên nhẫn", "Thông minh", "Nhanh nhạy"],
    strengths: ["Mua được giá tốt nhất", "Không bỏ lỡ deal hot", "Quản lý chi tiêu tốt"],
    weaknesses: ["Mất nhiều thời gian săn sale", "Đôi khi mua vì rẻ không vì cần"],
    tips: ["Đặt ngân sách cho mua sắm", "Chỉ mua những gì thực sự cần"],
  },
  B: {
    type: "B",
    title: "Người Mua Thực Dụng",
    emoji: "📦",
    description: "Bạn mua sắm có mục đích rõ ràng! Cần gì mua nấy, không chần chừ. Bạn đánh giá cao sự tiện lợi và chất lượng hơn là giá rẻ. Thời gian của bạn quý hơn việc săn sale.",
    traits: ["Thực dụng", "Quyết đoán", "Hiệu quả", "Có mục tiêu"],
    strengths: ["Tiết kiệm thời gian", "Mua đúng thứ cần", "Không bị cuốn vào sale"],
    weaknesses: ["Có thể mua giá cao hơn", "Bỏ lỡ deal tốt"],
    tips: ["Check giá trước khi mua", "Tận dụng voucher có sẵn"],
  },
  C: {
    type: "C",
    title: "Dân Nghiên Cứu Kỹ",
    emoji: "🔍",
    description: "Bạn là người mua sắm cẩn thận! Đọc review, so sánh giá, kiểm tra shop uy tín... bạn không bao giờ mua hàng mà không nghiên cứu kỹ. Chất lượng là ưu tiên hàng đầu.",
    traits: ["Cẩn thận", "Tỉ mỉ", "Thông thái", "Không vội vàng"],
    strengths: ["Ít mua phải hàng dở", "Đánh giá chính xác", "Mua sắm có chiến lược"],
    weaknesses: ["Mất nhiều thời gian quyết định", "Có thể bỏ lỡ cơ hội tốt"],
    tips: ["Đặt deadline cho quyết định", "Tin tưởng đánh giá của mình"],
  },
  D: {
    type: "D",
    title: "Người Mua Theo Cảm Hứng",
    emoji: "✨",
    description: "Bạn mua sắm theo cảm hứng! Thấy đẹp thì mua, thấy thích thì order. Bạn tin vào trực giác và không thích bị ràng buộc bởi voucher hay sale. Mua sắm là niềm vui!",
    traits: ["Tự do", "Sáng tạo", "Theo cảm xúc", "Tận hưởng"],
    strengths: ["Mua sắm vui vẻ", "Không stress", "Khám phá nhiều thứ mới"],
    weaknesses: ["Có thể mua thừa", "Chi tiêu không kiểm soát"],
    tips: ["Đặt ngân sách hàng tháng", "Suy nghĩ 24h trước khi mua đồ đắt"],
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
