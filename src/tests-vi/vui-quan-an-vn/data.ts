// Quán ăn Việt Nam yêu thích
// Khám phá kiểu quán ăn Việt Nam phù hợp với tính cách của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn thích ăn ở quán như thế nào?",
    options: [
      { text: "Quán vỉa hè, ghế nhựa, đông khách", type: "A" },
      { text: "Quán có không gian, máy lạnh", type: "B" },
      { text: "Quán nhỏ, ít người, ấm cúng", type: "C" },
      { text: "Nhà hàng sang trọng, phục vụ tốt", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Điều gì quan trọng nhất khi chọn quán ăn?",
    options: [
      { text: "Đồ ăn ngon, authentic", type: "A" },
      { text: "Không gian đẹp, thoải mái", type: "B" },
      { text: "Giá cả hợp lý", type: "C" },
      { text: "Vệ sinh sạch sẽ", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn tìm quán ăn mới như thế nào?",
    options: [
      { text: "Đi ngang thấy đông khách thì vào", type: "A" },
      { text: "Review trên mạng, check rating", type: "B" },
      { text: "Bạn bè giới thiệu", type: "C" },
      { text: "Food blogger, influencer recommend", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn đi ăn quán với ai nhiều nhất?",
    options: [
      { text: "Một mình, tự do thoải mái", type: "A" },
      { text: "Bạn bè, nhóm bạn", type: "B" },
      { text: "Gia đình, người thân", type: "C" },
      { text: "Người yêu, date night", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn thường ngồi ở quán bao lâu?",
    options: [
      { text: "Ăn nhanh xong đi", type: "A" },
      { text: "Ngồi nhâm nhi, nói chuyện lâu", type: "B" },
      { text: "Tùy mood, có khi nhanh có khi lâu", type: "C" },
      { text: "Dành thời gian thưởng thức", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn order món như thế nào?",
    options: [
      { text: "Món quen, đã biết ngon", type: "A" },
      { text: "Thử món mới, signature dish", type: "B" },
      { text: "Hỏi nhân viên recommend", type: "C" },
      { text: "Order nhiều để share", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Mức giá bạn sẵn sàng chi cho một bữa ăn?",
    options: [
      { text: "Càng rẻ càng tốt, dưới 50k", type: "A" },
      { text: "Vừa phải, 50-100k", type: "B" },
      { text: "Không giới hạn nếu ngon", type: "C" },
      { text: "Tùy dịp, đặc biệt thì chi nhiều", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn phản hồi khi đồ ăn không ngon như thế nào?",
    options: [
      { text: "Không nói gì, không quay lại", type: "A" },
      { text: "Góp ý nhẹ nhàng với quán", type: "B" },
      { text: "Review online để người khác biết", type: "C" },
      { text: "Tùy mức độ, có khi bỏ qua", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn có quán quen không?",
    options: [
      { text: "Có, ăn hoài không chán", type: "A" },
      { text: "Có vài quán yêu thích", type: "B" },
      { text: "Thích khám phá quán mới", type: "C" },
      { text: "Tùy mood, không nhất định", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Khi đến quán mới, bạn để ý điều gì đầu tiên?",
    options: [
      { text: "Menu, đồ ăn có gì", type: "A" },
      { text: "Không gian, decor quán", type: "B" },
      { text: "Khách đang ăn món gì", type: "C" },
      { text: "Thái độ nhân viên", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn thích quán có đặc điểm gì?",
    options: [
      { text: "Đông khách, xếp hàng, nổi tiếng", type: "A" },
      { text: "Góc chụp ảnh đẹp, instagrammable", type: "B" },
      { text: "Yên tĩnh, ít người, riêng tư", type: "C" },
      { text: "Phong cách độc đáo, concept hay", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Quán ăn lý tưởng của bạn như thế nào?",
    options: [
      { text: "Đồ ăn ngon nhất, không cần không gian đẹp", type: "A" },
      { text: "Balance giữa ngon và không gian", type: "B" },
      { text: "Không gian đẹp, đồ ăn ổn là được", type: "C" },
      { text: "Trải nghiệm tổng thể: service, food, ambiance", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Quán Vỉa hè - Authentic và Ngon",
    emoji: "🪑",
    description: "Bạn thuộc về những quán vỉa hè đông đúc, ngồi ghế nhựa nhưng đồ ăn ngon hết sẩy. Bạn quan tâm đến chất lượng món ăn hơn không gian, thích sự authentic.",
    traits: ["Thực tế", "Không màu mè", "Yêu ẩm thực", "Authentic"],
    strengths: ["Tìm được quán ngon", "Không phí tiền vào không gian", "Trải nghiệm thật"],
    weaknesses: ["Đôi khi bỏ qua vệ sinh", "Không phù hợp mọi dịp"],
    tips: ["Đôi khi thử quán có không gian", "Chú ý đến vệ sinh"],
  },
  B: {
    type: "B",
    title: "Quán Có không gian - Balance và Thoải mái",
    emoji: "🏠",
    description: "Bạn thích những quán có không gian thoải mái, máy lạnh nhưng vẫn đảm bảo đồ ăn ngon. Bạn biết cân bằng giữa trải nghiệm và chất lượng.",
    traits: ["Cân bằng", "Thoải mái", "Xã hội", "Hợp lý"],
    strengths: ["Lựa chọn hợp lý", "Phù hợp nhiều dịp", "Balance tốt"],
    weaknesses: ["Có thể bỏ lỡ quán ngon vỉa hè", "Đôi khi chi nhiều hơn cần"],
    tips: ["Thử quán vỉa hè đôi khi", "Khám phá quán mới nhiều hơn"],
  },
  C: {
    type: "C",
    title: "Quán Nhỏ - Ấm cúng và Riêng tư",
    emoji: "🏡",
    description: "Bạn thích những quán nhỏ, ít người, ấm cúng như ngôi nhà thứ hai. Bạn trân trọng không gian riêng tư và những bữa ăn yên bình.",
    traits: ["Riêng tư", "Ấm cúng", "Yên bình", "Tinh tế"],
    strengths: ["Tìm được góc riêng", "Thưởng thức trọn vẹn", "Tránh đông đúc"],
    weaknesses: ["Có thể bỏ lỡ quán hot", "Khó tìm quán phù hợp"],
    tips: ["Đôi khi thử quán đông đúc", "Khám phá nhiều quán mới"],
  },
  D: {
    type: "D",
    title: "Nhà hàng - Trải nghiệm Hoàn hảo",
    emoji: "🍽️",
    description: "Bạn thích trải nghiệm ẩm thực trọn vẹn: đồ ăn ngon, service tốt, không gian đẹp. Bạn sẵn sàng chi trả cho những trải nghiệm đặc biệt.",
    traits: ["Cầu toàn", "Sành ăn", "Chất lượng", "Trải nghiệm"],
    strengths: ["Trải nghiệm tốt nhất", "Không tiếc tiền cho chất lượng", "Sành điệu"],
    weaknesses: ["Chi phí cao", "Có thể bỏ qua quán bình dân ngon"],
    tips: ["Thử quán bình dân đôi khi", "Đừng chỉ dựa vào giá"],
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
