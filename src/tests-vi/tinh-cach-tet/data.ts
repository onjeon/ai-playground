// Tính cách dịp Tết
// Khám phá tính cách của bạn qua cách bạn đón Tết Nguyên Đán

export const questions = [
  {
    id: 1,
    question: "Bạn thường chuẩn bị Tết như thế nào?",
    options: [
      { text: "Dọn dẹp, trang trí từ đầu tháng Chạp", type: "A" },
      { text: "Làm sát ngày, nước đến chân mới nhảy", type: "B" },
      { text: "Thuê người dọn, mua đồ có sẵn", type: "C" },
      { text: "Không chuẩn bị gì nhiều", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thích đón Giao thừa ở đâu?",
    options: [
      { text: "Ở nhà với gia đình", type: "A" },
      { text: "Đi countdown với bạn bè", type: "B" },
      { text: "Đi du lịch nước ngoài", type: "C" },
      { text: "Ở nhà một mình, yên tĩnh", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn nghĩ gì về việc lì xì?",
    options: [
      { text: "Truyền thống quan trọng, phải có", type: "A" },
      { text: "Vui thôi, không quan trọng nhiều ít", type: "B" },
      { text: "Áp lực tài chính mỗi năm", type: "C" },
      { text: "Thích nhận hơn thích cho", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Món ăn Tết bạn thích nhất?",
    options: [
      { text: "Bánh chưng/bánh tét truyền thống", type: "A" },
      { text: "Thịt kho hột vịt", type: "B" },
      { text: "Nem, chả, giò", type: "C" },
      { text: "Không thích đồ Tết, thích ăn nhà hàng", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn thường xông đất nhà ai đầu tiên?",
    options: [
      { text: "Nhà ông bà, cha mẹ", type: "A" },
      { text: "Nhà bạn thân", type: "B" },
      { text: "Được mời thì đi", type: "C" },
      { text: "Ở nhà, không đi xông đất ai", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn nghĩ gì về câu hỏi 'Bao giờ lấy vợ/chồng?' dịp Tết?",
    options: [
      { text: "Bình thường, người lớn quan tâm thôi", type: "A" },
      { text: "Khó chịu nhưng vẫn trả lời", type: "B" },
      { text: "Tránh né, đổi chủ đề", type: "C" },
      { text: "Trả lời hài hước cho qua", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn thường mặc gì ngày Tết?",
    options: [
      { text: "Áo dài truyền thống", type: "A" },
      { text: "Quần áo mới, đẹp", type: "B" },
      { text: "Thoải mái, gì cũng được", type: "C" },
      { text: "Theo xu hướng thời trang", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn thường làm gì trong những ngày Tết?",
    options: [
      { text: "Đi chúc Tết họ hàng", type: "A" },
      { text: "Đi chơi với bạn bè", type: "B" },
      { text: "Ở nhà nghỉ ngơi, xem phim", type: "C" },
      { text: "Đi du lịch", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn nghĩ gì về hoa mai/đào ngày Tết?",
    options: [
      { text: "Phải có, không thể thiếu", type: "A" },
      { text: "Có thì tốt, không có cũng được", type: "B" },
      { text: "Thích hoa giả, dùng được lâu", type: "C" },
      { text: "Thích các loại hoa khác hơn", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn thường về quê ăn Tết không?",
    options: [
      { text: "Luôn luôn, không thể thiếu", type: "A" },
      { text: "Năm có năm không", type: "B" },
      { text: "Hiếm khi, bận việc", type: "C" },
      { text: "Không có quê để về", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn chi tiêu Tết như thế nào?",
    options: [
      { text: "Tiết kiệm, chỉ mua những gì cần", type: "A" },
      { text: "Thoải mái, một năm có một lần", type: "B" },
      { text: "Lên kế hoạch chi tiêu từ trước", type: "C" },
      { text: "Không quan tâm, có bao nhiêu tiêu bấy nhiêu", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Sau Tết, bạn thường cảm thấy?",
    options: [
      { text: "Tiếc nuối, muốn Tết dài hơn", type: "A" },
      { text: "Mệt mỏi, cần nghỉ ngơi", type: "B" },
      { text: "Háo hức bắt đầu năm mới", type: "C" },
      { text: "Nhẹ nhõm vì hết Tết", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người truyền thống",
    emoji: "🏮",
    description: "Bạn là người yêu quý những giá trị truyền thống và gia đình. Với bạn, Tết là dịp để sum họp, tưởng nhớ tổ tiên và gắn kết tình thân.",
    traits: ["Truyền thống", "Gia đình", "Ấm áp", "Có hiếu"],
    strengths: ["Giữ gìn văn hóa", "Gắn kết gia đình", "Chu đáo"],
    weaknesses: ["Đôi khi quá cứng nhắc", "Áp lực với truyền thống"],
    tips: ["Cân bằng giữa truyền thống và hiện đại", "Cho phép mình được nghỉ ngơi"],
  },
  B: {
    type: "B",
    title: "Người vui vẻ",
    emoji: "🎊",
    description: "Bạn là người xem Tết như dịp để vui chơi và gặp gỡ. Bạn linh hoạt, hòa đồng và luôn tạo không khí vui vẻ cho mọi người xung quanh.",
    traits: ["Vui vẻ", "Hòa đồng", "Linh hoạt", "Sôi nổi"],
    strengths: ["Tạo niềm vui cho người khác", "Dễ gần", "Năng động"],
    weaknesses: ["Đôi khi hời hợt", "Chi tiêu quá tay"],
    tips: ["Dành thời gian cho gia đình hơn", "Quản lý tài chính Tết"],
  },
  C: {
    type: "C",
    title: "Người thực tế",
    emoji: "📊",
    description: "Bạn là người thực tế và có kế hoạch. Bạn biết cách cân bằng giữa vui chơi và công việc, không để Tết làm ảnh hưởng đến cuộc sống.",
    traits: ["Thực tế", "Có kế hoạch", "Cân bằng", "Độc lập"],
    strengths: ["Quản lý tài chính tốt", "Không áp lực", "Tự chủ"],
    weaknesses: ["Đôi khi thiếu không khí Tết", "Xa cách gia đình"],
    tips: ["Dành thời gian cho người thân hơn", "Tận hưởng không khí Tết"],
  },
  D: {
    type: "D",
    title: "Người tự do",
    emoji: "🌍",
    description: "Bạn là người thích tự do và không bị ràng buộc bởi truyền thống. Tết với bạn là dịp để nghỉ ngơi theo cách của riêng mình.",
    traits: ["Tự do", "Độc lập", "Khác biệt", "Hiện đại"],
    strengths: ["Không stress", "Sống theo ý mình", "Thoải mái"],
    weaknesses: ["Đôi khi cô đơn", "Thiếu kết nối gia đình"],
    tips: ["Kết nối với người thân qua điện thoại", "Tạo truyền thống mới cho riêng mình"],
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
