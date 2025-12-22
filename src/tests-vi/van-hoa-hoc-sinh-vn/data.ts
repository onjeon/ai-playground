// Kiểu học sinh Việt Nam của bạn
// Khám phá phong cách học sinh đặc trưng của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn thường đến lớp lúc mấy giờ?",
    options: [
      { text: "Sớm 15-30 phút để ôn bài", type: "A" },
      { text: "Đúng giờ, không sớm không muộn", type: "B" },
      { text: "Sát giờ vào học mới tới", type: "C" },
      { text: "Hay đi trễ, xin cô cho vào", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Khi thầy cô gọi phát biểu?",
    options: [
      { text: "Sẵn sàng đứng lên trả lời", type: "A" },
      { text: "Trả lời nếu biết chắc", type: "B" },
      { text: "Né tránh ánh mắt thầy cô", type: "C" },
      { text: "Giả vờ đang ghi bài", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn học bài như thế nào?",
    options: [
      { text: "Làm bài tập ngay sau khi học", type: "A" },
      { text: "Học từ từ, không gấp", type: "B" },
      { text: "Đợi sát kỳ thi mới học", type: "C" },
      { text: "Học thuộc lòng đêm trước thi", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Giờ ra chơi bạn làm gì?",
    options: [
      { text: "Ở lại lớp ôn bài hoặc đọc sách", type: "A" },
      { text: "Ra canteen ăn vặt với bạn", type: "B" },
      { text: "Chơi đùa, nói chuyện phiếm", type: "C" },
      { text: "Ngủ bù vì đêm qua thức khuya", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi có bài kiểm tra bất ngờ?",
    options: [
      { text: "Không lo, đã học bài đầy đủ", type: "A" },
      { text: "Hơi lo nhưng vẫn tự tin làm", type: "B" },
      { text: "Hoảng hốt, cầu nguyện câu dễ", type: "C" },
      { text: "Nhìn trộm bài bạn bên cạnh", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn ngồi ở vị trí nào trong lớp?",
    options: [
      { text: "Bàn đầu để dễ tập trung", type: "A" },
      { text: "Bàn giữa, vừa phải", type: "B" },
      { text: "Bàn cuối cho thoải mái", type: "C" },
      { text: "Ngồi đâu cũng được, không quan trọng", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Thái độ với môn học khó?",
    options: [
      { text: "Quyết tâm chinh phục bằng được", type: "A" },
      { text: "Cố gắng học, không đặt kỳ vọng cao", type: "B" },
      { text: "Học cho qua, không cần điểm cao", type: "C" },
      { text: "Bỏ cuộc, tập trung môn khác", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Khi bị điểm thấp, bạn?",
    options: [
      { text: "Phân tích lỗi sai, học lại", type: "A" },
      { text: "Hơi buồn nhưng sẽ cố gắng hơn", type: "B" },
      { text: "Không quan tâm lắm", type: "C" },
      { text: "Giấu ba mẹ, sợ bị la", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Quan hệ với bạn cùng lớp?",
    options: [
      { text: "Thân với ai học giỏi để học hỏi", type: "A" },
      { text: "Có nhóm bạn thân cố định", type: "B" },
      { text: "Chơi với tất cả, không phân biệt", type: "C" },
      { text: "Ít bạn, thích một mình", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn tham gia hoạt động ngoại khóa?",
    options: [
      { text: "Nhiều, để có thêm điểm cộng", type: "A" },
      { text: "Có chọn lọc, những gì thích", type: "B" },
      { text: "Ít, tập trung vào học", type: "C" },
      { text: "Không tham gia, ngại", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Khi không hiểu bài?",
    options: [
      { text: "Hỏi thầy cô ngay tại lớp", type: "A" },
      { text: "Hỏi bạn bè sau giờ học", type: "B" },
      { text: "Tự tra Google, YouTube", type: "C" },
      { text: "Bỏ qua, may ra không thi câu đó", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Mục tiêu học tập của bạn?",
    options: [
      { text: "Đậu trường tốt, có tương lai sáng", type: "A" },
      { text: "Học được điều mình thích", type: "B" },
      { text: "Qua môn là được, không áp lực", type: "C" },
      { text: "Chưa biết, sống qua ngày", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Học sinh chăm ngoan gương mẫu",
    emoji: "🏆",
    description: "Bạn là học sinh trong mơ của mọi thầy cô! Chăm chỉ, có mục tiêu rõ ràng và luôn nỗ lực đạt kết quả tốt nhất.",
    traits: ["Chăm chỉ", "Có mục tiêu", "Kỷ luật", "Trách nhiệm"],
    strengths: ["Kết quả học tập tốt", "Được thầy cô yêu quý", "Có tương lai tươi sáng"],
    weaknesses: ["Có thể quá áp lực", "Ít thời gian vui chơi"],
    tips: ["Nhớ nghỉ ngơi và giải trí", "Cuộc sống không chỉ có điểm số"],
  },
  B: {
    type: "B",
    title: "Học sinh cân bằng",
    emoji: "📚",
    description: "Bạn biết cách cân bằng giữa học và chơi. Bạn học đủ để có kết quả tốt nhưng vẫn có thời gian cho bạn bè và sở thích.",
    traits: ["Cân bằng", "Linh hoạt", "Thực tế", "Vui vẻ"],
    strengths: ["Cuộc sống học đường hài hòa", "Không áp lực", "Có nhiều bạn bè"],
    weaknesses: ["Có thể không nổi bật", "Đôi khi thiếu động lực"],
    tips: ["Đặt thêm mục tiêu cao hơn", "Khám phá tiềm năng của bản thân"],
  },
  C: {
    type: "C",
    title: "Học sinh thoải mái",
    emoji: "😎",
    description: "Bạn có phong cách học thoải mái, không đặt nặng điểm số. Bạn thích trải nghiệm cuộc sống hơn là chỉ ngồi trong sách vở.",
    traits: ["Thoải mái", "Không áp lực", "Thích tự do", "Sáng tạo"],
    strengths: ["Ít stress", "Có nhiều trải nghiệm", "Sáng tạo"],
    weaknesses: ["Kết quả học có thể không cao", "Có thể bỏ lỡ cơ hội"],
    tips: ["Tập trung hơn vào những môn quan trọng", "Tìm ra đam mê của mình"],
  },
  D: {
    type: "D",
    title: "Học sinh phiêu lưu",
    emoji: "🎮",
    description: "Bạn có phong cách học độc đáo, thường tìm lối đi tắt. Bạn thông minh nhưng chưa phát huy hết tiềm năng trong việc học.",
    traits: ["Sáng tạo", "Nhanh trí", "Tự do", "Không theo khuôn mẫu"],
    strengths: ["Thích nghi nhanh", "Có tư duy khác biệt", "Không bị gò bó"],
    weaknesses: ["Kết quả học không ổn định", "Có thể gặp rắc rối"],
    tips: ["Sử dụng sự thông minh vào việc học", "Tương lai cần kiến thức nền tảng"],
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
