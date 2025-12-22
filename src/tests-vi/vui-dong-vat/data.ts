// Bạn Là Động Vật Nào?
// Khám phá loài động vật đại diện cho tính cách của bạn

export const questions = [
  {
    id: 1,
    question: "Cuối tuần bạn thích làm gì nhất?",
    options: [
      { text: "Ở nhà xem phim, đọc sách, nghỉ ngơi", type: "A" },
      { text: "Đi chơi với nhóm bạn đông vui", type: "B" },
      { text: "Tập gym, chơi thể thao, vận động", type: "C" },
      { text: "Đi du lịch, khám phá nơi mới", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Khi có ai nói xấu sau lưng, bạn?",
    options: [
      { text: "Giả như không biết, tránh xa người đó", type: "A" },
      { text: "Kể cho bạn bè nghe, bàn cách xử lý", type: "B" },
      { text: "Đối mặt trực tiếp, nói rõ ràng", type: "C" },
      { text: "Quan sát, tìm hiểu lý do rồi mới phản ứng", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn thích ăn uống kiểu nào?",
    options: [
      { text: "Ăn ở nhà, tự nấu hoặc order về", type: "A" },
      { text: "Đi ăn cùng bạn bè, quán đông vui", type: "B" },
      { text: "Ăn nhanh để còn thời gian làm việc khác", type: "C" },
      { text: "Thử nhà hàng mới, món lạ", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Trong công việc, bạn là người thế nào?",
    options: [
      { text: "Làm việc độc lập, không thích bị quản", type: "A" },
      { text: "Thích teamwork, làm việc nhóm", type: "B" },
      { text: "Tập trung hoàn thành mục tiêu, cạnh tranh cao", type: "C" },
      { text: "Linh hoạt, sáng tạo, có nhiều ý tưởng", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi buồn, bạn làm gì?",
    options: [
      { text: "Thu mình lại, muốn ở một mình", type: "A" },
      { text: "Tìm bạn bè tâm sự, chia sẻ", type: "B" },
      { text: "Tập thể dục hoặc làm gì đó để quên đi", type: "C" },
      { text: "Đi đâu đó, thay đổi không gian", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn ngủ như thế nào?",
    options: [
      { text: "Ngủ nhiều, thích ngủ nướng", type: "A" },
      { text: "Ngủ đủ giấc, đúng giờ", type: "B" },
      { text: "Ngủ ít, dậy sớm năng động", type: "C" },
      { text: "Thất thường, khi sớm khi muộn", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Phong cách ăn mặc của bạn?",
    options: [
      { text: "Thoải mái, đơn giản là chính", type: "A" },
      { text: "Theo trend, giống với bạn bè", type: "B" },
      { text: "Năng động, sporty", type: "C" },
      { text: "Độc đáo, cá tính riêng", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn thích loại nhạc nào?",
    options: [
      { text: "Nhạc nhẹ nhàng, ballad, acoustic", type: "A" },
      { text: "Nhạc vui nhộn, V-pop, K-pop", type: "B" },
      { text: "Nhạc sôi động, EDM, rock", type: "C" },
      { text: "Nhiều thể loại, tùy tâm trạng", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi có deadline gấp, bạn?",
    options: [
      { text: "Lo lắng, stress nhưng vẫn làm xong", type: "A" },
      { text: "Nhờ bạn bè, đồng nghiệp hỗ trợ", type: "B" },
      { text: "Tập trung cao độ, làm xuyên đêm nếu cần", type: "C" },
      { text: "Tìm cách thông minh để hoàn thành nhanh", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn mô tả bản thân bằng từ nào?",
    options: [
      { text: "Hiền lành, ít nói", type: "A" },
      { text: "Thân thiện, hòa đồng", type: "B" },
      { text: "Mạnh mẽ, quyết đoán", type: "C" },
      { text: "Thông minh, linh hoạt", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Bạn Là Chú Mèo",
    emoji: "🐱",
    description: "Giống như mèo, bạn thích sự yên bình, độc lập và có không gian riêng. Bạn không cần nhiều người xung quanh để hạnh phúc, chỉ cần một góc nhỏ ấm áp và sự tự do. Bạn tinh tế, quan sát tốt và có chiều sâu nội tâm.",
    traits: ["Độc lập", "Tinh tế", "Yêu tự do", "Nhạy cảm"],
    strengths: ["Tự chủ", "Quan sát tốt", "Không phụ thuộc người khác"],
    weaknesses: ["Đôi khi quá khép kín", "Khó mở lòng"],
    tips: ["Thử giao lưu nhiều hơn", "Cho phép người khác đến gần"],
  },
  B: {
    type: "B",
    title: "Bạn Là Chú Chó",
    emoji: "🐕",
    description: "Giống như chó, bạn trung thành, thân thiện và yêu thích sự kết nối. Bạn là người bạn tốt nhất mà ai cũng muốn có, luôn có mặt khi cần và mang đến niềm vui cho mọi người xung quanh.",
    traits: ["Trung thành", "Thân thiện", "Vui vẻ", "Đáng tin"],
    strengths: ["Có nhiều bạn bè", "Được mọi người yêu mến", "Biết quan tâm"],
    weaknesses: ["Đôi khi quá phụ thuộc", "Khó nói không"],
    tips: ["Học cách từ chối", "Dành thời gian cho bản thân"],
  },
  C: {
    type: "C",
    title: "Bạn Là Chú Sư Tử",
    emoji: "🦁",
    description: "Giống như sư tử, bạn mạnh mẽ, tự tin và có khả năng lãnh đạo. Bạn không ngại đối mặt với thử thách, luôn tiến về phía trước và bảo vệ những người bạn quan tâm. Bạn là nguồn cảm hứng cho nhiều người.",
    traits: ["Mạnh mẽ", "Tự tin", "Lãnh đạo", "Bảo vệ"],
    strengths: ["Dẫn dắt người khác", "Không sợ khó khăn", "Có ảnh hưởng"],
    weaknesses: ["Đôi khi quá áp đặt", "Khó chấp nhận thất bại"],
    tips: ["Lắng nghe nhiều hơn", "Chấp nhận sự khác biệt"],
  },
  D: {
    type: "D",
    title: "Bạn Là Chú Cáo",
    emoji: "🦊",
    description: "Giống như cáo, bạn thông minh, linh hoạt và đầy sáng tạo. Bạn có khả năng thích nghi với mọi hoàn cảnh, luôn tìm ra giải pháp thông minh và không bị ràng buộc bởi khuôn mẫu. Bạn là người đầy bất ngờ và thú vị.",
    traits: ["Thông minh", "Linh hoạt", "Sáng tạo", "Thích khám phá"],
    strengths: ["Nhiều ý tưởng", "Thích nghi nhanh", "Giải quyết vấn đề giỏi"],
    weaknesses: ["Đôi khi khó đoán", "Thiếu kiên nhẫn"],
    tips: ["Kiên trì hơn với một việc", "Chia sẻ ý tưởng với người khác"],
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
