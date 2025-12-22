// Phong cách chơi game
// Khám phá phong cách chơi game của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn thích thể loại game nào nhất?",
    options: [
      { text: "RPG, open world - khám phá, story", type: "A" },
      { text: "Shooter, action - hành động, kỹ năng", type: "B" },
      { text: "Strategy, simulation - chiến thuật, xây dựng", type: "C" },
      { text: "Casual, puzzle - nhẹ nhàng, giải trí", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn chơi game một mình hay với người khác?",
    options: [
      { text: "Một mình, thích story và exploration", type: "A" },
      { text: "Online với bạn bè, team", type: "B" },
      { text: "Cả hai, tùy mood", type: "C" },
      { text: "Competitive, rank với người khác", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi chơi game, điều gì quan trọng nhất với bạn?",
    options: [
      { text: "Cốt truyện hay, nhân vật sâu sắc", type: "A" },
      { text: "Gameplay mượt, skill cap cao", type: "B" },
      { text: "Tự do sáng tạo, nhiều lựa chọn", type: "C" },
      { text: "Vui, giết thời gian", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn dành bao nhiêu thời gian chơi game?",
    options: [
      { text: "Nhiều, gaming là đam mê", type: "A" },
      { text: "Vừa phải, vài tiếng mỗi ngày", type: "B" },
      { text: "Ít, chỉ khi rảnh", type: "C" },
      { text: "Tùy, có game hay thì chơi nhiều", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn chi tiền cho game như thế nào?",
    options: [
      { text: "Mua game bản quyền, DLC đầy đủ", type: "A" },
      { text: "Free-to-play, mua skin/battle pass", type: "B" },
      { text: "Ít chi, chơi game free là chính", type: "C" },
      { text: "Chi cho game đáng giá, không phung phí", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi gặp boss khó, bạn làm gì?",
    options: [
      { text: "Thử đi thử lại cho đến khi qua", type: "A" },
      { text: "Tìm guide, video hướng dẫn", type: "B" },
      { text: "Nghỉ một lúc rồi quay lại", type: "C" },
      { text: "Lower difficulty hoặc skip", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn theo dõi gaming news/community như thế nào?",
    options: [
      { text: "Theo dõi sát, đọc review, xem trailer", type: "A" },
      { text: "Follow streamer, esports", type: "B" },
      { text: "Thỉnh thoảng, khi có game quan tâm", type: "C" },
      { text: "Không theo dõi, chơi khi bạn bè rủ", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn thích chế độ chơi nào?",
    options: [
      { text: "Single player, story mode", type: "A" },
      { text: "Multiplayer, PvP ranked", type: "B" },
      { text: "Co-op, chơi cùng bạn bè", type: "C" },
      { text: "Casual, không áp lực", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn chơi game trên thiết bị nào?",
    options: [
      { text: "PC - đa năng, đồ họa đẹp", type: "A" },
      { text: "Console - exclusive, tiện lợi", type: "B" },
      { text: "Mobile - chơi mọi lúc mọi nơi", type: "C" },
      { text: "Nhiều platform, tùy game", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Khi chơi online bị thua, bạn phản ứng thế nào?",
    options: [
      { text: "Bình tĩnh, học từ sai lầm", type: "A" },
      { text: "Hơi tức nhưng tiếp tục chơi", type: "B" },
      { text: "Nghỉ, làm việc khác", type: "C" },
      { text: "Không quan tâm win/lose lắm", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn có 100% completion game không?",
    options: [
      { text: "Cố gắng hoàn thành 100%, collect mọi thứ", type: "A" },
      { text: "Hoàn thành main story, side quest một số", type: "B" },
      { text: "Chỉ main story thôi", type: "C" },
      { text: "Tùy game, hay thì hoàn thành hết", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Gaming đối với bạn là gì?",
    options: [
      { text: "Đam mê, nghệ thuật, trải nghiệm", type: "A" },
      { text: "Competitive, thử thách bản thân", type: "B" },
      { text: "Giải trí, thư giãn", type: "C" },
      { text: "Kết nối với bạn bè", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Gamer Explorer - Nhà thám hiểm",
    emoji: "🗺️",
    description: "Bạn là gamer yêu thích khám phá, story và trải nghiệm sâu. Bạn thích RPG, open world và những game có cốt truyện hay, thế giới rộng lớn.",
    traits: ["Khám phá", "Story-driven", "Kiên nhẫn", "Chi tiết"],
    strengths: ["Trải nghiệm game sâu", "Không bỏ qua chi tiết", "Thưởng thức nghệ thuật game"],
    weaknesses: ["Tốn nhiều thời gian", "Có thể bỏ lỡ game multiplayer"],
    tips: ["Thử multiplayer với bạn bè", "Balance giữa game và cuộc sống"],
  },
  B: {
    type: "B",
    title: "Gamer Competitive - Chiến binh",
    emoji: "⚔️",
    description: "Bạn là gamer competitive, thích thử thách và cạnh tranh. Bạn thích PvP, ranked và luôn muốn cải thiện skill để leo rank.",
    traits: ["Competitive", "Kỹ năng", "Quyết tâm", "Team player"],
    strengths: ["Skill cao", "Tinh thần thể thao", "Biết làm việc nhóm"],
    weaknesses: ["Có thể tức giận khi thua", "Áp lực cao"],
    tips: ["Chơi casual đôi khi để relax", "Đừng để thua ảnh hưởng mood"],
  },
  C: {
    type: "C",
    title: "Gamer Casual - Người thư giãn",
    emoji: "🎮",
    description: "Bạn chơi game để thư giãn và giải trí. Không ám ảnh về win/lose, bạn thích những game nhẹ nhàng và chơi khi có thời gian.",
    traits: ["Casual", "Thư giãn", "Không áp lực", "Linh hoạt"],
    strengths: ["Không stress", "Cân bằng cuộc sống", "Chơi vì vui"],
    weaknesses: ["Có thể không trải nghiệm hết game", "Ít kết nối gaming community"],
    tips: ["Thử game sâu hơn đôi khi", "Tham gia community gaming"],
  },
  D: {
    type: "D",
    title: "Gamer Social - Người kết nối",
    emoji: "👥",
    description: "Bạn chơi game để kết nối với bạn bè. Game là cách bạn hangout, có kỷ niệm vui và xây dựng tình bạn.",
    traits: ["Social", "Vui vẻ", "Kết nối", "Linh hoạt"],
    strengths: ["Gaming với bạn bè vui", "Kỷ niệm đẹp", "Không cô đơn khi chơi"],
    weaknesses: ["Phụ thuộc vào bạn bè online", "Có thể không enjoy solo game"],
    tips: ["Thử single player game đôi khi", "Mở rộng gaming circle"],
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
