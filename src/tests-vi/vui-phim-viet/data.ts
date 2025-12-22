// Thể loại phim Việt
// Khám phá thể loại phim Việt phù hợp với tính cách của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn thích xem phim với cảm xúc như thế nào?",
    options: [
      { text: "Được khóc, cảm động đến tận tim", type: "A" },
      { text: "Được cười, giải trí thoải mái", type: "B" },
      { text: "Được sợ, hồi hộp căng thẳng", type: "C" },
      { text: "Được suy nghĩ, chiêm nghiệm", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thích xem phim ở đâu?",
    options: [
      { text: "Rạp chiếu phim, không gian tối, âm thanh lớn", type: "A" },
      { text: "Ở nhà với gia đình, bạn bè", type: "B" },
      { text: "Một mình trong phòng tối", type: "C" },
      { text: "Bất kỳ đâu, miễn có phim hay", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn thích nhân vật chính như thế nào?",
    options: [
      { text: "Có số phận bi thương, vượt qua nghịch cảnh", type: "A" },
      { text: "Hài hước, đáng yêu, có duyên", type: "B" },
      { text: "Bí ẩn, có góc khuất, phức tạp", type: "C" },
      { text: "Bình thường, gần gũi như người thật", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Cốt truyện phim bạn thích nhất?",
    options: [
      { text: "Tình yêu, gia đình, cảm động", type: "A" },
      { text: "Hiểu lầm, tình huống hài, happy ending", type: "B" },
      { text: "Twist bất ngờ, bí mật, suspense", type: "C" },
      { text: "Cuộc sống đời thường, chân thật", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi chọn phim, bạn quan tâm điều gì nhất?",
    options: [
      { text: "Diễn viên yêu thích, chemistry tốt", type: "A" },
      { text: "Trailer vui nhộn, hứa hẹn nhiều tràng cười", type: "B" },
      { text: "Review hay, nhiều người khen", type: "C" },
      { text: "Đạo diễn, nội dung có chiều sâu", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Phim dài bao lâu bạn thích nhất?",
    options: [
      { text: "Phim dài, càng nhiều tập càng xem mê", type: "A" },
      { text: "Phim vừa, khoảng 2 tiếng là đủ", type: "B" },
      { text: "Phim ngắn, gọn, không kéo dài", type: "C" },
      { text: "Tùy nội dung, hay thì xem bao lâu cũng được", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn thích kết thúc phim như thế nào?",
    options: [
      { text: "Happy ending, dù có qua khó khăn", type: "A" },
      { text: "Hài hước, vui vẻ, nhẹ nhàng", type: "B" },
      { text: "Twist cuối, bất ngờ, ám ảnh", type: "C" },
      { text: "Open ending, để khán giả tự suy ngẫm", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn xem lại phim như thế nào?",
    options: [
      { text: "Xem đi xem lại phim yêu thích nhiều lần", type: "A" },
      { text: "Xem lại với bạn bè, gia đình để cười cùng", type: "B" },
      { text: "Ít xem lại, thích khám phá phim mới", type: "C" },
      { text: "Xem lại để phát hiện chi tiết mới", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Phim Việt bạn từng xem và thích nhất thuộc thể loại gì?",
    options: [
      { text: "Phim tình cảm: Mắt Biếc, Có Căn Nhà...", type: "A" },
      { text: "Phim hài: Cua Lại Vợ Bầu, Tiệc Trăng Máu...", type: "B" },
      { text: "Phim kinh dị: Thất Sơn Tâm Linh, Bắc Kim Thang...", type: "C" },
      { text: "Phim indie: Ròm, Chàng Dâng Cua, Em Là Bà Nội...", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Yếu tố nào khiến phim Việt hấp dẫn bạn?",
    options: [
      { text: "Câu chuyện gần gũi, đậm chất Việt Nam", type: "A" },
      { text: "Hài hước theo kiểu Việt, dễ cười", type: "B" },
      { text: "Kỹ xảo tốt, đầu tư sản xuất", type: "C" },
      { text: "Nội dung sáng tạo, không đi theo lối mòn", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn theo dõi phim Việt như thế nào?",
    options: [
      { text: "Xem phim chiếu rạp ngay khi ra", type: "A" },
      { text: "Chờ lên mạng rồi xem", type: "B" },
      { text: "Xem theo review, chọn lọc kỹ", type: "C" },
      { text: "Tìm kiếm phim độc lập, ít người biết", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Phim Việt đối với bạn là gì?",
    options: [
      { text: "Niềm tự hào khi điện ảnh Việt phát triển", type: "A" },
      { text: "Giải trí với bạn bè, gia đình", type: "B" },
      { text: "Ngành công nghiệp đang phát triển thú vị", type: "C" },
      { text: "Nghệ thuật cần được khám phá nhiều hơn", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Phim Tình cảm - Drama Việt",
    emoji: "💕",
    description: "Bạn là người của phim tình cảm Việt - những câu chuyện về tình yêu, gia đình và những cảm xúc sâu sắc. Bạn thích được khóc, được cảm động và tin vào happy ending.",
    traits: ["Cảm xúc", "Lãng mạn", "Đồng cảm", "Tin yêu cuộc sống"],
    strengths: ["Thấu hiểu cảm xúc", "Gắn bó với nhân vật", "Trân trọng giá trị gia đình"],
    weaknesses: ["Dễ khóc quá nhiều", "Có thể tin vào fairy tale quá mức"],
    tips: ["Thử phim có thông điệp mạnh hơn", "Xem thêm phim đa thể loại"],
  },
  B: {
    type: "B",
    title: "Phim Hài - Comedy Việt",
    emoji: "😂",
    description: "Bạn là người của phim hài Việt - cười giòn, giải trí và vui vẻ. Bạn thích xem phim với bạn bè, gia đình và tận hưởng những tràng cười sảng khoái.",
    traits: ["Vui vẻ", "Xã hội", "Lạc quan", "Dễ hòa đồng"],
    strengths: ["Tinh thần tích cực", "Giải stress tốt", "Kết nối mọi người"],
    weaknesses: ["Có thể bỏ qua phim sâu sắc", "Đánh giá phim theo độ vui"],
    tips: ["Thử phim có chiều sâu hơn", "Khám phá black comedy"],
  },
  C: {
    type: "C",
    title: "Phim Kinh dị/Thriller - Suspense Việt",
    emoji: "👻",
    description: "Bạn là người của phim kinh dị, thriller Việt - hồi hộp, căng thẳng và bất ngờ. Bạn thích cảm giác được sợ hãi và những twist khó đoán.",
    traits: ["Mạo hiểm", "Tò mò", "Thích thử thách", "Thần kinh thép"],
    strengths: ["Không sợ hãi", "Tư duy phân tích", "Thích khám phá"],
    weaknesses: ["Khó ngủ sau khi xem", "Có thể quá kén phim"],
    tips: ["Thử phim psychological horror", "Khám phá folklore Việt"],
  },
  D: {
    type: "D",
    title: "Phim Độc lập - Indie Việt",
    emoji: "🎬",
    description: "Bạn là người của phim độc lập Việt - sáng tạo, có chiều sâu và không theo lối mòn. Bạn tìm kiếm những câu chuyện thật, đời thường và có giá trị nghệ thuật.",
    traits: ["Sâu sắc", "Độc lập tư duy", "Yêu nghệ thuật", "Khám phá"],
    strengths: ["Gout phim tinh tế", "Ủng hộ điện ảnh độc lập", "Mở lòng với cái mới"],
    weaknesses: ["Có thể khó tìm phim phù hợp", "Đôi khi quá kén"],
    tips: ["Chia sẻ những phim hay cho bạn bè", "Theo dõi các liên hoan phim"],
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
