// Cách nuôi dạy con
// Khám phá phong cách làm cha mẹ của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn nghĩ điều gì quan trọng nhất khi nuôi dạy con?",
    options: [
      { text: "Kỷ luật và quy tắc rõ ràng", type: "A" },
      { text: "Tình yêu thương vô điều kiện", type: "B" },
      { text: "Để con tự do phát triển", type: "C" },
      { text: "Cân bằng giữa yêu thương và kỷ luật", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Khi con làm sai, bạn sẽ?",
    options: [
      { text: "Phạt ngay để con nhớ", type: "A" },
      { text: "Giải thích để con hiểu", type: "B" },
      { text: "Để con tự nhận ra lỗi", type: "C" },
      { text: "Tùy mức độ nghiêm trọng mà xử lý", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Về việc học của con, bạn nghĩ?",
    options: [
      { text: "Điểm số quan trọng, phải học giỏi", type: "A" },
      { text: "Quan trọng là con vui khi học", type: "B" },
      { text: "Để con tự chọn điều muốn học", type: "C" },
      { text: "Cân bằng giữa học và chơi", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn có cho con dùng điện thoại/máy tính không?",
    options: [
      { text: "Giới hạn chặt chẽ thời gian", type: "A" },
      { text: "Cho dùng nhưng theo dõi nội dung", type: "B" },
      { text: "Để con tự quản lý", type: "C" },
      { text: "Giới hạn hợp lý theo tuổi", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi con muốn gì đó, bạn sẽ?",
    options: [
      { text: "Chỉ đáp ứng nếu con xứng đáng", type: "A" },
      { text: "Cố gắng cho con những gì tốt nhất", type: "B" },
      { text: "Để con tự kiếm/tiết kiệm mua", type: "C" },
      { text: "Đáp ứng hợp lý, không chiều hư", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Về bạn bè của con, bạn nghĩ?",
    options: [
      { text: "Cần kiểm soát và biết rõ", type: "A" },
      { text: "Quan trọng là con vui với bạn", type: "B" },
      { text: "Để con tự chọn bạn", type: "C" },
      { text: "Quan tâm nhưng không can thiệp quá", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Khi con có vấn đề ở trường, bạn sẽ?",
    options: [
      { text: "Gặp giáo viên ngay lập tức", type: "A" },
      { text: "Lắng nghe con và an ủi", type: "B" },
      { text: "Để con tự giải quyết", type: "C" },
      { text: "Hỗ trợ con tìm cách giải quyết", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Về việc cho con tiền tiêu vặt?",
    options: [
      { text: "Cho theo quy định, phải tiết kiệm", type: "A" },
      { text: "Cho khi con cần", type: "B" },
      { text: "Để con tự làm kiếm tiền", type: "C" },
      { text: "Cho định kỳ và dạy con quản lý", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn mong đợi gì ở con trong tương lai?",
    options: [
      { text: "Thành công, có sự nghiệp tốt", type: "A" },
      { text: "Hạnh phúc, khỏe mạnh", type: "B" },
      { text: "Sống theo đam mê của con", type: "C" },
      { text: "Trở thành người tốt và có ích", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Khi con không vâng lời, bạn cảm thấy?",
    options: [
      { text: "Thất vọng và nghiêm khắc hơn", type: "A" },
      { text: "Lo lắng và cố gắng hiểu con", type: "B" },
      { text: "Bình thường, con cần tự lập", type: "C" },
      { text: "Tìm hiểu nguyên nhân", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Về hoạt động ngoại khóa của con?",
    options: [
      { text: "Phải có, để con phát triển toàn diện", type: "A" },
      { text: "Tùy con thích, miễn con vui", type: "B" },
      { text: "Để con tự chọn và quyết định", type: "C" },
      { text: "Khuyến khích nhưng không ép buộc", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Mối quan hệ lý tưởng với con là?",
    options: [
      { text: "Cha mẹ là người dạy dỗ", type: "A" },
      { text: "Cha mẹ là bạn thân của con", type: "B" },
      { text: "Cha mẹ tôn trọng sự độc lập của con", type: "C" },
      { text: "Cha mẹ là mentor và người đồng hành", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Phong cách nghiêm khắc",
    emoji: "📏",
    description: "Bạn có phong cách nuôi dạy nghiêm khắc, đề cao kỷ luật và quy tắc. Bạn tin rằng kỷ luật sẽ giúp con trưởng thành và thành công trong tương lai.",
    traits: ["Kỷ luật", "Quy tắc", "Kỳ vọng cao", "Nghiêm túc"],
    strengths: ["Con có kỷ luật tốt", "Biết tôn trọng quy tắc", "Có trách nhiệm"],
    weaknesses: ["Có thể tạo áp lực", "Con có thể không dám chia sẻ"],
    tips: ["Thêm sự mềm mỏng", "Lắng nghe con nhiều hơn"],
  },
  B: {
    type: "B",
    title: "Phong cách yêu thương",
    emoji: "💕",
    description: "Bạn có phong cách nuôi dạy đầy yêu thương, đặt tình cảm và hạnh phúc của con lên hàng đầu. Bạn muốn con cảm thấy được yêu thương vô điều kiện.",
    traits: ["Yêu thương", "Quan tâm", "Nhẹ nhàng", "Hỗ trợ"],
    strengths: ["Con cảm thấy được yêu", "Gần gũi với con", "Con dám chia sẻ"],
    weaknesses: ["Có thể chiều hư con", "Thiếu ranh giới rõ ràng"],
    tips: ["Thêm quy tắc khi cần", "Đừng quá chiều con"],
  },
  C: {
    type: "C",
    title: "Phong cách tự do",
    emoji: "🦅",
    description: "Bạn có phong cách nuôi dạy tự do, để con phát triển theo cách riêng của mình. Bạn tin rằng con cần không gian để trưởng thành và học hỏi từ sai lầm.",
    traits: ["Tự do", "Tôn trọng", "Độc lập", "Tin tưởng"],
    strengths: ["Con tự lập sớm", "Biết tự quyết định", "Có cá tính riêng"],
    weaknesses: ["Có thể thiếu hướng dẫn", "Con có thể cảm thấy bị bỏ rơi"],
    tips: ["Vẫn cần sự hướng dẫn", "Quan tâm nhiều hơn khi cần"],
  },
  D: {
    type: "D",
    title: "Phong cách cân bằng",
    emoji: "⚖️",
    description: "Bạn có phong cách nuôi dạy cân bằng, kết hợp giữa yêu thương và kỷ luật. Bạn là mentor đồng hành cùng con, vừa dạy dỗ vừa tôn trọng con.",
    traits: ["Cân bằng", "Linh hoạt", "Mentor", "Đồng hành"],
    strengths: ["Con phát triển toàn diện", "Mối quan hệ tốt với con", "Con được hướng dẫn"],
    weaknesses: ["Đôi khi khó quyết định", "Cần nhiều thời gian và công sức"],
    tips: ["Tiếp tục duy trì", "Điều chỉnh theo từng giai đoạn của con"],
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
