// Kiểu sinh viên Việt Nam của bạn
// Khám phá phong cách sinh viên đặc trưng của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn thường đi học bằng gì?",
    options: [
      { text: "Xe máy riêng, tự do chủ động", type: "A" },
      { text: "Xe buýt, tiết kiệm chi phí", type: "B" },
      { text: "Grab/xe ôm, tiện lợi", type: "C" },
      { text: "Đi bộ hoặc đạp xe, gần trường", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Tiết học 7h sáng, bạn?",
    options: [
      { text: "Dậy sớm, đến đúng giờ", type: "A" },
      { text: "Cố gắng đến, có thể trễ chút", type: "B" },
      { text: "Hay bỏ tiết, ngủ bù", type: "C" },
      { text: "Đổi lịch, né tiết sáng sớm", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn sống ở đâu khi học đại học?",
    options: [
      { text: "Ký túc xá, tiết kiệm và vui", type: "A" },
      { text: "Thuê phòng trọ với bạn", type: "B" },
      { text: "Ở nhà với gia đình", type: "C" },
      { text: "Thuê phòng riêng một mình", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Chi tiêu hàng tháng của bạn?",
    options: [
      { text: "Lập kế hoạch chi tiêu rõ ràng", type: "A" },
      { text: "Chi tiêu vừa phải, có để dành", type: "B" },
      { text: "Xài hết rồi tính, cuối tháng cháy", type: "C" },
      { text: "Có bao nhiêu tiêu bấy nhiêu", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn làm thêm không?",
    options: [
      { text: "Có, cần tiền và kinh nghiệm", type: "A" },
      { text: "Làm part-time nhẹ nhàng", type: "B" },
      { text: "Chỉ làm hè, năm học tập trung học", type: "C" },
      { text: "Không, ba mẹ chu cấp đủ", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Mùa thi cử, bạn?",
    options: [
      { text: "Ôn thi từ đầu, không gấp gáp", type: "A" },
      { text: "Ôn 2 tuần trước là đủ", type: "B" },
      { text: "Thức đêm học trước 3 ngày thi", type: "C" },
      { text: "Học đêm hôm trước, cầu may", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn tham gia CLB nào?",
    options: [
      { text: "CLB học thuật, liên quan ngành", type: "A" },
      { text: "CLB văn nghệ, thể thao", type: "B" },
      { text: "CLB tình nguyện, xã hội", type: "C" },
      { text: "Không tham gia CLB nào", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Quan hệ với giảng viên?",
    options: [
      { text: "Hay hỏi bài, trao đổi thêm", type: "A" },
      { text: "Lịch sự, chào hỏi khi gặp", type: "B" },
      { text: "Không quen lắm, chỉ biết tên", type: "C" },
      { text: "Không nhớ mặt thầy cô", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn bè ở đại học?",
    options: [
      { text: "Có nhóm bạn thân, gắn bó lâu", type: "A" },
      { text: "Quen nhiều nhưng thân vài người", type: "B" },
      { text: "Bạn học chung, không thân lắm", type: "C" },
      { text: "Ít bạn, thích một mình", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Thời gian rảnh ở trường?",
    options: [
      { text: "Ngồi thư viện đọc sách, học bài", type: "A" },
      { text: "Cà phê quán nước với bạn", type: "B" },
      { text: "Lướt điện thoại, xem phim", type: "C" },
      { text: "Về nhà ngay khi hết tiết", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn thường ăn gì ở trường?",
    options: [
      { text: "Cơm căn tin, tiết kiệm", type: "A" },
      { text: "Mì gói, bún, đồ ăn vặt", type: "B" },
      { text: "Đặt ship đồ ăn online", type: "C" },
      { text: "Mang cơm nhà đi ăn", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Kế hoạch sau khi ra trường?",
    options: [
      { text: "Đã có định hướng rõ ràng", type: "A" },
      { text: "Có vài ý tưởng, đang tìm hiểu", type: "B" },
      { text: "Chưa biết, ra trường rồi tính", type: "C" },
      { text: "Học tiếp hoặc đi du học", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Sinh viên mẫu mực",
    emoji: "🎓",
    description: "Bạn là sinh viên có mục tiêu rõ ràng và biết cách sắp xếp cuộc sống đại học. Bạn cân bằng tốt giữa học tập và cuộc sống.",
    traits: ["Có mục tiêu", "Kỷ luật", "Chăm chỉ", "Biết quản lý"],
    strengths: ["Kết quả học tốt", "Chuẩn bị tốt cho tương lai", "Tự lập"],
    weaknesses: ["Có thể quá căng thẳng", "Ít vui chơi"],
    tips: ["Thư giãn nhiều hơn", "Tận hưởng thời sinh viên"],
  },
  B: {
    type: "B",
    title: "Sinh viên năng động",
    emoji: "🌟",
    description: "Bạn tận hưởng cuộc sống sinh viên một cách trọn vẹn. Học hành vừa phải và có nhiều hoạt động ngoại khóa.",
    traits: ["Năng động", "Hòa đồng", "Linh hoạt", "Vui vẻ"],
    strengths: ["Nhiều bạn bè", "Cuộc sống thú vị", "Kỹ năng xã hội tốt"],
    weaknesses: ["Có thể phân tán", "Đôi khi thiếu tập trung"],
    tips: ["Đặt ưu tiên học tập cao hơn", "Tập trung vào mục tiêu chính"],
  },
  C: {
    type: "C",
    title: "Sinh viên thoải mái",
    emoji: "😴",
    description: "Bạn có phong cách sinh viên thoải mái, không quá áp lực. Bạn tận hưởng sự tự do của cuộc sống đại học.",
    traits: ["Thoải mái", "Tự do", "Không áp lực", "Thích hưởng thụ"],
    strengths: ["Ít stress", "Biết tận hưởng cuộc sống", "Sáng tạo"],
    weaknesses: ["Kết quả học có thể không cao", "Thiếu chuẩn bị cho tương lai"],
    tips: ["Lập kế hoạch cho tương lai", "Đừng để thời gian trôi qua vô ích"],
  },
  D: {
    type: "D",
    title: "Sinh viên độc lập",
    emoji: "🎯",
    description: "Bạn có lối sống độc lập, biết mình muốn gì và không bị ảnh hưởng bởi xung quanh. Bạn có thể hướng nội hoặc có kế hoạch riêng.",
    traits: ["Độc lập", "Có chính kiến", "Riêng tư", "Tự chủ"],
    strengths: ["Tự lập tốt", "Không bị ảnh hưởng", "Có mục tiêu riêng"],
    weaknesses: ["Có thể thiếu kết nối", "Bỏ lỡ trải nghiệm sinh viên"],
    tips: ["Mở lòng với bạn bè", "Tham gia hoạt động tập thể"],
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
