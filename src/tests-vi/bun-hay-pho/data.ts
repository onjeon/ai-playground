// Bún hay Phở
// Khám phá tính cách của bạn qua sở thích bún hay phở

export const questions = [
  {
    id: 1,
    question: "Buổi sáng, bạn thường chọn gì?",
    options: [
      { text: "Phở - nước dùng nóng hổi", type: "A" },
      { text: "Bún - đa dạng và no lâu", type: "B" },
      { text: "Tùy hôm, không cố định", type: "C" },
      { text: "Không ăn sáng hoặc ăn khác", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Khi ăn phở/bún, bạn thích topping gì?",
    options: [
      { text: "Đơn giản - thịt bò tái, chín", type: "A" },
      { text: "Đầy đủ - nem, chả, riêu...", type: "B" },
      { text: "Hải sản - tôm, cua, mực", type: "C" },
      { text: "Chay hoặc ít thịt", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn thích nước dùng như thế nào?",
    options: [
      { text: "Trong, ngọt thanh, tinh tế", type: "A" },
      { text: "Đậm đà, nhiều gia vị", type: "B" },
      { text: "Chua chua, ngọt ngọt", type: "C" },
      { text: "Khô, không nước hoặc ít nước", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi ăn, bạn thích thêm gì?",
    options: [
      { text: "Chỉ chanh và ớt, giữ vị gốc", type: "A" },
      { text: "Rau sống, giá, húng quế thật nhiều", type: "B" },
      { text: "Mắm, tương, nước mắm chua ngọt", type: "C" },
      { text: "Không thêm gì cả", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn thường ăn bún/phở ở đâu?",
    options: [
      { text: "Quán quen, lâu năm", type: "A" },
      { text: "Thử quán mới, review tốt", type: "B" },
      { text: "Ở nhà, tự nấu", type: "C" },
      { text: "Bất cứ đâu tiện", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Thời tiết nào bạn thích ăn phở/bún nhất?",
    options: [
      { text: "Trời lạnh - húp nước nóng", type: "A" },
      { text: "Bất cứ lúc nào", type: "B" },
      { text: "Trời nóng - ăn bún mát", type: "C" },
      { text: "Khi đói là chính", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Món bún yêu thích của bạn?",
    options: [
      { text: "Bún bò Huế - cay nồng", type: "A" },
      { text: "Bún chả - thơm lừng", type: "B" },
      { text: "Bún riêu - chua ngọt", type: "C" },
      { text: "Bún đậu mắm tôm - đặc biệt", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Phở hay bún dễ nấu hơn với bạn?",
    options: [
      { text: "Phở - công thức rõ ràng", type: "A" },
      { text: "Bún - linh hoạt hơn", type: "B" },
      { text: "Đều khó, mua ăn thôi", type: "C" },
      { text: "Đều dễ nếu có công thức", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Nếu chỉ được chọn một món ăn cả đời, bạn chọn?",
    options: [
      { text: "Phở - không bao giờ chán", type: "A" },
      { text: "Bún - đa dạng kiểu chế biến", type: "B" },
      { text: "Cơm - đơn giản nhất", type: "C" },
      { text: "Món khác - không phải phở hay bún", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn nghĩ gì về cuộc chiến phở vs bún?",
    options: [
      { text: "Phở là vua - truyền thống Việt Nam", type: "A" },
      { text: "Bún đa dạng hơn - nhiều món hay", type: "B" },
      { text: "Cả hai đều ngon, tùy khẩu vị", type: "C" },
      { text: "Không quan tâm lắm", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Khi đưa bạn nước ngoài đi ăn, bạn chọn?",
    options: [
      { text: "Phở - đại diện ẩm thực Việt", type: "A" },
      { text: "Bún chả - Barack Obama style", type: "B" },
      { text: "Bánh mì - dễ ăn hơn", type: "C" },
      { text: "Tùy họ thích gì", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bữa cuối cùng trong đời, bạn ăn gì?",
    options: [
      { text: "Tô phở bò nghi ngút khói", type: "A" },
      { text: "Bún với đủ loại topping", type: "B" },
      { text: "Món mẹ nấu, gia đình", type: "C" },
      { text: "Không biết, chưa nghĩ đến", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Team Phở - Người truyền thống",
    emoji: "🍜",
    description: "Bạn là fan của phở! Bạn trân trọng giá trị truyền thống, thích sự tinh tế và đơn giản mà hoàn hảo. Giống như phở, bạn có vẻ đơn giản nhưng ẩn chứa chiều sâu đáng ngạc nhiên.",
    traits: ["Truyền thống", "Tinh tế", "Kiên định", "Đơn giản"],
    strengths: ["Tôn trọng giá trị", "Có gu riêng", "Không chạy theo xu hướng"],
    weaknesses: ["Có thể bảo thủ", "Khó chấp nhận cái mới"],
    tips: ["Thử những món mới", "Phở vẫn ngon nhưng bún cũng có điểm hay"],
  },
  B: {
    type: "B",
    title: "Team Bún - Người đa dạng",
    emoji: "🥗",
    description: "Bạn là fan của bún! Bạn yêu thích sự đa dạng, phong phú và không bao giờ ngại thử cái mới. Giống như bún với hàng trăm biến thể, bạn là người đa diện và thú vị.",
    traits: ["Đa dạng", "Linh hoạt", "Phong phú", "Thích khám phá"],
    strengths: ["Mở rộng trải nghiệm", "Thích ứng tốt", "Không nhàm chán"],
    weaknesses: ["Có thể thiếu chuyên sâu", "Khó chọn lựa"],
    tips: ["Đôi khi tập trung vào một thứ", "Bún đa dạng nhưng cũng cần có món ruột"],
  },
  C: {
    type: "C",
    title: "Team Cân Bằng - Người linh hoạt",
    emoji: "⚖️",
    description: "Bạn không thiên vị bên nào! Bạn biết tận hưởng cả phở lẫn bún tùy theo tâm trạng và hoàn cảnh. Bạn là người cân bằng, không cực đoan và biết cách hưởng thụ cuộc sống.",
    traits: ["Cân bằng", "Linh hoạt", "Thực tế", "Dễ tính"],
    strengths: ["Hòa nhập tốt", "Không khó khăn", "Tận hưởng mọi thứ"],
    weaknesses: ["Có thể thiếu quan điểm riêng", "Khó đưa ra lựa chọn"],
    tips: ["Vẫn nên có sở thích riêng", "Cân bằng là tốt nhưng đam mê cũng quan trọng"],
  },
  D: {
    type: "D",
    title: "Team Khác Biệt - Người độc đáo",
    emoji: "🍽️",
    description: "Bạn không theo đám đông! Phở hay bún không phải ưu tiên của bạn, bạn có những sở thích riêng và không sợ khác biệt. Bạn độc đáo và có cá tính riêng.",
    traits: ["Độc đáo", "Cá tính", "Không theo đám đông", "Tự do"],
    strengths: ["Có cá tính", "Không bị ảnh hưởng", "Tự tin với sự khác biệt"],
    weaknesses: ["Có thể khó hòa nhập", "Bỏ lỡ những điều hay"],
    tips: ["Thử phở và bún xem sao", "Đôi khi theo đám đông cũng vui"],
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
