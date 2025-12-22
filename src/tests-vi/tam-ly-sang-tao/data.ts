// Mức độ sáng tạo
// Đánh giá mức độ sáng tạo và khả năng tư duy đổi mới của bạn

export const questions = [
  {
    id: 1,
    question: "Khi gặp vấn đề, bạn thường?",
    options: [
      { text: "Nghĩ ra nhiều cách giải quyết khác nhau", type: "A" },
      { text: "Tìm cách mới nếu cách cũ không hiệu quả", type: "B" },
      { text: "Làm theo cách đã biết", type: "C" },
      { text: "Hỏi người khác cách làm", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn có hay tưởng tượng không?",
    options: [
      { text: "Luôn luôn, đầu óc đầy ý tưởng", type: "A" },
      { text: "Khá nhiều", type: "B" },
      { text: "Đôi khi, không thường xuyên", type: "C" },
      { text: "Hiếm khi, thích thực tế", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi làm việc gì đó, bạn thích?",
    options: [
      { text: "Thử cách mới, thử nghiệm", type: "A" },
      { text: "Cải tiến từ cách cũ", type: "B" },
      { text: "Làm theo hướng dẫn có sẵn", type: "C" },
      { text: "Làm theo cách người khác làm", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn có hay viết, vẽ, sáng tác không?",
    options: [
      { text: "Thường xuyên, đó là đam mê", type: "A" },
      { text: "Đôi khi, khi có cảm hứng", type: "B" },
      { text: "Hiếm khi", type: "C" },
      { text: "Không bao giờ, không có khiếu", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi brainstorm ý tưởng, bạn?",
    options: [
      { text: "Đưa ra rất nhiều ý tưởng, cả điên rồ", type: "A" },
      { text: "Đóng góp một số ý tưởng hay", type: "B" },
      { text: "Nghe và phát triển ý tưởng người khác", type: "C" },
      { text: "Không nghĩ ra gì", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn có hay nhìn mọi thứ từ góc độ khác không?",
    options: [
      { text: "Luôn luôn, thấy điều người khác không thấy", type: "A" },
      { text: "Khá thường xuyên", type: "B" },
      { text: "Đôi khi", type: "C" },
      { text: "Hiếm khi, nhìn như bình thường", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Khi được tự do sáng tạo, bạn cảm thấy?",
    options: [
      { text: "Hào hứng, thoải mái nhất", type: "A" },
      { text: "Vui, có động lực", type: "B" },
      { text: "Bối rối, không biết làm gì", type: "C" },
      { text: "Lo lắng, muốn có hướng dẫn", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn có hay tò mò về mọi thứ không?",
    options: [
      { text: "Rất tò mò, luôn muốn tìm hiểu", type: "A" },
      { text: "Khá tò mò", type: "B" },
      { text: "Với những gì quan tâm thôi", type: "C" },
      { text: "Không tò mò lắm", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi thấy đồ vật bình thường, bạn có nghĩ đến cách sử dụng khác không?",
    options: [
      { text: "Luôn luôn, thấy tiềm năng mới", type: "A" },
      { text: "Đôi khi", type: "B" },
      { text: "Hiếm khi", type: "C" },
      { text: "Không, dùng đúng mục đích", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn thích loại công việc nào?",
    options: [
      { text: "Sáng tạo, tự do, đổi mới", type: "A" },
      { text: "Có không gian sáng tạo trong khuôn khổ", type: "B" },
      { text: "Có quy trình rõ ràng", type: "C" },
      { text: "Lặp lại, ổn định, không đổi", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn có hay mơ mộng không?",
    options: [
      { text: "Rất hay, đầu óc bay bổng", type: "A" },
      { text: "Đôi khi", type: "B" },
      { text: "Hiếm khi, tập trung thực tế", type: "C" },
      { text: "Không bao giờ", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bạn đánh giá mức độ sáng tạo của mình?",
    options: [
      { text: "Rất sáng tạo, đầy ý tưởng", type: "A" },
      { text: "Khá sáng tạo", type: "B" },
      { text: "Trung bình, không quá nổi bật", type: "C" },
      { text: "Không sáng tạo, thích làm theo", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Nghệ sĩ sáng tạo",
    emoji: "🎨",
    description: "Bạn là người cực kỳ sáng tạo! Đầu óc bạn luôn đầy ý tưởng mới, thích thử nghiệm và nhìn mọi thứ từ góc độ độc đáo. Bạn sinh ra để đổi mới!",
    traits: ["Sáng tạo", "Đổi mới", "Tưởng tượng", "Độc đáo"],
    strengths: ["Giải quyết vấn đề sáng tạo", "Nhiều ý tưởng", "Thích nghi tốt"],
    weaknesses: ["Đôi khi quá bay bổng", "Khó theo quy trình cứng"],
    tips: ["Học cách biến ý tưởng thành hành động", "Cân bằng sáng tạo với thực tế"],
  },
  B: {
    type: "B",
    title: "Người sáng tạo ứng dụng",
    emoji: "💡",
    description: "Bạn có mức độ sáng tạo tốt và biết cách áp dụng vào thực tế. Bạn có thể cải tiến và đổi mới nhưng vẫn giữ chân trên mặt đất.",
    traits: ["Sáng tạo thực tế", "Cải tiến", "Linh hoạt", "Ứng dụng"],
    strengths: ["Biến ý tưởng thành thực tế", "Cải tiến hiệu quả", "Cân bằng"],
    weaknesses: ["Có thể sáng tạo hơn", "Đôi khi giới hạn bản thân"],
    tips: ["Thử những ý tưởng điên rồ hơn", "Cho phép mình thất bại để học"],
  },
  C: {
    type: "C",
    title: "Người thực thi",
    emoji: "📋",
    description: "Bạn là người thực tế và thích làm theo quy trình. Sáng tạo không phải thế mạnh nhưng bạn xuất sắc trong việc thực hiện và hoàn thành công việc.",
    traits: ["Thực tế", "Quy củ", "Đáng tin cậy", "Có tổ chức"],
    strengths: ["Làm việc hiệu quả", "Không mạo hiểm", "Đáng tin cậy"],
    weaknesses: ["Ít ý tưởng mới", "Khó trong môi trường đổi mới"],
    tips: ["Thử brainstorm mà không phán xét", "Khám phá sở thích sáng tạo mới"],
  },
  D: {
    type: "D",
    title: "Người theo truyền thống",
    emoji: "📚",
    description: "Bạn thích sự ổn định và làm theo cách đã được chứng minh. Sáng tạo không phải ưu tiên của bạn nhưng điều này không có gì xấu.",
    traits: ["Truyền thống", "Ổn định", "Theo dõi", "Đáng tin cậy"],
    strengths: ["Tuân thủ quy trình", "Ổn định", "Không gây bất ngờ"],
    weaknesses: ["Khó thích nghi với đổi mới", "Ít đóng góp ý tưởng"],
    tips: ["Thử một hoạt động sáng tạo mới", "Bạn có thể sáng tạo hơn mình nghĩ"],
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
