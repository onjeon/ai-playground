// Kiểu trà sữa yêu thích
// Khám phá tính cách qua loại trà sữa bạn yêu thích

export const questions = [
  {
    id: 1,
    question: "Bạn thường gọi trà sữa vị gì?",
    options: [
      { text: "Trà sữa truyền thống, ô long", type: "A" },
      { text: "Trà sữa trân châu đường đen", type: "B" },
      { text: "Trà sữa matcha, trà xanh", type: "C" },
      { text: "Trà trái cây, trà đào cam sả", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Mức đường bạn thường chọn?",
    options: [
      { text: "0% hoặc 30% - ít ngọt", type: "A" },
      { text: "100% - ngọt đầy đủ", type: "B" },
      { text: "50% - vừa phải", type: "C" },
      { text: "70% - ngọt nhẹ", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Topping yêu thích của bạn?",
    options: [
      { text: "Không topping, uống vị trà thuần", type: "A" },
      { text: "Trân châu đen hoặc trắng", type: "B" },
      { text: "Pudding, thạch dừa", type: "C" },
      { text: "Trái cây tươi, thạch hoa quả", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn hay uống trà sữa ở đâu?",
    options: [
      { text: "Quán trà sang trọng, yên tĩnh", type: "A" },
      { text: "Quán hot, đông khách", type: "B" },
      { text: "Quán có không gian làm việc", type: "C" },
      { text: "Mua mang đi, tiện đường", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn uống trà sữa bao lâu một lần?",
    options: [
      { text: "Thỉnh thoảng, khi có dịp đặc biệt", type: "A" },
      { text: "Mỗi ngày hoặc cách ngày", type: "B" },
      { text: "Vài lần một tuần", type: "C" },
      { text: "Khi đi chơi với bạn bè", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Size trà sữa bạn hay gọi?",
    options: [
      { text: "Size nhỏ, vừa đủ thưởng thức", type: "A" },
      { text: "Size lớn nhất, uống cho đã", type: "B" },
      { text: "Size vừa, cân đối", type: "C" },
      { text: "Tùy mood, không cố định", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Thương hiệu trà sữa bạn thích?",
    options: [
      { text: "Thương hiệu Đài Loan chính gốc", type: "A" },
      { text: "Thương hiệu hot, nhiều chi nhánh", type: "B" },
      { text: "Thương hiệu Nhật, Hàn cao cấp", type: "C" },
      { text: "Quán nhỏ địa phương, giá rẻ", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Khi uống trà sữa, bạn thường làm gì?",
    options: [
      { text: "Ngồi một mình, thưởng thức", type: "A" },
      { text: "Check-in, chụp ảnh đăng story", type: "B" },
      { text: "Làm việc, học bài", type: "C" },
      { text: "Tán gẫu với bạn bè", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn chọn đá như thế nào?",
    options: [
      { text: "Ít đá hoặc không đá", type: "A" },
      { text: "Nhiều đá, lạnh sảng khoái", type: "B" },
      { text: "Đá bình thường", type: "C" },
      { text: "Tùy thời tiết", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Điều gì hấp dẫn bạn ở trà sữa?",
    options: [
      { text: "Hương vị trà tinh tế", type: "A" },
      { text: "Topping phong phú, đa dạng", type: "B" },
      { text: "Không gian quán đẹp", type: "C" },
      { text: "Được đi chơi với bạn", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn hay giới thiệu trà sữa cho ai?",
    options: [
      { text: "Người sành ăn, biết thưởng thức", type: "A" },
      { text: "Tất cả mọi người đều nên thử", type: "B" },
      { text: "Bạn bè có cùng sở thích", type: "C" },
      { text: "Ai hỏi thì chỉ", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Nếu không có trà sữa, bạn sẽ gọi gì?",
    options: [
      { text: "Trà ô long, trà xanh", type: "A" },
      { text: "Đồ uống có topping khác", type: "B" },
      { text: "Cà phê hoặc matcha", type: "C" },
      { text: "Nước ép, sinh tố trái cây", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Tín đồ trà thuần khiết",
    emoji: "🍵",
    description: "Bạn là người tinh tế, sành sỏi và yêu thích vị trà nguyên bản. Bạn không cần topping hay đường để thưởng thức, vì hương vị tinh tế mới là điều quan trọng.",
    traits: ["Tinh tế", "Sành sỏi", "Cổ điển", "Kỹ tính"],
    strengths: ["Có gu thẩm mỹ cao", "Biết thưởng thức", "Không dễ bị ảnh hưởng"],
    weaknesses: ["Có thể khó tính", "Ít thử điều mới"],
    tips: ["Thỉnh thoảng thử các vị mới", "Mở lòng với các xu hướng"],
  },
  B: {
    type: "B",
    title: "Tín đồ trà sữa chính hiệu",
    emoji: "🧋",
    description: "Bạn là fan cứng của trà sữa với đầy đủ trân châu và topping. Bạn yêu thích sự ngọt ngào, phong phú và không ngại thể hiện đam mê của mình.",
    traits: ["Đam mê", "Vui vẻ", "Trẻ trung", "Nhiệt tình"],
    strengths: ["Biết tận hưởng", "Năng lượng tích cực", "Dễ kết bạn"],
    weaknesses: ["Có thể quá đam mê", "Khó kiểm soát"],
    tips: ["Chú ý lượng đường nạp vào", "Cân bằng với đồ uống healthy"],
  },
  C: {
    type: "C",
    title: "Tín đồ trà cao cấp",
    emoji: "🍃",
    description: "Bạn là người cầu toàn, thích những thứ chất lượng và có phong cách riêng. Matcha hay trà xanh cao cấp phản ánh gu thẩm mỹ tinh tế của bạn.",
    traits: ["Cầu toàn", "Phong cách", "Chất lượng", "Độc lập"],
    strengths: ["Có tiêu chuẩn cao", "Biết chọn lọc", "Có cá tính"],
    weaknesses: ["Có thể khó chiều", "Chi tiêu nhiều cho sở thích"],
    tips: ["Linh hoạt hơn trong lựa chọn", "Thử các quán bình dân đôi khi"],
  },
  D: {
    type: "D",
    title: "Tín đồ trà trái cây tươi mát",
    emoji: "🍑",
    description: "Bạn là người năng động, thích sự tươi mát và coi trọng sức khỏe. Trà trái cây là sự kết hợp hoàn hảo giữa ngon miệng và tốt cho cơ thể.",
    traits: ["Năng động", "Lành mạnh", "Linh hoạt", "Thân thiện"],
    strengths: ["Cân bằng cuộc sống", "Quan tâm sức khỏe", "Dễ hòa đồng"],
    weaknesses: ["Đôi khi thiếu quyết đoán", "Hay thay đổi"],
    tips: ["Tìm một vị yêu thích cố định", "Tự tin với lựa chọn của mình"],
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
