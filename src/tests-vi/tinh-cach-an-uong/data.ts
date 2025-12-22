// Phong cách ăn uống
// Khám phá phong cách ăn uống của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn ăn sáng như thế nào?",
    options: [
      { text: "Ăn đầy đủ, quan trọng nhất trong ngày", type: "A" },
      { text: "Ăn nhanh, tiện gì ăn đó", type: "B" },
      { text: "Bỏ bữa sáng, uống cà phê thay", type: "C" },
      { text: "Tùy ngày, có khi ăn có khi không", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn chọn món ăn dựa trên điều gì?",
    options: [
      { text: "Dinh dưỡng, tốt cho sức khỏe", type: "A" },
      { text: "Ngon, thích gì ăn đó", type: "B" },
      { text: "Tiện lợi, nhanh gọn", type: "C" },
      { text: "Tùy mood, có khi healthy có khi junk food", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn ăn ở nhà hay ở ngoài nhiều hơn?",
    options: [
      { text: "Tự nấu ở nhà, kiểm soát được đồ ăn", type: "A" },
      { text: "Ăn ngoài nhiều, không có thời gian nấu", type: "B" },
      { text: "Order về nhà, tiện nhất", type: "C" },
      { text: "Cân bằng cả hai", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi stress, bạn ăn như thế nào?",
    options: [
      { text: "Ăn healthy hơn để chăm sóc bản thân", type: "A" },
      { text: "Ăn nhiều hơn, comfort food", type: "B" },
      { text: "Không muốn ăn, mất cảm giác đói", type: "C" },
      { text: "Tùy, có khi ăn nhiều có khi không ăn", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn thử món ăn mới như thế nào?",
    options: [
      { text: "Cân nhắc kỹ, check ingredients trước", type: "A" },
      { text: "Thích thử, càng lạ càng muốn thử", type: "B" },
      { text: "Ít thử, thích món quen thuộc", type: "C" },
      { text: "Tùy mood, đôi khi adventurous", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn ăn bao nhiêu bữa một ngày?",
    options: [
      { text: "3 bữa chính đầy đủ", type: "A" },
      { text: "Nhiều bữa nhỏ trong ngày", type: "B" },
      { text: "1-2 bữa, intermittent fasting", type: "C" },
      { text: "Không cố định, đói thì ăn", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn xử lý đồ ăn thừa như thế nào?",
    options: [
      { text: "Nấu vừa đủ, không để thừa", type: "A" },
      { text: "Ăn hết, không lãng phí", type: "B" },
      { text: "Để tủ lạnh, ăn sau", type: "C" },
      { text: "Đôi khi bỏ, khó ăn lại đồ nguội", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn uống nước như thế nào?",
    options: [
      { text: "Đủ 2 lít mỗi ngày, theo dõi cẩn thận", type: "A" },
      { text: "Uống khi khát", type: "B" },
      { text: "Hay quên uống nước", type: "C" },
      { text: "Thay bằng trà, cà phê, nước ngọt", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn ăn tối như thế nào?",
    options: [
      { text: "Ăn nhẹ, không ăn quá muộn", type: "A" },
      { text: "Bữa ăn chính trong ngày", type: "B" },
      { text: "Tùy, có khi bỏ nếu no", type: "C" },
      { text: "Ăn tối với gia đình, bạn bè", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn nghĩ gì về diet?",
    options: [
      { text: "Đang theo một chế độ ăn cụ thể", type: "A" },
      { text: "Không diet, ăn thoải mái", type: "B" },
      { text: "Đã thử nhiều lần nhưng không duy trì được", type: "C" },
      { text: "Cân bằng, không quá strict", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn ăn vặt như thế nào?",
    options: [
      { text: "Ít ăn vặt, chọn healthy snack", type: "A" },
      { text: "Ăn vặt nhiều, thích snack", type: "B" },
      { text: "Không ăn vặt", type: "C" },
      { text: "Tùy, có khi thèm thì ăn", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Ăn uống đối với bạn là gì?",
    options: [
      { text: "Nhiên liệu cho cơ thể, cần chất lượng", type: "A" },
      { text: "Niềm vui, thưởng thức cuộc sống", type: "B" },
      { text: "Nhu cầu, không quá quan tâm", type: "C" },
      { text: "Cơ hội gắn kết với người khác", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người ăn Healthy",
    emoji: "🥗",
    description: "Bạn ăn uống healthy và có ý thức về sức khỏe. Bạn quan tâm đến dinh dưỡng, tự nấu ăn và luôn chọn những món tốt cho cơ thể.",
    traits: ["Healthy", "Có ý thức", "Kỷ luật", "Chăm sóc bản thân"],
    strengths: ["Sức khỏe tốt", "Năng lượng ổn định", "Tự kiểm soát tốt"],
    weaknesses: ["Có thể quá strict", "Đôi khi bỏ lỡ niềm vui ẩm thực"],
    tips: ["Cho phép mình cheat day", "Đừng ám ảnh quá mức về ăn uống"],
  },
  B: {
    type: "B",
    title: "Người ăn Thưởng thức",
    emoji: "🍔",
    description: "Bạn xem ăn uống là niềm vui và thưởng thức trọn vẹn. Bạn thích ăn ngon, không quá lo lắng về calories và tận hưởng mọi bữa ăn.",
    traits: ["Thưởng thức", "Thoải mái", "Vui vẻ", "Yêu ẩm thực"],
    strengths: ["Tận hưởng cuộc sống", "Không stress về ăn uống", "Mở lòng với mọi món"],
    weaknesses: ["Có thể ăn quá nhiều", "Ít kiểm soát"],
    tips: ["Chú ý đến sức khỏe hơn", "Ăn có ý thức, chậm hơn"],
  },
  C: {
    type: "C",
    title: "Người ăn Tiện lợi",
    emoji: "🍕",
    description: "Bạn ăn uống theo sự tiện lợi, không muốn mất nhiều thời gian cho việc ăn. Bạn thích fast food, order online và những gì nhanh gọn.",
    traits: ["Tiện lợi", "Nhanh gọn", "Thực tế", "Bận rộn"],
    strengths: ["Tiết kiệm thời gian", "Linh hoạt", "Không ám ảnh"],
    weaknesses: ["Có thể thiếu dinh dưỡng", "Ăn không đều"],
    tips: ["Chú ý đến dinh dưỡng hơn", "Dành thời gian cho bữa ăn đàng hoàng"],
  },
  D: {
    type: "D",
    title: "Người ăn Linh hoạt",
    emoji: "🍽️",
    description: "Bạn ăn uống linh hoạt và cân bằng. Có khi healthy, có khi junk food, tùy thuộc vào mood và hoàn cảnh.",
    traits: ["Linh hoạt", "Cân bằng", "Thích ứng", "Xã hội"],
    strengths: ["Cân bằng", "Không cực đoan", "Hợp mọi hoàn cảnh"],
    weaknesses: ["Đôi khi thiếu nhất quán", "Khó theo chế độ ăn cụ thể"],
    tips: ["Xây dựng thói quen ăn uống ổn định hơn", "Lắng nghe cơ thể nhiều hơn"],
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
