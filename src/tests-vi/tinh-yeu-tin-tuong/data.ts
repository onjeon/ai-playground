// Mức độ tin tưởng trong tình yêu
// Đánh giá mức độ tin tưởng của bạn trong mối quan hệ tình cảm

export const questions = [
  {
    id: 1,
    question: "Bạn có tin người yêu khi họ nói đi chơi với bạn bè không?",
    options: [
      { text: "Tin hoàn toàn, không cần hỏi thêm", type: "A" },
      { text: "Tin nhưng thỉnh thoảng hỏi thăm", type: "B" },
      { text: "Hơi nghi ngờ, muốn biết chi tiết", type: "C" },
      { text: "Không tin, cần kiểm tra", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn có chia sẻ mật khẩu điện thoại với người yêu không?",
    options: [
      { text: "Có, không có gì phải giấu", type: "A" },
      { text: "Có thể nếu họ hỏi", type: "B" },
      { text: "Không, đó là riêng tư", type: "C" },
      { text: "Không, và cũng muốn biết của họ", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi người yêu có bạn thân khác giới, bạn?",
    options: [
      { text: "Không vấn đề gì, tin họ", type: "A" },
      { text: "Ổn nếu họ giới thiệu với mình", type: "B" },
      { text: "Không thoải mái lắm", type: "C" },
      { text: "Rất không thích, muốn họ xa cách", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Nếu người yêu về muộn, bạn nghĩ gì?",
    options: [
      { text: "Họ bận việc, không sao", type: "A" },
      { text: "Hỏi thăm xem có ổn không", type: "B" },
      { text: "Lo lắng, tưởng tượng đủ thứ", type: "C" },
      { text: "Nghi ngờ họ có chuyện gì khuất", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn có hay kiểm tra tin nhắn/mạng xã hội của người yêu không?",
    options: [
      { text: "Không bao giờ, tôn trọng riêng tư", type: "A" },
      { text: "Hiếm khi, và họ biết", type: "B" },
      { text: "Thỉnh thoảng, khi có nghi ngờ", type: "C" },
      { text: "Thường xuyên, cần biết họ làm gì", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi người yêu khen ai đó đẹp, bạn?",
    options: [
      { text: "Bình thường, ai cũng có thể nhận xét", type: "A" },
      { text: "Không sao nhưng để ý một chút", type: "B" },
      { text: "Khó chịu, so sánh với bản thân", type: "C" },
      { text: "Rất tức, cảm thấy bị phản bội", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn có kể hết mọi thứ với người yêu không?",
    options: [
      { text: "Có, không giấu gì cả", type: "A" },
      { text: "Phần lớn, trừ vài việc nhỏ", type: "B" },
      { text: "Chỉ những gì cần thiết", type: "C" },
      { text: "Giữ nhiều thứ riêng cho mình", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Nếu người yêu từng phản bội, bạn có tin lại được không?",
    options: [
      { text: "Có thể, nếu họ thay đổi thật sự", type: "A" },
      { text: "Rất khó nhưng có thể thử", type: "B" },
      { text: "Không, một lần mất tin là mãi mãi", type: "C" },
      { text: "Sẽ không bao giờ tin lại ai", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn đánh giá niềm tin là yếu tố gì trong tình yêu?",
    options: [
      { text: "Quan trọng nhất, không có thì không có gì", type: "A" },
      { text: "Rất quan trọng, nền tảng mối quan hệ", type: "B" },
      { text: "Quan trọng nhưng cần cẩn thận", type: "C" },
      { text: "Niềm tin dễ bị lợi dụng", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn có hay lo lắng người yêu sẽ bỏ mình không?",
    options: [
      { text: "Không, tin vào mối quan hệ", type: "A" },
      { text: "Đôi khi, bình thường", type: "B" },
      { text: "Khá thường xuyên", type: "C" },
      { text: "Luôn luôn lo lắng", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Trải nghiệm quá khứ ảnh hưởng đến niềm tin của bạn thế nào?",
    options: [
      { text: "Không ảnh hưởng, mỗi người khác nhau", type: "A" },
      { text: "Ảnh hưởng một chút, nhưng vẫn tin", type: "B" },
      { text: "Ảnh hưởng nhiều, khó tin hơn", type: "C" },
      { text: "Ảnh hưởng rất lớn, gần như không tin ai", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bạn đánh giá mức độ tin tưởng của mình trong tình yêu?",
    options: [
      { text: "Rất cao, tin hoàn toàn", type: "A" },
      { text: "Khá cao, tin với điều kiện", type: "B" },
      { text: "Trung bình, cần thời gian", type: "C" },
      { text: "Thấp, khó tin được ai", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người tin tưởng tuyệt đối",
    emoji: "💕",
    description: "Bạn có khả năng tin tưởng rất cao trong tình yêu. Bạn tin vào người yêu, không nghi ngờ và tạo môi trường mối quan hệ thoải mái. Đây là nền tảng tuyệt vời!",
    traits: ["Tin tưởng", "Cởi mở", "Thoải mái", "Lạc quan"],
    strengths: ["Mối quan hệ không căng thẳng", "Đối tác được tự do", "Hạnh phúc"],
    weaknesses: ["Có thể quá ngây thơ", "Dễ bị tổn thương nếu phản bội"],
    tips: ["Vẫn cần quan sát và giao tiếp", "Tin tưởng nhưng cũng cần sáng suốt"],
  },
  B: {
    type: "B",
    title: "Người tin tưởng cân bằng",
    emoji: "⚖️",
    description: "Bạn có mức độ tin tưởng cân bằng và lành mạnh. Bạn tin nhưng vẫn có sự thận trọng hợp lý. Đây là mức độ tin tưởng tối ưu cho mối quan hệ!",
    traits: ["Cân bằng", "Thận trọng", "Lành mạnh", "Sáng suốt"],
    strengths: ["Tin tưởng hợp lý", "Không mù quáng", "Quan sát tốt"],
    weaknesses: ["Đôi khi có thể nghi ngờ", "Cần kiểm chứng"],
    tips: ["Giữ vững sự cân bằng", "Giao tiếp khi có lo lắng"],
  },
  C: {
    type: "C",
    title: "Người khó tin",
    emoji: "🔍",
    description: "Bạn gặp khó khăn trong việc tin tưởng người yêu. Có thể do trải nghiệm quá khứ hoặc sự thiếu an toàn. Điều này có thể ảnh hưởng đến mối quan hệ.",
    traits: ["Nghi ngờ", "Thận trọng", "Lo lắng", "Cần an toàn"],
    strengths: ["Không bị lừa dễ dàng", "Cẩn thận", "Tự bảo vệ"],
    weaknesses: ["Gây áp lực cho đối tác", "Mối quan hệ căng thẳng", "Khó hạnh phúc"],
    tips: ["Làm việc với vấn đề gốc rễ", "Giao tiếp về nỗi lo", "Cho bản thân và đối tác cơ hội"],
  },
  D: {
    type: "D",
    title: "Cần xây dựng niềm tin",
    emoji: "🔒",
    description: "Mức độ tin tưởng của bạn rất thấp và điều này có thể ảnh hưởng nghiêm trọng đến các mối quan hệ. Bạn cần được hỗ trợ để chữa lành và xây dựng lại niềm tin.",
    traits: ["Không tin tưởng", "Lo lắng", "Kiểm soát", "Cần hỗ trợ"],
    strengths: ["Nhận ra vấn đề", "Có khả năng thay đổi", "Bảo vệ bản thân"],
    weaknesses: ["Mối quan hệ không bền vững", "Không thể thân mật", "Cô đơn"],
    tips: ["Tìm kiếm chuyên gia tâm lý", "Chữa lành vết thương quá khứ", "Bạn xứng đáng được yêu và tin tưởng"],
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
