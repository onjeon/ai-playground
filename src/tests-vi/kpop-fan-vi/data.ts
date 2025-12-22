// Kiểu fan K-Pop
// Khám phá xem bạn là kiểu fan K-Pop như thế nào

export const questions = [
  {
    id: 1,
    question: "Khi có comeback mới, bạn làm gì đầu tiên?",
    options: [
      { text: "Stream MV liên tục để tăng view", type: "A" },
      { text: "Ngồi thưởng thức và phân tích MV", type: "B" },
      { text: "Chia sẻ với bạn bè, kéo họ stan cùng", type: "C" },
      { text: "Mua album và merchandise ngay lập tức", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn có bao nhiêu album K-Pop?",
    options: [
      { text: "Rất nhiều, mua đủ version", type: "A" },
      { text: "Một vài album yêu thích", type: "B" },
      { text: "Chủ yếu nghe nhạc online", type: "C" },
      { text: "Sưu tập đầy đủ từ debut đến nay", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi idol bị antis tấn công, bạn sẽ?",
    options: [
      { text: "Chiến đấu bảo vệ idol đến cùng", type: "A" },
      { text: "Report và block, không tham gia cãi nhau", type: "B" },
      { text: "Lan tỏa năng lượng tích cực để át đi", type: "C" },
      { text: "Âm thầm ủng hộ và gửi lời động viên", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn theo dõi idol của mình qua đâu?",
    options: [
      { text: "Mọi nền tảng có thể: Twitter, Weverse, V Live...", type: "A" },
      { text: "Chỉ một vài nền tảng chính", type: "B" },
      { text: "Qua fanpage và update từ người khác", type: "C" },
      { text: "Theo dõi kỹ từng hoạt động, lịch trình", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi có concert, bạn sẽ?",
    options: [
      { text: "Mua vé ngay từ đầu, chờ cổng mở sớm", type: "A" },
      { text: "Cố gắng mua vé nếu phù hợp", type: "B" },
      { text: "Xem livestream hoặc fancam", type: "C" },
      { text: "Bay sang nước ngoài xem nếu cần", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn có học tiếng Hàn vì K-Pop không?",
    options: [
      { text: "Có, đang học chăm chỉ", type: "A" },
      { text: "Biết một số từ cơ bản", type: "B" },
      { text: "Chủ yếu đọc sub", type: "C" },
      { text: "Khá thành thạo rồi", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn có tham gia fandom community không?",
    options: [
      { text: "Rất tích cực, là thành viên nòng cốt", type: "A" },
      { text: "Thỉnh thoảng, khi có thời gian", type: "B" },
      { text: "Chỉ theo dõi, ít tương tác", type: "C" },
      { text: "Có, và đóng góp nhiều project", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Khi ai đó chê idol của bạn, bạn sẽ?",
    options: [
      { text: "Phản bác ngay lập tức", type: "A" },
      { text: "Giải thích nhẹ nhàng rồi bỏ qua", type: "B" },
      { text: "Không quan tâm, ai thích thì thích", type: "C" },
      { text: "Chứng minh bằng thành tích của idol", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn có bao nhiêu bias?",
    options: [
      { text: "Chỉ một, trung thành tuyệt đối", type: "A" },
      { text: "Một bias chính và vài bias wrecker", type: "B" },
      { text: "Thích cả nhóm, khó chọn", type: "C" },
      { text: "Có bias ở nhiều nhóm khác nhau", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn đã stan nhóm của mình bao lâu?",
    options: [
      { text: "Từ ngày debut, fan đầu tiên", type: "A" },
      { text: "Một vài năm rồi", type: "B" },
      { text: "Mới tham gia gần đây", type: "C" },
      { text: "Lâu lắm rồi, không nhớ nổi", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn chi bao nhiêu tiền cho K-Pop mỗi tháng?",
    options: [
      { text: "Khá nhiều, không tiếc tiền cho idol", type: "A" },
      { text: "Vừa phải, trong khả năng", type: "B" },
      { text: "Ít hoặc không, chủ yếu nghe free", type: "C" },
      { text: "Rất nhiều, sưu tập đầy đủ", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Điều gì khiến bạn yêu K-Pop?",
    options: [
      { text: "Âm nhạc chất lượng và sân khấu đỉnh cao", type: "A" },
      { text: "Tính cách và câu chuyện của idol", type: "B" },
      { text: "Cộng đồng fan vui vẻ", type: "C" },
      { text: "Nghệ thuật và sự hoàn hảo", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Hardcore Fan - Fan cứng",
    emoji: "🔥",
    description: "Bạn là fan cứng thực thụ! Bạn sẵn sàng chiến đấu vì idol, stream không ngừng nghỉ và không bao giờ bỏ lỡ bất kỳ hoạt động nào. Tình yêu của bạn dành cho idol là vô điều kiện!",
    traits: ["Trung thành", "Nhiệt tình", "Chăm chỉ stream", "Bảo vệ idol"],
    strengths: ["Không bao giờ bỏ cuộc", "Đóng góp lớn cho fandom", "Luôn cập nhật"],
    weaknesses: ["Đôi khi quá khích", "Dễ mệt mỏi vì stan"],
    tips: ["Nhớ chăm sóc sức khỏe bản thân", "Fan cũng cần nghỉ ngơi"],
  },
  B: {
    type: "B",
    title: "Casual Fan - Fan nhẹ nhàng",
    emoji: "😊",
    description: "Bạn yêu K-Pop theo cách riêng của mình. Bạn thưởng thức âm nhạc, yêu quý idol nhưng vẫn cân bằng với cuộc sống. Bạn là fan lành mạnh và có tinh thần tích cực!",
    traits: ["Cân bằng", "Tích cực", "Lành mạnh", "Tận hưởng"],
    strengths: ["Không áp lực khi stan", "Tận hưởng niềm vui", "Lan tỏa tích cực"],
    weaknesses: ["Đôi khi bị fan cứng chê là fan ảo", "Ít đóng góp stream"],
    tips: ["Cứ làm fan theo cách của bạn", "Không có fan nào là fan ảo"],
  },
  C: {
    type: "C",
    title: "Social Fan - Fan xã giao",
    emoji: "🎉",
    description: "Bạn thích K-Pop vì cộng đồng vui vẻ! Với bạn, K-Pop là cách để kết bạn, chia sẻ niềm vui và tham gia các hoạt động xã hội. Bạn là người mang năng lượng cho fandom!",
    traits: ["Vui vẻ", "Xã giao", "Kết nối", "Năng động"],
    strengths: ["Kéo được nhiều fan mới", "Tạo không khí vui vẻ", "Kết nối mọi người"],
    weaknesses: ["Có thể không biết sâu về idol", "Dễ chuyển bias"],
    tips: ["Tìm hiểu thêm về idol", "Nhưng làm fan vui vẻ cũng tốt!"],
  },
  D: {
    type: "D",
    title: "Collector Fan - Fan sưu tập",
    emoji: "📀",
    description: "Bạn là fan sưu tập chuyên nghiệp! Phòng bạn đầy album, photocard, merchandise và mọi thứ liên quan đến idol. Bạn đầu tư nghiêm túc và trân trọng từng món đồ.",
    traits: ["Sưu tập", "Đầu tư", "Trân trọng", "Có hệ thống"],
    strengths: ["Collection đáng ngưỡng mộ", "Hỗ trợ idol bằng tiền thật", "Có kiến thức sâu"],
    weaknesses: ["Tốn nhiều tiền", "Đôi khi quá ám ảnh sưu tập"],
    tips: ["Đặt ngân sách hợp lý", "Sưu tập vui vẻ không áp lực"],
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
