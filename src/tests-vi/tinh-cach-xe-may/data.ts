// Tính cách khi đi xe máy
// Khám phá tính cách của bạn qua cách bạn đi xe máy trên đường phố Việt Nam

export const questions = [
  {
    id: 1,
    question: "Bạn thường đi xe máy với tốc độ như thế nào?",
    options: [
      { text: "Nhanh vù vù, thích cảm giác tốc độ", type: "A" },
      { text: "Vừa phải, theo luật giao thông", type: "B" },
      { text: "Chậm rãi, an toàn là trên hết", type: "C" },
      { text: "Tùy thuộc vào tâm trạng", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Khi gặp đèn vàng, bạn thường?",
    options: [
      { text: "Tăng ga vượt qua", type: "A" },
      { text: "Phanh lại chờ đèn đỏ", type: "B" },
      { text: "Tùy khoảng cách mà quyết định", type: "C" },
      { text: "Nhìn xung quanh rồi quyết định", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn đội mũ bảo hiểm như thế nào?",
    options: [
      { text: "Mũ nửa đầu cho tiện", type: "A" },
      { text: "Mũ fullface an toàn", type: "B" },
      { text: "Mũ thời trang đẹp mắt", type: "C" },
      { text: "Loại nào có thì đội", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi kẹt xe, bạn thường?",
    options: [
      { text: "Luồn lách tìm đường thoát", type: "A" },
      { text: "Kiên nhẫn chờ đợi", type: "B" },
      { text: "Tìm đường vòng khác", type: "C" },
      { text: "Mở nhạc và thư giãn", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn thường đậu xe ở đâu?",
    options: [
      { text: "Chỗ nào tiện thì đậu", type: "A" },
      { text: "Bãi xe có người trông", type: "B" },
      { text: "Chỗ có bóng mát", type: "C" },
      { text: "Gần cửa ra vào nhất", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Xe của bạn thường trong tình trạng?",
    options: [
      { text: "Độ đẹp, có phụ kiện", type: "A" },
      { text: "Sạch sẽ, bảo dưỡng thường xuyên", type: "B" },
      { text: "Bình thường, miễn chạy được", type: "C" },
      { text: "Cũ rồi, đang tính đổi xe", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Khi đi xe trời mưa, bạn?",
    options: [
      { text: "Không áo mưa, chạy nhanh về", type: "A" },
      { text: "Dừng lại mặc áo mưa đàng hoàng", type: "B" },
      { text: "Tìm chỗ trú mưa", type: "C" },
      { text: "Luôn có áo mưa sẵn trong cốp", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn thường chở thêm mấy người?",
    options: [
      { text: "Chở 2-3 người luôn", type: "A" },
      { text: "Chỉ chở 1 người theo luật", type: "B" },
      { text: "Không thích chở ai", type: "C" },
      { text: "Tùy trường hợp", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi có người chạy ẩu trước mặt, bạn?",
    options: [
      { text: "Bấm còi inh ỏi", type: "A" },
      { text: "Nhường đường cho an toàn", type: "B" },
      { text: "Lầm bầm trong miệng", type: "C" },
      { text: "Tránh xa và quên đi", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn dùng điện thoại khi đi xe như thế nào?",
    options: [
      { text: "Cầm tay xem bình thường", type: "A" },
      { text: "Không bao giờ, quá nguy hiểm", type: "B" },
      { text: "Gắn giá đỡ để xem bản đồ", type: "C" },
      { text: "Chỉ nghe điện thoại qua tai nghe", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Khi đổ xăng, bạn thường?",
    options: [
      { text: "Đổ đầy bình luôn", type: "A" },
      { text: "Đổ một số tiền cố định", type: "B" },
      { text: "Chờ gần hết mới đổ", type: "C" },
      { text: "Tùy hôm đó có bao nhiêu tiền", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bạn nghĩ gì về việc đi xe máy ở Việt Nam?",
    options: [
      { text: "Thú vị, kích thích", type: "A" },
      { text: "Cần cẩn thận, nhiều rủi ro", type: "B" },
      { text: "Bình thường, quen rồi", type: "C" },
      { text: "Thích hơn đi ô tô vì tiện", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Tay đua đường phố",
    emoji: "🏍️",
    description: "Bạn là người yêu thích tốc độ và cảm giác mạnh. Bạn tự tin, mạo hiểm và không ngại thử thách. Tuy nhiên, hãy nhớ an toàn là trên hết nhé!",
    traits: ["Mạo hiểm", "Tự tin", "Năng động", "Thích thử thách"],
    strengths: ["Phản xạ nhanh", "Không sợ khó khăn", "Luôn đúng giờ"],
    weaknesses: ["Đôi khi liều lĩnh", "Thiếu kiên nhẫn"],
    tips: ["Tuân thủ luật giao thông", "Đội mũ bảo hiểm đúng cách"],
  },
  B: {
    type: "B",
    title: "Người lái xe mẫu mực",
    emoji: "🛡️",
    description: "Bạn là người cẩn thận, có trách nhiệm và luôn tuân thủ luật lệ. Bạn đặt an toàn lên hàng đầu và là tấm gương tốt cho người khác.",
    traits: ["Cẩn thận", "Có trách nhiệm", "Kiên nhẫn", "Đáng tin cậy"],
    strengths: ["Luôn an toàn", "Tuân thủ luật", "Không gây tai nạn"],
    weaknesses: ["Đôi khi quá chậm", "Dễ bị người khác vượt mặt"],
    tips: ["Giữ vững phong cách", "Đừng để người khác ảnh hưởng"],
  },
  C: {
    type: "C",
    title: "Người thực tế",
    emoji: "🧭",
    description: "Bạn là người thực tế và biết cách thích nghi. Bạn không quá cầu kỳ nhưng vẫn đảm bảo mọi thứ ổn thỏa. Bạn tìm được sự cân bằng trong cuộc sống.",
    traits: ["Thực tế", "Linh hoạt", "Bình tĩnh", "Khôn ngoan"],
    strengths: ["Biết cách xoay xở", "Không stress", "Thích nghi tốt"],
    weaknesses: ["Đôi khi thiếu quyết đoán", "Hơi bị động"],
    tips: ["Chủ động hơn trong cuộc sống", "Đặt ra mục tiêu rõ ràng"],
  },
  D: {
    type: "D",
    title: "Người thoải mái",
    emoji: "🎶",
    description: "Bạn là người sống theo cảm xúc và tận hưởng cuộc sống. Với bạn, đi xe máy không chỉ là di chuyển mà còn là trải nghiệm thú vị.",
    traits: ["Thoải mái", "Lạc quan", "Dễ tính", "Tận hưởng"],
    strengths: ["Không stress", "Luôn vui vẻ", "Dễ thích nghi"],
    weaknesses: ["Đôi khi thiếu kế hoạch", "Hay quên chuẩn bị"],
    tips: ["Lên kế hoạch trước chuyến đi", "Kiểm tra xe thường xuyên"],
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
