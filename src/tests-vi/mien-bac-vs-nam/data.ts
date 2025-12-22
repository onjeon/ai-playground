// Tính cách Bắc hay Nam
// Khám phá xem tính cách của bạn thiên về người miền Bắc hay miền Nam

export const questions = [
  {
    id: 1,
    question: "Khi gặp người lạ, bạn thường?",
    options: [
      { text: "Quan sát kỹ trước khi nói chuyện", type: "A" },
      { text: "Chào hỏi thân thiện ngay lập tức", type: "B" },
      { text: "Chờ họ nói chuyện trước", type: "C" },
      { text: "Tùy tình huống mà ứng xử", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thích ăn món gì hơn?",
    options: [
      { text: "Bún chả, phở, nem rán", type: "A" },
      { text: "Cơm tấm, hủ tiếu, bánh mì", type: "B" },
      { text: "Bún bò, mì Quảng, bánh xèo", type: "C" },
      { text: "Thích tất cả, không kén chọn", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi nói chuyện, bạn thường?",
    options: [
      { text: "Nói chậm rãi, cân nhắc từng lời", type: "A" },
      { text: "Nói nhanh, thoải mái, vui vẻ", type: "B" },
      { text: "Nói nhẹ nhàng, hơi có accent miền Trung", type: "C" },
      { text: "Tùy đối tượng mà điều chỉnh", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Quan niệm về tiền bạc của bạn?",
    options: [
      { text: "Tiết kiệm, chi tiêu có kế hoạch", type: "A" },
      { text: "Kiếm được bao nhiêu xài bấy nhiêu", type: "B" },
      { text: "Chịu khó làm, chịu khó tiết kiệm", type: "C" },
      { text: "Cân bằng giữa tiết kiệm và hưởng thụ", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi có mâu thuẫn, bạn thường?",
    options: [
      { text: "Giữ thái độ bình tĩnh, suy nghĩ kỹ", type: "A" },
      { text: "Nói thẳng, giải quyết ngay", type: "B" },
      { text: "Âm thầm xử lý, không làm to chuyện", type: "C" },
      { text: "Tìm cách hòa giải, không muốn cãi nhau", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn thích thời tiết như thế nào?",
    options: [
      { text: "Bốn mùa rõ rệt, thích mùa thu đông", type: "A" },
      { text: "Nắng ấm quanh năm", type: "B" },
      { text: "Chịu được cả nắng nóng và mưa bão", type: "C" },
      { text: "Thích khí hậu dễ chịu", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Quan điểm về gia đình của bạn?",
    options: [
      { text: "Trọng lễ nghĩa, tôn trọng truyền thống", type: "A" },
      { text: "Gần gũi, thân mật, ít câu nệ", type: "B" },
      { text: "Quan trọng nhưng không quá gò bó", type: "C" },
      { text: "Gia đình là số 1, luôn gắn kết", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Khi đi ăn nhà hàng, bạn thường?",
    options: [
      { text: "Gọi món vừa đủ, không lãng phí", type: "A" },
      { text: "Gọi nhiều để ai cũng được thử", type: "B" },
      { text: "Gọi món ngon nhất, chất lượng hơn số lượng", type: "C" },
      { text: "Để người khác gọi, mình ăn theo", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi làm việc, bạn thường?",
    options: [
      { text: "Lên kế hoạch chi tiết, thực hiện đúng", type: "A" },
      { text: "Linh hoạt, ứng biến theo tình huống", type: "B" },
      { text: "Chăm chỉ, cần cù, kiên trì", type: "C" },
      { text: "Làm tốt nhất có thể trong hoàn cảnh", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn thích kiểu giao tiếp nào?",
    options: [
      { text: "Lịch sự, trang trọng, có lễ nghĩa", type: "A" },
      { text: "Thân mật, thoải mái, không câu nệ", type: "B" },
      { text: "Chân thành, thực tế, ít nói suông", type: "C" },
      { text: "Tùy hoàn cảnh mà thay đổi", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Khi nhận quà, bạn sẽ?",
    options: [
      { text: "Cảm ơn lịch sự, mở sau khi người tặng đi", type: "A" },
      { text: "Mở ngay, vui vẻ khen ngợi", type: "B" },
      { text: "Cảm ơn và cất đi cẩn thận", type: "C" },
      { text: "Tùy người tặng mà có phản ứng phù hợp", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Cuối tuần, bạn thích làm gì?",
    options: [
      { text: "Về thăm quê, họp mặt gia đình", type: "A" },
      { text: "Cà phê với bạn bè, đi chơi", type: "B" },
      { text: "Nghỉ ngơi, làm việc nhà", type: "C" },
      { text: "Thư giãn, xem phim, đọc sách", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Tính cách miền Bắc",
    emoji: "🏛️",
    description: "Bạn mang tính cách điển hình của người miền Bắc. Bạn lịch sự, cẩn trọng trong lời nói, tôn trọng truyền thống và có tính kỷ luật cao. Bạn suy nghĩ kỹ trước khi hành động và rất chú trọng lễ nghĩa.",
    traits: ["Lịch sự", "Cẩn trọng", "Truyền thống", "Kỷ luật"],
    strengths: ["Ứng xử khéo léo", "Tôn trọng người lớn", "Có kế hoạch rõ ràng"],
    weaknesses: ["Đôi khi quá câu nệ", "Khó hòa nhập nhanh"],
    tips: ["Thử thoải mái hơn một chút", "Mở lòng với cách sống khác"],
  },
  B: {
    type: "B",
    title: "Tính cách miền Nam",
    emoji: "🌴",
    description: "Bạn mang tính cách điển hình của người miền Nam. Bạn thân thiện, cởi mở, phóng khoáng và dễ gần. Bạn sống thoải mái, ít câu nệ và luôn mang lại năng lượng tích cực cho người xung quanh.",
    traits: ["Thân thiện", "Cởi mở", "Phóng khoáng", "Dễ gần"],
    strengths: ["Dễ kết bạn", "Hòa đồng", "Không khách sáo"],
    weaknesses: ["Đôi khi quá thoải mái", "Ít chú trọng hình thức"],
    tips: ["Chú ý một chút về nghi thức", "Tiết kiệm hơn một chút"],
  },
  C: {
    type: "C",
    title: "Tính cách miền Trung",
    emoji: "⛰️",
    description: "Bạn mang tính cách điển hình của người miền Trung. Bạn chịu khó, kiên cường, thực tế và không ngại khó khăn. Bạn sống giản dị nhưng rất chân thành và có ý chí mạnh mẽ.",
    traits: ["Chịu khó", "Kiên cường", "Thực tế", "Giản dị"],
    strengths: ["Không ngại khó", "Tiết kiệm", "Có ý chí"],
    weaknesses: ["Đôi khi quá khắc khổ", "Khó thay đổi"],
    tips: ["Cho phép bản thân hưởng thụ", "Mở lòng với cái mới"],
  },
  D: {
    type: "D",
    title: "Tính cách hội nhập",
    emoji: "🌍",
    description: "Bạn có tính cách hội nhập, kết hợp ưu điểm của cả ba miền. Bạn linh hoạt, biết ứng xử phù hợp với từng hoàn cảnh và dễ dàng hòa nhập với mọi người ở mọi nơi.",
    traits: ["Linh hoạt", "Hội nhập", "Thích ứng", "Cân bằng"],
    strengths: ["Hòa nhập tốt", "Thích ứng nhanh", "Hiểu biết rộng"],
    weaknesses: ["Đôi khi thiếu bản sắc riêng", "Khó xác định mình thuộc đâu"],
    tips: ["Tự hào về sự đa dạng của mình", "Bạn là sự kết hợp hoàn hảo"],
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
