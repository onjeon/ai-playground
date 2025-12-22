// Bạn Là Mùa Nào?
// Khám phá mùa trong năm đại diện cho tâm hồn bạn

export const questions = [
  {
    id: 1,
    question: "Bạn thích thời tiết như thế nào?",
    options: [
      { text: "Ấm áp, có nắng nhẹ và gió mát", type: "A" },
      { text: "Nóng bức, nắng rực rỡ", type: "B" },
      { text: "Se lạnh, mát mẻ dễ chịu", type: "C" },
      { text: "Lạnh buốt, có thể cuộn trong chăn", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Hoạt động cuối tuần yêu thích của bạn?",
    options: [
      { text: "Đi picnic, ngắm hoa trong công viên", type: "A" },
      { text: "Đi biển, tắm nắng, lướt sóng", type: "B" },
      { text: "Đi café, ngắm lá vàng rơi", type: "C" },
      { text: "Ở nhà uống trà nóng, xem phim", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Món ăn nào hấp dẫn bạn nhất?",
    options: [
      { text: "Gỏi cuốn, nem chua - tươi mát", type: "A" },
      { text: "Hải sản nướng, đồ ăn BBQ", type: "B" },
      { text: "Bánh trung thu, chè các loại", type: "C" },
      { text: "Lẩu nóng, xôi nóng, bánh chưng", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Năng lượng của bạn như thế nào?",
    options: [
      { text: "Tràn đầy sức sống, muốn bắt đầu mọi thứ", type: "A" },
      { text: "Năng động, sôi nổi, nhiệt huyết", type: "B" },
      { text: "Bình lặng, sâu sắc, có chút hoài niệm", type: "C" },
      { text: "Yên tĩnh, thích nghỉ ngơi, tĩnh lặng", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn đang ở giai đoạn nào trong cuộc sống?",
    options: [
      { text: "Bắt đầu mới, có nhiều dự định", type: "A" },
      { text: "Đang thực hiện, làm việc hết mình", type: "B" },
      { text: "Suy ngẫm, nhìn lại những gì đã qua", type: "C" },
      { text: "Nghỉ ngơi, chuẩn bị cho chặng đường mới", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Màu sắc nào bạn thích nhất?",
    options: [
      { text: "Hồng, xanh lá non - tươi mới", type: "A" },
      { text: "Vàng, cam, đỏ - rực rỡ", type: "B" },
      { text: "Nâu, vàng đất, cam đất - ấm áp", type: "C" },
      { text: "Trắng, xám, xanh đậm - tĩnh lặng", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn xử lý cảm xúc như thế nào?",
    options: [
      { text: "Lạc quan, hy vọng vào tương lai", type: "A" },
      { text: "Bộc lộ ra ngoài, không giữ trong lòng", type: "B" },
      { text: "Suy ngẫm, để cảm xúc lắng đọng", type: "C" },
      { text: "Giữ im lặng, tự mình xử lý", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Đồ uống yêu thích của bạn?",
    options: [
      { text: "Trà hoa, nước ép trái cây", type: "A" },
      { text: "Sinh tố đá xay, nước dừa mát", type: "B" },
      { text: "Trà sữa ấm, cà phê sữa", type: "C" },
      { text: "Socola nóng, trà gừng", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Mối quan hệ của bạn với mọi người?",
    options: [
      { text: "Đang kết nối, làm quen nhiều người mới", type: "A" },
      { text: "Sôi nổi, có nhiều bạn bè xung quanh", type: "B" },
      { text: "Trân trọng những người đã gắn bó", type: "C" },
      { text: "Ít nhưng sâu, có vài người thân thiết", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Điều gì mô tả bạn nhất?",
    options: [
      { text: "Đầy hy vọng, mọi thứ đang bắt đầu", type: "A" },
      { text: "Rực cháy, sống hết mình", type: "B" },
      { text: "Trưởng thành, có chiều sâu", type: "C" },
      { text: "Bình yên, sẵn sàng tái sinh", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Bạn Là Mùa Xuân",
    emoji: "🌸",
    description: "Bạn mang tâm hồn của mùa xuân - tràn đầy sức sống, hy vọng và khởi đầu mới. Bạn lạc quan, yêu đời và luôn nhìn thấy tiềm năng trong mọi thứ. Giống như hoa đào nở rộ, bạn mang đến sự tươi mới và niềm vui cho cuộc sống.",
    traits: ["Lạc quan", "Tươi mới", "Hy vọng", "Năng động"],
    strengths: ["Truyền cảm hứng", "Dễ bắt đầu việc mới", "Nhìn mọi thứ tích cực"],
    weaknesses: ["Đôi khi quá lý tưởng", "Thiếu kiên nhẫn với quá trình"],
    tips: ["Kiên nhẫn với sự trưởng thành", "Hoàn thành những gì đã bắt đầu"],
  },
  B: {
    type: "B",
    title: "Bạn Là Mùa Hè",
    emoji: "☀️",
    description: "Bạn mang tâm hồn của mùa hè - rực cháy, nhiệt huyết và tràn đầy năng lượng. Bạn sống hết mình, yêu sự sôi động và không ngại thể hiện bản thân. Giống như ánh nắng chói chang, bạn tỏa sáng và thu hút mọi ánh nhìn.",
    traits: ["Nhiệt huyết", "Năng động", "Sôi nổi", "Tự tin"],
    strengths: ["Hành động mạnh mẽ", "Truyền năng lượng cho người khác", "Sống hết mình"],
    weaknesses: ["Đôi khi quá nóng vội", "Dễ cháy sạch năng lượng"],
    tips: ["Biết nghỉ ngơi đúng lúc", "Học cách bình tĩnh"],
  },
  C: {
    type: "C",
    title: "Bạn Là Mùa Thu",
    emoji: "🍂",
    description: "Bạn mang tâm hồn của mùa thu - sâu lắng, trưởng thành và đầy hoài niệm. Bạn có chiều sâu nội tâm, biết trân trọng những gì đã qua và sống với sự bình yên. Giống như lá vàng rơi, bạn đẹp một cách lặng lẽ và ý nghĩa.",
    traits: ["Sâu sắc", "Trưởng thành", "Hoài cổ", "Bình yên"],
    strengths: ["Có chiều sâu", "Biết trân trọng", "Suy nghĩ chín chắn"],
    weaknesses: ["Đôi khi quá hoài niệm", "Có thể buồn bã về quá khứ"],
    tips: ["Hướng về tương lai", "Tìm niềm vui trong hiện tại"],
  },
  D: {
    type: "D",
    title: "Bạn Là Mùa Đông",
    emoji: "❄️",
    description: "Bạn mang tâm hồn của mùa đông - tĩnh lặng, bình yên và sâu kín. Bạn thích sự yên tĩnh, cần không gian riêng để suy ngẫm và tái tạo năng lượng. Giống như tuyết trắng tinh khôi, bạn thuần khiết và có vẻ đẹp riêng đầy bí ẩn.",
    traits: ["Tĩnh lặng", "Sâu kín", "Thuần khiết", "Bí ẩn"],
    strengths: ["Biết nghỉ ngơi", "Tập trung nội tâm", "Không bị ảnh hưởng bên ngoài"],
    weaknesses: ["Đôi khi quá khép kín", "Khó mở lòng với người lạ"],
    tips: ["Kết nối với mọi người nhiều hơn", "Đón nhận sự ấm áp từ người khác"],
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
