// Quan hệ với bố mẹ
// Khám phá mối quan hệ của bạn với bố mẹ

export const questions = [
  {
    id: 1,
    question: "Bạn có hay chia sẻ chuyện cá nhân với bố mẹ không?",
    options: [
      { text: "Có, chia sẻ gần như mọi thứ", type: "A" },
      { text: "Có, nhưng chọn lọc", type: "B" },
      { text: "Ít khi, chỉ khi cần thiết", type: "C" },
      { text: "Không, giữ riêng tư", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Khi có quyết định quan trọng, bạn có hỏi ý kiến bố mẹ không?",
    options: [
      { text: "Luôn luôn, ý kiến họ rất quan trọng", type: "A" },
      { text: "Có, nhưng tự quyết định cuối cùng", type: "B" },
      { text: "Thỉnh thoảng, tùy vấn đề", type: "C" },
      { text: "Không, tự quyết định mọi thứ", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn liên lạc với bố mẹ bao lâu một lần?",
    options: [
      { text: "Hàng ngày", type: "A" },
      { text: "Vài lần một tuần", type: "B" },
      { text: "Một lần một tuần", type: "C" },
      { text: "Khi nào cần thì gọi", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi bố mẹ góp ý về cuộc sống của bạn, bạn cảm thấy?",
    options: [
      { text: "Biết ơn, họ quan tâm mình", type: "A" },
      { text: "Tiếp thu những gì hợp lý", type: "B" },
      { text: "Hơi khó chịu nhưng hiểu", type: "C" },
      { text: "Không thích, đó là việc của mình", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn có về thăm bố mẹ thường xuyên không?",
    options: [
      { text: "Rất thường xuyên, khi nào có thể", type: "A" },
      { text: "Thường xuyên, theo lịch", type: "B" },
      { text: "Dịp lễ, Tết", type: "C" },
      { text: "Ít khi, xa quá", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi có mâu thuẫn với bố mẹ, bạn sẽ?",
    options: [
      { text: "Nói chuyện thẳng thắn để giải quyết", type: "A" },
      { text: "Chờ nguôi giận rồi nói chuyện", type: "B" },
      { text: "Nhường họ để giữ hòa khí", type: "C" },
      { text: "Tránh né, không muốn cãi nhau", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn thể hiện tình yêu với bố mẹ như thế nào?",
    options: [
      { text: "Nói ra, ôm, thể hiện trực tiếp", type: "A" },
      { text: "Qua hành động chăm sóc", type: "B" },
      { text: "Cho tiền, mua quà", type: "C" },
      { text: "Trong lòng, không thể hiện ra", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bố mẹ hiểu bạn đến đâu?",
    options: [
      { text: "Rất hiểu, gần như mọi thứ", type: "A" },
      { text: "Hiểu phần lớn", type: "B" },
      { text: "Hiểu một phần", type: "C" },
      { text: "Không hiểu lắm", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn có trách nhiệm gì với bố mẹ?",
    options: [
      { text: "Phụng dưỡng, chăm sóc khi về già", type: "A" },
      { text: "Hỗ trợ tài chính khi có thể", type: "B" },
      { text: "Thăm hỏi thường xuyên", type: "C" },
      { text: "Lo cuộc sống của mình trước", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Khi bố mẹ ốm, bạn sẽ?",
    options: [
      { text: "Về ngay, chăm sóc trực tiếp", type: "A" },
      { text: "Thuê người chăm, gọi điện thường xuyên", type: "B" },
      { text: "Gửi tiền để lo viện phí", type: "C" },
      { text: "Để anh chị em lo, mình hỗ trợ", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn và bố mẹ có chung quan điểm không?",
    options: [
      { text: "Phần lớn, hiểu nhau tốt", type: "A" },
      { text: "Một số việc, có sự khác biệt thế hệ", type: "B" },
      { text: "Ít khi, khác biệt nhiều", type: "C" },
      { text: "Hiếm khi đồng ý", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Mối quan hệ với bố mẹ quan trọng với bạn như thế nào?",
    options: [
      { text: "Quan trọng nhất cuộc đời", type: "A" },
      { text: "Rất quan trọng", type: "B" },
      { text: "Quan trọng nhưng có giới hạn", type: "C" },
      { text: "Bình thường như mọi mối quan hệ", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Mối quan hệ gắn bó",
    emoji: "❤️",
    description: "Bạn có mối quan hệ rất gắn bó với bố mẹ. Họ là những người quan trọng nhất và bạn luôn dành thời gian, tình cảm cho họ. Đây là mối quan hệ lý tưởng!",
    traits: ["Gắn bó", "Yêu thương", "Chia sẻ", "Gần gũi"],
    strengths: ["Có nền tảng vững chắc", "Được yêu thương", "Có chỗ dựa"],
    weaknesses: ["Có thể quá phụ thuộc", "Khó tự lập hoàn toàn"],
    tips: ["Giữ sự cân bằng", "Vẫn cần có không gian riêng"],
  },
  B: {
    type: "B",
    title: "Mối quan hệ cân bằng",
    emoji: "💙",
    description: "Bạn có mối quan hệ cân bằng với bố mẹ. Bạn yêu thương họ nhưng vẫn giữ được sự độc lập. Đây là mối quan hệ lành mạnh và bền vững.",
    traits: ["Cân bằng", "Độc lập", "Tôn trọng", "Trưởng thành"],
    strengths: ["Vừa gần gũi vừa tự lập", "Hiểu biết lẫn nhau", "Ít xung đột"],
    weaknesses: ["Đôi khi có khoảng cách", "Cần duy trì giao tiếp"],
    tips: ["Tiếp tục duy trì", "Thể hiện tình cảm nhiều hơn"],
  },
  C: {
    type: "C",
    title: "Mối quan hệ xa cách",
    emoji: "💛",
    description: "Bạn và bố mẹ có khoảng cách nhất định. Có thể do hoàn cảnh hoặc tính cách, nhưng tình yêu vẫn còn đó. Bạn cần thời gian để xây dựng lại kết nối.",
    traits: ["Xa cách", "Độc lập", "Tự lập", "Giới hạn"],
    strengths: ["Tự lập sớm", "Không phụ thuộc", "Có không gian riêng"],
    weaknesses: ["Thiếu sự gắn kết", "Có thể cô đơn"],
    tips: ["Chủ động liên lạc hơn", "Thể hiện tình cảm dù khó"],
  },
  D: {
    type: "D",
    title: "Mối quan hệ phức tạp",
    emoji: "💔",
    description: "Mối quan hệ của bạn với bố mẹ khá phức tạp. Có thể có những hiểu lầm, xung đột hoặc tổn thương cần được chữa lành. Đừng mất hy vọng.",
    traits: ["Phức tạp", "Khó khăn", "Xung đột", "Cần chữa lành"],
    strengths: ["Hiểu giá trị của mối quan hệ", "Tự lập", "Kiên cường"],
    weaknesses: ["Stress về gia đình", "Khó chia sẻ", "Có thể có tổn thương"],
    tips: ["Tìm cách chữa lành", "Có thể cần chuyên gia hỗ trợ", "Cho thời gian"],
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
