// Món Ăn Đêm Yêu Thích
// Khám phá tính cách của bạn qua thói quen ăn đêm

export const questions = [
  {
    id: 1,
    question: "Bạn thường ăn đêm vào lúc mấy giờ?",
    options: [
      { text: "9-10 giờ tối, vẫn còn sớm", type: "A" },
      { text: "11 giờ - 12 giờ đêm", type: "B" },
      { text: "1-2 giờ sáng, khuya thật sự", type: "C" },
      { text: "Tùy lúc, khi nào đói thì ăn", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Món ăn đêm bạn thích nhất?",
    options: [
      { text: "Phở, hủ tiếu - món nước nóng", type: "A" },
      { text: "Cháo, súp - nhẹ bụng", type: "B" },
      { text: "Đồ nướng, lẩu - đậm đà", type: "C" },
      { text: "Mì gói, đồ ăn nhanh - tiện lợi", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Lý do bạn ăn đêm?",
    options: [
      { text: "Thói quen, cứ tối là đói", type: "A" },
      { text: "Làm việc khuya, cần năng lượng", type: "B" },
      { text: "Đi chơi về, tụ tập bạn bè", type: "C" },
      { text: "Stress, ăn để giải tỏa", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn ăn đêm ở đâu?",
    options: [
      { text: "Quán ăn đêm ngoài đường", type: "A" },
      { text: "Tại nhà, tự nấu hoặc order", type: "B" },
      { text: "Quán nhậu, quán lẩu", type: "C" },
      { text: "Bất cứ đâu có đồ ăn", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn thường ăn đêm một mình hay với ai?",
    options: [
      { text: "Một mình, thưởng thức yên tĩnh", type: "A" },
      { text: "Với người yêu/vợ/chồng", type: "B" },
      { text: "Với nhóm bạn, càng đông càng vui", type: "C" },
      { text: "Tùy lúc, ai rủ thì đi", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn có lo lắng về sức khỏe khi ăn đêm không?",
    options: [
      { text: "Có, nhưng không cưỡng được", type: "A" },
      { text: "Có, nên chọn món nhẹ", type: "B" },
      { text: "Không nghĩ đến, vui là chính", type: "C" },
      { text: "Đôi khi lo, đôi khi không", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Sau khi ăn đêm, bạn thường?",
    options: [
      { text: "Đi ngủ ngay", type: "A" },
      { text: "Nghỉ ngơi một lúc rồi mới ngủ", type: "B" },
      { text: "Tiếp tục vui chơi", type: "C" },
      { text: "Làm việc tiếp hoặc xem phim", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Độ cay của món ăn đêm bạn chọn?",
    options: [
      { text: "Không cay, dễ ngủ hơn", type: "A" },
      { text: "Cay nhẹ, vừa phải", type: "B" },
      { text: "Cay nồng, đã miệng", type: "C" },
      { text: "Tùy món, tùy tâm trạng", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn ăn đêm bao nhiêu lần một tuần?",
    options: [
      { text: "Gần như mỗi ngày", type: "A" },
      { text: "3-4 lần/tuần", type: "B" },
      { text: "1-2 lần/tuần, cuối tuần", type: "C" },
      { text: "Không cố định, tùy hứng", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Ăn đêm với bạn là?",
    options: [
      { text: "Thói quen khó bỏ", type: "A" },
      { text: "Khoảnh khắc riêng tư", type: "B" },
      { text: "Hoạt động xã hội", type: "C" },
      { text: "Giải tỏa cảm xúc", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Khi không ăn đêm được, bạn?",
    options: [
      { text: "Khó ngủ, thiếu thiếu cái gì", type: "A" },
      { text: "Bình thường, ngủ sớm cũng tốt", type: "B" },
      { text: "Nhớ không khí ăn đêm với bạn bè", type: "C" },
      { text: "Không sao, có khi còn tốt hơn", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Nếu phải bỏ ăn đêm, bạn sẽ?",
    options: [
      { text: "Rất khó, cần quyết tâm cao", type: "A" },
      { text: "Cố gắng được, vì sức khỏe", type: "B" },
      { text: "Buồn vì mất khoảnh khắc vui", type: "C" },
      { text: "Thử thách thú vị, làm được", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người Nghiện Ăn Đêm",
    emoji: "🌙",
    description: "Ăn đêm đã trở thành thói quen không thể thiếu của bạn! Bạn không thể ngủ nếu chưa ăn gì đó vào buổi tối. Bạn là người sống về đêm, có thói quen đặc biệt và khó thay đổi.",
    traits: ["Sống về đêm", "Có thói quen", "Kiên định", "Yêu ẩm thực"],
    strengths: ["Biết điều mình thích", "Kiên trì với thói quen", "Tận hưởng cuộc sống"],
    weaknesses: ["Ảnh hưởng sức khỏe", "Khó thay đổi"],
    tips: ["Chọn món ăn nhẹ hơn", "Cân nhắc thời gian ăn", "Kiểm tra sức khỏe định kỳ"],
  },
  B: {
    type: "B",
    title: "Người Ăn Đêm Cân Bằng",
    emoji: "⚖️",
    description: "Bạn ăn đêm nhưng vẫn biết cách cân bằng sức khỏe! Bạn chọn món nhẹ, ăn có chừng mực. Bạn là người biết tận hưởng nhưng không buông thả, có kỷ luật với bản thân.",
    traits: ["Cân bằng", "Biết kiểm soát", "Lý trí", "Chăm sóc bản thân"],
    strengths: ["Sức khỏe tốt hơn", "Tự chủ", "Quyết định thông minh"],
    weaknesses: ["Đôi khi thiếu thoải mái", "Hay suy nghĩ nhiều"],
    tips: ["Đôi khi hãy thả lỏng", "Tận hưởng mà không cảm thấy tội lỗi"],
  },
  C: {
    type: "C",
    title: "Dân Đi Đêm Xã Giao",
    emoji: "🎉",
    description: "Ăn đêm với bạn là hoạt động xã hội! Bạn thích tụ tập bạn bè, nhậu nhẹt và những cuộc trò chuyện đêm khuya. Bạn là người hòa đồng, vui vẻ và yêu thích giao tiếp.",
    traits: ["Hòa đồng", "Vui vẻ", "Yêu bạn bè", "Năng động"],
    strengths: ["Có nhiều bạn bè", "Tạo không khí vui vẻ", "Networking tốt"],
    weaknesses: ["Dễ bị cuốn vào", "Ảnh hưởng sức khỏe"],
    tips: ["Cân bằng giữa vui chơi và nghỉ ngơi", "Chọn bạn mà chơi"],
  },
  D: {
    type: "D",
    title: "Người Ăn Đêm Cảm Xúc",
    emoji: "🎭",
    description: "Bạn ăn đêm theo cảm xúc và tâm trạng! Đôi khi vì stress, đôi khi vì vui, đôi khi chỉ đơn giản là thèm. Bạn là người nhạy cảm, sống theo cảm xúc và biết cách tự chăm sóc mình.",
    traits: ["Nhạy cảm", "Cảm xúc", "Linh hoạt", "Tự chăm sóc"],
    strengths: ["Hiểu bản thân", "Biết tự xử lý cảm xúc", "Không bị gò bó"],
    weaknesses: ["Dễ ăn quá nhiều khi stress", "Thiếu kiểm soát"],
    tips: ["Tìm cách xả stress lành mạnh hơn", "Theo dõi thói quen ăn uống"],
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
