// Phong cách giải trí
// Khám phá phong cách giải trí của bạn

export const questions = [
  {
    id: 1,
    question: "Cuối tuần bạn thường làm gì?",
    options: [
      { text: "Ra ngoài chơi, café, shopping", type: "A" },
      { text: "Ở nhà xem phim, chơi game", type: "B" },
      { text: "Tập thể dục, hoạt động ngoài trời", type: "C" },
      { text: "Gặp gỡ bạn bè, tiệc tùng", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn xem gì nhiều nhất trên điện thoại?",
    options: [
      { text: "TikTok, Reels, video ngắn", type: "A" },
      { text: "YouTube, Netflix, phim series", type: "B" },
      { text: "Podcast, audiobook", type: "C" },
      { text: "Live stream, call video với bạn", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Loại nhạc bạn thích nghe?",
    options: [
      { text: "V-pop, K-pop, nhạc trẻ", type: "A" },
      { text: "US-UK, Pop quốc tế", type: "B" },
      { text: "Chill, Lo-fi, Indie", type: "C" },
      { text: "EDM, nhạc club, party", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Game bạn thích chơi?",
    options: [
      { text: "Game mobile casual, hypercasual", type: "A" },
      { text: "Game RPG, chiến thuật, serious", type: "B" },
      { text: "Ít chơi game, thích hoạt động khác", type: "C" },
      { text: "Game online với bạn bè", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn hay đi đâu để giải trí?",
    options: [
      { text: "Café, quán trà sữa", type: "A" },
      { text: "Rạp chiếu phim, CGV", type: "B" },
      { text: "Phòng gym, công viên", type: "C" },
      { text: "Bar, club, karaoke", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Sở thích giúp bạn thư giãn?",
    options: [
      { text: "Lướt mạng xã hội", type: "A" },
      { text: "Xem phim, đọc truyện", type: "B" },
      { text: "Đọc sách, thiền, yoga", type: "C" },
      { text: "Nói chuyện, đi chơi với bạn", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Kỳ nghỉ lý tưởng của bạn?",
    options: [
      { text: "Du lịch check-in hot spot", type: "A" },
      { text: "Ở nhà netflix and chill", type: "B" },
      { text: "Hiking, camping, khám phá", type: "C" },
      { text: "Du lịch cùng hội bạn thân", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn follow ai nhiều nhất trên mạng?",
    options: [
      { text: "Tiktoker, influencer giải trí", type: "A" },
      { text: "Reviewer phim, game", type: "B" },
      { text: "Chuyên gia sức khỏe, wellness", type: "C" },
      { text: "Bạn bè, người quen", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn chi tiền nhiều nhất cho giải trí gì?",
    options: [
      { text: "Ăn uống, cafe, trà sữa", type: "A" },
      { text: "Subscription phim, game", type: "B" },
      { text: "Phòng gym, thiết bị thể thao", type: "C" },
      { text: "Đi chơi, party với bạn", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Nếu được nghỉ 1 ngày, bạn làm gì?",
    options: [
      { text: "Lên feed, update mạng xã hội", type: "A" },
      { text: "Marathon phim/series cả ngày", type: "B" },
      { text: "Đi bộ, tập thể dục, nấu ăn healthy", type: "C" },
      { text: "Hẹn gặp bạn bè đi chơi", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn thích event nào nhất?",
    options: [
      { text: "Fan meeting, concert idol", type: "A" },
      { text: "Premiere phim, game launch", type: "B" },
      { text: "Chạy bộ, cycling event", type: "C" },
      { text: "Festival, party, hội chợ", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Giải trí với bạn có ý nghĩa gì?",
    options: [
      { text: "Cập nhật trend, không lạc hậu", type: "A" },
      { text: "Thư giãn, thoát khỏi stress", type: "B" },
      { text: "Rèn luyện sức khỏe, tinh thần", type: "C" },
      { text: "Kết nối với bạn bè, xã hội", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Social Media Lover",
    emoji: "📱",
    description: "Giải trí của bạn gắn liền với mạng xã hội và các xu hướng. Bạn thích cập nhật, chia sẻ và kết nối qua các nền tảng số.",
    traits: ["Connected", "Trendy", "Social", "Digital native"],
    strengths: ["Luôn cập nhật", "Kết nối rộng", "Nắm bắt trend nhanh"],
    weaknesses: ["Có thể nghiện mạng xã hội", "Thiếu hoạt động thực tế"],
    tips: ["Cân bằng online và offline", "Thử các hoạt động ngoài trời"],
  },
  B: {
    type: "B",
    title: "Content Consumer",
    emoji: "🎬",
    description: "Bạn yêu thích tiêu thụ nội dung chất lượng như phim, series, game. Bạn thích tận hưởng một mình trong thế giới giải trí.",
    traits: ["Introvert vibe", "Thưởng thức", "Chiều sâu", "Thư giãn"],
    strengths: ["Biết cách thư giãn", "Am hiểu về phim/game", "Tận hưởng một mình"],
    weaknesses: ["Có thể ít ra ngoài", "Bỏ lỡ hoạt động xã hội"],
    tips: ["Rủ bạn xem phim cùng", "Thử hoạt động nhóm đôi khi"],
  },
  C: {
    type: "C",
    title: "Active & Healthy",
    emoji: "🏃",
    description: "Giải trí của bạn gắn với sức khỏe và hoạt động thể chất. Bạn tin rằng nghỉ ngơi tốt nhất là vận động và rèn luyện.",
    traits: ["Active", "Healthy", "Discipline", "Nature lover"],
    strengths: ["Sức khỏe tốt", "Năng lượng cao", "Cân bằng cuộc sống"],
    weaknesses: ["Có thể thiếu thời gian nghỉ ngơi thật sự", "Đôi khi quá kỷ luật"],
    tips: ["Cho phép mình chill đôi khi", "Thử giải trí thụ động"],
  },
  D: {
    type: "D",
    title: "Social Butterfly",
    emoji: "🦋",
    description: "Giải trí của bạn là gặp gỡ và kết nối với mọi người. Bạn yêu thích không khí vui vẻ, tiệc tùng và các hoạt động nhóm.",
    traits: ["Extrovert", "Social", "Fun-loving", "Energetic"],
    strengths: ["Network rộng", "Luôn vui vẻ", "Kỹ năng xã hội tốt"],
    weaknesses: ["Có thể thiếu thời gian cho bản thân", "Chi tiêu nhiều cho social"],
    tips: ["Dành thời gian một mình", "Cân bằng chi tiêu giải trí"],
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
