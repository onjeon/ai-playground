// Cách đối mặt deadline
// Khám phá phong cách xử lý deadline của bạn

export const questions = [
  {
    id: 1,
    question: "Khi nhận được một task có deadline 1 tuần, bạn thường làm gì?",
    options: [
      { text: "Lên kế hoạch chia nhỏ và bắt đầu ngay", type: "A" },
      { text: "Nghiên cứu kỹ yêu cầu, làm một lần cho xong", type: "B" },
      { text: "Để vài ngày rồi tập trung làm gấp cuối tuần", type: "C" },
      { text: "Làm từ từ theo cảm hứng, miễn kịp deadline", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Deadline còn 1 ngày nhưng còn 50% công việc, bạn sẽ?",
    options: [
      { text: "Làm việc overtime, không nghỉ cho đến khi xong", type: "A" },
      { text: "Tập trung cao độ, làm hiệu quả nhất có thể", type: "B" },
      { text: "Xin thêm thời gian hoặc nhờ sự giúp đỡ", type: "C" },
      { text: "Chấp nhận kết quả không hoàn hảo", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn cảm thấy thế nào khi có deadline áp lực?",
    options: [
      { text: "Lo lắng nhưng vẫn kiểm soát được", type: "A" },
      { text: "Hứng khởi, làm việc hiệu quả hơn", type: "B" },
      { text: "Căng thẳng, muốn được hỗ trợ", type: "C" },
      { text: "Bình thường, deadline nào cũng vậy", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Thói quen của bạn khi làm việc gần deadline?",
    options: [
      { text: "Kiểm tra tiến độ liên tục, lo lắng về từng chi tiết", type: "A" },
      { text: "Tập trung cao độ, bỏ hết mọi việc khác", type: "B" },
      { text: "Uống nhiều cà phê, thức đêm", type: "C" },
      { text: "Làm đến đâu hay đến đó", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn thường hoàn thành công việc như thế nào?",
    options: [
      { text: "Trước deadline để còn thời gian review", type: "A" },
      { text: "Đúng deadline, không sớm không muộn", type: "B" },
      { text: "Sát nút deadline, đôi khi trễ một chút", type: "C" },
      { text: "Tùy thuộc vào mức độ quan trọng của công việc", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi có nhiều deadline cùng lúc, bạn xử lý như thế nào?",
    options: [
      { text: "Lên danh sách ưu tiên và làm theo thứ tự", type: "A" },
      { text: "Làm xong việc gấp nhất trước, rồi đến việc khác", type: "B" },
      { text: "Hoảng loạn một chút rồi mới bình tĩnh lại", type: "C" },
      { text: "Làm song song nhiều việc cùng lúc", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Điều gì khiến bạn trễ deadline nhất?",
    options: [
      { text: "Muốn hoàn hảo nên sửa đi sửa lại", type: "A" },
      { text: "Gặp vấn đề kỹ thuật hoặc trở ngại bất ngờ", type: "B" },
      { text: "Trì hoãn, để gần ngày mới làm", type: "C" },
      { text: "Bị phân tâm bởi việc khác", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn đặt deadline cho bản thân như thế nào?",
    options: [
      { text: "Sớm hơn deadline thật để có thời gian dự phòng", type: "A" },
      { text: "Đúng deadline thật, đủ để hoàn thành", type: "B" },
      { text: "Không đặt deadline riêng, làm theo deadline được giao", type: "C" },
      { text: "Linh hoạt, điều chỉnh theo tình hình", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Sau khi hoàn thành deadline quan trọng, bạn thường làm gì?",
    options: [
      { text: "Kiểm tra lại kỹ trước khi submit", type: "A" },
      { text: "Submit ngay và nghỉ ngơi", type: "B" },
      { text: "Thở phào nhẹ nhõm, ăn mừng", type: "C" },
      { text: "Chuyển sang việc tiếp theo ngay", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn nghĩ gì về việc làm việc overtime để kịp deadline?",
    options: [
      { text: "Cần thiết để đảm bảo chất lượng", type: "A" },
      { text: "Đôi khi phải chấp nhận để hoàn thành công việc", type: "B" },
      { text: "Không thích nhưng đành phải làm", type: "C" },
      { text: "Cố gắng tránh, làm việc thông minh hơn", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Khi deadline bị dời lại, bạn cảm thấy thế nào?",
    options: [
      { text: "Tiếp tục làm như kế hoạch ban đầu", type: "A" },
      { text: "Vui vì có thêm thời gian hoàn thiện", type: "B" },
      { text: "Thở phào nhẹ nhõm", type: "C" },
      { text: "Tận dụng thời gian để làm việc khác", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bạn học được gì từ những lần suýt trễ deadline?",
    options: [
      { text: "Cần lên kế hoạch kỹ hơn từ đầu", type: "A" },
      { text: "Cần tập trung hơn khi làm việc", type: "B" },
      { text: "Cần bắt đầu sớm hơn", type: "C" },
      { text: "Đôi khi cần giảm bớt hoàn hảo", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người Kế hoạch - Kiểu Cầu toàn",
    emoji: "📋",
    description: "Bạn luôn lên kế hoạch chi tiết và bắt đầu sớm. Bạn muốn mọi thứ hoàn hảo và thường hoàn thành trước deadline để có thời gian review.",
    traits: ["Có kế hoạch", "Cẩn thận", "Cầu toàn", "Đáng tin cậy"],
    strengths: ["Luôn kịp deadline", "Chất lượng công việc cao", "Ít stress vào phút cuối"],
    weaknesses: ["Có thể tốn thời gian vào chi tiết nhỏ", "Đôi khi lo lắng quá mức"],
    tips: ["Học cách chấp nhận 'đủ tốt'", "Giảm bớt việc sửa đi sửa lại"],
  },
  B: {
    type: "B",
    title: "Người Tập trung - Kiểu Hiệu quả",
    emoji: "🎯",
    description: "Bạn làm việc hiệu quả và tập trung cao độ khi cần. Bạn biết cách phân bổ năng lượng và hoàn thành đúng deadline với chất lượng tốt.",
    traits: ["Hiệu quả", "Tập trung", "Thực tế", "Bình tĩnh"],
    strengths: ["Làm việc hiệu quả dưới áp lực", "Phân bổ thời gian tốt", "Không stress vô ích"],
    weaknesses: ["Có thể bỏ qua một số chi tiết", "Đôi khi gấp gáp vào phút cuối"],
    tips: ["Bắt đầu sớm hơn một chút", "Dành thời gian review sau khi xong"],
  },
  C: {
    type: "C",
    title: "Người Trì hoãn - Kiểu Gấp rút",
    emoji: "⏰",
    description: "Bạn thường để đến gần deadline mới tập trung làm việc. Bạn làm việc tốt dưới áp lực nhưng hay căng thẳng vào phút cuối.",
    traits: ["Làm việc dưới áp lực", "Linh hoạt", "Lạc quan", "Thích ứng nhanh"],
    strengths: ["Hiệu quả cao khi gấp", "Thích ứng tốt", "Không lo lắng sớm"],
    weaknesses: ["Hay căng thẳng cuối deadline", "Đôi khi trễ deadline", "Chất lượng không ổn định"],
    tips: ["Đặt deadline giả sớm hơn", "Chia nhỏ công việc để bắt đầu sớm hơn"],
  },
  D: {
    type: "D",
    title: "Người Tự do - Kiểu Linh hoạt",
    emoji: "🌊",
    description: "Bạn làm việc theo cách linh hoạt và tùy thuộc vào tình hình. Bạn không quá căng thẳng về deadline và biết cách điều chỉnh kỳ vọng.",
    traits: ["Linh hoạt", "Thích ứng", "Thực tế", "Bình thản"],
    strengths: ["Không bị stress", "Thích ứng với thay đổi", "Biết đặt ưu tiên"],
    weaknesses: ["Đôi khi thiếu khẩn trương", "Có thể bỏ lỡ deadline"],
    tips: ["Đặt mục tiêu cụ thể hơn", "Xây dựng thói quen theo dõi tiến độ"],
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
