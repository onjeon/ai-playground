// Show truyền hình yêu thích
// Bài test khám phá loại show truyền hình phù hợp với sở thích của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn thường xem TV vào lúc nào?",
    options: [
      { text: "Buổi tối sau giờ làm việc", type: "A" },
      { text: "Cuối tuần để thư giãn", type: "B" },
      { text: "Bất cứ lúc nào rảnh", type: "C" },
      { text: "Chủ yếu xem livestream, video ngắn", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thích cảm xúc nào khi xem show?",
    options: [
      { text: "Hồi hộp, gay cấn", type: "A" },
      { text: "Vui vẻ, được cười nhiều", type: "B" },
      { text: "Xúc động, cảm động", type: "C" },
      { text: "Học được điều gì đó mới", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn thích xem show có người dẫn chương trình như thế nào?",
    options: [
      { text: "Sắc bén, thông minh", type: "A" },
      { text: "Hài hước, tạo không khí vui", type: "B" },
      { text: "Ấm áp, gần gũi", type: "C" },
      { text: "Chuyên nghiệp, có kiến thức", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn thích show có format như thế nào?",
    options: [
      { text: "Thi đấu, loại trừ dần", type: "A" },
      { text: "Gameshow vui nhộn", type: "B" },
      { text: "Reality show về cuộc sống", type: "C" },
      { text: "Talkshow, chương trình kiến thức", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn theo dõi show qua nền tảng nào?",
    options: [
      { text: "TV trực tiếp để cập nhật", type: "A" },
      { text: "YouTube, xem lại clip hay", type: "B" },
      { text: "Netflix, nền tảng streaming", type: "C" },
      { text: "TikTok, xem highlight", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn có hay vote cho thí sinh trong show không?",
    options: [
      { text: "Có, rất tích cực ủng hộ", type: "A" },
      { text: "Đôi khi, nếu thích ai đó", type: "B" },
      { text: "Không, chỉ xem cho vui", type: "C" },
      { text: "Không quan tâm đến voting", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn thích show có yếu tố gì?",
    options: [
      { text: "Drama, xung đột hấp dẫn", type: "A" },
      { text: "Tình huống hài hước, bất ngờ", type: "B" },
      { text: "Câu chuyện cảm động về con người", type: "C" },
      { text: "Kiến thức hữu ích, thực tế", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn thích xem show về chủ đề gì?",
    options: [
      { text: "Tài năng (hát, nhảy, diễn xuất)", type: "A" },
      { text: "Trò chơi, thử thách vui nhộn", type: "B" },
      { text: "Tình yêu, gia đình", type: "C" },
      { text: "Ẩm thực, du lịch, khám phá", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn có thường thảo luận về show với bạn bè không?",
    options: [
      { text: "Có, luôn bàn về kết quả và thí sinh", type: "A" },
      { text: "Có, chia sẻ clip hay", type: "B" },
      { text: "Đôi khi, khi có tập hay", type: "C" },
      { text: "Ít khi, xem một mình", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn có follow nghệ sĩ sau khi xem show không?",
    options: [
      { text: "Có, follow và ủng hộ lâu dài", type: "A" },
      { text: "Đôi khi, nếu ấn tượng", type: "B" },
      { text: "Hiếm khi, chỉ xem show", type: "C" },
      { text: "Không, xem xong là quên", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn thích xem show Việt Nam hay nước ngoài?",
    options: [
      { text: "Cả hai, ưu tiên format hay", type: "A" },
      { text: "Việt Nam, gần gũi hơn", type: "B" },
      { text: "Hàn Quốc, Nhật Bản", type: "C" },
      { text: "Âu Mỹ, content khác biệt", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Show nào sau đây bạn muốn xem nhất?",
    options: [
      { text: "The Voice, Rap Việt, Vietnam Idol", type: "A" },
      { text: "Running Man, 2 Ngày 1 Đêm", type: "B" },
      { text: "Người Ấy Là Ai, Bạn Muốn Hẹn Hò", type: "C" },
      { text: "MasterChef, Vua Đầu Bếp", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người Yêu Show Thi Tài Năng",
    emoji: "⭐",
    description: "Bạn yêu thích các show thi tài năng như The Voice, Rap Việt, Vietnam Idol. Bạn thích theo dõi hành trình của các thí sinh và cổ vũ cho họ.",
    traits: ["Đam mê âm nhạc", "Ủng hộ tài năng", "Thích drama", "Tích cực"],
    strengths: ["Biết đánh giá tài năng", "Trung thành với idol", "Thích sự cạnh tranh"],
    weaknesses: ["Có thể quá cuồng idol", "Dễ buồn khi thí sinh bị loại"],
    tips: ["Thử xem các show talent nước ngoài", "Đa dạng hóa content xem"],
  },
  B: {
    type: "B",
    title: "Người Yêu Gameshow Giải Trí",
    emoji: "😂",
    description: "Bạn yêu thích gameshow vui nhộn, mang lại tiếng cười như Running Man, 2 Ngày 1 Đêm. Bạn xem show để giải trí và thư giãn.",
    traits: ["Vui vẻ", "Yêu tiếng cười", "Thoải mái", "Thích giải trí"],
    strengths: ["Dễ cười", "Tạo không khí vui", "Dễ hài lòng"],
    weaknesses: ["Có thể bỏ qua show có chiều sâu", "Gu xem đơn giản"],
    tips: ["Thử xem variety show Hàn Quốc", "Show Việt Nam đang phát triển tốt"],
  },
  C: {
    type: "C",
    title: "Người Yêu Reality Show",
    emoji: "💕",
    description: "Bạn yêu thích reality show về tình yêu, gia đình, cuộc sống như Người Ấy Là Ai, Bạn Muốn Hẹn Hò. Bạn thích những câu chuyện thật về con người.",
    traits: ["Cảm xúc", "Quan tâm con người", "Nhạy cảm", "Tò mò"],
    strengths: ["Đồng cảm tốt", "Hiểu về con người", "Cảm nhận sâu sắc"],
    weaknesses: ["Dễ xúc động", "Có thể quá tin vào reality"],
    tips: ["Thử xem documentary", "Reality show Nhật rất hay"],
  },
  D: {
    type: "D",
    title: "Người Yêu Show Kiến Thức",
    emoji: "🍳",
    description: "Bạn yêu thích show về ẩm thực, du lịch, kiến thức như MasterChef, các chương trình khám phá. Bạn xem show để học hỏi và mở rộng hiểu biết.",
    traits: ["Ham học hỏi", "Tò mò", "Thực tế", "Đa dạng"],
    strengths: ["Học được nhiều", "Kiến thức phong phú", "Gu xem đa dạng"],
    weaknesses: ["Có thể bỏ qua show giải trí", "Đôi khi quá nghiêm túc"],
    tips: ["YouTube có nhiều content hay", "Thử xem show food/travel Việt Nam"],
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
