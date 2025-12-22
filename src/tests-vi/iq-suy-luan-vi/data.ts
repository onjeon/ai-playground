// Trắc nghiệm Suy luận
// Kiểm tra khả năng suy luận logic và diễn dịch của bạn

export const questions = [
  {
    id: 1,
    question: "Tất cả các bác sĩ đều học đại học. An là bác sĩ. Vậy:",
    options: [
      { text: "An đã học đại học", type: "A" },
      { text: "An chưa học đại học", type: "D" },
      { text: "An có thể chưa học đại học", type: "C" },
      { text: "Không thể kết luận", type: "B" },
    ],
  },
  {
    id: 2,
    question: "Nếu trời mưa thì đường trơn. Đường trơn thì dễ xảy ra tai nạn. Trời đang mưa. Vậy:",
    options: [
      { text: "Dễ xảy ra tai nạn", type: "A" },
      { text: "Không xảy ra tai nạn", type: "D" },
      { text: "Đường không trơn", type: "C" },
      { text: "Trời sẽ tạnh", type: "B" },
    ],
  },
  {
    id: 3,
    question: "Một số học sinh thích đá bóng. Minh là học sinh. Vậy:",
    options: [
      { text: "Minh có thể thích hoặc không thích đá bóng", type: "A" },
      { text: "Minh chắc chắn thích đá bóng", type: "D" },
      { text: "Minh chắc chắn không thích đá bóng", type: "C" },
      { text: "Minh không phải học sinh", type: "B" },
    ],
  },
  {
    id: 4,
    question: "A cao hơn B, C thấp hơn B, D cao hơn A. Ai là người cao nhất?",
    options: [
      { text: "D", type: "A" },
      { text: "A", type: "B" },
      { text: "B", type: "C" },
      { text: "C", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Không có loài chim nào là động vật có vú. Tất cả dơi đều là động vật có vú. Vậy:",
    options: [
      { text: "Dơi không phải là chim", type: "A" },
      { text: "Dơi là chim", type: "D" },
      { text: "Một số dơi là chim", type: "C" },
      { text: "Không thể kết luận", type: "B" },
    ],
  },
  {
    id: 6,
    question: "Nếu P thì Q. Nếu Q thì R. P đúng. Vậy R:",
    options: [
      { text: "Đúng", type: "A" },
      { text: "Sai", type: "D" },
      { text: "Có thể đúng hoặc sai", type: "B" },
      { text: "Không thể xác định", type: "C" },
    ],
  },
  {
    id: 7,
    question: "Trong 5 người A, B, C, D, E: A đứng bên trái B, C đứng bên phải B, D đứng bên phải C, E đứng bên trái A. Thứ tự từ trái sang phải là:",
    options: [
      { text: "E - A - B - C - D", type: "A" },
      { text: "A - B - C - D - E", type: "D" },
      { text: "E - A - C - B - D", type: "C" },
      { text: "A - E - B - C - D", type: "B" },
    ],
  },
  {
    id: 8,
    question: "Tất cả người giàu đều hạnh phúc là một phát biểu SAI. Điều này có nghĩa:",
    options: [
      { text: "Có ít nhất một người giàu không hạnh phúc", type: "A" },
      { text: "Tất cả người giàu đều không hạnh phúc", type: "D" },
      { text: "Tất cả người nghèo đều hạnh phúc", type: "C" },
      { text: "Không ai hạnh phúc", type: "B" },
    ],
  },
  {
    id: 9,
    question: "Ngày mai là thứ Tư. Vậy 3 ngày trước hôm qua là thứ mấy?",
    options: [
      { text: "Thứ Bảy", type: "A" },
      { text: "Chủ Nhật", type: "B" },
      { text: "Thứ Sáu", type: "C" },
      { text: "Thứ Hai", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Một người luôn nói ngược lại sự thật. Khi người đó nói 'Hôm nay trời không mưa', thực tế là:",
    options: [
      { text: "Hôm nay trời mưa", type: "A" },
      { text: "Hôm nay trời không mưa", type: "D" },
      { text: "Hôm qua trời mưa", type: "C" },
      { text: "Không thể biết", type: "B" },
    ],
  },
  {
    id: 11,
    question: "X = Y + 5, Y = Z - 3, Z = 10. Vậy X = ?",
    options: [
      { text: "12", type: "A" },
      { text: "15", type: "B" },
      { text: "8", type: "C" },
      { text: "7", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Trong một cuộc thi, A đứng trước B, C đứng sau D, B đứng trước D. Thứ tự có thể là:",
    options: [
      { text: "A - B - D - C", type: "A" },
      { text: "B - A - D - C", type: "D" },
      { text: "C - D - B - A", type: "C" },
      { text: "D - B - A - C", type: "B" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Nhà Suy Luận Xuất Sắc",
    emoji: "🔍",
    description: "Bạn có khả năng suy luận logic tuyệt vời! Bạn dễ dàng rút ra kết luận chính xác từ các tiền đề và nhận ra các mối quan hệ phức tạp.",
    traits: ["Suy luận chặt chẽ", "Tư duy logic mạnh", "Phân tích sắc bén", "Nhận diện quy luật"],
    strengths: ["Giải quyết vấn đề phức tạp", "Lập luận thuyết phục", "Ra quyết định sáng suốt"],
    weaknesses: ["Đôi khi quá phân tích", "Có thể bỏ qua yếu tố cảm xúc"],
    tips: ["Kết hợp logic với EQ", "Thử sức với các bài toán logic nâng cao"],
  },
  B: {
    type: "B",
    title: "Người Suy Luận Tốt",
    emoji: "💡",
    description: "Bạn có khả năng suy luận khá tốt, có thể xử lý hầu hết các bài toán logic cơ bản và trung bình.",
    traits: ["Tư duy rõ ràng", "Cẩn thận", "Có phương pháp", "Kiên nhẫn"],
    strengths: ["Hiểu quan hệ nhân quả", "Đưa ra kết luận hợp lý", "Học hỏi nhanh"],
    weaknesses: ["Cần thêm luyện tập với bài phức tạp", "Đôi khi thiếu tự tin"],
    tips: ["Luyện tập thêm bài toán suy luận", "Đọc sách về logic học"],
  },
  C: {
    type: "C",
    title: "Người Đang Phát Triển",
    emoji: "📈",
    description: "Khả năng suy luận của bạn đang ở mức cơ bản. Với sự rèn luyện, bạn có thể cải thiện đáng kể.",
    traits: ["Có tiềm năng", "Cần hướng dẫn", "Đang học hỏi", "Kiên trì"],
    strengths: ["Không ngại thử thách", "Biết giới hạn bản thân", "Sẵn sàng học"],
    weaknesses: ["Dễ bị lạc trong bài toán phức tạp", "Cần thời gian để suy nghĩ"],
    tips: ["Bắt đầu từ bài đơn giản", "Vẽ sơ đồ để hỗ trợ suy luận"],
  },
  D: {
    type: "D",
    title: "Người Cần Rèn Luyện",
    emoji: "🌱",
    description: "Suy luận logic chưa phải điểm mạnh của bạn, nhưng với phương pháp đúng, bạn hoàn toàn có thể tiến bộ.",
    traits: ["Tư duy trực giác", "Cần nền tảng", "Tiềm năng ẩn giấu", "Sáng tạo"],
    strengths: ["Không bị gò bó bởi logic", "Tư duy tự do", "Sáng tạo"],
    weaknesses: ["Dễ sai khi suy luận", "Khó theo dõi nhiều điều kiện"],
    tips: ["Học cơ bản về logic", "Làm bài tập từ dễ đến khó", "Tìm người hướng dẫn"],
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
