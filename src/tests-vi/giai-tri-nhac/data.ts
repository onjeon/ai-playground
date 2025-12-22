// Thể loại nhạc yêu thích
// Bài test khám phá thể loại nhạc phù hợp với tâm hồn của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn thường nghe nhạc khi nào?",
    options: [
      { text: "Khi làm việc/học tập để tập trung", type: "A" },
      { text: "Khi muốn thư giãn, nghỉ ngơi", type: "B" },
      { text: "Khi đang buồn hoặc có tâm sự", type: "C" },
      { text: "Khi đi chơi, tiệc tùng, tập thể dục", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thích nghe nhạc có lời hay không lời?",
    options: [
      { text: "Không lời, nhạc hòa tấu, cổ điển", type: "A" },
      { text: "Có lời nhẹ nhàng, acoustic", type: "B" },
      { text: "Lời hay, ý nghĩa sâu sắc", type: "C" },
      { text: "Beat mạnh, rhythm cuốn hút", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Nhịp độ nhạc bạn thích nhất?",
    options: [
      { text: "Chậm rãi, êm dịu", type: "A" },
      { text: "Vừa phải, dễ chịu", type: "B" },
      { text: "Tùy tâm trạng, thường là ballad", type: "C" },
      { text: "Nhanh, năng động", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn đánh giá một bài hát dựa trên điều gì?",
    options: [
      { text: "Giai điệu tinh tế, chất lượng âm thanh", type: "A" },
      { text: "Cảm giác thoải mái khi nghe", type: "B" },
      { text: "Ca từ và cảm xúc truyền tải", type: "C" },
      { text: "Beat drop và khả năng nhảy theo", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn thường nghe nhạc ở đâu?",
    options: [
      { text: "Phòng riêng với tai nghe chất lượng", type: "A" },
      { text: "Bất cứ đâu, qua loa bluetooth", type: "B" },
      { text: "Trên giường, trong quán cà phê", type: "C" },
      { text: "Phòng gym, club, trong xe", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Nghệ sĩ bạn yêu thích thường có phong cách?",
    options: [
      { text: "Tài năng, có học thuật về âm nhạc", type: "A" },
      { text: "Indie, mộc mạc, chân thực", type: "B" },
      { text: "Giọng hát da diết, cảm xúc", type: "C" },
      { text: "Sôi động, biểu diễn ấn tượng", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Khi buồn, bạn nghe nhạc như thế nào?",
    options: [
      { text: "Nhạc không lời để tĩnh tâm", type: "A" },
      { text: "Nhạc nhẹ nhàng để thư giãn", type: "B" },
      { text: "Nhạc buồn để đồng cảm", type: "C" },
      { text: "Nhạc sôi động để quên đi", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Playlist của bạn thường như thế nào?",
    options: [
      { text: "Được sắp xếp theo thể loại, chất lượng cao", type: "A" },
      { text: "Đa dạng, chill, dễ nghe", type: "B" },
      { text: "Theo tâm trạng, nhiều ballad", type: "C" },
      { text: "Toàn bài sôi động, party", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn khám phá nhạc mới như thế nào?",
    options: [
      { text: "Qua các kênh nhạc chuyên nghiệp, đánh giá", type: "A" },
      { text: "Ngẫu nhiên, nghe thấy thích là thêm vào", type: "B" },
      { text: "Qua bạn bè giới thiệu hoặc phim ảnh", type: "C" },
      { text: "Qua TikTok, các bảng xếp hạng trending", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn có hay đi concert không?",
    options: [
      { text: "Thích concert nhạc cổ điển, acoustic", type: "A" },
      { text: "Đôi khi, với nghệ sĩ yêu thích", type: "B" },
      { text: "Có, nếu là ca sĩ ballad", type: "C" },
      { text: "Rất thích, đặc biệt là lễ hội âm nhạc", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Thiết bị nghe nhạc bạn quan tâm nhất?",
    options: [
      { text: "Tai nghe cao cấp, DAC/AMP", type: "A" },
      { text: "Loa bluetooth tiện lợi", type: "B" },
      { text: "Tai nghe bình thường, quan trọng là bài hát", type: "C" },
      { text: "Hệ thống âm thanh bass mạnh", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bạn thích nhạc Việt Nam thể loại nào nhất?",
    options: [
      { text: "Nhạc Trịnh, nhạc tiền chiến", type: "A" },
      { text: "Nhạc indie Việt, acoustic", type: "B" },
      { text: "Ballad, nhạc trữ tình", type: "C" },
      { text: "V-pop, nhạc EDM Việt", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người Yêu Nhạc Cổ Điển & Tinh Tế",
    emoji: "🎻",
    description: "Bạn có gu âm nhạc tinh tế, yêu thích nhạc cổ điển, jazz, và các thể loại có chiều sâu nghệ thuật. Bạn đánh giá cao chất lượng âm thanh và sự tinh xảo trong âm nhạc.",
    traits: ["Tinh tế", "Có gu", "Sâu sắc", "Trầm tính"],
    strengths: ["Hiểu biết âm nhạc", "Thưởng thức chất lượng", "Tâm hồn nghệ sĩ"],
    weaknesses: ["Đôi khi khó tìm người cùng sở thích", "Có thể bị cho là khó tính"],
    tips: ["Thử nghe nhạc Trịnh Công Sơn", "Jazz Việt Nam cũng rất hay"],
  },
  B: {
    type: "B",
    title: "Người Yêu Nhạc Indie & Acoustic",
    emoji: "🎸",
    description: "Bạn yêu thích nhạc indie, acoustic, những bài hát mộc mạc, chân thực. Bạn tìm kiếm sự thoải mái và chân thành trong âm nhạc.",
    traits: ["Mộc mạc", "Chân thực", "Thoải mái", "Yêu thiên nhiên"],
    strengths: ["Dễ tìm nhạc hay", "Gu âm nhạc đa dạng", "Dễ chia sẻ với người khác"],
    weaknesses: ["Có thể bỏ lỡ nhạc mainstream hay", "Đôi khi quá chill"],
    tips: ["Khám phá nhạc indie Việt", "Coffee shop là nơi tuyệt vời để nghe nhạc"],
  },
  C: {
    type: "C",
    title: "Người Yêu Nhạc Ballad & Trữ Tình",
    emoji: "🎤",
    description: "Bạn yêu thích ballad, nhạc trữ tình với ca từ ý nghĩa và giai điệu da diết. Bạn nghe nhạc để cảm nhận và đồng điệu với cảm xúc của mình.",
    traits: ["Cảm xúc", "Nhạy cảm", "Lãng mạn", "Sâu lắng"],
    strengths: ["Cảm nhận sâu sắc", "Nhớ lời bài hát tốt", "Có trái tim ấm áp"],
    weaknesses: ["Dễ buồn khi nghe nhạc", "Có thể quá chìm đắm trong cảm xúc"],
    tips: ["V-Pop ballad rất đa dạng", "Nhạc Hàn Quốc cũng là lựa chọn tốt"],
  },
  D: {
    type: "D",
    title: "Người Yêu Nhạc EDM & Pop",
    emoji: "🎧",
    description: "Bạn yêu thích nhạc EDM, pop, hip-hop - những thể loại sôi động, năng lượng cao. Bạn nghe nhạc để tạo động lực và tận hưởng cuộc sống.",
    traits: ["Năng động", "Sôi nổi", "Thích tiệc tùng", "Trẻ trung"],
    strengths: ["Luôn cập nhật xu hướng", "Dễ tìm nhạc mới", "Tạo không khí vui vẻ"],
    weaknesses: ["Có thể bỏ qua nhạc có chiều sâu", "Gu nhạc thay đổi nhanh"],
    tips: ["EDM Việt đang phát triển mạnh", "Theo dõi các DJ Việt Nam"],
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
