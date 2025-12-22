// Cách đối mặt thi cử
// Bài test khám phá phong cách đối mặt với kỳ thi của bạn

export const questions = [
  {
    id: 1,
    question: "Trước kỳ thi 1 tuần, bạn thường làm gì?",
    options: [
      { text: "Lên kế hoạch chi tiết và ôn tập theo lịch", type: "A" },
      { text: "Bắt đầu ôn từ từ, không quá căng thẳng", type: "B" },
      { text: "Lo lắng và bắt đầu học dồn dập", type: "C" },
      { text: "Chưa bắt đầu, còn nhiều thời gian mà", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Đêm trước ngày thi, bạn làm gì?",
    options: [
      { text: "Ngủ sớm, đã ôn xong từ trước", type: "A" },
      { text: "Xem lại nhanh rồi đi ngủ", type: "B" },
      { text: "Thức khuya học, lo không kịp", type: "C" },
      { text: "Bình thường, không lo lắm", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi vào phòng thi, bạn cảm thấy thế nào?",
    options: [
      { text: "Tự tin vì đã chuẩn bị kỹ", type: "A" },
      { text: "Hơi hồi hộp nhưng bình tĩnh", type: "B" },
      { text: "Rất lo lắng, tim đập nhanh", type: "C" },
      { text: "Bình thường, thi như bình thường thôi", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi gặp câu khó trong đề thi, bạn xử lý thế nào?",
    options: [
      { text: "Bỏ qua, làm câu dễ trước rồi quay lại", type: "A" },
      { text: "Suy nghĩ một chút rồi đoán", type: "B" },
      { text: "Lo lắng và mất tập trung", type: "C" },
      { text: "Đoán đại và tiếp tục", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn quản lý thời gian trong phòng thi như thế nào?",
    options: [
      { text: "Phân bổ thời gian cho từng phần", type: "A" },
      { text: "Làm theo thứ tự, để ý đồng hồ", type: "B" },
      { text: "Hay bị thiếu thời gian", type: "C" },
      { text: "Không để ý lắm, làm xong sớm thì nghỉ", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Sau khi thi xong, bạn làm gì?",
    options: [
      { text: "Kiểm tra lại đáp án, đánh giá kết quả", type: "A" },
      { text: "Nghỉ ngơi và chuẩn bị cho môn tiếp theo", type: "B" },
      { text: "Lo lắng về kết quả, nghĩ về câu sai", type: "C" },
      { text: "Quên ngay, đi chơi với bạn", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn đặt mục tiêu điểm số như thế nào?",
    options: [
      { text: "Đặt mục tiêu cao và cố gắng đạt được", type: "A" },
      { text: "Mục tiêu vừa phải, đạt được là vui", type: "B" },
      { text: "Lo không đạt được mục tiêu", type: "C" },
      { text: "Không đặt mục tiêu cụ thể", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Khi điểm thi không tốt, bạn phản ứng thế nào?",
    options: [
      { text: "Phân tích sai ở đâu và rút kinh nghiệm", type: "A" },
      { text: "Hơi buồn nhưng cố gắng lần sau", type: "B" },
      { text: "Rất buồn và lo lắng", type: "C" },
      { text: "Bình thường, lần sau cố gắng hơn", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn có hay so sánh điểm với bạn bè không?",
    options: [
      { text: "Có, để biết mình đứng ở đâu", type: "A" },
      { text: "Đôi khi, xem ai có đáp án", type: "B" },
      { text: "Có, và hay lo khi điểm thấp hơn", type: "C" },
      { text: "Không, điểm mình tự biết thôi", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Tài liệu ôn thi của bạn trông như thế nào?",
    options: [
      { text: "Được sắp xếp gọn gàng, có hệ thống", type: "A" },
      { text: "Tương đối đầy đủ", type: "B" },
      { text: "Lộn xộn, hay không tìm được", type: "C" },
      { text: "Mượn của bạn hoặc không có", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn có hay nhờ giúp đỡ khi ôn thi không?",
    options: [
      { text: "Tự ôn là chính, hỏi khi cần", type: "A" },
      { text: "Hay học nhóm hoặc hỏi bạn", type: "B" },
      { text: "Cần có người giúp mới yên tâm", type: "C" },
      { text: "Không nhờ, tự học tự hiểu", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Nhìn chung, bạn đánh giá việc thi cử của mình thế nào?",
    options: [
      { text: "Tự tin và có phương pháp", type: "A" },
      { text: "Ổn, không quá lo lắng", type: "B" },
      { text: "Luôn căng thẳng và lo lắng", type: "C" },
      { text: "Thoải mái, thi như thường ngày", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người Chuẩn Bị Kỹ Lưỡng",
    emoji: "📋",
    description: "Bạn là người chuẩn bị kỹ lưỡng cho mọi kỳ thi. Bạn có kế hoạch rõ ràng, ôn tập bài bản và luôn tự tin khi bước vào phòng thi.",
    traits: ["Có kế hoạch", "Tự tin", "Kỷ luật", "Có phương pháp"],
    strengths: ["Luôn sẵn sàng", "Ít bị bất ngờ", "Kết quả ổn định"],
    weaknesses: ["Đôi khi quá áp lực", "Hay tự đặt tiêu chuẩn cao"],
    tips: ["Nhớ nghỉ ngơi đầy đủ", "Đừng quá khắt khe với bản thân"],
  },
  B: {
    type: "B",
    title: "Người Cân Bằng",
    emoji: "⚖️",
    description: "Bạn có sự cân bằng tốt trong việc ôn thi. Bạn không quá căng thẳng nhưng cũng không lơ là, giúp bạn duy trì hiệu suất học tập ổn định.",
    traits: ["Cân bằng", "Bình tĩnh", "Linh hoạt", "Thực tế"],
    strengths: ["Không quá stress", "Duy trì sức khỏe tốt", "Hiệu quả"],
    weaknesses: ["Đôi khi có thể cố gắng hơn", "Có thể chủ quan"],
    tips: ["Tiếp tục duy trì sự cân bằng", "Đôi khi nên đẩy bản thân một chút"],
  },
  C: {
    type: "C",
    title: "Người Lo Lắng",
    emoji: "😰",
    description: "Bạn thường lo lắng và căng thẳng về các kỳ thi. Sự lo lắng này có thể ảnh hưởng đến hiệu suất học tập và kết quả thi của bạn.",
    traits: ["Lo lắng", "Căng thẳng", "Nhạy cảm", "Cần động viên"],
    strengths: ["Không chủ quan", "Luôn có động lực học"],
    weaknesses: ["Dễ mất tập trung", "Ảnh hưởng sức khỏe"],
    tips: ["Tập các phương pháp thư giãn", "Tin tưởng vào khả năng của mình"],
  },
  D: {
    type: "D",
    title: "Người Thoải Mái",
    emoji: "😎",
    description: "Bạn rất thoải mái với việc thi cử, không để nó ảnh hưởng đến tâm trạng. Tuy nhiên, đôi khi sự thoải mái này có thể khiến bạn thiếu chuẩn bị.",
    traits: ["Thoải mái", "Không áp lực", "Lạc quan", "Dễ tính"],
    strengths: ["Không bị stress", "Sức khỏe tinh thần tốt"],
    weaknesses: ["Có thể thiếu chuẩn bị", "Kết quả không ổn định"],
    tips: ["Cần nghiêm túc hơn với việc ôn thi", "Đặt mục tiêu cụ thể"],
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
