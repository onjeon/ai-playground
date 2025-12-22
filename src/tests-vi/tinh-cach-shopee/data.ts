// Tính cách mua sắm Shopee
// Khám phá tính cách của bạn qua cách bạn mua sắm trên Shopee

export const questions = [
  {
    id: 1,
    question: "Bạn thường mua gì trên Shopee?",
    options: [
      { text: "Quần áo, thời trang", type: "A" },
      { text: "Đồ điện tử, công nghệ", type: "B" },
      { text: "Đồ gia dụng, nhà bếp", type: "C" },
      { text: "Mọi thứ, gì cũng mua", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thường đợi đến ngày sale để mua không?",
    options: [
      { text: "Luôn luôn, 11.11, 12.12 là ngày của tôi", type: "A" },
      { text: "Thỉnh thoảng, nếu cần gấp thì mua trước", type: "B" },
      { text: "Không, cần là mua ngay", type: "C" },
      { text: "Chỉ mua khi có flash sale", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn có hay đọc review trước khi mua không?",
    options: [
      { text: "Đọc hết tất cả review", type: "A" },
      { text: "Đọc vài cái review có ảnh", type: "B" },
      { text: "Chỉ nhìn số sao đánh giá", type: "C" },
      { text: "Không đọc, tin vào cảm giác", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Giỏ hàng của bạn thường có bao nhiêu món?",
    options: [
      { text: "Hơn 50 món, để đó rồi tính", type: "A" },
      { text: "Khoảng 10-20 món", type: "B" },
      { text: "Vài món, mua ngay", type: "C" },
      { text: "Trống không, chỉ thêm khi cần", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn xử lý mã giảm giá như thế nào?",
    options: [
      { text: "Săn mã trước, lưu hết vào", type: "A" },
      { text: "Nhớ dùng khi thanh toán", type: "B" },
      { text: "Thường quên, mua xong mới nhớ", type: "C" },
      { text: "Không quan tâm mã giảm giá", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi hàng giao đến, bạn thường?",
    options: [
      { text: "Mở unbox ngay lập tức", type: "A" },
      { text: "Để đó, khi nào rảnh mới mở", type: "B" },
      { text: "Kiểm tra kỹ rồi mới nhận", type: "C" },
      { text: "Quên mất mình đã đặt gì", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn có hay livestream mua hàng không?",
    options: [
      { text: "Có, hay xem và mua theo", type: "A" },
      { text: "Thỉnh thoảng, khi có thời gian", type: "B" },
      { text: "Không, thích tự tìm", type: "C" },
      { text: "Không biết có tính năng này", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Khi nhận hàng không đúng như mô tả, bạn sẽ?",
    options: [
      { text: "Đánh giá 1 sao, yêu cầu hoàn tiền", type: "A" },
      { text: "Liên hệ shop để giải quyết", type: "B" },
      { text: "Chấp nhận, lần sau không mua shop này", type: "C" },
      { text: "Kệ, đồ rẻ mà", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn check Shopee mấy lần một ngày?",
    options: [
      { text: "Nhiều lần, nghiện rồi", type: "A" },
      { text: "1-2 lần, lướt cho vui", type: "B" },
      { text: "Khi cần mua gì đó", type: "C" },
      { text: "Hiếm khi mở app", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn có hay chơi game trên Shopee không?",
    options: [
      { text: "Có, Shopee Farm, Shopee Candy", type: "A" },
      { text: "Thỉnh thoảng lắc xu", type: "B" },
      { text: "Không, chỉ mua hàng thôi", type: "C" },
      { text: "Không biết có game", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn ưu tiên tiêu chí gì khi mua hàng?",
    options: [
      { text: "Giá rẻ nhất", type: "A" },
      { text: "Review tốt, uy tín", type: "B" },
      { text: "Ship nhanh", type: "C" },
      { text: "Yêu thích shop", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Mỗi tháng bạn chi bao nhiêu cho Shopee?",
    options: [
      { text: "Trên 2 triệu", type: "A" },
      { text: "500k - 2 triệu", type: "B" },
      { text: "Dưới 500k", type: "C" },
      { text: "Không cố định, tùy tháng", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Tín đồ shopping online",
    emoji: "🛍️",
    description: "Bạn là fan cuồng của Shopee! Bạn biết hết mọi mẹo săn sale, biết lịch flash sale và không bao giờ bỏ lỡ cơ hội mua hàng giá tốt. Shopee là nguồn vui của bạn!",
    traits: ["Đam mê shopping", "Săn sale giỏi", "Nhanh nhạy", "Kiên nhẫn"],
    strengths: ["Mua được giá tốt", "Biết nhiều mẹo", "Cập nhật xu hướng"],
    weaknesses: ["Dễ nghiện mua sắm", "Chi tiêu nhiều"],
    tips: ["Lập ngân sách mua sắm", "Chỉ mua những gì thực sự cần"],
  },
  B: {
    type: "B",
    title: "Người mua thông minh",
    emoji: "🧠",
    description: "Bạn là người mua sắm thông minh và có chọn lọc. Bạn đọc review kỹ, so sánh giá và chỉ mua khi thực sự cần. Bạn cân bằng tốt giữa tiện lợi và tiết kiệm.",
    traits: ["Thông minh", "Có chọn lọc", "Cẩn thận", "Tiết kiệm"],
    strengths: ["Ít mua nhầm", "Quản lý tài chính tốt", "Mua đồ chất lượng"],
    weaknesses: ["Đôi khi quá kỹ", "Mất nhiều thời gian so sánh"],
    tips: ["Tin vào quyết định của mình", "Đừng để bỏ lỡ deal tốt vì quá kỹ"],
  },
  C: {
    type: "C",
    title: "Người thực dụng",
    emoji: "⚡",
    description: "Bạn là người mua sắm thực dụng. Bạn chỉ vào Shopee khi cần mua gì đó và mua nhanh, gọn, lẹ. Bạn không lãng phí thời gian lướt app vô nghĩa.",
    traits: ["Thực dụng", "Hiệu quả", "Nhanh gọn", "Tập trung"],
    strengths: ["Tiết kiệm thời gian", "Không nghiện mua sắm", "Mua đúng thứ cần"],
    weaknesses: ["Đôi khi bỏ lỡ deal tốt", "Ít tận dụng ưu đãi"],
    tips: ["Thỉnh thoảng lướt xem có gì hay", "Tận dụng mã giảm giá"],
  },
  D: {
    type: "D",
    title: "Người thoải mái",
    emoji: "😌",
    description: "Bạn là người không quá quan tâm đến việc mua sắm online. Bạn mua khi cần và không bị ảnh hưởng bởi sale hay khuyến mãi. Tiền quan trọng nhưng thời gian quan trọng hơn.",
    traits: ["Thoải mái", "Độc lập", "Không bị ảnh hưởng", "Bình thản"],
    strengths: ["Không nghiện mua sắm", "Tự chủ", "Không bị FOMO"],
    weaknesses: ["Đôi khi mua đắt hơn", "Không tận dụng được ưu đãi"],
    tips: ["Tìm hiểu thêm về app để mua sắm tiết kiệm hơn", "Thử đợi sale lớn"],
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
