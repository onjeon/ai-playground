// Mức độ lạc quan
// Đánh giá mức độ lạc quan và cách nhìn cuộc sống của bạn

export const questions = [
  {
    id: 1,
    question: "Khi thức dậy mỗi sáng, bạn thường nghĩ gì?",
    options: [
      { text: "Hôm nay sẽ là ngày tuyệt vời!", type: "A" },
      { text: "Hy vọng hôm nay ổn", type: "B" },
      { text: "Lại một ngày nữa...", type: "C" },
      { text: "Không muốn ra khỏi giường", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Khi gặp khó khăn, bạn nghĩ?",
    options: [
      { text: "Đây là cơ hội để học hỏi", type: "A" },
      { text: "Sẽ tìm được cách giải quyết", type: "B" },
      { text: "Sao mình xui thế", type: "C" },
      { text: "Mọi thứ luôn tồi tệ với mình", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn nhìn tương lai như thế nào?",
    options: [
      { text: "Tương lai tươi sáng, đầy cơ hội", type: "A" },
      { text: "Sẽ ổn nếu cố gắng", type: "B" },
      { text: "Không chắc chắn, lo lắng", type: "C" },
      { text: "Bi quan, không có hy vọng", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi ai đó khen bạn, bạn nghĩ?",
    options: [
      { text: "Mình xứng đáng, cảm ơn họ", type: "A" },
      { text: "Vui, cố gắng tiếp", type: "B" },
      { text: "Họ nói xã giao thôi", type: "C" },
      { text: "Họ có ý đồ gì không?", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn thường tập trung vào điều gì?",
    options: [
      { text: "Những điều tốt đẹp trong cuộc sống", type: "A" },
      { text: "Cả tốt lẫn xấu, cân bằng", type: "B" },
      { text: "Những vấn đề cần giải quyết", type: "C" },
      { text: "Những điều tiêu cực, lo lắng", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi thất bại, bạn nghĩ gì?",
    options: [
      { text: "Lần sau sẽ tốt hơn", type: "A" },
      { text: "Rút kinh nghiệm và tiếp tục", type: "B" },
      { text: "Mình không đủ giỏi", type: "C" },
      { text: "Mình luôn thất bại", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn có hay biết ơn những gì mình có không?",
    options: [
      { text: "Luôn luôn, mỗi ngày đều biết ơn", type: "A" },
      { text: "Thường xuyên", type: "B" },
      { text: "Đôi khi", type: "C" },
      { text: "Hiếm khi, luôn muốn nhiều hơn", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Khi nghe tin xấu trên TV, bạn?",
    options: [
      { text: "Vẫn tin vào điều tốt đẹp", type: "A" },
      { text: "Buồn nhưng vẫn hy vọng", type: "B" },
      { text: "Lo lắng về thế giới", type: "C" },
      { text: "Thế giới này tồi tệ quá", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn có hay cười không?",
    options: [
      { text: "Rất hay, cười mỗi ngày", type: "A" },
      { text: "Khá nhiều", type: "B" },
      { text: "Không nhiều lắm", type: "C" },
      { text: "Hiếm khi cười", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Khi có người hỏi 'Khỏe không?', bạn thường trả lời?",
    options: [
      { text: "Tuyệt vời! / Rất khỏe!", type: "A" },
      { text: "Khỏe, cảm ơn", type: "B" },
      { text: "Bình thường thôi", type: "C" },
      { text: "Mệt / Không khỏe lắm", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn tin vào may mắn không?",
    options: [
      { text: "Có, và mình là người may mắn", type: "A" },
      { text: "May mắn đến với người cố gắng", type: "B" },
      { text: "Không chắc", type: "C" },
      { text: "Không, mình luôn xui", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bạn đánh giá mức độ lạc quan của mình?",
    options: [
      { text: "Rất lạc quan, luôn tích cực", type: "A" },
      { text: "Khá lạc quan", type: "B" },
      { text: "Trung bình, có lúc bi quan", type: "C" },
      { text: "Bi quan, thường nhìn tiêu cực", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Mặt trời tỏa sáng",
    emoji: "☀️",
    description: "Bạn là người cực kỳ lạc quan! Bạn luôn nhìn thấy mặt tốt của mọi thứ, tin vào tương lai và truyền năng lượng tích cực cho người xung quanh.",
    traits: ["Lạc quan", "Tích cực", "Biết ơn", "Tràn đầy năng lượng"],
    strengths: ["Vượt qua khó khăn dễ dàng", "Thu hút người khác", "Sức khỏe tinh thần tốt"],
    weaknesses: ["Đôi khi không thực tế", "Có thể bỏ qua vấn đề thực sự"],
    tips: ["Cân bằng giữa lạc quan và thực tế", "Lắng nghe cảm xúc tiêu cực khi cần"],
  },
  B: {
    type: "B",
    title: "Người lạc quan thực tế",
    emoji: "🌤️",
    description: "Bạn có thái độ lạc quan lành mạnh và thực tế. Bạn hy vọng vào điều tốt đẹp nhưng cũng chuẩn bị cho khó khăn. Đây là sự cân bằng tuyệt vời!",
    traits: ["Lạc quan thực tế", "Cân bằng", "Hy vọng", "Thực tế"],
    strengths: ["Đối mặt vấn đề tốt", "Không ảo tưởng", "Kiên cường"],
    weaknesses: ["Đôi khi cần tích cực hơn", "Có thể lo lắng"],
    tips: ["Tiếp tục duy trì sự cân bằng", "Thực hành biết ơn mỗi ngày"],
  },
  C: {
    type: "C",
    title: "Người hoài nghi",
    emoji: "🌥️",
    description: "Bạn có xu hướng nhìn cuộc sống với sự hoài nghi và lo lắng. Bạn thường tập trung vào vấn đề hơn là giải pháp. Cần phát triển góc nhìn tích cực hơn.",
    traits: ["Hoài nghi", "Lo lắng", "Thận trọng", "Cần phát triển"],
    strengths: ["Chuẩn bị cho tình huống xấu", "Thực tế", "Không mù quáng"],
    weaknesses: ["Dễ stress", "Bỏ lỡ niềm vui", "Ảnh hưởng sức khỏe"],
    tips: ["Thực hành viết nhật ký biết ơn", "Tìm kiếm điều tốt đẹp mỗi ngày"],
  },
  D: {
    type: "D",
    title: "Cần được hỗ trợ",
    emoji: "🌧️",
    description: "Mức độ bi quan của bạn khá cao và có thể ảnh hưởng đến chất lượng cuộc sống. Bạn xứng đáng được hạnh phúc và cần tìm kiếm sự hỗ trợ.",
    traits: ["Bi quan", "Tiêu cực", "Cần hỗ trợ", "Có tiềm năng thay đổi"],
    strengths: ["Nhận ra vấn đề", "Sẵn sàng tìm hiểu", "Chân thật với cảm xúc"],
    weaknesses: ["Ảnh hưởng cuộc sống", "Khó nhìn thấy điều tốt", "Có thể cô đơn"],
    tips: ["Tìm kiếm chuyên gia tâm lý", "Bạn không một mình", "Mỗi ngày, tìm một điều nhỏ để vui"],
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
