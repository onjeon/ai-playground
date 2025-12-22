// Kiểu du lịch Việt Nam
// Khám phá phong cách du lịch Việt Nam của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn thích du lịch theo kiểu nào?",
    options: [
      { text: "Có kế hoạch chi tiết từ A đến Z", type: "A" },
      { text: "Đặt vé, khách sạn rồi tự khám phá", type: "B" },
      { text: "Phượt tự do, đến đâu hay đến đó", type: "C" },
      { text: "Theo tour để tiện lợi, không lo nghĩ", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Địa điểm du lịch bạn thích nhất?",
    options: [
      { text: "Thành phố lớn, nhiều địa danh nổi tiếng", type: "A" },
      { text: "Biển, resort nghỉ dưỡng", type: "B" },
      { text: "Núi, rừng, vùng cao", type: "C" },
      { text: "Phố cổ, di tích lịch sử", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn thích ở khách sạn như thế nào?",
    options: [
      { text: "Khách sạn 4-5 sao, tiện nghi đầy đủ", type: "A" },
      { text: "Resort ven biển, có hồ bơi", type: "B" },
      { text: "Homestay, hostel gần gũi", type: "C" },
      { text: "Khách sạn boutique, có phong cách", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi du lịch, bạn thích ăn uống như thế nào?",
    options: [
      { text: "Nhà hàng nổi tiếng, đồ ăn chuẩn vị", type: "A" },
      { text: "Buffet khách sạn, tiện lợi", type: "B" },
      { text: "Ăn quán địa phương, vỉa hè authentic", type: "C" },
      { text: "Thử đặc sản địa phương, món lạ", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn đi du lịch cùng ai nhiều nhất?",
    options: [
      { text: "Gia đình, người thân", type: "A" },
      { text: "Người yêu, vợ/chồng", type: "B" },
      { text: "Bạn bè, nhóm bạn", type: "C" },
      { text: "Một mình, tự do khám phá", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn thích chụp ảnh du lịch như thế nào?",
    options: [
      { text: "Check-in tất cả địa danh nổi tiếng", type: "A" },
      { text: "Ảnh đẹp, lung linh, pose chuẩn", type: "B" },
      { text: "Ảnh tự nhiên, ghi lại khoảnh khắc", type: "C" },
      { text: "Ít chụp, tập trung trải nghiệm", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Ngân sách du lịch của bạn như thế nào?",
    options: [
      { text: "Chi xứng đáng cho trải nghiệm tốt", type: "A" },
      { text: "Dư dả, không cần tính toán nhiều", type: "B" },
      { text: "Tiết kiệm, đi nhiều nơi hơn", type: "C" },
      { text: "Linh hoạt, chi cho những gì đáng giá", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn thích hoạt động gì khi du lịch?",
    options: [
      { text: "Tham quan, mua sắm, ăn uống", type: "A" },
      { text: "Nghỉ ngơi, tắm biển, spa", type: "B" },
      { text: "Trekking, khám phá, adventure", type: "C" },
      { text: "Tìm hiểu văn hóa, lịch sử địa phương", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn chuẩn bị hành lý du lịch như thế nào?",
    options: [
      { text: "Đầy đủ, chu đáo, có list sẵn", type: "A" },
      { text: "Nhẹ nhàng, chỉ đồ cần thiết", type: "B" },
      { text: "Tối giản, mang ít nhất có thể", type: "C" },
      { text: "Tùy chuyến đi, có khi nhiều có khi ít", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Điều bạn mong đợi nhất khi du lịch?",
    options: [
      { text: "Những trải nghiệm mới, đáng nhớ", type: "A" },
      { text: "Được nghỉ ngơi, thư giãn", type: "B" },
      { text: "Khám phá, chinh phục thử thách", type: "C" },
      { text: "Hiểu thêm về văn hóa, con người", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Vùng miền Việt Nam bạn muốn khám phá nhất?",
    options: [
      { text: "Miền Bắc - lịch sử, văn hóa", type: "A" },
      { text: "Miền Nam - sôi động, hiện đại", type: "B" },
      { text: "Miền Trung - di sản, biển đẹp", type: "C" },
      { text: "Tây Nguyên, vùng cao - hoang sơ", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Sau chuyến du lịch, bạn thường làm gì?",
    options: [
      { text: "Đăng ảnh, viết review chi tiết", type: "A" },
      { text: "Nghỉ ngơi, sạc lại năng lượng", type: "B" },
      { text: "Lên kế hoạch cho chuyến tiếp theo", type: "C" },
      { text: "Suy ngẫm, ghi lại những bài học", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Du khách Khám phá",
    emoji: "🗺️",
    description: "Bạn là du khách thích khám phá và trải nghiệm. Bạn có kế hoạch rõ ràng, thích check-in những địa danh nổi tiếng và mang về nhiều kỷ niệm đáng nhớ.",
    traits: ["Có kế hoạch", "Khám phá", "Năng động", "Lưu giữ kỷ niệm"],
    strengths: ["Du lịch hiệu quả", "Không bỏ lỡ địa điểm", "Có nhiều trải nghiệm"],
    weaknesses: ["Đôi khi quá bận rộn", "Ít thời gian thư giãn"],
    tips: ["Dành thời gian nghỉ ngơi", "Đừng cố gắng đi hết mọi nơi"],
  },
  B: {
    type: "B",
    title: "Du khách Nghỉ dưỡng",
    emoji: "🏖️",
    description: "Bạn là du khách thích nghỉ dưỡng và thư giãn. Bạn chọn resort đẹp, biển trong và tận hưởng kỳ nghỉ để sạc lại năng lượng.",
    traits: ["Thư giãn", "Hưởng thụ", "Romantic", "Quality time"],
    strengths: ["Biết cách nghỉ ngơi", "Chọn nơi ở tốt", "Không stress"],
    weaknesses: ["Có thể bỏ lỡ văn hóa địa phương", "Chi phí cao hơn"],
    tips: ["Thử khám phá xung quanh", "Trải nghiệm đời sống địa phương"],
  },
  C: {
    type: "C",
    title: "Du khách Phượt thủ",
    emoji: "🎒",
    description: "Bạn là phượt thủ thích khám phá và mạo hiểm. Bạn thích tự do đi đến đâu hay đến đó, trải nghiệm cuộc sống địa phương authentic.",
    traits: ["Tự do", "Mạo hiểm", "Tiết kiệm", "Authentic"],
    strengths: ["Chi phí thấp", "Trải nghiệm thật", "Linh hoạt"],
    weaknesses: ["Đôi khi thiếu tiện nghi", "Có thể gặp rủi ro"],
    tips: ["Chuẩn bị kỹ hơn cho chuyến đi", "Có kế hoạch dự phòng"],
  },
  D: {
    type: "D",
    title: "Du khách Văn hóa",
    emoji: "🏛️",
    description: "Bạn là du khách thích khám phá văn hóa và lịch sử. Bạn tìm hiểu sâu về điểm đến, thích những nơi có story và giá trị tinh thần.",
    traits: ["Sâu sắc", "Ham học hỏi", "Tôn trọng văn hóa", "Suy ngẫm"],
    strengths: ["Hiểu biết rộng", "Trân trọng di sản", "Du lịch có ý nghĩa"],
    weaknesses: ["Có thể quá serious", "Bỏ qua những thứ fun"],
    tips: ["Đôi khi cần relax", "Thử những hoạt động vui vẻ"],
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
