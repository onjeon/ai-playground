// Chỉ Số Hạnh Phúc
// Khám phá mức độ hạnh phúc và cách bạn tìm kiếm niềm vui trong cuộc sống

export const questions = [
  {
    id: 1,
    question: "Sáng thức dậy, điều đầu tiên bạn nghĩ đến là gì?",
    options: [
      { text: "Háo hức với những điều sẽ xảy ra hôm nay", type: "A" },
      { text: "Lên kế hoạch cho ngày mới", type: "B" },
      { text: "Ước gì được ngủ thêm một chút", type: "C" },
      { text: "Lo lắng về những việc phải làm", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Khi ăn phở buổi sáng, bạn cảm thấy thế nào?",
    options: [
      { text: "Hạnh phúc tận hưởng từng miếng", type: "A" },
      { text: "Ăn nhanh để còn đi làm", type: "B" },
      { text: "Bình thường, chỉ là bữa sáng", type: "C" },
      { text: "Không có tâm trạng thưởng thức", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Cuối tuần bạn thường làm gì?",
    options: [
      { text: "Đi chơi với gia đình, bạn bè", type: "A" },
      { text: "Làm những việc mình yêu thích", type: "B" },
      { text: "Ngủ bù và xem phim", type: "C" },
      { text: "Vẫn phải làm việc hoặc lo lắng", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi nhìn lại 1 năm qua, bạn thấy thế nào?",
    options: [
      { text: "Biết ơn vì nhiều điều tốt đẹp", type: "A" },
      { text: "Đã cố gắng và có tiến bộ", type: "B" },
      { text: "Bình thường, không có gì đặc biệt", type: "C" },
      { text: "Nhiều thất vọng và tiếc nuối", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Mối quan hệ với người thân của bạn thế nào?",
    options: [
      { text: "Gắn bó, thường xuyên chia sẻ", type: "A" },
      { text: "Tốt, hay gọi điện hỏi thăm", type: "B" },
      { text: "Bình thường, thi thoảng liên lạc", type: "C" },
      { text: "Xa cách, ít khi nói chuyện", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi gặp khó khăn, bạn phản ứng thế nào?",
    options: [
      { text: "Tìm cách giải quyết tích cực", type: "A" },
      { text: "Bình tĩnh suy nghĩ đối mặt", type: "B" },
      { text: "Lo lắng nhưng rồi cũng vượt qua", type: "C" },
      { text: "Stress và mất ngủ nhiều ngày", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn có thường xuyên cười không?",
    options: [
      { text: "Rất nhiều, cười cả ngày", type: "A" },
      { text: "Khá thường xuyên", type: "B" },
      { text: "Thỉnh thoảng khi có chuyện vui", type: "C" },
      { text: "Hiếm khi, không có gì đáng cười", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Công việc hiện tại mang lại cho bạn điều gì?",
    options: [
      { text: "Niềm vui và ý nghĩa", type: "A" },
      { text: "Thu nhập ổn định và kinh nghiệm", type: "B" },
      { text: "Chỉ là để kiếm sống", type: "C" },
      { text: "Áp lực và mệt mỏi", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn có hay so sánh mình với người khác không?",
    options: [
      { text: "Không, tập trung vào bản thân", type: "A" },
      { text: "Đôi khi để học hỏi", type: "B" },
      { text: "Hay so sánh và thấy thiếu tự tin", type: "C" },
      { text: "Luôn thấy mình thua kém", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Điều gì khiến bạn hạnh phúc nhất?",
    options: [
      { text: "Được ở bên người thương yêu", type: "A" },
      { text: "Đạt được mục tiêu đề ra", type: "B" },
      { text: "Có tiền và vật chất đầy đủ", type: "C" },
      { text: "Không biết, lâu rồi không thấy hạnh phúc", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Chỉ Số Hạnh Phúc Cao",
    emoji: "😄",
    description: "Bạn là người có chỉ số hạnh phúc rất cao! Bạn biết cách tận hưởng cuộc sống, trân trọng những điều nhỏ bé và lan tỏa năng lượng tích cực đến mọi người xung quanh. Bạn sống có ý nghĩa và biết ơn.",
    traits: ["Lạc quan", "Biết ơn", "Tích cực", "Hài hòa"],
    strengths: ["Lan tỏa niềm vui", "Vượt qua khó khăn dễ dàng", "Có nhiều mối quan hệ tốt"],
    weaknesses: ["Đôi khi quá lạc quan", "Có thể bỏ qua vấn đề thực tế"],
    tips: ["Tiếp tục duy trì lối sống tích cực", "Chia sẻ bí quyết hạnh phúc với người khác"],
  },
  B: {
    type: "B",
    title: "Chỉ Số Hạnh Phúc Khá Tốt",
    emoji: "🙂",
    description: "Bạn có cuộc sống khá cân bằng và hạnh phúc. Bạn biết cách tự tạo niềm vui, có mục tiêu rõ ràng và đang từng bước xây dựng cuộc sống như mong muốn. Bạn thực tế nhưng vẫn giữ được sự lạc quan.",
    traits: ["Cân bằng", "Thực tế", "Có mục tiêu", "Bình tĩnh"],
    strengths: ["Quản lý cảm xúc tốt", "Có kế hoạch sống", "Độc lập và tự chủ"],
    weaknesses: ["Đôi khi quá lý trí", "Ít cho phép mình thư giãn"],
    tips: ["Dành thêm thời gian cho bản thân", "Cho phép mình hưởng thụ nhiều hơn"],
  },
  C: {
    type: "C",
    title: "Chỉ Số Hạnh Phúc Trung Bình",
    emoji: "😐",
    description: "Cuộc sống của bạn đang ở mức ổn nhưng chưa thực sự hạnh phúc. Bạn thường sống theo quán tính, thiếu những khoảnh khắc thực sự vui vẻ. Đã đến lúc thay đổi để tìm lại niềm vui sống.",
    traits: ["Bình thường", "Thiếu động lực", "Thụ động", "Quen với sự nhàm chán"],
    strengths: ["Ổn định", "Không gây xung đột", "Dễ thích nghi"],
    weaknesses: ["Thiếu đam mê", "Dễ buông xuôi", "Ít kết nối sâu"],
    tips: ["Thử những điều mới", "Kết nối nhiều hơn với người thân", "Tìm sở thích mới"],
  },
  D: {
    type: "D",
    title: "Chỉ Số Hạnh Phúc Cần Cải Thiện",
    emoji: "😔",
    description: "Bạn đang trải qua giai đoạn khó khăn và cần được quan tâm. Cuộc sống có nhiều áp lực khiến bạn mệt mỏi và thiếu niềm vui. Hãy nhớ rằng mọi thứ đều có thể thay đổi và bạn xứng đáng được hạnh phúc.",
    traits: ["Stress", "Lo âu", "Mệt mỏi", "Cô đơn"],
    strengths: ["Kiên cường", "Chịu đựng", "Có tiềm năng thay đổi"],
    weaknesses: ["Dễ suy nghĩ tiêu cực", "Thiếu kết nối xã hội", "Khó tìm niềm vui"],
    tips: ["Tìm người để chia sẻ", "Tập thể dục mỗi ngày", "Có thể cân nhắc gặp chuyên gia tâm lý"],
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
