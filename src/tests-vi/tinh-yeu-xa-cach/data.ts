// Cách duy trì tình yêu xa
// Khám phá cách bạn duy trì mối quan hệ khi yêu xa

export const questions = [
  {
    id: 1,
    question: "Bạn nghĩ gì về tình yêu xa?",
    options: [
      { text: "Có thể thành công nếu cả hai cố gắng", type: "A" },
      { text: "Khó khăn nhưng đáng thử", type: "B" },
      { text: "Không thích, cần gặp mặt thường xuyên", type: "C" },
      { text: "Không thể chịu được, sẽ không yêu xa", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Khi yêu xa, bạn liên lạc như thế nào?",
    options: [
      { text: "Video call mỗi ngày, nhắn tin liên tục", type: "A" },
      { text: "Gọi điện và nhắn tin thường xuyên", type: "B" },
      { text: "Thỉnh thoảng liên lạc, cho nhau không gian", type: "C" },
      { text: "Không thích liên lạc nhiều", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Điều khó khăn nhất khi yêu xa với bạn là gì?",
    options: [
      { text: "Không được gặp mặt, ôm ấp", type: "A" },
      { text: "Khác múi giờ, khó sắp xếp liên lạc", type: "B" },
      { text: "Không biết họ đang làm gì", type: "C" },
      { text: "Ghen tuông, thiếu tin tưởng", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn làm gì để duy trì tình cảm khi xa nhau?",
    options: [
      { text: "Lên kế hoạch gặp mặt, countdown", type: "A" },
      { text: "Gửi quà, thư tay bất ngờ", type: "B" },
      { text: "Xem phim, chơi game online cùng nhau", type: "C" },
      { text: "Tin tưởng và chờ đợi", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi người yêu không reply tin nhắn khi yêu xa, bạn?",
    options: [
      { text: "Hiểu, họ bận hoặc khác múi giờ", type: "A" },
      { text: "Chờ đợi nhưng hơi lo", type: "B" },
      { text: "Lo lắng, nhắn thêm tin", type: "C" },
      { text: "Rất lo, tưởng tượng đủ thứ", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn có kế hoạch gặp mặt khi yêu xa không?",
    options: [
      { text: "Có lịch cố định, đếm ngược từng ngày", type: "A" },
      { text: "Có kế hoạch nhưng linh hoạt", type: "B" },
      { text: "Gặp khi có thể, không cố định", type: "C" },
      { text: "Hiếm khi lên kế hoạch", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Điều gì giữ bạn vững khi yêu xa?",
    options: [
      { text: "Tình yêu và cam kết chung", type: "A" },
      { text: "Hy vọng về tương lai gần nhau", type: "B" },
      { text: "Thói quen và sự quen thuộc", type: "C" },
      { text: "Không muốn chia tay", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Khi gặp mặt sau thời gian xa, bạn cảm thấy?",
    options: [
      { text: "Hạnh phúc tột độ, như ngày đầu", type: "A" },
      { text: "Vui và trân trọng thời gian bên nhau", type: "B" },
      { text: "Hơi lạ lẫm ban đầu", type: "C" },
      { text: "Cảm xúc không còn như trước", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn xử lý ghen tuông khi yêu xa như thế nào?",
    options: [
      { text: "Tin tưởng hoàn toàn, không ghen", type: "A" },
      { text: "Giao tiếp khi có lo lắng", type: "B" },
      { text: "Hay ghen nhưng cố kiềm chế", type: "C" },
      { text: "Ghen nhiều, khó kiểm soát", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn sẽ yêu xa trong bao lâu?",
    options: [
      { text: "Bao lâu cũng được nếu có mục tiêu chung", type: "A" },
      { text: "1-2 năm, cần có kế hoạch đoàn tụ", type: "B" },
      { text: "Vài tháng, không lâu hơn được", type: "C" },
      { text: "Không thể yêu xa", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn chia sẻ cuộc sống hàng ngày với người yêu xa như thế nào?",
    options: [
      { text: "Gửi ảnh, video mọi thứ mình làm", type: "A" },
      { text: "Kể chuyện quan trọng khi gọi điện", type: "B" },
      { text: "Thỉnh thoảng cập nhật", type: "C" },
      { text: "Không hay chia sẻ", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bạn đánh giá khả năng yêu xa của mình?",
    options: [
      { text: "Tốt, có thể duy trì lâu dài", type: "A" },
      { text: "Khá được, cần cố gắng", type: "B" },
      { text: "Khó khăn, dễ nản", type: "C" },
      { text: "Không thể, cần gặp mặt thường xuyên", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Chuyên gia yêu xa",
    emoji: "✈️",
    description: "Bạn có khả năng duy trì tình yêu xa xuất sắc! Bạn tin tưởng, cam kết và biết cách giữ lửa dù khoảng cách xa. Tình yêu của bạn không bị giới hạn bởi địa lý.",
    traits: ["Tin tưởng", "Cam kết", "Kiên nhẫn", "Sáng tạo"],
    strengths: ["Giữ lửa tình yêu", "Không bị khoảng cách ảnh hưởng", "Trân trọng thời gian bên nhau"],
    weaknesses: ["Có thể quá lý tưởng hóa", "Cần thực tế về tương lai"],
    tips: ["Đặt mục tiêu đoàn tụ cụ thể", "Vẫn cần gặp mặt để duy trì kết nối"],
  },
  B: {
    type: "B",
    title: "Người yêu xa cân bằng",
    emoji: "💪",
    description: "Bạn có khả năng yêu xa tốt với sự cân bằng. Bạn biết cách duy trì mối quan hệ nhưng cũng thực tế về những thách thức của tình yêu xa.",
    traits: ["Cân bằng", "Thực tế", "Kiên nhẫn", "Linh hoạt"],
    strengths: ["Giao tiếp tốt", "Có kế hoạch", "Biết đặt ranh giới"],
    weaknesses: ["Đôi khi lo lắng", "Cần sự chắc chắn"],
    tips: ["Tiếp tục duy trì giao tiếp", "Lên kế hoạch tương lai cụ thể"],
  },
  C: {
    type: "C",
    title: "Người cần gần gũi",
    emoji: "🏠",
    description: "Bạn gặp khó khăn với tình yêu xa và cần sự gần gũi thể chất. Khoảng cách làm bạn lo lắng và thiếu an toàn trong mối quan hệ.",
    traits: ["Cần gần gũi", "Lo lắng", "Nhạy cảm", "Cần sự đảm bảo"],
    strengths: ["Trân trọng thời gian bên nhau", "Yêu sâu sắc", "Cần sự kết nối"],
    weaknesses: ["Khó chịu với khoảng cách", "Dễ ghen tuông", "Hay lo lắng"],
    tips: ["Giao tiếp về nỗi lo của bạn", "Tìm cách kết nối mỗi ngày", "Cân nhắc kỹ trước khi yêu xa"],
  },
  D: {
    type: "D",
    title: "Không phù hợp yêu xa",
    emoji: "🚫",
    description: "Tình yêu xa không phải là lựa chọn phù hợp cho bạn. Bạn cần sự hiện diện thể chất và gặp mặt thường xuyên để duy trì mối quan hệ.",
    traits: ["Cần gặp mặt", "Không thích xa cách", "Thực tế", "Rõ ràng"],
    strengths: ["Biết rõ nhu cầu của mình", "Không ép bản thân", "Trung thực"],
    weaknesses: ["Giới hạn lựa chọn", "Khó với mối quan hệ đặc biệt"],
    tips: ["Không có gì sai với việc không yêu xa", "Ưu tiên người gần bạn", "Trung thực với đối phương từ đầu"],
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
