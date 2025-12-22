// Trắc nghiệm Trí nhớ
// Kiểm tra khả năng ghi nhớ và xử lý thông tin của bạn

export const questions = [
  {
    id: 1,
    question: "Hãy ghi nhớ dãy số: 7-2-9-4-1-8. Dãy số này có bao nhiêu số chẵn?",
    options: [
      { text: "3 số", type: "A" },
      { text: "2 số", type: "B" },
      { text: "4 số", type: "C" },
      { text: "1 số", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Trong dãy từ: MÈO, CHÓ, GÀ, VỊT, TRÂU, BÒ - từ nào đứng thứ 4?",
    options: [
      { text: "VỊT", type: "A" },
      { text: "GÀ", type: "B" },
      { text: "TRÂU", type: "C" },
      { text: "CHÓ", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Nhớ lại: HÀ NỘI, ĐÀ NẴNG, HUẾ, SÀI GÒN, CẦN THƠ. Thành phố nào được nhắc đến NGAY TRƯỚC Sài Gòn?",
    options: [
      { text: "Huế", type: "A" },
      { text: "Đà Nẵng", type: "B" },
      { text: "Hà Nội", type: "C" },
      { text: "Cần Thơ", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn vừa đọc: ĐỎ, XANH, VÀNG, TÍM, CAM, HỒNG. Màu nào KHÔNG có trong danh sách?",
    options: [
      { text: "Trắng", type: "A" },
      { text: "Hồng", type: "D" },
      { text: "Cam", type: "C" },
      { text: "Tím", type: "B" },
    ],
  },
  {
    id: 5,
    question: "Ghi nhớ: 15, 28, 33, 47, 52, 69. Tổng của số đầu tiên và số cuối cùng là?",
    options: [
      { text: "84", type: "A" },
      { text: "67", type: "B" },
      { text: "80", type: "C" },
      { text: "121", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Nhớ lại: APPLE, BANANA, CHERRY, DATE, ELDERBERRY. Từ nào bắt đầu bằng chữ D?",
    options: [
      { text: "DATE", type: "A" },
      { text: "ELDERBERRY", type: "C" },
      { text: "Không có từ nào", type: "D" },
      { text: "CHERRY", type: "B" },
    ],
  },
  {
    id: 7,
    question: "Dãy số: 3, 6, 12, 24, 48. Số thứ 3 trong dãy là số nào?",
    options: [
      { text: "12", type: "A" },
      { text: "6", type: "B" },
      { text: "24", type: "C" },
      { text: "3", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Các ngày trong tuần theo thứ tự: Thứ 2, Thứ 3, Thứ 4, Thứ 5, Thứ 6, Thứ 7, Chủ Nhật. Ngày nào đứng giữa?",
    options: [
      { text: "Thứ 5", type: "A" },
      { text: "Thứ 4", type: "B" },
      { text: "Thứ 6", type: "C" },
      { text: "Thứ 3", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Ghi nhớ: VIỆT NAM, THÁI LAN, SINGAPORE, MALAYSIA, INDONESIA. Quốc gia nào được nhắc CUỐI CÙNG?",
    options: [
      { text: "Indonesia", type: "A" },
      { text: "Malaysia", type: "B" },
      { text: "Singapore", type: "C" },
      { text: "Thái Lan", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Nhớ lại các số: 11, 22, 33, 44, 55. Số nào chia hết cho 11?",
    options: [
      { text: "Tất cả các số", type: "A" },
      { text: "Chỉ số 11 và 22", type: "B" },
      { text: "Chỉ số 33", type: "C" },
      { text: "Không có số nào", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Danh sách: CÂY, HOA, QUẢ, LÁ, RỄ. Nếu đọc ngược lại, từ đầu tiên là gì?",
    options: [
      { text: "RỄ", type: "A" },
      { text: "LÁ", type: "B" },
      { text: "CÂY", type: "D" },
      { text: "QUẢ", type: "C" },
    ],
  },
  {
    id: 12,
    question: "Chuỗi ký tự: A1B2C3D4E5. Chữ cái đứng trước số 4 là gì?",
    options: [
      { text: "D", type: "A" },
      { text: "C", type: "B" },
      { text: "E", type: "C" },
      { text: "B", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Siêu Trí Nhớ",
    emoji: "🧠",
    description: "Bạn có trí nhớ tuyệt vời! Bạn dễ dàng ghi nhớ thông tin và truy xuất chúng khi cần. Đây là một tài năng quý giá.",
    traits: ["Ghi nhớ nhanh", "Truy xuất chính xác", "Tập trung cao", "Xử lý thông tin tốt"],
    strengths: ["Học tập hiệu quả", "Nhớ tên và mặt người", "Ghi nhớ chi tiết quan trọng"],
    weaknesses: ["Đôi khi nhớ cả những thứ không cần thiết", "Có thể quá tải thông tin"],
    tips: ["Sử dụng kỹ năng để học ngôn ngữ mới", "Thử thách với các bài tập trí nhớ nâng cao"],
  },
  B: {
    type: "B",
    title: "Trí Nhớ Tốt",
    emoji: "📚",
    description: "Bạn có trí nhớ khá tốt, có thể ghi nhớ và truy xuất hầu hết thông tin cần thiết một cách hiệu quả.",
    traits: ["Ghi nhớ ổn định", "Có hệ thống", "Cẩn thận", "Kiên nhẫn"],
    strengths: ["Học tập đều đặn", "Nhớ các sự kiện quan trọng", "Tổ chức thông tin tốt"],
    weaknesses: ["Cần ôn tập để nhớ lâu", "Đôi khi quên chi tiết nhỏ"],
    tips: ["Sử dụng ghi chú để hỗ trợ", "Áp dụng kỹ thuật spaced repetition"],
  },
  C: {
    type: "C",
    title: "Trí Nhớ Trung Bình",
    emoji: "📝",
    description: "Trí nhớ của bạn ở mức trung bình. Bạn nhớ được những thứ quan trọng nhưng có thể quên chi tiết.",
    traits: ["Nhớ điều quan trọng", "Cần nhắc nhở", "Có tiềm năng cải thiện", "Thực tế"],
    strengths: ["Tập trung vào điều cốt lõi", "Không bị quá tải", "Linh hoạt"],
    weaknesses: ["Hay quên việc nhỏ", "Cần ghi chép nhiều"],
    tips: ["Tạo thói quen ghi chép", "Sử dụng app nhắc nhở", "Luyện tập trí nhớ mỗi ngày"],
  },
  D: {
    type: "D",
    title: "Cần Rèn Luyện Trí Nhớ",
    emoji: "🌱",
    description: "Trí nhớ chưa phải điểm mạnh của bạn, nhưng tin vui là trí nhớ hoàn toàn có thể được cải thiện qua luyện tập!",
    traits: ["Cần hỗ trợ", "Dễ phân tâm", "Sống trong hiện tại", "Tiềm năng chưa khai thác"],
    strengths: ["Không bị ám ảnh bởi quá khứ", "Thoải mái", "Sáng tạo"],
    weaknesses: ["Hay quên deadline", "Khó nhớ tên người mới", "Cần nhắc nhở nhiều"],
    tips: ["Bắt đầu với các bài tập trí nhớ đơn giản", "Ngủ đủ giấc để não hoạt động tốt", "Giảm đa nhiệm để tập trung hơn"],
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
