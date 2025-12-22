// Kiểu bạn học
// Bài test khám phá kiểu bạn học của bạn trong lớp

export const questions = [
  {
    id: 1,
    question: "Khi ngồi trong lớp, bạn thường làm gì?",
    options: [
      { text: "Ghi chép cẩn thận và chú ý nghe giảng", type: "A" },
      { text: "Nghe giảng và thỉnh thoảng phát biểu", type: "B" },
      { text: "Thỉnh thoảng mơ màng, nghĩ về việc khác", type: "C" },
      { text: "Nói chuyện với bạn bên cạnh", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn làm bài tập về nhà như thế nào?",
    options: [
      { text: "Luôn làm đầy đủ và nộp đúng hạn", type: "A" },
      { text: "Làm hầu hết, đôi khi quên", type: "B" },
      { text: "Làm qua loa hoặc chép bạn", type: "C" },
      { text: "Hay quên hoặc không làm", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Mối quan hệ của bạn với thầy cô như thế nào?",
    options: [
      { text: "Được thầy cô quý mến, hay được khen", type: "A" },
      { text: "Quan hệ tốt, thỉnh thoảng được nhắc nhở", type: "B" },
      { text: "Bình thường, không nổi bật", type: "C" },
      { text: "Hay bị nhắc nhở vì nói chuyện", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn ngồi ở đâu trong lớp?",
    options: [
      { text: "Dãy đầu để tập trung", type: "A" },
      { text: "Giữa lớp, nhìn thấy bảng rõ", type: "B" },
      { text: "Dãy cuối, thoải mái hơn", type: "C" },
      { text: "Bất cứ đâu có bạn thân", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi thầy cô hỏi bài, bạn phản ứng thế nào?",
    options: [
      { text: "Giơ tay trả lời ngay", type: "A" },
      { text: "Trả lời nếu được gọi", type: "B" },
      { text: "Hy vọng không bị gọi", type: "C" },
      { text: "Đùa vui với câu trả lời", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn tham gia hoạt động lớp như thế nào?",
    options: [
      { text: "Làm lớp trưởng/cán sự lớp", type: "A" },
      { text: "Tham gia tích cực khi được phân công", type: "B" },
      { text: "Tham gia khi bắt buộc", type: "C" },
      { text: "Là người tổ chức các hoạt động vui", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Giờ ra chơi bạn thường làm gì?",
    options: [
      { text: "Xem lại bài hoặc chuẩn bị bài sau", type: "A" },
      { text: "Nghỉ ngơi, nói chuyện với bạn", type: "B" },
      { text: "Chơi game hoặc lướt điện thoại", type: "C" },
      { text: "Đi chơi với nhóm bạn khắp trường", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Khi có bài kiểm tra bất ngờ, bạn thường?",
    options: [
      { text: "Làm được vì đã học bài", type: "A" },
      { text: "Làm được phần lớn", type: "B" },
      { text: "Lo lắng vì không chuẩn bị", type: "C" },
      { text: "Đoán đại và hy vọng may mắn", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn bè trong lớp nghĩ gì về bạn?",
    options: [
      { text: "Học giỏi, đáng tin cậy", type: "A" },
      { text: "Dễ thương, hòa đồng", type: "B" },
      { text: "Im lặng, khó hiểu", type: "C" },
      { text: "Vui vẻ, là linh hồn của nhóm", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Khi có bạn hỏi bài, bạn thường?",
    options: [
      { text: "Giảng lại tận tình", type: "A" },
      { text: "Giúp nếu mình biết", type: "B" },
      { text: "Cho chép kết quả", type: "C" },
      { text: "Cùng nhau tìm cách giải", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Sổ liên lạc/bảng điểm của bạn thường có gì?",
    options: [
      { text: "Toàn lời khen và điểm cao", type: "A" },
      { text: "Điểm khá ổn, có vài nhận xét", type: "B" },
      { text: "Điểm trung bình, có nhắc nhở", type: "C" },
      { text: "Có nhận xét về việc mất tập trung", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Mục tiêu học tập của bạn là gì?",
    options: [
      { text: "Luôn đứng top lớp", type: "A" },
      { text: "Học khá là vui rồi", type: "B" },
      { text: "Qua môn là được", type: "C" },
      { text: "Vui vẻ với bạn bè là chính", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Học Sinh Gương Mẫu",
    emoji: "🏅",
    description: "Bạn là học sinh gương mẫu của lớp, luôn chăm chỉ học tập và được thầy cô yêu mến. Bạn là tấm gương để các bạn khác noi theo.",
    traits: ["Chăm chỉ", "Trách nhiệm", "Đáng tin cậy", "Có mục tiêu"],
    strengths: ["Kết quả học tập tốt", "Được thầy cô quý", "Có kỷ luật"],
    weaknesses: ["Đôi khi quá nghiêm túc", "Ít thời gian vui chơi"],
    tips: ["Nhớ cân bằng giữa học và chơi", "Đừng quá áp lực bản thân"],
  },
  B: {
    type: "B",
    title: "Học Sinh Cân Bằng",
    emoji: "⭐",
    description: "Bạn là học sinh biết cân bằng giữa học tập và các hoạt động khác. Bạn học khá tốt mà vẫn có thời gian cho bạn bè và sở thích.",
    traits: ["Cân bằng", "Hòa đồng", "Linh hoạt", "Thực tế"],
    strengths: ["Sống hài hòa", "Có nhiều bạn bè", "Không bị áp lực"],
    weaknesses: ["Đôi khi có thể cố gắng hơn", "Dễ bị phân tâm"],
    tips: ["Tiếp tục duy trì sự cân bằng", "Đôi khi cần tập trung hơn"],
  },
  C: {
    type: "C",
    title: "Học Sinh Mơ Màng",
    emoji: "💭",
    description: "Bạn là học sinh hay mơ màng, thế giới nội tâm phong phú. Bạn có thể có nhiều suy nghĩ và ý tưởng nhưng đôi khi khó tập trung trong lớp.",
    traits: ["Mơ mộng", "Sáng tạo", "Nội tâm", "Khó tập trung"],
    strengths: ["Sáng tạo", "Có góc nhìn riêng", "Không áp lực"],
    weaknesses: ["Hay mất tập trung", "Kết quả không ổn định"],
    tips: ["Cố gắng tập trung trong giờ học", "Tìm cách học phù hợp với bản thân"],
  },
  D: {
    type: "D",
    title: "Linh Hồn Của Lớp",
    emoji: "🎉",
    description: "Bạn là linh hồn của lớp, luôn mang lại tiếng cười và niềm vui. Bạn có nhiều bạn bè và được mọi người yêu thích vì tính cách vui vẻ.",
    traits: ["Vui vẻ", "Hài hước", "Năng động", "Được yêu mến"],
    strengths: ["Nhiều bạn bè", "Tạo không khí vui", "Giao tiếp tốt"],
    weaknesses: ["Dễ bị phân tâm", "Có thể ảnh hưởng học tập"],
    tips: ["Cần nghiêm túc hơn với việc học", "Sử dụng năng lượng vào điều tích cực"],
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
