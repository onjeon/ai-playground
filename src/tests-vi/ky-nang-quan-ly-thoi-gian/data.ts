// Kỹ Năng Quản Lý Thời Gian
// Khám phá cách bạn sử dụng và quản lý thời gian

export const questions = [
  {
    id: 1,
    question: "Bạn bắt đầu một ngày mới như thế nào?",
    options: [
      { text: "Có lịch trình rõ ràng và tuân thủ nghiêm ngặt", type: "A" },
      { text: "Có kế hoạch chung nhưng linh hoạt thay đổi", type: "B" },
      { text: "Làm việc gì đến trước thì làm trước", type: "C" },
      { text: "Không có kế hoạch, tùy hứng", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Khi có deadline quan trọng, bạn thường:",
    options: [
      { text: "Hoàn thành sớm trước deadline", type: "A" },
      { text: "Làm đều đặn và xong đúng hạn", type: "B" },
      { text: "Làm gấp vào phút chót", type: "C" },
      { text: "Thường xin gia hạn hoặc trễ deadline", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn sử dụng công cụ quản lý thời gian nào?",
    options: [
      { text: "App calendar, to-do list, nhắc nhở tự động", type: "A" },
      { text: "Ghi chú đơn giản hoặc lịch điện thoại", type: "B" },
      { text: "Nhớ trong đầu", type: "C" },
      { text: "Không dùng gì cả", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi được giao nhiều việc cùng lúc, bạn:",
    options: [
      { text: "Phân loại theo độ ưu tiên và làm tuần tự", type: "A" },
      { text: "Làm việc nào dễ nhất trước", type: "B" },
      { text: "Cố gắng làm nhiều việc cùng lúc", type: "C" },
      { text: "Bối rối không biết bắt đầu từ đâu", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Buổi sáng của bạn thường như thế nào?",
    options: [
      { text: "Dậy sớm, có routine rõ ràng", type: "A" },
      { text: "Dậy đúng giờ, chuẩn bị vừa đủ", type: "B" },
      { text: "Thường vội vàng, gần trễ giờ", type: "C" },
      { text: "Hay dậy muộn và bỏ lỡ việc", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn xử lý sự gián đoạn (điện thoại, tin nhắn) như thế nào?",
    options: [
      { text: "Tắt thông báo khi làm việc tập trung", type: "A" },
      { text: "Kiểm tra định kỳ, không liên tục", type: "B" },
      { text: "Trả lời ngay khi có thông báo", type: "C" },
      { text: "Bị phân tâm bởi mọi thông báo", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Khi ước lượng thời gian hoàn thành việc, bạn:",
    options: [
      { text: "Ước lượng chính xác, hiếm khi sai", type: "A" },
      { text: "Ước lượng khá đúng, sai lệch nhỏ", type: "B" },
      { text: "Thường đánh giá thấp thời gian cần thiết", type: "C" },
      { text: "Không bao giờ ước lượng đúng", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn dành thời gian cho bản thân như thế nào?",
    options: [
      { text: "Có lịch nghỉ ngơi và giải trí cố định", type: "A" },
      { text: "Nghỉ ngơi khi xong việc quan trọng", type: "B" },
      { text: "Hiếm khi có thời gian cho bản thân", type: "C" },
      { text: "Hay lãng phí thời gian vào việc không đâu", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi họp hoặc có hẹn, bạn:",
    options: [
      { text: "Đến sớm 5-10 phút", type: "A" },
      { text: "Đến đúng giờ", type: "B" },
      { text: "Thường đến muộn vài phút", type: "C" },
      { text: "Hay quên hoặc đến rất muộn", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Cuối ngày, bạn thường:",
    options: [
      { text: "Hoàn thành hết việc trong danh sách", type: "A" },
      { text: "Hoàn thành việc quan trọng, còn lại để mai", type: "B" },
      { text: "Còn nhiều việc chưa làm xong", type: "C" },
      { text: "Không biết mình đã làm gì cả ngày", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn xử lý việc nhà và việc cá nhân như thế nào?",
    options: [
      { text: "Có lịch cố định cho từng việc", type: "A" },
      { text: "Làm khi có thời gian rảnh", type: "B" },
      { text: "Để tích lại rồi làm một lượt", type: "C" },
      { text: "Thường bỏ qua hoặc quên", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bạn cảm thấy thế nào về thời gian của mình?",
    options: [
      { text: "Kiểm soát tốt, có đủ thời gian cho mọi thứ", type: "A" },
      { text: "Tương đối ổn, đôi khi bận", type: "B" },
      { text: "Luôn thiếu thời gian, chạy đua", type: "C" },
      { text: "Mất kiểm soát, không biết thời gian đi đâu", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Bậc Thầy Thời Gian",
    emoji: "⏰",
    description: "Bạn là chuyên gia quản lý thời gian! Với kỷ luật và hệ thống tổ chức tuyệt vời, bạn biết cách tận dụng từng phút giây một cách hiệu quả.",
    traits: ["Kỷ luật", "Có hệ thống", "Hiệu quả", "Đáng tin cậy"],
    strengths: ["Hoàn thành mọi việc đúng hạn", "Có thời gian cho mọi thứ", "Không bị stress vì deadline"],
    weaknesses: ["Có thể quá cứng nhắc", "Đôi khi thiếu linh hoạt"],
    tips: ["Đôi khi hãy buông lỏng", "Chấp nhận sự thay đổi kế hoạch"],
  },
  B: {
    type: "B",
    title: "Người Cân Bằng",
    emoji: "⚖️",
    description: "Bạn quản lý thời gian tốt với sự cân bằng giữa kỷ luật và linh hoạt. Bạn hoàn thành việc quan trọng mà vẫn có không gian thở.",
    traits: ["Cân bằng", "Linh hoạt", "Thực tế", "Hiệu quả vừa phải"],
    strengths: ["Không bị stress", "Thích nghi tốt", "Hoàn thành việc quan trọng"],
    weaknesses: ["Có thể bỏ qua việc nhỏ", "Đôi khi trì hoãn"],
    tips: ["Theo dõi các việc nhỏ", "Cải thiện kỹ năng ước lượng thời gian"],
  },
  C: {
    type: "C",
    title: "Người Chạy Đua",
    emoji: "🏃",
    description: "Bạn luôn cảm thấy thiếu thời gian và chạy đua với deadline. Với vài điều chỉnh, bạn có thể kiểm soát thời gian tốt hơn nhiều.",
    traits: ["Bận rộn", "Hay trì hoãn", "Làm việc dưới áp lực", "Cần cải thiện"],
    strengths: ["Hoàn thành việc dù gấp", "Làm tốt dưới áp lực", "Năng động"],
    weaknesses: ["Stress cao", "Chất lượng không đều", "Hay trễ hạn"],
    tips: ["Học cách nói không", "Bắt đầu việc sớm hơn dự định"],
  },
  D: {
    type: "D",
    title: "Người Cần Hỗ Trợ",
    emoji: "🌱",
    description: "Quản lý thời gian là thách thức lớn với bạn. Nhưng với công cụ và phương pháp phù hợp, bạn hoàn toàn có thể cải thiện đáng kể.",
    traits: ["Cần hướng dẫn", "Thiếu tổ chức", "Tiềm năng", "Đang học hỏi"],
    strengths: ["Nhận ra vấn đề", "Có thể bắt đầu lại từ đầu", "Không có thói quen cố định"],
    weaknesses: ["Hay quên việc", "Không có kế hoạch", "Lãng phí thời gian"],
    tips: ["Bắt đầu với một công cụ đơn giản", "Tạo một routine nhỏ mỗi ngày"],
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
