// Kiểu họ hàng trong gia đình Việt
// Khám phá phong cách quan hệ họ hàng của bạn

export const questions = [
  {
    id: 1,
    question: "Khi họ hàng hỏi lương bạn bao nhiêu?",
    options: [
      { text: "Trả lời thật, không có gì giấu", type: "A" },
      { text: "Nói chung chung, không cụ thể", type: "B" },
      { text: "Chuyển đề tài một cách khéo léo", type: "C" },
      { text: "Hỏi thẳng sao hỏi chuyện riêng tư", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Họ hàng hỏi 'Bao giờ lấy chồng/vợ?', bạn?",
    options: [
      { text: "Cười xòa, trả lời cho vui lòng họ", type: "A" },
      { text: "Nói đang tập trung sự nghiệp", type: "B" },
      { text: "Hơi khó chịu nhưng vẫn lịch sự", type: "C" },
      { text: "Thẳng thắn bảo không thích bị hỏi", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn nhớ được bao nhiêu tên họ hàng?",
    options: [
      { text: "Gần hết, kể cả vai vế", type: "A" },
      { text: "Những người thường gặp", type: "B" },
      { text: "Chỉ nhớ mặt, lẫn tên hoài", type: "C" },
      { text: "Rất ít, phải hỏi ba mẹ", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Dịp giỗ chạp, bạn thường?",
    options: [
      { text: "Về đầy đủ, phụ nấu ăn cúng kiếng", type: "A" },
      { text: "Cố gắng về nếu không bận", type: "B" },
      { text: "Chỉ về những giỗ quan trọng", type: "C" },
      { text: "Thường xuyên vắng mặt", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Họ hàng mượn tiền, bạn?",
    options: [
      { text: "Cho mượn nếu có, họ hàng mà", type: "A" },
      { text: "Cân nhắc số tiền và lý do", type: "B" },
      { text: "Hơi e ngại, sợ không lấy lại được", type: "C" },
      { text: "Từ chối thẳng, tiền bạc phân minh", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi họ hàng so sánh bạn với con họ?",
    options: [
      { text: "Không quan tâm, ai ai cũng như thế", type: "A" },
      { text: "Hơi buồn nhưng không nói gì", type: "B" },
      { text: "Khó chịu và tránh nói chuyện với họ", type: "C" },
      { text: "Phản bác lại luôn", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn thường liên lạc với họ hàng?",
    options: [
      { text: "Thường xuyên, hay điện thoại hỏi thăm", type: "A" },
      { text: "Dịp lễ Tết, sinh nhật", type: "B" },
      { text: "Khi có chuyện cần", type: "C" },
      { text: "Gần như không liên lạc", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Họ hàng xa từ quê lên chơi?",
    options: [
      { text: "Đón tiếp nồng nhiệt, mời ở lại nhà", type: "A" },
      { text: "Đưa đi chơi nhưng không ở nhà mình", type: "B" },
      { text: "Gặp mặt uống cà phê rồi thôi", type: "C" },
      { text: "Tìm lý do để từ chối gặp", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Group chat gia đình họ hàng?",
    options: [
      { text: "Hay tương tác, gửi ảnh, chúc mừng", type: "A" },
      { text: "Đọc nhưng ít comment", type: "B" },
      { text: "Tắt thông báo, thỉnh thoảng check", type: "C" },
      { text: "Đã rời group từ lâu", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Khi họ hàng nhờ giới thiệu việc làm?",
    options: [
      { text: "Sẵn sàng giúp, chia sẻ thông tin", type: "A" },
      { text: "Giúp nếu thấy phù hợp năng lực", type: "B" },
      { text: "Ngại, sợ ảnh hưởng uy tín của mình", type: "C" },
      { text: "Từ chối, không muốn trộn lẫn quan hệ", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn nghĩ gì về họ hàng 'tám chuyện'?",
    options: [
      { text: "Bình thường, đó là cách họ quan tâm", type: "A" },
      { text: "Hơi phiền nhưng chịu được", type: "B" },
      { text: "Khó chịu, muốn họ đừng soi mói", type: "C" },
      { text: "Ghét nhất điều này, lý do tránh họ hàng", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Điều bạn thích nhất về họ hàng?",
    options: [
      { text: "Sự đông vui, ấm cúng khi sum họp", type: "A" },
      { text: "Có người giúp đỡ khi khó khăn", type: "B" },
      { text: "Những câu chuyện về gia đình xưa", type: "C" },
      { text: "Thú thật không thích gì lắm", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người thân họ hàng mẫu mực",
    emoji: "👨‍👩‍👧‍👦",
    description: "Bạn là người coi trọng mối quan hệ họ hàng và luôn gìn giữ tình thân. Với bạn, họ hàng là tài sản quý giá của gia đình.",
    traits: ["Coi trọng gia đình", "Hòa đồng", "Bao dung", "Truyền thống"],
    strengths: ["Được họ hàng yêu quý", "Có mạng lưới hỗ trợ lớn", "Giữ gìn truyền thống"],
    weaknesses: ["Có thể mất thời gian cho quan hệ", "Khó nói không"],
    tips: ["Giữ ranh giới lành mạnh", "Không cần phải làm hài lòng tất cả"],
  },
  B: {
    type: "B",
    title: "Người thân họ hàng cân bằng",
    emoji: "🤗",
    description: "Bạn giữ mối quan hệ họ hàng ở mức vừa phải. Không quá thân cũng không quá xa, bạn biết cách duy trì sự hòa thuận.",
    traits: ["Cân bằng", "Khéo léo", "Linh hoạt", "Thực tế"],
    strengths: ["Không bị cuốn vào drama", "Vẫn được tôn trọng", "Có không gian riêng"],
    weaknesses: ["Có thể bị cho là hời hợt", "Đôi khi không đủ thân"],
    tips: ["Chủ động hơn với những người thân quan trọng", "Tham gia các dịp đặc biệt"],
  },
  C: {
    type: "C",
    title: "Người thân họ hàng kín đáo",
    emoji: "🙂",
    description: "Bạn giữ khoảng cách nhất định với họ hàng và không thích bị hỏi quá nhiều về cuộc sống riêng. Bạn lịch sự nhưng không quá gần gũi.",
    traits: ["Kín đáo", "Riêng tư", "Lịch sự", "Độc lập"],
    strengths: ["Có không gian cá nhân", "Ít drama gia đình", "Tự chủ"],
    weaknesses: ["Có thể thiếu hỗ trợ từ gia đình", "Bị cho là khó gần"],
    tips: ["Đừng quá xa cách", "Họ hàng cũng có điểm tốt của họ"],
  },
  D: {
    type: "D",
    title: "Người thân họ hàng tự do",
    emoji: "🦅",
    description: "Bạn thích sống độc lập và không để mối quan hệ họ hàng ảnh hưởng đến mình. Bạn có quan điểm riêng về cách duy trì quan hệ gia đình.",
    traits: ["Tự do", "Thẳng thắn", "Độc lập", "Cá tính"],
    strengths: ["Hoàn toàn tự chủ", "Không bị ràng buộc", "Sống thật với bản thân"],
    weaknesses: ["Xa rời gia đình", "Có thể bỏ lỡ sự hỗ trợ"],
    tips: ["Cân nhắc kết nối lại với một số người thân", "Gia đình không hoàn hảo nhưng vẫn quan trọng"],
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
