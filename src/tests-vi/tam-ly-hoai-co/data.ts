// Mức độ hoài cổ
// Bài test đánh giá mức độ hoài niệm và gắn bó với quá khứ của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn thường nghĩ về quá khứ như thế nào?",
    options: [
      { text: "Rất hay nghĩ, quá khứ luôn đẹp hơn hiện tại", type: "A" },
      { text: "Đôi khi nhớ về những kỷ niệm đẹp", type: "B" },
      { text: "Thỉnh thoảng nhớ nhưng tập trung vào hiện tại", type: "C" },
      { text: "Hiếm khi, tôi hướng về tương lai", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn cảm thấy thế nào về những đồ vật cũ từ thời thơ ấu?",
    options: [
      { text: "Giữ gìn cẩn thận, không nỡ vứt đi", type: "A" },
      { text: "Giữ lại những thứ có ý nghĩa nhất", type: "B" },
      { text: "Giữ vài món làm kỷ niệm", type: "C" },
      { text: "Không giữ nhiều, dọn dẹp cho gọn", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi nghe một bài hát cũ, bạn cảm thấy thế nào?",
    options: [
      { text: "Xúc động mạnh, nhớ về kỷ niệm xưa", type: "A" },
      { text: "Vui vì được nhớ lại những ngày đẹp", type: "B" },
      { text: "Thích nghe nhưng không quá xúc động", type: "C" },
      { text: "Bình thường, chỉ là một bài hát", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn có thường xem lại ảnh cũ không?",
    options: [
      { text: "Rất thường xuyên, tôi thích sống lại quá khứ", type: "A" },
      { text: "Thỉnh thoảng, khi nhớ về ai đó", type: "B" },
      { text: "Hiếm khi, chỉ khi có dịp đặc biệt", type: "C" },
      { text: "Rất ít, tôi tập trung vào hiện tại", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn nghĩ gì về việc quay lại nơi mình từng sống?",
    options: [
      { text: "Rất muốn, để sống lại những kỷ niệm", type: "A" },
      { text: "Muốn ghé thăm xem nơi đó thay đổi thế nào", type: "B" },
      { text: "Nếu có dịp thì ghé, không thì thôi", type: "C" },
      { text: "Không quan tâm lắm, đã qua rồi", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn cảm thấy thế nào về những thay đổi trong cuộc sống?",
    options: [
      { text: "Khó chấp nhận, thích mọi thứ như cũ", type: "A" },
      { text: "Hơi nuối tiếc nhưng vẫn thích nghi", type: "B" },
      { text: "Chấp nhận vì đó là quy luật", type: "C" },
      { text: "Hào hứng với sự thay đổi", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn thích phong cách nào hơn?",
    options: [
      { text: "Phong cách cổ điển, vintage", type: "A" },
      { text: "Pha trộn giữa cổ điển và hiện đại", type: "B" },
      { text: "Hiện đại với chút hoài niệm", type: "C" },
      { text: "Hoàn toàn hiện đại và tối giản", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Khi gặp lại bạn cũ, bạn thường nói về gì?",
    options: [
      { text: "Ôn lại những kỷ niệm xưa suốt buổi", type: "A" },
      { text: "Nhắc lại kỷ niệm rồi nói về hiện tại", type: "B" },
      { text: "Chủ yếu hỏi thăm về hiện tại", type: "C" },
      { text: "Nói về tương lai và kế hoạch mới", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn có hay so sánh hiện tại với quá khứ không?",
    options: [
      { text: "Rất hay, và thường thấy quá khứ tốt hơn", type: "A" },
      { text: "Đôi khi, để rút ra bài học", type: "B" },
      { text: "Hiếm khi, mỗi thời điểm có cái hay riêng", type: "C" },
      { text: "Không, tôi sống ở hiện tại", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn nghĩ gì về các giá trị truyền thống?",
    options: [
      { text: "Rất quan trọng, cần phải gìn giữ", type: "A" },
      { text: "Quan trọng nhưng cần thích nghi", type: "B" },
      { text: "Giữ cái gì tốt, bỏ cái không phù hợp", type: "C" },
      { text: "Thời đại mới cần tư duy mới", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn có giữ những vật kỷ niệm từ mối quan hệ cũ không?",
    options: [
      { text: "Giữ tất cả, không thể vứt đi được", type: "A" },
      { text: "Giữ vài thứ có ý nghĩa", type: "B" },
      { text: "Giữ ít, để không bị vướng bận", type: "C" },
      { text: "Không giữ, qua rồi thì cho qua", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Khi nghĩ về tương lai, bạn thường?",
    options: [
      { text: "Lo lắng vì sợ không tốt bằng quá khứ", type: "A" },
      { text: "Hy vọng nhưng vẫn nhớ về quá khứ", type: "B" },
      { text: "Lạc quan và tập trung chuẩn bị", type: "C" },
      { text: "Hào hứng và mong chờ điều mới mẻ", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người Hoài Cổ Sâu Sắc",
    emoji: "📜",
    description: "Bạn là người có tâm hồn hoài cổ sâu sắc, luôn gắn bó với quá khứ và những kỷ niệm. Điều này khiến bạn trân trọng những giá trị xưa cũ nhưng đôi khi khó bước tiếp.",
    traits: ["Hoài niệm", "Trân trọng kỷ niệm", "Gắn bó với quá khứ", "Đa cảm"],
    strengths: ["Biết trân trọng", "Gìn giữ truyền thống", "Tình cảm sâu đậm"],
    weaknesses: ["Khó chấp nhận thay đổi", "Hay so sánh với quá khứ"],
    tips: ["Học cách sống ở hiện tại", "Mở lòng với những điều mới mẻ"],
  },
  B: {
    type: "B",
    title: "Người Hoài Cổ Cân Bằng",
    emoji: "🌅",
    description: "Bạn biết trân trọng quá khứ nhưng không để nó chi phối cuộc sống. Bạn giữ những kỷ niệm đẹp trong tim mà vẫn tiến về phía trước.",
    traits: ["Cân bằng", "Biết điều", "Trân trọng nhưng không níu kéo", "Ổn định"],
    strengths: ["Rút kinh nghiệm từ quá khứ", "Sống hài hòa", "Có chiều sâu tâm hồn"],
    weaknesses: ["Đôi khi quá nuối tiếc", "Hay so sánh"],
    tips: ["Tiếp tục duy trì sự cân bằng", "Tập trung nhiều hơn vào hiện tại"],
  },
  C: {
    type: "C",
    title: "Người Sống Ở Hiện Tại",
    emoji: "🌿",
    description: "Bạn tập trung chủ yếu vào hiện tại, biết nhớ về quá khứ nhưng không để nó ảnh hưởng quá nhiều. Bạn sống thực tế và luôn hướng về tương lai.",
    traits: ["Thực tế", "Tập trung hiện tại", "Không vướng bận", "Tiến bộ"],
    strengths: ["Dễ thích nghi", "Sống trong khoảnh khắc", "Không bị quá khứ ám ảnh"],
    weaknesses: ["Đôi khi thiếu chiều sâu cảm xúc", "Có thể quên những bài học xưa"],
    tips: ["Đôi khi nên dành thời gian nhớ về quá khứ", "Trân trọng những kỷ niệm đẹp"],
  },
  D: {
    type: "D",
    title: "Người Hướng Về Tương Lai",
    emoji: "🚀",
    description: "Bạn là người luôn nhìn về phía trước, ít quan tâm đến quá khứ. Bạn hào hứng với những điều mới mẻ và không để kỷ niệm cũ níu chân mình.",
    traits: ["Hướng tương lai", "Năng động", "Không níu kéo", "Đổi mới"],
    strengths: ["Luôn tiến về phía trước", "Dễ chấp nhận thay đổi", "Không bị gánh nặng quá khứ"],
    weaknesses: ["Có thể quên những giá trị truyền thống", "Thiếu kết nối với cội nguồn"],
    tips: ["Đôi khi nên dừng lại và nhìn lại", "Trân trọng những người đã đi qua cuộc đời bạn"],
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
