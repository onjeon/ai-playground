// Mức độ lo lắng
// Đánh giá mức độ lo lắng và cách bạn đối phó với nó

export const questions = [
  {
    id: 1,
    question: "Bạn có hay lo lắng về tương lai không?",
    options: [
      { text: "Hiếm khi, sống cho hiện tại", type: "A" },
      { text: "Thỉnh thoảng, bình thường", type: "B" },
      { text: "Khá nhiều, hay nghĩ về tương lai", type: "C" },
      { text: "Luôn luôn, lo lắng triền miên", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Khi có việc quan trọng sắp tới, bạn?",
    options: [
      { text: "Bình tĩnh, tự tin chuẩn bị", type: "A" },
      { text: "Hơi lo nhưng kiểm soát được", type: "B" },
      { text: "Lo lắng nhiều, khó ngủ", type: "C" },
      { text: "Hoảng sợ, muốn trốn tránh", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn có hay suy nghĩ quá nhiều không?",
    options: [
      { text: "Không, quyết định nhanh", type: "A" },
      { text: "Đôi khi, với việc quan trọng", type: "B" },
      { text: "Thường xuyên, khó dứt ra", type: "C" },
      { text: "Luôn luôn, suy nghĩ không ngừng", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi chờ đợi kết quả quan trọng, bạn?",
    options: [
      { text: "Làm việc khác để không nghĩ đến", type: "A" },
      { text: "Hồi hộp một chút", type: "B" },
      { text: "Liên tục kiểm tra, lo lắng", type: "C" },
      { text: "Không thể tập trung làm gì khác", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn có hay lo về những điều chưa xảy ra không?",
    options: [
      { text: "Không, chuyện gì đến sẽ đến", type: "A" },
      { text: "Đôi khi, nhưng không ám ảnh", type: "B" },
      { text: "Hay tưởng tượng điều xấu", type: "C" },
      { text: "Luôn nghĩ đến kịch bản tồi tệ nhất", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Khi người khác không trả lời tin nhắn, bạn?",
    options: [
      { text: "Không sao, họ bận thôi", type: "A" },
      { text: "Chờ đợi bình thường", type: "B" },
      { text: "Tự hỏi mình có làm sai gì không", type: "C" },
      { text: "Lo lắng, nhắn thêm nhiều tin", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bạn có triệu chứng lo lắng về thể chất không?",
    options: [
      { text: "Không có", type: "A" },
      { text: "Hiếm khi", type: "B" },
      { text: "Thỉnh thoảng (tim đập nhanh, đổ mồ hôi)", type: "C" },
      { text: "Thường xuyên", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Khi có nhiều việc cùng lúc, bạn?",
    options: [
      { text: "Sắp xếp và làm từng việc", type: "A" },
      { text: "Hơi áp lực nhưng xử lý được", type: "B" },
      { text: "Bối rối, không biết bắt đầu từ đâu", type: "C" },
      { text: "Tê liệt, không thể làm gì", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn lo lắng nhất về điều gì?",
    options: [
      { text: "Không lo lắng nhiều về gì cả", type: "A" },
      { text: "Công việc hoặc học tập", type: "B" },
      { text: "Các mối quan hệ", type: "C" },
      { text: "Mọi thứ trong cuộc sống", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn có thể thư giãn hoàn toàn không?",
    options: [
      { text: "Dễ dàng, thường xuyên thư giãn", type: "A" },
      { text: "Được, khi có thời gian", type: "B" },
      { text: "Khó, đầu óc luôn bận rộn", type: "C" },
      { text: "Gần như không thể", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Giấc ngủ của bạn bị ảnh hưởng bởi lo lắng không?",
    options: [
      { text: "Không, ngủ ngon lành", type: "A" },
      { text: "Đôi khi khó ngủ", type: "B" },
      { text: "Thường xuyên mất ngủ vì suy nghĩ", type: "C" },
      { text: "Gần như mỗi đêm đều khó ngủ", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bạn cảm thấy thế nào về khả năng kiểm soát lo lắng của mình?",
    options: [
      { text: "Kiểm soát tốt", type: "A" },
      { text: "Khá ổn, cần cải thiện một chút", type: "B" },
      { text: "Khó kiểm soát", type: "C" },
      { text: "Hoàn toàn không kiểm soát được", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Tâm hồn bình yên",
    emoji: "🧘",
    description: "Bạn có mức độ lo lắng rất thấp và biết cách giữ bình tĩnh trong mọi tình huống. Bạn sống trong hiện tại và không để lo lắng chi phối cuộc sống.",
    traits: ["Bình tĩnh", "Tự tin", "Lạc quan", "Kiểm soát tốt"],
    strengths: ["Không bị stress ảnh hưởng nhiều", "Ngủ ngon", "Sống vui vẻ"],
    weaknesses: ["Đôi khi có thể thiếu cảnh giác", "Không hiểu người hay lo"],
    tips: ["Giữ vững phong cách sống", "Chia sẻ bí quyết với người khác"],
  },
  B: {
    type: "B",
    title: "Người cân bằng",
    emoji: "⚖️",
    description: "Bạn có mức độ lo lắng bình thường, lành mạnh. Bạn lo lắng khi cần thiết nhưng không để nó kiểm soát cuộc sống. Đây là trạng thái tốt!",
    traits: ["Cân bằng", "Thực tế", "Có nhận thức", "Linh hoạt"],
    strengths: ["Biết lo lắng đúng lúc", "Kiểm soát được", "Thích nghi tốt"],
    weaknesses: ["Có thể lo hơn trong giai đoạn khó khăn", "Cần theo dõi"],
    tips: ["Tiếp tục duy trì thói quen tốt", "Học thêm kỹ năng thư giãn"],
  },
  C: {
    type: "C",
    title: "Người hay lo",
    emoji: "😰",
    description: "Bạn có mức độ lo lắng khá cao. Bạn hay suy nghĩ nhiều và khó dừng lại. Điều này có thể ảnh hưởng đến chất lượng cuộc sống và cần được quan tâm.",
    traits: ["Hay lo", "Nhạy cảm", "Suy nghĩ nhiều", "Cần hỗ trợ"],
    strengths: ["Cẩn thận", "Chu đáo", "Nhận biết rủi ro"],
    weaknesses: ["Khó thư giãn", "Mất ngủ", "Ảnh hưởng sức khỏe"],
    tips: ["Học các kỹ thuật thở và thiền", "Cân nhắc tìm kiếm hỗ trợ"],
  },
  D: {
    type: "D",
    title: "Cần sự hỗ trợ",
    emoji: "🆘",
    description: "Mức độ lo lắng của bạn rất cao và có thể đang ảnh hưởng nghiêm trọng đến cuộc sống. Đây là lúc bạn nên tìm kiếm sự giúp đỡ từ chuyên gia.",
    traits: ["Lo lắng cao", "Cần hỗ trợ", "Nhạy cảm", "Mệt mỏi"],
    strengths: ["Nhận ra vấn đề", "Sẵn sàng tìm hiểu", "Có ý thức về bản thân"],
    weaknesses: ["Khó kiểm soát", "Ảnh hưởng cuộc sống", "Cần can thiệp"],
    tips: ["Tìm kiếm chuyên gia tâm lý", "Nói chuyện với người thân", "Không xấu hổ khi cần giúp đỡ"],
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
