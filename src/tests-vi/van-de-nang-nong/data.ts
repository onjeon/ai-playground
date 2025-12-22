// Cách đối mặt nắng nóng
// Khám phá cách bạn xử lý khi thời tiết nắng nóng

export const questions = [
  {
    id: 1,
    question: "Khi trời nắng 40 độ, bạn cảm thấy thế nào?",
    options: [
      { text: "Bình thường, quen rồi", type: "A" },
      { text: "Hơi khó chịu nhưng chịu được", type: "B" },
      { text: "Rất khó chịu, mệt mỏi", type: "C" },
      { text: "Không chịu nổi, muốn chết", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn đối phó với nắng nóng như thế nào?",
    options: [
      { text: "Ở trong phòng điều hòa cả ngày", type: "A" },
      { text: "Uống nhiều nước, mặc đồ mát", type: "B" },
      { text: "Hạn chế ra ngoài giữa trưa", type: "C" },
      { text: "Không làm gì đặc biệt", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Điều hòa với bạn là?",
    options: [
      { text: "Nhu cầu thiết yếu, không thể thiếu", type: "A" },
      { text: "Cần thiết nhưng không phụ thuộc", type: "B" },
      { text: "Thỉnh thoảng dùng khi quá nóng", type: "C" },
      { text: "Không thích, ưa quạt gió tự nhiên", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn thường mặc gì khi trời nóng?",
    options: [
      { text: "Đồ tối giản, hở nhiều nhất có thể", type: "A" },
      { text: "Đồ cotton mỏng, màu sáng", type: "B" },
      { text: "Bình thường, không để ý nhiều", type: "C" },
      { text: "Che kín chống nắng", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Ra đường nắng, bạn chuẩn bị gì?",
    options: [
      { text: "Ô, mũ, khẩu trang, kem chống nắng", type: "A" },
      { text: "Mũ hoặc ô, kem chống nắng", type: "B" },
      { text: "Chỉ khẩu trang", type: "C" },
      { text: "Không chuẩn bị gì", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Thức uống yêu thích ngày nóng?",
    options: [
      { text: "Nước lọc, nước dừa tự nhiên", type: "A" },
      { text: "Trà đá, cà phê sữa đá", type: "B" },
      { text: "Sinh tố, nước ép trái cây", type: "C" },
      { text: "Bia, nước ngọt có ga", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Nắng nóng ảnh hưởng đến công việc bạn không?",
    options: [
      { text: "Không, làm việc trong điều hòa", type: "A" },
      { text: "Hơi mệt nhưng vẫn làm được", type: "B" },
      { text: "Giảm năng suất đáng kể", type: "C" },
      { text: "Rất ảnh hưởng, không muốn làm gì", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn có hay bị say nắng không?",
    options: [
      { text: "Không bao giờ", type: "A" },
      { text: "Rất hiếm", type: "B" },
      { text: "Đôi khi, khi ra nắng lâu", type: "C" },
      { text: "Hay bị, sức khỏe yếu", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Ngủ trưa ngày nóng, bạn?",
    options: [
      { text: "Ngủ điều hòa mát lạnh", type: "A" },
      { text: "Ngủ quạt, thoáng mát", type: "B" },
      { text: "Khó ngủ vì nóng", type: "C" },
      { text: "Không ngủ trưa", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Về tiền điện mùa nóng, bạn?",
    options: [
      { text: "Không quan tâm, mát là được", type: "A" },
      { text: "Tiết kiệm nhưng vẫn bật điều hòa", type: "B" },
      { text: "Cố gắng tiết kiệm tối đa", type: "C" },
      { text: "Stress vì tiền điện tăng", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Hoạt động yêu thích ngày nóng?",
    options: [
      { text: "Đi bơi, chơi nước", type: "A" },
      { text: "Ở nhà xem phim, đọc sách", type: "B" },
      { text: "Đi cafe, trung tâm thương mại", type: "C" },
      { text: "Nằm một chỗ, không muốn làm gì", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Nếu được chọn, bạn thích khí hậu nào?",
    options: [
      { text: "Mát mẻ quanh năm", type: "A" },
      { text: "Có 4 mùa rõ rệt", type: "B" },
      { text: "Nóng ấm, ít lạnh", type: "C" },
      { text: "Không quan trọng", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người sống trong điều hòa",
    emoji: "❄️",
    description: "Điều hòa là bạn thân của bạn! Bạn chuẩn bị kỹ lưỡng để đối phó với nắng nóng và ưu tiên sự thoải mái. Nắng nóng không làm khó được bạn.",
    traits: ["Chu đáo", "Thích mát lạnh", "Chuẩn bị kỹ", "Thoải mái"],
    strengths: ["Luôn mát mẻ", "Không bị say nắng", "Năng suất ổn định"],
    weaknesses: ["Phụ thuộc điều hòa", "Tiền điện cao", "Sức đề kháng kém"],
    tips: ["Thỉnh thoảng ra ngoài để cơ thể thích nghi", "Cân bằng giữa mát và tự nhiên"],
  },
  B: {
    type: "B",
    title: "Người thích nghi tốt",
    emoji: "☀️",
    description: "Bạn biết cách sống chung với nắng nóng một cách cân bằng. Chuẩn bị vừa đủ, không quá phụ thuộc nhưng vẫn giữ được sự thoải mái.",
    traits: ["Thích nghi", "Cân bằng", "Thực tế", "Linh hoạt"],
    strengths: ["Sống được mọi điều kiện", "Không quá phụ thuộc", "Cân bằng chi phí"],
    weaknesses: ["Đôi khi vẫn mệt", "Có thể thiếu chuẩn bị"],
    tips: ["Duy trì thói quen tốt", "Uống đủ nước"],
  },
  C: {
    type: "C",
    title: "Người khổ sở vì nắng",
    emoji: "🥵",
    description: "Nắng nóng là nỗi ám ảnh của bạn! Mệt mỏi, khó chịu, giảm năng suất - mùa hè là thử thách lớn đối với bạn.",
    traits: ["Nhạy cảm với nóng", "Dễ mệt", "Khó chịu", "Cần mát"],
    strengths: ["Biết giới hạn của mình", "Cẩn thận với sức khỏe"],
    weaknesses: ["Giảm năng suất", "Dễ say nắng", "Hay phàn nàn"],
    tips: ["Đầu tư quạt/điều hòa", "Uống nhiều nước", "Hạn chế ra ngoài giữa trưa"],
  },
  D: {
    type: "D",
    title: "Chiến binh chống nóng",
    emoji: "🛡️",
    description: "Bạn có cách riêng để đối phó với nắng nóng - có thể là quen chịu đựng hoặc không quan tâm. Dù sao thì nắng nóng không làm bạn thay đổi nhiều.",
    traits: ["Chịu đựng", "Không phàn nàn", "Tự nhiên", "Kiên cường"],
    strengths: ["Sức chịu đựng tốt", "Không phụ thuộc", "Tiết kiệm"],
    weaknesses: ["Có thể thiếu chăm sóc sức khỏe", "Dễ bị say nắng"],
    tips: ["Chú ý hơn đến sức khỏe", "Uống đủ nước dù không khát"],
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
