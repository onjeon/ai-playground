// Nước giải khát yêu thích
// Khám phá tính cách qua loại nước giải khát bạn yêu thích

export const questions = [
  {
    id: 1,
    question: "Vào ngày nắng nóng, bạn thích uống gì nhất?",
    options: [
      { text: "Trà đá, trà chanh mát lạnh", type: "A" },
      { text: "Nước ngọt có ga sủi bọt", type: "B" },
      { text: "Sinh tố, nước ép trái cây", type: "C" },
      { text: "Nước dừa tươi mát", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Khi đi quán cà phê, bạn thường gọi gì?",
    options: [
      { text: "Trà đào, trà vải", type: "A" },
      { text: "Coca, Pepsi hoặc nước ngọt", type: "B" },
      { text: "Sinh tố bơ, sinh tố xoài", type: "C" },
      { text: "Nước ép cam, nước chanh muối", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn thích nước uống có vị như thế nào?",
    options: [
      { text: "Thanh mát, hơi chát nhẹ", type: "A" },
      { text: "Ngọt ngào, sảng khoái", type: "B" },
      { text: "Béo ngậy, đặc sánh", type: "C" },
      { text: "Chua nhẹ, tươi mát tự nhiên", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Đồ uống yêu thích của bạn khi ăn đồ ăn nhanh?",
    options: [
      { text: "Trà lạnh không đường", type: "A" },
      { text: "Coca-Cola hoặc Sprite", type: "B" },
      { text: "Milk shake, smoothie", type: "C" },
      { text: "Nước ép cam, nước chanh", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn quan tâm điều gì nhất khi chọn nước uống?",
    options: [
      { text: "Giải khát tốt, không quá ngọt", type: "A" },
      { text: "Vị ngon, thương hiệu quen", type: "B" },
      { text: "Bổ dưỡng, nhiều vitamin", type: "C" },
      { text: "Tự nhiên, ít đường", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi đi siêu thị, bạn hay mua loại nước gì?",
    options: [
      { text: "Trà xanh, trà ô long đóng chai", type: "A" },
      { text: "Thùng nước ngọt, lon nước có ga", type: "B" },
      { text: "Sữa chua uống, nước trái cây", type: "C" },
      { text: "Nước dừa đóng hộp, nước ép", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn thích uống đồ với mức đá như thế nào?",
    options: [
      { text: "Đá riêng, để không loãng nước", type: "A" },
      { text: "Nhiều đá, lạnh sảng khoái", type: "B" },
      { text: "Đá bình thường", type: "C" },
      { text: "Ít đá, giữ nguyên vị", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Nước uống đường phố Việt Nam bạn thích nhất?",
    options: [
      { text: "Trà đá vỉa hè, trà chanh", type: "A" },
      { text: "Nước mía, sâm lạnh", type: "B" },
      { text: "Sinh tố xe đẩy", type: "C" },
      { text: "Nước dừa tươi, rau má", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Buổi sáng bạn thường uống gì?",
    options: [
      { text: "Trà nóng hoặc trà đá", type: "A" },
      { text: "Nước ngọt cho tỉnh táo", type: "B" },
      { text: "Sinh tố hoặc sữa", type: "C" },
      { text: "Nước cam vắt, nước ép", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn có thói quen uống nước thế nào?",
    options: [
      { text: "Uống trà thường xuyên trong ngày", type: "A" },
      { text: "Thích uống nước có ga khi thèm", type: "B" },
      { text: "Uống sinh tố như bữa phụ", type: "C" },
      { text: "Uống nước trái cây tự nhiên", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Khi tập thể dục xong, bạn muốn uống gì?",
    options: [
      { text: "Trà xanh, giải nhiệt tốt", type: "A" },
      { text: "Nước tăng lực, nước ngọt", type: "B" },
      { text: "Smoothie protein, sinh tố", type: "C" },
      { text: "Nước dừa, nước chanh muối", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Nước giải khát lý tưởng với bạn là gì?",
    options: [
      { text: "Thanh mát, giải khát tức thì", type: "A" },
      { text: "Vị ngọt sảng khoái, cảm giác vui vẻ", type: "B" },
      { text: "Đặc sánh, no bụng, bổ dưỡng", type: "C" },
      { text: "Tự nhiên, tốt cho sức khỏe", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người yêu trà thanh mát",
    emoji: "🍵",
    description: "Bạn là người thanh lịch, tinh tế và yêu thích sự đơn giản. Giống như ly trà đá mát lạnh, bạn mang đến cảm giác dễ chịu và thư thái cho mọi người xung quanh.",
    traits: ["Thanh lịch", "Tinh tế", "Đơn giản", "Điềm tĩnh"],
    strengths: ["Biết thưởng thức cuộc sống", "Không cầu kỳ", "Dễ hòa đồng"],
    weaknesses: ["Đôi khi quá đơn giản", "Ít thử điều mới"],
    tips: ["Thử những vị trà mới lạ", "Khám phá các loại đồ uống khác"],
  },
  B: {
    type: "B",
    title: "Người yêu nước ngọt sôi động",
    emoji: "🥤",
    description: "Bạn là người năng động, vui vẻ và thích sự sảng khoái. Như bọt ga sủi bọt, bạn luôn mang năng lượng tích cực và niềm vui đến mọi nơi.",
    traits: ["Vui vẻ", "Năng động", "Trẻ trung", "Sôi nổi"],
    strengths: ["Luôn vui vẻ", "Năng lượng tích cực", "Thích ứng nhanh"],
    weaknesses: ["Có thể hời hợt", "Đôi khi quá phấn khích"],
    tips: ["Chú ý sức khỏe với đồ ngọt", "Cân bằng với nước lọc và trái cây"],
  },
  C: {
    type: "C",
    title: "Người yêu sinh tố bổ dưỡng",
    emoji: "🥭",
    description: "Bạn là người quan tâm đến sức khỏe và thích những thứ đầy đặn. Giống như sinh tố đặc sánh, bạn mang đến sự ấm áp và chăm sóc cho người xung quanh.",
    traits: ["Quan tâm sức khỏe", "Ấm áp", "Chu đáo", "Thực tế"],
    strengths: ["Biết chăm sóc bản thân", "Quan tâm người khác", "Sống lành mạnh"],
    weaknesses: ["Có thể quá cẩn thận", "Đôi khi khó chiều"],
    tips: ["Thỉnh thoảng thưởng thức đồ ngọt", "Không quá khắt khe với bản thân"],
  },
  D: {
    type: "D",
    title: "Người yêu tự nhiên thuần khiết",
    emoji: "🥥",
    description: "Bạn là người yêu thiên nhiên và trân trọng những điều nguyên bản. Như nước dừa tươi mát, bạn mang đến sự thuần khiết và tươi mới cho cuộc sống.",
    traits: ["Tự nhiên", "Thuần khiết", "Giản dị", "Lành mạnh"],
    strengths: ["Sống hài hòa với thiên nhiên", "Lối sống lành mạnh", "Chân thật"],
    weaknesses: ["Có thể cứng nhắc với lựa chọn", "Khó thỏa hiệp"],
    tips: ["Thỉnh thoảng thử những thứ mới", "Linh hoạt hơn trong lựa chọn"],
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
