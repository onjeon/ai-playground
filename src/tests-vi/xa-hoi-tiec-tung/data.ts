// Cách xử sự tiệc tùng
// Khám phá cách bạn xử sự trong các buổi tiệc tùng

export const questions = [
  {
    id: 1,
    question: "Khi được mời đi party, bạn?",
    options: [
      { text: "Hào hứng, confirm ngay", type: "A" },
      { text: "Xem ai đi, địa điểm nào", type: "B" },
      { text: "Phân vân, có thể từ chối", type: "C" },
      { text: "Thường từ chối", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn đến party lúc mấy giờ?",
    options: [
      { text: "Đến sớm, help set up", type: "A" },
      { text: "Đúng giờ", type: "B" },
      { text: "Fashionably late", type: "C" },
      { text: "Rất muộn hoặc không đến", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Trong party, bạn thường ở đâu?",
    options: [
      { text: "Giữa dance floor, là tâm điểm", type: "A" },
      { text: "Di chuyển, nói chuyện với nhiều người", type: "B" },
      { text: "Ở góc, với nhóm bạn thân", type: "C" },
      { text: "Gần cửa ra vào, sẵn sàng về", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Về việc uống rượu bia, bạn?",
    options: [
      { text: "Uống nhiều, quẩy hết mình", type: "A" },
      { text: "Uống vừa phải, kiểm soát", type: "B" },
      { text: "Uống ít hoặc không uống", type: "C" },
      { text: "Chỉ uống nước", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn giao tiếp với người lạ thế nào?",
    options: [
      { text: "Dễ dàng, bắt chuyện với bất kỳ ai", type: "A" },
      { text: "Có thể, nếu họ friendly", type: "B" },
      { text: "Khó khăn, cần thời gian", type: "C" },
      { text: "Tránh, chỉ nói với người quen", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Về nhảy múa, bạn?",
    options: [
      { text: "Lên sàn ngay khi có nhạc", type: "A" },
      { text: "Nhảy khi đã hơi say", type: "B" },
      { text: "Không nhảy, ngồi xem", type: "C" },
      { text: "Không bao giờ nhảy", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn thường về lúc nào?",
    options: [
      { text: "Người cuối cùng rời đi", type: "A" },
      { text: "Khi party bắt đầu vãn", type: "B" },
      { text: "Sớm hơn mọi người", type: "C" },
      { text: "Ngay khi có cơ hội", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Nếu không biết ai trong party, bạn?",
    options: [
      { text: "Tự giới thiệu, làm quen", type: "A" },
      { text: "Đợi người khác bắt chuyện", type: "B" },
      { text: "Bám theo người mời", type: "C" },
      { text: "Rất không thoải mái, muốn về", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Về việc chụp ảnh, quay video, bạn?",
    options: [
      { text: "Post story liên tục", type: "A" },
      { text: "Chụp vài kiểu để nhớ", type: "B" },
      { text: "Tránh camera", type: "C" },
      { text: "Không chụp gì cả", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Hôm sau party, bạn thường?",
    options: [
      { text: "Kể lại chuyện với mọi người", type: "A" },
      { text: "Xem lại ảnh, nhớ kỷ niệm vui", type: "B" },
      { text: "Mệt, cần nghỉ ngơi", type: "C" },
      { text: "Hối hận vì đã đi", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn thích loại party nào?",
    options: [
      { text: "Club, bar, đông người, ồn ào", type: "A" },
      { text: "House party, bạn bè thân", type: "B" },
      { text: "Tiệc nhỏ, ít người, trò chuyện", type: "C" },
      { text: "Không thích party", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Điều bạn thích nhất về party?",
    options: [
      { text: "Năng lượng, vui vẻ, nhảy múa", type: "A" },
      { text: "Gặp gỡ, kết nối với mọi người", type: "B" },
      { text: "Đồ ăn, thức uống", type: "C" },
      { text: "Không thích gì về party", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Party Animal",
    emoji: "🎉",
    description: "Bạn sinh ra để party! Năng lượng dồi dào, thích giao tiếp, nhảy múa và tận hưởng mọi khoảnh khắc. Không có bạn, party sẽ kém vui hẳn.",
    traits: ["Năng lượng cao", "Thích giao tiếp", "Tâm điểm chú ý", "Vui vẻ"],
    strengths: ["Tạo không khí vui", "Kết nối mọi người", "Tận hưởng cuộc sống"],
    weaknesses: ["Có thể quá ồn ào", "Đôi khi mất kiểm soát"],
    tips: ["Biết điểm dừng", "Chăm sóc sức khỏe"],
  },
  B: {
    type: "B",
    title: "Social Butterfly",
    emoji: "🦋",
    description: "Bạn tận hưởng party theo cách của mình - giao lưu, kết nối, nhưng vẫn giữ sự kiểm soát. Bạn là người dễ gần và được mọi người yêu mến.",
    traits: ["Xã hội", "Cân bằng", "Dễ gần", "Linh hoạt"],
    strengths: ["Kết nối tốt", "Kiểm soát bản thân", "Có nhiều bạn"],
    weaknesses: ["Đôi khi quá selective", "Có thể bỏ lỡ vui"],
    tips: ["Thử thả lỏng đôi khi", "Tận hưởng nhiều hơn"],
  },
  C: {
    type: "C",
    title: "Wallflower",
    emoji: "🌸",
    description: "Party không phải môi trường tự nhiên của bạn. Bạn thích những buổi gặp mặt nhỏ, trò chuyện sâu hơn là đám đông ồn ào.",
    traits: ["Hướng nội", "Thích nhỏ", "Quan sát", "Kín đáo"],
    strengths: ["Không giả tạo", "Biết mình thích gì", "Kết nối sâu"],
    weaknesses: ["Có thể bị cô lập", "Bỏ lỡ cơ hội networking"],
    tips: ["Thử tham gia nhiều hơn", "Bắt chuyện với 1 người mới"],
  },
  D: {
    type: "D",
    title: "Anti-Party",
    emoji: "🏠",
    description: "Party không phải thứ của bạn và bạn không ngại thừa nhận điều đó. Bạn thích những hoạt động khác hơn và điều đó hoàn toàn ok.",
    traits: ["Không thích đông", "Thích riêng tư", "Độc lập", "Tự do"],
    strengths: ["Biết bản thân", "Không ép mình", "Tiết kiệm"],
    weaknesses: ["Có thể bỏ lỡ kết nối", "Bị xem là khó gần"],
    tips: ["Thử tham gia party nhỏ với bạn thân", "Không phải từ chối tất cả"],
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
