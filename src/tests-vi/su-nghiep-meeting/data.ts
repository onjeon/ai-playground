// Phong cách họp
// Khám phá phong cách tham gia và điều hành cuộc họp của bạn

export const questions = [
  {
    id: 1,
    question: "Bạn chuẩn bị cho cuộc họp như thế nào?",
    options: [
      { text: "Đọc agenda, chuẩn bị ý kiến và câu hỏi", type: "A" },
      { text: "Lướt qua nội dung, nắm ý chính", type: "B" },
      { text: "Không chuẩn bị nhiều, nghe và phản hồi tại chỗ", type: "C" },
      { text: "Chuẩn bị slide hoặc tài liệu nếu cần trình bày", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Trong cuộc họp, bạn thường làm gì?",
    options: [
      { text: "Lắng nghe kỹ và ghi chép", type: "A" },
      { text: "Tích cực đóng góp ý kiến", type: "B" },
      { text: "Quan sát và chỉ nói khi cần", type: "C" },
      { text: "Đặt câu hỏi và thảo luận sâu", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bạn nghĩ gì về những cuộc họp dài?",
    options: [
      { text: "Cần thiết nếu có nhiều nội dung quan trọng", type: "A" },
      { text: "Nên chia nhỏ hoặc rút ngắn", type: "B" },
      { text: "Mệt mỏi, khó tập trung", type: "C" },
      { text: "Ổn nếu cuộc họp có tương tác hay", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Khi điều hành cuộc họp, bạn thường làm gì?",
    options: [
      { text: "Theo agenda chặt chẽ, đảm bảo đúng thời gian", type: "A" },
      { text: "Linh hoạt điều chỉnh theo tình hình", type: "B" },
      { text: "Khuyến khích mọi người tham gia phát biểu", type: "C" },
      { text: "Tập trung vào quyết định và action items", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bạn xử lý như thế nào khi có người nói quá nhiều trong họp?",
    options: [
      { text: "Khéo léo ngắt lời và chuyển sang người khác", type: "A" },
      { text: "Để họ nói xong rồi tổng kết", type: "B" },
      { text: "Không làm gì, để cuộc họp diễn ra tự nhiên", type: "C" },
      { text: "Đặt câu hỏi để hướng cuộc nói chuyện", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bạn thích loại meeting nào nhất?",
    options: [
      { text: "Meeting update ngắn gọn, có cấu trúc", type: "A" },
      { text: "Brainstorming, thảo luận ý tưởng", type: "B" },
      { text: "1-on-1 để trao đổi sâu", type: "C" },
      { text: "Meeting ra quyết định quan trọng", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Khi không đồng ý với ý kiến trong họp, bạn sẽ?",
    options: [
      { text: "Nêu ý kiến trực tiếp và lý do", type: "A" },
      { text: "Đặt câu hỏi để người đó suy nghĩ lại", type: "B" },
      { text: "Giữ im lặng, nói riêng sau", type: "C" },
      { text: "Đề xuất giải pháp thay thế", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bạn ghi chú trong họp như thế nào?",
    options: [
      { text: "Ghi chép chi tiết trong laptop/sổ", type: "A" },
      { text: "Ghi những điểm chính và action items", type: "B" },
      { text: "Không ghi, tập trung nghe và nhớ", type: "C" },
      { text: "Chụp ảnh slide hoặc xin tài liệu sau", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Sau cuộc họp, bạn thường làm gì?",
    options: [
      { text: "Gửi meeting notes và action items cho mọi người", type: "A" },
      { text: "Bắt tay làm ngay những việc được giao", type: "B" },
      { text: "Trao đổi thêm với người liên quan", type: "C" },
      { text: "Chờ email tổng kết từ người tổ chức", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bạn nghĩ gì về meeting không có agenda rõ ràng?",
    options: [
      { text: "Lãng phí thời gian, nên có agenda trước", type: "A" },
      { text: "Có thể ổn nếu là brainstorming", type: "B" },
      { text: "Bình thường, cuộc họp diễn ra tự nhiên", type: "C" },
      { text: "Nên hỏi mục đích trước khi tham gia", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Trong meeting online, bạn thường như thế nào?",
    options: [
      { text: "Bật camera, tham gia tích cực", type: "A" },
      { text: "Bật camera nhưng làm việc khác nếu không liên quan", type: "B" },
      { text: "Tắt camera, chỉ nghe và nói khi cần", type: "C" },
      { text: "Tùy thuộc vào tính chất cuộc họp", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bạn muốn giảm số lượng meeting bằng cách nào?",
    options: [
      { text: "Có agenda rõ ràng, meeting ngắn gọn hơn", type: "A" },
      { text: "Thay meeting bằng async communication", type: "B" },
      { text: "Giảm số người tham gia, chỉ mời người cần thiết", type: "C" },
      { text: "Meeting chỉ khi thật sự cần, còn lại chat/email", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Người họp Có cấu trúc",
    emoji: "📋",
    description: "Bạn coi trọng sự chuẩn bị và cấu trúc trong cuộc họp. Bạn thích meeting có agenda rõ ràng, đúng giờ và có kết quả cụ thể.",
    traits: ["Chuẩn bị tốt", "Có cấu trúc", "Hiệu quả", "Chuyên nghiệp"],
    strengths: ["Meeting hiệu quả", "Theo dõi action items tốt", "Đáng tin cậy"],
    weaknesses: ["Có thể cứng nhắc", "Khó chấp nhận meeting không cấu trúc"],
    tips: ["Linh hoạt hơn với meeting sáng tạo", "Cho phép thảo luận tự do đôi khi"],
  },
  B: {
    type: "B",
    title: "Người họp Đóng góp",
    emoji: "💡",
    description: "Bạn tích cực đóng góp ý kiến và thảo luận trong cuộc họp. Bạn thích meeting có tương tác và cơ hội để chia sẻ quan điểm.",
    traits: ["Tích cực", "Đóng góp", "Sáng tạo", "Tương tác"],
    strengths: ["Mang lại giá trị cho meeting", "Thúc đẩy thảo luận", "Ý tưởng phong phú"],
    weaknesses: ["Đôi khi nói quá nhiều", "Có thể làm meeting dài hơn"],
    tips: ["Lắng nghe nhiều hơn", "Biết khi nào nên im lặng"],
  },
  C: {
    type: "C",
    title: "Người họp Quan sát",
    emoji: "👀",
    description: "Bạn thích quan sát và lắng nghe trong cuộc họp hơn là nói nhiều. Bạn chỉ phát biểu khi có điều quan trọng cần nói.",
    traits: ["Quan sát", "Lắng nghe", "Suy nghĩ sâu", "Chọn lọc"],
    strengths: ["Nghe được nhiều góc nhìn", "Ý kiến có chiều sâu", "Không lãng phí thời gian"],
    weaknesses: ["Có thể bị cho là không tham gia", "Bỏ lỡ cơ hội đóng góp"],
    tips: ["Chủ động phát biểu hơn", "Chia sẻ quan sát của mình"],
  },
  D: {
    type: "D",
    title: "Người họp Hành động",
    emoji: "🎯",
    description: "Bạn tập trung vào kết quả và hành động từ cuộc họp. Bạn muốn meeting dẫn đến quyết định và action items cụ thể.",
    traits: ["Hướng kết quả", "Quyết định", "Thực tế", "Hiệu quả"],
    strengths: ["Meeting có kết quả", "Thúc đẩy hành động", "Tập trung vào trọng tâm"],
    weaknesses: ["Có thể thiếu kiên nhẫn", "Bỏ qua quá trình thảo luận"],
    tips: ["Cho phép thời gian thảo luận đủ", "Đôi khi quá trình quan trọng như kết quả"],
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
