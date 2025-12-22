// Game Thủ Loại Nào?
// Khám phá phong cách chơi game của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn thường chơi game trên thiết bị nào?",
    options: [
      { text: "Điện thoại - tiện lợi, chơi mọi lúc", type: "A" },
      { text: "PC/Laptop - đồ họa đẹp, game đỉnh", type: "B" },
      { text: "PlayStation/Xbox - game console", type: "C" },
      { text: "Tất cả, game gì có thiết bị đó", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Thể loại game yêu thích của bạn là gì?",
    options: [
      { text: "MOBA/Battle Royale - Liên Quân, PUBG, Free Fire", type: "A" },
      { text: "RPG/Adventure - Genshin Impact, Zelda", type: "B" },
      { text: "FPS - Valorant, CS, Call of Duty", type: "C" },
      { text: "Casual/Puzzle - Candy Crush, Among Us", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi chơi game team, bạn thường là?",
    options: [
      { text: "Carry/Dealer - gánh team là chuyện nhỏ", type: "A" },
      { text: "Support/Healer - chăm sóc đồng đội", type: "B" },
      { text: "Tank/Defender - đứng mũi chịu sào", type: "C" },
      { text: "Tùy team cần gì thì chơi đó", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn dành bao nhiêu thời gian chơi game mỗi ngày?",
    options: [
      { text: "1-2 tiếng - vừa phải", type: "A" },
      { text: "3-5 tiếng - khá nhiều", type: "B" },
      { text: "Hơn 5 tiếng - nghiện rồi", type: "C" },
      { text: "Không cố định, khi rảnh mới chơi", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi thua game, bạn phản ứng thế nào?",
    options: [
      { text: "Tức giận, đập bàn phím/chuột", type: "A" },
      { text: "Chấp nhận, chơi lại để lấy lại", type: "B" },
      { text: "Đổ lỗi cho đồng đội", type: "C" },
      { text: "Bình thường, thua thì thua", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn có nạp tiền vào game không?",
    options: [
      { text: "Có, nạp nhiều để có skin đẹp", type: "A" },
      { text: "Thỉnh thoảng, nạp vừa phải", type: "B" },
      { text: "Hiếm khi, chỉ nạp event lớn", type: "C" },
      { text: "Không bao giờ, chơi free thôi", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn thường chơi game với ai?",
    options: [
      { text: "Solo - một mình một ngựa", type: "A" },
      { text: "Bạn bè thân - có hội cố định", type: "B" },
      { text: "Random team - gặp ai chơi với người đó", type: "C" },
      { text: "Người yêu/gia đình - game là để gắn kết", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Khi có game mới hot, bạn?",
    options: [
      { text: "Tải ngay để thử", type: "A" },
      { text: "Đợi review rồi mới quyết định", type: "B" },
      { text: "Thấy bạn bè chơi mới tải", type: "C" },
      { text: "Không quan tâm, chơi game quen thôi", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Rank cao nhất bạn từng đạt được là gì?",
    options: [
      { text: "Top server/Thách Đấu/Radiant", type: "A" },
      { text: "Diamond/Cao Thủ/Immortal", type: "B" },
      { text: "Gold/Bạch Kim/Platinum", type: "C" },
      { text: "Không leo rank, chơi vui thôi", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn xem stream/video game không?",
    options: [
      { text: "Có, follow nhiều streamer", type: "A" },
      { text: "Thỉnh thoảng xem highlight", type: "B" },
      { text: "Chỉ xem hướng dẫn/tutorial", type: "C" },
      { text: "Không, thích tự chơi hơn", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Pro Gamer Đích Thực",
    emoji: "🎮",
    percentage: 95,
    description: "Bạn là game thủ thứ thiệt! Chơi game không chỉ là giải trí mà còn là đam mê. Rank cao, skill khủng, bạn bè nể phục. Có khi nên thử stream kiếm tiền đấy!",
    characteristics: ["Skill cao", "Nạp tiền không tiếc", "Leo rank cuồng nhiệt", "Biết hết meta game"],
    advice: "Hãy nhớ cân bằng giữa game và cuộc sống thực nhé! Đôi khi bạn cần ra ngoài hít thở không khí trong lành.",
  },
  B: {
    type: "B",
    title: "Game Thủ Cân Bằng",
    emoji: "⚖️",
    percentage: 70,
    description: "Bạn chơi game để giải trí và kết nối với bạn bè. Biết dừng đúng lúc, không để game ảnh hưởng đến cuộc sống. Đây là kiểu game thủ lành mạnh nhất!",
    characteristics: ["Chơi có chừng mực", "Biết dừng đúng lúc", "Chơi với bạn bè", "Không quá cuồng"],
    advice: "Bạn đang có sự cân bằng tuyệt vời! Hãy tiếp tục duy trì và đừng để bị cuốn vào quá sâu.",
  },
  C: {
    type: "C",
    title: "Chiến Binh Tryhard",
    emoji: "⚔️",
    percentage: 85,
    description: "Với bạn, chơi là phải thắng! Bạn leo rank cật lực, nghiên cứu meta, xem tutorial. Đôi khi có hơi toxic một chút khi thua nhưng đó là vì bạn quá muốn thắng!",
    characteristics: ["Cạnh tranh cao", "Muốn thắng bằng mọi giá", "Nghiên cứu kỹ", "Đôi khi hay toxic"],
    advice: "Nhớ rằng game là để vui! Thua một trận không phải là ngày tận thế. Hít thở sâu và enjoy the game!",
  },
  D: {
    type: "D",
    title: "Casual Gamer",
    emoji: "🎯",
    percentage: 50,
    description: "Bạn chơi game để thư giãn, không quan tâm rank hay meta. Mục đích là giải trí, có vui là được. Game khó quá thì bỏ, không cần phải cố gắng quá!",
    characteristics: ["Chơi cho vui", "Không quan tâm rank", "Thư giãn là chính", "Game mobile là chủ yếu"],
    advice: "Đây là cách chơi game lành mạnh nhất! Nếu muốn thử thách hơn, hãy thử leo rank xem sao nhé.",
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
