// Chế độ ăn uống
// Bài test đánh giá thói quen và chế độ ăn uống của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn thường ăn sáng như thế nào?",
    options: [
      { text: "Ăn đầy đủ, bữa sáng dinh dưỡng", type: "A" },
      { text: "Ăn nhẹ, bánh mì hoặc trái cây", type: "B" },
      { text: "Uống cà phê hoặc trà là đủ", type: "C" },
      { text: "Thường bỏ bữa sáng", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn ăn rau xanh như thế nào?",
    options: [
      { text: "Mỗi bữa đều có rau", type: "A" },
      { text: "Cố gắng ăn mỗi ngày", type: "B" },
      { text: "Thỉnh thoảng khi có", type: "C" },
      { text: "Hiếm khi, không thích rau", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn uống nước như thế nào mỗi ngày?",
    options: [
      { text: "Đủ 2 lít nước mỗi ngày", type: "A" },
      { text: "Uống khá nhiều, khoảng 1.5 lít", type: "B" },
      { text: "Uống khi khát", type: "C" },
      { text: "Ít uống nước, hay uống nước ngọt", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn ăn fast food/đồ ăn nhanh bao nhiêu lần một tuần?",
    options: [
      { text: "Hiếm khi hoặc không ăn", type: "A" },
      { text: "1-2 lần một tuần", type: "B" },
      { text: "3-4 lần một tuần", type: "C" },
      { text: "Gần như mỗi ngày", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn ăn tối vào lúc mấy giờ?",
    options: [
      { text: "Trước 7 giờ tối", type: "A" },
      { text: "Khoảng 7-8 giờ tối", type: "B" },
      { text: "8-9 giờ tối", type: "C" },
      { text: "Sau 9 giờ tối hoặc ăn khuya", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn ăn trái cây như thế nào?",
    options: [
      { text: "Mỗi ngày đều ăn trái cây", type: "A" },
      { text: "Vài lần một tuần", type: "B" },
      { text: "Thỉnh thoảng khi có", type: "C" },
      { text: "Hiếm khi ăn trái cây", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn hay ăn đồ chiên rán không?",
    options: [
      { text: "Rất ít, ưu tiên đồ luộc/hấp", type: "A" },
      { text: "Đôi khi, không quá nhiều", type: "B" },
      { text: "Khá thường xuyên", type: "C" },
      { text: "Rất thích đồ chiên rán", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn có kiểm soát khẩu phần ăn không?",
    options: [
      { text: "Có, ăn vừa đủ, không ăn quá no", type: "A" },
      { text: "Cố gắng kiểm soát", type: "B" },
      { text: "Ăn theo cảm hứng", type: "C" },
      { text: "Thường ăn quá no", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn hay ăn vặt không?",
    options: [
      { text: "Ăn vặt lành mạnh (hạt, trái cây)", type: "A" },
      { text: "Đôi khi ăn snack", type: "B" },
      { text: "Khá hay ăn vặt", type: "C" },
      { text: "Ăn vặt liên tục", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn tự nấu ăn hay ăn ngoài?",
    options: [
      { text: "Chủ yếu tự nấu, kiểm soát nguyên liệu", type: "A" },
      { text: "Nấu ở nhà là chính, đôi khi ăn ngoài", type: "B" },
      { text: "Ăn ngoài nhiều hơn", type: "C" },
      { text: "Gần như ăn ngoài hoàn toàn", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn uống đồ có đường (trà sữa, nước ngọt) thế nào?",
    options: [
      { text: "Rất hiếm khi", type: "A" },
      { text: "1-2 lần một tuần", type: "B" },
      { text: "Vài lần một tuần", type: "C" },
      { text: "Gần như mỗi ngày", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bạn đánh giá chế độ ăn của mình như thế nào?",
    options: [
      { text: "Rất lành mạnh và cân bằng", type: "A" },
      { text: "Khá ổn, có cố gắng", type: "B" },
      { text: "Cần cải thiện nhiều", type: "C" },
      { text: "Không quan tâm lắm", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Chế Độ Ăn Lành Mạnh",
    emoji: "🥗",
    description: "Bạn có chế độ ăn uống rất lành mạnh và khoa học. Bạn quan tâm đến dinh dưỡng và biết cách chăm sóc sức khỏe qua bữa ăn hàng ngày.",
    traits: ["Lành mạnh", "Có ý thức", "Kỷ luật", "Quan tâm sức khỏe"],
    strengths: ["Sức khỏe tốt", "Năng lượng ổn định", "Kiểm soát cân nặng tốt"],
    weaknesses: ["Đôi khi quá nghiêm khắc", "Có thể bỏ lỡ niềm vui ăn uống"],
    tips: ["Tiếp tục duy trì", "Đôi khi thưởng cho bản thân cũng tốt"],
  },
  B: {
    type: "B",
    title: "Chế Độ Ăn Khá Tốt",
    emoji: "🍎",
    description: "Bạn có chế độ ăn khá tốt, cố gắng cân bằng giữa sức khỏe và sở thích. Một vài điều chỉnh nhỏ sẽ giúp bạn hoàn thiện hơn.",
    traits: ["Cân bằng", "Có ý thức", "Linh hoạt", "Thực tế"],
    strengths: ["Cân bằng tốt", "Không quá khắt khe", "Duy trì được"],
    weaknesses: ["Đôi khi không nhất quán", "Có thể cải thiện thêm"],
    tips: ["Tăng thêm rau xanh", "Giảm đồ ăn nhanh nếu có thể"],
  },
  C: {
    type: "C",
    title: "Chế Độ Ăn Cần Cải Thiện",
    emoji: "🍔",
    description: "Chế độ ăn của bạn cần được cải thiện. Bạn có xu hướng ăn theo sở thích hơn là theo nhu cầu dinh dưỡng của cơ thể.",
    traits: ["Cần cải thiện", "Ăn theo sở thích", "Thiếu ý thức", "Không đều đặn"],
    strengths: ["Linh hoạt", "Tận hưởng đồ ăn"],
    weaknesses: ["Thiếu dinh dưỡng", "Có thể ảnh hưởng sức khỏe", "Năng lượng không ổn định"],
    tips: ["Bắt đầu thêm rau vào bữa ăn", "Giảm đồ ăn nhanh và nước ngọt"],
  },
  D: {
    type: "D",
    title: "Chế Độ Ăn Kém Lành Mạnh",
    emoji: "🍟",
    description: "Chế độ ăn của bạn cần thay đổi nghiêm túc. Thói quen ăn uống hiện tại có thể ảnh hưởng xấu đến sức khỏe lâu dài.",
    traits: ["Kém lành mạnh", "Không quan tâm", "Ăn uống thất thường", "Cần thay đổi"],
    strengths: ["Không bị ép buộc", "Tự do"],
    weaknesses: ["Sức khỏe có thể bị ảnh hưởng", "Thiếu năng lượng", "Rủi ro bệnh tật"],
    tips: ["Bắt đầu từ những thay đổi nhỏ", "Tập ăn sáng đều đặn"],
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
