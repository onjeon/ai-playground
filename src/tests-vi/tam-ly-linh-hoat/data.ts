// Mức độ linh hoạt
// Bài test đánh giá mức độ linh hoạt trong tư duy và hành động của bạn

export const questions = [
  {
    id: 1,
    question: "Khi có nhiều cách giải quyết một vấn đề, bạn thường?",
    options: [
      { text: "Xem xét tất cả và chọn cách phù hợp nhất", type: "A" },
      { text: "Thử cách quen thuộc trước rồi mới đổi", type: "B" },
      { text: "Dùng cách đã biết và ít khi thay đổi", type: "C" },
      { text: "Luôn làm theo một cách duy nhất", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn xử lý thế nào khi cách làm cũ không hiệu quả?",
    options: [
      { text: "Nhanh chóng thay đổi sang cách khác", type: "A" },
      { text: "Điều chỉnh một chút rồi thử lại", type: "B" },
      { text: "Cố gắng thêm với cách cũ", type: "C" },
      { text: "Khó từ bỏ cách làm quen thuộc", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi nhận được góp ý trái ngược quan điểm của bạn, bạn?",
    options: [
      { text: "Cân nhắc và sẵn sàng thay đổi nếu hợp lý", type: "A" },
      { text: "Lắng nghe nhưng cần thời gian suy nghĩ", type: "B" },
      { text: "Khó chấp nhận nhưng vẫn nghe", type: "C" },
      { text: "Giữ nguyên quan điểm của mình", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn cảm thấy thế nào về việc thay đổi thói quen?",
    options: [
      { text: "Sẵn sàng thay đổi nếu cần thiết", type: "A" },
      { text: "Có thể thay đổi nhưng cần lý do", type: "B" },
      { text: "Khó khăn nhưng vẫn cố gắng", type: "C" },
      { text: "Thích giữ nguyên thói quen", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi làm việc nhóm, bạn thường?",
    options: [
      { text: "Linh hoạt đảm nhận vai trò khác nhau", type: "A" },
      { text: "Làm tốt vài vai trò cụ thể", type: "B" },
      { text: "Thích vai trò quen thuộc", type: "C" },
      { text: "Chỉ muốn làm một việc cố định", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn xử lý thế nào khi lịch trình bị xáo trộn?",
    options: [
      { text: "Điều chỉnh ngay và tiếp tục", type: "A" },
      { text: "Hơi bất ngờ nhưng sắp xếp lại được", type: "B" },
      { text: "Khó chịu và cần thời gian", type: "C" },
      { text: "Rất khó chịu, muốn giữ lịch cũ", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Khi gặp vấn đề mới chưa từng đối mặt, bạn?",
    options: [
      { text: "Tìm nhiều cách tiếp cận khác nhau", type: "A" },
      { text: "Áp dụng kinh nghiệm cũ rồi điều chỉnh", type: "B" },
      { text: "Lo lắng và cần hướng dẫn", type: "C" },
      { text: "Không biết phải làm gì", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn có dễ dàng chuyển đổi giữa các công việc không?",
    options: [
      { text: "Rất dễ, tôi đa nhiệm tốt", type: "A" },
      { text: "Khá dễ, sau khi hoàn thành phần hiện tại", type: "B" },
      { text: "Cần thời gian để chuyển đổi", type: "C" },
      { text: "Khó khăn, thích làm xong việc này mới sang việc khác", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi có ý tưởng mới, bạn phản ứng thế nào?",
    options: [
      { text: "Hào hứng muốn thử ngay", type: "A" },
      { text: "Cân nhắc rồi thử nếu khả thi", type: "B" },
      { text: "Thận trọng và ít khi thử", type: "C" },
      { text: "Không thích thay đổi cách làm", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn xử lý thế nào khi phải đàm phán?",
    options: [
      { text: "Linh hoạt và tìm giải pháp win-win", type: "A" },
      { text: "Có thể thỏa hiệp ở một số điểm", type: "B" },
      { text: "Khó nhượng bộ", type: "C" },
      { text: "Giữ quan điểm đến cùng", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn tiếp cận việc học hỏi như thế nào?",
    options: [
      { text: "Học từ nhiều nguồn và phương pháp", type: "A" },
      { text: "Có vài cách học yêu thích", type: "B" },
      { text: "Thích một phương pháp cụ thể", type: "C" },
      { text: "Chỉ học theo cách duy nhất", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Nhìn chung, bạn đánh giá sự linh hoạt của mình thế nào?",
    options: [
      { text: "Rất linh hoạt, dễ dàng thích nghi", type: "A" },
      { text: "Khá linh hoạt trong phần lớn trường hợp", type: "B" },
      { text: "Trung bình, cần thời gian", type: "C" },
      { text: "Không linh hoạt lắm", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Cực Kỳ Linh Hoạt",
    emoji: "🌊",
    description: "Bạn cực kỳ linh hoạt trong tư duy và hành động, dễ dàng thích nghi với mọi tình huống và sẵn sàng thay đổi khi cần thiết.",
    traits: ["Linh hoạt cao", "Đa dạng", "Thích nghi nhanh", "Cởi mở"],
    strengths: ["Xử lý tình huống tốt", "Sáng tạo", "Dễ làm việc cùng"],
    weaknesses: ["Đôi khi thiếu kiên định", "Có thể không nhất quán"],
    tips: ["Giữ vững một số nguyên tắc cơ bản", "Biết khi nào nên kiên định"],
  },
  B: {
    type: "B",
    title: "Linh Hoạt Có Chừng Mực",
    emoji: "🌿",
    description: "Bạn linh hoạt có chừng mực, biết khi nào nên thay đổi và khi nào nên giữ vững quan điểm. Đây là sự cân bằng tốt.",
    traits: ["Linh hoạt", "Cân bằng", "Thực tế", "Biết điều"],
    strengths: ["Cân bằng tốt", "Thích nghi được", "Có nguyên tắc"],
    weaknesses: ["Đôi khi chậm thay đổi", "Cần lý do để thay đổi"],
    tips: ["Tiếp tục duy trì sự cân bằng", "Thử thách bản thân linh hoạt hơn"],
  },
  C: {
    type: "C",
    title: "Ít Linh Hoạt",
    emoji: "🪨",
    description: "Bạn có xu hướng thích sự ổn định và khó thay đổi. Việc phát triển sự linh hoạt sẽ giúp bạn đối mặt tốt hơn với cuộc sống.",
    traits: ["Ổn định", "Bảo thủ", "Cần thời gian", "Thận trọng"],
    strengths: ["Kiên định", "Đáng tin cậy", "Nhất quán"],
    weaknesses: ["Khó thích nghi", "Dễ bỏ lỡ cơ hội"],
    tips: ["Tập thay đổi từ những việc nhỏ", "Cởi mở hơn với ý tưởng mới"],
  },
  D: {
    type: "D",
    title: "Cứng Nhắc",
    emoji: "🏛️",
    description: "Bạn là người khá cứng nhắc, thích giữ nguyên cách làm quen thuộc và khó chấp nhận thay đổi. Điều này có thể hạn chế sự phát triển của bạn.",
    traits: ["Cứng nhắc", "Bảo thủ cao", "Không thích thay đổi", "Cố định"],
    strengths: ["Nhất quán", "Có nguyên tắc", "Đáng tin cậy"],
    weaknesses: ["Rất khó thích nghi", "Dễ xung đột", "Bỏ lỡ nhiều cơ hội"],
    tips: ["Học cách chấp nhận thay đổi là điều bình thường", "Thử những điều mới từng chút một"],
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
