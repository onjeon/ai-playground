// Kiểu Đón Trung Thu
// Khám phá tính cách của bạn qua cách đón Tết Trung Thu

export const questions = [
  {
    id: 1,
    question: "Trung Thu với bạn có ý nghĩa gì?",
    options: [
      { text: "Dịp sum họp gia đình truyền thống", type: "A" },
      { text: "Cơ hội nghỉ ngơi, thư giãn", type: "B" },
      { text: "Dịp vui chơi với bạn bè", type: "C" },
      { text: "Kỷ niệm tuổi thơ đáng nhớ", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thường đón Trung Thu ở đâu?",
    options: [
      { text: "Tại nhà với gia đình", type: "A" },
      { text: "Đi du lịch, nghỉ dưỡng", type: "B" },
      { text: "Ra phố, vui chơi với bạn bè", type: "C" },
      { text: "Tại quê, với ông bà", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Loại bánh Trung Thu bạn thích nhất?",
    options: [
      { text: "Bánh nướng nhân thập cẩm truyền thống", type: "A" },
      { text: "Bánh dẻo lạnh, hiện đại", type: "B" },
      { text: "Bánh trung thu hình thù độc đáo", type: "C" },
      { text: "Bánh trung thu tự làm tại nhà", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn có mua lồng đèn Trung Thu không?",
    options: [
      { text: "Có, mua cho con cháu trong nhà", type: "A" },
      { text: "Không, chỉ mua bánh", type: "B" },
      { text: "Có, để chụp ảnh check-in", type: "C" },
      { text: "Có, thích sưu tập lồng đèn đẹp", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Hoạt động Trung Thu bạn thích nhất?",
    options: [
      { text: "Phá cỗ, ngắm trăng cùng gia đình", type: "A" },
      { text: "Nghỉ ngơi, xem phim ở nhà", type: "B" },
      { text: "Đi phố lồng đèn, chụp ảnh", type: "C" },
      { text: "Xem múa lân, rước đèn", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn có tặng bánh Trung Thu cho ai không?",
    options: [
      { text: "Tặng ông bà, bố mẹ, người thân", type: "A" },
      { text: "Tặng đối tác, đồng nghiệp (công việc)", type: "B" },
      { text: "Tặng bạn bè, người yêu", type: "C" },
      { text: "Tự mua cho mình, ít tặng", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn ngắm trăng Trung Thu như thế nào?",
    options: [
      { text: "Bày mâm cỗ, ngắm trăng truyền thống", type: "A" },
      { text: "Lên sân thượng, ngắm trăng một mình", type: "B" },
      { text: "Ra phố đi bộ, ngắm trăng cùng đám đông", type: "C" },
      { text: "Ngắm trăng qua cửa sổ, hoài niệm", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Trẻ em Trung Thu với bạn là?",
    options: [
      { text: "Đối tượng chính của ngày lễ", type: "A" },
      { text: "Có trẻ con mới vui, không có cũng được", type: "B" },
      { text: "Cơ hội để tổ chức tiệc cho trẻ em", type: "C" },
      { text: "Gợi nhớ tuổi thơ của mình", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn có xem chương trình Trung Thu trên TV không?",
    options: [
      { text: "Có, cả gia đình cùng xem", type: "A" },
      { text: "Không, làm việc riêng", type: "B" },
      { text: "Có, để biết xu hướng", type: "C" },
      { text: "Có, thích xem múa lân, văn nghệ", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Ngân sách Trung Thu của bạn?",
    options: [
      { text: "Sẵn sàng chi tiêu cho gia đình", type: "A" },
      { text: "Tiết kiệm, mua vừa đủ", type: "B" },
      { text: "Chi nhiều cho quà tặng, check-in", type: "C" },
      { text: "Không quan tâm lắm đến ngân sách", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Nếu Trung Thu trùng ngày làm việc, bạn?",
    options: [
      { text: "Xin nghỉ để đón Trung Thu với gia đình", type: "A" },
      { text: "Làm việc như thường, tối mới đón", type: "B" },
      { text: "Tổ chức tiệc nhỏ tại công ty", type: "C" },
      { text: "Không quan trọng, ngày nào cũng vậy", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Điều bạn nhớ nhất về Trung Thu tuổi thơ?",
    options: [
      { text: "Sum họp gia đình, phá cỗ", type: "A" },
      { text: "Được nghỉ học, chơi thoải mái", type: "B" },
      { text: "Rước đèn với bạn bè trong xóm", type: "C" },
      { text: "Ánh trăng sáng và bánh Trung Thu ngọt", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người Giữ Gìn Truyền Thống",
    emoji: "🏮",
    description: "Trung Thu với bạn là dịp sum họp gia đình thiêng liêng! Bạn coi trọng truyền thống, giữ gìn phong tục và yêu thương gia đình. Bạn là người có gốc rễ, trách nhiệm và biết trân trọng.",
    traits: ["Truyền thống", "Yêu gia đình", "Có gốc rễ", "Trách nhiệm"],
    strengths: ["Gắn kết gia đình", "Giữ gìn văn hóa", "Biết trân trọng"],
    weaknesses: ["Đôi khi bảo thủ", "Khó thay đổi"],
    tips: ["Kết hợp truyền thống và hiện đại", "Để giới trẻ tham gia tổ chức"],
  },
  B: {
    type: "B",
    title: "Người Thực Dụng",
    emoji: "🌙",
    description: "Trung Thu với bạn là dịp nghỉ ngơi, thư giãn! Bạn không quá câu nệ vào nghi lễ, coi đây là khoảng thời gian để reset. Bạn là người thực tế, biết cách chăm sóc bản thân.",
    traits: ["Thực tế", "Biết nghỉ ngơi", "Độc lập", "Thoải mái"],
    strengths: ["Cân bằng cuộc sống", "Không bị áp lực", "Tự chủ"],
    weaknesses: ["Đôi khi thiếu gắn kết", "Có thể bỏ lỡ khoảnh khắc"],
    tips: ["Dành thời gian cho gia đình", "Tận hưởng không khí lễ hội"],
  },
  C: {
    type: "C",
    title: "Người Yêu Trải Nghiệm",
    emoji: "📸",
    description: "Trung Thu với bạn là dịp vui chơi và trải nghiệm! Bạn thích ra phố, chụp ảnh và tận hưởng không khí lễ hội. Bạn là người năng động, hiện đại và biết cách tận hưởng cuộc sống.",
    traits: ["Năng động", "Hiện đại", "Yêu trải nghiệm", "Xã giao"],
    strengths: ["Có nhiều kỷ niệm đẹp", "Mạng lưới quan hệ rộng", "Cập nhật xu hướng"],
    weaknesses: ["Đôi khi bề nổi", "Thiếu chiều sâu"],
    tips: ["Dành thời gian cho những giá trị cốt lõi", "Cân bằng giữa vui chơi và gia đình"],
  },
  D: {
    type: "D",
    title: "Người Hoài Niệm",
    emoji: "🎑",
    description: "Trung Thu gợi nhớ những kỷ niệm tuổi thơ đẹp đẽ của bạn! Bạn yêu thích sự lãng mạn của ánh trăng, những kỷ niệm xưa cũ. Bạn là người sâu sắc, giàu cảm xúc và hay hoài niệm.",
    traits: ["Hoài niệm", "Sâu sắc", "Lãng mạn", "Giàu cảm xúc"],
    strengths: ["Biết trân trọng kỷ niệm", "Có chiều sâu", "Cảm xúc phong phú"],
    weaknesses: ["Đôi khi sống trong quá khứ", "Hay buồn bã"],
    tips: ["Tạo thêm kỷ niệm mới", "Sống trong hiện tại nhiều hơn"],
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
