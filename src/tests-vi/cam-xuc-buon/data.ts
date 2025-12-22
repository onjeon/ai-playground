// Cách Thể Hiện Buồn
// Khám phá cách bạn đối mặt và thể hiện nỗi buồn

export const questions = [
  {
    id: 1,
    question: "Khi buồn, phản ứng đầu tiên của bạn là:",
    options: [
      { text: "Khóc ngay lập tức để giải tỏa", type: "A" },
      { text: "Tìm người thân để chia sẻ và được an ủi", type: "B" },
      { text: "Rút vào một góc để suy nghĩ một mình", type: "C" },
      { text: "Cố gắng nén lại và tiếp tục công việc", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn chia sẻ nỗi buồn với ai?",
    options: [
      { text: "Với nhiều người, cần được lắng nghe", type: "A" },
      { text: "Với người thân thiết nhất", type: "B" },
      { text: "Chỉ với một người đặc biệt tin tưởng", type: "C" },
      { text: "Không ai, giữ cho riêng mình", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi bạn thân gặp chuyện buồn, bạn:",
    options: [
      { text: "Khóc cùng họ và ôm họ", type: "A" },
      { text: "Lắng nghe và an ủi bằng lời nói", type: "B" },
      { text: "Ở bên cạnh im lặng để họ biết bạn quan tâm", type: "C" },
      { text: "Không biết phải làm gì, cảm thấy lúng túng", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn xử lý nỗi buồn như thế nào?",
    options: [
      { text: "Thể hiện ra hết, khóc cho đến khi hết buồn", type: "A" },
      { text: "Nói chuyện và tìm sự hỗ trợ từ người khác", type: "B" },
      { text: "Viết nhật ký hoặc tự đối thoại với bản thân", type: "C" },
      { text: "Làm việc nhiều hơn để quên đi", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Sau khi khóc, bạn thường cảm thấy:",
    options: [
      { text: "Nhẹ nhõm hơn nhiều", type: "A" },
      { text: "Tốt hơn nhưng vẫn còn buồn", type: "B" },
      { text: "Mệt mỏi và cần thời gian hồi phục", type: "C" },
      { text: "Hiếm khi khóc nên không biết", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn cho phép bản thân buồn bao lâu?",
    options: [
      { text: "Cho đến khi cảm xúc tự nhiên qua đi", type: "A" },
      { text: "Vài ngày rồi cố gắng tích cực lại", type: "B" },
      { text: "Cố gắng hạn chế, sớm vực dậy", type: "C" },
      { text: "Không cho phép, nén lại ngay từ đầu", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Khi buồn, bạn thường làm gì?",
    options: [
      { text: "Nghe nhạc buồn và khóc", type: "A" },
      { text: "Gặp gỡ bạn bè hoặc người thân", type: "B" },
      { text: "Ở một mình, đọc sách hoặc xem phim", type: "C" },
      { text: "Tiếp tục hoạt động bình thường", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Người khác có nhận ra khi bạn buồn không?",
    options: [
      { text: "Luôn luôn, vì tôi thể hiện rõ ràng", type: "A" },
      { text: "Những người thân thiết thì biết", type: "B" },
      { text: "Khó nhận ra, tôi giấu khá giỏi", type: "C" },
      { text: "Không ai biết, tôi không thể hiện", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn nghĩ gì về việc khóc trước mặt người khác?",
    options: [
      { text: "Bình thường, là cách thể hiện cảm xúc", type: "A" },
      { text: "Được với người thân nhưng ngại với người lạ", type: "B" },
      { text: "Cố gắng tránh, cảm thấy xấu hổ", type: "C" },
      { text: "Tuyệt đối không, đó là yếu đuối", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Khi xem phim buồn, bạn:",
    options: [
      { text: "Khóc không kiểm soát được", type: "A" },
      { text: "Rưng rưng và có thể khóc", type: "B" },
      { text: "Cảm động nhưng ít khi khóc", type: "C" },
      { text: "Không có cảm xúc mạnh", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn cần gì nhất khi buồn?",
    options: [
      { text: "Ai đó lắng nghe và đồng cảm", type: "A" },
      { text: "Sự quan tâm nhẹ nhàng từ người thân", type: "B" },
      { text: "Thời gian và không gian riêng", type: "C" },
      { text: "Không cần gì, tự xử lý được", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Quan điểm của bạn về nỗi buồn?",
    options: [
      { text: "Là cảm xúc tự nhiên, cần được thể hiện", type: "A" },
      { text: "Là một phần của cuộc sống, cần được chia sẻ", type: "B" },
      { text: "Là điều riêng tư, tự mình xử lý", type: "C" },
      { text: "Là điểm yếu, cần vượt qua nhanh chóng", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người Biểu Cảm",
    emoji: "💧",
    description: "Bạn thể hiện nỗi buồn một cách trọn vẹn và chân thật. Việc cho phép bản thân cảm nhận và thể hiện cảm xúc giúp bạn healing nhanh chóng.",
    traits: ["Biểu cảm", "Chân thật", "Cởi mở", "Nhạy cảm"],
    strengths: ["Xử lý cảm xúc lành mạnh", "Kết nối sâu với người khác", "Không đè nén cảm xúc"],
    weaknesses: ["Có thể bị cảm xúc chi phối", "Đôi khi quá nhạy cảm"],
    tips: ["Học cách điều tiết cảm xúc", "Tìm thời điểm phù hợp để thể hiện"],
  },
  B: {
    type: "B",
    title: "Người Chia Sẻ",
    emoji: "🤗",
    description: "Bạn xử lý nỗi buồn bằng cách chia sẻ với người thân. Sự kết nối và hỗ trợ từ người khác giúp bạn vượt qua những lúc khó khăn.",
    traits: ["Chia sẻ", "Kết nối", "Cân bằng", "Tin tưởng"],
    strengths: ["Có hệ thống hỗ trợ tốt", "Không đè nén cảm xúc", "Hồi phục khỏe mạnh"],
    weaknesses: ["Có thể phụ thuộc vào người khác", "Khó xử lý khi ở một mình"],
    tips: ["Phát triển kỹ năng tự an ủi", "Học cách ở yên với cảm xúc một mình"],
  },
  C: {
    type: "C",
    title: "Người Nội Tâm",
    emoji: "🌙",
    description: "Bạn xử lý nỗi buồn theo cách riêng tư và nội tâm. Sự tĩnh lặng và không gian riêng giúp bạn suy ngẫm và chữa lành.",
    traits: ["Nội tâm", "Độc lập", "Suy tư", "Riêng tư"],
    strengths: ["Tự lực trong cảm xúc", "Không làm phiền người khác", "Sâu sắc trong cảm nhận"],
    weaknesses: ["Có thể cô đơn", "Khó để người khác giúp đỡ"],
    tips: ["Mở lòng chia sẻ đôi khi", "Để người thân biết bạn cần họ"],
  },
  D: {
    type: "D",
    title: "Người Kiềm Chế",
    emoji: "🏔️",
    description: "Bạn có xu hướng kiềm chế và đè nén nỗi buồn. Điều này có thể giúp bạn mạnh mẽ nhưng cũng cần chú ý đến sức khỏe tinh thần.",
    traits: ["Kiềm chế", "Mạnh mẽ", "Độc lập", "Kín đáo"],
    strengths: ["Không bị cảm xúc chi phối", "Tiếp tục hoạt động bình thường", "Vững vàng trong khó khăn"],
    weaknesses: ["Cảm xúc có thể tích tụ", "Khó kết nối sâu với người khác"],
    tips: ["Cho phép bản thân cảm nhận nỗi buồn", "Tìm cách giải tỏa an toàn"],
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
