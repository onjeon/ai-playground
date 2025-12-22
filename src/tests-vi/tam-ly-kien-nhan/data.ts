// Mức độ kiên nhẫn
// Đánh giá mức độ kiên nhẫn của bạn trong cuộc sống

export const questions = [
  {
    id: 1,
    question: "Khi phải xếp hàng chờ đợi lâu, bạn?",
    options: [
      { text: "Chờ bình thường, không vấn đề", type: "A" },
      { text: "Hơi sốt ruột nhưng chờ được", type: "B" },
      { text: "Khó chịu, hay nhìn đồng hồ", type: "C" },
      { text: "Rất bực, muốn bỏ đi", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Khi ai đó nói chuyện chậm, bạn?",
    options: [
      { text: "Lắng nghe từ từ, không vội", type: "A" },
      { text: "Kiên nhẫn chờ họ nói xong", type: "B" },
      { text: "Muốn họ nói nhanh hơn", type: "C" },
      { text: "Ngắt lời, nói thay cho họ", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi học một kỹ năng mới khó, bạn?",
    options: [
      { text: "Kiên trì luyện tập cho đến khi thành thạo", type: "A" },
      { text: "Cố gắng, có thể mất thời gian", type: "B" },
      { text: "Dễ nản, cần nghỉ nhiều", type: "C" },
      { text: "Bỏ cuộc nếu không nhanh tiến bộ", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi kẹt xe, bạn cảm thấy?",
    options: [
      { text: "Bình thường, mở nhạc nghe", type: "A" },
      { text: "Hơi phiền nhưng chấp nhận", type: "B" },
      { text: "Bực bội, tìm đường tắt", type: "C" },
      { text: "Rất tức giận, bấm còi", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi chờ đồ ăn được ship đến, bạn?",
    options: [
      { text: "Làm việc khác, chờ bình thường", type: "A" },
      { text: "Thỉnh thoảng kiểm tra app", type: "B" },
      { text: "Liên tục kiểm tra, sốt ruột", type: "C" },
      { text: "Gọi điện hối thúc shipper", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi máy tính/điện thoại chạy chậm, bạn?",
    options: [
      { text: "Chờ đợi, không sao cả", type: "A" },
      { text: "Hơi khó chịu nhưng chờ", type: "B" },
      { text: "Bực bội, thử nhiều cách", type: "C" },
      { text: "Muốn đập máy", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Khi giải thích cho ai đó nhiều lần mà họ không hiểu, bạn?",
    options: [
      { text: "Kiên nhẫn giải thích cách khác", type: "A" },
      { text: "Cố gắng thêm vài lần nữa", type: "B" },
      { text: "Bắt đầu mất kiên nhẫn", type: "C" },
      { text: "Bực bội, không muốn giải thích nữa", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Khi mục tiêu cần thời gian dài để đạt được, bạn?",
    options: [
      { text: "Kiên trì từng bước một", type: "A" },
      { text: "Chia nhỏ mục tiêu, cố gắng", type: "B" },
      { text: "Dễ mất động lực giữa chừng", type: "C" },
      { text: "Bỏ cuộc, tìm cách nhanh hơn", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn có hay làm nhiều việc cùng lúc (multitasking) không?",
    options: [
      { text: "Hiếm khi, tập trung từng việc", type: "A" },
      { text: "Đôi khi, khi cần", type: "B" },
      { text: "Thường xuyên, không thể ngồi một chỗ", type: "C" },
      { text: "Luôn luôn, không thể làm một việc", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Khi đọc sách dài, bạn?",
    options: [
      { text: "Đọc từ từ, tận hưởng", type: "A" },
      { text: "Đọc được, chia nhiều lần", type: "B" },
      { text: "Đọc nhanh, muốn biết kết thúc", type: "C" },
      { text: "Không đọc được sách dài", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Khi chờ kết quả quan trọng, bạn?",
    options: [
      { text: "Chờ bình tĩnh, việc gì đến sẽ đến", type: "A" },
      { text: "Hồi hộp nhưng kiểm soát được", type: "B" },
      { text: "Liên tục kiểm tra, sốt ruột", type: "C" },
      { text: "Gần như không chịu nổi", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bạn đánh giá mức độ kiên nhẫn của mình?",
    options: [
      { text: "Rất cao, hiếm khi mất bình tĩnh", type: "A" },
      { text: "Khá tốt, phần lớn kiểm soát được", type: "B" },
      { text: "Trung bình, dễ sốt ruột", type: "C" },
      { text: "Thấp, rất dễ mất kiên nhẫn", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Thánh kiên nhẫn",
    emoji: "🧘",
    description: "Bạn có mức độ kiên nhẫn rất cao. Bạn bình tĩnh trong mọi tình huống, không vội vàng và biết rằng mọi thứ cần thời gian. Đây là đức tính quý giá!",
    traits: ["Kiên nhẫn", "Bình tĩnh", "Ổn định", "Từ tốn"],
    strengths: ["Không stress vì chờ đợi", "Học được mọi thứ", "Quan hệ tốt"],
    weaknesses: ["Đôi khi quá chậm", "Có thể bỏ lỡ cơ hội"],
    tips: ["Đừng quá kiên nhẫn với điều không xứng đáng", "Biết khi nào cần hành động"],
  },
  B: {
    type: "B",
    title: "Người cân bằng",
    emoji: "⚖️",
    description: "Bạn có mức độ kiên nhẫn tốt và cân bằng. Bạn biết khi nào cần chờ đợi và khi nào cần hành động. Đây là sự cân bằng lành mạnh!",
    traits: ["Cân bằng", "Linh hoạt", "Kiểm soát", "Thực tế"],
    strengths: ["Biết cách ưu tiên", "Không quá nóng vội", "Thích nghi tốt"],
    weaknesses: ["Đôi khi vẫn sốt ruột", "Cần phát triển thêm"],
    tips: ["Tiếp tục rèn luyện", "Thực hành thiền để tăng kiên nhẫn"],
  },
  C: {
    type: "C",
    title: "Người nóng vội",
    emoji: "⏰",
    description: "Bạn có xu hướng thiếu kiên nhẫn và dễ sốt ruột. Bạn muốn mọi thứ nhanh chóng và khó chờ đợi. Điều này có thể gây stress và ảnh hưởng mối quan hệ.",
    traits: ["Nóng vội", "Năng động", "Sốt ruột", "Muốn nhanh"],
    strengths: ["Hành động nhanh", "Không lãng phí thời gian", "Năng động"],
    weaknesses: ["Dễ stress", "Khó trong tình huống chờ đợi", "Có thể thiếu sót"],
    tips: ["Thực hành thiền định", "Học cách chấp nhận những gì không kiểm soát được"],
  },
  D: {
    type: "D",
    title: "Cần rèn luyện",
    emoji: "🔥",
    description: "Mức độ kiên nhẫn của bạn rất thấp và có thể gây nhiều vấn đề trong cuộc sống. Bạn cần học cách kiểm soát và chấp nhận sự chờ đợi.",
    traits: ["Thiếu kiên nhẫn", "Nóng tính", "Vội vàng", "Cần phát triển"],
    strengths: ["Có thể hành động nhanh", "Không trì hoãn", "Quyết đoán"],
    weaknesses: ["Dễ tức giận", "Khó hoàn thành việc dài", "Ảnh hưởng quan hệ"],
    tips: ["Thực hành kỹ thuật thở", "Tập yoga hoặc thiền", "Nhận biết trigger và kiểm soát"],
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
