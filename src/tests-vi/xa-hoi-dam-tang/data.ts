// Cách xử sự đám tang
// Khám phá cách bạn xử sự trong những dịp buồn

export const questions = [
  {
    id: 1,
    question: "Khi nghe tin ai đó qua đời, bạn phản ứng thế nào?",
    options: [
      { text: "Buồn và muốn đến chia buồn ngay", type: "A" },
      { text: "Gọi điện hỏi thăm trước", type: "B" },
      { text: "Nhắn tin chia buồn", type: "C" },
      { text: "Chờ đợi, xem tình hình rồi tính", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thường mang gì khi đến viếng?",
    options: [
      { text: "Vòng hoa, phong bì", type: "A" },
      { text: "Phong bì phúng viếng", type: "B" },
      { text: "Hương, nến, trái cây", type: "C" },
      { text: "Chỉ mang tấm lòng", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Trang phục bạn mặc khi đi viếng?",
    options: [
      { text: "Đồ đen hoặc tối màu, trang nghiêm", type: "A" },
      { text: "Đồ kín đáo, không màu sặc sỡ", type: "B" },
      { text: "Đồ lịch sự, không quá cầu kỳ", type: "C" },
      { text: "Đồ bình thường, sạch sẽ là được", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi gặp tang quyến, bạn nói gì?",
    options: [
      { text: "Chia buồn cùng gia đình, thắp nén hương lòng", type: "A" },
      { text: "Nói ít, chỉ siết tay chia sẻ", type: "B" },
      { text: "Chia buồn ngắn gọn, lịch sự", type: "C" },
      { text: "Không biết nói gì, im lặng", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn ở lại bao lâu khi đến viếng?",
    options: [
      { text: "Ở lại lâu, hỗ trợ gia đình", type: "A" },
      { text: "Thắp hương, ngồi một lát rồi về", type: "B" },
      { text: "Đến, chia buồn và về", type: "C" },
      { text: "Tùy vào mức độ thân thiết", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn có hay khóc khi đi viếng không?",
    options: [
      { text: "Có, dễ xúc động", type: "A" },
      { text: "Đôi khi, nếu thân thiết", type: "B" },
      { text: "Cố kiềm chế, giữ bình tĩnh", type: "C" },
      { text: "Không, giữ mặt phẳng lặng", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn có tham gia lễ tang/lễ thiêu không?",
    options: [
      { text: "Có, đi đến cùng nếu có thể", type: "A" },
      { text: "Có, nếu là người thân thiết", type: "B" },
      { text: "Chỉ viếng, không đi tiễn", type: "C" },
      { text: "Tùy vào thời gian và hoàn cảnh", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Sau đám tang, bạn có thăm hỏi gia đình không?",
    options: [
      { text: "Có, thường xuyên hỏi thăm", type: "A" },
      { text: "Có, đôi khi qua thăm", type: "B" },
      { text: "Nhắn tin hỏi thăm", type: "C" },
      { text: "Không, để họ yên", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn nghĩ gì về các nghi lễ truyền thống?",
    options: [
      { text: "Rất quan trọng, cần tôn trọng", type: "A" },
      { text: "Cần thiết nhưng có thể linh hoạt", type: "B" },
      { text: "Không cần quá cầu kỳ", type: "C" },
      { text: "Tùy quan điểm gia đình", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Nếu không thể đến viếng, bạn sẽ?",
    options: [
      { text: "Gửi vòng hoa và phong bì qua người quen", type: "A" },
      { text: "Gọi điện chia buồn trực tiếp", type: "B" },
      { text: "Nhắn tin chia buồn", type: "C" },
      { text: "Đến thăm sau khi thuận tiện", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn có kiêng kỵ gì sau khi đi viếng không?",
    options: [
      { text: "Có, theo đúng phong tục", type: "A" },
      { text: "Một số điều cơ bản", type: "B" },
      { text: "Không mấy để ý", type: "C" },
      { text: "Không kiêng kỵ gì", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Điều quan trọng nhất khi đi viếng với bạn?",
    options: [
      { text: "Thể hiện sự kính trọng với người đã khuất", type: "A" },
      { text: "An ủi, chia sẻ với gia đình", type: "B" },
      { text: "Có mặt là được, tấm lòng quan trọng", type: "C" },
      { text: "Làm đúng phép tắc xã hội", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người trọng tình nghĩa",
    emoji: "🕯️",
    description: "Bạn là người rất trọng tình trọng nghĩa. Trong những dịp buồn, bạn luôn có mặt, chia sẻ và hỗ trợ hết mình. Sự chân thành của bạn là nguồn an ủi lớn.",
    traits: ["Tình cảm", "Trọng nghĩa", "Chu đáo", "Chân thành"],
    strengths: ["Được mọi người tin tưởng", "Chia sẻ chân thành", "Có mặt khi cần"],
    weaknesses: ["Dễ xúc động", "Có thể quá gánh nặng cảm xúc"],
    tips: ["Chăm sóc sức khỏe tinh thần", "Cho phép mình buồn nhưng đừng quá"],
  },
  B: {
    type: "B",
    title: "Người chia sẻ cân bằng",
    emoji: "🤝",
    description: "Bạn biết cách chia sẻ và thể hiện sự quan tâm một cách cân bằng. Không quá sâu đậm cũng không quá xa cách, bạn mang đến sự an ủi vừa đủ.",
    traits: ["Cân bằng", "Chừng mực", "Lịch sự", "Quan tâm"],
    strengths: ["Thể hiện đúng mức", "Không gây áp lực", "Chia sẻ chân thành"],
    weaknesses: ["Đôi khi thiếu sâu sắc", "Có thể bị hiểu nhầm là lạnh lùng"],
    tips: ["Thể hiện nhiều hơn với người thân", "Cho phép mình cảm xúc hơn"],
  },
  C: {
    type: "C",
    title: "Người giữ khoảng cách",
    emoji: "🙏",
    description: "Bạn tôn trọng những dịp buồn nhưng giữ khoảng cách nhất định. Bạn tin rằng sự hiện diện và tấm lòng quan trọng hơn hình thức.",
    traits: ["Tôn trọng", "Kín đáo", "Không can thiệp", "Lịch sự"],
    strengths: ["Không gây phiền", "Tôn trọng không gian riêng tư"],
    weaknesses: ["Có thể bị xem là lạnh nhạt", "Thiếu kết nối sâu"],
    tips: ["Thể hiện quan tâm nhiều hơn", "Đôi khi cần có mặt"],
  },
  D: {
    type: "D",
    title: "Người thực dụng",
    emoji: "📋",
    description: "Bạn xử sự trong đám tang một cách thực dụng, làm đúng phép tắc xã hội cần thiết. Bạn tin vào hành động hơn là cảm xúc.",
    traits: ["Thực dụng", "Tuân thủ", "Không cảm xúc hóa", "Đúng phép"],
    strengths: ["Không để cảm xúc chi phối", "Làm đúng bổn phận"],
    weaknesses: ["Có thể thiếu ấm áp", "Khó kết nối cảm xúc"],
    tips: ["Học cách thể hiện cảm xúc", "Quan tâm đến người khác hơn"],
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
