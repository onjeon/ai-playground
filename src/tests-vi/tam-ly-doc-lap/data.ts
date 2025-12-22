// Mức độ độc lập
// Bài test đánh giá khả năng tự lập và độc lập của bạn trong cuộc sống

export const questions = [
  {
    id: 1,
    question: "Khi gặp vấn đề khó khăn, bạn thường làm gì đầu tiên?",
    options: [
      { text: "Tự mình tìm cách giải quyết ngay", type: "A" },
      { text: "Suy nghĩ kỹ rồi mới nhờ giúp nếu cần", type: "B" },
      { text: "Hỏi ý kiến người thân trước khi quyết định", type: "C" },
      { text: "Nhờ người khác giải quyết giúp", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Về mặt tài chính, bạn quản lý như thế nào?",
    options: [
      { text: "Hoàn toàn tự chủ, không phụ thuộc ai", type: "A" },
      { text: "Tự quản lý nhưng đôi khi cần hỗ trợ", type: "B" },
      { text: "Có sự hỗ trợ từ gia đình nhưng đang cố gắng tự lập", type: "C" },
      { text: "Phụ thuộc vào gia đình hoặc người khác", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi phải đưa ra quyết định quan trọng, bạn thường?",
    options: [
      { text: "Tự quyết định và chịu trách nhiệm", type: "A" },
      { text: "Tham khảo ý kiến nhưng tự quyết định cuối cùng", type: "B" },
      { text: "Dựa nhiều vào ý kiến người thân", type: "C" },
      { text: "Để người khác quyết định giúp", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn có thể tự nấu ăn và chăm sóc bản thân không?",
    options: [
      { text: "Hoàn toàn tự lo được mọi thứ", type: "A" },
      { text: "Tự lo được phần lớn", type: "B" },
      { text: "Biết cơ bản nhưng vẫn cần hỗ trợ", type: "C" },
      { text: "Chưa tự lo được nhiều", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi đi du lịch, bạn thường?",
    options: [
      { text: "Tự lên kế hoạch và đi một mình cũng được", type: "A" },
      { text: "Tự sắp xếp nhưng thích đi cùng bạn bè", type: "B" },
      { text: "Để người khác lên kế hoạch giúp", type: "C" },
      { text: "Chỉ đi theo tour hoặc có người dẫn", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Về công việc, bạn làm việc như thế nào?",
    options: [
      { text: "Chủ động và không cần ai nhắc nhở", type: "A" },
      { text: "Làm tốt khi có hướng dẫn ban đầu", type: "B" },
      { text: "Cần có người giám sát và hỗ trợ", type: "C" },
      { text: "Khó hoàn thành nếu không có sự giúp đỡ", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Khi sống một mình, bạn cảm thấy thế nào?",
    options: [
      { text: "Rất thoải mái và tự do", type: "A" },
      { text: "Ổn nhưng đôi khi nhớ người thân", type: "B" },
      { text: "Hơi lo lắng và muốn có người bên cạnh", type: "C" },
      { text: "Rất khó chịu và cô đơn", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn xử lý các thủ tục hành chính như thế nào?",
    options: [
      { text: "Tự làm tất cả mà không cần hỏi ai", type: "A" },
      { text: "Tự làm nhưng hỏi khi không hiểu", type: "B" },
      { text: "Cần người hướng dẫn từ đầu", type: "C" },
      { text: "Nhờ người khác làm giúp", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi gặp chuyện buồn, bạn thường?",
    options: [
      { text: "Tự xử lý cảm xúc và vượt qua", type: "A" },
      { text: "Tự suy ngẫm nhưng cũng chia sẻ với người thân", type: "B" },
      { text: "Cần được an ủi và động viên", type: "C" },
      { text: "Không thể vượt qua nếu không có người bên cạnh", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Về việc học tập/nâng cao kiến thức, bạn?",
    options: [
      { text: "Tự học và tìm tòi là chính", type: "A" },
      { text: "Kết hợp tự học và có người hướng dẫn", type: "B" },
      { text: "Cần có người dạy và hướng dẫn cụ thể", type: "C" },
      { text: "Khó tập trung nếu không có ai nhắc nhở", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Khi có ý tưởng mới, bạn thường?",
    options: [
      { text: "Tự triển khai và thực hiện ngay", type: "A" },
      { text: "Thảo luận với người khác rồi mới làm", type: "B" },
      { text: "Đợi có sự đồng ý hoặc hỗ trợ mới làm", type: "C" },
      { text: "Thường bỏ qua vì không biết bắt đầu từ đâu", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Mức độ phụ thuộc công nghệ/người khác để giải quyết vấn đề hàng ngày?",
    options: [
      { text: "Rất ít, tôi tự xoay sở được", type: "A" },
      { text: "Đôi khi cần hỗ trợ nhưng không nhiều", type: "B" },
      { text: "Khá phụ thuộc vào công nghệ/người khác", type: "C" },
      { text: "Rất phụ thuộc, khó sống thiếu sự hỗ trợ", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người Hoàn Toàn Độc Lập",
    emoji: "🦅",
    description: "Bạn là người có khả năng tự lập rất cao, có thể tự mình xoay sở trong mọi tình huống. Bạn không ngại đối mặt với thử thách và luôn tự tin vào khả năng của mình.",
    traits: ["Tự chủ cao", "Quyết đoán", "Chủ động", "Kiên cường"],
    strengths: ["Không phụ thuộc người khác", "Giải quyết vấn đề nhanh", "Tinh thần mạnh mẽ"],
    weaknesses: ["Đôi khi quá tự tin", "Khó chấp nhận sự giúp đỡ"],
    tips: ["Đôi khi cần biết dựa vào người khác", "Học cách làm việc nhóm tốt hơn"],
  },
  B: {
    type: "B",
    title: "Người Độc Lập Cân Bằng",
    emoji: "⚖️",
    description: "Bạn có sự cân bằng tốt giữa độc lập và hợp tác. Bạn có thể tự lo liệu nhưng cũng biết khi nào cần sự hỗ trợ từ người khác.",
    traits: ["Độc lập có chừng mực", "Biết hợp tác", "Linh hoạt", "Thực tế"],
    strengths: ["Cân bằng tốt", "Dễ thích nghi", "Biết nhờ giúp đúng lúc"],
    weaknesses: ["Đôi khi thiếu quyết đoán", "Có thể bỏ lỡ cơ hội"],
    tips: ["Tiếp tục duy trì sự cân bằng", "Phát triển thêm kỹ năng tự lập"],
  },
  C: {
    type: "C",
    title: "Người Đang Học Cách Tự Lập",
    emoji: "🌱",
    description: "Bạn đang trên hành trình học cách tự lập. Bạn có ý thức muốn độc lập hơn nhưng vẫn cần sự hỗ trợ từ những người xung quanh.",
    traits: ["Đang phát triển", "Cần hướng dẫn", "Ham học hỏi", "Có tiềm năng"],
    strengths: ["Biết lắng nghe", "Cầu tiến", "Dễ hợp tác"],
    weaknesses: ["Thiếu tự tin", "Phụ thuộc người khác nhiều"],
    tips: ["Thử thách bản thân với việc nhỏ trước", "Tự tin hơn vào khả năng của mình"],
  },
  D: {
    type: "D",
    title: "Người Cần Sự Hỗ Trợ",
    emoji: "🤝",
    description: "Bạn là người khá phụ thuộc vào sự hỗ trợ từ người khác. Điều này không có gì xấu, nhưng việc phát triển khả năng tự lập sẽ giúp bạn tự tin hơn trong cuộc sống.",
    traits: ["Cần hỗ trợ", "Dựa dẫm", "Thiếu tự tin", "Dễ tổn thương"],
    strengths: ["Biết nhận sự giúp đỡ", "Không ngại hỏi", "Có người hỗ trợ"],
    weaknesses: ["Khó tự quyết định", "Dễ bị ảnh hưởng bởi người khác"],
    tips: ["Bắt đầu từ những việc nhỏ", "Đặt mục tiêu tự lập từng bước"],
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
