// Phong cách hẹn hò trực tiếp
// Khám phá phong cách hẹn hò ngoài đời thực của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn thường gặp người mới ở đâu?",
    options: [
      { text: "Qua giới thiệu của bạn bè, gia đình", type: "A" },
      { text: "Ở công ty, trường học", type: "B" },
      { text: "Quán cafe, bar, club", type: "C" },
      { text: "Các sự kiện, lớp học, workshop", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Khi thích ai, bạn thường?",
    options: [
      { text: "Quan sát từ xa, đợi họ tiến lại", type: "A" },
      { text: "Tìm cách làm quen từ từ", type: "B" },
      { text: "Tiến lại làm quen ngay", type: "C" },
      { text: "Nhờ bạn bè giới thiệu", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi đi hẹn hò lần đầu, bạn?",
    options: [
      { text: "Rất hồi hộp, lo lắng nhiều", type: "A" },
      { text: "Hơi lo nhưng vẫn tự tin", type: "B" },
      { text: "Bình thường, như gặp bạn", type: "C" },
      { text: "Hào hứng, rất mong chờ", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn chuẩn bị cho buổi hẹn như thế nào?",
    options: [
      { text: "Rất kỹ, từ trang phục đến nội dung nói", type: "A" },
      { text: "Ăn mặc đẹp, còn lại tùy cơ ứng biến", type: "B" },
      { text: "Bình thường, là chính mình", type: "C" },
      { text: "Chuẩn bị bất ngờ, quà nhỏ", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Địa điểm hẹn hò yêu thích của bạn?",
    options: [
      { text: "Quán cafe yên tĩnh, dễ nói chuyện", type: "A" },
      { text: "Nhà hàng sang trọng", type: "B" },
      { text: "Rạp phim, khu vui chơi", type: "C" },
      { text: "Công viên, địa điểm ngoài trời", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Ai sẽ trả tiền trong buổi hẹn đầu?",
    options: [
      { text: "Người mời thì trả", type: "A" },
      { text: "Chia đôi, công bằng", type: "B" },
      { text: "Tôi sẵn sàng trả", type: "C" },
      { text: "Tùy hoàn cảnh quyết định", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn nói chuyện gì trong buổi hẹn đầu?",
    options: [
      { text: "Những câu hỏi cơ bản, tìm hiểu nhau", type: "A" },
      { text: "Sở thích, công việc, gia đình", type: "B" },
      { text: "Tất cả mọi thứ, rất cởi mở", type: "C" },
      { text: "Để họ nói, mình lắng nghe", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Sau buổi hẹn, bạn sẽ?",
    options: [
      { text: "Đợi họ nhắn tin trước", type: "A" },
      { text: "Nhắn cảm ơn và hỏi về nhà chưa", type: "B" },
      { text: "Nhắn ngay, nói hôm nay vui", type: "C" },
      { text: "Hẹn lịch gặp tiếp luôn", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Nếu buổi hẹn không như mong đợi, bạn?",
    options: [
      { text: "Im lặng, không liên lạc nữa", type: "A" },
      { text: "Nói thẳng là mình không phù hợp", type: "B" },
      { text: "Cho thêm cơ hội, gặp lần nữa", type: "C" },
      { text: "Vẫn làm bạn, mở rộng quan hệ", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn có hay rủ người khác đi hẹn hò không?",
    options: [
      { text: "Hiếm khi, đợi họ rủ", type: "A" },
      { text: "Đôi khi, khi đủ tự tin", type: "B" },
      { text: "Thường xuyên, chủ động", type: "C" },
      { text: "Luôn luôn, không ngại", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn để ý điều gì đầu tiên ở người khác?",
    options: [
      { text: "Cách nói chuyện, suy nghĩ", type: "A" },
      { text: "Ngoại hình, phong cách", type: "B" },
      { text: "Nụ cười, ánh mắt", type: "C" },
      { text: "Năng lượng, cảm giác thoải mái", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Điều gì quan trọng nhất với bạn khi hẹn hò?",
    options: [
      { text: "Tìm được người phù hợp lâu dài", type: "A" },
      { text: "Có những buổi hẹn vui vẻ", type: "B" },
      { text: "Được là chính mình", type: "C" },
      { text: "Có những kỷ niệm đẹp", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người nhẹ nhàng truyền thống",
    emoji: "🌸",
    description: "Bạn có phong cách hẹn hò truyền thống và nhẹ nhàng. Thích được tán tỉnh và không vội vàng. Bạn tin vào duyên số và những mối quan hệ phát triển tự nhiên.",
    traits: ["Nhẹ nhàng", "Truyền thống", "Kiên nhẫn", "Lãng mạn"],
    strengths: ["Tìm được người nghiêm túc", "Không bị tổn thương", "Quý giá khi yêu"],
    weaknesses: ["Có thể bỏ lỡ cơ hội", "Chờ đợi quá lâu"],
    tips: ["Đôi khi chủ động một chút", "Cho cơ hội nhiều hơn"],
  },
  B: {
    type: "B",
    title: "Người thực tế tinh tế",
    emoji: "✨",
    description: "Bạn có phong cách hẹn hò thực tế và tinh tế. Biết cách tạo ấn tượng tốt và duy trì cuộc trò chuyện thú vị. Bạn cân bằng giữa lý trí và cảm xúc.",
    traits: ["Tinh tế", "Thực tế", "Giao tiếp tốt", "Cân bằng"],
    strengths: ["Tạo ấn tượng tốt", "Biết chọn người", "Có duyên hẹn hò"],
    weaknesses: ["Đôi khi tính toán nhiều", "Có thể thiếu tự nhiên"],
    tips: ["Buông bỏ đôi khi", "Cho cảm xúc dẫn lối"],
  },
  C: {
    type: "C",
    title: "Người tự tin quyến rũ",
    emoji: "💃",
    description: "Bạn tự tin và quyến rũ trong hẹn hò. Không ngại bày tỏ và luôn là chính mình. Bạn thu hút người khác bằng năng lượng tích cực của mình.",
    traits: ["Tự tin", "Quyến rũ", "Chân thật", "Năng động"],
    strengths: ["Thu hút được người", "Có nhiều cơ hội", "Không sợ từ chối"],
    weaknesses: ["Có thể quá vội", "Đôi khi overwhelm người khác"],
    tips: ["Cho người khác thời gian", "Lắng nghe nhiều hơn"],
  },
  D: {
    type: "D",
    title: "Người lãng mạn sáng tạo",
    emoji: "🎭",
    description: "Bạn biến mỗi buổi hẹn thành một trải nghiệm đặc biệt. Sáng tạo và lãng mạn, bạn luôn tìm cách tạo ra những kỷ niệm đáng nhớ.",
    traits: ["Lãng mạn", "Sáng tạo", "Chu đáo", "Có duyên"],
    strengths: ["Tạo ấn tượng sâu sắc", "Người khác nhớ mãi", "Buổi hẹn thú vị"],
    weaknesses: ["Có thể quá cầu kỳ", "Kỳ vọng cao"],
    tips: ["Đôi khi đơn giản là đủ", "Chấp nhận sự bình thường"],
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
