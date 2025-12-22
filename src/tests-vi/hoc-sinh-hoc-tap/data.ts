// Phong cách học tập
// Bài test khám phá phong cách học tập phù hợp nhất với bạn

export const questions = [
  {
    id: 1,
    question: "Bạn nhớ bài tốt nhất khi nào?",
    options: [
      { text: "Khi đọc và gạch chân trong sách", type: "A" },
      { text: "Khi nghe giảng và ghi chép", type: "B" },
      { text: "Khi làm bài tập và thực hành", type: "C" },
      { text: "Khi thảo luận với bạn bè", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bạn thích học ở đâu nhất?",
    options: [
      { text: "Phòng riêng yên tĩnh", type: "A" },
      { text: "Thư viện hoặc nơi có âm nhạc nhẹ", type: "B" },
      { text: "Bất cứ đâu, miễn có bài tập để làm", type: "C" },
      { text: "Quán cà phê hoặc học nhóm", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Khi ôn thi, bạn thường làm gì?",
    options: [
      { text: "Đọc lại tài liệu, highlight ý chính", type: "A" },
      { text: "Nghe lại bài giảng, podcast", type: "B" },
      { text: "Làm đề cũ và bài tập", type: "C" },
      { text: "Ôn nhóm, giảng lại cho nhau", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bạn thích giáo viên dạy như thế nào?",
    options: [
      { text: "Có slide, hình ảnh minh họa", type: "A" },
      { text: "Giảng giải rõ ràng, có ví dụ", type: "B" },
      { text: "Cho nhiều bài tập thực hành", type: "C" },
      { text: "Tạo không khí thảo luận", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Khi không hiểu bài, bạn làm gì?",
    options: [
      { text: "Đọc thêm tài liệu, sách tham khảo", type: "A" },
      { text: "Xem video bài giảng trên YouTube", type: "B" },
      { text: "Làm nhiều bài tập đến khi hiểu", type: "C" },
      { text: "Hỏi bạn bè hoặc thầy cô", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn ghi chép bài như thế nào?",
    options: [
      { text: "Vẽ sơ đồ, mindmap có màu sắc", type: "A" },
      { text: "Ghi đầy đủ theo lời thầy cô", type: "B" },
      { text: "Chỉ ghi công thức và ví dụ", type: "C" },
      { text: "Ghi những ý quan trọng nhất", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Môn học nào bạn thích nhất?",
    options: [
      { text: "Môn có nhiều hình ảnh, biểu đồ", type: "A" },
      { text: "Môn có nhiều thuyết trình, thảo luận", type: "B" },
      { text: "Môn có nhiều thực hành, thí nghiệm", type: "C" },
      { text: "Môn có nhiều dự án nhóm", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Thời điểm học tốt nhất của bạn?",
    options: [
      { text: "Sáng sớm, đầu óc tỉnh táo", type: "A" },
      { text: "Chiều, sau khi nghỉ ngơi", type: "B" },
      { text: "Tối, khi hoàn thành việc khác", type: "C" },
      { text: "Bất cứ khi nào có động lực", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bạn có dùng flashcard không?",
    options: [
      { text: "Có, flashcard có hình ảnh", type: "A" },
      { text: "Có, đọc to khi ôn", type: "B" },
      { text: "Ít, thích làm bài tập hơn", type: "C" },
      { text: "Có, quiz nhau với bạn", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Khi học môn mới, bạn bắt đầu như thế nào?",
    options: [
      { text: "Xem tổng quan, sơ đồ kiến thức", type: "A" },
      { text: "Nghe giới thiệu tổng quát", type: "B" },
      { text: "Làm bài tập đơn giản trước", type: "C" },
      { text: "Hỏi kinh nghiệm người đi trước", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bạn đánh giá bản thân học tốt khi nào?",
    options: [
      { text: "Khi có sách vở và tài liệu đầy đủ", type: "A" },
      { text: "Khi có thầy cô giảng hay", type: "B" },
      { text: "Khi có nhiều bài tập để luyện", type: "C" },
      { text: "Khi có bạn học cùng", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Công cụ học tập yêu thích của bạn?",
    options: [
      { text: "Sách, highlight, post-it nhiều màu", type: "A" },
      { text: "Podcast, audio book, video bài giảng", type: "B" },
      { text: "App làm bài tập, đề online", type: "C" },
      { text: "Nhóm chat, forum học tập", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người Học Qua Thị Giác",
    emoji: "👀",
    description: "Bạn học tốt nhất qua hình ảnh, sơ đồ, biểu đồ. Bạn cần 'nhìn thấy' kiến thức để hiểu và nhớ lâu. Màu sắc và hình ảnh giúp bạn tổ chức thông tin tốt hơn.",
    traits: ["Thị giác", "Tổ chức", "Chú ý chi tiết", "Yêu màu sắc"],
    strengths: ["Nhớ hình ảnh tốt", "Tổ chức thông tin", "Ghi chép đẹp"],
    weaknesses: ["Khó học qua nghe", "Cần nhiều tài liệu"],
    tips: ["Sử dụng mindmap khi học", "Highlight và vẽ sơ đồ nhiều hơn"],
  },
  B: {
    type: "B",
    title: "Người Học Qua Thính Giác",
    emoji: "👂",
    description: "Bạn học tốt nhất qua việc nghe và nói. Bạn nhớ tốt khi nghe giảng, thảo luận, hoặc đọc to lên. Âm thanh giúp bạn xử lý thông tin hiệu quả.",
    traits: ["Thính giác", "Giao tiếp tốt", "Nhớ lời nói", "Thích thảo luận"],
    strengths: ["Nghe giảng tốt", "Nhớ lời nói", "Phát biểu tốt"],
    weaknesses: ["Khó tập trung khi đọc", "Cần môi trường yên tĩnh hoặc có nhạc"],
    tips: ["Nghe podcast học tập", "Đọc to khi ôn bài"],
  },
  C: {
    type: "C",
    title: "Người Học Qua Thực Hành",
    emoji: "✋",
    description: "Bạn học tốt nhất qua việc làm, thực hành, trải nghiệm. Bạn cần 'động tay' để hiểu và nhớ kiến thức. Lý thuyết suông không giúp ích nhiều cho bạn.",
    traits: ["Thực hành", "Năng động", "Học qua làm", "Kiên trì"],
    strengths: ["Giỏi thực hành", "Nhớ lâu qua trải nghiệm", "Không ngại khó"],
    weaknesses: ["Khó ngồi yên nghe giảng", "Cần nhiều thời gian hơn"],
    tips: ["Làm nhiều bài tập", "Tìm cách áp dụng kiến thức vào thực tế"],
  },
  D: {
    type: "D",
    title: "Người Học Qua Tương Tác",
    emoji: "👥",
    description: "Bạn học tốt nhất khi có sự tương tác với người khác. Bạn thích học nhóm, thảo luận, và giảng lại cho người khác. Sự kết nối giúp bạn học hiệu quả hơn.",
    traits: ["Xã hội", "Thích tương tác", "Học nhóm", "Giao tiếp tốt"],
    strengths: ["Học nhóm hiệu quả", "Nhớ qua thảo luận", "Giúp người khác"],
    weaknesses: ["Khó tập trung khi học một mình", "Phụ thuộc vào nhóm"],
    tips: ["Tìm nhóm học tập phù hợp", "Thử dạy lại cho người khác"],
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
