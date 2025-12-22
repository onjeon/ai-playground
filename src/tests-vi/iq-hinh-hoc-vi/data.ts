// Trắc nghiệm Hình học
// Kiểm tra khả năng tư duy hình học và không gian của bạn

export const questions = [
  {
    id: 1,
    question: "Một hình vuông có cạnh 5cm. Đường chéo của hình vuông đó dài bao nhiêu?",
    options: [
      { text: "5√2 cm", type: "A" },
      { text: "10 cm", type: "B" },
      { text: "25 cm", type: "D" },
      { text: "7 cm", type: "C" },
    ],
  },
  {
    id: 2,
    question: "Tổng các góc trong của một hình lục giác đều là bao nhiêu độ?",
    options: [
      { text: "720°", type: "A" },
      { text: "540°", type: "B" },
      { text: "360°", type: "C" },
      { text: "900°", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Một hình tròn có bán kính 7cm. Diện tích của hình tròn xấp xỉ bao nhiêu?",
    options: [
      { text: "154 cm²", type: "A" },
      { text: "44 cm²", type: "B" },
      { text: "98 cm²", type: "C" },
      { text: "196 cm²", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Nếu gấp một tờ giấy hình vuông theo đường chéo, bạn sẽ được hình gì?",
    options: [
      { text: "Tam giác vuông cân", type: "A" },
      { text: "Tam giác đều", type: "B" },
      { text: "Hình chữ nhật", type: "C" },
      { text: "Hình thoi", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Một khối lập phương có cạnh 3cm. Thể tích của nó là bao nhiêu?",
    options: [
      { text: "27 cm³", type: "A" },
      { text: "9 cm³", type: "B" },
      { text: "18 cm³", type: "C" },
      { text: "54 cm³", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Hai đường thẳng vuông góc với nhau tạo thành góc bao nhiêu độ?",
    options: [
      { text: "90°", type: "A" },
      { text: "180°", type: "B" },
      { text: "45°", type: "C" },
      { text: "60°", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Một tam giác có các cạnh 3cm, 4cm và 5cm. Đây là loại tam giác gì?",
    options: [
      { text: "Tam giác vuông", type: "A" },
      { text: "Tam giác đều", type: "D" },
      { text: "Tam giác cân", type: "B" },
      { text: "Tam giác tù", type: "C" },
    ],
  },
  {
    id: 8,
    question: "Hình nào sau đây có số đường đối xứng nhiều nhất?",
    options: [
      { text: "Hình tròn", type: "A" },
      { text: "Hình vuông", type: "B" },
      { text: "Hình chữ nhật", type: "C" },
      { text: "Tam giác đều", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Một hình thang có hai đáy là 8cm và 12cm, chiều cao 5cm. Diện tích là bao nhiêu?",
    options: [
      { text: "50 cm²", type: "A" },
      { text: "40 cm²", type: "B" },
      { text: "60 cm²", type: "C" },
      { text: "100 cm²", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Khi xoay một hình chữ nhật quanh một cạnh, bạn sẽ được hình gì?",
    options: [
      { text: "Hình trụ", type: "A" },
      { text: "Hình cầu", type: "D" },
      { text: "Hình nón", type: "B" },
      { text: "Hình hộp", type: "C" },
    ],
  },
  {
    id: 11,
    question: "Góc nội tiếp chắn nửa đường tròn là góc bao nhiêu độ?",
    options: [
      { text: "90°", type: "A" },
      { text: "180°", type: "D" },
      { text: "45°", type: "B" },
      { text: "60°", type: "C" },
    ],
  },
  {
    id: 12,
    question: "Một hình bình hành có hai cạnh liền kề là 6cm và 8cm, góc giữa chúng là 90°. Đây là hình gì?",
    options: [
      { text: "Hình chữ nhật", type: "A" },
      { text: "Hình thoi", type: "B" },
      { text: "Hình vuông", type: "C" },
      { text: "Vẫn là hình bình hành", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Bậc Thầy Hình Học",
    emoji: "📐",
    description: "Bạn có khả năng tư duy hình học xuất sắc! Bạn dễ dàng hình dung các hình khối trong không gian và áp dụng công thức chính xác.",
    traits: ["Tư duy không gian mạnh", "Nhớ công thức tốt", "Hình dung 3D giỏi", "Phân tích hình học sắc bén"],
    strengths: ["Thiết kế và kiến trúc", "Giải bài toán hình học phức tạp", "Đọc bản vẽ kỹ thuật"],
    weaknesses: ["Đôi khi quá tập trung vào lý thuyết", "Có thể bỏ qua ứng dụng thực tế"],
    tips: ["Học CAD hoặc phần mềm thiết kế", "Thử sức với hình học không gian nâng cao"],
  },
  B: {
    type: "B",
    title: "Người Am Hiểu Hình Học",
    emoji: "📏",
    description: "Bạn có nền tảng hình học vững chắc, xử lý tốt các bài toán cơ bản và có thể giải quyết một số bài toán phức tạp.",
    traits: ["Cẩn thận", "Có phương pháp", "Tư duy logic", "Kiên nhẫn"],
    strengths: ["Tính diện tích, thể tích", "Hiểu quan hệ hình học", "Ứng dụng thực tế"],
    weaknesses: ["Cần thêm luyện tập với bài nâng cao", "Đôi khi quên công thức"],
    tips: ["Ôn lại các công thức quan trọng", "Vẽ hình để hiểu bài toán tốt hơn"],
  },
  C: {
    type: "C",
    title: "Người Đang Học Hỏi",
    emoji: "📖",
    description: "Bạn có kiến thức hình học cơ bản và đang trong quá trình hoàn thiện. Tiếp tục cố gắng nhé!",
    traits: ["Ham học hỏi", "Cần củng cố kiến thức", "Có tiềm năng", "Chịu khó"],
    strengths: ["Nhận biết hình cơ bản", "Hiểu khái niệm đơn giản", "Sẵn sàng học thêm"],
    weaknesses: ["Còn nhiều lỗ hổng", "Khó hình dung 3D"],
    tips: ["Học lại từ kiến thức nền tảng", "Dùng hình ảnh và video hỗ trợ"],
  },
  D: {
    type: "D",
    title: "Người Cần Bổ Sung",
    emoji: "🌱",
    description: "Hình học chưa phải thế mạnh của bạn, nhưng với phương pháp học đúng, bạn hoàn toàn có thể tiến bộ nhanh chóng.",
    traits: ["Tư duy theo hướng khác", "Cần hướng dẫn cụ thể", "Tiềm năng chưa khai phá"],
    strengths: ["Có thể mạnh ở môn khác", "Không sợ thử thách"],
    weaknesses: ["Thiếu nền tảng hình học", "Khó nhớ công thức"],
    tips: ["Bắt đầu từ hình 2D đơn giản", "Dùng đồ chơi hoặc mô hình để học", "Tìm gia sư hỗ trợ"],
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
