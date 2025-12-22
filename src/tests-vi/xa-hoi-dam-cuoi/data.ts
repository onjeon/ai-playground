// Cách xử sự đám cưới
// Khám phá cách bạn xử sự khi tham dự đám cưới

export const questions = [
  {
    id: 1,
    question: "Khi được mời đám cưới, bạn nghĩ gì đầu tiên?",
    options: [
      { text: "Vui, mong chờ được dự", type: "A" },
      { text: "Tính toán phong bì bao nhiêu", type: "B" },
      { text: "Nghĩ xem mặc gì", type: "C" },
      { text: "Xem lịch có rảnh không", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn mừng cưới bao nhiêu?",
    options: [
      { text: "Theo mức chung của xã hội", type: "A" },
      { text: "Tùy vào mức thân thiết", type: "B" },
      { text: "Hỏi bạn bè mừng bao nhiêu", type: "C" },
      { text: "Mừng hậu hĩnh, không quan trọng tiền", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn đến đám cưới lúc nào?",
    options: [
      { text: "Đúng giờ, theo thiệp mời", type: "A" },
      { text: "Sớm hơn một chút để chào hỏi", type: "B" },
      { text: "Muộn một chút, vào lúc rộn ràng", type: "C" },
      { text: "Khi nào tiện thì đến", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Trang phục bạn mặc đi đám cưới?",
    options: [
      { text: "Lịch sự, kín đáo, tránh màu trắng/đỏ", type: "A" },
      { text: "Đẹp nhất, nổi bật", type: "B" },
      { text: "Thoải mái, đơn giản", type: "C" },
      { text: "Đúng dress code nếu có", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Trong buổi tiệc, bạn thường?",
    options: [
      { text: "Ngồi bàn được xếp, ăn uống lịch sự", type: "A" },
      { text: "Đi chào hỏi các bàn quen biết", type: "B" },
      { text: "Chụp ảnh, quay video liên tục", type: "C" },
      { text: "Tập trung ăn, ít nói chuyện", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi cô dâu chú rể đi chào bàn, bạn?",
    options: [
      { text: "Đứng dậy, chúc mừng thân thiện", type: "A" },
      { text: "Chụp ảnh selfie cùng họ", type: "B" },
      { text: "Nói vài câu rồi để họ đi tiếp", type: "C" },
      { text: "Ngồi im, để họ chào người khác", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn có hay tham gia các trò chơi trong tiệc?",
    options: [
      { text: "Có, nhiệt tình tham gia", type: "A" },
      { text: "Có, nếu được mời", type: "B" },
      { text: "Không, ngại đám đông", type: "C" },
      { text: "Tùy trò, chọn lọc", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn thường về lúc nào?",
    options: [
      { text: "Ở đến cuối, chờ kết thúc", type: "A" },
      { text: "Sau khi cô dâu chú rể cảm ơn", type: "B" },
      { text: "Sau bữa ăn chính", type: "C" },
      { text: "Khi nào tiện thì về", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn có hay đem người đi cùng không?",
    options: [
      { text: "Chỉ đi theo thiệp mời", type: "A" },
      { text: "Rủ thêm bạn bè nếu được", type: "B" },
      { text: "Đưa người yêu/gia đình", type: "C" },
      { text: "Đi một mình cho thoải mái", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn nghĩ gì về việc nhận lại phong bì khi mình cưới?",
    options: [
      { text: "Đây là lễ nghi, nên như vậy", type: "A" },
      { text: "Không mong đợi, ai đến là vui", type: "B" },
      { text: "Kỳ vọng họ mừng lại tương xứng", type: "C" },
      { text: "Không quan trọng, chỉ cần có mặt", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Sau đám cưới, bạn có đăng ảnh lên mạng không?",
    options: [
      { text: "Có, tag cô dâu chú rể", type: "A" },
      { text: "Có, nhưng ảnh của mình", type: "B" },
      { text: "Không, giữ riêng tư", type: "C" },
      { text: "Tùy, xem ảnh đẹp không", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Điều bạn thích nhất khi đi đám cưới?",
    options: [
      { text: "Được gặp lại bạn bè, người quen", type: "A" },
      { text: "Đồ ăn ngon, tiệc vui", type: "B" },
      { text: "Không khí hạnh phúc của đôi uyên ương", type: "C" },
      { text: "Có lý do để ăn diện", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Khách mời mẫu mực",
    emoji: "🎩",
    description: "Bạn là khách mời hoàn hảo! Đúng giờ, lịch sự, biết cách xử sự trong mọi tình huống. Cô dâu chú rể rất may mắn khi có bạn trong danh sách khách mời.",
    traits: ["Lịch sự", "Đúng mực", "Chu đáo", "Tôn trọng"],
    strengths: ["Được mọi người quý mến", "Không gây rắc rối", "Làm đẹp buổi tiệc"],
    weaknesses: ["Đôi khi quá cứng nhắc", "Có thể thiếu vui vẻ"],
    tips: ["Thả lỏng đôi khi", "Tận hưởng niềm vui của buổi tiệc"],
  },
  B: {
    type: "B",
    title: "Linh hồn của buổi tiệc",
    emoji: "🎉",
    description: "Bạn là người mang đến năng lượng vui vẻ cho đám cưới! Chào hỏi khắp nơi, tham gia trò chơi, chụp ảnh - bạn tận hưởng mọi khoảnh khắc.",
    traits: ["Vui vẻ", "Xã hội", "Năng động", "Nhiệt tình"],
    strengths: ["Làm buổi tiệc sôi động", "Kết nối mọi người", "Tạo kỷ niệm vui"],
    weaknesses: ["Có thể quá ồn ào", "Đôi khi attention-seeking"],
    tips: ["Chú ý đến cô dâu chú rể", "Cho người khác không gian"],
  },
  C: {
    type: "C",
    title: "Khách mời thầm lặng",
    emoji: "📷",
    description: "Bạn đến đám cưới để chứng kiến hạnh phúc và ghi lại kỷ niệm. Không ồn ào nhưng luôn có mặt đúng lúc, bạn là người bạn đáng tin cậy.",
    traits: ["Trầm lặng", "Quan sát", "Tình cảm", "Chu đáo"],
    strengths: ["Không gây chú ý", "Có những khoảnh khắc đẹp", "Chân thành"],
    weaknesses: ["Có thể bị lạc lõng", "Thiếu kết nối"],
    tips: ["Chủ động hơn trong giao tiếp", "Tận hưởng buổi tiệc"],
  },
  D: {
    type: "D",
    title: "Khách mời thoải mái",
    emoji: "😎",
    description: "Bạn đến đám cưới với tinh thần thoải mái, không quá câu nệ hình thức. Đến khi tiện, về khi muốn - bạn sống theo cách của mình.",
    traits: ["Thoải mái", "Tự do", "Không câu nệ", "Độc lập"],
    strengths: ["Không stress", "Tự nhiên", "Không gây áp lực"],
    weaknesses: ["Có thể thiếu tôn trọng", "Đôi khi không phù hợp"],
    tips: ["Chú ý đến lễ nghi cơ bản", "Tôn trọng gia chủ"],
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
