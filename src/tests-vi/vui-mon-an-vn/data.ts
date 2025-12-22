// Món ăn Việt phù hợp
// Khám phá món ăn Việt Nam phù hợp với tính cách của bạn

export const questions = [
  {
    id: 1,
    question: "Khi đói bụng, bạn thích ăn món như thế nào?",
    options: [
      { text: "Món có nước, nóng hổi, no bụng", type: "A" },
      { text: "Món khô, đậm đà, ăn với cơm", type: "B" },
      { text: "Món nhẹ nhàng, thanh mát", type: "C" },
      { text: "Món có nhiều topping, phong phú", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thích gia vị như thế nào?",
    options: [
      { text: "Đậm đà, đủ vị chua cay mặn ngọt", type: "A" },
      { text: "Cay nồng, thích ớt và tiêu", type: "B" },
      { text: "Thanh nhẹ, ít gia vị", type: "C" },
      { text: "Ngọt vừa, béo bùi", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Buổi sáng bạn thích ăn gì?",
    options: [
      { text: "Phở hoặc bún nóng", type: "A" },
      { text: "Cơm tấm hoặc bánh mì", type: "B" },
      { text: "Bánh cuốn hoặc xôi", type: "C" },
      { text: "Cháo hoặc hủ tiếu", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn thích ăn uống ở đâu nhất?",
    options: [
      { text: "Quán phở, bún quen thuộc", type: "A" },
      { text: "Quán cơm nhà làm ngon", type: "B" },
      { text: "Quán ăn sạch sẽ, thoáng mát", type: "C" },
      { text: "Quán ăn vỉa hè, đông vui", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi ăn cùng bạn bè, bạn thích gọi món gì?",
    options: [
      { text: "Lẩu nóng để quây quần", type: "A" },
      { text: "Nướng BBQ để tự nướng", type: "B" },
      { text: "Gỏi cuốn, nem để cùng cuốn", type: "C" },
      { text: "Buffet để mỗi người chọn món", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn thích loại protein nào nhất?",
    options: [
      { text: "Bò - thơm ngon, bổ dưỡng", type: "A" },
      { text: "Heo - đa dạng món, quen thuộc", type: "B" },
      { text: "Gà - nhẹ nhàng, dễ ăn", type: "C" },
      { text: "Hải sản - tươi ngon, đặc biệt", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn ăn rau như thế nào?",
    options: [
      { text: "Rau sống ăn kèm, nhiều loại", type: "A" },
      { text: "Rau xào hoặc luộc", type: "B" },
      { text: "Salad tươi, nhẹ bụng", type: "C" },
      { text: "Rau củ trong canh hoặc lẩu", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Món tráng miệng bạn thích nhất?",
    options: [
      { text: "Chè đậu, thập cẩm", type: "A" },
      { text: "Trái cây tươi", type: "B" },
      { text: "Bánh flan, sữa chua", type: "C" },
      { text: "Kem, đồ ngọt", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi trời lạnh, bạn thích ăn gì?",
    options: [
      { text: "Phở nóng hổi, húp nước dùng", type: "A" },
      { text: "Bò kho, cà ri nóng", type: "B" },
      { text: "Cháo nóng, dễ tiêu", type: "C" },
      { text: "Lẩu cay nồng ấm bụng", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Khi trời nóng, bạn thích ăn gì?",
    options: [
      { text: "Bún riêu, bún mắm đậm đà", type: "A" },
      { text: "Cơm tấm, bánh mì nguội", type: "B" },
      { text: "Gỏi, nộm thanh mát", type: "C" },
      { text: "Chè, đồ uống mát lạnh", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn thích nước chấm như thế nào?",
    options: [
      { text: "Nước mắm pha đủ vị", type: "A" },
      { text: "Mắm nêm, mắm ruốc đặc trưng", type: "B" },
      { text: "Nước chấm nhẹ, ít mặn", type: "C" },
      { text: "Tương ớt, satay đậm đà", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Nếu chỉ được ăn một món Việt mãi mãi, bạn chọn gì?",
    options: [
      { text: "Phở - tinh hoa ẩm thực Việt", type: "A" },
      { text: "Cơm tấm - no bụng, đa dạng", type: "B" },
      { text: "Bánh mì - tiện lợi, ngon miệng", type: "C" },
      { text: "Bún chả - hài hòa, thơm lừng", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Phở Bò",
    emoji: "🍜",
    description: "Bạn như bát phở bò nóng hổi - truyền thống, đậm đà và ấm áp. Bạn thích sự cân bằng, hương vị tinh tế và những giá trị bền vững qua thời gian.",
    traits: ["Truyền thống", "Ấm áp", "Cân bằng", "Đáng tin cậy"],
    strengths: ["Ổn định", "Được nhiều người yêu thích", "Giá trị vượt thời gian"],
    weaknesses: ["Đôi khi quá quen thuộc", "Ít mạo hiểm thử điều mới"],
    tips: ["Thử thêm topping mới", "Khám phá những biến tấu phở khác nhau"],
  },
  B: {
    type: "B",
    title: "Cơm Tấm",
    emoji: "🍚",
    description: "Bạn như đĩa cơm tấm - phong phú, đa dạng và no bụng. Bạn thực tế, biết cách kết hợp nhiều thứ và luôn mang lại sự hài lòng.",
    traits: ["Đa dạng", "Thực tế", "No đủ", "Linh hoạt"],
    strengths: ["Thích ứng tốt", "Làm hài lòng nhiều người", "Giá trị tốt"],
    weaknesses: ["Có thể quá nhiều thứ", "Đôi khi thiếu tinh tế"],
    tips: ["Tập trung vào chất lượng hơn số lượng", "Thử những món tinh tế hơn"],
  },
  C: {
    type: "C",
    title: "Gỏi Cuốn",
    emoji: "🥗",
    description: "Bạn như cuốn gỏi cuốn tươi mát - nhẹ nhàng, thanh lịch và tốt cho sức khỏe. Bạn coi trọng sự cân bằng và những thứ tinh khiết.",
    traits: ["Thanh tao", "Nhẹ nhàng", "Lành mạnh", "Tinh tế"],
    strengths: ["Cân bằng", "Tốt cho sức khỏe", "Thẩm mỹ cao"],
    weaknesses: ["Có thể thiếu đậm đà", "Không phù hợp khi cần no nhanh"],
    tips: ["Đôi khi cần thưởng thức món đậm đà", "Thử những hương vị mạnh hơn"],
  },
  D: {
    type: "D",
    title: "Bún Chả",
    emoji: "🍖",
    description: "Bạn như bát bún chả thơm lừng - hài hòa, sáng tạo và có cá tính. Bạn biết cách kết hợp để tạo ra trải nghiệm độc đáo.",
    traits: ["Hài hòa", "Sáng tạo", "Cá tính", "Thơm ngon"],
    strengths: ["Kết hợp tốt", "Độc đáo", "Để lại ấn tượng"],
    weaknesses: ["Cần nhiều công đoạn", "Không phải ai cũng hiểu"],
    tips: ["Giữ sự đơn giản khi cần", "Đôi khi ít là nhiều"],
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
