// Thể loại phim yêu thích
// Bài test khám phá thể loại phim phù hợp với tính cách của bạn

export const questions = [
  {
    id: 1,
    question: "Cuối tuần bạn thích hoạt động như thế nào?",
    options: [
      { text: "Đi chơi với bạn bè, tham gia hoạt động vui nhộn", type: "A" },
      { text: "Đọc sách, nghiên cứu điều gì đó mới", type: "B" },
      { text: "Hẹn hò lãng mạn hoặc ở bên người thân", type: "C" },
      { text: "Thử thách bản thân với hoạt động mạo hiểm", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thích cảm xúc nào nhất khi xem phim?",
    options: [
      { text: "Được cười thoải mái, vui vẻ", type: "A" },
      { text: "Được suy ngẫm và học hỏi điều gì đó", type: "B" },
      { text: "Được xúc động và cảm nhận tình yêu", type: "C" },
      { text: "Được hồi hộp, tim đập nhanh", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn chọn phim dựa trên yếu tố nào?",
    options: [
      { text: "Dàn diễn viên hài nổi tiếng", type: "A" },
      { text: "Nội dung có chiều sâu, đánh giá cao", type: "B" },
      { text: "Cặp đôi chính dễ thương", type: "C" },
      { text: "Kỹ xảo đẹp, cảnh hành động hoành tráng", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn thích câu chuyện phim có gì?",
    options: [
      { text: "Tình huống hài hước, dí dỏm", type: "A" },
      { text: "Thông điệp sâu sắc về cuộc sống", type: "B" },
      { text: "Tình yêu đẹp, kết thúc có hậu", type: "C" },
      { text: "Nhiều pha gay cấn, bất ngờ", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Xem phim bạn thích ở đâu nhất?",
    options: [
      { text: "Rạp với nhóm bạn, cùng cười vui", type: "A" },
      { text: "Ở nhà một mình, tập trung xem", type: "B" },
      { text: "Với người yêu/bạn thân", type: "C" },
      { text: "Rạp IMAX để trải nghiệm tối đa", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn thích nhân vật chính như thế nào?",
    options: [
      { text: "Hài hước, lạc quan, vui vẻ", type: "A" },
      { text: "Thông minh, có chiều sâu", type: "B" },
      { text: "Lãng mạn, chung tình", type: "C" },
      { text: "Dũng cảm, mạnh mẽ, anh hùng", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn mong đợi gì sau khi xem phim?",
    options: [
      { text: "Cảm thấy vui vẻ, thoải mái", type: "A" },
      { text: "Có điều gì đó để suy nghĩ", type: "B" },
      { text: "Tin vào tình yêu và cuộc sống", type: "C" },
      { text: "Cảm giác phấn khích, thỏa mãn", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn thích bối cảnh phim như thế nào?",
    options: [
      { text: "Cuộc sống thường ngày, gần gũi", type: "A" },
      { text: "Thế giới phức tạp, có nhiều tầng lớp", type: "B" },
      { text: "Cảnh đẹp, lãng mạn", type: "C" },
      { text: "Không gian hoành tráng, kỳ vĩ", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn chịu được phim dài bao lâu?",
    options: [
      { text: "Khoảng 90 phút là vừa", type: "A" },
      { text: "Bao lâu cũng được nếu hay", type: "B" },
      { text: "2 tiếng là phù hợp", type: "C" },
      { text: "Càng dài càng hay, thích series", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn thích kết thúc phim như thế nào?",
    options: [
      { text: "Vui vẻ, mọi thứ được giải quyết ổn thỏa", type: "A" },
      { text: "Mở, để khán giả tự suy nghĩ", type: "B" },
      { text: "Có hậu, đôi chính hạnh phúc", type: "C" },
      { text: "Bất ngờ, twist cuối phim", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn thích soundtrack phim như thế nào?",
    options: [
      { text: "Vui tươi, bắt tai", type: "A" },
      { text: "Nhạc cổ điển hoặc có chiều sâu", type: "B" },
      { text: "Nhạc ballad lãng mạn", type: "C" },
      { text: "Nhạc hùng tráng, kịch tính", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Phim nào sau đây bạn muốn xem nhất?",
    options: [
      { text: "Phim hài tình huống về cuộc sống văn phòng", type: "A" },
      { text: "Phim tâm lý xã hội được giải thưởng", type: "B" },
      { text: "Phim tình cảm Hàn Quốc", type: "C" },
      { text: "Phim siêu anh hùng Marvel/DC", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người Yêu Phim Hài",
    emoji: "😂",
    description: "Bạn yêu thích những bộ phim hài, mang lại tiếng cười và niềm vui. Với bạn, xem phim là để giải trí và thư giãn sau những giờ làm việc căng thẳng.",
    traits: ["Lạc quan", "Vui vẻ", "Yêu tiếng cười", "Thoải mái"],
    strengths: ["Biết cách thư giãn", "Tạo không khí vui vẻ", "Dễ hài lòng"],
    weaknesses: ["Đôi khi bỏ qua phim có chiều sâu", "Ít kiên nhẫn với phim chậm"],
    tips: ["Thử xem phim hài đen để mở rộng khẩu vị", "Phim hài Châu Á cũng rất hay"],
  },
  B: {
    type: "B",
    title: "Người Yêu Phim Tâm Lý - Xã Hội",
    emoji: "🎭",
    description: "Bạn yêu thích những bộ phim có chiều sâu, khiến bạn suy ngẫm về cuộc sống và con người. Bạn xem phim như một cách để học hỏi và mở rộng tầm nhìn.",
    traits: ["Sâu sắc", "Ham học hỏi", "Có chiều sâu", "Thích suy nghĩ"],
    strengths: ["Hiểu biết rộng", "Có tầm nhìn", "Đánh giá phim tốt"],
    weaknesses: ["Đôi khi quá nghiêm túc", "Khó tìm phim vừa ý"],
    tips: ["Thử xem phim từ nhiều quốc gia", "Phim độc lập thường rất hay"],
  },
  C: {
    type: "C",
    title: "Người Yêu Phim Tình Cảm",
    emoji: "💕",
    description: "Bạn yêu thích những bộ phim tình cảm, lãng mạn, khiến tim bạn rung động. Bạn tin vào tình yêu và thích những câu chuyện có kết thúc đẹp.",
    traits: ["Lãng mạn", "Nhạy cảm", "Tin vào tình yêu", "Cảm xúc"],
    strengths: ["Cảm nhận sâu sắc", "Trân trọng tình cảm", "Có trái tim ấm áp"],
    weaknesses: ["Dễ xúc động", "Đôi khi phi thực tế"],
    tips: ["Thử xem phim tình cảm từ nhiều nền văn hóa", "K-drama là lựa chọn tuyệt vời"],
  },
  D: {
    type: "D",
    title: "Người Yêu Phim Hành Động",
    emoji: "💥",
    description: "Bạn yêu thích những bộ phim hành động, mạo hiểm, với nhiều pha gay cấn và hồi hộp. Bạn thích cảm giác phấn khích và trải nghiệm hình ảnh hoành tráng.",
    traits: ["Năng động", "Thích phiêu lưu", "Yêu kịch tính", "Mạnh mẽ"],
    strengths: ["Dễ tìm phim hay", "Thích trải nghiệm rạp", "Không dễ chán"],
    weaknesses: ["Đôi khi bỏ qua phim nhẹ nhàng", "Khó chịu với phim chậm"],
    tips: ["Thử xem phim hành động Châu Á", "Phim siêu anh hùng luôn đáp ứng tốt"],
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
