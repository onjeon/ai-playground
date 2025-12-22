// Phong cách chi tiêu
// Khám phá phong cách chi tiêu tiền của bạn

export const questions = [
  {
    id: 1,
    question: "Khi đi mua sắm, bạn thường?",
    options: [
      { text: "Mua đúng những gì cần, không hơn", type: "A" },
      { text: "Có danh sách nhưng hay thêm vài món", type: "B" },
      { text: "Đi lòng vòng xem có gì hay hay", type: "C" },
      { text: "Mua theo cảm xúc, thích gì mua đó", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn hay tiêu tiền vào việc gì nhất?",
    options: [
      { text: "Chi phí thiết yếu: ăn uống, đi lại", type: "A" },
      { text: "Giáo dục, sách vở, khóa học", type: "B" },
      { text: "Giải trí: cafe, phim, game", type: "C" },
      { text: "Mua sắm: quần áo, mỹ phẩm, đồ tech", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi thấy món đồ đẹp nhưng không cần, bạn sẽ?",
    options: [
      { text: "Không mua, vì không cần", type: "A" },
      { text: "Suy nghĩ vài ngày rồi quyết định", type: "B" },
      { text: "Mua nếu giá hợp lý", type: "C" },
      { text: "Mua ngay vì sợ hết hàng", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn cảm thấy thế nào khi chi tiêu nhiều?",
    options: [
      { text: "Tội lỗi và hối hận", type: "A" },
      { text: "Hơi lo nhưng cũng vui", type: "B" },
      { text: "Bình thường, tiền để tiêu mà", type: "C" },
      { text: "Rất sướng, mua sắm là niềm vui", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Trước khi mua đồ online, bạn thường?",
    options: [
      { text: "So sánh giá nhiều nơi, đọc review kỹ", type: "A" },
      { text: "Xem qua review rồi mua", type: "B" },
      { text: "Thấy quảng cáo hay thì mua", type: "C" },
      { text: "Add vào giỏ rồi checkout luôn", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn có thường mua đồ trả góp không?",
    options: [
      { text: "Không bao giờ, chỉ mua khi đủ tiền", type: "A" },
      { text: "Thỉnh thoảng, cho những món lớn", type: "B" },
      { text: "Hay dùng vì tiện", type: "C" },
      { text: "Thường xuyên, mua trước lo sau", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Khi bạn bè rủ đi ăn nhà hàng sang, bạn sẽ?",
    options: [
      { text: "Từ chối hoặc đề xuất nơi rẻ hơn", type: "A" },
      { text: "Đi nhưng gọi món vừa phải", type: "B" },
      { text: "Đi và tận hưởng, chia bill sau", type: "C" },
      { text: "Đi và order thoải mái", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Cuối tháng, bạn thường?",
    options: [
      { text: "Vẫn còn dư tiền", type: "A" },
      { text: "Vừa đủ, không dư không thiếu", type: "B" },
      { text: "Hơi thiếu một chút", type: "C" },
      { text: "Cháy túi, chờ lương", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn nghĩ gì về việc mua đồ secondhand?",
    options: [
      { text: "Tuyệt vời, tiết kiệm và bền vững", type: "A" },
      { text: "Ok với một số loại đồ", type: "B" },
      { text: "Không thích lắm, thích đồ mới", type: "C" },
      { text: "Không bao giờ, chỉ dùng đồ mới", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Khi có thưởng hoặc tiền bất ngờ, bạn sẽ?",
    options: [
      { text: "Bỏ hết vào tiết kiệm", type: "A" },
      { text: "Tiết kiệm phần lớn, tiêu một ít", type: "B" },
      { text: "Tiêu phần lớn, tiết kiệm một ít", type: "C" },
      { text: "Tiêu hết cho sướng", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn có bao nhiêu subscription hàng tháng?",
    options: [
      { text: "Không có hoặc 1-2 cái thật cần", type: "A" },
      { text: "3-5 cái, đều đang sử dụng", type: "B" },
      { text: "Nhiều, có cái quên không dùng", type: "C" },
      { text: "Rất nhiều, không nhớ hết", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Triết lý chi tiêu của bạn là gì?",
    options: [
      { text: "Sống tối giản, tiêu ít nhất có thể", type: "A" },
      { text: "Chi tiêu có kế hoạch, cân đối", type: "B" },
      { text: "Tiền để phục vụ cuộc sống", type: "C" },
      { text: "Sống cho hiện tại, mai tính sau", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Chi tiêu tối giản",
    emoji: "🧘",
    description: "Bạn là người chi tiêu cực kỳ có kiểm soát. Mỗi đồng tiền đều được cân nhắc kỹ. Sống tối giản và ưu tiên giá trị thực sự.",
    traits: ["Tối giản", "Kỷ luật", "Tiết kiệm", "Thực dụng"],
    strengths: ["Tiết kiệm tốt", "Không mua sắm bốc đồng", "Tài chính ổn định"],
    weaknesses: ["Đôi khi quá khắt khe", "Có thể thiếu trải nghiệm"],
    tips: ["Cho phép mình tận hưởng đôi khi", "Tiền là công cụ, không phải mục đích"],
  },
  B: {
    type: "B",
    title: "Chi tiêu thông minh",
    emoji: "🎯",
    description: "Bạn biết cách chi tiêu hợp lý. Có kế hoạch nhưng vẫn linh hoạt, bạn cân bằng tốt giữa tiết kiệm và tận hưởng cuộc sống.",
    traits: ["Cân bằng", "Thông minh", "Có kế hoạch", "Linh hoạt"],
    strengths: ["Quản lý tốt", "Không thiếu không thừa", "Sống vui vẻ"],
    weaknesses: ["Đôi khi vượt ngân sách", "Có thể tiết kiệm thêm"],
    tips: ["Duy trì thói quen tốt", "Tăng dần tỷ lệ tiết kiệm"],
  },
  C: {
    type: "C",
    title: "Chi tiêu thoải mái",
    emoji: "😊",
    description: "Bạn tin rằng tiền để phục vụ cuộc sống. Chi tiêu khá thoải mái, thích mua những thứ làm mình vui. Cần chú ý hơn về tiết kiệm.",
    traits: ["Thoải mái", "Thích hưởng thụ", "Hào phóng", "Lạc quan"],
    strengths: ["Sống vui", "Biết tận hưởng", "Không căng thẳng"],
    weaknesses: ["Chi tiêu nhiều", "Ít tiết kiệm", "Có thể thiếu tiền"],
    tips: ["Lập ngân sách hàng tháng", "Tiết kiệm trước khi tiêu"],
  },
  D: {
    type: "D",
    title: "Chi tiêu theo cảm xúc",
    emoji: "💸",
    description: "Bạn là người mua sắm theo cảm xúc. Shopping therapy là một phần cuộc sống. Cần cảnh giác với việc chi tiêu quá mức.",
    traits: ["Bốc đồng", "Yêu mua sắm", "Sống cho hiện tại", "Tự do"],
    strengths: ["Sống trọn vẹn", "Không tiếc nuối", "Dám hưởng thụ"],
    weaknesses: ["Hay cháy túi", "Khó tiết kiệm", "Có thể nợ nần"],
    tips: ["Đợi 24h trước khi mua", "Xóa app shopping", "Lập quỹ dự phòng"],
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
