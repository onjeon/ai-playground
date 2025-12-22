// Kiểu hàng xóm của bạn
// Khám phá phong cách sống với hàng xóm láng giềng

export const questions = [
  {
    id: 1,
    question: "Khi gặp hàng xóm ngoài ngõ, bạn?",
    options: [
      { text: "Chào hỏi nhiệt tình, hỏi thăm sức khỏe", type: "A" },
      { text: "Gật đầu chào lịch sự rồi đi tiếp", type: "B" },
      { text: "Mỉm cười rồi lướt qua nhanh", type: "C" },
      { text: "Đeo tai nghe, giả vờ không thấy", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Hàng xóm nhờ giữ hộ đồ, bạn?",
    options: [
      { text: "Nhận ngay, giúp đỡ là vui", type: "A" },
      { text: "Nhận nếu không quá phiền phức", type: "B" },
      { text: "Miễn cưỡng nhận vì khó từ chối", type: "C" },
      { text: "Từ chối khéo, không muốn liên quan", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn biết tên bao nhiêu hàng xóm?",
    options: [
      { text: "Gần như tất cả, kể cả họ hàng họ", type: "A" },
      { text: "Vài người gần nhà", type: "B" },
      { text: "Chỉ biết mặt, không nhớ tên", type: "C" },
      { text: "Không biết ai cả", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi hàng xóm tổ chức tiệc ồn ào?",
    options: [
      { text: "Thông cảm, ai chẳng có lúc vui", type: "A" },
      { text: "Chờ xem nếu quá khuya mới nhắc", type: "B" },
      { text: "Khó chịu nhưng ngại nói", type: "C" },
      { text: "Gọi bảo vệ hoặc than phiền ngay", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Nhà có đám cưới/đám ma, bạn?",
    options: [
      { text: "Sang phụ giúp, chia sẻ với họ", type: "A" },
      { text: "Mừng/phúng điếu đàng hoàng", type: "B" },
      { text: "Gửi tiền qua, không sang trực tiếp", type: "C" },
      { text: "Không biết nên không làm gì", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn thường trò chuyện với hàng xóm?",
    options: [
      { text: "Hay tám chuyện, thân như người nhà", type: "A" },
      { text: "Thỉnh thoảng nói chuyện khi gặp", type: "B" },
      { text: "Chỉ nói khi cần thiết", type: "C" },
      { text: "Gần như không bao giờ", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Khi nhà hàng xóm có chuyện lạ?",
    options: [
      { text: "Quan tâm, hỏi thăm xem cần giúp gì", type: "A" },
      { text: "Để ý nhưng không hỏi", type: "B" },
      { text: "Không quan tâm chuyện người khác", type: "C" },
      { text: "Kệ họ, việc mình mình lo", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn thường cho/tặng hàng xóm?",
    options: [
      { text: "Hay lắm, có gì ngon cũng chia sẻ", type: "A" },
      { text: "Thỉnh thoảng, dịp đặc biệt", type: "B" },
      { text: "Hiếm khi", type: "C" },
      { text: "Chưa bao giờ", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi cần mượn đồ (muối, đường...)?",
    options: [
      { text: "Thoải mái sang hàng xóm mượn", type: "A" },
      { text: "Hơi ngại nhưng vẫn mượn được", type: "B" },
      { text: "Thà ra tiệm mua còn hơn mượn", type: "C" },
      { text: "Không bao giờ mượn ai", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn nghĩ gì về tình làng nghĩa xóm?",
    options: [
      { text: "Rất quan trọng, bán anh em xa mua láng giềng gần", type: "A" },
      { text: "Tốt nhưng cần giữ khoảng cách", type: "B" },
      { text: "Không quan trọng lắm ở thời đại này", type: "C" },
      { text: "Thích sống độc lập, không phụ thuộc", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Nhà bạn có nuôi chó/mèo, hàng xóm phàn nàn?",
    options: [
      { text: "Xin lỗi và tìm cách khắc phục ngay", type: "A" },
      { text: "Giải thích và cố gắng hạn chế", type: "B" },
      { text: "Hơi khó chịu nhưng vẫn nghe", type: "C" },
      { text: "Mặc kệ, đó là quyền của mình", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Điều bạn thích nhất ở khu phố?",
    options: [
      { text: "Con người thân thiện, biết nhau", type: "A" },
      { text: "An ninh tốt, yên tĩnh", type: "B" },
      { text: "Tiện nghi, gần trung tâm", type: "C" },
      { text: "Riêng tư, không ai soi mói", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người hàng xóm quốc dân",
    emoji: "🏠",
    description: "Bạn là hàng xóm trong mơ! Thân thiện, hay giúp đỡ và luôn quan tâm đến mọi người xung quanh. Khu phố có bạn là có thêm niềm vui.",
    traits: ["Thân thiện", "Hay giúp đỡ", "Quan tâm", "Hòa đồng"],
    strengths: ["Được mọi người yêu quý", "Có nhiều mối quan hệ tốt", "Luôn có người hỗ trợ khi cần"],
    weaknesses: ["Có thể mất thời gian cho người khác", "Đôi khi thiếu riêng tư"],
    tips: ["Giữ cho mình một chút không gian riêng", "Đừng quên lo cho bản thân"],
  },
  B: {
    type: "B",
    title: "Người hàng xóm lịch sự",
    emoji: "🤝",
    description: "Bạn là người hàng xóm lịch sự, giữ mối quan hệ tốt nhưng vẫn có khoảng cách nhất định. Bạn biết cách sống hòa thuận mà không quá gần gũi.",
    traits: ["Lịch sự", "Tôn trọng", "Giữ khoảng cách", "Hòa nhã"],
    strengths: ["Được tôn trọng", "Không bị cuốn vào drama", "Sống yên ổn"],
    weaknesses: ["Có thể thiếu sự hỗ trợ khi cần", "Mối quan hệ hời hợt"],
    tips: ["Thử mở lòng hơn với hàng xóm", "Tham gia hoạt động cộng đồng"],
  },
  C: {
    type: "C",
    title: "Người hàng xóm lặng lẽ",
    emoji: "🏢",
    description: "Bạn sống khép kín và không muốn liên quan nhiều đến hàng xóm. Bạn thích sự riêng tư và yên tĩnh.",
    traits: ["Khép kín", "Riêng tư", "Độc lập", "Yên tĩnh"],
    strengths: ["Có không gian riêng", "Không bị làm phiền", "Tập trung vào cuộc sống của mình"],
    weaknesses: ["Có thể cô đơn", "Thiếu hỗ trợ từ cộng đồng"],
    tips: ["Thử chào hỏi hàng xóm nhiều hơn", "Kết nối có thể mang lại niềm vui bất ngờ"],
  },
  D: {
    type: "D",
    title: "Người hàng xóm vô hình",
    emoji: "👻",
    description: "Bạn gần như không có mối quan hệ với hàng xóm. Có thể bạn bận rộn hoặc đơn giản thích sống độc lập không phụ thuộc ai.",
    traits: ["Độc lập", "Xa cách", "Bận rộn", "Tự do"],
    strengths: ["Hoàn toàn riêng tư", "Không drama", "Tự do tuyệt đối"],
    weaknesses: ["Không có ai giúp đỡ khi cần", "Có thể bị coi là khó gần"],
    tips: ["Ít nhất nên biết mặt người sống cạnh mình", "Chào hỏi đơn giản không mất gì cả"],
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
