// Phong cách sở đỏ
// Khám phá tính cách ghen tuông của bạn trong tình yêu

export const questions = [
  {
    id: 1,
    question: "Khi người yêu nhắn tin với người khác giới, bạn?",
    options: [
      { text: "Hoàn toàn tin tưởng, không suy nghĩ gì", type: "A" },
      { text: "Hơi tò mò nhưng không hỏi", type: "B" },
      { text: "Muốn biết họ nhắn gì", type: "C" },
      { text: "Khó chịu và muốn đọc tin nhắn", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Người yêu khen ai đó trên mạng xã hội, bạn?",
    options: [
      { text: "Bình thường, ai cũng khen đẹp", type: "A" },
      { text: "Hơi để ý nhưng không nói gì", type: "B" },
      { text: "Hỏi 'Sao khen người ta?'", type: "C" },
      { text: "Giận dỗi, cold war", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Người yêu đi ăn với đồng nghiệp khác giới, bạn?",
    options: [
      { text: "Vui vẻ, tin tưởng họ", type: "A" },
      { text: "Ok nhưng muốn biết đi với ai", type: "B" },
      { text: "Hỏi liên tục 'Ăn gì? Ở đâu? Với ai?'", type: "C" },
      { text: "Không đồng ý, muốn họ ở nhà", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn có hay check mạng xã hội của người yêu không?",
    options: [
      { text: "Không, tôn trọng sự riêng tư", type: "A" },
      { text: "Thỉnh thoảng, xem họ đang làm gì", type: "B" },
      { text: "Hay xem, check like và comment", type: "C" },
      { text: "Check hàng ngày, biết hết", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Người yêu có bạn thân khác giới, bạn nghĩ sao?",
    options: [
      { text: "Bình thường, ai cũng có bạn", type: "A" },
      { text: "Ok nếu họ giới thiệu mình với bạn đó", type: "B" },
      { text: "Không thoải mái, muốn tìm hiểu thêm", type: "C" },
      { text: "Khó chấp nhận, muốn họ giữ khoảng cách", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi người yêu về muộn, bạn?",
    options: [
      { text: "Hỏi thăm, lo lắng sức khỏe họ", type: "A" },
      { text: "Hỏi họ đi đâu, với ai", type: "B" },
      { text: "Call liên tục, muốn biết ngay", type: "C" },
      { text: "Nghi ngờ và chất vấn", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Người yêu cũ của người yêu liên lạc lại, bạn?",
    options: [
      { text: "Tin tưởng họ xử lý đúng đắn", type: "A" },
      { text: "Muốn biết họ nói chuyện gì", type: "B" },
      { text: "Không thoải mái, đề nghị họ block", type: "C" },
      { text: "Rất giận, cãi nhau", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn có yêu cầu người yêu share vị trí không?",
    options: [
      { text: "Không bao giờ, đó là xâm phạm", type: "A" },
      { text: "Chỉ khi họ đi xa", type: "B" },
      { text: "Có, để yên tâm", type: "C" },
      { text: "Share 24/7, phải biết họ ở đâu", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Khi ghen, bạn thường làm gì?",
    options: [
      { text: "Tôi ít khi ghen", type: "A" },
      { text: "Giấu trong lòng, không nói", type: "B" },
      { text: "Nói thẳng cho họ biết", type: "C" },
      { text: "Giận dỗi, cold war cho họ biết sai", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn có đọc tin nhắn của người yêu không?",
    options: [
      { text: "Không bao giờ, tôn trọng riêng tư", type: "A" },
      { text: "Không, nhưng đôi khi tò mò", type: "B" },
      { text: "Có, nếu nghi ngờ điều gì", type: "C" },
      { text: "Có, và họ cũng đọc của tôi", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Người yêu follow người mẫu, hot girl/boy, bạn?",
    options: [
      { text: "Bình thường, ai cũng xem", type: "A" },
      { text: "Hơi để ý nhưng không nói gì", type: "B" },
      { text: "Trêu họ về chuyện đó", type: "C" },
      { text: "Yêu cầu unfollow", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bạn nghĩ ghen tuông là?",
    options: [
      { text: "Thiếu tin tưởng, không tốt cho quan hệ", type: "A" },
      { text: "Bình thường, ai cũng có một chút", type: "B" },
      { text: "Biểu hiện của tình yêu", type: "C" },
      { text: "Cần thiết để giữ người yêu", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người tin tưởng tuyệt đối",
    emoji: "💚",
    description: "Bạn tin tưởng người yêu hoàn toàn và không có tính ghen tuông. Bạn tôn trọng sự riêng tư và không cần kiểm soát họ. Đây là nền tảng tốt cho mối quan hệ.",
    traits: ["Tin tưởng", "Tôn trọng", "Điềm đạm", "Trưởng thành"],
    strengths: ["Mối quan hệ lành mạnh", "Không stress", "Được tin tưởng lại"],
    weaknesses: ["Có thể quá naïve", "Đôi khi cần quan tâm hơn"],
    tips: ["Vẫn cần quan tâm đối phương", "Giao tiếp thường xuyên"],
  },
  B: {
    type: "B",
    title: "Người ghen nhẹ dễ thương",
    emoji: "💛",
    description: "Bạn có một chút ghen tuông nhưng biết kiểm soát. Đôi khi tò mò nhưng không đến mức kiểm soát. Đây là mức độ ghen lành mạnh trong tình yêu.",
    traits: ["Quan tâm", "Có chừng mực", "Cân bằng", "Đáng yêu"],
    strengths: ["Thể hiện quan tâm", "Không quá kiểm soát", "Mối quan hệ ổn định"],
    weaknesses: ["Đôi khi lo lắng thừa", "Cần tự tin hơn"],
    tips: ["Tin tưởng bản thân và người yêu", "Nói ra khi có lo lắng"],
  },
  C: {
    type: "C",
    title: "Người ghen có kiểm soát",
    emoji: "🧡",
    description: "Bạn hay ghen và muốn biết nhiều về hoạt động của người yêu. Bạn thể hiện tình yêu qua sự quan tâm nhưng đôi khi có thể gây áp lực cho đối phương.",
    traits: ["Quan tâm nhiều", "Hay lo lắng", "Muốn biết", "Tình cảm"],
    strengths: ["Thể hiện tình yêu rõ ràng", "Chú ý đến người yêu"],
    weaknesses: ["Có thể gây áp lực", "Thiếu tin tưởng"],
    tips: ["Học cách tin tưởng", "Cho người yêu không gian riêng"],
  },
  D: {
    type: "D",
    title: "Người ghen bóng ghen gió",
    emoji: "❤️‍🔥",
    description: "Bạn có tính ghen tuông rất cao và muốn kiểm soát người yêu. Tình yêu của bạn mãnh liệt nhưng có thể khiến đối phương cảm thấy ngột ngạt.",
    traits: ["Yêu mãnh liệt", "Kiểm soát", "Lo lắng", "Thiếu an toàn"],
    strengths: ["Tình yêu sâu đậm", "Chú ý từng chi tiết"],
    weaknesses: ["Có thể đẩy người yêu ra xa", "Stress cho cả hai"],
    tips: ["Làm việc với sự thiếu tự tin", "Tìm hiểu gốc rễ của nỗi sợ", "Cho không gian riêng"],
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
