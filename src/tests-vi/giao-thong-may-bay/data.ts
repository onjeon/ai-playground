// Phong cách đi máy bay
// Khám phá phong cách bay của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn đi máy bay thường xuyên như thế nào?",
    options: [
      { text: "Thường xuyên, vài lần mỗi năm", type: "A" },
      { text: "Khi có dịp du lịch, công tác", type: "B" },
      { text: "Hiếm khi, chỉ dịp đặc biệt", type: "C" },
      { text: "Chưa bao giờ hoặc rất ít", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn chọn ghế ngồi như thế nào?",
    options: [
      { text: "Ghế cạnh cửa sổ, ngắm cảnh", type: "A" },
      { text: "Ghế lối đi, tiện di chuyển", type: "B" },
      { text: "Ghế giữa cũng OK, không kén", type: "C" },
      { text: "Ghế nào cũng được", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn đến sân bay trước chuyến bay bao lâu?",
    options: [
      { text: "Ít nhất 2-3 tiếng, không vội", type: "A" },
      { text: "Đúng giờ quy định, không quá sớm", type: "B" },
      { text: "Khá sát giờ, tranh thủ thời gian", type: "C" },
      { text: "Tùy chuyến bay, không cố định", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn làm gì khi chờ đợi ở sân bay?",
    options: [
      { text: "Mua sắm, dạo duty free", type: "A" },
      { text: "Làm việc, check email", type: "B" },
      { text: "Ăn uống, ngồi nghỉ", type: "C" },
      { text: "Lướt điện thoại, xem phim", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn mang hành lý như thế nào?",
    options: [
      { text: "Hành lý xách tay gọn nhẹ", type: "A" },
      { text: "Vali ký gửi đầy đủ đồ", type: "B" },
      { text: "Cả xách tay và ký gửi", type: "C" },
      { text: "Tùy chuyến đi, linh hoạt", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn chọn hãng bay theo tiêu chí nào?",
    options: [
      { text: "Giá rẻ là chính, bay được là OK", type: "A" },
      { text: "Dịch vụ tốt, có ăn uống", type: "B" },
      { text: "Thời gian bay phù hợp", type: "C" },
      { text: "An toàn, uy tín hãng", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Trên máy bay, bạn thường làm gì?",
    options: [
      { text: "Ngủ, nghỉ ngơi", type: "A" },
      { text: "Xem phim, nghe nhạc", type: "B" },
      { text: "Đọc sách, làm việc", type: "C" },
      { text: "Ngắm cảnh, trò chuyện", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn có sợ đi máy bay không?",
    options: [
      { text: "Không, rất thích bay", type: "A" },
      { text: "Hơi lo lắng lúc cất cánh", type: "B" },
      { text: "Bình thường, không sợ", type: "C" },
      { text: "Có hơi sợ, căng thẳng", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Đồ ăn trên máy bay, bạn nghĩ sao?",
    options: [
      { text: "Ăn hết, không phí phạm", type: "A" },
      { text: "Chọn lọc, ăn những gì ngon", type: "B" },
      { text: "Mang đồ ăn riêng theo", type: "C" },
      { text: "Không quan tâm, ít ăn khi bay", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn check-in như thế nào?",
    options: [
      { text: "Online trước, tiện lợi", type: "A" },
      { text: "Tại quầy, có người hỗ trợ", type: "B" },
      { text: "Kiosk tự động tại sân bay", type: "C" },
      { text: "Tùy lúc, không cố định", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Khi máy bay gặp turbulence, bạn?",
    options: [
      { text: "Bình tĩnh, chuyện bình thường", type: "A" },
      { text: "Hơi lo nhưng tin tưởng phi công", type: "B" },
      { text: "Lo lắng, nắm chặt tay ghế", type: "C" },
      { text: "Rất sợ, căng thẳng cao độ", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Điều bạn thích nhất khi đi máy bay?",
    options: [
      { text: "Nhanh chóng, tiết kiệm thời gian", type: "A" },
      { text: "Được phục vụ, thoải mái", type: "B" },
      { text: "Cảm giác bay trên mây", type: "C" },
      { text: "Đến được nơi xa", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Frequent Flyer chuyên nghiệp",
    emoji: "✈️",
    description: "Bạn là người bay thường xuyên và rất thoải mái trên máy bay. Bạn biết cách tận dụng mọi tiện ích và di chuyển hiệu quả.",
    traits: ["Chuyên nghiệp", "Linh hoạt", "Có kinh nghiệm", "Thoải mái"],
    strengths: ["Biết cách bay thoải mái", "Không căng thẳng", "Tận dụng thời gian bay"],
    weaknesses: ["Có thể kỳ vọng cao", "Khó chịu với dịch vụ kém"],
    tips: ["Tiếp tục tích điểm hội viên", "Chia sẻ kinh nghiệm với người khác"],
  },
  B: {
    type: "B",
    title: "Hành khách thưởng thức",
    emoji: "🛫",
    description: "Bạn xem đi máy bay là trải nghiệm đặc biệt và biết cách thưởng thức. Bạn quan tâm đến dịch vụ và thoải mái trên chuyến bay.",
    traits: ["Thưởng thức", "Quan tâm dịch vụ", "Thoải mái", "Kỳ vọng"],
    strengths: ["Biết chọn dịch vụ tốt", "Tận hưởng hành trình", "Không vội vàng"],
    weaknesses: ["Chi tiêu nhiều hơn", "Đôi khi quá cầu kỳ"],
    tips: ["Thử các hãng bay mới", "Cân bằng giữa chi phí và thoải mái"],
  },
  C: {
    type: "C",
    title: "Hành khách thực tế",
    emoji: "🛬",
    description: "Bạn đi máy bay vì nhu cầu và không quá quan trọng hóa. Bạn thực tế, linh hoạt và chỉ cần đến nơi an toàn là đủ.",
    traits: ["Thực tế", "Linh hoạt", "Không kén", "Đơn giản"],
    strengths: ["Dễ hài lòng", "Không căng thẳng", "Thích nghi tốt"],
    weaknesses: ["Có thể bỏ qua tiện ích", "Không tận dụng hết dịch vụ"],
    tips: ["Khám phá thêm các tiện ích bay", "Tận hưởng hành trình hơn"],
  },
  D: {
    type: "D",
    title: "Hành khách mới",
    emoji: "🌍",
    description: "Bạn ít đi máy bay và có thể còn hơi lo lắng. Nhưng điều đó không sao, mỗi chuyến bay là một trải nghiệm mới.",
    traits: ["Mới mẻ", "Thận trọng", "Tò mò", "Lo lắng một chút"],
    strengths: ["Trân trọng mỗi chuyến bay", "Cẩn thận chuẩn bị", "Hào hứng với trải nghiệm"],
    weaknesses: ["Có thể căng thẳng", "Chưa quen quy trình"],
    tips: ["Bay nhiều hơn sẽ quen", "Tìm hiểu trước về quy trình bay"],
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
