// Phong Cách Đặt Mục Tiêu Năm Mới
// Khám phá phong cách đặt và thực hiện mục tiêu của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn có đặt mục tiêu năm mới không?",
    options: [
      { text: "Có, rất chi tiết và cụ thể", type: "A" },
      { text: "Có, nhưng khá chung chung", type: "B" },
      { text: "Đôi khi, tùy năm", type: "C" },
      { text: "Không, sống theo cảm hứng", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn đặt mục tiêu theo phương pháp nào?",
    options: [
      { text: "SMART (Specific, Measurable...)", type: "A" },
      { text: "OKR (Objectives and Key Results)", type: "B" },
      { text: "Vision board, hình dung", type: "C" },
      { text: "Không theo phương pháp cụ thể", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn đặt bao nhiêu mục tiêu mỗi năm?",
    options: [
      { text: "1-3 mục tiêu lớn, tập trung", type: "A" },
      { text: "4-6 mục tiêu cho các lĩnh vực khác nhau", type: "B" },
      { text: "Nhiều mục tiêu nhỏ, dễ đạt", type: "C" },
      { text: "Không đếm, tùy cảm hứng", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn theo dõi tiến độ mục tiêu như thế nào?",
    options: [
      { text: "Review hàng tuần/tháng, có checklist", type: "A" },
      { text: "Review theo quý, điều chỉnh", type: "B" },
      { text: "Thỉnh thoảng nhớ ra thì check", type: "C" },
      { text: "Không theo dõi, để cuối năm xem", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi không đạt được mục tiêu, bạn?",
    options: [
      { text: "Phân tích nguyên nhân, điều chỉnh", type: "A" },
      { text: "Buồn một chút rồi bỏ qua", type: "B" },
      { text: "Giảm kỳ vọng, đặt mục tiêu dễ hơn", type: "C" },
      { text: "Không quan trọng, tiếp tục sống", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Mục tiêu năm mới của bạn thường liên quan đến?",
    options: [
      { text: "Sự nghiệp, tài chính", type: "A" },
      { text: "Sức khỏe, thể dục", type: "B" },
      { text: "Quan hệ, gia đình", type: "C" },
      { text: "Phát triển bản thân, học tập", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn có chia sẻ mục tiêu với ai không?",
    options: [
      { text: "Có, để có người giám sát", type: "A" },
      { text: "Có, với người thân thiết", type: "B" },
      { text: "Không, giữ bí mật để tránh áp lực", type: "C" },
      { text: "Tùy mục tiêu", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn có thưởng cho mình khi đạt mục tiêu không?",
    options: [
      { text: "Có, reward rõ ràng từ đầu", type: "A" },
      { text: "Đôi khi, nếu là mục tiêu lớn", type: "B" },
      { text: "Không, đạt được là vui rồi", type: "C" },
      { text: "Hiếm khi nhớ để thưởng", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Công cụ bạn dùng để quản lý mục tiêu?",
    options: [
      { text: "App chuyên dụng (Notion, Todoist...)", type: "A" },
      { text: "Excel, Google Sheets", type: "B" },
      { text: "Sổ tay, bullet journal", type: "C" },
      { text: "Không dùng công cụ, nhớ trong đầu", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn có accountability partner không?",
    options: [
      { text: "Có, check-in thường xuyên", type: "A" },
      { text: "Có coach/mentor hướng dẫn", type: "B" },
      { text: "Có nhóm bạn cùng mục tiêu", type: "C" },
      { text: "Không, tự chịu trách nhiệm", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Tỷ lệ đạt mục tiêu năm trước của bạn?",
    options: [
      { text: "80-100%, gần như đạt hết", type: "A" },
      { text: "50-80%, đạt phần lớn", type: "B" },
      { text: "30-50%, được một nửa", type: "C" },
      { text: "Dưới 30%, ít đạt được", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Điều quan trọng nhất khi đặt mục tiêu với bạn?",
    options: [
      { text: "Mục tiêu phải khả thi, đo lường được", type: "A" },
      { text: "Mục tiêu phải có ý nghĩa với mình", type: "B" },
      { text: "Mục tiêu phải đủ thách thức", type: "C" },
      { text: "Mục tiêu phải linh hoạt, có thể điều chỉnh", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người Đặt Mục Tiêu Chuyên Nghiệp",
    emoji: "🎯",
    description: "Bạn là người đặt mục tiêu rất chuyên nghiệp và có hệ thống! Bạn dùng các framework, công cụ và theo dõi tiến độ thường xuyên. Tỷ lệ đạt mục tiêu của bạn rất cao.",
    traits: ["Chuyên nghiệp", "Có hệ thống", "Kỷ luật", "Theo dõi sát"],
    strengths: ["Tỷ lệ thành công cao", "Có kế hoạch rõ ràng", "Biết điều chỉnh"],
    weaknesses: ["Có thể quá cứng nhắc", "Đôi khi áp lực"],
    tips: ["Cho phép mình linh hoạt hơn", "Đừng quên tận hưởng hành trình"],
  },
  B: {
    type: "B",
    title: "Người Đặt Mục Tiêu Cân Bằng",
    emoji: "⚖️",
    description: "Bạn đặt mục tiêu có cân nhắc và cân bằng! Bạn có kế hoạch nhưng không quá khắt khe. Bạn biết cách điều chỉnh khi cần và không đặt áp lực quá lớn.",
    traits: ["Cân bằng", "Linh hoạt", "Thực tế", "Không áp lực"],
    strengths: ["Bền vững", "Ít stress", "Điều chỉnh tốt"],
    weaknesses: ["Có thể đạt thấp hơn tiềm năng", "Đôi khi dễ dãi"],
    tips: ["Đôi khi hãy đặt mục tiêu cao hơn", "Thử các phương pháp mới"],
  },
  C: {
    type: "C",
    title: "Người Đặt Mục Tiêu Theo Cảm Hứng",
    emoji: "✨",
    description: "Bạn đặt mục tiêu theo cảm hứng và ý nghĩa! Bạn quan tâm đến việc mục tiêu có ý nghĩa với cuộc sống hơn là con số. Bạn linh hoạt và không bị gò bó.",
    traits: ["Cảm hứng", "Ý nghĩa", "Linh hoạt", "Tự do"],
    strengths: ["Mục tiêu có ý nghĩa", "Không bị stress", "Sáng tạo"],
    weaknesses: ["Khó đo lường", "Tỷ lệ thành công không ổn định"],
    tips: ["Thêm một số metrics cụ thể", "Có hệ thống theo dõi"],
  },
  D: {
    type: "D",
    title: "Người Sống Theo Dòng Chảy",
    emoji: "🌊",
    description: "Bạn không quá quan tâm đến việc đặt mục tiêu! Bạn tin vào việc sống trong hiện tại và để cuộc sống tự nhiên diễn ra. Bạn là người tự do và không bị ràng buộc.",
    traits: ["Tự do", "Hiện tại", "Không ràng buộc", "Tự nhiên"],
    strengths: ["Không stress", "Linh hoạt hoàn toàn", "Sống trọn hiện tại"],
    weaknesses: ["Có thể không phát triển", "Không có định hướng"],
    tips: ["Thử đặt một vài mục tiêu nhỏ", "Có thể giúp cuộc sống có hướng hơn"],
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
