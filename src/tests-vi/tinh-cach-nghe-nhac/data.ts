// Phong cách nghe nhạc
// Khám phá phong cách nghe nhạc của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn nghe nhạc khi nào?",
    options: [
      { text: "Mọi lúc, nhạc là nền cho cuộc sống", type: "A" },
      { text: "Khi làm việc, cần tập trung", type: "B" },
      { text: "Khi buồn/vui, theo cảm xúc", type: "C" },
      { text: "Khi di chuyển, trong xe", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn nghe nhạc bằng gì?",
    options: [
      { text: "Tai nghe chất lượng cao, lossless", type: "A" },
      { text: "AirPods, TWS tiện lợi", type: "B" },
      { text: "Loa bluetooth, speaker", type: "C" },
      { text: "Bất kỳ, miễn nghe được", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn khám phá nhạc mới như thế nào?",
    options: [
      { text: "Spotify/Apple Music recommendations", type: "A" },
      { text: "Bạn bè share, viral trends", type: "B" },
      { text: "Tự tìm kiếm, đào sâu vào artists", type: "C" },
      { text: "Radio, charts, trending", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Playlist của bạn như thế nào?",
    options: [
      { text: "Nhiều playlist theo mood, hoạt động", type: "A" },
      { text: "Vài playlist chính, cập nhật liên tục", type: "B" },
      { text: "Một playlist duy nhất, bài yêu thích", type: "C" },
      { text: "Không có playlist, nghe shuffle", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn quan tâm đến lời bài hát như thế nào?",
    options: [
      { text: "Rất quan tâm, phải có ý nghĩa", type: "A" },
      { text: "Quan tâm nếu bài hay", type: "B" },
      { text: "Không lắm, melody quan trọng hơn", type: "C" },
      { text: "Tùy thể loại, có khi quan tâm", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn chi tiền cho nhạc như thế nào?",
    options: [
      { text: "Spotify/Apple Music Premium", type: "A" },
      { text: "Mua vé concert nghệ sĩ yêu thích", type: "B" },
      { text: "Mua vinyl, CD collector", type: "C" },
      { text: "Không chi, nghe free", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn đi concert/live show không?",
    options: [
      { text: "Thường xuyên, thích trải nghiệm live", type: "A" },
      { text: "Đôi khi, khi nghệ sĩ yêu thích về", type: "B" },
      { text: "Hiếm khi, thích nghe ở nhà", type: "C" },
      { text: "Chưa bao giờ, không có cơ hội", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn nghe một bài hát như thế nào?",
    options: [
      { text: "Nghe đi nghe lại đến khi chán", type: "A" },
      { text: "Nghe vài lần rồi chuyển bài mới", type: "B" },
      { text: "Shuffle, không nghe lặp nhiều", type: "C" },
      { text: "Tùy bài, hay thì nghe nhiều", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn chia sẻ nhạc với người khác như thế nào?",
    options: [
      { text: "Hay share playlist, recommend bài mới", type: "A" },
      { text: "Chia sẻ khi có bài đặc biệt hay", type: "B" },
      { text: "Ít chia sẻ, nghe cho mình", type: "C" },
      { text: "Nghe cùng bạn bè khi hangout", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn theo dõi nghệ sĩ yêu thích như thế nào?",
    options: [
      { text: "Follow mọi nơi, không bỏ lỡ gì", type: "A" },
      { text: "Nghe nhạc là chính, không theo dõi sát", type: "B" },
      { text: "Biết một số thông tin cơ bản", type: "C" },
      { text: "Không quan tâm nghệ sĩ, chỉ quan tâm bài hát", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Chất lượng âm thanh quan trọng với bạn thế nào?",
    options: [
      { text: "Rất quan trọng, phải chất lượng cao", type: "A" },
      { text: "Quan tâm nhưng không ám ảnh", type: "B" },
      { text: "Bình thường, nghe được là được", type: "C" },
      { text: "Không quan tâm lắm", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Nhạc đối với bạn là gì?",
    options: [
      { text: "Cuộc sống, không thể thiếu", type: "A" },
      { text: "Cách thể hiện và kết nối cảm xúc", type: "B" },
      { text: "Giải trí, thư giãn", type: "C" },
      { text: "Nền cho các hoạt động khác", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Audiophile - Người yêu nhạc đích thực",
    emoji: "🎧",
    description: "Bạn là người yêu nhạc đích thực, quan tâm đến chất lượng âm thanh và trải nghiệm nghe. Nhạc là một phần không thể thiếu trong cuộc sống của bạn.",
    traits: ["Đam mê nhạc", "Chất lượng cao", "Đào sâu", "Thưởng thức"],
    strengths: ["Gout nhạc sâu", "Trải nghiệm nghe tốt nhất", "Kiến thức âm nhạc"],
    weaknesses: ["Có thể tốn kém", "Đôi khi kén nhạc"],
    tips: ["Chia sẻ đam mê với người khác", "Mở lòng với nhiều thể loại"],
  },
  B: {
    type: "B",
    title: "Social Listener - Người nghe Kết nối",
    emoji: "🎵",
    description: "Bạn nghe nhạc để kết nối với người khác và cảm xúc. Bạn thích chia sẻ, đi concert và trải nghiệm nhạc cùng cộng đồng.",
    traits: ["Kết nối", "Chia sẻ", "Trải nghiệm", "Xã hội"],
    strengths: ["Có người nghe nhạc cùng", "Trải nghiệm concert", "Cập nhật trends"],
    weaknesses: ["Có thể bị ảnh hưởng bởi xu hướng", "Ít đào sâu"],
    tips: ["Tìm kiếm nhạc độc lập", "Phát triển gout riêng"],
  },
  C: {
    type: "C",
    title: "Mood Listener - Người nghe Cảm xúc",
    emoji: "🎭",
    description: "Bạn nghe nhạc theo cảm xúc và mood. Nhạc là cách bạn xử lý và thể hiện cảm xúc, mỗi khoảnh khắc có một bài hát phù hợp.",
    traits: ["Cảm xúc", "Mood-based", "Sâu sắc", "Riêng tư"],
    strengths: ["Kết nối cảm xúc với nhạc", "Playlist theo mood", "Nghe có ý nghĩa"],
    weaknesses: ["Có thể nghe nhạc buồn khi buồn", "Ít khám phá mới"],
    tips: ["Thử nghe nhạc vui khi buồn", "Khám phá thể loại mới"],
  },
  D: {
    type: "D",
    title: "Casual Listener - Người nghe Thoải mái",
    emoji: "🎶",
    description: "Bạn nghe nhạc thoải mái, như nền cho cuộc sống. Không quá quan tâm đến chất lượng hay theo dõi nghệ sĩ, bạn chỉ cần âm nhạc làm đẹp cuộc sống.",
    traits: ["Thoải mái", "Không ám ảnh", "Background music", "Linh hoạt"],
    strengths: ["Không stress về nhạc", "Nghe đa dạng", "Cân bằng"],
    weaknesses: ["Có thể bỏ lỡ nhạc hay", "Ít trải nghiệm sâu"],
    tips: ["Thử đào sâu vào một vài artist", "Trải nghiệm live music"],
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
