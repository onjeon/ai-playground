// Định Nghĩa Thành Công
// Khám phá định nghĩa thành công của riêng bạn

export const questions = [
  {
    id: 1,
    question: "Với bạn, thành công là gì?",
    options: [
      { text: "Có gia đình hạnh phúc, con cái ngoan", type: "A" },
      { text: "Có sự nghiệp, địa vị xã hội", type: "B" },
      { text: "Có nhiều tiền, tài sản", type: "C" },
      { text: "Được sống tự do, làm điều mình thích", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Nếu có 10 tỷ, bạn sẽ làm gì?",
    options: [
      { text: "Mua nhà đẹp cho gia đình, lo cho con", type: "A" },
      { text: "Đầu tư kinh doanh, mở rộng sự nghiệp", type: "B" },
      { text: "Gửi tiết kiệm, mua thêm tài sản", type: "C" },
      { text: "Đi du lịch, trải nghiệm cuộc sống", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Điều gì khiến bạn tự hào nhất?",
    options: [
      { text: "Gia đình yêu thương, đoàn kết", type: "A" },
      { text: "Thành tựu trong công việc", type: "B" },
      { text: "Khối tài sản tích lũy được", type: "C" },
      { text: "Những trải nghiệm độc đáo", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn ngưỡng mộ ai nhất?",
    options: [
      { text: "Người có gia đình hạnh phúc, con cháu thành đạt", type: "A" },
      { text: "Doanh nhân, người có địa vị cao", type: "B" },
      { text: "Người giàu có, nhiều của cải", type: "C" },
      { text: "Người sống tự do, theo đuổi đam mê", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Nếu phải chọn, bạn chọn công việc nào?",
    options: [
      { text: "Lương vừa phải nhưng có thời gian cho gia đình", type: "A" },
      { text: "Lương cao, cơ hội thăng tiến, nhưng bận rộn", type: "B" },
      { text: "Công việc kiếm được nhiều tiền nhất", type: "C" },
      { text: "Công việc tự do, theo đam mê dù thu nhập thấp", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Áp lực lớn nhất của bạn đến từ đâu?",
    options: [
      { text: "Mong đợi của gia đình, cha mẹ", type: "A" },
      { text: "Kỳ vọng trong công việc, sự nghiệp", type: "B" },
      { text: "So sánh tài chính với người khác", type: "C" },
      { text: "Không được sống theo cách mình muốn", type: "D" },
    ],
  },
  {
    id: 7,
    question: "10 năm nữa, bạn muốn mình ở đâu?",
    options: [
      { text: "Có căn nhà ấm áp, gia đình sum vầy", type: "A" },
      { text: "Làm giám đốc hoặc có công ty riêng", type: "B" },
      { text: "Tự do tài chính, nghỉ hưu sớm", type: "C" },
      { text: "Đã đi khắp nơi, sống đúng đam mê", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn sẵn sàng đánh đổi gì để thành công?",
    options: [
      { text: "Không đánh đổi gia đình, dù gì cũng được", type: "A" },
      { text: "Thời gian và sức khỏe tạm thời", type: "B" },
      { text: "Mọi thứ để có tiền", type: "C" },
      { text: "Không đánh đổi tự do", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi về già, điều gì quan trọng nhất?",
    options: [
      { text: "Con cháu đầy đàn, sum họp ngày Tết", type: "A" },
      { text: "Được mọi người tôn trọng, ngưỡng mộ", type: "B" },
      { text: "Có của ăn của để, không phải lo tiền", type: "C" },
      { text: "Có nhiều kỷ niệm đẹp để nhớ", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Câu nói nào gần với bạn nhất?",
    options: [
      { text: "Gia đình là tất cả", type: "A" },
      { text: "Không ngừng phấn đấu, vươn lên", type: "B" },
      { text: "Có tiền mua tiên cũng được", type: "C" },
      { text: "Sống là để trải nghiệm", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Thành Công Là Gia Đình Hạnh Phúc",
    emoji: "👨‍👩‍👧‍👦",
    description: "Với bạn, thành công thực sự là khi có một gia đình hạnh phúc, yêu thương. Bạn coi trọng mối quan hệ huyết thống, muốn con cái thành đạt và ngày Tết sum vầy đông đủ. Bạn sống vì người thân hơn vì bản thân.",
    traits: ["Coi trọng gia đình", "Hy sinh", "Truyền thống", "Yêu thương"],
    strengths: ["Gắn kết gia đình", "Có trách nhiệm", "Biết quan tâm người khác"],
    weaknesses: ["Đôi khi quên bản thân", "Có thể quá phụ thuộc gia đình"],
    tips: ["Đừng quên chăm sóc bản thân", "Cân bằng giữa gia đình và sự nghiệp"],
  },
  B: {
    type: "B",
    title: "Thành Công Là Sự Nghiệp & Địa Vị",
    emoji: "🏆",
    description: "Bạn định nghĩa thành công qua sự nghiệp, danh tiếng và địa vị xã hội. Bạn muốn được công nhận, ngưỡng mộ và có ảnh hưởng đến người khác. Bạn là người tham vọng, không ngừng phấn đấu để đạt được mục tiêu.",
    traits: ["Tham vọng", "Nỗ lực", "Cầu tiến", "Lãnh đạo"],
    strengths: ["Có động lực mạnh mẽ", "Làm việc chăm chỉ", "Dẫn dắt được người khác"],
    weaknesses: ["Có thể bỏ lỡ cuộc sống cá nhân", "Dễ bị stress"],
    tips: ["Nhớ nghỉ ngơi", "Đừng đánh mất mối quan hệ vì công việc"],
  },
  C: {
    type: "C",
    title: "Thành Công Là Tài Chính Vững Vàng",
    emoji: "💰",
    description: "Với bạn, thành công được đo bằng tài sản và sự tự do tài chính. Bạn thực tế, hiểu rằng tiền bạc mang lại an toàn và cơ hội. Bạn luôn tìm cách tích lũy, đầu tư để đảm bảo tương lai.",
    traits: ["Thực tế", "Tiết kiệm", "Biết tính toán", "An toàn"],
    strengths: ["Quản lý tài chính tốt", "Có kế hoạch dài hạn", "Không hoang phí"],
    weaknesses: ["Có thể quá tính toán", "Đôi khi thiếu hưởng thụ"],
    tips: ["Tiền không phải tất cả", "Đầu tư vào trải nghiệm và mối quan hệ"],
  },
  D: {
    type: "D",
    title: "Thành Công Là Sống Tự Do",
    emoji: "🦋",
    description: "Bạn định nghĩa thành công là được sống tự do, theo đuổi đam mê và trải nghiệm cuộc sống đầy đủ. Bạn không bị ràng buộc bởi tiêu chuẩn xã hội, muốn sống theo cách riêng và tận hưởng từng khoảnh khắc.",
    traits: ["Tự do", "Sáng tạo", "Phiêu lưu", "Không theo khuôn mẫu"],
    strengths: ["Dám sống khác biệt", "Nhiều trải nghiệm", "Không bị áp lực xã hội"],
    weaknesses: ["Có thể thiếu ổn định", "Khó lập kế hoạch dài hạn"],
    tips: ["Chuẩn bị tài chính cho tương lai", "Giữ liên lạc với gia đình"],
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
