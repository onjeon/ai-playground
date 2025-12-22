// Trắc nghiệm Ngôn ngữ
// Kiểm tra khả năng hiểu và sử dụng ngôn ngữ của bạn

export const questions = [
  {
    id: 1,
    question: "Từ nào KHÔNG cùng nhóm nghĩa với các từ còn lại: VUI, HẠNH PHÚC, PHẤN KHỞI, BUỒN?",
    options: [
      { text: "BUỒN", type: "A" },
      { text: "VUI", type: "D" },
      { text: "HẠNH PHÚC", type: "C" },
      { text: "PHẤN KHỞI", type: "B" },
    ],
  },
  {
    id: 2,
    question: "'Nước đổ đầu vịt' có nghĩa là gì?",
    options: [
      { text: "Nói mà không ai nghe, không có tác dụng", type: "A" },
      { text: "Tắm rửa sạch sẽ", type: "D" },
      { text: "Uống nước nhiều", type: "C" },
      { text: "Nuôi vịt bằng nước", type: "B" },
    ],
  },
  {
    id: 3,
    question: "Tìm từ trái nghĩa với 'KHIÊM TỐN':",
    options: [
      { text: "Kiêu ngạo", type: "A" },
      { text: "Nhún nhường", type: "D" },
      { text: "Giản dị", type: "C" },
      { text: "Hiền lành", type: "B" },
    ],
  },
  {
    id: 4,
    question: "Điền từ thích hợp: 'Anh ấy ____ sách mỗi tối trước khi ngủ.'",
    options: [
      { text: "đọc", type: "A" },
      { text: "nhìn", type: "B" },
      { text: "nghe", type: "C" },
      { text: "nếm", type: "D" },
    ],
  },
  {
    id: 5,
    question: "'Ếch ngồi đáy giếng' mô tả người như thế nào?",
    options: [
      { text: "Người có tầm nhìn hạn hẹp", type: "A" },
      { text: "Người thích bơi lội", type: "D" },
      { text: "Người sống ở nông thôn", type: "C" },
      { text: "Người nuôi ếch", type: "B" },
    ],
  },
  {
    id: 6,
    question: "Chọn cặp từ có quan hệ tương tự: CÂY : RỄ = ?",
    options: [
      { text: "NHÀ : NỀN MÓNG", type: "A" },
      { text: "TRỜI : MÂY", type: "B" },
      { text: "SÁCH : GIẤY", type: "C" },
      { text: "XE : ĐƯỜNG", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Từ nào viết SAI chính tả?",
    options: [
      { text: "Sắp sếp", type: "A" },
      { text: "Sắp xếp", type: "D" },
      { text: "Sáng sủa", type: "C" },
      { text: "Sáng tạo", type: "B" },
    ],
  },
  {
    id: 8,
    question: "'Đánh trống bỏ dùi' nghĩa là gì?",
    options: [
      { text: "Làm việc không đến nơi đến chốn", type: "A" },
      { text: "Đánh trống giỏi", type: "D" },
      { text: "Mất dùi trống", type: "B" },
      { text: "Thích âm nhạc", type: "C" },
    ],
  },
  {
    id: 9,
    question: "Tìm từ đồng nghĩa với 'CẦN MẪN':",
    options: [
      { text: "Chăm chỉ", type: "A" },
      { text: "Lười biếng", type: "D" },
      { text: "Cần thiết", type: "B" },
      { text: "Quan trọng", type: "C" },
    ],
  },
  {
    id: 10,
    question: "Câu nào sau đây đúng ngữ pháp?",
    options: [
      { text: "Tôi đã hoàn thành bài tập xong rồi.", type: "B" },
      { text: "Tôi đã hoàn thành bài tập.", type: "A" },
      { text: "Tôi hoàn thành đã bài tập.", type: "D" },
      { text: "Đã tôi hoàn thành bài tập.", type: "C" },
    ],
  },
  {
    id: 11,
    question: "'Một con ngựa đau cả tàu bỏ cỏ' thể hiện tinh thần gì?",
    options: [
      { text: "Đoàn kết, chia sẻ", type: "A" },
      { text: "Ích kỷ", type: "D" },
      { text: "Độc lập", type: "B" },
      { text: "Ganh đua", type: "C" },
    ],
  },
  {
    id: 12,
    question: "Điền từ: 'Cô ấy nói tiếng Anh ____ như người bản xứ.'",
    options: [
      { text: "lưu loát", type: "A" },
      { text: "lưu lạc", type: "D" },
      { text: "lưu trữ", type: "B" },
      { text: "lưu niệm", type: "C" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Bậc Thầy Ngôn Ngữ",
    emoji: "📖",
    description: "Bạn có khả năng ngôn ngữ xuất sắc! Bạn hiểu sâu về từ vựng, ngữ pháp và các thành ngữ, tục ngữ tiếng Việt.",
    traits: ["Vốn từ phong phú", "Hiểu thành ngữ sâu", "Diễn đạt tốt", "Ngữ pháp vững"],
    strengths: ["Viết lách xuất sắc", "Giao tiếp hiệu quả", "Hiểu văn hóa qua ngôn ngữ"],
    weaknesses: ["Đôi khi dùng từ quá phức tạp", "Có thể khó đơn giản hóa"],
    tips: ["Thử viết sáng tạo hoặc làm thơ", "Học thêm ngôn ngữ mới"],
  },
  B: {
    type: "B",
    title: "Người Sử Dụng Ngôn Ngữ Giỏi",
    emoji: "✍️",
    description: "Bạn có khả năng ngôn ngữ tốt, giao tiếp và diễn đạt rõ ràng. Vốn từ của bạn đủ dùng cho hầu hết tình huống.",
    traits: ["Giao tiếp rõ ràng", "Hiểu ngữ cảnh", "Linh hoạt", "Học hỏi nhanh"],
    strengths: ["Nói chuyện thuyết phục", "Viết email chuyên nghiệp", "Đọc hiểu tốt"],
    weaknesses: ["Đôi khi thiếu từ vựng chuyên ngành", "Có thể nhầm thành ngữ"],
    tips: ["Đọc sách nhiều hơn để mở rộng vốn từ", "Tìm hiểu thêm về nguồn gốc thành ngữ"],
  },
  C: {
    type: "C",
    title: "Người Đang Hoàn Thiện",
    emoji: "📝",
    description: "Khả năng ngôn ngữ của bạn ở mức trung bình, đủ để giao tiếp hàng ngày nhưng cần cải thiện thêm.",
    traits: ["Cơ bản vững", "Cần mở rộng", "Có tiềm năng", "Đang học hỏi"],
    strengths: ["Giao tiếp cơ bản", "Hiểu ý chính", "Không sợ mắc lỗi"],
    weaknesses: ["Vốn từ hạn chế", "Đôi khi diễn đạt lủng củng"],
    tips: ["Đọc báo và sách mỗi ngày", "Tập viết nhật ký", "Học từ mới hàng ngày"],
  },
  D: {
    type: "D",
    title: "Người Cần Bổ Sung Kiến Thức",
    emoji: "🌱",
    description: "Ngôn ngữ chưa phải thế mạnh của bạn, nhưng với sự rèn luyện, bạn hoàn toàn có thể cải thiện.",
    traits: ["Cần nền tảng", "Tiềm năng ẩn", "Đang phát triển", "Cần hướng dẫn"],
    strengths: ["Không bị áp lực bởi từ ngữ phức tạp", "Tiếp cận đơn giản"],
    weaknesses: ["Thiếu vốn từ", "Hay mắc lỗi chính tả", "Khó hiểu thành ngữ"],
    tips: ["Bắt đầu với sách dễ đọc", "Dùng app học từ vựng", "Xem phim có phụ đề tiếng Việt"],
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
