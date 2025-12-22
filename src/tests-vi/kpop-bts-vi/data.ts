// BTS thành viên phù hợp
// Khám phá xem bạn giống thành viên BTS nào nhất

export const questions = [
  {
    id: 1,
    question: "Trong nhóm bạn bè, bạn thường đóng vai trò gì?",
    options: [
      { text: "Người lãnh đạo, dẫn dắt mọi người", type: "A" },
      { text: "Người sáng tạo, luôn có ý tưởng mới", type: "B" },
      { text: "Người hài hước, mang lại tiếng cười", type: "C" },
      { text: "Người chăm sóc, lo lắng cho mọi người", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Khi gặp khó khăn, bạn thường làm gì?",
    options: [
      { text: "Đối mặt trực tiếp và tìm cách giải quyết", type: "A" },
      { text: "Viết nhật ký hoặc sáng tác để giải tỏa", type: "B" },
      { text: "Cười xòa và xem đó là bài học", type: "C" },
      { text: "Tìm kiếm sự hỗ trợ từ người thân", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Phong cách thời trang của bạn như thế nào?",
    options: [
      { text: "Đơn giản, lịch lãm, classic", type: "A" },
      { text: "Độc đáo, nghệ thuật, avant-garde", type: "B" },
      { text: "Thoải mái, streetwear, năng động", type: "C" },
      { text: "Dễ thương, trẻ trung, ngọt ngào", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn thể hiện tình cảm như thế nào?",
    options: [
      { text: "Qua hành động và sự quan tâm thiết thực", type: "A" },
      { text: "Qua lời nói sâu sắc và ý nghĩa", type: "B" },
      { text: "Qua sự vui vẻ và những trò đùa", type: "C" },
      { text: "Qua cử chỉ âu yếm và dịu dàng", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Sở thích của bạn vào ngày nghỉ là gì?",
    options: [
      { text: "Đọc sách, học hỏi điều mới", type: "A" },
      { text: "Nghe nhạc, xem phim, thưởng thức nghệ thuật", type: "B" },
      { text: "Chơi game, xem YouTube", type: "C" },
      { text: "Nấu ăn, chăm sóc bản thân", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi làm việc nhóm, bạn thường?",
    options: [
      { text: "Phân công nhiệm vụ và điều phối công việc", type: "A" },
      { text: "Đóng góp ý tưởng sáng tạo", type: "B" },
      { text: "Tạo không khí vui vẻ, giảm căng thẳng", type: "C" },
      { text: "Hỗ trợ và giúp đỡ mọi người", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Điều gì quan trọng nhất với bạn?",
    options: [
      { text: "Trách nhiệm và sự tôn trọng", type: "A" },
      { text: "Nghệ thuật và sự sáng tạo", type: "B" },
      { text: "Tự do và niềm vui", type: "C" },
      { text: "Gia đình và tình bạn", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn xử lý stress như thế nào?",
    options: [
      { text: "Tập trung vào công việc để quên đi", type: "A" },
      { text: "Viết nhạc, vẽ tranh hoặc sáng tác", type: "B" },
      { text: "Xem video hài, chơi với thú cưng", type: "C" },
      { text: "Ăn ngon, ngủ sớm, nghỉ ngơi", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn thích loại nhạc nào nhất?",
    options: [
      { text: "Hip-hop và R&B", type: "A" },
      { text: "Jazz, Soul, Indie", type: "B" },
      { text: "Pop sôi động, Dance", type: "C" },
      { text: "Ballad, nhạc nhẹ nhàng", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Điểm mạnh lớn nhất của bạn là gì?",
    options: [
      { text: "Sự quyết đoán và đáng tin cậy", type: "A" },
      { text: "Sự sáng tạo và chiều sâu", type: "B" },
      { text: "Sự lạc quan và hài hước", type: "C" },
      { text: "Sự tử tế và chân thành", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Khi ai đó buồn, bạn sẽ làm gì?",
    options: [
      { text: "Cho lời khuyên thiết thực", type: "A" },
      { text: "Lắng nghe và thấu hiểu", type: "B" },
      { text: "Làm họ cười bằng mọi cách", type: "C" },
      { text: "Ở bên cạnh và an ủi", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Mục tiêu sống của bạn là gì?",
    options: [
      { text: "Thành công và được công nhận", type: "A" },
      { text: "Sống có ý nghĩa và để lại di sản", type: "B" },
      { text: "Tận hưởng cuộc sống và trải nghiệm", type: "C" },
      { text: "Hạnh phúc cùng người thân yêu", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "RM - Người lãnh đạo",
    emoji: "👑",
    description: "Bạn giống RM - người lãnh đạo thông minh và đáng tin cậy. Bạn có khả năng dẫn dắt, luôn biết cách giải quyết vấn đề và truyền cảm hứng cho người khác. IQ cao và EQ cũng không kém!",
    traits: ["Thông minh", "Có trách nhiệm", "Đáng tin cậy", "Quyết đoán"],
    strengths: ["Khả năng lãnh đạo xuất sắc", "Tư duy chiến lược", "Giao tiếp tốt"],
    weaknesses: ["Đôi khi quá nghiêm túc", "Hay lo lắng cho người khác"],
    tips: ["Hãy dành thời gian cho bản thân", "Đừng gánh vác mọi thứ một mình"],
  },
  B: {
    type: "B",
    title: "SUGA - Nghệ sĩ sáng tạo",
    emoji: "🎹",
    description: "Bạn giống SUGA - nghệ sĩ với tâm hồn sâu sắc. Bạn thể hiện cảm xúc qua nghệ thuật, có góc nhìn độc đáo về cuộc sống và luôn trung thực với bản thân mình.",
    traits: ["Sáng tạo", "Sâu sắc", "Độc lập", "Nghệ sĩ"],
    strengths: ["Tài năng nghệ thuật", "Trung thực với cảm xúc", "Tư duy độc đáo"],
    weaknesses: ["Đôi khi khép kín", "Khó thể hiện cảm xúc trực tiếp"],
    tips: ["Mở lòng hơn với người xung quanh", "Chia sẻ suy nghĩ của bạn nhiều hơn"],
  },
  C: {
    type: "C",
    title: "J-Hope/V - Tia nắng vui vẻ",
    emoji: "☀️",
    description: "Bạn giống J-Hope hoặc V - nguồn năng lượng tích cực! Bạn mang lại niềm vui cho mọi người xung quanh với sự hài hước và tinh thần lạc quan không giới hạn.",
    traits: ["Vui vẻ", "Lạc quan", "Hài hước", "Năng động"],
    strengths: ["Tạo không khí vui vẻ", "Dễ gần", "Truyền năng lượng tích cực"],
    weaknesses: ["Đôi khi che giấu nỗi buồn", "Khó nghiêm túc khi cần"],
    tips: ["Cho phép bản thân buồn khi cần", "Đừng ép mình phải vui vẻ mọi lúc"],
  },
  D: {
    type: "D",
    title: "Jimin/Jungkook - Em út đáng yêu",
    emoji: "🐰",
    description: "Bạn giống Jimin hoặc Jungkook - dễ thương, chân thành và luôn quan tâm đến người khác. Bạn có sức hút đặc biệt khiến ai cũng muốn bảo vệ và yêu thương.",
    traits: ["Dễ thương", "Chân thành", "Tình cảm", "Đa tài"],
    strengths: ["Quan tâm người khác", "Dễ mến", "Cố gắng không ngừng"],
    weaknesses: ["Đôi khi thiếu tự tin", "Quá nhạy cảm với lời nói"],
    tips: ["Tin vào bản thân nhiều hơn", "Đừng quá quan trọng ý kiến người khác"],
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
