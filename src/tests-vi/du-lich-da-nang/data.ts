// Kiểu du lịch Đà Nẵng
// Khám phá phong cách du lịch Đà Nẵng của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn đến Đà Nẵng để làm gì?",
    options: [
      { text: "Tắm biển, nghỉ dưỡng, thư giãn", type: "A" },
      { text: "Khám phá cầu Rồng, Hội An, Bà Nà", type: "B" },
      { text: "Ẩm thực, ăn hết món ngon", type: "C" },
      { text: "Kết hợp công việc và du lịch", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn sẽ ở đâu khi đến Đà Nẵng?",
    options: [
      { text: "Resort ven biển Mỹ Khê", type: "A" },
      { text: "Khách sạn trung tâm, tiện di chuyển", type: "B" },
      { text: "Homestay, căn hộ cho thuê", type: "C" },
      { text: "Khách sạn gần sông Hàn, view cầu", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Cây cầu nào ở Đà Nẵng bạn thích nhất?",
    options: [
      { text: "Cầu Rồng - phun lửa, phun nước", type: "A" },
      { text: "Cầu Vàng - Bà Nà Hills", type: "B" },
      { text: "Cầu Tình Yêu - lãng mạn", type: "C" },
      { text: "Cầu Trần Thị Lý - kiến trúc đẹp", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn có đi Bà Nà Hills không?",
    options: [
      { text: "Chắc chắn, đây là must-visit", type: "A" },
      { text: "Có, nhưng tránh đông khách", type: "B" },
      { text: "Không, đã đi rồi hoặc không thích", type: "C" },
      { text: "Phân vân, xem lịch trình", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Đặc sản Đà Nẵng bạn muốn ăn?",
    options: [
      { text: "Mì Quảng, bún chả cá", type: "A" },
      { text: "Bánh tráng cuốn thịt heo", type: "B" },
      { text: "Hải sản bãi biển Mỹ Khê", type: "C" },
      { text: "Tất cả, ăn từ sáng đến tối", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn có ghé thăm Hội An không?",
    options: [
      { text: "Có, đây là điểm nhấn của chuyến đi", type: "A" },
      { text: "Có, đi buổi tối ngắm phố đèn lồng", type: "B" },
      { text: "Có, may áo dài, mua quà", type: "C" },
      { text: "Không, tập trung ở Đà Nẵng", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Hoạt động buổi sáng của bạn?",
    options: [
      { text: "Chạy bộ, tập yoga ở biển Mỹ Khê", type: "A" },
      { text: "Dậy sớm đi Ngũ Hành Sơn", type: "B" },
      { text: "Ngủ nướng, ăn brunch muộn", type: "C" },
      { text: "Đi chợ Hàn, chợ Cồn", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Buổi tối ở Đà Nẵng, bạn sẽ?",
    options: [
      { text: "Ngắm cầu Rồng phun lửa", type: "A" },
      { text: "Dạo phố đi bộ An Thượng", type: "B" },
      { text: "Đi bar, cafe rooftop", type: "C" },
      { text: "Ăn hải sản, nhậu với bạn bè", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn di chuyển bằng gì ở Đà Nẵng?",
    options: [
      { text: "Thuê xe máy, tự do khám phá", type: "A" },
      { text: "Grab, taxi cho tiện", type: "B" },
      { text: "Thuê xe ô tô có lái", type: "C" },
      { text: "Đi bộ + xe buýt công cộng", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn có leo Bàn Cờ, Sơn Trà không?",
    options: [
      { text: "Có, săn ảnh voọc chà vá", type: "A" },
      { text: "Có, ngắm hoàng hôn trên đỉnh", type: "B" },
      { text: "Không, sợ leo núi", type: "C" },
      { text: "Có thể, nếu có bạn đi cùng", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn mua gì làm quà từ Đà Nẵng?",
    options: [
      { text: "Nước mắm Nam Ô", type: "A" },
      { text: "Đồ lưu niệm Non Nước", type: "B" },
      { text: "Đèn lồng Hội An", type: "C" },
      { text: "Bánh tráng, đặc sản địa phương", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Điều bạn thích nhất ở Đà Nẵng?",
    options: [
      { text: "Biển đẹp, đô thị hiện đại", type: "A" },
      { text: "Sạch sẽ, văn minh, thân thiện", type: "B" },
      { text: "Ẩm thực phong phú, giá rẻ", type: "C" },
      { text: "Gần Hội An, Huế, đi đâu cũng tiện", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người yêu biển và hiện đại",
    emoji: "🌊",
    description: "Bạn đến Đà Nẵng vì biển Mỹ Khê và không gian đô thị hiện đại, sạch đẹp. Resort ven biển, thể thao buổi sáng và ngắm cầu Rồng buổi tối là lịch trình hoàn hảo.",
    traits: ["Yêu biển", "Hiện đại", "Năng động", "Thư giãn"],
    strengths: ["Cân bằng nghỉ ngơi và khám phá", "Tận hưởng dịch vụ tốt", "Sức khỏe tốt"],
    weaknesses: ["Có thể bỏ lỡ văn hóa địa phương", "Chi phí khá cao"],
    tips: ["Dành thời gian cho Hội An", "Thử đi xa trung tâm"],
  },
  B: {
    type: "B",
    title: "Người khám phá có kế hoạch",
    emoji: "🗺️",
    description: "Bạn đến Đà Nẵng với lịch trình rõ ràng. Bà Nà, Hội An, Ngũ Hành Sơn - mọi điểm đến đều được lên kế hoạch. Du lịch với bạn là để trải nghiệm trọn vẹn.",
    traits: ["Có kế hoạch", "Khám phá", "Trải nghiệm", "Chu đáo"],
    strengths: ["Đi được nhiều nơi", "Không bỏ lỡ điểm hot", "Tận dụng tốt thời gian"],
    weaknesses: ["Có thể mệt mỏi", "Thiếu linh hoạt"],
    tips: ["Dành thời gian nghỉ ngơi", "Để khoảng trống cho bất ngờ"],
  },
  C: {
    type: "C",
    title: "Người sành ẩm thực",
    emoji: "🍜",
    description: "Đà Nẵng với bạn là thiên đường ẩm thực. Mì Quảng, bánh tráng, hải sản - bạn không bỏ lỡ món nào. Du lịch là để ăn và thưởng thức!",
    traits: ["Sành ăn", "Thưởng thức", "Khám phá ẩm thực", "Vui vẻ"],
    strengths: ["Trải nghiệm ẩm thực đa dạng", "Hiểu văn hóa qua đồ ăn", "Có nhiều kỷ niệm ngon"],
    weaknesses: ["Có thể tăng cân", "Ít tham quan cảnh đẹp"],
    tips: ["Kết hợp đi bộ, vận động", "Thử đi các địa điểm văn hóa"],
  },
  D: {
    type: "D",
    title: "Người linh hoạt tận hưởng",
    emoji: "😎",
    description: "Bạn đến Đà Nẵng với tinh thần linh hoạt, kết hợp nhiều hoạt động. Biết cách tận dụng vị trí thuận lợi để khám phá cả miền Trung.",
    traits: ["Linh hoạt", "Đa dạng", "Tận hưởng", "Thông minh"],
    strengths: ["Trải nghiệm đa dạng", "Không bỏ lỡ điều gì", "Cân bằng tốt"],
    weaknesses: ["Có thể không sâu", "Mất thời gian di chuyển"],
    tips: ["Chọn điểm ưu tiên", "Dành thời gian ở mỗi nơi"],
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
