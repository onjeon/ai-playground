// Ngôn ngữ tình yêu
// Khám phá ngôn ngữ tình yêu của bạn - cách bạn thể hiện và nhận tình yêu

export const questions = [
  {
    id: 1,
    question: "Điều gì khiến bạn cảm thấy được yêu thương nhất?",
    options: [
      { text: "Nghe những lời nói yêu thương, khen ngợi", type: "A" },
      { text: "Được ôm, nắm tay, gần gũi", type: "B" },
      { text: "Nhận quà hoặc món đồ ý nghĩa", type: "C" },
      { text: "Người yêu dành thời gian cho mình", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thường thể hiện tình yêu như thế nào?",
    options: [
      { text: "Nói 'Anh/Em yêu em/anh', khen ngợi", type: "A" },
      { text: "Ôm hôn, nắm tay, vuốt ve", type: "B" },
      { text: "Tặng quà, mua đồ bất ngờ", type: "C" },
      { text: "Dành thời gian chất lượng bên nhau", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi buồn, bạn cần gì từ người yêu?",
    options: [
      { text: "Lời an ủi, động viên", type: "A" },
      { text: "Cái ôm ấm áp", type: "B" },
      { text: "Họ làm điều gì đó giúp mình", type: "C" },
      { text: "Họ ở bên cạnh lắng nghe", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Điều gì làm bạn giận người yêu nhất?",
    options: [
      { text: "Nói những lời tổn thương", type: "A" },
      { text: "Không có sự gần gũi thể xác", type: "B" },
      { text: "Quên những dịp quan trọng", type: "C" },
      { text: "Không dành thời gian cho mình", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Buổi hẹn lý tưởng của bạn là gì?",
    options: [
      { text: "Nói chuyện tâm sự cả đêm", type: "A" },
      { text: "Đi dạo nắm tay, ôm ấp", type: "B" },
      { text: "Được tặng quà bất ngờ", type: "C" },
      { text: "Làm một hoạt động cùng nhau", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn cảm thấy được trân trọng khi?",
    options: [
      { text: "Người yêu khen ngợi trước mặt người khác", type: "A" },
      { text: "Người yêu luôn ôm bạn khi gặp", type: "B" },
      { text: "Người yêu nhớ những gì bạn thích", type: "C" },
      { text: "Người yêu tắt điện thoại khi ở bên bạn", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Khi xa người yêu, bạn nhớ điều gì nhất?",
    options: [
      { text: "Giọng nói, những lời yêu thương", type: "A" },
      { text: "Hơi ấm, cái ôm của họ", type: "B" },
      { text: "Những món quà họ tặng", type: "C" },
      { text: "Những khoảnh khắc bên nhau", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn muốn người yêu cho bạn biết họ yêu bạn bằng cách nào?",
    options: [
      { text: "Nói ra bằng lời", type: "A" },
      { text: "Thể hiện qua hành động thể xác", type: "B" },
      { text: "Tặng những món quà ý nghĩa", type: "C" },
      { text: "Dành toàn bộ sự chú ý cho bạn", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Điều gì khiến bạn cảm thấy an toàn trong mối quan hệ?",
    options: [
      { text: "Những lời cam kết, hứa hẹn", type: "A" },
      { text: "Sự gần gũi thể xác thường xuyên", type: "B" },
      { text: "Những hành động chăm sóc cụ thể", type: "C" },
      { text: "Thời gian chất lượng bên nhau", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Khi muốn làm hài lòng người yêu, bạn thường?",
    options: [
      { text: "Viết tin nhắn dài, nói lời yêu thương", type: "A" },
      { text: "Ôm họ thật chặt", type: "B" },
      { text: "Mua hoặc làm quà tặng họ", type: "C" },
      { text: "Lên kế hoạch cho hoạt động cùng nhau", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn biết người yêu quan tâm mình khi họ?",
    options: [
      { text: "Nói những điều tốt đẹp về bạn", type: "A" },
      { text: "Chạm vào bạn âu yếm", type: "B" },
      { text: "Làm điều gì đó giúp bạn", type: "C" },
      { text: "Muốn dành thời gian với bạn", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Món quà tình yêu ý nghĩa nhất với bạn là gì?",
    options: [
      { text: "Lời nói yêu thương chân thành", type: "A" },
      { text: "Sự gần gũi thể xác ấm áp", type: "B" },
      { text: "Món quà được chọn cẩn thận", type: "C" },
      { text: "Khoảng thời gian đặc biệt bên nhau", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Ngôn ngữ yêu thương",
    emoji: "💬",
    description: "Ngôn ngữ tình yêu của bạn là Lời nói khẳng định (Words of Affirmation). Bạn cần nghe những lời yêu thương, khen ngợi và động viên để cảm thấy được yêu.",
    traits: ["Cần lời khen", "Giao tiếp tốt", "Nhạy cảm với lời nói", "Thích được công nhận"],
    strengths: ["Biết cách thể hiện tình cảm bằng lời", "Giao tiếp cởi mở", "Động viên người khác tốt"],
    weaknesses: ["Dễ bị tổn thương bởi lời nói", "Cần được khẳng định thường xuyên"],
    tips: ["Nói cho người yêu biết bạn cần nghe lời yêu thương", "Cũng hãy khen ngợi họ thường xuyên"],
  },
  B: {
    type: "B",
    title: "Ngôn ngữ xúc giác",
    emoji: "🤗",
    description: "Ngôn ngữ tình yêu của bạn là Tiếp xúc thể chất (Physical Touch). Bạn cần sự gần gũi, ôm ấp và chạm để cảm thấy được kết nối và yêu thương.",
    traits: ["Cần gần gũi", "Ấm áp", "Thể hiện tình cảm qua hành động", "Nhạy cảm với đụng chạm"],
    strengths: ["Tạo sự ấm áp", "Thể hiện tình cảm tự nhiên", "Kết nối sâu sắc"],
    weaknesses: ["Cảm thấy xa cách nếu thiếu tiếp xúc", "Có thể bị hiểu lầm"],
    tips: ["Nói cho người yêu biết bạn cần sự gần gũi", "Tôn trọng ranh giới của đối phương"],
  },
  C: {
    type: "C",
    title: "Ngôn ngữ quà tặng",
    emoji: "🎁",
    description: "Ngôn ngữ tình yêu của bạn là Quà tặng (Receiving Gifts). Bạn cảm thấy được yêu khi nhận những món quà ý nghĩa, cho thấy người yêu nghĩ đến bạn.",
    traits: ["Trân trọng kỷ niệm", "Nhớ chi tiết", "Thích bất ngờ", "Sentimental"],
    strengths: ["Biết cách tặng quà ý nghĩa", "Nhớ những dịp quan trọng", "Trân trọng kỷ niệm"],
    weaknesses: ["Có thể bị xem là vật chất", "Thất vọng nếu quà không ý nghĩa"],
    tips: ["Giải thích rằng quan trọng là sự chu đáo, không phải giá trị", "Cũng hãy tặng quà người yêu"],
  },
  D: {
    type: "D",
    title: "Ngôn ngữ thời gian",
    emoji: "⏰",
    description: "Ngôn ngữ tình yêu của bạn là Thời gian chất lượng (Quality Time). Bạn cần người yêu dành toàn bộ sự chú ý và thời gian cho mình.",
    traits: ["Cần sự chú ý", "Thích hoạt động cùng nhau", "Đánh giá cao thời gian", "Muốn kết nối sâu"],
    strengths: ["Tạo kỷ niệm đẹp", "Chú ý đến người yêu", "Biết cách lắng nghe"],
    weaknesses: ["Cảm thấy bị bỏ rơi nếu người yêu bận", "Cần nhiều thời gian cùng nhau"],
    tips: ["Nói rõ bạn cần thời gian chất lượng", "Đặt lịch hẹn hò thường xuyên"],
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
