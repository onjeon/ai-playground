// Thể loại game yêu thích
// Bài test khám phá thể loại game phù hợp với phong cách chơi của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn chơi game với mục đích gì?",
    options: [
      { text: "Để thi đấu và thể hiện kỹ năng", type: "A" },
      { text: "Để xây dựng và sáng tạo", type: "B" },
      { text: "Để trải nghiệm câu chuyện hay", type: "C" },
      { text: "Để giải trí nhẹ nhàng, giết thời gian", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thích chơi game một mình hay cùng người khác?",
    options: [
      { text: "Cùng team, thi đấu online", type: "A" },
      { text: "Một mình, tập trung vào thế giới game", type: "B" },
      { text: "Một mình để tận hưởng cốt truyện", type: "C" },
      { text: "Cả hai, tùy tâm trạng", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn dành bao nhiêu thời gian cho mỗi session game?",
    options: [
      { text: "Nhiều tiếng đồng hồ, chơi nghiêm túc", type: "A" },
      { text: "Vài tiếng, xây dựng từ từ", type: "B" },
      { text: "Theo câu chuyện, có thể rất lâu", type: "C" },
      { text: "15-30 phút, chơi nhanh", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Điều gì quan trọng nhất với bạn trong game?",
    options: [
      { text: "Độ cạnh tranh và xếp hạng", type: "A" },
      { text: "Tự do sáng tạo và khám phá", type: "B" },
      { text: "Cốt truyện và nhân vật", type: "C" },
      { text: "Gameplay đơn giản, dễ chơi", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn thích đồ họa game như thế nào?",
    options: [
      { text: "Realistic, chân thực", type: "A" },
      { text: "Đẹp, có phong cách riêng", type: "B" },
      { text: "Anime, stylized, đẹp mắt", type: "C" },
      { text: "Đơn giản, dễ nhìn là được", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn có hay theo dõi esports không?",
    options: [
      { text: "Có, rất thích xem và thi đấu", type: "A" },
      { text: "Đôi khi, xem cho vui", type: "B" },
      { text: "Không, thích chơi một mình", type: "C" },
      { text: "Không quan tâm lắm", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn chơi game trên thiết bị nào?",
    options: [
      { text: "PC gaming cao cấp", type: "A" },
      { text: "PC/Console để trải nghiệm tốt nhất", type: "B" },
      { text: "Console (PS, Switch)", type: "C" },
      { text: "Điện thoại là chính", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn có hay nạp tiền vào game không?",
    options: [
      { text: "Có, để có lợi thế cạnh tranh", type: "A" },
      { text: "Đôi khi, cho skin/item đẹp", type: "B" },
      { text: "Mua game full price để chơi", type: "C" },
      { text: "Ít khi, chơi free là chính", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi gặp khó khăn trong game, bạn làm gì?",
    options: [
      { text: "Luyện tập cho đến khi qua được", type: "A" },
      { text: "Thử nhiều cách khác nhau", type: "B" },
      { text: "Xem guide để tiếp tục câu chuyện", type: "C" },
      { text: "Bỏ qua hoặc chơi game khác", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn thích nhạc game như thế nào?",
    options: [
      { text: "Không quan trọng, tập trung vào gameplay", type: "A" },
      { text: "Quan trọng, tạo không khí", type: "B" },
      { text: "Rất quan trọng, OST hay là điểm cộng lớn", type: "C" },
      { text: "Nhạc vui vẻ, bắt tai", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn có hay replay game không?",
    options: [
      { text: "Không, chuyển sang game mới", type: "A" },
      { text: "Có, để thử cách chơi khác", type: "B" },
      { text: "Có, để xem các ending khác", type: "C" },
      { text: "Ít khi, chơi qua một lần là đủ", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Game nào sau đây bạn muốn chơi nhất?",
    options: [
      { text: "Liên Minh Huyền Thoại, VALORANT", type: "A" },
      { text: "Minecraft, Stardew Valley", type: "B" },
      { text: "The Witcher, Genshin Impact", type: "C" },
      { text: "Candy Crush, Among Us", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người Chơi Cạnh Tranh",
    emoji: "🏆",
    description: "Bạn yêu thích game cạnh tranh, esports, và thể hiện kỹ năng. Bạn chơi game để thắng và leo rank, luôn muốn trở thành người giỏi nhất.",
    traits: ["Cạnh tranh", "Kỷ luật", "Kiên trì", "Muốn chiến thắng"],
    strengths: ["Phản xạ tốt", "Làm việc nhóm", "Không bỏ cuộc"],
    weaknesses: ["Đôi khi quá căng thẳng", "Có thể toxic khi thua"],
    tips: ["Thử chơi thêm game casual để thư giãn", "Nhớ rằng game là để vui"],
  },
  B: {
    type: "B",
    title: "Người Chơi Sáng Tạo",
    emoji: "🎨",
    description: "Bạn yêu thích game xây dựng, sandbox, simulation - những game cho phép bạn sáng tạo và khám phá tự do. Bạn chơi game để xây dựng thế giới của riêng mình.",
    traits: ["Sáng tạo", "Kiên nhẫn", "Tưởng tượng", "Tự do"],
    strengths: ["Sáng tạo không giới hạn", "Kiên nhẫn", "Có tầm nhìn"],
    weaknesses: ["Có thể mất quá nhiều thời gian", "Khó hoàn thành project"],
    tips: ["Thử chia sẻ công trình với cộng đồng", "Đặt mục tiêu nhỏ để hoàn thành"],
  },
  C: {
    type: "C",
    title: "Người Chơi Yêu Câu Chuyện",
    emoji: "📖",
    description: "Bạn yêu thích game RPG, game có cốt truyện sâu sắc. Với bạn, game là một loại hình nghệ thuật, một cách để trải nghiệm những câu chuyện tuyệt vời.",
    traits: ["Yêu câu chuyện", "Cảm xúc", "Chú ý chi tiết", "Thưởng thức"],
    strengths: ["Trải nghiệm game sâu sắc", "Đánh giá game tốt", "Gắn bó với nhân vật"],
    weaknesses: ["Mất nhiều thời gian cho một game", "Có thể kén game"],
    tips: ["RPG Việt Nam đang phát triển", "Thử chơi các game indie hay"],
  },
  D: {
    type: "D",
    title: "Người Chơi Casual",
    emoji: "🎮",
    description: "Bạn chơi game để giải trí nhẹ nhàng, không quá nghiêm túc. Bạn thích game dễ chơi, có thể chơi mọi lúc mọi nơi mà không cần đầu tư quá nhiều thời gian.",
    traits: ["Thoải mái", "Dễ tính", "Thực tế", "Cân bằng"],
    strengths: ["Không bị nghiện game", "Cân bằng cuộc sống", "Dễ tìm game hay"],
    weaknesses: ["Có thể bỏ qua game hay", "Không trải nghiệm hết game"],
    tips: ["Thử chơi một game sâu hơn", "Mobile game Việt Nam cũng rất hay"],
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
