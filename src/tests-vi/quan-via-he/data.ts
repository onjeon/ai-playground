// Kiểu Quán Vỉa Hè
// Khám phá tính cách của bạn qua cách thưởng thức quán vỉa hè

export const questions = [
  {
    id: 1,
    question: "Bạn thường đến quán vỉa hè để?",
    options: [
      { text: "Ăn nhanh, tiết kiệm thời gian", type: "A" },
      { text: "Nhậu lai rai với bạn bè", type: "B" },
      { text: "Ăn sáng, bắt đầu ngày mới", type: "C" },
      { text: "Ngắm phố phường, thư giãn", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Điều bạn thích nhất ở quán vỉa hè?",
    options: [
      { text: "Giá rẻ, phải chăng", type: "A" },
      { text: "Không khí xì xào, náo nhiệt", type: "B" },
      { text: "Món ăn ngon, đúng vị", type: "C" },
      { text: "Không gian tự do, thoải mái", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn ngồi quán vỉa hè bao lâu?",
    options: [
      { text: "15-20 phút, ăn xong đi ngay", type: "A" },
      { text: "Vài tiếng, nhậu đến khuya", type: "B" },
      { text: "30 phút - 1 tiếng, vừa ăn vừa nghỉ", type: "C" },
      { text: "Không cố định, tùy tâm trạng", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn chọn quán vỉa hè nào?",
    options: [
      { text: "Quán gần nhà/công ty, tiện đi", type: "A" },
      { text: "Quán có bia lạnh, đồ nhậu ngon", type: "B" },
      { text: "Quán nổi tiếng, đông khách", type: "C" },
      { text: "Quán view đẹp, vị trí thoáng", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi ngồi quán vỉa hè, bạn thường?",
    options: [
      { text: "Tập trung ăn, lướt điện thoại", type: "A" },
      { text: "Nói chuyện, cười đùa ồn ào", type: "B" },
      { text: "Thưởng thức món ăn, chậm rãi", type: "C" },
      { text: "Ngắm người qua lại, suy ngẫm", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn đi quán vỉa hè với ai?",
    options: [
      { text: "Một mình, ăn nhanh rồi đi", type: "A" },
      { text: "Nhóm bạn nhậu", type: "B" },
      { text: "Gia đình, người thân", type: "C" },
      { text: "Ai rủ cũng đi", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn gọi gì ở quán vỉa hè?",
    options: [
      { text: "Một món chính, no là được", type: "A" },
      { text: "Bia, đồ nhậu đủ loại", type: "B" },
      { text: "Món đặc sản của quán", type: "C" },
      { text: "Thử nhiều món nhỏ khác nhau", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Vấn đề vệ sinh quán vỉa hè?",
    options: [
      { text: "Không quan tâm lắm, ăn quen rồi", type: "A" },
      { text: "Miễn vui là được", type: "B" },
      { text: "Chọn quán sạch sẽ, khang trang", type: "C" },
      { text: "Chấp nhận được ở mức cơ bản", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi quán vỉa hè bị dẹp, bạn?",
    options: [
      { text: "Tìm quán khác, không vấn đề", type: "A" },
      { text: "Tiếc nuối địa điểm nhậu quen", type: "B" },
      { text: "Buồn vì mất quán ăn ngon", type: "C" },
      { text: "Thương người bán, hy vọng họ ổn", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Thời tiết nào bạn thích ngồi vỉa hè nhất?",
    options: [
      { text: "Thời tiết nào cũng được", type: "A" },
      { text: "Tối mát, gió nhẹ - nhậu đã", type: "B" },
      { text: "Sáng sớm, không khí trong lành", type: "C" },
      { text: "Chiều tà, ngắm hoàng hôn", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Quán vỉa hè với bạn là?",
    options: [
      { text: "Giải pháp ăn uống tiện lợi", type: "A" },
      { text: "Nơi gặp gỡ bạn bè, xả stress", type: "B" },
      { text: "Văn hóa ẩm thực Việt Nam", type: "C" },
      { text: "Nét đẹp cuộc sống đô thị", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Nếu mở quán vỉa hè, bạn sẽ bán gì?",
    options: [
      { text: "Đồ ăn nhanh, phục vụ người bận rộn", type: "A" },
      { text: "Bia hơi, đồ nhậu - kinh doanh tốt", type: "B" },
      { text: "Món ăn truyền thống, chất lượng", type: "C" },
      { text: "Concept độc đáo, khác biệt", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người Thực Dụng Vỉa Hè",
    emoji: "🏃",
    description: "Bạn đến quán vỉa hè vì sự tiện lợi và nhanh gọn! Cuộc sống bận rộn khiến bạn cần những bữa ăn nhanh, rẻ mà vẫn ngon. Bạn là người thực tế, hiệu quả và không màu mè.",
    traits: ["Thực tế", "Nhanh gọn", "Không cầu kỳ", "Hiệu quả"],
    strengths: ["Tiết kiệm thời gian", "Tiết kiệm tiền", "Thích nghi mọi hoàn cảnh"],
    weaknesses: ["Ít thưởng thức", "Đôi khi vội vàng"],
    tips: ["Đôi khi hãy ngồi lại thưởng thức", "Trò chuyện với người xung quanh"],
  },
  B: {
    type: "B",
    title: "Dân Nhậu Vỉa Hè Chính Hiệu",
    emoji: "🍺",
    description: "Quán vỉa hè với bạn là nơi nhậu lai rai cùng bạn bè! Bạn yêu thích không khí xì xào, tiếng cười và những cuộc trò chuyện bất tận. Bạn là người hòa đồng, vui vẻ và yêu thích giao tiếp.",
    traits: ["Hòa đồng", "Vui vẻ", "Yêu bạn bè", "Thoải mái"],
    strengths: ["Có nhiều bạn bè", "Tạo không khí vui vẻ", "Xả stress tốt"],
    weaknesses: ["Đôi khi quá ồn ào", "Có thể uống nhiều"],
    tips: ["Uống có chừng mực", "Cân bằng giữa vui chơi và sức khỏe"],
  },
  C: {
    type: "C",
    title: "Người Sành Ăn Vỉa Hè",
    emoji: "👨‍🍳",
    description: "Bạn đến quán vỉa hè vì hương vị đích thực! Bạn biết quán nào ngon, món nào đặc sản và luôn tìm kiếm chất lượng dù giá rẻ. Bạn là người có gu ẩm thực và biết thưởng thức.",
    traits: ["Sành ăn", "Có gu", "Biết thưởng thức", "Cầu toàn"],
    strengths: ["Kiến thức ẩm thực tốt", "Tìm được quán ngon", "Được bạn bè tin tưởng"],
    weaknesses: ["Đôi khi khó tính", "Mất thời gian tìm quán"],
    tips: ["Chia sẻ kiến thức với người khác", "Đôi khi hãy thử quán mới"],
  },
  D: {
    type: "D",
    title: "Người Lãng Mạn Vỉa Hè",
    emoji: "🌃",
    description: "Quán vỉa hè với bạn là nơi để ngắm cuộc sống đô thị! Bạn thích ngồi nhìn người qua lại, suy ngẫm về cuộc đời. Bạn là người sâu sắc, hay suy nghĩ và biết thưởng thức những điều giản dị.",
    traits: ["Sâu sắc", "Lãng mạn", "Hay suy ngẫm", "Thưởng thức cuộc sống"],
    strengths: ["Biết tận hưởng", "Có chiều sâu", "Bình yên nội tâm"],
    weaknesses: ["Đôi khi hay mơ mộng", "Ít hòa nhập"],
    tips: ["Đôi khi hãy giao tiếp với người xung quanh", "Biến suy nghĩ thành hành động"],
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
