// Cách ra quyết định lớn
// Khám phá phong cách ra quyết định quan trọng của bạn

export const questions = [
  {
    id: 1,
    question: "Khi phải đưa ra quyết định lớn trong đời, bạn thường?",
    options: [
      { text: "Suy nghĩ kỹ lưỡng, phân tích mọi mặt", type: "A" },
      { text: "Hỏi ý kiến nhiều người trước", type: "B" },
      { text: "Tin vào trực giác và cảm xúc", type: "C" },
      { text: "Quyết định nhanh, rồi điều chỉnh sau", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn mất bao lâu để quyết định chuyện lớn như mua nhà/xe?",
    options: [
      { text: "Nhiều tháng, nghiên cứu kỹ mọi thứ", type: "A" },
      { text: "Vài tuần, hỏi ý kiến gia đình, bạn bè", type: "B" },
      { text: "Vài ngày, khi cảm thấy đúng là quyết", type: "C" },
      { text: "Rất nhanh, thấy phù hợp là mua", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi quyết định chuyển việc, bạn cân nhắc gì?",
    options: [
      { text: "Lương, benefits, cơ hội thăng tiến", type: "A" },
      { text: "Môi trường làm việc, văn hóa công ty", type: "B" },
      { text: "Cảm giác với công việc và sếp mới", type: "C" },
      { text: "Thử thách mới, cơ hội học hỏi", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn xử lý thông tin như thế nào trước quyết định lớn?",
    options: [
      { text: "Làm bảng so sánh, liệt kê pros/cons", type: "A" },
      { text: "Thu thập ý kiến từ người có kinh nghiệm", type: "B" },
      { text: "Suy ngẫm một mình, lắng nghe bản thân", type: "C" },
      { text: "Tìm hiểu đủ thông tin cơ bản rồi quyết", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi gia đình có ý kiến khác với bạn về quyết định lớn?",
    options: [
      { text: "Đưa ra số liệu, phân tích để thuyết phục", type: "A" },
      { text: "Cân nhắc kỹ ý kiến của họ, có thể thay đổi", type: "B" },
      { text: "Lắng nghe nhưng tin vào cảm xúc của mình", type: "C" },
      { text: "Quyết định theo ý mình, chịu trách nhiệm", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn lo lắng gì nhất trước quyết định lớn?",
    options: [
      { text: "Sợ thiếu thông tin, đánh giá sai", type: "A" },
      { text: "Sợ làm người khác thất vọng", type: "B" },
      { text: "Sợ hối hận sau này", type: "C" },
      { text: "Sợ bỏ lỡ cơ hội nếu chần chừ", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Sau khi quyết định xong, bạn?",
    options: [
      { text: "Xây dựng kế hoạch thực hiện chi tiết", type: "A" },
      { text: "Thông báo cho mọi người, xin hỗ trợ", type: "B" },
      { text: "Tự tin tiến tới, không nhìn lại", type: "C" },
      { text: "Bắt tay vào làm ngay", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Khi quyết định không như mong đợi, bạn?",
    options: [
      { text: "Phân tích xem sai ở đâu, rút kinh nghiệm", type: "A" },
      { text: "Chia sẻ với người thân để được hỗ trợ", type: "B" },
      { text: "Chấp nhận và điều chỉnh theo cảm xúc", type: "C" },
      { text: "Tìm cách giải quyết nhanh, không vướng bận", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn quyết định kết hôn/ly hôn thế nào?",
    options: [
      { text: "Sau khi xem xét mọi khía cạnh thực tế", type: "A" },
      { text: "Khi gia đình và bạn bè cũng đồng ý", type: "B" },
      { text: "Khi trái tim nói có/không", type: "C" },
      { text: "Khi cảm thấy đây là thời điểm đúng", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn có hay trì hoãn quyết định lớn không?",
    options: [
      { text: "Có, vì cần thêm thông tin", type: "A" },
      { text: "Có, vì chờ ý kiến người khác", type: "B" },
      { text: "Có, vì cần thời gian cảm nhận", type: "C" },
      { text: "Không, quyết là quyết ngay", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Ai có ảnh hưởng lớn nhất đến quyết định của bạn?",
    options: [
      { text: "Không ai, tự mình quyết dựa trên logic", type: "A" },
      { text: "Gia đình, người thân", type: "B" },
      { text: "Chính mình và cảm xúc cá nhân", type: "C" },
      { text: "Hoàn cảnh và thời cơ", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Điều quan trọng nhất khi ra quyết định lớn?",
    options: [
      { text: "Có đủ thông tin và phân tích kỹ", type: "A" },
      { text: "Có sự đồng thuận của người quan trọng", type: "B" },
      { text: "Cảm thấy đúng với bản thân", type: "C" },
      { text: "Không bỏ lỡ cơ hội", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người quyết định logic",
    emoji: "🧠",
    description: "Bạn là người ra quyết định dựa trên phân tích và logic. Bạn cần đủ thông tin, số liệu và thời gian để đưa ra quyết định đúng đắn.",
    traits: ["Logic", "Phân tích", "Cẩn thận", "Kỹ lưỡng"],
    strengths: ["Quyết định có cơ sở", "Ít sai lầm", "Có kế hoạch rõ ràng"],
    weaknesses: ["Có thể chậm", "Đôi khi overthinking"],
    tips: ["Đôi khi tin vào trực giác", "Không có quyết định hoàn hảo"],
  },
  B: {
    type: "B",
    title: "Người quyết định hài hòa",
    emoji: "🤝",
    description: "Bạn là người coi trọng ý kiến của người khác khi ra quyết định. Bạn muốn mọi người đồng thuận và hạnh phúc với quyết định của mình.",
    traits: ["Hài hòa", "Quan tâm người khác", "Cân nhắc", "Đồng thuận"],
    strengths: ["Giữ được mối quan hệ", "Nhiều góc nhìn", "Không làm ai buồn"],
    weaknesses: ["Có thể mất bản thân", "Phụ thuộc ý kiến người khác"],
    tips: ["Tin vào bản thân hơn", "Không thể làm hài lòng tất cả"],
  },
  C: {
    type: "C",
    title: "Người quyết định trực giác",
    emoji: "💫",
    description: "Bạn là người tin vào trực giác và cảm xúc. Bạn nghe theo tiếng nói bên trong và quyết định khi cảm thấy đúng.",
    traits: ["Trực giác", "Cảm xúc", "Tin bản thân", "Quyết đoán"],
    strengths: ["Quyết định nhanh", "Đúng với bản thân", "Không hối hận"],
    weaknesses: ["Có thể thiếu cơ sở logic", "Đôi khi cảm xúc chi phối"],
    tips: ["Kết hợp với phân tích logic", "Kiểm tra lại cảm xúc nhất thời"],
  },
  D: {
    type: "D",
    title: "Người quyết định hành động",
    emoji: "⚡",
    description: "Bạn là người hành động nhanh, không thích chần chừ. Bạn tin rằng quyết định rồi điều chỉnh tốt hơn là không quyết định.",
    traits: ["Nhanh nhẹn", "Hành động", "Linh hoạt", "Chấp nhận rủi ro"],
    strengths: ["Không bỏ lỡ cơ hội", "Quyết đoán", "Thích nghi nhanh"],
    weaknesses: ["Có thể vội vàng", "Đôi khi thiếu cân nhắc"],
    tips: ["Dành thêm thời gian cho quyết định lớn", "Lắng nghe ý kiến khác"],
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
