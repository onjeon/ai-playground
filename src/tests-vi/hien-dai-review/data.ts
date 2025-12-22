// Phong Cách Viết Review
// Khám phá tính cách qua cách bạn viết review

export const questions = [
  {
    id: 1,
    question: "Bạn thường viết review khi nào?",
    options: [
      { text: "Khi sản phẩm/dịch vụ quá tệ, phải cảnh báo", type: "A" },
      { text: "Khi sản phẩm/dịch vụ rất tốt, muốn khen", type: "B" },
      { text: "Luôn luôn, cả tốt lẫn xấu", type: "C" },
      { text: "Hiếm khi, chỉ khi được nhắc nhở", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Review của bạn thường dài bao nhiêu?",
    options: [
      { text: "Ngắn gọn, vài từ là đủ", type: "A" },
      { text: "Vừa phải, 1-2 đoạn văn", type: "B" },
      { text: "Chi tiết, đầy đủ mọi khía cạnh", type: "C" },
      { text: "Tùy, có khi ngắn có khi dài", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn có hay đăng hình trong review không?",
    options: [
      { text: "Luôn luôn, hình thật mới thuyết phục", type: "A" },
      { text: "Thỉnh thoảng, khi sản phẩm đẹp", type: "B" },
      { text: "Hiếm khi, chỉ viết thôi", type: "C" },
      { text: "Không, ngại chụp hình", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Giọng điệu review của bạn thường là?",
    options: [
      { text: "Thẳng thắn, nói thật những gì nghĩ", type: "A" },
      { text: "Nhẹ nhàng, không muốn gây mất lòng", type: "B" },
      { text: "Hài hước, vui vẻ", type: "C" },
      { text: "Chuyên nghiệp, khách quan", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn đánh giá sao như thế nào?",
    options: [
      { text: "Khắt khe, hiếm khi cho 5 sao", type: "A" },
      { text: "Dễ tính, thường cho 4-5 sao", type: "B" },
      { text: "Công bằng, đánh giá đúng chất lượng", type: "C" },
      { text: "Tùy tâm trạng, không cố định", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Review về đồ ăn, bạn quan tâm điều gì nhất?",
    options: [
      { text: "Hương vị, có ngon không", type: "A" },
      { text: "Không gian, decor quán", type: "B" },
      { text: "Giá cả, có xứng đáng không", type: "C" },
      { text: "Thái độ phục vụ, service", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Khi shop phản hồi review tiêu cực của bạn, bạn?",
    options: [
      { text: "Vẫn giữ review, không thay đổi", type: "A" },
      { text: "Sửa lại nếu shop xử lý tốt", type: "B" },
      { text: "Xóa review nếu được giải quyết", type: "C" },
      { text: "Không quan tâm, viết xong là xong", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn có đọc review của người khác trước khi mua không?",
    options: [
      { text: "Luôn luôn, đọc kỹ mới quyết định", type: "A" },
      { text: "Đọc lướt, xem điểm chung", type: "B" },
      { text: "Chỉ đọc review tiêu cực", type: "C" },
      { text: "Không đọc, tin vào lựa chọn của mình", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn review ở đâu nhiều nhất?",
    options: [
      { text: "Shopee, Lazada - mua sắm online", type: "A" },
      { text: "Google Maps, Foody - đồ ăn, địa điểm", type: "B" },
      { text: "Facebook, TikTok - chia sẻ với bạn bè", type: "C" },
      { text: "Không review ở đâu cả", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Lý do chính bạn viết review?",
    options: [
      { text: "Giúp người khác quyết định", type: "A" },
      { text: "Nhận xu/voucher từ app", type: "B" },
      { text: "Chia sẻ trải nghiệm, cảm xúc", type: "C" },
      { text: "Không có lý do, viết cho vui", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Reviewer Khắt Khe",
    emoji: "⭐",
    description: "Bạn là người review nghiêm túc và khắt khe! Review của bạn thường chi tiết, thẳng thắn và không ngại chỉ ra những điểm yếu. Nhiều người tin tưởng review của bạn.",
    traits: ["Thẳng thắn", "Chi tiết", "Khắt khe", "Đáng tin cậy"],
    strengths: ["Review có giá trị", "Giúp người khác tránh lừa đảo", "Cải thiện chất lượng dịch vụ"],
    weaknesses: ["Có thể quá nghiêm khắc", "Đôi khi gây mất lòng shop"],
    tips: ["Công bằng hơn với những điểm tốt", "Cho shop cơ hội sửa sai"],
  },
  B: {
    type: "B",
    title: "Reviewer Tích Cực",
    emoji: "💯",
    description: "Bạn là người review tích cực và dễ thương! Bạn thường khen ngợi những điều tốt đẹp và ít khi để lại review tiêu cực. Bạn tin vào sự động viên hơn là chỉ trích.",
    traits: ["Tích cực", "Dễ tính", "Động viên", "Thân thiện"],
    strengths: ["Tạo không khí vui vẻ", "Được shop yêu thích", "Lan tỏa năng lượng tích cực"],
    weaknesses: ["Có thể không phản ánh đúng chất lượng", "Người khác khó tham khảo"],
    tips: ["Đưa ra cả điểm cần cải thiện", "Cân bằng giữa khen và góp ý"],
  },
  C: {
    type: "C",
    title: "Reviewer Chuyên Nghiệp",
    emoji: "📝",
    description: "Bạn là reviewer chuyên nghiệp! Review của bạn cân bằng, chi tiết và khách quan. Bạn đánh giá cả ưu lẫn nhược điểm, giúp người đọc có cái nhìn toàn diện.",
    traits: ["Chuyên nghiệp", "Cân bằng", "Chi tiết", "Khách quan"],
    strengths: ["Review chất lượng cao", "Đáng tin cậy", "Giúp ích cho cộng đồng"],
    weaknesses: ["Tốn nhiều thời gian viết", "Có thể quá chi tiết"],
    tips: ["Tiếp tục phong cách này", "Có thể làm reviewer chuyên nghiệp"],
  },
  D: {
    type: "D",
    title: "Reviewer Thoải Mái",
    emoji: "😎",
    description: "Bạn review thoải mái, không áp lực! Bạn viết review khi có hứng, không bị ràng buộc. Review của bạn chân thật theo cảm xúc lúc đó.",
    traits: ["Thoải mái", "Chân thật", "Tự do", "Không áp lực"],
    strengths: ["Review tự nhiên", "Không bị gò bó", "Phản ánh cảm xúc thật"],
    weaknesses: ["Thiếu nhất quán", "Có thể thiếu chi tiết"],
    tips: ["Viết review nhiều hơn", "Giúp ích cho cộng đồng mua sắm"],
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
