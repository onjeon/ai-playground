// Kiểu du lịch Phú Quốc
// Khám phá phong cách du lịch Phú Quốc của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn đến Phú Quốc để làm gì?",
    options: [
      { text: "Nghỉ dưỡng, tắm biển, thư giãn", type: "A" },
      { text: "Khám phá đảo, đi tour các hòn", type: "B" },
      { text: "Ăn hải sản, mua nước mắm", type: "C" },
      { text: "Honeymoon, kỷ niệm đặc biệt", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn sẽ ở đâu khi đến Phú Quốc?",
    options: [
      { text: "Resort 5 sao Long Beach", type: "A" },
      { text: "Khách sạn Dương Đông, trung tâm", type: "B" },
      { text: "Homestay gần biển Sao", type: "C" },
      { text: "Villa biệt lập, yên tĩnh", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bãi biển nào bạn muốn đến nhất?",
    options: [
      { text: "Bãi Sao - cát trắng mịn như sao", type: "A" },
      { text: "Bãi Dài - hoang sơ, ít người", type: "B" },
      { text: "Long Beach - sôi động, tiện nghi", type: "C" },
      { text: "Bãi Ông Lang - yên bình, lãng mạn", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn có đi VinWonders Phú Quốc không?",
    options: [
      { text: "Có, đây là điểm nhấn", type: "A" },
      { text: "Có thể, nếu có thời gian", type: "B" },
      { text: "Không, thích thiên nhiên hơn", type: "C" },
      { text: "Có, đặc biệt nếu có trẻ em", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Hoạt động biển bạn thích?",
    options: [
      { text: "Lặn ngắm san hô, câu mực đêm", type: "A" },
      { text: "Kayak, SUP, lướt ván", type: "B" },
      { text: "Tắm biển, phơi nắng", type: "C" },
      { text: "Đi thuyền ngắm hoàng hôn", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Đặc sản Phú Quốc bạn muốn thử?",
    options: [
      { text: "Gỏi cá trích, nhum biển", type: "A" },
      { text: "Hải sản nướng, ghẹ, cua", type: "B" },
      { text: "Bún quậy, bánh canh cua", type: "C" },
      { text: "Tất cả, ăn từ chợ đêm đến resort", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn có đi tham quan làng nghề không?",
    options: [
      { text: "Có, nhà thùng nước mắm", type: "A" },
      { text: "Có, trại nuôi ngọc trai", type: "B" },
      { text: "Có, vườn tiêu Phú Quốc", type: "C" },
      { text: "Không, tập trung nghỉ dưỡng", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Buổi tối ở Phú Quốc, bạn sẽ?",
    options: [
      { text: "Đi chợ đêm Dinh Cậu", type: "A" },
      { text: "Beach bar, ngắm biển đêm", type: "B" },
      { text: "Câu mực, đi tour đêm", type: "C" },
      { text: "Candlelight dinner, lãng mạn", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn có đi cáp treo Hon Thom không?",
    options: [
      { text: "Có, cáp treo dài nhất thế giới", type: "A" },
      { text: "Có, để ngắm view từ trên cao", type: "B" },
      { text: "Không, sợ độ cao", type: "C" },
      { text: "Có thể, xem lịch trình", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn đi Phú Quốc mấy ngày?",
    options: [
      { text: "3-4 ngày, đủ nghỉ ngơi", type: "A" },
      { text: "5-7 ngày, khám phá kỹ", type: "B" },
      { text: "2-3 ngày, đi nhanh về nhanh", type: "C" },
      { text: "Tuần trăng mật, cả tuần", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn mua gì làm quà từ Phú Quốc?",
    options: [
      { text: "Nước mắm Phú Quốc", type: "A" },
      { text: "Tiêu Phú Quốc", type: "B" },
      { text: "Ngọc trai", type: "C" },
      { text: "Rượu sim, mực khô", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Điều bạn thích nhất ở Phú Quốc?",
    options: [
      { text: "Biển đảo hoang sơ, thiên nhiên", type: "A" },
      { text: "Resort đẳng cấp quốc tế", type: "B" },
      { text: "Hải sản tươi ngon, giá rẻ", type: "C" },
      { text: "Không khí lãng mạn, bình yên", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người khám phá đảo ngọc",
    emoji: "🏝️",
    description: "Bạn muốn khám phá trọn vẹn Phú Quốc - từ làng nghề truyền thống đến các hòn đảo nhỏ. Lặn biển, câu mực đêm và tham quan là những gì bạn tìm kiếm.",
    traits: ["Khám phá", "Tò mò", "Năng động", "Trải nghiệm"],
    strengths: ["Hiểu sâu về đảo", "Trải nghiệm đa dạng", "Kỷ niệm phong phú"],
    weaknesses: ["Có thể mệt mỏi", "Lịch trình dày đặc"],
    tips: ["Dành thời gian nghỉ ngơi", "Chọn tour chất lượng"],
  },
  B: {
    type: "B",
    title: "Người yêu thể thao biển",
    emoji: "🏄",
    description: "Phú Quốc với bạn là sân chơi thể thao nước. Kayak, lướt ván, SUP - biển là để chinh phục. Bạn năng động và không thích ngồi yên một chỗ.",
    traits: ["Năng động", "Thể thao", "Khỏe mạnh", "Phiêu lưu"],
    strengths: ["Sức khỏe tốt", "Trải nghiệm thú vị", "Kỷ niệm độc đáo"],
    weaknesses: ["Có thể bỏ lỡ thư giãn", "Cần thể lực tốt"],
    tips: ["Cân bằng với nghỉ ngơi", "Chú ý an toàn"],
  },
  C: {
    type: "C",
    title: "Người sành ẩm thực biển",
    emoji: "🦞",
    description: "Bạn đến Phú Quốc vì hải sản và đặc sản. Chợ đêm, quán ven biển, nhà hàng - đâu có hải sản ngon là có bạn. Nước mắm, tiêu là quà mang về.",
    traits: ["Sành ăn", "Thưởng thức", "Khám phá ẩm thực", "Tận hưởng"],
    strengths: ["Trải nghiệm ẩm thực đỉnh cao", "Biết nhiều quán ngon", "Mang về nhiều đặc sản"],
    weaknesses: ["Có thể ít đi chơi", "Tập trung vào ăn uống"],
    tips: ["Kết hợp tham quan", "Đi biển vận động"],
  },
  D: {
    type: "D",
    title: "Người lãng mạn yêu biển",
    emoji: "💑",
    description: "Phú Quốc là điểm đến lãng mạn hoàn hảo cho bạn. Villa biệt lập, dinner trên biển, ngắm hoàng hôn - mọi khoảnh khắc đều đáng nhớ.",
    traits: ["Lãng mạn", "Yêu đương", "Thư thái", "Trân trọng"],
    strengths: ["Kỷ niệm đẹp", "Gắn kết tình cảm", "Thư giãn tuyệt đối"],
    weaknesses: ["Ít khám phá", "Chi phí cao"],
    tips: ["Thử đi tour một ngày", "Khám phá thêm đảo"],
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
