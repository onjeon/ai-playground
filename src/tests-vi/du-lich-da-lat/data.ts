// Kiểu du lịch Đà Lạt
// Khám phá phong cách du lịch Đà Lạt của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn thích đến Đà Lạt vào mùa nào?",
    options: [
      { text: "Mùa hoa dã quỳ, cúc họa mi (cuối năm)", type: "A" },
      { text: "Mùa xuân, thời tiết mát mẻ", type: "B" },
      { text: "Mùa hè, tránh nóng", type: "C" },
      { text: "Bất cứ khi nào có dịp", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn sẽ ở đâu khi đến Đà Lạt?",
    options: [
      { text: "Khách sạn view đồi, yên tĩnh", type: "A" },
      { text: "Resort cao cấp, full tiện nghi", type: "B" },
      { text: "Homestay gần trung tâm", type: "C" },
      { text: "Cắm trại ngoài trời, gần thiên nhiên", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Buổi sáng ở Đà Lạt, bạn sẽ làm gì?",
    options: [
      { text: "Đi săn mây ở đồi Đa Phú", type: "A" },
      { text: "Ngủ nướng, ăn sáng muộn", type: "B" },
      { text: "Đi chợ Đà Lạt mua đặc sản", type: "C" },
      { text: "Chạy bộ quanh hồ Xuân Hương", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Phương tiện di chuyển yêu thích của bạn?",
    options: [
      { text: "Thuê xe máy, tự do khám phá", type: "A" },
      { text: "Ô tô có lái, thoải mái", type: "B" },
      { text: "Đi tour, không lo lắng", type: "C" },
      { text: "Đi bộ, đạp xe, thân thiện môi trường", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn thích tham quan địa điểm nào?",
    options: [
      { text: "Đồi chè, vườn hoa, cánh đồng bất tận", type: "A" },
      { text: "Dinh Bảo Đại, ga xe lửa cổ", type: "B" },
      { text: "Quán cafe view đẹp, check-in", type: "C" },
      { text: "Thác Datanla, cổng trời, trekking", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Đồ ăn Đà Lạt bạn thích nhất?",
    options: [
      { text: "Bánh mì xíu mại, bánh căn", type: "A" },
      { text: "Lẩu gà lá é, bò nướng lá lốt", type: "B" },
      { text: "Kem bơ, sữa đậu nành nóng", type: "C" },
      { text: "Cơm lam, gà nướng đất sét", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn có thích đi cafe ở Đà Lạt không?",
    options: [
      { text: "Có, tìm quán view núi, đồi thông", type: "A" },
      { text: "Có, nhưng ưu tiên quán nổi tiếng", type: "B" },
      { text: "Có, săn quán mới, độc lạ", type: "C" },
      { text: "Không, thích ở ngoài trời hơn", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Buổi tối ở Đà Lạt, bạn sẽ?",
    options: [
      { text: "Ngắm sao, uống rượu vang", type: "A" },
      { text: "Đi chợ đêm, ăn vặt", type: "B" },
      { text: "Quẩy bar, karaoke", type: "C" },
      { text: "Đốt lửa trại, nướng BBQ", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Đi Đà Lạt, bạn hay đi với ai?",
    options: [
      { text: "Người yêu, cặp đôi", type: "A" },
      { text: "Gia đình", type: "B" },
      { text: "Bạn bè, hội nhóm", type: "C" },
      { text: "Một mình, solo trip", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn mua gì làm quà từ Đà Lạt?",
    options: [
      { text: "Hoa khô, nước hoa tự nhiên", type: "A" },
      { text: "Rượu vang Đà Lạt, mứt dâu", type: "B" },
      { text: "Trái cây, rau củ tươi", type: "C" },
      { text: "Đồ thổ cẩm, đặc sản dân tộc", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Trời mưa ở Đà Lạt, bạn sẽ?",
    options: [
      { text: "Ngồi cafe ngắm mưa, đọc sách", type: "A" },
      { text: "Nghỉ ngơi trong phòng, xem phim", type: "B" },
      { text: "Vẫn đi chơi, mưa Đà Lạt rất đẹp", type: "C" },
      { text: "Đi xông hơi, massage", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Điều bạn thích nhất ở Đà Lạt?",
    options: [
      { text: "Khí hậu se lạnh, lãng mạn", type: "A" },
      { text: "Cảnh quan thiên nhiên tuyệt đẹp", type: "B" },
      { text: "Đồ ăn ngon, nhiều chỗ check-in", type: "C" },
      { text: "Không khí trong lành, bình yên", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người lãng mạn Đà Lạt",
    emoji: "🌹",
    description: "Bạn yêu Đà Lạt vì sự lãng mạn và thơ mộng của nó. Thích những buổi sáng săn mây, chiều ngắm hoàng hôn và đêm ngắm sao. Đà Lạt với bạn là nơi để yêu.",
    traits: ["Lãng mạn", "Thơ mộng", "Yêu thiên nhiên", "Nhẹ nhàng"],
    strengths: ["Tận hưởng trọn vẹn", "Có những kỷ niệm đẹp", "Thư giãn tốt"],
    weaknesses: ["Có thể bỏ lỡ hoạt động vui", "Đôi khi quá chậm rãi"],
    tips: ["Thử thêm hoạt động mạo hiểm", "Khám phá những nơi mới"],
  },
  B: {
    type: "B",
    title: "Người du lịch sang trọng",
    emoji: "👑",
    description: "Bạn đến Đà Lạt để tận hưởng dịch vụ tốt nhất. Resort cao cấp, ẩm thực đặc sắc và những trải nghiệm đẳng cấp là ưu tiên của bạn.",
    traits: ["Sang trọng", "Thoải mái", "Chất lượng", "Đẳng cấp"],
    strengths: ["Có trải nghiệm tốt", "Nghỉ ngơi đúng nghĩa", "Không lo lắng"],
    weaknesses: ["Chi phí cao", "Có thể bỏ lỡ trải nghiệm địa phương"],
    tips: ["Thử ăn quán địa phương", "Khám phá những nơi hoang sơ"],
  },
  C: {
    type: "C",
    title: "Người vui chơi khám phá",
    emoji: "📸",
    description: "Bạn đến Đà Lạt để check-in, ăn uống và vui chơi. Thích những quán cafe hot, địa điểm nổi tiếng và chia sẻ khoảnh khắc trên mạng xã hội.",
    traits: ["Năng động", "Yêu check-in", "Xã hội", "Trẻ trung"],
    strengths: ["Đi được nhiều nơi", "Có nhiều ảnh đẹp", "Trải nghiệm đa dạng"],
    weaknesses: ["Có thể hời hợt", "Thiếu thời gian thư giãn"],
    tips: ["Chậm lại đôi khi", "Tận hưởng thay vì chỉ chụp ảnh"],
  },
  D: {
    type: "D",
    title: "Người phiêu lưu mạo hiểm",
    emoji: "⛺",
    description: "Bạn đến Đà Lạt để chinh phục và khám phá. Trekking, cắm trại, đốt lửa dưới trời sao - bạn tìm kiếm sự kết nối sâu sắc với thiên nhiên.",
    traits: ["Phiêu lưu", "Mạo hiểm", "Yêu thiên nhiên", "Độc lập"],
    strengths: ["Trải nghiệm độc đáo", "Khỏe mạnh", "Kỷ niệm đáng nhớ"],
    weaknesses: ["Có thể mệt mỏi", "Điều kiện sinh hoạt cơ bản"],
    tips: ["Chuẩn bị kỹ thiết bị", "Chú ý an toàn"],
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
