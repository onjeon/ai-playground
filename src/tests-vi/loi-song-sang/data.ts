// Buổi Sáng Của Bạn
// Khám phá tính cách qua cách bạn bắt đầu ngày mới

export const questions = [
  {
    id: 1,
    question: "Bạn thức dậy lúc mấy giờ vào ngày đi làm/học?",
    options: [
      { text: "Trước 6 giờ sáng, early bird", type: "A" },
      { text: "6-7 giờ sáng, bình thường", type: "B" },
      { text: "7-8 giờ sáng, vừa đủ giờ", type: "C" },
      { text: "Sau 8 giờ, dậy muộn", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Điều đầu tiên bạn làm khi thức dậy?",
    options: [
      { text: "Tắt báo thức, dậy ngay", type: "A" },
      { text: "Check điện thoại, xem tin nhắn", type: "B" },
      { text: "Nằm thêm 5-10 phút", type: "C" },
      { text: "Snooze báo thức, ngủ tiếp", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bữa sáng của bạn như thế nào?",
    options: [
      { text: "Ăn sáng đầy đủ, quan trọng nhất", type: "A" },
      { text: "Ăn nhanh, bánh mì hoặc xôi", type: "B" },
      { text: "Uống cà phê/sữa là đủ", type: "C" },
      { text: "Skip bữa sáng, không có thời gian", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn có tập thể dục buổi sáng không?",
    options: [
      { text: "Mỗi sáng, routine không thể thiếu", type: "A" },
      { text: "Vài lần/tuần, khi có thời gian", type: "B" },
      { text: "Hiếm khi, thích tập chiều/tối hơn", type: "C" },
      { text: "Không tập, ngủ thêm còn hơn", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn chuẩn bị đồ đi làm/học như thế nào?",
    options: [
      { text: "Chuẩn bị từ tối hôm trước", type: "A" },
      { text: "Chuẩn bị buổi sáng, có kế hoạch", type: "B" },
      { text: "Vừa chuẩn bị vừa vội", type: "C" },
      { text: "Chọn đồ random, không kế hoạch", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Cà phê sáng của bạn?",
    options: [
      { text: "Tự pha ở nhà, tiết kiệm", type: "A" },
      { text: "Mua ở quán quen trên đường đi", type: "B" },
      { text: "Uống cà phê ở công ty/trường", type: "C" },
      { text: "Không uống cà phê buổi sáng", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn đi làm/học bằng phương tiện gì?",
    options: [
      { text: "Xe máy, tự chủ thời gian", type: "A" },
      { text: "Xe buýt/metro, tiết kiệm", type: "B" },
      { text: "Grab/taxi, tiện lợi", type: "C" },
      { text: "Đi bộ/xe đạp, healthy", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn thường đến công ty/trường lúc mấy giờ?",
    options: [
      { text: "Sớm hơn giờ quy định 15-30 phút", type: "A" },
      { text: "Đúng giờ, vừa kịp", type: "B" },
      { text: "Hay trễ 5-10 phút", type: "C" },
      { text: "Trễ thường xuyên, khó kiểm soát", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Mood buổi sáng của bạn?",
    options: [
      { text: "Tỉnh táo, vui vẻ, sẵn sàng", type: "A" },
      { text: "Ổn, cần một chút thời gian warm-up", type: "B" },
      { text: "Mệt mỏi, cần cà phê để hoạt động", type: "C" },
      { text: "Cáu kỉnh, ghét buổi sáng", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn có morning routine cố định không?",
    options: [
      { text: "Có, làm theo từng bước mỗi ngày", type: "A" },
      { text: "Có, nhưng linh hoạt", type: "B" },
      { text: "Không, tùy ngày tùy cảm hứng", type: "C" },
      { text: "Không, mỗi sáng là một cuộc chiến", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Early Bird Chính Hiệu",
    emoji: "🐦",
    description: "Bạn là chim sớm! Buổi sáng là thời gian productive nhất của bạn. Bạn có routine rõ ràng, dậy sớm, ăn sáng đầy đủ và luôn đến nơi đúng giờ.",
    traits: ["Kỷ luật", "Productive", "Organized", "Sức khỏe tốt"],
    strengths: ["Hoàn thành nhiều việc buổi sáng", "Không bao giờ trễ", "Tỉnh táo suốt ngày"],
    weaknesses: ["Khó thức khuya", "Có thể quá cứng nhắc"],
    tips: ["Đôi khi cho phép mình linh hoạt", "Tận hưởng buổi sáng chậm rãi"],
  },
  B: {
    type: "B",
    title: "Người Sáng Cân Bằng",
    emoji: "⏰",
    description: "Bạn có buổi sáng cân bằng! Không quá sớm, không quá vội. Bạn có routine nhưng linh hoạt, và luôn đến nơi đúng giờ.",
    traits: ["Cân bằng", "Đúng giờ", "Linh hoạt", "Thực tế"],
    strengths: ["Thích nghi tốt", "Không stress buổi sáng", "Có thể thay đổi routine"],
    weaknesses: ["Đôi khi hơi vội", "Có thể cải thiện thêm"],
    tips: ["Dậy sớm hơn 15 phút", "Ăn sáng đầy đủ hơn"],
  },
  C: {
    type: "C",
    title: "Dân Vội Vàng Buổi Sáng",
    emoji: "🏃",
    description: "Buổi sáng của bạn là cuộc đua! Dậy muộn, vội vàng, hay trễ giờ. Bạn cần cà phê để hoạt động và thường bỏ qua bữa sáng.",
    traits: ["Vội vàng", "Thiếu ngủ", "Cần cà phê", "Hay trễ"],
    strengths: ["Thích nghi được áp lực", "Vẫn hoàn thành công việc"],
    weaknesses: ["Hay trễ", "Thiếu năng lượng", "Bỏ bữa sáng"],
    tips: ["Ngủ sớm hơn 30 phút", "Chuẩn bị từ tối", "Ăn sáng đơn giản"],
  },
  D: {
    type: "D",
    title: "Kẻ Thù Của Buổi Sáng",
    emoji: "😵",
    description: "Buổi sáng không phải là bạn của bạn! Bạn ghét dậy sớm, ghét báo thức, và cần rất nhiều thời gian để hoạt động. Bạn là cú đêm thực sự.",
    traits: ["Cú đêm", "Ghét buổi sáng", "Khó dậy", "Cáu kỉnh sáng sớm"],
    strengths: ["Productive ban đêm", "Sáng tạo vào giờ khuya"],
    weaknesses: ["Hay trễ giờ", "Mệt mỏi buổi sáng", "Ảnh hưởng công việc"],
    tips: ["Đặt nhiều báo thức", "Để điện thoại xa giường", "Tìm công việc linh hoạt giờ giấc"],
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
