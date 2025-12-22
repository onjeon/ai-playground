// Cách giải quyết cãi vã
// Khám phá phong cách giải quyết mâu thuẫn của bạn

export const questions = [
  {
    id: 1,
    question: "Khi cãi nhau, bạn thường?",
    options: [
      { text: "Nói thẳng vấn đề, giải quyết ngay", type: "A" },
      { text: "Giữ im lặng, chờ nguôi giận", type: "B" },
      { text: "Cố gắng hòa giải, tìm điểm chung", type: "C" },
      { text: "Tránh né, bỏ đi chỗ khác", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Điều gì khiến bạn cãi nhau nhiều nhất?",
    options: [
      { text: "Bất đồng quan điểm, cách suy nghĩ khác", type: "A" },
      { text: "Cảm thấy không được tôn trọng", type: "B" },
      { text: "Hiểu lầm, giao tiếp không rõ ràng", type: "C" },
      { text: "Tích tụ nhiều chuyện nhỏ", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi đang cãi nhau, bạn có thể kiểm soát cảm xúc không?",
    options: [
      { text: "Có, vẫn giữ được bình tĩnh", type: "A" },
      { text: "Khó, nhưng cố gắng không nói lời tổn thương", type: "B" },
      { text: "Tùy mức độ nghiêm trọng của vấn đề", type: "C" },
      { text: "Không, dễ nổi nóng và nói những lời hối hận", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Sau khi cãi nhau, bạn cần bao lâu để nguôi giận?",
    options: [
      { text: "Nhanh thôi, không thích giận lâu", type: "A" },
      { text: "Vài giờ để suy nghĩ", type: "B" },
      { text: "Một ngày hoặc hơn", type: "C" },
      { text: "Tùy mức độ tổn thương", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn có cần nói chuyện lại sau khi cãi nhau không?",
    options: [
      { text: "Có, cần giải quyết rõ ràng", type: "A" },
      { text: "Không, thời gian sẽ làm mọi thứ qua", type: "B" },
      { text: "Có, nhưng khi cả hai đều bình tĩnh", type: "C" },
      { text: "Tùy, nếu vấn đề nghiêm trọng thì nên nói", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Ai nên chủ động làm hòa trước?",
    options: [
      { text: "Ai sai thì nên nói trước", type: "A" },
      { text: "Không quan trọng, miễn là hòa giải", type: "B" },
      { text: "Ai yêu nhiều hơn", type: "C" },
      { text: "Ai bình tĩnh hơn", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn có nhắc lại chuyện cũ khi cãi nhau không?",
    options: [
      { text: "Không, tập trung vào vấn đề hiện tại", type: "A" },
      { text: "Đôi khi, khi cảm thấy pattern lặp lại", type: "B" },
      { text: "Có, vì nó liên quan đến nhau", type: "C" },
      { text: "Cố gắng không, nhưng đôi khi khó kiềm chế", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Cách làm hòa của bạn thường là?",
    options: [
      { text: "Nói chuyện thẳng thắn, xin lỗi", type: "A" },
      { text: "Làm việc gì đó tốt đẹp cho họ", type: "B" },
      { text: "Ôm hoặc cử chỉ âu yếm", type: "C" },
      { text: "Để thời gian trôi qua, tự nhiên bình thường lại", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn có hay cãi nhau với người yêu không?",
    options: [
      { text: "Ít, vì biết cách giao tiếp", type: "A" },
      { text: "Thỉnh thoảng, như mọi cặp đôi", type: "B" },
      { text: "Hay, vì cả hai đều cá tính", type: "C" },
      { text: "Rất ít, vì tránh xung đột", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn nghĩ cãi nhau có tốt cho mối quan hệ không?",
    options: [
      { text: "Có, nếu giải quyết được vấn đề", type: "A" },
      { text: "Tùy, cãi nhau lành mạnh thì tốt", type: "B" },
      { text: "Không, nên tránh cãi nhau", type: "C" },
      { text: "Có, để hiểu nhau hơn", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Khi người yêu im lặng sau cãi nhau, bạn sẽ?",
    options: [
      { text: "Chủ động hỏi họ nghĩ gì", type: "A" },
      { text: "Cho họ không gian", type: "B" },
      { text: "Lo lắng và cố gắng làm hòa", type: "C" },
      { text: "Cũng im lặng, chờ họ nói trước", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Điều quan trọng nhất sau khi cãi nhau là?",
    options: [
      { text: "Giải quyết được vấn đề", type: "A" },
      { text: "Cả hai đều cảm thấy được lắng nghe", type: "B" },
      { text: "Không tổn thương tình cảm", type: "C" },
      { text: "Học được điều gì đó về nhau", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Giải quyết trực tiếp",
    emoji: "⚡",
    description: "Bạn thuộc kiểu giải quyết mâu thuẫn trực tiếp và nhanh chóng. Bạn không thích để vấn đề kéo dài và tin rằng nói thẳng sẽ giải quyết mọi thứ hiệu quả hơn.",
    traits: ["Quyết đoán", "Thẳng thắn", "Không né tránh", "Hiệu quả"],
    strengths: ["Giải quyết nhanh", "Không để bụng", "Rõ ràng"],
    weaknesses: ["Có thể quá gay gắt", "Đôi khi không cho người khác thời gian"],
    tips: ["Cho đối phương thời gian xử lý", "Lắng nghe nhiều hơn nói"],
  },
  B: {
    type: "B",
    title: "Giải quyết hòa hoãn",
    emoji: "🕊️",
    description: "Bạn thuộc kiểu cần thời gian để xử lý cảm xúc trước khi giải quyết vấn đề. Bạn tin rằng khi cả hai bình tĩnh, cuộc nói chuyện sẽ hiệu quả hơn.",
    traits: ["Bình tĩnh", "Cân nhắc", "Không vội vàng", "Suy nghĩ kỹ"],
    strengths: ["Tránh nói lời tổn thương", "Suy nghĩ thấu đáo", "Giữ hòa khí"],
    weaknesses: ["Đôi khi để vấn đề kéo dài", "Người khác có thể tưởng bạn không quan tâm"],
    tips: ["Cho đối phương biết bạn cần thời gian", "Đừng để quá lâu không nói chuyện"],
  },
  C: {
    type: "C",
    title: "Giải quyết hòa giải",
    emoji: "🤝",
    description: "Bạn thuộc kiểu luôn tìm cách hòa giải, tìm điểm chung và không muốn ai tổn thương. Bạn ưu tiên mối quan hệ hơn là việc đúng sai.",
    traits: ["Hòa đồng", "Empathy", "Quan tâm", "Linh hoạt"],
    strengths: ["Giữ được mối quan hệ", "Không để ai tổn thương", "Tìm được tiếng nói chung"],
    weaknesses: ["Đôi khi nhường nhịn quá", "Có thể không giải quyết được gốc rễ"],
    tips: ["Đừng quên nhu cầu của bản thân", "Đôi khi cần đứng vững với ý kiến của mình"],
  },
  D: {
    type: "D",
    title: "Giải quyết né tránh",
    emoji: "🚶",
    description: "Bạn thuộc kiểu không thích đối đầu và thường tránh xung đột. Bạn tin rằng nhiều vấn đề sẽ tự giải quyết nếu để yên.",
    traits: ["Tránh xung đột", "Bình yên", "Không thích drama", "Kiên nhẫn"],
    strengths: ["Không làm tình hình tệ hơn", "Giữ được sự bình yên", "Không nói lời hối hận"],
    weaknesses: ["Vấn đề có thể tích tụ", "Đối phương không hiểu bạn nghĩ gì"],
    tips: ["Học cách bày tỏ ý kiến", "Một số vấn đề cần được giải quyết, không thể né"],
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
