// Phong cách ngày mưa
// Khám phá cách bạn tận hưởng những ngày mưa

export const questions = [
  {
    id: 1,
    question: "Bạn cảm thấy thế nào khi trời mưa?",
    options: [
      { text: "Vui vẻ, thích mưa lắm", type: "A" },
      { text: "Bình thường, không ảnh hưởng gì", type: "B" },
      { text: "Hơi buồn, uể oải", type: "C" },
      { text: "Khó chịu, ghét mưa", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Ngày mưa, bạn thích làm gì nhất?",
    options: [
      { text: "Ngủ, đắp chăn ấm áp", type: "A" },
      { text: "Xem phim, đọc sách bên cửa sổ", type: "B" },
      { text: "Nấu ăn, làm đồ ấm", type: "C" },
      { text: "Vẫn ra ngoài bình thường", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Thức uống ngày mưa của bạn?",
    options: [
      { text: "Cà phê nóng, ngồi ngắm mưa", type: "A" },
      { text: "Trà nóng, thư giãn", type: "B" },
      { text: "Socola nóng, ấm áp", type: "C" },
      { text: "Uống gì cũng được", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn có thích nghe tiếng mưa không?",
    options: [
      { text: "Rất thích, tiếng mưa rất thư giãn", type: "A" },
      { text: "Thích, giúp dễ ngủ", type: "B" },
      { text: "Bình thường", type: "C" },
      { text: "Không, ồn ào", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi trời mưa, năng suất làm việc của bạn?",
    options: [
      { text: "Cao hơn, tập trung tốt", type: "A" },
      { text: "Bình thường, không ảnh hưởng", type: "B" },
      { text: "Thấp hơn, chỉ muốn nghỉ ngơi", type: "C" },
      { text: "Rất thấp, không muốn làm gì", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn có hay đi tắm mưa không?",
    options: [
      { text: "Có, rất thích tắm mưa", type: "A" },
      { text: "Đôi khi, khi mưa nhẹ", type: "B" },
      { text: "Không, sợ ốm", type: "C" },
      { text: "Không bao giờ", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Đồ ăn ngày mưa bạn thích?",
    options: [
      { text: "Phở nóng, bún bò", type: "A" },
      { text: "Lẩu với bạn bè", type: "B" },
      { text: "Đồ nướng, BBQ", type: "C" },
      { text: "Không có sở thích đặc biệt", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Mưa làm bạn nhớ đến điều gì?",
    options: [
      { text: "Kỷ niệm đẹp, tuổi thơ", type: "A" },
      { text: "Người yêu, gia đình", type: "B" },
      { text: "Sự buồn bã, cô đơn", type: "C" },
      { text: "Không nghĩ gì đặc biệt", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn có ô/áo mưa khi ra ngoài không?",
    options: [
      { text: "Luôn mang theo đề phòng", type: "A" },
      { text: "Có, khi dự báo mưa", type: "B" },
      { text: "Thường quên", type: "C" },
      { text: "Không, chạy nhanh vào chỗ trú", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Khi kẹt xe vì mưa, bạn?",
    options: [
      { text: "Kiên nhẫn, nghe nhạc, tận hưởng", type: "A" },
      { text: "Bình thường, chờ đợi", type: "B" },
      { text: "Khó chịu nhưng chấp nhận", type: "C" },
      { text: "Rất căng thẳng, bực bội", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Nhạc bạn nghe vào ngày mưa?",
    options: [
      { text: "Nhạc acoustic, ballad buồn", type: "A" },
      { text: "Lofi, chill, thư giãn", type: "B" },
      { text: "Nhạc sôi động để tăng mood", type: "C" },
      { text: "Không nghe nhạc khác ngày thường", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Điều bạn thích nhất về ngày mưa?",
    options: [
      { text: "Không khí mát mẻ, trong lành", type: "A" },
      { text: "Cảm giác ấm cúng trong nhà", type: "B" },
      { text: "Được nghỉ ngơi, chậm lại", type: "C" },
      { text: "Không có gì thích về mưa", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người yêu mưa",
    emoji: "🌧️",
    description: "Bạn là người yêu mưa thực sự! Tiếng mưa rơi, không khí se lạnh, cà phê nóng bên cửa sổ - đây là những gì làm bạn hạnh phúc. Mưa mang đến cảm giác bình yên.",
    traits: ["Yêu mưa", "Lãng mạn", "Thư thái", "Nhạy cảm"],
    strengths: ["Tận hưởng những điều đơn giản", "Biết làm bản thân vui", "Tinh thần tích cực"],
    weaknesses: ["Có thể lười khi mưa", "Đôi khi quá mơ mộng"],
    tips: ["Cân bằng giữa tận hưởng và làm việc", "Chia sẻ niềm vui với người khác"],
  },
  B: {
    type: "B",
    title: "Người mưa thư giãn",
    emoji: "📚",
    description: "Mưa với bạn là cơ hội để thư giãn và tận hưởng. Đọc sách, xem phim, uống trà - bạn biết cách biến ngày mưa thành thời gian me-time hoàn hảo.",
    traits: ["Thư giãn", "Tận hưởng", "Có gu", "Cân bằng"],
    strengths: ["Biết cách nghỉ ngơi", "Tận dụng thời gian tốt", "Không stress"],
    weaknesses: ["Có thể ít năng suất", "Đôi khi quá thoải mái"],
    tips: ["Duy trì năng suất khi cần", "Chia sẻ thời gian với người thân"],
  },
  C: {
    type: "C",
    title: "Người mưa melancholy",
    emoji: "💭",
    description: "Mưa mang đến cho bạn cảm giác buồn và suy tư. Bạn nhạy cảm với thời tiết và dễ bị ảnh hưởng bởi bầu không khí u ám. Nhưng đây cũng là lúc bạn sâu sắc nhất.",
    traits: ["Nhạy cảm", "Suy tư", "Cảm xúc", "Sâu sắc"],
    strengths: ["Hiểu cảm xúc bản thân", "Sáng tạo khi buồn", "Empathy cao"],
    weaknesses: ["Dễ bị ảnh hưởng tinh thần", "Có thể buồn vô cớ"],
    tips: ["Tìm hoạt động nâng cao mood", "Kết nối với người khác", "Tập thể dục nhẹ"],
  },
  D: {
    type: "D",
    title: "Người chống mưa",
    emoji: "⛱️",
    description: "Bạn không thích mưa và mưa ảnh hưởng tiêu cực đến ngày của bạn. Ướt, kẹt xe, bất tiện - mưa là thứ bạn muốn tránh. Bạn thích nắng và hoạt động ngoài trời.",
    traits: ["Yêu nắng", "Năng động", "Thực tế", "Không thích bất tiện"],
    strengths: ["Không mơ mộng", "Thích nghi nhanh", "Hành động"],
    weaknesses: ["Dễ khó chịu khi mưa", "Có thể stress"],
    tips: ["Tìm điểm tích cực của mưa", "Chuẩn bị tốt cho ngày mưa", "Học cách chấp nhận"],
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
