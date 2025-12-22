// Cách đối mặt chia tay
// Khám phá cách bạn xử lý và vượt qua chia tay

export const questions = [
  {
    id: 1,
    question: "Khi vừa chia tay, phản ứng đầu tiên của bạn là gì?",
    options: [
      { text: "Chấp nhận, cuộc sống tiếp tục", type: "A" },
      { text: "Buồn một thời gian rồi sẽ ổn", type: "B" },
      { text: "Khóc nhiều, rất đau khổ", type: "C" },
      { text: "Không thể tin được, suy sụp", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn mất bao lâu để vượt qua chia tay?",
    options: [
      { text: "Vài ngày đến vài tuần", type: "A" },
      { text: "Vài tháng", type: "B" },
      { text: "Nhiều tháng", type: "C" },
      { text: "Rất lâu, có thể hàng năm", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Sau chia tay, bạn làm gì với kỷ vật?",
    options: [
      { text: "Bỏ đi hoặc trả lại ngay", type: "A" },
      { text: "Cất đi, không nhìn", type: "B" },
      { text: "Giữ lại, thỉnh thoảng xem", type: "C" },
      { text: "Giữ hết, không bỏ được", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn có hay stalk người yêu cũ trên mạng xã hội không?",
    options: [
      { text: "Không, đã block hoặc không quan tâm", type: "A" },
      { text: "Đôi khi, nhưng cố tránh", type: "B" },
      { text: "Thường xuyên, muốn biết họ thế nào", type: "C" },
      { text: "Liên tục, ám ảnh với họ", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi chia tay, bạn có muốn làm bạn không?",
    options: [
      { text: "Không, cắt đứt hoàn toàn", type: "A" },
      { text: "Có thể, sau một thời gian", type: "B" },
      { text: "Muốn, để còn liên lạc", type: "C" },
      { text: "Rất muốn, hy vọng quay lại", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn giải tỏa nỗi buồn chia tay bằng cách nào?",
    options: [
      { text: "Tập trung vào công việc, sở thích", type: "A" },
      { text: "Tâm sự với bạn bè", type: "B" },
      { text: "Khóc, nghe nhạc buồn", type: "C" },
      { text: "Uống rượu, cố quên bằng mọi cách", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn có hay nhớ về kỷ niệm cũ không?",
    options: [
      { text: "Hiếm khi, đã bước qua", type: "A" },
      { text: "Đôi khi, rồi thôi", type: "B" },
      { text: "Thường xuyên, nhất là khi một mình", type: "C" },
      { text: "Luôn luôn, không thể quên", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Sau chia tay, bạn có muốn yêu lại ngay không?",
    options: [
      { text: "Sẵn sàng khi gặp người phù hợp", type: "A" },
      { text: "Cần thời gian chữa lành trước", type: "B" },
      { text: "Sợ yêu lại, cần rất lâu", type: "C" },
      { text: "Không muốn yêu ai nữa", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Nếu người yêu cũ quay lại, bạn?",
    options: [
      { text: "Từ chối, đã qua là qua", type: "A" },
      { text: "Suy nghĩ kỹ, tùy lý do chia tay", type: "B" },
      { text: "Có thể đồng ý, vẫn còn tình cảm", type: "C" },
      { text: "Đồng ý ngay, luôn chờ họ", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn nghĩ gì về người yêu cũ sau chia tay?",
    options: [
      { text: "Chúc họ hạnh phúc, không oán hận", type: "A" },
      { text: "Không nghĩ nhiều, đã qua", type: "B" },
      { text: "Vẫn còn tức giận hoặc buồn", type: "C" },
      { text: "Ghét họ hoặc vẫn yêu tha thiết", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn học được gì từ chia tay?",
    options: [
      { text: "Bài học quý giá cho tương lai", type: "A" },
      { text: "Hiểu bản thân hơn", type: "B" },
      { text: "Không biết, chỉ thấy đau", type: "C" },
      { text: "Không muốn tin ai nữa", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bạn đánh giá khả năng vượt qua chia tay của mình?",
    options: [
      { text: "Tốt, mạnh mẽ và lạc quan", type: "A" },
      { text: "Khá tốt, cần thời gian", type: "B" },
      { text: "Khó khăn, mất nhiều thời gian", type: "C" },
      { text: "Rất khó, ám ảnh lâu dài", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người mạnh mẽ",
    emoji: "🦁",
    description: "Bạn đối mặt với chia tay một cách mạnh mẽ và lý trí. Bạn biết cách chấp nhận, buông bỏ và tiến về phía trước. Đây là kỹ năng quý giá!",
    traits: ["Mạnh mẽ", "Lý trí", "Chấp nhận", "Tiến về phía trước"],
    strengths: ["Hồi phục nhanh", "Không ám ảnh", "Sẵn sàng yêu lại"],
    weaknesses: ["Đôi khi có thể tránh cảm xúc", "Người khác thấy lạnh lùng"],
    tips: ["Cho phép mình buồn khi cần", "Chia sẻ cảm xúc với người thân"],
  },
  B: {
    type: "B",
    title: "Người cân bằng",
    emoji: "🌱",
    description: "Bạn xử lý chia tay một cách cân bằng và lành mạnh. Bạn cho phép mình buồn nhưng cũng biết cách chữa lành và tiến lên.",
    traits: ["Cân bằng", "Lành mạnh", "Chữa lành", "Trưởng thành"],
    strengths: ["Xử lý cảm xúc tốt", "Học từ trải nghiệm", "Hồi phục ổn định"],
    weaknesses: ["Đôi khi cần nhiều thời gian", "Có thể do dự yêu lại"],
    tips: ["Tiếp tục quá trình chữa lành", "Không vội vàng vào mối quan hệ mới"],
  },
  C: {
    type: "C",
    title: "Người nhạy cảm",
    emoji: "💔",
    description: "Bạn rất nhạy cảm với chia tay và mất nhiều thời gian để hồi phục. Bạn hay nhớ về quá khứ và khó buông bỏ hoàn toàn.",
    traits: ["Nhạy cảm", "Yêu sâu", "Khó buông", "Cần hỗ trợ"],
    strengths: ["Yêu chân thành", "Trân trọng mối quan hệ", "Tình cảm sâu sắc"],
    weaknesses: ["Hồi phục chậm", "Có thể ám ảnh quá khứ", "Khó tiến lên"],
    tips: ["Tìm kiếm sự hỗ trợ từ bạn bè", "Cho bản thân thời gian nhưng đặt mục tiêu chữa lành"],
  },
  D: {
    type: "D",
    title: "Cần được hỗ trợ",
    emoji: "🆘",
    description: "Bạn gặp nhiều khó khăn khi đối mặt với chia tay và có thể bị ám ảnh lâu dài. Bạn cần tìm kiếm sự hỗ trợ để chữa lành.",
    traits: ["Ám ảnh", "Khó buông", "Cần hỗ trợ", "Dễ tổn thương"],
    strengths: ["Yêu hết lòng", "Có khả năng thay đổi", "Tình cảm mãnh liệt"],
    weaknesses: ["Ám ảnh quá khứ", "Khó tiến lên", "Có thể ảnh hưởng cuộc sống"],
    tips: ["Tìm kiếm chuyên gia tâm lý", "Bạn xứng đáng được hạnh phúc", "Chia tay không phải kết thúc của bạn"],
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
