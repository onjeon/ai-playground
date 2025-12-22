// Phong Cách Uống Cà Phê Việt Nam
// Khám phá phong cách thưởng thức cà phê đặc trưng của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn thích loại cà phê nào nhất?",
    options: [
      { text: "Cà phê sữa đá - ngọt béo, dễ uống", type: "A" },
      { text: "Cà phê đen đá - đậm đà, đắng nhẹ", type: "B" },
      { text: "Cà phê trứng - béo ngậy, độc đáo", type: "C" },
      { text: "Bạc xỉu - nhiều sữa, ngọt nhẹ", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thường uống cà phê ở đâu?",
    options: [
      { text: "Quán cóc vỉa hè, ngồi ghế nhựa", type: "A" },
      { text: "Quán cà phê truyền thống, yên tĩnh", type: "B" },
      { text: "Quán cà phê nghệ thuật, view đẹp", type: "C" },
      { text: "Chuỗi cà phê hiện đại, có wifi", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn uống cà phê vào lúc nào?",
    options: [
      { text: "Sáng sớm, vừa ngủ dậy", type: "A" },
      { text: "Giữa buổi sáng, giải lao", type: "B" },
      { text: "Chiều tà, ngắm hoàng hôn", type: "C" },
      { text: "Tối khuya, làm việc hoặc hẹn hò", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi uống cà phê, bạn làm gì?",
    options: [
      { text: "Đọc báo, lướt tin tức", type: "A" },
      { text: "Suy ngẫm, ngồi im nhìn đời", type: "B" },
      { text: "Chụp ảnh check-in", type: "C" },
      { text: "Chat, làm việc trên điện thoại", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn đi uống cà phê cùng ai?",
    options: [
      { text: "Mấy ông bạn thân, tán gẫu đủ thứ", type: "A" },
      { text: "Một mình, yên tĩnh suy nghĩ", type: "B" },
      { text: "Người yêu, bạn bè để chụp hình", type: "C" },
      { text: "Đồng nghiệp, bàn công việc", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn gọi cà phê kiểu nào?",
    options: [
      { text: "Đen đá ít đường", type: "A" },
      { text: "Phin nóng, đợi từng giọt", type: "B" },
      { text: "Cold brew hoặc cà phê specialty", type: "C" },
      { text: "Cà phê sữa blend sẵn", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Khi quán quen đóng cửa, bạn?",
    options: [
      { text: "Tìm quán cóc khác gần đó", type: "A" },
      { text: "Về nhà tự pha phin", type: "B" },
      { text: "Tìm quán mới để thử", type: "C" },
      { text: "Mua cà phê đóng chai tiện lợi", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn quan tâm điều gì nhất ở quán cà phê?",
    options: [
      { text: "Giá rẻ, cà phê đậm", type: "A" },
      { text: "Không gian yên tĩnh, cổ kính", type: "B" },
      { text: "Decor đẹp, phù hợp chụp ảnh", type: "C" },
      { text: "Wifi mạnh, có ổ điện", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn uống bao nhiêu ly cà phê mỗi ngày?",
    options: [
      { text: "2-3 ly, không có là không sống nổi", type: "A" },
      { text: "1 ly, vừa đủ để thưởng thức", type: "B" },
      { text: "Tùy hứng, có ngày nhiều có ngày không", type: "C" },
      { text: "1 ly buổi sáng là đủ", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Cà phê với bạn có ý nghĩa gì?",
    options: [
      { text: "Là năng lượng, không có không làm việc được", type: "A" },
      { text: "Là nghệ thuật sống chậm", type: "B" },
      { text: "Là phong cách, lifestyle", type: "C" },
      { text: "Là tiện ích, giúp tỉnh táo", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Dân Cà Phê Vỉa Hè Chính Hiệu",
    emoji: "🪑",
    description: "Bạn là fan của cà phê vỉa hè Việt Nam đích thực! Một ly cà phê đen đá hoặc sữa đá, ngồi ghế nhựa nhìn xe cộ qua lại - đó là thiên đường của bạn. Bạn thực tế, bình dị và yêu những điều giản đơn của cuộc sống Việt Nam.",
    traits: ["Bình dị", "Thực tế", "Gần gũi", "Yêu văn hóa Việt"],
    strengths: ["Dễ hòa nhập", "Không cầu kỳ", "Tiết kiệm", "Có nhiều bạn bè"],
    weaknesses: ["Đôi khi cố chấp với quán quen", "Khó thử cái mới"],
    tips: ["Thử các loại cà phê mới", "Khám phá các quán có không gian đẹp"],
  },
  B: {
    type: "B",
    title: "Người Thưởng Thức Cà Phê Truyền Thống",
    emoji: "☕",
    description: "Bạn là người yêu văn hóa cà phê truyền thống Việt Nam. Bạn thích ngồi đợi từng giọt cà phê phin rơi, thưởng thức trong không gian yên tĩnh và suy ngẫm về cuộc sống. Bạn sâu sắc, tinh tế và biết hưởng thụ.",
    traits: ["Sâu sắc", "Tinh tế", "Hoài cổ", "Biết thưởng thức"],
    strengths: ["Am hiểu cà phê", "Có chiều sâu", "Biết tận hưởng khoảnh khắc"],
    weaknesses: ["Đôi khi quá chậm rãi", "Khó thích nghi với nhịp sống nhanh"],
    tips: ["Giữ gìn văn hóa cà phê phin", "Chia sẻ với người khác về cà phê truyền thống"],
  },
  C: {
    type: "C",
    title: "Dân Cà Phê Aesthetic",
    emoji: "📸",
    description: "Bạn yêu cà phê không chỉ vì hương vị mà còn vì trải nghiệm. Quán đẹp, ly cà phê được decor xinh xắn, check-in cùng bạn bè - đó là cách bạn thưởng thức. Bạn sáng tạo, năng động và luôn cập nhật xu hướng.",
    traits: ["Sáng tạo", "Thời thượng", "Năng động", "Thích khám phá"],
    strengths: ["Luôn biết quán mới hay", "Có gu thẩm mỹ", "Networking tốt"],
    weaknesses: ["Đôi khi ưu tiên hình thức hơn chất lượng", "Dễ bị cuốn theo trend"],
    tips: ["Thử cà phê truyền thống", "Chú ý đến chất lượng cà phê thực sự"],
  },
  D: {
    type: "D",
    title: "Dân Cà Phê Hiện Đại Thực Dụng",
    emoji: "💻",
    description: "Cà phê với bạn là công cụ để làm việc hiệu quả. Bạn thường ngồi quán có wifi mạnh, ổ điện nhiều và uống cà phê trong khi làm việc. Bạn thực tế, năng suất cao và luôn biết cách tận dụng thời gian.",
    traits: ["Thực tế", "Năng suất", "Hiện đại", "Hiệu quả"],
    strengths: ["Làm việc hiệu quả", "Biết tận dụng thời gian", "Thích nghi tốt"],
    weaknesses: ["Ít thời gian thư giãn thực sự", "Có thể bỏ lỡ trải nghiệm văn hóa"],
    tips: ["Dành thời gian thưởng thức cà phê chậm rãi", "Thử quán truyền thống không wifi"],
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
