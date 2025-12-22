// Trắc nghiệm Tập trung
// Kiểm tra khả năng tập trung và chú ý của bạn

export const questions = [
  {
    id: 1,
    question: "Trong dãy số 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, có bao nhiêu số chia hết cho 2?",
    options: [
      { text: "5 số", type: "A" },
      { text: "4 số", type: "B" },
      { text: "6 số", type: "C" },
      { text: "3 số", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Đọc kỹ: MẸ EM ĐI CHỢ MUA CÁ. Có bao nhiêu chữ 'M' trong câu?",
    options: [
      { text: "2 chữ", type: "A" },
      { text: "1 chữ", type: "B" },
      { text: "3 chữ", type: "C" },
      { text: "4 chữ", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Tìm từ khác biệt: CÀ CHUA, KHOAI TÂY, XÀ LÁCH, CÀ RỐT, CÀ TÍM",
    options: [
      { text: "XÀ LÁCH (lá, không phải quả hay củ)", type: "A" },
      { text: "CÀ CHUA", type: "D" },
      { text: "KHOAI TÂY", type: "B" },
      { text: "CÀ RỐT", type: "C" },
    ],
  },
  {
    id: 4,
    question: "Trong hình vuông 5x5, có tổng cộng bao nhiêu ô vuông nhỏ?",
    options: [
      { text: "25 ô", type: "A" },
      { text: "20 ô", type: "B" },
      { text: "30 ô", type: "C" },
      { text: "16 ô", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Đếm số chữ số 5 trong dãy: 5, 15, 25, 35, 45, 55, 65, 75, 85, 95",
    options: [
      { text: "11 chữ số 5", type: "A" },
      { text: "10 chữ số 5", type: "B" },
      { text: "12 chữ số 5", type: "C" },
      { text: "9 chữ số 5", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Tìm lỗi sai trong dãy: 2, 4, 6, 8, 10, 11, 14, 16",
    options: [
      { text: "11 (phải là 12)", type: "A" },
      { text: "14 (phải là 13)", type: "D" },
      { text: "16 (phải là 15)", type: "B" },
      { text: "Không có lỗi", type: "C" },
    ],
  },
  {
    id: 7,
    question: "ABCDEFGHIJKLMNOPQRSTUVWXYZ - Chữ cái thứ 13 là gì?",
    options: [
      { text: "M", type: "A" },
      { text: "N", type: "B" },
      { text: "L", type: "C" },
      { text: "O", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Có 5 quả táo, bạn lấy đi 2 quả rồi trả lại 1 quả. Còn bao nhiêu quả trong rổ ban đầu?",
    options: [
      { text: "4 quả", type: "A" },
      { text: "3 quả", type: "B" },
      { text: "5 quả", type: "C" },
      { text: "2 quả", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Trong câu 'Con mèo đuổi con chuột chạy quanh cái bàn', có bao nhiêu từ 'con'?",
    options: [
      { text: "2 từ", type: "A" },
      { text: "1 từ", type: "B" },
      { text: "3 từ", type: "C" },
      { text: "4 từ", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Xem kỹ: 🔴🔵🟢🔴🔵🟢🔴🔵🟢. Màu nào xuất hiện nhiều nhất?",
    options: [
      { text: "Cả 3 màu bằng nhau (mỗi màu 3 lần)", type: "A" },
      { text: "Đỏ", type: "B" },
      { text: "Xanh dương", type: "C" },
      { text: "Xanh lá", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Một chiếc đồng hồ điểm 6 tiếng trong 6 giây. Hỏi điểm 12 tiếng mất bao lâu?",
    options: [
      { text: "11 giây (có 11 khoảng)", type: "A" },
      { text: "12 giây", type: "B" },
      { text: "6 giây", type: "D" },
      { text: "10 giây", type: "C" },
    ],
  },
  {
    id: 12,
    question: "Tìm số khác biệt: 12, 24, 36, 48, 50, 72",
    options: [
      { text: "50 (không chia hết cho 12)", type: "A" },
      { text: "72", type: "D" },
      { text: "24", type: "B" },
      { text: "36", type: "C" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Siêu Tập Trung",
    emoji: "🎯",
    description: "Bạn có khả năng tập trung xuất sắc! Bạn chú ý đến từng chi tiết nhỏ và không bỏ sót thông tin quan trọng.",
    traits: ["Chú ý chi tiết", "Tập trung cao", "Quan sát kỹ", "Không dễ bị phân tâm"],
    strengths: ["Phát hiện lỗi", "Làm việc chính xác", "Kiểm tra chất lượng"],
    weaknesses: ["Đôi khi quá tập trung vào chi tiết", "Có thể bỏ qua bức tranh lớn"],
    tips: ["Cân bằng giữa chi tiết và tổng thể", "Nghỉ ngơi để duy trì sự tập trung"],
  },
  B: {
    type: "B",
    title: "Người Tập Trung Tốt",
    emoji: "👁️",
    description: "Bạn có khả năng tập trung khá tốt, có thể chú ý và xử lý hầu hết thông tin cần thiết.",
    traits: ["Cẩn thận", "Kiên nhẫn", "Có phương pháp", "Tập trung khi cần"],
    strengths: ["Làm việc hiệu quả", "Ít mắc lỗi", "Đọc hiểu tốt"],
    weaknesses: ["Đôi khi bị phân tâm", "Cần môi trường yên tĩnh"],
    tips: ["Loại bỏ yếu tố gây phân tâm", "Sử dụng kỹ thuật Pomodoro"],
  },
  C: {
    type: "C",
    title: "Người Cần Cải Thiện Sự Tập Trung",
    emoji: "📱",
    description: "Khả năng tập trung của bạn ở mức trung bình. Bạn có thể bỏ sót một số chi tiết quan trọng.",
    traits: ["Dễ bị phân tâm", "Cần cải thiện", "Có tiềm năng", "Đang phát triển"],
    strengths: ["Linh hoạt", "Đa nhiệm", "Thích nghi nhanh"],
    weaknesses: ["Hay bỏ sót chi tiết", "Khó tập trung lâu"],
    tips: ["Tập thiền để cải thiện sự tập trung", "Chia nhỏ công việc", "Giảm thời gian dùng điện thoại"],
  },
  D: {
    type: "D",
    title: "Người Cần Rèn Luyện Nhiều",
    emoji: "🌱",
    description: "Tập trung chưa phải điểm mạnh của bạn, nhưng với sự rèn luyện, bạn hoàn toàn có thể cải thiện.",
    traits: ["Tư duy phân tán", "Sáng tạo", "Cần hướng dẫn", "Tiềm năng ẩn"],
    strengths: ["Tư duy rộng", "Không bị gò bó", "Sáng tạo"],
    weaknesses: ["Rất dễ bị phân tâm", "Hay mắc lỗi do không chú ý"],
    tips: ["Bắt đầu với bài tập tập trung ngắn", "Ngủ đủ giấc", "Tập thể dục thường xuyên", "Giảm caffeine"],
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
