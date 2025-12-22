// Kiểu du lịch Nha Trang
// Khám phá phong cách du lịch Nha Trang của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn đến Nha Trang để làm gì?",
    options: [
      { text: "Nghỉ dưỡng, tắm biển, thư giãn", type: "A" },
      { text: "Lặn biển, khám phá đại dương", type: "B" },
      { text: "Vui chơi, quẩy, party", type: "C" },
      { text: "Khám phá văn hóa, lịch sử", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn sẽ ở đâu khi đến Nha Trang?",
    options: [
      { text: "Resort 5 sao, beach front", type: "A" },
      { text: "Khách sạn gần biển, giá hợp lý", type: "B" },
      { text: "Hostel, backpacker, gặp gỡ nhiều người", type: "C" },
      { text: "Homestay, villa thuê nguyên căn", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Hoạt động biển bạn thích nhất?",
    options: [
      { text: "Tắm biển, phơi nắng", type: "A" },
      { text: "Lặn snorkeling, scuba diving", type: "B" },
      { text: "Jetski, parasailing, flyboard", type: "C" },
      { text: "Đi thuyền, ngắm cảnh", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn thích đảo nào ở Nha Trang?",
    options: [
      { text: "Hòn Mun - lặn biển đẹp nhất", type: "A" },
      { text: "Vinpearl - vui chơi giải trí", type: "B" },
      { text: "Hòn Tằm - spa và nghỉ dưỡng", type: "C" },
      { text: "Đảo Điệp Sơn - con đường giữa biển", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Hải sản Nha Trang, bạn ăn ở đâu?",
    options: [
      { text: "Nhà hàng cao cấp, hải sản tươi sống", type: "A" },
      { text: "Quán ven biển, giá bình dân", type: "B" },
      { text: "Chợ đêm, vừa đi vừa ăn", type: "C" },
      { text: "Tự mua về nấu, trải nghiệm", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Buổi tối ở Nha Trang, bạn sẽ?",
    options: [
      { text: "Ngắm hoàng hôn ở Skylight, rooftop bar", type: "A" },
      { text: "Đi bar, club, quẩy đến sáng", type: "B" },
      { text: "Đi chợ đêm, dạo biển", type: "C" },
      { text: "Nghỉ ngơi sớm, mai dậy sớm", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn có đi tham quan Tháp Bà Ponagar không?",
    options: [
      { text: "Có, tìm hiểu lịch sử văn hóa Chăm", type: "A" },
      { text: "Có, check-in một lát rồi đi", type: "B" },
      { text: "Không, ưu tiên biển", type: "C" },
      { text: "Có thể nếu còn thời gian", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn đi Nha Trang mấy ngày?",
    options: [
      { text: "2-3 ngày, đủ để thư giãn", type: "A" },
      { text: "4-5 ngày, khám phá kỹ", type: "B" },
      { text: "1 tuần trở lên, không vội", type: "C" },
      { text: "Cuối tuần, đi nhanh về nhanh", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn có thích đi tắm bùn I-Resort không?",
    options: [
      { text: "Có, rất thích trải nghiệm spa", type: "A" },
      { text: "Có thể, nghe bạn bè khen", type: "B" },
      { text: "Không, thích hoạt động mạnh hơn", type: "C" },
      { text: "Có, để thư giãn sau chuyến đi", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Đồ ăn nào là must-try ở Nha Trang?",
    options: [
      { text: "Bún chả cá Nha Trang", type: "A" },
      { text: "Nem nướng Ninh Hòa", type: "B" },
      { text: "Hải sản tươi sống", type: "C" },
      { text: "Tất cả đều phải thử", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn mua gì làm quà từ Nha Trang?",
    options: [
      { text: "Yến sào, đặc sản cao cấp", type: "A" },
      { text: "Hải sản khô, mực, tôm", type: "B" },
      { text: "Đồ lưu niệm, vỏ ốc, san hô", type: "C" },
      { text: "Nước mắm, bánh tráng", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Điều bạn thích nhất ở Nha Trang?",
    options: [
      { text: "Biển xanh, cát trắng, nắng vàng", type: "A" },
      { text: "Hải sản tươi ngon, giá rẻ", type: "B" },
      { text: "Vui chơi, giải trí đa dạng", type: "C" },
      { text: "Người dân thân thiện, hiền hòa", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người nghỉ dưỡng thư giãn",
    emoji: "🏖️",
    description: "Bạn đến Nha Trang để tận hưởng biển và thư giãn. Resort cao cấp, spa, tắm biển là những gì bạn tìm kiếm. Nghỉ dưỡng đúng nghĩa!",
    traits: ["Thư giãn", "Sang trọng", "Tận hưởng", "Bình yên"],
    strengths: ["Nghỉ ngơi đúng cách", "Tận hưởng dịch vụ tốt", "Về đầy năng lượng"],
    weaknesses: ["Chi phí cao", "Có thể bỏ lỡ khám phá"],
    tips: ["Thử đi xa trung tâm", "Khám phá đảo hoang sơ"],
  },
  B: {
    type: "B",
    title: "Người thám hiểm đại dương",
    emoji: "🤿",
    description: "Bạn đến Nha Trang vì thế giới dưới nước tuyệt đẹp. Lặn biển ngắm san hô, cá nhiệt đới là niềm đam mê. Biển với bạn là để khám phá.",
    traits: ["Phiêu lưu", "Yêu biển", "Khám phá", "Năng động"],
    strengths: ["Trải nghiệm độc đáo", "Sức khỏe tốt", "Nhiều kỷ niệm"],
    weaknesses: ["Cần kỹ năng", "Phụ thuộc thời tiết"],
    tips: ["Học lặn chuyên nghiệp", "Chú ý an toàn"],
  },
  C: {
    type: "C",
    title: "Người vui chơi sôi động",
    emoji: "🎉",
    description: "Nha Trang với bạn là thiên đường vui chơi và tiệc tùng. Watersport ban ngày, party ban đêm - bạn không bỏ lỡ niềm vui nào.",
    traits: ["Sôi động", "Vui vẻ", "Xã hội", "Năng lượng cao"],
    strengths: ["Vui hết cỡ", "Quen nhiều người", "Trải nghiệm đa dạng"],
    weaknesses: ["Có thể mệt mỏi", "Chi tiêu nhiều"],
    tips: ["Nghỉ ngơi đủ", "Cân bằng giữa vui và thư giãn"],
  },
  D: {
    type: "D",
    title: "Người khám phá văn hóa",
    emoji: "🏛️",
    description: "Bạn đến Nha Trang không chỉ vì biển mà còn vì văn hóa, lịch sử và con người nơi đây. Khám phá sâu và trải nghiệm như người địa phương.",
    traits: ["Tò mò", "Sâu sắc", "Tìm hiểu", "Trân trọng"],
    strengths: ["Hiểu sâu về nơi mình đến", "Trải nghiệm chân thực", "Kết nối với người địa phương"],
    weaknesses: ["Có thể chậm rãi quá", "Bỏ lỡ hoạt động phổ biến"],
    tips: ["Kết hợp du lịch biển", "Thử các hoạt động mới"],
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
