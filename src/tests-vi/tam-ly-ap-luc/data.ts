// Cách xử lý áp lực
// Khám phá cách bạn đối mặt và vượt qua áp lực trong cuộc sống

export const questions = [
  {
    id: 1,
    question: "Khi deadline đang đến gần và bạn còn nhiều việc chưa xong, bạn thường:",
    options: [
      { text: "Lập kế hoạch chi tiết và làm từng việc một", type: "A" },
      { text: "Tập trung cao độ, bỏ qua mọi thứ khác để hoàn thành", type: "B" },
      { text: "Cảm thấy lo lắng nhưng vẫn cố gắng làm", type: "C" },
      { text: "Hoảng loạn và không biết bắt đầu từ đâu", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Khi bị sếp phê bình trước mặt đồng nghiệp, bạn:",
    options: [
      { text: "Bình tĩnh lắng nghe và rút kinh nghiệm", type: "A" },
      { text: "Tức giận nhưng kìm nén và giải thích sau", type: "B" },
      { text: "Cảm thấy xấu hổ và muốn trốn đi", type: "C" },
      { text: "Phản ứng ngay lập tức để bảo vệ bản thân", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi gặp vấn đề tài chính bất ngờ, bạn:",
    options: [
      { text: "Phân tích tình hình và tìm giải pháp từng bước", type: "A" },
      { text: "Làm thêm hoặc tìm nguồn thu nhập mới", type: "B" },
      { text: "Lo lắng nhiều nhưng vẫn tìm cách xoay sở", type: "C" },
      { text: "Cảm thấy bế tắc và không biết phải làm gì", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi phải thuyết trình trước đông người, bạn:",
    options: [
      { text: "Chuẩn bị kỹ lưỡng và tự tin trình bày", type: "A" },
      { text: "Hồi hộp ban đầu nhưng nhanh chóng bình tĩnh", type: "B" },
      { text: "Run rẩy và nói không trôi chảy", type: "C" },
      { text: "Tìm cách tránh né hoặc nhờ người khác làm thay", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi có quá nhiều việc cùng lúc, bạn:",
    options: [
      { text: "Ưu tiên theo mức độ quan trọng và khẩn cấp", type: "A" },
      { text: "Làm việc cật lực để hoàn thành tất cả", type: "B" },
      { text: "Cảm thấy quá tải nhưng vẫn cố gắng", type: "C" },
      { text: "Bỏ bê một số việc vì không thể handle", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi đối mặt với thay đổi lớn trong cuộc sống, bạn:",
    options: [
      { text: "Nhìn nhận như cơ hội để phát triển", type: "A" },
      { text: "Thích nghi dần dần và tìm cách thích ứng", type: "B" },
      { text: "Lo lắng về những điều chưa biết", type: "C" },
      { text: "Chống lại và muốn giữ nguyên trạng", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Sau một ngày làm việc căng thẳng, bạn thường:",
    options: [
      { text: "Tập thể dục, thiền hoặc làm điều gì đó healthy", type: "A" },
      { text: "Nghỉ ngơi và xem phim/nghe nhạc thư giãn", type: "B" },
      { text: "Ăn uống hoặc mua sắm để giải stress", type: "C" },
      { text: "Khó ngủ vì vẫn suy nghĩ về công việc", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Khi người thân tạo áp lực về hôn nhân/sự nghiệp, bạn:",
    options: [
      { text: "Giải thích quan điểm và kế hoạch của mình", type: "A" },
      { text: "Lắng nghe nhưng vẫn giữ chính kiến", type: "B" },
      { text: "Cảm thấy bức bối và khó chịu", type: "C" },
      { text: "Chiều theo ý họ để tránh xung đột", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi kết quả công việc không như mong đợi, bạn:",
    options: [
      { text: "Phân tích nguyên nhân và cải thiện lần sau", type: "A" },
      { text: "Thất vọng một chút rồi tiếp tục cố gắng", type: "B" },
      { text: "Tự trách bản thân và mất tự tin", type: "C" },
      { text: "Đổ lỗi cho hoàn cảnh hoặc người khác", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Khi phải đưa ra quyết định quan trọng trong thời gian ngắn, bạn:",
    options: [
      { text: "Thu thập thông tin nhanh và quyết đoán", type: "A" },
      { text: "Tin vào trực giác và kinh nghiệm", type: "B" },
      { text: "Lo lắng sợ quyết định sai", type: "C" },
      { text: "Trì hoãn hoặc nhờ người khác quyết định hộ", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Khi bị hiểu lầm hoặc nói xấu, bạn:",
    options: [
      { text: "Bình tĩnh giải thích hoặc bỏ qua nếu không quan trọng", type: "A" },
      { text: "Buồn một chút nhưng không để ảnh hưởng nhiều", type: "B" },
      { text: "Suy nghĩ rất nhiều và khó chịu", type: "C" },
      { text: "Tức giận và muốn đáp trả", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Khi cảm thấy kiệt sức về tinh thần, bạn:",
    options: [
      { text: "Nhận ra và chủ động nghỉ ngơi, reset", type: "A" },
      { text: "Chia sẻ với người thân để được hỗ trợ", type: "B" },
      { text: "Tiếp tục gắng gượng cho đến khi không thể", type: "C" },
      { text: "Không nhận ra cho đến khi sụp đổ", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Bậc Thầy Kiểm Soát Áp Lực",
    emoji: "💪",
    description: "Bạn có khả năng quản lý áp lực xuất sắc! Bạn biến áp lực thành động lực, giữ bình tĩnh trong mọi tình huống và có phương pháp giải quyết vấn đề hiệu quả.",
    traits: ["Bình tĩnh", "Có kế hoạch", "Tự chủ", "Tích cực"],
    strengths: ["Làm việc hiệu quả dưới áp lực", "Ra quyết định sáng suốt", "Truyền năng lượng tích cực cho người khác"],
    weaknesses: ["Đôi khi quá tự tin", "Có thể khó đồng cảm với người yếu đuối"],
    tips: ["Duy trì thói quen tốt", "Giúp đỡ người khác quản lý stress"],
  },
  B: {
    type: "B",
    title: "Người Thích Nghi Linh Hoạt",
    emoji: "🌊",
    description: "Bạn có khả năng thích nghi tốt với áp lực. Dù có chút căng thẳng ban đầu, bạn nhanh chóng tìm được cách vượt qua.",
    traits: ["Linh hoạt", "Kiên cường", "Thực tế", "Cân bằng"],
    strengths: ["Thích nghi nhanh", "Biết cách thư giãn", "Giữ được sự cân bằng"],
    weaknesses: ["Đôi khi cần thời gian để điều chỉnh", "Có thể bỏ qua dấu hiệu stress"],
    tips: ["Phát triển thêm kỹ năng quản lý stress", "Xây dựng network hỗ trợ"],
  },
  C: {
    type: "C",
    title: "Người Nhạy Cảm Với Áp Lực",
    emoji: "🌸",
    description: "Bạn là người nhạy cảm và dễ bị ảnh hưởng bởi áp lực. Tuy nhiên, bạn vẫn cố gắng và không bỏ cuộc.",
    traits: ["Nhạy cảm", "Cố gắng", "Hay lo lắng", "Cần hỗ trợ"],
    strengths: ["Đồng cảm cao", "Cẩn thận", "Biết giới hạn bản thân"],
    weaknesses: ["Dễ stress", "Mất năng lượng nhanh", "Hay suy nghĩ quá nhiều"],
    tips: ["Học kỹ thuật thở và thiền", "Tìm người chia sẻ", "Tập thể dục thường xuyên"],
  },
  D: {
    type: "D",
    title: "Người Cần Học Cách Đối Mặt",
    emoji: "🌱",
    description: "Áp lực là thử thách lớn với bạn. Bạn cần phát triển thêm kỹ năng quản lý stress để sống khỏe hơn.",
    traits: ["Dễ bị áp đảo", "Cần hướng dẫn", "Phản ứng mạnh", "Tiềm năng phát triển"],
    strengths: ["Biết mình cần cải thiện", "Không giả vờ mạnh mẽ"],
    weaknesses: ["Dễ hoảng loạn", "Có thể phản ứng tiêu cực", "Khó kiểm soát cảm xúc"],
    tips: ["Tìm chuyên gia tâm lý hỗ trợ", "Học kỹ năng quản lý stress từ cơ bản", "Xây dựng thói quen healthy"],
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
