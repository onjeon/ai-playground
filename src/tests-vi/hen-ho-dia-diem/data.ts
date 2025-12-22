// Địa điểm hẹn hò yêu thích
// Khám phá địa điểm hẹn hò phù hợp với tính cách của bạn

export const questions = [
  {
    id: 1,
    question: "Buổi hẹn lý tưởng của bạn diễn ra vào lúc nào?",
    options: [
      { text: "Sáng sớm, uống cafe và tản bộ", type: "A" },
      { text: "Buổi tối, sau giờ làm việc", type: "B" },
      { text: "Cuối tuần, có thời gian trọn vẹn", type: "C" },
      { text: "Bất cứ lúc nào, linh hoạt", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thích không gian hẹn hò như thế nào?",
    options: [
      { text: "Yên tĩnh, riêng tư, dễ trò chuyện", type: "A" },
      { text: "Sang trọng, có phong cách", type: "B" },
      { text: "Náo nhiệt, đông vui", type: "C" },
      { text: "Gần gũi thiên nhiên, thoáng đãng", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Nếu được chọn, bạn sẽ đi đâu?",
    options: [
      { text: "Quán cafe nhỏ xinh, có sách", type: "A" },
      { text: "Nhà hàng fine dining", type: "B" },
      { text: "Rạp chiếu phim, khu vui chơi", type: "C" },
      { text: "Công viên, bờ hồ, biển", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Điều gì quan trọng nhất ở địa điểm hẹn hò?",
    options: [
      { text: "Có thể nói chuyện thoải mái", type: "A" },
      { text: "Đồ ăn ngon, phục vụ tốt", type: "B" },
      { text: "Có hoạt động vui chơi", type: "C" },
      { text: "View đẹp, không gian mở", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn thích đi bộ trong buổi hẹn không?",
    options: [
      { text: "Có, dạo quanh phố cổ, ngắm cảnh", type: "A" },
      { text: "Đi bộ một chút sau bữa ăn", type: "B" },
      { text: "Không thích, muốn ngồi một chỗ", type: "C" },
      { text: "Rất thích, có thể đi cả ngày", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn nghĩ gì về việc hẹn hò ở quán ăn vỉa hè?",
    options: [
      { text: "Thú vị, có thể tìm hiểu nhau nhiều hơn", type: "A" },
      { text: "Ok nếu đã quen, không cho lần đầu", type: "B" },
      { text: "Không phù hợp cho hẹn hò", type: "C" },
      { text: "Tùy người, không quan trọng nơi", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn có thích đi xem triển lãm, bảo tàng không?",
    options: [
      { text: "Rất thích, có nhiều điều để nói", type: "A" },
      { text: "Có thể, nếu người kia thích", type: "B" },
      { text: "Không hấp dẫn lắm", type: "C" },
      { text: "Đôi khi, phải chọn triển lãm thú vị", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Buổi hẹn có nên có hoạt động chung không?",
    options: [
      { text: "Không cần, ngồi nói chuyện là đủ", type: "A" },
      { text: "Có thể, nhưng không bắt buộc", type: "B" },
      { text: "Có, để tránh awkward", type: "C" },
      { text: "Chắc chắn, hoạt động chung vui hơn", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn có muốn đi picnic hẹn hò không?",
    options: [
      { text: "Có, rất lãng mạn", type: "A" },
      { text: "Ok nếu chuẩn bị chu đáo", type: "B" },
      { text: "Không, sợ nắng và côn trùng", type: "C" },
      { text: "Tuyệt vời, yêu thiên nhiên", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Nếu trời mưa, bạn sẽ hẹn hò ở đâu?",
    options: [
      { text: "Quán cafe view mưa, nghe nhạc", type: "A" },
      { text: "Trung tâm thương mại", type: "B" },
      { text: "Rạp phim, karaoke", type: "C" },
      { text: "Vẫn ra ngoài, mưa cũng lãng mạn", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn thích đi ăn đồ gì trong buổi hẹn?",
    options: [
      { text: "Đồ nhẹ, dễ ăn nói chuyện", type: "A" },
      { text: "Đồ ngon, không quan trọng loại", type: "B" },
      { text: "BBQ, lẩu - ấm cúng", type: "C" },
      { text: "Street food, khám phá ẩm thực", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Địa điểm hẹn hò trong mơ của bạn?",
    options: [
      { text: "Quán sách cafe ấm cúng", type: "A" },
      { text: "Rooftop bar view thành phố", type: "B" },
      { text: "Công viên giải trí, khu vui chơi", type: "C" },
      { text: "Bãi biển hoàng hôn", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người yêu sự thân mật",
    emoji: "☕",
    description: "Bạn thích những địa điểm yên tĩnh, riêng tư để có thể trò chuyện sâu. Quán cafe nhỏ, góc sách hay công viên vắng là lựa chọn hoàn hảo cho bạn.",
    traits: ["Thích yên tĩnh", "Trọng chất lượng", "Lãng mạn", "Sâu sắc"],
    strengths: ["Nói chuyện sâu", "Hiểu người khác nhanh", "Tạo kết nối thật sự"],
    weaknesses: ["Có thể thiếu phấn khích", "Đôi khi quá nghiêm túc"],
    tips: ["Thử những địa điểm mới mẻ hơn", "Đôi khi vui chơi cũng tốt"],
  },
  B: {
    type: "B",
    title: "Người yêu phong cách",
    emoji: "🍷",
    description: "Bạn coi trọng trải nghiệm và không ngại chi cho những địa điểm đẳng cấp. Nhà hàng sang trọng, rooftop bar với view đẹp là sở trường của bạn.",
    traits: ["Sành điệu", "Có gu", "Đẳng cấp", "Chu đáo"],
    strengths: ["Gây ấn tượng mạnh", "Trải nghiệm chất lượng", "Thể hiện sự đầu tư"],
    weaknesses: ["Chi phí cao", "Có thể gây áp lực"],
    tips: ["Đừng quên những buổi hẹn đơn giản", "Quan trọng là người, không phải nơi"],
  },
  C: {
    type: "C",
    title: "Người yêu niềm vui",
    emoji: "🎢",
    description: "Bạn thích những địa điểm có hoạt động vui chơi, tránh những khoảng lặng ngại ngùng. Rạp phim, khu vui chơi, karaoke là sân chơi của bạn.",
    traits: ["Vui vẻ", "Năng động", "Thích hoạt động", "Dễ gần"],
    strengths: ["Buổi hẹn không nhàm chán", "Tạo kỷ niệm vui", "Giảm áp lực"],
    weaknesses: ["Ít thời gian nói chuyện", "Có thể thiếu chiều sâu"],
    tips: ["Kết hợp vui chơi và trò chuyện", "Dành thời gian tìm hiểu nhau"],
  },
  D: {
    type: "D",
    title: "Người yêu thiên nhiên",
    emoji: "🌊",
    description: "Bạn yêu những địa điểm gần gũi thiên nhiên và không gian mở. Bãi biển, công viên, núi rừng - đâu có view đẹp là có bạn.",
    traits: ["Yêu thiên nhiên", "Phóng khoáng", "Lãng mạn", "Giản dị"],
    strengths: ["Buổi hẹn ít tốn kém", "Thoải mái, tự nhiên", "Kết nối với thiên nhiên"],
    weaknesses: ["Phụ thuộc thời tiết", "Ít sự lựa chọn"],
    tips: ["Luôn có plan B", "Chuẩn bị cho thời tiết thay đổi"],
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
