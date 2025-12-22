// Kiểu Đón Giáng Sinh
// Khám phá tính cách của bạn qua cách đón Giáng Sinh tại Việt Nam

export const questions = [
  {
    id: 1,
    question: "Giáng Sinh với bạn có ý nghĩa gì?",
    options: [
      { text: "Lễ hội tôn giáo thiêng liêng", type: "A" },
      { text: "Dịp sum họp gia đình", type: "B" },
      { text: "Cơ hội vui chơi, đi phố", type: "C" },
      { text: "Không khí cuối năm ấm áp", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thường đón Giáng Sinh ở đâu?",
    options: [
      { text: "Tại nhà thờ, lễ nhà thờ", type: "A" },
      { text: "Tại nhà với gia đình", type: "B" },
      { text: "Ra phố, các khu vui chơi Noel", type: "C" },
      { text: "Quán café, nhà hàng với bạn bè", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn có trang trí Giáng Sinh không?",
    options: [
      { text: "Có, cây thông, hang đá đầy đủ", type: "A" },
      { text: "Có, cây thông nhỏ cho có không khí", type: "B" },
      { text: "Có, để chụp ảnh check-in", type: "C" },
      { text: "Không trang trí, chỉ ra phố ngắm", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn có tặng quà Giáng Sinh không?",
    options: [
      { text: "Có, cho gia đình và người thân", type: "A" },
      { text: "Có, cho con cái, trẻ em", type: "B" },
      { text: "Có, cho bạn bè, người yêu", type: "C" },
      { text: "Không tặng, chỉ đi chơi", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Món ăn Giáng Sinh bạn thích?",
    options: [
      { text: "Gà tây, jambon truyền thống", type: "A" },
      { text: "Bữa cơm gia đình sum họp", type: "B" },
      { text: "Buffet, tiệc tại nhà hàng", type: "C" },
      { text: "Đồ ăn ngoài phố, ăn vặt", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Đêm Noel, bạn thường làm gì?",
    options: [
      { text: "Đi lễ nhà thờ, cầu nguyện", type: "A" },
      { text: "Ở nhà với gia đình", type: "B" },
      { text: "Ra phố, chụp ảnh, vui chơi", type: "C" },
      { text: "Đi café, bar với bạn bè", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn có nghe nhạc Giáng Sinh không?",
    options: [
      { text: "Có, các bài thánh ca truyền thống", type: "A" },
      { text: "Có, nhạc Noel nhẹ nhàng", type: "B" },
      { text: "Có, các bản remix, hiện đại", type: "C" },
      { text: "Không quan tâm nhạc Giáng Sinh", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Ông già Noel với bạn là?",
    options: [
      { text: "Biểu tượng văn hóa đẹp", type: "A" },
      { text: "Ký ức tuổi thơ đáng yêu", type: "B" },
      { text: "Cơ hội chụp ảnh, vui đùa", type: "C" },
      { text: "Không quan tâm lắm", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Địa điểm Giáng Sinh bạn thích ở VN?",
    options: [
      { text: "Nhà thờ lớn, khu Công giáo", type: "A" },
      { text: "Khu trung tâm thành phố", type: "B" },
      { text: "Các điểm check-in nổi tiếng", type: "C" },
      { text: "Quán café, nơi yên tĩnh", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Ngân sách Giáng Sinh của bạn?",
    options: [
      { text: "Chi nhiều cho quà và từ thiện", type: "A" },
      { text: "Chi vừa phải cho gia đình", type: "B" },
      { text: "Chi nhiều cho vui chơi, ăn uống", type: "C" },
      { text: "Tiết kiệm, không chi nhiều", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn có tham gia từ thiện dịp Giáng Sinh không?",
    options: [
      { text: "Có, đây là tinh thần Giáng Sinh", type: "A" },
      { text: "Đôi khi, nếu có cơ hội", type: "B" },
      { text: "Không, chỉ vui chơi", type: "C" },
      { text: "Muốn nhưng chưa có dịp", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Sau Giáng Sinh, bạn cảm thấy?",
    options: [
      { text: "Bình an, tràn đầy yêu thương", type: "A" },
      { text: "Hạnh phúc vì sum họp gia đình", type: "B" },
      { text: "Vui vẻ vì được đi chơi", type: "C" },
      { text: "Bình thường, như mọi ngày", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người Đón Giáng Sinh Truyền Thống",
    emoji: "⛪",
    description: "Giáng Sinh với bạn mang ý nghĩa tôn giáo và tinh thần sâu sắc! Bạn coi trọng các nghi lễ truyền thống, tinh thần yêu thương và sẻ chia. Bạn là người có đức tin, nhân ái và rộng lòng.",
    traits: ["Có đức tin", "Nhân ái", "Truyền thống", "Sẻ chia"],
    strengths: ["Có đời sống tinh thần phong phú", "Biết cho đi", "Lan tỏa yêu thương"],
    weaknesses: ["Đôi khi quá nghiêm túc", "Khó hòa nhập xu hướng mới"],
    tips: ["Mở lòng với các cách đón Giáng Sinh khác", "Kết hợp truyền thống và hiện đại"],
  },
  B: {
    type: "B",
    title: "Người Đón Giáng Sinh Gia Đình",
    emoji: "🏠",
    description: "Giáng Sinh với bạn là dịp sum họp gia đình! Bạn coi trọng những bữa cơm đoàn viên, quà tặng cho người thân. Bạn là người yêu gia đình, ấm áp và trách nhiệm.",
    traits: ["Yêu gia đình", "Ấm áp", "Trách nhiệm", "Gắn kết"],
    strengths: ["Gắn kết gia đình", "Tạo kỷ niệm đẹp", "Yêu thương người thân"],
    weaknesses: ["Đôi khi bỏ lỡ bạn bè", "Ít trải nghiệm bên ngoài"],
    tips: ["Mở rộng giao tiếp", "Kết hợp gia đình và bạn bè"],
  },
  C: {
    type: "C",
    title: "Người Yêu Lễ Hội Giáng Sinh",
    emoji: "🎄",
    description: "Giáng Sinh với bạn là mùa lễ hội sôi động! Bạn thích ra phố, chụp ảnh check-in và tận hưởng không khí Noel. Bạn là người năng động, hiện đại và yêu trải nghiệm.",
    traits: ["Năng động", "Hiện đại", "Yêu lễ hội", "Xã giao"],
    strengths: ["Có nhiều kỷ niệm", "Bắt kịp xu hướng", "Biết tận hưởng"],
    weaknesses: ["Đôi khi thiên về hình thức", "Bỏ qua ý nghĩa sâu xa"],
    tips: ["Dành thời gian cho người thân", "Tìm hiểu thêm về ý nghĩa Giáng Sinh"],
  },
  D: {
    type: "D",
    title: "Người Đón Giáng Sinh Bình Dị",
    emoji: "🌟",
    description: "Giáng Sinh với bạn là không khí cuối năm ấm áp! Bạn không quá quan trọng các nghi lễ, chỉ tận hưởng không khí nhẹ nhàng. Bạn là người thoải mái, độc lập và sống theo cách riêng.",
    traits: ["Thoải mái", "Độc lập", "Bình dị", "Tự do"],
    strengths: ["Không bị áp lực", "Sống theo cách riêng", "Tự tại"],
    weaknesses: ["Có thể bỏ lỡ không khí lễ hội", "Thiếu kết nối cộng đồng"],
    tips: ["Đôi khi hãy tham gia các hoạt động", "Tạo không khí Giáng Sinh riêng cho mình"],
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
