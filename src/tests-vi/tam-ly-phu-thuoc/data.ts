// Mức độ phụ thuộc
// Bài test đánh giá mức độ phụ thuộc cảm xúc và tâm lý của bạn

export const questions = [
  {
    id: 1,
    question: "Khi không có người thân bên cạnh, bạn cảm thấy thế nào?",
    options: [
      { text: "Rất lo lắng và bất an", type: "A" },
      { text: "Hơi cô đơn nhưng vẫn ổn", type: "B" },
      { text: "Bình thường, tôi quen với điều đó", type: "C" },
      { text: "Thoải mái và tận hưởng thời gian riêng", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn có cần sự đồng ý của người khác trước khi làm việc gì không?",
    options: [
      { text: "Luôn luôn, tôi cần biết họ nghĩ gì", type: "A" },
      { text: "Thường xuyên, tôi muốn họ ủng hộ", type: "B" },
      { text: "Đôi khi, với những quyết định lớn", type: "C" },
      { text: "Hiếm khi, tôi tự quyết định", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi người yêu/bạn thân không trả lời tin nhắn, bạn nghĩ gì?",
    options: [
      { text: "Lo lắng, sợ họ giận hoặc có chuyện gì", type: "A" },
      { text: "Hơi bất an nhưng cố gắng không nghĩ nhiều", type: "B" },
      { text: "Nghĩ họ bận và đợi họ trả lời", type: "C" },
      { text: "Bình thường, ai cũng có việc riêng", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn có dễ thay đổi ý kiến theo người khác không?",
    options: [
      { text: "Rất dễ, tôi thường nghe theo người khác", type: "A" },
      { text: "Khá dễ, đặc biệt với người tôi tin tưởng", type: "B" },
      { text: "Đôi khi, nếu họ có lý", type: "C" },
      { text: "Hiếm khi, tôi có chính kiến riêng", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi gặp khó khăn, bạn thường làm gì?",
    options: [
      { text: "Gọi ngay cho người thân nhờ giúp", type: "A" },
      { text: "Chia sẻ với người thân và cùng tìm cách", type: "B" },
      { text: "Tự suy nghĩ trước rồi mới hỏi ý kiến", type: "C" },
      { text: "Tự mình giải quyết", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn cảm thấy thế nào khi phải ở một mình cuối tuần?",
    options: [
      { text: "Rất buồn và cô đơn", type: "A" },
      { text: "Hơi buồn nhưng vẫn tìm việc để làm", type: "B" },
      { text: "Bình thường, có thời gian cho bản thân", type: "C" },
      { text: "Thích thú vì được nghỉ ngơi một mình", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Mức độ bạn kiểm tra điện thoại để xem có ai nhắn tin không?",
    options: [
      { text: "Liên tục, vài phút một lần", type: "A" },
      { text: "Khá thường xuyên", type: "B" },
      { text: "Thỉnh thoảng khi rảnh", type: "C" },
      { text: "Hiếm khi, tôi không quá quan tâm", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn có hay lo lắng về việc người khác nghĩ gì về mình không?",
    options: [
      { text: "Rất hay, điều đó ảnh hưởng nhiều đến tôi", type: "A" },
      { text: "Khá hay, tôi muốn được yêu thích", type: "B" },
      { text: "Đôi khi, với những người quan trọng", type: "C" },
      { text: "Hiếm khi, tôi sống theo cách của mình", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi có xung đột với người thân, bạn thường?",
    options: [
      { text: "Rất lo lắng và muốn làm hòa ngay", type: "A" },
      { text: "Buồn nhưng vẫn giữ quan điểm", type: "B" },
      { text: "Bình tĩnh và chờ mọi thứ nguội đi", type: "C" },
      { text: "Không để ảnh hưởng quá nhiều đến mình", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn có cần được khen ngợi để cảm thấy tự tin không?",
    options: [
      { text: "Rất cần, lời khen giúp tôi tự tin hơn nhiều", type: "A" },
      { text: "Khá cần, tôi thích được công nhận", type: "B" },
      { text: "Thích nhưng không cần thiết", type: "C" },
      { text: "Không cần, tôi tự biết giá trị của mình", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Mức độ bạn thay đổi kế hoạch để phù hợp với người khác?",
    options: [
      { text: "Luôn luôn, tôi ưu tiên họ trước", type: "A" },
      { text: "Thường xuyên, tôi muốn mọi người vui", type: "B" },
      { text: "Đôi khi, nếu thuận tiện", type: "C" },
      { text: "Hiếm khi, tôi giữ kế hoạch của mình", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Khi phải đi xa một mình, bạn cảm thấy thế nào?",
    options: [
      { text: "Rất lo sợ và không muốn đi", type: "A" },
      { text: "Hơi lo nhưng vẫn có thể đi được", type: "B" },
      { text: "Bình thường, đó là cơ hội trải nghiệm", type: "C" },
      { text: "Thích thú vì được tự do khám phá", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Mức Độ Phụ Thuộc Cao",
    emoji: "🔗",
    description: "Bạn có mức độ phụ thuộc cảm xúc khá cao vào người khác. Điều này có thể khiến bạn dễ tổn thương và mất đi sự tự chủ trong cuộc sống.",
    traits: ["Phụ thuộc cảm xúc", "Cần sự an toàn", "Dễ lo lắng", "Sợ cô đơn"],
    strengths: ["Trân trọng mối quan hệ", "Gắn bó sâu sắc", "Biết quan tâm người khác"],
    weaknesses: ["Dễ bị tổn thương", "Khó tự lập", "Thiếu tự tin"],
    tips: ["Học cách yêu bản thân trước", "Tập làm những việc một mình"],
  },
  B: {
    type: "B",
    title: "Mức Độ Phụ Thuộc Trung Bình",
    emoji: "🌸",
    description: "Bạn có sự gắn kết với người thân nhưng đôi khi phụ thuộc nhiều hơn mức cần thiết. Việc cân bằng giữa kết nối và tự lập sẽ giúp bạn khỏe mạnh hơn về tinh thần.",
    traits: ["Cần kết nối", "Thích được quan tâm", "Đôi khi lo lắng", "Dễ thương"],
    strengths: ["Biết duy trì mối quan hệ", "Có trách nhiệm", "Quan tâm người khác"],
    weaknesses: ["Đôi khi thiếu tự tin", "Hay lo lắng về người khác"],
    tips: ["Phát triển sự tự tin từ bên trong", "Học cách chấp nhận sự không hoàn hảo"],
  },
  C: {
    type: "C",
    title: "Mức Độ Phụ Thuộc Thấp",
    emoji: "🌿",
    description: "Bạn có sự cân bằng tốt giữa kết nối với người khác và sự độc lập cá nhân. Bạn biết khi nào cần dựa vào người thân và khi nào nên tự mình quyết định.",
    traits: ["Cân bằng", "Tự tin", "Biết điều", "Ổn định"],
    strengths: ["Không phụ thuộc quá mức", "Có chính kiến", "Dễ thích nghi"],
    weaknesses: ["Đôi khi hơi xa cách", "Có thể bỏ lỡ sự gắn kết"],
    tips: ["Tiếp tục duy trì sự cân bằng", "Đôi khi nên mở lòng hơn"],
  },
  D: {
    type: "D",
    title: "Hoàn Toàn Độc Lập",
    emoji: "🦋",
    description: "Bạn là người rất độc lập, ít phụ thuộc vào cảm xúc hay quyết định của người khác. Tuy nhiên, đôi khi việc kết nối sâu hơn với người thân cũng rất quan trọng.",
    traits: ["Độc lập cao", "Tự chủ", "Kiên cường", "Không dễ bị ảnh hưởng"],
    strengths: ["Tự tin", "Quyết đoán", "Không phụ thuộc ai"],
    weaknesses: ["Có thể quá khép kín", "Khó chia sẻ cảm xúc"],
    tips: ["Học cách dựa vào người khác khi cần", "Mở lòng với những người thân yêu"],
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
