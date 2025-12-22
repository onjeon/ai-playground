// Mức độ cam kết trong tình yêu
// Đánh giá mức độ cam kết và trách nhiệm của bạn trong mối quan hệ

export const questions = [
  {
    id: 1,
    question: "Bạn nghĩ gì về hôn nhân?",
    options: [
      { text: "Mục tiêu quan trọng, muốn kết hôn", type: "A" },
      { text: "Tốt nếu gặp đúng người", type: "B" },
      { text: "Chưa nghĩ đến, còn sớm", type: "C" },
      { text: "Không chắc chắn có cần thiết không", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Khi yêu, bạn nghĩ đến tương lai không?",
    options: [
      { text: "Luôn luôn, lên kế hoạch cùng nhau", type: "A" },
      { text: "Có, nhưng từ từ", type: "B" },
      { text: "Đôi khi, không thường xuyên", type: "C" },
      { text: "Không, sống cho hiện tại", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn sẵn sàng hy sinh điều gì cho người yêu?",
    options: [
      { text: "Nhiều thứ, tình yêu là ưu tiên", type: "A" },
      { text: "Một số thứ, trong giới hạn", type: "B" },
      { text: "Ít thôi, cần cân bằng", type: "C" },
      { text: "Không muốn hy sinh, mỗi người có cuộc sống riêng", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi có cơ hội công việc ở xa, ảnh hưởng đến mối quan hệ, bạn?",
    options: [
      { text: "Từ chối nếu ảnh hưởng mối quan hệ", type: "A" },
      { text: "Thảo luận với người yêu để quyết định", type: "B" },
      { text: "Cân nhắc kỹ, có thể chọn công việc", type: "C" },
      { text: "Chọn công việc, mối quan hệ có thể thay đổi", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn có muốn giới thiệu người yêu với gia đình không?",
    options: [
      { text: "Có, ngay khi nghiêm túc", type: "A" },
      { text: "Có, khi đến thời điểm phù hợp", type: "B" },
      { text: "Chưa vội, cần thời gian", type: "C" },
      { text: "Không thích, giữ riêng tư", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn đánh giá mối quan hệ hiện tại/tương lai thế nào?",
    options: [
      { text: "Người này là người tôi muốn gắn bó", type: "A" },
      { text: "Đang tìm hiểu, có triển vọng", type: "B" },
      { text: "Chưa biết, còn sớm để nói", type: "C" },
      { text: "Chỉ là hẹn hò, không nghĩ xa", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Khi có khó khăn trong mối quan hệ, bạn?",
    options: [
      { text: "Cố gắng giải quyết, không bỏ cuộc", type: "A" },
      { text: "Nỗ lực nhưng có giới hạn", type: "B" },
      { text: "Xem xét có đáng tiếp tục không", type: "C" },
      { text: "Dễ dàng từ bỏ nếu quá khó", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn có sẵn sàng thay đổi vì người yêu không?",
    options: [
      { text: "Có, sẵn sàng thay đổi nếu cần", type: "A" },
      { text: "Một số điều, nếu hợp lý", type: "B" },
      { text: "Không muốn thay đổi nhiều", type: "C" },
      { text: "Không, tôi là tôi", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn nghĩ gì về việc sống chung trước hôn nhân?",
    options: [
      { text: "Cần thiết để hiểu nhau", type: "A" },
      { text: "Có thể, tùy hoàn cảnh", type: "B" },
      { text: "Không chắc, cần suy nghĩ", type: "C" },
      { text: "Không thích cam kết như vậy", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn có lập kế hoạch tài chính chung với người yêu không?",
    options: [
      { text: "Có, đã bắt đầu lên kế hoạch", type: "A" },
      { text: "Đang cân nhắc", type: "B" },
      { text: "Chưa, còn sớm", type: "C" },
      { text: "Không, tài chính riêng là tốt nhất", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn sẵn sàng gắn bó lâu dài đến mức nào?",
    options: [
      { text: "Cả đời, nếu đúng người", type: "A" },
      { text: "Nhiều năm, xem tình hình", type: "B" },
      { text: "Chưa biết, không nghĩ xa", type: "C" },
      { text: "Không thích cam kết lâu dài", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bạn đánh giá mức độ cam kết của mình?",
    options: [
      { text: "Rất cao, sẵn sàng gắn bó", type: "A" },
      { text: "Khá cao, với điều kiện", type: "B" },
      { text: "Trung bình, cần thêm thời gian", type: "C" },
      { text: "Thấp, thích tự do", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người cam kết sâu sắc",
    emoji: "💍",
    description: "Bạn có mức độ cam kết rất cao trong tình yêu. Bạn sẵn sàng gắn bó lâu dài, hy sinh và xây dựng tương lai cùng người yêu. Bạn là đối tác đáng tin cậy!",
    traits: ["Cam kết", "Trách nhiệm", "Hy sinh", "Trung thành"],
    strengths: ["Đáng tin cậy", "Xây dựng tương lai", "Không bỏ cuộc"],
    weaknesses: ["Có thể quá hy sinh", "Khó chấp nhận nếu mối quan hệ thất bại"],
    tips: ["Cân bằng giữa cam kết và bản thân", "Đảm bảo đối tác cũng cam kết"],
  },
  B: {
    type: "B",
    title: "Người cam kết cân bằng",
    emoji: "⚖️",
    description: "Bạn có mức độ cam kết lành mạnh và cân bằng. Bạn sẵn sàng gắn bó nhưng cũng giữ được bản thân. Bạn biết khi nào cần cố gắng và khi nào cần buông.",
    traits: ["Cân bằng", "Lý trí", "Có điều kiện", "Khôn ngoan"],
    strengths: ["Cam kết hợp lý", "Không mù quáng", "Bảo vệ bản thân"],
    weaknesses: ["Có thể bị xem là thiếu cam kết", "Đôi khi do dự"],
    tips: ["Giao tiếp rõ ràng về mong muốn", "Không sợ cam kết khi đúng người"],
  },
  C: {
    type: "C",
    title: "Người thận trọng",
    emoji: "🤔",
    description: "Bạn thận trọng với việc cam kết và cần nhiều thời gian để quyết định. Bạn không vội vàng đưa ra quyết định lớn về mối quan hệ.",
    traits: ["Thận trọng", "Từ từ", "Cân nhắc", "Không vội"],
    strengths: ["Không quyết định vội vàng", "Suy nghĩ kỹ", "Bảo vệ bản thân"],
    weaknesses: ["Đối tác có thể mất kiên nhẫn", "Bỏ lỡ cơ hội"],
    tips: ["Đừng để quá khứ ảnh hưởng quá nhiều", "Khi gặp đúng người, hãy mạnh dạn"],
  },
  D: {
    type: "D",
    title: "Người yêu tự do",
    emoji: "🕊️",
    description: "Bạn không thích cam kết lâu dài và ưu tiên tự do cá nhân. Bạn có thể yêu nhưng không muốn bị ràng buộc. Điều này có thể gây khó khăn cho đối tác muốn nghiêm túc.",
    traits: ["Tự do", "Độc lập", "Không ràng buộc", "Linh hoạt"],
    strengths: ["Tự do", "Không áp lực", "Linh hoạt"],
    weaknesses: ["Khó xây dựng mối quan hệ sâu", "Đối tác thiếu an toàn"],
    tips: ["Trung thực với đối tác về mong muốn", "Tìm người có cùng quan điểm hoặc cân nhắc lại"],
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
