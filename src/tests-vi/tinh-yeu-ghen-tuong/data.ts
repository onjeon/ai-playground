// Kiểu ghen tuông
// Khám phá cách bạn ghen tuông trong tình yêu

export const questions = [
  {
    id: 1,
    question: "Khi thấy người yêu nói chuyện vui vẻ với người khác giới, bạn?",
    options: [
      { text: "Không sao cả, tin tưởng họ", type: "A" },
      { text: "Quan sát một chút nhưng không lo", type: "B" },
      { text: "Khó chịu, muốn biết họ nói gì", type: "C" },
      { text: "Rất ghen, muốn chen vào ngay", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn có hay kiểm tra điện thoại của người yêu không?",
    options: [
      { text: "Không bao giờ, tôn trọng riêng tư", type: "A" },
      { text: "Hiếm khi, và họ biết", type: "B" },
      { text: "Thỉnh thoảng, khi nghi ngờ", type: "C" },
      { text: "Thường xuyên, cần kiểm soát", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi người yêu like ảnh người khác giới trên mạng xã hội, bạn?",
    options: [
      { text: "Bình thường, không quan tâm", type: "A" },
      { text: "Để ý một chút nhưng không sao", type: "B" },
      { text: "Không vui, hỏi họ tại sao", type: "C" },
      { text: "Rất tức, yêu cầu unlike", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Người yêu có bạn thân khác giới, bạn nghĩ sao?",
    options: [
      { text: "Hoàn toàn ổn, bạn bè là bình thường", type: "A" },
      { text: "Chấp nhận nhưng cần ranh giới", type: "B" },
      { text: "Không thoải mái lắm", type: "C" },
      { text: "Không chấp nhận được", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi người yêu không reply tin nhắn ngay, bạn?",
    options: [
      { text: "Họ bận, chờ đợi bình thường", type: "A" },
      { text: "Hơi tò mò nhưng không lo", type: "B" },
      { text: "Nhắn thêm nhiều tin, lo lắng", type: "C" },
      { text: "Tưởng tượng đủ thứ, rất lo", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Người yêu nói về người yêu cũ, bạn?",
    options: [
      { text: "Nghe bình thường, quá khứ là quá khứ", type: "A" },
      { text: "Lắng nghe nhưng hơi không thoải mái", type: "B" },
      { text: "Khó chịu, không muốn nghe", type: "C" },
      { text: "Rất ghen, so sánh với người cũ", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn muốn biết người yêu đi đâu, làm gì không?",
    options: [
      { text: "Không cần, tin tưởng họ", type: "A" },
      { text: "Biết tổng quát là được", type: "B" },
      { text: "Muốn biết chi tiết", type: "C" },
      { text: "Cần biết mọi lúc họ ở đâu", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Khi có người tán tỉnh người yêu, bạn?",
    options: [
      { text: "Tin tưởng họ sẽ xử lý", type: "A" },
      { text: "Quan sát cách họ phản ứng", type: "B" },
      { text: "Thể hiện quyền sở hữu", type: "C" },
      { text: "Rất tức giận, có thể gây gổ", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn có hay so sánh mình với người khác không?",
    options: [
      { text: "Không, tự tin vào bản thân", type: "A" },
      { text: "Đôi khi, nhưng không ám ảnh", type: "B" },
      { text: "Thường xuyên, hay tự ti", type: "C" },
      { text: "Luôn luôn, sợ mình không đủ tốt", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Nếu người yêu đi tiệc một mình, bạn?",
    options: [
      { text: "Không sao, vui vẻ cho họ đi", type: "A" },
      { text: "Ổn, nhờ họ nhắn tin khi về", type: "B" },
      { text: "Không vui, muốn đi cùng", type: "C" },
      { text: "Không cho phép họ đi", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn nghĩ gì về sự ghen tuông?",
    options: [
      { text: "Không cần thiết nếu có niềm tin", type: "A" },
      { text: "Một chút là bình thường", type: "B" },
      { text: "Chứng minh mình yêu họ", type: "C" },
      { text: "Yêu là phải ghen", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bạn đánh giá mức độ ghen tuông của mình?",
    options: [
      { text: "Không ghen, rất tin tưởng", type: "A" },
      { text: "Ít ghen, bình thường", type: "B" },
      { text: "Khá ghen, nhưng kiểm soát được", type: "C" },
      { text: "Rất ghen, khó kiểm soát", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người tin tưởng tuyệt đối",
    emoji: "🕊️",
    description: "Bạn hầu như không ghen tuông và có niềm tin rất cao vào người yêu. Bạn tin rằng niềm tin là nền tảng và không cần kiểm soát.",
    traits: ["Tin tưởng", "Thoải mái", "Tự tin", "Độc lập"],
    strengths: ["Mối quan hệ thoải mái", "Không stress", "Đối tác được tự do"],
    weaknesses: ["Có thể quá tin tưởng", "Đôi khi bỏ qua dấu hiệu xấu"],
    tips: ["Vẫn cần giao tiếp và quan sát", "Tin tưởng nhưng cũng cần ranh giới"],
  },
  B: {
    type: "B",
    title: "Người ghen lành mạnh",
    emoji: "💚",
    description: "Bạn có mức độ ghen tuông lành mạnh và cân bằng. Bạn tin tưởng nhưng vẫn quan tâm và có ranh giới rõ ràng. Đây là mức độ tốt!",
    traits: ["Cân bằng", "Quan tâm", "Có ranh giới", "Lành mạnh"],
    strengths: ["Mối quan hệ an toàn", "Giao tiếp tốt", "Tin tưởng hợp lý"],
    weaknesses: ["Đôi khi có thể lo lắng", "Cần kiểm soát khi cần"],
    tips: ["Tiếp tục duy trì sự cân bằng", "Giao tiếp khi có lo lắng"],
  },
  C: {
    type: "C",
    title: "Người ghen tuông",
    emoji: "💛",
    description: "Bạn có mức độ ghen tuông khá cao. Bạn hay lo lắng, so sánh và muốn kiểm soát. Điều này có thể gây áp lực cho mối quan hệ.",
    traits: ["Ghen tuông", "Lo lắng", "So sánh", "Kiểm soát"],
    strengths: ["Quan tâm đến mối quan hệ", "Nhạy cảm với thay đổi", "Muốn giữ gìn tình yêu"],
    weaknesses: ["Gây áp lực cho đối tác", "Có thể thiếu tin tưởng", "Stress nhiều"],
    tips: ["Xây dựng lòng tự tin", "Giao tiếp thay vì kiểm soát", "Tin tưởng đối tác hơn"],
  },
  D: {
    type: "D",
    title: "Người ghen tuông quá mức",
    emoji: "💔",
    description: "Mức độ ghen tuông của bạn rất cao và có thể ảnh hưởng tiêu cực đến mối quan hệ. Bạn cần học cách tin tưởng và buông bỏ.",
    traits: ["Ghen tuông mạnh", "Kiểm soát", "Lo lắng", "Thiếu tự tin"],
    strengths: ["Yêu say đắm", "Quan tâm mãnh liệt", "Có thể thay đổi"],
    weaknesses: ["Gây ngột ngạt", "Có thể đẩy xa đối tác", "Ảnh hưởng sức khỏe tinh thần"],
    tips: ["Tìm kiếm sự hỗ trợ chuyên gia", "Làm việc với lòng tự tin", "Ghen tuông không phải là yêu"],
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
