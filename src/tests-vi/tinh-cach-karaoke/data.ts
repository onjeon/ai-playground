// Tính cách khi đi karaoke
// Khám phá tính cách của bạn qua cách bạn hát karaoke

export const questions = [
  {
    id: 1,
    question: "Khi đi karaoke, bạn thường hát thể loại nhạc gì?",
    options: [
      { text: "Nhạc trẻ, V-pop sôi động", type: "A" },
      { text: "Nhạc bolero, trữ tình", type: "B" },
      { text: "Nhạc ngoại, K-pop, US-UK", type: "C" },
      { text: "Tùy tâm trạng, gì cũng hát", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thường là người như thế nào trong nhóm đi karaoke?",
    options: [
      { text: "Người cầm mic suốt buổi", type: "A" },
      { text: "Người chọn bài cho mọi người", type: "B" },
      { text: "Người ngồi nghe và cổ vũ", type: "C" },
      { text: "Người phụ họa, hát cùng", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi có người hát dở, bạn sẽ?",
    options: [
      { text: "Cổ vũ nhiệt tình như hát hay", type: "A" },
      { text: "Im lặng, lịch sự", type: "B" },
      { text: "Đùa giỡn, trêu chọc nhẹ nhàng", type: "C" },
      { text: "Hát cùng để đỡ ngại", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bài hát 'tủ' của bạn là loại nào?",
    options: [
      { text: "Bài hit nổi tiếng ai cũng biết", type: "A" },
      { text: "Bài tình cảm sâu lắng", type: "B" },
      { text: "Bài khó, thể hiện kỹ thuật", type: "C" },
      { text: "Không có bài tủ, hát ngẫu hứng", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn thích đi karaoke với ai?",
    options: [
      { text: "Nhóm bạn thân đông đúc", type: "A" },
      { text: "Vài người bạn thân thiết", type: "B" },
      { text: "Chỉ một người, hẹn hò", type: "C" },
      { text: "Một mình cũng vui", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi điểm số hiện thấp, bạn cảm thấy?",
    options: [
      { text: "Cười xòa, không quan trọng", type: "A" },
      { text: "Hơi buồn nhưng vẫn vui", type: "B" },
      { text: "Hát lại để cải thiện điểm", type: "C" },
      { text: "Không quan tâm điểm số", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn thường đi karaoke vào lúc nào?",
    options: [
      { text: "Cuối tuần, đi chơi với bạn", type: "A" },
      { text: "Sau giờ làm, xả stress", type: "B" },
      { text: "Dịp đặc biệt, sinh nhật, tiệc", type: "C" },
      { text: "Bất cứ khi nào có mood", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn nghĩ gì về việc hát karaoke online?",
    options: [
      { text: "Hay, tiện lợi, hay dùng", type: "A" },
      { text: "Không bằng đi phòng thật", type: "B" },
      { text: "Thi thoảng dùng để luyện giọng", type: "C" },
      { text: "Chưa thử bao giờ", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi có người giành mic, bạn sẽ?",
    options: [
      { text: "Giành lại, đến lượt mình rồi", type: "A" },
      { text: "Nhường, không sao cả", type: "B" },
      { text: "Đợi họ hát xong rồi hát", type: "C" },
      { text: "Hát song ca luôn", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn có hay quay video khi đi karaoke không?",
    options: [
      { text: "Có, đăng lên mạng xã hội", type: "A" },
      { text: "Có, nhưng chỉ để xem lại", type: "B" },
      { text: "Không, muốn tận hưởng", type: "C" },
      { text: "Tùy tâm trạng", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Khi đi karaoke, bạn thường order gì?",
    options: [
      { text: "Nhiều đồ uống, đồ ăn", type: "A" },
      { text: "Chỉ nước uống cơ bản", type: "B" },
      { text: "Không order, chỉ hát", type: "C" },
      { text: "Tùy nhóm quyết định", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bạn đánh giá giọng hát của mình như thế nào?",
    options: [
      { text: "Hát được, tự tin lắm", type: "A" },
      { text: "Bình thường, vui là chính", type: "B" },
      { text: "Hát dở nhưng vẫn thích hát", type: "C" },
      { text: "Không biết, chưa ai đánh giá", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Ngôi sao sân khấu",
    emoji: "🎤",
    description: "Bạn là tâm điểm của mọi buổi karaoke. Bạn tự tin, sôi nổi và luôn biết cách tạo không khí vui vẻ cho mọi người. Mic là của bạn!",
    traits: ["Tự tin", "Sôi nổi", "Hướng ngoại", "Vui vẻ"],
    strengths: ["Tạo không khí", "Thu hút người khác", "Dám thể hiện"],
    weaknesses: ["Đôi khi quá chiếm sóng", "Thích được chú ý"],
    tips: ["Nhường cơ hội cho người khác", "Lắng nghe và cổ vũ bạn bè"],
  },
  B: {
    type: "B",
    title: "Người hòa nhã",
    emoji: "🎵",
    description: "Bạn là người điềm đạm, lịch sự và biết cách tạo sự thoải mái cho mọi người. Bạn thích những bài hát sâu lắng và trân trọng khoảnh khắc bên bạn bè.",
    traits: ["Điềm đạm", "Lịch sự", "Chu đáo", "Tinh tế"],
    strengths: ["Biết nhường nhịn", "Tạo cảm giác thoải mái", "Thấu hiểu"],
    weaknesses: ["Đôi khi quá nhường nhịn", "Ít thể hiện bản thân"],
    tips: ["Mạnh dạn thể hiện hơn", "Đừng ngại hát bài mình thích"],
  },
  C: {
    type: "C",
    title: "Người cầu toàn",
    emoji: "🎼",
    description: "Bạn là người có gu âm nhạc riêng và thích thể hiện kỹ năng. Bạn chọn lọc bài hát kỹ càng và luôn muốn hát thật tốt.",
    traits: ["Cầu toàn", "Có gu", "Tập trung", "Nghiêm túc"],
    strengths: ["Hát tốt", "Có phong cách riêng", "Kiên nhẫn luyện tập"],
    weaknesses: ["Đôi khi quá nghiêm túc", "Áp lực bản thân"],
    tips: ["Thư giãn và tận hưởng", "Vui là chính, không cần hoàn hảo"],
  },
  D: {
    type: "D",
    title: "Người tự do",
    emoji: "🎶",
    description: "Bạn là người thoải mái và không bị ràng buộc. Với bạn, karaoke là để vui chơi, không cần quy tắc, không cần điểm số, chỉ cần tận hưởng.",
    traits: ["Thoải mái", "Tự do", "Linh hoạt", "Vui vẻ"],
    strengths: ["Không stress", "Hòa hợp với mọi người", "Dễ thích nghi"],
    weaknesses: ["Đôi khi thiếu chủ động", "Hay theo số đông"],
    tips: ["Chọn cho mình một bài hát tủ", "Thể hiện cá tính riêng hơn"],
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
