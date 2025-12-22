// Phong cách đêm khuya
// Khám phá bạn là người đêm như thế nào

export const questions = [
  {
    id: 1,
    question: "Bạn thường đi ngủ lúc mấy giờ?",
    options: [
      { text: "Trước 10 giờ tối", type: "A" },
      { text: "Khoảng 11 giờ - 12 giờ đêm", type: "B" },
      { text: "1-2 giờ sáng", type: "C" },
      { text: "3-4 giờ sáng hoặc muộn hơn", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Đêm khuya, bạn thường làm gì?",
    options: [
      { text: "Tôi đã ngủ rồi", type: "A" },
      { text: "Xem phim, đọc sách", type: "B" },
      { text: "Lướt phone, social media", type: "C" },
      { text: "Làm việc, sáng tạo, học hành", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn cảm thấy thế nào vào ban đêm?",
    options: [
      { text: "Mệt mỏi, chỉ muốn ngủ", type: "A" },
      { text: "Bình thường", type: "B" },
      { text: "Tỉnh táo hơn ban ngày", type: "C" },
      { text: "Đây là lúc tôi năng suất nhất", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn có hay ăn đêm không?",
    options: [
      { text: "Không bao giờ, ngủ sớm mà", type: "A" },
      { text: "Đôi khi, khi đói", type: "B" },
      { text: "Hay ăn vặt khi thức khuya", type: "C" },
      { text: "Ăn đêm là một phần cuộc sống", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Sáng hôm sau thức khuya, bạn thế nào?",
    options: [
      { text: "Tôi không thức khuya", type: "A" },
      { text: "Hơi mệt nhưng vẫn dậy được", type: "B" },
      { text: "Rất khó dậy, cần nhiều cà phê", type: "C" },
      { text: "Ngủ bù đến trưa", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn thức khuya vì lý do gì?",
    options: [
      { text: "Tôi không thức khuya", type: "A" },
      { text: "Có việc cần làm, deadline", type: "B" },
      { text: "Không ngủ được, mất ngủ", type: "C" },
      { text: "Thích không gian yên tĩnh ban đêm", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Đêm khuya, bạn hay nghĩ về điều gì?",
    options: [
      { text: "Không nghĩ gì, đang ngủ", type: "A" },
      { text: "Công việc, kế hoạch ngày mai", type: "B" },
      { text: "Cuộc sống, quá khứ, tương lai", type: "C" },
      { text: "Ý tưởng sáng tạo, triết lý", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn có hay nhắn tin với ai đêm khuya không?",
    options: [
      { text: "Không, mọi người đều ngủ", type: "A" },
      { text: "Đôi khi, nếu có việc gấp", type: "B" },
      { text: "Có, với bạn bè cũng thức khuya", type: "C" },
      { text: "Hay nhắn, tâm sự đêm khuya", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Caffeine và bạn vào buổi tối?",
    options: [
      { text: "Không dám uống, sợ mất ngủ", type: "A" },
      { text: "Tránh uống sau 6 giờ tối", type: "B" },
      { text: "Uống bình thường, không ảnh hưởng", type: "C" },
      { text: "Uống để thức khuya làm việc", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Nếu ngày mai được nghỉ, bạn sẽ?",
    options: [
      { text: "Vẫn ngủ sớm như bình thường", type: "A" },
      { text: "Thức muộn hơn một chút", type: "B" },
      { text: "Thức đến 2-3 giờ sáng", type: "C" },
      { text: "Thức trắng đêm, ngủ ngày", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn nghĩ gì về việc thức khuya?",
    options: [
      { text: "Không tốt cho sức khỏe", type: "A" },
      { text: "Đôi khi cần thiết", type: "B" },
      { text: "Thói quen khó bỏ", type: "C" },
      { text: "Yêu thích, đây là tôi", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Âm thanh nào bạn thường nghe vào đêm khuya?",
    options: [
      { text: "Tiếng ngáy của mình", type: "A" },
      { text: "Im lặng, yên bình", type: "B" },
      { text: "Nhạc, podcast, video", type: "C" },
      { text: "Tiếng bàn phím, sáng tạo", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người ngủ sớm dậy sớm",
    emoji: "🌅",
    description: "Bạn là người của buổi sáng! Ngủ sớm, dậy sớm, đồng hồ sinh học của bạn rất khỏe mạnh. Bạn hiểu rằng giấc ngủ là nền tảng của sức khỏe.",
    traits: ["Kỷ luật", "Khỏe mạnh", "Buổi sáng", "Có giờ giấc"],
    strengths: ["Sức khỏe tốt", "Năng suất buổi sáng", "Tinh thần tỉnh táo"],
    weaknesses: ["Khó tham gia hoạt động đêm", "Có thể lỡ những moment vui"],
    tips: ["Thỉnh thoảng thử thức khuya với bạn bè", "Linh hoạt hơn khi cần"],
  },
  B: {
    type: "B",
    title: "Người đêm vừa phải",
    emoji: "🌙",
    description: "Bạn thức khuya khi cần nhưng vẫn cố gắng giữ giờ giấc hợp lý. Biết cân bằng giữa đời sống đêm và sức khỏe. Đây là cách tiếp cận thực tế.",
    traits: ["Cân bằng", "Linh hoạt", "Thực tế", "Có kỷ luật"],
    strengths: ["Cân bằng tốt", "Thích nghi được", "Không extreme"],
    weaknesses: ["Đôi khi mệt khi phải thức khuya", "Cần thời gian phục hồi"],
    tips: ["Duy trì thói quen tốt", "Nghe cơ thể khi mệt"],
  },
  C: {
    type: "C",
    title: "Cú đêm thường xuyên",
    emoji: "🦉",
    description: "Đêm là thời gian bạn cảm thấy thoải mái nhất. Social media, phim ảnh, suy nghĩ - đêm mang đến cho bạn không gian riêng tư và yên bình.",
    traits: ["Thích đêm", "Tư duy nhiều", "Yêu yên tĩnh", "Introvert đêm"],
    strengths: ["Có thời gian riêng", "Sáng tạo ban đêm", "Không bị làm phiền"],
    weaknesses: ["Mệt mỏi ban ngày", "Khó duy trì sức khỏe"],
    tips: ["Cố gắng ngủ sớm hơn", "Hạn chế màn hình trước khi ngủ"],
  },
  D: {
    type: "D",
    title: "Người của bóng đêm",
    emoji: "✨",
    description: "Đêm khuya là lúc bạn sống thật nhất. Sáng tạo, làm việc, suy ngẫm - tất cả đều tốt hơn khi thế giới đã ngủ say. Bạn là một cú đêm thực thụ.",
    traits: ["Sáng tạo đêm", "Năng suất khuya", "Triết lý", "Độc lập"],
    strengths: ["Sáng tạo cao", "Không bị gián đoạn", "Tư duy sâu"],
    weaknesses: ["Sức khỏe có thể bị ảnh hưởng", "Lệch giờ với xã hội"],
    tips: ["Chú ý sức khỏe", "Có thời gian tiếp xúc ánh sáng", "Giữ đồng hồ sinh học ổn định"],
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
