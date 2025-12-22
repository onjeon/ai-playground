// Phong cách cuối tuần
// Khám phá cách bạn tận hưởng những ngày cuối tuần

export const questions = [
  {
    id: 1,
    question: "Sáng thứ Bảy, bạn thường?",
    options: [
      { text: "Ngủ nướng đến trưa", type: "A" },
      { text: "Dậy sớm tập thể dục", type: "B" },
      { text: "Dậy sớm đi cafe với bạn", type: "C" },
      { text: "Dậy theo giờ sinh học, không đặt báo thức", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Cuối tuần lý tưởng của bạn là?",
    options: [
      { text: "Ở nhà xem phim, đọc sách", type: "A" },
      { text: "Đi chơi, khám phá địa điểm mới", type: "B" },
      { text: "Gặp gỡ bạn bè, tiệc tùng", type: "C" },
      { text: "Làm việc nhà, dọn dẹp, nấu ăn", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn thường ăn gì vào cuối tuần?",
    options: [
      { text: "Order đồ ăn về nhà", type: "A" },
      { text: "Ra ngoài ăn nhà hàng", type: "B" },
      { text: "Nấu ăn tại nhà, thử món mới", type: "C" },
      { text: "Ăn uống linh hoạt, tùy mood", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Nếu được chọn, bạn sẽ đi đâu?",
    options: [
      { text: "Không đi đâu, ở nhà là vui nhất", type: "A" },
      { text: "Đi du lịch ngắn ngày", type: "B" },
      { text: "Đi cafe, quán bar với bạn bè", type: "C" },
      { text: "Đi siêu thị, mua sắm nhu yếu phẩm", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn có hay gặp bạn bè vào cuối tuần không?",
    options: [
      { text: "Hiếm khi, thích ở một mình", type: "A" },
      { text: "Thường xuyên, đây là thời gian gặp bạn", type: "B" },
      { text: "Luôn luôn, không đi chơi thì buồn", type: "C" },
      { text: "Tùy lịch, có thể gặp hoặc không", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Chiều Chủ Nhật, bạn thường?",
    options: [
      { text: "Nghỉ ngơi, chuẩn bị tinh thần cho tuần mới", type: "A" },
      { text: "Tận hưởng nốt thời gian rảnh", type: "B" },
      { text: "Gặp bạn bè hoặc người yêu", type: "C" },
      { text: "Chuẩn bị đồ ăn, quần áo cho cả tuần", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn có làm việc vào cuối tuần không?",
    options: [
      { text: "Không bao giờ, đây là thời gian nghỉ", type: "A" },
      { text: "Có, tranh thủ hoàn thành việc dở dang", type: "B" },
      { text: "Đôi khi, nếu có deadline", type: "C" },
      { text: "Thường xuyên, workaholic", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn dành bao nhiêu thời gian cho điện thoại vào cuối tuần?",
    options: [
      { text: "Rất nhiều, lướt phone cả ngày", type: "A" },
      { text: "Ít hơn ngày thường, tận hưởng cuộc sống", type: "B" },
      { text: "Dùng để liên lạc, hẹn gặp bạn bè", type: "C" },
      { text: "Bình thường, như mọi ngày", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Cuối tuần, bạn có tập thể dục không?",
    options: [
      { text: "Không, đây là ngày nghỉ", type: "A" },
      { text: "Có, đây là thời gian duy nhất", type: "B" },
      { text: "Có, thể thao với bạn bè", type: "C" },
      { text: "Tập nhẹ nhàng, yoga, đi bộ", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Tối thứ Bảy của bạn?",
    options: [
      { text: "Netflix and chill tại nhà", type: "A" },
      { text: "Đi bar, club, party", type: "B" },
      { text: "Ăn tối với gia đình, bạn bè", type: "C" },
      { text: "Ngủ sớm, tận hưởng giấc ngủ", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn có hay đi du lịch cuối tuần không?",
    options: [
      { text: "Không, mệt và tốn tiền", type: "A" },
      { text: "Thường xuyên, thích khám phá", type: "B" },
      { text: "Đôi khi, nếu có dịp hay", type: "C" },
      { text: "Thích ở nhà hơn đi xa", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Điều quan trọng nhất với bạn vào cuối tuần?",
    options: [
      { text: "Được nghỉ ngơi hoàn toàn", type: "A" },
      { text: "Có trải nghiệm mới, vui vẻ", type: "B" },
      { text: "Được gặp gỡ, kết nối với mọi người", type: "C" },
      { text: "Cân bằng giữa nghỉ ngơi và làm việc nhà", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người nghỉ ngơi tại gia",
    emoji: "🛋️",
    description: "Cuối tuần với bạn là thời gian để recharge năng lượng tại nhà. Ngủ nướng, xem phim, lướt phone - đơn giản nhưng hạnh phúc. Bạn cần không gian riêng.",
    traits: ["Introvert", "Yêu nhà", "Thư giãn", "Độc lập"],
    strengths: ["Tiết kiệm", "Nghỉ ngơi tốt", "Tự chủ giải trí"],
    weaknesses: ["Có thể thiếu kết nối xã hội", "Lười vận động"],
    tips: ["Thử ra ngoài đôi khi", "Gặp bạn bè ít nhất 1 lần/tháng"],
  },
  B: {
    type: "B",
    title: "Người khám phá năng động",
    emoji: "🏃",
    description: "Cuối tuần là thời gian để bạn sống hết mình! Du lịch, khám phá, trải nghiệm - bạn không thích ngồi yên một chỗ. Cuộc sống là để tận hưởng!",
    traits: ["Năng động", "Phiêu lưu", "Tích cực", "Yêu khám phá"],
    strengths: ["Nhiều trải nghiệm", "Cuộc sống phong phú", "Sức khỏe tốt"],
    weaknesses: ["Có thể mệt mỏi", "Chi tiêu nhiều"],
    tips: ["Dành thời gian nghỉ ngơi", "Cân bằng giữa đi chơi và ở nhà"],
  },
  C: {
    type: "C",
    title: "Người xã hội vui vẻ",
    emoji: "🎉",
    description: "Cuối tuần là để gặp gỡ bạn bè và tận hưởng cuộc sống xã hội. Cafe sáng, nhậu tối, party đêm - bạn là linh hồn của mọi cuộc vui.",
    traits: ["Extrovert", "Vui vẻ", "Kết nối", "Năng lượng cao"],
    strengths: ["Quan hệ rộng", "Vui vẻ", "Không bao giờ cô đơn"],
    weaknesses: ["Có thể thiếu thời gian riêng", "Chi tiêu nhiều cho xã hội"],
    tips: ["Dành thời gian cho bản thân", "Chọn lọc những mối quan hệ chất lượng"],
  },
  D: {
    type: "D",
    title: "Người cân bằng thực tế",
    emoji: "⚖️",
    description: "Cuối tuần với bạn là thời gian để cân bằng. Vừa nghỉ ngơi vừa làm việc nhà, vừa gặp bạn vừa có thời gian riêng. Bạn biết cách sắp xếp cuộc sống.",
    traits: ["Cân bằng", "Thực tế", "Có tổ chức", "Trưởng thành"],
    strengths: ["Cuộc sống ổn định", "Chuẩn bị tốt", "Không bỏ lỡ việc gì"],
    weaknesses: ["Có thể thiếu bất ngờ", "Đôi khi quá nghiêm túc"],
    tips: ["Thử làm điều bất ngờ", "Cho phép mình thả lỏng"],
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
