// Phong Cách Dọn Dẹp
// Khám phá tính cách qua cách bạn dọn dẹp nhà cửa

export const questions = [
  {
    id: 1,
    question: "Bạn dọn dẹp nhà cửa như thế nào?",
    options: [
      { text: "Dọn hàng ngày, nhà lúc nào cũng sạch", type: "A" },
      { text: "Dọn cuối tuần, dành thời gian tổng vệ sinh", type: "B" },
      { text: "Dọn khi thấy bừa bộn quá", type: "C" },
      { text: "Dọn khi có khách đến", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Góc làm việc/học tập của bạn như thế nào?",
    options: [
      { text: "Ngăn nắp, mọi thứ có chỗ của nó", type: "A" },
      { text: "Hơi bừa nhưng tìm được đồ", type: "B" },
      { text: "Bừa bộn sáng tạo, đống giấy tờ", type: "C" },
      { text: "Khác nhau mỗi ngày, tùy mood", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn có hay lau nhà không?",
    options: [
      { text: "Hàng ngày, không chịu được sàn bẩn", type: "A" },
      { text: "2-3 lần/tuần, vừa phải", type: "B" },
      { text: "1 lần/tuần, cuối tuần dọn", type: "C" },
      { text: "Khi thấy dơ quá mới lau", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Tủ quần áo của bạn như thế nào?",
    options: [
      { text: "Xếp ngăn nắp, phân loại rõ ràng", type: "A" },
      { text: "Có xếp nhưng đôi khi hơi lộn xộn", type: "B" },
      { text: "Chất đống, tìm đồ hơi lâu", type: "C" },
      { text: "Vứt đâu thấy đó, nhưng vẫn tìm được", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn có thích mua đồ dọn dẹp mới không?",
    options: [
      { text: "Rất thích, hay thử sản phẩm mới", type: "A" },
      { text: "Mua khi cần, không sưu tập", type: "B" },
      { text: "Dùng đồ cơ bản, không cần nhiều", type: "C" },
      { text: "Không quan tâm, có gì dùng nấy", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi dọn dẹp, bạn có vứt đồ cũ không?",
    options: [
      { text: "Hay vứt, không giữ đồ không dùng", type: "A" },
      { text: "Khó vứt, nhiều kỷ niệm", type: "B" },
      { text: "Tích trữ nhiều đồ, có thể dùng sau", type: "C" },
      { text: "Không dọn tủ thường xuyên", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn dọn bếp sau khi nấu ăn như thế nào?",
    options: [
      { text: "Dọn ngay, không để qua đêm", type: "A" },
      { text: "Dọn sau khi ăn xong", type: "B" },
      { text: "Để đó, mai dọn", type: "C" },
      { text: "Ngâm bát đĩa, khi nào rảnh mới rửa", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn có dọn giường mỗi sáng không?",
    options: [
      { text: "Luôn luôn, thói quen mỗi ngày", type: "A" },
      { text: "Hầu hết các ngày", type: "B" },
      { text: "Thỉnh thoảng, khi có thời gian", type: "C" },
      { text: "Hiếm khi, tối lại nằm mà", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Nhà vệ sinh của bạn được dọn như thế nào?",
    options: [
      { text: "Sạch bóng, thơm tho mỗi ngày", type: "A" },
      { text: "Dọn định kỳ, 1-2 lần/tuần", type: "B" },
      { text: "Khi thấy bẩn mới dọn", type: "C" },
      { text: "Lau qua loa, không kỳ công", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn nghĩ gì về câu 'Nhà sạch thì mát, bát sạch ngon cơm'?",
    options: [
      { text: "Rất đúng, thực hành mỗi ngày", type: "A" },
      { text: "Đúng, nhưng đôi khi khó thực hiện", type: "B" },
      { text: "Hiểu nhưng không phải ưu tiên", type: "C" },
      { text: "Bình thường, không quan trọng lắm", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Thánh Sạch Sẽ",
    emoji: "✨",
    description: "Bạn là thánh sạch sẽ! Nhà cửa của bạn luôn ngăn nắp, gọn gàng như trong tạp chí. Bạn không thể chịu được sự bừa bộn và dọn dẹp là một phần quan trọng trong cuộc sống.",
    traits: ["Ngăn nắp", "Kỷ luật", "Chi tiết", "Hoàn hảo"],
    strengths: ["Nhà luôn sạch sẽ", "Tìm đồ nhanh", "Môi trường sống tốt"],
    weaknesses: ["Có thể quá khắt khe", "Mất nhiều thời gian dọn", "Stress khi bừa bộn"],
    tips: ["Cho phép một chút bừa bộn", "Dành thời gian cho việc khác"],
  },
  B: {
    type: "B",
    title: "Người Dọn Có Kế Hoạch",
    emoji: "📋",
    description: "Bạn dọn dẹp có kế hoạch và cân bằng! Bạn biết khi nào cần dọn và không bị ám ảnh bởi sự sạch sẽ. Nhà của bạn sạch sẽ mà không mất quá nhiều thời gian.",
    traits: ["Cân bằng", "Có kế hoạch", "Thực tế", "Hiệu quả"],
    strengths: ["Dọn dẹp hiệu quả", "Cân bằng cuộc sống", "Nhà sạch đủ dùng"],
    weaknesses: ["Đôi khi hoãn dọn dẹp", "Có thể tích tụ việc"],
    tips: ["Duy trì thói quen tốt", "Dọn một chút mỗi ngày"],
  },
  C: {
    type: "C",
    title: "Dọn Theo Cảm Hứng",
    emoji: "🎨",
    description: "Bạn dọn dẹp theo cảm hứng! Đôi khi bạn dọn cả ngày, đôi khi để bừa cả tuần. Bạn có 'bừa bộn sáng tạo' và vẫn sống thoải mái trong không gian của mình.",
    traits: ["Tự do", "Sáng tạo", "Linh hoạt", "Không gò bó"],
    strengths: ["Không stress về dọn dẹp", "Tập trung vào việc quan trọng", "Sống thoải mái"],
    weaknesses: ["Nhà có thể bừa bộn", "Khó tìm đồ", "Không gian không tối ưu"],
    tips: ["Dọn một khu vực mỗi ngày", "Tạo thói quen nhỏ"],
  },
  D: {
    type: "D",
    title: "Dọn Khi Cần Thiết",
    emoji: "😌",
    description: "Bạn không bị ám ảnh bởi việc dọn dẹp! Bạn dọn khi cần thiết, như khi có khách đến. Bạn có những ưu tiên khác trong cuộc sống và không muốn mất thời gian vào dọn dẹp.",
    traits: ["Thực dụng", "Thoải mái", "Không ám ảnh", "Có ưu tiên khác"],
    strengths: ["Không mất thời gian vào dọn dẹp", "Tập trung vào điều quan trọng", "Sống vui vẻ"],
    weaknesses: ["Nhà có thể bừa bộn lâu", "Có thể khó tìm đồ", "Khách đến bất ngờ sẽ stress"],
    tips: ["Dọn 10 phút mỗi ngày", "Thuê người dọn nếu có điều kiện"],
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
