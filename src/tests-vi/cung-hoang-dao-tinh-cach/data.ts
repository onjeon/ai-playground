// Cung Hoàng Đạo Tính Cách
// Khám phá tính cách của bạn qua cung hoàng đạo

export const questions = [
  {
    id: 1,
    question: "Khi gặp khó khăn trong cuộc sống, bạn thường làm gì?",
    options: [
      { text: "Đối mặt trực tiếp, không ngại thử thách", type: "A" },
      { text: "Suy nghĩ kỹ càng trước khi hành động", type: "B" },
      { text: "Tìm kiếm sự giúp đỡ từ người thân", type: "C" },
      { text: "Chờ đợi thời cơ thích hợp", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Trong một buổi tiệc, bạn thường?",
    options: [
      { text: "Là trung tâm của sự chú ý", type: "A" },
      { text: "Quan sát và phân tích mọi người", type: "B" },
      { text: "Trò chuyện thân mật với vài người", type: "C" },
      { text: "Ngồi một góc, thưởng thức không khí", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi ai đó làm bạn tức giận, bạn sẽ?",
    options: [
      { text: "Nói thẳng ra ngay lập tức", type: "A" },
      { text: "Phân tích tình huống trước khi phản ứng", type: "B" },
      { text: "Cố gắng hiểu lý do của họ", type: "C" },
      { text: "Giữ im lặng và tránh đối đầu", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Điều gì quan trọng nhất với bạn trong công việc?",
    options: [
      { text: "Thành tích và sự công nhận", type: "A" },
      { text: "Sự ổn định và an toàn", type: "B" },
      { text: "Môi trường hòa thuận với đồng nghiệp", type: "C" },
      { text: "Tự do sáng tạo và linh hoạt", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Cuối tuần lý tưởng của bạn là?",
    options: [
      { text: "Hoạt động ngoài trời, thể thao mạo hiểm", type: "A" },
      { text: "Đọc sách, học điều mới", type: "B" },
      { text: "Gặp gỡ bạn bè, gia đình", type: "C" },
      { text: "Nghỉ ngơi tại nhà, xem phim", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn thường đưa ra quyết định dựa trên?",
    options: [
      { text: "Trực giác và bản năng", type: "A" },
      { text: "Logic và phân tích kỹ lưỡng", type: "B" },
      { text: "Cảm xúc và tình cảm", type: "C" },
      { text: "Kinh nghiệm từ quá khứ", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Khi làm việc nhóm, vai trò của bạn thường là?",
    options: [
      { text: "Người lãnh đạo, chỉ đạo", type: "A" },
      { text: "Người lên kế hoạch, tổ chức", type: "B" },
      { text: "Người kết nối, hòa giải", type: "C" },
      { text: "Người hỗ trợ, thực hiện", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Điều gì khiến bạn cảm thấy hạnh phúc nhất?",
    options: [
      { text: "Chinh phục mục tiêu mới", type: "A" },
      { text: "Hoàn thành công việc hoàn hảo", type: "B" },
      { text: "Được yêu thương và quan tâm", type: "C" },
      { text: "Sự bình yên trong cuộc sống", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn xử lý stress như thế nào?",
    options: [
      { text: "Tập thể dục, vận động mạnh", type: "A" },
      { text: "Lên kế hoạch giải quyết từng bước", type: "B" },
      { text: "Tâm sự với người thân", type: "C" },
      { text: "Nghe nhạc, thiền định", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Trong tình yêu, bạn là người?",
    options: [
      { text: "Chủ động, quyết liệt", type: "A" },
      { text: "Thận trọng, chậm rãi", type: "B" },
      { text: "Lãng mạn, chu đáo", type: "C" },
      { text: "Bí ẩn, khó đoán", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Khi có tiền, bạn thường?",
    options: [
      { text: "Chi tiêu cho trải nghiệm mới", type: "A" },
      { text: "Tiết kiệm và đầu tư", type: "B" },
      { text: "Mua quà cho người thân", type: "C" },
      { text: "Để dành, không biết dùng gì", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Điều bạn sợ nhất là gì?",
    options: [
      { text: "Thất bại và bị đánh giá thấp", type: "A" },
      { text: "Sự hỗn loạn, thiếu kiểm soát", type: "B" },
      { text: "Sự cô đơn và bị bỏ rơi", type: "C" },
      { text: "Thay đổi lớn trong cuộc sống", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Nhóm Hỏa - Bạch Dương, Sư Tử, Nhân Mã",
    emoji: "🔥",
    description: "Bạn mang năng lượng của nguyên tố Hỏa - mạnh mẽ, nhiệt huyết và đầy đam mê. Bạn là người lãnh đạo tự nhiên, không ngại đối mặt với thử thách và luôn tràn đầy năng lượng tích cực.",
    traits: ["Tự tin", "Nhiệt huyết", "Dũng cảm", "Lạc quan"],
    strengths: ["Khả năng lãnh đạo", "Sáng tạo", "Truyền cảm hứng cho người khác"],
    weaknesses: ["Nóng vội", "Đôi khi ích kỷ"],
    tips: ["Học cách kiên nhẫn hơn", "Lắng nghe ý kiến của người khác"],
  },
  B: {
    type: "B",
    title: "Nhóm Thổ - Kim Ngưu, Xử Nữ, Ma Kết",
    emoji: "🌍",
    description: "Bạn mang năng lượng của nguyên tố Thổ - vững chắc, đáng tin cậy và thực tế. Bạn là người có tổ chức, biết lên kế hoạch và luôn hoàn thành mọi việc một cách hoàn hảo.",
    traits: ["Thực tế", "Kiên định", "Có tổ chức", "Đáng tin cậy"],
    strengths: ["Kiên nhẫn", "Chăm chỉ", "Quản lý tài chính tốt"],
    weaknesses: ["Bảo thủ", "Khó thích nghi với thay đổi"],
    tips: ["Mở lòng với những điều mới", "Đôi khi hãy liều lĩnh một chút"],
  },
  C: {
    type: "C",
    title: "Nhóm Phong - Song Tử, Thiên Bình, Bảo Bình",
    emoji: "💨",
    description: "Bạn mang năng lượng của nguyên tố Phong - linh hoạt, giao tiếp tốt và đầy sáng tạo. Bạn là người kết nối, luôn biết cách làm cho mọi người cảm thấy thoải mái.",
    traits: ["Giao tiếp tốt", "Linh hoạt", "Sáng tạo", "Hài hước"],
    strengths: ["Kỹ năng xã hội", "Tư duy mở", "Khả năng thích nghi"],
    weaknesses: ["Hay thay đổi", "Khó tập trung"],
    tips: ["Tập trung vào một mục tiêu", "Học cách cam kết lâu dài"],
  },
  D: {
    type: "D",
    title: "Nhóm Thủy - Cự Giải, Bọ Cạp, Song Ngư",
    emoji: "💧",
    description: "Bạn mang năng lượng của nguyên tố Thủy - sâu sắc, nhạy cảm và đầy trực giác. Bạn là người giàu cảm xúc, có khả năng thấu hiểu người khác một cách đặc biệt.",
    traits: ["Nhạy cảm", "Trực giác mạnh", "Sâu sắc", "Đồng cảm"],
    strengths: ["Hiểu người khác", "Sáng tạo nghệ thuật", "Trung thành"],
    weaknesses: ["Dễ bị tổn thương", "Hay suy nghĩ nhiều"],
    tips: ["Bảo vệ năng lượng của bản thân", "Đặt ranh giới rõ ràng"],
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
