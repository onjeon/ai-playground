// Kiểu Cà Phê Văn Phòng
// Khám phá tính cách của bạn qua thói quen uống cà phê tại văn phòng

export const questions = [
  {
    id: 1,
    question: "Buổi sáng đến văn phòng, việc đầu tiên bạn làm là?",
    options: [
      { text: "Pha cà phê ngay, không thể thiếu", type: "A" },
      { text: "Check email, rồi mới pha cà phê", type: "B" },
      { text: "Chờ đồng nghiệp rủ đi mua cà phê", type: "C" },
      { text: "Làm việc trước, lúc nào thích mới uống", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thường uống cà phê văn phòng kiểu nào?",
    options: [
      { text: "Cà phê phin tự pha", type: "A" },
      { text: "Cà phê máy pha tự động", type: "B" },
      { text: "Mua từ quán gần công ty", type: "C" },
      { text: "Cà phê gói, 3in1 tiện lợi", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn uống bao nhiêu ly cà phê trong ngày làm việc?",
    options: [
      { text: "3-4 ly hoặc hơn", type: "A" },
      { text: "2 ly, sáng và chiều", type: "B" },
      { text: "1 ly mỗi ngày", type: "C" },
      { text: "Tùy ngày, không cố định", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi deadline căng thẳng, bạn?",
    options: [
      { text: "Uống thêm cà phê để tỉnh táo", type: "A" },
      { text: "Duy trì lượng cà phê như thường", type: "B" },
      { text: "Rủ đồng nghiệp đi mua cà phê giải stress", type: "C" },
      { text: "Không uống, sợ tim đập nhanh", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Giờ nghỉ trưa, bạn thường?",
    options: [
      { text: "Pha cà phê, tiếp tục làm việc", type: "A" },
      { text: "Nghỉ ngơi, rồi mới uống cà phê", type: "B" },
      { text: "Đi quán cà phê gần công ty với đồng nghiệp", type: "C" },
      { text: "Ngủ trưa, chiều mới uống cà phê", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Góc làm việc của bạn có gì liên quan đến cà phê?",
    options: [
      { text: "Phin, ly cà phê riêng", type: "A" },
      { text: "Cốc cà phê đẹp, branded", type: "B" },
      { text: "Không có gì đặc biệt", type: "C" },
      { text: "Vài gói cà phê dự trữ", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn có chia sẻ cà phê với đồng nghiệp không?",
    options: [
      { text: "Có cà phê riêng, chất lượng cao", type: "A" },
      { text: "Dùng chung cà phê công ty", type: "B" },
      { text: "Hay mời đồng nghiệp uống cùng", type: "C" },
      { text: "Ai nấy tự lo", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Khi họp, bạn có cần cà phê không?",
    options: [
      { text: "Luôn mang theo, không thể thiếu", type: "A" },
      { text: "Nếu họp dài thì có", type: "B" },
      { text: "Nếu có đồ uống phục vụ thì lấy", type: "C" },
      { text: "Không cần, tập trung vào cuộc họp", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Buổi chiều, bạn thường?",
    options: [
      { text: "Uống cà phê tiếp để không buồn ngủ", type: "A" },
      { text: "Uống cà phê nhạt hơn", type: "B" },
      { text: "Đi mua trà sữa với đồng nghiệp", type: "C" },
      { text: "Không uống, sợ mất ngủ", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Cà phê văn phòng với bạn là?",
    options: [
      { text: "Nhiên liệu để làm việc", type: "A" },
      { text: "Thói quen mỗi ngày", type: "B" },
      { text: "Cơ hội giao tiếp với đồng nghiệp", type: "C" },
      { text: "Thức uống yêu thích khi thích", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Nếu công ty không có cà phê miễn phí, bạn?",
    options: [
      { text: "Tự mang theo cà phê riêng", type: "A" },
      { text: "Mua cà phê từ máy bán tự động", type: "B" },
      { text: "Rủ đồng nghiệp đi quán", type: "C" },
      { text: "Uống thứ khác thay thế", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Khi work from home, thói quen cà phê có thay đổi không?",
    options: [
      { text: "Vẫn pha cà phê đúng giờ như ở công ty", type: "A" },
      { text: "Uống cà phê ngon hơn tại nhà", type: "B" },
      { text: "Nhớ không khí uống cà phê cùng đồng nghiệp", type: "C" },
      { text: "Linh hoạt hơn, không theo giờ cố định", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Nghiện Cà Phê Văn Phòng",
    emoji: "☕",
    description: "Cà phê là nhiên liệu không thể thiếu cho công việc của bạn! Bạn phụ thuộc vào caffeine để duy trì năng suất và không thể làm việc mà thiếu cà phê. Bạn là người workaholic, chăm chỉ và luôn cố gắng hết mình.",
    traits: ["Chăm chỉ", "Năng suất cao", "Phụ thuộc caffeine", "Workaholic"],
    strengths: ["Làm việc hiệu quả", "Luôn tập trung", "Hoàn thành deadline"],
    weaknesses: ["Phụ thuộc cà phê", "Dễ bị burn out"],
    tips: ["Giảm bớt caffeine dần", "Nghỉ ngơi đúng cách", "Chăm sóc sức khỏe"],
  },
  B: {
    type: "B",
    title: "Người Uống Cà Phê Có Kế Hoạch",
    emoji: "📋",
    description: "Bạn uống cà phê có kế hoạch và điều độ! Bạn biết cách sử dụng caffeine một cách thông minh để hỗ trợ công việc mà không bị phụ thuộc. Bạn là người có kỷ luật và biết cách cân bằng.",
    traits: ["Kỷ luật", "Cân bằng", "Thông minh", "Điều độ"],
    strengths: ["Quản lý sức khỏe tốt", "Làm việc hiệu quả", "Không bị phụ thuộc"],
    weaknesses: ["Đôi khi quá nghiêm khắc", "Thiếu linh hoạt"],
    tips: ["Đôi khi hãy thư giãn", "Thử những loại cà phê mới"],
  },
  C: {
    type: "C",
    title: "Người Xã Giao Qua Cà Phê",
    emoji: "👥",
    description: "Cà phê văn phòng là cơ hội để kết nối với đồng nghiệp! Bạn thích những buổi break đi mua cà phê cùng team hơn là ngồi một mình. Bạn là người thân thiện, hòa đồng và biết cách xây dựng quan hệ.",
    traits: ["Thân thiện", "Hòa đồng", "Team player", "Vui vẻ"],
    strengths: ["Quan hệ đồng nghiệp tốt", "Tạo không khí vui vẻ", "Networking"],
    weaknesses: ["Đôi khi mất tập trung", "Dành nhiều thời gian xã giao"],
    tips: ["Cân bằng giữa xã giao và công việc", "Tập trung hơn khi cần"],
  },
  D: {
    type: "D",
    title: "Người Uống Cà Phê Tùy Hứng",
    emoji: "🎲",
    description: "Bạn uống cà phê theo tâm trạng và cảm hứng! Không có quy tắc cố định, bạn linh hoạt và không bị phụ thuộc vào caffeine. Bạn là người dễ thích nghi, linh hoạt và tự do.",
    traits: ["Linh hoạt", "Tự do", "Dễ thích nghi", "Không phụ thuộc"],
    strengths: ["Sức khỏe tốt", "Không bị caffeine điều khiển", "Linh hoạt"],
    weaknesses: ["Đôi khi thiếu năng lượng", "Không có routine"],
    tips: ["Có thể tạo thói quen nhất quán hơn", "Khám phá thêm về cà phê"],
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
