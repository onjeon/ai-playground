// Chế độ ngủ nghỉ
// Bài test đánh giá thói quen và chất lượng giấc ngủ của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn thường ngủ lúc mấy giờ?",
    options: [
      { text: "Trước 10 giờ tối", type: "A" },
      { text: "10-11 giờ tối", type: "B" },
      { text: "11-12 giờ đêm", type: "C" },
      { text: "Sau 12 giờ đêm", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn ngủ được bao nhiêu tiếng mỗi đêm?",
    options: [
      { text: "7-8 tiếng", type: "A" },
      { text: "6-7 tiếng", type: "B" },
      { text: "5-6 tiếng", type: "C" },
      { text: "Dưới 5 tiếng", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn thức dậy như thế nào?",
    options: [
      { text: "Tự nhiên, không cần báo thức", type: "A" },
      { text: "Với 1 chuông báo thức", type: "B" },
      { text: "Cần nhiều chuông báo thức", type: "C" },
      { text: "Rất khó dậy, hay snooze", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi thức dậy, bạn cảm thấy thế nào?",
    options: [
      { text: "Tỉnh táo và tràn đầy năng lượng", type: "A" },
      { text: "Khá tỉnh táo", type: "B" },
      { text: "Mệt mỏi và uể oải", type: "C" },
      { text: "Rất mệt, muốn ngủ tiếp", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn có sử dụng điện thoại trước khi ngủ không?",
    options: [
      { text: "Không, tắt điện thoại 1 tiếng trước", type: "A" },
      { text: "Ít sử dụng, dưới 15 phút", type: "B" },
      { text: "Dùng 30 phút đến 1 tiếng", type: "C" },
      { text: "Dùng cho đến khi ngủ thiếp đi", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn có khó ngủ không?",
    options: [
      { text: "Không, ngủ ngay khi lên giường", type: "A" },
      { text: "Đôi khi, mất 10-20 phút", type: "B" },
      { text: "Thường mất 30 phút đến 1 tiếng", type: "C" },
      { text: "Rất khó, hay mất ngủ", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn có thức giấc giữa đêm không?",
    options: [
      { text: "Hiếm khi hoặc không bao giờ", type: "A" },
      { text: "Đôi khi, nhưng ngủ lại ngay", type: "B" },
      { text: "Thường xuyên thức giấc", type: "C" },
      { text: "Hay thức giấc và khó ngủ lại", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Giờ đi ngủ và thức dậy của bạn có đều đặn không?",
    options: [
      { text: "Rất đều đặn, cả ngày thường và cuối tuần", type: "A" },
      { text: "Khá đều đặn trong tuần", type: "B" },
      { text: "Không đều, cuối tuần ngủ bù", type: "C" },
      { text: "Rất thất thường", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn có ngủ trưa không?",
    options: [
      { text: "Có, 15-30 phút mỗi ngày", type: "A" },
      { text: "Đôi khi khi có thể", type: "B" },
      { text: "Hiếm khi có thời gian", type: "C" },
      { text: "Không, hoặc ngủ quá dài", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Không gian ngủ của bạn như thế nào?",
    options: [
      { text: "Tối, yên tĩnh, mát mẻ", type: "A" },
      { text: "Khá tốt, có rèm che", type: "B" },
      { text: "Có ánh sáng và tiếng ồn", type: "C" },
      { text: "Không tốt, ồn ào và sáng", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn có uống cà phê/trà vào buổi chiều tối không?",
    options: [
      { text: "Không bao giờ sau 2 giờ chiều", type: "A" },
      { text: "Đôi khi, nhưng hạn chế", type: "B" },
      { text: "Thường xuyên", type: "C" },
      { text: "Uống cà phê cả ngày", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bạn đánh giá chất lượng giấc ngủ của mình thế nào?",
    options: [
      { text: "Rất tốt, ngủ ngon giấc", type: "A" },
      { text: "Khá tốt", type: "B" },
      { text: "Cần cải thiện", type: "C" },
      { text: "Rất kém", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Giấc Ngủ Hoàn Hảo",
    emoji: "😴",
    description: "Bạn có thói quen ngủ nghỉ rất tốt và khoa học. Giấc ngủ chất lượng giúp bạn luôn tràn đầy năng lượng và khỏe mạnh.",
    traits: ["Ngủ đủ giấc", "Kỷ luật", "Khỏe mạnh", "Năng lượng tốt"],
    strengths: ["Sức khỏe tốt", "Tinh thần minh mẫn", "Năng suất cao"],
    weaknesses: ["Có thể khó thích nghi khi lịch trình thay đổi"],
    tips: ["Tiếp tục duy trì thói quen tốt này", "Chia sẻ bí quyết cho người khác"],
  },
  B: {
    type: "B",
    title: "Giấc Ngủ Khá Tốt",
    emoji: "🌙",
    description: "Bạn có giấc ngủ khá ổn, với vài điểm nhỏ cần cải thiện. Một chút điều chỉnh sẽ giúp bạn có giấc ngủ hoàn hảo hơn.",
    traits: ["Ngủ khá tốt", "Cân bằng", "Có ý thức", "Ổn định"],
    strengths: ["Giấc ngủ ổn định", "Năng lượng đủ dùng"],
    weaknesses: ["Có thể cải thiện thêm", "Đôi khi không nhất quán"],
    tips: ["Thử đi ngủ sớm hơn một chút", "Giảm sử dụng điện thoại trước khi ngủ"],
  },
  C: {
    type: "C",
    title: "Giấc Ngủ Cần Cải Thiện",
    emoji: "😪",
    description: "Giấc ngủ của bạn chưa tốt và ảnh hưởng đến sức khỏe hàng ngày. Bạn cần thay đổi thói quen để có giấc ngủ chất lượng hơn.",
    traits: ["Thiếu ngủ", "Không đều đặn", "Mệt mỏi", "Cần thay đổi"],
    strengths: ["Nhận thức được vấn đề"],
    weaknesses: ["Mệt mỏi ban ngày", "Khó tập trung", "Sức khỏe bị ảnh hưởng"],
    tips: ["Đặt giờ đi ngủ cố định", "Tắt điện thoại 30 phút trước khi ngủ"],
  },
  D: {
    type: "D",
    title: "Giấc Ngủ Rất Kém",
    emoji: "🌚",
    description: "Bạn đang có vấn đề nghiêm trọng với giấc ngủ. Điều này ảnh hưởng rất lớn đến sức khỏe thể chất và tinh thần của bạn.",
    traits: ["Mất ngủ", "Thức khuya", "Kiệt sức", "Cần can thiệp"],
    strengths: ["Có thể thay đổi được"],
    weaknesses: ["Sức khỏe bị ảnh hưởng nghiêm trọng", "Năng suất thấp", "Tinh thần không tốt"],
    tips: ["Cần thay đổi ngay thói quen", "Có thể cần tư vấn bác sĩ"],
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
