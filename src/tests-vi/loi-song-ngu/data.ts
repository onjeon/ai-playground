// Thói Quen Ngủ Của Bạn
// Khám phá tính cách qua cách bạn ngủ

export const questions = [
  {
    id: 1,
    question: "Bạn thường đi ngủ lúc mấy giờ?",
    options: [
      { text: "Trước 10 giờ tối, ngủ sớm dậy sớm", type: "A" },
      { text: "10-11 giờ tối, giờ bình thường", type: "B" },
      { text: "11 giờ - 1 giờ sáng, hơi khuya", type: "C" },
      { text: "Sau 1 giờ sáng, cú đêm chính hiệu", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thường làm gì trước khi ngủ?",
    options: [
      { text: "Đọc sách, thư giãn", type: "A" },
      { text: "Lướt điện thoại, xem mạng xã hội", type: "B" },
      { text: "Xem phim, series", type: "C" },
      { text: "Làm việc, học bài", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn cần bao lâu để ngủ được?",
    options: [
      { text: "Dưới 10 phút, ngủ ngay", type: "A" },
      { text: "10-30 phút, vừa phải", type: "B" },
      { text: "30 phút - 1 tiếng, khó ngủ", type: "C" },
      { text: "Hơn 1 tiếng, mất ngủ thường xuyên", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Buổi sáng, bạn thức dậy như thế nào?",
    options: [
      { text: "Tự dậy trước báo thức, tỉnh táo", type: "A" },
      { text: "Dậy đúng báo thức, ổn", type: "B" },
      { text: "Snooze vài lần mới dậy được", type: "C" },
      { text: "Ngủ quên, hay trễ giờ", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn ngủ bao nhiêu tiếng mỗi đêm?",
    options: [
      { text: "7-8 tiếng, đủ giấc", type: "A" },
      { text: "5-6 tiếng, tạm đủ", type: "B" },
      { text: "Dưới 5 tiếng, thiếu ngủ", type: "C" },
      { text: "Không đều, lúc nhiều lúc ít", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn có hay ngủ trưa không?",
    options: [
      { text: "Luôn luôn, không ngủ trưa không chịu được", type: "A" },
      { text: "Thỉnh thoảng, khi có thời gian", type: "B" },
      { text: "Hiếm khi, không quen ngủ trưa", type: "C" },
      { text: "Không bao giờ, ngủ trưa sẽ mất ngủ đêm", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Phòng ngủ của bạn như thế nào?",
    options: [
      { text: "Tối hoàn toàn, yên tĩnh", type: "A" },
      { text: "Có đèn ngủ nhỏ", type: "B" },
      { text: "Bật TV/nhạc để dễ ngủ", type: "C" },
      { text: "Không quan tâm, ngủ được ở đâu cũng được", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Cuối tuần, giờ ngủ của bạn?",
    options: [
      { text: "Vẫn như ngày thường", type: "A" },
      { text: "Ngủ trễ hơn 1-2 tiếng", type: "B" },
      { text: "Thức khuya hơn nhiều", type: "C" },
      { text: "Ngủ nướng đến trưa", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn có hay mơ khi ngủ không?",
    options: [
      { text: "Hay mơ và nhớ giấc mơ", type: "A" },
      { text: "Thỉnh thoảng mơ", type: "B" },
      { text: "Hiếm khi mơ hoặc không nhớ", type: "C" },
      { text: "Hay gặp ác mộng", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Khi không ngủ được, bạn thường?",
    options: [
      { text: "Đếm cừu, thở sâu, cố ngủ", type: "A" },
      { text: "Lướt điện thoại đến khi buồn ngủ", type: "B" },
      { text: "Dậy làm gì đó, không ép ngủ", type: "C" },
      { text: "Uống thuốc ngủ hoặc trà thảo mộc", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người Ngủ Lý Tưởng",
    emoji: "😴",
    description: "Bạn có thói quen ngủ lành mạnh! Ngủ sớm, dậy sớm, đủ giấc. Bạn hiểu tầm quan trọng của giấc ngủ và chăm sóc nó như ưu tiên hàng đầu.",
    traits: ["Kỷ luật", "Healthy", "Tỉnh táo", "Có routine"],
    strengths: ["Sức khỏe tốt", "Năng lượng đầy đủ", "Làm việc hiệu quả ban ngày"],
    weaknesses: ["Khó thức khuya", "Có thể bỏ lỡ hoạt động đêm"],
    tips: ["Tiếp tục thói quen tốt", "Linh hoạt hơn khi cần"],
  },
  B: {
    type: "B",
    title: "Người Ngủ Bình Thường",
    emoji: "🌙",
    description: "Bạn có thói quen ngủ ổn! Không quá sớm, không quá khuya. Bạn cân bằng được giữa công việc, giải trí và nghỉ ngơi.",
    traits: ["Cân bằng", "Bình thường", "Linh hoạt", "Ổn định"],
    strengths: ["Dễ thích nghi", "Không bị lệ thuộc", "Sức khỏe ổn"],
    weaknesses: ["Đôi khi thiếu ngủ", "Có thể cải thiện chất lượng ngủ"],
    tips: ["Cố gắng ngủ đủ 7-8 tiếng", "Hạn chế điện thoại trước ngủ"],
  },
  C: {
    type: "C",
    title: "Cú Đêm",
    emoji: "🦉",
    description: "Bạn là cú đêm! Đêm khuya là thời gian bạn tỉnh táo và productive nhất. Bạn khó ngủ sớm và thường làm việc/giải trí vào ban đêm.",
    traits: ["Cú đêm", "Sáng tạo ban đêm", "Khó dậy sớm", "Night owl"],
    strengths: ["Productive ban đêm", "Yên tĩnh để tập trung", "Linh hoạt giờ giấc"],
    weaknesses: ["Thiếu ngủ", "Khó dậy sớm", "Ảnh hưởng sức khỏe"],
    tips: ["Cố gắng ngủ sớm hơn 30 phút mỗi tuần", "Không uống cafe sau 6 giờ chiều"],
  },
  D: {
    type: "D",
    title: "Người Ngủ Bất Ổn",
    emoji: "😵",
    description: "Giấc ngủ của bạn khá bất ổn! Có đêm ngủ nhiều, có đêm thức trắng. Bạn cần cải thiện thói quen ngủ để có sức khỏe tốt hơn.",
    traits: ["Không đều", "Thiếu ngủ", "Mất ngủ", "Không có routine"],
    strengths: ["Linh hoạt", "Thích nghi được nhiều tình huống"],
    weaknesses: ["Sức khỏe bị ảnh hưởng", "Mệt mỏi", "Khó tập trung"],
    tips: ["Tạo routine ngủ cố định", "Tránh điện thoại 1 tiếng trước ngủ", "Đi khám nếu mất ngủ kéo dài"],
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
