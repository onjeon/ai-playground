// Mức độ cầu toàn
// Bài test đánh giá mức độ cầu toàn và hoàn hảo trong công việc và cuộc sống

export const questions = [
  {
    id: 1,
    question: "Khi làm xong một việc, bạn thường kiểm tra lại bao nhiêu lần?",
    options: [
      { text: "Nhiều lần cho đến khi hoàn hảo", type: "A" },
      { text: "2-3 lần để chắc chắn không có lỗi", type: "B" },
      { text: "1 lần là đủ", type: "C" },
      { text: "Hiếm khi kiểm tra lại", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn phản ứng thế nào khi kết quả không đạt như kỳ vọng?",
    options: [
      { text: "Rất thất vọng và tự trách bản thân", type: "A" },
      { text: "Buồn nhưng cố gắng làm lại tốt hơn", type: "B" },
      { text: "Chấp nhận và rút kinh nghiệm", type: "C" },
      { text: "Không quan tâm lắm, làm được bao nhiêu hay bấy nhiêu", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn đặt tiêu chuẩn cho bản thân như thế nào?",
    options: [
      { text: "Rất cao, gần như không thể đạt được", type: "A" },
      { text: "Cao nhưng trong khả năng", type: "B" },
      { text: "Vừa phải, phù hợp với thực tế", type: "C" },
      { text: "Không đặt tiêu chuẩn cụ thể", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi thấy lỗi nhỏ trong công việc người khác, bạn?",
    options: [
      { text: "Rất khó chịu và muốn sửa ngay", type: "A" },
      { text: "Nhắc họ để họ sửa", type: "B" },
      { text: "Nếu quan trọng thì góp ý, không thì bỏ qua", type: "C" },
      { text: "Không quan tâm, đó là việc của họ", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn có hay trì hoãn vì sợ làm không hoàn hảo không?",
    options: [
      { text: "Rất hay, tôi đợi đến khi chắc chắn 100%", type: "A" },
      { text: "Đôi khi, với những việc quan trọng", type: "B" },
      { text: "Hiếm khi, tôi làm rồi sửa sau", type: "C" },
      { text: "Không, tôi làm ngay không suy nghĩ nhiều", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn so sánh bản thân với người khác như thế nào?",
    options: [
      { text: "Luôn thấy mình chưa đủ giỏi", type: "A" },
      { text: "Đôi khi so sánh và cố gắng hơn", type: "B" },
      { text: "So sánh để học hỏi, không tự ti", type: "C" },
      { text: "Không so sánh, mỗi người mỗi khác", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Khi nhận được lời khen, bạn cảm thấy thế nào?",
    options: [
      { text: "Vẫn thấy mình có thể làm tốt hơn", type: "A" },
      { text: "Vui nhưng vẫn thấy cần cải thiện", type: "B" },
      { text: "Hài lòng và cảm ơn", type: "C" },
      { text: "Bình thường, lời khen không quan trọng", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn sắp xếp không gian sống/làm việc như thế nào?",
    options: [
      { text: "Phải gọn gàng hoàn hảo, không một chút bừa bộn", type: "A" },
      { text: "Khá gọn gàng, có hệ thống", type: "B" },
      { text: "Tương đối ngăn nắp", type: "C" },
      { text: "Không quan tâm nhiều đến việc sắp xếp", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn có dễ dàng ủy thác công việc cho người khác không?",
    options: [
      { text: "Rất khó, vì họ không làm tốt như tôi", type: "A" },
      { text: "Khó, tôi phải hướng dẫn kỹ", type: "B" },
      { text: "Được, nếu tin tưởng họ", type: "C" },
      { text: "Dễ dàng, tôi không cầu toàn", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Khi mắc lỗi, bạn nghĩ về nó bao lâu?",
    options: [
      { text: "Rất lâu, có khi nhiều ngày/tuần", type: "A" },
      { text: "Một thời gian rồi cố gắng quên đi", type: "B" },
      { text: "Suy nghĩ để rút kinh nghiệm rồi bỏ qua", type: "C" },
      { text: "Quên ngay, ai cũng mắc lỗi", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn có hay làm lại từ đầu nếu kết quả chưa vừa ý không?",
    options: [
      { text: "Rất hay, cho đến khi hoàn hảo", type: "A" },
      { text: "Đôi khi, nếu có thời gian", type: "B" },
      { text: "Hiếm khi, sửa được gì thì sửa", type: "C" },
      { text: "Không, tôi chấp nhận kết quả", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Mức độ cầu toàn ảnh hưởng đến cuộc sống của bạn thế nào?",
    options: [
      { text: "Rất nhiều, tôi thường căng thẳng và mệt mỏi", type: "A" },
      { text: "Khá nhiều, nhưng cũng giúp tôi thành công", type: "B" },
      { text: "Vừa phải, tôi cân bằng được", type: "C" },
      { text: "Không nhiều, tôi sống thoải mái", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người Cầu Toàn Cực Độ",
    emoji: "💎",
    description: "Bạn là người cầu toàn cực độ, luôn đòi hỏi sự hoàn hảo trong mọi việc. Điều này có thể mang lại thành tựu cao nhưng cũng gây ra nhiều áp lực và căng thẳng.",
    traits: ["Cầu toàn cao", "Tự đòi hỏi", "Chi tiết", "Không chấp nhận sai sót"],
    strengths: ["Công việc chất lượng cao", "Chú ý đến chi tiết", "Đáng tin cậy"],
    weaknesses: ["Hay căng thẳng", "Khó hoàn thành đúng hạn", "Tự tạo áp lực lớn"],
    tips: ["Học cách chấp nhận 'đủ tốt'", "Đặt tiêu chuẩn thực tế hơn"],
  },
  B: {
    type: "B",
    title: "Người Cầu Toàn Có Kiểm Soát",
    emoji: "⭐",
    description: "Bạn có tính cầu toàn ở mức khá cao nhưng vẫn kiểm soát được. Bạn muốn làm tốt nhưng cũng biết khi nào nên dừng lại.",
    traits: ["Cầu toàn vừa phải", "Có tiêu chuẩn cao", "Biết điểm dừng", "Có trách nhiệm"],
    strengths: ["Làm việc tốt", "Cân bằng được chất lượng và thời gian", "Đáng tin cậy"],
    weaknesses: ["Đôi khi quá nghiêm khắc với bản thân", "Hay so sánh"],
    tips: ["Tiếp tục cân bằng", "Học cách khen ngợi bản thân nhiều hơn"],
  },
  C: {
    type: "C",
    title: "Người Thực Tế",
    emoji: "🌿",
    description: "Bạn có tiêu chuẩn nhưng không quá cầu toàn. Bạn biết đặt mục tiêu thực tế và chấp nhận rằng không phải mọi thứ đều phải hoàn hảo.",
    traits: ["Thực tế", "Linh hoạt", "Chấp nhận sai sót", "Cân bằng"],
    strengths: ["Không bị áp lực quá mức", "Hoàn thành công việc đúng hạn", "Sống thoải mái"],
    weaknesses: ["Đôi khi có thể làm tốt hơn", "Có thể bỏ qua chi tiết quan trọng"],
    tips: ["Đôi khi nên nâng cao tiêu chuẩn một chút", "Chú ý hơn đến các chi tiết"],
  },
  D: {
    type: "D",
    title: "Người Thoải Mái",
    emoji: "😎",
    description: "Bạn là người thoải mái, không đặt nặng vấn đề hoàn hảo. Bạn sống theo phương châm 'làm được đến đâu hay đến đó' và không tự gây áp lực cho bản thân.",
    traits: ["Thoải mái", "Không áp lực", "Chấp nhận mọi kết quả", "Dễ tính"],
    strengths: ["Không căng thẳng", "Sống vui vẻ", "Dễ thích nghi"],
    weaknesses: ["Có thể làm việc qua loa", "Thiếu động lực cải thiện"],
    tips: ["Đặt một số tiêu chuẩn cơ bản", "Cố gắng cải thiện chất lượng công việc"],
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
