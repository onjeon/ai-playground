// Quan hệ với thầy cô
// Bài test khám phá mối quan hệ của bạn với thầy cô giáo

export const questions = [
  {
    id: 1,
    question: "Khi gặp thầy cô ngoài lớp, bạn thường?",
    options: [
      { text: "Chào hỏi và nói chuyện vui vẻ", type: "A" },
      { text: "Chào lịch sự rồi đi tiếp", type: "B" },
      { text: "Cúi chào nhanh và tránh mặt", type: "C" },
      { text: "Giả vờ không thấy hoặc tránh", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn cảm thấy thế nào khi bị thầy cô gọi tên?",
    options: [
      { text: "Tự tin trả lời", type: "A" },
      { text: "Hơi hồi hộp nhưng vẫn ổn", type: "B" },
      { text: "Lo lắng và căng thẳng", type: "C" },
      { text: "Sợ hãi vì hay bị nhắc nhở", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi không hiểu bài, bạn có hỏi thầy cô không?",
    options: [
      { text: "Có, hỏi ngay trong lớp hoặc sau giờ học", type: "A" },
      { text: "Đôi khi, nếu quan trọng", type: "B" },
      { text: "Hiếm khi, ngại hỏi", type: "C" },
      { text: "Không bao giờ, hỏi bạn bè thôi", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Thầy cô nhận xét về bạn như thế nào?",
    options: [
      { text: "Học giỏi, ngoan, chăm chỉ", type: "A" },
      { text: "Khá tốt, đôi khi cần cố gắng hơn", type: "B" },
      { text: "Cần tập trung hơn trong lớp", type: "C" },
      { text: "Hay bị nhắc nhở về kỷ luật", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn có hay đến phòng giáo viên không?",
    options: [
      { text: "Có, để hỏi bài hoặc giúp việc", type: "A" },
      { text: "Đôi khi, khi được gọi", type: "B" },
      { text: "Hiếm khi, chỉ khi bắt buộc", type: "C" },
      { text: "Cố tránh nếu có thể", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi thầy cô khen, bạn cảm thấy thế nào?",
    options: [
      { text: "Vui và cảm thấy được ghi nhận", type: "A" },
      { text: "Vui nhưng hơi ngại ngùng", type: "B" },
      { text: "Bất ngờ vì hiếm khi được khen", type: "C" },
      { text: "Không tin vì hay bị mắng hơn", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Khi thầy cô nhắc nhở, bạn phản ứng thế nào?",
    options: [
      { text: "Lắng nghe và cố gắng sửa", type: "A" },
      { text: "Tiếp thu nhưng hơi buồn", type: "B" },
      { text: "Im lặng và không nói gì", type: "C" },
      { text: "Khó chịu và cảm thấy không công bằng", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn có thầy cô mà bạn đặc biệt quý không?",
    options: [
      { text: "Có, nhiều thầy cô tôi quý mến", type: "A" },
      { text: "Có vài người tôi thích", type: "B" },
      { text: "Không đặc biệt ai", type: "C" },
      { text: "Không, tôi không thích thầy cô lắm", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi có việc riêng cần xin phép, bạn làm thế nào?",
    options: [
      { text: "Tự tin xin phép và giải thích", type: "A" },
      { text: "Xin phép nhưng hơi ngại", type: "B" },
      { text: "Nhờ bạn bè xin hộ", type: "C" },
      { text: "Không xin, cứ nghỉ rồi tính", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn có hay chia sẻ chuyện riêng với thầy cô không?",
    options: [
      { text: "Có, tôi tin tưởng một số thầy cô", type: "A" },
      { text: "Đôi khi, nếu cần tư vấn", type: "B" },
      { text: "Hiếm khi, giữ chuyện riêng cho mình", type: "C" },
      { text: "Không bao giờ", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Vào ngày 20/11, bạn có chúc mừng thầy cô không?",
    options: [
      { text: "Có, tự làm quà hoặc viết thiệp", type: "A" },
      { text: "Có, góp quà tặng chung với lớp", type: "B" },
      { text: "Chúc miệng cho xong", type: "C" },
      { text: "Không quan tâm lắm", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Nhìn chung, bạn đánh giá mối quan hệ với thầy cô như thế nào?",
    options: [
      { text: "Rất tốt, tôi được thầy cô quý mến", type: "A" },
      { text: "Khá tốt, quan hệ bình thường", type: "B" },
      { text: "Bình thường, không nổi bật", type: "C" },
      { text: "Không tốt lắm, hay bị để ý", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Học Trò Cưng",
    emoji: "⭐",
    description: "Bạn có mối quan hệ rất tốt với thầy cô, được quý mến và tin tưởng. Bạn tự tin giao tiếp và thường được giao những trọng trách trong lớp.",
    traits: ["Được quý mến", "Tự tin", "Chăm ngoan", "Đáng tin cậy"],
    strengths: ["Quan hệ tốt với thầy cô", "Được hỗ trợ khi cần", "Nhiều cơ hội"],
    weaknesses: ["Có thể bị bạn bè ghen tị", "Áp lực phải hoàn hảo"],
    tips: ["Giữ vững mối quan hệ tốt này", "Đừng quên quan tâm đến bạn bè"],
  },
  B: {
    type: "B",
    title: "Học Trò Ngoan",
    emoji: "😊",
    description: "Bạn có mối quan hệ khá tốt với thầy cô, lịch sự và biết cách cư xử. Dù không nổi bật nhưng bạn được đánh giá là học sinh ngoan.",
    traits: ["Lịch sự", "Biết điều", "Tôn trọng", "Hòa nhã"],
    strengths: ["Quan hệ ổn định", "Không gây rắc rối", "Được tôn trọng"],
    weaknesses: ["Có thể ít được chú ý", "Ngại thể hiện"],
    tips: ["Tự tin hơn trong giao tiếp", "Đôi khi nên chủ động hỏi bài"],
  },
  C: {
    type: "C",
    title: "Học Trò Khép Kín",
    emoji: "🤫",
    description: "Bạn có xu hướng giữ khoảng cách với thầy cô, ít giao tiếp và thường tránh sự chú ý. Điều này có thể khiến thầy cô không hiểu rõ về bạn.",
    traits: ["Khép kín", "Ít giao tiếp", "Tránh chú ý", "Độc lập"],
    strengths: ["Không gây phiền phức", "Tự lập", "Ít áp lực"],
    weaknesses: ["Khó nhờ giúp khi cần", "Có thể bị hiểu lầm"],
    tips: ["Thử mở lòng hơn với thầy cô", "Đừng ngại hỏi khi không hiểu bài"],
  },
  D: {
    type: "D",
    title: "Học Trò Cá Biệt",
    emoji: "😅",
    description: "Bạn có mối quan hệ không mấy tốt đẹp với thầy cô, thường bị nhắc nhở và có thể có vài hiểu lầm. Tuy nhiên, điều này có thể thay đổi được.",
    traits: ["Hay bị nhắc nhở", "Khó gần", "Hiểu lầm", "Cần thay đổi"],
    strengths: ["Có cá tính riêng", "Không sợ thể hiện"],
    weaknesses: ["Quan hệ căng thẳng", "Khó được hỗ trợ", "Dễ bị định kiến"],
    tips: ["Cố gắng cải thiện mối quan hệ", "Thử nhìn nhận từ góc độ của thầy cô"],
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
