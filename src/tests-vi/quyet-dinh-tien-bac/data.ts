// Quyết định về tiền bạc
// Khám phá phong cách ra quyết định tài chính của bạn

export const questions = [
  {
    id: 1,
    question: "Khi có một khoản tiền lớn, bạn thường?",
    options: [
      { text: "Tiết kiệm hoặc đầu tư ngay", type: "A" },
      { text: "Chia ra: tiết kiệm một phần, tiêu một phần", type: "B" },
      { text: "Mua ngay thứ mình muốn từ lâu", type: "C" },
      { text: "Suy nghĩ kỹ xem nên làm gì", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn lập kế hoạch tài chính như thế nào?",
    options: [
      { text: "Có ngân sách chi tiết, theo dõi mỗi tháng", type: "A" },
      { text: "Có kế hoạch chung, linh hoạt điều chỉnh", type: "B" },
      { text: "Không lên kế hoạch, tiêu theo nhu cầu", type: "C" },
      { text: "Có kế hoạch nhưng hay không theo được", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi muốn mua đồ đắt tiền, bạn?",
    options: [
      { text: "Tiết kiệm đủ tiền mới mua, không vay", type: "A" },
      { text: "Cân nhắc khả năng chi trả rồi quyết định", type: "B" },
      { text: "Mua trước lo sau, đời ngắn lắm", type: "C" },
      { text: "Suy nghĩ rất lâu, đôi khi bỏ lỡ cơ hội", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn đầu tư như thế nào?",
    options: [
      { text: "Nghiên cứu kỹ, đầu tư dài hạn, an toàn", type: "A" },
      { text: "Đa dạng hóa, cân bằng rủi ro và lợi nhuận", type: "B" },
      { text: "Thích đầu tư mạo hiểm, high risk high return", type: "C" },
      { text: "Ít đầu tư, sợ mất tiền", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi bạn bè rủ đi chơi/ăn đắt tiền?",
    options: [
      { text: "Từ chối nếu không có trong ngân sách", type: "A" },
      { text: "Tham gia nếu còn trong phạm vi cho phép", type: "B" },
      { text: "Đi thôi, tiền bạc làm ra để tiêu", type: "C" },
      { text: "Phân vân, sợ tốn tiền nhưng sợ mất vui", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn mua bảo hiểm như thế nào?",
    options: [
      { text: "Có đầy đủ các loại bảo hiểm cần thiết", type: "A" },
      { text: "Có bảo hiểm cơ bản, vừa đủ", type: "B" },
      { text: "Ít mua bảo hiểm, thấy không cần thiết", type: "C" },
      { text: "Không chắc mình có những bảo hiểm gì", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Khi thấy sản phẩm giảm giá sốc, bạn?",
    options: [
      { text: "Chỉ mua nếu đã có trong kế hoạch", type: "A" },
      { text: "Mua nếu thực sự cần và giá tốt", type: "B" },
      { text: "Mua ngay, deal tốt không thể bỏ qua", type: "C" },
      { text: "Phân vân, cuối cùng thường bỏ lỡ", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn có quỹ khẩn cấp không?",
    options: [
      { text: "Có, đủ chi tiêu ít nhất 6 tháng", type: "A" },
      { text: "Có, nhưng chưa nhiều lắm", type: "B" },
      { text: "Không có, tiêu đến đâu hay đến đó", type: "C" },
      { text: "Đang cố gắng xây dựng", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi cho bạn bè/người thân vay tiền?",
    options: [
      { text: "Có quy tắc rõ ràng, viết giấy tờ", type: "A" },
      { text: "Cho vay nếu có khả năng, tin tưởng họ", type: "B" },
      { text: "Cho vay dễ dàng, không đòi lại cũng OK", type: "C" },
      { text: "Khó từ chối dù không muốn cho vay", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn theo dõi chi tiêu như thế nào?",
    options: [
      { text: "Dùng app, ghi chép chi tiết từng đồng", type: "A" },
      { text: "Biết đại khái mình chi tiêu bao nhiêu", type: "B" },
      { text: "Không theo dõi, có bao nhiêu tiêu bấy nhiêu", type: "C" },
      { text: "Cố gắng theo dõi nhưng hay quên", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Khi lương không đủ tiêu, bạn?",
    options: [
      { text: "Cắt giảm chi tiêu, tìm nguồn thu thêm", type: "A" },
      { text: "Ưu tiên chi tiêu thiết yếu, cắt bớt khác", type: "B" },
      { text: "Vay mượn hoặc dùng thẻ tín dụng", type: "C" },
      { text: "Lo lắng nhưng không biết làm gì", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Mục tiêu tài chính quan trọng nhất của bạn?",
    options: [
      { text: "Tự do tài chính, nghỉ hưu sớm", type: "A" },
      { text: "Ổn định, có của để dành", type: "B" },
      { text: "Tận hưởng cuộc sống hiện tại", type: "C" },
      { text: "Chưa có mục tiêu rõ ràng", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người quản lý tài chính xuất sắc",
    emoji: "💰",
    description: "Bạn là người có kỷ luật tài chính tuyệt vời. Bạn biết cách tiết kiệm, đầu tư và lên kế hoạch cho tương lai một cách thông minh.",
    traits: ["Kỷ luật", "Tiết kiệm", "Kế hoạch", "Thông minh"],
    strengths: ["Tài chính ổn định", "An tâm về tương lai", "Không nợ nần"],
    weaknesses: ["Có thể quá tiết kiệm", "Đôi khi bỏ lỡ niềm vui"],
    tips: ["Thỉnh thoảng thưởng cho bản thân", "Tiền để sử dụng, không chỉ để dành"],
  },
  B: {
    type: "B",
    title: "Người cân bằng tài chính",
    emoji: "⚖️",
    description: "Bạn biết cách cân bằng giữa tiết kiệm và tận hưởng. Bạn có kế hoạch tài chính nhưng vẫn linh hoạt cho cuộc sống.",
    traits: ["Cân bằng", "Linh hoạt", "Thực tế", "Khôn ngoan"],
    strengths: ["Vừa tiết kiệm vừa tận hưởng", "Không quá căng thẳng", "Có kế hoạch"],
    weaknesses: ["Đôi khi chi tiêu vượt ngân sách", "Có thể tiết kiệm nhiều hơn"],
    tips: ["Tăng tỷ lệ tiết kiệm từ từ", "Giữ vững sự cân bằng"],
  },
  C: {
    type: "C",
    title: "Người tận hưởng hiện tại",
    emoji: "🎉",
    description: "Bạn tin vào việc tận hưởng cuộc sống ngay bây giờ. Tiền bạc với bạn là để sử dụng và tạo trải nghiệm.",
    traits: ["Tận hưởng", "Sống cho hiện tại", "Hào phóng", "Thoải mái"],
    strengths: ["Biết tận hưởng cuộc sống", "Không căng thẳng về tiền", "Nhiều trải nghiệm"],
    weaknesses: ["Có thể thiếu tiết kiệm", "Rủi ro tài chính cao"],
    tips: ["Bắt đầu tiết kiệm dù ít", "Nghĩ về tương lai đôi khi"],
  },
  D: {
    type: "D",
    title: "Người cần hướng dẫn tài chính",
    emoji: "🤔",
    description: "Bạn chưa có hệ thống quản lý tài chính rõ ràng. Bạn muốn làm tốt hơn nhưng chưa biết bắt đầu từ đâu.",
    traits: ["Đang học hỏi", "Thiếu tự tin", "Cần hướng dẫn", "Có tiềm năng"],
    strengths: ["Nhận thức được vấn đề", "Sẵn sàng thay đổi", "Có thể cải thiện"],
    weaknesses: ["Thiếu kỷ luật tài chính", "Hay lo lắng nhưng không hành động"],
    tips: ["Bắt đầu với bước nhỏ", "Học về tài chính cá nhân", "Tìm mentor tài chính"],
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
