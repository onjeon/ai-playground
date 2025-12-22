// Kiểu Quán Cà Phê
// Khám phá tính cách của bạn qua lựa chọn quán cà phê

export const questions = [
  {
    id: 1,
    question: "Bạn thường đến quán cà phê để làm gì?",
    options: [
      { text: "Làm việc, học bài với laptop", type: "A" },
      { text: "Gặp gỡ bạn bè, tán gẫu", type: "B" },
      { text: "Hẹn hò, gặp đối tác", type: "C" },
      { text: "Một mình, thư giãn đọc sách", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Tiêu chí quan trọng nhất khi chọn quán cà phê?",
    options: [
      { text: "Wifi mạnh, có ổ cắm", type: "A" },
      { text: "Không gian rộng, ngồi thoải mái", type: "B" },
      { text: "View đẹp, check-in được", type: "C" },
      { text: "Yên tĩnh, ít người", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn thường ngồi quán cà phê bao lâu?",
    options: [
      { text: "3-5 tiếng, làm việc cả buổi", type: "A" },
      { text: "1-2 tiếng, đủ nói chuyện", type: "B" },
      { text: "1 tiếng, chụp ảnh rồi đi", type: "C" },
      { text: "30 phút - 1 tiếng, thư giãn nhanh", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Loại nhạc nền bạn thích ở quán cà phê?",
    options: [
      { text: "Không nhạc hoặc nhạc rất nhỏ", type: "A" },
      { text: "Acoustic, nhẹ nhàng", type: "B" },
      { text: "Nhạc trending, sôi động", type: "C" },
      { text: "Jazz, classical, nhạc không lời", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn thường gọi thêm gì ngoài cà phê?",
    options: [
      { text: "Không gọi thêm, tập trung làm việc", type: "A" },
      { text: "Bánh ngọt, snack chia sẻ cùng bạn", type: "B" },
      { text: "Combo đẹp mắt để chụp ảnh", type: "C" },
      { text: "Sách, tạp chí đọc tại quán", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Vị trí ngồi yêu thích của bạn trong quán?",
    options: [
      { text: "Góc kín, có bàn làm việc", type: "A" },
      { text: "Giữa quán, dễ giao tiếp", type: "B" },
      { text: "Gần cửa sổ, có view đẹp", type: "C" },
      { text: "Góc vắng, yên tĩnh", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn thường đến quán cà phê vào lúc nào?",
    options: [
      { text: "Sáng sớm hoặc tối khuya", type: "A" },
      { text: "Chiều cuối tuần", type: "B" },
      { text: "Khi quán vừa mở, ít người", type: "C" },
      { text: "Giờ vắng khách, yên tĩnh", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Phong cách quán cà phê bạn thích?",
    options: [
      { text: "Minimalist, công nghiệp", type: "A" },
      { text: "Ấm cúng, nhiều cây xanh", type: "B" },
      { text: "Sang trọng, Instagram-worthy", type: "C" },
      { text: "Vintage, hoài cổ", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi quán cà phê quen đông người, bạn?",
    options: [
      { text: "Tìm quán khác có chỗ làm việc", type: "A" },
      { text: "Vẫn ở lại, vui mà", type: "B" },
      { text: "Chờ bàn view đẹp", type: "C" },
      { text: "Đi về, lúc khác quay lại", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn có là khách quen của quán nào không?",
    options: [
      { text: "Có, quán có wifi tốt và yên tĩnh", type: "A" },
      { text: "Có, quán hay tụ tập với bạn bè", type: "B" },
      { text: "Không, thích khám phá quán mới", type: "C" },
      { text: "Có, quán nhỏ ít người biết", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn thường đi quán cà phê với ai?",
    options: [
      { text: "Một mình, để làm việc", type: "A" },
      { text: "Nhóm bạn 3-5 người", type: "B" },
      { text: "Người yêu hoặc bạn thân", type: "C" },
      { text: "Một mình, để thưởng thức", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Điều khiến bạn không quay lại một quán cà phê?",
    options: [
      { text: "Wifi yếu, ít ổ cắm", type: "A" },
      { text: "Phục vụ không thân thiện", type: "B" },
      { text: "Không gian không đẹp", type: "C" },
      { text: "Quá ồn, đông người", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Dân Làm Việc Tại Quán Cà Phê",
    emoji: "💻",
    description: "Quán cà phê là văn phòng thứ hai của bạn! Bạn coi trọng không gian làm việc tiện nghi với wifi mạnh và ổ cắm. Bạn là người năng động, chuyên nghiệp và biết cách làm việc hiệu quả ở mọi nơi.",
    traits: ["Năng động", "Chuyên nghiệp", "Linh hoạt", "Tập trung"],
    strengths: ["Làm việc mọi nơi", "Độc lập", "Quản lý thời gian tốt"],
    weaknesses: ["Đôi khi quá bận rộn", "Khó tách biệt công việc"],
    tips: ["Dành thời gian thư giãn thực sự", "Đôi khi hãy đến quán chỉ để nghỉ ngơi"],
  },
  B: {
    type: "B",
    title: "Người Xã Giao Tại Quán Cà Phê",
    emoji: "🗣️",
    description: "Quán cà phê là nơi gặp gỡ bạn bè của bạn! Bạn coi trọng không gian thoải mái để trò chuyện và kết nối. Bạn là người thân thiện, hòa đồng và yêu thích những buổi tụ tập vui vẻ.",
    traits: ["Thân thiện", "Hòa đồng", "Vui vẻ", "Gắn kết"],
    strengths: ["Kỹ năng xã giao tốt", "Có nhiều bạn bè", "Tạo không khí vui vẻ"],
    weaknesses: ["Đôi khi quá phụ thuộc xã hội", "Khó ở một mình"],
    tips: ["Học cách tận hưởng thời gian một mình", "Cân bằng giữa xã giao và riêng tư"],
  },
  C: {
    type: "C",
    title: "Người Yêu Thẩm Mỹ",
    emoji: "📸",
    description: "Quán cà phê với bạn phải đẹp và đáng check-in! Bạn coi trọng thẩm mỹ, không gian và trải nghiệm thị giác. Bạn là người sành điệu, có gu và luôn tìm kiếm những nơi đặc biệt.",
    traits: ["Sành điệu", "Có gu thẩm mỹ", "Yêu cái đẹp", "Sáng tạo"],
    strengths: ["Gu thẩm mỹ tốt", "Biết thưởng thức", "Khám phá nơi mới"],
    weaknesses: ["Đôi khi quá coi trọng vẻ ngoài", "Dễ bỏ lỡ những nơi đơn giản nhưng ngon"],
    tips: ["Đôi khi hãy thử những quán bình dân", "Chất lượng quan trọng hơn hình thức"],
  },
  D: {
    type: "D",
    title: "Người Tìm Kiếm Sự Yên Tĩnh",
    emoji: "🌿",
    description: "Quán cà phê với bạn là nơi trú ẩn yên bình! Bạn coi trọng không gian yên tĩnh để suy nghĩ, đọc sách và thư giãn. Bạn là người sâu sắc, nội tâm và biết cách chăm sóc tinh thần.",
    traits: ["Sâu sắc", "Nội tâm", "Yên tĩnh", "Biết tự chăm sóc"],
    strengths: ["Biết cách thư giãn", "Có chiều sâu", "Tự lập"],
    weaknesses: ["Đôi khi quá khép kín", "Tránh đám đông"],
    tips: ["Đôi khi hãy thử giao tiếp với người lạ", "Mở lòng với những trải nghiệm xã hội"],
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
