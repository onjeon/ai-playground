// Mức độ đồng cảm
// Đánh giá khả năng đồng cảm và thấu hiểu người khác của bạn

export const questions = [
  {
    id: 1,
    question: "Khi thấy ai đó khóc, bạn cảm thấy thế nào?",
    options: [
      { text: "Buồn theo, muốn an ủi ngay", type: "A" },
      { text: "Quan tâm, hỏi thăm", type: "B" },
      { text: "Không thoải mái, không biết làm gì", type: "C" },
      { text: "Không bị ảnh hưởng, việc của họ", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn có thể đoán được cảm xúc của người khác không?",
    options: [
      { text: "Rất dễ dàng, nhìn là biết", type: "A" },
      { text: "Khá tốt, phần lớn đúng", type: "B" },
      { text: "Đôi khi, không chắc chắn", type: "C" },
      { text: "Khó, thường đoán sai", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi bạn bè kể chuyện buồn, bạn?",
    options: [
      { text: "Cảm nhận được nỗi đau của họ", type: "A" },
      { text: "Lắng nghe và động viên", type: "B" },
      { text: "Cho lời khuyên giải quyết vấn đề", type: "C" },
      { text: "Nghe nhưng không bị ảnh hưởng", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn có hay giúp đỡ người lạ không?",
    options: [
      { text: "Luôn luôn, không thể bỏ qua", type: "A" },
      { text: "Thường xuyên, khi có thể", type: "B" },
      { text: "Đôi khi, tùy tình huống", type: "C" },
      { text: "Hiếm khi, việc của tôi đã đủ", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi xem phim buồn, bạn?",
    options: [
      { text: "Khóc theo nhân vật", type: "A" },
      { text: "Xúc động, rưng rưng", type: "B" },
      { text: "Buồn một chút", type: "C" },
      { text: "Không có cảm xúc gì", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn có thể đặt mình vào vị trí người khác không?",
    options: [
      { text: "Dễ dàng, như là mình", type: "A" },
      { text: "Có thể, cần suy nghĩ", type: "B" },
      { text: "Khó, nhưng cố gắng", type: "C" },
      { text: "Không thể, họ khác tôi", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Khi ai đó thành công, bạn cảm thấy?",
    options: [
      { text: "Vui như chính mình thành công", type: "A" },
      { text: "Vui cho họ, chúc mừng", type: "B" },
      { text: "Bình thường", type: "C" },
      { text: "Ghen tị hoặc không quan tâm", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn có nhạy cảm với không khí xung quanh không?",
    options: [
      { text: "Rất nhạy, cảm nhận ngay", type: "A" },
      { text: "Khá nhạy", type: "B" },
      { text: "Đôi khi nhận ra", type: "C" },
      { text: "Không để ý", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi người khác sai, bạn?",
    options: [
      { text: "Cố hiểu lý do họ làm vậy", type: "A" },
      { text: "Nhắc nhở nhẹ nhàng", type: "B" },
      { text: "Chỉ ra lỗi sai", type: "C" },
      { text: "Phán xét họ ngay", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn có hay từ thiện không?",
    options: [
      { text: "Thường xuyên, quan tâm cộng đồng", type: "A" },
      { text: "Đôi khi, khi có dịp", type: "B" },
      { text: "Hiếm khi", type: "C" },
      { text: "Không, lo cho mình trước", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn xử lý mâu thuẫn với người khác như thế nào?",
    options: [
      { text: "Cố hiểu quan điểm của họ trước", type: "A" },
      { text: "Nói chuyện để hiểu nhau", type: "B" },
      { text: "Bảo vệ quan điểm của mình", type: "C" },
      { text: "Không quan tâm họ nghĩ gì", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bạn đánh giá khả năng đồng cảm của mình?",
    options: [
      { text: "Rất cao, đôi khi quá mức", type: "A" },
      { text: "Tốt, biết quan tâm", type: "B" },
      { text: "Trung bình, cần phát triển", type: "C" },
      { text: "Thấp, tập trung vào bản thân", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người thấu cảm sâu sắc",
    emoji: "💖",
    description: "Bạn có khả năng đồng cảm rất cao, gần như là một 'empathy'. Bạn cảm nhận được cảm xúc của người khác như chính mình và luôn muốn giúp đỡ.",
    traits: ["Thấu cảm", "Nhạy cảm", "Quan tâm", "Yêu thương"],
    strengths: ["Hiểu người khác sâu sắc", "Kết nối tốt", "Được tin tưởng"],
    weaknesses: ["Có thể quá tải cảm xúc", "Dễ bị tổn thương"],
    tips: ["Học cách bảo vệ năng lượng của mình", "Đặt ranh giới lành mạnh"],
  },
  B: {
    type: "B",
    title: "Người đồng cảm",
    emoji: "🤝",
    description: "Bạn có khả năng đồng cảm tốt và cân bằng. Bạn quan tâm đến người khác nhưng vẫn giữ được sự khách quan và không bị kiệt sức vì cảm xúc người khác.",
    traits: ["Đồng cảm", "Cân bằng", "Quan tâm", "Hỗ trợ"],
    strengths: ["Kết nối tốt", "Giúp đỡ người khác", "Cân bằng cảm xúc"],
    weaknesses: ["Đôi khi cần quan tâm bản thân hơn", "Có thể bỏ qua cảm xúc riêng"],
    tips: ["Tiếp tục phát triển EQ", "Nhớ chăm sóc bản thân"],
  },
  C: {
    type: "C",
    title: "Người lý trí",
    emoji: "🧠",
    description: "Bạn có khả năng đồng cảm ở mức trung bình. Bạn hiểu người khác nhưng thường dùng lý trí hơn cảm xúc để phản ứng.",
    traits: ["Lý trí", "Khách quan", "Độc lập", "Phân tích"],
    strengths: ["Không bị cảm xúc chi phối", "Quyết định khách quan", "Tự chủ"],
    weaknesses: ["Đôi khi thiếu kết nối cảm xúc", "Khó hiểu người nhạy cảm"],
    tips: ["Thử lắng nghe cảm xúc hơn", "Thực hành đặt mình vào vị trí người khác"],
  },
  D: {
    type: "D",
    title: "Người độc lập",
    emoji: "🗿",
    description: "Bạn có mức độ đồng cảm thấp và thường tập trung vào bản thân. Điều này không xấu nhưng có thể gây khó khăn trong các mối quan hệ.",
    traits: ["Độc lập", "Tự tập trung", "Khách quan", "Thực tế"],
    strengths: ["Không bị ảnh hưởng bởi người khác", "Quyết định nhanh", "Mạnh mẽ"],
    weaknesses: ["Khó kết nối sâu", "Có thể bị xem là lạnh lùng"],
    tips: ["Thử mở lòng với người thân", "Học cách lắng nghe không phán xét"],
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
