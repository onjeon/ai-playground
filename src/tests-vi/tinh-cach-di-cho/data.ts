// Tính cách khi đi chợ
// Khám phá tính cách của bạn qua cách bạn đi chợ truyền thống

export const questions = [
  {
    id: 1,
    question: "Bạn thường đi chợ vào lúc nào?",
    options: [
      { text: "Sáng sớm, hàng tươi ngon", type: "A" },
      { text: "Trưa hoặc chiều, khi rảnh", type: "B" },
      { text: "Tối, sau giờ làm việc", type: "C" },
      { text: "Không cố định, khi nào cần thì đi", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Khi đi chợ, bạn có trả giá không?",
    options: [
      { text: "Luôn luôn, đó là nghệ thuật", type: "A" },
      { text: "Thỉnh thoảng, tùy món", type: "B" },
      { text: "Hiếm khi, ngại trả giá", type: "C" },
      { text: "Không bao giờ, giá nào cũng mua", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn thích mua hàng ở đâu?",
    options: [
      { text: "Sạp quen, bà bán biết mình", type: "A" },
      { text: "Sạp nào đẹp, tươi thì mua", type: "B" },
      { text: "Siêu thị, sạch sẽ, tiện lợi", type: "C" },
      { text: "Online, giao tận nhà", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi đi chợ, bạn thường?",
    options: [
      { text: "Có danh sách sẵn, mua đúng", type: "A" },
      { text: "Nhìn thấy gì ngon thì mua", type: "B" },
      { text: "Hỏi người bán gợi ý", type: "C" },
      { text: "Mua theo cảm hứng", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn chọn rau củ như thế nào?",
    options: [
      { text: "Nhìn, sờ, ngửi kỹ lưỡng", type: "A" },
      { text: "Tin tưởng người bán chọn cho", type: "B" },
      { text: "Chọn nhanh, miễn tươi là được", type: "C" },
      { text: "Không biết chọn, mua đại", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi người bán tính nhầm tiền, bạn sẽ?",
    options: [
      { text: "Nói ngay, yêu cầu tính lại", type: "A" },
      { text: "Kiểm tra lại rồi mới nói", type: "B" },
      { text: "Thiệt ít thì thôi kệ", type: "C" },
      { text: "Lần sau không mua nữa", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn nghĩ gì về việc nói chuyện với người bán?",
    options: [
      { text: "Thích, hỏi thăm như người quen", type: "A" },
      { text: "Nói ít thôi, mua xong đi", type: "B" },
      { text: "Tùy tâm trạng", type: "C" },
      { text: "Ngại, chỉ chỉ và trả tiền", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn thường mang theo gì khi đi chợ?",
    options: [
      { text: "Túi riêng, bảo vệ môi trường", type: "A" },
      { text: "Không mang gì, xin túi tại chợ", type: "B" },
      { text: "Xe đẩy/túi lớn nếu mua nhiều", type: "C" },
      { text: "Chỉ mang tiền và điện thoại", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi thấy món ăn lạ, bạn sẽ?",
    options: [
      { text: "Hỏi cách chế biến rồi mua thử", type: "A" },
      { text: "Quan sát rồi lần sau mới mua", type: "B" },
      { text: "Bỏ qua, mua món quen thôi", type: "C" },
      { text: "Mua thử xem sao", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn chi tiêu đi chợ như thế nào?",
    options: [
      { text: "Có ngân sách cố định", type: "A" },
      { text: "Linh hoạt, tùy nhu cầu", type: "B" },
      { text: "Tiết kiệm tối đa", type: "C" },
      { text: "Không quan tâm, cần gì mua nấy", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn đi chợ mấy lần một tuần?",
    options: [
      { text: "Mỗi ngày, mua đồ tươi", type: "A" },
      { text: "2-3 lần, đủ dùng", type: "B" },
      { text: "Một lần, mua nhiều để dành", type: "C" },
      { text: "Hiếm khi, thường ăn ngoài", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bạn thích đi chợ không?",
    options: [
      { text: "Thích, vui và quen thuộc", type: "A" },
      { text: "Bình thường, việc phải làm", type: "B" },
      { text: "Không thích lắm, đông và nóng", type: "C" },
      { text: "Ghét, thích mua online hơn", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người nội trợ chuyên nghiệp",
    emoji: "🛒",
    description: "Bạn là chuyên gia đi chợ! Bạn biết cách chọn hàng tốt, trả giá hợp lý và xây dựng mối quan hệ với người bán. Căn bếp nhà bạn luôn đầy đủ thực phẩm tươi ngon.",
    traits: ["Cẩn thận", "Tinh tế", "Có kinh nghiệm", "Thân thiện"],
    strengths: ["Chọn hàng giỏi", "Tiết kiệm chi phí", "Quản lý bếp núc tốt"],
    weaknesses: ["Đôi khi mua nhiều quá", "Tốn thời gian"],
    tips: ["Lên kế hoạch mua sắm", "Thử các quán/sạp mới"],
  },
  B: {
    type: "B",
    title: "Người linh hoạt",
    emoji: "🥕",
    description: "Bạn là người thực tế và linh hoạt. Bạn đi chợ khi cần và không quá cầu kỳ. Bạn biết cân bằng giữa chất lượng và tiện lợi.",
    traits: ["Linh hoạt", "Thực tế", "Cân bằng", "Hiệu quả"],
    strengths: ["Tiết kiệm thời gian", "Không stress", "Quyết định nhanh"],
    weaknesses: ["Đôi khi mua thiếu", "Ít tương tác với người bán"],
    tips: ["Thử đi chợ vào giờ khác", "Khám phá các gian hàng mới"],
  },
  C: {
    type: "C",
    title: "Người tiết kiệm",
    emoji: "💰",
    description: "Bạn là người biết quản lý chi tiêu và luôn tìm cách tiết kiệm. Bạn mua sắm có kế hoạch và không lãng phí.",
    traits: ["Tiết kiệm", "Có kế hoạch", "Thận trọng", "Khôn ngoan"],
    strengths: ["Không lãng phí tiền", "Biết so sánh giá", "Quản lý tài chính tốt"],
    weaknesses: ["Đôi khi quá kỹ", "Bỏ lỡ sản phẩm tốt vì giá"],
    tips: ["Thỉnh thoảng mua những món ngon hơn", "Quan tâm chất lượng hơn giá cả"],
  },
  D: {
    type: "D",
    title: "Người hiện đại",
    emoji: "📱",
    description: "Bạn là người hiện đại và thích sự tiện lợi. Bạn không thích đi chợ truyền thống và thường mua sắm online hoặc ở siêu thị.",
    traits: ["Hiện đại", "Tiện lợi", "Độc lập", "Nhanh gọn"],
    strengths: ["Tiết kiệm thời gian", "Không stress", "Thoải mái"],
    weaknesses: ["Bỏ lỡ trải nghiệm truyền thống", "Đôi khi mua đắt hơn"],
    tips: ["Thử đi chợ truyền thống một lần", "Trải nghiệm văn hóa chợ Việt"],
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
