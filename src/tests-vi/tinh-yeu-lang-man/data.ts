// Mức độ lãng mạn
// Đánh giá mức độ lãng mạn và cách bạn thể hiện tình yêu

export const questions = [
  {
    id: 1,
    question: "Bạn có hay tặng hoa/quà bất ngờ cho người yêu không?",
    options: [
      { text: "Rất thường xuyên, thích tạo bất ngờ", type: "A" },
      { text: "Vào các dịp đặc biệt", type: "B" },
      { text: "Đôi khi, khi nhớ đến", type: "C" },
      { text: "Hiếm khi, không nghĩ đến", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Buổi hẹn lý tưởng của bạn là gì?",
    options: [
      { text: "Ăn tối nến, dạo bãi biển dưới ánh trăng", type: "A" },
      { text: "Ăn tối ở nhà hàng đẹp", type: "B" },
      { text: "Xem phim, ăn uống đơn giản", type: "C" },
      { text: "Ở nhà, xem Netflix", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn có hay viết lời yêu thương cho người yêu không?",
    options: [
      { text: "Có, viết thư tay, tin nhắn dài", type: "A" },
      { text: "Đôi khi, vào dịp đặc biệt", type: "B" },
      { text: "Hiếm khi, không giỏi viết", type: "C" },
      { text: "Không, thấy cringy", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn nghĩ gì về những cử chỉ lãng mạn trong phim?",
    options: [
      { text: "Rất thích, muốn được như vậy", type: "A" },
      { text: "Đẹp nhưng thực tế khác", type: "B" },
      { text: "Quá sến, không thực tế", type: "C" },
      { text: "Không quan tâm", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn có nhớ các ngày kỷ niệm không?",
    options: [
      { text: "Nhớ hết và luôn có kế hoạch", type: "A" },
      { text: "Nhớ những ngày quan trọng", type: "B" },
      { text: "Hay quên, cần được nhắc", type: "C" },
      { text: "Không quan trọng với tôi", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn thể hiện tình yêu bằng cách nào?",
    options: [
      { text: "Lời nói ngọt ngào, hành động lãng mạn", type: "A" },
      { text: "Quan tâm, chăm sóc hàng ngày", type: "B" },
      { text: "Ở bên họ, hỗ trợ khi cần", type: "C" },
      { text: "Không thể hiện nhiều, họ tự biết", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn có thích được người yêu bất ngờ không?",
    options: [
      { text: "Rất thích, mong đợi những bất ngờ", type: "A" },
      { text: "Thích, nhưng không cần thiết", type: "B" },
      { text: "Không quan trọng lắm", type: "C" },
      { text: "Không thích bất ngờ", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn có hay nói 'Anh/Em yêu em/anh' không?",
    options: [
      { text: "Mỗi ngày, nhiều lần", type: "A" },
      { text: "Thường xuyên", type: "B" },
      { text: "Đôi khi", type: "C" },
      { text: "Hiếm khi, họ biết rồi", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn có hay đi du lịch romantik với người yêu không?",
    options: [
      { text: "Có, hay lên kế hoạch getaway", type: "A" },
      { text: "Thỉnh thoảng, khi có dịp", type: "B" },
      { text: "Hiếm khi", type: "C" },
      { text: "Không, thích ở nhà", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn nghĩ gì về âm nhạc lãng mạn?",
    options: [
      { text: "Thích, hay nghe và chia sẻ với người yêu", type: "A" },
      { text: "Nghe khi tâm trạng phù hợp", type: "B" },
      { text: "Không quan tâm lắm", type: "C" },
      { text: "Không thích, thấy sến", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn có hay đăng về người yêu trên mạng xã hội không?",
    options: [
      { text: "Có, thường xuyên khoe tình yêu", type: "A" },
      { text: "Đôi khi, vào dịp đặc biệt", type: "B" },
      { text: "Hiếm khi, thích riêng tư", type: "C" },
      { text: "Không bao giờ", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bạn đánh giá mức độ lãng mạn của mình?",
    options: [
      { text: "Rất lãng mạn, hay tạo bất ngờ", type: "A" },
      { text: "Khá lãng mạn", type: "B" },
      { text: "Bình thường, không quá lãng mạn", type: "C" },
      { text: "Không lãng mạn, thực tế", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người yêu lãng mạn",
    emoji: "🌹",
    description: "Bạn là người cực kỳ lãng mạn! Bạn thích tạo bất ngờ, nói lời yêu thương và làm cho tình yêu như trong phim. Đối tác của bạn rất may mắn!",
    traits: ["Lãng mạn", "Sáng tạo", "Thể hiện", "Ngọt ngào"],
    strengths: ["Tạo kỷ niệm đẹp", "Đối tác cảm thấy được yêu", "Giữ lửa tình yêu"],
    weaknesses: ["Kỳ vọng cao", "Có thể thất vọng nếu đối tác không lãng mạn"],
    tips: ["Chấp nhận đối tác có cách thể hiện khác", "Đừng đặt kỳ vọng quá cao"],
  },
  B: {
    type: "B",
    title: "Người lãng mạn cân bằng",
    emoji: "💐",
    description: "Bạn có mức độ lãng mạn cân bằng và lành mạnh. Bạn biết cách thể hiện tình yêu nhưng không quá mức. Bạn lãng mạn vào những thời điểm phù hợp.",
    traits: ["Cân bằng", "Tinh tế", "Chu đáo", "Đúng lúc"],
    strengths: ["Lãng mạn có chọn lọc", "Không quá áp lực", "Thực tế"],
    weaknesses: ["Đôi khi có thể lãng mạn hơn", "Quên các dịp đặc biệt"],
    tips: ["Thỉnh thoảng tạo bất ngờ", "Đừng quên nói lời yêu thương"],
  },
  C: {
    type: "C",
    title: "Người thực tế",
    emoji: "🏠",
    description: "Bạn không phải là người lãng mạn truyền thống. Bạn thể hiện tình yêu qua hành động thực tế hơn là lời nói ngọt ngào hay cử chỉ hoa mỹ.",
    traits: ["Thực tế", "Hành động", "Đáng tin cậy", "Ổn định"],
    strengths: ["Yêu bằng hành động", "Không hứa suông", "Đáng tin cậy"],
    weaknesses: ["Đối tác có thể cảm thấy thiếu lãng mạn", "Ít bất ngờ"],
    tips: ["Thử làm điều lãng mạn đôi khi", "Nói ra cảm xúc nhiều hơn"],
  },
  D: {
    type: "D",
    title: "Người thực dụng",
    emoji: "📊",
    description: "Bạn không lãng mạn và thấy những cử chỉ hoa mỹ không cần thiết. Bạn tin rằng tình yêu thể hiện qua việc làm thực tế chứ không phải lời nói.",
    traits: ["Thực dụng", "Không cảm xúc", "Logic", "Đơn giản"],
    strengths: ["Không áp lực", "Thực tế", "Không kỳ vọng"],
    weaknesses: ["Đối tác có thể cảm thấy không được yêu", "Thiếu kết nối cảm xúc"],
    tips: ["Hiểu rằng người khác cần được thể hiện tình yêu", "Thử những cử chỉ nhỏ thôi"],
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
