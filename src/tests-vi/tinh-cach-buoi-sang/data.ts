// Phong cách buổi sáng
// Khám phá cách bạn bắt đầu một ngày mới

export const questions = [
  {
    id: 1,
    question: "Bạn thường dậy lúc mấy giờ?",
    options: [
      { text: "5-6 giờ sáng, trước mặt trời", type: "A" },
      { text: "6-7 giờ sáng, đủ thời gian chuẩn bị", type: "B" },
      { text: "7-8 giờ sáng, vừa đủ", type: "C" },
      { text: "Sau 8 giờ, dậy muộn nhất có thể", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Việc đầu tiên bạn làm khi dậy?",
    options: [
      { text: "Tập thể dục, thiền định", type: "A" },
      { text: "Uống nước, đi vệ sinh", type: "B" },
      { text: "Check điện thoại", type: "C" },
      { text: "Tắt chuông báo thức, ngủ thêm", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn dùng bao nhiêu báo thức?",
    options: [
      { text: "Không cần, tự dậy đúng giờ", type: "A" },
      { text: "1 báo thức là đủ", type: "B" },
      { text: "3-5 báo thức, snooze liên tục", type: "C" },
      { text: "Rất nhiều, vẫn khó dậy", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bữa sáng của bạn?",
    options: [
      { text: "Bữa sáng đầy đủ, ăn ngon", type: "A" },
      { text: "Ăn nhanh, đủ năng lượng", type: "B" },
      { text: "Uống cà phê/trà là đủ", type: "C" },
      { text: "Bỏ bữa sáng, không kịp ăn", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Cảm xúc của bạn vào buổi sáng?",
    options: [
      { text: "Hào hứng, tràn đầy năng lượng", type: "A" },
      { text: "Bình thường, sẵn sàng làm việc", type: "B" },
      { text: "Hơi mệt, cần cà phê", type: "C" },
      { text: "Cáu kỉnh, không muốn nói chuyện", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn mất bao lâu để ra khỏi nhà?",
    options: [
      { text: "30 phút - có thời gian thư thả", type: "A" },
      { text: "45 phút - đủ chuẩn bị", type: "B" },
      { text: "1 tiếng - cần nhiều thời gian", type: "C" },
      { text: "Nhanh nhất có thể, hay muộn", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn có tập thể dục buổi sáng không?",
    options: [
      { text: "Có, đây là thói quen hàng ngày", type: "A" },
      { text: "Đôi khi, nếu dậy sớm", type: "B" },
      { text: "Hiếm khi, không có năng lượng", type: "C" },
      { text: "Không bao giờ, sáng là khó khăn", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Skin care buổi sáng của bạn?",
    options: [
      { text: "Đầy đủ các bước, chăm sóc kỹ", type: "A" },
      { text: "Cơ bản: rửa mặt, kem dưỡng", type: "B" },
      { text: "Rửa mặt là xong", type: "C" },
      { text: "Nhiều khi quên luôn", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn hay muộn giờ vào buổi sáng không?",
    options: [
      { text: "Không bao giờ, luôn đúng giờ", type: "A" },
      { text: "Hiếm khi, rất ít", type: "B" },
      { text: "Đôi khi, khi ngủ muộn", type: "C" },
      { text: "Thường xuyên, khó kiểm soát", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Cuối tuần bạn dậy lúc mấy giờ?",
    options: [
      { text: "Vẫn dậy sớm như ngày thường", type: "A" },
      { text: "Muộn hơn 1-2 tiếng", type: "B" },
      { text: "Ngủ đến trưa", type: "C" },
      { text: "Dậy khi nào tự dậy", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Cà phê sáng với bạn là?",
    options: [
      { text: "Không cần, đã tỉnh sẵn", type: "A" },
      { text: "Thưởng thức, không phải nhu cầu", type: "B" },
      { text: "Cần thiết để hoạt động", type: "C" },
      { text: "Sống còn, không có là chết", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Năng suất của bạn vào buổi sáng?",
    options: [
      { text: "Cao nhất trong ngày", type: "A" },
      { text: "Khá tốt, làm được nhiều việc", type: "B" },
      { text: "Trung bình, cần thời gian warm up", type: "C" },
      { text: "Thấp, đầu óc chưa hoạt động", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Chiến binh buổi sáng",
    emoji: "🌄",
    description: "Bạn là early bird thực thụ! Dậy sớm tự nhiên, tràn đầy năng lượng và làm được nhiều việc trước khi người khác thức dậy. Buổi sáng là thời gian vàng của bạn.",
    traits: ["Năng động sáng", "Kỷ luật", "Năng suất", "Khỏe mạnh"],
    strengths: ["Bắt đầu ngày sớm", "Năng suất cao", "Có thời gian cho bản thân"],
    weaknesses: ["Mệt vào buổi tối", "Khó tham gia hoạt động đêm"],
    tips: ["Duy trì thói quen tốt", "Linh hoạt khi cần thiết"],
  },
  B: {
    type: "B",
    title: "Người sáng cân bằng",
    emoji: "☀️",
    description: "Bạn có routine buổi sáng hợp lý. Không quá sớm cũng không quá muộn, bạn biết cách chuẩn bị cho ngày mới một cách hiệu quả mà không căng thẳng.",
    traits: ["Cân bằng", "Có tổ chức", "Thực tế", "Ổn định"],
    strengths: ["Đúng giờ", "Có thời gian chuẩn bị", "Không stress"],
    weaknesses: ["Đôi khi thiếu động lực sáng sớm", "Có thể cải thiện"],
    tips: ["Thử dậy sớm hơn 15 phút", "Thêm hoạt động cho bản thân"],
  },
  C: {
    type: "C",
    title: "Người sáng khó khăn",
    emoji: "☕",
    description: "Buổi sáng không phải thời gian của bạn. Cần cà phê và thời gian để khởi động, bạn làm việc tốt hơn vào giữa ngày hoặc chiều tối.",
    traits: ["Cần caffeine", "Chậm khởi động", "Tối năng suất hơn", "Cần thích nghi"],
    strengths: ["Hiệu quả vào buổi chiều/tối", "Biết bản thân cần gì"],
    weaknesses: ["Khó dậy sớm", "Có thể muộn giờ", "Cần phụ thuộc caffeine"],
    tips: ["Ngủ sớm hơn", "Hạn chế màn hình trước khi ngủ", "Chuẩn bị từ tối hôm trước"],
  },
  D: {
    type: "D",
    title: "Cú đêm ghét sáng",
    emoji: "😴",
    description: "Buổi sáng là kẻ thù của bạn! Dậy muộn, cáu kỉnh, cần rất nhiều cà phê - bạn sống về đêm và buổi sáng chỉ là điều bắt buộc phải chịu đựng.",
    traits: ["Cú đêm", "Khó dậy", "Cần caffeine", "Năng lượng tối"],
    strengths: ["Năng suất ban đêm", "Sáng tạo khi yên tĩnh"],
    weaknesses: ["Khó thích nghi giờ hành chính", "Sức khỏe có thể ảnh hưởng"],
    tips: ["Điều chỉnh giờ ngủ dần dần", "Có routine đi ngủ", "Tránh ánh sáng xanh ban đêm"],
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
