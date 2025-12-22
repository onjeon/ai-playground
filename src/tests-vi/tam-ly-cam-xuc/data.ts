// Kiểu điều chỉnh cảm xúc
// Khám phá cách bạn nhận biết và điều chỉnh cảm xúc của mình

export const questions = [
  {
    id: 1,
    question: "Khi cảm thấy buồn, bạn thường làm gì?",
    options: [
      { text: "Cho phép mình buồn, rồi tìm cách vượt qua", type: "A" },
      { text: "Chia sẻ với người thân để được an ủi", type: "B" },
      { text: "Giấu đi, không muốn ai biết", type: "C" },
      { text: "Tìm cách quên đi ngay lập tức", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn nhận ra cảm xúc của mình nhanh không?",
    options: [
      { text: "Rất nhanh, hiểu rõ bản thân", type: "A" },
      { text: "Khá nhanh", type: "B" },
      { text: "Mất một lúc mới nhận ra", type: "C" },
      { text: "Thường không biết mình đang cảm thấy gì", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi tức giận, bạn thường?",
    options: [
      { text: "Hít thở sâu, bình tĩnh lại", type: "A" },
      { text: "Nói ra cảm xúc một cách tôn trọng", type: "B" },
      { text: "Giữ trong lòng, sau mới xử lý", type: "C" },
      { text: "Bùng nổ, khó kiểm soát", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn có thường bị cảm xúc chi phối quyết định không?",
    options: [
      { text: "Hiếm khi, lý trí trước", type: "A" },
      { text: "Đôi khi, nhưng biết cân bằng", type: "B" },
      { text: "Thường xuyên", type: "C" },
      { text: "Luôn luôn, cảm xúc quyết định tất cả", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi vui, bạn thể hiện như thế nào?",
    options: [
      { text: "Thể hiện rõ ràng, chia sẻ với mọi người", type: "A" },
      { text: "Vui trong lòng, mỉm cười", type: "B" },
      { text: "Kìm nén, không muốn tỏ ra quá vui", type: "C" },
      { text: "Vui quá mức, khó kiểm soát", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn xử lý cảm giác thất vọng như thế nào?",
    options: [
      { text: "Chấp nhận, rút kinh nghiệm", type: "A" },
      { text: "Buồn một chút rồi tiếp tục", type: "B" },
      { text: "Khó chấp nhận, mất thời gian dài", type: "C" },
      { text: "Đổ lỗi cho người khác hoặc bản thân", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn có hay khóc không?",
    options: [
      { text: "Khi cần, không xấu hổ", type: "A" },
      { text: "Thỉnh thoảng, khi quá xúc động", type: "B" },
      { text: "Hiếm khi, kìm nén lại", type: "C" },
      { text: "Dễ khóc, khó kiểm soát", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Khi cảm xúc tiêu cực kéo dài, bạn?",
    options: [
      { text: "Tìm nguyên nhân và giải quyết", type: "A" },
      { text: "Tìm kiếm sự hỗ trợ", type: "B" },
      { text: "Chờ đợi nó tự qua đi", type: "C" },
      { text: "Không biết phải làm gì", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn có nhận biết được cảm xúc của người khác không?",
    options: [
      { text: "Rất nhạy cảm, hiểu ngay", type: "A" },
      { text: "Khá tốt", type: "B" },
      { text: "Khó nhận ra", type: "C" },
      { text: "Thường không để ý", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn có phương pháp điều chỉnh cảm xúc không?",
    options: [
      { text: "Có, thiền, tập thể dục, viết nhật ký", type: "A" },
      { text: "Một vài cách đơn giản", type: "B" },
      { text: "Không có cách cụ thể", type: "C" },
      { text: "Dùng cách không lành mạnh (ăn uống, shopping...)", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Tâm trạng của bạn có thay đổi nhanh không?",
    options: [
      { text: "Ổn định, ít thay đổi", type: "A" },
      { text: "Thay đổi bình thường", type: "B" },
      { text: "Hay thay đổi", type: "C" },
      { text: "Thay đổi liên tục, khó đoán", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bạn đánh giá khả năng quản lý cảm xúc của mình?",
    options: [
      { text: "Tốt, EQ cao", type: "A" },
      { text: "Khá tốt, đang phát triển", type: "B" },
      { text: "Trung bình, cần cải thiện", type: "C" },
      { text: "Yếu, cảm xúc kiểm soát tôi", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Bậc thầy cảm xúc",
    emoji: "🧠",
    description: "Bạn có trí tuệ cảm xúc (EQ) rất cao. Bạn hiểu rõ cảm xúc của mình và người khác, biết cách điều chỉnh phù hợp và không để cảm xúc chi phối.",
    traits: ["EQ cao", "Tự nhận thức", "Điều chỉnh tốt", "Đồng cảm"],
    strengths: ["Quản lý cảm xúc xuất sắc", "Hiểu người khác", "Bình tĩnh"],
    weaknesses: ["Có thể quá lý trí đôi khi", "Cần cho phép cảm xúc"],
    tips: ["Tiếp tục phát triển EQ", "Chia sẻ kỹ năng với người khác"],
  },
  B: {
    type: "B",
    title: "Người cân bằng",
    emoji: "⚖️",
    description: "Bạn có khả năng quản lý cảm xúc tốt. Bạn biết cách cân bằng giữa cảm xúc và lý trí, chia sẻ khi cần và có những cách điều chỉnh lành mạnh.",
    traits: ["Cân bằng", "Lành mạnh", "Có nhận thức", "Linh hoạt"],
    strengths: ["Điều chỉnh được cảm xúc", "Biết chia sẻ", "Ổn định"],
    weaknesses: ["Đôi khi vẫn bị cảm xúc ảnh hưởng", "Cần phát triển thêm"],
    tips: ["Học thêm kỹ thuật điều chỉnh cảm xúc", "Thực hành thiền định"],
  },
  C: {
    type: "C",
    title: "Người kìm nén",
    emoji: "🔒",
    description: "Bạn có xu hướng kìm nén cảm xúc thay vì đối mặt với chúng. Điều này có thể dẫn đến stress tích tụ và khó khăn trong việc hiểu chính mình.",
    traits: ["Kìm nén", "Khó thể hiện", "Nội tâm", "Cần mở lòng"],
    strengths: ["Không bùng nổ", "Kiểm soát bên ngoài", "Độc lập"],
    weaknesses: ["Tích tụ stress", "Khó kết nối", "Có thể bùng nổ bất ngờ"],
    tips: ["Học cách thể hiện cảm xúc", "Tìm người tin tưởng để chia sẻ", "Viết nhật ký cảm xúc"],
  },
  D: {
    type: "D",
    title: "Cần phát triển EQ",
    emoji: "🌪️",
    description: "Bạn đang gặp khó khăn trong việc quản lý cảm xúc. Cảm xúc có thể chi phối cuộc sống và quyết định của bạn. Đã đến lúc học cách làm chủ cảm xúc!",
    traits: ["Cảm xúc mạnh", "Khó kiểm soát", "Cần hỗ trợ", "Tiềm năng lớn"],
    strengths: ["Cảm xúc phong phú", "Chân thật", "Có khả năng thay đổi"],
    weaknesses: ["Dễ bùng nổ", "Quyết định theo cảm xúc", "Tâm trạng thất thường"],
    tips: ["Tìm kiếm chuyên gia tâm lý", "Học kỹ thuật thở và thiền", "Bạn có thể thay đổi!"],
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
