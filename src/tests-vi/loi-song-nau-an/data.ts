// Phong Cách Nấu Ăn
// Khám phá bạn là đầu bếp kiểu gì trong nhà bếp Việt Nam

export const questions = [
  {
    id: 1,
    question: "Bạn nấu ăn thường xuyên như thế nào?",
    options: [
      { text: "Mỗi ngày, tự nấu là chính", type: "A" },
      { text: "Vài lần một tuần", type: "B" },
      { text: "Chỉ cuối tuần hoặc dịp đặc biệt", type: "C" },
      { text: "Hiếm khi, thường đặt đồ ăn", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Khi nấu ăn, bạn thường?",
    options: [
      { text: "Theo công thức chính xác từng gram", type: "A" },
      { text: "Nêm nếm theo cảm giác, 'ước lượng'", type: "B" },
      { text: "Xem video tutorial rồi làm theo", type: "C" },
      { text: "Sáng tạo, làm theo ý thích", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Món ăn Việt nào bạn tự tin nấu nhất?",
    options: [
      { text: "Cơm chiên, mì xào - đơn giản mà ngon", type: "A" },
      { text: "Canh, súp - phở, bún bò, canh chua", type: "B" },
      { text: "Món kho - thịt kho, cá kho", type: "C" },
      { text: "Món cuốn - gỏi cuốn, chả giò", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn đi chợ/siêu thị như thế nào?",
    options: [
      { text: "Có list sẵn, mua đúng thứ cần", type: "A" },
      { text: "Đi lòng vòng, thấy gì ngon mua đó", type: "B" },
      { text: "Mua theo tuần, trữ tủ lạnh", type: "C" },
      { text: "Hiếm khi đi chợ, đặt online hoặc ra quán", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi nấu ăn thất bại, bạn?",
    options: [
      { text: "Cố cứu chữa, thêm gia vị che vị", type: "A" },
      { text: "Ăn hết, không bỏ phí đồ ăn", type: "B" },
      { text: "Bỏ đi, gọi đồ ăn thay thế", type: "C" },
      { text: "Buồn, tự hỏi tại sao mình nấu dở", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bếp nhà bạn có những gì?",
    options: [
      { text: "Đủ dụng cụ từ nồi niêu đến máy xay", type: "A" },
      { text: "Cơ bản: nồi, chảo, dao thớt", type: "B" },
      { text: "Có nồi chiên không dầu/lò nướng", type: "C" },
      { text: "Chỉ có bếp và nồi cơm điện", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Khi có khách đến nhà, bạn?",
    options: [
      { text: "Nấu một bàn tiệc thịnh soạn", type: "A" },
      { text: "Nấu vài món đơn giản, ngon miệng", type: "B" },
      { text: "Gọi đồ ăn hoặc đặt tiệc", type: "C" },
      { text: "Rủ đi ăn ngoài cho tiện", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn học nấu ăn từ đâu?",
    options: [
      { text: "Mẹ/bà dạy từ nhỏ", type: "A" },
      { text: "Xem YouTube, TikTok, Cookpad", type: "B" },
      { text: "Tự mày mò, learning by doing", type: "C" },
      { text: "Chưa học, chưa biết nấu", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn nghĩ gì về nước mắm?",
    options: [
      { text: "Linh hồn của ẩm thực Việt, không thể thiếu", type: "A" },
      { text: "Dùng vừa phải, pha chế đúng công thức", type: "B" },
      { text: "Thỉnh thoảng dùng, thường dùng nước tương", type: "C" },
      { text: "Không thích mùi, hiếm khi dùng", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Nấu ăn đối với bạn là gì?",
    options: [
      { text: "Niềm vui, thư giãn sau ngày dài", type: "A" },
      { text: "Việc cần làm để có bữa ăn ngon", type: "B" },
      { text: "Kỹ năng sống cần học", type: "C" },
      { text: "Việc phiền phức, tốn thời gian", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Đầu Bếp Gia Đình",
    emoji: "👨‍🍳",
    percentage: 95,
    description: "Bạn là masterchef trong nhà! Nấu ăn với bạn không chỉ là việc nhà mà còn là niềm đam mê. Từ phở bò đến chả giò, món gì bạn cũng làm được. Gia đình bạn thật may mắn!",
    characteristics: ["Nấu ăn giỏi", "Yêu thích nấu nướng", "Biết nhiều công thức", "Bếp luôn đầy đủ"],
    advice: "Tuyệt vời! Hãy thử chia sẻ công thức hoặc dạy người khác nấu ăn. Có thể làm kênh YouTube nấu ăn cũng hay đấy!",
  },
  B: {
    type: "B",
    title: "Người Nấu Thực Dụng",
    emoji: "🍳",
    percentage: 70,
    description: "Bạn nấu ăn để có bữa ăn ngon, không cầu kỳ nhưng đủ chất. Cơm chiên, canh rau, thịt kho - những món đơn giản nhưng đầy đủ dinh dưỡng. Thực tế và hiệu quả!",
    characteristics: ["Nấu món đơn giản", "Thực dụng", "Tiết kiệm thời gian", "Đủ dinh dưỡng"],
    advice: "Thử mở rộng món ăn thêm nhé! Học thêm vài công thức mới sẽ làm bữa ăn phong phú hơn.",
  },
  C: {
    type: "C",
    title: "Đầu Bếp Cuối Tuần",
    emoji: "🥘",
    percentage: 50,
    description: "Bạn nấu ăn khi có thời gian và hứng thú. Cuối tuần hay dịp đặc biệt, bạn sẵn sàng vào bếp làm những món đặc biệt. Còn ngày thường? Đặt GrabFood cho nhanh!",
    characteristics: ["Nấu khi có hứng", "Thích thử món mới", "Dùng công nghệ hỗ trợ", "Cân bằng nấu-đặt"],
    advice: "Thử nấu ăn thường xuyên hơn để nâng cao kỹ năng. Dần dần bạn sẽ thấy nấu ăn thật sự thú vị!",
  },
  D: {
    type: "D",
    title: "Chưa Kết Thân Với Bếp",
    emoji: "📱",
    percentage: 25,
    description: "Bếp nhà bạn có lẽ còn rất mới vì ít được sử dụng! Bạn thích đặt đồ ăn hoặc ăn ngoài hơn là tự nấu. Không sao cả, nhưng học nấu vài món cơ bản cũng hữu ích lắm đấy!",
    characteristics: ["Ít nấu ăn", "Thích đồ ăn sẵn", "Bận rộn", "Chưa học nấu"],
    advice: "Hãy bắt đầu với những món đơn giản như trứng chiên, cơm chiên. Nấu ăn không khó như bạn nghĩ và còn tiết kiệm tiền nữa!",
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
