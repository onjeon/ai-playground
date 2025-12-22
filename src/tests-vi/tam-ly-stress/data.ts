// Cách xử lý stress
// Khám phá cách bạn đối phó với căng thẳng trong cuộc sống

export const questions = [
  {
    id: 1,
    question: "Khi gặp căng thẳng, phản ứng đầu tiên của bạn là gì?",
    options: [
      { text: "Đối mặt và giải quyết ngay", type: "A" },
      { text: "Tìm người tâm sự", type: "B" },
      { text: "Rút lui, cần thời gian một mình", type: "C" },
      { text: "Tìm cách quên đi, làm việc khác", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thường làm gì để giảm stress?",
    options: [
      { text: "Tập thể dục, vận động", type: "A" },
      { text: "Nghe nhạc, xem phim", type: "B" },
      { text: "Ngủ nhiều hơn", type: "C" },
      { text: "Ăn uống, mua sắm", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi công việc chất đống, bạn sẽ?",
    options: [
      { text: "Lập kế hoạch, ưu tiên việc quan trọng", type: "A" },
      { text: "Nhờ đồng nghiệp giúp đỡ", type: "B" },
      { text: "Làm từ từ, không vội", type: "C" },
      { text: "Lo lắng nhưng vẫn cố làm hết", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn thường mất ngủ vì stress không?",
    options: [
      { text: "Hiếm khi, biết cách quản lý", type: "A" },
      { text: "Thỉnh thoảng", type: "B" },
      { text: "Thường xuyên", type: "C" },
      { text: "Ngủ được nhưng giấc ngủ không sâu", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi người thân gây áp lực, bạn?",
    options: [
      { text: "Nói chuyện thẳng thắn với họ", type: "A" },
      { text: "Cố gắng chiều theo", type: "B" },
      { text: "Im lặng, tránh đối đầu", type: "C" },
      { text: "Phàn nàn với người khác", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn có hay tự đặt áp lực cho bản thân không?",
    options: [
      { text: "Có, để phát triển bản thân", type: "A" },
      { text: "Một chút, vừa phải", type: "B" },
      { text: "Không, thích thoải mái", type: "C" },
      { text: "Có, và hay tự trách mình", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Dấu hiệu stress của bạn là gì?",
    options: [
      { text: "Đau đầu, mệt mỏi", type: "A" },
      { text: "Dễ cáu gắt, bực bội", type: "B" },
      { text: "Mất tập trung, hay quên", type: "C" },
      { text: "Ăn nhiều hoặc ít hơn bình thường", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn nghĩ gì về việc tìm kiếm sự giúp đỡ chuyên gia?",
    options: [
      { text: "Tốt, nên làm khi cần", type: "A" },
      { text: "Có thể, nhưng chưa thử", type: "B" },
      { text: "Không cần, tự giải quyết được", type: "C" },
      { text: "Ngại, sợ bị đánh giá", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi stress, bạn có hay chia sẻ với ai không?",
    options: [
      { text: "Có, với bạn bè hoặc gia đình", type: "A" },
      { text: "Chỉ với người rất thân", type: "B" },
      { text: "Hiếm khi, thích giữ trong lòng", type: "C" },
      { text: "Viết nhật ký hoặc mạng xã hội", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn đánh giá mức độ stress hiện tại của mình?",
    options: [
      { text: "Thấp, cuộc sống ổn", type: "A" },
      { text: "Trung bình, có lúc có lúc", type: "B" },
      { text: "Khá cao, nhiều việc lo", type: "C" },
      { text: "Rất cao, cần nghỉ ngơi", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn có thói quen nào tốt để phòng stress không?",
    options: [
      { text: "Có, tập thể dục, thiền định", type: "A" },
      { text: "Có, dành thời gian cho sở thích", type: "B" },
      { text: "Đang cố gắng xây dựng", type: "C" },
      { text: "Chưa có, không biết bắt đầu từ đâu", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Sau khi trải qua stress, bạn thường?",
    options: [
      { text: "Rút kinh nghiệm, chuẩn bị tốt hơn", type: "A" },
      { text: "Nghỉ ngơi, hồi phục", type: "B" },
      { text: "Quên đi, không muốn nhắc lại", type: "C" },
      { text: "Vẫn còn ám ảnh một thời gian", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Chiến binh stress",
    emoji: "🛡️",
    description: "Bạn có khả năng quản lý stress rất tốt. Bạn đối mặt với vấn đề một cách chủ động, tìm giải pháp và biết cách chăm sóc bản thân. Đây là kỹ năng quý giá!",
    traits: ["Chủ động", "Kiên cường", "Có kế hoạch", "Tự chủ"],
    strengths: ["Giải quyết vấn đề tốt", "Không dễ bị áp đảo", "Phục hồi nhanh"],
    weaknesses: ["Đôi khi quá cứng rắn", "Có thể bỏ qua cảm xúc"],
    tips: ["Cho phép mình yếu đuối đôi khi", "Chia sẻ với người thân nhiều hơn"],
  },
  B: {
    type: "B",
    title: "Người kết nối",
    emoji: "🤝",
    description: "Bạn xử lý stress bằng cách kết nối với người khác. Việc chia sẻ và nhận được sự hỗ trợ giúp bạn vượt qua khó khăn. Đây là cách lành mạnh!",
    traits: ["Cởi mở", "Thân thiện", "Dễ chia sẻ", "Cần sự hỗ trợ"],
    strengths: ["Không cô đơn", "Có mạng lưới hỗ trợ", "Biết tìm giúp đỡ"],
    weaknesses: ["Phụ thuộc người khác", "Khó tự giải quyết một mình"],
    tips: ["Phát triển kỹ năng tự xử lý", "Đừng ngại ở một mình đôi khi"],
  },
  C: {
    type: "C",
    title: "Người nội tâm",
    emoji: "🌊",
    description: "Bạn xử lý stress bằng cách rút lui và cần không gian riêng. Bạn thích tự mình suy nghĩ và giải quyết vấn đề trong im lặng.",
    traits: ["Nội tâm", "Độc lập", "Suy nghĩ sâu", "Cần không gian"],
    strengths: ["Tự chủ", "Không làm phiền người khác", "Bình tĩnh"],
    weaknesses: ["Hay giữ trong lòng", "Có thể bị cô lập"],
    tips: ["Học cách chia sẻ với người tin tưởng", "Đừng mang gánh nặng một mình"],
  },
  D: {
    type: "D",
    title: "Người nhạy cảm",
    emoji: "🎭",
    description: "Bạn dễ bị ảnh hưởng bởi stress và có thể tìm đến các cách thoát stress không lành mạnh. Bạn cần học cách đối mặt và xây dựng thói quen tốt hơn.",
    traits: ["Nhạy cảm", "Dễ bị ảnh hưởng", "Cảm xúc", "Cần hỗ trợ"],
    strengths: ["Nhận biết cảm xúc tốt", "Đồng cảm với người khác", "Chân thật"],
    weaknesses: ["Dễ bị stress đè bẹp", "Hay dùng cách thoát stress tạm thời"],
    tips: ["Tìm kiếm sự giúp đỡ chuyên gia", "Xây dựng thói quen lành mạnh"],
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
