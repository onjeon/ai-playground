// Biển hay núi
// Khám phá xem bạn là người yêu biển hay yêu núi

export const questions = [
  {
    id: 1,
    question: "Khi đi du lịch, bạn thường chọn?",
    options: [
      { text: "Resort ven biển, tắm nắng", type: "A" },
      { text: "Núi cao, không khí trong lành", type: "B" },
      { text: "Vùng quê yên bình", type: "C" },
      { text: "Thành phố sôi động", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Màu sắc bạn yêu thích nhất?",
    options: [
      { text: "Xanh da trời, xanh nước biển", type: "A" },
      { text: "Xanh lá, nâu đất", type: "B" },
      { text: "Trắng, be, pastel", type: "C" },
      { text: "Đỏ, cam, vàng sống động", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Hoạt động ngoài trời bạn thích?",
    options: [
      { text: "Bơi lội, lướt sóng, lặn biển", type: "A" },
      { text: "Leo núi, trekking, cắm trại", type: "B" },
      { text: "Đi dạo, ngắm cảnh", type: "C" },
      { text: "Chạy bộ, đạp xe", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi cần thư giãn, bạn muốn?",
    options: [
      { text: "Nghe tiếng sóng biển", type: "A" },
      { text: "Hít thở không khí núi rừng", type: "B" },
      { text: "Nằm yên trong phòng máy lạnh", type: "C" },
      { text: "Nghe nhạc, xem phim", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Thời tiết lý tưởng với bạn?",
    options: [
      { text: "Nắng ấm, có gió biển", type: "A" },
      { text: "Mát mẻ, se se lạnh", type: "B" },
      { text: "Không quá nóng, không quá lạnh", type: "C" },
      { text: "Có mưa nhẹ, lãng mạn", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Nếu được sống một nơi khác, bạn chọn?",
    options: [
      { text: "Nhà gần biển, nghe sóng mỗi ngày", type: "A" },
      { text: "Căn nhà trên đồi, view núi rừng", type: "B" },
      { text: "Vùng ngoại ô yên tĩnh", type: "C" },
      { text: "Trung tâm thành phố nhộn nhịp", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Đồ ăn bạn thích nhất?",
    options: [
      { text: "Hải sản tươi sống", type: "A" },
      { text: "Món núi: gà, lợn, rau rừng", type: "B" },
      { text: "Món ăn gia đình truyền thống", type: "C" },
      { text: "Đồ ăn nhanh, tiện lợi", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Tính cách nào mô tả bạn đúng nhất?",
    options: [
      { text: "Cởi mở, phóng khoáng như biển", type: "A" },
      { text: "Kiên cường, vững chãi như núi", type: "B" },
      { text: "Bình yên, nhẹ nhàng", type: "C" },
      { text: "Năng động, không ngừng di chuyển", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn xử lý stress như thế nào?",
    options: [
      { text: "Đi biển, ngâm mình trong nước", type: "A" },
      { text: "Leo núi, hòa mình vào thiên nhiên", type: "B" },
      { text: "Ở nhà nghỉ ngơi", type: "C" },
      { text: "Gặp bạn bè, đi chơi", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Địa điểm du lịch mơ ước của bạn?",
    options: [
      { text: "Maldives, Bali, Phú Quốc", type: "A" },
      { text: "Sapa, Đà Lạt, Alps", type: "B" },
      { text: "Nhật Bản, Hàn Quốc", type: "C" },
      { text: "New York, Paris, Singapore", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Khi chụp ảnh, bạn thích background?",
    options: [
      { text: "Biển xanh, cát trắng, nắng vàng", type: "A" },
      { text: "Núi non hùng vĩ, sương mù", type: "B" },
      { text: "Quán cafe, góc phố đẹp", type: "C" },
      { text: "Tòa nhà hiện đại, ánh đèn đêm", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Âm thanh nào khiến bạn thư thái nhất?",
    options: [
      { text: "Tiếng sóng biển vỗ bờ", type: "A" },
      { text: "Tiếng gió rừng, chim hót", type: "B" },
      { text: "Tiếng mưa rơi nhẹ", type: "C" },
      { text: "Âm nhạc từ loa", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Linh hồn của biển",
    emoji: "🌊",
    description: "Bạn là người yêu biển! Biển mang đến cho bạn cảm giác tự do, phóng khoáng và bình yên. Bạn có tâm hồn rộng mở như đại dương, luôn sẵn sàng đón nhận những điều mới mẻ.",
    traits: ["Phóng khoáng", "Tự do", "Cởi mở", "Năng động"],
    strengths: ["Thích nghi tốt", "Dễ gần", "Tinh thần lạc quan"],
    weaknesses: ["Đôi khi không ổn định", "Dễ thay đổi như thủy triều"],
    tips: ["Giữ vững lập trường khi cần", "Tìm điểm neo trong cuộc sống"],
  },
  B: {
    type: "B",
    title: "Linh hồn của núi",
    emoji: "⛰️",
    description: "Bạn là người yêu núi! Núi mang đến cho bạn sự vững chãi, bình yên và chiều sâu. Bạn có tâm hồn kiên cường như núi đá, luôn đứng vững trước mọi sóng gió cuộc đời.",
    traits: ["Kiên cường", "Vững vàng", "Sâu sắc", "Điềm tĩnh"],
    strengths: ["Đáng tin cậy", "Không dễ lung lay", "Có chiều sâu"],
    weaknesses: ["Đôi khi quá cứng nhắc", "Khó thay đổi"],
    tips: ["Thử linh hoạt hơn một chút", "Mở lòng với những thay đổi"],
  },
  C: {
    type: "C",
    title: "Linh hồn yên bình",
    emoji: "🌾",
    description: "Bạn yêu thích sự yên bình, không nhất thiết phải là biển hay núi. Bạn tìm kiếm sự tĩnh lặng trong tâm hồn, nơi nào bình yên thì đó là nhà của bạn.",
    traits: ["Bình yên", "Giản dị", "Nhẹ nhàng", "Tự tại"],
    strengths: ["Tâm hồn thanh thản", "Không bị chi phối", "Hài lòng với cuộc sống"],
    weaknesses: ["Đôi khi thiếu động lực khám phá", "Bỏ lỡ trải nghiệm"],
    tips: ["Thử những trải nghiệm mới", "Thiên nhiên có nhiều điều tuyệt vời chờ bạn"],
  },
  D: {
    type: "D",
    title: "Linh hồn đô thị",
    emoji: "🏙️",
    description: "Bạn không phải người của thiên nhiên hoang dã. Bạn yêu thích sự sôi động của thành phố, ánh đèn đêm và nhịp sống nhanh. Đô thị là nơi bạn thuộc về.",
    traits: ["Năng động", "Hiện đại", "Sôi động", "Xã giao"],
    strengths: ["Hòa nhập tốt", "Nhiều cơ hội", "Luôn cập nhật"],
    weaknesses: ["Dễ stress", "Thiếu kết nối với thiên nhiên"],
    tips: ["Thỉnh thoảng hãy đi đâu đó xa thành phố", "Thiên nhiên sẽ giúp bạn cân bằng"],
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
