// Con Giáp Hợp Tuổi
// Khám phá độ tương hợp của bạn với các con giáp khác

export const questions = [
  {
    id: 1,
    question: "Bạn thích người yêu/bạn đời như thế nào?",
    options: [
      { text: "Mạnh mẽ, có chủ kiến, bảo vệ mình", type: "A" },
      { text: "Hiền lành, chăm chỉ, đáng tin cậy", type: "B" },
      { text: "Thông minh, hài hước, nhanh nhẹn", type: "C" },
      { text: "Vui vẻ, trung thành, yêu tự do", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Trong mối quan hệ, điều gì quan trọng nhất?",
    options: [
      { text: "Sự tôn trọng và ngưỡng mộ lẫn nhau", type: "A" },
      { text: "Sự ổn định và an toàn", type: "B" },
      { text: "Sự hiểu nhau và giao tiếp tốt", type: "C" },
      { text: "Sự vui vẻ và tự do", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn giải quyết mâu thuẫn với đối phương như thế nào?",
    options: [
      { text: "Nói thẳng, giải quyết ngay", type: "A" },
      { text: "Kiên nhẫn, chờ đợi cơ hội nói chuyện", type: "B" },
      { text: "Tìm cách thương lượng, hòa giải", type: "C" },
      { text: "Tránh né, chờ nguội giận", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Cuối tuần lý tưởng với người thương là?",
    options: [
      { text: "Đi du lịch mạo hiểm, khám phá", type: "A" },
      { text: "Ở nhà nấu ăn, xem phim cùng nhau", type: "B" },
      { text: "Đi café, shopping, gặp bạn bè", type: "C" },
      { text: "Đi picnic, dạo chơi thư giãn", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn thể hiện tình cảm qua?",
    options: [
      { text: "Hành động, sự bảo vệ", type: "A" },
      { text: "Sự chăm sóc hàng ngày", type: "B" },
      { text: "Lời nói, tin nhắn quan tâm", type: "C" },
      { text: "Thời gian bên nhau", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi người thương thành công, bạn?",
    options: [
      { text: "Tự hào, ủng hộ hết mình", type: "A" },
      { text: "Vui mừng, tiếp tục hỗ trợ", type: "B" },
      { text: "Chúc mừng, tổ chức ăn mừng", type: "C" },
      { text: "Vui lây, chia sẻ niềm vui", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Điều không thể chấp nhận trong mối quan hệ?",
    options: [
      { text: "Sự yếu đuối, phụ thuộc quá mức", type: "A" },
      { text: "Sự không trung thành, gian dối", type: "B" },
      { text: "Sự nhàm chán, không giao tiếp", type: "C" },
      { text: "Sự kiểm soát, thiếu tự do", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn muốn sống ở đâu cùng người thương?",
    options: [
      { text: "Thành phố lớn, năng động", type: "A" },
      { text: "Vùng quê yên bình, có vườn", type: "B" },
      { text: "Khu trung tâm, tiện nghi", type: "C" },
      { text: "Gần biển, gần thiên nhiên", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Kế hoạch tương lai cùng người thương?",
    options: [
      { text: "Xây dựng sự nghiệp cùng nhau", type: "A" },
      { text: "Có gia đình ổn định, ấm cúng", type: "B" },
      { text: "Du lịch khắp nơi, trải nghiệm", type: "C" },
      { text: "Tự do theo đuổi đam mê", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Khi người thương buồn, bạn?",
    options: [
      { text: "Tìm cách giải quyết vấn đề cho họ", type: "A" },
      { text: "Ở bên cạnh, chăm sóc", type: "B" },
      { text: "Lắng nghe, trò chuyện", type: "C" },
      { text: "Tìm cách làm họ vui lên", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn nghĩ gì về hôn nhân?",
    options: [
      { text: "Cần tìm người xứng đáng", type: "A" },
      { text: "Mục tiêu quan trọng trong đời", type: "B" },
      { text: "Khi tìm được người phù hợp", type: "C" },
      { text: "Không vội, để tự nhiên", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Điều bạn muốn đối phương hiểu về mình?",
    options: [
      { text: "Sự mạnh mẽ bên ngoài, mềm yếu bên trong", type: "A" },
      { text: "Sự hy sinh thầm lặng của mình", type: "B" },
      { text: "Sự quan tâm dù không nói ra", type: "C" },
      { text: "Nhu cầu tự do và không gian riêng", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Hợp với Nhóm Dũng Mãnh - Hổ, Rồng, Ngọ",
    emoji: "🐲",
    description: "Bạn hợp nhất với những người mang tính cách mạnh mẽ, quyết đoán của Hổ, Rồng và Ngọ. Họ sẽ tôn trọng bạn, cùng bạn chinh phục mục tiêu và tạo nên một mối quan hệ đầy năng lượng.",
    traits: ["Tôn trọng lẫn nhau", "Hỗ trợ sự nghiệp", "Năng động", "Đam mê"],
    strengths: ["Cặp đôi quyền lực", "Hỗ trợ nhau phát triển", "Cuộc sống không nhàm chán"],
    weaknesses: ["Có thể xung đột cái tôi", "Cần nhường nhịn"],
    tips: ["Học cách nhường nhịn", "Tôn trọng không gian riêng của nhau"],
  },
  B: {
    type: "B",
    title: "Hợp với Nhóm Cần Cù - Trâu, Dê, Heo",
    emoji: "🐂",
    description: "Bạn hợp nhất với những người mang tính cách hiền lành, chăm chỉ của Trâu, Dê và Heo. Họ sẽ mang lại sự ổn định, chăm sóc bạn và cùng bạn xây dựng một gia đình ấm cúng.",
    traits: ["Ổn định", "Chung thủy", "Chăm sóc", "An toàn"],
    strengths: ["Mối quan hệ bền vững", "Gia đình hạnh phúc", "Hỗ trợ lẫn nhau"],
    weaknesses: ["Có thể thiếu kích thích", "Cần thêm lãng mạn"],
    tips: ["Tạo bất ngờ cho nhau", "Cùng nhau trải nghiệm mới"],
  },
  C: {
    type: "C",
    title: "Hợp với Nhóm Linh Hoạt - Khỉ, Chuột, Rắn",
    emoji: "🐍",
    description: "Bạn hợp nhất với những người mang tính cách thông minh, linh hoạt của Khỉ, Chuột và Rắn. Họ sẽ mang lại cuộc sống đầy thú vị, trò chuyện không bao giờ chán và hiểu bạn sâu sắc.",
    traits: ["Thú vị", "Thông minh", "Giao tiếp tốt", "Linh hoạt"],
    strengths: ["Cuộc sống không nhàm chán", "Hiểu nhau sâu sắc", "Phát triển cùng nhau"],
    weaknesses: ["Có thể thiếu ổn định", "Cần sự cam kết rõ ràng"],
    tips: ["Cam kết rõ ràng với nhau", "Xây dựng kế hoạch chung"],
  },
  D: {
    type: "D",
    title: "Hợp với Nhóm Lạc Quan - Gà, Mèo, Chó",
    emoji: "🐱",
    description: "Bạn hợp nhất với những người mang tính cách vui vẻ, trung thành của Gà, Mèo và Chó. Họ sẽ mang lại tiếng cười, sự tự do và một mối quan hệ nhẹ nhàng, thoải mái.",
    traits: ["Vui vẻ", "Trung thành", "Tự do", "Thoải mái"],
    strengths: ["Mối quan hệ nhẹ nhàng", "Nhiều tiếng cười", "Tôn trọng tự do"],
    weaknesses: ["Có thể thiếu nghiêm túc", "Cần định hướng rõ ràng"],
    tips: ["Có kế hoạch tương lai cụ thể", "Nghiêm túc khi cần thiết"],
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
