// Cách Bạn Nghỉ Ngơi
// Khám phá tính cách qua cách bạn tận hưởng ngày nghỉ

export const questions = [
  {
    id: 1,
    question: "Ngày nghỉ, bạn thức dậy lúc mấy giờ?",
    options: [
      { text: "Vẫn dậy sớm như ngày thường", type: "A" },
      { text: "Ngủ nướng thêm 1-2 tiếng", type: "B" },
      { text: "Ngủ đến trưa mới dậy", type: "C" },
      { text: "Tùy, có khi dậy sớm có khi ngủ nướng", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thường làm gì vào ngày nghỉ?",
    options: [
      { text: "Đi chơi, khám phá địa điểm mới", type: "A" },
      { text: "Ở nhà xem phim, đọc sách", type: "B" },
      { text: "Gặp gỡ bạn bè, cafe tám chuyện", type: "C" },
      { text: "Dọn dẹp, làm việc nhà", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Ăn sáng ngày nghỉ của bạn?",
    options: [
      { text: "Đi ăn ngoài, phở hoặc bún", type: "A" },
      { text: "Tự nấu, chậm rãi thưởng thức", type: "B" },
      { text: "Skip luôn, ăn brunch thay", type: "C" },
      { text: "Đặt ship về nhà, tiện lợi", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn có hay đi chơi xa vào ngày nghỉ không?",
    options: [
      { text: "Thường xuyên, thích road trip", type: "A" },
      { text: "Thỉnh thoảng, khi có dịp đặc biệt", type: "B" },
      { text: "Hiếm khi, thích ở gần nhà", type: "C" },
      { text: "Không, ngày nghỉ là để nghỉ ngơi", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Chiều thứ 7, bạn thường?",
    options: [
      { text: "Ra quán cafe, làm việc hoặc đọc sách", type: "A" },
      { text: "Đi shopping, lượn mall", type: "B" },
      { text: "Ở nhà chill, xem Netflix", type: "C" },
      { text: "Đi gym hoặc chơi thể thao", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Tối thứ 7, kế hoạch của bạn?",
    options: [
      { text: "Đi bar/club, quẩy với bạn bè", type: "A" },
      { text: "Đi ăn tối ở nhà hàng ngon", type: "B" },
      { text: "Movie night tại nhà", type: "C" },
      { text: "Ngủ sớm, nạp năng lượng", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Chủ nhật của bạn như thế nào?",
    options: [
      { text: "Nghỉ ngơi hoàn toàn, recharge", type: "A" },
      { text: "Làm việc nhà, chuẩn bị tuần mới", type: "B" },
      { text: "Gặp gia đình, ăn cơm chung", type: "C" },
      { text: "Tiếp tục đi chơi, tận hưởng", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn có hay làm việc vào ngày nghỉ không?",
    options: [
      { text: "Không bao giờ, work-life balance", type: "A" },
      { text: "Thỉnh thoảng, nếu việc gấp", type: "B" },
      { text: "Hay check email, khó tách rời", type: "C" },
      { text: "Thường xuyên, nghỉ không quen", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Cuối ngày nghỉ, bạn cảm thấy?",
    options: [
      { text: "Thoải mái, sẵn sàng cho tuần mới", type: "A" },
      { text: "Tiếc nuối, muốn nghỉ thêm", type: "B" },
      { text: "Lo lắng về công việc ngày mai", type: "C" },
      { text: "Mệt mỏi vì chơi quá nhiều", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Định nghĩa ngày nghỉ lý tưởng của bạn?",
    options: [
      { text: "Đi du lịch, khám phá mới", type: "A" },
      { text: "Ở nhà chill, không làm gì cả", type: "B" },
      { text: "Quality time với người thân", type: "C" },
      { text: "Hoàn thành việc cá nhân, productive", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Dân Phượt Ngày Nghỉ",
    emoji: "🏍️",
    description: "Ngày nghỉ là để đi chơi! Bạn không thể ở nhà được, phải ra ngoài khám phá. Road trip, cafe hopping, đi chơi xa... bạn tận dụng mọi cơ hội để trải nghiệm.",
    traits: ["Năng động", "Thích khám phá", "Không thể ở yên", "Adventurous"],
    strengths: ["Nhiều trải nghiệm", "Cuộc sống phong phú", "Không bỏ lỡ cơ hội"],
    weaknesses: ["Có thể mệt khi vào tuần mới", "Tốn kém", "Ít thời gian nghỉ ngơi thật sự"],
    tips: ["Dành 1 ngày nghỉ ngơi thật sự", "Cân bằng giữa đi chơi và nghỉ"],
  },
  B: {
    type: "B",
    title: "Homebody Hạnh Phúc",
    emoji: "🏠",
    description: "Ngày nghỉ là để ở nhà chill! Bạn thích không gian riêng tư, xem phim, đọc sách, nấu ăn... Nhà là nơi bạn recharge năng lượng tốt nhất.",
    traits: ["Introvert", "Yêu nhà", "Thư giãn", "Self-care"],
    strengths: ["Nghỉ ngơi thật sự", "Tiết kiệm", "Không bị áp lực xã hội"],
    weaknesses: ["Có thể thiếu vận động", "Bỏ lỡ hoạt động xã hội"],
    tips: ["Ra ngoài ít nhất 1 buổi", "Gặp bạn bè định kỳ"],
  },
  C: {
    type: "C",
    title: "Social Butterfly Cuối Tuần",
    emoji: "🦋",
    description: "Ngày nghỉ là để gặp gỡ mọi người! Bạn thích cafe với bạn, ăn cơm với gia đình, hẹn hò... Cuối tuần là thời gian cho các mối quan hệ.",
    traits: ["Xã giao", "Yêu gia đình", "Thích gặp gỡ", "Warm"],
    strengths: ["Mối quan hệ tốt", "Không cô đơn", "Cuộc sống ý nghĩa"],
    weaknesses: ["Ít thời gian cho bản thân", "Có thể mệt vì social nhiều"],
    tips: ["Dành thời gian me-time", "Học cách từ chối lịch hẹn"],
  },
  D: {
    type: "D",
    title: "Productive Weekend Warrior",
    emoji: "📝",
    description: "Ngày nghỉ là để làm việc hiệu quả! Bạn dọn nhà, chạy deadline, hoàn thành việc cá nhân... Bạn thấy productive khi hoàn thành nhiều việc.",
    traits: ["Productive", "Có mục tiêu", "Chăm chỉ", "Kỷ luật"],
    strengths: ["Hoàn thành nhiều việc", "Tuần mới gọn gàng", "Không bị backlog"],
    weaknesses: ["Không nghỉ ngơi thật sự", "Có thể burnout", "Thiếu giải trí"],
    tips: ["Học cách nghỉ ngơi", "Ngày nghỉ là để nghỉ, không phải để làm việc khác"],
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
