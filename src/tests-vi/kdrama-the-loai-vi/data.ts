// Thể loại K-Drama yêu thích
// Khám phá thể loại K-Drama phù hợp với tính cách của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn thường xem phim vào lúc nào?",
    options: [
      { text: "Cuối tuần, marathon cả ngày", type: "A" },
      { text: "Tối trước khi ngủ, thư giãn", type: "B" },
      { text: "Bất cứ lúc nào rảnh", type: "C" },
      { text: "Khi cần giải tỏa stress", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Điều gì khiến bạn tiếp tục xem một bộ phim?",
    options: [
      { text: "Chemistry giữa các nhân vật", type: "A" },
      { text: "Cốt truyện hấp dẫn, nhiều bất ngờ", type: "B" },
      { text: "Những tình huống hài hước", type: "C" },
      { text: "Thông điệp ý nghĩa, sâu sắc", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi xem phim buồn, bạn thường?",
    options: [
      { text: "Khóc rất nhiều và thấy thỏa mãn", type: "A" },
      { text: "Suy nghĩ về ý nghĩa câu chuyện", type: "B" },
      { text: "Tìm xem những đoạn hài để cân bằng", type: "C" },
      { text: "Cảm thấy được chữa lành", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Nhân vật nam chính bạn thích nhất?",
    options: [
      { text: "Chaebol lạnh lùng nhưng ngọt ngào", type: "A" },
      { text: "Thám tử/Công tố viên thông minh", type: "B" },
      { text: "Anh chàng hài hước, đáng yêu", type: "C" },
      { text: "Bác sĩ/Người có nghề nghiệp cao quý", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn thích phim có bối cảnh nào?",
    options: [
      { text: "Thành phố hiện đại, sang trọng", type: "A" },
      { text: "Cổ trang, cung đình", type: "B" },
      { text: "Trường học, ký túc xá", type: "C" },
      { text: "Bệnh viện, tòa án, nơi làm việc", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Điều gì khiến bạn ghét một bộ phim?",
    options: [
      { text: "Không có cảnh tình cảm đủ ngọt", type: "A" },
      { text: "Cốt truyện nhàm chán, dễ đoán", type: "B" },
      { text: "Quá nghiêm túc, không có gì vui", type: "C" },
      { text: "Thiếu chiều sâu, nhân vật nông cạn", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn thường rewatch phim vì lý do gì?",
    options: [
      { text: "Những cảnh tình cảm đẹp", type: "A" },
      { text: "Để hiểu rõ hơn các chi tiết", type: "B" },
      { text: "Những đoạn hài hước", type: "C" },
      { text: "Thông điệp và cảm xúc", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Khi chọn phim mới, bạn dựa vào?",
    options: [
      { text: "Diễn viên yêu thích đóng chính", type: "A" },
      { text: "Đánh giá và review tốt", type: "B" },
      { text: "Poster và trailer hấp dẫn", type: "C" },
      { text: "Đề tài và nội dung", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Số tập phim bạn thích nhất?",
    options: [
      { text: "16-20 tập, đủ để phát triển tình cảm", type: "A" },
      { text: "10-12 tập, gọn gàng, không dài dòng", type: "B" },
      { text: "Phim nhiều mùa, có thể xem mãi", type: "C" },
      { text: "8-12 tập, tập trung vào nội dung", type: "D" },
    ],
  },
  {
    id: 10,
    question: "OST phim quan trọng với bạn không?",
    options: [
      { text: "Rất quan trọng, phải có ballad đẹp", type: "A" },
      { text: "Quan trọng, phải phù hợp với phim", type: "B" },
      { text: "Thích nhạc vui vẻ, sôi động", type: "C" },
      { text: "Thích nhạc sâu lắng, cảm xúc", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn thích kết thúc phim như thế nào?",
    options: [
      { text: "Happy ending, đám cưới", type: "A" },
      { text: "Kết thúc bất ngờ, twist lớn", type: "B" },
      { text: "Vui vẻ, mọi người hạnh phúc", type: "C" },
      { text: "Ý nghĩa, để lại suy nghĩ", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Sau khi xem phim hay, bạn thường?",
    options: [
      { text: "Tìm hiểu về cặp đôi, xem BTS", type: "A" },
      { text: "Đọc review, thảo luận online", type: "B" },
      { text: "Chia sẻ với bạn bè, recommend", type: "C" },
      { text: "Suy nghĩ về thông điệp phim", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Phim tình cảm lãng mạn",
    emoji: "💑",
    description: "Bạn sinh ra để xem phim tình cảm! Bạn yêu thích những câu chuyện tình lãng mạn, những cảnh ngọt ngào và chemistry cháy bỏng giữa các nhân vật. Những bộ phim như 'Goblin', 'Crash Landing on You' là dành cho bạn!",
    traits: ["Lãng mạn", "Mơ mộng", "Thích ngọt ngào", "Dễ rung động"],
    strengths: ["Đánh giá cao tình yêu", "Thấu hiểu cảm xúc", "Tận hưởng từng khoảnh khắc"],
    weaknesses: ["Đôi khi kỳ vọng quá cao", "Dễ so sánh với thực tế"],
    tips: ["Thưởng thức phim như giải trí", "Đừng so sánh với cuộc sống thực"],
  },
  B: {
    type: "B",
    title: "Phim trinh thám/Bí ẩn",
    emoji: "🔍",
    description: "Bạn thích những bộ phim kích thích trí não! Phim trinh thám, bí ẩn với nhiều twist bất ngờ là sở trường của bạn. 'Signal', 'Flower of Evil', 'Vincenzo' sẽ khiến bạn mê mẩn!",
    traits: ["Thông minh", "Tò mò", "Thích phân tích", "Không dễ đoán"],
    strengths: ["Khả năng suy luận tốt", "Chú ý chi tiết", "Thích thử thách"],
    weaknesses: ["Đôi khi quá khó tính", "Dễ thất vọng với phim dở"],
    tips: ["Thử các thể loại khác", "Đôi khi phim đơn giản cũng hay"],
  },
  C: {
    type: "C",
    title: "Phim hài/Rom-com",
    emoji: "😂",
    description: "Bạn xem phim để cười và thư giãn! Những bộ phim hài lãng mạn với nhiều tình huống hài hước là lựa chọn hoàn hảo. 'Weightlifting Fairy', 'Strong Woman', 'Touch Your Heart' sẽ làm bạn vui!",
    traits: ["Vui vẻ", "Lạc quan", "Thích tiếng cười", "Dễ gần"],
    strengths: ["Biết cách thư giãn", "Tìm niềm vui trong mọi thứ", "Chia sẻ niềm vui"],
    weaknesses: ["Đôi khi tránh phim sâu sắc", "Khó xem phim buồn"],
    tips: ["Thử xem phim sâu sắc hơn", "Phim buồn đôi khi cũng hay"],
  },
  D: {
    type: "D",
    title: "Phim chữa lành/Slice of life",
    emoji: "🌱",
    description: "Bạn tìm kiếm sự bình yên và ý nghĩa trong phim. Những bộ phim chữa lành, slice of life với thông điệp sâu sắc là dành cho bạn. 'Hospital Playlist', 'Reply 1988', 'My Mister' sẽ chạm đến trái tim bạn!",
    traits: ["Sâu sắc", "Tìm kiếm ý nghĩa", "Thích bình yên", "Trân trọng cuộc sống"],
    strengths: ["Thấu hiểu nhân vật", "Đánh giá cao chi tiết nhỏ", "Cảm xúc phong phú"],
    weaknesses: ["Đôi khi quá nhạy cảm", "Khó xem phim hời hợt"],
    tips: ["Thưởng thức đa dạng thể loại", "Đôi khi giải trí nhẹ nhàng cũng tốt"],
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
