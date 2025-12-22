// Cách Thư Giãn Của Bạn
// Khám phá phong cách nghỉ ngơi và thư giãn của bạn

export const questions = [
  {
    id: 1,
    question: "Sau một ngày làm việc mệt mỏi, bạn thường làm gì?",
    options: [
      { text: "Nằm dài xem phim, lướt điện thoại", type: "A" },
      { text: "Đi dạo, hít thở không khí trong lành", type: "B" },
      { text: "Gặp bạn bè, đi cà phê tán gẫu", type: "C" },
      { text: "Làm việc nhà, dọn dẹp cho đầu óc thoải mái", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thích thư giãn một mình hay cùng người khác?",
    options: [
      { text: "Một mình, cần không gian riêng", type: "A" },
      { text: "Với gia đình, người thân", type: "B" },
      { text: "Với bạn bè, càng đông càng vui", type: "C" },
      { text: "Tùy mood, có lúc cần một mình, có lúc cần người bầu bạn", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Hoạt động nào giúp bạn thư giãn nhất?",
    options: [
      { text: "Xem phim, series, YouTube", type: "A" },
      { text: "Đọc sách, nghe podcast", type: "B" },
      { text: "Chơi game, lướt mạng xã hội", type: "C" },
      { text: "Thiền, yoga, tắm nước nóng", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Cuối tuần của bạn thường như thế nào?",
    options: [
      { text: "Ngủ bù, nghỉ ngơi tại nhà", type: "A" },
      { text: "Đi chơi, khám phá nơi mới", type: "B" },
      { text: "Gặp gỡ bạn bè, đi nhậu, karaoke", type: "C" },
      { text: "Làm việc cá nhân, sở thích riêng", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi stress, cách thư giãn của bạn là gì?",
    options: [
      { text: "Ăn uống, comfort food", type: "A" },
      { text: "Nghe nhạc, hát karaoke", type: "B" },
      { text: "Tâm sự với người thân, bạn bè", type: "C" },
      { text: "Ngủ một giấc, để mai tính", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn thích không gian thư giãn như thế nào?",
    options: [
      { text: "Phòng tối, yên tĩnh, có điều hòa", type: "A" },
      { text: "Ngoài trời, công viên, thiên nhiên", type: "B" },
      { text: "Quán cà phê, quán nhậu, nơi đông người", type: "C" },
      { text: "Spa, massage, nơi được chăm sóc", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn hay làm gì trước khi đi ngủ?",
    options: [
      { text: "Lướt điện thoại cho đến khi buồn ngủ", type: "A" },
      { text: "Đọc sách, nghe nhạc nhẹ", type: "B" },
      { text: "Chat với bạn bè, người yêu", type: "C" },
      { text: "Tắm nước nóng, skin care, thư giãn", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Kỳ nghỉ lý tưởng của bạn?",
    options: [
      { text: "Staycation, ở nhà nghỉ ngơi", type: "A" },
      { text: "Du lịch biển, nghỉ dưỡng resort", type: "B" },
      { text: "Du lịch phượt, khám phá", type: "C" },
      { text: "Về quê thăm gia đình", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn có thể ngồi không làm gì không?",
    options: [
      { text: "Được, thích chill không suy nghĩ gì", type: "A" },
      { text: "Khó, phải làm gì đó mới chịu", type: "B" },
      { text: "Được nếu có ai đó bên cạnh", type: "C" },
      { text: "Được nếu có view đẹp, không gian thư thái", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Thư giãn đối với bạn là gì?",
    options: [
      { text: "Không phải nghĩ gì, não được nghỉ", type: "A" },
      { text: "Làm điều mình thích, không áp lực", type: "B" },
      { text: "Được ở bên người mình yêu thương", type: "C" },
      { text: "Được chăm sóc bản thân, self-care", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người Thích Ở Ẩn",
    emoji: "🛋️",
    percentage: 90,
    description: "Thư giãn với bạn là được ở nhà, không phải đi đâu, không phải gặp ai. Netflix, điện thoại và chiếc sofa là combo hoàn hảo. Introvert vibes mạnh mẽ!",
    characteristics: ["Thích ở nhà", "Yêu sự yên tĩnh", "Introvert", "Tự do cá nhân"],
    advice: "Thỉnh thoảng ra ngoài đi nhé! Ánh nắng và không khí trong lành cũng rất tốt cho sức khỏe tinh thần đó.",
  },
  B: {
    type: "B",
    title: "Người Yêu Thiên Nhiên",
    emoji: "🌿",
    percentage: 85,
    description: "Bạn thư giãn bằng cách kết nối với thiên nhiên. Đi dạo công viên, ngắm hoàng hôn, hít thở không khí trong lành - đó là liệu pháp tốt nhất cho tâm hồn bạn.",
    characteristics: ["Yêu thiên nhiên", "Thích hoạt động ngoài trời", "Cân bằng", "Sống lành mạnh"],
    advice: "Tuyệt vời! Đây là cách thư giãn rất lành mạnh. Thử camping hoặc hiking để có trải nghiệm mới nhé!",
  },
  C: {
    type: "C",
    title: "Người Thích Xã Giao",
    emoji: "🎉",
    percentage: 70,
    description: "Thư giãn với bạn là được gặp gỡ, tán gẫu với bạn bè. Cà phê, nhậu, karaoke - miễn có người cùng là bạn vui. Năng lượng của bạn đến từ những người xung quanh!",
    characteristics: ["Thích giao tiếp", "Extrovert", "Năng động", "Yêu bạn bè"],
    advice: "Vui vẻ là tốt, nhưng đừng quên dành thời gian cho bản thân nữa nhé. Đôi khi một mình cũng cần thiết!",
  },
  D: {
    type: "D",
    title: "Người Chăm Sóc Bản Thân",
    emoji: "🧖",
    percentage: 80,
    description: "Bạn xem thư giãn là cơ hội để self-care. Spa, massage, skin care, yoga - bạn đầu tư cho bản thân một cách nghiêm túc. Thư giãn phải có chất lượng!",
    characteristics: ["Self-care", "Chăm sóc bản thân", "Có ý thức", "Cân bằng trong ngoài"],
    advice: "Bạn hiểu rõ giá trị của việc chăm sóc bản thân. Hãy tiếp tục và đừng cảm thấy tội lỗi khi đầu tư cho chính mình!",
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
